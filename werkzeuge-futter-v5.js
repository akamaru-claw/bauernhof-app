/* ===================== WERKZEUGE V5 - Ultra-Kid-Friendly MAX ===================== */
// NOCH größere Icons, KRÄFTIGERE Farbverläufe, DICKERE Outlines (3px),
// MEHR Highlights/Schatten für 3D-Effekt, glänzende Metall-Teile, größere Details

const svgWrapV5 = (content) =>
  `<svg viewBox="0 0 160 160" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;

// ===================== SCHAUFEIL V5 =====================
const schaufelV5 = svgWrapV5(`
<defs>
  <linearGradient id="s5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="s5m" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#D8D8D8"/>
    <stop offset="100%" stop-color="#888888"/>
  </linearGradient>
  <linearGradient id="s5g" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#E0A050"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <filter id="s5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#s5s)">
  <!-- Griff -->
  <rect x="68" y="8" width="24" height="76" rx="7" fill="url(#s5h)" stroke="#3A2410" stroke-width="3"/>
  <!-- Griff-Ende (größer) -->
  <rect x="58" y="2" width="44" height="22" rx="10" fill="url(#s5g)" stroke="#3A2410" stroke-width="3"/>
  <!-- Schaufelblatt -->
  <path d="M30 75 Q80 58 130 75 L118 138 Q80 144 42 138 Z" fill="url(#s5m)" stroke="#555" stroke-width="3"/>
  <!-- Großer Glanz -->
  <ellipse cx="80" cy="110" rx="18" ry="10" fill="#FFF" opacity="0.4"/>
  <!-- Metall-Linien -->
  <path d="M45 90 Q80 105 115 90" fill="none" stroke="#FFF" stroke-width="2.5" opacity="0.6"/>
  <path d="M48 120 Q80 124 112 120" fill="none" stroke="#888" stroke-width="2" opacity="0.6"/>
  <!-- Highlight auf Griff -->
  <rect x="71" y="14" width="5" height="60" rx="2" fill="#FFF" opacity="0.35"/>
  <!-- Schraube -->
  <circle cx="80" cy="80" r="4" fill="#777" stroke="#444" stroke-width="1.5"/>
  <circle cx="80" cy="80" r="2" fill="#333"/>
</g>
`);

// ===================== BESEN V5 =====================
const besenV5 = svgWrapV5(`
<defs>
  <linearGradient id="b5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="b5b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE55C"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#D2691E"/>
  </linearGradient>
  <filter id="b5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#b5s)">
  <!-- Stiel -->
  <rect x="72" y="2" width="16" height="80" rx="6" fill="url(#b5h)" stroke="#3A2410" stroke-width="3"/>
  <!-- Befestigung -->
  <ellipse cx="80" cy="12" rx="12" ry="6" fill="#3A2410"/>
  <circle cx="80" cy="12" r="2.5" fill="#FFD8A8"/>
  <!-- Borsten -->
  <path d="M25 85 Q42 130 80 130 Q118 130 135 85 Q80 88 25 85" fill="url(#b5b)" stroke="#6B4914" stroke-width="3"/>
  <!-- Borsten-Details (mehr) -->
  <path d="M35 100 L40 122" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M48 105 L53 125" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M62 108 L66 127" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M75 110 L80 128" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M90 108 L86 127" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M105 105 L100 125" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <path d="M118 100 L115 122" stroke="#CD853F" stroke-width="2.5" opacity="0.7"/>
  <!-- Band -->
  <rect x="42" y="80" width="76" height="14" rx="5" fill="#6B3410" stroke="#3A2410" stroke-width="2"/>
  <!-- Highlight -->
  <ellipse cx="80" cy="100" rx="30" ry="6" fill="#FFF" opacity="0.3"/>
  <!-- Highlight Stiel -->
  <rect x="75" y="6" width="4" height="68" rx="2" fill="#FFF" opacity="0.4"/>
</g>
`);

// ===================== GIESSKANNE V5 =====================
const giesskanneV5 = svgWrapV5(`
<defs>
  <linearGradient id="g5k" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#B6FF8C"/>
    <stop offset="50%" stop-color="#2EB82E"/>
    <stop offset="100%" stop-color="#0F5F0F"/>
  </linearGradient>
  <linearGradient id="g5t" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#B0E0FF"/>
    <stop offset="100%" stop-color="#2A5F8F"/>
  </linearGradient>
  <filter id="g5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#g5s)">
  <!-- Henkel -->
  <path d="M18 90 A 38 38 0 0 1 18 38" fill="none" stroke="#2EB82E" stroke-width="16" stroke-linecap="round"/>
  <rect x="10" y="58" width="20" height="26" rx="7" fill="#0F5F0F" stroke="#063A06" stroke-width="2"/>
  <!-- Kanne-Körper -->
  <ellipse cx="80" cy="105" rx="50" ry="40" fill="url(#g5k)" stroke="#063A06" stroke-width="3"/>
  <!-- Öffnung -->
  <ellipse cx="80" cy="55" rx="32" ry="14" fill="#2EB82E" stroke="#063A06" stroke-width="2.5"/>
  <ellipse cx="80" cy="55" rx="28" ry="10" fill="#1A8A1A" opacity="0.6"/>
  <!-- Tülle -->
  <path d="M125 88 L168 48 L178 58 L132 102 Z" fill="url(#g5t)" stroke="#063A06" stroke-width="3"/>
  <ellipse cx="173" cy="53" rx="9" ry="8" fill="#0F5F0F" stroke="#063A06" stroke-width="2"/>
  <ellipse cx="173" cy="53" rx="5" ry="4" fill="#063A06"/>
  <!-- Wassertropfen (mehr, größer) -->
  <ellipse cx="183" cy="62" rx="6" ry="7" fill="#B0E0FF" opacity="0.9"/>
  <circle cx="181" cy="58" r="2.5" fill="#FFF" opacity="0.8"/>
  <circle cx="190" cy="70" r="3" fill="#B0E0FF" opacity="0.7"/>
  <!-- Glanz-Highlights -->
  <ellipse cx="62" cy="82" rx="12" ry="7" fill="#FFF" opacity="0.45"/>
  <ellipse cx="100" cy="72" rx="9" ry="5" fill="#FFF" opacity="0.35"/>
  <ellipse cx="50" cy="125" rx="10" ry="4" fill="#FFF" opacity="0.25"/>
  <!-- Schraube -->
  <circle cx="80" cy="55" r="3" fill="#063A06"/>
