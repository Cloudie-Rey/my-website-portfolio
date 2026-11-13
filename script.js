import { getHolidayThemes } from './holiday-calendar.js';

const $ = selector => document.querySelector(selector);
const T = window.THREE;
const isLocalDevelopment = location.hostname === 'localhost'
  || location.hostname === '127.0.0.1'
  || location.hostname.endsWith('.app.github.dev');


const D = {
 resume: {
    title: 'Resume & Education',
    code: 'RESUME.EXE',
    intro: 'Mechanical Engineering undergraduate at the Colorado School of Mines with a concentration in Automation and Controls, active in robotics research and hardware fabrication.(Documents are always up to date!)',
    cards: [
      ['Education', 'Colorado School of Mines · B.S. Mechanical Engineering (Aug 2026 – May 2029)', 'DEGREE'],
      ['Core Skills', 'Python, MATLAB, C#, Arduino, Raspberry Pi, SolidWorks, OpenCV', 'STACK']
    ],
    rows: [
      ['2026–Pres.', 'Undergraduate Research Assistant', 'MIRRORLabs (Mines Interactive Robotics Research)'],
      ['2025', 'Summer Shadow Program Intern', 'Burns & McDonnell'],
      ['2024', 'Aerospace Intern', 'Colorado Space Business Roundtable (CSBR/ASA)'],
      ['2023–2026', 'Founder & Instructor', 'Code Connect Educational Non-Profit'],
    ],
   links: [
      ['Download Resume', 'public/Resume.pdf'],
      ['Download CV', 'public/CV.pdf']
    ]
  },
  github: {
    title: 'Technical Projects',
    code: 'TECH.SYS',
    intro: 'Robotics, computer vision, and hardware engineering projects.',
    cards: [
      ['The Kraken Sound Sensor', 'Acoustic search-and-rescue sensing platform to detect human voice frequencies under rubble.', 'ROBOTICS · MINES'],
      ['Lucky Charm AI Vision', 'Python & OpenCV computer vision assistant running on a Raspberry Pi hardware stack.', 'PYTHON · OPENCV'],
      ['TSA UAV Drone', 'Custom drone with mechanical claw payload (3rd Place Districts Bronze).', 'DRONE DESIGN'],
      ['Code Connect Platform', 'Official web platform deployed via Vercel with GitHub version control.', 'WEBGL/JS']
    ],
    link: ['GitHub Profile', 'https://github.com/Cloudie-Rey']
  },
  business: {
    title: 'Leadership, Side Hustles, & Ventures',
    code: 'VENTURES.DAT',
    intro: 'Industry internships, non-profit founding, and professional interpretation work.',
    cards: [
      ['Code Connect', 'Co-founded and led an educational non-profit providing 70+ instructional hours to 80+ students.', 'FOUNDER'],
      ['Nexus Language', 'Employed as a paid professional on-site Tamil interpreter for schools and developmental screenings.', 'INTERPRETER'],
      ['Jetson Accelerator', 'Selected for a 7% acceptance rate startup accelerator; executed mobile QA testing and MVP strategy.', 'STARTUP INTERN']
    ],
  },
  games: {
    title: 'Games & Playable Projects',
    code: 'ARCADE.BIN',
    intro: "Games I've contributed to or developed.",
    cards: [
      ['Internal Reflection', 'Two-player cooperative puzzle game focusing on communication mechanics.', 'UNITY · TSA 2025'],
      ['State 1st Place', 'Awarded 1st Place at the TSA State Conference for Video Game Design.', 'AWARD'],
      ['National 3rd Place', 'Awarded 3rd Place at the TSA National Conference for Video Game Design.', 'NATIONAL']
    ],
    rows: [
      ['The Spellbound Assassins (TSA)', '<a href="https://scratch.mit.edu/projects/1216822994" target="_blank" rel="noopener">Play on Scratch</a>', 'SCRATCH'],
      ["Alvin's Endless Adventure", '<a href="https://flowlab.io/game/play/2232462" target="_blank" rel="noopener">Play on Flowlab</a>', 'FLOWLAB'],
      ['Internal Reflection', '<a href="https://play.unity.com/en/games/13111446-5ec6-4932-8b29-29df2e3f5448/internal-reflection" target="_blank" rel="noopener">Play on Unity</a>', 'UNITY']
    ]
  },
  youtube: {
    title: 'Content Creation Projects',
    code: 'CREATIVE.MOV',
    intro: 'Content creation, video editing, and digital media production across multiple channels.',
    cards: [
      ['Creative Cloudz', 'Main content channel covering humor, creative digital media, art, and tech.', 'MAIN CHANNEL'],
      ['Creative Cloudz Tamil', 'Tamil content channel for creative digital media and storytelling.', 'TAMIL CHANNEL'],
      ['TSA Digital Video', '1st Place District Conference award for Digital Video Production.', 'AWARDS']
    ],
    rows: [
      ['Primary Channel', '<a href="https://www.youtube.com/@CreativeCloudz1k" target="_blank" rel="noopener">youtube.com/@CreativeCloudz1k</a>', 'watch'],
      ['Tamil Channel', '<a href="https://www.youtube.com/@CreativeCloudzTamil1B" target="_blank" rel="noopener">youtube.com/@CreativeCloudzTamil1B</a>', 'watch']
    ],
    link: ['Visit My Main Channel', 'https://www.youtube.com/@CreativeCloudz1k']
  },
  music: {
    title: 'Spotify & Interests',
    code: 'MUSIC.WAV',
    intro: 'The music that gets me buildin :D.',
    embed: 'https://open.spotify.com/embed/playlist/7yAEFdpcnLQORa9ztKNFs6?utm_source=generator&si=1d042863d8e94e9a',
    link: ['Open Playlist in Spotify', 'https://open.spotify.com/playlist/7yAEFdpcnLQORa9ztKNFs6?si=5d486f2464704351']
  },
  funfacts: {
    title: 'Other Fun Facts',
    code: 'EXTRA.MD',
    intro: 'I also love sports, fitness, and art!',
    cards: [
      ['Sports Skills', 'Rugby (district team), volleyball (now recreational), martial arts (Taekwondo; self-taught Muay Thai and kickboxing), and basketball (my first sport).', 'SPORTS'],
      ['Art Skills', 'Charcoal Still Life · Creative Color Pencil · Realism Portraits · Paintings & Digital Art', 'CREATIVE']
    ]
  },
  contact: {
    title: 'Contact & Transmission',
    code: 'REACHOUT.ENC',
    intro: 'Get in touch for robotics collaborations, research inquiries, or engineering projects.',
    rows: [
      ['EMAIL', 'reyaadivakar@gmail.com / reyaadivakar_divakar@mines.edu', 'OPEN'],
      ['LOCATION', 'Parker / Golden, CO', 'LOCAL']
    ],
    buttons: [
      ['GitHub', 'https://github.com/Cloudie-Rey'],
      ['LinkedIn', 'https://linkedin.com/in/reyaa-divakar']
    ]
  }
};

const renderSection = (key, includeSpotifyEmbed = true) => {
  const s = D[key];
  const link = s.link ? `<a class="btn" href="${s.link[1]}" target="_blank" rel="noopener">${s.link[0]}</a>` : '';
  const musicCardAction = !includeSpotifyEmbed && key === 'music'
    ? `<div class="spotify-card-action">${link}</div>`
    : '';
  const desktopMusicLink = !includeSpotifyEmbed && key === 'music'
    ? `<div class="spotify-desktop-link">${link}</div>`
    : '';
  return `
    <div class="sec">
      <div class="code">// ${s.code}</div>
      <h2>${s.title}</h2>
      <p>${s.intro}</p>
      ${musicCardAction}
      ${s.cards ? `<div class="cards">${s.cards.map(c => `<div class="card"><i>${c[2]}</i><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join('')}</div>` : ''}
      ${s.rows ? `<table>${s.rows.map(r => `<tr>${r.map((x, i) => `<td${i ? '' : ' class="k"'}>${x}</td>`).join('')}</tr>`).join('')}</table>` : ''}
      ${s.links ? s.links.map(link => `<a class="btn" href="${link[1]}" download>${link[0]}</a>`).join(' ') : ''}
      ${s.buttons ? `<div class="action-buttons">${s.buttons.map(([label, url, size]) => `<a class="btn${size === 'small' ? ' btn-small' : ''}" href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}</div>` : ''}
      ${includeSpotifyEmbed && s.embed ? `<div class="spotify-embed spotify-embed-inline"><iframe title="Spotify playlist player" src="${s.embed}" width="100%" height="352" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>` : ''}
      ${desktopMusicLink}
      ${includeSpotifyEmbed || key !== 'music' ? link : ''}
    </div>`;
};

const spotifyPlayer = $('#spotify-player');
const spotifyToggle = $('#spotify-toggle');
let spotifyController = null;
let spotifyIsReady = false;
let spotifyPlayRequested = false;
let spotifyFallbackActive = false;
let spotifyInitTimeout = null;
let monitorMusicTexture = null;
const monitorTrackTitle = 'Robotics Lab Playlist';
let monitorIsPlaying = false;

function drawMusicMonitor(ctx, width, height, time) {
  ctx.fillStyle = '#07130f';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#1db954';
  ctx.font = '700 17px monospace';
  ctx.fillText('SPOTIFY', 14, 24);
  ctx.fillStyle = '#d8ffe3';
  ctx.font = '12px monospace';
  ctx.fillText('PLAYLIST', 14, 45);
  ctx.font = '700 14px sans-serif';
  const title = monitorTrackTitle.length > 30
    ? `${monitorTrackTitle.slice(0, 27)}...`
    : monitorTrackTitle;
  ctx.fillText(title, 14, 68, width - 28);

  const barCount = 20;
  const barWidth = 7;
  const gap = 4;
  const startX = (width - barCount * (barWidth + gap) + gap) / 2;
  for (let i = 0; i < barCount; i++) {
    const level = monitorIsPlaying
      ? 0.15 + (Math.sin(time * 5 + i * 0.8) + 1) * 0.35
      : 0.08;
    const barHeight = 6 + level * 44;
    ctx.fillStyle = i % 3 === 0 ? '#b5ffce' : '#1db954';
    ctx.fillRect(startX + i * (barWidth + gap), 130 - barHeight, barWidth, barHeight);
  }
}

function refreshMusicMonitor(time = 0) {
  if (!monitorMusicTexture) return;
  drawMusicMonitor(
    monitorMusicTexture.image.getContext('2d'),
    monitorMusicTexture.image.width,
    monitorMusicTexture.image.height,
    time
  );
  monitorMusicTexture.needsUpdate = true;
}

window.onSpotifyIframeApiReady = IFrameAPI => {
  IFrameAPI.createController($('#spotify-iframe'), {
    uri: 'spotify:playlist:7yAEFdpcnLQORa9ztKNFs6',
    width: 352,
    height: 352
  }, controller => {
    spotifyController = controller;
    spotifyToggle.disabled = false;
    spotifyToggle.textContent = monitorIsPlaying ? 'Pause music' : 'Play music';
    controller.addListener('ready', () => {
      spotifyIsReady = true;
      spotifyFallbackActive = false;
      clearTimeout(spotifyInitTimeout);
      spotifyToggle.disabled = false;
      spotifyToggle.textContent = monitorIsPlaying ? 'Pause music' : 'Play music';
      if (spotifyPlayRequested) controller.resume();
    });
    controller.addListener('playback_update', event => {
      monitorIsPlaying = !event.data.isPaused;
      if (monitorIsPlaying) spotifyPlayRequested = false;
      spotifyToggle.textContent = event.data.isPaused ? 'Play music' : 'Pause music';
      spotifyToggle.setAttribute('aria-pressed', String(!event.data.isPaused));
    });
    controller.addListener('playback_started', () => {
      monitorIsPlaying = true;
      spotifyPlayRequested = false;
      spotifyToggle.textContent = 'Pause music';
      spotifyToggle.setAttribute('aria-pressed', 'true');
    });
  });
};

const spotifyApiScript = document.createElement('script');
spotifyApiScript.src = 'https://open.spotify.com/embed/iframe-api/v1';
spotifyApiScript.async = true;
spotifyApiScript.addEventListener('error', () => {
  clearTimeout(spotifyInitTimeout);
  spotifyFallbackActive = true;
  console.error('Spotify Embed API failed to load; playlist controls are unavailable.');
  spotifyToggle.disabled = false;
  spotifyToggle.textContent = 'Open Spotify';
});
spotifyInitTimeout = window.setTimeout(() => {
  if (spotifyIsReady) return;
  spotifyFallbackActive = true;
  console.error('Spotify Embed did not become ready; opening the playlist directly instead.');
  spotifyToggle.disabled = false;
  spotifyToggle.textContent = 'Open Spotify';
}, 15000);
document.body.appendChild(spotifyApiScript);

spotifyToggle.onclick = () => {
  if (spotifyFallbackActive) {
    window.open(D.music.link[1], '_blank', 'noopener,noreferrer');
    return;
  }
  if (!spotifyController || !spotifyIsReady) {
    spotifyPlayRequested = true;
    spotifyController?.resume();
    return;
  }
  if (monitorIsPlaying) {
    spotifyPlayRequested = false;
    spotifyController.pause();
  } else {
    spotifyPlayRequested = true;
    spotifyController.resume();
    if (spotifyIsReady) spotifyPlayRequested = false;
  }
};

/* ==========================================================================
   2. Grid View Navigation Logic
   ========================================================================== */
const TABS = [
  ['ov', 'Overview'],
  ['res', 'Resume', ['resume']],
  ['biz', 'Experience', ['business']],
  ['eng', 'Technical Projects', ['github']],
  ['med', 'Creative Projects', ['games', 'youtube', 'music']],
  ['con', 'Contact', ['contact']],
  ['fun', 'Other Fun Facts', ['funfacts']]
];

const side = $('#side');
const panel = $('#panel');

function switchTab(id) {
  side.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.t === id));
  const activeTab = TABS.find(x => x[0] === id);

  if (id === 'ov') {
    panel.innerHTML = `
      <div class="sec hero">
        <div class="code">// MYSPACE.PY</div>
        <h1>Reyaa Divakar<br>Robotics & Mechanical Engineering.</h1>
        <p>Hi! Welcome to my humble abode! I'm learning and creating all the time! Take a look at my work by clicking where ever your cursiosity takes you!</p>
      </div>
      <div class="traits" aria-label="Personal strengths">
        <span>Creative</span>
        <span>Collaborative</span>
        <span>Problem Solver</span>
        <span>Flexible</span>
      </div>
      <div class="sec">
        <table>
          ${TABS.slice(1).map(x => `<tr class="go" data-t="${x[0]}"><td class="k">${x[1]}</td><td>${D[x[2][0]].intro}</td></tr>`).join('')}
        </table>
      </div>`;
  } else {
    panel.innerHTML = activeTab[2].map(key => renderSection(key)).join('');
  }
  panel.scrollTop = 0;
}

side.innerHTML = TABS.map(t => `<button data-t="${t[0]}">${t[1]}</button>`).join('');
side.onclick = e => e.target.dataset.t && switchTab(e.target.dataset.t);
panel.onclick = e => {
  const row = e.target.closest('tr.go');
  if (row) switchTab(row.dataset.t);
};
switchTab('ov');

/* ==========================================================================
   3. View Switcher Mode Handler
   ========================================================================== */
let mode = '3d';

function setMode(newMode) {
  mode = newMode;
  $('#v3d').classList.toggle('on', mode === '3d');
  $('#vgrid').classList.toggle('on', mode === 'grid');
  $('#b3').classList.toggle('on', mode === '3d');
  $('#bg').classList.toggle('on', mode === 'grid');
  setMenuOpen(false);
}

function setMenuOpen(open) {
  $('header').classList.toggle('menu-open', open);
  $('#menu-toggle').setAttribute('aria-expanded', String(open));
}

$('#b3').onclick = () => setMode('3d');
$('#bg').onclick = () => setMode('grid');
$('#menu-toggle').onclick = () => setMenuOpen(!$('header').classList.contains('menu-open'));

/* ==========================================================================
   4. Three.js 3D Scene Architecture & Helper Functions
   ========================================================================== */
const stage = $('#stage');
const W = () => stage.clientWidth;
const H = () => stage.clientHeight;

const scene = new T.Scene();
scene.background = null;
scene.fog = new T.Fog(0x0b1226, 45, 95);

const cam = new T.PerspectiveCamera(38, 1, 0.1, 200);
const HB = new T.Vector3(-15, 11, 17);
const HT = new T.Vector3(0, 1.4, 1);
const homePos = () => HB.clone().multiplyScalar(Math.max(1, 1.5 / cam.aspect));

const ren = new T.WebGLRenderer({ antialias: true, alpha: true });
ren.setClearColor(0x000000, 0);
ren.localClippingEnabled = true;
ren.setPixelRatio(Math.min(devicePixelRatio, 2));
stage.appendChild(ren.domElement);

const ctl = new T.OrbitControls(cam, ren.domElement);
ctl.enableDamping = true;
ctl.target.copy(HT);
ctl.maxPolarAngle = 1.45;
ctl.minDistance = 2;
ctl.maxDistance = 36;

const gm = new T.DataTexture(new Uint8Array([120, 185, 255]), 3, 1, T.LuminanceFormat);
gm.minFilter = gm.magFilter = T.NearestFilter;
gm.needsUpdate = true;

const M = (color, emissive = 0) => new T.MeshToonMaterial({
  color: color,
  gradientMap: gm,
  emissive: emissive ? 0x00f3ff : 0,
  emissiveIntensity: emissive
});
const MT = map => new T.MeshToonMaterial({ map: map, gradientMap: gm });
const GL = new T.MeshBasicMaterial({ color: 0x00f3ff });

const B = (w, h, d) => new T.BoxGeometry(w, h, d);
const C = (a, b, h, s = 18) => new T.CylinderGeometry(a, b, h, s);
const R = Math.random;

const add = (group, geo, mat, x = 0, y = 0, z = 0, ink = 1) => {
  const mesh = new T.Mesh(geo, mat);
  mesh.position.set(x, y, z);
  mesh.userData.noInk = !ink;
  group.add(mesh);
  return mesh;
};

const createTexture = (w, h, drawFn) => {
  const canvas = document.createElement('canvas');
  canvas.width = w;
  canvas.height = h;
  drawFn(canvas.getContext('2d'), w, h);
  return new T.CanvasTexture(canvas);
};

const mixHexColors = (from, to, amount) => {
  const a = [1, 3, 5].map(start => parseInt(from.slice(start, start + 2), 16));
  const b = [1, 3, 5].map(start => parseInt(to.slice(start, start + 2), 16));
  return `#${a.map((channel, index) => Math.round(channel + (b[index] - channel) * amount)
    .toString(16).padStart(2, '0')).join('')}`;
};

const drawCadMonitor = (ctx, width, height) => {
  ctx.fillStyle = '#111824';
  ctx.fillRect(0, 0, width, height);
  ctx.fillStyle = '#202b3b';
  ctx.fillRect(0, 0, width, 18);
  ctx.fillStyle = '#d6e5f4';
  ctx.font = '700 9px monospace';
  ctx.fillText('CAD  /  BOB.SLDPRT', 7, 12);

  ctx.fillStyle = '#1a2433';
  ctx.fillRect(0, 18, 30, height - 18);
  ctx.fillStyle = '#71849c';
  ctx.font = '6px monospace';
  ['MODEL', 'JOINTS', 'ASSEMBLY', 'RENDER'].forEach((label, index) => {
    ctx.fillText(label, 3, 33 + index * 13);
  });

  ctx.save();
  ctx.beginPath();
  ctx.rect(30, 18, width - 30, height - 18);
  ctx.clip();
  ctx.strokeStyle = 'rgba(126, 158, 194, 0.16)';
  ctx.lineWidth = 0.6;
  for (let x = 40; x < width; x += 16) {
    ctx.beginPath();
    ctx.moveTo(x, 18);
    ctx.lineTo(x, height);
    ctx.stroke();
  }
  for (let y = 26; y < height; y += 16) {
    ctx.beginPath();
    ctx.moveTo(30, y);
    ctx.lineTo(width, y);
    ctx.stroke();
  }

  ctx.strokeStyle = '#77dcf3';
  ctx.fillStyle = 'rgba(50, 149, 208, 0.22)';
  ctx.lineWidth = 1.5;
  const drawPart = (points, offsetX = 7, offsetY = -5) => {
    const back = points.map(([x, y]) => [x + offsetX, y + offsetY]);
    ctx.beginPath();
    points.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.closePath();
    ctx.fill();
    ctx.stroke();
    ctx.beginPath();
    back.forEach(([x, y], index) => index ? ctx.lineTo(x, y) : ctx.moveTo(x, y));
    ctx.closePath();
    ctx.stroke();
    points.forEach(([x, y], index) => {
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(back[index][0], back[index][1]);
      ctx.stroke();
    });
  };
  const joint = (x, y, radius = 3) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2);
    ctx.fillStyle = '#172d40';
    ctx.fill();
    ctx.strokeStyle = '#a4f3ff';
    ctx.stroke();
  };

  drawPart([[111, 34], [130, 34], [136, 41], [134, 54], [108, 54], [106, 41]]);
  ctx.beginPath();
  ctx.moveTo(111, 43);
  ctx.lineTo(133, 43);
  ctx.strokeStyle = '#b5ffce';
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(120, 54);
  ctx.lineTo(120, 61);
  ctx.strokeStyle = '#77dcf3';
  ctx.stroke();

  drawPart([[102, 61], [138, 61], [147, 78], [140, 99], [100, 99], [93, 78]]);
  ctx.beginPath();
  ctx.moveTo(102, 68);
  ctx.lineTo(138, 68);
  ctx.lineTo(134, 79);
  ctx.lineTo(106, 79);
  ctx.closePath();
  ctx.stroke();
  ctx.beginPath();
  ctx.arc(120, 87, 5, 0, Math.PI * 2);
  ctx.stroke();

  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(96, 67);
  ctx.lineTo(82, 83);
  ctx.lineTo(77, 104);
  ctx.moveTo(144, 67);
  ctx.lineTo(158, 83);
  ctx.lineTo(163, 104);
  ctx.stroke();
  ctx.lineWidth = 1.5;
  joint(96, 67, 4);
  joint(144, 67, 4);
  joint(82, 83, 4);
  joint(158, 83, 4);
  drawPart([[73, 101], [81, 103], [80, 115], [72, 114]], 4, -3);
  drawPart([[160, 101], [168, 103], [169, 114], [161, 115]], 4, -3);

  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(107, 98);
  ctx.lineTo(101, 114);
  ctx.lineTo(99, 132);
  ctx.moveTo(133, 98);
  ctx.lineTo(139, 114);
  ctx.lineTo(141, 132);
  ctx.stroke();
  ctx.lineWidth = 1.5;
  joint(101, 114, 4);
  joint(139, 114, 4);
  drawPart([[91, 131], [101, 131], [101, 138], [89, 138]], 4, -2);
  drawPart([[139, 131], [149, 131], [151, 138], [139, 138]], 4, -2);

  ctx.strokeStyle = '#ff8b79';
  ctx.beginPath();
  ctx.moveTo(204, 126);
  ctx.lineTo(220, 126);
  ctx.stroke();
  ctx.strokeStyle = '#8fffc1';
  ctx.beginPath();
  ctx.moveTo(204, 126);
  ctx.lineTo(204, 111);
  ctx.stroke();
  ctx.fillStyle = '#9db0c7';
  ctx.font = '6px monospace';
  ctx.fillText('X', 222, 128);
  ctx.fillText('Y', 201, 108);
  ctx.restore();

  ctx.fillStyle = '#9db0c7';
  ctx.font = '6px monospace';
  ctx.fillText('3D VIEW  |  MM', 187, 145);
};

