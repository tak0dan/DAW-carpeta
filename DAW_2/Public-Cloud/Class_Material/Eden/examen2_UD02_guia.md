# Examen 2 — UD02: Diseño y configuración de redes virtuales

Fuente: `diapos/INP-UD02-Contenidos.pdf` (55 diapositivas). Examen tipo test; algunas preguntas salen de los tests de final de tema de AWS Academy (Foundations M5, Architecting M6-M7) o de exámenes de certificación AWS.

**Truco del 1r examen:** leer si pide la respuesta CORRECTA o la INCORRECTA ("selecciona la INCORRECTA" te costó 1 pregunta).

---

## 1. Redes básicas
- Red = 2+ máquinas conectadas; se divide en subredes; router/switch conecta.
- IPv4 = 32 bits (192.0.2.0); IPv6 = 128 bits. La IP identifica red + host.
- **Rangos privados (RFC 1918):** `10.0.0.0/8` (grandes), `172.16.0.0–172.31.255.255` (medianas), `192.168.0.0/16` (domésticas).
- Las IP privadas salen a Internet vía **NAT** (se traducen a pública).
- **CIDR** = bloque de direcciones (`/n`). Más grande el número → menos direcciones.

## 2. VPC
- Sección aislada lógicamente de la nube AWS, dedicada a tu cuenta.
- Pertenece a **una región**, abarca **varias AZ**. Límite: **5 VPC por región y cuenta**.
- CIDR de VPC: máx **/16** (65.536 IPs), mín **/28** (16 IPs). **No se puede cambiar** tras crearla.
- Controlas: rango IP, subredes, tablas de rutas, gateways.

## 3. Subredes
- Subconjunto del CIDR de la VPC; **no se pueden solapar**.
- **Cada subred vive en UNA sola AZ** (una AZ puede tener varias subredes).
- **No son límites de aislamiento.**
- **AWS reserva 5 IPs por subred** (ejemplo 10.0.0.0/24):
  | IP | Uso |
  |---|---|
  | .0 | Dirección de red |
  | .1 | Router de la VPC (comunicaciones internas) |
  | .2 | DNS |
  | .3 | Uso futuro |
  | .255 | Broadcast |
- Cálculo: IPs utilizables = 2^(32−n) − 5. `/24` → **251**; `/22` → 1024 totales; `/20` → 4096; `/28` → 16 totales (11 útiles).
- Pública vs privada: **pública = su tabla de rutas tiene ruta 0.0.0.0/0 → Internet Gateway**.

## 4. Tipos de IP
| IPv4 pública | IP elástica (EIP) |
|---|---|
| Dinámica, automática al lanzar instancia | Estática, asociada a la cuenta |
| Cambia si paras/arrancas la instancia | Se mantiene |
| Sin coste | Con coste mensual |

**Interfaz de red elástica (ENI):** NIC virtual; se puede desconectar y pasar a otra instancia conservando atributos. La **principal (eth0) no se puede desconectar**. Nº de ENIs depende del tipo de instancia.

## 5. Gateways y rutas
- **Internet Gateway (IGW):** escalable, redundante, alta disponibilidad. Para hacer pública una subred: crear IGW → asociarlo a la VPC → ruta `0.0.0.0/0 → igw-id` en la tabla de la subred → instancias con IP pública/elástica → SG y NACL permiten el tráfico.
- **Tablas de rutas:** cada ruta = destino + objetivo. Toda subred debe estar asociada a una. Siempre hay ruta **local** (`10.0.0.0/16 → local`). Existe tabla principal (por defecto) y personalizadas.
- **NAT Gateway:** permite que instancias de subred **privada** inicien tráfico saliente a Internet; **bloquea conexiones entrantes**. Va en una **subred pública**, requiere **IP elástica**, se cobra por hora + GB procesado. Ruta privada: `0.0.0.0/0 → nat-id`.
- **Casos de uso:** BBDD / procesamiento por lotes / backend → subred **privada**; web → pública o privada.
- **Alta disponibilidad:** desplegar en 2 AZ con balanceador de carga; si cae una zona, failover a la otra.

