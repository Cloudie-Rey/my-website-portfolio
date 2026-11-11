const $ = selector => document.querySelector(selector);
const T = THREE;

/* ==========================================================================
   1. Application Content Data
   ========================================================================== */
const D = {
  resume: {
    title: 'Resume & Credentials',
    code: 'RESUME.EXE',
    intro: 'Systems engineer who builds machines, software and the occasional company. Replace this with your own summary.',
    cards: [
      ['Certifications', 'PE track · AWS · CNC safety', 'CREDENTIALS'],
      ['Core skills', 'C++ · TypeScript · Rust · CAD · embedded', 'STACK']
    ],
    rows: [
      ['2023–now', 'Senior Engineer', 'Company or Lab'],
      ['2020–2023', 'Full-Stack Developer', 'Studio Name'],
      ['2016–2020', 'B.S. Mechanical Engineering', 'University']
    ]
  },
  github: {
    title: 'GitHub & Software',
    code: 'GITHUB.SYS',
    intro: 'Open-source tools, firmware and web experiments.',
    cards: [
      ['arc-core', 'Realtime motor-control firmware.', 'RUST · 1.2k stars'],
      ['bench-ui', 'Dashboard kit for lab instruments.', 'TYPESCRIPT · 640 stars'],
      ['cable-tidy', 'CLI that audits wiring diagrams.', 'PYTHON · 210 stars'],
      ['gantry-sim', 'Browser CNC toolpath simulator.', 'WEBGL · 380 stars']
    ],
    rows: [
      ['Commits / yr', '2,400', 'public + private'],
      ['Languages', 'TS · Rust · Python · C++', 'primary']
    ]
  },
  business: {
    title: 'Business & Ventures',
    code: 'VENTURES.DAT',
    intro: 'Companies and products built from the workshop floor.',
    cards: [
      ['Volt Works LLC', 'Custom machining and prototyping studio.', 'FOUNDER'],
      ['Spark Labs', 'Hardware subscription for makers.', 'CO-FOUNDER'],
      ['Consulting', 'Embedded systems and product engineering.', 'OPEN']
    ],
    rows: [
      ['Founded', '2021', 'Volt Works'],
      ['Clients', '40+', 'industrial and indie']
    ]
  },
  games: {
    title: 'Games & Playable Projects',
    code: 'ARCADE.BIN',
    intro: 'Small games you can play in the browser.',
    cards: [
      ['Neon Dock', 'Arcade crane-puzzle in 60 seconds.', 'PLAYABLE'],
      ['Cable Panic', 'Untangle wires before the power blows.', 'PLAYABLE'],
      ['Mech Garage', 'Build and pilot a suit. In progress.', 'PROTOTYPE']
    ],
    rows: [
      ['Jams entered', '12', 'Ludum Dare and others']
    ]
  },
  youtube: {
    title: 'YouTube & Content',
    code: 'REEL.MOV',
    intro: 'Build logs, teardowns and shop tours.',
    cards: [
      ['Build Logs', 'Weekly progress on the exo-suit.', 'CHANNEL'],
      ['Teardowns', 'What is inside old arcade cabinets.', 'SERIES'],
      ['Shop Tour', 'The full garage walkthrough.', 'VIDEO']
    ],
    rows: [
      ['Subscribers', '24k', 'placeholder'],
      ['Uploads', 'Fridays', 'weekly']
    ]
  },
  music: {
    title: 'Music & Spotify',
    code: 'HEADPHONES.WAV',
    intro: 'What plays in the workshop: playlists for building, focus and late-night soldering.',
    cards: [
      ['Workshop Radio', 'Lo-fi and synthwave for long builds.', 'PLAYLIST'],
      ['Focus Mode', 'Instrumentals for deep work.', 'PLAYLIST'],
      ['Late Night Solder', 'Dark ambient and electronic.', 'PLAYLIST']
    ],
    rows: [
      ['Platform', 'Spotify', 'link below']
    ],
    link: ['Open my Spotify', 'https://open.spotify.com']
  },
  contact: {
    title: 'Contact & Transmission',
    code: 'CHANNEL.ENC',
    intro: 'Encrypted line is open. Tell me what you want to build.',
    rows: [
      ['EMAIL', 'you@example.com', 'OPEN'],
      ['LOCATION', 'Golden, CO', 'LOCAL'],
      ['RESPONSE', 'Within 48 hours', 'TYPICAL']
    ]
  }
};

