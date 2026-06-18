/* ===================== TIERS V5 - Ultra-Niedliche Cartoon-Variante ===================== */
// Noch niedlicher: RIESIGE Köpfe (50-60% vom Körper), riesige Augen mit doppelten
// Glanz-Effekten, stärkere Wangen, dickere Outlines (3px), mehr Farbkontrast,
// glücklichere Ausdrücke, kleine Herzen/Sterne & Accessoires.

const O = '#2A1810';        // Outline (dunkler für mehr Kontrast)
const O_LIGHT = '#3A2818';  // Outline für helle Bereiche
const svgW = (w, h) => `viewBox="0 0 ${w||150} ${h||150}" xmlns="http://www.w3.org/2000/svg"`;
const svgWrapV5 = (content) => `<svg ${svgW(150,150)}>${content}</svg>`;

// Hilfsfarbe: dunkler (für mehr Kontrast)
function darkerV5(hex, percent){
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.max(0, (num >> 16) - amt);
  const G = Math.max(0, ((num >> 8) & 0x00FF) - amt);
  const B = Math.max(0, (num & 0x0000FF) - amt);
  return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
}

// Hilfsfarbe: heller
function lighterV5(hex, percent){
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = Math.min(255, Math.max(0, (num >> 16) + amt));
  const G = Math.min(255, Math.max(0, ((num >> 8) & 0x00FF) + amt));
  const B = Math.min(255, Math.max(0, (num & 0x0000FF) + amt));
  return '#' + (0x1000000 + R*0x10000 + G*0x100 + B).toString(16).slice(1);
}

// ===================== AUGEN & WANGEN V5 =====================

// RIESIGES Auge mit doppeltem Glanz (Pupille größer!)
const augeV5 = (cx, cy, r) => {
  // Augenweiß
  let s = `<circle cx="${cx}" cy="${cy}" r="${r}" fill="#FFF" stroke="${O}" stroke-width="2"/>`;
  // Große Pupille (für "anime-niedlich")
  s += `<circle cx="${cx}" cy="${cy}" r="${r*0.62}" fill="#1A1A1A"/>`;
  // Iris-Farbring (sanft)
  s += `<circle cx="${cx}" cy="${cy}" r="${r*0.62}" fill="none" stroke="#3D2818" stroke-width="0.8" opacity="0.4"/>`;
  // Hauptglanz (groß, oben rechts)
  s += `<circle cx="${cx+r*0.32}" cy="${cy-r*0.30}" r="${r*0.32}" fill="#FFF"/>`;
  // Zweiter kleiner Glanz (unten links) – "Doppel-Glanz"
  s += `<circle cx="${cx-r*0.28}" cy="${cy+r*0.32}" r="${r*0.18}" fill="#FFF" opacity="0.95"/>`;
  return s;
};

// Geschlossenes Auge (für glückliche/blinzelnde Ausdrücke)
const augeZuV5 = (cx, cy, r) =>
  `<path d="M${cx-r} ${cy} Q${cx} ${cy+r*0.55} ${cx+r} ${cy}" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>`;

// Verstärktes Wangen-Blush (größer, intensiver rosa)
const wangeV5 = (cx, cy, rx, ry) => {
  let s = `<ellipse cx="${cx}" cy="${cy}" rx="${rx}" ry="${ry}" fill="#FF8DA8" opacity="0.55"/>`;
  // Innerer, stärkerer Kern für mehr Intensität
  s += `<ellipse cx="${cx}" cy="${cy}" rx="${rx*0.55}" ry="${ry*0.55}" fill="#FF6B95" opacity="0.45"/>`;
  return s;
};

// Kleines Herz als Akzent
const herzV5 = (cx, cy, size, color) => {
  const s = size;
  return `<path d="M${cx} ${cy+s*0.4} L${cx-s*0.4} ${cy-s*0.05} A${s*0.3} ${s*0.3} 0 1 1 ${cx} ${cy-s*0.15} A${s*0.3} ${s*0.3} 0 1 1 ${cx+s*0.4} ${cy-s*0.05} Z" fill="${color||'#FF4D88'}" stroke="${O}" stroke-width="1"/>`;
};

// Kleiner Stern als Akzent
const sternV5 = (cx, cy, size, color) => {
  const s = size;
  const points = [];
  for (let i = 0; i < 5; i++) {
    const outerAngle = -Math.PI/2 + i*2*Math.PI/5;
    const innerAngle = outerAngle + Math.PI/5;
    points.push(`${cx+Math.cos(outerAngle)*s},${cy+Math.sin(outerAngle)*s}`);
    points.push(`${cx+Math.cos(innerAngle)*s*0.45},${cy+Math.sin(innerAngle)*s*0.45}`);
  }
  return `<polygon points="${points.join(' ')}" fill="${color||'#FFD700'}" stroke="${O}" stroke-width="0.8"/>`;
};

// Kleiner Glanzpunkt / "Sparkle"
const sparkleV5 = (cx, cy, size) =>
  `<path d="M${cx} ${cy-size} L${cx+size*0.25} ${cy-size*0.25} L${cx+size} ${cy} L${cx+size*0.25} ${cy+size*0.25} L${cx} ${cy+size} L${cx-size*0.25} ${cy+size*0.25} L${cx-size} ${cy} L${cx-size*0.25} ${cy-size*0.25} Z" fill="#FFF" opacity="0.9"/>`;

