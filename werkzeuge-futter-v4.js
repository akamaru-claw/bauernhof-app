/* ===================== WERKZEUGE V4 - Ultra-Kid-Friendly ===================== */
// Größere Icons, kräftigere Farben, einfachere Formen, bessere Lesbarkeit

const svgWrapV4 = (content) =
3e `<svg viewBox="0 0 150 150" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;

// ===================== SCHAUFEIL V4 =====================
const schaufelV4 = svgWrapV4(`
<defs>
  <linearGradient id="s4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="s4m" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#E0E0E0"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#A0A0A0"/>
  </linearGradient>
  <linearGradient id="s4g" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#CD853F"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
</defs>
<!-- Griff -->
<rect x="65" y="8" width="20" height="70" rx="6" fill="url(#s4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Griff-Ende -->
<rect x="58" y="2" width="34" height="18" rx="8" fill="url(#s4g)" stroke="#5A3A1E" stroke-width="2"/>
<!-- Schaufelblatt -->
<path d="M35 70 Q75 55 115 70 L105 125 Q75 130 45 125 Z" fill="url(#s4m)" stroke="#666" stroke-width="2.5"/>
<!-- Innen-Detail -->
<ellipse cx="75" cy="105" rx="15" ry="8" fill="#FFF" opacity="0.25"/>
<!-- Highlight -->
<path d="M45 85 Q75 98 105 85" fill="none" stroke="#FFF" stroke-width="2" opacity="0.4"/>
<!-- Bodenlinie -->
<path d="M48 120 Q75 124 102 120" stroke="#888" stroke-width="1.5" fill="none" opacity="0.5"/>
`);

// ===================== BESEN V4 =====================
const besenV4 = svgWrapV4(`
<defs>
  <linearGradient id="b4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="b4b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFD700"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#FF8C00"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="68" y="2" width="14" height="75" rx="5" fill="url(#b4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Befestigung -->
<ellipse cx="75" cy="10" rx="10" ry="5" fill="#5A3A1E"/>
<!-- Borsten -->
<path d="M30 82 Q45 120 75 120 Q105 120 120 82 Q75 85 30 82" fill="url(#b4b)" stroke="#8B6914" stroke-width="2.5"/>
<!-- Borsten-Details -->
<path d="M40 95 L45 115" stroke="#CD853F" stroke-width="2" opacity="0.6"/>
<path d="M55 100 L60 118" stroke="#CD853F" stroke-width="2" opacity="0.6"/>
<path d="M75 102 L75 119" stroke="#CD853F" stroke-width="2" opacity="0.6"/>
<path d="M95 100 L90 118" stroke="#CD853F" stroke-width="2" opacity="0.6"/>
<path d="M110 95 L105 115" stroke="#CD853F" stroke-width="2" opacity="0.6"/>
<!-- Band -->
<rect x="50" y="78" width="50" height="12" rx="4" fill="#8B4513" stroke="#5A3A1E" stroke-width="1.5"/>
`);

// ===================== GIESSKANNE V4 =====================
const giesskanneV4 = svgWrapV4(`
<defs>
  <linearGradient id="g4k" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#90EE90"/>
    <stop offset="50%" stop-color="#32CD32"/>
    <stop offset="100%" stop-color="#228B22"/>
  </linearGradient>
  <linearGradient id="g4t" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#87CEEB"/>
    <stop offset="100%" stop-color="#4682B4"/>
  </linearGradient>