</g>
`);

// ===================== EIMER V5 =====================
const eimerV5 = svgWrapV5(`
<defs>
  <linearGradient id="e5b" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#3A85B8"/>
    <stop offset="50%" stop-color="#A0DFFF"/>
    <stop offset="100%" stop-color="#2A5F8F"/>
  </linearGradient>
  <linearGradient id="e5h" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#D0D0D0"/>
    <stop offset="100%" stop-color="#888888"/>
  </linearGradient>
  <filter id="e5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-opacity="0.45"/>
  </filter>
</defs>
<g filter="url(#e5s)">
  <!-- Henkel -->
  <path d="M22 55 Q80 -8 138 55" fill="none" stroke="url(#e5h)" stroke-width="10" stroke-linecap="round"/>
  <!-- Henkel-Griff -->
  <rect x="68" y="2" width="24" height="18" rx="5" fill="#5A5A5A" stroke="#3A3A3A" stroke-width="2"/>
  <!-- Eimer-Körper -->
  <path d="M22 55 L138 55 L120 138 L40 138 Z" fill="url(#e5b)" stroke="#1A3550" stroke-width="3"/>
  <!-- Rand -->
  <ellipse cx="80" cy="55" rx="58" ry="16" fill="#A0DFFF" stroke="#1A3550" stroke-width="3"/>
  <ellipse cx="80" cy="55" rx="50" ry="10" fill="#2A5F8F" opacity="0.5"/>
  <!-- Boden -->
  <ellipse cx="80" cy="130" rx="40" ry="10" fill="#1A3550" opacity="0.5"/>
  <!-- Reflexionen (mehr, größer) -->
  <circle cx="48" cy="92" r="8" fill="#FFF" opacity="0.5"/>
  <circle cx="105" cy="75" r="6" fill="#FFF" opacity="0.45"/>
  <circle cx="80" cy="108" r="5" fill="#FFF" opacity="0.4"/>
  <circle cx="60" cy="118" r="3" fill="#FFF" opacity="0.35"/>
  <!-- Metall-Glanz Henkel -->
  <path d="M30 50 Q80 -2 130 50" fill="none" stroke="#FFF" stroke-width="3" opacity="0.6"/>
</g>
`);

// ===================== GABEL V5 =====================
const gabelV5 = svgWrapV5(`
<defs>
  <linearGradient id="f5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="f5m" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#D0D0D0"/>
    <stop offset="100%" stop-color="#888888"/>
  </linearGradient>
  <filter id="f5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#f5s)">
  <!-- Stiel -->
  <rect x="72" y="48" width="16" height="68" rx="5" fill="url(#f5h)" stroke="#3A2410" stroke-width="3"/>
  <rect x="75" y="52" width="3" height="55" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Zinken (dicker, größer) -->
  <path d="M50 48 L50 5" stroke="url(#f5m)" stroke-width="9" stroke-linecap="round"/>
  <path d="M80 48 L80 2" stroke="url(#f5m)" stroke-width="9" stroke-linecap="round"/>
  <path d="M110 48 L110 5" stroke="url(#f5m)" stroke-width="9" stroke-linecap="round"/>
  <!-- Zinken-Spitzen (größer, glänzend) -->
  <ellipse cx="50" cy="5" rx="6" ry="6" fill="url(#f5m)" stroke="#555" stroke-width="2"/>
  <ellipse cx="80" cy="2" rx="6" ry="6" fill="url(#f5m)" stroke="#555" stroke-width="2"/>
  <ellipse cx="110" cy="5" rx="6" ry="6" fill="url(#f5m)" stroke="#555" stroke-width="2"/>
  <circle cx="48" cy="3" r="2" fill="#FFF" opacity="0.6"/>
  <circle cx="78" cy="0" r="2" fill="#FFF" opacity="0.6"/>
  <circle cx="108" cy="3" r="2" fill="#FFF" opacity="0.6"/>
  <!-- Übergang -->
  <rect x="46" y="40" width="68" height="20" rx="7" fill="url(#f5m)" stroke="#404040" stroke-width="2"/>
  <!-- Schraube (größer) -->
  <circle cx="80" cy="50" r="6" fill="#888" stroke="#333" stroke-width="1.5"/>
  <circle cx="80" cy="50" r="3" fill="#555"/>
  <path d="M77 50 L83 50 M80 47 L80 53" stroke="#222" stroke-width="1.5"/>
</g>
`);

// ===================== HAMMER V5 =====================
const hammerV5 = svgWrapV5(`
<defs>
  <linearGradient id="h5s" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="h5k" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#D0D0D0"/>
    <stop offset="100%" stop-color="#707070"/>
  </linearGradient>
  <filter id="h5s2" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.45"/>
  </filter>