// ===================== HUND V5 - Ultra-Niedlich =====================
const hundV5 = (bodyColor, earColor, accessory) => svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="48" ry="9" fill="#000" opacity="0.18"/>`+
  // Hinterbeine
  `<ellipse cx="42" cy="115" rx="13" ry="20" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="108" cy="115" rx="13" ry="20" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  // Pfoten-Details (Zehen)
  `<ellipse cx="42" cy="130" rx="11" ry="6" fill="${darkerV5(bodyColor, 35)}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="108" cy="130" rx="11" ry="6" fill="${darkerV5(bodyColor, 35)}" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="38" cy="131" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="42" cy="132" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="46" cy="131" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="104" cy="131" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="108" cy="132" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="112" cy="131" r="1.5" fill="#1A1A1A" opacity="0.4"/>`+
  // Körper - rund und kuschelig (etwas kleiner, damit Kopf größer wirkt)
  `<ellipse cx="75" cy="98" rx="44" ry="30" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="75" cy="92" rx="32" ry="18" fill="#FFF" opacity="0.35"/>`+
  // Brust-Fleck
  `<ellipse cx="75" cy="105" rx="14" ry="10" fill="#FFFAF0" opacity="0.65"/>`+
  // Schwanz - wedelnd
  `<path d="M112 85 Q140 60 145 80 Q150 100 132 92" fill="${earColor}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<circle cx="142" cy="78" r="4" fill="#FFFAF0" opacity="0.6"/>`+
  // Vorderbeine
  `<ellipse cx="58" cy="118" rx="11" ry="17" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="92" cy="118" rx="11" ry="17" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="58" cy="130" rx="9" ry="5" fill="${darkerV5(bodyColor, 35)}" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="92" cy="130" rx="9" ry="5" fill="${darkerV5(bodyColor, 35)}" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="55" cy="131" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="58" cy="132" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="61" cy="131" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="89" cy="131" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="92" cy="132" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  `<circle cx="95" cy="131" r="1.3" fill="#1A1A1A" opacity="0.4"/>`+
  // Kopf - RIESIG (54% des Körpers)
  `<ellipse cx="75" cy="52" rx="45" ry="38" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  // Highlight auf dem Kopf
  `<ellipse cx="65" cy="38" rx="18" ry="12" fill="#FFF" opacity="0.25"/>`+
  // Ohren - groß und floppy
  `<ellipse cx="38" cy="42" rx="16" ry="26" fill="${earColor}" stroke="${O}" stroke-width="3" transform="rotate(-25 38 42)"/>`+
  `<ellipse cx="112" cy="42" rx="16" ry="26" fill="${earColor}" stroke="${O}" stroke-width="3" transform="rotate(25 112 42)"/>`+
  `<ellipse cx="41" cy="46" rx="9" ry="17" fill="#FFB6C1" opacity="0.75" transform="rotate(-25 38 42)"/>`+
  `<ellipse cx="109" cy="46" rx="9" ry="17" fill="#FFB6C1" opacity="0.75" transform="rotate(25 112 42)"/>`+
  // Schnauze - größer, niedlicher
  `<ellipse cx="75" cy="68" rx="22" ry="15" fill="#FFEFD5" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="65" rx="16" ry="10" fill="#FFF" opacity="0.4"/>`+
  // Nase - glänzend
  `<ellipse cx="75" cy="62" rx="7" ry="5" fill="#1A1A1A"/>`+
  `<ellipse cx="73" cy="60" rx="2.5" ry="1.5" fill="#FFF" opacity="0.8"/>`+
  // Mund - breites Lächeln
  `<path d="M65 73 Q75 82 85 73" fill="none" stroke="${O}" stroke-width="3" stroke-linecap="round"/>`+
  // Zunge - rosa herausschauend
  `<ellipse cx="75" cy="78" rx="7" ry="5" fill="#FF4D88" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="75" cy="76" rx="3" ry="1.5" fill="#FFB6C1" opacity="0.8"/>`+
  // Wangen - VERSTÄRKT
  wangeV5(50, 60, 12, 7) + wangeV5(100, 60, 12, 7) +
  // Augen - RIESIG mit Doppel-Glanz
  augeV5(60, 50, 8.5) + augeV5(90, 50, 8.5) +
  // Augenbrauen - freundlich nach oben
  `<path d="M52 38 Q60 32 68 38" fill="none" stroke="${darkerV5(bodyColor, 25)}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>`+
  `<path d="M82 38 Q90 32 98 38" fill="none" stroke="${darkerV5(bodyColor, 25)}" stroke-width="3" stroke-linecap="round" opacity="0.7"/>`+
  // Flecken
  `<ellipse cx="50" cy="55" rx="9" ry="6" fill="${earColor}" opacity="0.35"/>`+
  `<ellipse cx="100" cy="48" rx="7" ry="5" fill="${earColor}" opacity="0.3"/>`+
  // Accessoire
  (accessory === 'halsband' ? 
    `<path d="M52 88 Q75 95 98 88" stroke="#FF1493" stroke-width="5" fill="none" stroke-linecap="round"/>`+
    `<circle cx="75" cy="93" r="4" fill="#FFD700" stroke="${O}" stroke-width="1.5"/>` : '')+
  (accessory === 'glocke' ?
    `<path d="M50 90 Q75 100 100 90" stroke="#DC143C" stroke-width="5" fill="none" stroke-linecap="round"/>`+
    `<path d="M70 95 L75 110 L80 95 Z" fill="#FFD700" stroke="${O}" stroke-width="2" stroke-linejoin="round"/>`+
    `<circle cx="75" cy="98" r="1.5" fill="#8B4513"/>` : '')+
  // Sparkle-Akzente
  sparkleV5(25, 30, 4) + sparkleV5(128, 28, 3)
);

