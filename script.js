const $ = selector => document.querySelector(selector);
const T = THREE;


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
    code: 'EXTRA.FACTS',
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
  return `
    <div class="sec">
      <div class="code">// ${s.code}</div>
      <h2>${s.title}</h2>
      <p>${s.intro}</p>
      ${s.cards ? `<div class="cards">${s.cards.map(c => `<div class="card"><i>${c[2]}</i><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join('')}</div>` : ''}
      ${s.rows ? `<table>${s.rows.map(r => `<tr>${r.map((x, i) => `<td${i ? '' : ' class="k"'}>${x}</td>`).join('')}</tr>`).join('')}</table>` : ''}
      ${s.links ? s.links.map(link => `<a class="btn" href="${link[1]}" download>${link[0]}</a>`).join(' ') : ''}
      ${s.buttons ? `<div class="action-buttons">${s.buttons.map(([label, url, size]) => `<a class="btn${size === 'small' ? ' btn-small' : ''}" href="${url}" target="_blank" rel="noopener">${label}</a>`).join('')}</div>` : ''}
      ${includeSpotifyEmbed && s.embed ? `<div class="spotify-embed spotify-embed-inline"><iframe title="Spotify playlist player" src="${s.embed}" width="100%" height="352" frameborder="0" allowfullscreen allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe></div>` : ''}
      ${s.link ? `<a class="btn" href="${s.link[1]}" target="_blank" rel="noopener">${s.link[0]}</a>` : ''}
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
}

$('#b3').onclick = () => setMode('3d');
$('#bg').onclick = () => setMode('grid');

/* ==========================================================================
   4. Three.js 3D Scene Architecture & Helper Functions
   ========================================================================== */
const stage = $('#stage');
const W = () => stage.clientWidth;
const H = () => stage.clientHeight;

const scene = new T.Scene();
scene.background = new T.Color(0x0b1226);
scene.fog = new T.Fog(0x0b1226, 45, 95);

const cam = new T.PerspectiveCamera(38, 1, 0.1, 200);
const HB = new T.Vector3(-15, 11, 17);
const HT = new T.Vector3(0, 1.4, 1);
const homePos = () => HB.clone().multiplyScalar(Math.max(1, 1.5 / cam.aspect));

const ren = new T.WebGLRenderer({ antialias: true });
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