</defs>
<g filter="url(#h5s2)">
  <!-- Stiel -->
  <rect x="74" y="38" width="12" height="80" rx="5" fill="url(#h5s)" stroke="#3A2410" stroke-width="3"/>
  <rect x="76" y="42" width="3" height="65" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Kopf (größer) -->
  <rect x="25" y="14" width="110" height="40" rx="9" fill="url(#h5k)" stroke="#555" stroke-width="3"/>
  <!-- Kopf-Highlight -->
  <rect x="28" y="17" width="104" height="6" rx="3" fill="#FFF" opacity="0.45"/>
  <!-- Mitte (Kragen) -->
  <rect x="60" y="22" width="40" height="24" rx="6" fill="#909090" stroke="#5A5A5A" stroke-width="2"/>
  <rect x="62" y="24" width="36" height="4" rx="2" fill="#FFF" opacity="0.4"/>
  <!-- Schlagflächen (größer) -->
  <ellipse cx="32" cy="34" rx="8" ry="5" fill="#FFF" opacity="0.5"/>
  <ellipse cx="128" cy="34" rx="8" ry="5" fill="#FFF" opacity="0.5"/>
  <!-- Nägel (größer) -->
  <circle cx="35" cy="34" r="5" fill="#5A5A5A" stroke="#333" stroke-width="1.5"/>
  <circle cx="35" cy="34" r="2" fill="#888"/>
  <circle cx="125" cy="34" r="5" fill="#5A5A5A" stroke="#333" stroke-width="1.5"/>
  <circle cx="125" cy="34" r="2" fill="#888"/>
</g>
`);

// ===================== SCHERE V5 =====================
const schereV5 = svgWrapV5(`
<defs>
  <linearGradient id="sc5b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#D0D0D0"/>
    <stop offset="100%" stop-color="#777777"/>
  </linearGradient>
  <linearGradient id="sc5g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFB347"/>
    <stop offset="50%" stop-color="#FF7F00"/>
    <stop offset="100%" stop-color="#E03C20"/>
  </linearGradient>
  <filter id="sc5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#sc5s)">
  <!-- Blatt 1 -->
  <g transform="rotate(-18 80 80)">
    <path d="M80 5 L80 65" stroke="url(#sc5b)" stroke-width="11" stroke-linecap="round"/>
    <ellipse cx="65" cy="85" rx="20" ry="20" fill="none" stroke="url(#sc5g)" stroke-width="9"/>
    <ellipse cx="65" cy="85" rx="13" ry="13" fill="none" stroke="#FFD8A8" stroke-width="3" opacity="0.5"/>
  </g>
  <!-- Blatt 2 -->
  <g transform="rotate(18 80 80)">
    <path d="M80 7 L80 65" stroke="url(#sc5b)" stroke-width="11" stroke-linecap="round"/>
    <ellipse cx="95" cy="85" rx="20" ry="20" fill="none" stroke="url(#sc5g)" stroke-width="9"/>
    <ellipse cx="95" cy="85" rx="13" ry="13" fill="none" stroke="#FFD8A8" stroke-width="3" opacity="0.5"/>
  </g>
  <!-- Schraube (größer) -->
  <circle cx="80" cy="20" r="9" fill="#5A5A5A" stroke="#222" stroke-width="2"/>
  <circle cx="80" cy="20" r="5" fill="#888"/>
  <path d="M76 20 L84 20 M80 16 L80 24" stroke="#222" stroke-width="2"/>
  <!-- Glanz -->
  <ellipse cx="78" cy="50" rx="3" ry="20" fill="#FFF" opacity="0.5"/>
</g>
`);

// ===================== MISTGABEL V5 =====================
const mistgabelV5 = svgWrapV5(`
<defs>
  <linearGradient id="m5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="m5z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FAFAFA"/>
    <stop offset="50%" stop-color="#C8C8C8"/>
    <stop offset="100%" stop-color="#888888"/>
  </linearGradient>
  <filter id="m5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#m5s)">
  <!-- Stiel -->
  <rect x="73" y="28" width="14" height="80" rx="5" fill="url(#m5h)" stroke="#3A2410" stroke-width="3"/>
  <rect x="75" y="32" width="3" height="68" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Zinken (dicker) -->
  <path d="M48 28 L48 2" stroke="url(#m5z)" stroke-width="9" stroke-linecap="round"/>
  <path d="M80 28 L80 2" stroke="url(#m5z)" stroke-width="9" stroke-linecap="round"/>
  <path d="M112 28 L112 2" stroke="url(#m5z)" stroke-width="9" stroke-linecap="round"/>
  <!-- Spitzen (glänzend) -->
  <ellipse cx="48" cy="2" rx="5" ry="5" fill="url(#m5z)" stroke="#555" stroke-width="2"/>
  <ellipse cx="80" cy="2" rx="5" ry="5" fill="url(#m5z)" stroke="#555" stroke-width="2"/>
  <ellipse cx="112" cy="2" rx="5" ry="5" fill="url(#m5z)" stroke="#555" stroke-width="2"/>
  <circle cx="46" cy="0" r="1.5" fill="#FFF" opacity="0.6"/>
  <circle cx="78" cy="0" r="1.5" fill="#FFF" opacity="0.6"/>
  <circle cx="110" cy="0" r="1.5" fill="#FFF" opacity="0.6"/>
  <!-- Halterung -->
  <rect x="42" y="22" width="76" height="16" rx="5" fill="url(#m5z)" stroke="#404040" stroke-width="2"/>
  <rect x="44" y="24" width="72" height="4" rx="2" fill="#FFF" opacity="0.4"/>
  <!-- Schrauben -->
  <circle cx="52" cy="30" r="3" fill="#555"/>
  <circle cx="108" cy="30" r="3" fill="#555"/>
</g>
`);

// ===================== SACK V5 =====================
const sackV5 = svgWrapV5(`
<defs>
  <linearGradient id="s5f" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFEEC0"/>
    <stop offset="50%" stop-color="#E0B870"/>
    <stop offset="100%" stop-color="#A07820"/>
  </linearGradient>
  <filter id="s5s2" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.5"/>
  </filter>
