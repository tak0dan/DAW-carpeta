# Analysis of the tutor's material — 2026/27

Source: emails from the IES Juan de Garay department (tutor Jesús Mª Timoneda i Timoneda), 10 Sep – 22 Oct 2026, group 2CFSD (DAW2). Folder order follows the email timestamps (Madrid time). Original email text is in each folder's `email.txt`; English translations are in [README.md](README.md).

## 1. What the material is

| Type | Items | Purpose |
|---|---|---|
| Course programmes | 5 PDFs (8–10 pages each), 10 Sep | Syllabus, evaluation units, criteria |
| Timetable | 1 PDF (14 Sep), 1 PNG (16 Sep) | Weekly schedule for the group |
| Reading | Book index (5 pages), DWES Chapter 1 (13 pages) | Theory for DWES |
| Practice solutions, PHP | T2, T3 (×2), T4, T5, T6, T8 | Worked exercises the tutor shared |
| Database | `institut.sql`, ER diagram screenshot | School database used in T6 |
| Other | WordPress manual (138 pages, Spanish), Erasmus, photos, company contact | Course info, notices |

## 2. Timeline with notes

| Timestamp | Folder | Material | Analysis |
|---|---|---|---|
| 10 Sep 15:10 | `01_…` | 5 programmes | Full syllabus for DASP, DAW, DWES, PI2DAW, SOST (see §3). |
| 11 Sep 15:29 | `02_…` | Book index, DWES Ch.1 | Ch.1 covers client/server model, WWW components, TCP/IP/HTTP/FTP/SMTP, DNS, and choosing an architecture. Theory base for T4. |
| 14 Sep 15:13 | `03_…` | Group timetable (PDF) | Corrects the earlier timetable, which only had the tutor's modules. |
| 14 Sep 16:09 | `04_…` | Assignment (text) | Compare web servers, server-side languages and browsers, with reliable charts. Links to 17 Sep resources. |
| 14 Sep 17:01 | `04b_…` | Links (text) | AI-safety reading (Amodei blog; agent cheating case). Context for the YouTube video. |
| 16 Sep 17:54 | `05_…` | Timetable (PNG) | Change: digitalisation moves to Monday; design hours move one class earlier. |
| 17 Sep 16:45 | `06_…` | Links (text) | Data sources for the comparison assignment (TIOBE, W3Techs, W3Schools, Wikipedia). |
| 18 Sep, 22 Sep | `06b_…`, `07b_…` | Contacts (text) | HR contact and recruiter contact, no task. |
| 21 Sep 14:58 | `07_…` | T2 solutions | Five PHP basics: output, variables, arithmetic, `var_dump`, types. |
| 24 Sep 17:48 | `08_…` | T3 solutions (set A) | 18 PHP and ASP files on arrays, sorting, forms, activities 1–11. |
| 24 Sep 17:55 | `09_…` | T3 solutions (set B) | Different zip with activities 1–5. The two sets overlap but are not identical. |
| 25 Sep 16:08 | `10_…` | T4 PDF (3 pages) | Layered and tiered architecture for a news site and an e-commerce site; Observer pattern from Gamma. |
| 28 Sep 14:31 | `10b_…` | Reply (quoted only) | Not translated; quoted text is Nikita's message. |
| 28 Sep 15:33 | `11_…` | T5 PHP exercises | `ex1`–`ex22` + CSS. Not read line by line here. |
| 28 Sep 15:55 | `13_…` | Company contact card | Capgemini talent team. No task. |
| 28 Sep 16:17 | `12_…` | T5 ACL project | Third-party project (see §4). |
| 29 Sep 14:26 | `14_…` | WordPress manual | Spanish guide, 138 pages. Login, dashboard, site management. |
| 1 Oct 19:37 | `15_…` | Emergency alert photo, notice | Classes cancelled this afternoon. Tutor shares a YouTube video. |
| 1 Oct 21:34 | `16_…` | Suspension photo, notice | Classes suspended for today and tomorrow. Next class Monday. |
| 5 Oct 14:32 | `17_…` | Europe Direct session (Spanish) | Info session on 12 Nov at 11:00 for second-year students. Confirmation needed quickly. |
| 5 Oct 15:44 | `18_…` | YouTuber list (text) | Web and AI channels. Tutor recommends them for study. |
| 6 Oct 20:19 | `19_…` | Notice (text) | No class this afternoon. |
| 8 Oct 17:01 | `20_…` | ER diagram | phpMyAdmin screenshot of the `institut` database (see §4). |
| 8 Oct 17:21 | `21_…` | `institut.sql` | Schema plus sample data for the T6 exercises. |
| 8 Oct 17:22 | `22_…` | `llistatAlumnes.php` | First T6 exercise: list students with a query. |
| 13 Oct 14:35 | `23_…` | Links (text) | AI-built Adobe-like tools. Not course content. |
| 15 Oct 17:11 | `24_…` | Three T6 exercises | List, consult, PHP-file test. |
| 16 Oct 16:10 | `25_…` | T6 solutions (zip) | Full CRUD on students: list, search by group, insert, edit, delete. |
| 19 Oct 15:16 | `26_…` | Install links (text) | NetBeans 11.3 and JDK 11 are the versions that work on the classroom PCs. |
| 19 Oct 15:53 | `27_…` | T8 solutions (rar) | Six pages on functions and CSS. Not read line by line here. |
| 20 Oct 14:51 | `28_…` | Erasmus notice (Spanish) | Mobility to Bosnia, 84 days of internship. |
| 20 Oct 15:09 | `29_…` | Video link (text) | Current AI situation. |
| 22 Oct 15:11 | `30_…` | Video + PHP advisory (text) | DeepSeek video, and a PHP vulnerability checker article. |

