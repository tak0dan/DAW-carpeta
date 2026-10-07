<map version="freeplane 1.12.1">
<!--To view this file, download free mind mapping software Freeplane from https://www.freeplane.org -->
<node TEXT="arquitectura&#xa;cliente-servidor&#xa;y redes" FOLDED="false" ID="ID_628863464" CREATED="1631628088722" MODIFIED="1750076472666" STYLE="oval">
<font SIZE="12"/>
<hook NAME="MapStyle" zoom="1.1">
    <properties edgeColorConfiguration="#808080ff,#ff0000ff,#0000ffff,#00ff00ff,#ff00ffff,#00ffffff,#7c0000ff,#00007cff,#007c00ff,#7c007cff,#007c7cff,#7c7c00ff" show_icon_for_attributes="true" show_tags="UNDER_NODES" show_note_icons="true" fit_to_viewport="false" showTagCategories="false"/>
    <tags category_separator="::"/>

<map_styles>
<stylenode LOCALIZED_TEXT="styles.root_node" STYLE="oval" UNIFORM_SHAPE="true" VGAP_QUANTITY="24 pt">
<font SIZE="24"/>
<stylenode LOCALIZED_TEXT="styles.predefined" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="default" ID="ID_904150130" ICON_SIZE="12 pt" COLOR="#000000" STYLE="fork">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" DASH="" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_904150130" STARTARROW="NONE" ENDARROW="DEFAULT"/>
<font NAME="SansSerif" SIZE="10" BOLD="false" ITALIC="false"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.details"/>
<stylenode LOCALIZED_TEXT="defaultstyle.tags">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.attributes">
<font SIZE="9"/>
</stylenode>
<stylenode LOCALIZED_TEXT="defaultstyle.note" COLOR="#000000" BACKGROUND_COLOR="#ffffff" TEXT_ALIGN="LEFT"/>
<stylenode LOCALIZED_TEXT="defaultstyle.selection" BACKGROUND_COLOR="#4e85f8" BORDER_COLOR_LIKE_EDGE="false" BORDER_COLOR="#4e85f8"/>
<stylenode LOCALIZED_TEXT="defaultstyle.floating">
<edge STYLE="hide_edge"/>
<cloud COLOR="#f0f0f0" SHAPE="ROUND_RECT"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.user-defined" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="styles.topic" COLOR="#18898b" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subtopic" COLOR="#cc3300" STYLE="fork">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.subsubtopic" COLOR="#669900">
<font NAME="Liberation Sans" SIZE="10" BOLD="true"/>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.important">
<icon BUILTIN="yes"/>
</stylenode>
</stylenode>
<stylenode LOCALIZED_TEXT="styles.AutomaticLayout" POSITION="bottom_or_right" STYLE="bubble">
<stylenode LOCALIZED_TEXT="AutomaticLayout.level.root" COLOR="#000000" STYLE="oval" SHAPE_HORIZONTAL_MARGIN="10 pt" SHAPE_VERTICAL_MARGIN="10 pt">
<font SIZE="18"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,1" COLOR="#0033ff">
<font SIZE="16"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,2" COLOR="#00b439">
<font SIZE="14"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,3" COLOR="#990000">
<font SIZE="12"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,4" COLOR="#111111">
<font SIZE="10"/>
</stylenode>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,5"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,6"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,7"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,8"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,9"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,10"/>
<stylenode LOCALIZED_TEXT="AutomaticLayout.level,11"/>
</stylenode>
</stylenode>
</map_styles>
</hook>
<hook NAME="AutomaticEdgeColor" COUNTER="41" RULE="ON_BRANCH_CREATION"/>
<node TEXT="arquitecturas (modelos)" FOLDED="true" POSITION="bottom_or_right" ID="ID_1375016747" CREATED="1631728115452" MODIFIED="1749061294448">
<edge COLOR="#0000ff"/>
<font SIZE="10"/>
<node TEXT="no repartido" ID="ID_903119273" CREATED="1747128646550" MODIFIED="1747132693526">
<node TEXT="monolítico" ID="ID_770160706" CREATED="1747132694884" MODIFIED="1747132698638"/>
</node>
<node TEXT="repartido" ID="ID_1854267560" CREATED="1747128687038" MODIFIED="1747128699558">
<node TEXT="cliente(s)-servidor" ID="ID_131021842" CREATED="1747128699563" MODIFIED="1747319115856">
<node TEXT="el servidor ofrece servicios o recursos al cliente" ID="ID_722439345" CREATED="1747128712313" MODIFIED="1747734693762">
<node TEXT="cliente → servidor" ID="ID_1066338266" CREATED="1747128817653" MODIFIED="1747132788010"/>
</node>
<node TEXT="o varios clientes a un servidor" ID="ID_872789266" CREATED="1747133143745" MODIFIED="1747133151059"/>
<node ID="ID_857395513" CREATED="1747128837231" MODIFIED="1747132746808"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      también <span style="font-style: italic;">multitier </span>(varios saltos)
    </p>
  </body>
</html>
</richcontent>
<node TEXT="cliente → servidor/cliente → ... → servidor" ID="ID_1242729750" CREATED="1747128844106" MODIFIED="1747132815756"/>
</node>
<node TEXT="¿quién inicia comunicación?" ID="ID_1727210770" CREATED="1747131394521" MODIFIED="1747131404868">
<node ID="ID_1538885995" CREATED="1747131404872" MODIFIED="1747131509148"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      habitualmente: cliente (<span style="font-style: italic;">pull</span>, &quot;tirar&quot;)
    </p>
  </body>