const drawWindowScenery = (ctx, width, height, hour, themes = {}) => {
  const skyStops = [
    { hour: 0, top: '#061027', middle: '#101b3d', horizon: '#29375b' },
    { hour: 5, top: '#07122c', middle: '#142348', horizon: '#39466a' },
    { hour: 6.5, top: '#1b315c', middle: '#6786b1', horizon: '#f5ad8b' },
    { hour: 8, top: '#438fcf', middle: '#91c7eb', horizon: '#d9edf8' },
    { hour: 12, top: '#368cdb', middle: '#79b9e8', horizon: '#c4e6f8' },
    { hour: 16.5, top: '#438fcf', middle: '#91c7eb', horizon: '#d9edf8' },
    { hour: 18.5, top: '#344e89', middle: '#bf8095', horizon: '#ffc28e' },
    { hour: 20.5, top: '#0c1a3b', middle: '#17294d', horizon: '#354766' },
    { hour: 24, top: '#061027', middle: '#101b3d', horizon: '#29375b' }
  ];
  const nextIndex = skyStops.findIndex(stop => stop.hour >= hour);
  const end = skyStops[nextIndex < 0 ? skyStops.length - 1 : nextIndex];
  const start = skyStops[Math.max(0, skyStops.indexOf(end) - 1)];
  const blend = start === end ? 0 : (hour - start.hour) / (end.hour - start.hour);
  const palette = {
    top: mixHexColors(start.top, end.top, blend),
    middle: mixHexColors(start.middle, end.middle, blend),
    horizon: mixHexColors(start.horizon, end.horizon, blend)
  };
  const smoothstep = (edge0, edge1, value) => {
    const t = Math.max(0, Math.min(1, (value - edge0) / (edge1 - edge0)));
    return t * t * (3 - 2 * t);
  };
  const daylight = smoothstep(5.5, 8, hour) * (1 - smoothstep(17.5, 20.5, hour));
  const night = 1 - daylight;
  if (themes.halloween) {
    palette.top = mixHexColors('#e38a4a', '#211b36', night);
    palette.middle = mixHexColors('#efb86d', '#49304b', night);
    palette.horizon = mixHexColors('#f6d29a', '#75465a', night);
  }
  const twilight = Math.max(
    0,
    1 - Math.abs(hour - 6.5) / 2,
    1 - Math.abs(hour - 19) / 2.5
  );

  const gradient = ctx.createLinearGradient(0, 0, 0, height);
  gradient.addColorStop(0, palette.top);
  gradient.addColorStop(0.58, palette.middle);
  gradient.addColorStop(1, palette.horizon);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, width, height);

  if (daylight > 0.05) {
    const sunProgress = Math.max(0, Math.min(1, (hour - 6) / 12));
    const sunX = 45 + sunProgress * (width - 90);
    const sunY = 138 - Math.sin(sunProgress * Math.PI) * 90;
    ctx.globalAlpha = daylight;
    ctx.fillStyle = '#fff2c2';
    ctx.beginPath();
    ctx.arc(sunX, sunY, 15, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  if (night > 0.05) {
    for (let i = 0; i < 130; i++) {
      const x = (i * 137.508) % width;
      const y = (i * 67.311) % (height * 0.62);
      const size = i % 9 === 0 ? 1.7 : 0.8;
      ctx.globalAlpha = night * (0.35 + (i % 5) * 0.13);
      ctx.fillStyle = i % 6 === 0 ? '#bceaff' : '#f5f8ff';
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fill();
    }

    ctx.globalAlpha = night * 0.28;
    ctx.shadowColor = '#54ffd1';
    ctx.shadowBlur = 22;
    for (let band = 0; band < 4; band++) {
      const wave = band * 17;
      const aurora = ctx.createLinearGradient(0, 50, width, 175);
      aurora.addColorStop(0, 'rgba(43, 255, 177, 0)');
      aurora.addColorStop(0.35, '#4dffc2');
      aurora.addColorStop(0.7, '#63dfff');
      aurora.addColorStop(1, 'rgba(99, 223, 255, 0)');
      ctx.strokeStyle = aurora;
      ctx.lineWidth = 12 - band * 2;
      ctx.beginPath();
      ctx.moveTo(-20, 98 + wave);
      ctx.bezierCurveTo(112, 22 + wave, 303, 154 - wave, width + 20, 62 + wave);
      ctx.stroke();
    }
    ctx.shadowBlur = 0;
    ctx.globalAlpha = night;
    ctx.fillStyle = '#e2efff';
    ctx.beginPath();
    ctx.arc(width - 72, 58, 12, 0, Math.PI * 2);
    ctx.fill();
    ctx.fillStyle = palette.top;
    ctx.beginPath();
    ctx.arc(width - 66, 53, 11, 0, Math.PI * 2);
    ctx.fill();
    ctx.globalAlpha = 1;
  }

  const cloudAlpha = daylight * 0.48 + twilight * 0.18;
  if (cloudAlpha > 0.01) {
    ctx.fillStyle = `rgba(255, 248, 241, ${cloudAlpha})`;
    [[75, 85, 52, 18], [112, 82, 35, 14], [410, 105, 54, 17], [450, 102, 32, 13]].forEach(([cx, cy, rx, ry]) => {
      ctx.beginPath();
      ctx.ellipse(cx, cy, rx, ry, 0, 0, Math.PI * 2);
      ctx.fill();
    });
  }

  const autumnScenery = themes.thanksgiving || themes.halloween;
  const backMountain = autumnScenery
    ? mixHexColors(themes.halloween ? '#9a5737' : '#a87548', '#33263a', night)
    : themes.christmas
      ? mixHexColors('#dce9f7', '#27364f', night)
      : mixHexColors('#657aa8', '#101b36', night);
  const frontMountain = autumnScenery
    ? mixHexColors(themes.halloween ? '#c1743d' : '#c18a51', '#49303a', night)
    : themes.christmas
      ? mixHexColors('#f0f5fb', '#35445d', night)
      : mixHexColors('#8499c5', '#172648', night);

  ctx.fillStyle = backMountain;
  ctx.beginPath();
  ctx.moveTo(0, 235);
  ctx.lineTo(130, 130);
  ctx.lineTo(250, 235);
  ctx.lineTo(360, 145);
  ctx.lineTo(width, 250);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();
  ctx.fillStyle = frontMountain;
  ctx.beginPath();
  ctx.moveTo(0, 270);
  ctx.lineTo(170, 190);
  ctx.lineTo(315, 280);
  ctx.lineTo(430, 205);
  ctx.lineTo(width, 250);
  ctx.lineTo(width, height);
  ctx.lineTo(0, height);
  ctx.closePath();
  ctx.fill();

  if (autumnScenery) {
    const trunkColor = themes.halloween ? '#36232d' : '#49372e';
    const leafColor = themes.halloween ? '#b65337' : '#bf743b';
    [[42, 250, 1], [472, 252, -1]].forEach(([x, y, direction]) => {
      ctx.strokeStyle = trunkColor;
      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(x, height);
      ctx.lineTo(x, y);
      ctx.moveTo(x, y + 34);
      ctx.lineTo(x + direction * 24, y + 5);
      ctx.moveTo(x, y + 50);
      ctx.lineTo(x - direction * 25, y + 20);
      ctx.stroke();
      ctx.fillStyle = leafColor;
      [[x + direction * 24, y + 5], [x - direction * 25, y + 20], [x, y - 10]].forEach(([leafX, leafY]) => {
        ctx.beginPath();
        ctx.ellipse(leafX, leafY, 20, 12, direction * 0.35, 0, Math.PI * 2);
        ctx.fill();
      });
    });
  }

  if (themes.cherryBlossoms) {
    const drawSakuraTreeSide = () => {
      ctx.strokeStyle = '#60424a';
      ctx.lineCap = 'round';
      ctx.lineJoin = 'round';
      ctx.lineWidth = 12;
      ctx.beginPath();
      ctx.moveTo(-12, height + 12);
      ctx.bezierCurveTo(16, 300, 30, 246, 64, 199);
      ctx.bezierCurveTo(91, 160, 123, 130, 170, 87);
      ctx.stroke();

      ctx.lineWidth = 7;
      ctx.beginPath();
      ctx.moveTo(44, 226);
      ctx.bezierCurveTo(78, 195, 106, 190, 143, 184);
      ctx.moveTo(75, 181);
      ctx.bezierCurveTo(67, 144, 82, 116, 105, 91);
      ctx.moveTo(112, 137);
      ctx.bezierCurveTo(143, 133, 163, 115, 185, 91);
      ctx.moveTo(137, 116);
      ctx.bezierCurveTo(134, 87, 145, 66, 163, 49);
      ctx.stroke();

      const blossoms = [
        [42, 217, 25], [82, 174, 28], [116, 134, 30],
        [162, 97, 27], [104, 92, 24], [150, 58, 25], [145, 183, 22]
      ];
      blossoms.forEach(([x, y, radius], index) => {
        const petalColors = ['#ffc5d9', '#f7aeca', '#ffe0e8'];
        for (let petal = 0; petal < 5; petal++) {
          const angle = (petal / 5) * Math.PI * 2 + index * 0.37;
          ctx.fillStyle = petalColors[(petal + index) % petalColors.length];
          ctx.beginPath();
          ctx.ellipse(
            x + Math.cos(angle) * radius * 0.35,
            y + Math.sin(angle) * radius * 0.32,
            radius * 0.34,
            radius * 0.23,
            angle,
            0,
            Math.PI * 2
          );
          ctx.fill();
        }
        ctx.fillStyle = '#ffe8a6';
        ctx.beginPath();
        ctx.arc(x, y, radius * 0.1, 0, Math.PI * 2);
        ctx.fill();
      });
    };

    ctx.save();
    drawSakuraTreeSide();
    ctx.restore();
    ctx.save();
    ctx.translate(width, 0);
    ctx.scale(-1, 1);
    drawSakuraTreeSide();
    ctx.restore();
  }

  if (themes.christmas) {
    ctx.fillStyle = '#f5f8ff';
    [[130, 130], [360, 145], [430, 205]].forEach(([peakX, peakY]) => {
      ctx.beginPath();
      ctx.moveTo(peakX - 20, peakY + 19);
      ctx.lineTo(peakX, peakY);
      ctx.lineTo(peakX + 24, peakY + 23);
      ctx.lineTo(peakX + 9, peakY + 15);
      ctx.lineTo(peakX, peakY + 19);
      ctx.lineTo(peakX - 8, peakY + 13);
      ctx.closePath();
      ctx.fill();
    });

    ctx.fillStyle = 'rgba(235, 246, 255, 0.9)';
    for (let x = 7; x < width; x += 24) {
      const icicleLength = 8 + (x * 17 % 20);
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x + 5, icicleLength);
      ctx.lineTo(x + 11, 0);
      ctx.closePath();
      ctx.fill();
    }
  }
};

const addRod = (group, start, end, radius, mat) => {
  const startVec = new T.Vector3(...start);
  const endVec = new T.Vector3(...end);
  const dir = endVec.clone().sub(startVec);
  const rodMesh = add(
    group,
    C(radius, radius, dir.length(), 8),
    mat,
    (startVec.x + endVec.x) / 2,
    (startVec.y + endVec.y) / 2,
    (startVec.z + endVec.z) / 2
  );
  rodMesh.quaternion.setFromUnitVectors(new T.Vector3(0, 1, 0), dir.normalize());
  return rodMesh;
};

const addBlackLabPlush = (parent, x, y, z, scale = 1) => {
  const plush = new T.Group();
  const fur = M(0x171820);
  const muzzle = M(0x49464a);
  const nose = M(0x09090c);
  const eye = M(0xf2e5cf);
  const paw = new T.SphereGeometry(1, 12, 10);
  const part = (px, py, pz, sx, sy, sz, material) => {
    const mesh = add(plush, paw, material, px, py, pz);
    mesh.scale.set(sx, sy, sz);
    return mesh;
  };

  part(0, 0.16, -0.02, 0.2, 0.17, 0.16, fur);
  part(0, 0.37, 0.02, 0.16, 0.16, 0.14, fur);
  [-1, 1].forEach(side => {
    part(side * 0.15, 0.4, 0, 0.075, 0.14, 0.07, fur).rotation.z = side * -0.35;
    part(side * 0.095, 0.08, 0.07, 0.09, 0.07, 0.12, fur);
    part(side * 0.07, 0.38, 0.14, 0.025, 0.03, 0.018, eye);
    part(side * 0.07, 0.38, 0.155, 0.012, 0.018, 0.01, nose);
  });
  part(0, 0.31, 0.15, 0.1, 0.065, 0.075, muzzle);
  part(0, 0.33, 0.215, 0.04, 0.03, 0.025, nose);
  plush.position.set(x, y, z);
  plush.scale.setScalar(scale);
  parent.add(plush);
  return plush;
};

/* ==========================================================================
   5. Scene Lighting & Environmental Elements
   ========================================================================== */
scene.add(new T.AmbientLight(0xdbe8ff, 0.24));
scene.add(new T.HemisphereLight(0xcfe3ff, 0x8a7a6a, 0.18));

const dirLight = new T.DirectionalLight(0xffffff, 0.38);
dirLight.position.set(8, 14, 10);
scene.add(dirLight);

const centerLight = new T.PointLight(0x7fe9ff, 0.2, 14);
centerLight.position.set(0, 4, 0);
scene.add(centerLight);

const wallMaterial = M(0x758bad);
const trimMaterial = M(0x9caabd);
const buildWall = (w, h, d, x, y, z, mat = wallMaterial) => add(scene, B(w, h, d), mat, x, y, z, 0);

const woodTexture = createTexture(256, 256, (ctx, w, h) => {
  ctx.fillStyle = '#c8a273';
  ctx.fillRect(0, 0, w, h);
  for (let i = 0; i < 8; i++) {
    ctx.fillStyle = i % 2 ? '#d2ad7e' : '#bf9a6b';
    ctx.fillRect(0, i * 32, w, 31);
    ctx.fillStyle = '#8a6a48';
    ctx.fillRect(0, i * 32, w, 1.5);
    ctx.fillRect((i * 83) % 256, i * 32, 1.5, 32);
  }
});
woodTexture.wrapS = woodTexture.wrapT = T.RepeatWrapping;
woodTexture.repeat.set(5, 4);

add(scene, B(18.3, 0.4, 15.3), MT(woodTexture), 0, -0.2, 1.5, 0);
add(scene, B(18.3, 0.4, 15.3), M(0x131a33), 0, -0.6, 1.5, 0);

buildWall(0.3, 7, 15.3, 9, 3.5, 1.5);
buildWall(6.75, 7, 0.3, -5.775, 3.5, -6);
buildWall(6.75, 7, 0.3, 5.775, 3.5, -6);
buildWall(4.8, 2.2, 0.3, 0, 1.1, -6);
buildWall(4.8, 1.4, 0.3, 0, 6.3, -6);

buildWall(18.3, 0.18, 0.08, 0, 0.09, -5.82, trimMaterial);
buildWall(0.08, 0.18, 15, 8.82, 0.09, 1.5, trimMaterial);

const rgbLedSegments = [];
const holidayLedPalettes = {
  newYear: [0xd4af37, 0xf7f4ec, 0xffd76b],
  christmas: [0xe52f45, 0xf4f8ff, 0x16a05a],
  thanksgiving: [0xc65f2b, 0xe2a348, 0xa84436, 0xf4d078],
  halloween: [0x5e2b97, 0xf67b22, 0x23143c, 0x78a33a],
  diwali: [0xff8a30, 0xffd667, 0xf04e45, 0x8d3e9f],
  easter: [0xf3abc4, 0x9bc7f4, 0xf5dd72, 0x99d5b2],
  cherryBlossoms: [0xf3aec6, 0xffe6ef, 0x93bd8c],
  valentines: [0xf18da8, 0xe83963, 0xffd5df]
};
const holidayLedPriority = [
  'newYear', 'valentines', 'diwali',
  'halloween', 'easter', 'thanksgiving', 'christmas', 'cherryBlossoms'
];
const ledColorFrom = new T.Color();
const ledColorTo = new T.Color();
const ledColorHsl = { h: 0, s: 0, l: 0 };
const addRgbLedStrip = (axis, length, x, y, z) => {
  const count = Math.ceil(length / 0.45);
  const segmentLength = length / count;
  for (let i = 0; i < count; i++) {
    const material = new T.MeshBasicMaterial({ color: 0xffffff });
    const glowMaterials = [
      new T.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.08,
        blending: T.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      }),
      new T.MeshBasicMaterial({
        color: 0xffffff,
        transparent: true,
        opacity: 0.12,
        blending: T.AdditiveBlending,
        depthWrite: false,
        toneMapped: false
      })
    ];
    const geometry = axis === 'x'
      ? B(segmentLength + 0.015, 0.045, 0.045)
      : B(0.045, 0.045, segmentLength + 0.015);
    const glowGeometries = axis === 'x'
      ? [B(segmentLength + 0.15, 0.15, 0.15), B(segmentLength + 0.07, 0.09, 0.09)]
      : [B(0.15, 0.15, segmentLength + 0.15), B(0.09, 0.09, segmentLength + 0.07)];
    const positionX = axis === 'x' ? x - length / 2 + (i + 0.5) * segmentLength : x;
    const positionZ = axis === 'z' ? z - length / 2 + (i + 0.5) * segmentLength : z;
    add(scene, geometry, material, positionX, y, positionZ, 0);
    glowMaterials.forEach((glowMaterial, index) => {
      add(scene, glowGeometries[index], glowMaterial, positionX, y, positionZ, 0);
    });
    rgbLedSegments.push({ material, glowMaterials, offset: i / count });
  }
};
addRgbLedStrip('x', 18.2, 0, 6.76, -5.82);
addRgbLedStrip('z', 15, 8.82, 6.76, 1.5);

[
  [4.9, 0.14, 0.22, 0, 2.25],
  [4.9, 0.14, 0.22, 0, 5.55],
  [0.12, 3.4, 0.22, -2.4, 3.9],
  [0.12, 3.4, 0.22, 2.4, 3.9],
  [0.08, 3.4, 0.2, 0, 3.9]
].forEach(a => buildWall(a[0], a[1], a[2], a[3], a[4], -5.9, trimMaterial));

const getHolidayDateOverride = () => {
  const value = new URLSearchParams(location.search).get('holidayDate');
  if (!isLocalDevelopment || !value) return null;

  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(value);
  if (!match) {
    console.error('The holidayDate override must use YYYY-MM-DD.');
    return null;
  }

  const [, yearText, monthText, dayText] = match;
  const year = Number(yearText);
  const month = Number(monthText);
  const day = Number(dayText);
  const date = new Date(year, month - 1, day, 12);
  if (date.getFullYear() !== year || date.getMonth() !== month - 1 || date.getDate() !== day) {
    console.error(`The holidayDate override "${value}" is not a valid date.`);
    return null;
  }

  console.info(`Holiday preview date: ${value}`);
  return date;
};

