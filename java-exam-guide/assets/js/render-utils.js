(function () {
  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#39;");
  }

  function slugify(text) {
    return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");
  }

  function renderCodeCard(title, description, code, idPrefix) {
    const codeId = `${idPrefix}-${slugify(title)}`;
    return `
      <article class="code-card">
        <div class="code-head">
          <div>
            <h3>${escapeHtml(title)}</h3>
            <p class="subtle">${escapeHtml(description)}</p>
          </div>
          <button class="copy-button" data-copy-target="${codeId}">Copy code</button>
        </div>
        <pre id="${codeId}"><code>${escapeHtml(code)}</code></pre>
      </article>
    `;
  }

  function renderExampleCard(example, prefix) {
    const codeId = `${prefix}-${slugify(example.title)}`;
    return `
      <article class="example-card">
        <h4>${escapeHtml(example.title)}</h4>
        <p>${escapeHtml(example.summary)}</p>
        <p class="example-meta">${escapeHtml(example.management)}</p>
        <div class="code-head">
          <span class="tag">Progressive use case</span>
          <button class="copy-button" data-copy-target="${codeId}">Copy example</button>
        </div>
        <pre id="${codeId}"><code>${escapeHtml(example.code)}</code></pre>
      </article>
    `;
  }

  function renderConceptPreview(concept) {
    const examplesHtml = concept.examples.map(function (example) {
      return renderExampleCard(example, `${concept.slug}-preview`);
    }).join("");

    return `
      <article class="concept-card" id="${concept.slug}">
        <div class="concept-title">
          <div>
            <div class="pill-row">
              <span class="pill">${escapeHtml(concept.badge)}</span>
              <span class="pill">${escapeHtml(concept.examAngle)}</span>
            </div>
            <h3><a class="anchor-link" href="guides/${concept.slug}.html">${escapeHtml(concept.title)}</a></h3>
          </div>
          <a class="button-link" href="guides/${concept.slug}.html">Open the 0-100 deep guide</a>
        </div>
        ${concept.summary.map(function (text) {
          return `<p>${escapeHtml(text)}</p>`;
        }).join("")}
        <div class="two-column">
          <section class="info-card">
            <h3>How to build it</h3>
            <ol class="list-tight">
              ${concept.buildChecklist.map(function (item) {
                return `<li>${escapeHtml(item)}</li>`;
              }).join("")}
            </ol>
          </section>
          <section class="info-card">
            <h3>How to manage it</h3>
            <ol class="list-tight">
              ${concept.managementChecklist.map(function (item) {
                return `<li>${escapeHtml(item)}</li>`;
              }).join("")}
            </ol>
          </section>
        </div>
        <section class="card">
          <div class="concept-title">
            <h3>25 progressive examples: from primitive to absurd</h3>
            <span class="tag">Full ladder on the main page</span>
          </div>
          <div class="example-grid">${examplesHtml}</div>
        </section>
      </article>
    `;
  }

  function renderMasteryStep(step) {
    return `
      <article class="mastery-step" id="level-${step.level}">
        <h3>${escapeHtml(step.title)}</h3>
        ${step.paragraphs.map(function (text) {
          return `<p>${escapeHtml(text)}</p>`;
        }).join("")}
      </article>
    `;
  }

  function renderConceptGuide(concept) {
    return `
      <section class="section">
        <div class="section-head">
          <h2>${escapeHtml(concept.title)}</h2>
          <p>${escapeHtml(concept.examAngle)}</p>
        </div>
        <div class="section-body stack-lg">
          <div class="callout">
            <strong>Definition.</strong>
            ${escapeHtml(concept.summary[0])}
            ${escapeHtml(concept.summary[1])}
          </div>
          <div class="two-column">
            <section class="info-card">
              <h3>How it works</h3>
              <p>${escapeHtml(concept.summary[0])}</p>
              <p>${escapeHtml(concept.summary[1])}</p>
            </section>
            <section class="info-card">
              <h3>How to build and manage it</h3>
              <ol class="list-tight">
                ${concept.buildChecklist.concat(concept.managementChecklist).map(function (item) {
                  return `<li>${escapeHtml(item)}</li>`;
                }).join("")}
              </ol>
            </section>
          </div>
          <section class="card">
            <div class="concept-title">
              <h3>25 progressive examples</h3>
              <a class="button-link" href="../index.html#${concept.slug}">Back to main page overview</a>
            </div>
            <div class="example-grid">
              ${concept.examples.map(function (example) {
                return renderExampleCard(example, `${concept.slug}-guide`);
              }).join("")}
            </div>
          </section>
          <section class="section">
            <div class="section-head">
              <h2>0-100 mastery ladder</h2>
              <p>This deep guide expands the concept from the first safe definition to absurd system-level usage.</p>
            </div>
            <div class="section-body">
              <div class="mastery-list">
                ${concept.masterySteps.map(renderMasteryStep).join("")}
              </div>
            </div>
          </section>
        </div>
      </section>
    `;
  }

  function renderExamPage(exam, conceptsBySlug) {
    const relatedConceptCards = exam.relatedConcepts.map(function (slug) {
      const concept = conceptsBySlug[slug];
      const primitive = concept.examples[0];
      const middle = concept.examples[12];
      const absurd = concept.examples[24];
      return `
        <article class="info-card">
          <h3><a class="anchor-link" href="../guides/${concept.slug}.html">${escapeHtml(concept.shortTitle)}</a></h3>
          <p><strong>Definition.</strong> ${escapeHtml(concept.summary[0])}</p>
          <p><strong>How it works here.</strong> ${escapeHtml(concept.examAngle)}</p>
          <p><strong>How to use it.</strong> ${escapeHtml(concept.buildChecklist[0])}</p>
          <ul class="list-tight">
            <li><strong>How to manage it:</strong> ${escapeHtml(concept.managementChecklist[0])}</li>
            <li><strong>Primitive use case:</strong> ${escapeHtml(primitive.title)}</li>
            <li><strong>Middle evolution point:</strong> ${escapeHtml(middle.title)}</li>
            <li><strong>Absurd use case:</strong> ${escapeHtml(absurd.title)}</li>
          </ul>
          <div class="tag-row">
            <a class="button-link" href="../guides/${concept.slug}.html">Open full deep guide</a>
          </div>
        </article>
      `;
    }).join("");

    return `
      <section class="section">
        <div class="section-head">
          <h2>${escapeHtml(exam.title)}</h2>
          <p>${escapeHtml(exam.subtitle)}</p>
        </div>
        <div class="section-body stack-lg">
          <div class="two-column">
            <section class="info-card">
              <h3>What this exam is testing</h3>
              ${exam.overview.map(function (text) {
                return `<p>${escapeHtml(text)}</p>`;
              }).join("")}
            </section>
            <section class="roadmap-card">
              <h3>How to build the answer step by step</h3>
              <ol class="list-tight">
                ${exam.questionFlow.map(function (item) {
                  return `<li>${escapeHtml(item)}</li>`;
                }).join("")}
              </ol>
            </section>
          </div>
          <div class="solution-stack">
            ${exam.sections.map(function (section, index) {
              return renderCodeCard(section.title, section.description, section.code, `${exam.id}-${index}`);
            }).join("")}
          </div>
          <section class="section">
            <div class="section-head">
              <h2>Concept definitions, use, and evolution path</h2>
              <p>Each concept used by the exam links back to its deep guide and shows the path from primitive usage to absurd complexity.</p>
            </div>
            <div class="section-body">
              <div class="definition-grid">${relatedConceptCards}</div>
            </div>
          </section>
        </div>
      </section>
    `;
  }

  function wireCopyButtons(root) {
    root.addEventListener("click", async function (event) {
      const button = event.target.closest("[data-copy-target]");
      if (!button) {
        return;
      }
      const target = document.getElementById(button.getAttribute("data-copy-target"));
      if (!target) {
        return;
      }

      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(target.textContent || "");
        button.textContent = "Copied";
      } catch (error) {
        button.textContent = "Copy failed";
      }
      window.setTimeout(function () {
        button.textContent = original;
      }, 1200);
    });
  }

  window.JavaExamSiteRenderers = {
    renderConceptPreview: renderConceptPreview,
    renderConceptGuide: renderConceptGuide,
    renderExamPage: renderExamPage,
    wireCopyButtons: wireCopyButtons
  };
})();
