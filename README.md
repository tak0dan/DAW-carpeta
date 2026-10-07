# DAW-carpeta

Personal coursework repository for **DAW** (*Desenvolupament d'Aplicacions Web* — Web Application Development, Ciclos Formativos de Grado Superior),
academic year **2026/27**, group **2CFSD**.
Remote: [`github.com/tak0dan/DAW-carpeta`](https://github.com/tak0dan/DAW-carpeta).

Everything course-related lives here: **first year in `DAW_1/`**, **second year in `DAW_2/`**.

## Repository layout

```
DAW-carpeta/
├── README.md                  ← you are here: overview of the entire structure
├── DAW_1/                     ← FIRST YEAR
│   ├── README.md              ← index of all first-year folders
│   ├── BDD/  BDD-EXAM/  BDD-EXAM-guia/     databases (SQL, MongoDB)
│   ├── PRG/  PRG-2/  Q_1/                  programming (Java, Eclipse)
│   ├── EDD/                              dev environments: Cloud, IDEs, Git
│   ├── LM/   Practicas_LM/  Practicas_CSS/  Examen_LM_Sara/
│   │                                         markup languages (HTML/CSS/JS)
│   ├── SI/   Practicas_SI/                systems + shell-script tasks
│   ├── IP/   English/                     labour-law activity / English
│   ├── java-exam-guide/                   self-built Java study site
│   ├── DAW-carpeta-clean/                 frozen backup of the old layout
│   └── SD/  src/  temp_prg/  DAW-carpeta/  empty placeholders
├── DAW_2/                     ← SECOND YEAR
│   ├── README.md              ← index of the six 2026/27 courses
│   ├── Digitalization/  Web-Interface-Design/  Public-Cloud/  Sustainability/
│   ├── DWEC/  (dwec-shared/ = shared class material, extracted from dwec-shared.zip)
│   └── IPE/   (CV.md, DAFO_Analisis.md)
└── .git/
```

Every folder above has its own `README.md` with details about its contents.

## How the folders relate

### First year → second year

| Foundation in `DAW_1/` | Used later in `DAW_2/` |
|---|---|
| `LM/` — HTML, CSS, JavaScript | `DWEC/` (client-side JS), `Web-Interface-Design/` |
| `EDD/` — Cloud, IDEs, Git | `Public-Cloud/` |
| `PRG/`, `PRG-2/` — programming logic (Java) | applies to every later course |
| `BDD/` — SQL & databases | data layer for future server-side work |
| `IP/` + `LM/` — contracts, salary, CV material | `IPE/` (CV, DAFO analysis) |

### Subjects and their companion folders

A subject folder never stands alone — each has sibling folders that extend it:

- `BDD/` ↔ `BDD-EXAM/` (exam practice pages) ↔ `BDD-EXAM-guia/` (study guide)
- `LM/` ↔ `Examen_LM_Sara/` (exam exercises), `Practicas_LM/`, `Practicas_CSS/`
- `PRG/` ↔ `PRG-2/` (same content, second phase), `java-exam-guide/`, `Q_1/`
- `SI/` ↔ `Practicas_SI/` (shell-script tasks and solutions)

### Inside a first-year subject (`DAW_1/`)

```
Material_clase/  →  class input (slides, notes)
Material_deberes/  →  homework
Proyectos_formato_correcto/  →  final deliverables in the required format
```

### Inside a second-year course (`DAW_2/`) — the standard skeleton

All six courses share the same eight folders (see any course `README.md` for the full workflow):

```
Class_Material/            what class gives you          ┐
Original_Material/         source files, original format │ input
Translated_Material/       your translations of it       ┘
Practices/  ←→  My_Solutions/            your exercises and your answers
Classmate_Solutions/                       reference answers from classmates
Homework/  ·  Projects/                    graded deliverables
```

`DWEC/` additionally keeps class-wide resources in `dwec-shared/` (shared by everyone) and per-topic exercise sets in numbered folders (`01-math/`, `02-conditionals/`, `03-loops/`, …).

## Housekeeping conventions

- **`.gitkeep`** — keeps otherwise-empty folders under version control.
- **` (1)` suffix** — duplicate download; kept deliberately, not cleaned up.
- **`DAW_1/DAW-carpeta-clean/`** — frozen backup of the repository's old flat layout (contains its own `.git`); do not edit.
- **Empty placeholders** — `DAW_1/SD/`, `DAW_1/src/`, `DAW_1/temp_prg/`, `DAW_1/DAW-carpeta/` are reserved for future use.
- Loose course files (e.g. `BD_UD10…pdf` in `BDD/`, `Practica Valenbisi.pdf` in `LM/`, `password/` in `LM/`) were moved in from `~/Documents`.