const holidayDateOverride = getHolidayDateOverride();
const getHolidayHourOverride = () => {
  const value = new URLSearchParams(location.search).get('holidayHour');
  if (!isLocalDevelopment || !value) return null;

  const hour = Number(value);
  if (!/^\d{1,2}$/.test(value) || hour < 0 || hour > 23) {
    console.error('The holidayHour override must be an hour from 0 to 23.');
    return null;
  }

  console.info(`Holiday preview hour: ${hour}:00`);
  return hour;
};
const holidayHourOverride = getHolidayHourOverride();
const getHolidayDate = () => holidayDateOverride ? new Date(holidayDateOverride) : new Date();
const getLocalDateKey = date => `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
const getLocalDateMinuteKey = date => [
  date.getFullYear(),
  date.getMonth(),
  date.getDate(),
  date.getHours(),
  date.getMinutes()
].join('-');
let activeHolidayThemes = getHolidayThemes(getHolidayDate());
let applyHolidayDecorations = () => {};
let lastThemeDateKey = getLocalDateKey(getHolidayDate());
let lastWindowMinute = getLocalDateMinuteKey(getHolidayDate());
const localTime = getHolidayDate();
const getLocalHour = date => holidayHourOverride ?? date.getHours() + date.getMinutes() / 60;
const warnForUnknownDiwaliDate = date => {
  const themes = getHolidayThemes(date);
  if (!themes.diwaliDateKnown && (date.getMonth() === 9 || date.getMonth() === 10)) {
    console.warn(`Add the Diwali date for ${date.getFullYear()} to holiday-calendar.js.`);
  }
};
warnForUnknownDiwaliDate(localTime);
const windowScenery = createTexture(512, 360, (ctx, w, h) => {
  drawWindowScenery(ctx, w, h, getLocalHour(localTime), activeHolidayThemes);
});

function updateWindowScenery() {
  const now = getHolidayDate();
  const minuteKey = getLocalDateMinuteKey(now);
  if (minuteKey === lastWindowMinute) return;

  const dateKey = getLocalDateKey(now);
  const dateChanged = dateKey !== lastThemeDateKey;
  if (dateChanged) {
    lastThemeDateKey = dateKey;
    activeHolidayThemes = getHolidayThemes(now);
    applyHolidayDecorations(activeHolidayThemes);
    warnForUnknownDiwaliDate(now);
  }

  lastWindowMinute = minuteKey;
  drawWindowScenery(
    windowScenery.image.getContext('2d'),
    512,
    360,
    getLocalHour(now),
    activeHolidayThemes
  );
  windowScenery.needsUpdate = true;
}
add(
  scene,
  new T.PlaneGeometry(4.65, 3.18),
  new T.MeshBasicMaterial({ map: windowScenery, fog: false }),
  0,
  3.9,
  -5.96,
  0
);

const windowParticleTexture = createTexture(256, 180, ctx => ctx.clearRect(0, 0, 256, 180));
const windowParticlePlane = add(
  scene,
  new T.PlaneGeometry(4.65, 3.18),
  new T.MeshBasicMaterial({
    map: windowParticleTexture,
    transparent: true,
    depthWrite: false,
    side: T.DoubleSide
  }),
  0,
  3.9,
  -5.955,
  0
);
windowParticlePlane.visible = false;

/* ==========================================================================
   6. Cables, Floor Clutter & Details
   ========================================================================== */
const cableRed = M(0xa83a32);
const cableDark = M(0x181c26);
const addTube = (points, radius, mat) => add(scene, new T.TubeGeometry(new T.CatmullRomCurve3(points), 40, radius, 6), mat, 0, 0, 0, 0);

for (let i = 0; i < 26; i++) {
  let x = 5.6 + (R() - 0.5) * (i % 2 ? 5 : 1.6);
  let z = -1.6 + (R() - 0.5) * (i % 2 ? 5 : 1.6);
  const points = [];
  for (let j = 0; j < 5; j++) {
    points.push(new T.Vector3(x, 0.05 + (j % 2) * 0.05, z));
    x = T.MathUtils.clamp(x + (R() - 0.5) * 2, -8.2, 8.2);
    z = T.MathUtils.clamp(z + (R() - 0.5) * 2, -5.2, 8.2);
  }
  addTube(points, 0.04 + R() * 0.03, cableRed);
}

const partMaterials = [M(0x3b4a4e), M(0x2c3b3f), M(0x55463a)];
for (let i = 0; i < 28; i++) {
  const mesh = add(
    scene,
    R() < 0.6 ? B(0.2 + R() * 0.5, 0.1 + R() * 0.25, 0.2 + R() * 0.4) : C(0.1, 0.12, 0.3 + R() * 0.3),
    partMaterials[i % 3],
    4 + R() * 4.4,
    0.1,
    -4 + R() * 6
  );
  mesh.rotation.y = R() * 6;
}
buildWall(1.9, 0.3, 4.5, 5.6, 6.6, -3.8, M(0x4a5568));

/* ==========================================================================
   7. Interactive 3D Objects Setup & Registration
   ========================================================================== */
const OBJS = [];
const animatedMugSteam = [];
let exoSuitGroup;
let workbenchGroup;
let deskDogPlush;
let alvinBirthdayCopperRose;
let alvinBirthdayRoseLight;
let alvinBirthdayRoseMaterials = [];
let birthdayCakeGroup;
let valentinesRoseGroup;
let birthdayCakeMarkerAnchor;
let alvinBirthdayCakeMarkerAnchor;
let valentinesRoseMarkerAnchor;
let diwaliSparklerGroup;
let diwaliSparklerLight;
let diwaliSparklerFlame;
let diwaliSparklerCore;
const diwaliSparklerSparks = [];

function registerObject(id, key, label, group, anchorPos, cameraPos, labelOffset = 1.3, displayNumber = OBJS.length + 1) {
  group.userData.oid = id;
  scene.add(group);
  OBJS.push({
    id,
    key,
    label,
    displayNumber,
    g: group,
    a: new T.Vector3(...anchorPos),
    c: new T.Vector3(...cameraPos),
    off: labelOffset
  });
}

// 1. Mech Exo-Suit
{
  const group = new T.Group();
  exoSuitGroup = group;
  const primaryMat = M(0x232838);
  const secondaryMat = M(0x12151f);

  add(group, C(1.1, 1.2, 0.12, 28), secondaryMat, 0, 0.06, 0);
  [-1, 1].forEach(side => {
    add(group, B(0.5, 0.2, 0.7), secondaryMat, side * 0.32, 0.2, 0.1);
    add(group, B(0.3, 0.8, 0.35), primaryMat, side * 0.32, 0.7, 0);
    add(group, B(0.38, 0.7, 0.4), primaryMat, side * 0.32, 1.45, 0);
    add(group, B(0.24, 0.7, 0.28), primaryMat, side * 0.85, 2.5, 0);
    add(group, B(0.28, 0.6, 0.32), primaryMat, side * 0.85, 1.85, 0.05);
    add(group, B(0.2, 0.2, 0.2), secondaryMat, side * 0.85, 1.5, 0.05);
    add(group, new T.SphereGeometry(0.3, 14, 10), primaryMat, side * 0.76, 3, 0);
  });

  add(group, B(1, 0.3, 0.5), secondaryMat, 0, 1.95, 0);
  add(group, B(1.1, 1, 0.65), primaryMat, 0, 2.6, 0);
  add(group, B(0.9, 0.45, 0.1), secondaryMat, 0, 2.75, 0.34);
  add(group, C(0.16, 0.16, 0.08, 20), GL, 0, 2.7, 0.4, 0).rotation.x = Math.PI / 2;

  add(group, B(0.5, 0.5, 0.5), primaryMat, 0, 3.3, 0);
  add(group, B(0.4, 0.1, 0.05), GL, 0, 3.33, 0.26, 0);
  add(group, B(0.7, 0.8, 0.3), secondaryMat, 0, 2.6, -0.45);

  const suitLight = new T.PointLight(0x00f3ff, 1, 5);
  suitLight.position.set(0, 2.7, 0.9);
  group.add(suitLight);
  group.userData.el = suitLight;

  group.scale.setScalar(1.1);
  group.position.set(5.6, 0, -1.6);
  group.rotation.y = -0.3;

  for (const offset of [-.8, 0, .8]) {
    addTube([
      new T.Vector3(5.6 + offset, 6.85, -1.8),
      new T.Vector3(5.6 + offset * 1.2, 5.4, -1.7),
      new T.Vector3(5.6 + offset * 0.8, 3.2, -1.6)
    ], 0.07, cableDark);
  }

  registerObject('exo', 'github', 'MECH EXO-SUIT', group, [5.6, 2.4, -1.6], [3, 3, 2.8], 2, 2);
}

// 2. White Workbench Setup
{
  const group = new T.Group();
  workbenchGroup = group;
  const whiteMat = M(0xc7d1df);
  const lightMat = M(0xabb9cc);
  const blueMat = M(0xbcd8f5);
  const darkMat = M(0x1b1f2b);
  const brightWhiteMat = new T.MeshBasicMaterial({ color: 0xcbd6e5 });

  add(group, B(5, 0.2, 2.2), whiteMat, 0, 1.8, -3.2);
  [-1, 1].forEach(z => add(group, B(0.18, 1.8, 0.18), whiteMat, -2.3, 0.9, -3.2 + z * 0.9));
  add(group, B(1.1, 1.8, 2), lightMat, 1.9, 0.9, -3.2);

  for (let k = 0; k < 4; k++) {
    add(group, B(0.5, 0.04, 0.04), M(0x9aa8bb), 1.9, 0.3 + k * 0.42, -2.18);
  }

  add(group, B(4.8, 0.04, 0.04), new T.MeshBasicMaterial({ color: 0x9b7757 }), 0, 1.69, -2.12, 0);

  add(group, B(0.7, 1.3, 0.7), whiteMat, 1, 0.65, -2.9);
  add(group, B(0.5, 1, 0.02), new T.MeshBasicMaterial({ color: 0x7fefff }), 1, 0.7, -2.54, 0);

  const printer = new T.Group();
  const printerFrameMat = M(0x0d1b3a);
  const printerBodyMat = M(0x0a142d);
  add(printer, B(0.95, 0.22, 0.82), printerBodyMat, 0, 0.14, 0);
  add(printer, B(0.66, 0.19, 0.02), M(0x10151d), 0, 0.14, 0.42);
  const printerDisplay = createTexture(256, 96, (ctx, w, h) => {
    ctx.fillStyle = '#101820';
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#8fe8dd';
    ctx.font = '700 24px monospace';
    ctx.fillText('ELEGOO', 16, 36);
    ctx.font = '16px monospace';
    ctx.fillText('NEPTUNE', 16, 66);
    ctx.fillStyle = '#ffae57';
    ctx.fillRect(208, 24, 28, 38);
  });
  add(
    printer,
    new T.PlaneGeometry(0.58, 0.14),
    new T.MeshBasicMaterial({ map: printerDisplay }),
    0,
    0.14,
    0.432,
    0
  );
  [-0.42, 0.42].forEach(x => add(printer, B(0.055, 1.3, 0.07), printerFrameMat, x, 0.9, -0.16));
  add(printer, B(0.9, 0.07, 0.08), printerFrameMat, 0, 1.55, -0.16);
  add(printer, B(0.88, 0.06, 0.08), printerFrameMat, 0, 0.38, -0.16);
  add(printer, B(0.78, 0.07, 0.08), printerFrameMat, 0, 1.1, -0.02);
  add(printer, B(0.72, 0.055, 0.56), M(0x15264a), 0, 0.55, 0.06);
  add(printer, B(0.16, 0.2, 0.14), printerBodyMat, 0, 0.98, 0.04);
  add(printer, C(0.025, 0.025, 0.09), M(0xd3a765), 0, 0.83, 0.06);
  add(printer, B(0.16, 0.13, 0.14), M(0xf18a46), 0, 0.65, 0.06);
  add(printer, B(0.05, 0.25, 0.05), printerFrameMat, 0.31, 1.68, -0.16);
  const printerSpoolMat = M(0x090c12);
  add(printer, new T.CylinderGeometry(0.19, 0.19, 0.08, 24), printerSpoolMat, 0.31, 1.82, -0.16).rotation.x = Math.PI / 2;
  add(printer, new T.TorusGeometry(0.19, 0.02, 8, 24), printerSpoolMat, 0.31, 1.82, -0.11, 0);
  printer.scale.setScalar(1.08);
  printer.position.set(3.2, 0, -3.4);
  group.add(printer);

  const monitorsGroup = new T.Group();
  [-1.1, 0.9].forEach((x, i) => {
    const mon = new T.Group();
    add(mon, B(1.9, 1.2, 0.1), darkMat, 0, 0, 0);
    const screenTexture = createTexture(256, 150, (ctx, w, h) => {
      if (i === 1) {
        drawMusicMonitor(ctx, w, h, 0);
        return;
      }
      drawCadMonitor(ctx, w, h);
    });
    if (i === 1) monitorMusicTexture = screenTexture;
    add(mon, new T.PlaneGeometry(1.75, 1.05), new T.MeshBasicMaterial({
      map: screenTexture
    }), 0, 0, 0.06, 0);
    add(mon, B(0.1, 0.5, 0.1), whiteMat, 0, -0.8, -0.05);
    mon.position.set(x, 2.65, -3.55);
    mon.rotation.y = i ? -0.18 : 0.18;
    monitorsGroup.add(mon);
  });

  add(group, B(1.9, 0.02, 0.8), blueMat, -0.1, 1.91, -2.75);
  add(group, B(1.3, 0.06, 0.4), whiteMat, -0.1, 1.95, -2.7);
  add(group, B(1.2, 0.01, 0.28), M(0x9fd0ff), -0.1, 1.985, -2.7);
  add(group, new T.SphereGeometry(0.09, 10, 8), whiteMat, 0.7, 1.95, -2.65).scale.set(1, 0.5, 1.4);

  const mug = new T.Group();
  mug.position.set(1.55, 1.9 * (1 - 1.65), -2.62);
  mug.scale.setScalar(1.65);
  const mugMat = M(0xf4f0e7);
  add(mug, new T.CylinderGeometry(0.07, 0.065, 0.14, 24, 1, true), mugMat, 0, 1.97, 0);
  add(mug, C(0.065, 0.065, 0.012, 24), mugMat, 0, 1.905, 0);
  add(mug, new T.TorusGeometry(0.067, 0.006, 8, 24), mugMat, 0, 2.04, 0).rotation.x = Math.PI / 2;
  add(mug, new T.TorusGeometry(0.043, 0.009, 8, 20), mugMat, 0.09, 1.97, 0.04);

  const mugLogo = createTexture(64, 64, (ctx, w, h) => {
    ctx.fillStyle = '#c9aa79';
    ctx.font = 'bold 52px Georgia, serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText('R', w / 2, h / 2 + 2);
  });
  add(
    mug,
    new T.PlaneGeometry(0.05, 0.065),
    new T.MeshBasicMaterial({ map: mugLogo, transparent: true, side: T.DoubleSide }),
    0,
    1.97,
    0.074,
    0
  );
  const coffee = add(mug, new T.CircleGeometry(0.057, 24), M(0x503425), 0, 2.025, 0, 0);
  coffee.rotation.x = -Math.PI / 2;
  const teaBag = add(mug, B(0.028, 0.008, 0.024), M(0xb99a68), -0.02, 2.027, 0.005);
  teaBag.rotation.z = -0.18;
  const teaString = M(0xb9ad91);
  const teaStringCurve = new T.CatmullRomCurve3([
    new T.Vector3(-0.02, 2.03, 0.02),
    new T.Vector3(-0.045, 2.038, 0.045),
    new T.Vector3(-0.07, 2.02, 0.066),
    new T.Vector3(-0.078, 1.99, 0.075),
    new T.Vector3(-0.095, 1.99, 0.084),
    new T.Vector3(-0.115, 1.993, 0.089)
  ]);
  const teaStringMesh = add(mug, new T.TubeGeometry(teaStringCurve, 24, 0.0045, 6, false), teaString);
  teaStringMesh.userData.noInk = true;
  add(mug, B(0.044, 0.035, 0.008), M(0xd8c49e), -0.115, 1.975, 0.083);
  const teaTag = createTexture(64, 48, (ctx, w, h) => {
    ctx.fillStyle = '#d8c49e';
    ctx.fillRect(0, 0, w, h);
    ctx.strokeStyle = '#967b53';
    ctx.lineWidth = 3;
    ctx.strokeRect(2, 2, w - 4, h - 4);
    ctx.fillStyle = '#755d3d';
    ctx.font = 'bold 14px monospace';
    ctx.textAlign = 'center';
    ctx.fillText('TEA', w / 2, 32);
  });
  add(
    mug,
    new T.PlaneGeometry(0.038, 0.027),
    new T.MeshBasicMaterial({ map: teaTag, side: T.DoubleSide }),
    -0.115,
    1.975,
    0.09,
    0
  );

  const steamGroup = new T.Group();
  steamGroup.position.set(0, 2.045, 0);
  for (let i = 0; i < 3; i++) {
    const phase = i / 3;
    const baseX = (i - 1) * 0.025;
    const steamCurve = new T.CatmullRomCurve3([
      new T.Vector3(baseX, 0, 0.015),
      new T.Vector3(baseX + 0.012, 0.07, 0.015),
      new T.Vector3(baseX - 0.012, 0.14, 0.015),
      new T.Vector3(baseX + 0.012, 0.21, 0.015),
      new T.Vector3(baseX - 0.008, 0.28, 0.015)
    ]);
    const material = new T.MeshBasicMaterial({
      color: 0xf4f7ff,
      transparent: true,
      opacity: 0,
      depthWrite: false
    });
    const wisp = new T.Mesh(new T.TubeGeometry(steamCurve, 20, 0.007, 6, false), material);
    steamGroup.add(wisp);
    animatedMugSteam.push({ wisp, material, phase, baseX });
  }
  mug.add(steamGroup);
  group.add(mug);
  deskDogPlush = addBlackLabPlush(group, -2.15, 1.9, -2.45, 0.65);

  addRod(group, [-2.35, 1.9, -2.95], [-2.35, 2.7, -2.95], 0.035, whiteMat);
  addRod(group, [-2.35, 2.7, -2.95], [-1.3, 2.55, -2.95], 0.03, whiteMat);
  add(group, C(0.06, 0.06, 0.26), darkMat, -1.3, 2.4, -2.95);
  add(group, C(0.16, 0.16, 0.02, 20), darkMat, -1.3, 2.4, -2.78).rotation.x = Math.PI / 2;

  [
    [-2.1, 2.05, -3.1, 0.16],
    [-1.92, 2, -3.05, 0.12],
    [-2.28, 2, -3.05, 0.12]
  ].forEach(a => add(group, new T.SphereGeometry(a[3], 12, 10), brightWhiteMat, a[0], a[1], a[2], 0));

  const deskLight = new T.PointLight(0xdbeeff, 0.18, 4);
  deskLight.position.set(-2.1, 2.4, -2.8);
  group.add(deskLight);

  group.position.z = -1.3;
  group.add(monitorsGroup);
  monitorsGroup.userData.oid = 'mon';
  registerObject('mon', 'resume', 'DUAL-MONITOR WORKBENCH', group, [-0.1, 2.7, -4.7], [-0.1, 3.2, -0.4], 1.6, 1);
}

// 3. Desk Chair & Rug
{
  const group = new T.Group();
  const whiteMat = M(0xc7d1df);
  const blueMat = M(0xbcd8f5);

  [
    [0, -1.5, 1.2],
    [-1, -1.3, 0.8],
    [1, -1.4, 0.9],
    [0.2, -0.7, 0.75],
    [-0.5, -2.2, 0.7]
  ].forEach((r, i) => add(scene, C(r[2], r[2], 0.04, 32), M(0xf3f8ff), r[0], 0.03 + i * 0.002, r[1] - 1.3, 0));

  for (let i = 0; i < 5; i++) {
    const angle = i * 1.257;
    addRod(group, [0, 0.2, 0], [Math.sin(angle) * 0.5, 0.1, Math.cos(angle) * 0.5], 0.03, whiteMat);
    add(group, new T.SphereGeometry(0.05, 8, 6), M(0x2a2e3c), Math.sin(angle) * 0.5, 0.06, Math.cos(angle) * 0.5);
  }

  add(group, C(0.04, 0.04, 0.7), M(0x2a2e3c), 0, 0.55, 0);
  add(group, B(0.8, 0.14, 0.8), whiteMat, 0, 0.98, 0);
  add(group, B(0.7, 0.1, 0.7), blueMat, 0, 1.1, 0);

  const chairBack = add(group, B(0.75, 1.05, 0.12), whiteMat, 0, 1.7, 0.38);
  chairBack.rotation.x = 0.12;
  add(group, B(0.45, 0.28, 0.1), blueMat, 0, 2.35, 0.43).rotation.x = 0.12;

  [-1, 1].forEach(side => {
    add(group, B(0.07, 0.3, 0.07), whiteMat, side * 0.45, 1.25, 0.05);
    add(group, B(0.09, 0.06, 0.5), whiteMat, side * 0.45, 1.42, 0.05);
  });

  [
    [0, 1.42, 0.2, 0.22],
    [-0.17, 1.34, 0.2, 0.15],
    [0.17, 1.34, 0.2, 0.15]
  ].forEach(a => add(group, new T.SphereGeometry(a[3], 12, 10), M(0xffffff), a[0], a[1], a[2]));
  
  [-1, 1].forEach(side => add(group, new T.SphereGeometry(0.025, 6, 6), M(0x111111), side * 0.07, 1.43, 0.0, 0));

  group.position.set(0.3, 0, -3.2);
  group.rotation.y = 0.6;
  scene.add(group);
}

// 4. Wall Shelves
const certificateTextures = ['ROBOTICS', 'ACHIEVEMENT'].map(title => createTexture(128, 168, (ctx, w, h) => {
  ctx.fillStyle = '#c9bea3';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#92784e';
  ctx.lineWidth = 5;
  ctx.strokeRect(6, 6, w - 12, h - 12);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#514735';
  ctx.font = '700 13px monospace';
  ctx.fillText('CERTIFICATE', w / 2, 42);
  ctx.fillText('OF', w / 2, 61);
  ctx.fillStyle = '#756447';
  ctx.font = '700 15px monospace';
  ctx.fillText(title, w / 2, 86);
  ctx.strokeStyle = '#a08b65';
  ctx.beginPath();
  ctx.moveTo(24, 108);
  ctx.lineTo(w - 24, 108);
  ctx.stroke();
  ctx.font = '10px monospace';
  ctx.fillText('AWARDED FOR', w / 2, 130);
  ctx.fillText('CREATIVITY', w / 2, 145);
}));

const shelfDrawingTexture = createTexture(128, 160, (ctx, w, h) => {
  ctx.fillStyle = '#eee5d3';
  ctx.fillRect(0, 0, w, h);
  ctx.strokeStyle = '#857960';
  ctx.lineWidth = 2;
  ctx.strokeRect(4, 4, w - 8, h - 8);
  ctx.textAlign = 'center';
  ctx.fillStyle = '#39433c';
  ctx.font = '700 12px monospace';
  ctx.fillText('VISION BOARD', w / 2, 25);
  ctx.strokeStyle = '#b8ab94';
  ctx.beginPath();
  ctx.moveTo(14, 34);
  ctx.lineTo(w - 14, 34);
  ctx.stroke();
  ctx.textAlign = 'left';
  ctx.font = '11px monospace';
  ['BUILD', 'LEARN', 'CREATE', 'GROW'].forEach((goal, index) => {
    const y = 57 + index * 21;
    ctx.strokeStyle = '#718064';
    ctx.strokeRect(14, y - 9, 10, 10);
    ctx.fillStyle = '#465044';
    ctx.fillText(goal, 32, y);
  });
  ctx.textAlign = 'center';
  ctx.fillStyle = '#9b765b';
  ctx.font = '700 11px monospace';
  ctx.fillText('DREAM BIG', w / 2, 145);
});

[-3.5, 3.5].forEach((x, k) => {
  [3.1, 4.2].forEach((y, j) => {
    buildWall(1.7, 0.1, 0.45, x, y, -5.75, trimMaterial);
    add(scene, B(1.6, 0.025, 0.035), new T.MeshBasicMaterial({ color: 0x78d9ff }), x, y - 0.055, -5.5, 0);
    const shelfLight = new T.PointLight(0xffd5a3, 0.22, 2.5);
    shelfLight.position.set(x, y - 0.2, -5.15);
    scene.add(shelfLight);

    if (k === 0 && !j) {
      [-0.45, 0, 0.45].forEach((offset, index) => {
        const ribbonMat = M([0xa63d4b, 0x315e9c, 0x7a4d87][index]);
        const medalMat = M([0xe4bd58, 0xb7c7da, 0xbc7c50][index]);
        add(scene, B(0.08, 0.2, 0.025), ribbonMat, x + offset, y - 0.1, -5.47);
        add(scene, C(0.11, 0.11, 0.025, 20), medalMat, x + offset, y - 0.31, -5.45).rotation.x = Math.PI / 2;
        add(scene, C(0.055, 0.055, 0.028, 16), M(0x4a3c2b), x + offset, y - 0.31, -5.43).rotation.x = Math.PI / 2;
      });
      const drawing = add(
        scene,
        new T.PlaneGeometry(0.65, 0.75),
        new T.MeshBasicMaterial({ map: shelfDrawingTexture, side: T.DoubleSide }),
        x,
        y + 0.425,
        -5.82,
        0
      );
    } else if (k === 0) {
      [-0.45, 0.2].forEach((offset, index) => {
        add(scene, B(0.46, 0.56, 0.06), M(0x514735), x + offset, y + 0.33, -5.82);
        add(
          scene,
          new T.PlaneGeometry(0.38, 0.48),
          new T.MeshBasicMaterial({ map: certificateTextures[index] }),
          x + offset,
          y + 0.33,
          -5.785,
          0
        );
      });
    } else if (!j) {
      addBlackLabPlush(scene, x - 0.55, y + 0.05, -5.75, 0.9);
      add(scene, new T.SphereGeometry(0.2, 12, 10), M(0xffffff), x, y + 0.2, -5.75);
      add(scene, new T.SphereGeometry(0.14, 12, 10), M(0xffffff), x + 0.17, y + 0.14, -5.75);
      [0, 1, 2].forEach(b => add(scene, B(0.08, 0.3 + b * 0.05, 0.25), M([0xf7b8d2, 0x8ec5f5, 0xffe9a8][b]), x + 0.5 + b * 0.1, y + 0.2, -5.75));
    } else if (k !== 0) {
      const addShelfFigure = (offset, torsoColor, legColor, helmetColor, maskColor, emblemColor, ninja) => {
        const figure = new T.Group();
        const torsoMat = M(torsoColor);
        const legMat = M(legColor);
        const helmetMat = M(helmetColor);
        const maskMat = M(maskColor);
        const emblemMat = M(emblemColor);

        [-1, 1].forEach(side => add(figure, B(0.075, 0.14, 0.1), legMat, side * 0.042, 0.07, 0));
        add(figure, B(0.18, 0.17, 0.1), torsoMat, 0, 0.22, 0);
        [-1, 1].forEach(side => {
          const arm = add(figure, B(0.07, 0.18, 0.07), torsoMat, side * 0.13, 0.22, 0);
          arm.rotation.z = side * 0.12;
          add(figure, new T.SphereGeometry(0.03, 8, 6), helmetMat, side * 0.14, 0.12, 0.01);
          add(figure, new T.SphereGeometry(0.01, 8, 6), M(0xffffff), side * 0.025, 0.41, 0.069);
        });
        add(figure, C(0.075, 0.075, 0.12, 12), M(0xd5b18a), 0, 0.39, 0);
        add(figure, C(0.082, 0.082, 0.05, 12), helmetMat, 0, 0.47, 0);
        add(figure, B(0.13, 0.045, 0.018), maskMat, 0, ninja ? 0.36 : 0.415, 0.066);
        if (ninja) add(figure, B(0.16, 0.035, 0.02), helmetMat, 0, 0.44, 0.06);
        add(figure, C(0.026, 0.026, 0.015, 8), emblemMat, 0, 0.23, 0.06).rotation.x = Math.PI / 2;
        figure.position.set(x + offset, y + 0.05, -5.75);
        scene.add(figure);
      };

      addShelfFigure(-0.6, 0xb83f45, 0x24252d, 0x2a2029, 0x171820, 0xe7bd57, true);
      addShelfFigure(-0.18, 0x39864f, 0x202a22, 0x24623c, 0x151a18, 0xd7b244, true);

      const rose = new T.Group();
      const copperMats = [M(0x8f4b31), M(0xb86640), M(0xd28a5d), M(0xa95535)];
      const petalShape = new T.Shape();
      petalShape.moveTo(0, 0);
      petalShape.bezierCurveTo(-0.04, 0.025, -0.065, 0.075, -0.045, 0.12);
      petalShape.bezierCurveTo(-0.03, 0.16, 0.025, 0.18, 0.055, 0.14);
      petalShape.bezierCurveTo(0.08, 0.1, 0.055, 0.05, 0, 0);
      const petalGeometry = new T.ExtrudeGeometry(petalShape, {
        depth: 0.012,
        bevelEnabled: true,
        bevelSegments: 2,
        steps: 1,
        bevelSize: 0.004,
        bevelThickness: 0.004
      });
      [
        { count: 9, radius: 0.025, scale: 1, z: 0.02 },
        { count: 7, radius: 0.012, scale: 0.78, z: 0.04 },
        { count: 5, radius: 0.006, scale: 0.58, z: 0.06 },
        { count: 3, radius: 0, scale: 0.4, z: 0.08 }
      ].forEach((layer, layerIndex) => {
        for (let petalIndex = 0; petalIndex < layer.count; petalIndex++) {
          const angle = petalIndex * Math.PI * 2 / layer.count + layerIndex * 0.2;
          const petal = add(
            rose,
            petalGeometry,
            copperMats[(petalIndex + layerIndex) % copperMats.length],
            Math.cos(angle) * layer.radius,
            0.39 + Math.sin(angle) * layer.radius,
            layer.z
          );
          petal.scale.setScalar(layer.scale);
          petal.rotation.z = angle - Math.PI / 2;
        }
      });
      const spiralPoints = Array.from({ length: 16 }, (_, index) => {
        const progress = index / 15;
        const angle = progress * Math.PI * 4;
        const radius = 0.003 + progress * 0.028;
        return new T.Vector3(Math.cos(angle) * radius, 0.39 + Math.sin(angle) * radius, 0.105);
      });
      add(
        rose,
        new T.TubeGeometry(new T.CatmullRomCurve3(spiralPoints), 32, 0.006, 5, false),
        copperMats[2],
        0,
        0,
        0,
        0
      );
      rose.position.set(x + 0.21, y + 0.05 - 0.185, -5.87);
      if (k === 1 && j === 1) {
        alvinBirthdayCopperRose = rose;
        alvinBirthdayRoseMaterials = copperMats;
        alvinBirthdayRoseLight = new T.PointLight(0xffa45d, 0, 1.8);
        alvinBirthdayRoseLight.position.set(0, 0.45, 0.38);
        rose.add(alvinBirthdayRoseLight);
      }
      scene.add(rose);

      const brickBuild = new T.Group();
      add(brickBuild, B(0.38, 0.06, 0.22), M(0x28354a), 0, 0.03, 0);
      add(brickBuild, B(0.3, 0.1, 0.2), M(0x39864f), 0, 0.11, 0);
      add(brickBuild, B(0.2, 0.12, 0.18), M(0xb83f45), 0, 0.22, 0);
      add(brickBuild, B(0.34, 0.08, 0.2), M(0x315d9b), 0, 0.32, 0);
      [-0.11, 0.11].forEach(offset => {
        add(brickBuild, C(0.025, 0.025, 0.02, 8), M(0xd7b244), offset, 0.37, 0);
      });
      brickBuild.position.set(x + 0.61, y + 0.05, -5.75);
      scene.add(brickBuild);
    }
  });

  if (k !== 0) {
    addTube([
      new T.Vector3(x - 0.8, 3.1, -5.7),
      new T.Vector3(x - 0.9, 2.6, -5.7),
      new T.Vector3(x - 0.85, 2.1, -5.7)
    ], 0.03, M(0x4f9e5f));
  }
});

// Student backpack tucked below the shelves beside the lounge TV.
{
  const backpack = new T.Group();
  const navyMat = M(0x172b58);
  const pocketMat = M(0x172b58);
  const bagBody = add(backpack, new T.SphereGeometry(1, 16, 12), navyMat, 0, 0.52, 0);
  bagBody.scale.set(0.38, 0.5, 0.22);
  add(backpack, B(0.56, 0.34, 0.12), pocketMat, 0, 0.34, 0.2);
  add(backpack, B(0.48, 0.12, 0.1), navyMat, 0, 0.58, 0.19);
  add(backpack, B(0.16, 0.08, 0.08), M(0x294579), 0, 0.38, 0.27);
  [-1, 1].forEach(side => {
    const strap = add(backpack, new T.SphereGeometry(1, 12, 10), pocketMat, side * 0.28, 0.52, -0.15);
    strap.scale.set(0.07, 0.38, 0.035);
  });
  add(backpack, new T.TorusGeometry(0.12, 0.025, 8, 16, Math.PI), pocketMat, 0, 0.98, 0).rotation.y = Math.PI / 2;
  backpack.scale.set(1.3, 1.3, 1.15);
  backpack.position.set(-1.65, 0, -5.43);
  backpack.rotation.x = -0.12;
  scene.add(backpack);
}

// 5. High-Tech Briefcase
{
  const group = new T.Group();
  add(group, B(1.2, 0.7, 0.35), M(0x20242e), 0, 0, 0);
  add(group, B(1.22, 0.05, 0.37), GL, 0, 0, 0, 0);
  add(group, new T.TorusGeometry(0.18, 0.03, 8, 14, Math.PI), M(0x8a96a8), 0, 0.35, 0);
  add(group, B(0.14, 0.1, 0.04), GL, 0.3, 0.12, 0.19, 0);

  group.position.set(-3.5, 0.35, -5.25);
  group.rotation.y = -0.35;
  registerObject('biz', 'business', 'HIGH-TECH BRIEFCASE', group, [-3.5, 0.35, -5.25], [-2.15, 1.8, -1.65], 1);
}

// 6. Gaming Lounge
{
  const group = new T.Group();
  const darkMat = M(0x1a1d29);
  const tvTexture = createTexture(256, 144, (ctx, w, h) => {
    const grad = ctx.createLinearGradient(0, 0, 0, h);
    grad.addColorStop(0, '#2b1b6e');
    grad.addColorStop(1, '#ff5fa8');
    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, w, h);
    ctx.fillStyle = '#ffe14d';
    ctx.beginPath();
    ctx.arc(128, 84, 26, 0, 7);
    ctx.fill();
    ctx.fillStyle = '#0a0f22';
    ctx.beginPath();
    ctx.moveTo(0, 144);
    ctx.lineTo(50, 90);
    ctx.lineTo(100, 144);
    ctx.lineTo(170, 80);
    ctx.lineTo(256, 144);
    ctx.fill();
    ctx.fillStyle = '#00f3ff';
    ctx.fillRect(0, 128, 256, 3);
  });
  const tvImage = new Image();
  const tvImagePaths = ['minecraft-tv.png', 'public/minecraft-tv.png'];
  let tvImagePathIndex = 0;
  tvImage.onload = () => {
    const ctx = tvTexture.image.getContext('2d');
    ctx.drawImage(tvImage, 0, 0, tvTexture.image.width, tvTexture.image.height);
    tvTexture.needsUpdate = true;
  };
  tvImage.onerror = () => {
    tvImagePathIndex += 1;
    if (tvImagePathIndex < tvImagePaths.length) {
      tvImage.src = new URL(tvImagePaths[tvImagePathIndex], document.baseURI).href;
      return;
    }
    console.error('The TV screenshot failed to load.');
  };
  tvImage.src = new URL(tvImagePaths[tvImagePathIndex], document.baseURI).href;

  add(group, C(2.3, 2.3, 0.05, 40), M(0xf4f4f0), -5.4, 0.03, -2.25);
  add(group, B(3.2, 0.55, 0.7), darkMat, -5.4, 0.28, -5.5);
  add(group, B(0.5, 0.32, 0.3), darkMat, -5.4, 0.72, -5.6);
  add(group, B(2.7, 1.55, 0.1), M(0x0c0e14), -5.4, 1.65, -5.6);
  add(group, new T.PlaneGeometry(2.5, 1.4), new T.MeshBasicMaterial({ map: tvTexture }), -5.4, 1.65, -5.54, 0);

  add(group, B(0.8, 0.12, 0.45), M(0xdfe6ef), -6.5, 0.61, -5.45);
  add(group, B(0.8, 0.025, 0.02), GL, -6.5, 0.62, -5.22, 0);

  [[-4.7, -3.4], [-4.3, -3.2]].forEach(p => {
    add(group, B(0.3, 0.08, 0.18), darkMat, p[0], 0.1, p[1]).rotation.y = R() * 3;
  });

  [
    [-6.7, -2.65, 0x8ec5f5],
    [-4.2, -2.75, 0xef8a36],
    [-5.5, -1.15, 0xa8d5a2]
  ].forEach(b => {
    const cushion = add(group, new T.SphereGeometry(0.62, 18, 14), M(b[2]), b[0], 0.45, b[1]);
    cushion.scale.set(1.1, 0.72, 1);
    cushion.rotation.y = R() * 3;
  });

  const controller = new T.Group();
  const controllerMat = M(0x172b58);
  const controllerBody = add(controller, new T.SphereGeometry(1, 16, 12), controllerMat, 0, 0.14, 0);
  controllerBody.scale.set(0.42, 0.11, 0.27);
  [-1, 1].forEach(side => {
    const grip = add(controller, new T.SphereGeometry(1, 14, 10), controllerMat, side * 0.29, 0.09, 0.02);
    grip.scale.set(0.15, 0.1, 0.2);
  });
  add(controller, B(0.2, 0.035, 0.06), M(0xb8c5dd), -0.18, 0.23, 0);
  add(controller, B(0.06, 0.035, 0.2), M(0xb8c5dd), -0.18, 0.23, 0);
  [-1, 1].forEach(side => {
    add(controller, new T.SphereGeometry(0.055, 10, 8), M(0x11151f), side * 0.1, 0.24, -0.04);
  });
  [
    [0.19, -0.07, 0xd94e65],
    [0.27, 0, 0x4aa9ff],
    [0.19, 0.07, 0x73c76b],
    [0.35, 0, 0xf2c14e]
  ].forEach(([x, z, color]) => {
    add(controller, new T.SphereGeometry(0.035, 10, 8), M(color), x, 0.24, z);
  });
  controller.position.set(-4.7, 0.57, -5.45);
  controller.rotation.set(0, 0, 0);
  group.add(controller);

  const loungeLight = new T.PointLight(0xb8a8ff, 0.8, 8);
  loungeLight.position.set(-5.4, 2.6, -3);
  group.add(loungeLight);

  group.position.x = -0.8;
  registerObject('arc', 'games', 'GAMING LOUNGE', group, [-5.5, 0.57, -5.45], [-4.4, 2.9, 0.8], 0.9);
}

// 7. Ring-Light Camera Rig
{
  const group = new T.Group();
  const darkMat = M(0x14161d);
  const metalMat = M(0x2a2e3c);
  const upVec = new T.Vector3(0, 1, 0);
  const topVec = new T.Vector3(0, 1.9, 0);

  for (let i = 0; i < 3; i++) {
    const angle = i * 2.094;
    const foot = new T.Vector3(Math.sin(angle) * 0.85, 0, Math.cos(angle) * 0.85);
    const dir = topVec.clone().sub(foot);
    const leg = add(group, C(0.03, 0.032, dir.length()), darkMat, (foot.x + topVec.x) / 2, (foot.y + topVec.y) / 2, (foot.z + topVec.z) / 2);
    leg.quaternion.setFromUnitVectors(upVec, dir.normalize());
    add(group, new T.SphereGeometry(0.05, 8, 6), metalMat, foot.x, 0.05, foot.z);
  }

  add(group, C(0.08, 0.08, 0.18), metalMat, 0, 1.85, 0);
  add(group, C(0.04, 0.04, 1.3), metalMat, 0, 2.5, 0);
  add(group, new T.SphereGeometry(0.08, 12, 10), metalMat, 0, 3.15, 0);
  add(group, B(0.07, 0.16, 0.05), darkMat, 0, 3.25, -0.03);

  add(group, new T.TorusGeometry(0.45, 0.07, 10, 40), darkMat, 0, 3.7, -0.05);
  add(group, new T.TorusGeometry(0.45, 0.045, 10, 40), new T.MeshBasicMaterial({ color: 0xfff6e0 }), 0, 3.7, 0, 0);

  add(group, B(0.04, 0.24, 0.04), darkMat, 0, 4.03, 0);
  add(group, B(0.2, 0.4, 0.04), M(0x0b0c10), 0, 3.7, 0.03);
  add(group, C(0.02, 0.02, 0.02), GL, 0, 3.85, 0.06, 0).rotation.x = Math.PI / 2;

  const ringLight = new T.PointLight(0xfff0d8, 0.9, 6);
  ringLight.position.set(0, 3.7, 0.9);
  group.add(ringLight);

  group.position.set(7.1, 0, 2.6);
  group.rotation.y = -0.9;
  registerObject('cam', 'youtube', 'RING-LIGHT CAM RIG', group, [7.1, 3.7, 2.6], [4.6, 3.9, 4.6], 1);
}

// 8. Holographic Business Card (Moved to Left Side Behind Lounge Area)
const holoCardGroup = new T.Group();
{
  add(holoCardGroup, C(0.5, 0.6, 0.9), M(0x1d2133), 0, 0.45, 0);
  add(holoCardGroup, C(0.4, 0.4, 0.04), GL, 0, 0.92, 0, 0);

  const cardMesh = new T.Mesh(
    new T.PlaneGeometry(1.7, 1),
    new T.MeshBasicMaterial({
      map: createTexture(340, 200, (ctx, w, h) => {
        ctx.fillStyle = 'rgba(0,60,80,.55)';
        ctx.fillRect(0, 0, w, h);
        ctx.strokeStyle = '#00f3ff';
        ctx.lineWidth = 4;
        ctx.strokeRect(4, 4, w - 8, h - 8);
        ctx.fillStyle = '#00f3ff';
        ctx.font = '700 26px monospace';
        ctx.fillText('REYAA DIVAKAR', 24, 75);
        ctx.fillStyle = '#fff';
        ctx.font = '14px monospace';
        ctx.fillText('MECHANICAL ENGINEERING', 24, 110);
        ctx.fillText('reyaadivakar@gmail.com', 24, 150);
      }),
      transparent: true,
      blending: T.AdditiveBlending,
      side: T.DoubleSide,
      depthWrite: false
    })
  );
  cardMesh.position.y = 1.9;
  cardMesh.userData.noInk = 1;
  holoCardGroup.add(cardMesh);
  holoCardGroup.userData.card = cardMesh;

  const beamMesh = new T.Mesh(
    new T.ConeGeometry(0.5, 1, 20, 1, true),
    new T.MeshBasicMaterial({ color: 0x00f3ff, transparent: true, opacity: 0.12, depthWrite: false, side: T.DoubleSide })
  );
  beamMesh.position.y = 1.4;
  beamMesh.userData.noInk = 1;
  holoCardGroup.add(beamMesh);

  holoCardGroup.position.set(-2.9, 0, 4.1);
  registerObject('card', 'contact', 'HOLOGRAPHIC BUSINESS CARD', holoCardGroup, [-2.9, 1.9, 4.1], [-1.9, 2.4, 7.5], 1.1);
}

// 9. Headphones -> Spotify Link
{
  const group = new T.Group();
  const navyMat = M(0x172b58);
  const rainbow = [0xff3b45, 0xffa52f, 0xffe34d, 0x42d66b, 0x3c9bff, 0xa657ff];
  add(group, C(0.16, 0.18, 0.04), navyMat, 0, 0.02, 0);
  add(group, C(0.025, 0.025, 0.8), navyMat, 0, 0.4, 0);
  add(group, new T.TorusGeometry(0.3, 0.04, 8, 24, Math.PI), navyMat, 0, 0.52, 0);

  [-1, 1].forEach(side => {
    add(group, C(0.14, 0.14, 0.1, 20), navyMat, side * 0.3, 0.5, 0).rotation.z = Math.PI / 2;
    rainbow.forEach((color, index) => {
      const segment = add(
        group,
        new T.TorusGeometry(0.1, 0.018, 6, 8, Math.PI / 3),
        new T.MeshBasicMaterial({ color }),
        side * 0.36,
        0.5,
        0,
        0
      );
      segment.rotation.set(0, Math.PI / 2, index * Math.PI / 3);
    });
  });

  group.position.set(1.9, 1.9, -4.4);
  group.rotation.y = 0.35;
  registerObject('hp', 'music', 'HEADPHONES', group, [1.9, 2.4, -4.4], [1.9, 3, -1.6], 0.55);
}

// 10. Gym Corner
{
  const group = new T.Group();
  const darkMat = M(0x15171c);
  const hexMat = M(0x20232b);
  const tealMat = M(0x2fb6b0);

  const pushBoardTexture = createTexture(256, 160, (ctx, w, h) => {
    ctx.fillStyle = '#222a3d';
    ctx.fillRect(0, 0, w, h);
    [
      ['#ff4d4d', 50, 40],
      ['#ffa63b', 50, 120],
      ['#4dff7a', 128, 40],
      ['#3b8bff', 128, 120],
      ['#b04dff', 206, 40],
      ['#ffe14d', 206, 120]
    ].forEach(c => {
      ctx.fillStyle = c[0];
      ctx.beginPath();
      ctx.arc(c[1], c[2], 20, 0, 7);
      ctx.fill();
    });
  });

  add(group, B(5, 0.06, 4.2), M(0x2b3245), 6.35, 0.03, 5.4);

  const rackGroup = new T.Group();
  [-1, 1].forEach(a => [-1, 1].forEach(b => add(rackGroup, B(0.08, 1.9, 0.08), darkMat, a * 1.55, 0.95, b * 0.28)));
  [-1, 1].forEach(a => add(rackGroup, B(0.08, 0.08, 0.64), darkMat, a * 1.55, 1.9, 0));
  [0.3, 0.95, 1.5].forEach(y => add(rackGroup, B(3.2, 0.04, 0.56), darkMat, 0, y, 0));

  for (let i = 0; i < 5; i++) {
    const x = -1.2 + i * 0.6;
    add(rackGroup, C(0.03, 0.03, 0.38), hexMat, x, 0.46, 0).rotation.z = Math.PI / 2;
    [-1, 1].forEach(s => add(rackGroup, C(0.15, 0.15, 0.1, 6), hexMat, x + s * 0.19, 0.46, 0).rotation.z = Math.PI / 2);
  }

  [-1.1, -0.3, 0.5].forEach(x => {
    add(rackGroup, new T.SphereGeometry(0.17, 14, 10), tealMat, x, 1.14, 0);
    add(rackGroup, new T.TorusGeometry(0.1, 0.025, 6, 14, Math.PI), tealMat, x, 1.28, 0);
  });

  for (let i = 0; i < 7; i++) {
    const x = -1.2 + i * 0.4;
    const colorMat = M([0x4cb35a, 0x3fa650, 0x58c068][i % 3]);
    add(rackGroup, C(0.025, 0.025, 0.3), hexMat, x, 1.6, 0).rotation.z = Math.PI / 2;
    [-1, 1].forEach(s => add(rackGroup, C(0.09, 0.09, 0.08, 6), colorMat, x + s * 0.15, 1.6, 0).rotation.z = Math.PI / 2);
  }

  add(rackGroup, B(0.06, 0.05, 0.62), darkMat, 1.6, 1.45, 0);
  add(rackGroup, B(0.06, 0.05, 0.62), darkMat, -1.6, 1.45, 0);

  [-0.12, 0.12].forEach(z => {
    add(rackGroup, new T.SphereGeometry(0.1, 10, 8), M(0xd04050), 1.7, 1.2, z).scale.set(1, 1.2, 0.9);
    add(rackGroup, C(0.06, 0.06, 0.08), M(0xf4f7fb), 1.7, 1.34, z);
    add(rackGroup, C(0.015, 0.015, 0.1), hexMat, 1.7, 1.4, z);
  });

  add(rackGroup, new T.TorusGeometry(0.22, 0.012, 6, 20), hexMat, -1.7, 1.2, 0, 0).rotation.y = Math.PI / 2;
  [-0.15, 0.15].forEach(z => add(rackGroup, C(0.025, 0.025, 0.3), M(0x2d6cdf), -1.7, 0.82, z));

  rackGroup.position.set(8.57, 0, 5.2);
  rackGroup.rotation.y = -Math.PI / 2;
  group.add(rackGroup);

  const addNikeShoe = (x, z, rotation) => {
    const shoe = new T.Group();
    const upperMat = M(0xb72d3d);
    const blackMat = M(0x171a22);
    const soleMat = M(0xe8e8e2);
    add(shoe, B(0.3, 0.035, 0.6), blackMat, 0, 0.02, 0);
    add(shoe, B(0.32, 0.06, 0.64), soleMat, 0, 0.065, 0);
    const upper = add(shoe, new T.SphereGeometry(1, 16, 12), upperMat, 0, 0.18, 0.015);
    upper.scale.set(0.145, 0.15, 0.27);
    const toeCap = add(shoe, new T.SphereGeometry(1, 16, 10), upperMat, 0, 0.15, 0.17);
    toeCap.scale.set(0.14, 0.095, 0.17);
    add(shoe, B(0.25, 0.33, 0.19), blackMat, 0, 0.38, -0.065);
    add(shoe, B(0.2, 0.3, 0.055), upperMat, 0, 0.38, 0.14);
    add(shoe, B(0.14, 0.25, 0.04), soleMat, 0, 0.38, 0.18);
    [0.29, 0.34, 0.39, 0.44].forEach(y => {
      add(shoe, B(0.13, 0.018, 0.025), soleMat, 0, y, 0.205);
    });
    add(shoe, B(0.25, 0.055, 0.035), upperMat, 0, 0.55, -0.065);
    [-1, 1].forEach(side => {
      const swooshCurve = new T.CatmullRomCurve3([
        new T.Vector3(side * 0.15, 0.19, -0.18),
        new T.Vector3(side * 0.16, 0.22, -0.02),
        new T.Vector3(side * 0.16, 0.27, 0.08),
        new T.Vector3(side * 0.15, 0.34, 0.18)
      ]);
      add(shoe, new T.TubeGeometry(swooshCurve, 14, 0.018, 5, false), soleMat, 0, 0, 0, 0);
    });
    shoe.position.set(x, 0, z);
    shoe.rotation.y = rotation;
    group.add(shoe);
  };
  addNikeShoe(8.02, 7.1, 0.08);
  addNikeShoe(8.64, 7.1, -0.08);

  const skateboard = new T.Group();
  const deckShape = new T.Shape();
  deckShape.moveTo(-0.2, -0.86);
  deckShape.quadraticCurveTo(-0.32, -0.87, -0.32, -0.69);
  deckShape.lineTo(-0.32, 0.68);
  deckShape.quadraticCurveTo(-0.32, 0.86, -0.2, 0.88);
  deckShape.quadraticCurveTo(0, 0.96, 0.2, 0.88);
  deckShape.quadraticCurveTo(0.32, 0.86, 0.32, 0.68);
  deckShape.lineTo(0.32, -0.69);
  deckShape.quadraticCurveTo(0.32, -0.87, 0.2, -0.86);
  deckShape.quadraticCurveTo(0, -0.94, -0.2, -0.86);
  deckShape.closePath();

  const deckMesh = new T.Mesh(
    new T.ExtrudeGeometry(deckShape, {
      depth: 0.07,
      bevelEnabled: true,
      bevelSegments: 2,
      steps: 1,
      bevelSize: 0.018,
      bevelThickness: 0.018
    }),
    M(0x24232b)
  );
  deckMesh.position.z = -0.035;
  skateboard.add(deckMesh);

  const dragonArtwork = createTexture(256, 512, ctx => {
    ctx.save();
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.shadowColor = 'rgba(43, 156, 255, 0.6)';
    ctx.shadowBlur = 12;

    ctx.strokeStyle = '#258fff';
    ctx.lineWidth = 22;
    ctx.beginPath();
    ctx.moveTo(128, 474);
    ctx.bezierCurveTo(50, 414, 214, 365, 127, 311);
    ctx.bezierCurveTo(42, 257, 218, 222, 129, 165);
    ctx.bezierCurveTo(91, 140, 111, 111, 131, 88);
    ctx.stroke();

    ctx.fillStyle = '#258fff';
    ctx.beginPath();
    ctx.moveTo(107, 111);
    ctx.lineTo(92, 75);
    ctx.lineTo(123, 92);
    ctx.lineTo(145, 62);
    ctx.lineTo(151, 100);
    ctx.lineTo(184, 110);
    ctx.lineTo(153, 129);
    ctx.lineTo(120, 130);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = '#b7eaff';
    ctx.beginPath();
    ctx.arc(145, 105, 5, 0, Math.PI * 2);
    ctx.fill();

    ctx.shadowBlur = 0;
    ctx.strokeStyle = '#72c7ff';
    ctx.lineWidth = 7;
    for (let index = 0; index < 9; index++) {
      const y = 172 + index * 26;
      const x = 128 + Math.sin(index * 0.95) * 35;
      ctx.beginPath();
      ctx.moveTo(x, y);
      ctx.lineTo(x + (index % 2 ? -27 : 27), y - 18);
      ctx.stroke();
    }

    ctx.strokeStyle = 'rgba(100, 195, 255, 0.95)';
    ctx.lineWidth = 6;
    ctx.beginPath();
    ctx.moveTo(128, 474);
    ctx.bezierCurveTo(50, 414, 214, 365, 127, 311);
    ctx.bezierCurveTo(42, 257, 218, 222, 129, 165);
    ctx.stroke();
    ctx.restore();
  });
  const artworkMesh = new T.Mesh(
    new T.PlaneGeometry(0.5, 1.54),
    new T.MeshBasicMaterial({
      map: dragonArtwork,
      transparent: true,
      side: T.DoubleSide,
      depthWrite: false
    })
  );
  artworkMesh.position.z = 0.043;
  skateboard.add(artworkMesh);

  const truckMaterial = M(0xaeb5bf);
  const wheelMaterial = M(0xd8d6d0);
  [-0.52, 0.52].forEach(y => {
    add(skateboard, B(0.46, 0.055, 0.11), truckMaterial, 0, y, 0.09);
    [-1, 1].forEach(side => {
      const wheel = add(
        skateboard,
        new T.CylinderGeometry(0.11, 0.11, 0.09, 14),
        wheelMaterial,
        side * 0.34,
        y,
        0.1
      );
      wheel.rotation.z = Math.PI / 2;
    });
  });

  skateboard.position.set(8.65, 0.96, 7.95);
  skateboard.rotation.y = -Math.PI / 2;
  skateboard.rotation.z = -0.16;
  group.add(skateboard);

  const sketchbook = new T.Group();
  const coverMaterial = M(0x30271f);
  const paperMaterial = M(0xe4d9c2);
  add(sketchbook, B(1.02, 0.035, 0.7), coverMaterial, 0, 0.018, 0);
  add(sketchbook, B(0.04, 0.04, 0.66), M(0x6a5842), 0, 0.042, 0);
  [-1, 1].forEach(side => {
    add(sketchbook, B(0.48, 0.018, 0.64), paperMaterial, side * 0.25, 0.045, 0);
  });

  const notesPage = createTexture(256, 320, (ctx, width, height) => {
    ctx.fillStyle = '#e8dfcb';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#9aabb7';
    ctx.lineWidth = 2;
    for (let y = 52; y < height - 20; y += 28) {
      ctx.beginPath();
      ctx.moveTo(24, y);
      ctx.lineTo(width - 18, y);
      ctx.stroke();
    }
    ctx.strokeStyle = '#be756f';
    ctx.beginPath();
    ctx.moveTo(46, 18);
    ctx.lineTo(46, height - 16);
    ctx.stroke();
    ctx.fillStyle = '#474b52';
    ctx.font = 'bold 20px sans-serif';
    ctx.fillText('IDEAS', 58, 39);
    ctx.font = 'italic 16px sans-serif';
    ctx.fillText('shape study', 58, 72);
    ctx.fillText('balance + flow', 58, 100);
  });
  const dragonSketchPage = createTexture(256, 320, ctx => {
    ctx.fillStyle = '#e8dfcb';
    ctx.fillRect(0, 0, 256, 320);
    ctx.strokeStyle = '#57595b';
    ctx.lineWidth = 5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();
    ctx.moveTo(45, 205);
    ctx.bezierCurveTo(95, 155, 140, 218, 183, 162);
    ctx.bezierCurveTo(213, 122, 161, 98, 134, 127);
    ctx.bezierCurveTo(102, 158, 177, 174, 193, 128);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(177, 145);
    ctx.lineTo(218, 126);
    ctx.lineTo(204, 160);
    ctx.moveTo(133, 129);
    ctx.lineTo(120, 96);
    ctx.lineTo(148, 112);
    ctx.moveTo(104, 170);
    ctx.lineTo(74, 155);
    ctx.moveTo(158, 188);
    ctx.lineTo(179, 214);
    ctx.stroke();
    ctx.fillStyle = '#b68646';
    ctx.beginPath();
    ctx.arc(191, 137, 4, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = '#9aabb7';
    ctx.lineWidth = 2;
    for (let y = 247; y < 303; y += 22) {
      ctx.beginPath();
      ctx.moveTo(24, y);
      ctx.lineTo(232, y);
      ctx.stroke();
    }
  });
  const addSketchPage = (texture, x) => {
    const page = new T.Mesh(
      new T.PlaneGeometry(0.44, 0.59),
      new T.MeshBasicMaterial({ map: texture, side: T.DoubleSide })
    );
    page.rotation.x = -Math.PI / 2;
    page.position.set(x, 0.056, 0);
    sketchbook.add(page);
  };
  addSketchPage(notesPage, -0.25);
  addSketchPage(dragonSketchPage, 0.25);
  sketchbook.position.set(6, 0.06, 6.5);
  sketchbook.rotation.y = -0.18;
  group.add(sketchbook);

  add(group, B(0.9, 0.05, 0.55), MT(pushBoardTexture), 5.65, 0.09, 5.6).rotation.y = 0.2;

  const ballGroup = new T.Group();
  add(ballGroup, new T.SphereGeometry(0.22, 18, 12), M(0x8a4b22)).scale.set(1.7, 0.95, 0.95);
  add(ballGroup, B(0.28, 0.02, 0.04), M(0xf4f7fb), 0, 0.2, 0);
  [-1, 1].forEach(side => add(ballGroup, new T.TorusGeometry(0.18, 0.012, 6, 16), M(0xf4f7fb), side * 0.2, 0, 0).rotation.y = Math.PI / 2);

  ballGroup.position.set(4.55, 0.21, 6.8);
  ballGroup.rotation.y = 0.5;
  registerObject('facts', 'funfacts', 'OTHER FUN FACTS', ballGroup, [4, 0.45, 6.6], [2.4, 2.5, 8.5], 0.8);

  scene.add(group);
}

// 11. LED Neon Signs
const createVector = (x, y) => new T.Vector3(x, y, 0);
const createSegment = (start, end) => new T.LineCurve3(createVector(...start), createVector(...end));

const buildNeonSign = (items, lightColor, x, y, z, rotY, w, h) => {
  const group = new T.Group();
  group.position.set(x, y, z);
  group.rotation.y = rotY;
  add(group, B(w, h, 0.05), M(0x0e1220), 0, 0, -0.06);

  items.forEach(item => {
    const tubeGeo = new T.TubeGeometry(item[0], item[0].isLineCurve3 ? 1 : 48, 0.04, 6, !!item[0].closed);
    group.add(new T.Mesh(tubeGeo, new T.MeshBasicMaterial({ color: item[1] })));
  });

  const neonLight = new T.PointLight(lightColor, 0.4, 6);
  neonLight.position.z = 0.7;
  group.add(neonLight);
  scene.add(group);
  return group;
};

{
  const cloudPoints = [
    [-1.1, 0], [-1.5, 0.3], [-1.35, 0.75], [-0.9, 0.85], [-0.65, 1.3],
    [-0.1, 1.5], [0.4, 1.3], [0.6, 0.95], [1.1, 0.95], [1.5, 0.6],
    [1.3, 0.1], [0.9, 0], [0, -0.05]
  ].map(p => createVector(p[0] * 0.85 - 0.1, p[1] * 0.85 - 0.25));

  const lightningPoints = [
    [0.1, -0.1], [-0.3, -0.75], [-0.08, -0.75], [-0.22, -1.4],
    [0.3, -0.6], [0.07, -0.6], [0.1, -0.1]
  ].map(p => [p[0] - 0.1, p[1] + 0.35]);

  const items = [[new T.CatmullRomCurve3(cloudPoints, true), 0xbfeaff]].concat(
    lightningPoints.slice(1).map((p, i) => [createSegment(lightningPoints[i], p), 0xffe14d])
  );

  buildNeonSign(items, 0x9fd8ff, -6.2, 4.1, -5.8, 0, 3.2, 2.9);
}

{
  const points = [[0.2, 1.3], [-0.5, 0], [-0.05, 0], [-0.3, -1.3], [0.5, 0.25], [0.05, 0.25], [0.2, 1.3]];
  const items = points.slice(1).map((p, i) => [createSegment(points[i], p), 0x00f3ff]);
  buildNeonSign(items, 0x00f3ff, 7.4, 4.6, -5.8, 0, 1.8, 3.1);
}

{
  const rainbowItems = [[1.2, 0xff3b3b], [1, 0xffa63b], [0.8, 0x4dff7a], [0.6, 0x3b8bff], [0.4, 0xb04dff]].map(arc => {
    const points = [];
    for (let i = 0; i <= 20; i++) {
      const t = (i / 20) * Math.PI;
      points.push(createVector(Math.cos(t) * arc[0], Math.sin(t) * arc[0] - 0.6));
    }
    return [new T.CatmullRomCurve3(points), arc[1]];
  });
  buildNeonSign(rainbowItems, 0xff8ad0, 8.78, 4.6, 4.6, -Math.PI / 2, 3, 1.8);
}

const holidayElements = [];
const holidayParticleSystems = [];
const holidayFlybys = [];
const christmasLightMaterials = [];
let halloweenGhost;
const newYearBalloonColors = [0xd4af37, 0xf7f4ec, 0x17171d];
const newYearBalloonGeometry = new T.SphereGeometry(1, 16, 12);
const newYearBalloonKnotGeometry = new T.ConeGeometry(0.04, 0.07, 8);
const newYearBalloonMaterials = newYearBalloonColors.map(color => new T.MeshPhongMaterial({
  color,
  specular: 0xffffff,
  shininess: 90
}));
const newYearBalloonHighlightMaterial = new T.MeshBasicMaterial({
  color: 0xffffff,
  transparent: true,
  opacity: 0.45
});
const newYearIntroBalloonGroup = new T.Group();
newYearIntroBalloonGroup.visible = false;
scene.add(newYearIntroBalloonGroup);
const newYearFloorBalloons = [];
const newYearFallingBalloons = [];

function createNewYearBalloon(colorIndex, materials = newYearBalloonMaterials) {
  const balloon = new T.Group();
  const body = new T.Mesh(newYearBalloonGeometry, materials[colorIndex]);
  body.scale.set(0.26, 0.33, 0.23);
  balloon.add(body);

  const highlight = new T.Mesh(newYearBalloonGeometry, newYearBalloonHighlightMaterial);
  highlight.position.set(-0.085, 0.12, 0.202);
  highlight.scale.set(0.045, 0.11, 0.015);
  balloon.add(highlight);

  const knot = new T.Mesh(newYearBalloonKnotGeometry, materials[colorIndex]);
  knot.position.y = -0.35;
  balloon.add(knot);
  return balloon;
}

function registerHolidayElement(theme, group, parent = scene) {
  parent.add(group);
  holidayElements.push({ theme, group });
  return group;
}

function addHolidayTree(parent, x, y, z, height, color, ornaments = false) {
  const tree = new T.Group();
  tree.position.set(x, y, z);
  const foliage = M(color);
  const trunk = M(0x68472f);
  add(tree, C(0.07, 0.09, height * 0.13, 10), trunk, 0, height * 0.065, 0);
  add(tree, new T.ConeGeometry(height * 0.23, height * 0.48, 10), foliage, 0, height * 0.34, 0);
  add(tree, new T.ConeGeometry(height * 0.17, height * 0.4, 10), foliage, 0, height * 0.65, 0);
  if (ornaments) {
    const colors = [0xe8c75b, 0xe75a50, 0x69c7aa, 0xf3e7d0];
    [
      [-0.12, 0.26, 0.13], [0.13, 0.35, 0.08], [-0.07, 0.49, 0.14],
      [0.08, 0.61, 0.1], [-0.02, 0.76, 0.06]
    ].forEach(([ox, oy, oz], index) => {
      add(tree, new T.SphereGeometry(height * 0.035, 8, 6), M(colors[index % colors.length]), ox, oy * height, oz);
    });
    add(tree, new T.SphereGeometry(height * 0.055, 8, 6), M(0xffdf7e), 0, height * 0.86, 0);
  }
  parent.add(tree);
  return tree;
}

function createHolidayHeart(color = 0xe64b67) {
  const shape = new T.Shape();
  shape.moveTo(0, -0.2);
  shape.bezierCurveTo(-0.4, 0.08, -0.32, 0.38, -0.08, 0.34);
  shape.bezierCurveTo(0, 0.32, 0.04, 0.24, 0, 0.2);
  shape.bezierCurveTo(0.04, 0.24, 0.08, 0.32, 0.18, 0.34);
  shape.bezierCurveTo(0.42, 0.38, 0.4, 0.08, 0, -0.2);
  return new T.Mesh(new T.ShapeGeometry(shape), new T.MeshBasicMaterial({ color, side: T.DoubleSide }));
}

function addDeskTurkey(parent, x, y, z) {
  const turkey = new T.Group();
  turkey.position.set(x, y, z);
  const bodyMat = M(0x80502f);
  const featherColors = [0xc64e34, 0xe09139, 0xd8b24b, 0x8c6440, 0xa54238];
  featherColors.forEach((color, index) => {
    const feather = add(turkey, new T.SphereGeometry(0.2, 12, 8), M(color), (index - 2) * 0.13, 0.43, -0.12);
    feather.scale.set(0.75, 1.2, 0.36);
    feather.rotation.z = (index - 2) * -0.16;
  });
  const body = add(turkey, new T.SphereGeometry(0.22, 14, 10), bodyMat, 0, 0.2, 0.02);
  body.scale.set(1, 0.82, 0.85);
  add(turkey, new T.SphereGeometry(0.12, 12, 10), bodyMat, 0, 0.47, 0.03);
  add(turkey, new T.ConeGeometry(0.045, 0.11, 8), M(0xe4a738), 0, 0.44, 0.17).rotation.x = Math.PI / 2;
  add(turkey, new T.SphereGeometry(0.035, 8, 6), M(0xc94a3f), 0.08, 0.38, 0.13);
  [-1, 1].forEach(side => add(turkey, new T.SphereGeometry(0.018, 6, 6), M(0x171820), side * 0.045, 0.5, 0.13));
  parent.add(turkey);
  return turkey;
}

function addDeskPumpkin(parent, x, y, z) {
  const pumpkin = new T.Group();
  pumpkin.position.set(x, y, z);
  const orange = M(0xe8752d);
  const body = add(pumpkin, new T.SphereGeometry(0.34, 18, 14), orange, 0, 0.25, 0);
  body.scale.set(1, 0.76, 0.82);
  [-1, 1].forEach(side => {
    const eye = add(pumpkin, new T.ConeGeometry(0.07, 0.13, 3), M(0x34212a), side * 0.12, 0.3, 0.26);
    eye.rotation.z = Math.PI;
  });
  add(pumpkin, B(0.18, 0.045, 0.035), M(0x34212a), 0, 0.13, 0.27);
  add(pumpkin, C(0.055, 0.04, 0.16, 8), M(0x527a42), 0, 0.52, 0).rotation.z = -0.16;
  parent.add(pumpkin);
  return pumpkin;
}

function addDeskCake(parent, x, y, z) {
  const cake = new T.Group();
  cake.position.set(x, y, z);
  add(cake, C(0.37, 0.4, 0.22, 20), M(0xe9a9bb), 0, 0.12, 0);
  add(cake, C(0.39, 0.39, 0.055, 20), M(0xffe6da), 0, 0.25, 0);
  add(cake, new T.TorusGeometry(0.34, 0.025, 8, 24), M(0xffd66b), 0, 0.2, 0).rotation.x = Math.PI / 2;
  add(cake, C(0.025, 0.025, 0.16, 8), M(0x6ab8d2), 0, 0.36, 0);
  add(cake, new T.SphereGeometry(0.045, 8, 6), M(0xff9a5c), 0, 0.47, 0);
  parent.add(cake);
  return cake;
}

function addThanksgivingSign() {
  const sign = new T.Group();
  add(sign, B(2.8, 0.88, 0.14), M(0x79502f), 0, 0, 0);

  const faceTexture = createTexture(512, 160, (ctx, width, height) => {
    ctx.fillStyle = '#f2e3c9';
    ctx.fillRect(0, 0, width, height);
    ctx.strokeStyle = '#c99a61';
    ctx.lineWidth = 5;
    ctx.strokeRect(10, 10, width - 20, height - 20);
    ctx.fillStyle = '#95603a';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.font = 'italic 700 100px "Brush Script MT", "Segoe Script", cursive';
    ctx.shadowColor = 'rgba(107, 63, 38, 0.2)';
    ctx.shadowBlur = 4;
    ctx.fillText('THANKS', width / 2, height / 2 + 3, width - 52);
  });
  add(
    sign,
    new T.PlaneGeometry(2.62, 0.7),
    new T.MeshBasicMaterial({ map: faceTexture }),
    0,
    0,
    0.08
  );
  [-1, 1].forEach(side => {
    [-1, 1].forEach(vertical => {
      add(sign, new T.SphereGeometry(0.035, 8, 6), M(0xd7ae69), side * 1.31, vertical * 0.34, 0.09);
    });
  });
  sign.position.set(8.78, 3.05, 4.6);
  sign.rotation.y = -Math.PI / 2;
  registerHolidayElement('thanksgiving', sign);
}

function addDeskBunny(parent, x, y, z) {
  const bunny = new T.Group();
  bunny.position.set(x, y, z);
  const fur = M(0xf1e8dc);
  const part = (px, py, pz, sx, sy, sz, material = fur) => {
    const mesh = add(bunny, new T.SphereGeometry(1, 12, 10), material, px, py, pz);
    mesh.scale.set(sx, sy, sz);
    return mesh;
  };
  part(0, 0.18, 0, 0.18, 0.2, 0.15);
  part(0, 0.42, 0.02, 0.15, 0.15, 0.13);
  part(-0.08, 0.67, 0, 0.055, 0.2, 0.06).rotation.z = -0.16;
  part(0.08, 0.67, 0, 0.055, 0.2, 0.06).rotation.z = 0.16;
  part(-0.055, 0.43, 0.13, 0.018, 0.022, 0.015, M(0x352b30));
  part(0.055, 0.43, 0.13, 0.018, 0.022, 0.015, M(0x352b30));
  part(0, 0.39, 0.15, 0.025, 0.02, 0.018, M(0xe9a2aa));
  parent.add(bunny);
  return bunny;
}

function addDeskChicken(parent, x, y, z) {
  const chicken = new T.Group();
  chicken.position.set(x, y, z);
  const feathers = M(0xf4d45e);
  const beak = M(0xe98e35);
  const body = add(chicken, new T.SphereGeometry(1, 14, 12), feathers, 0, 0.19, 0);
  body.scale.set(0.19, 0.2, 0.16);
  const head = add(chicken, new T.SphereGeometry(1, 14, 12), feathers, 0, 0.43, 0.03);
  head.scale.set(0.14, 0.14, 0.13);
  [-1, 1].forEach(side => {
    const wing = add(chicken, new T.SphereGeometry(1, 10, 8), M(0xe9bd45), side * 0.14, 0.2, 0.015);
    wing.scale.set(0.08, 0.12, 0.11);
    add(chicken, new T.SphereGeometry(0.022, 8, 6), M(0x302a27), side * 0.05, 0.45, 0.145);
    const foot = add(chicken, C(0.018, 0.018, 0.11, 6), beak, side * 0.08, 0.045, 0.015);
    foot.rotation.z = Math.PI / 2;
  });
  add(chicken, new T.ConeGeometry(0.045, 0.09, 3), beak, 0, 0.4, 0.17).rotation.x = Math.PI / 2;
  add(chicken, new T.SphereGeometry(0.04, 8, 6), M(0xe35b48), 0, 0.58, 0.02);
  add(chicken, new T.SphereGeometry(0.035, 8, 6), M(0xe35b48), 0.045, 0.55, 0.02);
  parent.add(chicken);
  return chicken;
}

function addDeskTeddy(parent, x, y, z) {
  const teddy = new T.Group();
  teddy.position.set(x, y, z);
  const fur = M(0x9b6948);
  const part = (px, py, pz, sx, sy, sz, material = fur) => {
    const mesh = add(teddy, new T.SphereGeometry(1, 12, 10), material, px, py, pz);
    mesh.scale.set(sx, sy, sz);
    return mesh;
  };
  part(0, 0.2, 0, 0.2, 0.23, 0.16);
  part(0, 0.48, 0, 0.16, 0.16, 0.14);
  [-1, 1].forEach(side => {
    part(side * 0.13, 0.61, 0, 0.065, 0.065, 0.05);
    part(side * 0.23, 0.28, 0.02, 0.08, 0.17, 0.09).rotation.z = side * -0.25;
    part(side * 0.11, 0.5, 0.13, 0.018, 0.022, 0.014, M(0x241c1c));
  });
  part(0, 0.43, 0.14, 0.06, 0.045, 0.04, M(0xf0d7be));
  part(0, 0.45, 0.175, 0.02, 0.018, 0.015, M(0x34221c));
  const heart = createHolidayHeart(0xe84e68);
  heart.scale.setScalar(0.34);
  heart.position.set(0.03, 0.22, 0.18);
  teddy.add(heart);
  parent.add(teddy);
  return teddy;
}

function createParticleSprite(kind) {
  return createTexture(64, 64, (ctx, width, height) => {
    ctx.translate(width / 2, height / 2);
    if (kind === 'heart') {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.moveTo(0, 21);
      ctx.bezierCurveTo(-42, -5, -25, -31, -5, -18);
      ctx.bezierCurveTo(0, -14, 4, -14, 8, -18);
      ctx.bezierCurveTo(29, -31, 42, -5, 0, 21);
      ctx.fill();
    } else if (kind === 'leaf') {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(0, 0, 15, 25, -0.55, 0, Math.PI * 2);
      ctx.fill();
      ctx.strokeStyle = '#999999';
      ctx.lineWidth = 2;
      ctx.beginPath();
      ctx.moveTo(-12, 18);
      ctx.lineTo(13, -17);
      ctx.stroke();
    } else if (kind === 'petal') {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.ellipse(0, 0, 11, 22, 0.45, 0, Math.PI * 2);
      ctx.fill();
    } else if (kind === 'spark') {
      const glow = ctx.createRadialGradient(0, 0, 1, 0, 0, 30);
      glow.addColorStop(0, '#ffffff');
      glow.addColorStop(0.22, '#fff8c4');
      glow.addColorStop(0.55, '#ffb52e');
      glow.addColorStop(1, 'rgba(255, 91, 24, 0)');
      ctx.fillStyle = glow;
      ctx.beginPath();
      ctx.arc(0, 0, 30, 0, Math.PI * 2);
      ctx.fill();
    } else if (kind === 'confetti') {
      ctx.fillStyle = '#ffffff';
      ctx.rotate(0.35);
      ctx.fillRect(-10, -25, 20, 50);
    } else {
      ctx.fillStyle = '#ffffff';
      ctx.beginPath();
      ctx.arc(32, 32, 24, 0, Math.PI * 2);
      ctx.fill();
    }
  });
}

function createHolidayFlyby(kind, shadow = false) {
  const texture = createTexture(160, 96, ctx => {
    ctx.save();
    ctx.fillStyle = shadow ? '#171523' : '#25212d';
    ctx.strokeStyle = ctx.fillStyle;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';

    if (kind === 'witch') {
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(20, 67);
      ctx.lineTo(145, 75);
      ctx.stroke();
      ctx.lineWidth = 3;
      [0, 1, 2, 3].forEach(index => {
        ctx.beginPath();
        ctx.moveTo(143 + index * 2, 74);
        ctx.lineTo(155, 61 + index * 8);
        ctx.stroke();
      });
      ctx.beginPath();
      ctx.moveTo(62, 47);
      ctx.lineTo(89, 39);
      ctx.lineTo(103, 70);
      ctx.lineTo(49, 70);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(76, 35, 10, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.moveTo(63, 27);
      ctx.lineTo(77, 5);
      ctx.lineTo(87, 28);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.ellipse(76, 28, 19, 3, 0, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.beginPath();
      ctx.moveTo(59, 49);
      ctx.lineTo(36, 61);
      ctx.moveTo(88, 47);
      ctx.lineTo(107, 58);
      ctx.stroke();
    } else {
      if (!shadow) {
        ctx.fillStyle = '#6e322f';
        ctx.beginPath();
        ctx.moveTo(15, 70);
        ctx.quadraticCurveTo(25, 55, 66, 58);
        ctx.lineTo(103, 64);
        ctx.lineTo(111, 76);
        ctx.lineTo(25, 78);
        ctx.closePath();
        ctx.fill();
        ctx.strokeStyle = shadow ? '#171523' : '#4b2630';
        ctx.lineWidth = 4;
        ctx.beginPath();
        ctx.moveTo(30, 65);
        ctx.quadraticCurveTo(22, 38, 51, 35);
        ctx.stroke();
        ctx.fillStyle = '#c84139';
      }
      ctx.beginPath();
      ctx.ellipse(76, 51, 14, 17, -0.15, 0, Math.PI * 2);
      ctx.fill();
      ctx.beginPath();
      ctx.arc(77, 30, 11, 0, Math.PI * 2);
      ctx.fill();
      if (!shadow) {
        ctx.fillStyle = '#f2d8be';
        ctx.beginPath();
        ctx.arc(80, 31, 7, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = '#faf0df';
        ctx.beginPath();
        ctx.ellipse(79, 39, 10, 8, 0, 0, Math.PI);
        ctx.fill();
        ctx.fillStyle = '#c84139';
      }
      ctx.beginPath();
      ctx.moveTo(65, 24);
      ctx.lineTo(76, 7);
      ctx.lineTo(88, 24);
      ctx.closePath();
      ctx.fill();
      ctx.beginPath();
      ctx.arc(89, 22, 4, 0, Math.PI * 2);
      ctx.fill();
      ctx.lineWidth = 6;
      ctx.beginPath();
      ctx.moveTo(88, 51);
      ctx.lineTo(110, 63);
      ctx.moveTo(68, 64);
      ctx.lineTo(60, 78);
      ctx.moveTo(83, 64);
      ctx.lineTo(92, 77);
      ctx.stroke();
      if (shadow) {
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(112, 62);
        ctx.lineTo(154, 68);
        ctx.stroke();
      }
    }

    ctx.restore();
  });
  const sprite = new T.Sprite(new T.SpriteMaterial({
    map: texture,
    transparent: true,
    alphaTest: 0.02,
    depthWrite: false
  }));
  sprite.scale.set(kind === 'witch' ? 0.9 : 1.15, 0.62, 1);
  sprite.position.set(-2.8, 4.55, -5.72);
  sprite.frustumCulled = false;
  sprite.renderOrder = 5;
  sprite.visible = false;
  scene.add(sprite);
  return sprite;
}

function createHalloweenGhost() {
  const texture = createTexture(160, 190, ctx => {
    ctx.save();
    ctx.lineJoin = 'round';
    ctx.lineCap = 'round';
    ctx.shadowColor = 'rgba(190, 225, 255, 0.65)';
    ctx.shadowBlur = 18;
    ctx.strokeStyle = 'rgba(222, 239, 255, 0.72)';
    ctx.lineWidth = 5;
    ctx.beginPath();
    ctx.moveTo(35, 164);
    ctx.lineTo(35, 82);
    ctx.bezierCurveTo(35, 19, 125, 19, 125, 82);
    ctx.lineTo(125, 164);
    ctx.quadraticCurveTo(111, 150, 98, 164);
    ctx.quadraticCurveTo(80, 181, 62, 164);
    ctx.quadraticCurveTo(48, 150, 35, 164);
    ctx.closePath();
    ctx.fillStyle = 'rgba(205, 229, 255, 0.07)';
    ctx.fill();
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.fillStyle = 'rgba(231, 244, 255, 0.55)';
    [68, 96].forEach(x => {
      ctx.beginPath();
      ctx.ellipse(x, 91, 4, 7, 0, 0, Math.PI * 2);
      ctx.fill();
    });
    ctx.restore();
  });
  const ghost = new T.Sprite(new T.SpriteMaterial({
    map: texture,
    transparent: true,
    opacity: 0.4,
    alphaTest: 0.01,
    depthWrite: false
  }));
  ghost.scale.set(1.55, 1.95, 1);
  ghost.position.set(-0.5, 2, 0.5);
  ghost.renderOrder = 5;
  ghost.frustumCulled = false;
  return ghost;
}

function createHalloweenCobweb(size = 1.15) {
  const positions = [];
  const spokeCount = 7;
  const ringCount = 5;
  const startAngle = -Math.PI / 2;
  const endAngle = 0;
  const pointOnWeb = (angle, radius) => [
    Math.cos(angle) * radius,
    Math.sin(angle) * radius,
    0
  ];
  const addSegment = (start, end) => positions.push(...start, ...end);

  for (let spoke = 0; spoke <= spokeCount; spoke++) {
    const angle = startAngle + ((endAngle - startAngle) * spoke) / spokeCount;
    addSegment([0, 0, 0], pointOnWeb(angle, size));
  }

  for (let ring = 1; ring <= ringCount; ring++) {
    const radius = (size * ring) / ringCount;
    for (let spoke = 0; spoke < spokeCount; spoke++) {
      const angleA = startAngle + ((endAngle - startAngle) * spoke) / spokeCount;
      const angleB = startAngle + ((endAngle - startAngle) * (spoke + 1)) / spokeCount;
      const middle = pointOnWeb((angleA + angleB) / 2, radius - size * 0.035);
      addSegment(pointOnWeb(angleA, radius), middle);
      addSegment(middle, pointOnWeb(angleB, radius));
    }
  }

  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.Float32BufferAttribute(positions, 3));
  const material = new T.LineBasicMaterial({
    color: 0xdce8f4,
    transparent: true,
    opacity: 0.42,
    depthWrite: false
  });
  const web = new T.Group();
  web.add(new T.LineSegments(geometry, material));
  return web;
}

function createWindowParticleSystem(theme, kind, color, count, size, speed, sway) {
  const particles = [];
  for (let i = 0; i < count; i++) {
    const x = (R() - 0.5) * 4.3;
    const y = 2.32 + R() * 3.1;
    particles.push({ x, y, phase: R() * Math.PI * 2, speed: speed * (0.65 + R() * 0.7) });
  }
  holidayParticleSystems.push({ theme, kind, color, size, particles, sway });
}

function drawWindowParticle(ctx, system, particle, x, y, time) {
  const radius = Math.max(2.5, system.size * 18);
  const color = `#${system.color.toString(16).padStart(6, '0')}`;
  ctx.save();
  ctx.translate(x, y);
  ctx.rotate(Math.sin(time + particle.phase) * 0.45);
  ctx.globalAlpha = 0.9;
  ctx.fillStyle = color;

  if (system.kind === 'snow') {
    ctx.shadowColor = color;
    ctx.shadowBlur = radius;
    ctx.beginPath();
    ctx.arc(0, 0, radius * 0.55, 0, Math.PI * 2);
    ctx.fill();
  } else if (system.kind === 'leaf') {
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * 0.58, radius, -0.55, 0, Math.PI * 2);
    ctx.fill();
    ctx.strokeStyle = 'rgba(255, 239, 195, 0.8)';
    ctx.lineWidth = Math.max(1, radius * 0.09);
    ctx.beginPath();
    ctx.moveTo(-radius * 0.45, radius * 0.62);
    ctx.lineTo(radius * 0.48, -radius * 0.68);
    ctx.stroke();
  } else if (system.kind === 'petal') {
    ctx.beginPath();
    ctx.ellipse(0, 0, radius * 0.58, radius, 0.45, 0, Math.PI * 2);
    ctx.fill();
  } else if (system.kind === 'heart') {
    ctx.beginPath();
    ctx.moveTo(0, radius * 0.7);
    ctx.bezierCurveTo(-radius * 1.3, -radius * 0.2, -radius * 0.9, -radius * 1.25, -radius * 0.15, -radius * 0.75);
    ctx.bezierCurveTo(0, -radius * 0.58, radius * 0.15, -radius * 0.58, radius * 0.3, -radius * 0.75);
    ctx.bezierCurveTo(radius * 1.3, -radius * 1.25, radius * 1.3, -radius * 0.2, 0, radius * 0.7);
    ctx.fill();
  }

  ctx.restore();
}

