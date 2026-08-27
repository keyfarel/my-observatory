// Astronomy utilities and constellation data

export interface StarDef {
  name: string;
  ra: string;
  dec: string;
}

export interface ConstellationDef {
  name: string;
  stars: StarDef[];
  lines: [string, string][]; // pairs of star names
}

export const CONSTELLATIONS: Record<number, ConstellationDef> = {
  1: {
    name: "PISCIS AUSTRINUS",
    stars: [
      { name: "Fomalhaut", ra: "22h 57m 39s", dec: "-29° 37′ 20″" }
    ],
    lines: []
  },
  2: {
    name: "CANIS MINOR",
    stars: [
      { name: "Procyon", ra: "07h 39m 18s", dec: "+05° 13′ 30″" },
      { name: "Gomeisa", ra: "07h 27m 16s", dec: "+08° 17′ 22″" }
    ],
    lines: [
      ["Procyon", "Gomeisa"]
    ]
  },
  3: {
    name: "TRIANGULUM",
    stars: [
      { name: "Rasalmothallah", ra: "01h 53m 05s", dec: "+29° 34′ 44″" },
      { name: "Beta Trianguli", ra: "02h 09m 33s", dec: "+34° 59′ 14″" },
      { name: "Gamma Trianguli", ra: "02h 17m 19s", dec: "+33° 50′ 50″" }
    ],
    lines: [
      ["Rasalmothallah", "Beta Trianguli"],
      ["Beta Trianguli", "Gamma Trianguli"],
      ["Gamma Trianguli", "Rasalmothallah"]
    ]
  },
  4: {
    name: "CRUX",
    stars: [
      { name: "Acrux", ra: "12h 26m 36s", dec: "-63° 05′ 57″" },
      { name: "Mimosa", ra: "12h 47m 43s", dec: "-59° 41′ 20″" },
      { name: "Gacrux", ra: "12h 31m 10s", dec: "-57° 06′ 48″" },
      { name: "Imai", ra: "12h 15m 09s", dec: "-58° 44′ 56″" }
    ],
    lines: [
      ["Acrux", "Gacrux"],
      ["Mimosa", "Imai"]
    ]
  },
  5: {
    name: "CASSIOPEIA",
    stars: [
      { name: "Schedar", ra: "00h 40m 30s", dec: "+56° 32′ 14″" },
      { name: "Caph", ra: "00h 09m 11s", dec: "+59° 08′ 59″" },
      { name: "Navi", ra: "00h 56m 43s", dec: "+60° 43′ 00″" },
      { name: "Ruchbah", ra: "01h 25m 49s", dec: "+60° 14′ 07″" },
      { name: "Segin", ra: "01h 54m 24s", dec: "+63° 40′ 12″" }
    ],
    lines: [
      ["Segin", "Ruchbah"],
      ["Ruchbah", "Navi"],
      ["Navi", "Schedar"],
      ["Schedar", "Caph"]
    ]
  },
  6: {
    name: "LYRA",
    stars: [
      { name: "Vega", ra: "18h 36m 56s", dec: "+38° 47′ 01″" },
      { name: "Sheliak", ra: "18h 50m 05s", dec: "+33° 21′ 46″" },
      { name: "Sulafat", ra: "18h 58m 57s", dec: "+32° 41′ 22″" },
      { name: "Delta-2 Lyrae", ra: "18h 54m 30s", dec: "+36° 53′ 55″" },
      { name: "Epsilon-1 Lyrae", ra: "18h 44m 20s", dec: "+39° 40′ 12″" },
      { name: "Zeta-1 Lyrae", ra: "18h 44m 46s", dec: "+37° 36′ 18″" }
    ],
    lines: [
      ["Vega", "Zeta-1 Lyrae"],
      ["Vega", "Epsilon-1 Lyrae"],
      ["Zeta-1 Lyrae", "Epsilon-1 Lyrae"],
      ["Zeta-1 Lyrae", "Sheliak"],
      ["Sheliak", "Sulafat"],
      ["Sulafat", "Delta-2 Lyrae"],
      ["Delta-2 Lyrae", "Zeta-1 Lyrae"]
    ]
  },
  7: {
    name: "BIG DIPPER",
    stars: [
      { name: "Dubhe", ra: "11h 03m 44s", dec: "+61° 45′ 03″" },
      { name: "Merak", ra: "11h 01m 50s", dec: "+56° 22′ 57″" },
      { name: "Phecda", ra: "11h 53m 50s", dec: "+53° 41′ 41″" },
      { name: "Megrez", ra: "12h 15m 26s", dec: "+57° 01′ 57″" },
      { name: "Alioth", ra: "12h 54m 02s", dec: "+55° 57′ 35″" },
      { name: "Mizar", ra: "13h 23m 56s", dec: "+54° 55′ 31″" },
      { name: "Alkaid", ra: "13h 47m 32s", dec: "+49° 18′ 48″" }
    ],
    lines: [
      ["Alkaid", "Mizar"],
      ["Mizar", "Alioth"],
      ["Alioth", "Megrez"],
      ["Megrez", "Phecda"],
      ["Phecda", "Merak"],
      ["Merak", "Dubhe"],
      ["Dubhe", "Megrez"]
    ]
  },
  8: {
    name: "ORION",
    stars: [
      { name: "Betelgeuse", ra: "05h 55m 10s", dec: "+07° 24′ 25″" },
      { name: "Rigel", ra: "05h 14m 32s", dec: "-08° 12′ 06″" },
      { name: "Bellatrix", ra: "05h 25m 08s", dec: "+06° 20′ 59″" },
      { name: "Saiph", ra: "05h 47m 45s", dec: "-09° 40′ 11″" },
      { name: "Alnitak", ra: "05h 40m 46s", dec: "-01° 56′ 34″" },
      { name: "Alnilam", ra: "05h 36m 13s", dec: "-01° 12′ 07″" },
      { name: "Mintaka", ra: "05h 32m 00s", dec: "-00° 17′ 57″" },
      { name: "Meissa", ra: "05h 35m 08s", dec: "+09° 56′ 03″" }
    ],
    lines: [
      ["Betelgeuse", "Meissa"],
      ["Meissa", "Bellatrix"],
      ["Betelgeuse", "Alnitak"],
      ["Bellatrix", "Mintaka"],
      ["Mintaka", "Alnilam"],
      ["Alnilam", "Alnitak"],
      ["Alnitak", "Saiph"],
      ["Mintaka", "Rigel"]
    ]
  },
  9: {
    name: "LEO",
    stars: [
      { name: "Regulus", ra: "10h 08m 22s", dec: "+11° 58′ 02″" },
      { name: "Denebola", ra: "11h 49m 04s", dec: "+14° 34′ 19″" },
      { name: "Algieba", ra: "10h 19m 58s", dec: "+19° 50′ 29″" },
      { name: "Zosma", ra: "11h 14m 07s", dec: "+20° 31′ 25″" },
      { name: "Algenubi", ra: "09h 45m 51s", dec: "+23° 46′ 27″" },
      { name: "Adhafera", ra: "10h 16m 41s", dec: "+23° 25′ 02″" },
      { name: "Chertan", ra: "11h 14m 14s", dec: "+15° 25′ 46″" },
      { name: "Subra", ra: "09h 41m 09s", dec: "+09° 53′ 32″" },
      { name: "Rasalas", ra: "09h 52m 46s", dec: "+26° 00′ 25″" }
    ],
    lines: [
      ["Regulus", "Algieba"],
      ["Algieba", "Adhafera"],
      ["Adhafera", "Rasalas"],
      ["Rasalas", "Algenubi"],
      ["Algenubi", "Algieba"],
      ["Regulus", "Subra"],
      ["Algieba", "Zosma"],
      ["Zosma", "Chertan"],
      ["Chertan", "Denebola"],
      ["Denebola", "Zosma"]
    ]
  },
  10: {
    name: "AURIGA",
    stars: [
      { name: "Capella", ra: "05h 16m 41s", dec: "+45° 59′ 53″" },
      { name: "Menkalinan", ra: "05h 59m 32s", dec: "+44° 56′ 51″" },
      { name: "Mahasim", ra: "05h 59m 43s", dec: "+37° 12′ 45″" },
      { name: "Hassaleh", ra: "04h 56m 59s", dec: "+33° 09′ 58″" },
      { name: "Elnath", ra: "05h 26m 18s", dec: "+28° 36′ 27″" },
      { name: "Almaaz", ra: "05h 01m 58s", dec: "+43° 49′ 24″" },
      { name: "Haedus", ra: "05h 02m 29s", dec: "+41° 04′ 33″" },
      { name: "Haedus II", ra: "05h 06m 31s", dec: "+41° 14′ 05″" },
      { name: "Delta Aurigae", ra: "05h 59m 31s", dec: "+54° 17′ 06″" },
      { name: "Nu Aurigae", ra: "05h 51m 29s", dec: "+39° 08′ 55″" }
    ],
    lines: [
      ["Capella", "Menkalinan"],
      ["Menkalinan", "Mahasim"],
      ["Mahasim", "Elnath"],
      ["Elnath", "Hassaleh"],
      ["Hassaleh", "Capella"],
      ["Capella", "Almaaz"],
      ["Almaaz", "Haedus"],
      ["Haedus", "Haedus II"],
      ["Menkalinan", "Delta Aurigae"],
      ["Mahasim", "Nu Aurigae"]
    ]
  }
};

