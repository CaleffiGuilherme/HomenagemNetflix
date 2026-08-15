import './style.css';

// DOM Elements
const heroSection = document.getElementById('heroSection');
const avatarProfile = document.getElementById('avatarProfile');
const heroMainPlayBtn = document.getElementById('heroMainPlayBtn');
const heroInfoBtn = document.getElementById('heroInfoBtn');
const heroFavBtn = document.getElementById('heroFavBtn');
const heroLikeBtn = document.getElementById('heroLikeBtn');
const logoHomeBtn = document.getElementById('logoHomeBtn');

// Carousels
const continueTrack = document.getElementById('continueTrack');
const momentosTrack = document.getElementById('momentosTrack');
const top10Track = document.getElementById('top10Track');
const viagensTrack = document.getElementById('viagensTrack');

// Modal Elements
const netflixModal = document.getElementById('netflixModal');
const modalCard = document.getElementById('modalCard');
const modalCloseBtn = document.getElementById('modalCloseBtn');
const modalHero = document.getElementById('modalHero');
const modalCenterPlayBtn = document.getElementById('modalCenterPlayBtn');
const modalProgressBar = document.getElementById('modalProgressBar');
const modalProgressText = document.getElementById('modalProgressText');
const modalEpCount = document.getElementById('modalEpCount');
const modalContinueBtn = document.getElementById('modalContinueBtn');
const modalVolumeBtn = document.getElementById('modalVolumeBtn');
const modalAddListBtn = document.getElementById('modalAddListBtn');
const modalLikeBtn = document.getElementById('modalLikeBtn');
const modalShareBtn = document.getElementById('modalShareBtn');
const modalDownloadBtn = document.getElementById('modalDownloadBtn');
const selectedEpTitle = document.getElementById('selectedEpTitle');
const selectedEpDesc = document.getElementById('selectedEpDesc');
const episodesRowsContainer = document.getElementById('episodesRowsContainer');

// Search & Subnav
const searchToggleBtn = document.getElementById('searchToggleBtn');
const mobileSearchBar = document.getElementById('mobileSearchBar');
const mobileSearchInput = document.getElementById('mobileSearchInput');
const clearSearchBtn = document.getElementById('clearSearchBtn');
const categoriesChipBtn = document.getElementById('categoriesChipBtn');

// Bottom Nav
const mobileBottomNav = document.getElementById('mobileBottomNav');
const navHome = document.getElementById('navHome');
const navNovidades = document.getElementById('navNovidades');
const navMinhaLista = document.getElementById('navMinhaLista');
const navPerfil = document.getElementById('navPerfil');

// Profiles Screen
const profileScreen = document.getElementById('profileScreen');
const selectProfileBtn = document.getElementById('selectProfileBtn');
const addProfileBtn = document.getElementById('addProfileBtn');
const manageProfilesBtn = document.getElementById('manageProfilesBtn');
const dropdownManageBtn = document.getElementById('dropdownManageBtn');
const dropdownLogoutBtn = document.getElementById('dropdownLogoutBtn');