</defs>
<g filter="url(#s5s2)">
  <!-- Sack-Körper -->
  <ellipse cx="80" cy="100" rx="52" ry="40" fill="url(#s5f)" stroke="#6B5235" stroke-width="3"/>
  <!-- Falten (mehr) -->
  <path d="M30 82 Q50 65 70 82" stroke="#B8956A" stroke-width="2.5" fill="none" opacity="0.7"/>
  <path d="M90 78 Q110 60 130 80" stroke="#B8956A" stroke-width="2.5" fill="none" opacity="0.7"/>
  <path d="M45 105 Q80 95 115 105" stroke="#B8956A" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M38 95 Q60 85 82 95" stroke="#B8956A" stroke-width="1.5" fill="none" opacity="0.5"/>
  <!-- Körner (mehr, größer) -->
  <circle cx="50" cy="105" r="7" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="80" cy="115" r="6" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="105" cy="100" r="8" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="65" cy="88" r="5" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="90" cy="110" r="6" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="40" cy="115" r="5" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="118" cy="115" r="5" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="55" cy="120" r="4" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <circle cx="100" cy="120" r="4" fill="#FFD700" stroke="#B8860B" stroke-width="1.5" opacity="0.85"/>
  <!-- Glanz -->
  <circle cx="48" cy="103" r="2" fill="#FFF" opacity="0.5"/>
  <circle cx="103" cy="98" r="2" fill="#FFF" opacity="0.5"/>
  <!-- Schnürung -->
  <ellipse cx="80" cy="75" rx="46" ry="12" fill="#C4A77D" stroke="#6B5235" stroke-width="2"/>
  <path d="M40 70 Q80 58 120 70" stroke="#6B3410" stroke-width="3" fill="none"/>
  <path d="M40 80 Q80 92 120 80" stroke="#6B3410" stroke-width="2" fill="none" opacity="0.7"/>
  <!-- Sack-Mündung -->
  <ellipse cx="80" cy="68" rx="38" ry="8" fill="#5A3A1E" opacity="0.6"/>
</g>
`);

// ===================== SPATEN V5 =====================
const spatenV5 = svgWrapV5(`
<defs>
  <linearGradient id="sp5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="sp5b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#D8D8D8"/>
    <stop offset="50%" stop-color="#FAFAFA"/>
    <stop offset="100%" stop-color="#888888"/>
  </linearGradient>
  <filter id="sp5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#sp5s)">
  <!-- Stiel -->
  <rect x="74" y="12" width="12" height="78" rx="5" fill="url(#sp5h)" stroke="#3A2410" stroke-width="3"/>
  <rect x="76" y="16" width="3" height="65" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Blatt (größer) -->
  <path d="M45 92 Q80 70 115 92 L108 132 Q80 140 52 132 Z" fill="url(#sp5b)" stroke="#555" stroke-width="3"/>
  <!-- Highlight -->
  <ellipse cx="80" cy="115" rx="14" ry="7" fill="#FFF" opacity="0.5"/>
  <path d="M55 100 Q80 95 105 100" fill="none" stroke="#FFF" stroke-width="2.5" opacity="0.5"/>
  <!-- Metall-Linien -->
  <path d="M58 120 Q80 124 102 120" fill="none" stroke="#888" stroke-width="2" opacity="0.6"/>
  <!-- Schraube -->
  <circle cx="80" cy="90" r="3" fill="#777" stroke="#444" stroke-width="1.5"/>
</g>
`);

// ===================== RECHE V5 =====================
const rechenV5 = svgWrapV5(`
<defs>
  <linearGradient id="r5h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="r5z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FFE55C"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#D2691E"/>
  </linearGradient>
  <filter id="r5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#r5s)">
  <!-- Stiel -->
  <rect x="74" y="2" width="12" height="80" rx="5" fill="url(#r5h)" stroke="#3A2410" stroke-width="3"/>
  <rect x="76" y="6" width="3" height="68" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Querholz (größer) -->
  <path d="M20 88 Q80 82 140 88 L134 114 Q80 108 26 114 Z" fill="url(#r5z)" stroke="#6B4914" stroke-width="3"/>
  <path d="M22 90 Q80 84 138 90" fill="none" stroke="#FFF" stroke-width="2.5" opacity="0.4"/>
  <!-- Zinken (dicker) -->
  <path d="M30 90 L30 122" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <path d="M50 88 L50 125" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <path d="M70 87 L70 127" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <path d="M90 87 L90 127" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <path d="M110 88 L110 125" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <path d="M130 90 L130 122" stroke="#6B4914" stroke-width="5" stroke-linecap="round"/>
  <!-- Spitzen-Glanz -->
  <circle cx="30" cy="90" r="2" fill="#FFE55C" opacity="0.7"/>
  <circle cx="50" cy="88" r="2" fill="#FFE55C" opacity="0.7"/>
  <circle cx="70" cy="87" r="2" fill="#FFE55C" opacity="0.7"/>
  <circle cx="90" cy="87" r="2" fill="#FFE55C" opacity="0.7"/>
  <circle cx="110" cy="88" r="2" fill="#FFE55C" opacity="0.7"/>
  <circle cx="130" cy="90" r="2" fill="#FFE55C" opacity="0.7"/>
</g>
`);

// ===================== KRAFTSTOFF-KANNE V5 =====================
const kraftstoffV5 = svgWrapV5(`
<defs>
  <linearGradient id="k5r" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF8866"/>
    <stop offset="50%" stop-color="#E0102A"/>
    <stop offset="100%" stop-color="#6B0000"/>
  </linearGradient>
  <filter id="k5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-opacity="0.5"/>
  </filter>
