/* ===================== VERBESSERTE TIERE V3 ===================== */

// Hund V3 - noch mehr Details, kindgerechter, rundere Formen
const hundV3 = (b, e) => svgWrapEnhanced(
  sh(75,102,42)+
  // Beine mit Pfoten
  '<ellipse cx="55" cy="82" rx="12" ry="8" fill="'+darkerColor(b,15)+'" stroke="'+O+'" stroke-width="2.5"/>'+
  '<ellipse cx="95" cy="82" rx="12" ry="8" fill="'+darkerColor(b,15)+'" stroke="'+O+'" stroke-width="2.5"/>'+
  '<ellipse cx="55" cy="75" rx="10" ry="22" fill="'+b+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="95" cy="75" rx="10" ry="22" fill="'+b+'" stroke="'+O+'" stroke-width="2.6"/>'+
  // Körper - plump und kindgerecht
  '<ellipse cx="75" cy="62" rx="38" ry="26" fill="'+b+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="75" cy="58" rx="30" ry="18" fill="'+lighterColor(b,20)+'" opacity="0.6"/>'+
  // Schwanz - wedelnd
  '<path d="M108 55 Q135 35 140 50 Q145 65 132 58" fill="none" stroke="'+darkerColor(b,15)+'" stroke-width="10" stroke-linecap="round"/>'+
  // Kopf - größer und runder
  '<ellipse cx="45" cy="44" rx="26" ry="22" fill="'+lighterColor(b,15)+'" stroke="'+O+'" stroke-width="2.6"/>'+
  // Ohren - floppy
  '<ellipse cx="35" cy="38" rx="11" ry="20" fill="'+e+'" stroke="'+O+'" stroke-width="2.2" transform="rotate(-25 35 38)"/>'+
  '<ellipse cx="55" cy="38" rx="11" ry="20" fill="'+e+'" stroke="'+O+'" stroke-width="2.2" transform="rotate(25 55 38)"/>'+
  '<ellipse cx="35" cy="42" rx="6" ry="12" fill="'+lighterColor(e,20)+'" opacity="0.6" transform="rotate(-25 35 38)"/>'+
  '<ellipse cx="55" cy="42" rx="6" ry="12" fill="'+lighterColor(e,20)+'" opacity="0.6" transform="rotate(25 55 38)"/>'+
  // Schnauze
  '<ellipse cx="45" cy="52" rx="14" ry="10" fill="#FFEFD5" stroke="'+O+'" stroke-width="1.8"/>'+
  '<ellipse cx="45" cy="48" rx="8" ry="5" fill="#FFE4C4" opacity="0.7"/>'+
  // Nase
  '<ellipse cx="45" cy="49" rx="4" ry="3" fill="#4A2E1B"/>'+
  '<ellipse cx="43" cy="48" rx="1.2" ry="0.8" fill="#6B8E23" opacity="0.6"/>'+
  '<ellipse cx="47" cy="48" rx="1.2" ry="0.8" fill="#6B8E23" opacity="0.6"/>'+
  // Augenbrauen
  '<ellipse cx="38" cy="42" rx="5" ry="3" fill="#E8B84B" opacity="0.5"/>'+
  '<ellipse cx="52" cy="42" rx="5" ry="3" fill="#E8B84B" opacity="0.5"/>'+
  // Augen - größer und ausdrucksstark
  auge(38,38,4)+auge(52,38,4)+
  // Mund lächelnd
  '<path d="M38 58 Q45 64 52 58" fill="none" stroke="#4A2E1B" stroke-width="2" stroke-linecap="round"/>'+
  // Fleck am Auge
  '<ellipse cx="38" cy="45" rx="6" ry="4" fill="'+darkerColor(b,10)+'" opacity="0.4"/>'
);