/**
 * Parses J2000 RA strings into decimal hours.
 * Format: "05h 55m 10s"
 */
export function parseRA(ra: string): number {
  const match = ra.match(/(\d+)h\s*(\d+)m\s*(\d+)s/);
  if (!match) return 0;
  const h = parseInt(match[1], 10);
  const m = parseInt(match[2], 10);
  const s = parseInt(match[3], 10);
  return h + m / 60 + s / 3600;
}

/**
 * Parses J2000 Dec strings into decimal degrees.
 * Format: "+07° 24′ 25″"
 */
export function parseDec(dec: string): number {
  const match = dec.match(/([+-]?\d+)°\s*(\d+)′\s*(\d+)″/);
  if (!match) return 0;
  
  let deg = parseInt(match[1], 10);
  const sign = dec.trim().startsWith('-') ? -1 : 1;
  const m = parseInt(match[2], 10);
  const s = parseInt(match[3], 10);
  
  // If degree is 0, we still need to apply sign to minutes/seconds
  if (deg === 0) {
    return sign * (m / 60 + s / 3600);
  }
  
  return (Math.abs(deg) + m / 60 + s / 3600) * sign;
}

/**
 * Normalizes an array of stars into an array of {x, y} coordinates (0 to 100).
 * 
 * RA goes from East to West. For celestial sphere viewed from inside, 
 * RA increases to the left. So higher RA -> smaller X.
 * Dec increases to the North. So higher Dec -> smaller Y (since Y grows downwards).
 */