</defs>
<!-- Kanne-Körper -->
<ellipse cx="75" cy="100" rx="45" ry="35" fill="url(#g4k)" stroke="#1E6B1E" stroke-width="2.5"/>
<!-- Öffnung -->
<ellipse cx="75" cy="55" rx="28" ry="12" fill="#32CD32" stroke="#1E6B1E" stroke-width="2"/>
<!-- Tülle -->
<path d="M118 85 L160 50 L168 58 L125 98 Z" fill="url(#g4t)" stroke="#1E6B1E" stroke-width="2.5"/>
<ellipse cx="164" cy="54" rx="7" ry="6" fill="#228B22" stroke="#1E6B1E" stroke-width="1.5"/>
<!-- Wassertropfen -->
<circle cx="170" cy="60" r="5" fill="#87CEEB" opacity="0.9"/>
<circle cx="168" cy="57" r="2" fill="#FFF" opacity="0.7"/>
<!-- Henkel -->
<path d="M25 85 A 35 35 0 0 1 25 38" fill="none" stroke="#32CD32" stroke-width="14" stroke-linecap="round"/>
<rect x="18" y="55" width="16" height="22" rx="6" fill="#1E6B1E"/>
<!-- Highlight -->
<ellipse cx="60" cy="80" rx="10" ry="6" fill="#FFF" opacity="0.3"/>
<ellipse cx="95" cy="70" rx="8" ry="5" fill="#FFF" opacity="0.25"/>
`);

// ===================== EIMER V4 =====================
const eimerV4 = svgWrapV4(`
<defs>
  <linearGradient id="e4b" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#5CA0D4"/>
    <stop offset="50%" stop-color="#87CEEB"/>
    <stop offset="100%" stop-color="#4682B4"/>
  </linearGradient>
  <linearGradient id="e4h" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#E8E8E8"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#A0A0A0"/>
  </linearGradient>
</defs>
<!-- Eimer-Körper -->
<path d="M25 55 L125 55 L108 125 L42 125 Z" fill="url(#e4b)" stroke="#2F4F4F" stroke-width="2.5"/>
<!-- Rand -->
<ellipse cx="75" cy="55" rx="50" ry="14" fill="#87CEEB" stroke="#2F4F4F" stroke-width="2"/>
<!-- Henkel -->
<path d="M25 55 Q75 -5 125 55" fill="none" stroke="url(#e4h)" stroke-width="8" stroke-linecap="round"/>
<!-- Griff -->
<rect x="68" y="5" width="14" height="12" rx="4" fill="#5A5A5A"/>
<!-- Boden -->
<ellipse cx="75" cy="118" rx="33" ry="8" fill="#366999" opacity="0.4"/>
<!-- Reflexionen -->
<circle cx="50" cy="90" r="6" fill="#FFF" opacity="0.4"/>
<circle cx="100" cy="75" r="5" fill="#FFF" opacity="0.35"/>
<circle cx="75" cy="105" r="4" fill="#FFF" opacity="0.3"/>
`);

// ===================== GABEL V4 =====================
const gabelV4 = svgWrapV4(`
<defs>
  <linearGradient id="f4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="f4m" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#E8E8E8"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#A0A0A0"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="68" y="45" width="14" height="60" rx="4" fill="url(#f4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Zinken -->
<path d="M55 45 L55 8" stroke="url(#f4m)" stroke-width="7" stroke-linecap="round"/>
<path d="M75 45 L75 5" stroke="url(#f4m)" stroke-width="7" stroke-linecap="round"/>
<path d="M95 45 L95 8" stroke="url(#f4m)" stroke-width="7" stroke-linecap="round"/>
<!-- Zinken-Spitzen -->
<ellipse cx="55" cy="8" rx="4" ry="5" fill="#C0C0C0"/>
<ellipse cx="75" cy="5" rx="4" ry="5" fill="#C0C0C0"/>
<ellipse cx="95" cy="8" rx="4" ry="5" fill="#C0C0C0"/>
<!-- Übergang -->
<rect x="52" y="38" width="46" height="18" rx="6" fill="#5A5A5A" stroke="#404040" stroke-width="1.5"/>
<!-- Schraube -->
<circle cx="75" cy="48" r="4" fill="#777"/>
`);

// ===================== HAMMER V4 =====================
const hammerV4 = svgWrapV4(`
<defs>
  <linearGradient id="h4s" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="h4k" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#E8E8E8"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#909090"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="70" y="35" width="10" height="75" rx="4" fill="url(#h4s)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Kopf -->
