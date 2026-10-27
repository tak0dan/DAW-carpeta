/* ==========================================
   shared.js — Funciones comunes de búsqueda,
   utilidades y navegación para páginas RA.
   Incluir en <body>, idealmente al final.
   ========================================== */

/* ---------- Last search query (for re-highlight after scroll) ---------- */
let LAST_QUERY = '';

/* ---------- Sinónimos para búsqueda ---------- */
const SINONIMOS = {
  asincrono: ['asincrono','async','asíncrono','asincrona','asíncrona','asynchronous'],
  sincrono: ['sincrono','sync','síncrono','synchronous'],
  solicitud: ['solicitud','fetch','peticion','petición','request','peticiones'],
  error: ['error','errores','catch','try','excepcion','excepción'],
  esperar: ['esperar','await','espera','wait'],
  evento: ['evento','event','eventos','addEventListener'],
  funcion: ['funcion','function','función','funciones','functions'],
  variable: ['variable','variables','let','const','var'],
  arreglo: ['arreglo','array','arrays','lista','list','arreglos'],
  objeto: ['objeto','object','objects','objetos'],
  bucle: ['bucle','loop','bucles','for','while'],
  condicion: ['condicion','condition','condición','if','else'],
  clase: ['clase','class','classes'],
  estilo: ['estilo','style','css','styles'],
  posicion: ['posicion','position','posición'],
  formulario: ['formulario','form','forms','formularios','input'],
  etiqueta: ['etiqueta','tag','tags','elemento','element','elements','etiquetas'],
  dom: ['dom','dom','document object model'],
  json: ['json','json'],
  api: ['api','api','apis','rest','endpoint'],
  promesa: ['promesa','promise','promesas','pending','fulfilled','rejected'],
  then: ['then','encadenar'],
  posicionamiento: ['posicionamiento','position','static','relative','absolute','fixed','sticky'],
  flotante: ['flotante','float','floats','flotar'],
  overflow: ['overflow','desbordamiento','desborda'],
  display: ['display','mostrar','ocultar','block','inline','inline-block'],
  visibilidad: ['visibilidad','visibility','visible','hidden'],
  zindex: ['z-index','zindex','indice z','superposición','capa','capas'],
  responsive: ['responsive','responsivo','adaptable','@media','media queries'],
  validacion: ['validacion','validar','validación','valid','invalid','required','pattern'],
  semantico: ['semantico','semántico','semantica','header','nav','main','section','article','aside','footer','semántica'],
  multimedia: ['multimedia','video','audio','source','canvas','poster'],
  paleta: ['paleta','color','colores','theme','tema','light','dark','blue'],
};

function expandirTermino(word) {
  const results = [word];
  for (const [key, vals] of Object.entries(SINONIMOS)) {
    if (key.includes(word) || word.includes(key)) {
      results.push(...vals);
    } else {
      for (const v of vals) {
        if (v.includes(word) || word.includes(v)) {
          results.push(key, ...vals);
          break;
        }
      }
    }
  }
  return [...new Set(results)];
}

/* ---------- Búsqueda que indexa ABSOLUTAMENTE TODO ---------- */
let IDX_COUNTER = 0;

function buildIndex() {
  const idx = [];
  IDX_COUNTER = 0;

  // 1. Cada elemento con ID → su contenido COMPLETO
  document.querySelectorAll('[id]').forEach(el => {
    if (el.id === 'searchResults' || el.id === 'buscar') return;
    const title = el.dataset.key
      || (el.tagName.match(/^H[1-6]$/) ? el.textContent.trim() : null)
      || el.id.replace(/[-_]/g, ' ');
    const body = (el.textContent || '').replace(/\s+/g, ' ').trim();
    if (body.length > 10) idx.push({ t: title, d: body, s: el.id });
  });

  // 2. Cada bloque de código .cb (tenga o no ID)
  document.querySelectorAll('.cb').forEach(cb => {
    if (cb.id) return;
    const title = (cb.querySelector('.ch span')?.textContent?.trim() || 'código').replace(/\s+/g, ' ');
    const body = (cb.textContent || '').replace(/\s+/g, ' ').trim();
    const fakeId = '_cb_' + (++IDX_COUNTER);
    cb.id = cb.id || fakeId;
    idx.push({ t: title, d: body, s: cb.id });
  });

  // 3. Cada details.vm
  document.querySelectorAll('details.vm').forEach(d => {
    if (d.id) return;
    const s = d.querySelector('summary');
    const title = s ? s.textContent.trim() : 'detalle';
    const body = (d.textContent || '').replace(/\s+/g, ' ').trim();
    const fakeId = '_vm_' + (++IDX_COUNTER);
    d.id = d.id || fakeId;
    idx.push({ t: title, d: body, s: d.id });
  });

  // 4. Cada .dom-item (showcase interactivo)
  document.querySelectorAll('.dom-item').forEach(item => {
    if (item.id) return;
    const label = item.querySelector('.dom-label');
    const title = label ? label.textContent.trim() : 'demo';
    const body = (item.textContent || '').replace(/\s+/g, ' ').trim();
    const fakeId = '_di_' + (++IDX_COUNTER);
    item.id = item.id || fakeId;
    idx.push({ t: title, d: body, s: item.id });
  });

  // 5. Cada .method-card (métodos funcionales)
  document.querySelectorAll('.method-card').forEach(card => {
    if (card.id) return;
    const head = card.querySelector('.method-head');
    const title = head ? head.textContent.trim() : 'método';
    const body = (card.textContent || '').replace(/\s+/g, ' ').trim();
    const fakeId = '_mc_' + (++IDX_COUNTER);
    card.id = card.id || fakeId;
    idx.push({ t: title, d: body, s: card.id });
  });

  // 6. Cada .ej-demo (ejemplos interactivos de RA2)
  document.querySelectorAll('.ej-demo').forEach(demo => {
    if (demo.id) return;
    const h5 = demo.querySelector('h5');
    const title = h5 ? h5.textContent.trim() : 'ejemplo';
    const body = (demo.textContent || '').replace(/\s+/g, ' ').trim();
    const fakeId = '_ej_' + (++IDX_COUNTER);
    demo.id = demo.id || fakeId;
    idx.push({ t: title, d: body, s: demo.id });
  });

  // 7. .main-content entero (para que nunca esté vacío)
  const main = document.querySelector('.main, .main-content');
  if (main && !main.id) {
    main.id = '_main';
    idx.push({ t: 'página', d: (main.textContent || '').replace(/\s+/g, ' ').trim(), s: main.id });
  } else if (main && main.id) {
    idx.push({ t: 'página', d: (main.textContent || '').replace(/\s+/g, ' ').trim(), s: main.id });
  }

  return idx;
}

let BD = [];
let CROSS_DB = [];
let CROSS_FETCHED = false;
let CROSS_LOADING = false;
const OTHER_PAGES = ['ra1.html', 'ra2.html', 'ra3.html', 'ra456.html', 'css-extra.html'];

const PAGE_LABELS = {
  'ra1.html': 'RA1 · JS/DOM/JSON',
  'ra2.html': 'RA2 · CSS/HTML5',
  'ra3.html': 'RA3 · Fetch/APIs',
  'ra456.html': 'RA4-5-6 · XML',
  'css-extra.html': 'CSS Extra',
  'index.html': 'Inicio'
};

function getCurrentPage() {
  return window.location.pathname.split('/').pop() || 'index.html';
}

async function fetchAndIndexOtherPages() {
  if (CROSS_FETCHED) return;
  if (CROSS_LOADING) return;
  CROSS_LOADING = true;
  const current = getCurrentPage();
  for (const page of OTHER_PAGES) {
    if (page === current) continue;
    try {
      const res = await fetch(page);
      const html = await res.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      let ctr = 0;
      doc.querySelectorAll('[id]').forEach(el => {
        if (['searchResults','buscar','progressBar','backToTop','mainToc','tocBody','tocArrow'].includes(el.id)) return;
        const title = el.dataset.key
          || (el.tagName.match(/^H[1-6]$/) ? (el.textContent || '').trim() : null)
          || el.id.replace(/[-_]/g, ' ');
        const body = (el.textContent || '').replace(/\s+/g, ' ').trim();
        if (body.length > 15) CROSS_DB.push({ t: title, d: body, s: el.id, p: page });
      });
      doc.querySelectorAll('.cb').forEach(cb => {
        if (cb.id) return;
        const title = (cb.querySelector('.ch span')?.textContent?.trim() || 'código').replace(/\s+/g, ' ');
        const body = (cb.textContent || '').replace(/\s+/g, ' ').trim();
        const fakeId = '_cb_' + (++ctr);
        CROSS_DB.push({ t: title, d: body, s: fakeId, p: page });
      });
      doc.querySelectorAll('details.vm').forEach(d => {
        if (d.id) return;
        const s = d.querySelector('summary');
        const title = s ? s.textContent.trim() : 'detalle';
        const body = (d.textContent || '').replace(/\s+/g, ' ').trim();
        const fakeId = '_vm_' + (++ctr);
        CROSS_DB.push({ t: title, d: body, s: fakeId, p: page });
      });
      doc.querySelectorAll('.dom-item').forEach(item => {
        if (item.id) return;
        const label = item.querySelector('.dom-label');
        const title = label ? label.textContent.trim() : 'demo';
        const body = (item.textContent || '').replace(/\s+/g, ' ').trim();
        const fakeId = '_di_' + (++ctr);
        CROSS_DB.push({ t: title, d: body, s: fakeId, p: page });
      });
      doc.querySelectorAll('.method-card').forEach(card => {
        if (card.id) return;
        const head = card.querySelector('.method-head');
        const title = head ? head.textContent.trim() : 'método';
        const body = (card.textContent || '').replace(/\s+/g, ' ').trim();
        const fakeId = '_mc_' + (++ctr);
        CROSS_DB.push({ t: title, d: body, s: fakeId, p: page });
      });
      doc.querySelectorAll('.ej-demo').forEach(demo => {
        if (demo.id) return;
        const h5 = demo.querySelector('h5');
        const title = h5 ? h5.textContent.trim() : 'ejemplo';
        const body = (demo.textContent || '').replace(/\s+/g, ' ').trim();
        const fakeId = '_ej_' + (++ctr);
        CROSS_DB.push({ t: title, d: body, s: fakeId, p: page });
      });
    } catch(e) {
      // page might not exist, skip silently
    }
  }
  CROSS_FETCHED = true;
  CROSS_LOADING = false;
}