## 3. Programme details

Each programme has the same structure: contents, learning outcomes, timetable, methodology, criteria, extracurricular activities, cross-cutting themes, materials and attention to diversity.

- **DASP — Digitalització aplicada al sistema productiu** (6 units). 1st evaluation: digitalisation in productive sectors, enabling technologies, cloud and connected systems. 2nd evaluation: AI, data analysis and cybersecurity, a digital transformation plan for a company.
- **DAW — Desplegament d'aplicacions web** (8 units). 1st evaluation: architectures, web and application servers, file transfer, network services, documentation and version control, CMS. 2nd evaluation: cloud.
- **DWES — Desenvolupament web en entorn servidor** (11 units, UT10 practice only). 1st evaluation: architectures and tools, embedded code, dynamic pages, data access, web services, hybrid applications. 2nd evaluation: Java EE.
- **PI2DAW — Projecte intermodular** (9 units). 1st evaluation: architecture, requirements, design, development. 2nd evaluation: data access, web services, debugging, report and presentation. Each evaluation ends with a defence before a panel.
- **SOST — Sostenibilitat aplicada al sistema productiu** (4 units). 1st evaluation: the current situation, its impacts, and international and national initiatives. 2nd evaluation: sustainable products and business sustainability.

**DWES assessment rules** (from the programme): the student must pass both theory and practice each quarter. A score of 4 or more in each part is "compensable". The module project must be delivered and passed.

## 4. Practice material

### Database (`institut.sql`, ER diagram)

- Exported in 2012 with phpMyAdmin 3.5.2.2 and MySQL 5.5.27. Uses latin1 and Catalan/Spanish names.
- Seven tables: `alumne` (students), `grup` (groups 1daw in room 2.12 and 2daw in room 2.5), `professor`, `departament`, `assignatura`, `assig-profe`, `notes`.
- Foreign keys: `alumne.grup → grup`, `professor.departament → departament`, `notes.id_alumne → alumne`, `notes.id_assignatura → assignatura`, `assig-profe.id_assig → assignatura`, `assig-profe.id_professor → professor`.
- Sample data: 11 students. Duplicate names (lluis and albert appear twice with the same address). One address is "C/vic", which looks like a typo.
- The table name `assig-profe` has a hyphen, so every query on it has to backtick it.

### T6 student-list PHP (the most common problems)

These bugs appear in the tutor's files and in the solution set:

1. **Wrong column name**: queries read `$row["adre"]`, but the column is `adreça`. The address column comes out empty.
2. **Wrong variable**: `listado_alumnos.php` reads `$rs["id_alumne"]` where `$rs` is a result object, not a row. It should be `$row`.
3. **SQL injection**: `insertarAlumne.php`, `insertar_Alumne.php`, `llistarAlumnes.php`, `editaAlumne.php` and `edita2Alumne.php` put `$_POST` values straight into SQL strings. Prepared statements (`mysqli_prepare`) should be used instead.
4. **Credentials in code**: `root` with an empty password in every file. Acceptable for a local exercise only.
5. **Wrong error call**: `mysqli_error()` is called with no connection argument.
6. **Unquoted array keys**: `$fila[adre]` should be `$fila['adre']`.

### T5 ACL project

- The zip is a third-party project by Code Boxx, distributed under MIT. The README links to the original, so it is not the tutor's or a student's own code.
- It stores passwords in plain text (`user_password`) and compares them with `==` (`2-lib-user.php`). That is unsafe. Passwords should be hashed with `password_hash()` and checked with `password_verify()`.
- Setup order from its README: import `1-database.sql`, set DB credentials in `2-lib-user.php`, log in via `3a-login.php`, then check permissions in `3b-run.php`.

### T2, T3, T4, T8 exercises

- **T2**: five basic PHP scripts. Ex4 uses `echo "…".var_dump($nombre)`. `var_dump` prints immediately and returns null, so the output order is wrong. `print_r` or `var_export` is the usual fix.
- **T3**: arrays, sorting, forms and ASP-versus-PHP comparison across Activities 1–11. Two sets of solutions are included.
- **T4**: three-layer, three-tier architecture for a news site, and a layered architecture for e-commerce that connects to the bank or PayPal. Also an Observer pattern example.
- **T8**: six pages on functions and CSS. The page titles use the HTML entity `P&AacuteGINA`, which renders as "PÁGINA" but is worth fixing.

## 5. Schedule (timetable of 14 Sep and 16 Sep)

- **Group**: 2CFSD – DAW2, tutor Timoneda Timoneda, Jesús María. Room 2-15 INF.
- **Tutor's modules** (from the timetable): DWES (several slots each week, mostly Monday to Friday afternoon), Despliegue de aplicaciones web (Tuesday and Thursday), PI2DAW (Monday late afternoon and evening), Sostenibilidad (Monday 19:30), Digitalización (Monday 20:20).
- **Other modules on the same timetable**: Desarrollo WEB en entorno cliente (Marcelo Llacer), Introducción a la nube pública (Casillas Meléndez), Itinerario personal para la empleabilidad II (Santano Matías), Diseño de interfaces WEB (García Tebar).
- The 14 Sep PDF has a header that says "1CFS - Primero" on one page. The course is 2CFS (second year), so this is probably a typo on the school's side.

## 6. Gaps and follow-ups

- Two emails about the final project ("exemples propostes Projecte fi de cicle" and "memòries de projecte del curs passat") are still not in Downloads.
- The T5, T6 and T8 zips and the T5 ACL project have not been run. Analysis was by reading only.
- The 14 Sep PDF timetable is a 2-page document. Only the first page was checked.
- WordPress manual (138 pages): only the first section was read.
