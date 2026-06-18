/* ===================== TIERS V4 - Ultra-Kid-Friendly ===================== */
// Noch niedlicher, größere Köpfe, einfachere Formen, bessere Farben

const O = '#33281A'; // Outline
const svgW = (w, h, vb) => `viewBox="0 0 ${w||150} ${h||150}" xmlns="http://www.w3.org/2000/svg"`;
const svgWrapV4 = (content) => `<svg ${svgW(150,150)}>${content}</svg>`;

// Helfer: Auge mit Glanz für niedlichen Look
const augeV4 = (cx, cy, r) => 
  `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFF" stroke="${O}" stroke-width="1.5"/>`+
  `<circle cx="${cx}" cy="${cy}" r="${r*0.5}" fill="#222"/>`+
  `<circle cx="${cx+r*0.25}" cy="${cy-r*0.25}" r="${r*0.25}" fill="#FFF" opacity="0.9"/>`;

// Wangen-Blush
const wangeV4 = (cx, cy, rx, ry) => 
  `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#FFB6C1" opacity="0.6"/>`;

// ===================== HUND V4 - Super-Niedlich =====================
const hundV4 = (bodyColor, earColor) => svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="45" ry="8" fill="#000" opacity="0.15"/>`+
  // Hinterbeine
  `<ellipse cx="45" cy="115" rx="12" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="105" cy="115" rx="12" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="45" cy="128" rx="10" ry="6" fill="#3A2814"/>`+
  `<ellipse cx="105" cy="128" rx="10" ry="6" fill="#3A2814"/>`+
  // Körper - rund und kuschelig
  `<ellipse cx="75" cy="95" rx="42" ry="32" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="90" rx="30" ry="20" fill="#FFF" opacity="0.3"/>`+
  // Schwanz - wedelnd
  `<path d="M110 85 Q135 65 140 80 Q145 95 130 90" fill="none" stroke="${earColor}" stroke-width="10" stroke-linecap="round"/>`+
  // Vorderbeine
  `<ellipse cx="60" cy="118" rx="10" ry="16" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="90" cy="118" rx="10" ry="16" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="60" cy="128" rx="8" ry="5" fill="#3A2814"/>`+
  `<ellipse cx="90" cy="128" rx="8" ry="5" fill="#3A2814"/>`+
  // Kopf - GROSS und rund
  `<ellipse cx="75" cy="55" rx="38" ry="32" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  // Ohren - floppy und groß
  `<ellipse cx="45" cy="45" rx="14" ry="22" fill="${earColor}" stroke="${O}" stroke-width="2" transform="rotate(-25 45 45)"/>`+
  `<ellipse cx="105" cy="45" rx="14" ry="22" fill="${earColor}" stroke="${O}" stroke-width="2" transform="rotate(25 105 45)"/>`+
  `<ellipse cx="48" cy="48" rx="7" ry="14" fill="#FFEFD5" opacity="0.6" transform="rotate(-25 45 45)"/>`+
  `<ellipse cx="102" cy="48" rx="7" ry="14" fill="#FFEFD5" opacity="0.6" transform="rotate(25 105 45)"/>`+
  // Schnauze
  `<ellipse cx="75" cy="68" rx="18" ry="12" fill="#FFEFD5" stroke="${O}" stroke-width="1.5"/>`+
  // Nase
  `<ellipse cx="75" cy="62" rx="6" ry="4" fill="#4A2E1B"/>`+
  `<ellipse cx="73" cy="61" rx="2" ry="1" fill="#6B8E23" opacity="0.5"/>`+
  `<ellipse cx="77" cy="61" rx="2" ry="1" fill="#6B8E23" opacity="0.5"/>`+
  // Mund lächelnd
  `<path d="M68 72 Q75 78 82 72" fill="none" stroke="#4A2E1B" stroke-width="2.5" stroke-linecap="round"/>`+
  // Zunge
  `<ellipse cx="75" cy="76" rx="6" ry="4" fill="#FF69B4" opacity="0.8"/>`+
  // Wangen
  wangeV4(55, 60, 10, 6) + wangeV4(95, 60, 10, 6) +
  // Augen - groß und ausdrucksstark
  augeV4(62, 50, 7) + augeV4(88, 50, 7) +
  // Augenbrauen
  `<path d="M58 40 Q62 35 66 40" fill="none" stroke="#E8B84B" stroke-width="2" opacity="0.6"/>`+
  `<path d="M84 40 Q88 35 92 40" fill="none" stroke="#E8B84B" stroke-width="2" opacity="0.6"/>`+
  // Flecken
  `<ellipse cx="55" cy="55" rx="8" ry="5" fill="#3A2814" opacity="0.15"/>`
);