function updateWindowParticles(time, delta) {
  const activeSystems = holidayParticleSystems.filter(system => activeHolidayThemes[system.theme]);
  windowParticlePlane.visible = activeSystems.length > 0;
  if (!activeSystems.length) return;

  const ctx = windowParticleTexture.image.getContext('2d');
  ctx.clearRect(0, 0, 256, 180);
  activeSystems.forEach(system => {
    system.particles.forEach(particle => {
      particle.y -= particle.speed * delta;
      if (particle.y < 2.32) particle.y = 5.42;
      const x = T.MathUtils.clamp(
        particle.x + Math.sin(time + particle.phase) * system.sway,
        -2.2,
        2.2
      );
      const canvasX = ((x + 2.325) / 4.65) * 256;
      const canvasY = ((5.49 - particle.y) / 3.18) * 180;
      drawWindowParticle(ctx, system, particle, canvasX, canvasY, time);
    });
  });
  windowParticleTexture.needsUpdate = true;
}

function createFireworks() {
  const bursts = 4;
  const sparksPerBurst = 30;
  const positions = new Float32Array(bursts * sparksPerBurst * 3);
  const colors = new Float32Array(bursts * sparksPerBurst * 3);
  const particles = [];
  const palette = [0xffe66d, 0xff526f, 0x57f4ff, 0xd18aff];

  for (let burst = 0; burst < bursts; burst++) {
    const originX = -1.65 + burst * 1.08;
    const originY = 3.5 + (burst % 2) * 0.85;
    for (let spark = 0; spark < sparksPerBurst; spark++) {
      const index = burst * sparksPerBurst + spark;
      const angle = (spark / sparksPerBurst) * Math.PI * 2;
      const speed = 0.35 + R() * 0.7;
      const color = new T.Color(palette[burst]);
      colors.set([color.r, color.g, color.b], index * 3);
      positions.set([originX, originY, -5.72], index * 3);
      particles.push({
        burst,
        originX,
        originY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        phase: burst * 0.63
      });
    }
  }

  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  const material = new T.PointsMaterial({
    color: 0xffffff,
    map: createParticleSprite('spark'),
    size: 0.2,
    vertexColors: true,
    transparent: true,
    opacity: 1,
    alphaTest: 0.03,
    depthWrite: false,
    blending: T.AdditiveBlending,
    toneMapped: false,
    clippingPlanes: [
      new T.Plane(new T.Vector3(1, 0, 0), 2.325),
      new T.Plane(new T.Vector3(-1, 0, 0), 2.325),
      new T.Plane(new T.Vector3(0, 1, 0), -2.31),
      new T.Plane(new T.Vector3(0, -1, 0), 5.49)
    ]
  });
  const points = new T.Points(geometry, material);
  points.frustumCulled = false;
  scene.add(points);
  return { points, positions, particles, sparksPerBurst };
}