// Katze V3 - niedlicher, größere Augen
const katzeV3 = (b, s) => svgWrapEnhanced(
  sh(72,102,32)+
  // Beine mit Pfoten
  '<ellipse cx="60" cy="88" rx="10" ry="7" fill="'+darkerColor(b,12)+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="80" cy="88" rx="10" ry="7" fill="'+darkerColor(b,12)+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="60" cy="82" rx="8" ry="16" fill="'+b+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="80" cy="82" rx="8" ry="16" fill="'+b+'" stroke="'+O+'" stroke-width="2.2"/>'+
  // Körper
  '<ellipse cx="72" cy="72" rx="28" ry="20" fill="'+b+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Schwanz - geschwungen
  '<path d="M96 68 Q125 55 120 80 Q115 85 108 76" fill="none" stroke="'+darkerColor(b,20)+'" stroke-width="8" stroke-linecap="round"/>'+
  // Kopf
  '<ellipse cx="55" cy="54" rx="20" ry="17" fill="'+lighterColor(b,12)+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Ohren - spitz und detailliert
  '<path d="M42 45 L48 55 L34 55 Z" fill="'+darkerColor(b,18)+'" stroke="'+O+'" stroke-width="2" stroke-linejoin="round"/>'+
  '<path d="M46 47 L48 52 L40 52 Z" fill="'+lighterColor(b,25)+'"/>'+
  '<path d="M68 45 L74 55 L60 55 Z" fill="'+darkerColor(b,18)+'" stroke="'+O+'" stroke-width="2" stroke-linejoin="round"/>'+
  '<path d="M72 47 L74 52 L66 52 Z" fill="'+lighterColor(b,25)+'"/>'+
  // Schnurrhaare
  '<path d="M36 58 L28 56 M36 60 L26 60 M36 62 L28 64 M74 58 L82 56 M74 60 L84 60 M74 62 L82 64" stroke="'+s+'" stroke-width="1.5" stroke-linecap="round" opacity="0.6"/>'+
  // Schnauze
  '<ellipse cx="55" cy="60" rx="10" ry="7" fill="#FFF5EE" stroke="'+O+'" stroke-width="1.4"/>'+
  '<circle cx="55" cy="58" r="2.5" fill="#FF69B4"/>'+
  // Mund
  '<path d="M50 64 Q55 68 60 64" fill="none" stroke="#33281A" stroke-width="1.5"/>'+
  // Augen - groß und niedlich
  auge(48,52,3.5)+auge(62,52,3.5)
);

// Pferd V3 - kindgerechter, glückliches Gesicht
const pferdV3 = (opts) => svgWrapEnhanced(
  // Hufe
  '<ellipse cx="44" cy="90" rx="8" ry="5" fill="#3A2814" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="96" cy="90" rx="8" ry="5" fill="#3A2814" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="60" cy="90" rx="8" ry="5" fill="#3A2814" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="80" cy="90" rx="8" ry="5" fill="#3A2814" stroke="'+O+'" stroke-width="2"/>'+
  // Beine
  '<ellipse cx="44" cy="76" rx="10" ry="18" fill="'+opts.leg+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="60" cy="78" rx="10" ry="16" fill="'+opts.leg+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="80" cy="78" rx="10" ry="16" fill="'+opts.leg+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="96" cy="76" rx="10" ry="18" fill="'+opts.leg+'" stroke="'+O+'" stroke-width="2.6"/>'+
  // Schweif
  '<path d="M24 56 Q8 64 12 92 Q18 84 24 70 Q18 82 28 64Z" fill="'+opts.mane+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Körper
  '<ellipse cx="68" cy="60" rx="44" ry="27" fill="'+opts.body+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="68" cy="54" rx="32" ry="16" fill="'+lighterColor(opts.body,15)+'" opacity="0.5"/>'+
  // Hals und Kopf
  '<ellipse cx="92" cy="48" rx="26" ry="20" fill="'+lighterColor(opts.body,10)+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Mähne
  '<path d="M70 52 Q72 18 98 20 Q86 26 85 44" fill="'+opts.mane+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<path d="M80 22 Q92 26 88 42" fill="none" stroke="'+darkerColor(opts.mane,10)+'" stroke-width="3"/>'+
  // Ohren
  '<ellipse cx="98" cy="28" rx="6" ry="10" fill="'+opts.body+'" stroke="'+O+'" stroke-width="2" transform="rotate(-15 98 28)"/>'+
  '<ellipse cx="110" cy="32" rx="6" ry="10" fill="'+opts.body+'" stroke="'+O+'" stroke-width="2" transform="rotate(25 110 32)"/>'+
  '<ellipse cx="100" cy="30" rx="3" ry="5" fill="'+lighterColor(opts.body,20)+'" transform="rotate(-15 98 28)"/>'+
  '<ellipse cx="112" cy="34" rx="3" ry="5" fill="'+lighterColor(opts.body,20)+'" transform="rotate(25 110 32)"/>'+
  // Schnauze
  '<ellipse cx="126" cy="48" rx="9" ry="8" fill="'+(opts.muz||'#D2B48C')+'" stroke="'+O+'" stroke-width="2"/>'+
  // Nüstern
  '<ellipse cx="124" cy="46" rx="2.5" ry="1.8" fill="#4A3A28"/>'+
  '<ellipse cx="129" cy="46" rx="2.5" ry="1.8" fill="#4A3A28"/>'+
  // Mund lächelnd
  '<path d="M122 52 Q126 56 130 52" fill="none" stroke="#33281A" stroke-width="1.5"/>'+
  // Augen - ausdrucksstark
  auge(115,38,4)+
  // Glanz im Auge
  '<circle cx="117" cy="36" r="2" fill="#FFF" opacity="0.7"/>'
);