</html>
</richcontent>
<node TEXT="servidor escucha&#xa;(abierto y expuesto)" ID="ID_1977774584" CREATED="1747317998271" MODIFIED="1747318018914"/>
</node>
<node ID="ID_1691403681" CREATED="1747131436740" MODIFIED="1747131501283"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      menos habitualmente: servidor (<span style="font-style: italic;">push</span>, &quot;empujar&quot;)
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
<node TEXT="¿reparto &quot;faena&quot; cliente y servidor?" ID="ID_1434045068" CREATED="1747129062669" MODIFIED="1747129142617">
<node TEXT="más o menos desequilibrado, según caso concreto" ID="ID_1496837109" CREATED="1747129077369" MODIFIED="1747129150172"/>
</node>
<node TEXT="ambigüedad &quot;servidor&quot;" ID="ID_364873616" CREATED="1631729597038" MODIFIED="1747133661965">
<node TEXT="máquina física/virtual entera, y su SO" ID="ID_1148894615" CREATED="1631729610009" MODIFIED="1680261482922"/>
<node TEXT="programa dentro de un SO que ofrece un servicio concreto" ID="ID_1535053623" CREATED="1631729885606" MODIFIED="1747128562968"/>
<node TEXT="rol general más abstracto" ID="ID_459513467" CREATED="1747133678874" MODIFIED="1747133686513"/>
</node>
</node>
<node TEXT="peer to peer (P2P)" ID="ID_1563984413" CREATED="1747128876787" MODIFIED="1747319127411">
<node TEXT="&quot;entre pares&quot;, entre iguales" ID="ID_842737697" CREATED="1747131521385" MODIFIED="1747131534155"/>
<node TEXT="todos son clientes y servidores de todos" ID="ID_601980354" CREATED="1747128897252" MODIFIED="1747128946042"/>
<node TEXT="sin punto central de fallo" ID="ID_387883048" CREATED="1747129112138" MODIFIED="1747129114429"/>
</node>
</node>
</node>
<node TEXT="interfaz cuando repartido:&#xa;¿red física (distintos equipos)?" FOLDED="true" POSITION="bottom_or_right" ID="ID_1602287053" CREATED="1631631471299" MODIFIED="1747734016662">
<edge COLOR="#0000ff"/>
<node TEXT="no" ID="ID_1202299518" CREATED="1747129310011" MODIFIED="1747129313993">
<node TEXT="equipo local&#xa;(+perifericos)" ID="ID_1909668507" CREATED="1680260636945" MODIFIED="1680260645647">
<node TEXT="interna sin red" ID="ID_743051114" CREATED="1631631558331" MODIFIED="1747132551692">
<node TEXT="IPC (Inter Process Comunication)" ID="ID_1026150967" CREATED="1747129197362" MODIFIED="1747129214732"/>
</node>
<node TEXT="por &quot;red localhost&quot;&#xa;(127.0.0.1)" ID="ID_1586125229" CREATED="1680260716242" MODIFIED="1747132721462">
<node TEXT="a no confundir con red local" ID="ID_776161554" CREATED="1747132527290" MODIFIED="1747132541068"/>
</node>
</node>
</node>
<node TEXT="sí" ID="ID_594254257" CREATED="1747129233040" MODIFIED="1747132558269">
<node TEXT="usando protocolos&#xa;y dispositivos intermedios" ID="ID_1079073221" CREATED="1631730036086" MODIFIED="1747306888276"/>
<node TEXT="¿alcance?" ID="ID_278121387" CREATED="1747681227160" MODIFIED="1747681249044">
<node TEXT="red local (LAN)" ID="ID_325356580" CREATED="1631631730227" MODIFIED="1747378180134">
<node TEXT="Cableada" ID="ID_91096741" CREATED="1631632181859" MODIFIED="1747132571894">
<node TEXT="ethernet/rj45&#xa;(cable de red)" ID="ID_1879842946" CREATED="1631632307995" MODIFIED="1631632326831"/>
<node TEXT="Fibra óptica local" ID="ID_1195197007" CREATED="1747132627528" MODIFIED="1747132638851"/>
</node>
<node TEXT="Inalámbrica" ID="ID_209263315" CREATED="1631632188291" MODIFIED="1747132575262">
<node TEXT="Wi-Fi&#xa;(WLAN)" ID="ID_1436393221" CREATED="1631632335819" MODIFIED="1631632349049"/>
</node>
<node TEXT="Puede que la controle" ID="ID_94053137" CREATED="1747378314263" MODIFIED="1747378328620"/>
</node>
<node TEXT="acceso a Internet&#xa;(WAN)" ID="ID_726952358" CREATED="1631631757164" MODIFIED="1747378238001">
<node TEXT="Cableada&#xa;(&quot;Internet fijo&quot;)" ID="ID_333130684" CREATED="1631632394635" MODIFIED="1747132599643">
<node TEXT="ADSL" ID="ID_396418871" CREATED="1631632412355" MODIFIED="1631632476701"/>
<node TEXT="Fibra óptica&#xa;(de acceso a Internet)" ID="ID_672206730" CREATED="1631632477027" MODIFIED="1747133229951"/>
</node>
<node TEXT="Inalámbrica" ID="ID_1671485078" CREATED="1631632400203" MODIFIED="1747132612483">
<node TEXT="&quot;Datos móviles&quot;&#xa;(2G, 3G, 4G, 5G,...)" ID="ID_1063292719" CREATED="1631632521211" MODIFIED="1747132617494"/>
<node TEXT="Satélite" ID="ID_1256527825" CREATED="1631632543115" MODIFIED="1631632550213"/>
</node>
<node TEXT="No la controlo, la contrato" ID="ID_422280653" CREATED="1747378330398" MODIFIED="1747378355959"/>
</node>
</node>
<node TEXT="inalámbrico vs alámbrico" ID="ID_606627045" CREATED="1747549843581" MODIFIED="1747549941382">
<node TEXT="pros" ID="ID_1206455868" CREATED="1747550061127" MODIFIED="1747550101408">
<node TEXT="barato" ID="ID_950970971" CREATED="1747549855692" MODIFIED="1747550176570"/>
<node TEXT="flexible" ID="ID_1245835806" CREATED="1747549960330" MODIFIED="1747550179930"/>
</node>
<node TEXT="cons" ID="ID_1242953782" CREATED="1747550075557" MODIFIED="1747550095172">
<node TEXT="robusto más difícil" ID="ID_78298504" CREATED="1747549881355" MODIFIED="1747550167177"/>
<node TEXT="velocidad más difícil" ID="ID_373051710" CREATED="1747549982352" MODIFIED="1747550161237"/>
<node TEXT="ataque más fácil" ID="ID_1886827622" CREATED="1747549910789" MODIFIED="1747550191007"/>
</node>
</node>
</node>
</node>
<node TEXT="tipos de servicio / protocolos&#xa;(nivel aplicación)" FOLDED="true" POSITION="bottom_or_right" ID="ID_645710620" CREATED="1631729289508" MODIFIED="1747734016673">
<edge COLOR="#00ff00"/>
<node TEXT="Web (páginas, aplicaciones)" ID="ID_1613435427" CREATED="1631729310448" MODIFIED="1747133448097">
<node TEXT="HTTP(S)" ID="ID_1006774624" CREATED="1680260844315" MODIFIED="1680261090531"/>
<node TEXT="popularidad Web/HTTP(S)" ID="ID_922044571" CREATED="1680262149348" MODIFIED="1747306249901">
<node TEXT="ha incorporado (canibalizado)&#xa;muchos casos" ID="ID_1277580204" CREATED="1680262196861" MODIFIED="1747133622528">
<node TEXT="metiendo en página web&#xa;(comunica HTML+CSS+JS)" ID="ID_805394878" CREATED="1680262271198" MODIFIED="1747133370044"/>
<node TEXT="u ofreciendo API REST vía HTTP&#xa;(comunica habitualmente JSON)" ID="ID_1397056866" CREATED="1680262304599" MODIFIED="1747133364859"/>
<node TEXT="o usando HTTP(S) como &quot;túnel&quot;&#xa;para otros protocolos" ID="ID_1595788403" CREATED="1680262289887" MODIFIED="1749061400376">
<node TEXT="porque son sus puertos los que&#xa;suelen estar abiertos en firewalls" ID="ID_1669411677" CREATED="1680262226621" MODIFIED="1749061415862"/>
</node>
</node>
</node>
</node>
<node TEXT="carpetas/ficheros ofrecidos en WAN" ID="ID_1342265153" CREATED="1631797212698" MODIFIED="1747133460628">
<node TEXT="(S)FTP, ..." ID="ID_834620634" CREATED="1680261016748" MODIFIED="1680261132051"/>
</node>
<node TEXT="carpetas/impresoras compartidas&#xa;en LAN (o en VPN)" ID="ID_1568363303" CREATED="1631729404309" MODIFIED="1747133465461">
<node TEXT="SMB/CIFS, NFS, .." ID="ID_390550881" CREATED="1680260854211" MODIFIED="1747133603328"/>
</node>
<node TEXT="terminal" ID="ID_1033008505" CREATED="1680261107734" MODIFIED="1680261112859">
<node TEXT="telnet, SSH, ..." ID="ID_1706744870" CREATED="1680261120325" MODIFIED="1680261128987"/>
</node>
<node TEXT="mensajería (email, IM, ...)" ID="ID_139837770" CREATED="1631729421776" MODIFIED="1747133553977">
<node TEXT="SMTP/POP3, XMPP, ..." ID="ID_1491783947" CREATED="1680261649841" MODIFIED="1747133522064"/>
</node>
<node TEXT="streaming" ID="ID_1427326130" CREATED="1747133525466" MODIFIED="1747133529057">
<node TEXT="RTSP, ...." ID="ID_252702122" CREATED="1747133529418" MODIFIED="1747133536299"/>
</node>
<node TEXT="remote desktop" ID="ID_1992464184" CREATED="1747133579021" MODIFIED="1747133585485">
<node TEXT="RDP, ..." ID="ID_1074567335" CREATED="1747133586331" MODIFIED="1747133591718"/>
</node>
<node TEXT="otros: videojuegos, IoT, DNS, DHCP, ..." ID="ID_1139630079" CREATED="1631729505210" MODIFIED="1747731598850"/>
</node>
<node TEXT="ver doc. de ejemplos de comunic. entre extremos (previo):&#xa;e2e-examples-prev" POSITION="bottom_or_right" ID="ID_1225434962" CREATED="1747681725803" MODIFIED="1747734368607">
<edge COLOR="#ff00ff"/>
</node>
<node TEXT="ver esquemas pila TCP/IP:&#xa;pila-tcp-ip-protocolos&#xa;pila-tcp-ip-encapsulacion" FOLDED="true" POSITION="bottom_or_right" ID="ID_467409772" CREATED="1631730218254" MODIFIED="1747928157350">
<edge COLOR="#00ffff"/>
<node TEXT="pila TCP/IP" ID="ID_265016681" CREATED="1747986804906" MODIFIED="1747986810368">
<node TEXT="nivel aplicación (muchos)" ID="ID_629613254" CREATED="1747306845208" MODIFIED="1747734284991"/>
<node TEXT="nivel transporte (TCP, UDP, ...)" ID="ID_3138065" CREATED="1747306841096" MODIFIED="1747734300861"/>
<node TEXT="nivel red (IP)" ID="ID_1450407566" CREATED="1747306835889" MODIFIED="1747734306470"/>
<node TEXT="nivel físico (muchos)" ID="ID_1125169957" CREATED="1747306829708" MODIFIED="1747734314535"/>
</node>
<node TEXT="protocolos de comunic.,&#xa;vs. formatos de fichero" ID="ID_382030994" CREATED="1747986825384" MODIFIED="1747988931624">
<node TEXT="distinto" ID="ID_1980871935" CREATED="1747988890910" MODIFIED="1747988894804">
<node TEXT="solo transmitir,&#xa;vs. almacenar (pero a veces también transmitir)" ID="ID_1241900440" CREATED="1747986836435" MODIFIED="1747988993335"/>
</node>
<node TEXT="parecido" ID="ID_1962746603" CREATED="1747987022520" MODIFIED="1747988904507">
<node TEXT="convenios para significado de bits" ID="ID_1323454462" CREATED="1747986927635" MODIFIED="1747987558570"/>
<node TEXT="datos contenidos de &quot;arriba&quot;, metadatos" ID="ID_849647856" CREATED="1747987197718" MODIFIED="1747987232459"/>
<node TEXT="o texto" ID="ID_737211650" CREATED="1747986982842" MODIFIED="1747987119304">
<node TEXT="ventajas en inconvientes" ID="ID_844042081" CREATED="1747987060169" MODIFIED="1747987066593"/>
</node>
<node TEXT="o binario" ID="ID_1187059829" CREATED="1747987120022" MODIFIED="1747987123328">
<node TEXT="comprimido o no" ID="ID_1030666550" CREATED="1747987123789" MODIFIED="1747987134804"/>
<node TEXT="cifrado o no" ID="ID_1417420667" CREATED="1747987135265" MODIFIED="1747987137670"/>
</node>
<node TEXT="especificación / uso" ID="ID_123129062" CREATED="1747988567704" MODIFIED="1747988572860">
<node TEXT="pública vs cerrada" ID="ID_1012454745" CREATED="1747987566557" MODIFIED="1747988577274"/>
<node TEXT="gratuita vs de pago" ID="ID_1238229695" CREATED="1747988291010" MODIFIED="1747988581531"/>
<node TEXT="estándar de facto vs estándar por ley&#xa;vs solo estandarizado vs particular" ID="ID_1595617871" CREATED="1747987638980" MODIFIED="1747988269808"/>
</node>
</node>
</node>
</node>
<node TEXT="dispositivos físicos&#xa;de red" FOLDED="true" POSITION="bottom_or_right" ID="ID_1211634941" CREATED="1747593899256" MODIFIED="1747734016685">
<edge COLOR="#7c0000"/>
<node TEXT="según nivel de TCP/IP&#xa;al que llega" ID="ID_128031671" CREATED="1747679726778" MODIFIED="1747679766433">
<node TEXT="nivel superior" ID="ID_173505522" CREATED="1747679418448" MODIFIED="1747679423555">
<node TEXT="host (equipo terminal)" ID="ID_1688187623" CREATED="1747679536801" MODIFIED="1747679802686">
<node TEXT="ordenador o móvil (cliente)" ID="ID_1796606206" CREATED="1747679545491" MODIFIED="1747679699850"/>
<node TEXT="servidor" ID="ID_852003172" CREATED="1747679552041" MODIFIED="1747679702560"/>
</node>
<node TEXT="intermediario" ID="ID_1437463439" CREATED="1747679516901" MODIFIED="1747679521750">
<node TEXT="servidor proxy / proxy inverso" ID="ID_783394271" CREATED="1747679423557" MODIFIED="1747679712598"/>
<node TEXT="gateway (término general OSI)" ID="ID_1796762942" CREATED="1747679432424" MODIFIED="1747679719701"/>
</node>
</node>
<node TEXT="nivel red" ID="ID_1394262799" CREATED="1747679356650" MODIFIED="1747679362435">
<node TEXT="router" ID="ID_163770995" CREATED="1747679362438" MODIFIED="1747679368724">
<node TEXT="(IP) default gateway" ID="ID_964557992" CREATED="1748009883768" MODIFIED="1748009891451"/>
</node>
</node>
<node TEXT="nivel físico" ID="ID_1002858364" CREATED="1747679309724" MODIFIED="1747679317299">
<node TEXT="switch, cableado" ID="ID_513572994" CREATED="1747679317303" MODIFIED="1747679597371"/>
<node TEXT="AP (Wireless Access Point), inalámbrico" ID="ID_630329316" CREATED="1747679322853" MODIFIED="1747679589442"/>
</node>
</node>
</node>
<node TEXT="ver doc.:&#xa;dir-ip-y-otros" FOLDED="true" POSITION="bottom_or_right" ID="ID_518777240" CREATED="1747679952410" MODIFIED="1747734387547">
<edge COLOR="#00007c"/>
<node TEXT="direcciones físicas/MAC" ID="ID_1183097476" CREATED="1747679959459" MODIFIED="1748503074488">
<node TEXT="48b/6B" ID="ID_846139147" CREATED="1748502882913" MODIFIED="1748503187100">
<node TEXT="repr. hexa" ID="ID_219607005" CREATED="1748503188029" MODIFIED="1748503342982">
<node TEXT="6B&apos;s hexa separados &quot;:&quot;" ID="ID_1415220935" CREATED="1748503343681" MODIFIED="1748503345503"/>
<node TEXT="ej.: 3a:f4:97:aa:d5:72" ID="ID_551631792" CREATED="1748502901787" MODIFIED="1748502980994"/>
</node>
</node>
<node TEXT="broadcast físico" ID="ID_1133195716" CREATED="1748503000558" MODIFIED="1748510869542">
<node TEXT="ff:ff:ff:ff:ff:ff" ID="ID_1997674018" CREATED="1748510870019" MODIFIED="1748510871178"/>
</node>
<node TEXT="protocolo ARP" ID="ID_844260571" CREATED="1748503029949" MODIFIED="1748503035574">
<node TEXT="por broadcast nivel físico: ¿quién tiene esta dir. IP?" ID="ID_1945109261" CREATED="1748503035577" MODIFIED="1748510847428"/>
</node>
<node TEXT="son software, cambiables" ID="ID_769183587" CREATED="1748503063802" MODIFIED="1748503090651">
<node TEXT="implicaciones seguridad" ID="ID_721767871" CREATED="1748503117142" MODIFIED="1748503127377"/>
</node>
</node>
<node TEXT="direcciones IP" ID="ID_442163286" CREATED="1747679973772" MODIFIED="1747679979560">
<node TEXT="IPv4" ID="ID_1106008706" CREATED="1747679979563" MODIFIED="1748503147564">
<node TEXT="32b/4B" ID="ID_483245716" CREATED="1748503147566" MODIFIED="1748503212795">
<node TEXT=" repr. &quot;dot notation&quot;" ID="ID_561290552" CREATED="1748503212798" MODIFIED="1748503307761">
<node TEXT="4B&apos;s decimal 0-255 separados &quot;.&quot;" ID="ID_1643892044" CREATED="1748503308505" MODIFIED="1748503316670"/>
<node TEXT="ej.: 27.138.0.239" ID="ID_673567767" CREATED="1748503351331" MODIFIED="1748503391613"/>
</node>
<node TEXT="agotamiento (estirado)" ID="ID_1785652002" CREATED="1748504714940" MODIFIED="1748504751254"/>
</node>
</node>
<node TEXT="IPv6" ID="ID_111396509" CREATED="1747679979563" MODIFIED="1748503430077">
<node TEXT="128b/16B" ID="ID_1455177195" CREATED="1748503147566" MODIFIED="1748503451986">
<node TEXT=" repr. hexa" ID="ID_624092863" CREATED="1748503212798" MODIFIED="1748503458099">
<node TEXT="8 parejas B&apos;s hexa separadas &quot;:&quot;" ID="ID_595424784" CREATED="1748503308505" MODIFIED="1748503480279"/>
<node TEXT="ej.: fe80:cd00:0000:0cde:1257:0000:211e:729c" ID="ID_939003683" CREATED="1748503351331" MODIFIED="1748503657607"/>
<node TEXT="muy abreviable" ID="ID_933232677" CREATED="1748503661141" MODIFIED="1748503665793"/>
</node>
<node TEXT="no compatible atrás (freno)" ID="ID_904874637" CREATED="1748504721804" MODIFIED="1748504738501"/>
</node>
</node>
<node TEXT="estructura" ID="ID_916764011" CREATED="1747679983735" MODIFIED="1747680084532">
<node TEXT="prefijo" ID="ID_982211325" CREATED="1748503726277" MODIFIED="1748503731676">
<node TEXT="indica id. de red" ID="ID_1626188877" CREATED="1748503713674" MODIFIED="1748503851820"/>
</node>
<node TEXT="sufijo" ID="ID_895469016" CREATED="1747680096993" MODIFIED="1748503751394">
<node TEXT="en esa red, indica id. de equipo / host" ID="ID_257485536" CREATED="1748503752287" MODIFIED="1748503858328">
<node TEXT=" (ambigüedad palabra &quot;host&quot;)" ID="ID_1581190215" CREATED="1748503816556" MODIFIED="1748503823524"/>
</node>
</node>
<node TEXT="longitud prefijo" ID="ID_1147104697" CREATED="1747680108858" MODIFIED="1747680113882">
<node TEXT="combinatorias nº redes y nº equipos" ID="ID_708204577" CREATED="1747680173151" MODIFIED="1748503946467"/>
<node TEXT="no fija: a explicitar/coordinar" ID="ID_1109085487" CREATED="1748503907634" MODIFIED="1748503932679">
<node TEXT="notación &quot;/longitud_bits&quot;" ID="ID_1373354645" CREATED="1748503997287" MODIFIED="1748504159038">
<node ID="ID_1999482955" CREATED="1748504013944" MODIFIED="1748504066317"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      ej.: <span style="font-weight: bold;">192.168.1.</span>33<span style="font-weight: bold;">/24</span>
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
<node TEXT="notación máscara&#xa;(bits red a 1, bits host a 0)" ID="ID_1873592738" CREATED="1748504081755" MODIFIED="1748504505461">
<node ID="ID_401457548" CREATED="1748504096638" MODIFIED="1748504187884"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      ej.: <span style="font-weight: bold;">192.168.1.</span>33
    </p>
    <p>
      con máscara
    </p>
    <p>
      <span style="font-weight: bold;">255.255.255.</span>0
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
</node>
</node>
<node TEXT="2 dir. reservadas en cada red" ID="ID_1651136024" CREATED="1748504237287" MODIFIED="1748504248794">
<node TEXT="dir. de red" ID="ID_1614762266" CREATED="1747680138394" MODIFIED="1748440634393">
<node TEXT="bits host a 0" ID="ID_205413759" CREATED="1748504271786" MODIFIED="1748504493490">
<node ID="ID_797874977" CREATED="1748504354570" MODIFIED="1748504370280"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      ej.: 192.168.1.<span style="font-weight: bold;">0</span>/24
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="dir. de broadcast&#xa;(nivel IP)" ID="ID_497383186" CREATED="1747680208904" MODIFIED="1748504567160">
<node TEXT="bits host a1" ID="ID_469704308" CREATED="1748504384009" MODIFIED="1748504533486">
<node ID="ID_910490245" CREATED="1748504535008" MODIFIED="1748504548268"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      ej.: 192.168.1.<span style="font-weight: bold;">255</span>/24
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
</node>
<node TEXT="subnetting" ID="ID_1535791068" CREATED="1747680224679" MODIFIED="1747680230700">
<node TEXT="alargar prefijo red para subdividir 1 red en varias" ID="ID_1566172418" CREATED="1748504590071" MODIFIED="1748504605002"/>
</node>
<node TEXT="rangos dir. IPv4" ID="ID_979661228" CREATED="1748440592438" MODIFIED="1748505404660">
<node TEXT="públicas por omisión&#xa;(únicas mundiales)" ID="ID_1832544906" CREATED="1747680260462" MODIFIED="1748504686291">
<node TEXT="tabla enrutamiento" ID="ID_444530633" CREATED="1747680267302" MODIFIED="1748504643326">
<node TEXT="por prefijos" ID="ID_1719451971" CREATED="1748504624112" MODIFIED="1748504627205"/>
</node>
<node TEXT="default (IP) gateway" ID="ID_25283136" CREATED="1747680271383" MODIFIED="1748504633847"/>
</node>
<node TEXT="privadas&#xa;(subnetizables)" ID="ID_398826464" CREATED="1747680276294" MODIFIED="1748504902561">
<node TEXT="3 rangos priv. &quot;tradicionales&quot;" ID="ID_1708683596" CREATED="1747680278480" MODIFIED="1748506074175">
<node ID="ID_1931632634" CREATED="1748504796110" MODIFIED="1748505332166"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <span style="font-weight: bold;">10.</span>0.0.0<span style="font-weight: bold;">/8</span>
    </p>
  </body>