</defs>
<g filter="url(#k5s)">
  <!-- Henkel -->
  <path d="M115 55 Q145 55 145 85 Q145 115 115 115" fill="none" stroke="#5A0000" stroke-width="10"/>
  <path d="M115 55 Q145 55 145 85 Q145 115 115 115" fill="none" stroke="#FFF" stroke-width="2" opacity="0.4"/>
  <!-- Kanne -->
  <rect x="38" y="38" width="70" height="88" rx="10" fill="url(#k5r)" stroke="#5A0000" stroke-width="3"/>
  <!-- Highlight -->
  <rect x="42" y="42" width="14" height="78" rx="5" fill="#FFF" opacity="0.3"/>
  <!-- Deckel -->
  <rect x="32" y="28" width="82" height="20" rx="5" fill="#E0102A" stroke="#5A0000" stroke-width="3"/>
  <rect x="34" y="30" width="78" height="5" rx="2" fill="#FFF" opacity="0.4"/>
  <!-- Schlauch -->
  <path d="M108 105 L150 130" stroke="#222" stroke-width="8" stroke-linecap="round"/>
  <ellipse cx="150" cy="130" rx="10" ry="6" fill="#222" stroke="#000" stroke-width="1.5"/>
  <ellipse cx="148" cy="128" rx="3" ry="2" fill="#666"/>
  <!-- Warnung (größer) -->
  <circle cx="73" cy="82" r="18" fill="#FFD700" stroke="#FF8C00" stroke-width="3"/>
  <text x="73" y="91" font-size="24" font-weight="bold" text-anchor="middle" fill="#5A0000">!</text>
  <circle cx="68" cy="76" r="3" fill="#FFF" opacity="0.7"/>
</g>
`);

// ===================== HEUGABEL V5 =====================
const heugabelV5 = svgWrapV5(`
<defs>
  <linearGradient id="he5s" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#6B3410"/>
    <stop offset="50%" stop-color="#FFD8A8"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <linearGradient id="he5z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#E0A050"/>
    <stop offset="100%" stop-color="#6B3410"/>
  </linearGradient>
  <filter id="he5s2" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#he5s2)">
  <!-- Stiel -->
  <rect x="73" y="28" width="14" height="78" rx="5" fill="url(#he5s)" stroke="#3A2410" stroke-width="3"/>
  <rect x="75" y="32" width="3" height="65" rx="1.5" fill="#FFF" opacity="0.4"/>
  <!-- Breite Zinken (größer) -->
  <path d="M30 32 L30 8 Q30 2 42 2 Q54 2 54 8 L54 32" fill="url(#he5z)" stroke="#3A2410" stroke-width="3"/>
  <path d="M68 32 L68 8 Q68 2 80 2 Q92 2 92 8 L92 32" fill="url(#he5z)" stroke="#3A2410" stroke-width="3"/>
  <path d="M106 32 L106 8 Q106 2 118 2 Q130 2 130 8 L130 32" fill="url(#he5z)" stroke="#3A2410" stroke-width="3"/>
  <!-- Zinken-Glanz -->
  <path d="M33 28 L33 10" stroke="#FFD8A8" stroke-width="2" opacity="0.6"/>
  <path d="M71 28 L71 10" stroke="#FFD8A8" stroke-width="2" opacity="0.6"/>
  <path d="M109 28 L109 10" stroke="#FFD8A8" stroke-width="2" opacity="0.6"/>
  <!-- Verbindung (größer) -->
  <rect x="25" y="24" width="110" height="16" rx="5" fill="url(#he5s)" stroke="#3A2410" stroke-width="2"/>
  <rect x="27" y="26" width="106" height="4" rx="2" fill="#FFF" opacity="0.4"/>
  <!-- Schrauben -->
  <circle cx="40" cy="32" r="3" fill="#3A2410"/>
  <circle cx="80" cy="32" r="3" fill="#3A2410"/>
  <circle cx="120" cy="32" r="3" fill="#3A2410"/>
</g>
`);

// ===================== FUTTER-SVGS V5 =====================

const heuV5 = svgWrapV5(`
<defs>
  <linearGradient id="heu5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE85C"/>
    <stop offset="50%" stop-color="#E0A820"/>
    <stop offset="100%" stop-color="#9A7008"/>
  </linearGradient>
  <filter id="heu5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.5"/>
  </filter>
</defs>
<g filter="url(#heu5s)">
  <!-- Ballen (größer) -->
  <ellipse cx="80" cy="105" rx="55" ry="35" fill="url(#heu5)" stroke="#6B5235" stroke-width="3"/>
  <!-- Oberseite -->
  <ellipse cx="80" cy="72" rx="53" ry="18" fill="#FFE85C" stroke="#6B5235" stroke-width="3"/>
  <ellipse cx="80" cy="72" rx="45" ry="12" fill="#E0A820" opacity="0.5"/>
  <!-- Binde (dicker) -->
  <rect x="70" y="74" width="20" height="64" rx="3" fill="#5A3A1E" opacity="0.8" stroke="#3A2410" stroke-width="1.5"/>
  <!-- Halme (mehr) -->
  <path d="M28 65 L32 45" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M38 62 L42 42" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M48 60 L52 38" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M58 58 L62 35" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M68 56 L72 32" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M88 56 L92 32" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M98 58 L102 35" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M108 60 L112 38" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M118 62 L122 42" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <path d="M128 65 L132 45" stroke="#9A7008" stroke-width="2.5" stroke-linecap="round"/>
  <!-- Textur-Linien (mehr) -->
  <path d="M35 90 Q80 85 125 90" stroke="#9A7008" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M40 105 Q80 100 120 105" stroke="#9A7008" stroke-width="2" fill="none" opacity="0.5"/>
  <path d="M45 120 Q80 115 115 120" stroke="#9A7008" stroke-width="1.5" fill="none" opacity="0.4"/>
  <!-- Highlight -->
  <ellipse cx="60" cy="68" rx="20" ry="6" fill="#FFF" opacity="0.45"/>