// Verbesserte Hühnchen V3
const huhnV3 = (isHahn) => svgWrapEnhanced(
  sh(70,104,44)+
  // Füße
  '<path d="M62 92 l-5 12 m9 -12 l0 14 m6 -14 l5 12" stroke="#E8B84B" stroke-width="4" stroke-linecap="round"/>'+
  '<ellipse cx="62" cy="88" rx="5" ry="3" fill="#E8B84B"/>'+
  '<ellipse cx="78" cy="88" rx="5" ry="3" fill="#E8B84B"/>'+
  // Schweif
  '<path d="M28 60 Q8 48 16 74 Q6 68 12 88 Q2 82 18 94 Q38 84 44 68Z" fill="'+(isHahn?'#2F6E4E':'#9c6a34')+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Flügel
  '<path d="M32 58 Q14 46 22 64 Q36 58 46 64Z" fill="'+(isHahn?'#2B4F8A':'#8a5a2a')+'" stroke="'+O+'" stroke-width="2"/>'+
  // Körper - rund
  '<ellipse cx="70" cy="64" rx="36" ry="28" fill="'+(isHahn?'#C2502F':'#caa05a')+'" stroke="'+O+'" stroke-width="2.6"/>'+
  // Federn-Details
  '<path d="M45 62 Q70 55 95 62" stroke="'+(isHahn?'#9A3A22':'#9c7038')+'" stroke-width="2" fill="none" opacity="0.5"/>'+
  // Kopf
  '<ellipse cx="102" cy="50" rx="20" ry="19" fill="'+(isHahn?'#D45E3B':'#d6ac64')+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Kamm (nur Hahn)
  (isHahn?'<path d="M88 34 q3 -13 8 -4 q5 -14 9 -2 q7 -10 8 5 q7 -5 4 11 q-16 -8 -29 -4Z" fill="#FF4500" stroke="'+O+'" stroke-width="2"/>':'')+
  // Schnabel
  '<path d="M110 48 L132 44 L110 58Z" fill="#FFD700" stroke="'+O+'" stroke-width="1.8"/>'+
  // Läppchen
  (isHahn?'<path d="M95 58 q5 12 -3 14 q-6 -4 -1 -14Z" fill="#FF6347" stroke="'+O+'" stroke-width="1.6"/>':'<path d="M98 62 q4 8 -2 9 q-4 -3 -1 -9Z" fill="#E8902B" stroke="'+O+'" stroke-width="1.5"/>')+
  // Augen
  auge(106,48,4)+
  // Glanz
  '<circle cx="108" cy="46" r="1.8" fill="#FFF" opacity="0.8"/>'
);