const ruedeV5 = hundV5('#E07B3C', '#7B3F18', 'halsband');
const huendinV5 = hundV5('#E8C496', '#A0522D', 'glocke');

// ===================== KATZE V5 - Mega-Niedlich =====================
const katzeV5 = (bodyColor, stripes, accessory) => svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="42" ry="9" fill="#000" opacity="0.18"/>`+
  // Schwanz - geschwungen mit Streifen
  `<path d="M108 95 Q145 70 138 45 Q130 32 118 42" fill="none" stroke="${bodyColor}" stroke-width="16" stroke-linecap="round"/>`+
  `<path d="M108 95 Q145 70 138 45 Q130 32 118 42" fill="none" stroke="${O}" stroke-width="3" stroke-linecap="round"/>`+
  `<path d="M120 80 Q125 75 130 78" stroke="${stripes}" stroke-width="2.5" fill="none" opacity="0.6"/>`+
  `<path d="M130 65 Q135 60 138 65" stroke="${stripes}" stroke-width="2.5" fill="none" opacity="0.6"/>`+
  // Schwanzspitze
  `<circle cx="120" cy="42" r="6" fill="${stripes}" stroke="${O}" stroke-width="2"/>`+
  // Hinterbeine
  `<ellipse cx="48" cy="118" rx="11" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="102" cy="118" rx="11" ry="18" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="48" cy="130" rx="9" ry="5" fill="#FFF5EE" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="102" cy="130" rx="9" ry="5" fill="#FFF5EE" stroke="${O}" stroke-width="2"/>`+
  // Zehen-Details
  `<circle cx="44" cy="131" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="48" cy="132" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="52" cy="131" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="98" cy="131" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="102" cy="132" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="106" cy="131" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  // Körper
  `<ellipse cx="75" cy="98" rx="40" ry="28" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  // Streifen
  `<path d="M55 88 Q75 92 95 88" stroke="${stripes}" stroke-width="3.5" opacity="0.55" fill="none" stroke-linecap="round"/>`+
  `<path d="M50 100 Q75 105 100 100" stroke="${stripes}" stroke-width="3.5" opacity="0.55" fill="none" stroke-linecap="round"/>`+
  `<path d="M58 78 Q75 82 92 78" stroke="${stripes}" stroke-width="3.5" opacity="0.55" fill="none" stroke-linecap="round"/>`+
  // Vorderbeine
  `<ellipse cx="63" cy="120" rx="9" ry="15" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="87" cy="120" rx="9" ry="15" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="63" cy="130" rx="7" ry="4.5" fill="#FFF5EE" stroke="${O}" stroke-width="2"/>`+
  `<ellipse cx="87" cy="130" rx="7" ry="4.5" fill="#FFF5EE" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="60" cy="131" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="63" cy="132" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="66" cy="131" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="84" cy="131" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="87" cy="132" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="90" cy="131" r="1" fill="#FFB6C1" opacity="0.7"/>`+
  // Kopf - RIESIG (60%)
  `<ellipse cx="75" cy="52" rx="40" ry="35" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  // Highlight
  `<ellipse cx="63" cy="38" rx="15" ry="10" fill="#FFF" opacity="0.25"/>`+
  // Ohren - spitz
  `<path d="M48 30 L58 52 L40 50 Z" fill="${bodyColor}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<path d="M52 38 L56 48 L46 47 Z" fill="#FFB6C1" opacity="0.85"/>`+
  `<path d="M102 30 L92 52 L110 50 Z" fill="${bodyColor}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<path d="M98 38 L94 48 L104 47 Z" fill="#FFB6C1" opacity="0.85"/>`+
  // Schnurrhaare - mehr
  `<path d="M48 62 L34 58 M48 65 L32 64 M48 68 L34 70" stroke="#1A1A1A" stroke-width="1.8" opacity="0.65" stroke-linecap="round"/>`+
  `<path d="M102 62 L116 58 M102 65 L118 64 M102 68 L116 70" stroke="#1A1A1A" stroke-width="1.8" opacity="0.65" stroke-linecap="round"/>`+
  // Schnauze
  `<ellipse cx="75" cy="70" rx="15" ry="11" fill="#FFF5EE" stroke="${O}" stroke-width="2.5"/>`+
  // Nase - herzform
  `<path d="M75 65 L71 61 A3 3 0 1 1 75 65 A3 3 0 1 1 79 61 Z" fill="#FF4D88" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="73" cy="62" rx="1" ry="0.6" fill="#FFF" opacity="0.7"/>`+
  // Mund - Kätzchen-Lächeln
  `<path d="M70 73 Q75 78 75 73 Q75 78 80 73" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>`+
  // Wangen - VERSTÄRKT
  wangeV5(54, 62, 11, 7) + wangeV5(96, 62, 11, 7) +
  // Augen - RIESIG mit Doppel-Glanz
  augeV5(60, 52, 8) + augeV5(90, 52, 8) +
  // Stirn-Streifen
  `<path d="M72 32 L75 42 L78 32" stroke="${stripes}" stroke-width="2.5" opacity="0.65" fill="none" stroke-linecap="round"/>`+
  // Accessoire
  (accessory === 'schleife' ?
    `<path d="M105 32 L112 26 L112 38 Z" fill="#FF69B4" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>`+
    `<path d="M105 32 L98 26 L98 38 Z" fill="#FF69B4" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>`+
    `<circle cx="105" cy="32" r="2.5" fill="#FF1493" stroke="${O}" stroke-width="1"/>` : '')+
  (accessory === 'halsband' ?
    `<path d="M52 88 Q75 95 98 88" stroke="#4169E1" stroke-width="4.5" fill="none" stroke-linecap="round"/>`+
    `<circle cx="75" cy="93" r="3.5" fill="#FFD700" stroke="${O}" stroke-width="1.5"/>` : '')+
  // Sparkle
  sparkleV5(28, 35, 3.5)
);

