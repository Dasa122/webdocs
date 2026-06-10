import { DocSection, CodeBlock } from './DocComponents';

export default function PythonDocs() {
  return (
    <>
      <DocSection id="python-basics" title="🐍 1. Alapok — Input, Számolás, Feltétel">
        <div className="alert alert-info">
          <strong>Témakör:</strong> <code>print()</code>, <code>input()</code>, <code>int()</code>, f-string, <code>if/else</code> — a Python alapjai.
        </div>

        <h4>Miről lesz szó?</h4>
        <p>
          Megtanuljuk, hogyan kérjünk be adatot a felhasználótól, hogyan végezzünk
          számolásokat, és hogyan hozzunk döntéseket feltételek alapján.
          Egy egyszerű <strong>átlagszámító</strong> programon keresztül mutatjuk be.
        </p>

        <h4>Teljes példa: Átlagszámítás</h4>
        <CodeBlock
          lang="python"
          label="atlag.py"
          code={`print("Átlagszámító program")
osszeg = int(input("Add meg az összeget: "))
darab = int(input("Add meg a darabszámot: "))
atlag = osszeg / darab
print(f"Az átlag: {round(atlag, 2)}")
if atlag >= 80:
    print("Kitűnő eredmény!")
else:
    print("Van még hova fejlődni!")`}
        />

        <h4>Kulcs fogalmak</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Fogalom</th><th>Leírás</th><th>Példa</th></tr></thead>
            <tbody>
              <tr><td><code>input()</code></td><td>Bekér egy szöveget a felhasználótól</td><td><code>input("Név: ")</code></td></tr>
              <tr><td><code>int()</code></td><td>Szöveg → egész szám átalakítás</td><td><code>int("42") → 42</code></td></tr>
              <tr><td><code>float()</code></td><td>Szöveg → lebegőpontos szám</td><td><code>float("3.14") → 3.14</code></td></tr>
              <tr><td><code>print()</code></td><td>Kiíratás a konzolra</td><td><code>print("Hello")</code></td></tr>
              <tr><td><code>f"..."</code></td><td>Formázott string változókkal</td><td><code>f"Érték: {'{'}x{'}'}"</code></td></tr>
              <tr><td><code>round(x, n)</code></td><td>Kerekítés n tizedesjegyre</td><td><code>round(3.1415, 2) → 3.14</code></td></tr>
              <tr><td><code>if/else</code></td><td>Feltételes elágazás</td><td><code>if x &gt; 5: ... else: ...</code></td></tr>
              <tr><td><code>and / or</code></td><td>Logikai operátorok</td><td><code>x &gt; 0 and x &lt; 10</code></td></tr>
              <tr><td><code>/</code></td><td>Osztás (lebegőpontos eredmény)</td><td><code>10 / 4 → 2.5</code></td></tr>
            </tbody>
          </table>
        </div>

        <h4>🔢 Típuskonverziók</h4>
        <CodeBlock
          lang="python"
          label="Típusok közötti átalakítás"
          code={`szoveg = "123"
szam = int(szoveg)      # "123" → 123
lebeg = float("3.14")   # "3.14" → 3.14
vissza = str(42)        # 42 → "42"
print(type(szam))       # <class 'int'>`}
        />

        <h4>📐 Kétféle ciklus: range vs elem bejárás</h4>
        <CodeBlock
          lang="python"
          label="for ciklus — két stílus"
          code={`nevek = ["Anna", "Béla", "Cili"]

# 1. Index alapján (range + len)
for i in range(len(nevek)):
    print(f"{i+1}. {nevek[i]}")

# 2. Közvetlen elem bejárás
for nev in nevek:
    print(nev)`}
        />
      </DocSection>

      <DocSection id="python-lists" title="📋 2. Listák és Keresés">
        <div className="alert alert-info">
          <strong>Témakör:</strong> Lista műveletek, bejárás, keresés, <code>len()</code>, <code>in</code>, <code>range()</code>.
        </div>

        <h4>Miről lesz szó?</h4>
        <p>
          A lista a Python egyik legfontosabb adatszerkezete. Megtanuljuk létrehozni,
          bejárni, keresni benne, és megkeresni a leghosszabb/legrövidebb elemet.
          Egy <strong>tevékenység-nyilvántartó</strong> példán keresztül mutatjuk be.
        </p>

        <h4>Lista létrehozása</h4>
        <CodeBlock
          lang="python"
          label="Tevékenységek listája"
          code={`tevekenysegek = [
    "Futás",
    "Olvasás",
    "Meditáció",
    "Gitározás",
    "Kertészkedés",
    "Főzés",
    "Rajzolás",
    "Naplóírás",
    "Jógázás",
    "Fényképezés"
]`}
        />

        <h4>1. Lista kiíratása — kétféle stílus</h4>
        <CodeBlock
          lang="python"
          label="Sorszámozott kiíratás (két módszer)"
          code={`# A) Saját számlálóval
sorszam = 1
for tevekenyseg in tevekenysegek:
    print(f"{sorszam}. {tevekenyseg}")
    sorszam += 1

# B) range + len — index alapján
for i in range(len(tevekenysegek)):
    print(f"{i+1}. {tevekenysegek[i]}")`}
        />

        <h4>2. Keresés a listában</h4>
        <CodeBlock
          lang="python"
          label="Tagság vizsgálata — in operátor"
          code={`keresett = input("Mit keresel? ")
if keresett in tevekenysegek:
    print("Megtaláltam a listában!")
else:
    print("Nincs ilyen tevékenység.")`}
        />

        <h4>3. Leghosszabb elem — kétféle gondolkodás</h4>
        <CodeBlock
          lang="python"
          label="Leghosszabb név — A) kezdőérték a lista első eleme"
          code={`# A) Kezdés a lista első elemével
leghosszabb = tevekenysegek[0]
for t in tevekenysegek:
    if len(t) > len(leghosszabb):
        leghosszabb = t
print(f"A leghosszabb: {leghosszabb}")`}
        />
        <CodeBlock
          lang="python"
          label="Leghosszabb név — B) max hossz tárolása külön"
          code={`# B) Külön változóban a maximális hossz
max_hossz = 0
for t in tevekenysegek:
    if len(t) > max_hossz:
        max_hossz = len(t)

for t in tevekenysegek:
    if len(t) == max_hossz:
        print(f"A leghosszabb: {t}")`}
        />

        <h4>Kulcs fogalmak</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Fogalom</th><th>Leírás</th><th>Példa</th></tr></thead>
            <tbody>
              <tr><td><code>lista = [...]</code></td><td>Elemek rendezett gyűjteménye</td><td><code>szinek = ["piros", "kék"]</code></td></tr>
              <tr><td><code>for x in lista:</code></td><td>Bejárás elemenként</td><td><code>for szin in szinek:</code></td></tr>
              <tr><td><code>range(len(l))</code></td><td>Indexek: 0,1,2,...</td><td><code>for i in range(len(l)):</code></td></tr>
              <tr><td><code>lista[i]</code></td><td>Elem elérése index alapján</td><td><code>szinek[0] → "piros"</code></td></tr>
              <tr><td><code>in</code> operátor</td><td>Tagság vizsgálata</td><td><code>"kék" in szinek → True</code></td></tr>
              <tr><td><code>len()</code></td><td>String hossza / lista elemszám</td><td><code>len("abc") → 3</code></td></tr>
              <tr><td><code>def fn():</code></td><td>Függvény definíció</td><td><code>def osszeg(a, b): return a+b</code></td></tr>
              <tr><td><code>return</code></td><td>Visszatérési érték</td><td><code>return eredmeny</code></td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="python-classes" title="🏗️ 3. Osztályok és Fájlkezelés">
        <div className="alert alert-info">
          <strong>Témakör:</strong> <code>class</code>, <code>__init__</code>, <code>self</code>, <code>open()</code>, CSV beolvasás.
        </div>

        <h4>Miről lesz szó?</h4>
        <p>
          Saját osztályok készítése, fájlok beolvasása és objektumlisták feldolgozása.
          Egy <strong>tanulói nyilvántartó</strong> rendszeren keresztül mutatjuk be.
        </p>

        <h4>Adatfájl formátuma (CSV)</h4>
        <CodeBlock
          lang="text"
          label="diakok.txt — pontosvesszővel tagolt adatok"
          code={`Név;Osztály;Jegy;Tantárgy
Kiss Anna;10.A;4;Matematika
Nagy Béla;10.B;5;Történelem
Kovács Cili;10.A;3;Matematika
Tóth Dénes;10.C;4;Fizika
Szabó Emma;10.B;5;Matematika
...`}
        />

        <h4>Osztály definíció — kétféle konstruktor stílus</h4>
        <CodeBlock
          lang="python"
          label="A) Konstruktor egyedi paraméterekkel"
          code={`class Diak:
    def __init__(self, nev, osztaly, jegy, tantargy):
        self.nev = nev
        self.osztaly = osztaly
        self.jegy = int(jegy)
        self.tantargy = tantargy

    def __str__(self):
        return f"{self.nev} ({self.osztaly}): "\
               f"{self.tantargy} — {self.jegy}"`}
        />
        <CodeBlock
          lang="python"
          label="B) Konstruktor egy nyers sorból (sor feldolgozása belül)"
          code={`class Diak:
    def __init__(self, sor):
        reszek = sor.strip().split(";")
        self.nev = reszek[0]
        self.osztaly = reszek[1]
        self.jegy = int(reszek[2])
        self.tantargy = reszek[3]

    def __str__(self):
        return f"{self.nev} {self.osztaly} "\
               f"{self.jegy} {self.tantargy}"`}
        />

        <h4>Fájl beolvasása</h4>
        <CodeBlock
          lang="python"
          label="CSV → objektum lista"
          code={`diakok = []

# A) with — automatikus lezárás (ajánlott)
def beolvas():
    with open("diakok.txt", "r", encoding="UTF-8") as f:
        f.readline()  # fejléc átugrása
        for sor in f:
            diakok.append(Diak(sor))

# B) Kézi open/close (régebbi stílus)
def beolvas_manual():
    f = open("diakok.txt", encoding="UTF-8")
    f.readline()
    for sor in f:
        diakok.append(Diak(sor))
    f.close()  # NE felejtsd el!`}
        />

        <h4>Kulcs fogalmak</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Fogalom</th><th>Leírás</th><th>Példa</th></tr></thead>
            <tbody>
              <tr><td><code>class</code></td><td>Osztály definíció (sablon)</td><td><code>class Auto:</code></td></tr>
              <tr><td><code>__init__(self)</code></td><td>Konstruktor — példány inicializálása</td><td><code>def __init__(self, nev):</code></td></tr>
              <tr><td><code>self</code></td><td>Az aktuális példányra hivatkozás</td><td><code>self.nev = nev</code></td></tr>
              <tr><td><code>__str__(self)</code></td><td>Szöveges reprezentáció</td><td><code>print(obj)</code> hívja</td></tr>
              <tr><td><code>open("f", "r")</code></td><td>Fájl megnyitása olvasásra</td><td><code>open("adat.txt","r",encoding="UTF-8")</code></td></tr>
              <tr><td><code>with ... as f:</code></td><td>Kontextuskezelő — auto lezár</td><td><code>with open(...) as f:</code></td></tr>
              <tr><td><code>.strip()</code></td><td>Whitespace + újsor levágása</td><td><code>"  a\n".strip() → "a"</code></td></tr>
              <tr><td><code>.split(";")</code></td><td>Feldarabolás adott elválasztónál</td><td><code>"a;b".split(";") → ["a","b"]</code></td></tr>
              <tr><td><code>f.close()</code></td><td>Fájl kézi lezárása</td><td><code>f.close()</code></td></tr>
            </tbody>
          </table>
        </div>
      </DocSection>

      <DocSection id="python-dicts" title="📖 4. Szótárak (Dictionary) — A legfontosabb tudnivalók">
        <div className="alert alert-info">
          <strong>Témakör:</strong> <code>dict</code>, kulcs-érték párok, bejárás, összesítés, <code>max()/min()</code> kulcs alapján, <code>set()</code> alternatíva.
        </div>

        <h4>Mi az a szótár (dict)?</h4>
        <p>
          A szótár <strong>kulcs-érték párokat</strong> tárol. A kulcs alapján azonnal elérjük
          a hozzá tartozó értéket — mint egy igazi szótárban a szó → jelentés.
          Ez a Python <strong>leghasznosabb adatszerkezete</strong> összesítésekhez, statisztikákhoz.
        </p>

        <h4>① Létrehozás és alapműveletek</h4>
        <CodeBlock
          lang="python"
          label="Szótár alapok"
          code={`# Üres szótár
stat = {}
adatok = dict()

# Értékadás
stat["Anna"] = 95
stat["Béla"] = 87
stat["Cili"] = 92

# Lekérdezés
print(stat["Anna"])        # 95 — HIBA ha nincs ilyen kulcs!
print(stat.get("Dezső"))   # None — biztonságos, nem dob hibát
print(stat.get("Dezső", 0)) # 0 — alapértelmezett érték ha nincs kulcs

# Létezés ellenőrzése
if "Anna" in stat:
    print("Anna benne van")

# Törlés
del stat["Béla"]`}
        />

        <h4>② Bejárás — keys(), values(), items()</h4>
        <CodeBlock
          lang="python"
          label="Szótár bejárása"
          code={`stat = {"Anna": 95, "Béla": 87, "Cili": 92}

# Csak kulcsok
for kulcs in stat:
    print(kulcs)                # Anna, Béla, Cili

for kulcs in stat.keys():
    print(kulcs)                # Ugyanaz

# Csak értékek
for ertek in stat.values():
    print(ertek)                # 95, 87, 92

# Kulcs + érték egyszerre
for kulcs, ertek in stat.items():
    print(f"{kulcs}: {ertek}")  # Anna: 95 ...`}
        />

        <h4>③ Összesítés (számlálás / akkumulálás) — A LEGFONTOSABB MINTA</h4>
        <p>
          Ez a minta <strong>minden adatfeldolgozási feladatban előjön</strong>:
          végigmegyünk egy listán, és szótárban gyűjtjük az összegeket/darabszámokat.
        </p>
        <CodeBlock
          lang="python"
          label="Összesítés szótárral — tankönyvi minta"
          code={`diakok = [...]  # Diak objektumok listája

# Cél: tantárgyankénti összpontszám
tantargy_osszeg = {}
for d in diakok:
    kulcs = d.tantargy
    if kulcs not in tantargy_osszeg:
        tantargy_osszeg[kulcs] = 0
    tantargy_osszeg[kulcs] += d.jegy

# Eredmény kiíratása
for kulcs, osszeg in tantargy_osszeg.items():
    print(f"{kulcs}: {osszeg} pont")`}
        />
        <div className="alert alert-warning">
          <strong>⚠️ Figyelem!</strong> A <code>if kulcs not in dict: dict[kulcs] = 0</code> sor
          <strong>kötelező</strong>, különben <code>KeyError</code> hibát kapsz, amikor először
          próbálsz hozzáadni egy még nem létező kulcshoz!
        </div>

        <h4>④ max() / min() kulcs alapján</h4>
        <CodeBlock
          lang="python"
          label="Maximum keresés szótárban"
          code={`pontok = {"Anna": 95, "Béla": 87, "Cili": 92, "Dezső": 78}

# Legjobb pontszámú diák
legjobb = max(pontok, key=pontok.get)
print(f"A legjobb: {legjobb} — {pontok[legjobb]} pont")

# Legrosszabb
legrosszabb = min(pontok, key=pontok.get)
print(f"A leggyengébb: {legrosszabb} — {pontok[legrosszabb]} pont")

# Hogy működik?
# A key=pontok.get azt mondja: ne a kulcsot hasonlítsd,
# hanem a kulcshoz tartozó ÉRTÉKET (pontok.get(kulcs))`}
        />

        <h4>⑤ Egyedi elemek kigyűjtése — két módszer</h4>
        <CodeBlock
          lang="python"
          label="A) Kézi szűrés listával (not in)"
          code={`# Lista: többször is előfordulhat egy elem
tantargyak = ["Matek", "Töri", "Matek", "Fizika"]

egyedi = []
for t in tantargyak:
    if t not in egyedi:
        egyedi.append(t)
print(egyedi)  # ["Matek", "Töri", "Fizika"]`}
        />
        <CodeBlock
          lang="python"
          label="B) set() — automatikusan egyedi (nincs ismétlődés)"
          code={`tantargyak = ["Matek", "Töri", "Matek", "Fizika"]

egyedi = set(tantargyak)  # {'Matek', 'Töri', 'Fizika'}
print(*egyedi, sep=", ")  # Matek, Töri, Fizika

# set-hez hozzáadás
halmaz = set()
halmaz.add("Matek")
halmaz.add("Töri")
halmaz.add("Matek")  # Nem kerül bele mégegyszer!
print(halmaz)  # {'Matek', 'Töri'}`}
        />

        <h4>📊 Szótár műveletek — Gyorsreferencia</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Művelet</th><th>Kód</th><th>Magyarázat</th></tr></thead>
            <tbody>
              <tr><td>Létrehozás</td><td><code>d = {'{...}'}</code> / <code>dict()</code></td><td>Üres vagy kezdőértékes</td></tr>
              <tr><td>Értékadás</td><td><code>d[kulcs] = ertek</code></td><td>Új kulcs felvitele / felülírás</td></tr>
              <tr><td>Lekérdezés</td><td><code>d[kulcs]</code></td><td>Hibát dob, ha nincs kulcs</td></tr>
              <tr><td>Bizt. lekérdezés</td><td><code>d.get(kulcs, alap)</code></td><td>Ha nincs, <code>alap</code>-ot ad vissza</td></tr>
              <tr><td>Létezés?</td><td><code>kulcs in d</code></td><td><code>True</code> / <code>False</code></td></tr>
              <tr><td>Létezés? (nem)</td><td><code>kulcs not in d</code></td><td>Fordított ellenőrzés</td></tr>
              <tr><td>Törlés</td><td><code>del d[kulcs]</code></td><td>Kulcs-érték pár törlése</td></tr>
              <tr><td>Kulcsok</td><td><code>d.keys()</code></td><td>Összes kulcs listája</td></tr>
              <tr><td>Értékek</td><td><code>d.values()</code></td><td>Összes érték listája</td></tr>
              <tr><td>Párok</td><td><code>d.items()</code></td><td>(kulcs, érték) párok</td></tr>
              <tr><td>Max kulcs szerint</td><td><code>max(d, key=d.get)</code></td><td>Amelyikhez a legnagyobb érték tartozik</td></tr>
              <tr><td>Min kulcs szerint</td><td><code>min(d, key=d.get)</code></td><td>Amelyikhez a legkisebb érték tartozik</td></tr>
              <tr><td>Elemek száma</td><td><code>len(d)</code></td><td>Kulcs-érték párok száma</td></tr>
            </tbody>
          </table>
        </div>

        <h4>🔥 Összesítés — teljes, kompakt példa</h4>
        <CodeBlock
          lang="python"
          label="Teljes összesítő minta: termék eladások"
          code={`# Bemeneti adatok (lista)
eladasok = [
    ("alma", 3),
    ("körte", 2),
    ("alma", 5),
    ("szilva", 1),
    ("körte", 4),
]

# Összesítés szótárral
stat = {}
for nev, mennyiseg in eladasok:
    if nev not in stat:
        stat[nev] = 0
    stat[nev] += mennyiseg

# Kiíratás
for nev, ossz in stat.items():
    print(f"{nev}: {ossz} db")

# Legnépszerűbb termék
top = max(stat, key=stat.get)
print(f"A legtöbbet eladott: {top}")`}
        />
      </DocSection>

      <DocSection id="python-summary" title="📝 5. Összefoglaló — Python Alapok">
        <h4>Tematikus áttekintés</h4>
        <div className="table-responsive">
          <table className="table table-bordered table-sm">
            <thead className="table-light"><tr><th>Témakör</th><th>Kulcs fogalmak</th><th>Példa</th></tr></thead>
            <tbody>
              <tr>
                <td><strong>Ki- és bemenet</strong></td>
                <td><code>print()</code>, <code>input()</code>, <code>int()</code>, <code>float()</code></td>
                <td>Átlagszámító</td>
              </tr>
              <tr>
                <td><strong>Vezérlés</strong></td>
                <td><code>if</code>, <code>else</code>, <code>elif</code>, <code>and</code>, <code>or</code></td>
                <td>Feltételes elágazások</td>
              </tr>
              <tr>
                <td><strong>Ciklusok</strong></td>
                <td><code>for ... in</code>, <code>range()</code>, <code>len()</code></td>
                <td>Index alapú / elem alapú bejárás</td>
              </tr>
              <tr>
                <td><strong>Listák</strong></td>
                <td><code>[...]</code>, <code>.append()</code>, <code>in</code>, indexelés</td>
                <td>Tevékenység-nyilvántartó</td>
              </tr>
              <tr>
                <td><strong>Függvények</strong></td>
                <td><code>def</code>, <code>return</code>, paraméterek</td>
                <td>Saját függvények írása</td>
              </tr>
              <tr>
                <td><strong>Osztályok (OOP)</strong></td>
                <td><code>class</code>, <code>__init__</code>, <code>self</code>, <code>__str__</code></td>
                <td>Diak osztály</td>
              </tr>
              <tr>
                <td><strong>Fájlkezelés</strong></td>
                <td><code>open()</code>, <code>with</code>, <code>.strip()</code>, <code>.split()</code></td>
                <td>CSV beolvasás</td>
              </tr>
              <tr>
                <td><strong>Szótárak ⭐</strong></td>
                <td><code>{'{...}'}</code>, <code>.items()</code>, <code>.get()</code>, <code>max(key=)</code></td>
                <td>Összesítés, statisztika</td>
              </tr>
              <tr>
                <td><strong>Halmazok</strong></td>
                <td><code>set()</code>, <code>.add()</code></td>
                <td>Egyedi elemek kigyűjtése</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4>🔗 Hasznos linkek</h4>
        <ul>
          <li><a href="https://docs.python.org/3/tutorial/" target="_blank" rel="noopener">Python hivatalos tutorial</a></li>
          <li><a href="https://docs.python.org/3/library/stdtypes.html#mapping-types-dict" target="_blank" rel="noopener">Python dict dokumentáció</a></li>
          <li><a href="https://www.w3schools.com/python/python_dictionaries.asp" target="_blank" rel="noopener">W3Schools — Python Dictionaries</a></li>
          <li><a href="https://realpython.com/python-dicts/" target="_blank" rel="noopener">Real Python — Dictionaries</a></li>
        </ul>
      </DocSection>
    </>
  );
}