// Hase/Kaninchen V3 - super niedlich
const kaninchenV3 = (b, e) => svgWrapEnhanced(
  sh(72,102,32)+
  // Körper - rund und plump
  '<ellipse cx="75" cy="85" rx="32" ry="20" fill="'+b+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="75" cy="80" rx="20" ry="12" fill="'+lighterColor(b,20)+'" opacity="0.5"/>'+
  // Schweif
  '<path d="M102 80 A 8 8 0 1 1 108 75" fill="#FFF" stroke="'+O+'" stroke-width="2"/>'+
  // Ohren - riesig und detailliert
  '<ellipse cx="48" cy="38" rx="10" ry="28" fill="'+e+'" stroke="'+O+'" stroke-width="2.2" transform="rotate(-12 48 38)"/>'+
  '<ellipse cx="52" cy="40" rx="5" ry="20" fill="'+lighterColor(e,30)+'" transform="rotate(-12 48 38)"/>'+
  '<ellipse cx="66" cy="38" rx="10" ry="28" fill="'+e+'" stroke="'+O+'" stroke-width="2.2" transform="rotate(12 66 38)"/>'+
  '<ellipse cx="62" cy="40" rx="5" ry="20" fill="'+lighterColor(e,30)+'" transform="rotate(12 66 38)"/>'+
  // Kopf - größer
  '<ellipse cx="57" cy="66" rx="22" ry="17" fill="'+lighterColor(b,15)+'" stroke="'+O+'" stroke-width="2.4"/>'+
  // Schnurrhaare
  '<path d="M38 68 L28 66 M38 70 L26 70 M38 72 L28 74 M76 68 L86 66 M76 70 L88 70 M76 72 L86 74" stroke="#888" stroke-width="1" opacity="0.5"/>'+
  // Schnauze
  '<ellipse cx="57" cy="70" rx="10" ry="7" fill="#FFF5EE" stroke="'+O+'" stroke-width="1.4"/>'+
  '<circle cx="57" cy="68" r="3.5" fill="#FF69B4"/>'+
  // Mund
  '<path d="M52 74 Q57 78 62 74" fill="none" stroke="#33281A" stroke-width="1.5"/>'+
  // Wangen
  '<ellipse cx="45" cy="68" rx="6" ry="4" fill="#FFB6C1" opacity="0.5"/>'+
  '<ellipse cx="69" cy="68" rx="6" ry="4" fill="#FFB6C1" opacity="0.5"/>'+
  // Augen - riesig und niedlich
  auge(50,62,4)+auge(64,62,4)+
  // Glanz
  '<circle cx="52" cy="60" r="1.5" fill="#FFF" opacity="0.9"/>'+
  '<circle cx="66" cy="60" r="1.5" fill="#FFF" opacity="0.9"/>'
);

// V3 Instanzen
const ruedeV3 = hundV3('#6B4226', '#4A2E1B');
const huendinV3 = hundV3('#A0522D', '#8B4513');
const katerV3 = katzeV3('#E49B0F', '#FFF');
const katzeV3Instanz = katzeV3('#808080', '#FFF');
const hahnV3 = huhnV3(true);
const henneV3 = huhnV3(false);
const rammlerV3 = kaninchenV3('#A0522D', '#CD853F');
const haesinV3 = kaninchenV3('#D3D3D3', '#FFF');
const hengstV3 = pferdV3({body:'#6b4626',mane:'#2c1b0e',leg:'#5a3b20',muz:'#4f351d'});
const stuteV3 = pferdV3({body:'#b06a35',mane:'#6e3d1c',leg:'#9c5d2c',muz:'#8a4f24'});

/* ===================== WEITERE TIERE V2 ===================== */

