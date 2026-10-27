# 11 - Background unit "dwec0-prev": hardware, OS, networks, web

Source: `dwec0-prev/` (images, memory hierarchy, processor architectures,
network PDFs/mind map). Less "language-trap" material, but it is his
contextual layer ("lo que hay debajo") and fair game for theory questions.

## 11.1 Computer hardware (functional units diagram)

- **CPU**: control unit + clock, **ALU**, **registers**, **cache** (levels).
- **Internal buses**: addresses, data, control.
- **Memory/storage unit**:
  - **Main memory (RAM)**: volatile, fast, small; programs and data during
    execution.
  - **Secondary memory** (mass storage): persistent, slow, large and/or
    external; files and folders (file system). HDD, SSD, USB sticks, memory
    cards, optical discs.
  - **ROM** (read-only, "almost"): persistent, slow, small; firmware
    (BIOS/UEFI).
- **Input/Output**: input (keyboard, mouse, microphone, webcam, scanner),
  output (screen, speakers, printer), both (touch screen, **network**).

## 11.2 Memory hierarchy (pyramid) and latency

- Order of capacity: registers (tens of bytes) -> cache (kB/MB) -> RAM (GB)
  -> SSD/HDD (GB/TB+) -> **network access** (even slower, bigger, cheaper,
  "pay per use"; added by him as the base).
- **Persistence**: nothing is persistent from the top down to and **including
  RAM**.
- Peter Norvig, *Teach Yourself Programming in Ten Years*: latency numbers
  every programmer should know. RAM reference ~100 ns (flat since 2000);
  transatlantic round trip ~150 ms (flat).
- His scaling trick (x 1,000 million, so a CPU cycle ~ 1 second):

| Real | Scaled | Analogy |
|---|---|---|
| 1 CPU cycle 0.3 ns | 1 s | a heartbeat |
| CPU/cache 1-10 ns | seconds | watching a TikTok |
| RAM ~120 ns | ~5 min | a short YouTube video |
| SSD 50-150 us | 2 days - a week | online order delivery |
| HDD 1-10 ms | 1 month - 1 year | next season of a show |
| Network 40-200 ms | 4-20 years | your age |
| Network timeout 30 s | ~3 millennia | |
| Reboot 4 s - 5 min | centuries/millennia | |

- Lesson for high-level programmers: you don't control CPU<->RAM, but
  choosing local disk vs RAM vs network is a **brutal** performance decision.

## 11.3 Processor architectures (ISA)

- **ISA** = Instruction Set Architecture: how programs are encoded for a CPU.
- **x86 / "PC" / "IBM PC"** (Intel and AMD, compatible; 64-bit, backwards
  compatible with 32-bit): desktop, laptop, servers. Often called "Intel
  architecture" because they were first.
- **ARM**: one designer, many manufacturers; far lower power; **SoC**
  (CPU+RAM+most I/O in one chip, nothing swappable); 32/64-bit. Mobiles,
  tablets, smartwatches, TVs, routers, embedded; recently Apple's Macs and
  some servers.
- Impact: availability/compatibility of OS and software per architecture
  (necessary, not sufficient, unless emulated).
- Cross-platform languages: **bytecode** (Java, WebAssembly) or
  **interpreted/JIT** (JavaScript, Python); both need a software layer
  (VM/interpreter/engine).

## 11.4 OS families

- **Windows** (Microsoft, paid): NT kernels 5.x (XP; Server 2003), 6.x
  (Vista/7; Server 2008; 8/8.1; Server 2012), 10 (10; Server 2016/2019/2022),
  11. Client (desktop/laptop) vs server OS.
- **Unix-like**:
  - **Linux kernel** (free): distributions by communities/companies
    (Debian -> Ubuntu -> Lliurex/Mint; RedHat); **Android** (Google).
  - **BSD-like kernels**: Apple **XNU** -> macOS, iOS (paid); BSD
    distributions (community, free).
- Each OS has versions and supports different architectures/hardware.

## 11.5 Client-server architecture and networks (mind map)

### Architectures
- **Non-distributed**: monolithic. **Distributed**: client(s)-server (server
  offers services/resources; **who initiates**: client; the server **listens**,
  open and exposed), chains client -> server/client -> ... -> server,
  **peer to peer** (all are clients and servers, no central point of
  failure).
- "Server" is **ambiguous**: a whole machine (and its OS), a program offering
  a service, or an abstract role.
- Interface when distributed: same machine -> **IPC** or via the
  `localhost` network (127.0.0.1; **not** the same as local network); or a
  real network.

### Scope and media
- **LAN** (wired Ethernet/RJ45, local fibre; wireless Wi-Fi = WLAN) - you
  control it. **WAN/Internet access** (ADSL, fibre, mobile data 2G-5G,
  satellite) - you contract it.
- Wireless: cheap and flexible, but robustness, speed and security are
  harder.

### Application protocols (level)
HTTP(S) (Web; has "cannibalised" many uses: HTML+CSS+JS pages, REST APIs with
JSON, tunnelling other protocols because those ports are open), (S)FTP,
SMB/CIFS/NFS, telnet/SSH, SMTP/POP3/XMPP, RTSP, RDP, DNS, DHCP...

### TCP/IP stack
Application (many) -> Transport (TCP, UDP) -> Network (IP) -> Physical.
**Protocols** (transmission) vs **file formats** (storage): similar
conventions for bit meanings (data, metadata, text/binary, compressed,
encrypted, public/closed spec, de facto/legal standard).