<rect x="30" y="18" width="90" height="32" rx="8" fill="url(#h4k)" stroke="#666" stroke-width="2.5"/>
<!-- Mitte -->
<rect x="60" y="25" width="30" height="20" rx="5" fill="#A0A0A0" stroke="#707070" stroke-width="1.5"/>
<!-- Schlagflächen -->
<ellipse cx="35" cy="34" rx="6" ry="4" fill="#FFF" opacity="0.3"/>
<ellipse cx="115" cy="34" rx="6" ry="4" fill="#FFF" opacity="0.3"/>
<!-- Nägel -->
<circle cx="40" cy="34" r="4" fill="#707070"/>
<circle cx="110" cy="34" r="4" fill="#707070"/>
`);

// ===================== SCHERE V4 =====================
const schereV4 = svgWrapV4(`
<defs>
  <linearGradient id="sc4b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#E8E8E8"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#909090"/>
  </linearGradient>
  <linearGradient id="sc4g" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF8C00"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#FF6347"/>
  </linearGradient>
</defs>
<!-- Blatt 1 -->
<g transform="rotate(-15 75 75)">
  <path d="M75 8 L75 65" stroke="url(#sc4b)" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="65" cy="78" rx="16" ry="16" fill="none" stroke="url(#sc4g)" stroke-width="7"/>
</g>
<!-- Blatt 2 -->
<g transform="rotate(15 75 75)">
  <path d="M75 10 L75 65" stroke="url(#sc4b)" stroke-width="9" stroke-linecap="round"/>
  <ellipse cx="85" cy="78" rx="16" ry="16" fill="none" stroke="url(#sc4g)" stroke-width="7"/>
</g>
<!-- Schraube -->
<circle cx="75" cy="20" r="7" fill="#555"/>
<circle cx="75" cy="20" r="4" fill="#777"/>
`);

// ===================== MISTGABEL V4 =====================
const mistgabelV4 = svgWrapV4(`
<defs>
  <linearGradient id="m4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="m4z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#E8E8E8"/>
    <stop offset="50%" stop-color="#C0C0C0"/>
    <stop offset="100%" stop-color="#A0A0A0"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="69" y="25" width="12" height="75" rx="4" fill="url(#m4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Zinken -->
<path d="M52 25 L52 2" stroke="url(#m4z)" stroke-width="7" stroke-linecap="round"/>
<path d="M75 25 L75 2" stroke="url(#m4z)" stroke-width="7" stroke-linecap="round"/>
<path d="M98 25 L98 2" stroke="url(#m4z)" stroke-width="7" stroke-linecap="round"/>
<!-- Spitzen -->
<ellipse cx="52" cy="2" rx="4" ry="4" fill="#C0C0C0"/>
<ellipse cx="75" cy="2" rx="4" ry="4" fill="#C0C0C0"/>
<ellipse cx="98" cy="2" rx="4" ry="4" fill="#C0C0C0"/>
<!-- Halterung -->
<rect x="48" y="20" width="54" height="14" rx="4" fill="#5A5A5A" stroke="#404040" stroke-width="1.5"/>
`);

// ===================== SACK V4 =====================
const sackV4 = svgWrapV4(`
<defs>
  <linearGradient id="s4f" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#F5DEB3"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#C4A020"/>
  </linearGradient>
</defs>
<!-- Sack-Körper -->
<ellipse cx="75" cy="95" rx="45" ry="35" fill="url(#s4f)" stroke="#8B7355" stroke-width="2.5"/>
<!-- Falten -->
<path d="M35 80 Q50 65 65 80" stroke="#B8956A" stroke-width="2" fill="none" opacity="0.6"/>
<path d="M85 75 Q100 60 115 78" stroke="#B8956A" stroke-width="2" fill="none" opacity="0.6"/>
<path d="M50 100 Q75 92 100 100" stroke="#B8956A" stroke-width="1.5" fill="none" opacity="0.4"/>
<!-- Körner -->
<circle cx="55" cy="100" r="6" fill="#DAA520" opacity="0.7"/>
<circle cx="75" cy="110" r="5" fill="#DAA520" opacity="0.7"/>
<circle cx="95" cy="95" r="7" fill="#DAA520" opacity="0.7"/>
<circle cx="65" cy="85" r="4" fill="#DAA520" opacity="0.7"/>
<circle cx="85" cy="105" r="5" fill="#DAA520" opacity="0.7"/>
<!-- Schnürung -->
<ellipse cx="75" cy="75" rx="40" ry="10" fill="#C4A77D" stroke="#8B7355" stroke-width="1.5"/>
<path d="M45 70 Q75 60 105 70" stroke="#8B4513" stroke-width="2" fill="none"/>
`);

// ===================== SPATEN V4 =====================
const spatenV4 = svgWrapV4(`
<defs>
  <linearGradient id="sp4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="sp4b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#C0C0C0"/>
    <stop offset="50%" stop-color="#E8E8E8"/>
    <stop offset="100%" stop-color="#A0A0A0"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="70" y="12" width="10" height="75" rx="4" fill="url(#sp4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Blatt -->
