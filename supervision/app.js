(() => {
  const $ = (selector, root = document) => root.querySelector(selector);
  const data = window.TIO_SUPERVISION;
  const modal = $("#signin-modal");

  function escapeHtml(value) {
    return String(value ?? "").replace(/[&<>'"]/g, char => ({
      "&": "&amp;",
      "<": "&lt;",
      ">": "&gt;",
      "'": "&#39;",
      '"': "&quot;"
    })[char]);
  }

  $("#public-module-grid").innerHTML = data.modules.map(module => `
    <article class="module-card" style="--module-soft:${module.soft};--module-accent:${module.accent}">
      <div class="module-number" aria-hidden="true">${module.number}</div>
      <div class="module-symbol" aria-hidden="true">
        <span></span><span></span><span></span>
      </div>
      <h3>${escapeHtml(module.title)}</h3>
      <p>${escapeHtml(module.summary)}</p>
    </article>
  `).join("");

  function openSignin() {
    modal.hidden = false;
    setTimeout(() => $("#signin-email").focus(), 20);
  }

  function closeSignin() {
    modal.hidden = true;
  }

  document.addEventListener("click", event => {
    const action = event.target.closest("[data-action]")?.dataset.action;
    if (action === "sign-in") openSignin();
    if (action === "close-signin") closeSignin();
    if (event.target === modal) closeSignin();
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape" && !modal.hidden) closeSignin();
  });

  $("#signin-form").addEventListener("submit", event => {
    event.preventDefault();
    alert("Secure member sign-in will be connected to the training-team access list.");
  });
})();