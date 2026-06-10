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
    </>
  );
}