const ruedeV4 = hundV4('#D2691E', '#8B4513');
const huendinV4 = hundV4('#DEB887', '#A0522D');

// ===================== KATZE V4 - Mega-Niedlich =====================
const katzeV4 = (bodyColor, stripes) => svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="40" ry="8" fill="#000" opacity="0.15"/>`+
  // Schwanz - geschwungen
  `<path d="M110 95 Q140 75 135 50 Q130 40 120 48" fill="none" stroke="${bodyColor}" stroke-width="14" stroke-linecap="round"/>`+
  // Hinterbeine
  `<ellipse cx="50" cy="115" rx="10" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="100" cy="115" rx="10" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="50" cy="128" rx="8" ry="5" fill="#FFF5EE"/>`+
  `<ellipse cx="100" cy="128" rx="8" ry="5" fill="#FFF5EE"/>`+
  // Körper
  `<ellipse cx="75" cy="95" rx="38" ry="28" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  // Streifen
  `<path d="M55 85 Q75 90 95 85" stroke="${stripes}" stroke-width="3" opacity="0.4" fill="none"/>`+
  `<path d="M52 95 Q75 100 98 95" stroke="${stripes}" stroke-width="3" opacity="0.4" fill="none"/>`+
  // Vorderbeine
  `<ellipse cx="65" cy="118" rx="8" ry="14" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="85" cy="118" rx="8" ry="14" fill="${bodyColor}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="65" cy="128" rx="6" ry="4" fill="#FFF5EE"/>`+
  `<ellipse cx="85" cy="128" rx="6" ry="4" fill="#FFF5EE"/>`+
  // Kopf - GROSS
  `<ellipse cx="75" cy="55" rx="32" ry="28" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  // Ohren - spitz und niedlich
  `<path d="M52 38 L60 52 L44 52 Z" fill="${bodyColor}" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>`+
  `<path d="M56 42 L58 48 L48 48 Z" fill="#FFB6C1" opacity="0.7"/>`+
  `<path d="M98 38 L106 52 L90 52 Z" fill="${bodyColor}" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>`+
  `<path d="M94 42 L96 48 L102 48 Z" fill="#FFB6C1" opacity="0.7"/>`+
  // Schnurrhaare
  `<path d="M48 62 L38 60 M48 65 L36 65 M48 68 L38 70" stroke="#888" stroke-width="1.5" opacity="0.5"/>`+
  `<path d="M102 62 L112 60 M102 65 L114 65 M102 68 L112 70" stroke="#888" stroke-width="1.5" opacity="0.5"/>`+
  // Schnauze
  `<ellipse cx="75" cy="68" rx="12" ry="8" fill="#FFF5EE" stroke="${O}" stroke-width="1.5"/>`+
  // Nase
  `<ellipse cx="75" cy="64" rx="4" ry="3" fill="#FF69B4"/>`+
  // Mund
  `<path d="M70 70 Q75 74 80 70" fill="none" stroke="#33281A" stroke-width="1.5"/>`+
  // Wangen
  wangeV4(58, 62, 8, 5) + wangeV4(92, 62, 8, 5) +
  // Augen - riesig und niedlich
  augeV4(62, 52, 6.5) + augeV4(88, 52, 6.5) +
  // Stirn-Streifen
  `<path d="M72 35 L75 42 L78 35" stroke="${stripes}" stroke-width="2" opacity="0.5" fill="none"/>`
);

const katerV4 = katzeV4('#FFA500', '#CC6600');
const katzeV4Instanz = katzeV4('#808080', '#444');

// ===================== PFERD V4 - Kindgerecht & Glücklich =====================
const pferdV4 = (opts) => svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="50" ry="10" fill="#000" opacity="0.15"/>`+
  // Schweif
  `<path d="M25 75 Q5 85 10 115 Q15 110 20 95 Q18 105 28 90Z" fill="${opts.mane}" stroke="${O}" stroke-width="2"/>`+
  // Hinterbeine
  `<ellipse cx="35" cy="110" rx="12" ry="22" fill="${opts.leg}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="55" cy="112" rx="12" ry="20" fill="${opts.leg}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="35" cy="128" rx="10" ry="5" fill="#3A2814"/>`+
  `<ellipse cx="55" cy="128" rx="10" ry="5" fill="#3A2814"/>`+
  // Körper
  `<ellipse cx="75" cy="85" rx="48" ry="32" fill="${opts.body}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="80" rx="35" ry="20" fill="#FFF" opacity="0.2"/>`+
  // Vorderbeine
  `<ellipse cx="95" cy="112" rx="12" ry="20" fill="${opts.leg}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="115" cy="110" rx="12" ry="22" fill="${opts.leg}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="95" cy="128" rx="10" ry="5" fill="#3A2814"/>`+
  `<ellipse cx="115" cy="128" rx="10" ry="5" fill="#3A2814"/>`+
  // Hals
  `<ellipse cx="115" cy="55" rx="22" ry="28" fill="${opts.body}" stroke="${O}" stroke-width="2"/>`+
  // Mähne
  `<path d="M95 45 Q98 15 120 20 Q110 25 108 40 Q115 28 110 48Z" fill="${opts.mane}" stroke="${O}" stroke-width="2"/>`+
  `<path d="M105 25 Q115 30 112 45" fill="none" stroke="#2c1b0e" stroke-width="3"/>`+
  // Kopf
  `<ellipse cx="135" cy="45" rx="28" ry="22" fill="${lighterV4(opts.body, 15)}" stroke="${O}" stroke-width="2"/>`+
  // Ohren
  `<ellipse cx="128" cy="22" rx="8" ry="12" fill="${opts.body}" stroke="${O}" stroke-width="1.5" transform="rotate(-20 128 22)"/>`+
  `<ellipse cx="145" cy="26" rx="8" ry="12" fill="${opts.body}" stroke="${O}" stroke-width="1.5" transform="rotate(30 145 26)"/>`+
  `<ellipse cx="130" cy="24" rx="4" ry="6" fill="#FFB6C1" opacity="0.5" transform="rotate(-20 128 22)"/>`+
  `<ellipse cx="147" cy="28" rx="4" ry="6" fill="#FFB6C1" opacity="0.5" transform="rotate(30 145 26)"/>`+
  // Schnauze
  `<ellipse cx="152" cy="50" rx="12" ry="10" fill="${opts.muz||'#D2B48C'}" stroke="${O}" stroke-width="1.5"/>`+
  // Nüstern
  `<ellipse cx="150" cy="48" rx="3" ry="2" fill="#4A3A28"/>`+
  `<ellipse cx="156" cy="48" rx="3" ry="2" fill="#4A3A28"/>`+
  // Mund lächelnd
  `<path d="M148 56 Q152 60 156 56" fill="none" stroke="#33281A" stroke-width="1.5"/>`+
  // Augen
  augeV4(140, 38, 5) +
  // Wangen
  wangeV4(128, 45, 6, 4)
);