const katerV5 = katzeV5('#FF9933', '#B85500', 'halsband');
const katzeV5Instanz = katzeV5('#999999', '#3A3A3A', 'schleife');

// ===================== PFERD V5 - Kindgerecht & Fröhlich =====================
const pferdV5 = (opts) => svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="55" ry="11" fill="#000" opacity="0.18"/>`+
  // Schweif - buschig
  `<path d="M22 75 Q-2 88 8 120 Q14 113 18 95 Q15 110 30 92Z" fill="${opts.mane}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<path d="M22 75 Q15 90 18 110" stroke="${darkerV5(opts.mane, 20)}" stroke-width="2" fill="none" opacity="0.6"/>`+
  // Hinterbeine
  `<ellipse cx="32" cy="110" rx="14" ry="24" fill="${opts.leg}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="55" cy="112" rx="14" ry="22" fill="${opts.leg}" stroke="${O}" stroke-width="3"/>`+
  // Hufe - deutlich
  `<ellipse cx="32" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="55" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="29" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  `<ellipse cx="52" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  // Körper
  `<ellipse cx="75" cy="88" rx="50" ry="34" fill="${opts.body}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="75" cy="82" rx="38" ry="22" fill="#FFF" opacity="0.28"/>`+
  // Bauch-Highlight
  `<ellipse cx="75" cy="100" rx="22" ry="10" fill="${lighterV5(opts.body, 15)}" opacity="0.6"/>`+
  // Vorderbeine
  `<ellipse cx="95" cy="112" rx="14" ry="22" fill="${opts.leg}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="118" cy="110" rx="14" ry="24" fill="${opts.leg}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="95" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="118" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="92" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  `<ellipse cx="115" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  // Hals
  `<ellipse cx="118" cy="55" rx="24" ry="32" fill="${opts.body}" stroke="${O}" stroke-width="3"/>`+
  // Mähne - buschig
  `<path d="M95 42 Q98 8 122 16 Q110 24 108 42 Q116 26 112 50Z" fill="${opts.mane}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<path d="M104 22 Q116 28 112 48" fill="none" stroke="${darkerV5(opts.mane, 25)}" stroke-width="3" stroke-linecap="round"/>`+
  `<path d="M108 18 Q118 24 115 42" fill="none" stroke="${darkerV5(opts.mane, 25)}" stroke-width="2" stroke-linecap="round"/>`+
  // Kopf - RIESIG
  `<ellipse cx="138" cy="45" rx="34" ry="28" fill="${lighterV5(opts.body, 12)}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="130" cy="35" rx="14" ry="9" fill="#FFF" opacity="0.3"/>`+
  // Ohren
  `<ellipse cx="125" cy="20" rx="9" ry="14" fill="${opts.body}" stroke="${O}" stroke-width="2.5" transform="rotate(-20 125 20)"/>`+
  `<ellipse cx="148" cy="22" rx="9" ry="14" fill="${opts.body}" stroke="${O}" stroke-width="2.5" transform="rotate(25 148 22)"/>`+
  `<ellipse cx="127" cy="23" rx="5" ry="8" fill="#FFB6C1" opacity="0.7" transform="rotate(-20 125 20)"/>`+
  `<ellipse cx="150" cy="25" rx="5" ry="8" fill="#FFB6C1" opacity="0.7" transform="rotate(25 148 22)"/>`+
  // Schnauze
  `<ellipse cx="156" cy="55" rx="15" ry="13" fill="${opts.muz || '#D2B48C'}" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="153" cy="50" rx="10" ry="7" fill="#FFF" opacity="0.3"/>`+
  // Nüstern - größer
  `<ellipse cx="152" cy="50" rx="4" ry="3" fill="#1A1A1A"/>`+
  `<ellipse cx="160" cy="50" rx="4" ry="3" fill="#1A1A1A"/>`+
  `<ellipse cx="151" cy="49" rx="1" ry="0.6" fill="#FFF" opacity="0.5"/>`+
  // Mund - lächelnd
  `<path d="M150 60 Q156 65 162 60" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>`+
  // Wangen - VERSTÄRKT
  wangeV5(124, 48, 9, 5) +
  // Augen - RIESIG
  augeV5(140, 38, 6.5) +
  // Augenbraue
  `<path d="M132 30 Q140 26 148 30" fill="none" stroke="${darkerV5(opts.body, 30)}" stroke-width="2.5" stroke-linecap="round" opacity="0.7"/>`+
  // Stern-Akzent
  sternV5(35, 30, 4, '#FFD700')
);

const hengstV5 = pferdV5({body:'#9C4F1A', mane:'#2c1b0e', leg:'#6b3e23', muz:'#5A3A1E'});
const stuteV5 = pferdV5({body:'#D89A4A', mane:'#8B4513', leg:'#A0522D', muz:'#8A4F24'});