// 13 Episódios completos com imagens reais da pasta public
const EPISODIOS = [
  {
    num: 1,
    title: 'A Festa',
    duration: '45 min',
    desc: 'No aniversário do Enzo, onde tivemos nossa primeira interação.',
    progressPercent: '100%',
    progressText: '45 de 45min',
    image: '/festa.png',
    tags: ['O Começo', 'Festa', 'Destino'],
    match: '100% Relevante',
    isTravel: false
  },
  {
    num: 2,
    title: 'O Natal',
    duration: '50 min',
    desc: 'A magia natalina ficou ainda mais brilhante com a sua presença. Risadas, luzes e o sentimento lindo surgindo no fundo do coração.',
    progressPercent: '100%',
    progressText: '50 de 50min',
    image: '/WhatsApp Image 2026-07-29 at 10.46.56.jpeg',
    tags: ['Natal', 'Sorrisos', 'Aconchego'],
    match: '99% Relevante',
    isTravel: false
  },
  {
    num: 3,
    title: 'Conversa',
    duration: '40 min',
    desc: 'Horas e horas conversando sobre tudo e sobre nada. A certeza de que tínhamos uma sintonia única, leve e inexplicavelmente profunda.',
    progressPercent: '100%',
    progressText: '40 de 40min',
    image: '/WhatsApp Image 2026-07-29 at 10.46.57.jpeg',
    tags: ['Sintonia', 'Papo', 'Conexão'],
    match: '98% Relevante',
    isTravel: false
  },
  {
    num: 4,
    title: 'Amizade',
    duration: '55 min',
    desc: 'A base sólida de um carinho sincero, cumplicidade e apoio mútuo crescendo dia após dia, transformando o afeto em algo grandioso.',
    progressPercent: '100%',
    progressText: '55 de 55min',
    image: '/WhatsApp Image 2026-07-29 at 10.46.57 (1).jpeg',
    tags: ['Cumplicidade', 'Carinho', 'Lealdade'],
    match: '99% Relevante',
    isTravel: false
  },
  {
    num: 5,
    title: 'Confissão',
    duration: '48 min',
    desc: 'As palavras sinceras ditas do fundo da alma, revelando o sentimento verdadeiro que não dava mais para guardar no peito.',
    progressPercent: '100%',
    progressText: '48 de 48min',
    image: '/WhatsApp Image 2026-07-29 at 10.46.57 (2).jpeg',
    tags: ['Sentimento', 'Coração', 'Verdade'],
    match: '100% Relevante',
    isTravel: false
  },
  {
    num: 6,
    title: 'Aquário',
    duration: '42 min',
    desc: 'Um passeio encantador ao Aquário, cercados de vida e momentos inesquecíveis guardados na memória para sempre.',
    progressPercent: '100%',
    progressText: '42 de 42min',
    image: '/aquario1.jpeg',
    tags: ['Passeio', 'Aquário', 'Memórias'],
    match: '100% Relevante',
    isTravel: true,
    locationTag: 'Passeio Especial'
  },
  {
    num: 7,
    title: 'Namoro',
    duration: '60 min',
    desc: 'O pedido inesquecível e o início oficial do nosso namoro. O sim mais feliz da vida e o começo da nossa jornada!',
    progressPercent: '100%',
    progressText: '60 de 60min',
    image: '/namoro.jpeg',
    tags: ['Pedido', 'Namoro', 'Oficial'],
    match: '100% Relevante',
    isTravel: false
  },
  {
    num: 8,
    title: 'Santo André Parte 1',
    duration: '52 min',
    desc: 'A primeira viagem e os primeiros passos juntos em Santo André, criando memórias afetivas únicas e cheias de amor.',
    progressPercent: '85%',
    progressText: '44 de 52min',
    image: '/santoandrept1.jpeg',
    tags: ['Viagem', 'Santo André', 'Aventura'],
    match: '99% Relevante',
    isTravel: true,
    locationTag: 'Santo André, SP'
  },
  {
    num: 9,
    title: 'Primeira Vez',
    duration: '50 min',
    desc: 'Um momento verdadeiramente único, inesquecível e repleto de carinho, conexão e entrega sincera.',
    progressPercent: '100%',
    progressText: '50 de 50min',
    image: '/primeiravez.jpeg',
    tags: ['Amor', 'Carinho', 'Conexão'],
    match: '100% Relevante',
    isTravel: false
  },
  {
    num: 10,
    title: 'Longa Distância',
    duration: '45 min',
    desc: 'A prova de que o amor verdadeiro não conhece barreiras de quilômetros. Mensagens doces, saudades e encontros ansiosos.',
    progressPercent: '70%',
    progressText: '31 de 45min',
    image: '/WhatsApp Image 2026-07-29 at 10.46.58 (1).jpeg',
    tags: ['Saudade', 'Distância', 'Força'],
    match: '99% Relevante',
    isTravel: false
  },
  {
    num: 11,
    title: 'Curitiba',
    duration: '58 min',
    desc: 'Os parques, o frio gostoso e os momentos inesquecíveis explorando Curitiba de mãos dadas.',
    progressPercent: '90%',
    progressText: '52 de 58min',
    image: '/curitiba.jpeg',
    tags: ['Curitiba', 'Parques', 'Passeio'],
    match: '100% Relevante',
    isTravel: true,
    locationTag: 'Curitiba, PR'
  },
  {
    num: 12,
    title: 'Santo André Parte 2',
    duration: '50 min',
    desc: 'De volta a Santo André, com um amor ainda mais forte, amadurecido e cheio de planos para o nosso futuro.',
    progressPercent: '60%',
    progressText: '30 de 50min',
    image: '/santoandre2.jpeg',
    tags: ['Santo André', 'Planos', 'Futuro'],
    match: '99% Relevante',
    isTravel: true,
    locationTag: 'Santo André, SP'
  },
  {
    num: 13,
    title: '6 Meses Para Todo Sempre',
    duration: '65 min',
    desc: 'Celebrando meio ano do nosso amor verdadeiro, com a certeza absoluta de que é só o começo da nossa eternidade juntos.',
    progressPercent: '35%',
    progressText: '22 de 65min',
    image: '/juntos.jpeg',
    tags: ['6 Meses', 'União', 'Eterno'],
    match: '100% Relevante',
    isTravel: false
  }
];