function initSearch() {
  BD = buildIndex();
  const input = document.getElementById('buscar');
  const results = document.getElementById('searchResults');
  if (!input || !results) return;

  input.addEventListener('input', () => {
    const q = input.value.trim().toLowerCase();
    LAST_QUERY = q;
    if (!q) { results.innerHTML = ''; results.classList.remove('show'); limpiarHighlights(); return; }
    const words = q.split(/\s+/).filter(w => w.length > 0);

    // Trigger cross-page fetch on first search
    if (!CROSS_FETCHED && !CROSS_LOADING) fetchAndIndexOtherPages();

    function searchDB(db) {
      return db.filter(item => {
        const text = (item.t + ' ' + item.d).toLowerCase();
        return words.every(w => expandirTermino(w).some(et => text.includes(et)));
      });
    }

    let matches = searchDB(BD);
    let crossMatches = CROSS_FETCHED ? searchDB(CROSS_DB) : [];

    if (!matches.length && !crossMatches.length) {
      results.innerHTML = '<div class="sr-nada">Sin resultados para "' + input.value + '"</div>';
    } else {
      const currentPage = getCurrentPage();
      let items = matches.map(m => ({ ...m, p: currentPage }));
      items = items.concat(crossMatches);

      results.innerHTML = items.map(m => {
        const desc = m.d;
        const idx = desc.toLowerCase().indexOf(q);
        const snippet = idx > 80 ? '…' + desc.substring(idx - 60, idx + 200) + '…' : desc.substring(0, 300);
        const label = PAGE_LABELS[m.p] || m.p;
        const isOther = m.p !== currentPage;
        return `<div class="sr-item" onclick="${isOther ? `irOther('${m.p}','${m.s.replace(/'/g, "\\'")}')` : `ir('${m.s.replace(/'/g, "\\'")}')`}">
          <div class="sr-tit">${hl(m.t, q)} <span class="sr-page">${label}</span></div>
          <div class="sr-des">${hl(snippet, q)}</div>
        </div>`;
      }).join('');
    }
    results.classList.add('show');
    highlightPage(q);
    if (CROSS_LOADING) {
      (function poll() {
        if (CROSS_FETCHED) { input.dispatchEvent(new Event('input')); return; }
        setTimeout(poll, 200);
      })();
    }
  });

  document.addEventListener('click', e => {
    if (!input.contains(e.target) && !results.contains(e.target)) {
      results.classList.remove('show');
    }
  });
}

document.addEventListener('DOMContentLoaded', initSearch);

/* --- Cross-page hash scroll --- */
(function handleCrossHash() {
  if (!window.location.hash) return;
  const id = window.location.hash.slice(1);
  if (!id) return;
  const waitForEl = setInterval(() => {
    const el = document.getElementById(id);
    if (!el) return;
    clearInterval(waitForEl);
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      el.style.transition = 'background 0.3s';
      el.style.background = 'rgba(255,209,102,0.25)';
      setTimeout(() => { el.style.background = ''; }, 1200);
    }, 100);
  }, 100);
})();

/* ---------- Utilidades ---------- */

function hl(text, q) {
  const words = q.split(/\s+/).filter(w => w.length > 0);
  let t = text;
  const allTerms = [];
  words.forEach(w => allTerms.push(...expandirTermino(w)));
  const unique = [...new Set(allTerms)];
  unique.forEach(term => {
    t = t.replace(new RegExp('(' + term.replace(/[.*+?^${}()|[\]\\]/g,'\\$&') + ')', 'gi'), '<mark class="hl">$1</mark>');
  });
  return t;
}

/* ---------- Highlight en la página ---------- */
function limpiarHighlights() {
  document.querySelectorAll('.hl-page').forEach(el => {
    const parent = el.parentNode;
    parent.replaceChild(document.createTextNode(el.textContent), el);
  });
  document.normalize && document.normalize();
}

function highlightPage(q) {
  limpiarHighlights();
  if (!q) return;
  const words = q.split(/\s+/).filter(w => w.length > 0);
  if (!words.length) return;
  const allTerms = [];
  words.forEach(w => allTerms.push(...expandirTermino(w)));
  const unique = [...new Set(allTerms)];
  if (!unique.length) return;
  const scope = document.querySelector('.main') || document.querySelector('.main-content') || document.body;
  const walker = document.createTreeWalker(scope, NodeFilter.SHOW_TEXT, {
    acceptNode: function(node) {
      const el = node.parentElement;
      if (!el) return NodeFilter.FILTER_REJECT;
      if (el.closest('#searchResults') || el.closest('.topbar')) return NodeFilter.FILTER_REJECT;
      return NodeFilter.FILTER_ACCEPT;
    }
  });
  const textNodes = [];
  while (walker.nextNode()) textNodes.push(walker.currentNode);
  const escaped = unique.map(t => t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
  const pattern = new RegExp('(' + escaped.join('|') + ')', 'gi');
  textNodes.forEach(node => {
    pattern.lastIndex = 0;
    if (!pattern.test(node.textContent)) return;
    pattern.lastIndex = 0;
    const frag = document.createDocumentFragment();
    let lastIdx = 0;
    let match;
    while ((match = pattern.exec(node.textContent)) !== null) {
      if (match.index > lastIdx) {
        frag.appendChild(document.createTextNode(node.textContent.slice(lastIdx, match.index)));
      }
      const span = document.createElement('span');
      span.className = 'hl hl-page';
      span.textContent = match[0];
      frag.appendChild(span);
      lastIdx = pattern.lastIndex;
    }
    if (lastIdx < node.textContent.length) {
      frag.appendChild(document.createTextNode(node.textContent.slice(lastIdx)));
    }
    node.parentNode.replaceChild(frag, node);
  });
}

function ir(id) {
  const input = document.getElementById('buscar');
  const results = document.getElementById('searchResults');
  if (results) results.classList.remove('show');
  const target = document.getElementById(id);
  if (!target) return;
  target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  /* Re-highlight the page with the last query after scroll finishes */
  if (LAST_QUERY) {
    setTimeout(() => highlightPage(LAST_QUERY), 350);
  }
  /* Flash effect on the target */
  target.style.transition = 'background 0.3s';
  target.style.background = 'rgba(255,209,102,0.25)';
  setTimeout(() => { target.style.background = ''; }, 1200);
}

function irOther(page, id) {
  window.location.href = page + '#' + id;
}

function c(btn) {
  const pre = btn.closest('.cb').querySelector('pre.code');
  navigator.clipboard.writeText(pre.innerText).then(() => {
    btn.textContent = '\u2713';
    setTimeout(() => btn.textContent = 'Copiar', 1200);
  });
}

function copiarCodigo(btn) {
  const pre = btn.closest('.cb').querySelector('pre.code, pre.code-block');
  if (!pre) return;
  navigator.clipboard.writeText(pre.textContent).then(() => {
    const t = btn.textContent;
    btn.textContent = '\u2713 Copiado';
    btn.style.color = 'var(--green)';
    setTimeout(() => { btn.textContent = t; btn.style.color = ''; }, 1800);
  });
}

function explicarCodigo(btn) {
  const cb = btn.closest('.cb');
  if (!cb) return;
  const pre = cb.querySelector('pre.code, pre.code-block');
  if (!pre) return;
  let expDiv = cb.querySelector('.exp');
  if (!expDiv) { expDiv = document.createElement('div'); expDiv.className = 'exp'; cb.appendChild(expDiv); }
  const code = pre.innerText || pre.textContent;
  if (!code.trim()) return;
  if (expDiv.classList.contains('show')) {
    expDiv.classList.remove('show');
    if (btn.dataset.origText) btn.textContent = btn.dataset.origText;
    return;
  }
  btn.dataset.origText = btn.textContent;
  btn.textContent = 'Ocultar';
  expDiv.innerHTML = '<table>' + generatExpl(code) + '</table>';
  expDiv.classList.add('show');
}

/* ---------- Explicador automático de código ---------- */
const EXPLICACIONES = [
  // ============================================================
  //  HTML — TAGS ESTRUCTURALES SEMÁNTICOS
  // ============================================================
  [/^<\/(\w+).*>$/, 'Cierra etiqueta <b>$1</b>'],
  [/^<(\w+)([^>]*)>$/, m => {
    const tag = m[1]; const attrs = m[2];
    const TAG_DESC = {
      header:'Cabecera de página/sección (logotipo, título, menú)',
      nav:'Menú de navegación principal',
      main:'Contenido principal de la página (SÓLO uno por página)',
      section:'Agrupa contenido relacionado temáticamente (con su propio heading)',
      article:'Contenido independiente y reutilizable (post, noticia, comentario)',
      aside:'Contenido tangencial o complementario (sidebar, widgets, publicidad)',
      footer:'Pie de página/sección (copyright, enlaces legales, contacto)',
      figure:'Contenedor para contenido multimedia con posible pie (img, diagrama)',
      figcaption:'Pie o leyenda descriptiva de un elemento &lt;figure&gt;',
      address:'Información de contacto del autor (email, teléfono, dirección)',
      video:'Inserta un vídeo con controles nativos del navegador',
      audio:'Inserta un archivo de audio reproducible',
      source:'Define un formato alternativo para &lt;video&gt; o &lt;audio&gt; (fallback)',
      canvas:'Lienzo para dibujar gráficos, formas y animaciones con JavaScript',
      track:'Añade subtítulos o descripciones a un &lt;video&gt;',
      form:'Crea un formulario interactivo para enviar datos al servidor',
      label:'Etiqueta descriptiva asociada a un control de formulario',
      input:'Campo de entrada de datos en un formulario',
      select:'Lista desplegable de opciones (menú de selección)',
      option:'Opción individual dentro de un &lt;select&gt;',
      textarea:'Área de texto multilínea para introducir contenido extenso',
      button:'Botón interactivo que puede enviar un formulario o ejecutar JS',
      ul:'Lista no ordenada (viñetas)',
      ol:'Lista ordenada (numerada)',
      li:'Elemento individual de una lista (&lt;ul&gt; o &lt;ol&gt;)',
      a:'Enlace / hipervínculo a otra página o recurso',
      img:'Imagen insertada en la página',
      p:'Párrafo de texto',
      h1:'Encabezado de nivel 1 (título principal de la página)',
      h2:'Encabezado de nivel 2 (título de sección)',
      h3:'Encabezado de nivel 3 (subtítulo)',
      h4:'Encabezado de nivel 4',
      h5:'Encabezado de nivel 5',
      h6:'Encabezado de nivel 6',
      span:'Contenedor en línea genérico (sin significado semántico)',
      div:'Contenedor en bloque genérico (sin significado semántico)',
      br:'Salto de línea',
      hr:'Línea divisoria / cambio de temática',
      strong:'Texto en negrita con énfasis fuerte (importancia semántica)',
      em:'Texto en cursiva con énfasis (cambio de tono)',
      code:'Fragmento de código fuente (monoespaciado)',
      pre:'Bloque de texto preformateado (respeta espacios y saltos de línea)',
      table:'Tabla de datos',
      tr:'Fila de una tabla',
      th:'Celda de cabecera en una tabla (negrita y centrada por defecto)',
      td:'Celda de datos en una tabla',
      thead:'Agrupa las filas de cabecera de una tabla',
      tbody:'Agrupa las filas de cuerpo de una tabla',
      tfoot:'Agrupa las filas de pie de una tabla',
      meta:'Metadato de la página (charset, description, viewport)',
      link:'Enlaza recursos externos (CSS, iconos, fuentes)',
      script:'Inserta o enlaza código JavaScript',
      style:'Define estilos CSS directamente en el HTML',
      title:'Título de la página (se muestra en la pestaña del navegador)',
      head:'Cabecera del documento HTML (metadatos, scripts, estilos)',
      body:'Cuerpo del documento HTML (todo el contenido visible)',
      html:'Raíz del documento HTML (envuelve todo el contenido)',
      details:'Crea un bloque expandible/colapsable (acordeón)',
      summary:'Título visible del bloque &lt;details&gt;',
      dialog:'Ventana modal o diálogo emergente',
      datalist:'Lista de opciones predefinidas para un &lt;input&gt; (autocompletado)',
      fieldset:'Agrupa visualmente varios campos de un formulario',
      legend:'Leyenda o título de un &lt;fieldset&gt;',
      output:'Muestra el resultado de un cálculo o acción del usuario',
      progress:'Barra de progreso (para indicar el avance de una tarea)',
      meter:'Indicador de medición (nivel de disco, temperatura, etc.)',
      time:'Fecha y/o hora con formato legible por máquina',
      mark:'Texto resaltado/marcado (como un rotulador)',
    };
    if (!attrs.trim()) {
      const desc = TAG_DESC[tag] || `Etiqueta HTML <b>${tag}</b>`;
      return `Abre ${desc}`;
    }
    const aa = (attrs.match(/(\w+)="([^"]*)"/g)||[]).map(a => `<code>${a.split('=')[0]}</code>`).join(', ');
    const desc = TAG_DESC[tag];
    if (desc) return `${desc} → atributos: ${aa}`;
    return `Etiqueta <b>${tag}</b> → atributos: ${aa}`;
  }],
  [/^<(\w+)([^>]*)><\/\1>$/, m => {
    const TAG_DESC = { canvas:'Lienzo de dibujo', div:'Contenedor genérico', span:'Contenedor en línea', a:'Enlace', p:'Párrafo', h1:'Encabezado principal', h2:'Encabezado de sección', h3:'Subencabezado', form:'Formulario', label:'Etiqueta de campo', button:'Botón', ul:'Lista no ordenada', ol:'Lista ordenada', li:'Elemento de lista', table:'Tabla', tr:'Fila de tabla', td:'Celda de datos', th:'Celda de cabecera', header:'Cabecera', nav:'Menú de navegación', main:'Contenido principal', section:'Sección', article:'Artículo', aside:'Barra lateral', footer:'Pie', figure:'Contenedor multimedia', figcaption:'Pie de figura', details:'Bloque expandible', summary:'Resumen', dialog:'Diálogo modal', };
    const tag = m[1]; const attrs = m[2];
    const desc = TAG_DESC[tag] || `Etiqueta <b>${tag}</b>`;
    if (!attrs.trim()) return `${desc} (apertura y cierre en la misma línea)`;
    const aa = (attrs.match(/(\w+)="([^"]*)"/g)||[]).map(a => `<code>${a.split('=')[0]}</code>`).join(', ');
    return `${desc} → ${aa} (apertura y cierre)`;
  }],
  [/^<(\w+)\s*\/>$/, m => `Etiqueta auto-cerrada <b>${m[1]}</b>`],
  // === HTML DOCTYPE ===
  [/^<!DOCTYPE/, 'Declaración del tipo de documento (HTML5) — OBLIGATORIA al inicio'],
  [/^<!--/, 'Inicio de comentario HTML (no se muestra en la página)'],
  [/-->$/, 'Fin de comentario HTML'],

  // ============================================================
  //  CSS — REGLA COMPLETA (selector { propiedades }) — debe ir
  //  ANTES de las propiedades individuales para no fragmentar
  // ============================================================
  [/^(.+?)(\s*\{)([\s\S]*)\}$/, m => {
    const sel = m[1].trim();
    const rest = m[3].trim();
    if (!rest) return `Abre bloque de estilo para <b>${sel}</b>`;
    const props = rest.split(';').filter(p => p.trim()).slice(0, 3);
    const pText = props.map(p => `<code>${p.trim().split(':')[0]}</code>`).join(', ');
    return `Regla CSS para <b>${sel}</b> → propiedades: ${pText}${props.length < rest.split(';').filter(p => p.trim()).length ? '…' : ''}`;
  }],

  // ============================================================
  //  CSS — PROPIEDADES DE POSICIONAMIENTO
  // ============================================================
  [/position:\s*static/, 'Valor por defecto. Flujo normal. <b>top/left NO tienen efecto</b>.'],
  [/position:\s*relative/, 'Se desplaza respecto a su posición original. <b>El hueco original se mantiene</b>.'],
  [/position:\s*absolute/, '<b>Sale del flujo</b>. Se posiciona respecto al padre posicionado más cercano.'],
  [/position:\s*fixed/, '<b>Fijo en la ventana</b>. NO se mueve al hacer scroll. Sale del flujo.'],
  [/position:\s*sticky/, 'Híbrido: fluye normalmente hasta que llega a un tope (top), luego se fija.'],
  [/\bposition\s*:\s*\w/, 'Define el método de posicionamiento del elemento (static/relative/absolute/fixed/sticky)'],
  [/top:\s*\d/, 'Distancia desde el borde superior (funciona si position ≠ static)'],
  [/left:\s*\d/, 'Distancia desde el borde izquierdo (funciona si position ≠ static)'],
  [/right:\s*\d/, 'Distancia desde el borde derecho (funciona si position ≠ static)'],
  [/(?<!margin-|padding-)bottom:\s*\d/, 'Distancia desde el borde inferior (funciona si position ≠ static)'],

  // === CSS — DISPLAY ===
  [/display:\s*none\b/, '<b>Oculta el elemento SIN dejar hueco</b>. Los demás ocupan su lugar. Desaparece del flujo.'],
  [/display:\s*block\b/, 'El elemento ocupa TODA la línea disponible. Respeta width/height.'],
  [/display:\s*inline\b/, 'El elemento ocupa SOLO el ancho de su contenido. NO respeta width/height.'],
  [/display:\s*inline-block\b/, 'Híbrido: se coloca en línea (como inline) pero respeta width/height (como block).'],
  [/display:\s*flex\b/, 'Activa el modelo Flexbox. Los hijos se distribuyen en una fila/columna flexible.'],
  [/display:\s*grid\b/, 'Activa el modelo Grid. Los hijos se colocan en una cuadrícula bidimensional.'],
  [/\bdisplay\s*:\s*\w/, 'Define cómo se muestra el elemento (block/inline/flex/grid/none…)'],

  // === CSS — FLOAT / CLEAR ===
  [/float:\s*left\b/, 'El elemento flota a la izquierda. El texto fluye a su derecha.'],
  [/float:\s*right\b/, 'El elemento flota a la derecha. El texto fluye a su izquierda.'],
  [/float:\s*none\b/, 'El elemento NO flota (valor por defecto). Vuelve al flujo normal.'],
  [/\bfloat\s*:\s*\w/, 'Hace que el elemento flote (left/right) y el contenido fluya a su alrededor.'],
  [/clear:\s*both\b/, 'LIMPIA el flujo: el elemento se coloca DEBAJO de todos los elementos flotantes (left y right).'],
  [/clear:\s*left\b/, 'Se coloca debajo de los elementos con float:left (pero respeta float:right).'],
  [/clear:\s*right\b/, 'Se coloca debajo de los elementos con float:right (pero respeta float:left).'],
  [/\bclear\s*:\s*\w/, 'Limpia el efecto de float: el elemento se coloca debajo de los flotantes.'],

  // === CSS — OVERFLOW ===
  [/overflow:\s*hidden\b/, 'El contenido que DESBORDA se RECORTA y NO se ve. No hay scroll.'],
  [/overflow:\s*auto\b/, 'Aparece barra de scroll SOLO si el contenido desborda al contenedor.'],
  [/overflow:\s*scroll\b/, 'SIEMPRE muestra barras de scroll (incluso si no hace falta).'],
  [/overflow:\s*visible\b/, 'El contenido desbordado se ve FUERA del contenedor (valor por defecto).'],
  [/\boverflow\s*:\s*\w/, 'Controla qué pasa con el contenido que desborda su contenedor.'],

  // === CSS — VISIBILITY ===
  [/visibility:\s*hidden\b/, '<b>Oculta el elemento PERO mantiene el hueco</b> vacío en la página.'],
  [/visibility:\s*visible\b/, 'El elemento se muestra normalmente (valor por defecto).'],

  // === CSS — Z-INDEX ===
  [/z-index:\s*(-?\d+)/, 'Controla la superposición (mayor número = más cerca del usuario). Solo funciona si position ≠ static. Valor: <b>$1</b>'],

  // === CSS — BACKGROUND ===
  [/background-attachment:\s*fixed\b/, 'El fondo permanece fijo al hacer scroll (efecto PARALLAX).'],
  [/background:\s*[#\w]/, 'Define el fondo del elemento (color, imagen, degradado…).'],
  [/background-color\b/, 'Color de fondo sólido del elemento.'],
  [/background-image\b/, 'Imagen de fondo del elemento.'],
  [/background-size:\s*cover\b/, 'La imagen de fondo cubre TODO el contenedor (puede recortarse).'],
  [/background-size:\s*contain\b/, 'La imagen de fondo se ve COMPLETA (puede dejar espacios).'],

  // === CSS — TIPOGRAFÍA Y TEXTO ===
  [/color:\s*[#\w]/, 'Color del texto del elemento.'],
  [/font-size:\s*(\S+)/, 'Tamaño de la fuente: <b>$1</b>'],
  [/font-weight:\s*(\w+)/, 'Grosor de la fuente: <b>$1</b> (bold=negrita, normal, 700…)'],
  [/font-family:\s*/, 'Define la familia tipográfica (fuente) del texto.'],
  [/text-align:\s*(\w+)/, 'Alineación del texto: <b>$1</b> (left/center/right/justify)'],
  [/text-decoration:\s*none\b/, 'Elimina la decoración del texto (típicamente usado en enlaces para quitar subrayado).'],
  [/text-decoration:\s*(\w+)/, 'Decoración del texto: <b>$1</b> (underline/overline/line-through)'],
  [/line-height:\s*(\S+)/, 'Altura de línea (espaciado entre renglones): <b>$1</b>'],
  [/letter-spacing:\s*(\S+)/, 'Espaciado entre caracteres: <b>$1</b>'],

  // === CSS — BORDES Y SOMBRAS ===
  [/border:\s*(\S+)/, 'Define el borde del elemento (grosor, estilo, color): <b>$1</b>'],
  [/border-radius:\s*(\S+)/, 'Esquinas redondeadas. Con <b>50%</b> crea un círculo si width = height.'],
  [/border-left:\s*(\S+)/, 'Borde IZQUIERDO específico del elemento.'],
  [/border-bottom:\s*(\S+)/, 'Borde INFERIOR específico del elemento.'],
  [/border-top:\s*(\S+)/, 'Borde SUPERIOR específico del elemento.'],
  [/border-right:\s*(\S+)/, 'borde DERECHO específico del elemento.'],
  [/box-shadow:\s*(\S+)/, 'Sombra exterior de la caja: <b>$1</b>'],
  [/outline:\s*/, 'Contorno (línea FUERA del borde que no ocupa espacio).'],

  // === CSS — MARGEN Y RELLENO ===
  [/margin:\s*(\S+)/, 'Espacio EXTERNO (separación con otros elementos): <b>$1</b>'],
  [/margin-top:\s*(\S+)/, 'Margen superior externo: <b>$1</b>'],
  [/margin:\s*0\s+auto\b/, 'Centra horizontalmente el elemento (auto en left+right).'],
  [/padding:\s*(\S+)/, 'Espacio INTERNO (entre el borde y el contenido): <b>$1</b>'],

  // === CSS — DIMENSIONES ===
  [/(?<!min-|max-)width:\s*(\S+)/, 'Ancho del elemento: <b>$1</b>'],
  [/height:\s*(\S+)/, 'Alto del elemento: <b>$1</b>'],
  [/(?<!@media\s*\()min-width:\s*(\S+)/, 'Ancho MÍNIMO del elemento (no puede ser más pequeño): <b>$1</b>'],
  [/(?<!@media\s*\()max-width:\s*(\S+)/, 'Ancho MÁXIMO del elemento (no puede ser más grande): <b>$1</b>'],
  [/min-height:\s*(\S+)/, 'Alto MÍNIMO del elemento: <b>$1</b>'],
  [/max-height:\s*(\S+)/, 'Alto MÁXIMO del elemento: <b>$1</b>'],
  [/box-sizing:\s*border-box\b/, 'Incluye padding y borde dentro del width/height (evita desbordes).'],

  // === CSS — TRANSICIONES Y TRANSFORMACIONES ===
  [/transition:\s*(\S+)/, 'Transición suave entre cambios de estilo (animación automática): <b>$1</b>'],
  [/transition-delay:\s*/, 'Retardo antes de iniciar la transición.'],
  [/transform:\s*(\S+)/, 'Transforma el elemento (rotar, escalar, mover): <b>$1</b>'],
  [/transform:\s*scale\(/, 'Escala (agranda/encoge) el elemento. <b>scale(1.05)</b> = 5% más grande.'],
  [/transform:\s*translateY?\(/, 'Desplaza el elemento verticalmente.'],
  [/transform:\s*rotate\(/, 'Rota el elemento (grados).'],
  [/opacity:\s*(\S+)/, 'Opacidad/transparencia del elemento. 0=invisible, 1=sólido. Valor: <b>$1</b>'],
  [/cursor:\s*(\w+)/, 'Estilo del cursor al pasar sobre el elemento: <b>$1</b> (pointer=mano, default=flecha)'],

  // === CSS — FLEXBOX ===
  [/flex:\s*(\S+)/, 'Factor de crecimiento del elemento dentro de un contenedor flex: <b>$1</b>'],
  [/flex-direction:\s*(\w+)/, 'Dirección del eje principal en Flexbox: <b>$1</b> (row/column)'],
  [/justify-content:\s*(\w+)/, 'Alineación en el eje principal (Flexbox): <b>$1</b>'],
  [/align-items:\s*(\w+)/, 'Alineación en el eje secundario (Flexbox): <b>$1</b>'],
  [/flex-wrap:\s*(\w+)/, 'Controla si los elementos flex saltan de línea: <b>$1</b>'],
  [/gap:\s*(\S+)/, 'Espacio ENTRE elementos flex/grid (no margen externo): <b>$1</b>'],

  // === CSS — GRID ===
  [/grid-template-columns:\s*(\S+)/, 'Define las columnas de la cuadrícula Grid: <b>$1</b>'],
  [/grid-template-rows:\s*(\S+)/, 'Define las filas de la cuadrícula Grid: <b>$1</b>'],
  [/grid-column:\s*(\S+)/, 'Posición/span del elemento en las columnas del Grid.'],
  [/grid-row:\s*(\S+)/, 'Posición/span del elemento en las filas del Grid.'],
  [/repeat\(/, 'Repite un patrón de columnas/filas en CSS Grid.'],
  [/minmax\(/, 'Define un tamaño MÍNIMO y MÁXIMO para columnas/filas Grid.'],
  [/auto-fill\b/, 'Crea automáticamente tantas columnas como quepan (Grid responsivo).'],
  [/auto-fit\b/, 'Similar a auto-fill pero colapsa columnas vacías (Grid responsivo).'],

  // === CSS — PSEUDOCLASES Y SELECTORES ===
  [/:\s*hover\b/, 'Pseudo-clase: se activa cuando el ratón PASAPOR ENCIMA del elemento.'],
  [/:\s*focus\b/, 'Pseudo-clase: se activa cuando el elemento TIENE EL FOCO (clic o tabulación).'],
  [/:\s*valid\b/, 'Pseudo-clase: se activa si el valor del campo CUMPLE la validación HTML5.'],
  [/:\s*invalid\b/, 'Pseudo-clase: se activa si el valor del campo NO CUMPLE la validación HTML5.'],
  [/:\s*required\b/, 'Pseudo-clase: selecciona campos que tienen el atributo required.'],
  [/:\s*optional\b/, 'Pseudo-clase: selecciona campos SIN el atributo required.'],
  [/:\s*checked\b/, 'Pseudo-clase: selecciona inputs de tipo checkbox/radio que están MARCADOS.'],
  [/:\s*nth-child\(/, 'Pseudo-clase: selecciona elementos según su posición entre hermanos.'],
  [/:\s*first-child\b/, 'Pseudo-clase: selecciona el PRIMER hijo de su padre.'],
  [/:\s*last-child\b/, 'Pseudo-clase: selecciona el ÚLTIMO hijo de su padre.'],
  [/:\s*not\(/, 'Pseudo-clase: selecciona elementos que NO coinciden con el selector.'],
  [/::\s*after\b/, 'Pseudo-elemento: inserta contenido DESPUÉS del elemento (con <code>content</code>).'],
  [/::\s*before\b/, 'Pseudo-elemento: inserta contenido ANTES del elemento (con <code>content</code>).'],
  [/::\s*placeholder\b/, 'Pseudo-elemento: estiliza el texto de placeholder del input.'],
  [/::\s*selection\b/, 'Pseudo-elemento: estiliza el texto seleccionado por el usuario.'],

  // === CSS — MEDIA QUERIES ===
  [/@media\s*\(max-width:\s*(\d+)\s*(px|rem|em)?\)/, 'Estilos que se aplican cuando la pantalla mide <b>MENOS de $1$2</b>.'],
  [/@media\s*\(min-width:\s*(\d+)\s*(px|rem|em)?\)/, 'Estilos que se aplican cuando la pantalla mide <b>MÁS de $1$2</b>.'],
  [/@media\b/, 'Regla condicional: aplica estilos SÓLO si se cumple la condición (ej: pantalla ≤ 600px).'],
  [/@keyframes\b/, 'Define una animación CSS con pasos intermedios (from→to o porcentajes).'],
  [/animation:\s*(\S+)/, 'Aplica una animación definida con @keyframes al elemento.'],
  [/animation-name:\s*(\S+)/, 'Nombre de la animación @keyframes que se aplicará.'],
  [/animation-duration:\s*(\S+)/, 'Duración total de la animación.'],

  // === CSS — VARIOS ===
  [/list-style:\s*none\b/, 'Elimina los estilos de viñeta/número de una lista.'],
  [/object-fit:\s*cover\b/, 'La imagen se redimensiona para CUBRIR todo el contenedor (puede recortarse).'],
  [/object-fit:\s*contain\b/, 'La imagen se redimensiona para verse COMPLETA dentro del contenedor.'],
  [/white-space:\s*nowrap\b/, 'El texto NO salta de línea (se mantiene en una sola línea).'],
  [/text-overflow:\s*ellipsis\b/, 'Añade "…" cuando el texto desborda su contenedor.'],
  [/accent-color:\s*(\S+)/, 'Color de acento para controles nativos (checkbox, range, radio).'],
  [/\*\.selector/, 'Selector universal: selecciona TODOS los elementos de la página (reset).'],

  // ============================================================
  //  CSS — SELECTORES EN CABECERA DE BLOQUE
  // ============================================================
  [/^(\w[\w-]*)\s*\{/, 'Selector de etiqueta <b>$1</b> — abre bloque de estilo CSS'],
  [/^\.([\w-]+)\s*\{/, 'Selector de clase <b>.$1</b> — abre bloque de estilo CSS'],
  [/^#([\w-]+)\s*\{/, 'Selector de ID <b>#$1</b> — abre bloque de estilo CSS'],
  [/^\}\s*$/, 'Cierra bloque de estilo CSS'],

  // ============================================================
  //  JAVASCRIPT — ASYNC / AWAIT / FETCH
  // ============================================================
  [/^async\s+function\s+(\w+)/, 'Define función asíncrona <b>$1</b> (devuelve Promise)'],
  [/(\w+)\s*=\s*async\s*\(/, 'Función asíncrona <b>$1</b> — siempre devuelve una Promise'],
  [/\bawait\s+(.+)/, 'Espera (sin bloquear) a que se resuelva: <code>$1</code>'],
  [/\bfetch\(\s*`([^`]+)`\s*\)/, 'Petición HTTP <b>GET</b> a <code>$1</code> (devuelve Promise<Response>)'],
  [/\bfetch\(\s*'([^']+)'\s*\)/, 'Petición HTTP <b>GET</b> a <code>$1</code> (devuelve Promise<Response>)'],
  [/\bfetch\(\s*"([^"]+)"\s*\)/, 'Petición HTTP <b>GET</b> a <code>$1</code> (devuelve Promise<Response>)'],
  [/\bfetch\(/, 'Inicia petición HTTP fetch (devuelve Promise<Response>)'],
  [/method:\s*'(\w+)'/, 'Especifica método HTTP de la petición: <b>$1</b> (GET/POST/PUT/DELETE)'],
  [/headers:\s*\{/, 'Define cabeceras HTTP de la petición (Content-Type, Authorization, etc.)'],
  [/'Content-Type':\s*'([^']+)'/, 'Indica el formato de los datos enviados: <code>$1</code> (application/json, etc.)'],
  [/body:\s*(\w+)/, 'Cuerpo/datos de la petición que se envían al servidor: <code>$1</code>'],
  [/JSON\.stringify\(/, 'Convierte un objeto JS a string JSON para poder enviarlo en una petición'],
  [/\.json\(\)/, 'Convierte el cuerpo (JSON) de la respuesta HTTP a objeto JS (también devuelve Promise)'],
  [/response\.ok/, 'Propiedad booleana: true si la respuesta HTTP fue exitosa (código 200-299)'],
  [/response\.status/, 'Código de estado HTTP que devolvió el servidor (200=OK, 404=Not Found, 500=Error)'],

  // === JAVASCRIPT — PROMISES ===
  [/new\s+Promise/, 'Crea una nueva Promesa — operación que terminará en el futuro (asíncrona)'],
  [/\.then\s*\(/, 'Encadena: ejecuta esta función cuando la promesa se resuelva correctamente'],
  [/\.catch\s*\(/, 'Encadena: ejecuta esta función si la promesa falla (ocurre un error)'],
  [/\.finally\s*\(/, 'Encadena: se ejecuta SIEMPRE, haya éxito o error en la promesa'],
  [/Promise\.all\s*\(/, 'Espera a que TODAS las promesas del array se resuelvan. Si falla una, falla todo.'],
  [/Promise\.race\s*\(/, 'Espera a la PRIMERA promesa que se resuelva (la más rápida).'],

  // === JAVASCRIPT — TRY / CATCH / THROW ===
  [/^try\b/, 'Inicia bloque de prueba — intenta ejecutar código que PUEDE fallar'],
  [/^catch\s*\((\w+)\)/, 'Captura el error como variable <b>$1</b> para manejarlo sin que rompa la app'],
  [/^finally\b/, 'Bloque que se ejecuta SIEMPRE (haya o no error), después de try/catch'],
  [/^throw\b/, 'Lanza una excepción manualmente (crea un error intencionadamente)'],

  // === JAVASCRIPT — CONDICIONALES ===
  [/^if\s*\((.+)\)/, 'Evalúa condición: si <code>$1</code> es true, ejecuta este bloque'],
  [/^else\s+if\s*\((.+)\)/, 'Si la condición anterior fue false, prueba esta OTRA condición: <code>$1</code>'],
  [/^else\b/, 'Si NINGUNA condición anterior se cumplió, ejecuta este bloque (por defecto)'],
  [/^switch\s*\(/, 'Evalúa una expresión y ejecuta el caso que coincida (alternativa a múltiples if)'],
  [/^case\s+/, 'Caso específico dentro de un switch: si coincide, ejecuta este bloque'],
  [/^default\s*:/, 'Caso por defecto en un switch (se ejecuta si ningún case coincide)'],
  [/\?[\s\S]*:/, 'Operador ternario: condición ? valor_si_true : valor_si_false'],

  // === JAVASCRIPT — BUCLES ===
  [/^for\s+let\s+(\w+)\s+in\b/, 'Bucle for…in: itera sobre las PROPIEDADES (claves) de un objeto. <b>$1</b> = cada clave'],
  [/^for\s+let\s+(\w+)\s+of\b/, 'Bucle for…of: itera sobre los VALORES de un array/iterable. <b>$1</b> = cada valor'],
  [/^for\s*\(/, 'Bucle for clásico: inicialización; condición; incremento — itera un número de veces'],
  [/^while\s*\((.+)\)/, 'Bucle while: repite el bloque MIENTRAS <code>$1</code> sea true'],
  [/^do\b/, 'Bucle do…while: ejecuta el bloque UNA VEZ y luego repite mientras la condición sea true'],

  // === JAVASCRIPT — DOM ===
  [/document\.getElementById\s*\(\s*['"]([^'"]+)['"]/, 'Busca en el DOM un elemento con el ID <b>$1</b> y lo devuelve'],
  [/getElementById\s*\(\s*['"]([^'"]+)['"]/, 'Busca en el DOM un elemento con el ID <b>$1</b> y lo devuelve'],
  [/querySelectorAll\s*\(\s*['"]([^'"]+)['"]/, 'Busca TODOS los elementos que coinciden con el selector CSS <b>$1</b>'],
  [/querySelector\s*\(\s*['"]([^'"]+)['"]/, 'Busca el PRIMER elemento que coincide con el selector CSS <b>$1</b>'],
  [/addEventListener\s*\(\s*['"]([^'"]+)['"]/, 'Asigna una función que se ejecutará cuando ocurra el evento <b>$1</b>'],
  [/document\.createElement\s*\(\s*['"]([^'"]+)['"]/, 'Crea un nuevo elemento HTML <b>&lt;$1&gt;</b> en memoria (aún no visible)'],
  [/document\.createTextNode\s*\(/, 'Crea un nodo de texto para insertar en el DOM'],
  [/appendChild\s*\(/, 'Inserta un hijo (elemento o texto) al FINAL de un elemento padre'],
  [/insertBefore\s*\(/, 'Inserta un elemento ANTES de otro elemento hermano'],
  [/removeChild\s*\(/, 'Elimina un hijo del DOM'],
  [/replaceChild\s*\(/, 'Reemplaza un hijo del DOM por otro nuevo'],
  [/parentElement\b/, 'Obtiene el elemento PADRE del nodo actual'],
  [/parentNode\b/, 'Obtiene el nodo PADRE (incluye nodos de texto, no solo elementos)'],
  [/closest\s*\(/, 'Busca el ANCESTRO más cercano que coincida con el selector CSS'],
  [/nextElementSibling\b/, 'Obtiene el siguiente ELEMENTO hermano (no texto)'],
  [/previousElementSibling\b/, 'Obtiene el anterior ELEMENTO hermano (no texto)'],
  [/\.textContent\b/, 'Obtiene o modifica el TEXTO PLANO del elemento (ignora etiquetas HTML)'],
  [/\.innerHTML\b/, 'Obtiene o modifica el contenido HTML del elemento (interpreta etiquetas)'],
  [/\.outerHTML\b/, 'Obtiene o modifica el HTML completo del elemento (incluyendo él mismo)'],
  [/\.classList\.add\b/, 'AÑADE una clase CSS al elemento (sin quitar las existentes)'],
  [/\.classList\.remove\b/, 'QUITA una clase CSS del elemento'],
  [/\.classList\.toggle\b/, 'ALTERNA una clase CSS: si existe la quita, si no existe la añade'],
  [/\.classList\./, 'Manipula las clases CSS del elemento (add/remove/toggle/contains)'],
  [/\.style\.(\w+)/, 'Modifica la propiedad CSS <b>$1</b> EN LÍNEA del elemento'],
  [/\.style\.display\b/, 'Cambia la propiedad <b>display</b> del elemento (none/block/inline/flex…)'],
  [/\.style\.background\b/, 'Cambia el <b>background</b> (fondo) del elemento'],
  [/\.style\.color\b/, 'Cambia el <b>color</b> del texto del elemento'],
  [/\.style\.width\b/, 'Cambia el <b>ancho</b> del elemento'],
  [/\.value\b/, 'Obtiene o asigna el VALOR actual de un campo de formulario (input, select, textarea)'],
  [/\.checked\b/, 'Propiedad booleana: true si el checkbox/radio está MARCADO'],

  // === JAVASCRIPT — CANVAS ===
  [/\.getContext\s*\(\s*['"]2d['"]\s*\)/, 'Obtiene el contexto de dibujo 2D del canvas. Necesario para dibujar.'],
  [/\.fillRect\s*\(/, 'Dibuja un RECTÁNGULO relleno en el canvas (x, y, ancho, alto)'],
  [/\.strokeRect\s*\(/, 'Dibuja el CONTORNO de un rectángulo en el canvas'],
  [/\.fillStyle\s*=/, 'Define el COLOR de relleno para las próximas figuras en el canvas'],
  [/\.strokeStyle\s*=/, 'Define el COLOR del contorno para las próximas figuras en el canvas'],
  [/\.fillText\s*\(/, 'Dibuja TEXTO relleno en el canvas en una posición (x, y)'],
  [/\.strokeText\s*\(/, 'Dibuja el CONTORNO de texto en el canvas'],
  [/\.beginPath\s*\(/, 'Inicia una NUEVA RUTA de dibujo (para líneas, curvas, arcos)'],
  [/\.moveTo\s*\(/, 'Mueve el "lápiz" a una posición SIN dibujar línea'],
  [/\.lineTo\s*\(/, 'Traza una LÍNEA desde la posición actual hasta las coordenadas dadas'],
  [/\.stroke\s*\(/, 'Dibuja el contorno de la ruta actual definida con moveTo/lineTo/etc.'],
  [/\.fill\s*\(/, 'Rellena la ruta cerrada actual con el color de fillStyle'],
  [/\.arc\s*\(/, 'Dibuja un ARCO / círculo en el canvas (x, y, radio, startAngle, endAngle)'],
  [/\.clearRect\s*\(/, 'LIMPIA un área rectangular del canvas (lo hace transparente)'],
  [/\.measureText\s*\(/, 'Mide el ancho que ocuparía un texto en el canvas'],

  // === JAVASCRIPT — EVENTOS Y MANEJADORES ===
  [/\.preventDefault\(\)/, 'EVITA el comportamiento por defecto del evento (ej: recargar página al enviar formulario)'],
  [/\.stopPropagation\(\)/, 'DETIENE que el evento siga propagándose a elementos PADRE (burbuja)'],
  [/\bonclick\s*=\s*"/, 'Evento: se ejecuta al hacer CLIC en el elemento'],
  [/\bonsubmit\s*=\s*"/, 'Evento: se ejecuta al ENVIAR un formulario'],
  [/\bonchange\s*=\s*"/, 'Evento: se ejecuta cuando el valor cambia y el campo PIERDE el foco'],
  [/\boninput\s*=\s*"/, 'Evento: se ejecuta EN TIEMPO REAL cada vez que el usuario escribe o cambia el valor'],
  [/\bonfocus\s*=\s*"/, 'Evento: se ejecuta cuando el elemento GANA el foco (clic o tabulación)'],
  [/\bonblur\s*=\s*"/, 'Evento: se ejecuta cuando el elemento PIERDE el foco'],
  [/\bonmouseover\s*=\s*"/, 'Evento: se ejecuta cuando el ratón ENTRA en el elemento'],
  [/\bonmouseout\s*=\s*"/, 'Evento: se ejecuta cuando el ratón SALE del elemento'],
  [/\bonload\s*=\s*"/, 'Evento: se ejecuta cuando la página o elemento termina de CARGAR'],

  // === JAVASCRIPT — FUNCIONES ===
  [/^function\s+(\w+)/, 'Define una función con nombre <b>$1</b>'],
  [/(\w+)\s*=\s*\([^)]*\)\s*=>/, 'Función FLECHA (arrow function) asignada a <b>$1</b>'],
  [/=>\s*\{/, 'Función flecha → comienza el CUERPO de la función'],
  [/=>[^{;]*$/, 'Función flecha de RETORNO IMPLÍCITO (devuelve la expresión sin usar return)'],

  // === JAVASCRIPT — MÉTODOS DE ARRAY ===
  [/\.map\s*\(/, 'Crea un NUEVO array TRANSFORMANDO cada elemento con una función'],
  [/\.filter\s*\(/, 'Crea un NUEVO array SOLO con los elementos que CUMPLEN la condición'],
  [/\.forEach\s*\(/, 'Ejecuta una función por cada elemento del array (NO devuelve nada, solo itera)'],
  [/\.find\s*\(/, 'Busca y devuelve el PRIMER elemento que cumple la condición (o undefined)'],
  [/\.findIndex\s*\(/, 'Busca y devuelve el ÍNDICE del primer elemento que cumple la condición'],
  [/\.some\s*\(/, 'Comprueba si ALGÚN elemento cumple la condición (devuelve true/false)'],
  [/\.every\s*\(/, 'Comprueba si TODOS los elementos cumplen la condición (devuelve true/false)'],
  [/\.reduce\s*\(/, 'Reduce el array a un SOLO valor ACUMULANDO elementos (ej: sumar todos)'],
  [/\.sort\s*\(/, 'ORDENA los elementos del array (por defecto alfabéticamente)'],
  [/\.reverse\s*\(/, 'INVIERTE el orden de los elementos del array'],
  [/\.includes\s*\(/, 'Comprueba si el array/string CONTIENE el valor indicado (true/false)'],
  [/\.indexOf\s*\(/, 'Busca y devuelve la POSICIÓN (índice) de un elemento en el array'],
  [/\.slice\s*\(/, 'Extrae una PARTE del array/string sin modificar el original (copia)'],
  [/\.splice\s*\(/, 'Añade/elimina elementos del array MODIFICÁNDOLO directamente'],
  [/\.concat\s*\(/, 'COMBINA dos o más arrays en uno NUEVO (sin modificar los originales)'],
  [/\.join\s*\(/, 'UNE todos los elementos de un array en un SOLO STRING con un separador'],
  [/\.split\s*\(/, 'DIVIDE un string en un ARRAY usando un separador'],

  // === JAVASCRIPT — MÉTODOS DE STRING ===
  [/\.toLowerCase\(\)/, 'Convierte TODO el texto a MINÚSCULAS'],
  [/\.toUpperCase\(\)/, 'Convierte TODO el texto a MAYÚSCULAS'],
  [/\.trim\s*\(/, 'ELIMINA los espacios en blanco al INICIO y FINAL del string'],
  [/\.replace\s*\(/, 'Busca un patrón y lo REEMPLAZA por otro texto'],
  [/\.replaceAll\s*\(/, 'Reemplaza TODAS las ocurrencias de un patrón en el string'],
  [/\.match\s*\(/, 'Busca COINCIDENCIAS usando una expresión regular (devuelve array o null)'],
  [/\.substring\s*\(/, 'Extrae caracteres entre dos índices del string'],
  [/\.charAt\s*\(/, 'Devuelve el CARÁCTER en la posición indicada'],
  [/\.padStart\s*\(/, 'RELLENA el string por la IZQUIERDA hasta alcanzar la longitud deseada'],
  [/\.padEnd\s*\(/, 'RELLENA el string por la DERECHA hasta alcanzar la longitud deseada'],

  // === JAVASCRIPT — MATH ===
  [/Math\.random\(\)/, 'Genera un número ALEATORIO entre 0 (incluido) y 1 (excluido)'],
  [/Math\.floor\(/, 'REDONDEA hacia ABAJO al entero más cercano (suelo)'],
  [/Math\.ceil\(/, 'REDONDEA hacia ARRIBA al entero más cercano (techo)'],
  [/Math\.round\(/, 'REDONDEA al entero más cercano (estándar)'],
  [/Math\.max\(/, 'Devuelve el VALOR MÁXIMO de los números proporcionados'],
  [/Math\.min\(/, 'Devuelve el VALOR MÍNIMO de los números proporcionados'],
  [/Math\.abs\(/, 'Devuelve el VALOR ABSOLUTO (siempre positivo)'],
  [/Math\.pow\(/, 'Potencia: eleva un número a otro (ej: Math.pow(2,3)=8)'],

  // === JAVASCRIPT — CONVERSIÓN DE TIPOS ===
  [/\bparseInt\s*\(/, 'Convierte un string a NÚMERO ENTERO (parsea solo la parte numérica)'],
  [/\bparseFloat\s*\(/, 'Convierte un string a NÚMERO DECIMAL (con decimales)'],
  [/Number\s*\(/, 'Convierte un valor a NÚMERO (si no puede, devuelve NaN)'],
  [/String\s*\(/, 'Convierte un valor a STRING (cadena de texto)'],
  [/Boolean\s*\(/, 'Convierte un valor a BOOLEANO (true o false)'],
  [/\.toString\s*\(/, 'Convierte el valor a su representación como STRING'],
  [/\.toFixed\s*\(/, 'Redondea un número decimal a los dígitos especificados'],

  // === JAVASCRIPT — CONSOLE ===
  [/console\.log\(/, 'Depuración: imprime un mensaje o variable en la CONSOLA del navegador'],
  [/console\.error\(/, 'Depuración: imprime un mensaje de ERROR en la consola (en rojo)'],
  [/console\.warn\(/, 'Depuración: imprime una ADVERTENCIA en la consola (en amarillo)'],
  [/console\.table\(/, 'Depuración: muestra datos como TABLA en la consola'],

  // === JAVASCRIPT — JSON ===
  [/JSON\.parse\(/, 'Convierte un string con FORMATO JSON a un objeto JavaScript'],
  [/JSON\.stringify\(/, 'Convierte un objeto JavaScript a STRING con formato JSON'],

  // === JAVASCRIPT — TIMING ===
  [/setTimeout\s*\([^,]+,\s*(\d+)/, 'Ejecuta la función UNA SOLA VEZ tras <b>$1 ms</b> de retardo'],
  [/setInterval\s*\([^,]+,\s*(\d+)/, 'Ejecuta la función REPETIDAMENTE cada <b>$1 ms</b>'],
  [/clearTimeout\s*\(/, 'CANCELA un setTimeout pendiente (evita que se ejecute)'],
  [/clearInterval\s*\(/, 'CANCELA un setInterval en ejecución'],

  // === JAVASCRIPT — WINDOW ===
  [/\bwindow\.scrollTo\s*\(/, 'Desplaza la ventana a una posición específica (top, left)'],
  [/\bwindow\.open\s*\(/, 'Abre una NUEVA VENTANA o pestaña del navegador'],
  [/\bwindow\.close\s*\(/, 'CIERRA la ventana/pestaña actual del navegador'],
  [/\bwindow\.innerWidth\b/, 'Ancho INTERIOR de la ventana del navegador (viewport)'],
  [/\bwindow\.innerHeight\b/, 'Alto INTERIOR de la ventana del navegador (viewport)'],
  [/\balert\s*\(/, 'Muestra un mensaje en una VENTANA EMERGENTE con botón Aceptar'],
  [/\bconfirm\s*\(/, 'Muestra un mensaje con botones Aceptar/Cancelar (devuelve true/false)'],
  [/\bprompt\s*\(/, 'Pide al usuario que INTRODUZCA UN VALOR (devuelve string o null)'],

  // === JAVASCRIPT — LOCALSTORAGE ===
  [/localStorage\.setItem\s*\(/, 'GUARDA un dato en localStorage (persiste aunque se cierre el navegador)'],
  [/localStorage\.getItem\s*\(/, 'RECUPERA un dato guardado en localStorage'],
  [/localStorage\.removeItem\s*\(/, 'ELIMINA un dato específico de localStorage'],
  [/localStorage\.clear\s*\(/, 'VACÍA completamente el localStorage (elimina todos los datos)'],

  // === JAVASCRIPT — VARIABLES ===
  [/^(let|const|var)\s+(\w+)\s*=\s*async/, m => `Declara constante <b>${m[2]}</b> como función asíncrona`],
  [/^(let|const|var)\s+(\w+)\s*=\s*(.+);?$/, m => `Declara <b>${m[2]}</b> y le asigna <code>${(m[3]||'').replace(/</g,'&lt;')}</code>`],
  [/^(let|const|var)\s+(\w+)\s*;?$/, 'Declara variable <b>$2</b> (sin valor inicial)'],
  [/^(const|let|var)\s+/, 'Declara una variable con <b>$1</b>'],
  [/\$\s*\(/, 'Selector al estilo jQuery: busca elementos con el selector CSS especificado'],
  [/\$\(document\)\.ready/, 'Ejecuta el código cuando el DOM esté completamente cargado (jQuery)'],

  // === JAVASCRIPT — RETURN ===
  [/^return\s+(.+);?$/, 'DEVUELVE <code>$1</code> como resultado de la función y TERMINA su ejecución'],
  [/^return\s*;?$/, 'Devuelve <b>undefined</b> (termina la función sin devolver valor)'],

  // === JAVASCRIPT — CLASES / MÓDULOS ===
  [/^class\s+(\w+)/, 'Define una CLASE llamada <b>$1</b> (plantilla para crear objetos)'],
  [/^import\s/, 'IMPORTA funcionalidades desde otro módulo (ES Modules)'],
  [/^export\s+default\b/, 'EXPORTA la funcionalidad PRINCIPAL de un módulo'],
  [/^export\s/, 'EXPORTA funcionalidades para que OTROS MÓDULOS puedan importarlas'],
  [/new\s+(\w+)/, 'CREA (instancia) un NUEVO objeto de la clase <b>$1</b>'],

  // === JAVASCRIPT — EVENTOS (métodos) ===
  [/\.focus\(\)/, 'Asigna el FOCO al elemento (el cursor se sitúa en el campo)'],
  [/\.blur\(\)/, 'QUITA el foco del elemento (lo deselecciona)'],
  [/\.select\(\)/, 'SELECCIONA todo el contenido de un campo de texto'],
  [/\.click\(\)/, 'Simula un CLIC en el elemento (como si el usuario hiciera clic)'],
  [/\.submit\(\)/, 'ENVÍA el formulario programáticamente (sin clic del usuario)'],
  [/\.reset\(\)/, 'RESTABLECE el formulario a sus valores iniciales'],

  // === JAVASCRIPT — FORM VALIDATION ===
  [/\.checkValidity\(\)/, 'Verifica si el campo CUMPLE las reglas de validación HTML5 (true/false)'],
  [/\.setCustomValidity\(\)/, 'Establece un mensaje de error PERSONALIZADO para la validación'],
  [/\.reportValidity\(\)/, 'Muestra los mensajes de error de validación al usuario'],
  [/\.validity\./, 'Objeto con propiedades sobre el estado de validación del campo'],
  [/novalidate\b/, 'Atributo que DESACTIVA la validación HTML5 nativa en el formulario'],

  // === JAVASCRIPT — ATRIBUTOS HTML ===
  [/getAttribute\s*\(/, 'Obtiene el valor de un ATRIBUTO HTML del elemento'],
  [/setAttribute\s*\(/, 'Establece o CAMBIA el valor de un atributo HTML'],
  [/removeAttribute\s*\(/, 'ELIMINA un atributo HTML del elemento'],
  [/hasAttribute\s*\(/, 'Comprueba si el elemento TIENE un atributo específico (true/false)'],

  // === JAVASCRIPT — NÚMERO ===
  [/isNaN\s*\(/, 'Comprueba si el valor NO es un número (true = no es número)'],
  [/typeof\s+/, 'Operador que devuelve el TIPO de un valor (string, number, object, etc.)'],
  [/instanceof\s+/, 'Comprueba si un objeto es INSTANCIA de una clase específica'],

  // === JAVASCRIPT — FORMA ABREVIADA ===
  [/^(\w[\w\d]*)\s*\([^)]*\)\s*\{/, 'Función <b>$1</b> — ejecuta un bloque de código cuando es llamada'],
  [/^(\w[\w\d]*)\s*\(([^)]*)\)\s*\{/, 'Función <b>$1</b> con parámetros'],

  // === LLAMS / BRAZOS ===
  [/^\}\s*\)\s*;/, 'Cierra paréntesis de llamada y bloque'],

  [/^\}\s*\)/, 'Cierra paréntesis de llamada a función'],
  [/^\}\s*;/, 'Cierra bloque de código'],
  [/^\}/, 'Cierra el bloque anterior'],
  [/\{\s*$/, 'Abre un nuevo bloque de código'],

  // === NODE.JS ===
  [/__dirname/, 'Ruta del directorio ACTUAL del archivo (entorno Node.js)'],
  [/__filename/, 'Ruta COMPLETA del archivo actual (entorno Node.js)'],
  [/require\s*\(/, 'Importa un módulo usando el sistema CommonJS (Node.js)'],
  [/module\.exports/, 'Exporta funcionalidad para CommonJS (Node.js)'],
  [/process\./, 'Objeto GLOBAL con información del proceso de Node.js'],

  // === VARIOS ===
  [/\.length\b/, 'Obtiene la LONGITUD (número de elementos en array, caracteres en string)'],
  [/\.push\s*\(/, 'AÑADE un elemento al FINAL del array (modifica el array original)'],
  [/\.pop\s*\(/, 'ELIMINA y devuelve el ÚLTIMO elemento del array'],
  [/\.shift\s*\(/, 'ELIMINA y devuelve el PRIMER elemento del array'],
  [/\.unshift\s*\(/, 'AÑADE un elemento al PRINCIPIO del array'],
  [/this\b/, 'Palabra clave que referencia al objeto CONTEXTO actual (depende de dónde se use)'],
];
const EXPLICACION_FALLBACK = 'Ejecuta la operación de la línea';

function detectarExplicacion(line) {
  const trimmed = line.trim();
  if (!trimmed) return null;
  if (/^\/\//.test(trimmed)) return `💬 <span style="color:var(--text2)">${trimmed.replace(/^\/\/\s*/, '')}</span>`;
  if (/^\/\*/.test(trimmed)) return '💬 Inicia comentario multilínea';
  if (/^\*\//.test(trimmed)) return '💬 Fin comentario multilínea';
  if (/^\*\s/.test(trimmed) && !/\{\s*$/.test(trimmed) && !/(margin|padding|border|color|background|display|position|float|clear|overflow|width|height|text-|font-)/.test(trimmed)) return `💬 ${trimmed.replace(/^\*\s*/, '')}`;
  for (const [pat, msg] of EXPLICACIONES) {
    const m = trimmed.match(pat);
    if (m) {
      if (typeof msg === 'function') return msg(m);
      if (m.length > 1) {
        let r = msg;
        for (let i = 1; i < m.length; i++) r = r.replace(`$${i}`, m[i]);
        return r;
      }
      return msg;
    }
  }
  if (/^\w+\s*=/.test(trimmed) && !/==/.test(trimmed)) {
    const [name, ...rest] = trimmed.split('=');
    const val = rest.join('=').replace(/;$/, '').trim();
    return `Asigna a <b>${name.trim()}</b> = <code>${val.replace(/</g,'&lt;')}</code>`;
  }
  if (/^[<>]/.test(trimmed)) return 'Etiqueta HTML';
  if (trimmed === '{' || trimmed === '}') return trimmed === '{' ? 'Abre bloque' : 'Cierra bloque';
  return EXPLICACION_FALLBACK;
}

function generatExpl(code) {
  const lines = code.split('\n');
  let html = '';
  for (const line of lines) {
    const trimmed = line.trim();
    const display = line.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    if (!trimmed) { html += '<tr><td colspan="2" style="height:3px"></td></tr>'; continue; }
    const expl = detectarExplicacion(trimmed);
    html += `<tr><td><code>${display}</code></td><td>${expl}</td></tr>`;
  }
  return html;
}

function e(btn) {
  const cb = btn.closest('.cb');
  let code = '';
  let expDiv;
  if (cb) {
    code = cb.querySelector('pre.code')?.innerText || '';
    expDiv = cb.querySelector('.exp');
    if (!expDiv) { expDiv = document.createElement('div'); expDiv.className = 'exp'; cb.appendChild(expDiv); }
  } else {
    const cd = btn.previousElementSibling;
    if (!cd || !cd.classList.contains('cd')) return;
    code = cd.textContent || '';
    expDiv = btn.nextElementSibling;
    if (!expDiv || !expDiv.classList.contains('exp')) {
      expDiv = document.createElement('div');
      expDiv.className = 'exp';
      btn.after(expDiv);
    }
  }
  if (!code.trim()) return;
  if (expDiv.classList.contains('show')) {
    expDiv.classList.remove('show');
    if (btn.dataset.origText) btn.textContent = btn.dataset.origText;
    return;
  }
  btn.dataset.origText = btn.textContent;
  btn.textContent = 'Ocultar';
  expDiv.innerHTML = '<table>' + generatExpl(code) + '</table>';
  expDiv.classList.add('show');
}

function toggleToc() {
  const body = document.getElementById('tocBody');
  const arrow = document.getElementById('tocArrow');
  body.classList.toggle('collapsed');
  arrow.textContent = body.classList.contains('collapsed') ? '\u25B8' : '\u25BE';
}

document.addEventListener('keydown', e => {
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    document.getElementById('buscar')?.focus();
  }
});

/* ---------- Progress bar + active TOC highlight ---------- */
(function() {
  const toc = document.getElementById('mainToc');
  const progress = document.getElementById('progressBar');
  if (!toc) return;

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const pct = docHeight > 0 ? Math.min(scrollTop / docHeight * 100, 100) : 0;
    progress.style.width = pct + '%';
  });

  const sections = window.RA_SECTIONS || [];
  const tocLinks = toc.querySelectorAll('.toc-main');
  function highlightActive() {
    let current = '';
    sections.forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        const rect = el.getBoundingClientRect();
        if (rect.top <= 120) current = id;
      }
    });
    tocLinks.forEach(link => {
      link.classList.toggle('active', link.getAttribute('href') === '#' + current);
    });
  }
  window.addEventListener('scroll', highlightActive);
  highlightActive();
})();