</g>
`);

const karotteV5 = svgWrapV5(`
<defs>
  <linearGradient id="kar5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFB347"/>
    <stop offset="50%" stop-color="#FF8C00"/>
    <stop offset="100%" stop-color="#E03C20"/>
  </linearGradient>
  <filter id="kar5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#kar5s)">
  <!-- Karotte (größer) -->
  <path d="M80 132 L62 38 Q80 26 98 38 L80 132" fill="url(#kar5)" stroke="#B04A00" stroke-width="3"/>
  <!-- Highlight -->
  <path d="M75 50 L72 120" stroke="#FFF" stroke-width="6" opacity="0.4" stroke-linecap="round"/>
  <!-- Oberseite -->
  <ellipse cx="80" cy="38" rx="18" ry="10" fill="#FF8C00" stroke="#B04A00" stroke-width="2.5"/>
  <ellipse cx="80" cy="38" rx="13" ry="6" fill="#FFA500" opacity="0.7"/>
  <!-- Grünzeug (größer) -->
  <path d="M70 32 L55 8" stroke="#0F5F0F" stroke-width="5" stroke-linecap="round"/>
  <path d="M80 28 L80 2" stroke="#0F5F0F" stroke-width="5" stroke-linecap="round"/>
  <path d="M90 32 L105 8" stroke="#0F5F0F" stroke-width="5" stroke-linecap="round"/>
  <!-- Blätter -->
  <ellipse cx="55" cy="8" rx="10" ry="5" fill="#32CD32" opacity="0.85" transform="rotate(-25 55 8)"/>
  <ellipse cx="80" cy="3" rx="8" ry="4" fill="#32CD32" opacity="0.85"/>
  <ellipse cx="105" cy="8" rx="10" ry="5" fill="#32CD32" opacity="0.85" transform="rotate(25 105 8)"/>
  <!-- Linien (mehr) -->
  <path d="M72 55 L88 57" stroke="#B04A00" stroke-width="2" opacity="0.6"/>
  <path d="M70 75 L90 77" stroke="#B04A00" stroke-width="2" opacity="0.6"/>
  <path d="M68 95 L92 97" stroke="#B04A00" stroke-width="2" opacity="0.6"/>
  <path d="M68 115 L92 117" stroke="#B04A00" stroke-width="1.5" opacity="0.5"/>
</g>
`);

const apfelV5 = svgWrapV5(`
<defs>
  <linearGradient id="apf5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF8C8C"/>
    <stop offset="50%" stop-color="#E0102A"/>
    <stop offset="100%" stop-color="#6B0000"/>
  </linearGradient>
  <linearGradient id="apf5l" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#B6FF8C"/>
    <stop offset="100%" stop-color="#0F5F0F"/>
  </linearGradient>
  <filter id="apf5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#apf5s)">
  <!-- Apfel (größer) -->
  <path d="M40 100 Q28 65 48 42 Q65 30 80 38 Q95 30 112 42 Q132 65 120 100 Q108 122 80 122 Q52 122 40 100" fill="url(#apf5)" stroke="#6B0000" stroke-width="3"/>
  <!-- Highlight -->
  <ellipse cx="58" cy="55" rx="14" ry="8" fill="#FFF" opacity="0.5"/>
  <ellipse cx="55" cy="80" rx="6" ry="3" fill="#FFF" opacity="0.3"/>
  <!-- Stiel -->
  <path d="M80 40 L80 15" stroke="#3A2410" stroke-width="5" stroke-linecap="round"/>
  <!-- Blatt (größer) -->
  <ellipse cx="98" cy="25" rx="15" ry="7" fill="url(#apf5l)" stroke="#0F5F0F" stroke-width="2" transform="rotate(-35 98 25)"/>
  <ellipse cx="100" cy="27" rx="8" ry="4" fill="#B6FF8C" opacity="0.6" transform="rotate(-35 100 27)"/>
  <path d="M88 25 L108 25" stroke="#0F5F0F" stroke-width="1" opacity="0.7" transform="rotate(-35 98 25)"/>
</g>
`);

const getreideV5 = svgWrapV5(`
<defs>
  <linearGradient id="get5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE85C"/>
    <stop offset="50%" stop-color="#E0C040"/>
    <stop offset="100%" stop-color="#A07820"/>
  </linearGradient>
  <filter id="get5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2.5" flood-opacity="0.45"/>
  </filter>
</defs>
<g filter="url(#get5s)">
  <!-- Schale (größer) -->
  <ellipse cx="80" cy="100" rx="55" ry="32" fill="#A07820" stroke="#6B5235" stroke-width="3"/>
  <ellipse cx="80" cy="98" rx="50" ry="28" fill="#C09020" opacity="0.7"/>
  <!-- Körner (mehr, größer) -->
  <circle cx="50" cy="90" r="12" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
  <circle cx="48" cy="86" r="4" fill="#FFF" opacity="0.6"/>
  <circle cx="80" cy="82" r="11" fill="#E8C84B" stroke="#B8860B" stroke-width="2"/>
  <circle cx="78" cy="78" r="3.5" fill="#FFF" opacity="0.6"/>
  <circle cx="108" cy="90" r="12" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
  <circle cx="106" cy="86" r="4" fill="#FFF" opacity="0.6"/>
  <circle cx="62" cy="105" r="10" fill="#DAA520" stroke="#9A7008" stroke-width="2"/>
  <circle cx="60" cy="101" r="3" fill="#FFF" opacity="0.5"/>
  <circle cx="95" cy="105" r="10" fill="#F0E68C" stroke="#B8860B" stroke-width="2"/>
  <circle cx="93" cy="101" r="3" fill="#FFF" opacity="0.5"/>
  <circle cx="38" cy="103" r="8" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
  <circle cx="120" cy="103" r="8" fill="#E8C84B" stroke="#B8860B" stroke-width="2"/>
  <circle cx="50" cy="115" r="7" fill="#DAA520" stroke="#9A7008" stroke-width="2"/>
  <circle cx="80" cy="115" r="7" fill="#FFD700" stroke="#B8860B" stroke-width="2"/>
  <circle cx="110" cy="115" r="7" fill="#F0E68C" stroke="#B8860B" stroke-width="2"/>
  <circle cx="65" cy="120" r="5" fill="#E8C84B" stroke="#9A7008" stroke-width="1.5"/>
  <circle cx="95" cy="120" r="5" fill="#DAA520" stroke="#9A7008" stroke-width="1.5"/>
  <!-- Glanz -->
  <ellipse cx="55" cy="76" rx="14" ry="6" fill="#FFE85C" opacity="0.5"/>