const renderSection = key => {
  const s = D[key];
  return `
    <div class="sec">
      <div class="code">// ${s.code}</div>
      <h2>${s.title}</h2>
      <p>${s.intro}</p>
      ${s.cards ? `<div class="cards">${s.cards.map(c => `<div class="card"><i>${c[2]}</i><h3>${c[0]}</h3><p>${c[1]}</p></div>`).join('')}</div>` : ''}
      ${s.rows ? `<table>${s.rows.map(r => `<tr>${r.map((x, i) => `<td${i ? '' : ' class="k"'}>${x}</td>`).join('')}</tr>`).join('')}</table>` : ''}
      ${s.link ? `<a class="btn" href="${s.link[1]}" target="_blank" rel="noopener">${s.link[0]}</a>` : ''}
    </div>`;
};

/* ==========================================================================
   2. Grid View Navigation Logic
   ========================================================================== */
const TABS = [
  ['ov', 'Overview'],
  ['eng', 'Engineering / Code', ['github']],
  ['biz', 'Business', ['business']],
  ['med', 'Media / Games', ['games', 'youtube', 'music']],
  ['res', 'Resume', ['resume']],
  ['con', 'Contact', ['contact']]
];

const side = $('#side');
const panel = $('#panel');

function switchTab(id) {
  side.querySelectorAll('button').forEach(b => b.classList.toggle('on', b.dataset.t === id));
  const activeTab = TABS.find(x => x[0] === id);

  if (id === 'ov') {
    panel.innerHTML = `
      <div class="sec hero">
        <div class="code">// WORKSHOP INDEX</div>
        <h1>Precision builds,<br>from circuit to company.</h1>
        <p>Engineer, founder and maker. Everything below is also in the 3D workshop.</p>
      </div>
      <div class="stats">
        <div><b>12</b><span>years building</span></div>
        <div><b>40+</b><span>client projects</span></div>
        <div><b>24k</b><span>subscribers</span></div>
        <div><b>6</b><span>live projects</span></div>
      </div>
      <div class="sec">
        <table>
          ${TABS.slice(1).map(x => `<tr class="go" data-t="${x[0]}"><td class="k">${x[1]}</td><td>${D[x[2][0]].intro}</td></tr>`).join('')}
        </table>
      </div>`;
  } else {
    panel.innerHTML = activeTab[2].map(renderSection).join('');
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

/* ==========================================================================
   5. Scene Lighting & Environmental Elements
   ========================================================================== */
scene.add(new T.AmbientLight(0xdbe8ff, 0.38));
scene.add(new T.HemisphereLight(0xcfe3ff, 0x8a7a6a, 0.28));

const dirLight = new T.DirectionalLight(0xffffff, 0.55);
dirLight.position.set(8, 14, 10);
scene.add(dirLight);

const centerLight = new T.PointLight(0x7fe9ff, 0.3, 14);
centerLight.position.set(0, 4, 0);
scene.add(centerLight);

const wallMaterial = M(0xa9cdf0);
const trimMaterial = M(0xf2f6fb);
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

[
  [4.9, 0.14, 0.22, 0, 2.25],
  [4.9, 0.14, 0.22, 0, 5.55],
  [0.12, 3.4, 0.22, -2.4, 3.9],
  [0.12, 3.4, 0.22, 2.4, 3.9],
  [0.08, 3.4, 0.2, 0, 3.9]
].forEach(a => buildWall(a[0], a[1], a[2], a[3], a[4], -5.9, trimMaterial));

const skyTexture = createTexture(4, 256, (ctx, w, h) => {
  const grad = ctx.createLinearGradient(0, 0, 0, h);
  grad.addColorStop(0, '#5b8de0');
  grad.addColorStop(0.55, '#b7a6e8');
  grad.addColorStop(1, '#ffd2b8');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);
});

add(scene, new T.PlaneGeometry(16, 10), new T.MeshBasicMaterial({ map: skyTexture, fog: false }), 0, 3.9, -12, 0);
add(scene, new T.ConeGeometry(3, 2.4, 4), new T.MeshBasicMaterial({ color: 0x6a78b8, fog: false }), 2.5, 2.9, -11.5, 0);

const cloudTexture = createTexture(128, 128, ctx => {
  const grad = ctx.createRadialGradient(64, 64, 4, 64, 64, 62);
  grad.addColorStop(0, 'rgba(255,255,255,.95)');
  grad.addColorStop(0.55, 'rgba(255,240,250,.5)');
  grad.addColorStop(1, 'rgba(255,255,255,0)');
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, 128, 128);
});