let selectedEpisodeIndex = 0;

// Seleciona e atualiza visualização do episódio no Modal
function selectEpisode(index) {
  if (index < 0 || index >= EPISODIOS.length) return;
  selectedEpisodeIndex = index;
  const ep = EPISODIOS[index];

  // Atualiza Hero do modal
  if (modalHero) {
    modalHero.style.backgroundImage = `url('${ep.image || '/lulueeu.jpeg'}')`;
  }
  if (modalProgressBar) {
    modalProgressBar.style.width = ep.progressPercent || '50%';
  }
  if (modalProgressText) {
    modalProgressText.textContent = ep.progressText || `${ep.duration}`;
  }

  // Atualiza bloco de destaque
  if (selectedEpTitle) {
    selectedEpTitle.textContent = `T1:E${ep.num} "${ep.title}"`;
  }
  if (selectedEpDesc) {
    selectedEpDesc.textContent = `"${ep.desc}"`;
  }

  // Atualiza active state nas linhas
  if (episodesRowsContainer) {
    const rows = episodesRowsContainer.querySelectorAll('.episode-row');
    rows.forEach((row, i) => {
      if (i === index) {
        row.classList.add('active');
      } else {
        row.classList.remove('active');
      }
    });
  }
}

// Renderiza a lista de episódios no Modal
function renderEpisodesList() {
  if (!episodesRowsContainer) return;
  episodesRowsContainer.innerHTML = '';
  if (modalEpCount) modalEpCount.textContent = `${EPISODIOS.length} episódios`;

  EPISODIOS.forEach((ep, index) => {
    const row = document.createElement('div');
    row.className = `episode-row ${index === selectedEpisodeIndex ? 'active' : ''}`;

    row.innerHTML = `
      <div class="ep-row-num">${ep.num}</div>
      <div class="ep-row-thumb-wrapper">
        <div class="ep-row-thumb" style="background-image: url('${ep.image}')"></div>
        <div class="ep-row-play-badge">
          <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
        </div>
        <div class="ep-row-progress-track">
          <div class="ep-row-progress-bar" style="width: ${ep.progressPercent || '50%'}"></div>
        </div>
      </div>
      <div class="ep-row-info">
        <div class="ep-row-top">
          <span class="ep-row-title">${ep.num}. ${ep.title}</span>
          <span class="ep-row-duration">${ep.duration}</span>
        </div>
        <p class="ep-row-desc">${ep.desc}</p>
      </div>
      <button class="ep-row-download-btn" title="Baixar Episódio" aria-label="Baixar">
        <svg viewBox="0 0 24 24"><path fill="currentColor" d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96zM17 13l-5 5-5-5h3V9h4v4h3z"/></svg>
      </button>
    `;

    row.addEventListener('click', (e) => {
      if (e.target.closest('.ep-row-download-btn')) {
        e.stopPropagation();
        const btn = e.target.closest('.ep-row-download-btn');
        btn.style.color = 'var(--nf-green)';
        return;
      }
      selectEpisode(index);
    });

    episodesRowsContainer.appendChild(row);
  });
}

