(() => {
  const programs = window.TIO_ACADEMY_PROGRAMS || [];
  const $ = (selector, root = document) => root.querySelector(selector);

  const escapeHtml = value => String(value ?? "").replace(/[&<>'"]/g, char => ({
    "&":"&amp;",
    "<":"&lt;",
    ">":"&gt;",
    "'":"&#39;",
    '"':"&quot;"
  })[char]);

  const illustrations = {
    people: '<svg viewBox="0 0 210 160" aria-hidden="true"><circle cx="64" cy="48" r="25"/><circle cx="150" cy="42" r="23"/><circle cx="106" cy="103" r="30"/><path d="M25 141c3-33 19-51 39-51s36 18 39 51M119 140c3-32 16-48 32-48 17 0 32 16 35 48M56 156c4-38 22-59 50-59s47 21 51 59"/></svg>',
    path: '<svg viewBox="0 0 210 160" aria-hidden="true"><path d="M22 123C53 80 67 128 103 82s50-16 82-57"/><circle cx="22" cy="123" r="12"/><circle cx="103" cy="82" r="12"/><circle cx="185" cy="25" r="12"/><path d="M162 25h23v23"/></svg>',
    rhythm: '<svg viewBox="0 0 210 160" aria-hidden="true"><path d="M16 87c24-57 48 58 77 0s51 56 101-4"/><path d="M22 118c30-35 47 27 72-6s50 27 91-6"/><circle cx="48" cy="46" r="15"/><circle cx="165" cy="45" r="15"/></svg>',
    roots: '<svg viewBox="0 0 210 160" aria-hidden="true"><path d="M105 145V42M105 67C81 54 69 36 62 14M105 81c24-18 40-38 47-64M105 98c-22 10-39 28-54 54M105 105c24 12 41 28 53 49"/><circle cx="62" cy="14" r="12"/><circle cx="152" cy="17" r="12"/></svg>',
    foundation: '<svg viewBox="0 0 210 160" aria-hidden="true"><path d="M28 128h154M42 111h126M57 94h96M72 77h66M88 60h34"/><path d="M34 128l71-91 71 91"/></svg>'
  };

  const featured = programs.filter(program => program.id === "supervision" || program.id === "minor-consent");
  const coming = programs.filter(program => program.status === "coming-soon");
  const foundations = programs.find(program => program.id === "foundations");

  const featuredHost = $("#featured-programs");
  if (featuredHost) {
    featuredHost.innerHTML = featured.map((program, index) => {
      const ce = program.ce ? '<span>' + escapeHtml(program.ce) + '</span>' : '';
      return '<article class="feature-story ' + (index % 2 ? 'feature-story-reverse' : '') + '" style="--accent:' + program.accent + ';--soft:' + program.soft + '">' +
        '<div class="feature-visual">' +
          '<div class="feature-orbit orbit-one"></div>' +
          '<div class="feature-orbit orbit-two"></div>' +
          '<div class="feature-icon">' + illustrations[program.art] + '</div>' +
          '<span class="feature-index">0' + (index + 1) + '</span>' +
        '</div>' +
        '<div class="feature-copy">' +
          '<p class="eyebrow">' + escapeHtml(program.eyebrow) + '</p>' +
          '<h3>' + escapeHtml(program.title) + '</h3>' +
          '<div class="meta-row" aria-label="' + escapeHtml(program.title) + ' details">' +
            '<span>' + escapeHtml(program.format) + '</span>' +
            '<span>' + escapeHtml(program.price) + '</span>' +
            ce +
          '</div>' +
          '<p class="feature-summary">' + escapeHtml(program.summary) + '</p>' +
          '<p class="audience"><strong>For:</strong> ' + escapeHtml(program.audience) + '</p>' +
          '<a class="text-link" href="' + program.href + '">Explore ' + escapeHtml(program.title) + ' <span aria-hidden="true">→</span></a>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  const comingHost = $("#coming-programs");
  if (comingHost) {
    comingHost.innerHTML = coming.map(program => {
      const subject = encodeURIComponent("TIO Academy interest: " + program.title);
      const body = encodeURIComponent("Please add me to the interest list for " + program.title + " and let me know when new learning is available.");
      return '<article class="coming-panel" style="--accent:' + program.accent + ';--soft:' + program.soft + '">' +
        '<div class="coming-visual"><div class="coming-art">' + illustrations[program.art] + '</div></div>' +
        '<div class="coming-copy">' +
          '<span class="status-pill">Coming soon</span>' +
          '<h3>' + escapeHtml(program.title) + '</h3>' +
          '<p>' + escapeHtml(program.summary) + '</p>' +
          '<p class="coming-format">' + escapeHtml(program.format) + '</p>' +
          '<div class="button-row">' +
            '<a class="button button-secondary" href="' + program.href + '">See what’s coming</a>' +
            '<a class="button button-plain" href="mailto:info@traumainformedoregon.org?subject=' + subject + '&body=' + body + '">Notify me</a>' +
          '</div>' +
        '</div>' +
      '</article>';
    }).join('');
  }

  const foundationsHost = $("#foundations-link");
  if (foundationsHost && foundations) {
    foundationsHost.innerHTML =
      '<div class="foundation-visual">' + illustrations[foundations.art] + '</div>' +
      '<div class="foundation-copy">' +
        '<p class="eyebrow eyebrow-light">' + escapeHtml(foundations.eyebrow) + '</p>' +
        '<h2 id="foundation-title">' + escapeHtml(foundations.title) + '</h2>' +
        '<p>' + escapeHtml(foundations.summary) + '</p>' +
      '</div>' +
      '<a class="button button-light" href="' + foundations.href + '">Open Foundations</a>';
  }
})();