<path d="M50 88 Q75 68 100 88 L95 122 Q75 128 55 122 Z" fill="url(#sp4b)" stroke="#666" stroke-width="2.5"/>
<!-- Highlight -->
<ellipse cx="75" cy="110" rx="12" ry="6" fill="#FFF" opacity="0.25"/>
`);

// ===================== RECHE V4 =====================
const rechenV4 = svgWrapV4(`
<defs>
  <linearGradient id="r4h" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="r4z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#FFD700"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#FF8C00"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="70" y="2" width="10" height="80" rx="4" fill="url(#r4h)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Querholz -->
<path d="M25 85 Q75 80 125 85 L120 108 Q75 103 30 108 Z" fill="url(#r4z)" stroke="#8B6914" stroke-width="2"/>
<!-- Zinken -->
<path d="M35 88 L35 118" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
<path d="M52 87 L52 120" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
<path d="M70 86 L70 122" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
<path d="M88 87 L88 120" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
<path d="M106 88 L106 118" stroke="#8B6914" stroke-width="4" stroke-linecap="round"/>
`);

// ===================== KRAFTSTOFF-KANNE V4 - NEU =====================
const kraftstoffV4 = svgWrapV4(`
<defs>
  <linearGradient id="k4r" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF6347"/>
    <stop offset="50%" stop-color="#DC143C"/>
    <stop offset="100%" stop-color="#8B0000"/>
  </linearGradient>
</defs>
<!-- Kanne -->
<rect x="45" y="40" width="60" height="75" rx="8" fill="url(#k4r)" stroke="#8B0000" stroke-width="2.5"/>
<!-- Deckel -->
<rect x="40" y="32" width="70" height="18" rx="4" fill="#DC143C" stroke="#8B0000" stroke-width="2"/>
<!-- Henkel -->
<path d="M110 55 Q135 55 135 80 Q135 105 110 105" fill="none" stroke="#8B0000" stroke-width="8"/>
<!-- Schlauch -->
<path d="M110 100 L150 120" stroke="#333" stroke-width="6" stroke-linecap="round"/>
<ellipse cx="150" cy="120" rx="8" ry="5" fill="#333"/>
<!-- Warnung -->
<circle cx="75" cy="77" r="15" fill="#FFD700" stroke="#FF8C00" stroke-width="2"/>
<text x="75" y="83" font-size="18" font-weight="bold" text-anchor="middle" fill="#8B0000">!</text>
`);

// ===================== HEUGABEL V4 - NEU =====================
const heugabelV4 = svgWrapV4(`
<defs>
  <linearGradient id="he4s" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#8B4513"/>
    <stop offset="50%" stop-color="#DEB887"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
  <linearGradient id="he4z" x1="0%" y1="0%" x2="0%" y2="100%">
    <stop offset="0%" stop-color="#CD853F"/>
    <stop offset="100%" stop-color="#8B4513"/>
  </linearGradient>
</defs>
<!-- Stiel -->
<rect x="69" y="25" width="12" height="70" rx="4" fill="url(#he4s)" stroke="#5A3A1E" stroke-width="2.5"/>
<!-- Breite Zinken -->
<path d="M35 28 L35 8 Q35 4 45 4 Q55 4 55 8 L55 28" fill="url(#he4z)" stroke="#8B4513" stroke-width="2"/>
<path d="M65 28 L65 8 Q65 4 75 4 Q85 4 85 8 L85 28" fill="url(#he4z)" stroke="#8B4513" stroke-width="2"/>
<path d="M95 28 L95 8 Q95 4 105 4 Q115 4 115 8 L115 28" fill="url(#he4z)" stroke="#8B4513" stroke-width="2"/>
<!-- Verbindung -->
<rect x="30" y="22" width="90" height="14" rx="4" fill="#5A3A1E"/>
`);

// ===================== FUTTER-SVGS V4 =====================

const heuV4 = svgWrapV4(`
<defs>
  <linearGradient id="heu4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFD700"/>
    <stop offset="50%" stop-color="#DAA520"/>
    <stop offset="100%" stop-color="#B8860B"/>
  </linearGradient>