// ===================== HÜHNER V5 - Fröhlich =====================
const huhnV5 = (isHahn) => svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="38" ry="9" fill="#000" opacity="0.18"/>`+
  // Füße
  `<path d="M62 122 l-5 16 m9 -16 l0 18 m9 -18 l5 16" stroke="#E8B84B" stroke-width="5" stroke-linecap="round"/>`+
  `<path d="M88 122 l-5 16 m9 -16 l0 18 m9 -18 l5 16" stroke="#E8B84B" stroke-width="5" stroke-linecap="round"/>`+
  `<ellipse cx="65" cy="138" rx="7" ry="3.5" fill="#E8B84B" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="92" cy="138" rx="7" ry="3.5" fill="#E8B84B" stroke="${O}" stroke-width="1.5"/>`+
  // Zehen
  `<path d="M58 138 l-4 3 M65 138 l0 4 M72 138 l4 3" stroke="#E8B84B" stroke-width="3" stroke-linecap="round"/>`+
  `<path d="M84 138 l-4 3 M92 138 l0 4 M100 138 l4 3" stroke="#E8B84B" stroke-width="3" stroke-linecap="round"/>`+
  // Schweif
  `<path d="M28 78 Q5 65 15 95 Q3 86 12 110 Q3 100 22 118 Q45 108 50 88Z" fill="${isHahn?'#2E8B2E':'#A0522D'}" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
  `<path d="M18 85 Q12 90 18 100" stroke="${isHahn?'#1A5A1A':'#704020'}" stroke-width="2" fill="none" opacity="0.6"/>`+
  // Flügel
  `<ellipse cx="44" cy="85" rx="22" ry="17" fill="${isHahn?'#4A75E8':'#7A4D2A'}" stroke="${O}" stroke-width="3"/>`+
  `<path d="M28 82 Q44 76 60 82" stroke="${O}" stroke-width="1.5" fill="none" opacity="0.6"/>`+
  `<path d="M30 88 Q44 84 58 88" stroke="${O}" stroke-width="1.5" fill="none" opacity="0.6"/>`+
  // Körper - rund und bunt
  `<ellipse cx="75" cy="88" rx="40" ry="32" fill="${isHahn?'#FF7050':'#E8B838'}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="75" cy="82" rx="28" ry="18" fill="#FFF" opacity="0.28"/>`+
  // Brust
  `<ellipse cx="75" cy="98" rx="14" ry="10" fill="${lighterV5(isHahn?'#FF7050':'#E8B838', 15)}" opacity="0.7"/>`+
  // Federn-Details
  `<path d="M48 75 Q75 70 102 75" stroke="${isHahn?'#D04545':'#B8860B'}" stroke-width="2.5" fill="none" opacity="0.7"/>`+
  `<path d="M50 85 Q75 80 100 85" stroke="${isHahn?'#D04545':'#B8860B'}" stroke-width="2.5" fill="none" opacity="0.7"/>`+
  `<path d="M52 95 Q75 90 98 95" stroke="${isHahn?'#D04545':'#B8860B'}" stroke-width="2.5" fill="none" opacity="0.7"/>`+
  // Kopf - RIESIG
  `<ellipse cx="112" cy="55" rx="26" ry="24" fill="${isHahn?'#FF5530':'#F4A460'}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="105" cy="48" rx="10" ry="7" fill="#FFF" opacity="0.3"/>`+
  // Kamm (nur Hahn) - größer & detaillierter
  (isHahn?`<path d="M92 36 q5 -18 12 -6 q7 -20 13 -3 q9 -15 10 6 q9 -7 5 18 q-22 -12 -40 -8Z" fill="#FF1A1A" stroke="${O}" stroke-width="3" stroke-linejoin="round"/>`+
   `<circle cx="98" cy="30" r="2" fill="#FFB6C1" opacity="0.7"/>`:'')+
  // Schnabel - größer
  `<path d="M128 50 L148 46 L128 62Z" fill="#FFB300" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/>`+
  `<path d="M128 56 L148 54" stroke="${O}" stroke-width="1" opacity="0.5"/>`+
  // Läppchen
  (isHahn?`<path d="M100 65 q8 16 -5 18 q-10 -6 -2 -16Z" fill="#FF5530" stroke="${O}" stroke-width="2.5"/>`:
           `<path d="M102 68 q6 12 -3 13 q-7 -5 -1 -12Z" fill="#E8902B" stroke="${O}" stroke-width="2.5"/>`)+
  // Augen - RIESIG
  augeV5(116, 50, 6) +
  // Wangen - VERSTÄRKT
  wangeV5(98, 60, 8, 5) +
  // Stirn-Highlight
  `<ellipse cx="105" cy="44" rx="6" ry="3" fill="#FFF" opacity="0.4"/>`+
  // Herz-Akzent
  herzV5(40, 25, 6, '#FF4D88')
);

const hahnV5 = huhnV5(true);
const henneV5 = huhnV5(false);