// Abrir e Fechar Modal
function openNetflixModal(epIndex = 0) {
  if (!netflixModal) return;
  renderEpisodesList();
  selectEpisode(epIndex);
  netflixModal.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeNetflixModal() {
  if (!netflixModal) return;
  netflixModal.classList.remove('active');
  document.body.style.overflow = '';
}

// Renderizar Carrosséis da Página Principal
function renderCarousels() {
  // 1. Continuar Assistindo (Top episódios recentes)
  if (continueTrack) {
    continueTrack.innerHTML = '';
    const continueList = [EPISODIOS[12], EPISODIOS[11], EPISODIOS[10], EPISODIOS[7], EPISODIOS[6], EPISODIOS[0]];
    continueList.forEach((ep) => {
      const card = document.createElement('div');
      card.className = 'continue-card';
      card.innerHTML = `
        <div class="continue-thumb-wrapper" style="background-image: url('${ep.image}')">
          <div class="continue-play-overlay">
            <div class="continue-play-btn">
              <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
            </div>
          </div>
          <div class="continue-progress-track">
            <div class="continue-progress-bar" style="width: ${ep.progressPercent}"></div>
          </div>
        </div>
        <div class="continue-card-bottom">
          <div class="continue-card-info">
            <span class="continue-card-title">T1:E${ep.num} ${ep.title}</span>
            <span class="continue-card-ep">${ep.progressText}</span>
          </div>
          <button class="continue-card-action" title="Detalhes" aria-label="Detalhes">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/></svg>
          </button>
        </div>
      `;
      card.addEventListener('click', () => {
        const idx = EPISODIOS.findIndex(item => item.num === ep.num);
        openNetflixModal(idx >= 0 ? idx : 0);
      });
      continueTrack.appendChild(card);
    });
  }

  // 2. Momentos Inesquecíveis (Retrato 2:3)
  if (momentosTrack) {
    momentosTrack.innerHTML = '';
    EPISODIOS.forEach((ep, index) => {
      const card = document.createElement('div');
      card.className = 'portrait-card';
      card.style.backgroundImage = `url('${ep.image}')`;
      card.innerHTML = `
        <div class="portrait-card-gradient"></div>
        <div class="portrait-card-content">
          <span class="portrait-card-badge">${ep.match}</span>
          <div class="portrait-card-title">${ep.title}</div>
        </div>
      `;
      card.addEventListener('click', () => openNetflixModal(index));
      momentosTrack.appendChild(card);
    });
  }

  // 3. Top 10 com Números Gigantes
  if (top10Track) {
    top10Track.innerHTML = '';
    // Top 10 momentos selecionados
    const top10Indices = [6, 12, 0, 5, 10, 7, 8, 11, 1, 4]; // Namoro, 6 Meses, Festa, Aquário, Curitiba, etc.
    top10Indices.forEach((epIdx, rank) => {
      const ep = EPISODIOS[epIdx];
      const rankNum = rank + 1;
      const card = document.createElement('div');
      card.className = 'top10-card';

      // SVG estilizado para os números característicos da Netflix
      const svgNum = `
        <svg class="top10-num-svg" viewBox="0 0 60 90">
          <text x="0" y="78" font-size="82" font-weight="900" font-family="'Bebas Neue', Arial, sans-serif" fill="#111" stroke="#555" stroke-width="3">${rankNum}</text>
        </svg>
      `;

      card.innerHTML = `
        ${svgNum}
        <div class="top10-poster" style="background-image: url('${ep.image}')">
          <div class="top10-poster-gradient"></div>
          <div class="top10-poster-title">${ep.title}</div>
        </div>
      `;

      card.addEventListener('click', () => openNetflixModal(epIdx));
      top10Track.appendChild(card);
    });
  }

  // 4. Momentos
  if (viagensTrack) {
    viagensTrack.innerHTML = '';
    const travels = EPISODIOS.filter(ep => ep.isTravel || ep.num === 1 || ep.num === 7 || ep.num === 13);
    travels.forEach(ep => {
      const card = document.createElement('div');
      card.className = 'landscape-card';
      card.style.backgroundImage = `url('${ep.image}')`;
      card.innerHTML = `
        <div class="landscape-card-gradient"></div>
        <div class="landscape-card-content">
          <span class="landscape-card-tag">${ep.locationTag || ep.tags[0]}</span>
          <h4 class="landscape-card-title">${ep.title}</h4>
        </div>
      `;
      card.addEventListener('click', () => {
        const idx = EPISODIOS.findIndex(item => item.num === ep.num);
        openNetflixModal(idx >= 0 ? idx : 0);
      });
      viagensTrack.appendChild(card);
    });
  }
}

// Event Listeners do Modal
if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeNetflixModal);
if (modalContinueBtn) modalContinueBtn.addEventListener('click', () => openNetflixModal(selectedEpisodeIndex));
if (modalCenterPlayBtn) modalCenterPlayBtn.addEventListener('click', () => openNetflixModal(selectedEpisodeIndex));
if (heroMainPlayBtn) heroMainPlayBtn.addEventListener('click', () => openNetflixModal(0));
if (heroInfoBtn) heroInfoBtn.addEventListener('click', () => openNetflixModal(0));

