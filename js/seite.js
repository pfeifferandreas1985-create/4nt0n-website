/* 4NT-ØN · Good Time Robotics – gemeinsame Seitenlogik: Kopf und Fuß, Sprache DE/EN, Wortmarke, Formular, Videos. */
(function () {
  "use strict";
  var K = window.GTR_KONFIG || { kontaktEmail: "", anmeldungUrl: "" };
  var seite = document.body.getAttribute("data-seite") || "";

  function speicher(name, wert) {
    try {
      if (wert === undefined) return localStorage.getItem(name);
      localStorage.setItem(name, wert);
    } catch (e) { return null; }
  }

  /* ---------- Kopf und Fuß ---------- */
  var NAV = [
    ["index.html#bausatz", "Bausatz", "The Kit", "bausatz"],
    ["index.html#lernen", "Lernen", "Learning", "lernen"],
    ["index.html#technik", "Technik", "Specs", "technik"],
    ["devlog.html", "Devlog", "Devlog", "devlog"],
    ["faq.html", "FAQ", "FAQ", "faq"],
    ["presse.html", "Presse", "Press", "presse"]
  ];
  var kopf = document.getElementById("kopf");
  if (kopf) {
    var links = NAV.map(function (n) {
      return '<a href="' + n[0] + '" data-en="' + n[2] + '"' + (seite === n[3] ? ' aria-current="page"' : "") + ">" + n[1] + "</a>";
    }).join("");
    kopf.className = "kopf";
    kopf.innerHTML =
      '<div class="innen">' +
      '<a class="gtr" href="index.html" aria-label="Good Time Robotics – Startseite">Good Time <span>Robotics</span></a>' +
      '<button class="menue" type="button" aria-expanded="false" aria-controls="nav" aria-label="Menü" data-en-aria-label="Menu">' +
      '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 6h18M3 12h18M3 18h18"/></svg></button>' +
      '<nav class="nav" id="nav" aria-label="Hauptmenü">' + links +
      '<button class="sprache" type="button" aria-label="Sprache wechseln / switch language"><b class="de">DE</b> / <span class="en">EN</span></button></nav>' +
      '<a class="knopf" href="index.html#reservieren"><span data-en="Reserve">Reservieren</span></a>' +
      "</div>";
    var menue = kopf.querySelector(".menue"), nav = kopf.querySelector(".nav");
    menue.addEventListener("click", function () {
      var offen = nav.classList.toggle("offen");
      menue.setAttribute("aria-expanded", offen ? "true" : "false");
    });
    nav.addEventListener("click", function (e) { if (e.target.tagName === "A") { nav.classList.remove("offen"); menue.setAttribute("aria-expanded", "false"); } });
  }

  var fuss = document.getElementById("fuss");
  if (fuss) {
    fuss.className = "fuss";
    fuss.innerHTML =
      '<div class="innen"><div class="fuss-raster">' +
      '<div><div class="gtr">Good Time <span>Robotics</span></div>' +
      '<p style="margin-top:1rem" data-en="Robot kits for people who never stopped building. Designed in Germany.">Roboter-Bausätze für alle, die nie aufgehört haben zu bauen. Entwickelt in Deutschland.</p></div>' +
      '<div><h4>4NT-ØN</h4><ul>' +
      '<li><a href="index.html#bausatz" data-en="The kit">Der Bausatz</a></li>' +
      '<li><a href="index.html#lernen" data-en="How he learns">Wie er lernt</a></li>' +
      '<li><a href="index.html#technik" data-en="Specifications">Technische Daten</a></li>' +
      '<li><a href="index.html#reservieren" data-en="Reserve">Reservieren</a></li></ul></div>' +
      '<div><h4 data-en="Company">Unternehmen</h4><ul>' +
      '<li><a href="devlog.html">Devlog</a></li><li><a href="faq.html">FAQ</a></li>' +
      '<li><a href="presse.html" data-en="Press kit">Presse</a></li>' +
      '<li><a href="index.html#investoren" data-en="Investors">Investoren</a></li></ul></div>' +
      '<div><h4 data-en="Legal">Rechtliches</h4><ul>' +
      '<li><a href="impressum.html" data-en="Legal notice">Impressum</a></li>' +
      '<li><a href="datenschutz.html" data-en="Privacy">Datenschutz</a></li></ul></div>' +
      "</div>" +
      '<div class="fuss-unten"><span>© 2026 Good Time Robotics · <span data-en="All images are renderings or simulation of the current prototype.">Alle Bilder sind Renderings oder Simulation des aktuellen Prototyps.</span></span>' +
      '<span><span data-en="Kinematics based on">Kinematik nach</span> <a href="https://github.com/apirrone/Open_Duck_Mini" rel="noopener">Open Duck Mini v2</a> (Apache-2.0) · <span data-en="Fonts">Schriften</span>: Exo 2, Lexend Zetta, IBM Plex (SIL OFL)</span>' +
      '<span class="plakette" data-en="Best viewed with any browser · since 2026">Optimiert für jeden Browser · seit 2026</span></div></div>';
  }

  /* ---------- Wortmarke: Ø durch die Logo-Null ersetzen ---------- */
  var NULL = '<svg class="wm-null" viewBox="0 0 13 13" aria-hidden="true"><path fill-rule="evenodd" d="M 11.7 13 L 11.8359 12.9929 L 11.9703 12.9716 L 12.1017 12.9364 L 12.2288 12.8876 L 12.35 12.8258 L 12.4641 12.7517 L 12.5699 12.6661 L 12.6661 12.5699 L 12.7517 12.4641 L 12.8258 12.35 L 12.8876 12.2288 L 12.9364 12.1017 L 12.9716 11.9703 L 12.9929 11.8359 L 13 11.7 L 13 1.3 L 12.9929 1.1641 L 12.9716 1.0297 L 12.9364 0.8983 L 12.8876 0.7712 L 12.8258 0.65 L 12.7517 0.5359 L 12.6661 0.4301 L 12.5699 0.3339 L 12.4641 0.2483 L 12.35 0.1742 L 12.2288 0.1124 L 12.1017 0.0636 L 11.9703 0.0284 L 11.8359 0.0071 L 11.7 0 L 1.3 0 L 1.1641 0.0071 L 1.0297 0.0284 L 0.8983 0.0636 L 0.7712 0.1124 L 0.65 0.1742 L 0.5359 0.2483 L 0.4301 0.3339 L 0.3339 0.4301 L 0.2483 0.5359 L 0.1742 0.65 L 0.1124 0.7712 L 0.0636 0.8983 L 0.0284 1.0297 L 0.0071 1.1641 L 0 1.3 L 0 11.7 L 0.0071 11.8359 L 0.0284 11.9703 L 0.0636 12.1017 L 0.1124 12.2288 L 0.1742 12.35 L 0.2483 12.4641 L 0.3339 12.5699 L 0.4301 12.6661 L 0.5359 12.7517 L 0.65 12.8258 L 0.7712 12.8876 L 0.8983 12.9364 L 1.0297 12.9716 L 1.1641 12.9929 L 1.3 13 Z M 1.82 9.8931 L 1.82 1.82 L 9.8931 1.82 Z M 3.1069 11.18 L 11.18 11.18 L 11.18 3.1069 Z"/></svg>';
  document.querySelectorAll(".wm").forEach(function (el) {
    if (el.querySelector("svg")) return;
    el.setAttribute("aria-label", "4NT-ØN");
    el.innerHTML = el.textContent.replace("Ø", NULL);
  });

  /* ---------- Sprache ---------- */
  var ATTR = ["placeholder", "aria-label", "alt", "content", "title"];
  function sprache(l) {
    document.documentElement.lang = l;
    document.querySelectorAll("[data-en]").forEach(function (el) {
      if (el.dataset.de === undefined) el.dataset.de = el.innerHTML;
      el.innerHTML = l === "en" ? el.dataset.en : el.dataset.de;
    });
    ATTR.forEach(function (a) {
      document.querySelectorAll("[data-en-" + a + "]").forEach(function (el) {
        var k = "de" + a.replace(/-./g, function (m) { return m[1].toUpperCase(); }).replace(/^./, function (m) { return m.toUpperCase(); });
        if (el.dataset[k] === undefined) el.dataset[k] = el.getAttribute(a) || "";
        el.setAttribute(a, l === "en" ? el.getAttribute("data-en-" + a) : el.dataset[k]);
      });
    });
    document.querySelectorAll(".sprache").forEach(function (b) {
      b.innerHTML = l === "en" ? '<span class="de">DE</span> / <b class="en">EN</b>' : '<b class="de">DE</b> / <span class="en">EN</span>';
    });
    emails();
    speicher("gtr-sprache", l);
  }
  var gewaehlt = speicher("gtr-sprache") || ((navigator.language || "de").toLowerCase().indexOf("de") === 0 ? "de" : "en");
  document.addEventListener("click", function (e) {
    if (e.target.closest(".sprache")) sprache(document.documentElement.lang === "en" ? "de" : "en");
  });

  /* ---------- Kontaktadresse ---------- */
  function emails() {
    document.querySelectorAll("[data-email]").forEach(function (el) {
      if (K.kontaktEmail) {
        el.innerHTML = '<a href="mailto:' + K.kontaktEmail + (el.dataset.betreff ? "?subject=" + encodeURIComponent(el.dataset.betreff) : "") + '">' + K.kontaktEmail + "</a>";
      } else {
        el.innerHTML = '<span class="platzhalter">' + (document.documentElement.lang === "en" ? "e-mail address coming soon" : "E-Mail-Adresse folgt") + "</span>";
      }
    });
  }
  sprache(gewaehlt);

  /* ---------- Reservierung ---------- */
  var form = document.getElementById("reservierung");
  if (form) {
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var m = form.querySelector(".meldung"), en = document.documentElement.lang === "en";
      if (!form.checkValidity()) { form.reportValidity(); return; }
      if (!K.anmeldungUrl) {
        m.className = "meldung info";
        m.textContent = en ? "Sign-up opens shortly – the mailing list is being set up. Please check back soon."
                           : "Die Anmeldung öffnet in Kürze – die Liste wird gerade eingerichtet. Schau bald wieder vorbei.";
        return;
      }
      var daten = new FormData(form);
      fetch(K.anmeldungUrl, { method: "POST", body: daten, headers: { Accept: "application/json" } })
        .then(function (r) {
          if (!r.ok) throw new Error(r.status);
          m.className = "meldung ok";
          m.textContent = en ? "Almost done: please confirm the link in the e-mail we just sent you."
                             : "Fast geschafft: Bitte bestätige den Link in der E-Mail, die wir dir gerade geschickt haben.";
          form.reset();
        })
        .catch(function () {
          m.className = "meldung info";
          m.textContent = en ? "That did not work. Please try again later." : "Das hat nicht geklappt. Bitte versuch es später noch einmal.";
        });
    });
  }

  /* ---------- Galerie Studio / Nacht ---------- */
  document.querySelectorAll(".reiter").forEach(function (r) {
    r.addEventListener("click", function (e) {
      var b = e.target.closest("button");
      if (!b) return;
      r.querySelectorAll("button").forEach(function (x) { x.setAttribute("aria-selected", x === b ? "true" : "false"); });
      var stil = b.dataset.stil;
      document.querySelectorAll(".galerie img[data-stil]").forEach(function (img) {
        img.src = img.dataset.stil.replace("{stil}", stil);
      });
    });
  });

  /* ---------- Videos erst laden und abspielen, wenn sie sichtbar sind ---------- */
  var still = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var vids = document.querySelectorAll("video[data-src]");
  if ("IntersectionObserver" in window) {
    var io = new IntersectionObserver(function (eintraege) {
      eintraege.forEach(function (en) {
        var v = en.target;
        if (en.isIntersecting) {
          if (!v.src) { v.src = v.dataset.src; }
          if (!still) { var p = v.play(); if (p && p.catch) p.catch(function () {}); }
        } else if (!v.paused) { v.pause(); }
      });
    }, { rootMargin: "200px 0px", threshold: 0.25 });
    vids.forEach(function (v) { io.observe(v); });
  } else {
    vids.forEach(function (v) { v.src = v.dataset.src; });
  }
})();