// ===================== KANINCHEN V5 - Mega-Niedlich =====================
const kaninchenV5 = (bodyColor, earColor, isGirl) => svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="38" ry="9" fill="#000" opacity="0.18"/>`+
  // Schweif - flauschig
  `<circle cx="108" cy="110" r="12" fill="#FFFAF0" stroke="${O}" stroke-width="2.5"/>`+
  `<circle cx="106" cy="108" r="4" fill="#FFF" opacity="0.8"/>`+
  // Körper - rund und plump
  `<ellipse cx="75" cy="108" rx="38" ry="27" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="75" cy="103" rx="25" ry="15" fill="#FFF" opacity="0.35"/>`+
  // Bauch
  `<ellipse cx="75" cy="115" rx="20" ry="12" fill="${lighterV5(bodyColor, 25)}" opacity="0.8"/>`+
  // Pfoten
  `<ellipse cx="52" cy="128" rx="11" ry="6" fill="#FFF5EE" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="98" cy="128" rx="11" ry="6" fill="#FFF5EE" stroke="${O}" stroke-width="2.5"/>`+
  // Zehen
  `<circle cx="48" cy="129" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="52" cy="130" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="56" cy="129" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="94" cy="129" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="98" cy="130" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  `<circle cx="102" cy="129" r="1.2" fill="#FFB6C1" opacity="0.7"/>`+
  // Kopf - RIESIG (60%)
  `<ellipse cx="75" cy="58" rx="38" ry="34" fill="${bodyColor}" stroke="${O}" stroke-width="3"/>`+
  // Highlight
  `<ellipse cx="63" cy="44" rx="14" ry="10" fill="#FFF" opacity="0.3"/>`+
  // Ohren - ENORM und detailliert
  `<ellipse cx="52" cy="22" rx="13" ry="34" fill="${earColor}" stroke="${O}" stroke-width="3" transform="rotate(-10 52 22)"/>`+
  `<ellipse cx="58" cy="26" rx="8" ry="25" fill="#FFB6C1" opacity="0.75" transform="rotate(-10 52 22)"/>`+
  `<ellipse cx="98" cy="22" rx="13" ry="34" fill="${earColor}" stroke="${O}" stroke-width="3" transform="rotate(10 98 22)"/>`+
  `<ellipse cx="92" cy="26" rx="8" ry="25" fill="#FFB6C1" opacity="0.75" transform="rotate(10 98 22)"/>`+
  // Innenohr-Glanz
  `<ellipse cx="56" cy="15" rx="3" ry="6" fill="#FFF" opacity="0.6" transform="rotate(-10 52 22)"/>`+
  `<ellipse cx="94" cy="15" rx="3" ry="6" fill="#FFF" opacity="0.6" transform="rotate(10 98 22)"/>`+
  // Schnurrhaare
  `<path d="M48 65 L34 62 M48 68 L32 67 M48 71 L34 73" stroke="#1A1A1A" stroke-width="1.8" opacity="0.6" stroke-linecap="round"/>`+
  `<path d="M102 65 L116 62 M102 68 L118 67 M102 71 L116 73" stroke="#1A1A1A" stroke-width="1.8" opacity="0.6" stroke-linecap="round"/>`+
  // Schnauze
  `<ellipse cx="75" cy="72" rx="16" ry="12" fill="#FFF5EE" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="75" cy="70" rx="10" ry="7" fill="#FFF" opacity="0.5"/>`+
  // Nase - herzförmig & größer
  `<path d="M75 65 L70 60 A3.5 3.5 0 1 1 75 65 A3.5 3.5 0 1 1 80 60 Z" fill="#FF4D88" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="73" cy="61" rx="1" ry="0.6" fill="#FFF" opacity="0.7"/>`+
  // Mund - Kawaii-Lächeln
  `<path d="M67 76 Q75 82 75 76 Q75 82 83 76" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>`+
  // Zähnchen
  `<rect x="72" y="78" width="3" height="5" rx="1" fill="#FFF" stroke="${O}" stroke-width="1"/>`+
  `<rect x="75" y="78" width="3" height="5" rx="1" fill="#FFF" stroke="${O}" stroke-width="1"/>`+
  // Wangen - VERSTÄRKT
  wangeV5(53, 65, 12, 7) + wangeV5(97, 65, 12, 7) +
  // Augen - RIESIG mit Doppel-Glanz
  augeV5(60, 53, 8.5) + augeV5(90, 53, 8.5) +
  // Stirn-Tupfen
  `<ellipse cx="75" cy="38" rx="3" ry="2" fill="${lighterV5(bodyColor, 30)}" opacity="0.6"/>`+
  // Accessoire (Schleife für Häsin)
  (isGirl ?
    `<path d="M105 30 L114 22 L114 38 Z" fill="#FF69B4" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>`+
    `<path d="M105 30 L96 22 L96 38 Z" fill="#FF69B4" stroke="${O}" stroke-width="1.5" stroke-linejoin="round"/>`+
    `<circle cx="105" cy="30" r="3" fill="#FF1493" stroke="${O}" stroke-width="1.5"/>` : '')+
  // Stern-Akzent
  sternV5(28, 40, 3.5, '#FFD700')
);

const rammlerV5 = kaninchenV5('#A0683E', '#CD853F', false);
const haesinV5 = kaninchenV5('#E0E0E0', '#FFFFFF', true);