</g>
`);

const maisV5 = svgWrapV5(`
<defs>
  <linearGradient id="ma5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE85C"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#D2691E"/>
  </linearGradient>
  <linearGradient id="ma5b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#32CD32"/>
    <stop offset="100%" stop-color="#0F5F0F"/>
  </linearGradient>
  <filter id="ma5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#ma5s)">
  <!-- Kolben (größer) -->
  <path d="M80 122 L55 38 Q80 22 105 38 L80 122" fill="url(#ma5)" stroke="#B8860B" stroke-width="3"/>
  <!-- Ringe -->
  <ellipse cx="80" cy="38" rx="24" ry="12" fill="#FFE85C" stroke="#B8860B" stroke-width="2.5"/>
  <ellipse cx="80" cy="55" rx="22" ry="10" fill="#FFA500" stroke="#B8860B" stroke-width="2"/>
  <ellipse cx="80" cy="75" rx="20" ry="9" fill="#FF8C00" stroke="#B8860B" stroke-width="2"/>
  <ellipse cx="80" cy="95" rx="18" ry="8" fill="#FF8C00" stroke="#B8860B" stroke-width="2"/>
  <ellipse cx="80" cy="113" rx="15" ry="6" fill="#D2691E" stroke="#B8860B" stroke-width="2"/>
  <!-- Körner-Reihen auf Ringen -->
  <circle cx="68" cy="36" r="2" fill="#FFF" opacity="0.6"/>
  <circle cx="80" cy="34" r="2" fill="#FFF" opacity="0.6"/>
  <circle cx="92" cy="36" r="2" fill="#FFF" opacity="0.6"/>
  <circle cx="70" cy="55" r="2" fill="#FFF" opacity="0.5"/>
  <circle cx="90" cy="55" r="2" fill="#FFF" opacity="0.5"/>
  <circle cx="72" cy="75" r="2" fill="#FFF" opacity="0.4"/>
  <circle cx="88" cy="75" r="2" fill="#FFF" opacity="0.4"/>
  <!-- Stiel -->
  <path d="M80 30 L80 8" stroke="#3A2410" stroke-width="5" stroke-linecap="round"/>
  <!-- Blätter (größer) -->
  <path d="M58 22 Q50 4 38 8" stroke="#0F5F0F" stroke-width="4" stroke-linecap="round"/>
  <path d="M102 22 Q110 4 122 8" stroke="#0F5F0F" stroke-width="4" stroke-linecap="round"/>
  <path d="M80 18 L80 2" stroke="#0F5F0F" stroke-width="3" stroke-linecap="round"/>
  <ellipse cx="45" cy="14" rx="10" ry="5" fill="#32CD32" opacity="0.8"/>
  <ellipse cx="115" cy="14" rx="10" ry="5" fill="#32CD32" opacity="0.8"/>
  <ellipse cx="80" cy="5" rx="6" ry="3" fill="#32CD32" opacity="0.7"/>
  <!-- Highlight -->
  <ellipse cx="72" cy="50" rx="3" ry="20" fill="#FFF" opacity="0.4"/>
</g>
`);

const strohV5 = svgWrapV5(`
<defs>
  <linearGradient id="str5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE85C"/>
    <stop offset="50%" stop-color="#D4B030"/>
    <stop offset="100%" stop-color="#8B6B20"/>
  </linearGradient>
  <filter id="str5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="4" stdDeviation="3" flood-opacity="0.5"/>
  </filter>
</defs>
<g filter="url(#str5s)">
  <!-- Balle (größer) -->
  <rect x="15" y="58" width="130" height="68" rx="8" fill="url(#str5)" stroke="#6B5235" stroke-width="3"/>
  <!-- Oberseite -->
  <ellipse cx="80" cy="58" rx="65" ry="18" fill="#FFE85C" stroke="#6B5235" stroke-width="3"/>
  <ellipse cx="80" cy="58" rx="55" ry="12" fill="#E8C84B" opacity="0.6"/>
  <!-- Binde (dicker) -->
  <rect x="68" y="55" width="20" height="74" rx="3" fill="#5A3A1E" opacity="0.85" stroke="#3A2410" stroke-width="1.5"/>
  <!-- Linien (mehr) -->
  <rect x="15" y="70" width="130" height="3" fill="#B8860B" opacity="0.6"/>
  <rect x="15" y="88" width="130" height="3" fill="#B8860B" opacity="0.6"/>
  <rect x="15" y="106" width="130" height="3" fill="#B8860B" opacity="0.6"/>
  <rect x="15" y="120" width="130" height="2" fill="#B8860B" opacity="0.5"/>
  <!-- Strohhalme oben -->
  <path d="M30 55 L32 45" stroke="#8B6B20" stroke-width="2" stroke-linecap="round"/>
  <path d="M50 50 L52 38" stroke="#8B6B20" stroke-width="2" stroke-linecap="round"/>
  <path d="M75 45 L75 32" stroke="#8B6B20" stroke-width="2" stroke-linecap="round"/>
  <path d="M105 50 L103 38" stroke="#8B6B20" stroke-width="2" stroke-linecap="round"/>
  <path d="M125 55 L123 45" stroke="#8B6B20" stroke-width="2" stroke-linecap="round"/>
  <!-- Highlight -->
  <ellipse cx="50" cy="65" rx="20" ry="5" fill="#FFF" opacity="0.45"/>
