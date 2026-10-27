(function () {
  const data = window.JavaExamSiteData;
  const renderers = window.JavaExamSiteRenderers;
  const mount = document.getElementById("main-content");

  if (!data || !renderers || !mount) {
    return;
  }

  const conceptsHtml = data.concepts.map(function (concept) {
    return renderers.renderConceptPreview(concept);
  }).join("");

  const examLinks = data.exams.map(function (exam) {
    return `<article class="info-card">
      <h3>${exam.title}</h3>
      <p>${exam.subtitle}</p>
      <a class="button-link" href="solutions/${exam.id}.html">Open solution page</a>
    </article>`;
  }).join("");

  mount.innerHTML = `
    <section class="section">
      <div class="section-head">
        <h2>Guide to the exam and its concepts</h2>
        <p>The main page stays focused on understanding the concepts, how to build them, how to manage them, and how each one evolves from primitive use to absurd complexity.</p>
      </div>
      <div class="section-body">
        <div class="stats-grid">
          <article class="metric-card"><strong>${data.concepts.length}</strong><span>Main concepts</span></article>
          <article class="metric-card"><strong>25</strong><span>Examples per concept</span></article>
          <article class="metric-card"><strong>101</strong><span>Deep-guide levels per concept</span></article>
          <article class="metric-card"><strong>${data.exams.length}</strong><span>Dedicated exam solution pages</span></article>
        </div>
      </div>
    </section>
    <section class="section" id="concepts">
      <div class="section-head">
        <h2>Concept articles</h2>
        <p>Click the heading of any concept article to open the deeper 0-100 guide. The main page keeps the complete 25-example evolution ladder visible so you can compare concepts side by side.</p>
      </div>
      <div class="section-body stack-lg">${conceptsHtml}</div>
    </section>
    <section class="section" id="solutions">
      <div class="section-head">
        <h2>Separate pages for each solved exam</h2>
        <p>Each solution page keeps the answer copy-pasteable and pairs the code with definitions, usage notes, and concept links.</p>
      </div>
      <div class="section-body">
        <div class="three-column">${examLinks}</div>
      </div>
    </section>
  `;

  renderers.wireCopyButtons(document.body);
})();