function createBirthdayIntroConfetti() {
  const count = 220;
  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);
  const particles = [];
  const palette = [0xf26b7a, 0xf2c14e, 0x53b7cf, 0x9b6bd3, 0x75c98a, 0xff8f45, 0xf05aa8];

  for (let i = 0; i < count; i++) {
    const x = -8.5 + R() * 17;
    const y = 6.8 + R() * 2.4;
    const z = -5.7 + R() * 14.5;
    const color = new T.Color(palette[i % palette.length]);
    positions.set([x, y, z], i * 3);
    colors.set([color.r, color.g, color.b], i * 3);
    particles.push({ x, y, z, speed: 1.4 + R() * 1.8, sway: R() * Math.PI * 2 });
  }

  const geometry = new T.BufferGeometry();
  geometry.setAttribute('position', new T.BufferAttribute(positions, 3));
  geometry.setAttribute('color', new T.BufferAttribute(colors, 3));
  const material = new T.PointsMaterial({
    color: 0xffffff,
    map: createParticleSprite('confetti'),
    size: 0.19,
    vertexColors: true,
    transparent: true,
    alphaTest: 0.03,
    depthWrite: false
  });
  const points = new T.Points(geometry, material);
  points.frustumCulled = false;
  points.visible = false;
  scene.add(points);
  return { points, positions, particles };
}