const clouds = [];
for (let i = 0; i < 7; i++) {
  const cloudGroup = new T.Group();
  for (let j = 0; j < 4; j++) {
    const sprite = new T.Sprite(new T.SpriteMaterial({ map: cloudTexture, fog: false, depthWrite: false }));
    sprite.position.set(j * 0.9 - 1.4, R() * 0.4, R() * 0.3);
    sprite.scale.set(2.5 + R() * 1.5, 1.6 + R(), 1);
    cloudGroup.add(sprite);
  }
  cloudGroup.position.set(-8 + i * 2.4, 2.6 + R() * 2.4, -9 - R() * 2);
  cloudGroup.userData.v = 0.2 + R() * 0.25;
  scene.add(cloudGroup);
  clouds.push(cloudGroup);
}

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
buildWall(0.35, 0.3, 4.5, 5.6, 6.6, -3.8, M(0x4a5568));

/* ==========================================================================
   7. Interactive 3D Objects Setup & Registration
   ========================================================================== */
const OBJS = [];

function registerObject(id, key, label, group, anchorPos, cameraPos, labelOffset = 1.3) {
  group.userData.oid = id;
  scene.add(group);
  OBJS.push({
    id,
    key,
    label,
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
      new T.Vector3(5.6 + offset, 6.5, -1.8),
      new T.Vector3(5.6 + offset * 1.2, 5.4, -1.7),
      new T.Vector3(5.6 + offset * 0.8, 3.9, -1.6)
    ], 0.07, cableDark);
  }

  registerObject('exo', 'resume', 'MECH EXO-SUIT', group, [5.6, 2.4, -1.6], [3, 3, 2.8], 2);
}

