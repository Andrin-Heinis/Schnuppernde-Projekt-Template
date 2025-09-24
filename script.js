const SHOOT_ANGLE_DEG = 50;
const CONFETTI_COUNT = 50;
const SHOOT_SPEED = 650;
const SHOOT_STRENGTH = 1.5;
const GRAVITY = 1000;
const WIND_FORCE = 80;
const SPIN_SPEED = 20;
const MAX_LIFETIME = 3;
const SIZE_MIN = 14;
const SIZE_MAX = 40;
const JITTER_DEG = 18;
const EMOJIS = ["🎉", "✨", "🎊", "💫", "🌟", "🟣", "🟡", "🟢", "❤️", "🔥"];

function shoot(side, count) {
  const w = window.innerWidth,
    h = window.innerHeight;
  const elems = [];
  for (let i = 0; i < count; i++) {
    const e = document.createElement("span");
    e.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
    const size = SIZE_MIN + Math.random() * (SIZE_MAX - SIZE_MIN);
    e.style.position = "fixed";
    e.style.fontSize = size + "px";
    e.style.pointerEvents = "none";
    e.style.zIndex = 9999;
    const x0 = side === "left" ? -40 : w + 40;
    const y0 = h * 0.25 + Math.random() * h * 0.25;
    const dir = side === "left" ? 1 : -1;
    const base = (SHOOT_ANGLE_DEG * Math.PI) / 180;
    const jitter = ((Math.random() * 2 - 1) * JITTER_DEG * Math.PI) / 180;
    const theta = base + jitter;
    const v0 = SHOOT_SPEED * SHOOT_STRENGTH * (0.8 + Math.random() * 0.4);
    const vx0 = Math.cos(theta) * v0 * dir;
    const vy0 = -Math.sin(theta) * v0;
    e._x = x0;
    e._y = y0;
    e._vx = vx0;
    e._vy = vy0;
    e._wobble = Math.random() * Math.PI * 2;
    e._spin = (0.5 + Math.random()) * SPIN_SPEED;
    e._life = 0;
    e.style.left = e._x + "px";
    e.style.top = e._y + "px";
    document.body.appendChild(e);
    elems.push(e);
  }
  let last = performance.now();
  function frame(t) {
    const dt = (t - last) / 1000;
    last = t;
    let alive = false;
    for (const e of elems) {
      if (!e) continue;
      e._life += dt;
      e._wobble += e._spin * dt;
      const wind = Math.sin(e._wobble) * WIND_FORCE;
      e._vy += GRAVITY * dt;
      e._vx += wind * dt;
      e._x += e._vx * dt;
      e._y += e._vy * dt;
      const fade = Math.max(0, 1 - e._life / MAX_LIFETIME);
      e.style.opacity = fade.toFixed(2);
      e.style.transform = `translateZ(0) rotate(${e._wobble * 30}deg)`;
      e.style.left = e._x + "px";
      e.style.top = e._y + "px";
      if (e._y < h + 80 && fade > 0) {
        alive = true;
      } else {
        e.remove();
      }
    }
    if (alive) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

document.addEventListener("DOMContentLoaded", () => {
  const btn = document.getElementById("confettiBtn");
  if (!btn) return;
  btn.addEventListener("click", () => {
    shoot("left", CONFETTI_COUNT);
    shoot("right", CONFETTI_COUNT);
  });
});
