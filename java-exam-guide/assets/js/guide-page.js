(function () {
  const data = window.JavaExamSiteData;
  const renderers = window.JavaExamSiteRenderers;
  const mount = document.getElementById("concept-content");

  if (!data || !renderers || !mount) {
    return;
  }

  const slug = mount.getAttribute("data-concept-slug");
  const concept = data.concepts.find(function (item) {
    return item.slug === slug;
  });

  if (!concept) {
    mount.innerHTML = `<section class="section"><div class="section-body"><p>Concept not found.</p></div></section>`;
    return;
  }

  mount.innerHTML = renderers.renderConceptGuide(concept);
  renderers.wireCopyButtons(document.body);
})();