const hengstV4 = pferdV4({body:'#8B4513', mane:'#2c1b0e', leg:'#6b3e23', muz:'#5A3A1E'});
const stuteV4 = pferdV4({body:'#CD853F', mane:'#8B4513', leg:'#A0522D', muz:'#8A4F24'});

// ===================== HÜHNER V4 - Niedlicher =====================
const huhnV4 = (isHahn) => svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="35" ry="8" fill="#000" opacity="0.15"/>`+
  // Füße
  `<path d="M65 125 l-4 12 m8 -12 l0 14 m8 -14 l4 12" stroke="#E8B84B" stroke-width="4" stroke-linecap="round"/>`+
  `<path d="M85 125 l-4 12 m8 -12 l0 14 m8 -14 l4 12" stroke="#E8B84B" stroke-width="4" stroke-linecap="round"/>`+
  `<ellipse cx="68" cy="135" rx="6" ry="3" fill="#E8B84B"/>`+
  `<ellipse cx="92" cy="135" rx="6" ry="3" fill="#E8B84B"/>`+
  // Schweif
  `<path d="M30 75 Q10 65 18 95 Q8 88 15 108 Q5 102 22 115 Q42 105 48 85Z" fill="${isHahn?'#228B22':'#8B4513'}" stroke="${O}" stroke-width="2"/>`+
  // Flügel
  `<ellipse cx="45" cy="85" rx="20" ry="15" fill="${isHahn?'#4169E1':'#654321'}" stroke="${O}" stroke-width="2"/>`+
  // Körper - rund
  `<ellipse cx="75" cy="85" rx="38" ry="30" fill="${isHahn?'#FF6347':'#DAA520'}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="80" rx="25" ry="15" fill="#FFF" opacity="0.2"/>`+
  // Federn-Details
  `<path d="M50 75 Q75 70 100 75" stroke="${isHahn?'#CD5C5C':'#B8860B'}" stroke-width="2" fill="none"/>`+
  `<path d="M52 85 Q75 80 98 85" stroke="${isHahn?'#CD5C5C':'#B8860B'}" stroke-width="2" fill="none"/>`+
  // Kopf
  `<ellipse cx="108" cy="55" rx="22" ry="20" fill="${isHahn?'#FF4500':'#F4A460'}" stroke="${O}" stroke-width="2"/>`+
  // Kamm (nur Hahn)
  (isHahn?`<path d="M92 38 q4 -15 10 -5 q6 -16 11 -3 q8 -12 9 6 q8 -6 4 14 q-18 -10 -34 -6Z" fill="#FF0000" stroke="${O}" stroke-width="1.5"/>`:'')+
  // Schnabel
  `<path d="M120 52 L138 48 L120 60Z" fill="#FFD700" stroke="${O}" stroke-width="1.5"/>`+
  // Läppchen
  (isHahn?`<path d="M102 62 q6 14 -4 16 q-8 -5 -2 -14Z" fill="#FF4500" stroke="${O}" stroke-width="1.5"/>`:`<path d="M105 65 q5 10 -2 11 q-5 -4 -1 -10Z" fill="#E8902B" stroke="${O}" stroke-width="1.5"/>`)+
  // Augen - groß
  augeV4(112, 52, 5) +
  // Wangen
  wangeV4(100, 60, 6, 4)
);