// 2. White Workbench Setup
{
  const group = new T.Group();
  const whiteMat = M(0xf4f7fb);
  const lightMat = M(0xdfe8f3);
  const blueMat = M(0xbcd8f5);
  const darkMat = M(0x1b1f2b);
  const greenMat = new T.MeshBasicMaterial({ color: 0x5fbf7a });
  const brightWhiteMat = new T.MeshBasicMaterial({ color: 0xf7fcff });

  add(group, B(5, 0.2, 2.2), whiteMat, 0, 1.8, -3.2);
  [-1, 1].forEach(z => add(group, B(0.18, 1.8, 0.18), whiteMat, -2.3, 0.9, -3.2 + z * 0.9));
  add(group, B(1.1, 1.8, 2), lightMat, 1.9, 0.9, -3.2);

  for (let k = 0; k < 4; k++) {
    add(group, B(0.5, 0.04, 0.04), M(0x9aa8bb), 1.9, 0.3 + k * 0.42, -2.18);
  }

  add(group, B(4.8, 0.04, 0.04), new T.MeshBasicMaterial({ color: 0xffe2b8 }), 0, 1.69, -2.12, 0);

  add(group, B(0.7, 1.3, 0.7), whiteMat, 3.2, 0.65, -3.4);
  add(group, B(0.5, 1, 0.02), new T.MeshBasicMaterial({ color: 0x7fefff }), 3.2, 0.7, -3.04, 0);

  const monitorsGroup = new T.Group();
  [-1.1, 0.9].forEach((x, i) => {
    const mon = new T.Group();
    add(mon, B(1.9, 1.2, 0.1), darkMat, 0, 0, 0);
    add(mon, new T.PlaneGeometry(1.75, 1.05), new T.MeshBasicMaterial({
      map: createTexture(256, 150, (ctx, w, h) => {
        const grad = ctx.createLinearGradient(0, 0, 0, h);
        grad.addColorStop(0, '#7fa8ff');
        grad.addColorStop(1, '#ffd3cf');
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, w, h);
        ctx.fillStyle = 'rgba(255,255,255,.9)';
        for (let k = 0; k < 7; k++) {
          ctx.beginPath();
          ctx.ellipse(20 + k * 37, 105 + (k % 3) * 12, 38, 15, 0, 0, 7);
          ctx.fill();
        }
      })
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

  add(group, C(0.07, 0.07, 0.13), M(0xffffff), -1.4, 1.97, -2.7);
  add(group, C(0.13, 0.1, 0.2), whiteMat, -2.15, 2, -2.45);
  add(group, new T.SphereGeometry(0.17, 10, 8), greenMat, -2.15, 2.25, -2.45, 0);

  addRod(group, [-2.35, 1.9, -3.9], [-2.35, 2.7, -3.9], 0.035, whiteMat);
  addRod(group, [-2.35, 2.7, -3.9], [-1.3, 2.55, -2.95], 0.03, whiteMat);
  add(group, C(0.06, 0.06, 0.26), darkMat, -1.3, 2.4, -2.95);
  add(group, C(0.16, 0.16, 0.02, 20), darkMat, -1.3, 2.4, -2.78).rotation.x = Math.PI / 2;

  [
    [-2.1, 2.05, -3.1, 0.16],
    [-1.92, 2, -3.05, 0.12],
    [-2.28, 2, -3.05, 0.12]
  ].forEach(a => add(group, new T.SphereGeometry(a[3], 12, 10), brightWhiteMat, a[0], a[1], a[2], 0));

  const deskLight = new T.PointLight(0xdbeeff, 0.6, 4);
  deskLight.position.set(-2.1, 2.4, -2.8);
  group.add(deskLight);

  group.add(monitorsGroup);
  monitorsGroup.userData.oid = 'mon';
  registerObject('mon', 'github', 'DUAL-MONITOR WORKBENCH', group, [-0.1, 2.7, -3.4], [-0.1, 3.2, 0.9], 1.6);
}

// 3. Desk Chair & Rug
{
  const group = new T.Group();
  const whiteMat = M(0xf4f7fb);
  const blueMat = M(0xbcd8f5);

  [
    [0, -1.5, 1.2],
    [-1, -1.3, 0.8],
    [1, -1.4, 0.9],
    [0.2, -0.7, 0.75],
    [-0.5, -2.2, 0.7]
  ].forEach((r, i) => add(scene, C(r[2], r[2], 0.04, 32), M(0xf3f8ff), r[0], 0.03 + i * 0.002, r[1], 0));

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

  group.position.set(0.3, 0, -1.9);
  group.rotation.y = 0.35;
  scene.add(group);
}

// 4. Wall Shelves
[-3.5, 3.5].forEach((x, k) => {
  [3.1, 4.2].forEach((y, j) => {
    buildWall(1.7, 0.1, 0.45, x, y, -5.75, trimMaterial);

    if (!j) {
      add(scene, C(0.12, 0.1, 0.2), trimMaterial, x - 0.55, y + 0.15, -5.75);
      add(scene, new T.SphereGeometry(0.17, 10, 8), new T.MeshBasicMaterial({ color: 0x5fbf7a }), x - 0.55, y + 0.4, -5.75, 0);
      add(scene, new T.SphereGeometry(0.2, 12, 10), M(0xffffff), x, y + 0.2, -5.75);
      add(scene, new T.SphereGeometry(0.14, 12, 10), M(0xffffff), x + 0.17, y + 0.14, -5.75);
      [0, 1, 2].forEach(b => add(scene, B(0.08, 0.3 + b * 0.05, 0.25), M([0xf7b8d2, 0x8ec5f5, 0xffe9a8][b]), x + 0.5 + b * 0.1, y + 0.2, -5.75));
    } else {
      [-0.35, 0, 0.35].forEach((offset, b) => add(scene, new T.SphereGeometry(0.13 - b * 0.0, 12, 10), new T.MeshBasicMaterial({ color: 0xf7fcff }), x + offset, y + 0.2, -5.75, 0));
      add(scene, C(0.1, 0.08, 0.16), trimMaterial, x + 0.6, y + 0.13, -5.75);
    }
  });

  addTube([
    new T.Vector3(x - 0.8, 3.1, -5.7),
    new T.Vector3(x - 0.9, 2.6, -5.7),
    new T.Vector3(x - 0.85, 2.1, -5.7)
  ], 0.03, M(0x4f9e5f));
});

// 5. High-Tech Briefcase
{
  const group = new T.Group();
  add(group, B(1.2, 0.7, 0.35), M(0x20242e), 0, 0, 0);
  add(group, B(1.22, 0.05, 0.37), GL, 0, 0, 0, 0);
  add(group, new T.TorusGeometry(0.18, 0.03, 8, 14, Math.PI), M(0x8a96a8), 0, 0.35, 0);
  add(group, B(0.14, 0.1, 0.04), GL, 0.3, 0.12, 0.19, 0);

  group.position.set(1.9, 2.25, -3.1);
  group.rotation.y = -0.35;
  registerObject('biz', 'business', 'HIGH-TECH BRIEFCASE', group, [1.9, 2.3, -3.1], [2.3, 3.1, -0.6], 1);
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

  add(group, C(2.3, 2.3, 0.05, 40), M(0xf4f4f0), -5.4, 0.03, -2.6);
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
    [-6.7, -3, 0x8ec5f5],
    [-4.2, -3.1, 0xf7b8d2],
    [-5.5, -1.5, 0xf6f8fc]
  ].forEach(b => {
    const cushion = add(group, new T.SphereGeometry(0.62, 18, 14), M(b[2]), b[0], 0.45, b[1]);
    cushion.scale.set(1.1, 0.72, 1);
    cushion.rotation.y = R() * 3;
  });

  const loungeLight = new T.PointLight(0xb8a8ff, 0.8, 8);
  loungeLight.position.set(-5.4, 2.6, -3);
  group.add(loungeLight);

  group.position.x = -0.8;
  registerObject('arc', 'games', 'GAMING LOUNGE', group, [-6.2, 1.6, -5.4], [-4.4, 2.9, 0.8], 2.2);
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

// 8. Holographic Business Card
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
        ctx.font = '700 30px monospace';
        ctx.fillText('YOUR NAME', 24, 80);
        ctx.fillStyle = '#fff';
        ctx.font = '16px monospace';
        ctx.fillText('ENGINEER · FOUNDER · MAKER', 24, 115);
        ctx.fillText('you@example.com', 24, 160);
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

  holoCardGroup.position.set(3.4, 0, 2);
  registerObject('card', 'contact', 'HOLOGRAPHIC BUSINESS CARD', holoCardGroup, [3.4, 1.9, 2], [3.4, 2.4, 5.2], 1.1);
}

// 9. Headphones -> Spotify Link
{
  const group = new T.Group();
  const whiteMat = M(0xf0f4fa);
  add(group, C(0.16, 0.18, 0.04), new T.MeshBasicMaterial({ color: 0x8ec5f5 }), 0, 0.02, 0, 0);
  add(group, C(0.025, 0.025, 0.8), M(0xdfe8f3), 0, 0.4, 0);
  add(group, new T.TorusGeometry(0.3, 0.04, 8, 24, Math.PI), whiteMat, 0, 0.52, 0);

  [-1, 1].forEach(side => {
    add(group, C(0.14, 0.14, 0.1, 20), whiteMat, side * 0.3, 0.5, 0).rotation.z = Math.PI / 2;
    add(group, new T.TorusGeometry(0.1, 0.018, 6, 18), new T.MeshBasicMaterial({ color: 0x1db954 }), side * 0.36, 0.5, 0, 0).rotation.y = Math.PI / 2;
  });

  group.position.set(1.35, 1.9, -2.5);
  group.rotation.y = 0.35;
  registerObject('hp', 'music', 'HEADPHONES // SPOTIFY', group, [1.35, 2.4, -2.5], [1.6, 3, -0.3], 2.7);
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

  add(group, B(0.9, 0.05, 0.55), MT(pushBoardTexture), 5.1, 0.09, 5.4).rotation.y = 0.2;

  const ballGroup = new T.Group();
  add(ballGroup, new T.SphereGeometry(0.22, 18, 12), M(0x8a4b22)).scale.set(1.7, 0.95, 0.95);
  add(ballGroup, B(0.28, 0.02, 0.04), M(0xf4f7fb), 0, 0.2, 0);
  [-1, 1].forEach(side => add(ballGroup, new T.TorusGeometry(0.18, 0.012, 6, 16), M(0xf4f7fb), side * 0.2, 0, 0).rotation.y = Math.PI / 2);

  ballGroup.position.set(4, 0.21, 6.6);
  ballGroup.rotation.y = 0.5;
  group.add(ballGroup);

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
OBJS.forEach((obj, index) => {
  const labelElem = document.createElement('div');
  labelElem.className = 'lbl';
  labelElem.innerHTML = `<i></i>0${index + 1} ${obj.label}`;
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
  $('#mb').innerHTML = renderSection(key);
  $('#modal').classList.add('on');
}

function closeModal() {
  $('#modal').classList.remove('on');
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

  clouds.forEach(cloud => {
    cloud.position.x += cloud.userData.v * 0.008;
    if (cloud.position.x > 9) cloud.position.x = -9;
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