export function normalizeCoordinates(stars: StarDef[], padding = 15) {
  if (stars.length === 1) {
    return [{ ...stars[0], raDeg: parseRA(stars[0].ra) * 15, decDeg: parseDec(stars[0].dec), x: 50, y: 50 }];
  }

  const parsed = stars.map(s => ({
    ...s,
    raDeg: parseRA(s.ra) * 15, // convert hours to degrees
    decDeg: parseDec(s.dec)
  }));

  const ras = parsed.map(s => s.raDeg);
  const decs = parsed.map(s => s.decDeg);

  const minRa = Math.min(...ras);
  const maxRa = Math.max(...ras);
  const minDec = Math.min(...decs);
  const maxDec = Math.max(...decs);

  // Range calculations
  let rangeRa = maxRa - minRa;
  let rangeDec = maxDec - minDec;
  
  // Avoid division by zero
  if (rangeRa === 0) rangeRa = 1;
  if (rangeDec === 0) rangeDec = 1;

  // We want to maintain aspect ratio so the constellation shape isn't skewed.
  // Actually, standard projection maps RA and Dec, but since degrees vary in physical size
  // depending on Declination (cos(Dec)), a simple cartesian mapping works fine for small fields.
  // Let's use standard scaling but ensure they fit inside the padding.

  const scaleRa = (100 - padding * 2) / rangeRa;
  const scaleDec = (100 - padding * 2) / rangeDec;
  
  // Choose the smaller scale to fit both axes while preserving aspect ratio
  // Keep in mind RA is mapped to X (width) and Dec to Y (height). Wait, SVG is usually wider than tall.
  // We will just do a simple independent mapping for now to maximize the space, or preserve aspect ratio?
  // User wants recognizable constellation pattern, so aspect ratio matters.
  // We'll normalize by the maximum dimension. Let's use simple aspect ratio preservation.
  const avgDec = (minDec + maxDec) / 2;
  const cosDec = Math.cos(avgDec * Math.PI / 180);
  
  // RA degrees are "shorter" than Dec degrees by cos(Dec) factor
  const aspectCorrectedRangeRa = rangeRa * cosDec;
  
  const scale = Math.min((100 - padding * 2) / aspectCorrectedRangeRa, (100 - padding * 2) / rangeDec);

  return parsed.map(s => {
    // X axis: RA increases to the left
    // We map so that maxRa is at X=padding, minRa is at X=100-padding
    const raOffset = (maxRa - s.raDeg) * cosDec;
    const x = padding + raOffset * scale;
    
    // Y axis: Dec increases to the North (up). Up is Y=0 in SVG.
    // So maxDec is at Y=padding, minDec is at Y=100-padding
    const decOffset = maxDec - s.decDeg;
    const y = padding + decOffset * scale;
    
    // Center it in the unused dimension
    const usedWidth = aspectCorrectedRangeRa * scale;
    const usedHeight = rangeDec * scale;
    const xCentered = x + ((100 - padding * 2) - usedWidth) / 2;
    const yCentered = y + ((100 - padding * 2) - usedHeight) / 2;

    return {
      ...s,
      x: xCentered,
      y: yCentered
    };
  });
}
