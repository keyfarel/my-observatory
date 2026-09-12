---
title: "MCGG Advanced Server Dataset"
description: "A fully automated OCR pipeline to extract, structure, and publish game data for Magic Chess: Go Go when no public API was available."
status: "COMPLETED"
domain: "Data Engineering"
date: 2026-08-27
order: 5
heroImage: "/images/projects/magic-chess-dataset/hero-data.webp"
demo: "https://www.kaggle.com/datasets/keyfirdausialfarel/magic-chess-go-go-mcgg-advanced-server-stats/data"
tech: "Python · NLP · OCR · Pandas · Data Engineering"
---

## The Challenge

In the competitive meta of *Magic Chess: Go Go (MCGG)*, analyzing hero stats and synergy effectiveness is critical for theorycrafting. However, Moonton does not provide a public API for developers to access internal game data. To build predictive models or meta-dashboards, the community needed a reliable, structured dataset.

The challenge was clear: **How do you extract thousands of data points from a game ethically, without reverse-engineering or breaking Terms of Service?**

## The Engineering Approach

Instead of invasive data mining, I built a custom **AI-powered Vision pipeline** to extract the data directly from the visual layer of the game using Google's Gemini Flash.

Here is a snippet of **"The Deep Scanner V3.5"**, the core engine I built to process screenshots, merge missing context, and output structured JSON:

<div class="my-8 rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl ring-1 ring-white/5">
  <div class="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
    </div>
    <div class="ml-4 flex-1 text-center font-mono text-[10px] text-muted-star tracking-widest uppercase mr-12">
      deep_scanner.py
    </div>
  </div>
  <div class="px-4 py-2 text-sm [&>pre]:!bg-transparent [&>pre]:!m-0">

```python
# --- THE DEEP SCANNER V3.5 (Core Extraction Engine) ---
def scan_and_merge(image, hero_map, existing_data=None):
    if existing_data:
        context_instruction = f"""
        MODE: UPDATE & MERGE.
        DATA EXISTING: {json.dumps(existing_data)}
        TUGAS:
        1. Gabungkan deskripsi skill yang terpotong di data existing dengan teks di gambar baru.
        2. Lengkapi base_stats yang masih 0.
        3. PERTAHANKAN data yang sudah lengkap/benar.
        """
    else:
        context_instruction = "MODE: NEW ENTRY. Ekstrak data dari nol."

    prompt = f"""
    {context_instruction}
    Analisis Detail Hero Magic Chess. Tabel Atribut (Kanan Atas) & Atribut Skill (Kanan Bawah).

    OUTPUT JSON TARGET:
    {{
      "hero_name": "Nama Hero",
      "cost": 5,
      "base_stats": {{
        "hp": [v1, v2, v3],
        "physical_atk": [v1, v2, v3]
        # ... other stats
      }},
      "skill": {{
        "name": "Nama Skill",
        "description": "Deskripsi FULL (Sambung kalimat terpotong)."
      }}
    }}
    """

    try:
        # Utilize Gemini 2.5 Flash Vision for blazing fast OCR & Structuring
        response = client.models.generate_content(model='gemini-2.5-flash', contents=[prompt, image])
        clean_json = response.text.replace("```json", "").replace("```", "").strip()
        data = json.loads(clean_json)

        # Inject Synergies automatically by cross-referencing DB
        clean_name = data.get('hero_name', '').strip().lower()
        if clean_name in hero_map:
            data['synergies'] = hero_map[clean_name]

        return data
    except Exception as e:
        return None
```

  </div>
</div>

This script intelligently handles fragmented screenshots by merging incomplete sentences and filling missing stats into an existing database.

While the snippet above focuses on **Hero Extraction**, the full pipeline is built to process the entire game ecosystem. The final dataset is divided into three core pillars:
1. **Heroes:** Full roster stats including HP, Attack, and dynamic Skill Multipliers.
2. **Synergies:** Complete trait activation details (Factions & Roles).
3. **Go Go Cards:** Detailed effects for both Battle and Power cards.

### Sample Data Output (Hero Example)

The pipeline transforms raw pixels into clean, relational JSON structures ready for analysis:

<div class="my-8 rounded-xl overflow-hidden bg-black/40 border border-white/10 shadow-2xl ring-1 ring-white/5">
  <div class="flex items-center px-4 py-3 border-b border-white/10 bg-white/5">
    <div class="flex space-x-2">
      <div class="w-3 h-3 rounded-full bg-red-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-yellow-500/80"></div>
      <div class="w-3 h-3 rounded-full bg-green-500/80"></div>
    </div>
    <div class="ml-4 flex-1 text-center font-mono text-[10px] text-muted-star tracking-widest uppercase mr-12">
      miya_stats.json
    </div>
  </div>
  <div class="px-4 py-2 text-sm [&>pre]:!bg-transparent [&>pre]:!m-0">

```json
{
  "hero_name": "Miya",
  "cost": 3,
  "base_stats": {
    "hp": [2170, 3906, 7378],
    "physical_atk": [130, 195, 260],
    "magic_atk": [130, 195, 260],
    "atk_speed": [0.8, 0.8, 0.8],
    "attack_range": [4, 4, 4],
    "mana_initial": [50, 50, 50],
    "mana_max": [70, 70, 70]
  },
  "skill": {
    "name": "Moon Arrow",
    "description": "Miya gets 50% ATK Speed for 5 seconds. During this duration, he fires 1 additional Split Arrow which deals 50% DMG and activates the Basic ATK Effect.",
    "skill_attributes": [
      {
        "name": "ATTACK Speed Bonus",
        "values": ["50%", "50%", "55%"]
      },
      {
        "name": "Split Arrow",
        "values": ["1", "2", "3"]
      }
    ]
  },
  "synergies": ["Heartbond", "Marksman"]
}
```

  </div>
</div>

## The Result

The final product is a comprehensive dataset published on Kaggle, covering patches 1.2.54 - 1.2.56. It provides the community with a robust foundation for building machine learning models, meta tier lists, and balancing analysis.

By keeping the extraction process strictly visual, I ensured the project remained 100% compliant with "Fair Use" and community ethics, acting purely as an open-source fan contribution.

*You can view the raw data and community analysis on the [Official Kaggle Page](https://www.kaggle.com/datasets/keyfirdausialfarel/magic-chess-go-go-mcgg-advanced-server-stats/data).*