const drawWindowScenery = (ctx, width, height, hour) => {
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

  ctx.fillStyle = mixHexColors('#657aa8', '#101b36', night);
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
  ctx.fillStyle = mixHexColors('#8499c5', '#172648', night);
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

add(scene, B(18.6, 0.4, 15.2), MT(woodTexture), 0, -0.2, 1.5, 0);
add(scene, B(19, 0.4, 15.6), M(0x131a33), 0, -0.6, 1.5, 0);

buildWall(0.3, 7, 15.3, 9, 3.5, 1.5);
buildWall(6.75, 7, 0.3, -5.775, 3.5, -6);
buildWall(6.75, 7, 0.3, 5.775, 3.5, -6);
buildWall(4.8, 2.2, 0.3, 0, 1.1, -6);
buildWall(4.8, 1.4, 0.3, 0, 6.3, -6);

buildWall(18.3, 0.18, 0.08, 0, 0.09, -5.82, trimMaterial);
buildWall(0.08, 0.18, 15, 8.82, 0.09, 1.5, trimMaterial);

const rgbLedSegments = [];
const addRgbLedStrip = (axis, length, x, y, z) => {
  const count = Math.ceil(length / 0.45);
  const segmentLength = length / count;
  for (let i = 0; i < count; i++) {
    const material = new T.MeshBasicMaterial({ color: 0xffffff });
    const geometry = axis === 'x'
      ? B(segmentLength + 0.015, 0.045, 0.045)
      : B(0.045, 0.045, segmentLength + 0.015);
    const positionX = axis === 'x' ? x - length / 2 + (i + 0.5) * segmentLength : x;
    const positionZ = axis === 'z' ? z - length / 2 + (i + 0.5) * segmentLength : z;
    add(scene, geometry, material, positionX, y, positionZ, 0);
    rgbLedSegments.push({ material, offset: i / count });
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

const localTime = new Date();
const getLocalHour = date => date.getHours() + date.getMinutes() / 60;
const windowScenery = createTexture(512, 360, (ctx, w, h) => {
  drawWindowScenery(ctx, w, h, getLocalHour(localTime));
});
let lastWindowMinute = localTime.getHours() * 60 + localTime.getMinutes();

function updateWindowScenery() {
  const now = new Date();
  const minute = now.getHours() * 60 + now.getMinutes();
  if (minute === lastWindowMinute) return;
  lastWindowMinute = minute;
  drawWindowScenery(windowScenery.image.getContext('2d'), 512, 360, getLocalHour(now));
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
    x += (R() - 0.5) * 2;
    z += (R() - 0.5) * 2;
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
  mug.position.set(-1.72, 1.9 * (1 - 1.65), -2.62);
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
  addBlackLabPlush(group, -2.15, 1.9, -2.45, 0.65);

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

  add(group, B(5, 0.06, 4.2), M(0x2b3245), 5.8, 0.03, 5.2);

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

  rackGroup.position.set(8.3, 0, 5.2);
  rackGroup.rotation.y = -Math.PI / 2;
  group.add(rackGroup);

  const addNikeShoe = (x, z, rotation) => {
    const shoe = new T.Group();
    const upperMat = M(0x18243a);
    const soleMat = M(0xe8e8e2);
    add(shoe, B(0.28, 0.07, 0.58), soleMat, 0, 0.055, 0);
    const upper = add(shoe, new T.SphereGeometry(1, 16, 12), upperMat, 0, 0.16, 0.01);
    upper.scale.set(0.13, 0.11, 0.25);
    add(shoe, B(0.1, 0.035, 0.18), upperMat, 0, 0.245, -0.015);
    [-0.065, -0.015, 0.035].forEach(z => add(shoe, B(0.1, 0.012, 0.018), soleMat, 0, 0.265, z));
    [-1, 1].forEach(side => {
      const swooshCurve = new T.CatmullRomCurve3([
        new T.Vector3(side * 0.135, 0.16, -0.16),
        new T.Vector3(side * 0.145, 0.1, -0.04),
        new T.Vector3(side * 0.145, 0.12, 0.04),
        new T.Vector3(side * 0.135, 0.2, 0.16)
      ]);
      add(shoe, new T.TubeGeometry(swooshCurve, 14, 0.012, 5, false), soleMat, 0, 0, 0, 0);
    });
    shoe.position.set(x, 0, z);
    shoe.rotation.y = rotation;
    group.add(shoe);
  };
  addNikeShoe(8.68, 4.7, 0.08);
  addNikeShoe(8.68, 5.38, -0.08);

  add(group, B(0.9, 0.05, 0.55), MT(pushBoardTexture), 5.1, 0.09, 5.4).rotation.y = 0.2;

  const ballGroup = new T.Group();
  add(ballGroup, new T.SphereGeometry(0.22, 18, 12), M(0x8a4b22)).scale.set(1.7, 0.95, 0.95);
  add(ballGroup, B(0.28, 0.02, 0.04), M(0xf4f7fb), 0, 0.2, 0);
  [-1, 1].forEach(side => add(ballGroup, new T.TorusGeometry(0.18, 0.012, 6, 16), M(0xf4f7fb), side * 0.2, 0, 0).rotation.y = Math.PI / 2);

  ballGroup.position.set(4, 0.21, 6.6);
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

/* ==========================================================================
   10. Camera Focus & Modal Interactions
   ========================================================================== */
let tween = null;
const easeInOutCubic = t => t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

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
  closeModal();
  animateCamera(obj.c, obj.a, () => openModal(obj.key));
  $('#back').hidden = false;
  $('#labels').classList.add('foc');
}

function openModal(key) {
  $('#mb').innerHTML = renderSection(key, false);
  const showSpotifyPlayer = key === 'music';
  spotifyPlayer.classList.toggle('spotify-player-offscreen', !showSpotifyPlayer);
  spotifyPlayer.setAttribute('aria-hidden', String(!showSpotifyPlayer));
  $('#modal').classList.toggle('has-spotify-player', showSpotifyPlayer);
  $('#modal').classList.add('on');
}

function closeModal() {
  $('#modal').classList.remove('on');
  $('#modal').classList.remove('has-spotify-player');
  spotifyPlayer.classList.add('spotify-player-offscreen');
  spotifyPlayer.setAttribute('aria-hidden', 'true');
}

function resetToHome() {
  closeModal();
  animateCamera(homePos(), HT);
  $('#back').hidden = true;
  $('#labels').classList.remove('foc');
}

$('#mx').onclick = closeModal;
$('#back').onclick = resetToHome;
addEventListener('keydown', e => e.key === 'Escape' && closeModal());

/* ==========================================================================
   11. Raycasting & Object Picking Controls
   ========================================================================== */
const raycaster = new T.Raycaster();
const mouseVector = new T.Vector2();
let dragStartPos = null;

function pickObject(event) {
  const rect = ren.domElement.getBoundingClientRect();
  mouseVector.set(
    ((event.clientX - rect.left) / rect.width) * 2 - 1,
    -((event.clientY - rect.top) / rect.height) * 2 + 1
  );
  raycaster.setFromCamera(mouseVector, cam);
  
  const intersects = raycaster.intersectObjects(OBJS.map(o => o.g), true)[0];
  if (!intersects) return null;

  let parentNode = intersects.object;
  while (parentNode && !parentNode.userData.oid) {
    parentNode = parentNode.parent;
  }
  return parentNode && OBJS.find(o => o.id === parentNode.userData.oid);
}

ren.domElement.addEventListener('pointerdown', e => dragStartPos = [e.clientX, e.clientY]);
ren.domElement.addEventListener('pointerup', e => {
  if (dragStartPos && Math.hypot(e.clientX - dragStartPos[0], e.clientY - dragStartPos[1]) < 5) {
    const clickedObj = pickObject(e);
    if (clickedObj) focusObject(clickedObj);
  }
});
ren.domElement.addEventListener('pointermove', e => {
  ren.domElement.style.cursor = pickObject(e) ? 'pointer' : 'grab';
});

/* ==========================================================================
   12. Window Resize & Rendering Loop
   ========================================================================== */
function handleResize() {
  ren.setSize(W(), H());
  cam.aspect = W() / H();
  cam.updateProjectionMatrix();
  if (!tween && $('#back').hidden) {
    cam.position.copy(homePos());
  }
}
addEventListener('resize', handleResize);
handleResize();

const tempProjVec = new T.Vector3();

function renderLoop() {
  requestAnimationFrame(renderLoop);
  if (mode !== '3d') return;

  const time = performance.now() / 1000;

  updateWindowScenery();
  refreshMusicMonitor(time);
  animatedMugSteam.forEach(({ wisp, material, phase, baseX }) => {
    const cycle = (time * 0.2 + phase) % 1;
    wisp.position.set(baseX + Math.sin(time * 1.4 + phase * 6) * 0.012, cycle * 0.08, 0);
    material.opacity = Math.sin(cycle * Math.PI) * 0.55;
  });

  rgbLedSegments.forEach(({ material, offset }) => {
    material.color.setHSL((time * 0.12 + offset) % 1, 0.95, 0.55);
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

  ren.render(scene, cam);
}

renderLoop();
