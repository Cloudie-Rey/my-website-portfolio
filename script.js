const $ = selector => document.querySelector(selector);
const T = THREE;

const D = {
  resume: {
    title: 'Resume & Education',
    code: 'RESUME.EXE',
    intro: 'Mechanical Engineering undergraduate at the Colorado School of Mines with a concentration in Automation and Controls, active in robotics research and hardware fabrication.',
    cards: [
      ['Education', 'Colorado School of Mines · B.S. Mechanical Engineering (Aug 2026 – May 2029)', 'DEGREE'],
      ['Core Skills', 'Python, MATLAB, C#, Arduino, Raspberry Pi, SolidWorks, OpenCV', 'STACK']
    ],
    rows: [
      ['2026–Pres.', 'Undergraduate Research Assistant', 'MIRRORLabs (Mines Interactive Robotics Research)'],
      ['2025', 'Summer Shadow Program Intern', 'Burns & McDonnell[cite: 4]'],
      ['2024', 'Aerospace Intern', 'Colorado Space Business Roundtable (CSBR/ASA)[cite: 4]'],
      ['2023–2026', 'Founder & Instructor', 'Code Connect Educational Non-Profit[cite: 6]']
    ]
  },
  github: {
    title: 'GitHub & Projects',
    code: 'GITHUB.SYS',
    intro: 'Robotics, computer vision, and hardware engineering projects[cite: 5].',
    cards: [
      ['The Kraken Sound Sensor', 'Acoustic search-and-rescue sensing platform to detect human voice frequencies under rubble.', 'ROBOTICS · MINES'],
      ['Lucky Charm AI Vision', 'Python & OpenCV computer vision assistant running on a Raspberry Pi hardware stack.', 'PYTHON · OPENCV'],
      ['TSA UAV Drone', 'Custom drone with mechanical claw payload (3rd Place Districts Bronze).', 'DRONE DESIGN'],
      ['Code Connect Platform', 'Official web platform deployed via Vercel with GitHub version control.', 'WEBGL/JS']
    ],
    rows: [
      ['Focus', 'Autonomous Robotics & Sensor Fusion', 'primary'],
      ['Profile', 'github.com/Cloudie-Rey', 'repository[cite: 4]']
    ]
  },
  business: {
    title: 'Experience & Leadership',
    code: 'VENTURES.DAT',
    intro: 'Industry internships, non-profit founding, and professional interpretation work[cite: 4, 5, 6].',
    cards: [
      ['Code Connect', 'Co-founded and led an educational non-profit providing 70+ instructional hours to 80+ students.', 'FOUNDER'],
      ['Nexus Language', 'Employed as a paid professional on-site Tamil interpreter for schools and developmental screenings.', 'INTERPRETER'],
      ['Jetson Accelerator', 'Selected for a 7% acceptance rate startup accelerator; executed mobile QA testing and MVP strategy.', 'STARTUP INTERN[cite: 5]']
    ],
    rows: [
      ['Community', 'Tamil Association of Colorado Youth Committee Designer', 'LEAD'],
      ['Client Acq.', 'FlexContent B2B client research and SEO technical blogging', 'INTERN[cite: 4]']
    ]
  },
  games: {
    title: 'Games & Playable Projects',
    code: 'ARCADE.BIN',
    intro: 'Award-winning interactive video game design and cooperative puzzle mechanics built in Unity[cite: 5].',
    cards: [
      ['Internal Reflection', 'Two-player cooperative puzzle game focusing on communication mechanics.', 'UNITY · TSA 2025'],
      ['State 1st Place', 'Awarded 1st Place at the TSA State Conference for Video Game Design.', 'AWARD[cite: 6]'],
      ['National 3rd Place', 'Awarded 3rd Place at the TSA National Conference for Video Game Design.', 'NATIONAL[cite: 5]']
    ],
    rows: [
      ['Platform', 'Unity Game Engine & Digital Animation', 'development']
    ]
  },
  youtube: {
    title: 'YouTube & Digital Media',
    code: 'REEL.MOV',
    intro: 'Content creation, video editing, and digital media production[cite: 5].',
    cards: [
      ['Digital Media Channels', 'Manage and produce content covering humor, creative digital media, art, and tech.', 'CONTENT'],
      ['TSA Digital Video', '1st Place District Conference award for Digital Video Production.', 'AWARDS[cite: 6]']
    ],
    rows: [
      ['Focus', 'Video Editing & Creative Storytelling', 'media[cite: 5]']
    ]
  },
  music: {
    title: 'Certifications & Interests',
    code: 'MEDIA.WAV',
    intro: 'Technical certifications, research security training, and musical performance[cite: 6].',
    cards: [
      ['SolidWorks CSWA', 'Mechanical CAD modeling certification track.', 'CAD[cite: 6]'],
      ['Electrical Hardware', '525F Multimeter Electrical Hardware Certification for diagnostics and safety.', 'SAFETY[cite: 6]'],
      ['Trinity College London', 'Initial & Grade Three Electric Keyboard Certifications.', 'MUSIC[cite: 6]']
    ],
    rows: [
      ['Compliance', 'Export Control & Research Security Certified', 'federal[cite: 6]']
    ]
  },
  contact: {
    title: 'Contact & Transmission',
    code: 'CHANNEL.ENC',
    intro: 'Get in touch for robotics collaborations, research inquiries, or engineering projects.',
    rows: [
      ['EMAIL', 'reyaadivakar@gmail.com / mines.edu', 'OPEN[cite: 4]'],
      ['LOCATION', 'Parker / Golden, CO', 'LOCAL[cite: 4]'],
      ['LINKEDIN', 'linkedin.com/in/reyaa-divakar', 'CONNECT[cite: 4]']
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
  ['biz', 'Experience', ['business']],
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
        <h1>Reyaa Divakar<br>Robotics & Mechanical Engineering.</h1>
        <p>Undergraduate at Colorado School of Mines[cite: 4]. Building autonomous robotics, mechatronics systems, and web platforms[cite: 4, 5].</p>
      </div>
      <div class="stats">
        <div><b>3.9+</b><span>STEM focus</span></div>
        <div><b>1st</b><span>TSA State Winner[cite: 6]</span></div>
        <div><b>80+</b><span>Students Taught[cite: 6]</span></div>
        <div><b>5+</b><span>Tech Internships[cite: 4, 5]</span></div>
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

  add(group, C(0.08, 0.08, 0.