</html>
</richcontent>
</node>
<node ID="ID_1369809936" CREATED="1748504817525" MODIFIED="1748505329081"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <span style="font-weight: bold;">192.168.</span>0.0<span style="font-weight: bold;">/16</span>
    </p>
  </body>
</html>
</richcontent>
</node>
<node ID="ID_1610895136" CREATED="1748504827371" MODIFIED="1748505326110"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <span style="font-weight: bold;">172.16</span>.0.0<span style="font-weight: bold;">/12</span>
    </p>
  </body>
</html>
</richcontent>
<node ID="ID_694342803" CREATED="1748504925012" MODIFIED="1748504989072"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      dir. máx.: <span style="font-weight: bold;">172.31</span>.255.255
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="1 rango priv. CGNAT" ID="ID_269525523" CREATED="1747680298033" MODIFIED="1748506078773">
<node ID="ID_1668379261" CREATED="1748505240525" MODIFIED="1748505321689"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <span style="font-weight: bold;">100.64</span>.0.0<span style="font-weight: bold;">/10</span>
    </p>
  </body>
</html>
</richcontent>
<node ID="ID_1757518004" CREATED="1748505335628" MODIFIED="1748505368017"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      dir. máx.: <span style="font-weight: bold;">100.127</span>.255.255
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
<node TEXT="router NAT" ID="ID_1898429305" CREATED="1748505380292" MODIFIED="1748505385179">
<node TEXT="traducción/mapeo" ID="ID_1355782088" CREATED="1748505629163" MODIFIED="1748505751998">
<node TEXT="dir. interna+puerto1 ↔ dir. externa+puerto2" ID="ID_1832156809" CREATED="1748505752924" MODIFIED="1748505785310"/>
</node>
<node TEXT="inicio del interior abierto" ID="ID_1885024899" CREATED="1748505418877" MODIFIED="1748505507847">
<node TEXT="al salir, cachea mapeo (para respuesta)" ID="ID_918883779" CREATED="1748505428075" MODIFIED="1748505808811"/>
</node>
<node TEXT="inicio del exterior cerrado&#xa;(protección colateral)" ID="ID_307686197" CREATED="1748505508466" MODIFIED="1748505890809">
<node TEXT="salvo si configuras mapeo estático al interior&#xa;(&quot;apertura puerto&quot;)" ID="ID_1554182383" CREATED="1748505514314" MODIFIED="1748505844680"/>
</node>
</node>
</node>
<node TEXT="loopback (&quot;localhost&quot;)" ID="ID_1476388967" CREATED="1747680302886" MODIFIED="1748505957682">
<node ID="ID_941343741" CREATED="1748505931292" MODIFIED="1748505952333"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <span style="font-weight: bold;">127</span>.0.0.0<span style="font-weight: bold;">/8</span>
    </p>
  </body>
