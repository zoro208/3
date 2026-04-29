<!-- index.html -->
<!DOCTYPE html>
<html lang="kk">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Gulzada Lash Studio</title>

  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>

  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css" />
</head>

<body>
  <!-- Background décor -->
  <div class="bg-decor" aria-hidden="true">
    <span class="blob blob-1"></span>
    <span class="blob blob-2"></span>
    <span class="grain"></span>
  </div>

  <header class="site-header" id="header">
    <nav class="nav">
      <a class="logo" href="#home" aria-label="Gulzada Lash Studio">
        <span class="logo-title">Gulzada</span>
        <span class="logo-sub">Lash Studio</span>
      </a>

      <ul class="nav-links" id="navLinks">
        <li><a class="nav-link" href="#home">Басты бет</a></li>
        <li><a class="nav-link" href="#effects">Эффекттер</a></li>
        <li><a class="nav-link" href="#prices">Баға</a></li>
        <li><a class="nav-link" href="#care">Күтім</a></li>
        <li><a class="nav-link" href="#works">Мастерлер және жұмыстары</a></li>
        <li><a class="nav-link" href="#contact">Байланыс</a></li>
      </ul>

      <div class="nav-actions">
        <button class="btn btn-ghost" id="bookBtnTop" type="button">Жазылу</button>
        <button class="burger" id="burgerMenu" type="button" aria-label="Мәзір">☰</button>
      </div>
    </nav>
  </header>

  <main>
    <!-- HERO -->
    <section class="hero" id="home">
      <div class="container hero-grid">
        <div class="hero-content">
          <div class="badge">Premium beauty • Қарағанды</div>
          <h1 class="hero-title">
            Кірпіктерге нәзік күтім, <span class="accent">әдемі көзқарас</span>
          </h1>
          <p class="hero-text">
            Табиғи эффекттен бастап “2D/3D volume”-ға дейін — сенің стиліңе сай мінсіз образ.
            Стерильді құралдар, сапалы материал, жайлы атмосфера.
          </p>

          <div class="hero-cta">
            <button class="btn btn-primary" id="bookBtn" type="button">Онлайн жазылу</button>
            <a class="btn btn-outline" href="#prices">Бағаны көру</a>
          </div>

          <div class="hero-stats">
            <div class="stat">
              <div class="stat-num">+500</div>
              <div class="stat-label">қанағаттанған клиент</div>
            </div>
            <div class="stat">
              <div class="stat-num">4.9★</div>
              <div class="stat-label">орташа баға</div>
            </div>
            <div class="stat">
              <div class="stat-num">60 мин</div>
              <div class="stat-label">орташа процедура</div>
            </div>
          </div>
        </div>

        <div class="hero-visual">
          <div class="card photo-card">
            <img
              src="https://img.kwcdn.com/product/2029deb2d4/bf31ba32-2d7f-43ab-b648-13d840bb6065_800x800.jpeg?imageMogr2/auto-orient%7CimageView2/2/w/800/q/70/format/webp"
              alt="Gulzada Lash Studio — жұмыстар"
              loading="lazy"
            />
            <div class="photo-caption">
              <div class="cap-title">Natural & Volume</div>
              <div class="cap-sub">Жұмыс фотолары</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- EFFECTS -->
    <section class="section" id="effects">
      <div class="container">
        <div class="section-head">
          <h2>Эффекттер</h2>
          <p>Саған сәйкес форманы және көлемді таңдаймыз.</p>
        </div>

        <div class="grid cards-3">
          <article class="card feature">
            <h3>Natural</h3>
            <p>Күнделікті стильге арналған табиғи ұзындық пен қалыңдық.</p>
            <ul class="list">
              <li>Жұмсақ көрініс</li>
              <li>Көз формасын ашады</li>
              <li>Ұзаққа шыдайды</li>
            </ul>
          </article>

          <article class="card feature">
            <h3>2D / 3D Volume</h3>
            <p>Көлемді эффект — ерекше мереке немесе фотосессияға мінсіз.</p>
            <ul class="list">
              <li>Көлем қосады</li>
              <li>Көзіңді “үлкейтеді”</li>
              <li>Стильді акцент</li>
            </ul>
          </article>

          <article class="card feature">
            <h3>Fox / Cat Effect</h3>
            <p>Сыртқы бұрышты ұзарту арқылы “lift” әсерін береді.</p>
            <ul class="list">
              <li>“Сызық” эффект</li>
              <li>Көзді тартымды етеді</li>
              <li>Тренд стиль</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- PRICES -->
    <section class="section" id="prices">
      <div class="container">
        <div class="section-head">
          <h2>Баға</h2>
          <p>Қарапайым әрі түсінікті. Төлем — процедурадан кейін.</p>
        </div>

        <div class="grid cards-3">
          <article class="card price">
            <div class="price-top">
              <h3>Classic</h3>
              <div class="price-value">7 000 ₸</div>
            </div>
            <p class="muted">Табиғи образ, ұқыпты көрініс.</p>
            <button class="btn btn-primary full" data-book="Classic">Жазылу</button>
          </article>

          <article class="card price popular">
            <div class="pill">Ең көп таңдалады</div>
            <div class="price-top">
              <h3>2D / 3D</h3>
              <div class="price-value">10 000 ₸</div>
            </div>
            <p class="muted">Көлемді әрі әдемі акцент.</p>
            <button class="btn btn-primary full" data-book="2D / 3D">Жазылу</button>
          </article>

          <article class="card price">
            <div class="price-top">
              <h3>Lift / Lamination</h3>
              <div class="price-value">8 000 ₸</div>
            </div>
            <p class="muted">Табиғи кірпікті көтеру, күтім.</p>
            <button class="btn btn-primary full" data-book="Lift / Lamination">Жазылу</button>
          </article>
        </div>

        <div class="note">
          * Баға қала/материал және кірпіктің жағдайына байланысты өзгеруі мүмкін.
        </div>
      </div>
    </section>

    <!-- CARE -->
    <section class="section" id="care">
      <div class="container">
        <div class="section-head">
          <h2>Күтім</h2>
          <p>Нәтижені ұзақ сақтауға көмектесетін қарапайым ережелер.</p>
        </div>

        <div class="grid cards-2">
          <article class="card">
            <h3>Процедурадан кейін</h3>
            <ul class="list">
              <li>24 сағат су тигізбеңіз</li>
              <li>Майлы крем/май қолданбаңыз</li>
              <li>Көзді қатты уқаламаңыз</li>
            </ul>
          </article>

          <article class="card">
            <h3>Күнделікті</h3>
            <ul class="list">
              <li>Арнайы щеткамен тараңыз</li>
              <li>Мицеллярлы сумен жұмсақ тазалаңыз</li>
              <li>3–4 аптада коррекция жасаңыз</li>
            </ul>
          </article>
        </div>
      </div>
    </section>

    <!-- WORKS -->
    <section class="section" id="works">
      <div class="container">
        <div class="section-head">
          <h2>Мастерлер және жұмыстары</h2>
          <p>Кәсіби мамандар, стерильділік және сапа — басты қағида.</p>
        </div>

        <div class="grid cards-3">
          <article class="card mini">
            <h3>Gulzada</h3>
            <p class="muted">Top мастер • 3+ жыл тәжірибе</p>
            <div class="chip-row">
              <span class="chip">Natural</span>
              <span class="chip">Volume</span>
              <span class="chip">Lamination</span>
            </div>
          </article>

          <article class="card mini">
            <h3>Клиент пікірлері</h3>
            <p class="quote">“Өте әдемі, табиғи шықты. Қолдарыңыз дерт көрмесін!”</p>
            <p class="muted">— Айым</p>
          </article>

          <article class="card mini">
            <h3>Жұмыс уақыты</h3>
            <p class="muted">Дс–Сб: 10:00–19:00</p>
            <p class="muted">Жс: демалыс</p>
            <a class="link" href="#contact">Карта/байланыс →</a>
          </article>
        </div>
      </div>
    </section>

    <!-- CONTACT -->
    <section class="section" id="contact">
      <div class="container">
        <div class="section-head">
          <h2>Байланыс</h2>
          <p>Сұрақ бар ма? Хабарласыңыз — көмектесеміз.</p>
        </div>

        <div class="grid cards-2">
          <article class="card">
            <h3>Контакт</h3>
         <p class="muted">
            Телефон:
            <a class="link" href="https://wa.me/77711927574" target="_blank">
                +7 771 192 7574
            </a>
        </p>
            <p class="muted">Instagram: <a class="link" href="https://www.instagram.com/lashstudio_gulzada" target="_blank" rel="noopener"> @gulzada_lash</a></p>
            <p class="muted">Мекен-жай: Астана қ., Қожахметов 52Б</p>
            <button class="btn btn-primary" id="bookBtnBottom" type="button">Жазылу</button>
          </article>

          <article class="card">
            <h3>Жедел хабарлама</h3>
            <form class="form" id="quickForm">
              <label>
                <span>Атыңыз</span>
                <input type="text" name="name" placeholder="Мысалы: Айгерім" required />
              </label>
              <label>
                <span>Телефон</span>
                <input type="tel" name="phone" placeholder="+7 7xx xxx xx xx" required />
              </label>
              <button class="btn btn-outline full" type="submit">Жіберу</button>
              <p class="form-note">Жібергеннен кейін менеджер сізбен хабарласады.</p>
            </form>
          </article>
        </div>
      </div>
    </section>

    <footer class="footer">
      <div class="container footer-row">
        <div>©️ <span id="year"></span> Gulzada Lash Studio</div>
        <a class="link" href="#home">Жоғарыға ↑</a>
      </div>
    </footer>
  </main>

  <!-- MODAL -->
  <div class="modal" id="modal" aria-hidden="true">
    <div class="modal-backdrop" data-close="true"></div>
    <div class="modal-card" role="dialog" aria-modal="true" aria-label="Жазылу формасы">
      <div class="modal-head">
        <h3>Жазылу</h3>
        <button class="icon-btn" id="modalClose" type="button" aria-label="Жабу">✕</button>
      </div>

      <form class="form" id="bookForm">
        <label>
          <span>Қызмет</span>
          <select name="service" id="serviceSelect" required>
            <option value="Classic">Classic</option>
            <option value="2D / 3D">2D / 3D</option>
            <option value="Lift / Lamination">Lift / Lamination</option>
          </select>
        </label>

        <label>
          <span>Атыңыз</span>
          <input type="text" name="name" placeholder="Есіміңіз" required />
        </label>

        <label>
          <span>Телефон</span>
          <input type="tel" name="phone" placeholder="+7 771 192 7574" required />
        </label>

        <label>
          <span>Күні/уақыты (қалауыңыз)</span>
          <input type="text" name="time" placeholder="Мысалы: Сенбі 14:00" />
        </label>

        <button class="btn btn-primary full" type="submit">Жіберу</button>
        <p class="form-note">Жібергеннен кейін сізге хабарласамыз.</p>
      </form>
    </div>
  </div>

  <script src="script.js"></script>
</body>

</html>