## 6. VPC predeterminada
- CIDR **172.31.0.0/16** (65.536 IPs).
- Crea automáticamente: IGW, tabla de rutas por defecto, **una subred pública /20 por AZ** (4096 IPs) con auto-asignación de IP pública.

## 7. Seguridad (capas)
Ruta: Internet → IGW → tabla de rutas → **NACL** → **Security Group** → instancia. Recomendado: varias capas de defensa.

| Atributo | Security Group | Network ACL |
|---|---|---|
| Nivel | Instancia / interfaz | **Subred** |
| Estado | **Con estado** (retorno automático) | **Sin estado** (retorno explícito) |
| Reglas | **Solo permitir** | Permitir **y denegar** |
| Evaluación | Todas las reglas antes de decidir | **En orden numérico**, empezando por el menor |
| Por defecto | Entrada: **denegada**; salida: **permitida** | Por defecto: permite todo; **personalizada: deniega todo** hasta añadir reglas |
| Obligatoria | — | Cada subred tiene una (si no, la predeterminada) |

- SG en cadena: web (80/443 desde 0.0.0.0/0) → app (puerto app, origen = SG web) → BBDD (3306, origen = SG app). El origen puede ser **otro grupo de seguridad**.
- Puertos: HTTP 80, HTTPS 443, SSH 22, MySQL 3306, SQL Server 1433.
- NACL: la regla `*` final deniega todo lo no coincidente.
- **Servidor bastión:** en subred pública, punto de salto SSH hacia la privada. Minimizar intrusiones; **no guardar claves privadas** (usar *agent forwarding*). SG privado permite 22 con origen = SG del bastión.

## 8. Interconexión (VPC Peering)
- Conecta 2 VPC por IP privadas; misma región, otras regiones o otras cuentas; tráfico por el núcleo de AWS, **sin gateways**, sin punto único de fallo ni cuello de botella.
- Pasos: solicitante envía solicitud → receptor **acepta** → ambos añaden **rutas** → ajustar SG → (opcional) DNS.
- Estados: `initiating-request → pending-acceptance → provisioning → active`.
- **Limitaciones:** CIDR **sin solapamiento**; **no transitivo** (A–B y B–C ≠ A–C); no se hereda el IGW del par.

## 9. Otros servicios / qué usar
| Necesidad | Solución |
|---|---|
| Subred privada → Internet | NAT Gateway / NAT instance |
| VPC ↔ VPC | VPC Peering |
| VPC ↔ red externa (on-prem) | Site-to-Site VPN, Direct Connect (+VPN), VPN CloudHub |
| VPC → servicios AWS sin salir de la red AWS | PrivateLink, Gateway Endpoint |
| Muchas VPC + redes externas | **Transit Gateway** |

Otros: Flow Logs, Traffic Mirroring, Route 53 (DNS), CloudFront (CDN), Direct Connect, Global Accelerator, Elastic Load Balancing, Client VPN.

## 10. Troubleshooting (orden de las diapositivas)
1. Instancia activa (checks de sistema + instancia superados).
2. **Security Groups** permiten protocolo/puerto.
3. **NACL** de la subred permiten el tráfico.
4. **Tabla de rutas** con destinos correctos.

---

## Test de práctica (respuestas al final)