</html>
</richcontent>
<node ID="ID_1830674062" CREATED="1748505961451" MODIFIED="1748505976872"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      típicamente: <span style="font-weight: bold;">127.0.0.1</span>
    </p>
  </body>
</html>
</richcontent>
</node>
</node>
</node>
</node>
</node>
<node TEXT="hostnames y DNS" ID="ID_379628359" CREATED="1747680344668" MODIFIED="1747680363770">
<node TEXT="1 hostname ↔ 1 dir. IP" ID="ID_970987507" CREATED="1748506144440" MODIFIED="1748506215589">
<node TEXT="human friendly" ID="ID_1692958142" CREATED="1748506131602" MODIFIED="1748506144437"/>
<node TEXT="pero menos robusto" ID="ID_604248295" CREATED="1748507106159" MODIFIED="1748507143548"/>
</node>
<node TEXT="dominio" ID="ID_778804460" CREATED="1748506240445" MODIFIED="1748506243555">
<node TEXT="conjunto (jerárquico) de hostnames&#xa;con administración relacionada" ID="ID_624258278" CREATED="1748506243558" MODIFIED="1748507030563"/>
<node TEXT="dirs. IP en posibles redes IP distintas" ID="ID_775753427" CREATED="1748506259172" MODIFIED="1748507059767"/>
</node>
<node TEXT="3 lugares posibles de mapeo" ID="ID_391888877" CREATED="1748506305714" MODIFIED="1748506324066">
<node TEXT="host" ID="ID_967488578" CREATED="1748506325145" MODIFIED="1748506331686">
<node TEXT="fich. /etc/hosts" ID="ID_1203576220" CREATED="1748506331688" MODIFIED="1748513178867"/>
</node>
<node TEXT="LAN/Intranet" ID="ID_1949745575" CREATED="1748506339518" MODIFIED="1748506345386">
<node TEXT="dominios Windows" ID="ID_1153337881" CREATED="1748506370786" MODIFIED="1748506422208"/>
<node TEXT="&quot;dominios tipo-Unix&quot;" ID="ID_1357254593" CREATED="1748506399364" MODIFIED="1748506418017"/>
</node>
<node TEXT="Internet (mundial)" ID="ID_1577599074" CREATED="1748506348486" MODIFIED="1748506478698">
<node TEXT="DNS" ID="ID_1540365198" CREATED="1748506354884" MODIFIED="1748506359838"/>
</node>
</node>
<node TEXT="DNS" ID="ID_1060993639" CREATED="1748506460942" MODIFIED="1748506485726">
<node TEXT="cliente/servidor" ID="ID_965807047" CREATED="1748506492606" MODIFIED="1748506505835">
<node TEXT="consulta BD mundial distribuida jerárquicamente" ID="ID_323037200" CREATED="1748506552639" MODIFIED="1748506884840">
<node TEXT="hostname ↔ dir. IP pública" ID="ID_1182461068" CREATED="1748506741834" MODIFIED="1748506755356"/>
</node>
<node TEXT="configurar en cliente&#xa;la dir. IP de servidor DNS" ID="ID_1984914217" CREATED="1748506781894" MODIFIED="1748506868622">
<node TEXT="ej. 8.8.8.8 (público Google)" ID="ID_1994871092" CREATED="1748506831629" MODIFIED="1748506841109"/>
<node TEXT="ej. 1.1.1.1 (público Cloudflare)" ID="ID_866863256" CREATED="1748506842040" MODIFIED="1748506851674"/>
</node>
</node>
<node TEXT="estructura nombres jerárquica" ID="ID_1057727826" CREATED="1748506642879" MODIFIED="1748506662394">
<node TEXT="derecha a izquierda, sep. por &quot;.&quot;" ID="ID_691405219" CREATED="1748506663125" MODIFIED="1748506676293"/>
<node TEXT="TLD" ID="ID_1048583073" CREATED="1748506679901" MODIFIED="1748506684747">
<node TEXT=".com, .org, .es, ..." ID="ID_879289665" CREATED="1748506684749" MODIFIED="1748506692509"/>
</node>
<node TEXT="registro jerárquico" ID="ID_290059056" CREATED="1748506485729" MODIFIED="1748506548750">
<node TEXT="supradominio autoriza a subdominio" ID="ID_759024200" CREATED="1748506911939" MODIFIED="1748506935088"/>
</node>
</node>
</node>
</node>
<node TEXT="DHCP" ID="ID_1664636356" CREATED="1747680364550" MODIFIED="1747680378022">
<node TEXT="obtener dir. IP dinámica (autom.)" ID="ID_1629447088" CREATED="1748507206691" MODIFIED="1748507242228">
<node TEXT="y más (long. prefijo red, default gateway, serv. DNS, ...)" ID="ID_1397380458" CREATED="1748507396366" MODIFIED="1748507470193"/>
</node>
<node TEXT="cliente/servidor" ID="ID_1496511624" CREATED="1748507187807" MODIFIED="1748507200373">
<node TEXT="broadcast físico al primer servidor que responda" ID="ID_167248580" CREATED="1748507260179" MODIFIED="1748507311637"/>
</node>
<node TEXT="facilidad de gestión y flexibilidad" ID="ID_826441317" CREATED="1748507328819" MODIFIED="1748507354589">
<node TEXT="pero servidores mejor en dir. IP estática" ID="ID_1438858673" CREATED="1748507355012" MODIFIED="1748507378363"/>
</node>
</node>
<node TEXT="diagnóstico de red" ID="ID_570316724" CREATED="1747680400839" MODIFIED="1747680405132">
<node TEXT="por GUI/navegador o por comandos" ID="ID_461455842" CREATED="1747680407803" MODIFIED="1748507713262"/>
<node TEXT="chequear configuración" ID="ID_208411562" CREATED="1747680405136" MODIFIED="1747680484551">
<node TEXT="ifconfig -a" ID="ID_1233171328" CREATED="1748507504185" MODIFIED="1748507517696"/>
<node TEXT="ip a" ID="ID_118352176" CREATED="1748507518447" MODIFIED="1748507525062"/>
<node TEXT="ip r" ID="ID_221197408" CREATED="1748507525503" MODIFIED="1748507527097"/>
<node TEXT="ipconfig /all" ID="ID_391458410" CREATED="1748507527689" MODIFIED="1748507535720">
<node TEXT="Windows" ID="ID_647357762" CREATED="1748507536168" MODIFIED="1748507540360"/>
</node>
</node>
<node TEXT="chequear conectividad" ID="ID_1156200596" CREATED="1747680485148" MODIFIED="1747680493564">
<node TEXT="ping" FOLDED="true" ID="ID_670908167" CREATED="1748507547404" MODIFIED="1748507556470">
<node TEXT="nivel IP" ID="ID_1527265817" CREATED="1748507573328" MODIFIED="1748507578748"/>
</node>
<node TEXT="telnet" FOLDED="true" ID="ID_1513556092" CREATED="1748507557200" MODIFIED="1748507562694">
<node TEXT="nivel TCP" ID="ID_513557220" CREATED="1748507580561" MODIFIED="1748507583683"/>
</node>
</node>
<node TEXT="¿cuál es mi dir. IP pública (vs. privada)?" ID="ID_1062018706" CREATED="1748440748477" MODIFIED="1748513824456">
<node TEXT="https://ip.me" ID="ID_1097855459" CREATED="1748507678271" MODIFIED="1748507685647"/>
<node TEXT="curl ip.me" ID="ID_1210133201" CREATED="1748507643824" MODIFIED="1748507654927"/>
</node>
</node>
<node TEXT="otros" ID="ID_1912598277" CREATED="1747680601388" MODIFIED="1747680603231">
<node TEXT="firewall" ID="ID_1405106614" CREATED="1747680302886" MODIFIED="1747680620158">
<node TEXT="controlar/monitorizar comunicaciones" FOLDED="true" ID="ID_1902949739" CREATED="1748507729059" MODIFIED="1748507758958">
<node TEXT="en router" ID="ID_461837837" CREATED="1748507760382" MODIFIED="1748507766940"/>
<node TEXT="en host terminal (por software)" ID="ID_1347978991" CREATED="1748507767445" MODIFIED="1748507774195"/>
</node>
</node>
<node TEXT="VPN" ID="ID_15689273" CREATED="1747680621007" MODIFIED="1747680622728">
<node TEXT="equipos en posibles redes físicas distintas se ven como en misma red, confidencialmente" ID="ID_900674319" CREATED="1748507778003" MODIFIED="1748507822650"/>
</node>
<node TEXT="VLAN" ID="ID_622676179" CREATED="1747680623461" MODIFIED="1747680624928">
<node TEXT="compartir switches y cables físicos entre distintas redes a nivel físico separadas" ID="ID_885327265" CREATED="1748507830533" MODIFIED="1748507875310"/>
</node>
</node>
</node>
<node TEXT="ver doc. de ejemplos de comunic. entre extremos (detalle):&#xa;e2e-examples" POSITION="bottom_or_right" ID="ID_212431051" CREATED="1747587017265" MODIFIED="1747735537065">
<edge COLOR="#007c00"/>
</node>
<node TEXT="cliente-servidor web" FOLDED="true" POSITION="bottom_or_right" ID="ID_1820388706" CREATED="1680186346849" MODIFIED="1747318079966">
<edge COLOR="#7c0000"/>
<node TEXT="funcionamiento básico" FOLDED="true" ID="ID_1514835414" CREATED="1747318393171" MODIFIED="1747318398326">
<node TEXT="cliente web por excelencia: navegador Web" ID="ID_499538553" CREATED="1680187278517" MODIFIED="1747318375325"/>
<node TEXT="servidor web sirve a ese cliente ficheros..." ID="ID_1268794513" CREATED="1680186354809" MODIFIED="1747318167456">
<node TEXT="... en ciertos lenguajes (formatos)" ID="ID_632024989" CREATED="1631730740543" MODIFIED="1680187215248">
<node TEXT="HTML" ID="ID_610724495" CREATED="1631731266617" MODIFIED="1631731269692"/>
<node TEXT="CSS" ID="ID_1595239980" CREATED="1631731270450" MODIFIED="1631731275630"/>
<node TEXT="JS" ID="ID_923147192" CREATED="1631731398046" MODIFIED="1631731400609"/>
<node TEXT="otros" ID="ID_900074274" CREATED="1631731276395" MODIFIED="1631731299194">
<node TEXT="imagenes (JPG, PNG, GIF, SVG, ...)" ID="ID_697000044" CREATED="1631731299624" MODIFIED="1631731320312"/>
<node TEXT="video, audio, flash, pdf, ..." ID="ID_1796609244" CREATED="1631731321821" MODIFIED="1631731343629"/>
<node TEXT="los que el navegador no soporte nativamente o con plugin, suele ofrecer &quot;guardar como&quot;" ID="ID_191258003" CREATED="1680188457076" MODIFIED="1680262419857"/>
</node>
</node>
<node TEXT="... vía ciertos protocolos" ID="ID_652214102" CREATED="1631730736694" MODIFIED="1680187220824">
<node TEXT="HTTP(s)/TCP/IP en red física" FOLDED="true" ID="ID_755835693" CREATED="1631730776247" MODIFIED="1680262658099">
<node TEXT="HTTP es comando/respuesta, típicamente" ID="ID_524983284" CREATED="1680262549011" MODIFIED="1747318268987">
<node TEXT="petición cliente" ID="ID_1579902638" CREATED="1631730852976" MODIFIED="1747318231296">
<node TEXT="transporta una URL (recurso concreto solicitado)" ID="ID_1031459417" CREATED="1747318233432" MODIFIED="1747318244712"/>
</node>
<node TEXT="respuesta servidor" ID="ID_961928687" CREATED="1631730984924" MODIFIED="1747318255226">
<node TEXT="transporta ficheros en cierto formatos" ID="ID_266049201" CREATED="1747318220615" MODIFIED="1747318226512"/>
</node>
</node>
</node>
<node TEXT="... o en local" ID="ID_998872530" CREATED="1680186887063" MODIFIED="1680187108143">
<node TEXT="&quot;red&quot; localhost" ID="ID_109273101" CREATED="1680186913264" MODIFIED="1680262492240">
<node TEXT="https://localhost" ID="ID_929997680" CREATED="1680262458242" MODIFIED="1680262464056"/>
</node>
<node TEXT="FS local" ID="ID_789638073" CREATED="1680186927704" MODIFIED="1680262470352">
<node TEXT="file://" ID="ID_1652704571" CREATED="1680262471114" MODIFIED="1680262476280"/>
</node>
</node>
<node ID="ID_1226621737" CREATED="1663596854667" MODIFIED="1663597018939" LINK="https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview"><richcontent TYPE="NODE">

