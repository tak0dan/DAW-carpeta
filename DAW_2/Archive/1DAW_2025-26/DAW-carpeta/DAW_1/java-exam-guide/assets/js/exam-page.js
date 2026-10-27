(function () {
  const data = window.JavaExamSiteData;
  const renderers = window.JavaExamSiteRenderers;
  const mount = document.getElementById("exam-content");

  if (!data || !renderers || !mount) {
    return;
  }

  const examId = mount.getAttribute("data-exam-id");
  const exam = data.exams.find(function (item) {
    return item.id === examId;
  });

  if (!exam) {
    mount.innerHTML = `<section class="section"><div class="section-body"><p>Exam not found.</p></div></section>`;
    return;
  }

  const conceptMap = data.concepts.reduce(function (accumulator, concept) {
    accumulator[concept.slug] = concept;
    return accumulator;
  }, {});

  mount.innerHTML = renderers.renderExamPage(exam, conceptMap);
  renderers.wireCopyButtons(document.body);
})();