const hahnV4 = huhnV4(true);
const henneV4 = huhnV4(false);

// ===================== KANINCHEN V4 - Ultra-Niedlich =====================
const kaninchenV4 = (bodyColor, earColor) => svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="35" ry="8" fill="#000" opacity="0.15"/>`+
  // Schweif - flauschig
  `<circle cx="105" cy="110" r="10" fill="#FFF" stroke="${O}" stroke-width="1.5"/>`+
  // Körper - rund und plump
  `<ellipse cx="75" cy="105" rx="35" ry="25" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="100" rx="22" ry="14" fill="#FFF" opacity="0.3"/>`+
  // Pfoten
  `<ellipse cx="55" cy="125" rx="10" ry="6" fill="#FFF5EE" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="95" cy="125" rx="10" ry="6" fill="#FFF5EE" stroke="${O}" stroke-width="1.5"/>`+
  // Kopf - GROSS
  `<ellipse cx="75" cy="60" rx="30" ry="26" fill="${bodyColor}" stroke="${O}" stroke-width="2.5"/>`+
  // Ohren - RIESIG und detailliert
  `<ellipse cx="55" cy="25" rx="12" ry="30" fill="${earColor}" stroke="${O}" stroke-width="2" transform="rotate(-10 55 25)"/>`+
  `<ellipse cx="60" cy="28" rx="7" ry="22" fill="#FFB6C1" opacity="0.6" transform="rotate(-10 55 25)"/>`+
  `<ellipse cx="95" cy="25" rx="12" ry="30" fill="${earColor}" stroke="${O}" stroke-width="2" transform="rotate(10 95 25)"/>`+
  `<ellipse cx="90" cy="28" rx="7" ry="22" fill="#FFB6C1" opacity="0.6" transform="rotate(10 95 25)"/>`+
  // Schnurrhaare
  `<path d="M48 65 L38 63 M48 68 L36 68 M48 71 L38 73" stroke="#888" stroke-width="1.5" opacity="0.5"/>`+
  `<path d="M102 65 L112 63 M102 68 L114 68 M102 71 L112 73" stroke="#888" stroke-width="1.5" opacity="0.5"/>`+
  // Schnauze
  `<ellipse cx="75" cy="70" rx="14" ry="10" fill="#FFF5EE" stroke="${O}" stroke-width="1.5"/>`+
  // Nase - herzförmig
  `<ellipse cx="75" cy="66" rx="5" ry="4" fill="#FF69B4"/>`+
  // Mund
  `<path d="M68 75 Q75 80 82 75" fill="none" stroke="#33281A" stroke-width="2"/>`+
  // Zähnchen
  `<rect x="72" y="76" width="3" height="4" fill="#FFF" stroke="${O}" stroke-width="0.5"/>`+
  `<rect x="75" y="76" width="3" height="4" fill="#FFF" stroke="${O}" stroke-width="0.5"/>`+
  // Wangen - stark
  wangeV4(58, 65, 10, 6) + wangeV4(92, 65, 10, 6) +
  // Augen - ENORM
  augeV4(62, 52, 7) + augeV4(88, 52, 7)
);

const rammlerV4 = kaninchenV4('#8B4513', '#CD853F');
const haesinV4 = kaninchenV4('#D3D3D3', '#FFF');

// ===================== ENTE V4 - Niedlich =====================
const enteV4 = svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="35" ry="8" fill="#000" opacity="0.15"/>`+
  // Körper
  `<ellipse cx="75" cy="100" rx="42" ry="28" fill="#F5DEB3" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="95" rx="30" ry="18" fill="#FFE4B5"/>`+
  // Flügel
  `<ellipse cx="50" cy="95" rx="18" ry="14" fill="#DEB887" stroke="${O}" stroke-width="2"/>`+
  `<path d="M35 90 Q50 85 65 90" stroke="#CD853F" stroke-width="2" fill="none"/>`+
  // Beine
  `<path d="M65 122 L65 132" stroke="#FF8C00" stroke-width="5" stroke-linecap="round"/>`+
  `<path d="M85 122 L85 132" stroke="#FF8C00" stroke-width="5" stroke-linecap="round"/>`+
  `<ellipse cx="65" cy="132" rx="8" ry="4" fill="#FF8C00"/>`+
  `<ellipse cx="85" cy="132" rx="8" ry="4" fill="#FF8C00"/>`+
  // Kopf
  `<ellipse cx="108" cy="65" rx="22" ry="18" fill="#FFE4B5" stroke="${O}" stroke-width="2"/>`+
  // Schnabel
  `<path d="M120 62 L142 55 L120 72Z" fill="#FF8C00" stroke="${O}" stroke-width="1.5"/>`+
  // Augen
  augeV4(110, 60, 5) +
  // Wangen
  wangeV4(100, 68, 6, 4) +
  // Flügel-Detail
  `<ellipse cx="50" cy="92" rx="3" ry="2" fill="#8B7355" opacity="0.3"/>`+
  `<ellipse cx="55" cy="96" rx="2" ry="1.5" fill="#8B7355" opacity="0.3"/>`
);