<html>
  <head>
    
  </head>
  <body>
    <p>
      <font color="#000000">Overview HTTP (en MDN)</font>
    </p>
  </body>
</html>
</richcontent>
</node>
<node TEXT="What is a URL? (en MDN)" ID="ID_1181454255" CREATED="1663597047773" MODIFIED="1663597190800" LINK="https://developer.mozilla.org/en-US/docs/Learn/Common_questions/What_is_a_URL">
<node TEXT="Clean URL (en WP)" ID="ID_552852209" CREATED="1663597890116" MODIFIED="1663597964686" LINK="https://en.wikipedia.org/wiki/Clean_URL"/>
<node TEXT="URI#Design (en WP)" ID="ID_1397164451" CREATED="1663597095685" MODIFIED="1663597213028" LINK="https://en.wikipedia.org/wiki/Uniform_Resource_Identifier#Design">
<node TEXT="URL vs URI" ID="ID_1427612180" CREATED="1663598267829" MODIFIED="1663598275771"/>
<node TEXT="Syntax &amp; examples" ID="ID_214869816" CREATED="1663598276429" MODIFIED="1663598301355"/>
<node TEXT="URI reference &amp; resolution" ID="ID_473605908" CREATED="1663598301958" MODIFIED="1663598314108"/>
</node>
<node TEXT="Percent encoding (en MDN)" ID="ID_410996016" CREATED="1663597685598" MODIFIED="1663597799124" LINK="https://developer.mozilla.org/en-US/docs/Glossary/percent-encoding">
<node TEXT="¿Delimitar palabras?" ID="ID_1881372484" CREATED="1663598519866" MODIFIED="1663598886456">
<node TEXT="Mejor con &quot;-&quot; (ni espacios, ni &quot;_&quot;, ni CamelCase)" ID="ID_1765225802" CREATED="1663598887714" MODIFIED="1663598963191"/>
</node>
<node TEXT="¿Acentos/eñes?" ID="ID_1729263022" CREATED="1663598670917" MODIFIED="1663598904695">
<node TEXT="Se puede... pero pides guerra" ID="ID_1749454214" CREATED="1663598907050" MODIFIED="1663598940766"/>
</node>
<node TEXT="Idem para carpetas/ficheros en el FS local" ID="ID_1932818790" CREATED="1663598916609" MODIFIED="1663598979239"/>
</node>
<node TEXT="data URI" ID="ID_1390703576" CREATED="1663745720535" MODIFIED="1663745724659"/>
</node>
</node>
</node>
</node>
<node TEXT="cliente web&#xa;(user agent)" FOLDED="true" ID="ID_299204842" CREATED="1747318421437" MODIFIED="1747319155519">
<node TEXT="navegador (web browser)" ID="ID_1306077989" CREATED="1631631504979" MODIFIED="1680188943236">
<node TEXT="productos&#xa;¿% de uso?&#xa;(gs.statcounter.com)" ID="ID_84966786" CREATED="1631800562332" MODIFIED="1748602384210">
<node TEXT="FF Firefox (Mozilla)" ID="ID_845146854" CREATED="1631800598109" MODIFIED="1663757353489">
<node TEXT="standard release" ID="ID_1128104592" CREATED="1631800644799" MODIFIED="1631800657939">
<node TEXT="cada mes aprox" ID="ID_1945740645" CREATED="1663757266666" MODIFIED="1663757271734"/>
</node>
<node TEXT="ESR" ID="ID_717141582" CREATED="1631800658647" MODIFIED="1663757278079">
<node TEXT="soporte LTS de 1 año" ID="ID_1898189691" CREATED="1663757279610" MODIFIED="1663757286423"/>
</node>
<node TEXT="Dev. Edition" ID="ID_255102041" CREATED="1631800679297" MODIFIED="1631800684764">
<node TEXT="bleeding edge (en devtools, etc)" ID="ID_1047308238" CREATED="1663757290962" MODIFIED="1663757309566"/>
</node>
</node>
<node TEXT="Chrome/Chromium (Google)" ID="ID_1801952661" CREATED="1631800752188" MODIFIED="1663757357417"/>
<node TEXT="Safari (Apple)" ID="ID_1491508810" CREATED="1631800801614" MODIFIED="1663757360705"/>
<node TEXT="(M$)" ID="ID_3038093" CREATED="1631801034201" MODIFIED="1631801040084">
<node TEXT="✝ IE (Internet Explorer)" ID="ID_561985013" CREATED="1631801074234" MODIFIED="1663347535497"/>
<node TEXT="✝ Edge &quot;Legacy&quot;" ID="ID_1935875533" CREATED="1631801104036" MODIFIED="1663347543240"/>
<node TEXT="Edge 2019+ (Chromium)" ID="ID_134164871" CREATED="1631801128421" MODIFIED="1631801157618"/>
</node>
<node TEXT="Opera" ID="ID_68566868" CREATED="1631801230849" MODIFIED="1631801235349">
<node TEXT="✝ Original" ID="ID_738375559" CREATED="1631801236065" MODIFIED="1663347546294"/>
<node TEXT="2013+ (Chromium)" ID="ID_122325657" CREATED="1631801241458" MODIFIED="1631801254691"/>
</node>
<node TEXT="Resto (muchos: derivados de Chromium)" ID="ID_305652522" CREATED="1631801261391" MODIFIED="1663347299611"/>
</node>
<node TEXT="engines" ID="ID_1200477576" CREATED="1631801396830" MODIFIED="1631801400992">
<node TEXT="browser engine&#xa;o layout engine&#xa;o rendering engine" ID="ID_1250522317" CREATED="1631801615748" MODIFIED="1663757412347">
<node TEXT="muestra el HTML+CSS&#xa;(y demás contenido: imágenes, ...)" ID="ID_56732064" CREATED="1631801644602" MODIFIED="1663347318632"/>
<node TEXT="productos" ID="ID_1101576732" CREATED="1631801773300" MODIFIED="1631802416925">
<node TEXT="Gecko&#xa;(FF)" ID="ID_1234693836" CREATED="1631801777851" MODIFIED="1631801790294"/>
<node TEXT="Webkit&#xa;(Safari)" ID="ID_1987139298" CREATED="1631801790706" MODIFIED="1631801822573">
<node TEXT="Blink (2013)&#xa;(Chrome, Chromium,&#xa;Edge 2019+, Opera 2013+, ...)" ID="ID_680319817" CREATED="1631801828681" MODIFIED="1663347671439"/>
</node>
<node TEXT="✝ Trident, EdgeHTML, Presto" ID="ID_674499869" CREATED="1631801959972" MODIFIED="1747318447084">
<arrowlink SHAPE="CUBIC_CURVE" COLOR="#000000" WIDTH="2" TRANSPARENCY="200" FONT_SIZE="9" FONT_FAMILY="SansSerif" DESTINATION="ID_680319817" STARTINCLINATION="124.5 pt;0 pt;" ENDINCLINATION="124.5 pt;0 pt;" STARTARROW="NONE" ENDARROW="DEFAULT"/>
</node>
</node>
</node>
<node TEXT="JS engine" ID="ID_1682937844" CREATED="1631802744693" MODIFIED="1631802754702">
<node TEXT="encargado de ejecutar el JS" ID="ID_345148544" CREATED="1631802765533" MODIFIED="1631802776327"/>
<node TEXT="productos" ID="ID_383492927" CREATED="1631803077674" MODIFIED="1631803085443">
<node TEXT="SpiderMonkey (Mozilla)" ID="ID_1501837025" CREATED="1631803085850" MODIFIED="1663757469804">
<node TEXT="FF" ID="ID_1236852659" CREATED="1689285343025" MODIFIED="1689285347028"/>
</node>
<node TEXT="V8 (Google)" ID="ID_289207202" CREATED="1631803098322" MODIFIED="1663757472539">
<node TEXT="Chrome/Chromium/derivados" ID="ID_209199756" CREATED="1631803111082" MODIFIED="1631803118933"/>
<node TEXT="Electron (y otros)" ID="ID_987196274" CREATED="1631803121026" MODIFIED="1631803129390">
<node TEXT="aplicaciones &quot;universales&quot; instalables:&#xa;multiplataforma (SO y desktop/movil)" ID="ID_1331483189" CREATED="1631803136883" MODIFIED="1631803210407"/>
</node>
<node TEXT="node.js y deno" ID="ID_115574728" CREATED="1631803266766" MODIFIED="1663349700274">
<node TEXT="JS runtime environment (out of browser)&#xa;Para ejecutar..." ID="ID_1894386385" CREATED="1631803272726" MODIFIED="1663757539828">
<node TEXT="sv web (Express.js)" ID="ID_1745551238" CREATED="1631803437791" MODIFIED="1631803464657"/>
<node TEXT="herramientas de ayuda&#xa;al desarrollo front y back end" ID="ID_157949242" CREATED="1631803465104" MODIFIED="1631803563351"/>
</node>
</node>
</node>
<node TEXT="JavaScriptCore (Apple)" ID="ID_342476862" CREATED="1631803657850" MODIFIED="1689285336517">
<node TEXT="Safari" ID="ID_1051540827" CREATED="1689285352664" MODIFIED="1689285355820"/>
<node TEXT="bun" ID="ID_1102923853" CREATED="1689285356326" MODIFIED="1689285357996">
<node TEXT="JS runtime" ID="ID_1933648501" CREATED="1689285383416" MODIFIED="1689285386199"/>
</node>
</node>
</node>
</node>
</node>
<node TEXT="Monopolio/oligopolio actual" ID="ID_867923452" CREATED="1631803735597" MODIFIED="1631803747248">
<node TEXT="malo: pueden no consensuar,&#xa;ni seguir estándar,&#xa;abusar,vendor lock-in, ..." ID="ID_718548600" CREATED="1631803968926" MODIFIED="1663348251135"/>
<node TEXT="&quot;bueno&quot;: nos permite desarrollo &quot;tramposo&quot;&#xa;(ad-hoc al reinante)" ID="ID_228293027" CREATED="1631803797943" MODIFIED="1663348257730"/>
<node TEXT="nosotros: buenas prácticas estándar" ID="ID_410887052" CREATED="1631803999231" MODIFIED="1663348083287"/>
</node>
</node>
<node TEXT="otros" ID="ID_1773074213" CREATED="1680187485431" MODIFIED="1680187486972">
<node TEXT="navegador desde terminal" ID="ID_113777688" CREATED="1663597498954" MODIFIED="1663597581953">
<node TEXT="ej. Lynx, Elinks, w3m, ..." ID="ID_32488136" CREATED="1663597510395" MODIFIED="1663597554402"/>
</node>
<node TEXT="screen reader" ID="ID_1333359966" CREATED="1631730407287" MODIFIED="1631730413179">
<node TEXT="ej. NVDA (Win, libre),&#xa;JAWS (Win, de pago),&#xa;VoiceOver (Mac/iOS, nativo)" ID="ID_184724657" CREATED="1663597561731" MODIFIED="1663684445948"/>
</node>
<node TEXT="bot/spider de buscador o de IA" ID="ID_667585807" CREATED="1631730413536" MODIFIED="1747735212708">
<node TEXT="ej. de Google" ID="ID_866413071" CREATED="1663597451289" MODIFIED="1663597454760"/>
</node>
<node TEXT="download tool" ID="ID_301182990" CREATED="1663597361528" MODIFIED="1663745665938">
<node TEXT="ej. HTTrack, wget, curl, ..." ID="ID_1825931968" CREATED="1663597462210" MODIFIED="1663597485335"/>
</node>
<node TEXT="cliente HTTP API / REST API / &quot;Web API&quot;" ID="ID_493948102" CREATED="1680187545848" MODIFIED="1681214216721">
<node TEXT="acceso por código" ID="ID_152038176" CREATED="1680187602329" MODIFIED="1681198862888">
<node TEXT=" desde el JS de página en navegador" ID="ID_1895664927" CREATED="1680187662098" MODIFIED="1681198869255"/>
<node TEXT="desde App móvil o de escritorio" ID="ID_595038852" CREATED="1680187667490" MODIFIED="1681198886735"/>
<node TEXT="desde sv que pide a otro sv" ID="ID_933501881" CREATED="1680187787852" MODIFIED="1680187793279"/>
</node>
<node TEXT="ej&apos;s desde JS" ID="ID_1208229538" CREATED="1680187563649" MODIFIED="1680187893352">
<node TEXT="nativo navegador" ID="ID_801778108" CREATED="1680187829701" MODIFIED="1680187860568">
<node TEXT="XHR() (tradicional)" ID="ID_585679190" CREATED="1680187579193" MODIFIED="1680187844264"/>
<node TEXT="fetch() (nuevo)" ID="ID_1610363741" CREATED="1680187581681" MODIFIED="1680187847527"/>
</node>
<node TEXT="3rd party lib" ID="ID_1952830627" CREATED="1680187588769" MODIFIED="1680187880961">
<node TEXT="axios" ID="ID_1826627186" CREATED="1680187881852" MODIFIED="1680187883712"/>
</node>
</node>
<node TEXT="puede/suele transportar ficheros &quot;no web&quot; (ej. JSON)" ID="ID_1352418459" CREATED="1680187898766" MODIFIED="1748601642047"/>
</node>
</node>
</node>
<node TEXT="servidor web" FOLDED="true" ID="ID_1188529530" CREATED="1631731535500" MODIFIED="1747319061610">
<node TEXT="definición" ID="ID_1908293538" CREATED="1631731585622" MODIFIED="1747318503092">
<node TEXT="Programa que, sobre HTTP(s)/TCP/IP,&#xa;atiende a peticiones URL&#xa;y responde con ficheros HTML (+CSS, +JS, ...),&#xa;u otros (JSON, ...)" ID="ID_472830981" CREATED="1631731589134" MODIFIED="1748601681005"/>
</node>
<node TEXT="tipos" ID="ID_1886137793" CREATED="1631731702832" MODIFIED="1631731711026">
<node TEXT="estático" ID="ID_581382447" CREATED="1631731713194" MODIFIED="1631731715789">
<node TEXT="ficheros a servir fijos" ID="ID_563789606" CREATED="1631732120026" MODIFIED="1680262792635">
<node TEXT="disponibles pre-preparados&#xa;en el almacenamiento del sv" ID="ID_1537872780" CREATED="1631732165796" MODIFIED="1748601713134"/>
<node TEXT="&quot;emulable&quot; en local sin servidor&#xa;(desde navegador: file://)" ID="ID_1639298294" CREATED="1631732189177" MODIFIED="1680188108262">
<node TEXT="Salvo alguna cosa&#xa;(ej. JS async, JS modules, ...)" ID="ID_165976694" CREATED="1631732273812" MODIFIED="1748601740718"/>
</node>
</node>
</node>
<node TEXT="dinámico" ID="ID_1498459139" CREATED="1631731716099" MODIFIED="1631731720454">
<node TEXT="ficheros a servir adaptados" ID="ID_1353098327" CREATED="1631732339610" MODIFIED="1680262811988">
<node TEXT="producidos (tal vez en parte)&#xa;al vuelo usando..." ID="ID_1305665581" CREATED="1631732349636" MODIFIED="1631732414236">
<node TEXT="Cierto lenguaje de prog.&#xa;(&quot;de sv.&quot;). Muy diversos." ID="ID_146373015" CREATED="1631732416762" MODIFIED="1631732439211">
<node TEXT="PHP" ID="ID_1837363271" CREATED="1631732444865" MODIFIED="1631732448940"/>
<node TEXT="Python" ID="ID_286837254" CREATED="1631732450434" MODIFIED="1631732454526"/>
<node TEXT="Ruby" ID="ID_769274456" CREATED="1631732454946" MODIFIED="1631732458686"/>
<node TEXT="Java" ID="ID_673246040" CREATED="1631732459155" MODIFIED="1631732462984"/>
<node TEXT="JS&#xa;(node.js)" ID="ID_1732689367" CREATED="1631732463364" MODIFIED="1631732505313">
<node TEXT="¡En servidor!" ID="ID_1933512059" CREATED="1631732510663" MODIFIED="1631732519564"/>
<node TEXT="Popularidad creciente" ID="ID_1112842693" CREATED="1631732520040" MODIFIED="1631732526109"/>
</node>
<node TEXT="..." ID="ID_520692794" CREATED="1631732546935" MODIFIED="1631732549192"/>
</node>
<node TEXT="(Típicamente) acceso a BD" ID="ID_1432280829" CREATED="1631732602923" MODIFIED="1631732623066">
<node TEXT="para recabar datos a&#xa;mostrar/procesar" ID="ID_1196196998" CREATED="1631732624487" MODIFIED="1631732638645"/>
<node TEXT="tipo SQL o No-SQL" ID="ID_1486646790" CREATED="1631732640579" MODIFIED="1631732667147"/>
</node>
</node>
</node>
<node TEXT="Resultado de lo producido al vuelo:" ID="ID_1486635115" CREATED="1631798180219" MODIFIED="1748601805762">
<node TEXT="siempre ficheros HTML/CSS/JS/... (es el interfaz que entiende directamente el cl web)" ID="ID_1520460376" CREATED="1680188197009" MODIFIED="1680188210189"/>
<node TEXT="o destinados a consumo de programa (ej. JSON)" ID="ID_1547306791" CREATED="1680188210745" MODIFIED="1680188633322"/>
</node>
<node TEXT="Testeable en local" ID="ID_1300066517" CREATED="1631798057877" MODIFIED="1680262831414">
<node TEXT=" instalando ahí sv web (+BD): http(s)://localhost" ID="ID_1724989140" CREATED="1680262832376" MODIFIED="1680262837948"/>
</node>
</node>
</node>
<node TEXT="productos&#xa;¿% de uso?&#xa;(w3techs.com)" ID="ID_1326622079" CREATED="1631798467375" MODIFIED="1748601939676">
<node TEXT="Nginx (libre, rápido) ↑" ID="ID_975497756" CREATED="1631798511281" MODIFIED="1748602014798"/>
<node TEXT="Apache (libre, el rey clásico)  ↓" ID="ID_1104777788" CREATED="1631798488176" MODIFIED="1748602035197"/>
<node TEXT="Cloudflare Server (¿es un proxy?) ↑" ID="ID_802882217" CREATED="1631799665288" MODIFIED="1748602019150"/>
<node TEXT="LiteSpeed (pago, rápido, &quot;Apache-compatible&quot;) ↑" ID="ID_61693360" CREATED="1631799654816" MODIFIED="1748602021775"/>
<node TEXT="node.js ↑" ID="ID_257348252" CREATED="1748601910874" MODIFIED="1748602024172"/>
<node TEXT="IIS (M$) ↓" ID="ID_444994536" CREATED="1631798517818" MODIFIED="1748602043335"/>
<node TEXT="Otros" ID="ID_262816112" CREATED="1631798524130" MODIFIED="1748601930168"/>
</node>
<node TEXT="perfiles de desarollador Web" ID="ID_531308867" CREATED="1631800171083" MODIFIED="1747318539323">
<node TEXT="Frontend" ID="ID_1587166303" CREATED="1631800194036" MODIFIED="1631800200351">
<node TEXT="Lo que tiene que ver con el interfaz Web&#xa;(lo que verá e interpretará el cliente web, la UI).&#xa;DIW y DWEC" ID="ID_1798247095" CREATED="1631800418157" MODIFIED="1747735380214"/>
</node>
<node TEXT="Backend" ID="ID_556569679" CREATED="1631800201059" MODIFIED="1631800203671">
<node TEXT="Lo que tiene que ver con la generación dinámica&#xa;de lo que se enviará.&#xa;DWES" ID="ID_958803142" CREATED="1631800470408" MODIFIED="1747735388486"/>
</node>
<node TEXT="Fullstack" ID="ID_1030454227" CREATED="1631800204349" MODIFIED="1680263554445">
<node TEXT="Ambos." ID="ID_500735574" CREATED="1631800512322" MODIFIED="1663347224902"/>
<node TEXT="A menudo, con connotación: ambos en JS" ID="ID_834820270" CREATED="1748602151227" MODIFIED="1748602178179"/>
</node>
</node>
<node TEXT="solution stack, ejemplos" ID="ID_1332026054" CREATED="1631799701433" MODIFIED="1663591139004">
<node TEXT="LAMP &amp; Co (WAMP, ...)" ID="ID_1780878691" CREATED="1631799727562" MODIFIED="1663591187227"/>
<node TEXT="MEAN &amp; Co (MERN, ...)" ID="ID_1250225932" CREATED="1631799736147" MODIFIED="1663591148883"/>
<node TEXT="FALTA" ID="ID_1958824319" CREATED="1680188737520" MODIFIED="1680188740788">
<node TEXT="Explicar que en moderno a menudo interfaz entre FE y BE es un REST API (o últimamente GraphQL): se hacen (o usan ajenos) servicios/APIs. Frente a un &quot;full BE&quot; tipo Laravel donde está todo monolítico." ID="ID_470797078" CREATED="1680188762720" MODIFIED="1688737791228"/>
<node TEXT="Back-end APIs and microservices, SPA, SSR, SSG, Jamstack, ..." ID="ID_1405290856" CREATED="1680188741536" MODIFIED="1683022766919"/>
<node TEXT="Balance entre lo ejecutado en FE y BE: va oscilando por modas o gustos." ID="ID_313643850" CREATED="1680188873680" MODIFIED="1683022385103">
<node TEXT="Extremo BE: BE tipo PHP o con fw tipo Laravel y JS solo para &quot;detallitos&quot;." ID="ID_412442447" CREATED="1683022412608" MODIFIED="1683022490454"/>
<node TEXT="Extremo FE: SPA en React." ID="ID_179291449" CREATED="1683022491674" MODIFIED="1683022523755"/>
<node TEXT="Intermedio: ventajas de ambos mundos." ID="ID_433729461" CREATED="1683022524354" MODIFIED="1683027619815"/>
</node>
<node TEXT="El desacople de los back-end APIs and microservices permite fácilmente que el &quot;FE&quot; sea una App Web o una App nativa (de móvil o escritorio). También puede ser que un BE sea consumido por otro BE." ID="ID_604134657" CREATED="1683027623672" MODIFIED="1688737894746"/>
</node>
</node>
<node TEXT="ambigüedad término &quot;Web&quot;" ID="ID_1701131213" CREATED="1680262943994" MODIFIED="1747318552248">
<node TEXT="un sitio web en Internet" ID="ID_812694631" CREATED="1680262959898" MODIFIED="1680263040078">
<node TEXT="a menudo, término &quot;abusado&quot;: página web" ID="ID_486752161" CREATED="1680263009611" MODIFIED="1680263215626"/>
</node>
<node TEXT="algo que usa HTML" ID="ID_308316215" CREATED="1680262963490" MODIFIED="1680263149880">
<node TEXT="aunque sea desde" ID="ID_792925751" CREATED="1680263062380" MODIFIED="1680263072607">
<node TEXT=" red local" ID="ID_1405533731" CREATED="1680263075252" MODIFIED="1680263082183"/>
<node TEXT="localhost" ID="ID_1101615790" CREATED="1680263082932" MODIFIED="1680263104952"/>
<node TEXT="fichero local" ID="ID_1916093373" CREATED="1680263107693" MODIFIED="1680263113072"/>
</node>
</node>
<node TEXT="algo que usa HTTP" ID="ID_1158370109" CREATED="1680262975898" MODIFIED="1680262985126">
<node TEXT="aunque no haya ningún navegador involucrado" ID="ID_1770319591" CREATED="1680263118332" MODIFIED="1680263128633"/>
<node TEXT="aunque no se use HTML (ej. REST API en JSON)." ID="ID_27884016" CREATED="1680263129341" MODIFIED="1680263287867"/>
</node>
<node TEXT="cualquiera de los anteriores" ID="ID_1280082939" CREATED="1680263331992" MODIFIED="1680263336732"/>
</node>
</node>
</node>
</node>
</map>