const fireworks = createFireworks();
let birthdayIntroConfetti;
let birthdayIntroStartedAt = null;
let newYearIntroStartedAt = null;

const balloonPointerRaycaster = new T.Raycaster();
const balloonGroundPlane = new T.Plane(new T.Vector3(0, 1, 0), 0);
const balloonGroundPoint = new T.Vector3();

function updateNewYearBalloons(time, delta) {
  const isNewYear = Boolean(activeHolidayThemes.newYear);
  if (isNewYear && newYearIntroStartedAt === null) newYearIntroStartedAt = time;

  const introElapsed = newYearIntroStartedAt === null ? 0 : time - newYearIntroStartedAt;
  const introActive = isNewYear && introElapsed < 4.2;
  newYearIntroBalloonGroup.visible = introActive;
  if (introActive) {
    newYearFallingBalloons.forEach(({ group, x, z, startY, speed, phase }) => {
      const y = startY - introElapsed * speed;
      group.visible = y > 0.12;
      group.position.set(x + Math.sin(introElapsed * 1.7 + phase) * 0.22, y, z);
      group.rotation.z = Math.sin(introElapsed * 1.8 + phase) * 0.16;
      group.rotation.x = Math.cos(introElapsed * 1.3 + phase) * 0.12;
    });
  }

  if (!isNewYear) return;

  let pointerGroundPosition = null;
  if (balloonPointerInCanvas) {
    balloonPointerRaycaster.setFromCamera(balloonPointerNdc, cam);
    pointerGroundPosition = balloonPointerRaycaster.ray.intersectPlane(
      balloonGroundPlane,
      balloonGroundPoint
    );
  }

  newYearFloorBalloons.forEach(state => {
    const { group, velocity, phase, baseRotationX, baseRotationZ } = state;
    if (pointerGroundPosition) {
      let dx = group.position.x - pointerGroundPosition.x;
      let dz = group.position.z - pointerGroundPosition.z;
      const distance = Math.hypot(dx, dz);
      const pushRadius = 1.05;
      if (distance < pushRadius) {
        if (distance < 0.01) {
          dx = Math.cos(phase);
          dz = Math.sin(phase);
        }
        const push = (1 - distance / pushRadius) * 7;
        const directionLength = Math.hypot(dx, dz);
        velocity.x += (dx / directionLength) * push * delta;
        velocity.y += (dz / directionLength) * push * delta;
      }
    }

    velocity.multiplyScalar(Math.exp(-2.4 * delta));
    group.position.x += velocity.x * delta;
    group.position.z += velocity.y * delta;
    group.position.x = T.MathUtils.clamp(group.position.x, -8.4, 8.4);
    group.position.z = T.MathUtils.clamp(group.position.z, -5.3, 8.1);
    if (Math.abs(group.position.x) >= 8.4) velocity.x *= -0.45;
    if (group.position.z <= -5.3 || group.position.z >= 8.1) velocity.y *= -0.45;

    group.position.y = 0.38 + Math.sin(time * 2.8 + phase) * 0.025;
    group.rotation.x = baseRotationX - velocity.y * 0.08;
    group.rotation.y += (velocity.x * 0.08 + 0.12) * delta;
    group.rotation.z = baseRotationZ + velocity.x * 0.08;
  });
}

function updateHolidayAnimations(time, delta) {
  christmasLightMaterials.forEach(({ material, glowMaterial, phase }) => {
    const flicker = (Math.sin(time * 4 + phase) + 1) / 2;
    material.opacity = 0.4 + flicker * 0.6;
    glowMaterial.opacity = 0.06 + flicker * 0.08;
  });

  if (diwaliSparklerGroup) {
    const sparklerActive = Boolean(activeHolidayThemes.diwali);
    diwaliSparklerGroup.visible = sparklerActive;
    diwaliSparklerLight.intensity = sparklerActive
      ? 0.8 + (Math.sin(time * 31) + 1) * 0.25
      : 0;
    const flameFlicker = 0.84 + Math.sin(time * 23) * 0.16;
    diwaliSparklerFlame.scale.set(0.9 + flameFlicker * 0.12, flameFlicker, 1);
    diwaliSparklerCore.scale.set(0.9 + flameFlicker * 0.1, flameFlicker, 1);
    diwaliSparklerSparks.forEach(({ mesh, material, angle, phase }) => {
      const flicker = (Math.sin(time * 37 + phase) + 1) / 2;
      material.opacity = 0.25 + flicker * 0.75;
      mesh.visible = sparklerActive && flicker > 0.12;
      mesh.rotation.z = angle + Math.sin(time * 13 + phase) * 0.18;
      mesh.scale.y = 0.5 + flicker * 0.8;
    });
  }

  updateWindowParticles(time, delta);

  if (birthdayIntroConfetti) {
    if (activeHolidayThemes.birthday && birthdayIntroStartedAt === null) birthdayIntroStartedAt = time;
    const showerActive = activeHolidayThemes.birthday && time - birthdayIntroStartedAt < 4.5;
    birthdayIntroConfetti.points.visible = showerActive;
    if (showerActive) {
      birthdayIntroConfetti.particles.forEach((particle, index) => {
        particle.y -= particle.speed * delta;
        const offset = index * 3;
        birthdayIntroConfetti.positions[offset] = particle.x + Math.sin(time + particle.sway) * 0.18;
        birthdayIntroConfetti.positions[offset + 1] = particle.y < -0.2 ? -100 : particle.y;
        birthdayIntroConfetti.positions[offset + 2] = particle.z;
      });
      birthdayIntroConfetti.points.geometry.attributes.position.needsUpdate = true;
    }
  }

  updateNewYearBalloons(time, delta);

  const hour = getLocalHour(getHolidayDate());
  const night = hour < 6.5 || hour >= 18.5;
  holidayFlybys.forEach(({ theme, sprite, shadow, duration, phase, travelHalfWidth = 2.8 }) => {
    const active = Boolean(activeHolidayThemes[theme]) && (shadow === null || shadow === night);
    sprite.visible = active;
    if (!active) return;

    const progress = (time / duration + phase) % 1;
    sprite.position.x = -travelHalfWidth + progress * travelHalfWidth * 2;
    sprite.position.y = 4.5 + Math.sin(progress * Math.PI * 2) * 0.12;
  });

  if (halloweenGhost && activeHolidayThemes.halloween) {
    const drift = time * 0.3;
    halloweenGhost.position.set(
      -0.5 + Math.sin(drift) * 4,
      2.3 + Math.sin(time * 0.7) * 0.65,
      0.5 + Math.cos(drift * 0.72) * 2.7
    );
    halloweenGhost.rotation.z = Math.sin(time * 0.7) * 0.07;
    halloweenGhost.material.opacity = 0.31 + (Math.sin(time * 1.25) + 1) * 0.055;
  }

  const newYearNight = activeHolidayThemes.newYear && (hour < 6.5 || hour >= 18.5);
  const diwaliNight = activeHolidayThemes.diwali && night;
  fireworks.points.visible = newYearNight || diwaliNight;
  if (!fireworks.points.visible) return;

  fireworks.particles.forEach((particle, index) => {
    const age = (time + particle.phase) % 2.7;
    const offset = index * 3;
    if (age > 1.65) {
      fireworks.positions[offset] = -100;
      fireworks.positions[offset + 1] = -100;
      fireworks.positions[offset + 2] = -100;
      return;
    }

    fireworks.positions[offset] = particle.originX + particle.vx * age;
    fireworks.positions[offset + 1] = particle.originY + particle.vy * age - 0.2 * age * age;
    fireworks.positions[offset + 2] = -5.72;
  });
  fireworks.points.geometry.attributes.position.needsUpdate = true;
}