1. Número máximo de VPC por región y cuenta por defecto: a) 1 b) 5 c) 10 d) ilimitado
2. Bloque CIDR IPv4 más grande de una VPC: a) /8 b) /16 c) /24 d) /28
3. Bloque más pequeño: a) /16 b) /24 c) /28 d) /32
4. IPs que AWS reserva por subred: a) 2 b) 3 c) 5 d) 6
5. Una subred /24 tiene disponibles: a) 256 b) 254 c) 253 d) 251
6. Una subred puede abarcar: a) varias AZ b) una sola AZ c) varias regiones d) una región
7. Una subred es **pública** cuando: a) tiene IP pública b) su tabla de rutas apunta 0.0.0.0/0 a un IGW c) tiene un NAT d) tiene una NACL abierta
8. Selecciona la **INCORRECTA** sobre los Security Groups: a) con estado b) solo reglas de permitir c) actúan a nivel de subred d) la entrada está denegada por defecto
9. Las NACL son: a) con estado b) sin estado c) solo de permitir d) a nivel de instancia
10. La NACL **predeterminada**: a) deniega todo b) permite todo entrada y salida c) solo permite SSH d) solo permite salida
11. Una NACL **personalizada** nueva sin reglas: a) permite todo b) deniega todo c) permite salida d) permite HTTP
12. Las reglas de NACL se evalúan: a) todas a la vez b) por orden numérico ascendente c) por orden descendente d) aleatorio
13. Para que una instancia privada descargue actualizaciones sin recibir conexiones entrantes: a) IGW b) NAT Gateway c) VPC Peering d) bastión
14. El NAT Gateway debe estar en: a) subred privada b) subred pública c) cualquier subred d) otra VPC
15. El NAT Gateway requiere: a) IP elástica b) VPN c) NACL específica d) Direct Connect
16. CIDR de la VPC predeterminada: a) 10.0.0.0/16 b) 172.31.0.0/16 c) 192.168.0.0/16 d) 172.16.0.0/12
17. Tamaño de las subredes de la VPC predeterminada: a) /16 b) /20 c) /24 d) /28
18. Mantiene su valor al parar/arrancar una instancia: a) IPv4 pública automática b) IP elástica c) ninguna d) ambas
19. ¿Qué IP es el DNS en 10.0.0.0/24? a) 10.0.0.1 b) 10.0.0.2 c) 10.0.0.3 d) 10.0.0.255
20. La ENI principal de una instancia: a) se puede desconectar b) no se puede desconectar c) se puede mover a otra instancia d) no existe
21. VPC A–B y B–C interconectadas. ¿A puede hablar con C? a) sí b) no, el peering no es transitivo c) sí, vía IGW d) solo en la misma región
22. ¿Qué impide crear un peering? a) regiones distintas b) cuentas distintas c) CIDR solapados d) subredes públicas
23. Para conectar muchas VPC y redes on-prem: a) Peering b) Transit Gateway c) NAT d) Bastión
24. Acceso privado a servicios AWS sin salir de la red de AWS: a) IGW b) PrivateLink / Gateway Endpoint c) NAT d) NACL
25. Servidor para acceder por SSH a la subred privada: a) NAT b) bastión c) IGW d) ENI
26. Para que el bastión no guarde claves: a) copiar la clave b) agent forwarding c) abrir 22 a todo d) usar HTTP
27. Primer paso del troubleshooting de conectividad: a) revisar NACL b) comprobar que la instancia está activa c) cambiar CIDR d) crear un peering
28. Orden de estados del peering: a) active → pending → provisioning b) initiating-request → pending-acceptance → provisioning → active c) pending → active d) provisioning → initiating → active
29. Se puede cambiar el CIDR de una VPC ya creada: a) sí b) no
30. La ruta `10.0.0.0/16 → local` existe: a) solo en la predeterminada b) en todas las tablas por defecto c) solo en públicas d) nunca

### Respuestas
1b 2b 3c 4c 5d 6b 7b 8**c** 9b 10b 11b 12b 13b 14b 15a 16b 17b 18b 19b 20b 21b 22c 23b 24b 25b 26b 27b 28b 29b 30b

(Nota Q29: en la práctica AWS permite añadir CIDR secundarios, pero según las diapositivas el rango original **no se puede cambiar**; responde "no".)

---

## 11. Actividad 2.1 — Subnetting (resuelta)

Método: bits prestados = el menor *n* con 2^n ≥ subredes pedidas; los bits de host que quedan deben dar ≥ hosts pedidos (+2 en subnetting clásico: red y broadcast).