</defs>
<!-- Ballen -->
<ellipse cx="75" cy="100" rx="50" ry="30" fill="url(#heu4)" stroke="#8B7355" stroke-width="2.5"/>
<!-- Oberseite -->
<ellipse cx="75" cy="70" rx="48" ry="15" fill="#E8C84B" stroke="#8B7355" stroke-width="2"/>
<!-- Binde -->
<rect x="68" y="72" width="14" height="56" rx="2" fill="#8B4513" opacity="0.7"/>
<!-- Halme -->
<path d="M35 65 L38 50 M45 62 L48 48 M55 60 L58 45 M65 58 L68 42" stroke="#B8860B" stroke-width="2" stroke-linecap="round"/>
<path d="M85 58 L88 42 M95 60 L98 45 M105 62 L108 48 M115 65 L118 50" stroke="#B8860B" stroke-width="2" stroke-linecap="round"/>
<!-- Textur -->
<path d="M40 90 Q75 85 110 90" stroke="#B8860B" stroke-width="1.5" fill="none" opacity="0.4"/>
<path d="M45 105 Q75 100 105 105" stroke="#B8860B" stroke-width="1.5" fill="none" opacity="0.4"/>
`);

const karotteV4 = svgWrapV4(`
<defs>
  <linearGradient id="kar4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF8C00"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#FF6347"/>
  </linearGradient>
</defs>
<!-- Karotte -->
<path d="M75 120 L60 35 Q75 25 90 35 L75 120" fill="url(#kar4)" stroke="#E07000" stroke-width="2"/>
<!-- Oberseite -->
<ellipse cx="75" cy="35" rx="15" ry="8" fill="#FF8C00" stroke="#E07000" stroke-width="2"/>
<!-- Grünzeug -->
<path d="M68 30 L55 8" stroke="#228B22" stroke-width="4" stroke-linecap="round"/>
<path d="M75 28 L75 5" stroke="#228B22" stroke-width="4" stroke-linecap="round"/>
<path d="M82 30 L95 8" stroke="#228B22" stroke-width="4" stroke-linecap="round"/>
<!-- Blätter -->
<ellipse cx="55" cy="8" rx="8" ry="4" fill="#32CD32" opacity="0.7" transform="rotate(-20 55 8)"/>
<ellipse cx="75" cy="5" rx="6" ry="3" fill="#32CD32" opacity="0.7"/>
<ellipse cx="95" cy="8" rx="8" ry="4" fill="#32CD32" opacity="0.7" transform="rotate(20 95 8)"/>
<!-- Linien -->
<path d="M72 50 L78 52 M70 70 L80 72 M68 90 L82 92" stroke="#E07000" stroke-width="1.5" opacity="0.5"/>
`);

const apfelV4 = svgWrapV4(`
<defs>
  <linearGradient id="apf4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FF6B6B"/>
    <stop offset="50%" stop-color="#DC143C"/>
    <stop offset="100%" stop-color="#8B0000"/>
  </linearGradient>
  <linearGradient id="apf4l" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#90EE90"/>
    <stop offset="100%" stop-color="#228B22"/>
  </linearGradient>
