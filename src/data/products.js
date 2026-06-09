/**
 * Termékadatokat tartalmazó fájl.
 * Az adatok az eredeti index.html táblázatából és oldaláról származnak.
 */

export const products = [
  {
    id: 1,
    brand: 'ASUS',
    model: 'VivoMini PB62-BB3021MV',
    cpu: 'Intel Core i3',
    cpuClock: '3700 MHz',
    ram: 'Memória nélkül',
    ramType: 'DDR4',
    price: '64 999 Ft-tól',
    image: '001.jpg',
    color: 'text-warning',
    link: null,
  },
  {
    id: 2,
    brand: 'UMAX',
    model: 'UMM210J44',
    cpu: 'Intel Celeron',
    cpuClock: '2700 MHz',
    ram: '8 GB',
    ramType: 'DDR4',
    price: '65 240 Ft-tól',
    image: '002.jpg',
    color: 'text-danger',
    link: null,
  },
  {
    id: 3,
    brand: 'Apple',
    model: 'Mac Studio M2 MQH73MG',
    cpu: 'Apple M2',
    cpuClock: 'Nincs információ',
    ram: '32 GB',
    ramType: 'Nem bővíthető',
    price: '869 999 Ft-tól',
    image: '003.jpg',
    color: 'text-success',
    link: '/apple',
  },
  {
    id: 4,
    brand: 'Intel',
    model: 'BNUC11ATKPE0002',
    cpu: 'Intel Pentium',
    cpuClock: '2000 MHz',
    ram: 'Memória nélkül',
    ramType: 'DDR4',
    price: '92 170 Ft-tól',
    image: '004.jpg',
    color: 'text-primary',
    link: null,
  },
];

export const appleDetail = {
  model: 'Apple Mac Studio M2 MQH73MG',
  specs: [
    { label: '12-magos CPU' },
    { label: 'M2 processzor' },
    { label: '32 GB RAM' },
    { label: '128 GB SSD' },
  ],
  images: [
    { src: '003.jpg', alt: 'Apple számítógép szemből', title: 'Apple számítógép — elölnézet' },
    { src: '005.jpg', alt: 'Apple számítógép hátulról', title: 'Apple számítógép — hátulnézet' },
    { src: '006.jpg', alt: 'Apple számítógép alulról', title: 'Apple számítógép — alulnézet' },
    { src: '007.jpg', alt: 'Apple számítógép felülről', title: 'Apple számítógép — felülnézet' },
  ],
};

export const distributors = [
  { name: 'Mysoft', url: '#' },
  { name: 'Euronics', url: '#' },
  { name: 'Aqua', url: '#' },
];

export const contactInfo = {
  address: {
    title: 'Cím',
    lines: ['1146 Budapest,', 'Thököly út 48-54.'],
  },
  contact: {
    title: 'Email/Telefon',
    lines: ['info@petrik.hu', '+36 70 502 1724'],
  },
};

export const siteInfo = {
  title: 'Árukergető',
  subtitle: 'Mini számítógép konfigurációk',
  alertText: 'Gratulálunk! 15% engedményt kap, ha használja a PETRIK-15 kuponkódot vásárláskor!',
  author: 'Czikkely Imre',
  class: '10.E',
  date: '2026.05.20.',
};