| | Ejercicio 1 | Ejercicio 2 |
|---|---|---|
| Red original | 165.100.0.0 /16 (255.255.0.0) | 195.85.8.0 /24 (255.255.255.0) |
| Requisitos | 1000 subredes, 60 hosts | 30 subredes, 6 hosts |
| **Bits prestados** | **10** (2^10 = 1024 ≥ 1000) | **5** (2^5 = 32 ≥ 30) |
| **Nueva máscara** | **/26 = 255.255.255.192** | **/29 = 255.255.255.248** |
| **Total subredes** | **1024** | **32** |
| **Hosts por subred** | **64** (2^6) | **8** (2^3) |
| **Hosts útiles** | **62** (64 − 2) | **6** (8 − 2) |

Comprobación: ej.1 → 16 + 10 = 26 bits de red, quedan 6 de host (60 ≤ 62 ✔). Ej.2 → 24 + 5 = 29, quedan 3 de host (6 ≤ 6 ✔).
Trampa AWS: en una subred **de AWS** se reservan 5 (no 2), así que un /26 daría 59 útiles, y un /29 solo 3. La actividad usa subnetting clásico (−2).

## 12. Actividad 2.2 — VPC predeterminada (guiada, no se entrega)
- VPC por defecto: **172.31.0.0/16**; una subred **/20 pública por AZ** (en us-east-1 hay 6 AZ → 6 subredes).
- Todas tienen salida a Internet: están asociadas a la tabla por defecto con `0.0.0.0/0 → igw-…`.
- Subred 172.31.16.0/20: 4096 − 5 = **4091** IPs asignables; **sí** asigna IP pública automática.
- Tabla de rutas por defecto: `172.31.0.0/16 → local` y `0.0.0.0/0 → igw-…` (Internet Gateway).
- EC2: Amazon Linux, t3.micro, par de claves `vockey`, 8 GB gp3; tiene IP pública, IP privada y nombre DNS público.
- Comandos: `df -h` (disco), `free -h` (RAM), `ip -c a` (IP privada), `ping`, `chmod 400 labsuser.pem`, `ssh -i labsuser.pem ec2-user@IP`, `sudo dnf install httpd`, `sudo systemctl start httpd`, `curl http://localhost`.
- Conexión desde consola: **EC2 Instance Connect**.

## 13. Tareas (lo que enseñan y puede caer)

**Tarea 2.1 — VPC, bastión, NAT, SG encadenados, NACL**
- VPC `10.0.0.0/16`; pública `10.0.1.0/24` (frontend), privada `10.0.2.0/24` (backend); 1 AZ (us-east-1a).
- Asistente "VPC y más" crea VPC, subredes, tablas, IGW y NAT. NAT en la **subred pública** con **IP elástica nueva**.
- Rutas: rt-frontend `0.0.0.0/0 → igw`; rt-backend `0.0.0.0/0 → nat`; ambas con `10.0.0.0/16 → local` (**la ruta local no se puede eliminar**).
- GS-BASTION: SSH 22 solo desde el rango del centro (**nunca 0.0.0.0/0**). GS-WEB: SSH 22 + HTTP 80 con origen **GS-BASTION** (SG encadenados). Salida: todo (por defecto).
- Bastión: subred pública, IP pública **habilitada**. Web: subred privada, IP pública **deshabilitada**.
- SSH: `ssh-add` + `ssh -A ubuntu@IP-bastión` (agent forwarding) o `ssh -J` (ProxyJump). Usuario AMI Ubuntu = `ubuntu`; Amazon Linux = `ec2-user`.
- `curl -s https://checkip.amazonaws.com` desde el web → muestra la **IP elástica del NAT Gateway**.
- **Coste:** NAT Gateway 0,045 $/h + 0,045 $/GB, IPv4 pública 0,005 $/h; **no se detiene** al acabar el lab. Limpieza: terminar instancias → borrar NAT → **liberar EIP** → borrar VPC.
- **NACL (sin estado):** hay que permitir el tráfico de **respuesta** a puertos efímeros **TCP 1024-65535**. Nueva NACL = deniega todo. Reglas por número (100, 110, 120…). NACL-Privada: entrada 22 y 80 desde 10.0.1.0/24, salida 1024-65535 hacia 10.0.1.0/24. Quitar la salida 100 → el curl desde el bastión se cuelga (no vuelve la respuesta); y `apt update` falla (sin salida a Internet).
- Apache: `sudo apt install -y apache2`, `systemctl status apache2`.