</defs>
<!-- Apfel -->
<path d="M45 95 Q35 65 50 45 Q65 35 75 40 Q85 35 100 45 Q115 65 105 95 Q95 115 75 115 Q55 115 45 95" fill="url(#apf4)" stroke="#8B0000" stroke-width="2.5"/>
<!-- Highlight -->
<ellipse cx="60" cy="55" rx="10" ry="6" fill="#FFF" opacity="0.3"/>
<!-- Stiel -->
<path d="M75 40 L75 18" stroke="#5A3A1E" stroke-width="4" stroke-linecap="round"/>
<!-- Blatt -->
<ellipse cx="90" cy="25" rx="12" ry="6" fill="url(#apf4l)" stroke="#1E6B1E" stroke-width="1.5" transform="rotate(-30 90 25)"/>
<ellipse cx="92" cy="27" rx="6" ry="3" fill="#90EE90" opacity="0.5" transform="rotate(-30 92 27)"/>
`);

const getreideV4 = svgWrapV4(`
<defs>
  <linearGradient id="get4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#E8C84B"/>
    <stop offset="100%" stop-color="#C4A020"/>
  </linearGradient>
</defs>
<!-- Schale -->
<ellipse cx="75" cy="95" rx="45" ry="28" fill="#C4A020" stroke="#8B7355" stroke-width="2"/>
<!-- Körner -->
<circle cx="55" cy="88" r="10" fill="#FFD700" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="75" cy="82" r="9" fill="#E8C84B" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="95" cy="88" r="10" fill="#FFD700" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="65" cy="100" r="8" fill="#DAA520" stroke="#B8860B" stroke-width="1.5"/>
<circle cx="85" cy="100" r="8" fill="#F0E68C" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="45" cy="98" r="7" fill="#FFD700" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="105" cy="98" r="7" fill="#E8C84B" stroke="#DAA520" stroke-width="1.5"/>
<circle cx="55" cy="108" r="6" fill="#DAA520" stroke="#B8860B" stroke-width="1.5"/>
<circle cx="95" cy="108" r="6" fill="#F0E68C" stroke="#DAA520" stroke-width="1.5"/>
<!-- Glanz -->
<ellipse cx="55" cy="75" rx="10" ry="5" fill="#E8C84B" opacity="0.4"/>
`);

const maisV4 = svgWrapV4(`
<defs>
  <linearGradient id="ma4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#FFD700"/>
    <stop offset="50%" stop-color="#FFA500"/>
    <stop offset="100%" stop-color="#FF8C00"/>
  </linearGradient>
  <linearGradient id="ma4b" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#32CD32"/>
    <stop offset="100%" stop-color="#228B22"/>
  </linearGradient>
</defs>
<!-- Kolben -->
<path d="M75 110 L55 35 Q75 22 95 35 L75 110" fill="url(#ma4)" stroke="#DAA520" stroke-width="2"/>
<!-- Ringe -->
<ellipse cx="75" cy="35" rx="20" ry="10" fill="#FFD700" stroke="#DAA520" stroke-width="2"/>
<ellipse cx="75" cy="50" rx="18" ry="8" fill="#FFA500" stroke="#DAA520" stroke-width="1.5"/>
<ellipse cx="75" cy="70" rx="16" ry="7" fill="#FF8C00" stroke="#DAA520" stroke-width="1.5"/>
<ellipse cx="75" cy="90" rx="14" ry="6" fill="#FF8C00" stroke="#DAA520" stroke-width="1.5"/>
<!-- Stiel -->
<path d="M75 28 L75 10" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
<!-- Blätter -->
<path d="M60 22 Q55 5 45 10" stroke="#228B22" stroke-width="3" stroke-linecap="round"/>
<path d="M75 18 L75 5" stroke="#228B22" stroke-width="3" stroke-linecap="round"/>
<path d="M90 22 Q95 5 105 10" stroke="#228B22" stroke-width="3" stroke-linecap="round"/>
<ellipse cx="50" cy="15" rx="8" ry="4" fill="#90EE90" opacity="0.6"/>
<ellipse cx="100" cy="15" rx="8" ry="4" fill="#90EE90" opacity="0.6"/>
`);

const strohV4 = svgWrapV4(`
<defs>
  <linearGradient id="str4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#E8C84B"/>
    <stop offset="50%" stop-color="#D4B030"/>
    <stop offset="100%" stop-color="#B89520"/>
  </linearGradient>