// ===================== KUH V4 - NEU - Niedlich =====================
const kuhV4 = svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="45" ry="10" fill="#000" opacity="0.15"/>`+
  // Hinterbeine
  `<ellipse cx="35" cy="110" rx="14" ry="20" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="55" cy="110" rx="14" ry="20" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="35" cy="128" rx="10" ry="5" fill="#333"/>`+
  `<ellipse cx="55" cy="128" rx="10" ry="5" fill="#333"/>`+
  // Körper
  `<ellipse cx="75" cy="90" rx="48" ry="35" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  // Flecken
  `<ellipse cx="55" cy="80" rx="15" ry="12" fill="#222"/>`+
  `<ellipse cx="95" cy="95" rx="12" ry="10" fill="#222"/>`+
  `<ellipse cx="70" cy="105" rx="8" ry="6" fill="#222"/>`+
  // Vorderbeine
  `<ellipse cx="95" cy="110" rx="14" ry="20" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="115" cy="110" rx="14" ry="20" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="95" cy="128" rx="10" ry="5" fill="#333"/>`+
  `<ellipse cx="115" cy="128" rx="10" ry="5" fill="#333"/>`+
  // Euter
  `<ellipse cx="75" cy="118" rx="12" ry="8" fill="#FFB6C1" stroke="${O}" stroke-width="1.5"/>`+
  // Kopf
  `<ellipse cx="130" cy="65" rx="28" ry="24" fill="#FFF" stroke="${O}" stroke-width="2.5"/>`+
  // Schnauze
  `<ellipse cx="142" cy="70" rx="12" ry="10" fill="#FFB6C1" stroke="${O}" stroke-width="1.5"/>`+
  // Nase
  `<ellipse cx="148" cy="68" rx="5" ry="4" fill="#FF69B4"/>`+
  `<ellipse cx="146" cy="66" rx="1.5" ry="1" fill="#FFF" opacity="0.5"/>`+
  // Ohren
  `<ellipse cx="110" cy="50" rx="10" ry="14" fill="#FFF" stroke="${O}" stroke-width="2" transform="rotate(-30 110 50)"/>`+
  `<ellipse cx="150" cy="50" rx="10" ry="14" fill="#FFF" stroke="${O}" stroke-width="2" transform="rotate(30 150 50)"/>`+
  `<ellipse cx="112" cy="52" rx="5" ry="8" fill="#FFB6C1" transform="rotate(-30 110 50)"/>`+
  `<ellipse cx="148" cy="52" rx="5" ry="8" fill="#FFB6C1" transform="rotate(30 150 50)"/>`+
  // Hörner
  `<path d="M115 42 Q110 25 118 28" stroke="#D2B48C" stroke-width="4" fill="none" stroke-linecap="round"/>`+
  `<path d="M145 42 Q150 25 142 28" stroke="#D2B48C" stroke-width="4" fill="none" stroke-linecap="round"/>`+
  // Augen
  augeV4(135, 58, 5.5) +
  // Wangen
  wangeV4(122, 65, 7, 5) +
  // Kopf-Fleck
  `<ellipse cx="138" cy="55" rx="8" ry="5" fill="#222"/>`
);