// ===================== KUH V5 - Niedlich mit Glocke =====================
const kuhV5 = svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="50" ry="11" fill="#000" opacity="0.18"/>`+
  // Hinterbeine
  `<ellipse cx="32" cy="112" rx="15" ry="22" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="55" cy="114" rx="15" ry="20" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  // Hufe
  `<ellipse cx="32" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="55" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="29" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  `<ellipse cx="52" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  // Körper
  `<ellipse cx="75" cy="92" rx="52" ry="36" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="75" cy="86" rx="38" ry="20" fill="#FFF" opacity="0.4"/>`+
  // Flecken - größer & mehr Kontrast
  `<ellipse cx="55" cy="80" rx="17" ry="13" fill="#1A1A1A" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="95" cy="98" rx="14" ry="11" fill="#1A1A1A" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="70" cy="108" rx="9" ry="7" fill="#1A1A1A" stroke="${O}" stroke-width="1.5"/>`+
  // Fleck-Glanz
  `<ellipse cx="50" cy="76" rx="4" ry="2" fill="#FFF" opacity="0.3"/>`+
  // Vorderbeine
  `<ellipse cx="95" cy="114" rx="15" ry="20" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="118" cy="112" rx="15" ry="22" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="95" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="118" cy="130" rx="12" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="92" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  `<ellipse cx="115" cy="131" rx="1.5" ry="1" fill="#FFF" opacity="0.4"/>`+
  // Euter
  `<ellipse cx="75" cy="120" rx="13" ry="9" fill="#FFB6C1" stroke="${O}" stroke-width="2.5"/>`+
  `<circle cx="69" cy="125" r="2.5" fill="#FF8DA8"/>`+
  `<circle cx="75" cy="127" r="2.5" fill="#FF8DA8"/>`+
  `<circle cx="81" cy="125" r="2.5" fill="#FF8DA8"/>`+
  // Hals
  `<ellipse cx="115" cy="68" rx="18" ry="22" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  // Kopf - RIESIG
  `<ellipse cx="130" cy="55" rx="32" ry="28" fill="#FAFAFA" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="122" cy="45" rx="12" ry="9" fill="#FFF" opacity="0.4"/>`+
  // Kopf-Fleck
  `<ellipse cx="135" cy="48" rx="10" ry="6" fill="#1A1A1A" stroke="${O}" stroke-width="1.5"/>`+
  // Schnauze
  `<ellipse cx="142" cy="68" rx="15" ry="12" fill="#FFB6C1" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="140" cy="63" rx="10" ry="7" fill="#FFF" opacity="0.4"/>`+
  // Nase - groß & niedlich
  `<ellipse cx="148" cy="65" rx="6" ry="5" fill="#1A1A1A"/>`+
  `<ellipse cx="146" cy="63" rx="2" ry="1" fill="#FFF" opacity="0.7"/>`+
  // Mund
  `<path d="M138 73 Q145 78 152 73" fill="none" stroke="${O}" stroke-width="2.5" stroke-linecap="round"/>`+
  // Ohren
  `<ellipse cx="108" cy="42" rx="11" ry="16" fill="#FAFAFA" stroke="${O}" stroke-width="3" transform="rotate(-30 108 42)"/>`+
  `<ellipse cx="152" cy="42" rx="11" ry="16" fill="#FAFAFA" stroke="${O}" stroke-width="3" transform="rotate(30 152 42)"/>`+
  `<ellipse cx="110" cy="44" rx="6" ry="10" fill="#FFB6C1" transform="rotate(-30 108 42)"/>`+
  `<ellipse cx="150" cy="44" rx="6" ry="10" fill="#FFB6C1" transform="rotate(30 152 42)"/>`+
  // Hörner
  `<path d="M115 32 Q108 18 116 22" stroke="#D2B48C" stroke-width="5" fill="none" stroke-linecap="round"/>`+
  `<path d="M145 32 Q152 18 144 22" stroke="#D2B48C" stroke-width="5" fill="none" stroke-linecap="round"/>`+
  // Glocke (Accessoire)
  `<path d="M115 78 Q130 84 145 78" stroke="#8B4513" stroke-width="3" fill="none"/>`+
  `<path d="M123 80 L130 96 L137 80 Z" fill="#FFD700" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/>`+
  `<circle cx="130" cy="83" r="2" fill="#8B4513"/>`+
  `<ellipse cx="127" cy="85" rx="2" ry="1" fill="#FFF" opacity="0.6"/>`+
  // Augen - RIESIG
  augeV5(134, 50, 6.5) +
  // Wangen - VERSTÄRKT
  wangeV5(118, 58, 9, 6) +
  // Sparkle
  sparkleV5(110, 28, 3.5)
);