function buildHolidayDecorations() {
  const newYearHat = new T.Group();
  add(newYearHat, new T.ConeGeometry(0.25, 0.62, 16), M(0xe85352), 0, 3.88, 0.02);
  add(newYearHat, C(0.27, 0.27, 0.08, 16), M(0xf2d16d), 0, 3.57, 0.02);
  add(newYearHat, new T.SphereGeometry(0.07, 10, 8), M(0xfff1ca), 0, 4.2, 0.02);
  registerHolidayElement('newYear', newYearHat, exoSuitGroup);

  const partyGlasses = new T.Group();
  const lensMaterial = new T.MeshBasicMaterial({ color: 0x201c2b, side: T.DoubleSide });
  [-1, 1].forEach(side => {
    add(partyGlasses, new T.TorusGeometry(0.13, 0.025, 8, 20), M(0xffd76b), side * 0.17, 3.31, 0.34);
    add(partyGlasses, C(0.11, 0.11, 0.025, 16), lensMaterial, side * 0.17, 3.31, 0.34).rotation.x = Math.PI / 2;
  });
  partyGlasses.add(new T.Mesh(
    new T.TubeGeometry(new T.CatmullRomCurve3([
    new T.Vector3(-0.04, 3.31, 0.34),
    new T.Vector3(0, 3.34, 0.38),
    new T.Vector3(0.04, 3.31, 0.34)
    ]), 12, 0.018, 6, false),
    M(0xffd76b)
  ));
  registerHolidayElement('newYear', partyGlasses, exoSuitGroup);

  const newYearFloorBalloonGroup = new T.Group();
  for (let index = 0; index < 30; index++) {
    const balloon = createNewYearBalloon(Math.floor(R() * newYearBalloonColors.length));
    balloon.position.set(-8.1 + R() * 16.2, 0.38, -5.05 + R() * 12.8);
    const baseRotationX = (R() - 0.5) * 0.18;
    const baseRotationZ = (R() - 0.5) * 0.3;
    balloon.rotation.set(baseRotationX, R() * Math.PI * 2, baseRotationZ);
    newYearFloorBalloonGroup.add(balloon);
    newYearFloorBalloons.push({
      group: balloon,
      velocity: new T.Vector2(),
      phase: R() * Math.PI * 2,
      baseRotationX,
      baseRotationZ
    });
  }
  registerHolidayElement('newYear', newYearFloorBalloonGroup);

  for (let index = 0; index < 26; index++) {
    const balloon = createNewYearBalloon(Math.floor(R() * newYearBalloonColors.length));
    newYearIntroBalloonGroup.add(balloon);
    newYearFallingBalloons.push({
      group: balloon,
      x: -8 + R() * 16,
      z: -5.1 + R() * 12.9,
      startY: 6.2 + R() * 1.4,
      speed: 1.9 + R() * 0.8,
      phase: R() * Math.PI * 2
    });
  }

  const christmasHat = new T.Group();
  add(christmasHat, new T.ConeGeometry(0.27, 0.56, 16), M(0xc83d43), 0, 3.84, 0.02);
  add(christmasHat, C(0.28, 0.28, 0.1, 16), M(0xf8f2e7), 0, 3.57, 0.02);
  add(christmasHat, new T.SphereGeometry(0.07, 10, 8), M(0xf8f2e7), 0.08, 4.13, 0.02);
  registerHolidayElement('christmas', christmasHat, exoSuitGroup);

  const easterBunnyEars = new T.Group();
  [-1, 1].forEach(side => {
    const ear = add(
      easterBunnyEars,
      new T.SphereGeometry(1, 12, 10),
      M(0xf1e8dc),
      side * 0.16,
      3.88,
      0.18
    );
    ear.scale.set(0.11, 0.38, 0.075);
    ear.rotation.z = side * -0.16;
    const innerEar = add(
      easterBunnyEars,
      new T.SphereGeometry(1, 12, 10),
      M(0xe9a2aa),
      side * 0.16,
      3.89,
      0.245
    );
    innerEar.scale.set(0.055, 0.28, 0.025);
    innerEar.rotation.z = side * -0.16;
  });
  registerHolidayElement('easter', easterBunnyEars, exoSuitGroup);

  const turkeyFeathers = new T.Group();
  const featherColors = [0x9b3e31, 0xc36a31, 0xd5a343, 0x8c5638, 0xb64c35, 0xd28a38, 0x7d4636];
  featherColors.forEach((color, index) => {
    const spread = (index - 3) / 3;
    const length = 0.46 + (1 - Math.abs(spread)) * 0.12;
    const angle = -spread * 0.48;
    const feather = add(
      turkeyFeathers,
      new T.SphereGeometry(1, 12, 10),
      M(color),
      spread * 0.17,
      3.34 + Math.abs(spread) * 0.08,
      -0.31
    );
    feather.scale.set(0.14, length, 0.075);
    feather.rotation.z = angle;
    const quill = add(
      turkeyFeathers,
      C(0.012, 0.012, length * 1.15, 6),
      M(0xf1d49a),
      spread * 0.17,
      3.34 + Math.abs(spread) * 0.08,
      -0.22
    );
    quill.rotation.z = angle;
  });
  registerHolidayElement('thanksgiving', turkeyFeathers, exoSuitGroup);

  const horrorMask = new T.Group();
  add(horrorMask, B(0.48, 0.47, 0.07), M(0xe5ddc9), 0, 3.3, 0.38);
  [-1, 1].forEach(side => {
    const eye = add(horrorMask, new T.SphereGeometry(0.055, 10, 8), M(0x16141a), side * 0.12, 3.36, 0.425);
    eye.scale.set(1.25, 0.65, 0.35);
  });
  add(horrorMask, B(0.17, 0.035, 0.015), M(0x38252a), 0, 3.18, 0.425);
  add(horrorMask, B(0.56, 0.1, 0.12), M(0x171820), 0, 3.56, 0.28);
  registerHolidayElement('halloween', horrorMask, exoSuitGroup);

  const mechHeart = createHolidayHeart(0xe84e68);
  mechHeart.scale.setScalar(0.6);
  mechHeart.position.set(0.7, 1.76, 0.48);
  registerHolidayElement('valentines', mechHeart, exoSuitGroup);

  const valentinesRose = new T.Group();
  const roseStem = M(0x456b3c);
  addRod(valentinesRose, [0, 0.08, 0.29], [0, 0.95, 0.29], 0.018, roseStem);
  [
    [-1, 0.38], [1, 0.64]
  ].forEach(([side, y]) => {
    const leaf = add(
      valentinesRose,
      new T.SphereGeometry(1, 10, 8),
      M(0x608747),
      side * 0.1,
      y,
      0.26
    );
    leaf.scale.set(0.13, 0.035, 0.045);
    leaf.rotation.y = side * 0.45;
  });

  const roseOuter = M(0xc51f3b);
  const roseInner = M(0x97172e);
  for (let petal = 0; petal < 7; petal++) {
    const angle = (petal / 7) * Math.PI * 2;
    const outerPetal = add(
      valentinesRose,
      new T.SphereGeometry(1, 10, 8),
      roseOuter,
      Math.cos(angle) * 0.09,
      1.02,
      0.15 + Math.sin(angle) * 0.09
    );
    outerPetal.scale.set(0.085, 0.045, 0.075);
  }
  for (let petal = 0; petal < 5; petal++) {
    const angle = (petal / 5) * Math.PI * 2 + 0.3;
    const innerPetal = add(
      valentinesRose,
      new T.SphereGeometry(1, 10, 8),
      roseInner,
      Math.cos(angle) * 0.045,
      1.06,
      0.15 + Math.sin(angle) * 0.045
    );
    innerPetal.scale.set(0.06, 0.04, 0.055);
  }
  const calyx = add(
    valentinesRose,
    new T.ConeGeometry(0.09, 0.18, 7),
    roseStem,
    0,
    0.96,
    0.15
  );
  calyx.rotation.x = Math.PI / 2;
  valentinesRose.position.set(-4.3, 0.52, 0.8);
  valentinesRose.scale.setScalar(1.6);
  valentinesRose.rotation.x = Math.PI / 2;
  valentinesRoseMarkerAnchor = new T.Object3D();
  valentinesRoseMarkerAnchor.position.set(0, 1.06, -0.32);
  valentinesRose.add(valentinesRoseMarkerAnchor);
  valentinesRoseGroup = valentinesRose;
  registerHolidayElement('valentines', valentinesRose);

  const diwaliSparkler = new T.Group();
  add(diwaliSparkler, C(0.02, 0.025, 0.58, 8), M(0x9ca6ad), 0, 0.22, 0);
  const flameMaterial = new T.MeshBasicMaterial({
    color: 0xff7b1b,
    transparent: true,
    blending: T.AdditiveBlending,
    toneMapped: false
  });
  const coreMaterial = new T.MeshBasicMaterial({
    color: 0xfff0a0,
    transparent: true,
    blending: T.AdditiveBlending,
    toneMapped: false
  });
  diwaliSparklerFlame = add(
    diwaliSparkler,
    new T.ConeGeometry(0.065, 0.2, 6),
    flameMaterial,
    0,
    0.56,
    0.025
  );
  diwaliSparklerFlame.rotation.z = 0.12;
  diwaliSparklerCore = add(
    diwaliSparkler,
    new T.ConeGeometry(0.034, 0.13, 5),
    coreMaterial,
    0,
    0.58,
    0.055
  );
  diwaliSparklerCore.rotation.z = -0.08;

  for (let i = 0; i < 10; i++) {
    const angle = (i / 10) * Math.PI * 2;
    const reach = 0.08 + (i % 3) * 0.025;
    const material = new T.MeshBasicMaterial({
      color: i % 3 === 0 ? 0xffef9c : 0xffa52f,
      transparent: true,
      opacity: 1,
      blending: T.AdditiveBlending,
      toneMapped: false
    });
    const spark = add(
      diwaliSparkler,
      C(0.004, 0.009, 0.13 + (i % 2) * 0.035, 4),
      material,
      Math.cos(angle) * reach,
      0.57 + Math.sin(angle) * reach,
      0.045
    );
    spark.rotation.z = angle;
    diwaliSparklerSparks.push({ mesh: spark, material, angle, phase: i * 1.73 });
  }

  diwaliSparklerLight = new T.PointLight(0xff9d24, 1, 2.2);
  diwaliSparklerLight.position.set(0, 0.58, 0.12);
  diwaliSparkler.add(diwaliSparklerLight);
  diwaliSparklerGroup = diwaliSparkler;
  diwaliSparkler.position.set(0.91, 1.3, 0.3);
  diwaliSparkler.rotation.z = -0.2;
  registerHolidayElement('diwali', diwaliSparkler, exoSuitGroup);

  const christmasDeskTree = new T.Group();
  addHolidayTree(christmasDeskTree, -2.15, 1.9, -2.45, 0.95, 0x315e4b, true);
  registerHolidayElement('christmas', christmasDeskTree, workbenchGroup);

  const christmasRoom = new T.Group();
  [
    [5.15, 0, -1.05, 0.56, 0.48, 0.47, 0x9c3e4c],
    [5.85, 0, -1.4, 0.7, 0.62, 0.56, 0x315d4d],
    [5.35, 0, -2.1, 0.5, 0.42, 0.4, 0xd1a34b],
    [6.05, 0, -2.15, 0.48, 0.4, 0.42, 0x425f8f]
  ].forEach(([x, y, z, width, height, depth, color], index) => {
    const present = new T.Group();
    add(present, B(width, height, depth), M(color), 0, height / 2, 0);
    add(present, B(width * 0.12, height * 1.02, depth * 1.02), M(0xf2d479), 0, height / 2, 0);
    add(present, B(width * 1.02, height * 0.1, depth * 0.12), M(0xf2d479), 0, height * 0.72, 0);
    add(present, new T.TorusGeometry(width * 0.13, 0.025, 6, 12), M(0xf2d479), 0, height + 0.04, 0);
    present.position.set(x, y, z);
    present.rotation.y = index * 0.24;
    present.scale.setScalar(1.25);
    christmasRoom.add(present);
  });

  const garlandPoints = [];
  for (let i = 0; i <= 16; i++) {
    const x = -2.25 + i * (4.5 / 16);
    garlandPoints.push(new T.Vector3(x, 5.72 - Math.sin((i / 16) * Math.PI) * 0.28, -5.7));
  }
  christmasRoom.add(new T.Mesh(
    new T.TubeGeometry(new T.CatmullRomCurve3(garlandPoints), 48, 0.045, 8, false),
    M(0x28543c)
  ));
  const garlandColors = [0xffcf6a, 0xf26663, 0x75d4a0, 0x81d8ef];
  for (let i = 1; i < 16; i++) {
    const point = garlandPoints[i];
    const material = new T.MeshBasicMaterial({
      color: garlandColors[i % garlandColors.length],
      transparent: true,
      opacity: 0.75
    });
    add(christmasRoom, new T.SphereGeometry(0.055, 8, 6), material, point.x, point.y - 0.04, point.z + 0.035);
    const glowMaterial = new T.MeshBasicMaterial({
      color: garlandColors[i % garlandColors.length],
      transparent: true,
      opacity: 0.1,
      blending: T.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });
    add(christmasRoom, new T.SphereGeometry(0.12, 8, 6), glowMaterial, point.x, point.y - 0.04, point.z + 0.035, 0);
    christmasLightMaterials.push({ material, glowMaterial, phase: i * 0.8 });
  }
  const tvGarlandPoints = [];
  for (let i = 0; i <= 10; i++) {
    const x = -7.55 + i * 0.28;
    tvGarlandPoints.push(new T.Vector3(x, 2.78 - Math.sin((i / 10) * Math.PI) * 0.2, -5.42));
  }
  christmasRoom.add(new T.Mesh(
    new T.TubeGeometry(new T.CatmullRomCurve3(tvGarlandPoints), 32, 0.035, 8, false),
    M(0x28543c)
  ));
  for (let i = 1; i < 10; i++) {
    const point = tvGarlandPoints[i];
    const material = new T.MeshBasicMaterial({
      color: garlandColors[(i + 1) % garlandColors.length],
      transparent: true,
      opacity: 0.75
    });
    add(christmasRoom, new T.SphereGeometry(0.045, 8, 6), material, point.x, point.y - 0.025, point.z + 0.03);
    const glowMaterial = new T.MeshBasicMaterial({
      color: garlandColors[(i + 1) % garlandColors.length],
      transparent: true,
      opacity: 0.1,
      blending: T.AdditiveBlending,
      depthWrite: false,
      toneMapped: false
    });
    add(christmasRoom, new T.SphereGeometry(0.1, 8, 6), glowMaterial, point.x, point.y - 0.025, point.z + 0.03, 0);
    christmasLightMaterials.push({ material, glowMaterial, phase: i * 1.1 + 1 });
  }
  addHolidayTree(christmasRoom, -8.35, 0, -4.9, 2.1, 0xc4a04a);
  addHolidayTree(christmasRoom, -4.6, 0, -4.95, 1.65, 0xc4a04a);
  registerHolidayElement('christmas', christmasRoom);

  const thanksgivingDesk = new T.Group();
  addDeskTurkey(thanksgivingDesk, -2.15, 1.92, -2.45);
  registerHolidayElement('thanksgiving', thanksgivingDesk, workbenchGroup);
  addThanksgivingSign();

  const halloweenDesk = new T.Group();
  addDeskPumpkin(halloweenDesk, -2.15, 1.92, -2.45);
  registerHolidayElement('halloween', halloweenDesk, workbenchGroup);

  halloweenGhost = createHalloweenGhost();
  registerHolidayElement('halloween', halloweenGhost);

  const halloweenCobwebs = new T.Group();
  const leftCornerWeb = createHalloweenCobweb();
  leftCornerWeb.position.set(-8.4, 5.5, -5.52);
  halloweenCobwebs.add(leftCornerWeb);
  const rightCornerWeb = createHalloweenCobweb();
  rightCornerWeb.position.set(8.4, 5.5, -5.52);
  rightCornerWeb.scale.x = -1;
  halloweenCobwebs.add(rightCornerWeb);
  const addObjectCornerWeb = (x, y, z, size, mirror = false) => {
    const web = createHalloweenCobweb(size);
    web.position.set(x, y, z);
    if (mirror) web.scale.x = -1;
    halloweenCobwebs.add(web);
  };
  addObjectCornerWeb(-2.05, 3.25, -4.74, 0.42);
  addObjectCornerWeb(1.85, 3.25, -4.74, 0.42, true);
  addObjectCornerWeb(3.65, 2.08, -4.47, 0.45, true);
  addObjectCornerWeb(-3.75, 2.4, 4.12, 0.38);
  addObjectCornerWeb(-2.05, 2.4, 4.12, 0.38, true);
  addObjectCornerWeb(-7.8, 0.62, -5.08, 0.55);
  addObjectCornerWeb(-4.6, 0.62, -5.08, 0.55, true);
  addObjectCornerWeb(-8, 0.98, -2.25, 0.38);
  addObjectCornerWeb(-5.65, 0.98, -2.35, 0.38);
  addObjectCornerWeb(-6.9, 0.98, -0.75, 0.38);
  const rackWebLeft = createHalloweenCobweb(0.55);
  rackWebLeft.position.set(7.98, 1.98, 6.75);
  rackWebLeft.rotation.y = -Math.PI / 2;
  halloweenCobwebs.add(rackWebLeft);
  const rackWebRight = createHalloweenCobweb(0.55);
  rackWebRight.position.set(7.98, 1.98, 3.65);
  rackWebRight.rotation.y = -Math.PI / 2;
  rackWebRight.scale.x = -1;
  halloweenCobwebs.add(rackWebRight);
  registerHolidayElement('halloween', halloweenCobwebs);

  const halloweenCandy = new T.Group();
  const candyColors = [0xff6f61, 0x58a7df, 0xffca54, 0xb77add, 0x6ecb87];
  for (let i = 0; i < 32; i++) {
    const candy = add(
      halloweenCandy,
      i % 2 ? B(0.13, 0.055, 0.1) : new T.SphereGeometry(0.065, 8, 6),
      M(candyColors[i % candyColors.length]),
      -6.5 + ((i * 37) % 19) * 0.115,
      0.06 + (i % 3) * 0.012,
      -3.2 + ((i * 17) % 14) * 0.12
    );
    candy.rotation.y = i * 0.71;
    candy.rotation.z = (i % 5) * 0.12;
  }
  registerHolidayElement('halloween', halloweenCandy);

  const halloweenCandyBag = new T.Group();
  const bagBody = add(
    halloweenCandyBag,
    new T.SphereGeometry(1, 16, 12),
    M(0x302438),
    0,
    0.28,
    0
  );
  bagBody.scale.set(0.58, 0.28, 0.38);
  add(halloweenCandyBag, B(0.72, 0.055, 0.36), M(0x48344e), 0, 0.47, 0);
  add(halloweenCandyBag, new T.TorusGeometry(0.2, 0.035, 8, 18), M(0x18151f), 0, 0.57, 0).scale.set(1.25, 0.8, 1);
  const bagStrap = new T.CatmullRomCurve3([
    new T.Vector3(-0.4, 0.39, 0.02),
    new T.Vector3(-0.28, 0.72, 0.02),
    new T.Vector3(0.18, 0.72, 0.02),
    new T.Vector3(0.4, 0.39, 0.02)
  ]);
  add(halloweenCandyBag, new T.TubeGeometry(bagStrap, 18, 0.035, 6, false), M(0x19151e));
  add(halloweenCandyBag, new T.SphereGeometry(0.11, 10, 8), M(0xffa846), 0, 0.3, 0.37);
  [
    [-0.75, 0.045, 0.34], [-0.54, 0.04, 0.53], [-0.2, 0.035, 0.57],
    [0.18, 0.04, 0.54], [0.52, 0.04, 0.42], [0.78, 0.035, 0.2],
    [0.62, 0.035, -0.26], [-0.48, 0.035, -0.32], [0.22, 0.035, 0.72]
  ].forEach(([x, y, z], index) => {
    const piece = add(
      halloweenCandyBag,
      B(0.14, 0.045, 0.085),
      M(candyColors[(index + 2) % candyColors.length]),
      x,
      y,
      z
    );
    piece.rotation.y = index * 0.62;
    [-1, 1].forEach(side => {
      add(
        halloweenCandyBag,
        new T.SphereGeometry(0.04, 7, 5),
        M(candyColors[(index + 2) % candyColors.length]),
        x + side * 0.085,
        y,
        z
      );
    });
  });
  halloweenCandyBag.position.set(-4.5, 0, -0.2);
  halloweenCandyBag.rotation.y = -0.22;
  registerHolidayElement('halloween', halloweenCandyBag);

  holidayFlybys.push({
    theme: 'halloween',
    sprite: createHolidayFlyby('witch'),
    shadow: null,
    duration: 12,
    phase: 0.17,
    travelHalfWidth: 1.85
  });
  holidayFlybys.push({
    theme: 'christmas',
    sprite: createHolidayFlyby('santa'),
    shadow: false,
    duration: 15,
    phase: 0.08,
    travelHalfWidth: 1.75
  });
  holidayFlybys.push({
    theme: 'christmas',
    sprite: createHolidayFlyby('santa', true),
    shadow: true,
    duration: 15,
    phase: 0.08,
    travelHalfWidth: 1.75
  });

  const easterBunny = new T.Group();
  addDeskBunny(easterBunny, -2.15, 1.9, -2.45);
  registerHolidayElement('easter', easterBunny, workbenchGroup);

  const easterChicken = new T.Group();
  addDeskChicken(easterChicken, 5.95, 0.02, 2.6);
  registerHolidayElement('easter', easterChicken);

  const easterEggs = new T.Group();
  const eggColors = [
    0xeda7a7, 0xe8cb65, 0x7bb8a4, 0x9c91d4, 0xe7a863,
    0x79a9d2, 0xf0a85e, 0xb5c96a, 0xdd8cb2, 0x7eb8c9
  ];
  [
    [-7.4, 0.15, -3.8], [-3.9, 0.13, -4.7], [2.4, 0.13, -4.4],
    [6.1, 0.13, -2.8], [-0.7, 0.13, 2.1], [4.1, 0.13, 4.7],
    [-6.2, 0.13, 1.3], [-1.6, 0.13, 3.6], [3.2, 0.13, 1.2], [7.4, 0.13, -4.5]
  ].forEach(([x, y, z], index) => {
    const egg = add(easterEggs, new T.SphereGeometry(1, 12, 10), M(eggColors[index]), x, y, z);
    egg.scale.set(0.14, 0.19, 0.11);
    egg.rotation.z = (index % 2 ? -1 : 1) * 0.18;
    const stripe = add(easterEggs, new T.TorusGeometry(0.12, 0.012, 6, 16), M(0xfff0d7), x, y, z);
    stripe.scale.set(1, 1.2, 0.8);
    stripe.rotation.x = Math.PI / 2;
  });
  registerHolidayElement('easter', easterEggs);

  const valentinesDesk = new T.Group();
  addDeskTeddy(valentinesDesk, -2.15, 1.93, -2.45);
  registerHolidayElement('valentines', valentinesDesk, workbenchGroup);

  const birthdayDesk = new T.Group();
  birthdayDesk.position.set(-3.8, 0, 2.4);
  const pedestalBody = M(0x303342);
  const pedestalTrim = M(0xd8b45b);
  add(birthdayDesk, C(0.58, 0.66, 0.12, 24), pedestalBody, 0, 0.06, 0);
  add(birthdayDesk, C(0.55, 0.55, 0.045, 24), pedestalTrim, 0, 0.14, 0);
  add(birthdayDesk, C(0.29, 0.37, 0.62, 20), pedestalBody, 0, 0.48, 0);
  add(birthdayDesk, C(0.39, 0.39, 0.045, 24), pedestalTrim, 0, 0.8, 0);
  add(birthdayDesk, C(0.64, 0.58, 0.14, 24), pedestalBody, 0, 0.87, 0);
  birthdayCakeGroup = addDeskCake(birthdayDesk, 0, 0.95, 0);
  birthdayCakeMarkerAnchor = new T.Object3D();
  birthdayCakeMarkerAnchor.position.set(0, 0.82, 0.14);
  birthdayCakeGroup.add(birthdayCakeMarkerAnchor);
  registerHolidayElement('birthday', birthdayDesk);

  const birthdayHat = new T.Group();
  add(birthdayHat, new T.ConeGeometry(0.25, 0.62, 16), M(0x9b6bd3), 0, 3.88, 0.02);
  add(birthdayHat, C(0.27, 0.27, 0.08, 16), M(0xf2d16d), 0, 3.57, 0.02);
  add(birthdayHat, new T.SphereGeometry(0.07, 10, 8), M(0xfff1ca), 0, 4.2, 0.02);
  registerHolidayElement('birthday', birthdayHat, exoSuitGroup);

  const alvinBirthdayHat = new T.Group();
  add(alvinBirthdayHat, new T.ConeGeometry(0.17, 0.32, 12), M(0x258fff), 0, 0.7, 0.02);
  add(alvinBirthdayHat, new T.TorusGeometry(0.15, 0.018, 6, 14), M(0xf2d16d), 0, 0.55, 0.02);
  add(alvinBirthdayHat, new T.SphereGeometry(0.035, 8, 6), M(0xffefb0), 0, 0.87, 0.02);
  registerHolidayElement('alvinBirthday', alvinBirthdayHat, deskDogPlush);

  const alvinTinyCake = addDeskCake(workbenchGroup, -1.82, 1.89, -2.45);
  alvinTinyCake.scale.setScalar(0.35);
  alvinBirthdayCakeMarkerAnchor = new T.Object3D();
  alvinBirthdayCakeMarkerAnchor.position.set(0, 0.55, 0.14);
  alvinTinyCake.add(alvinBirthdayCakeMarkerAnchor);
  registerHolidayElement('alvinBirthday', alvinTinyCake);

  const birthdayBlueBalloonMaterial = new T.MeshPhongMaterial({
    color: 0x258fff,
    specular: 0xffffff,
    shininess: 90
  });
  const birthdayBalloonMaterials = [birthdayBlueBalloonMaterial, newYearBalloonMaterials[0]];
  const birthdayWallBalloons = new T.Group();
  const birthdayClusterOffsets = [
    [-0.34, -0.24, 0], [0.34, -0.24, 1], [0, 0.36, 0]
  ];
  [
    [-8.45, 3.35, -5.62, 0],
    [-3.5, 5.75, -5.62, 0],
    [8.45, 1.55, -5.62, 0],
    [8.62, 3.35, 1, -Math.PI / 2],
    [8.62, 3.35, 8, -Math.PI / 2]
  ].forEach(([x, y, z, rotationY]) => {
    const cluster = new T.Group();
    cluster.position.set(x, y, z);
    cluster.rotation.y = rotationY;
    birthdayClusterOffsets.forEach(([offsetX, offsetY, colorIndex]) => {
      const balloon = createNewYearBalloon(colorIndex, birthdayBalloonMaterials);
      balloon.position.set(offsetX, offsetY, 0);
      cluster.add(balloon);
    });
    birthdayWallBalloons.add(cluster);
  });
  registerHolidayElement('birthday', birthdayWallBalloons);

  const monitorBalloonBouquet = new T.Group();
  [
    { x: -0.75, y: 4.05, anchorX: -1.1, color: 0 },
    { x: -0.1, y: 4.3, anchorX: -0.1, color: 1 },
    { x: 0.55, y: 4.05, anchorX: 0.9, color: 0 }
  ].forEach(({ x, y, anchorX, color }) => {
    const balloon = createNewYearBalloon(color, birthdayBalloonMaterials);
    balloon.position.set(x, y, -3.05);
    monitorBalloonBouquet.add(balloon);

    const stringCurve = new T.CatmullRomCurve3([
      new T.Vector3(anchorX, 3.25, -3.48),
      new T.Vector3((anchorX + x) / 2, 3.45, -3.4),
      new T.Vector3(x, y - 0.5, -3.2),
      new T.Vector3(x, y - 0.35, -3.05)
    ]);
    monitorBalloonBouquet.add(new T.Mesh(
      new T.TubeGeometry(stringCurve, 24, 0.007, 6, false),
      M(0xd8c8a4)
    ));
  });
  registerHolidayElement('birthday', monitorBalloonBouquet, workbenchGroup);

  const birthdayFloorBalloonColors = [0xe74852, 0x43b56a, 0x2d8be8, 0xf2c94c];
  const birthdayFloorBalloonMaterials = birthdayFloorBalloonColors.map(color => new T.MeshPhongMaterial({
    color,
    specular: 0xffffff,
    shininess: 90
  }));
  const birthdayFloorBalloons = new T.Group();
  [
    [-7.2, 7.6], [-5.7, 4.8], [-3, 6.8], [-0.6, 7.7], [2.2, 7.1],
    [4.2, 7.9], [5.7, 7.8], [7.7, 2.4], [-7.2, -1.8], [0.2, -1.4]
  ].forEach(([x, z], index) => {
    const balloon = createNewYearBalloon(index % birthdayFloorBalloonMaterials.length, birthdayFloorBalloonMaterials);
    balloon.position.set(x, 0.38, z);
    balloon.rotation.y = index * 0.73;
    birthdayFloorBalloons.add(balloon);
  });
  registerHolidayElement('birthday', birthdayFloorBalloons);

  const birthdayConfetti = new T.Group();
  const confettiColors = [0xf26b7a, 0xf2c14e, 0x53b7cf, 0x9b6bd3, 0x75c98a, 0xff8f45, 0xf5e9ff, 0xf05aa8];
  const confettiMaterials = confettiColors.map(color => new T.MeshBasicMaterial({ color, side: T.DoubleSide }));
  const confettiGeometries = [
    B(0.12, 0.018, 0.045),
    B(0.06, 0.018, 0.06),
    new T.CylinderGeometry(0.04, 0.04, 0.014, 8),
    new T.CircleGeometry(0.045, 3)
  ];
  for (let i = 0; i < 390; i++) {
    const onDesk = i < 110;
    let x = onDesk
      ? -2.35 + ((i * 37) % 109) / 108 * 4.7
      : -8.7 + ((i * 47) % 283) / 282 * 17.4;
    let z = onDesk
      ? -5.45 + ((i * 53) % 107) / 106 * 1.95
      : -5.95 + ((i * 61) % 277) / 276 * 14.8;
    if (onDesk && x < -1.7 && z > -4.3) x = -1.45;
    if (onDesk && x > 1.15 && z > -4.35) z = -5.05;
    const y = onDesk ? 1.93 : 0.018;
    const piece = add(
      birthdayConfetti,
      confettiGeometries[i % confettiGeometries.length],
      confettiMaterials[i % confettiMaterials.length],
      x,
      y,
      z
    );
    piece.rotation.y = i * 1.27;
    if (i % 4 === 3) piece.rotation.x = -Math.PI / 2;
  }
  for (let i = 0; i < 10; i++) {
    const onDesk = i < 5;
    const centerX = onDesk ? -1.2 + i * 0.58 : -3.2 + i * 0.68;
    const centerZ = onDesk ? -5.1 + (i % 2) * 0.8 : -4.4 + (i % 3) * 0.9;
    const y = onDesk ? 1.95 : 0.035;
    const points = [];
    for (let step = 0; step <= 16; step++) {
      const angle = (step / 16) * Math.PI * 2;
      points.push(new T.Vector3(
        centerX + Math.cos(angle) * (0.12 + step * 0.008),
        y + Math.sin(angle * 2) * 0.035,
        centerZ + Math.sin(angle) * (0.12 + step * 0.008)
      ));
    }
    birthdayConfetti.add(new T.Mesh(
      new T.TubeGeometry(new T.CatmullRomCurve3(points), 24, 0.012, 5, false),
      confettiMaterials[(i + 2) % confettiMaterials.length]
    ));
  }
  registerHolidayElement('birthday', birthdayConfetti);
  birthdayIntroConfetti = createBirthdayIntroConfetti();

  const diwaliLamps = new T.Group();
  const cameraPosition = homePos();
  for (let i = 0; i < 8; i++) {
    const angle = (i / 8) * Math.PI * 2;
    const x = -2.9 + Math.cos(angle) * 1.45;
    const z = 4.1 + Math.sin(angle) * 1.45;
    const diya = new T.Group();
    add(diya, new T.SphereGeometry(0.2, 14, 10), M(0xc87938), 0, 0.1, 0).scale.set(1, 0.42, 0.72);
    add(diya, new T.TorusGeometry(0.16, 0.035, 8, 18), M(0xe3aa54), 0, 0.12, 0).rotation.x = Math.PI / 2;
    add(diya, new T.ConeGeometry(0.07, 0.25, 10), new T.MeshBasicMaterial({ color: 0xffb534 }), 0, 0.3, 0.02);
    add(diya, new T.SphereGeometry(0.045, 8, 6), new T.MeshBasicMaterial({ color: 0xffef9c }), 0, 0.31, 0.025);
    add(diya, new T.ConeGeometry(0.05, 0.16, 8), M(0xe3aa54), 0, 0.1, 0.18).rotation.x = Math.PI / 2;
    const diyaLight = new T.PointLight(0xffa83d, 0.65, 1.8);
    diyaLight.position.set(0, 0.35, 0.15);
    diya.add(diyaLight);
    diya.position.set(x, 0.04, z);
    diya.rotation.y = Math.atan2(cameraPosition.x - x, cameraPosition.z - z);
    diwaliLamps.add(diya);
  }
  registerHolidayElement('diwaliLamp', diwaliLamps);

  createWindowParticleSystem('christmas', 'snow', 0xe7f4ff, 95, 0.1, 0.52, 0.12);
  createWindowParticleSystem('thanksgiving', 'leaf', 0xd58b3e, 48, 0.30, 0.42, 0.24);
  createWindowParticleSystem('cherryBlossoms', 'petal', 0xf2b8ca, 58, 0.40, 0.3, 0.2);
  createWindowParticleSystem('valentines', 'heart', 0xf28da2, 38, 0.45, 0.4, 0.18);

  applyHolidayDecorations = themes => {
    holidayElements.forEach(({ theme, group }) => {
      group.visible = Boolean(themes[theme]);
    });
    alvinBirthdayRoseMaterials.forEach(material => {
      material.emissive.set(themes.alvinBirthday ? 0x7d3c20 : 0x000000);
      material.emissiveIntensity = themes.alvinBirthday ? 0.7 : 0;
    });
    if (alvinBirthdayRoseLight) alvinBirthdayRoseLight.intensity = themes.alvinBirthday ? 1.4 : 0;
    const dogIsReplaced = themes.christmas || themes.thanksgiving || themes.halloween || themes.valentines || themes.easter;
    deskDogPlush.visible = !dogIsReplaced;
  };

  applyHolidayDecorations(activeHolidayThemes);
}