// Hilfsfunktionen für Farbmanipulation
function lighterColor(hex, percent){
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) + amt;
  const G = ((num >> 8) & 0x00FF) + amt;
  const B = (num & 0x0000FF) + amt;
  return '#' + (0x1000000 + (R<255?R<1?0:R:255)*0x10000 + (G<255?G<1?0:G:255)*0x100 + (B<255?B<1?0:B:255)).toString(16).slice(1);
}
function darkerColor(hex, percent){
  const num = parseInt(hex.replace('#',''), 16);
  const amt = Math.round(2.55 * percent);
  const R = (num >> 16) - amt;
  const G = ((num >> 8) & 0x00FF) - amt;
  const B = (num & 0x0000FF) - amt;
  return '#' + (0x1000000 + (R>0?R:0)*0x10000 + (G>0?G:0)*0x100 + (B>0?B:0)).toString(16).slice(1);
}

// Einfachere V2-Versionen ohne komplexe Farbmanipulation
// Hund V2 - verbessert mit Details
const hundV2 = (b, e) => svgWrapEnhanced(
  sh(75,102,42)+
  bn(55,80,10,24,b)+bn(95,80,10,24,b)+
  '<ellipse cx="75" cy="65" rx="35" ry="24" fill="'+b+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<path d="M102 58 Q124 38 130 48" fill="none" stroke="'+darkerColor(b,20)+'" stroke-width="7" stroke-linecap="round"/>'+
  '<ellipse cx="48" cy="46" rx="22" ry="19" fill="'+lighterColor(b,10)+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="38" cy="42" rx="9" ry="18" fill="'+e+'" stroke="'+O+'" stroke-width="2" transform="rotate(-20 38 42)"/>'+
  '<ellipse cx="58" cy="42" rx="9" ry="18" fill="'+e+'" stroke="'+O+'" stroke-width="2" transform="rotate(20 58 42)"/>'+
  '<ellipse cx="48" cy="54" rx="11" ry="8" fill="#FFEFD5" stroke="'+O+'" stroke-width="1.6"/>'+
  '<circle cx="48" cy="51" r="3" fill="#4A2E1B"/>'+
  '<ellipse cx="42" cy="46" rx="4" ry="2.5" fill="#E8B84B" opacity="0.4"/>'+
  '<ellipse cx="54" cy="46" rx="4" ry="2.5" fill="#E8B84B" opacity="0.4"/>'+
  auge(42,44,3.4)+auge(54,44,3.4)
);

// Katze V2
const katzeV2 = (b, s) => svgWrapEnhanced(
  sh(72,102,32)+
  bn(60,85,7,18,b)+bn(80,85,7,18,b)+
  '<ellipse cx="72" cy="75" rx="24" ry="18" fill="'+b+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<path d="M90 70 Q112 48 118 78" fill="none" stroke="'+darkerColor(b,25)+'" stroke-width="6" stroke-linecap="round"/>'+
  '<path d="M43 42 L50 50 L36 50 Z" fill="'+darkerColor(b,15)+'" stroke="'+O+'" stroke-width="1.8" stroke-linejoin="round"/>'+
  '<path d="M63 42 L70 50 L56 50 Z" fill="'+darkerColor(b,15)+'" stroke="'+O+'" stroke-width="1.8" stroke-linejoin="round"/>'+
  '<ellipse cx="55" cy="58" rx="17" ry="15" fill="'+lighterColor(b,15)+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<path d="M33 58 L44 60 M33 63 L44 63 M76 58 L66 60 M76 63 L66 63" stroke="'+s+'" stroke-width="1.8" stroke-linecap="round" opacity="0.7"/>'+
  '<ellipse cx="55" cy="63" rx="7" ry="5" fill="#FFF5EE" stroke="'+O+'" stroke-width="1.2"/>'+
  '<circle cx="55" cy="61" r="2" fill="#FF69B4"/>'+
  auge(50,56,2.8)+auge(60,56,2.8)
);