if (netflixModal) {
  netflixModal.addEventListener('click', (e) => {
    if (e.target === netflixModal) closeNetflixModal();
  });
}

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    closeNetflixModal();
    if (avatarDropdown) avatarDropdown.classList.remove('active');
    if (notifDropdown) notifDropdown.classList.remove('active');
  }
});

// Dropdown do Avatar
const avatarDropdown = document.getElementById('avatarDropdown');
if (avatarProfile && avatarDropdown) {
  avatarProfile.addEventListener('click', (e) => {
    e.stopPropagation();
    avatarDropdown.classList.toggle('active');
    if (notifDropdown) notifDropdown.classList.remove('active');
  });

  document.addEventListener('click', (e) => {
    if (!avatarDropdown.contains(e.target) && e.target !== avatarProfile) {
      avatarDropdown.classList.remove('active');
    }
  });
}

if (dropdownManageBtn) {
  dropdownManageBtn.addEventListener('click', () => {
    avatarDropdown.classList.remove('active');
    showProfileScreen();
  });
}

if (dropdownLogoutBtn) {
  dropdownLogoutBtn.addEventListener('click', () => {
    avatarDropdown.classList.remove('active');
    showProfileScreen();
  });
}

// Notificações
const notifBtn = document.getElementById('notifBtn');
const notifDropdown = document.getElementById('notifDropdown');
const notifBadge = document.getElementById('notifBadge');

if (notifBtn && notifDropdown) {
  notifBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    notifDropdown.classList.toggle('active');
    if (avatarDropdown) avatarDropdown.classList.remove('active');
    if (notifBadge) notifBadge.classList.add('read');
  });

  document.addEventListener('click', (e) => {
    if (!notifDropdown.contains(e.target) && !notifBtn.contains(e.target)) {
      notifDropdown.classList.remove('active');
    }
  });
}

// Botões interativos de Like e Minha Lista
document.addEventListener('click', (e) => {
  const target = e.target.closest('.btn-fav, .icon-circle, .modal-action-pill');
  if (!target) return;

  const id = target.id || '';
  if (id === 'heroFavBtn' || id === 'modalAddListBtn') {
    target.classList.toggle('active');
    const isFav = target.classList.contains('active');
    const span = target.querySelector('span');
    if (span) {
      span.textContent = isFav ? 'Na Minha Lista' : 'Minha lista';
    }
  } else if (id === 'heroLikeBtn' || id === 'modalLikeBtn') {
    target.classList.toggle('active');
  } else if (id === 'modalShareBtn') {
    if (navigator.share) {
      navigator.share({
        title: 'Nossa História - Netflix',
        text: 'Nossa história de amor na Netflix!',
        url: window.location.href
      }).catch(() => {});
    } else {
      target.style.color = 'var(--nf-green)';
      setTimeout(() => { target.style.color = ''; }, 1500);
    }
  } else if (id === 'modalDownloadBtn') {
    target.classList.toggle('active');
  }
});

// Som no Modal
let isMuted = false;
if (modalVolumeBtn) {
  modalVolumeBtn.addEventListener('click', () => {
    isMuted = !isMuted;
    modalVolumeBtn.style.opacity = isMuted ? '0.5' : '1';
  });
}