**Tarea 2.2 (peering, us-east-1 ↔ us-west-2)**
- Una VPC por región (us-east-1 y us-west-2 son las únicas del Learner Lab), CIDR sin solapar, 1 subred pública + 1 privada, sin NAT.
- Peering: solicitante crea → **receptor acepta (en la otra región)** → **añadir ruta en cada tabla de rutas** hacia el CIDR de la otra VPC (destino = CIDR remoto, objetivo = `pcx-…`).
- **`ping` falla por defecto** → causa: los SG solo permiten SSH; hay que abrir **ICMP** (ping usa ICMP) en ambos SG.
- Subredes privadas: **sí** pueden hacer ping entre VPC (el peering usa IP privadas), siempre que haya ruta al peering en su tabla y SG/NACL permitan ICMP.
- Opcional: VPCEast-2 (10.100.0.0/16) ↔ VPCEast ↔ VPCWest → **VPCEast-2 hace ping a VPCEast pero NO a VPCWest** (peering no transitivo).

**Tarea 2.3 (opcional, Transit Gateway)**
- Resuelve la falta de transitividad y evita el "malla completa" de peerings (un peering por cada par).
- 3 VPC (10.1.0.0/16, 10.2.0.0/16, 10.3.0.0/16, subredes /24). Pasos: crear **Transit Gateway** → crear **attachments** a la subred de cada VPC → en cada tabla de rutas añadir ruta hacia el TGW → SG con SSH + **ICMP** → ping entre instancias de las 3 VPC.
- Entregable incluye las **asociaciones** y **rutas** de la tabla de enrutamiento del TGW.

## 14. Test de práctica 2 (respuestas al final)

31. Una NACL nueva (personalizada) bloquea el tráfico de respuesta de una conexión permitida. ¿Por qué? a) las NACL son con estado b) las NACL son **sin estado**: hay que permitir los puertos efímeros 1024-65535 c) falta un SG d) falta una ruta local
32. ¿Qué protocolo usa `ping`? a) TCP b) UDP c) ICMP d) HTTP
33. Dos instancias en VPC con peering no se hacen ping aunque hay rutas. Causa más probable: a) falta IGW b) el SG no permite ICMP c) hay que usar NAT d) el CIDR /16
34. ¿Qué IP ve un servidor en subred privada como su IP pública saliente? a) la de su instancia b) la **IP elástica del NAT Gateway** c) la del IGW d) ninguna
35. Cuál es el coste que NO se detiene al acabar la sesión del Learner Lab: a) EC2 en ejecución b) **NAT Gateway y su IP elástica** c) S3 vacío d) ninguno
36. Para acceder por SSH sin copiar la clave privada al bastión: a) `ssh -A` / agent forwarding (o `-J`) b) copiar la .pem c) abrir 22 a 0.0.0.0/0 d) usar HTTP
37. Con Transit Gateway, para conectar 3 VPC hacen falta: a) 3 peerings b) 1 TGW + 3 attachments c) 3 NAT d) 3 IGW
38. Selecciona la **INCORRECTA** sobre peering: a) no hay solapamiento de CIDR b) funciona entre regiones c) es transitivo d) requiere rutas en ambas VPC
39. Subnetting: 195.85.8.0/24 con 30 subredes y 6 hosts → máscara: a) /27 b) /28 c) /29 d) /30
40. Subnetting: 165.100.0.0/16 con 1000 subredes y 60 hosts → bits prestados: a) 6 b) 8 c) 10 d) 12

**Respuestas:** 31b 32c 33b 34b 35b 36a 37b 38**c** 39c 40c