// Pferd V2
const pferdV2 = (opts) => svgWrapEnhanced(
  bn(44,74,12,30,opts.leg)+bn(60,76,12,28,opts.leg)+bn(80,76,12,28,opts.leg)+bn(96,74,12,30,opts.leg)+
  '<path d="M28 56 Q12 64 16 94 Q24 86 28 72 Q22 84 32 66Z" fill="'+opts.mane+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="62" cy="62" rx="42" ry="26" fill="'+opts.body+'" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="84" cy="52" rx="24" ry="18" fill="'+lighterColor(opts.body,10)+'" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M104 28 Q126 24 132 42 Q134 52 124 54 L110 48 Q102 34 104 28Z" fill="'+lighterColor(opts.body,5)+'" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M86 56 Q88 26 110 26 Q100 32 99 44 Q106 30 98 50 Q96 40 90 60Z" fill="'+opts.mane+'" stroke="'+O+'" stroke-width="2" stroke-linejoin="round"/>'+
  '<path d="M106 28 l-2 -12 l9 8Z" fill="'+lighterColor(opts.body,5)+'" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M114 30 l4 -11 l4 10Z" fill="'+lighterColor(opts.body,5)+'" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M110 24 q5 -3 9 2 q-5 0 -7 3Z" fill="'+opts.mane+'"/>'+
  '<ellipse cx="130" cy="50" rx="7" ry="6" fill="'+(opts.muz||'#D2B48C')+'" stroke="'+O+'" stroke-width="1.8"/>'+
  auge(120,40,3.4)
);

// Hengst und Stute V2
const hengstV2 = svgWrapEnhanced(
  bn(44,74,12,30,'#5a3b20')+bn(60,76,12,28,'#5a3b20')+bn(80,76,12,28,'#5a3b20')+bn(96,74,12,30,'#5a3b20')+
  '<path d="M28 56 Q12 64 16 94 Q24 86 28 72 Q22 84 32 66Z" fill="#2c1b0e" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="62" cy="62" rx="42" ry="26" fill="#6b4626" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="84" cy="52" rx="24" ry="18" fill="#7a5333" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M104 28 Q126 24 132 42 Q134 52 124 54 L110 48 Q102 34 104 28Z" fill="#7a5333" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M86 56 Q88 26 110 26 Q100 32 99 44 Q106 30 98 50 Q96 40 90 60Z" fill="#2c1b0e" stroke="'+O+'" stroke-width="2" stroke-linejoin="round"/>'+
  '<path d="M106 28 l-2 -12 l9 8Z" fill="#7a5333" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M114 30 l4 -11 l4 10Z" fill="#7a5333" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M110 24 q5 -3 9 2 q-5 0 -7 3Z" fill="#2c1b0e"/>'+
  '<ellipse cx="130" cy="50" rx="7" ry="6" fill="#4f351d" stroke="'+O+'" stroke-width="1.8"/>'+
  auge(120,40,3.4)
);

const stuteV2 = svgWrapEnhanced(
  bn(44,74,12,28,'#9c5d2c')+bn(60,76,12,26,'#9c5d2c')+bn(80,76,12,26,'#9c5d2c')+bn(96,74,12,28,'#9c5d2c')+
  '<path d="M28 56 Q12 64 16 94 Q24 86 28 72 Q22 84 32 66Z" fill="#6e3d1c" stroke="'+O+'" stroke-width="2.2"/>'+
  '<ellipse cx="62" cy="62" rx="42" ry="26" fill="#b06a35" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="84" cy="52" rx="24" ry="18" fill="#c07a45" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M104 28 Q126 24 132 42 Q134 52 124 54 L110 48 Q102 34 104 28Z" fill="#c07a45" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M86 56 Q88 26 110 26 Q100 32 99 44 Q106 30 98 50 Q96 40 90 60Z" fill="#6e3d1c" stroke="'+O+'" stroke-width="2" stroke-linejoin="round"/>'+
  '<path d="M106 28 l-2 -12 l9 8Z" fill="#c07a45" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M114 30 l4 -11 l4 10Z" fill="#c07a45" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M110 24 q5 -3 9 2 q-5 0 -7 3Z" fill="#6e3d1c"/>'+
  '<ellipse cx="130" cy="50" rx="7" ry="6" fill="#8a4f24" stroke="'+O+'" stroke-width="1.8"/>'+
  auge(120,40,3.4)
);