// ===================== SCHAF V5 - Ultra-Flauschig =====================
const schafV5 = svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="50" ry="11" fill="#000" opacity="0.18"/>`+
  // Beine - dünn und schwarz
  `<ellipse cx="48" cy="122" rx="7" ry="20" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="64" cy="124" rx="7" ry="18" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="86" cy="124" rx="7" ry="18" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  `<ellipse cx="102" cy="122" rx="7" ry="20" fill="#1A1A1A" stroke="${O}" stroke-width="2.5"/>`+
  // Hufe
  `<ellipse cx="48" cy="138" rx="6" ry="3" fill="#000" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="64" cy="140" rx="6" ry="3" fill="#000" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="86" cy="140" rx="6" ry="3" fill="#000" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="102" cy="138" rx="6" ry="3" fill="#000" stroke="${O}" stroke-width="1.5"/>`+
  // Wolle-Körper
  `<ellipse cx="75" cy="92" rx="48" ry="40" fill="#FFFAF0" stroke="${O}" stroke-width="3"/>`+
  // Wolle-Kreise - mehr, größer
  `<circle cx="42" cy="78" r="14" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="58" cy="70" r="15" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="75" cy="68" r="16" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="92" cy="70" r="15" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="108" cy="78" r="14" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="38" cy="95" r="13" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="112" cy="95" r="13" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="48" cy="112" r="13" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="75" cy="116" r="14" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="102" cy="112" r="13" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  // Wolle-Glanz
  `<ellipse cx="60" cy="58" rx="14" ry="8" fill="#FFF" opacity="0.7"/>`+
  `<ellipse cx="50" cy="76" rx="5" ry="3" fill="#FFF" opacity="0.6"/>`+
  // Hals (dunkel)
  `<ellipse cx="120" cy="68" rx="14" ry="20" fill="#2A2A2A" stroke="${O}" stroke-width="2.5"/>`+
  // Kopf - RIESIG
  `<ellipse cx="130" cy="60" rx="26" ry="24" fill="#2A2A2A" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="125" cy="50" rx="10" ry="7" fill="#4A4A4A" opacity="0.6"/>`+
  // Wolle am Kopf
  `<circle cx="118" cy="42" r="10" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="135" cy="38" r="11" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  `<circle cx="148" cy="46" r="10" fill="#FFFAF0" stroke="${O}" stroke-width="2"/>`+
  // Ohren - dunkel
  `<ellipse cx="108" cy="50" rx="7" ry="11" fill="#2A2A2A" stroke="${O}" stroke-width="2.5" transform="rotate(-20 108 50)"/>`+
  `<ellipse cx="110" cy="52" rx="3" ry="6" fill="#FFB6C1" opacity="0.6" transform="rotate(-20 108 50)"/>`+
  `<ellipse cx="152" cy="50" rx="7" ry="11" fill="#2A2A2A" stroke="${O}" stroke-width="2.5" transform="rotate(20 152 50)"/>`+
  `<ellipse cx="150" cy="52" rx="3" ry="6" fill="#FFB6C1" opacity="0.6" transform="rotate(20 152 50)"/>`+
  // Schnauze
  `<ellipse cx="142" cy="68" rx="11" ry="8" fill="#FFB6C1" stroke="${O}" stroke-width="2"/>`+
  // Nase
  `<ellipse cx="148" cy="65" rx="4" ry="3" fill="#FF4D88"/>`+
  `<ellipse cx="146" cy="63" rx="1" ry="0.6" fill="#FFF" opacity="0.7"/>`+
  // Mund
  `<path d="M138 73 Q145 78 152 73" fill="none" stroke="${O}" stroke-width="2" stroke-linecap="round"/>`+
  // Augen - RIESIG
  augeV5(125, 55, 5.5) + augeV5(143, 55, 5.5) +
  // Wangen
  wangeV5(118, 62, 7, 5) +
  // Herz-Akzent
  herzV5(35, 30, 5, '#FF4D88')+
  // Sparkle
  sparkleV5(28, 50, 3)
);

// ===================== ENTE V5 - Niedlich =====================
const enteV5 = svgWrapV5(
  // Schatten
  `<ellipse cx="75" cy="138" rx="40" ry="9" fill="#000" opacity="0.18"/>`+
  // Körper
  `<ellipse cx="72" cy="100" rx="44" ry="30" fill="#F5DEB3" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="72" cy="95" rx="32" ry="20" fill="#FFE4B5"/>`+
  // Flügel
  `<ellipse cx="48" cy="95" rx="20" ry="16" fill="#DEB887" stroke="${O}" stroke-width="3"/>`+
  `<path d="M30 90 Q48 84 66 90" stroke="${O}" stroke-width="2" fill="none" opacity="0.6"/>`+
  `<path d="M32 96 Q48 92 64 96" stroke="${O}" stroke-width="2" fill="none" opacity="0.6"/>`+
  // Beine
  `<path d="M62 124 L62 134" stroke="#FF8C00" stroke-width="6" stroke-linecap="round"/>`+
  `<path d="M82 124 L82 134" stroke="#FF8C00" stroke-width="6" stroke-linecap="round"/>`+
  // Füße
  `<path d="M55 134 L62 134 L70 134" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" fill="none"/>`+
  `<path d="M75 134 L82 134 L90 134" stroke="#FF8C00" stroke-width="4" stroke-linecap="round" fill="none"/>`+
  `<ellipse cx="62" cy="136" rx="9" ry="4" fill="#FF8C00" stroke="${O}" stroke-width="1.5"/>`+
  `<ellipse cx="82" cy="136" rx="9" ry="4" fill="#FF8C00" stroke="${O}" stroke-width="1.5"/>`+
  // Kopf - RIESIG
  `<ellipse cx="108" cy="60" rx="26" ry="22" fill="#FFE4B5" stroke="${O}" stroke-width="3"/>`+
  `<ellipse cx="102" cy="50" rx="10" ry="7" fill="#FFF" opacity="0.4"/>`+
  // Schnabel - größer
  `<path d="M122 56 L148 50 L122 72Z" fill="#FF8C00" stroke="${O}" stroke-width="2.5" stroke-linejoin="round"/>`+
  `<path d="M122 62 L148 60" stroke="${O}" stroke-width="1" opacity="0.5"/>`+
  // Augen - RIESIG
  augeV5(112, 56, 6) +
  // Wangen - VERSTÄRKT
  wangeV5(100, 66, 8, 5) +
  // Flügel-Detail
  `<ellipse cx="48" cy="92" rx="3" ry="2" fill="#8B7355" opacity="0.4"/>`+
  `<ellipse cx="55" cy="96" rx="2" ry="1.5" fill="#8B7355" opacity="0.4"/>`+
  // Stern
  sternV5(35, 35, 3.5, '#FFD700')
);

// ===================== EXPORT =====================
if (typeof window !== 'undefined') {
  window.tiereV5 = {
    ruede: ruedeV5,
    huendin: huendinV5,
    kater: katerV5,
    katze: katzeV5Instanz,
    hahn: hahnV5,
    henne: henneV5,
    rammler: rammlerV5,
    haesin: haesinV5,
    hengst: hengstV5,
    stute: stuteV5,
    ente: enteV5,
    kuh: kuhV5,
    schaf: schafV5
  };
}