// ===================== SCHAF V4 - NEU - Ultra-Flauschig =====================
const schafV4 = svgWrapV4(
  // Schatten
  `<ellipse cx="75" cy="135" rx="45" ry="10" fill="#000" opacity="0.15"/>`+
  // Wolle-Körper - aus vielen Kreisen für fluffigen Look
  `<ellipse cx="75" cy="90" rx="45" ry="38" fill="#FFFAF0" stroke="${O}" stroke-width="2.5"/>`+
  // Wolle-Details (kleine Kreise)
  `<circle cx="45" cy="75" r="12" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="60" cy="68" r="14" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="90" cy="68" r="14" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="105" cy="75" r="12" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="40" cy="90" r="10" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="110" cy="90" r="10" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="50" cy="108" r="11" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="75" cy="112" r="13" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  `<circle cx="100" cy="108" r="11" fill="#FFFAF0" stroke="${O}" stroke-width="1"/>`+
  // Beine - dünn und schwarz
  `<ellipse cx="50" cy="120" rx="6" ry="18" fill="#333"/>`+
  `<ellipse cx="65" cy="122" rx="6" ry="16" fill="#333"/>`+
  `<ellipse cx="85" cy="122" rx="6" ry="16" fill="#333"/>`+
  `<ellipse cx="100" cy="120" rx="6" ry="18" fill="#333"/>`+
  `<ellipse cx="50" cy="134" rx="5" ry="3" fill="#333"/>`+
  `<ellipse cx="65" cy="136" rx="5" ry="3" fill="#333"/>`+
  `<ellipse cx="85" cy="136" rx="5" ry="3" fill="#333"/>`+
  `<ellipse cx="100" cy="134" rx="5" ry="3" fill="#333"/>`+
  // Kopf
  `<ellipse cx="130" cy="65" rx="22" ry="18" fill="#333"/>`+
  `<ellipse cx="130" cy="63" rx="18" ry="14" fill="#FFFAF0"/>`+
  // Ohren
  `<ellipse cx="110" cy="55" rx="6" ry="10" fill="#333" transform="rotate(-20 110 55)"/>`+
  `<ellipse cx="150" cy="55" rx="6" ry="10" fill="#333" transform="rotate(20 150 55)"/>`+
  // Augen
  augeV4(125, 58, 4) + augeV4(138, 58, 4) +
  // Nase
  `<ellipse cx="148" cy="68" rx="3" ry="2" fill="#FF69B4"/>`
);

// ===================== HILFSFUNKTIONEN =====================
function lighterV4(hex, percent){
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
}

// Export für Browser
if (typeof window !== 'undefined') {
  window.tiereV4 = {
    ruede: ruedeV4,
    huendin: huendinV4,
    kater: katerV4,
    katze: katzeV4Instanz,
    hahn: hahnV4,
    henne: henneV4,
    rammler: rammlerV4,
    haesin: haesinV4,
    hengst: hengstV4,
    stute: stuteV4,
    ente: enteV4,
    kuh: kuhV4,
    schaf: schafV4
  };
}