// Hahn V2
const hahnV2 = svgWrapEnhanced(
  sh(72,104,44)+
  '<path d="M62 86 l-5 14 m9 -14 l0 16 m6 -15 l5 14" stroke="#E8B84B" stroke-width="3.8" stroke-linecap="round"/>'+
  '<path d="M30 58 Q6 44 14 74 Q2 66 8 90 Q-2 84 16 98 Q40 86 46 66Z" fill="#2F6E4E" stroke="'+O+'" stroke-width="2.2"/>'+
  '<path d="M28 54 Q8 40 18 62 Q34 56 44 62Z" fill="#2B4F8A" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="68" cy="62" rx="38" ry="30" fill="#C2502F" stroke="'+O+'" stroke-width="2.6"/>'+
  '<ellipse cx="98" cy="46" rx="21" ry="21" fill="#D45E3B" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M84 28 q3 -11 8 -2 q5 -12 9 -1 q7 -9 8 4 q7 -4 4 9 q-16 -6 -29 -3Z" fill="#FF4500" stroke="'+O+'" stroke-width="2"/>'+
  '<path d="M89 64 q5 11 -3 13 q-6 -4 -1 -13Z" fill="#FF6347" stroke="'+O+'" stroke-width="1.8"/>'+
  '<path d="M108 44 L130 38 L108 53Z" fill="#FFD700" stroke="'+O+'" stroke-width="1.8"/>'+
  '<circle cx="96" cy="42" r="4" fill="#FFD700" opacity="0.3"/>'+
  auge(100,44,3.8)
);

// Ente V2
const enteV2 = svgWrapEnhanced(
  sh(72,106,40)+
  bn(66,92,6,14,'#E8A23B')+bn(80,92,6,14,'#E8A23B')+
  '<path d="M38 78 Q26 68 44 66 Q35 76 52 76Z" fill="#7A5A3E" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="66" cy="70" rx="38" ry="25" fill="#C49E6E" stroke="'+O+'" stroke-width="2.6"/>'+
  '<path d="M40 62 Q66 54 92 62" stroke="#6A4A2E" stroke-width="3" fill="none"/>'+
  '<ellipse cx="102" cy="56" rx="16" ry="15" fill="#A98456" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M114 52 Q131 50 128 60 Q114 60 114 57Z" fill="#E8A23B" stroke="'+O+'" stroke-width="2"/>'+
  '<ellipse cx="56" cy="65" rx="8" ry="5" fill="#7A5A3E" opacity="0.3"/>'+
  auge(105,54,3.8)
);

// Kaninchen/Hase V2
const kaninchenV2 = (b, e) => svgWrapEnhanced(
  sh(72,102,32)+
  '<ellipse cx="75" cy="85" rx="27" ry="17" fill="'+b+'" stroke="'+O+'" stroke-width="2.4"/>'+
  '<path d="M95 85 A 6 6 0 1 1 100 80" fill="#FFF" stroke="'+O+'" stroke-width="1.5"/>'+
  '<ellipse cx="50" cy="42" rx="8" ry="26" fill="'+e+'" stroke="'+O+'" stroke-width="2" transform="rotate(-15 50 42)"/>'+
  '<ellipse cx="65" cy="42" rx="8" ry="26" fill="'+e+'" stroke="'+O+'" stroke-width="2" transform="rotate(15 65 42)"/>'+
  '<ellipse cx="57" cy="68" rx="17" ry="14" fill="'+lighterColor(b,10)+'" stroke="'+O+'" stroke-width="2.2"/>'+
  '<circle cx="57" cy="69" r="2.2" fill="#FF69B4"/>'+
  auge(52,63,2.8)+auge(62,63,2.8)
);

const rammlerV2 = kaninchenV2('#A0522D', '#CD853F');
const haesinV2 = kaninchenV2('#D3D3D3', '#FFF');

// Instanzen für Hund und Katze
const ruedeV2 = hundV2('#6B4226', '#4A2E1B');
const huendinV2 = hundV2('#A0522D', '#8B4513');
const katerV2 = katzeV2('#E49B0F', '#FFF');
const katzeV2Instanz = katzeV2('#808080', '#FFF');
