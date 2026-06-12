import { DocSection, CodeBlock } from './DocComponents';

export default function PacketTracerDocs() {
  return (
    <>
      <DocSection id="pt-basic" title="🔧 1. Alapvető eszközbeállítások">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Hostname, jelszavak, banner, vonal konfiguráció — a router/switch alapjai.
        </div>

        <h4>Belépés és jogosultsági szintek</h4>
        <CodeBlock
          lang="cisco"
          label="Router/Switch konfigurációs módok"
          code={`Router>              # Felhasználói EXEC mód
Router> enable        # Belépés privilegizált módba
Router#               # Privilegizált EXEC mód
Router# configure terminal  # Globális konfigurációs mód
Router(config)#       # Konfigurációs mód
Router(config)# exit  # Visszalépés
Router(config)# end   # Vissza privilegizált módba (vagy Ctrl+Z)`}
        />

        <h4>Alapbeállítások</h4>
        <CodeBlock
          lang="cisco"
          label="Hostname, jelszavak, titkosítás"
          code={`! Hostname beállítása
Router(config)# hostname R1
R1(config)#

! Privilegizált mód jelszava (titkosított)
R1(config)# enable secret C1sc0!2024

! Konzol vonal jelszava
R1(config)# line console 0
R1(config-line)# password konzol123
R1(config-line)# login
R1(config-line)# exit

! VTY (Telnet/SSH) vonalak jelszava
R1(config)# line vty 0 4
R1(config-line)# password vty123
R1(config-line)# login
R1(config-line)# exit

! Jelszavak titkosítása a config-ban
R1(config)# service password-encryption

! Banner (figyelmeztető üzenet)
R1(config)# banner motd #FIGYELEM! Illetékteleneknek tilos!#`}
        />

        <h4>Konfiguráció mentése és kezelése</h4>
        <CodeBlock
          lang="cisco"
          label="Konfiguráció mentése"
          code={`R1# copy running-config startup-config   ! Mentés
R1# write memory                            ! Ugyanaz, röviden
R1# show running-config                     ! Aktuális konfig
R1# show startup-config                     ! Mentett konfig
R1# erase startup-config                    ! Mentett konfig törlése
R1# reload                                  ! Újraindítás`}
        />

        <h4>Kulcs fogalmak</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Fogalom</th><th>Leírás</th></tr></thead>
            <tbody>
              <tr><td><code>enable secret</code></td><td>Titkosított jelszó — MD5/SHA hash, biztonságosabb mint az <code>enable password</code></td></tr>
              <tr><td><code>line console 0</code></td><td>Konzol port — közvetlen fizikai hozzáférés</td></tr>
              <tr><td><code>line vty 0 4</code></td><td>Virtuális terminál vonalak (0-4 = 5 egyidejű kapcsolat)</td></tr>
              <tr><td><code>service password-encryption</code></td><td>Minden jelszót titkosít a running-configban (gyenge, csak Type 7)</td></tr>
              <tr><td><code>running-config</code></td><td>A jelenleg aktív konfiguráció (RAM-ban)</td></tr>
              <tr><td><code>startup-config</code></td><td>A mentett konfiguráció (NVRAM-ban), induláskor töltődik be</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-interfaces" title="🌐 2. Interfészek és IP-címzés">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Router interfészek, switch SVI, IP-cím, státusz, sebesség/duplex.
        </div>

        <h4>Router interfész konfiguráció</h4>
        <CodeBlock
          lang="cisco"
          label="Ethernet interfész IP-cím beállítása"
          code={`R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip address 192.168.1.1 255.255.255.0
R1(config-if)# no shutdown                     ! Bekapcsolás
R1(config-if)# description LAN-1 kapcsolat     ! Leírás (címke)
R1(config-if)# exit`}
        />

        <h4>Soros (Serial) interfész — DCE/DTE</h4>
        <CodeBlock
          lang="cisco"
          label="Serial interfész + órajel (DCE oldalon)"
          code={`R1(config)# interface Serial0/0/0
R1(config-if)# ip address 10.0.0.1 255.255.255.252
R1(config-if)# clock rate 64000      ! Csak DCE oldalon!
R1(config-if)# no shutdown
R1(config-if)# exit`}
        />

        <h4>Switch SVI (VLAN interfész)</h4>
        <CodeBlock
          lang="cisco"
          label="Management IP a switchen"
          code={`S1(config)# interface vlan 1
S1(config-if)# ip address 192.168.1.10 255.255.255.0
S1(config-if)# no shutdown
S1(config-if)# exit
S1(config)# ip default-gateway 192.168.1.1`}
        />

        <h4>Interfész ellenőrzése</h4>
        <CodeBlock
          lang="cisco"
          label="Interfész státusz — show parancsok"
          code={`R1# show ip interface brief       ! Gyors áttekintő
R1# show interfaces                 ! Részletes interfész info
R1# show interfaces description     ! Csak leírások
R1# show ip interface GigabitEthernet0/0  ! Egy interfész részletesen`}
        />

        <h4>show ip interface brief — kimenet értelmezése</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Státusz</th><th>Protokoll</th><th>Jelentés</th></tr></thead>
            <tbody>
              <tr><td><code>up</code></td><td><code>up</code></td><td>✅ Minden rendben</td></tr>
              <tr><td><code>up</code></td><td><code>down</code></td><td>⚠️ Kábel vagy IP-cím probléma</td></tr>
              <tr><td><code>down</code></td><td><code>down</code></td><td>❌ Kábel nem csatlakozik / no shutdown hiányzik</td></tr>
              <tr><td><code>administratively down</code></td><td><code>down</code></td><td>🔒 <code>shutdown</code> parancs aktív — <code>no shutdown</code> kell</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-routing" title="🗺️ 3. Forgalomirányítás (Routing)">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Statikus útvonalak, alapértelmezett útvonal, OSPF alapok.
        </div>

        <h4>Statikus útvonal</h4>
        <CodeBlock
          lang="cisco"
          label="Statikus route — célhálózat + next-hop IP"
          code={`! Célhálózat 192.168.2.0/24, next-hop 10.0.0.2
R1(config)# ip route 192.168.2.0 255.255.255.0 10.0.0.2

! Kimenő interfésszel is megadható
R1(config)# ip route 192.168.2.0 255.255.255.0 Serial0/0/0

! Alapértelmezett (default) route — minden ismeretlen hálózat
R1(config)# ip route 0.0.0.0 0.0.0.0 203.0.113.1

! Útvonalak listázása
R1# show ip route
R1# show ip route static`}
        />

        <h4>OSPF alapkonfiguráció (single-area)</h4>
        <CodeBlock
          lang="cisco"
          label="OSPF — egyterületes konfiguráció"
          code={`! OSPF folyamat indítása (process ID: 1)
R1(config)# router ospf 1

! Hálózatok hirdetése + area megadása
R1(config-router)# network 192.168.1.0 0.0.0.255 area 0
R1(config-router)# network 10.0.0.0 0.0.0.3 area 0

! Router ID kézi beállítása (ajánlott)
R1(config-router)# router-id 1.1.1.1
R1(config-router)# exit

! Passzív interfész (nem küld OSPF hello-t LAN felé)
R1(config)# router ospf 1
R1(config-router)# passive-interface GigabitEthernet0/0`}
        />

        <h4>Wildcard mask — gyors referencia</h4>
        <CodeBlock
          lang="cisco"
          label="Subnet mask → wildcard mask"
          code={`! Wildcard mask = 255.255.255.255 - subnet mask
255.255.255.0    →  0.0.0.255      ! /24
255.255.255.128  →  0.0.0.127      ! /25
255.255.255.252  →  0.0.0.3        ! /30
255.255.0.0      →  0.0.255.255    ! /16

! Bármilyen cím illesztése
0.0.0.0 0.0.0.0  →  pontosan 192.168.1.1`}
        />

        <h4>OSPF ellenőrzése</h4>
        <CodeBlock
          lang="cisco"
          label="show parancsok OSPF-hez"
          code={`R1# show ip ospf neighbor    ! OSPF szomszédok (FULL állapot = OK)
R1# show ip ospf interface   ! Mely interfészeken fut OSPF
R1# show ip route ospf       ! Csak OSPF által tanult útvonalak
R1# show ip protocols        ! Routing protokollok összesítése`}
        />
      </DocSection>

      <DocSection id="pt-switching" title="🔀 4. Switching és VLAN-ok">
        <div className="alert alert-info">
          <strong>Témakör:</strong> VLAN létrehozás, port hozzárendelés, trunk, VTP, STP.
        </div>

        <h4>VLAN kezelés</h4>
        <CodeBlock
          lang="cisco"
          label="VLAN létrehozás és port hozzárendelés"
          code={`! VLAN-ok létrehozása
S1(config)# vlan 10
S1(config-vlan)# name Sales
S1(config-vlan)# exit
S1(config)# vlan 20
S1(config-vlan)# name IT
S1(config-vlan)# exit

! Access port — egy VLAN-hoz rendelés
S1(config)# interface FastEthernet0/1
S1(config-if)# switchport mode access
S1(config-if)# switchport access vlan 10
S1(config-if)# no shutdown

! Voice VLAN (IP telefonhoz)
S1(config-if)# switchport voice vlan 100`}
        />

        <h4>Trunk port konfiguráció</h4>
        <CodeBlock
          lang="cisco"
          label="Trunk — több VLAN átvitele switchek között"
          code={`S1(config)# interface GigabitEthernet0/1
S1(config-if)# switchport mode trunk
S1(config-if)# switchport trunk native vlan 1
S1(config-if)# switchport trunk allowed vlan 10,20,30
S1(config-if)# exit

! Ellenőrzés
S1# show interfaces trunk
S1# show vlan brief`}
        />

        <h4>VLAN-ok közötti forgalomirányítás (Router-on-a-Stick)</h4>
        <CodeBlock
          lang="cisco"
          label="Subinterface — egy fizikai porton több VLAN"
          code={`! Router oldal: alinterfészek
R1(config)# interface GigabitEthernet0/0.10
R1(config-subif)# encapsulation dot1Q 10
R1(config-subif)# ip address 192.168.10.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface GigabitEthernet0/0.20
R1(config-subif)# encapsulation dot1Q 20
R1(config-subif)# ip address 192.168.20.1 255.255.255.0
R1(config-subif)# exit

R1(config)# interface GigabitEthernet0/0
R1(config-if)# no shutdown`}
        />

        <h4>Kulcs fogalmak</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Fogalom</th><th>Leírás</th></tr></thead>
            <tbody>
              <tr><td><strong>Access port</strong></td><td>Egy VLAN-hoz tartozik, a keretek címkézetlenek</td></tr>
              <tr><td><strong>Trunk port</strong></td><td>Több VLAN forgalmát viszi, 802.1Q címkézéssel</td></tr>
              <tr><td><strong>Native VLAN</strong></td><td>A trunkön címkézetlenül átvitt VLAN (alapértelmezett: VLAN 1)</td></tr>
              <tr><td><strong>Router-on-a-Stick</strong></td><td>Egy fizikai interfész, több alinterfész — VLAN-ok között route-ol</td></tr>
              <tr><td><strong>802.1Q (dot1Q)</strong></td><td>A VLAN címkézés szabványa</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-security" title="🔒 5. Biztonság — SSH, ACL, Port Security">
        <div className="alert alert-info">
          <strong>Témakör:</strong> SSH konfiguráció, Access Control Lists (ACL), Port Security.
        </div>

        <h4>SSH beállítása (Telnet helyett)</h4>
        <CodeBlock
          lang="cisco"
          label="SSH konfiguráció"
          code={`R1(config)# ip domain-name cisco.local
R1(config)# crypto key generate rsa
! Válassz legalább 1024 bites kulcsot (ajánlott: 2048)
R1(config)# ip ssh version 2
R1(config)# username admin secret Admin!2024
R1(config)# line vty 0 4
R1(config-line)# transport input ssh     ! CSAK SSH, Telnet tiltva
R1(config-line)# login local
R1(config-line)# exit`}
        />

        <h4>Standard ACL (csak forrás IP alapján)</h4>
        <CodeBlock
          lang="cisco"
          label="ACL — forgalom szűrése"
          code={`! 1-99: Standard ACL (forrás IP)
! 100-199: Extended ACL (forrás + cél IP, port, protokoll)

! Standard ACL: 192.168.10.0/24 hálózat tiltása
R1(config)# access-list 10 deny 192.168.10.0 0.0.0.255
R1(config)# access-list 10 permit any

! ACL alkalmazása interfészre (kimenő irány)
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip access-group 10 out

! Ellenőrzés
R1# show access-lists
R1# show ip interface GigabitEthernet0/0`}
        />

        <h4>Extended ACL (forrás + cél + protokoll)</h4>
        <CodeBlock
          lang="cisco"
          label="Extended ACL — web és ping engedélyezése"
          code={`! HTTP/HTTPS engedélyezése a webszerver felé
R1(config)# access-list 110 permit tcp any host 192.168.1.100 eq 80
R1(config)# access-list 110 permit tcp any host 192.168.1.100 eq 443

! Ping (ICMP) engedélyezése
R1(config)# access-list 110 permit icmp any any

! Minden más tiltása (implicit deny a végén!)
R1(config)# access-list 110 deny ip any any

R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip access-group 110 in`}
        />

        <h4>Port Security (switch port védelem)</h4>
        <CodeBlock
          lang="cisco"
          label="Port Security — MAC-cím szűrés"
          code={`S1(config)# interface FastEthernet0/1
S1(config-if)# switchport mode access
S1(config-if)# switchport port-security
S1(config-if)# switchport port-security maximum 2
S1(config-if)# switchport port-security mac-address sticky
S1(config-if)# switchport port-security violation shutdown

! Ellenőrzés
S1# show port-security
S1# show port-security interface FastEthernet0/1`}
        />
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Violation mód</th><th>Hatás</th></tr></thead>
            <tbody>
              <tr><td><code>shutdown</code></td><td>Port lekapcsol (alapértelmezett)</td></tr>
              <tr><td><code>restrict</code></td><td>Eldobja a tiltott kereteket, naplóz</td></tr>
              <tr><td><code>protect</code></td><td>Eldobja a tiltott kereteket, nem naplóz</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-services" title="⚙️ 6. Szolgáltatások — DHCP, NAT, NTP">
        <div className="alert alert-info">
          <strong>Témakör:</strong> DHCP szerver, statikus és dinamikus NAT, időszinkronizáció.
        </div>

        <h4>DHCP szerver routeren</h4>
        <CodeBlock
          lang="cisco"
          label="DHCP pool konfiguráció"
          code={`! DHCP pool létrehozása
R1(config)# ip dhcp pool LAN-POOL
R1(dhcp-config)# network 192.168.1.0 255.255.255.0
R1(dhcp-config)# default-router 192.168.1.1
R1(dhcp-config)# dns-server 8.8.8.8 8.8.4.4
R1(dhcp-config)# lease 7                          ! 7 nap bérleti idő
R1(dhcp-config)# exit

! Kizárt címek (statikus eszközöknek)
R1(config)# ip dhcp excluded-address 192.168.1.1 192.168.1.10

! Ellenőrzés
R1# show ip dhcp binding
R1# show ip dhcp pool`}
        />

        <h4>Statikus NAT</h4>
        <CodeBlock
          lang="cisco"
          label="Statikus NAT — egy belső → egy külső cím"
          code={`! Belső globális = Inside Global (publikus cím)
R1(config)# ip nat inside source static 192.168.1.10 203.0.113.10

! Interfészek megjelölése
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip nat inside           ! Belső (LAN) interfész
R1(config-if)# exit
R1(config)# interface Serial0/0/0
R1(config-if)# ip nat outside          ! Külső (WAN) interfész

R1# show ip nat translations`}
        />

        <h4>Dinamikus PAT (NAT Overload) — a leggyakoribb</h4>
        <CodeBlock
          lang="cisco"
          label="PAT — sok belső → egy külső cím (túlterheléses NAT)"
          code={`! ACL a fordítható címekről
R1(config)# access-list 1 permit 192.168.1.0 0.0.0.255

! PAT (overload) konfiguráció
R1(config)# ip nat inside source list 1 interface Serial0/0/0 overload

! Interfészek megjelölése
R1(config)# interface GigabitEthernet0/0
R1(config-if)# ip nat inside
R1(config-if)# exit
R1(config)# interface Serial0/0/0
R1(config-if)# ip nat outside

R1# show ip nat translations
R1# show ip nat statistics`}
        />
      </DocSection>

      <DocSection id="pt-cdp" title="🔍 7. Hibakeresés és Diagnosztika">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Ping, traceroute, CDP, LLDP, debug — hálózati hibakeresés.
        </div>

        <h4>Alapvető diagnosztikai parancsok</h4>
        <CodeBlock
          lang="cisco"
          label="Ping és Traceroute"
          code={`R1# ping 192.168.1.1              ! Egyszerű elérhetőség
R1# ping 192.168.1.1 repeat 100     ! 100 db ping
R1# traceroute 192.168.2.1          ! Útvonal követése
R1# telnet 192.168.1.1              ! Telnet kapcsolat`}
        />

        <h4>CDP (Cisco Discovery Protocol)</h4>
        <CodeBlock
          lang="cisco"
          label="Szomszédos Cisco eszközök felderítése"
          code={`R1# show cdp neighbors            ! Közvetlen szomszédok
R1# show cdp neighbors detail      ! Részletes info (IP-cím, IOS verzió)
R1# show cdp interface             ! Mely interfészeken fut CDP
R1(config)# no cdp run             ! CDP kikapcsolása (biztonság)
R1(config-if)# no cdp enable       ! CDP kikapcsolása egy interfészen`}
        />

        <h4>LLDP (Link Layer Discovery Protocol) — gyártófüggetlen</h4>
        <CodeBlock
          lang="cisco"
          label="LLDP — nem csak Cisco eszközök"
          code={`S1(config)# lldp run                ! LLDP bekapcsolása
S1# show lldp neighbors             ! LLDP szomszédok
S1# show lldp neighbors detail      ! Részletes info`}
        />

        <h4>ARP és MAC-cím tábla</h4>
        <CodeBlock
          lang="cisco"
          label="Címfeloldás és MAC tábla"
          code={`R1# show arp                      ! ARP tábla (IP → MAC)
R1# clear arp                     ! ARP tábla törlése
S1# show mac address-table        ! MAC-cím tábla (MAC → port)
S1# show mac address-table dynamic ! Csak dinamikus bejegyzések`}
        />
      </DocSection>

      <DocSection id="pt-reference" title="📋 8. Gyorsreferencia — Show parancsok">
        <h4>Minden egy helyen — a leggyakoribb show parancsok</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Parancs</th><th>Mit mutat?</th></tr></thead>
            <tbody>
              <tr><td><code>show running-config</code></td><td>Aktuális konfiguráció</td></tr>
              <tr><td><code>show startup-config</code></td><td>Mentett konfiguráció (NVRAM)</td></tr>
              <tr><td><code>show version</code></td><td>IOS verzió, rendszeridő, memória</td></tr>
              <tr><td><code>show ip interface brief</code></td><td>Interfészek állapota és IP-címe</td></tr>
              <tr><td><code>show interfaces</code></td><td>Részletes interfész statisztika</td></tr>
              <tr><td><code>show ip route</code></td><td>Routing tábla</td></tr>
              <tr><td><code>show ip protocols</code></td><td>Aktív routing protokollok</td></tr>
              <tr><td><code>show ip ospf neighbor</code></td><td>OSPF szomszédok</td></tr>
              <tr><td><code>show vlan brief</code></td><td>VLAN-ok és port hozzárendelések</td></tr>
              <tr><td><code>show interfaces trunk</code></td><td>Trunk portok és engedélyezett VLAN-ok</td></tr>
              <tr><td><code>show mac address-table</code></td><td>MAC-cím tábla (switch)</td></tr>
              <tr><td><code>show cdp neighbors</code></td><td>CDP szomszédok</td></tr>
              <tr><td><code>show ip dhcp binding</code></td><td>DHCP kiosztások</td></tr>
              <tr><td><code>show ip nat translations</code></td><td>Aktív NAT fordítások</td></tr>
              <tr><td><code>show access-lists</code></td><td>ACL-ek és találatok száma</td></tr>
              <tr><td><code>show port-security</code></td><td>Port Security állapot</td></tr>
              <tr><td><code>show ssh</code></td><td>SSH konfiguráció és kapcsolatok</td></tr>
              <tr><td><code>show arp</code></td><td>ARP tábla (IP → MAC)</td></tr>
              <tr><td><code>show ip interface</code></td><td>Interfész IP beállításai részletesen</td></tr>
              <tr><td><code>show flash</code></td><td>Flash memória tartalma (IOS fájlok)</td></tr>
            </tbody>
          </table>
        </div>

        <h4>🔗 Hasznos linkek</h4>
        <ul>
          <li><a href="https://www.cisco.com/c/en/us/support/docs/ios-nx-os-software/ios-software-releases-121-mainline/6138-commandref.html" target="_blank" rel="noopener">Cisco IOS Command Reference</a></li>
          <li><a href="https://www.netacad.com/" target="_blank" rel="noopener">Cisco Networking Academy (NetAcad)</a></li>
          <li><a href="https://www.packettracernetwork.com/" target="_blank" rel="noopener">Packet Tracer Network — Tutorials</a></li>
        </ul>
      </DocSection>
      <DocSection id="pt-topology" title="🏗️ 9. ENB Vállalati Hálózat — Topológia">
        <div className="alert alert-primary">
          <strong>Projekt:</strong> ENB Bank — Többtelephelyes vállalati hálózat Packet Tracerben.
        </div>

        <h4>Helyszínek és eszközök</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Helyszín</th><th>Eszköz</th><th>Típus</th><th>Szerep</th></tr></thead>
            <tbody>
              <tr><td rowSpan="9"><strong>🏢 Eldorádó — Központi Iroda</strong><br/><small className="text-muted">Földszint (Ground Floor)</small></td><td>ENB_DHCPServer</td><td>Szerver</td><td>DHCP + DNS kiszolgáló</td></tr>
              <tr><td>IE-9360 SENB</td><td>Switch</td><td>Központi (core) kapcsoló</td></tr>
              <tr><td>1920 Helpdesk</td><td>Switch</td><td>Helpdesk kapcsoló</td></tr>
              <tr><td>WLC-2504 HelpdeskWLC</td><td>WLC</td><td>Vezeték nélküli vezérlő</td></tr>
              <tr><td>3702i HelpdeskAP1</td><td>Access Point</td><td>Helpdesk Room 1 WiFi</td></tr>
              <tr><td>3702i HelpdeskAP2</td><td>Access Point</td><td>Helpdesk Room 2 WiFi</td></tr>
              <tr><td>HelpdeskLaptop1</td><td>Laptop</td><td>Ügyfélszolgálat 1</td></tr>
              <tr><td>HelpdeskLaptop2</td><td>Laptop</td><td>Ügyfélszolgálat 2</td></tr>
              <tr><td>1941 RENB</td><td>Router</td><td>Vállalati forgalomirányító</td></tr>
              <tr><td rowSpan="3"><strong>🏢 Eldorádó — Admin</strong><br/><small className="text-muted">1. emelet (First Floor)</small></td><td>WRT300N OfficeWR</td><td>Wireless Router</td><td>Irodai WiFi router</td></tr>
              <tr><td>AdminPC</td><td>PC</td><td>Adminisztrációs munkaállomás</td></tr>
              <tr><td>TrustMe.com</td><td>—</td><td>Internet hozzáférés korlátozás</td></tr>
              <tr><td rowSpan="8"><strong>🏦 Budapest — Bankfiók</strong><br/><small className="text-muted">Branch LAN</small></td><td>1941 RBranch</td><td>Router</td><td>Fiók forgalomirányító</td></tr>
              <tr><td>WRT300N WRBranch</td><td>Wireless Router</td><td>Fiók WiFi router</td></tr>
              <tr><td>Switch-PT SBranch</td><td>Switch</td><td>Fiók kapcsoló</td></tr>
              <tr><td>BranchPCWired</td><td>PC</td><td>Vezetékes munkaállomás</td></tr>
              <tr><td>BranchPCWireless</td><td>PC</td><td>Vezeték nélküli munkaállomás</td></tr>
              <tr><td>BranchLaptop</td><td>Laptop</td><td>Hordozható eszköz</td></tr>
              <tr><td>BranchTablet</td><td>Tablet</td><td>Táblagép</td></tr>
              <tr><td>BranchSmartphone</td><td>Smartphone</td><td>⚠️ Letiltva a WiFi hálózatról</td></tr>
              <tr><td rowSpan="3"><strong>☁️ Internet</strong></td><td>DNSServer</td><td>Szerver</td><td>Külső DNS kiszolgáló</td></tr>
              <tr><td>ChatGPT</td><td>Szerver</td><td>Internetes szolgáltatás</td></tr>
              <tr><td>TrustMe.com</td><td>Szerver</td><td>IPv4 + IPv6 weboldal</td></tr>
            </tbody>
          </table>
        </div>

        <h4>🌐 Hálózati áttekintés</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Hálózat</th><th>IPv4 Tartomány</th><th>IPv6 Tartomány</th><th>Helyszín</th></tr></thead>
            <tbody>
              <tr><td><strong>ENB LAN</strong></td><td><code>50.60.70.128/25</code></td><td><code>2026:5:7::/64</code></td><td>Központi iroda — vezetékes</td></tr>
              <tr><td><strong>Office LAN</strong></td><td><code>51.61.71.160/28</code></td><td>—</td><td>Központi iroda — adminisztráció</td></tr>
              <tr><td><strong>Branch LAN</strong></td><td><code>52.62.72.64/26</code></td><td><code>2026:5:7:FF::/64</code></td><td>Bankfiók — vezetékes</td></tr>
              <tr><td><strong>Branch WiFi</strong></td><td><code>53.63.73.96/27</code></td><td>—</td><td>Bankfiók — vezeték nélküli</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-addressing" title="📊 10. Címkiosztási Terv — Részletes">
        <div className="alert alert-warning">
          <strong>Fontos:</strong> A *-gal jelölt mezőket ki kell számolni a címkiosztási előírások alapján. A „Nem módosítandó" eszközökhöz nem szabad hozzányúlni!
        </div>

        <h4>🔹 ENB LAN — 50.60.70.128/25 (Központi Iroda, vezetékes)</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv4-cím</th><th>Maszk</th><th>Megjegyzés</th></tr></thead>
            <tbody>
              <tr><td><code>RENB</code></td><td>GigabitEthernet0/0/0</td><td><strong>50.60.70.254</strong></td><td>255.255.255.128</td><td>Utolsó érvényes cím (/25)</td></tr>
              <tr><td><code>RENB</code></td><td>GigabitEthernet0/1/0</td><td colSpan="2" className="text-muted">Nem módosítandó</td><td>WAN kapcsolat</td></tr>
              <tr><td><code>ENB_DHCPServer</code></td><td>Wireless0</td><td><strong>50.60.70.176</strong></td><td>255.255.255.128</td><td>48. érvényes cím</td></tr>
              <tr><td><code>HelpdeskLaptop1</code></td><td>Wireless0</td><td colSpan="2">DHCP (ENB_DHCPServer)</td><td>Dinamikus</td></tr>
              <tr><td><code>HelpdeskLaptop2</code></td><td>Wireless0</td><td colSpan="2">DHCP (ENB_DHCPServer)</td><td>Dinamikus</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> /25 = 255.255.255.128 → 126 használható cím (50.60.70.129–254).<br/>
        RENB = utolsó: <code>50.60.70.254</code> | DHCP szerver = 48.: <code>50.60.70.128 + 48 = 50.60.70.176</code></p>

        <h4>🔹 ENB LAN IPv6 — 2026:5:7::/64</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv6-cím</th><th>Link-Local</th></tr></thead>
            <tbody>
              <tr><td><code>RENB</code></td><td>GigabitEthernet0/0/0</td><td><strong>2026:5:7::1</strong></td><td><strong>FE80::1</strong></td></tr>
              <tr><td><code>ENB_DHCPServer</code></td><td>Wireless0</td><td><strong>2026:5:7::30</strong></td><td>Automatikus</td></tr>
              <tr><td><code>HelpdeskLaptop1</code></td><td>Wireless0</td><td colSpan="2">DHCPv6 (RENB-től)</td></tr>
              <tr><td><code>HelpdeskLaptop2</code></td><td>Wireless0</td><td colSpan="2">DHCPv6 (RENB-től)</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> RENB = első érvényes: <code>::1</code> | DHCP szerver = 48.: <code>::30</code> (0x30 = 48)</p>

        <h4>🔹 Office LAN — 51.61.71.160/28 (Adminisztráció)</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv4-cím</th><th>Maszk</th><th>Megjegyzés</th></tr></thead>
            <tbody>
              <tr><td><code>OfficeWR</code></td><td>Internet</td><td colSpan="2">DHCP (ENB_DHCPServer → ENB LAN)</td><td>Külső port</td></tr>
              <tr><td><code>OfficeWR</code></td><td>LAN</td><td><strong>51.61.71.174</strong></td><td>255.255.255.240</td><td>Utolsó érvényes cím (/28)</td></tr>
              <tr><td><code>AdminPC</code></td><td>FastEthernet0</td><td><strong>51.61.71.164</strong></td><td>255.255.255.240</td><td>Fenntartott DHCP: 4. cím</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> /28 = 255.255.255.240 → 14 használható cím (51.61.71.161–174).<br/>
        OfficeWR LAN = utolsó: <code>.174</code> | AdminPC = 4.: <code>51.61.71.160 + 4 = 51.61.71.164</code><br/>
        ⚠️ Ez a hálózat NEM használ IPv6-ot.</p>

        <h4>🔹 Branch LAN — 52.62.72.64/26 (Bankfiók, vezetékes)</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv4-cím</th><th>Maszk</th><th>Megjegyzés</th></tr></thead>
            <tbody>
              <tr><td><code>RBranch</code></td><td>GigabitEthernet0/0</td><td><strong>52.62.72.126</strong></td><td>255.255.255.192</td><td>Utolsó érvényes cím (/26)</td></tr>
              <tr><td><code>RBranch</code></td><td>GigabitEthernet0/1/0</td><td colSpan="2" className="text-muted">Nem módosítandó</td><td>WAN kapcsolat</td></tr>
              <tr><td><code>SBranch</code></td><td>VLAN 1</td><td><strong>52.62.72.125</strong></td><td>255.255.255.192</td><td>Utolsó előtti cím</td></tr>
              <tr><td><code>BranchPCWired</code></td><td>FastEthernet0</td><td><strong>52.62.72.80</strong></td><td>255.255.255.192</td><td>16. érvényes cím</td></tr>
              <tr><td><code>WRBranch</code></td><td>Internet</td><td><strong>52.62.72.96</strong></td><td>255.255.255.192</td><td>32. érvényes cím</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> /26 = 255.255.255.192 → 62 használható cím (52.62.72.65–126).<br/>
        RBranch = utolsó: <code>.126</code> | SBranch = utolsó előtti: <code>.125</code><br/>
        BranchPCWired = 16.: <code>52.62.72.64 + 16 = 52.62.72.80</code><br/>
        WRBranch Internet = 32.: <code>52.62.72.64 + 32 = 52.62.72.96</code></p>

        <h4>🔹 Branch LAN IPv6 — 2026:5:7:FF::/64</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv6-cím</th><th>Link-Local</th></tr></thead>
            <tbody>
              <tr><td><code>RBranch</code></td><td>GigabitEthernet0/0</td><td><strong>2026:5:7:FF::1</strong></td><td><strong>FE80::1</strong></td></tr>
              <tr><td><code>BranchPCWired</code></td><td>FastEthernet0</td><td><strong>2026:5:7:FF::10</strong></td><td>Automatikus</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> RBranch = első érvényes: <code>::1</code> | BranchPCWired = 16.: <code>::10</code> (0x10 = 16)<br/>
        ⚠️ SBranch, WRBranch, vezeték nélküli eszközök NEM használnak IPv6-ot.</p>

        <h4>🔹 Branch WiFi — 53.63.73.96/27 (Bankfiók, vezeték nélküli)</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Port</th><th>IPv4-cím</th><th>Maszk</th><th>Megjegyzés</th></tr></thead>
            <tbody>
              <tr><td><code>WRBranch</code></td><td>LAN</td><td><strong>53.63.73.126</strong></td><td>255.255.255.224</td><td>Utolsó érvényes cím (/27) — Átjáró</td></tr>
              <tr><td><code>BranchPCWireless</code></td><td>Wireless0</td><td colSpan="2">DHCP (WRBranch)</td><td>Dinamikus</td></tr>
              <tr><td><code>BranchLaptop</code></td><td>Wireless0</td><td colSpan="2">DHCP (WRBranch)</td><td>Dinamikus</td></tr>
              <tr><td><code>BranchTablet</code></td><td>Wireless0</td><td colSpan="2">DHCP (WRBranch)</td><td>Dinamikus</td></tr>
              <tr><td><code>BranchSmartphone</code></td><td>Wireless0</td><td colSpan="2" className="text-danger">🚫 Nem módosítandó (letiltva)</td><td>Kitiltva a WiFi-ről</td></tr>
            </tbody>
          </table>
        </div>
        <p><strong>Számítás:</strong> /27 = 255.255.255.224 → 30 használható cím (53.63.73.97–126).<br/>
        WRBranch LAN (átjáró) = utolsó: <code>.126</code><br/>
        ⚠️ Ez a hálózat NEM használ IPv6-ot.</p>
      </DocSection>

      <DocSection id="pt-device-config" title="🖥️ 11. Eszközkonfigurációk">
        <div className="alert alert-success">
          <strong>Használd ezeket a konfigurációkat</strong> a Packet Tracer feladat megoldásához.
        </div>

        <h4>🔸 RENB — Vállalati forgalomirányító (Központ)</h4>
        <CodeBlock
          lang="cisco"
          label="RENB alapkonfiguráció"
          code={`! === ALAPBEÁLLÍTÁSOK ===
enable
configure terminal
hostname RENB
enable secret enapass
service password-encryption
banner motd #FIGYELEM! Illetéktelen belépés tilos!#

! === KONZOL ÉS VTY ===
line console 0
 password conpass
 login
 exit
line vty 0 4
 password vty123
 login
 exit

! === BELSŐ INTERFÉSZ (ENB LAN) ===
interface GigabitEthernet0/0/0
 description ENB LAN Gateway
 ip address 50.60.70.254 255.255.255.128
 ipv6 address FE80::1 link-local
 ipv6 address 2026:5:7::1/64
 no shutdown
 exit

! === KÜLSŐ INTERFÉSZ (WAN) — NEM MÓDOSÍTANDÓ ===
! GigabitEthernet0/1/0 — meghagyva`}
        />

        <h4>🔸 RBranch — Fiók forgalomirányító (Budapest)</h4>
        <CodeBlock
          lang="cisco"
          label="RBranch alapkonfiguráció"
          code={`! === ALAPBEÁLLÍTÁSOK ===
enable
configure terminal
hostname RBranch
enable secret rbranchenapass
service password-encryption
banner motd #FIGYELEM! Illetéktelen belépés tilos!#

! === KONZOL ===
line console 0
 password rbranchconpass
 login
 exit

! === BELSŐ INTERFÉSZ (Branch LAN) ===
interface GigabitEthernet0/0
 description Branch LAN Gateway
 ip address 52.62.72.126 255.255.255.192
 ipv6 address FE80::1 link-local
 ipv6 address 2026:5:7:FF::1/64
 no shutdown
 exit

! === KÜLSŐ INTERFÉSZ (WAN) — NEM MÓDOSÍTANDÓ ===
! GigabitEthernet0/1/0 — meghagyva`}
        />

        <h4>🔸 SBranch — Fiók kapcsoló</h4>
        <CodeBlock
          lang="cisco"
          label="SBranch menedzsment és SSH"
          code={`! === ALAPBEÁLLÍTÁSOK ===
enable
configure terminal
hostname SBranch
enable secret enapass
service password-encryption

! === SSH BEÁLLÍTÁSA ===
ip domain-name branch.local
crypto key generate rsa
! Válassz 1024 vagy 2048 bites kulcsot
ip ssh version 2
username admin secret sshpass
line vty 0 4
 transport input ssh
 login local
 exit

! === MENEDZSMENT IP (VLAN 1) ===
interface vlan 1
 ip address 52.62.72.125 255.255.255.192
 no shutdown
 exit
ip default-gateway 52.62.72.126`}
        />

        <h4>🔸 BranchPCWired — Vezetékes munkaállomás</h4>
        <CodeBlock
          lang="cisco"
          label="BranchPCWired statikus IP"
          code={`! IPv4 beállítás (asztali GUI-ban is megadható)
ip 52.62.72.80 255.255.255.192 52.62.72.126

! IPv6 beállítás
ipv6 2026:5:7:FF::10/64
ipv6-gateway FE80::1`}
        />

        <h4>🔸 ENB_DHCPServer — DHCP és DNS szerver</h4>
        <CodeBlock
          lang="cisco"
          label="DHCP szerver statikus IP"
          code={`! IPv4 beállítás
ip 50.60.70.176 255.255.255.128 50.60.70.254

! IPv6 beállítás
ipv6 2026:5:7::30/64
ipv6-gateway FE80::1

! DHCP szolgáltatás bekapcsolása
! (Packet Tracerben a Services fülön)
! Pool: ENB_LAN — 50.60.70.128/25
! DHCP szerver IP: 50.60.70.176`}
        />

        <h4>🔸 WRBranch — Fiók WiFi router</h4>
        <CodeBlock
          lang="cisco"
          label="WRBranch Internet + LAN port"
          code={`! === INTERNET PORT (KÜLSŐ) ===
! IP: 52.62.72.96 / 255.255.255.192
! Gateway: 52.62.72.126

! === LAN PORT (BELSŐ — Branch WiFi átjáró) ===
! IP: 53.63.73.126 / 255.255.255.224
! DHCP szerver: Bekapcsolva
! DHCP pool: 53.63.73.96/27

! === VEZETÉK NÉLKÜLI BEÁLLÍTÁS ===
! SSID: branchwifi
! Biztonság: WPA2-PSK
! Jelszó: branchwifipass`}
        />

        <h4>🔸 OfficeWR — Irodai WiFi router (Admin)</h4>
        <CodeBlock
          lang="cisco"
          label="OfficeWR Internet + LAN port"
          code={`! === INTERNET PORT (KÜLSŐ) ===
! IP: Dinamikus (DHCP — ENB_DHCPServer-től)

! === LAN PORT (BELSŐ — Office LAN átjáró) ===
! IP: 51.61.71.174 / 255.255.255.240
! DHCP szerver: Bekapcsolva
! DHCP pool: 51.61.71.160/28
! Fenntartott cím (AdminPC): 51.61.71.164`}
        />
      </DocSection>

      <DocSection id="pt-credentials" title="🔑 12. Jelszavak és Hitelesítés">
        <div className="alert alert-danger">
          <strong>⚠️ Biztonsági figyelmeztetés:</strong> Ezek a jelszavak csak a Packet Tracer laborgyakorlathoz használandók. Éles környezetben mindig erős, egyedi jelszavakat használj!
        </div>

        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Jelszó típus</th><th>Jelszó</th><th>Megjegyzés</th></tr></thead>
            <tbody>
              <tr><td rowSpan="2"><code>RENB</code></td><td>Konzol vonali jelszó</td><td><code>conpass</code></td><td><code>line console 0</code></td></tr>
              <tr><td>Titkosított privilegizált mód</td><td><code>enapass</code></td><td><code>enable secret</code></td></tr>
              <tr><td rowSpan="2"><code>RBranch</code></td><td>Konzol vonali jelszó</td><td><code>rbranchconpass</code></td><td><code>line console 0</code></td></tr>
              <tr><td>Titkosított privilegizált mód</td><td><code>rbranchenapass</code></td><td><code>enable secret</code></td></tr>
              <tr><td rowSpan="2"><code>SBranch</code></td><td>Titkosított privilegizált mód</td><td><code>enapass</code></td><td><code>enable secret</code></td></tr>
              <tr><td>SSH bejelentkezés</td><td>Felhasználó: <code>admin</code><br/>Jelszó: <code>sshpass</code></td><td><code>login local</code></td></tr>
            </tbody>
          </table>
        </div>

        <h4>🔐 SSH konfiguráció SBranch-en</h4>
        <CodeBlock
          lang="cisco"
          label="SSH beállítása SBranch kapcsolón"
          code={`! SSH konfiguráció SBranch számára
SBranch(config)# ip domain-name branch.local
SBranch(config)# crypto key generate rsa
! Válassz legalább 1024 bites kulcsot
SBranch(config)# ip ssh version 2
SBranch(config)# username admin secret sshpass
SBranch(config)# line vty 0 4
SBranch(config-line)# transport input ssh
SBranch(config-line)# login local
SBranch(config-line)# exit`}
        />
      </DocSection>

      <DocSection id="pt-wireless" title="📶 13. Vezeték nélküli Beállítások (WiFi)">
        <h4>Vezeték nélküli hálózatok összesítése</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>SSID</th><th>Eszköz</th><th>Biztonság</th><th>Jelszó</th><th>Helyszín</th></tr></thead>
            <tbody>
              <tr><td><code>branchwifi</code></td><td>WRBranch</td><td>WPA2-PSK</td><td><code>branchwifipass</code></td><td>Budapest — Bankfiók</td></tr>
              <tr><td><code>helpdeskwifi</code></td><td>HelpdeskWLC</td><td>WPA2-PSK</td><td><code>helpdeskwifipass</code></td><td>Eldorádó — Központ</td></tr>
            </tbody>
          </table>
        </div>

        <h4>🔸 WRBranch — Branch WiFi beállítás</h4>
        <CodeBlock
          lang="cisco"
          label="WRBranch vezeték nélküli hálózat"
          code={`! WRBranch WiFi konfiguráció (GUI-ban)
! SSID: branchwifi
! Security Mode: WPA2 Personal (PSK)
! Passphrase: branchwifipass
! Encryption: AES
!
! Internet (külső) port:
!   IP: 52.62.72.96 / 255.255.255.192
!   Gateway: 52.62.72.126
!
! LAN (belső) port:
!   IP: 53.63.73.126 / 255.255.255.224
!   DHCP: Bekapcsolva
!
! Engedélyezett kliensek:
!   ✅ BranchPCWireless
!   ✅ BranchLaptop
!   ✅ BranchTablet
!   ❌ BranchSmartphone (letiltva)`}
        />

        <h4>🔸 HelpdeskWLC — Központi WiFi vezérlő</h4>
        <CodeBlock
          lang="cisco"
          label="HelpdeskWLC vezeték nélküli hálózat"
          code={`! HelpdeskWLC WiFi konfiguráció
! SSID: helpdeskwifi
! Security Mode: WPA2 Personal (PSK)
! Passphrase: helpdeskwifipass
! Encryption: AES
!
! AP-k: 3702i HelpdeskAP1, HelpdeskAP2
! Kliensek: HelpdeskLaptop1, HelpdeskLaptop2
!    (DHCP IPv4: ENB_DHCPServer)
!    (DHCP IPv6: RENB)`}
        />

        <h4>🔸 OfficeWR — Irodai WiFi router</h4>
        <CodeBlock
          lang="cisco"
          label="OfficeWR adminisztrációs hálózat"
          code={`! OfficeWR konfiguráció (GUI-ban)
!
! Internet (külső) port:
!   IP: Dinamikus (DHCP kliens — ENB_DHCPServer)
!
! LAN (belső) port:
!   IP: 51.61.71.174 / 255.255.255.240
!   DHCP: Bekapcsolva
!
! Fenntartott DHCP cím:
!   AdminPC → 51.61.71.164 (4. cím)
!
! ⚠️ TrustMe.com hozzáférés KORLÁTOZVA`}
        />

        <h4>📱 Kliens eszközök WiFi hozzárendelése</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Kapcsolódási pont</th><th>SSID</th><th>IPv4</th><th>IPv6</th></tr></thead>
            <tbody>
              <tr><td>HelpdeskLaptop1</td><td>HelpdeskAP1 (3702i)</td><td><code>helpdeskwifi</code></td><td>DHCP (ENB_DHCPServer)</td><td>DHCPv6 (RENB)</td></tr>
              <tr><td>HelpdeskLaptop2</td><td>HelpdeskAP2 (3702i)</td><td><code>helpdeskwifi</code></td><td>DHCP (ENB_DHCPServer)</td><td>DHCPv6 (RENB)</td></tr>
              <tr><td>BranchPCWireless</td><td>WRBranch</td><td><code>branchwifi</code></td><td>DHCP (WRBranch)</td><td>—</td></tr>
              <tr><td>BranchLaptop</td><td>WRBranch</td><td><code>branchwifi</code></td><td>DHCP (WRBranch)</td><td>—</td></tr>
              <tr><td>BranchTablet</td><td>WRBranch</td><td><code>branchwifi</code></td><td>DHCP (WRBranch)</td><td>—</td></tr>
              <tr><td className="text-danger">BranchSmartphone</td><td className="text-danger">WRBranch</td><td className="text-danger"><code>branchwifi</code></td><td className="text-danger" colSpan="2">🚫 Kitiltva — Nem módosítandó</td></tr>
              <tr><td>AdminPC</td><td>OfficeWR</td><td>—</td><td>DHCP lefoglalva: <code>51.61.71.164</code></td><td>—</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-routing-pt" title="🗺️ 14. Forgalomirányítás — ENB Hálózat">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Statikus és dinamikus útvonalak az ENB topológiában.
        </div>

        <h4>Alapértelmezett útvonalak</h4>
        <CodeBlock
          lang="cisco"
          label="Default route — Internet felé"
          code={`! RENB: alapértelmezett útvonal az Internet felé
RENB(config)# ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1/0

! RBranch: alapértelmezett útvonal az Internet felé
RBranch(config)# ip route 0.0.0.0 0.0.0.0 GigabitEthernet0/1/0`}
        />

        <h4>Statikus útvonalak a belső hálózatokhoz</h4>
        <CodeBlock
          lang="cisco"
          label="Belső hálózatok elérése"
          code={`! RENB: útvonal a Branch LAN (52.62.72.64/26) felé
RENB(config)# ip route 52.62.72.64 255.255.255.192 GigabitEthernet0/1/0

! RENB: útvonal a Branch WiFi (53.63.73.96/27) felé
RENB(config)# ip route 53.63.73.96 255.255.255.224 GigabitEthernet0/1/0

! RENB: útvonal az Office LAN (51.61.71.160/28) felé
RENB(config)# ip route 51.61.71.160 255.255.255.240 GigabitEthernet0/0/0

! RBranch: alapértelmezett + belső útvonalak
RBranch(config)# ip route 50.60.70.128 255.255.255.128 GigabitEthernet0/1/0
RBranch(config)# ip route 51.61.71.160 255.255.255.240 GigabitEthernet0/1/0`}
        />

        <h4>DHCP konfiguráció — RENB (IPv6 a Helpdesk klienseknek)</h4>
        <CodeBlock
          lang="cisco"
          label="DHCPv6 pool Helpdesk kliensekhez"
          code={`! IPv6 DHCP pool a Helpdesk laptopoknak
RENB(config)# ipv6 dhcp pool HELPDESK-IPV6
RENB(config-dhcpv6)# address prefix 2026:5:7::/64
RENB(config-dhcpv6)# dns-server 2026:5:7::30
RENB(config-dhcpv6)# domain-name enb.local
RENB(config-dhcpv6)# exit

! Interfészen DHCPv6 engedélyezése
RENB(config)# interface GigabitEthernet0/0/0
RENB(config-if)# ipv6 dhcp server HELPDESK-IPV6
RENB(config-if)# ipv6 nd managed-config-flag
RENB(config-if)# exit`}
        />

        <h4>Ellenőrző parancsok</h4>
        <CodeBlock
          lang="cisco"
          label="Forgalomirányítás ellenőrzése"
          code={`RENB# show ip route                ! Teljes routing tábla
RENB# show ip route static          ! Statikus útvonalak
RENB# show ipv6 route               ! IPv6 routing tábla
RENB# ping 52.62.72.80              ! BranchPCWired elérése
RENB# ping 51.61.71.164             ! AdminPC elérése
RBranch# show ip route
RBranch# ping 50.60.70.254          ! RENB belső port
SBranch# show ip interface brief    ! Interfészek ellenőrzése
SBranch# show vlan brief            ! VLAN ellenőrzése`}
        />
      </DocSection>

      <DocSection id="pt-acl-pt" title="🔒 15. ACL és Biztonság — ENB Hálózat">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Hozzáférési listák a Branch okostelefon letiltásához és egyéb korlátozásokhoz.
        </div>

        <h4>BranchSmartphone letiltása MAC-cím alapján (WRBranch)</h4>
        <CodeBlock
          lang="cisco"
          label="MAC-szűrés WRBranch WiFi routeren"
          code={`! WRBranch GUI-ban: Wireless → Wireless MAC Filter
! MAC Filter: Enabled
! Filter Rule: Allow (whitelist) vagy Block (blacklist)
! 
! BranchSmartphone MAC-címének letiltása:
!   VAGY: csak a megadott MAC-ek engedélyezése
!   VAGY: a Smartphone MAC feketelistára tétele`}
        />

        <h4>TrustMe.com korlátozása az Office LAN felől</h4>
        <CodeBlock
          lang="cisco"
          label="ACL — TrustMe.com letiltása"
          code={`! Extended ACL a TrustMe.com elérésének tiltására
! (ha az OfficeWR vagy RENB támogatja)

! Feltételezve, hogy TrustMe.com IP-je ismert (pl. 64.100.0.100)
RENB(config)# access-list 101 deny tcp 51.61.71.160 0.0.0.15 host 64.100.0.100 eq 80
RENB(config)# access-list 101 deny tcp 51.61.71.160 0.0.0.15 host 64.100.0.100 eq 443
RENB(config)# access-list 101 permit ip any any

! Alkalmazás a belső interfészre (bejövő irány)
RENB(config)# interface GigabitEthernet0/0/0
RENB(config-if)# ip access-group 101 in`}
        />

        <h4>Biztonsági összefoglaló</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Eszköz</th><th>Biztonsági elem</th><th>Részletek</th></tr></thead>
            <tbody>
              <tr><td>RENB</td><td><code>enable secret</code></td><td><code>enapass</code></td></tr>
              <tr><td>RBranch</td><td><code>enable secret</code></td><td><code>rbranchenapass</code></td></tr>
              <tr><td>SBranch</td><td>SSH</td><td><code>admin / sshpass</code></td></tr>
              <tr><td>WRBranch</td><td>WPA2-PSK</td><td><code>branchwifipass</code></td></tr>
              <tr><td>HelpdeskWLC</td><td>WPA2-PSK</td><td><code>helpdeskwifipass</code></td></tr>
              <tr><td>BranchSmartphone</td><td>MAC-szűrés</td><td>Kitiltva a <code>branchwifi</code> hálózatról</td></tr>
              <tr><td>Office LAN</td><td>ACL</td><td>TrustMe.com hozzáférés korlátozása</td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="pt-dhcp-setup" title="⚙️ 16. DHCP és DNS Beállítások">
        <div className="alert alert-info">
          <strong>Témakör:</strong> DHCP szerver konfiguráció ENB_DHCPServer és WRBranch eszközökön.
        </div>

        <h4>ENB_DHCPServer — Központi DHCP (IPv4)</h4>
        <CodeBlock
          lang="cisco"
          label="DHCP pool az ENB LAN-hoz"
          code={`! ENB_DHCPServer (Packet Tracer GUI: Services → DHCP)
!
! Pool neve: ENB_LAN
! Default Gateway: 50.60.70.254
! DNS Server: 50.60.70.176
! Start IP: 50.60.70.129
! Subnet Mask: 255.255.255.128
! Max Users: 100
!
! Kiosztandó kliensek:
!   - OfficeWR Internet port (dinamikus)
!   - HelpdeskLaptop1 (dinamikus)
!   - HelpdeskLaptop2 (dinamikus)`}
        />

        <h4>WRBranch — Branch DHCP (IPv4)</h4>
        <CodeBlock
          lang="cisco"
          label="DHCP pool a Branch WiFi-hez"
          code={`! WRBranch GUI: Setup → Network Setup
!
! Router IP (LAN): 53.63.73.126
! Subnet Mask: 255.255.255.224
! DHCP Server: Enabled
! Start IP Address: 53.63.73.97
! Maximum Users: 25
!
! Kiosztandó kliensek:
!   - BranchPCWireless
!   - BranchLaptop
!   - BranchTablet
!
! ⚠️ BranchSmartphone — NEM kap IP-t (letiltva)`}
        />

        <h4>OfficeWR — Office DHCP (IPv4)</h4>
        <CodeBlock
          lang="cisco"
          label="DHCP pool az Office LAN-hoz"
          code={`! OfficeWR GUI: Setup → Network Setup
!
! Router IP (LAN): 51.61.71.174
! Subnet Mask: 255.255.255.240
! DHCP Server: Enabled
! Start IP Address: 51.61.71.161
! Maximum Users: 10
!
! DHCP Reservation (fenntartott cím):
!   AdminPC → 51.61.71.164
!   (a címtartomány 4. érvényes címe)`}
        />

        <h4>DNS beállítások</h4>
        <CodeBlock
          lang="cisco"
          label="DNS szerver konfiguráció"
          code={`! ENB_DHCPServer (Packet Tracer GUI: Services → DNS)
!
! DNS Service: ON
! 
! Névfeloldások:
!   enb.nhely.hu       → 50.60.70.254 (RENB belső)
!   branch.enb.nhely.hu → 52.62.72.126 (RBranch belső)
!
! Külső DNS (Internet):
!   DNSServer — az Internet felhőben található`}
        />
      </DocSection>

      <DocSection id="pt-checklist" title="✅ 17. Konfigurációs Ellenőrzőlista">
        <div className="alert alert-success">
          <strong>Végigmentél mindenen?</strong> Használd ezt a listát a teljes konfiguráció ellenőrzéséhez.
        </div>

        <h4>🔲 Alapbeállítások</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ RENB: hostname, enable secret (<code>enapass</code>), konzol jelszó (<code>conpass</code>), banner</li>
          <li className="list-group-item">☐ RBranch: hostname, enable secret (<code>rbranchenapass</code>), konzol jelszó (<code>rbranchconpass</code>), banner</li>
          <li className="list-group-item">☐ SBranch: hostname, enable secret (<code>enapass</code>), SSH (<code>admin/sshpass</code>)</li>
          <li className="list-group-item">☐ Minden eszközön: <code>service password-encryption</code></li>
        </ul>

        <h4>🔲 IP-címzés — ENB LAN (50.60.70.128/25)</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ RENB Gig0/0/0: <strong>50.60.70.254/25</strong></li>
          <li className="list-group-item">☐ RENB Gig0/0/0 IPv6: <strong>2026:5:7::1/64</strong>, link-local <strong>FE80::1</strong></li>
          <li className="list-group-item">☐ ENB_DHCPServer: <strong>50.60.70.176/25</strong>, IPv6: <strong>2026:5:7::30/64</strong></li>
          <li className="list-group-item">☐ RENB Gig0/1/0: ⚠️ NEM módosítva</li>
        </ul>

        <h4>🔲 IP-címzés — Branch LAN (52.62.72.64/26)</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ RBranch Gig0/0: <strong>52.62.72.126/26</strong></li>
          <li className="list-group-item">☐ RBranch Gig0/0 IPv6: <strong>2026:5:7:FF::1/64</strong>, link-local <strong>FE80::1</strong></li>
          <li className="list-group-item">☐ SBranch VLAN1: <strong>52.62.72.125/26</strong></li>
          <li className="list-group-item">☐ BranchPCWired: <strong>52.62.72.80/26</strong>, IPv6: <strong>2026:5:7:FF::10/64</strong></li>
          <li className="list-group-item">☐ WRBranch Internet: <strong>52.62.72.96/26</strong></li>
          <li className="list-group-item">☐ RBranch Gig0/1/0: ⚠️ NEM módosítva</li>
        </ul>

        <h4>🔲 IP-címzés — Branch WiFi (53.63.73.96/27)</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ WRBranch LAN: <strong>53.63.73.126/27</strong></li>
          <li className="list-group-item">☐ BranchPCWireless, BranchLaptop, BranchTablet: DHCP</li>
          <li className="list-group-item">☐ BranchSmartphone: 🚫 NEM módosítva</li>
        </ul>

        <h4>🔲 IP-címzés — Office LAN (51.61.71.160/28)</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ OfficeWR Internet: DHCP (ENB_DHCPServer-től)</li>
          <li className="list-group-item">☐ OfficeWR LAN: <strong>51.61.71.174/28</strong></li>
          <li className="list-group-item">☐ AdminPC: DHCP fenntartva <strong>51.61.71.164</strong></li>
        </ul>

        <h4>🔲 WiFi és Biztonság</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ WRBranch SSID: <code>branchwifi</code>, WPA2-PSK: <code>branchwifipass</code></li>
          <li className="list-group-item">☐ HelpdeskWLC SSID: <code>helpdeskwifi</code>, WPA2-PSK: <code>helpdeskwifipass</code></li>
          <li className="list-group-item">☐ BranchSmartphone letiltva a branchwifi hálózatról</li>
          <li className="list-group-item">☐ TrustMe.com korlátozása Office LAN felől</li>
        </ul>

        <h4>🔲 Végellenőrzés</h4>
        <ul className="list-group mb-3">
          <li className="list-group-item">☐ <code>show ip interface brief</code> — minden interfész <strong>up/up</strong>?</li>
          <li className="list-group-item">☐ <code>ping</code> tesztek a hálózatok között</li>
          <li className="list-group-item">☐ <code>show running-config</code> — konfiguráció átnézése</li>
          <li className="list-group-item">☐ <code>copy running-config startup-config</code> — mentés</li>
          <li className="list-group-item">☐ WiFi kliensek csatlakoznak és kapnak IP-címet?</li>
          <li className="list-group-item">☐ BranchSmartphone valóban nem fér hozzá a hálózathoz?</li>
        </ul>
      </DocSection>
    </>
  );
}