</g>
`);

const grasV5 = svgWrapV5(`
<defs>
  <linearGradient id="gr5" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#B6FF8C"/>
    <stop offset="50%" stop-color="#2EB82E"/>
    <stop offset="100%" stop-color="#0F5F0F"/>
  </linearGradient>
  <filter id="gr5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#gr5s)">
  <!-- Boden (größer) -->
  <ellipse cx="80" cy="110" rx="58" ry="30" fill="#0F5F0F" opacity="0.4" stroke="#063A06" stroke-width="2.5"/>
  <ellipse cx="80" cy="110" rx="50" ry="22" fill="#5A3A1E" opacity="0.5"/>
  <!-- Halme (dicker, mehr) -->
  <path d="M22 110 Q28 48 35 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M40 110 Q44 38 52 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M58 110 Q60 28 68 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M75 110 Q75 22 82 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M90 110 Q90 30 98 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M108 110 Q105 38 112 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <path d="M123 110 Q118 45 128 110" stroke="url(#gr5)" stroke-width="8" stroke-linecap="round" fill="none"/>
  <!-- Spitzen-Glanz -->
  <ellipse cx="35" cy="48" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="52" cy="40" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="68" cy="32" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="82" cy="28" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="98" cy="35" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="115" cy="42" rx="6" ry="3" fill="#B6FF8C" opacity="0.7"/>
  <ellipse cx="130" cy="50" rx="5" ry="3" fill="#B6FF8C" opacity="0.6"/>
  <!-- Highlight Halm-Mitte -->
  <path d="M78 35 L78 100" stroke="#FFF" stroke-width="1.5" opacity="0.4"/>
  <path d="M48 50 L48 100" stroke="#FFF" stroke-width="1.5" opacity="0.4"/>
  <path d="M108 50 L108 100" stroke="#FFF" stroke-width="1.5" opacity="0.4"/>
</g>
`);

const kornV5 = svgWrapV5(`
<defs>
  <linearGradient id="ko5" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFE85C"/>
    <stop offset="50%" stop-color="#DAA520"/>
    <stop offset="100%" stop-color="#8B6B20"/>
  </linearGradient>
  <filter id="ko5s" x="-20%" y="-20%" width="140%" height="140%">
    <feDropShadow dx="2" dy="3" stdDeviation="2" flood-opacity="0.4"/>
  </filter>
</defs>
<g filter="url(#ko5s)">
  <!-- Ähren (3 Stück, größer) -->
  <path d="M35 110 L35 65" stroke="#3A2410" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="35" cy="55" rx="9" ry="12" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="35" cy="40" rx="8" ry="10" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="35" cy="26" rx="7" ry="8" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="33" cy="52" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="33" cy="37" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="33" cy="24" rx="2" ry="3" fill="#FFF" opacity="0.5"/>

  <path d="M80 110 L80 65" stroke="#3A2410" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="80" cy="55" rx="9" ry="12" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="80" cy="40" rx="8" ry="10" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="80" cy="26" rx="7" ry="8" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="78" cy="52" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="78" cy="37" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="78" cy="24" rx="2" ry="3" fill="#FFF" opacity="0.5"/>

  <path d="M125 110 L125 65" stroke="#3A2410" stroke-width="5" stroke-linecap="round"/>
  <ellipse cx="125" cy="55" rx="9" ry="12" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="125" cy="40" rx="8" ry="10" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="125" cy="26" rx="7" ry="8" fill="url(#ko5)" stroke="#6B5235" stroke-width="2"/>
  <ellipse cx="123" cy="52" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="123" cy="37" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <ellipse cx="123" cy="24" rx="2" ry="3" fill="#FFF" opacity="0.5"/>
  <!-- Grannen (mehr, länger) -->
  <path d="M35 20 L32 8 M35 20 L38 8 M35 20 L35 6" stroke="#3A2410" stroke-width="1.5"/>
  <path d="M80 20 L77 8 M80 20 L83 8 M80 20 L80 6" stroke="#3A2410" stroke-width="1.5"/>
  <path d="M125 20 L122 8 M125 20 L128 8 M125 20 L125 6" stroke="#3A2410" stroke-width="1.5"/>
  <!-- Boden -->
  <ellipse cx="80" cy="118" rx="50" ry="8" fill="#5A3A1E" opacity="0.5"/>
</g>
`);

// Export
if (typeof window !== 'undefined') {
  window.werkzeugeV5 = {
    schaufel: schaufelV5,
    besen: besenV5,
    giesskanne: giesskanneV5,
    eimer: eimerV5,
    gabel: gabelV5,
    hammer: hammerV5,
    schere: schereV5,
    mistgabel: mistgabelV5,
    sack: sackV5,
    spaten: spatenV5,
    rechen: rechenV5,
    kraftstoff: kraftstoffV5,
    heugabel: heugabelV5
  };
  window.futterV5 = {
    heu: heuV5,
    karotte: karotteV5,
    apfel: apfelV5,
    getreide: getreideV5,
    mais: maisV5,
    stroh: strohV5,
    gras: grasV5,
    korn: kornV5
  };
}