// Busca Mobile
if (searchToggleBtn && mobileSearchBar) {
  searchToggleBtn.addEventListener('click', () => {
    mobileSearchBar.classList.toggle('active');
    if (mobileSearchBar.classList.contains('active')) {
      mobileSearchInput?.focus();
    }
  });
}

if (clearSearchBtn && mobileSearchInput) {
  clearSearchBtn.addEventListener('click', () => {
    mobileSearchInput.value = '';
    filterEpisodes('');
  });
}

if (mobileSearchInput) {
  mobileSearchInput.addEventListener('input', (e) => {
    filterEpisodes(e.target.value.toLowerCase());
  });
}

function filterEpisodes(query) {
  if (!query) {
    renderCarousels();
    return;
  }
  const filtered = EPISODIOS.filter(ep => 
    ep.title.toLowerCase().includes(query) || 
    ep.desc.toLowerCase().includes(query) ||
    ep.tags.some(t => t.toLowerCase().includes(query))
  );

  if (momentosTrack) {
    momentosTrack.innerHTML = '';
    filtered.forEach((ep) => {
      const idx = EPISODIOS.findIndex(i => i.num === ep.num);
      const card = document.createElement('div');
      card.className = 'portrait-card';
      card.style.backgroundImage = `url('${ep.image}')`;
      card.innerHTML = `
        <div class="portrait-card-gradient"></div>
        <div class="portrait-card-content">
          <span class="portrait-card-badge">${ep.match}</span>
          <div class="portrait-card-title">${ep.title}</div>
        </div>
      `;
      card.addEventListener('click', () => openNetflixModal(idx >= 0 ? idx : 0));
      momentosTrack.appendChild(card);
    });
  }
}

// Bottom Nav Navigation Handler
if (mobileBottomNav) {
  const bottomItems = mobileBottomNav.querySelectorAll('.bottom-nav-item');
  bottomItems.forEach(item => {
    item.addEventListener('click', () => {
      bottomItems.forEach(i => i.classList.remove('active'));
      item.classList.add('active');

      const target = item.getAttribute('data-target');
      if (target === 'home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else if (target === 'novidades') {
        const sec = document.getElementById('sectionTop10');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'minha-lista') {
        const sec = document.getElementById('sectionMomentos');
        if (sec) sec.scrollIntoView({ behavior: 'smooth' });
      } else if (target === 'perfil') {
        showProfileScreen();
      }
    });
  });
}

// Filter chips
if (categoriesChipBtn) {
  categoriesChipBtn.addEventListener('click', () => {
    const sec = document.getElementById('sectionViagens');
    if (sec) sec.scrollIntoView({ behavior: 'smooth' });
  });
}

if (logoHomeBtn) {
  logoHomeBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}

// Controle de Perfis
function showMainApp() {
  if (profileScreen) {
    profileScreen.classList.add('hidden');
  }
}

function showProfileScreen() {
  if (profileScreen) {
    profileScreen.classList.remove('hidden');
  }
}

if (selectProfileBtn) selectProfileBtn.addEventListener('click', showMainApp);
if (manageProfilesBtn) manageProfilesBtn.addEventListener('click', showMainApp);
if (addProfileBtn) addProfileBtn.addEventListener('click', showMainApp);

// Intro Netflix com Áudio
const netflixIntroContainer = document.getElementById('netflixIntroContainer');
const introAudio = new Audio('/logo.mp3');
introAudio.volume = 1.0;

function startAutoAudio() {
  introAudio.currentTime = 0;
  introAudio.play().catch(() => {
    const forceAudio = () => {
      introAudio.play().catch(() => {});
      window.removeEventListener('click', forceAudio);
      window.removeEventListener('touchstart', forceAudio);
    };
    window.addEventListener('click', forceAudio, { once: true });
    window.addEventListener('touchstart', forceAudio, { once: true });
  });
}

if (netflixIntroContainer) {
  startAutoAudio();
  setTimeout(() => {
    netflixIntroContainer.classList.add('fade-out');
  }, 3800);
}

// Inicialização
renderCarousels();
renderEpisodesList();