</defs>
<!-- Balle -->
<rect x="20" y="60" width="110" height="60" rx="6" fill="url(#str4)" stroke="#8B7355" stroke-width="2.5"/>
<!-- Oberseite -->
<ellipse cx="75" cy="60" rx="55" ry="15" fill="#E8C84B" stroke="#8B7355" stroke-width="2"/>
<!-- Binde -->
<rect x="68" y="58" width="14" height="64" rx="2" fill="#8B4513" opacity="0.6"/>
<!-- Linien -->
<rect x="20" y="70" width="110" height="3" fill="#C4A020" opacity="0.5"/>
<rect x="20" y="88" width="110" height="3" fill="#C4A020" opacity="0.5"/>
<rect x="20" y="106" width="110" height="3" fill="#C4A020" opacity="0.5"/>
`);

const grasV4 = svgWrapV4(`
<defs>
  <linearGradient id="gr4" x1="0%" y1="0%" x2="100%" y2="0%">
    <stop offset="0%" stop-color="#90EE90"/>
    <stop offset="50%" stop-color="#32CD32"/>
    <stop offset="100%" stop-color="#228B22"/>
  </linearGradient>
</defs>
<!-- Boden -->
<ellipse cx="75" cy="105" rx="50" ry="25" fill="#228B22" opacity="0.3" stroke="#1E6B1E" stroke-width="2"/>
<!-- Halme -->
<path d="M30 105 Q35 50 40 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M45 105 Q48 40 55 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M60 105 Q62 35 70 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M75 105 Q75 30 80 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M90 105 Q88 35 95 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M105 105 Q102 40 110 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<path d="M120 105 Q115 50 120 105" stroke="url(#gr4)" stroke-width="6" stroke-linecap="round" fill="none"/>
<!-- Spitzen -->
<ellipse cx="40" cy="45" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
<ellipse cx="55" cy="38" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
<ellipse cx="70" cy="32" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
<ellipse cx="80" cy="28" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
<ellipse cx="95" cy="35" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
<ellipse cx="110" cy="42" rx="5" ry="3" fill="#90EE90" opacity="0.5"/>
`);

const kornV4 = svgWrapV4(`
<defs>
  <linearGradient id="ko4" x1="0%" y1="0%" x2="100%" y2="100%">
    <stop offset="0%" stop-color="#DAA520"/>
    <stop offset="100%" stop-color="#B8860B"/>
  </linearGradient>
</defs>
<!-- Ähren -->
<path d="M40 105 L40 65" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="40" cy="55" rx="7" ry="10" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="40" cy="40" rx="6" ry="8" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="40" cy="28" rx="5" ry="7" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<path d="M75 105 L75 65" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="75" cy="55" rx="7" ry="10" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="75" cy="40" rx="6" ry="8" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="75" cy="28" rx="5" ry="7" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<path d="M110 105 L110 65" stroke="#8B4513" stroke-width="4" stroke-linecap="round"/>
<ellipse cx="110" cy="55" rx="7" ry="10" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="110" cy="40" rx="6" ry="8" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<ellipse cx="110" cy="28" rx="5" ry="7" fill="url(#ko4)" stroke="#8B7355" stroke-width="1.5"/>
<!-- Grannen -->
<path d="M40 20 L38 10 M40 20 L42 10" stroke="#8B4513" stroke-width="1"/>
<path d="M75 20 L73 10 M75 20 L77 10" stroke="#8B4513" stroke-width="1"/>
<path d="M110 20 L108 10 M110 20 L112 10" stroke="#8B4513" stroke-width="1"/>
`);

// Export
if (typeof window !== 'undefined') {
  window.werkzeugeV4 = {
    schaufel: schaufelV4,
    besen: besenV4,
    giesskanne: giesskanneV4,
    eimer: eimerV4,
    gabel: gabelV4,
    hammer: hammerV4,
    schere: schereV4,
    mistgabel: mistgabelV4,
    sack: sackV4,
    spaten: spatenV4,
    rechen: rechenV4,
    kraftstoff: kraftstoffV4,
    heugabel: heugabelV4
  };
  window.futterV4 = {
    heu: heuV4,
    karotte: karotteV4,
    apfel: apfelV4,
    getreide: getreideV4,
    mais: maisV4,
    stroh: strohV4,
    gras: grasV4,
    korn: kornV4
  };
}
