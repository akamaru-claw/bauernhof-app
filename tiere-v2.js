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