### Network devices (by TCP/IP level reached)
- Top: **hosts** (end systems; client or server), **proxy / reverse proxy**,
  **gateway** (OSI sense: protocol translation above IP).
- Network level: **router**, **(IP) default gateway** (next hop for traffic
  not matched by the routing table).
- Physical: **switch**, cabling, **AP** (wireless access point).

### Addresses
- **MAC**: 48 bits / 6 bytes, hex separated by `:` (`3a:f4:97:aa:d5:72`);
  broadcast `ff:ff:ff:ff:ff:ff`. **Globally administered** (24-bit vendor +
  24-bit unique) vs **locally administered**; changeable by software (many
  OSs randomise them for privacy). **ARP**: broadcast "who has this IP?" ->
  owner answers with its MAC; cached.
- **IPv4** (1981): 32 bits / 4 bytes, dot notation `0.0.0.0`-
  `255.255.255.255` (~4,000 million; exhausted). **IPv6** (1998): 128 bits,
  8 groups of 4 hex digits separated by `:`, abbreviable, not backwards
  compatible.
- **Network + host** parts: prefix = network, suffix = host. Prefix length
  `/24` or **netmask** `255.255.255.0` (1s = network bits, 0s = host bits);
  not carried in the packet, must be configured consistently, else weird
  failures.
- Reserved per network: host bits all **0** = **network address**
  (`192.168.1.0/24`); all **1** = **broadcast** (`192.168.1.255`).
  Hosts per network = **2^(32 - prefix) - 2** (`/24` -> 254; first
  `.1`, last `.254`).
- **Subnetting**: lengthen the prefix: `10.0.0.0/8` -> 256 x `/16`
  (`10.0.0.0/16` ... `10.255.0.0/16`) or ~65,000 x `/24`.
- **Public** addresses: unique worldwide. **Private** ranges:
  `10.0.0.0/8`, `192.168.0.0/16`, `172.16.0.0/12` (**172.16.x.x - 172.31.x.x**
  only, not 172.15 or 172.32), **CGNAT** `100.64.0.0/10`
  (**100.64.x.x - 100.127.x.x**), **loopback** `127.0.0.0/8` (host-local;
  `127.0.0.1` = localhost).
- **NAT** router: maps internal IP:port <-> external IP:port, caches the
  mapping for replies; inbound-initiated traffic is blocked unless you **open
  ports** (static mapping). It rescued IPv4. **CGNAT**: the ISP puts you
  behind its own NAT, so you can't expose a server.
- "1 NIC = 1 MAC = 1 IP = 1 machine" is a **simplification**: several IPs per
  interface, several NICs per host, shared/changeable MACs, NAT.
- **Hostnames**: map to IPs via `/etc/hosts`
  (`C:\Windows\System32\drivers\etc\hosts`; takes priority; malware can abuse
  it), LAN mechanisms, or **DNS**.
- **DNS**: hierarchical, distributed client/server; client is configured with
  a DNS server IP (`8.8.8.8`/`8.8.4.4` Google, `1.1.1.1` Cloudflare); queries
  escalate up to root servers (UDP or TCP); names read **right to left**
  separated by `.` (TLD `.com`, `.org`, `.es`...), unlike paths (left to
  right, `/`). A subdomain needs the parent's consent (`user.blogspot.com`
  vs `github.com/user`). IANA at the top.
- **DHCP** (UDP): a client without IP broadcasts, first server to answer
  wins; gets IP + prefix + default gateway + DNS, with a **lease**
  (expiry/renewal); server remembers IP <-> MAC and keeps a static range.
  Dynamic = flexible; servers prefer static. Home routers are DHCP **server**
  inwards and DHCP **client** outwards.
- **Firewall** (router/host; allow-lists vs deny-lists), **proxy**
  (server one side, client the other), **VPN** (remote machines behave as the
  same private network), **VLAN** (virtual separate networks over shared
  switches/cables).
- Diagnostics: `ip a`, `ip r`, `ifconfig -a`, `ipconfig /all` (Windows),
  `ping` (IP level), `telnet` (TCP level), `curl ip.me` (public IP).

## 11.6 The web: browsers, servers, URLs

- Browser = web client (user agent). Engines: **layout/rendering** (Gecko,
  WebKit, Blink since 2013; dead: Trident, EdgeHTML, Presto) vs **JS engine**
  (SpiderMonkey, V8, JavaScriptCore). Firefox channels: standard (~monthly),
  **ESR** (1-year LTS), Developer Edition. Edge 2019+ and Opera 2013+ are
  Chromium. Other clients: text browsers (Lynx), screen readers (NVDA, JAWS,
  VoiceOver), search/AI bots, download tools (wget, curl, HTTrack), HTTP API
  clients (`XHR`, `fetch`, axios).
- Electron = installable cross-platform apps; node.js/deno/bun = JS runtimes
  outside the browser (Express.js for web servers).
- HTTP is request/response: the request carries a **URL**; the response
  carries files (HTML, CSS, JS, images, JSON...).
- `https://localhost` (network loopback) vs `file://` (local file system).
- URLs: avoid spaces, `_`, CamelCase in names; use `-`; avoid accents/ñ in
  file names ("pides guerra"). Percent-encoding; `data:` URIs; URL vs URI.
- **Web server**: program answering URL requests over HTTP(S)/TCP/IP.
  **Static** (prepared files; emulable locally with `file://` except things
  like async JS and modules) vs **dynamic** (generated on the fly with PHP,
  Python, Ruby, Java, node; usually with SQL/NoSQL DBs; output is always
  HTML/CSS/JS or data like JSON). Nginx is the example of a fast free one.