buildHolidayDecorations();

/* ==========================================================================
   8. Cel-Shaded Outline Material Pass
   ========================================================================== */
const inkMaterial = new T.MeshBasicMaterial({ color: 0x05070c, side: T.BackSide });
scene.traverse(obj => {
  if (obj.isMesh && obj.material.isMeshToonMaterial && !obj.userData.noInk) {
    const outlineMesh = new T.Mesh(obj.geometry, inkMaterial);
    outlineMesh.scale.setScalar(1.05);
    obj.add(outlineMesh);
  }
});

/* ==========================================================================
   9. 2D HTML Labels & Dynamic 3D Overlay Mapping
   ========================================================================== */
const labelsContainer = $('#labels');
OBJS.forEach(obj => {
  const labelElem = document.createElement('div');
  labelElem.className = 'lbl';
  labelElem.innerHTML = `<i></i><span class="lbl-number">${obj.displayNumber}</span><span class="lbl-name">${obj.label}</span>`;
  labelElem.onclick = () => focusObject(obj);
  labelsContainer.appendChild(labelElem);
  obj.el = labelElem;
  obj.lp = obj.a.clone().add(new T.Vector3(0, obj.off, 0));
});

const seasonalInteractionMarkers = [];
[
  {
    theme: 'valentines',
    anchor: valentinesRoseMarkerAnchor,
    label: 'Click the rose',
    message: 'jk i bought this for myself'
  },
  {
    theme: 'birthday',
    anchor: birthdayCakeMarkerAnchor,
    label: 'Click the cake'
  },
  {
    theme: 'alvinBirthday',
    anchor: alvinBirthdayCakeMarkerAnchor,
    label: "Dev's pet/BFF Birthday!",
    message: 'Happy birthday, Alvin!'
  }
].forEach(({ theme, anchor, label, message }) => {
  const marker = document.createElement('button');
  marker.type = 'button';
  marker.className = 'lbl seasonal-marker';
  marker.setAttribute('aria-label', label);
  marker.title = label;
  marker.textContent = '★';
  if (message) marker.addEventListener('click', () => showHolidayMessage(message));
  else marker.addEventListener('click', sendBirthdayNotification);
  labelsContainer.appendChild(marker);
  seasonalInteractionMarkers.push({ theme, anchor, element: marker });
});

/* ==========================================================================
   10. Camera Focus & Modal Interactions
   ========================================================================== */
const NAV_OBJECTS = [...OBJS].sort((a, b) => a.displayNumber - b.displayNumber);
let tween = null;
let focusedObjectIndex = -1;
const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

function updateMobileControlsTop() {
  $('#object-controls').style.setProperty(
    '--controls-top',
    `${$('#v3d').getBoundingClientRect().top + 8}px`
  );
}

updateMobileControlsTop();
new ResizeObserver(updateMobileControlsTop).observe($('header'));

function updateObjectNavigation() {
  const controls = $('#object-controls');
  controls.hidden = focusedObjectIndex < 0;
  if (controls.hidden) return;

  $('#object-position').textContent = `${NAV_OBJECTS[focusedObjectIndex].displayNumber} / ${NAV_OBJECTS.length}`;
  $('#object-prev').disabled = focusedObjectIndex === 0;
  $('#object-next').disabled = focusedObjectIndex === NAV_OBJECTS.length - 1;
}

function moveFocusBy(offset) {
  const nextObject = NAV_OBJECTS[focusedObjectIndex + offset];
  if (nextObject) focusObject(nextObject);
}

function animateCamera(targetPos, targetLookAt, onComplete) {
  tween = {
    t0: performance.now(),
    p0: cam.position.clone(),
    t0v: ctl.target.clone(),
    p1: targetPos,
    t1: targetLookAt,
    cb: onComplete
  };
  ctl.enabled = false;
}

function focusObject(obj) {
  focusedObjectIndex = NAV_OBJECTS.indexOf(obj);
  updateObjectNavigation();
  closeModal();
  animateCamera(obj.c, obj.a, () => openModal(obj.key));
  $('#labels').classList.add('foc');
}

function openModal(key) {
  const modalContent = $('#mb');
  modalContent.innerHTML = renderSection(key, false);
  modalContent.scrollTop = 0;
  const showSpotifyPlayer = key === 'music';
  const controls = $('#object-controls');
  const nav = $('#object-nav');
  const back = $('#back');

  if (showSpotifyPlayer) {
    controls.append(nav, back);
  } else {
    controls.append(back, nav);
  }

  $('#v3d').classList.toggle('has-spotify-player', showSpotifyPlayer);
  spotifyPlayer.classList.toggle('spotify-player-offscreen', !showSpotifyPlayer);
  spotifyToggle.classList.toggle('spotify-toggle-near-player', showSpotifyPlayer);
  spotifyPlayer.setAttribute('aria-hidden', String(!showSpotifyPlayer));
  $('#modal').classList.toggle('has-spotify-player', showSpotifyPlayer);
  $('#modal').classList.add('on');
}

function closeModal() {
  $('#modal').classList.remove('on');
  $('#modal').classList.remove('has-spotify-player');
  $('#v3d').classList.remove('has-spotify-player');
  $('#object-controls').append($('#back'), $('#object-nav'));
  spotifyPlayer.classList.add('spotify-player-offscreen');
  spotifyToggle.classList.remove('spotify-toggle-near-player');
  spotifyPlayer.setAttribute('aria-hidden', 'true');
}

function resetToHome() {
  closeModal();
  animateCamera(homePos(), HT);
  focusedObjectIndex = -1;
  updateObjectNavigation();
  $('#labels').classList.remove('foc');
}

$('#mx').onclick = closeModal;
$('#back').onclick = resetToHome;
$('#object-prev').onclick = () => moveFocusBy(-1);
$('#object-next').onclick = () => moveFocusBy(1);
addEventListener('keydown', e => e.key === 'Escape' && closeModal());

/* ==========================================================================
   11. Raycasting & Object Picking Controls
   ========================================================================== */
const raycaster = new T.Raycaster();
const mouseVector = new T.Vector2();
const balloonPointerNdc = new T.Vector2();
let balloonPointerInCanvas = false;
let dragStartPos = null;
let holidayMessageTimeout;
let birthdayEmailSending = false;
const holidayMessage = $('#holiday-message');
const holidayMessageText = holidayMessage.querySelector('span');
const birthdayMessage = "Today is Dev Spawn Day! thanks for the wishes! here's a slice!";

function setRaycasterFromPointer(event) {
  const rect = ren.domElement.getBoundingClientRect();
  if (!rect.width || !rect.height) return false;
  mouseVector.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(mouseVector, cam);
  return true;
}

function pickBirthdayCake(event) {
  if (!activeHolidayThemes.birthday || !birthdayCakeGroup || !setRaycasterFromPointer(event)) return false;
  return raycaster.intersectObject(birthdayCakeGroup, true).length > 0;
}

function pickValentinesRose(event) {
  if (!activeHolidayThemes.valentines || !valentinesRoseGroup || !setRaycasterFromPointer(event)) return false;
  return raycaster.intersectObject(valentinesRoseGroup, true).length > 0;
}

function pickAlvinBirthdayRose(event) {
  if (!activeHolidayThemes.alvinBirthday || !alvinBirthdayCopperRose || !setRaycasterFromPointer(event)) return false;
  return raycaster.intersectObject(alvinBirthdayCopperRose, true).length > 0;
}

function pickObject(event) {
  if (!setRaycasterFromPointer(event)) return null;
  const intersects = raycaster.intersectObjects(OBJS.map(o => o.g), true)[0];
  if (!intersects) return null;

  let parentNode = intersects.object;
  while (parentNode && !parentNode.userData.oid) {
    parentNode = parentNode.parent;
  }
  return parentNode && OBJS.find(o => o.id === parentNode.userData.oid);
}

function showHolidayMessage(message) {
  holidayMessageText.textContent = message;
  holidayMessage.hidden = false;
  window.clearTimeout(holidayMessageTimeout);
  holidayMessageTimeout = window.setTimeout(() => {
    holidayMessage.hidden = true;
  }, 6500);
}

async function sendBirthdayNotification() {
  if (birthdayEmailSending) return;

  birthdayEmailSending = true;
  showHolidayMessage(`${birthdayMessage} Sending the birthday email...`);

  try {
    const response = await fetch('/api/birthday-email', {
      method: 'POST',
      credentials: 'same-origin'
    });

    if (response.status === 429) {
      showHolidayMessage(`${birthdayMessage} A birthday email was already sent from this network recently.`);
      return;
    }
    if (!response.ok) throw new Error(`Birthday email endpoint returned ${response.status}`);

    showHolidayMessage(`${birthdayMessage} Email sent!`);
  } catch (error) {
    console.error('Birthday email request failed:', error);
    showHolidayMessage(`${birthdayMessage} The email could not be sent right now. Please try again later.`);
  } finally {
    birthdayEmailSending = false;
  }
}

function dismissHolidayMessage() {
  holidayMessage.hidden = true;
  window.clearTimeout(holidayMessageTimeout);
}

$('#holiday-message-close').onclick = dismissHolidayMessage;
ren.domElement.addEventListener('pointerdown', e => dragStartPos = [e.clientX, e.clientY]);
ren.domElement.addEventListener('pointerup', e => {
  if (dragStartPos && Math.hypot(e.clientX - dragStartPos[0], e.clientY - dragStartPos[1]) < 5) {
    if (pickValentinesRose(e)) {
      showHolidayMessage('jk i bought this for myself');
      return;
    }
    if (pickAlvinBirthdayRose(e)) {
      showHolidayMessage('is this thing on? testing testing 123... wishing my bestfriend a a great year!');
      return;
    }
    if (pickBirthdayCake(e)) {
      sendBirthdayNotification();
      return;
    }
    const clickedObj = pickObject(e);
    if (clickedObj) focusObject(clickedObj);
  }
});
ren.domElement.addEventListener('pointermove', e => {
  const rect = ren.domElement.getBoundingClientRect();
  if (rect.width && rect.height) {
    balloonPointerNdc.set(
      ((e.clientX - rect.left) / rect.width) * 2 - 1,
      -((e.clientY - rect.top) / rect.height) * 2 + 1
    );
    balloonPointerInCanvas = true;
  }
  ren.domElement.style.cursor = pickValentinesRose(e) || pickAlvinBirthdayRose(e) || pickBirthdayCake(e) || pickObject(e)
    ? 'pointer'
    : 'grab';
});
ren.domElement.addEventListener('pointerleave', () => balloonPointerInCanvas = false);

/* ==========================================================================
   12. Window Resize & Rendering Loop
   ========================================================================== */
function handleResize() {
  ren.setSize(W(), H());
  cam.aspect = W() / H();
  cam.updateProjectionMatrix();
  if (!tween && $('#object-controls').hidden) {
    cam.position.copy(homePos());
  }
}
addEventListener('resize', handleResize);
handleResize();

const tempProjVec = new T.Vector3();
let lastHolidayAnimationTime = 0;

function renderLoop() {
  requestAnimationFrame(renderLoop);
  if (mode !== '3d') return;

  const time = performance.now() / 1000;
  const delta = lastHolidayAnimationTime ? Math.min(time - lastHolidayAnimationTime, 0.05) : 0;
  lastHolidayAnimationTime = time;

  updateWindowScenery();
  updateHolidayAnimations(time, delta);
  refreshMusicMonitor(time);
  animatedMugSteam.forEach(({ wisp, material, phase, baseX }) => {
    const cycle = (time * 0.2 + phase) % 1;
    wisp.position.set(baseX + Math.sin(time * 1.4 + phase * 6) * 0.012, cycle * 0.08, 0);
    material.opacity = Math.sin(cycle * Math.PI) * 0.55;
  });

  const activeLedTheme = holidayLedPriority.find(theme => activeHolidayThemes[theme]);
  const palette = activeLedTheme ? holidayLedPalettes[activeLedTheme] : null;
  rgbLedSegments.forEach(({ material, glowMaterials, offset }) => {
    if (!palette) {
      material.color.setHSL((time * 0.12 + offset) % 1, 0.95, 0.55);
    } else {
      const palettePosition = ((time * 0.15 + offset) % 1) * palette.length;
      const colorIndex = Math.floor(palettePosition);
      ledColorFrom.setHex(palette[colorIndex]);
      ledColorTo.setHex(palette[(colorIndex + 1) % palette.length]);
      material.color.copy(ledColorFrom).lerp(ledColorTo, palettePosition - colorIndex);
      material.color.getHSL(ledColorHsl);
      material.color.setHSL(ledColorHsl.h, Math.min(1, ledColorHsl.s * 5), ledColorHsl.l);
    }
    glowMaterials.forEach(glowMaterial => glowMaterial.color.copy(material.color));
  });

  OBJS[0].g.userData.el.intensity = 0.9 + Math.sin(time * 2) * 0.3;

  holoCardGroup.userData.card.rotation.y = time * 0.8;
  holoCardGroup.userData.card.position.y = 1.9 + Math.sin(time * 1.6) * 0.08;

  if (tween) {
    const progress = Math.min((performance.now() - tween.t0) / 1200, 1);
    const easedProgress = easeInOutCubic(progress);

    cam.position.lerpVectors(tween.p0, tween.p1, easedProgress);
    ctl.target.lerpVectors(tween.t0v, tween.t1, easedProgress);

    if (progress >= 1) {
      ctl.enabled = true;
      const callback = tween.cb;
      tween = null;
      if (callback) callback();
    }
  }

  ctl.update();

  OBJS.forEach(obj => {
    tempProjVec.copy(obj.lp).project(cam);
    obj.el.style.display = tempProjVec.z < 1 ? 'flex' : 'none';
    obj.el.style.transform = `translate(-50%, -100%) translate(${(tempProjVec.x * 0.5 + 0.5) * W()}px, ${(-tempProjVec.y * 0.5 + 0.5) * H()}px)`;
  });

  seasonalInteractionMarkers.forEach(({ theme, anchor, element }) => {
    if (!activeHolidayThemes[theme]) {
      element.style.display = 'none';
      return;
    }
    anchor.updateWorldMatrix(true, false);
    anchor.getWorldPosition(tempProjVec).project(cam);
    const onScreen = tempProjVec.z < 1 && Math.abs(tempProjVec.x) <= 1.1 && Math.abs(tempProjVec.y) <= 1.1;
    element.style.display = onScreen ? 'flex' : 'none';
    element.style.transform = `translate(-50%, -100%) translate(${(tempProjVec.x * 0.5 + 0.5) * W()}px, ${(-tempProjVec.y * 0.5 + 0.5) * H()}px)`;
  });

  ren.render(scene, cam);
}

renderLoop();
