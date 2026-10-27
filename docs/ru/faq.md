---
title: Частые вопросы пользователей
order: 6.3
searchPhrases:
  - как мне
  - что если
  - вопросы
  - частые вопросы
  - настройки
---

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.hero { position: relative; overflow: hidden; isolation: isolate; border-radius: 18px; padding: 28px 32px 30px; background: linear-gradient(135deg, #03050b 0%, #0b1230 50%, #1d3480 100%) padding-box; border: 1px solid #222c55; animation: hero-in 0.6s cubic-bezier(0.2, 0.7, 0.2, 1) both; }
.hero-glow { position: absolute; width: 360px; height: 360px; right: -120px; top: -160px; border-radius: 50%; background: radial-gradient(circle, rgba(91, 124, 240, 0.45) 0%, rgba(91, 124, 240, 0) 65%); filter: blur(6px); animation: hero-float 7s ease-in-out infinite alternate; pointer-events: none; }
.hero-glow.two { width: 260px; height: 260px; left: -110px; right: auto; top: auto; bottom: -150px; background: radial-gradient(circle, rgba(56, 189, 248, 0.22) 0%, rgba(56, 189, 248, 0) 65%); animation-duration: 9s; }
.hero-in { position: relative; }
.hero-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
.hero-kicker svg { width: 15px; height: 15px; }
.hero-title { margin: 0 0 12px 0; color: #ffffff; font-size: clamp(22px, 3vw, 28px); line-height: 1.3; font-weight: 700; letter-spacing: -0.015em; }
.hero-title span { background: linear-gradient(90deg, #a9bdf5, #6d8ff5, #a9bdf5); background-size: 200% 100%; -webkit-background-clip: text; background-clip: text; color: transparent; animation: hero-shimmer 6s linear infinite; }
.hero-desc { max-width: 600px; margin: 0 0 18px 0; color: #a7adc4; font-size: 14px; line-height: 1.6; }
.hero-meta { display: flex; flex-wrap: wrap; gap: 8px; }
.hero-chip { padding: 6px 12px; border-radius: 999px; background: #192146; border: 1px solid #27325e; color: #c3d0ff; font-size: 12px; font-weight: 600; letter-spacing: 0.02em; }
@keyframes hero-in { from { transform: translateY(10px); } to { transform: none; } }
@keyframes hero-float { to { transform: translate(-40px, 30px) scale(1.08); } }
@keyframes hero-shimmer { to { background-position: -200% 0; } }
@media (max-width: 560px) { .hero { padding: 22px 18px 24px; } }
@media (prefers-reduced-motion: reduce) { .hero, .hero-glow, .hero-title span { animation: none !important; } }
</style>

<div class="hero">
<div class="hero-glow"></div><div class="hero-glow two"></div>
<div class="hero-in">
<p class="hero-kicker"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"/><path d="M12 17h.01"/></svg>Частые вопросы</p>
<h2 class="hero-title">Ответы на вопросы о <span>Gizmo</span></h2>
<p class="hero-desc">В этом разделе мы собрали ответы на вопросы, которые обычно возникают у владельцев и управляющих при выборе и внедрении системы.</p>
<div class="hero-meta"><span class="hero-chip">26 вопросов</span><span class="hero-chip">Общие вопросы</span><span class="hero-chip">Настройка</span></div>
</div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

## 🌐 **Общие вопросы**

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Что такое Gizmo Server, Gizmo Client, Gizmo Manager и Gizmo Companion?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p><strong>Gizmo</strong> — это <strong>комплексное решение для управления развлекательными заведениями</strong>: компьютерными и игровыми клубами, интернет-кафе, VR-пространствами, лаунж-зонами и другими. Все упомянутые компоненты представляют собой части единой экосистемы, каждая из которых отвечает за свою область работы бизнеса. Центральный компонент — <strong>Gizmo Server</strong>: это ядро всей системы, он обрабатывает операции, хранит данные о клиентах и управляет остальными компонентами.</p>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Список компонентов — в статье <a href="https://docs.gizmopowered.net/docs/ru/about/overview/" target="_top">«Компоненты»</a>, подробнее о продукте — в разделе <a href="https://docs.gizmopowered.net/docs/ru/about/" target="_top">«О продукте»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Что такое база данных и для чего она нужна?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p><strong>База данных</strong> — это цифровой архив, где программное обеспечение <strong>хранит информацию о работе клуба</strong>. Именно в базе данных содержится важная информация: <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/users/users/" target="_top">профили гостей</a>, остаток средств на счёте, <a href="https://docs.gizmopowered.net/docs/ru/tutorials/sales/pricing/tariffs-guide/" target="_top">стоимость игрового времени</a>, <a href="https://docs.gizmopowered.net/docs/ru/tutorials/staff/user-accounts-guide/" target="_top">история покупок</a> и многое другое.</p>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Обратите внимание: при установке <a href="https://docs.gizmopowered.net/docs/ru/instalation/gizmo/" target="_top">Gizmo Server</a> база данных <strong>не устанавливается</strong> на устройство вместе с сервером. Подробнее об установке базы данных — в <a href="https://docs.gizmopowered.net/docs/ru/instalation/gizmo/self-hosted/databases/" target="_top">этом руководстве</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как начать работать с Gizmo?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Всё очень просто — достаточно двух шагов:</p>
<ol><li><a href="https://gizmopowered.ru" target="_blank" rel="noopener">Зарегистрируйтесь на нашем сайте</a>.</li><li>Установите и настройте программу по шагам из статьи <a href="https://docs.gizmopowered.net/docs/ru/instalation/quick-install/" target="_top">«Быстрый старт»</a>.</li></ol>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Могу ли я обновить версию Gizmo V2 на новую самостоятельно?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p><strong>Да</strong>, обновиться можно самостоятельно. Все шаги переноса настроек клуба на <strong>Gizmo V3</strong> мы подробно описали в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/migration-to-v3/" target="_top">«Миграция с V2 на V3»</a>.</p>
<p>⏱️ <strong>Время:</strong> 30–50 минут</p>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Перед началом миграции обязательно сделайте <strong>резервную копию базы данных</strong> и проводите обновление в нерабочее для клуба время.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>💬 Если на каком-то этапе возникнут трудности, <a href="https://docs.gizmopowered.net/docs/ru/about/support/" target="_top">обратитесь в поддержку</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>

## 🛠️ **Вопросы по настройке**

### 🌍 *Подключение и сеть*

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне удалённо подключиться к серверу?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Откуда можно подключиться к Gizmo Server, зависит от того, какое <strong>Имя хоста</strong> указано в <strong>Настройки → Сервер → Сеть</strong>. По умолчанию там стоит «gizmo.local», и сервер доступен только в локальной сети.</p>
<ol><li><strong>Внутри клуба.</strong> На любом ПК в той же локальной сети откройте в браузере <code>http://&lt;локальный IP сервера&gt;/apps/manager/signin</code>, например <code>http://192.168.1.25/apps/manager/signin</code>.</li><li><strong>Из интернета.</strong> В поле <strong>Имя хоста</strong> укажите глобальный IP-адрес сервера или купленное доменное имя.</li><li><strong>Если сервер стоит в клубе, а не на VPS,</strong> глобальный IP — это внешний адрес вашего роутера. На роутере нужно настроить проброс портов до Gizmo Server. По умолчанию это порт 80 для http и порт 443 для https.</li></ol>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Если Gizmo Server запущен через Docker, сервер игнорирует настройки портов. Используются порты, указанные при создании контейнера.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/configure/server/network/" target="_top">«Сеть»</a> и <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/network-access/" target="_top">«Доступ к Gizmo по сети»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как исправить ошибку с сертификатами при подключении к серверу?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Для работы по https Gizmo Server по умолчанию использует встроенный самоподписанный сертификат, и браузер может ему не доверять. Чтобы ошибка ушла, установите собственный доверенный SSL-сертификат в формате PFX:</p>
<ol><li>Откройте <strong>Настройки → Сервер → Сеть</strong>.</li><li>В блоке <strong>Сертификат PFX</strong> нажмите <strong>Обзор</strong> и выберите файл сертификата.</li><li>Перезагрузите Gizmo Server — без этого новый сертификат не применится.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Чтобы вернуться к встроенному самоподписанному сертификату, нажмите <strong>Очистить</strong> в том же блоке.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статье <a href="https://docs.gizmopowered.net/docs/ru/configure/server/network/" target="_top">«Сеть»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Что делать, если компьютер не может подключиться к серверу?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Признаки проблемы: загрузка Gizmo Client не завершается, иконка сервера красная или ПК не появляется в <strong>Станции → Компьютеры</strong>. Прежде чем писать в поддержку, пройдитесь по короткому чек-листу:</p>
<ol><li><strong>Лицензии.</strong> В <strong>Настройки → Организация → Подписка</strong> подписка должна быть активна. Лицензий должно быть не меньше, чем подключённых игровых мест, включая консоли.</li><li><strong>Сеть.</strong> Клиентский ПК должен быть в той же локальной сети, что и сервер. В <strong>Настройки → Сервер → Сеть → Правила подключения</strong> должны быть включены <strong>Автоматическое обнаружение</strong> и <strong>Восстановление имени хоста</strong>. Проверьте также, не блокирует ли соединение антивирус или файрвол.</li><li><strong>Клиент.</strong> Скачайте установщик Gizmo Client из <strong>Настройки → Другое → О программе</strong>, чтобы его версия была совместима с сервером. Затем перезапустите клиент и ПК и проверьте, что не запущено несколько копий клиента.</li><li><strong>Привязка.</strong> Если ПК появился в <strong>Станции → Компьютеры</strong>, но не виден на карте, укажите для него <strong>Филиал</strong>, <strong>Группу станций</strong> и <strong>Слой карты</strong>.</li></ol>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Если в правилах подключения включено <strong>Только зарегистрированные</strong>, сервер автоматически отклонит новый компьютер. Добавьте его вручную или временно отключите этот параметр.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/client-connection-troubleshooting/" target="_top">«Проблемы подключения клиентских пк»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Какой протокол использовать для подключения клиентов к серверу?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Это зависит от сетевых настроек вашего Gizmo Server. Для подключения клиентов доступны стандартный <strong>TCP</strong>, а также <strong>ws</strong> и <strong>wss</strong>.</p>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Протоколы и порты, по которым доступен сервер, задаются в <strong>Настройки → Сервер → Сеть</strong>. По умолчанию это http (порт 80) и https (порт 443).</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее о настройке протоколов и портов сервера — в статье <a href="https://docs.gizmopowered.net/docs/ru/configure/server/network/" target="_top">«Сеть»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как включить компьютер по сети?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Выключенный компьютер можно включить прямо из Gizmo Manager — для этого используется технология Wake On LAN.</p>
<ol><li>Включите Wake On LAN на самом клиентском ПК — в BIOS/UEFI и в настройках сетевой карты.</li><li>Убедитесь, что в карточке компьютера (<strong>Станции → Компьютеры</strong>) указан <strong>MAC адрес</strong> — по нему отправляется сигнал на включение.</li><li>В разделе <strong>Карта</strong> выберите одно или несколько игровых мест и в группе <strong>Хосты</strong> нажмите <strong>Включить</strong>. Это же действие есть в контекстном меню по правой кнопке мыши. Для этого у оператора должно быть разрешение <strong>Включение хостов</strong> (категория <strong>«Управление»</strong>).</li></ol>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Если Wake On LAN на клиентском ПК не настроен, команда <strong>Включить</strong> не сработает. В Windows 10 включение по сети из обычного выключения не поддерживается, пока включён быстрый запуск — подробнее в <a href="https://learn.microsoft.com/ru-ru/troubleshoot/windows-client/setup-upgrade-and-drivers/wake-on-lan-feature" target="_blank" rel="noopener">статье Microsoft</a>.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/map/" target="_top">«Карта»</a> и <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/computers/computer-card/" target="_top">«Карточка редактирования компьютера»</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>

### 🖥️ *Сервер и обновления*

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Сохранятся ли мои настройки после обновления сервера на новую версию? Нужно ли что-то менять после обновления?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Настройки и данные клуба хранятся в базе данных, поэтому при обновлении в пределах V3 они, как правило, сохраняются. При переходе с V2 часть настроек придётся указать заново — об этом в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/migration-to-v3/" target="_top">«Миграция с V2 на V3»</a>. Учтите, что Gizmo V3 сейчас находится в стадии бета-тестирования и активно развивается: от версии к версии отдельные настройки могут переехать в другой раздел, измениться или появиться впервые. Поэтому после каждого обновления:</p>
<ol><li>Откройте раздел <a href="https://docs.gizmopowered.net/docs/ru/change-log/" target="_top">«История обновлений»</a> и прочитайте, что изменилось в новой версии: какие ошибки исправлены, какие функции добавлены и что перенесено в интерфейсе.</li><li>Проверьте настройки, которых касаются изменения.</li><li>Убедитесь, что клиентские ПК тоже обновились. Если в <strong>Настройки → Клиент → Оболочка → Системные</strong> включено <strong>Автоматическое обновление оболочки</strong>, Gizmo Client обновится сам, когда новой версии сервера потребуется обновление клиента.</li></ol>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Перед обновлением сделайте <strong>резервную копию базы данных</strong> и обновляйтесь в нерабочее для клуба время. Как настроить автоматическое резервное копирование — в статье <a href="https://docs.gizmopowered.net/docs/ru/configure/server/backup/" target="_top">«Резервная копия»</a>.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>💬 Если после обновления что-то работает не так, как раньше, <a href="https://docs.gizmopowered.net/docs/ru/about/support/" target="_top">обратитесь в поддержку</a> — мы на связи круглосуточно.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как безопасно перезапустить сервер, если клиенты играют?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Пока сервер перезапускается, клиентские ПК теряют с ним связь. Что при этом произойдёт с сеансами клиентов, зависит от настроек оболочки в <strong>Настройки → Клиент → Оболочка → Сеанс пользователя</strong>:</p>
<ol><li>Проверьте опции <strong>Выход из системы отключенных клиентов</strong> и <strong>Завершение ожидающих сеансов</strong>. Если включена хотя бы одна из них, сеанс клиента завершится, когда связь с сервером пропадёт дольше, чем задано в <strong>Время ожидания</strong> (по умолчанию — 180 секунд): в Gizmo Client — при включённой опции <strong>Выход из системы отключенных клиентов</strong>, на сервере и в Gizmo Manager — при включённой опции <strong>Завершение ожидающих сеансов</strong>.</li><li>Если эти опции включены, перезапустите сервер так, чтобы он снова заработал до того, как истечёт время ожидания. Если выключены, сеансы клиентов не завершатся автоматически из-за потери связи.</li><li>Перезапустите сервер. Если он работает как служба, остановите и снова запустите её в конфигураторе ConfigurationTool, в разделе <strong>«Управление Сервисом Gizmo»</strong>. Если как консольное приложение, закройте его и запустите снова.</li></ol>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Изменения опций <strong>Время ожидания</strong>, <strong>Выход из системы отключенных клиентов</strong> и <strong>Завершение ожидающих сеансов</strong> применяются только после перезагрузки Gizmo Client. Поменять их «на лету» прямо перед перезапуском не получится — лучше настроить их заранее.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/configure/client/shell/" target="_top">«Оболочка»</a> и <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-server/run-modes/" target="_top">«Режимы работы сервера»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Почему на карте отображается только часть моих компьютеров?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Чаще всего дело в подписке или в настройках самих станций. Проверьте по порядку:</p>
<ol><li><strong>Лицензии.</strong> Откройте <strong>Настройки → Организация → Подписка</strong> и убедитесь, что подписка действительна, а в поле <strong>Всего лицензий</strong> указано не меньше игровых мест, чем вы подключили. Учтите, что в это число входят не только компьютеры, но и консоли и другие игровые места, заведённые как <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/terminals/" target="_top">терминалы</a>.</li><li><strong>Привязка станции.</strong> В <strong>Станции → Компьютеры</strong> проверьте, что у каждого ПК указаны <strong>Филиал</strong>, <strong>Группа станций</strong> и <strong>Слои карты</strong> — без этого ПК не появится на карте.</li><li><strong>Слой карты.</strong> Если в клубе несколько слоёв (например, этажи или зоны), переключитесь на нужный слой — на карте видны только места выбранного слоя.</li><li><strong>Доступ оператора.</strong> Карта показывает игровые места, доступные текущему оператору. Проверьте, что в карточке оператора выбраны все нужные <strong>Филиалы</strong>.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Если подписка отображается некорректно, введите логин и пароль от аккаунта на сайте Gizmo повторно, сохраните изменения и обновите данные в блоке <strong>«Сведения о подписке»</strong>.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/configure/organization/subscription/" target="_top">«Подписка»</a>, <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/computers/" target="_top">«Компьютеры»</a> и <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/client-connection-troubleshooting/" target="_top">«Проблемы подключения клиентских пк»</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>

### 👥 *Операторы и отчёты*

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Не получается закрыть смену или провести операцию — недостаточно прав. Что делать?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Скорее всего, в наборе прав оператора не хватает нужного разрешения или в его карточке неверно настроена работа со сменой. Исправить это может сотрудник, у которого есть разрешения категории <strong>«Настройки»</strong>:</p>
<ol><li>Откройте <strong>Настройки → Операторы и настройки прав доступа → Права доступа</strong> и выберите набор прав, назначенный этому оператору.</li><li>Включите недостающие разрешения. Для работы с кассой проверьте категорию <strong>«Терминал»</strong> (просмотр транзакций, внесение и изъятие средств) и разрешение <strong>«Просмотр ожидаемого»</strong> в категории <strong>«Смена»</strong>, для продаж — категорию <strong>«Продажи»</strong>. Найти нужный пункт поможет поле «Поиск».</li><li>Откройте <strong>Настройки → Операторы и настройки прав доступа → Операторы</strong> и выберите оператора. В блоке <strong>Разрешение</strong> проверьте поля <strong>Предустановка прав доступа</strong> и <strong>Филиалы</strong>. В блоке <strong>Смена</strong> проверьте режим: при <strong>Отключено</strong> смена для оператора не используется. Если ему нужно открывать и закрывать смену, выберите <strong>Необязательно</strong> или <strong>Обязательно</strong>.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Некоторые разрешения зависят от других: пока не включено «родительское» разрешение, «дочерние» отображаются серым и недоступны для выбора.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/configure/operators-and-permissions/permissions/permission-card/" target="_top">«Карточка прав доступа»</a>, <a href="https://docs.gizmopowered.net/docs/ru/configure/operators-and-permissions/operators/operators-card/" target="_top">«Карточка оператора»</a> и <a href="https://docs.gizmopowered.net/docs/ru/tutorials/staff/permission-presets/" target="_top">«Как выбрать готовый набор прав доступа»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Почему в журнале смен и в других отчётах не отображается информация?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Чаще всего отчёт пустой потому, что фильтры не применены или выбран период, за который нет данных. Проверьте:</p>
<ol><li><strong>Фильтры применены.</strong> В отчётах с фильтрами (например, в «Финансовом отчёте») после выбора параметров нажмите <strong>Применить фильтры</strong>.</li><li><strong>Период указан верно.</strong> Проверьте даты и время. Если в периоде <strong>Пользовательское</strong> указан отрезок, где не было смен и продаж, отчёт будет пустым.</li><li><strong>Фильтры не слишком узкие.</strong> Если выбран конкретный <strong>Оператор</strong> или <strong>Место кассира</strong>, в отчёт попадут только их операции.</li><li><strong>Часовой пояс и расписание.</strong> В <strong>Настройки → Организация → Общие</strong> должен быть указан ваш актуальный часовой пояс — по нему определяются дата и время всех записей, в том числе транзакций. Там же проверьте <strong>Рабочее расписание по умолчанию</strong> — оно используется при построении отчётов.</li></ol>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/otchety/" target="_top">«Отчеты»</a> и <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/otchety/finansovyy/" target="_top">«Финансовый отчёт»</a>, а с чего начать работу с отчётами — в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/operations/reports-guide/" target="_top">«Отчёты»</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>

### 💳 *Продажи, скидки и лояльность*

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как добавить сканер в Gizmo V3?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>В Gizmo V3 сканер штрихкодов работает через <strong>Gizmo Companion</strong> — приложение, которое связывает сервер Gizmo с кассовым оборудованием. Companion устанавливается на ПК, с которого идут продажи, и привязывается к кассе.</p>
<ol><li>В Gizmo Manager откройте <strong>Настройки → Сервер → Компаньоны</strong>, нажмите <strong>«Создать Companion»</strong> и задайте понятное имя (например, по расположению точки продаж). Откройте созданный компаньон и скопируйте его токен.</li><li>В разделе <strong>Настройки → Другое → О программе</strong> скачайте Gizmo Companion и установите его на ПК администратора, к которому подключён сканер.</li><li>Откройте Companion на этом ПК (ярлык на рабочем столе или адрес <code>localhost:8000</code> в браузере). Укажите <strong>Протокол</strong>, <strong>Имя хоста</strong> (IP сервера) и <strong>Порт</strong>, вставьте токен и сохраните. В менеджере статус компаньона должен смениться на <strong>«Подключено»</strong>.</li><li>В Companion на панели слева откройте <strong>POS устройства</strong> и укажите COM-порт сканера штрихкода.</li><li>Перейдите в <strong>Настройки → Финансовый → Кассы</strong>, откройте кассу этого ПК и укажите <strong>Филиал</strong>, <strong>Компаньон</strong> (только что созданный), <strong>Номер</strong> и <strong>Имя</strong>. Сохраните изменения.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Чтобы товар находился по сканеру, заполните поле <strong>Штрихкод</strong> в его карточке. Для товаров с маркировкой «Честный знак» сканер обязателен.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/instalation/quick-install/" target="_top">«Быстрый старт»</a> (раздел «Касса»), <a href="https://docs.gizmopowered.net/docs/ru/configure/server/companions/" target="_top">«Компаньоны»</a> и <a href="https://docs.gizmopowered.net/docs/ru/configure/finance/registers/register-card/" target="_top">«Карточка кассы»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне добавить товары?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Сначала товар создаётся в разделе <strong>Магазин</strong>. Затем его количество заносится на склад через складскую операцию.</p>
<ol><li>Откройте <strong>Магазин → Товары</strong> и нажмите <strong>«Создать товар»</strong>. Укажите имя, товарную группу и цену, при желании прикрепите изображение.</li><li>В блоке <strong>Доступность</strong> включите нужный <strong>Филиал</strong> и отметьте группы пользователей, которым доступен товар.</li><li>В блоке <strong>Склад</strong> включите <strong>Складской учёт</strong>, если товар должен списываться со склада, и сохраните карточку.</li><li>Чтобы внести количество, откройте <strong>Магазин → Складские операции</strong>, нажмите <strong>«Складская операция»</strong> и выберите тип <strong>Входящий</strong>, способ поступления — <strong>«Вручную»</strong>.</li><li>Выберите филиал и склад, добавьте товары, укажите их количество и себестоимость (можно 0) и нажмите <strong>«Продолжить»</strong>.</li></ol>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Если в карточке товара не включён филиал, товар нельзя будет продать. Если не включён <strong>Складской учёт</strong>, товар не появится на складе.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/tutorials/sales/shop/running-the-shop/" target="_top">«Товары и наборы»</a> и <a href="https://docs.gizmopowered.net/docs/ru/tutorials/sales/shop/warehouse/" target="_top">«Склад»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне предоставить бесплатное время пользователю?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Бесплатное время можно выдать <strong>скидкой 100%</strong> на тарифы и (или) пакеты времени. Скидка собирается в скидочную группу, которая назначается группе пользователей, а нужного пользователя вы переводите в эту группу.</p>
<ol><li>Откройте <strong>Маркетинг → Скидки</strong> и нажмите <strong>«Создать скидку»</strong>. Включите скидку, укажите имя и включите доступность для своего филиала.</li><li>В блоке <strong>Целевые группы</strong> нажмите <strong>«Создать группу назначения»</strong> и выберите <strong>«Тарифы»</strong> (и/или <strong>«Пакеты»</strong>). Добавьте нужные позиции кнопкой <strong>+</strong> или отметьте <strong>«Включить все»</strong>. В <strong>Активации группы</strong> и <strong>Условии активации</strong> укажите <strong>«Любой»</strong>.</li><li>В блоке <strong>Вознаграждение</strong> выберите тип <strong>«Скидка»</strong>, в поле <strong>Применить к</strong> — <strong>«Строка заказа»</strong>, тип расчёта — <strong>«Процент»</strong> со значением 100. Сохраните скидку.</li><li>В <strong>Маркетинг → Скидочные группы</strong> создайте группу скидок и добавьте в неё эту скидку.</li><li>В <strong>Пользователи → Группы пользователей</strong> создайте группу (например, «Бесплатное время») и в блоке <strong>Группа скидок</strong> укажите созданную скидочную группу.</li><li>Откройте карточку пользователя и выберите эту группу в поле <strong>Группа</strong>.</li></ol>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Скидка действует на всех участников группы. Когда бесплатное время больше не нужно, верните пользователя в его обычную группу.</p></div>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>В новой группе пользователей проверьте блоки <strong>Выставление счетов</strong> и <strong>Доступ</strong>. Если в них не включены источники оплаты времени и группы станций, гость не сможет играть.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Другой способ — отдельный пакет времени или тариф с ценой 0, доступный только этой группе. Он описан в статье <a href="https://docs.gizmopowered.net/docs/ru/tutorials/staff/staff-perks/" target="_top">«Льготы для персонала»</a>. Все поля скидки — в статье <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/marketing/discounts/discount-card/" target="_top">«Карточка скидки»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне установить фиксированные цены на товары для разных пользователей или групп пользователей?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Особые цены для групп в V3 задаются в разделе <strong>Маркетинг</strong>, через скидки. Для каждого товара создаётся своя скидка с фиксированной суммой, равной разнице между обычной ценой и нужной.</p>
<ol><li>Откройте <strong>Маркетинг → Скидки</strong> и нажмите <strong>«Создать скидку»</strong>. Включите скидку, задайте имя (например, «Энергетик — VIP») и включите доступность для своего филиала.</li><li>В блоке <strong>Целевые группы</strong> создайте группу назначения <strong>«Товары»</strong> и добавьте кнопкой <strong>+</strong> нужный товар. В <strong>Активации группы</strong> и <strong>Условии активации</strong> укажите <strong>«Любой»</strong>.</li><li>В блоке <strong>Вознаграждение</strong> выберите <strong>«Скидка»</strong>, в поле <strong>Применить к</strong> — <strong>«Строка заказа»</strong>, тип расчёта — <strong>«Фиксированный»</strong>. Укажите сумму скидки: например, если товар стоит 150, а для группы должен стоить 120, укажите 30.</li><li>Повторите шаги 1–3 для каждого товара с особой ценой.</li><li>В <strong>Маркетинг → Скидочные группы</strong> создайте группу скидок и добавьте в неё все эти скидки.</li><li>В <strong>Пользователи → Группы пользователей</strong> откройте нужную группу и в блоке <strong>Группа скидок</strong> укажите созданную скидочную группу.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Одна скидка может входить в несколько скидочных групп, поэтому одни и те же цены можно дать нескольким группам пользователей. Чтобы дать особые цены одному человеку, создайте для него отдельную группу пользователей.</p></div>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Фиксированная сумма начисляется за заказ, а не за единицу товара, поэтому при покупке нескольких штук итоговая цена может отличаться от ожидаемой. Перед запуском проверьте расчёт на тестовой продаже.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/marketing/discounts/discount-card/" target="_top">«Карточка скидки»</a> и <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/marketing/discount-groups/discount-group-card/" target="_top">«Карточка группы скидок»</a>. Пример пошаговой настройки процентной скидки на пакеты и тарифы — в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/migration-to-v3/" target="_top">«Миграция с V2 на V3»</a> (раздел 2.6).</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Почему сессия клиента завершается с долгом?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>У клиента есть два разных значения: <strong>Депозиты</strong> — сумма на депозите, и <strong>Баланс</strong> — состояние денежного счёта клиента. Отрицательный баланс означает задолженность. Проверьте настройки:</p>
<ol><li><strong>Кредит в группе пользователей.</strong> В <strong>Пользователи → Группы пользователей</strong> откройте группу клиента и посмотрите блок <strong>Кредит</strong>. Если в <strong>Разрешить кредит на продажу</strong> или <strong>Разрешить использовать кредит</strong> выбрано <strong>Неограниченно</strong> или <strong>Ограниченный</strong>, клиент может уходить в минус.</li><li><strong>Оплата с депозита.</strong> В настройках счетов (<strong>Настройки → Финансовый → Счета</strong>) есть параметр <strong>Удержание депозитов за неоплаченное время сеанса</strong>. При его включении сумма за неоплаченное время автоматически списывается с депозита при закрытии баланса. Там же для каждой группы пользователей можно включить <strong>Авто оплата с депозитов</strong> для автоматически выставленных счетов.</li><li><strong>Источники оплаты времени.</strong> В блоке <strong>Выставление счетов</strong> группы пользователей проверьте, включены ли <strong>Пакет времени</strong> и <strong>Депозиты</strong>. Если <strong>Депозиты</strong> выключены, время не будет оплачиваться с депозита.</li></ol>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/users/user-groups/user-group-card/" target="_top">«Карточка группы пользователей»</a> и <a href="https://docs.gizmopowered.net/docs/ru/configure/finance/invoices/" target="_top">«Счета»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как устроена система лояльности в баллах?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Баллы — это внутренняя валюта клуба: гость получает их за покупки или игровое время, копит и тратит на следующие покупки.</p>
<ol><li><strong>Начисление за товары и пакеты времени</strong> настраивается в карточке позиции, в блоке <strong>Награда</strong>.</li><li><strong>Начисление за почасовую оплату</strong> настраивается для групп пользователей: <strong>Пользователи → Группы пользователей</strong>, раздел <strong>Лояльность</strong> в карточке группы. Баллы можно начислять за потраченные деньги или за отыгранное время.</li><li><strong>Списание баллов</strong> настраивается в блоке <strong>Ценообразование</strong> карточки товара или пакета: можно указать стоимость в баллах и выбрать, платит гость деньгами «И» баллами или деньгами «ИЛИ» баллами.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Баллы за почасовую оплату начисляются не сразу после трат, а когда гость выходит из сеанса и его счета закрываются.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/loyalty/loyalty-program/" target="_top">«Бонусные баллы для клиентов»</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>

### 🎮 *Клиентская оболочка*

<html>

<style>
html, body { margin: 0; padding: 0; background: transparent; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
* { box-sizing: border-box; }
.faq { display: flex; flex-direction: column; gap: 12px; padding: 4px 2px 10px; }
.faq-item { position: relative; border-radius: 16px; overflow: hidden; isolation: isolate; background: linear-gradient(135deg, #04060d 0%, #0b1230 52%, #1a2d6e 100%) padding-box; border: 1px solid #1d274d; transform: translateY(10px); animation: faq-in 0.55s cubic-bezier(0.2, 0.7, 0.2, 1) forwards; animation-delay: calc(var(--i, 0) * 70ms); transition: border-color 0.3s; }
.faq-item::before { content: ''; position: absolute; inset: -40px -60px auto -80px; height: 180px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.30) 0%, rgba(82, 110, 211, 0) 72%); opacity: 0.55; pointer-events: none; transition: opacity 0.4s; }
.faq-item::after { content: ''; position: absolute; top: 0; left: -60%; width: 40%; height: 100%; background: linear-gradient(100deg, rgba(255, 255, 255, 0) 0%, rgba(169, 189, 245, 0.08) 50%, rgba(255, 255, 255, 0) 100%); transform: skewX(-18deg); pointer-events: none; }
.faq-item:hover { border-color: #3a487d; }
.faq-item:hover::before, .faq-item.open::before { opacity: 1; }
.faq-item:hover::after { animation: faq-shine 1.1s ease forwards; }
.faq-item.open { border-color: #495995; }
.faq-q { all: unset; box-sizing: border-box; position: relative; z-index: 1; display: flex; align-items: center; gap: 14px; width: 100%; padding: 18px 22px; cursor: pointer; color: #ffffff; font-size: 15.5px; font-weight: 600; line-height: 1.4; letter-spacing: -0.005em; }
.faq-q:focus-visible { outline: 2px solid #7c93e8; outline-offset: -3px; border-radius: 16px; }
.faq-ico { flex: none; display: grid; place-items: center; width: 32px; height: 32px; border-radius: 10px; background: linear-gradient(135deg, #2a3566, #141c42); border: 1px solid #2d3967; color: #c3d0ff; font-size: 15px; font-weight: 700; transition: transform 0.35s, background 0.35s; }
.faq-item:hover .faq-ico { transform: scale(1.06); }
.faq-item.open .faq-ico { background: linear-gradient(135deg, #5b7cf0, #2f4bb8); border-color: transparent; color: #ffffff; }
.faq-chev { flex: none; margin-left: auto; width: 22px; height: 22px; color: #7c93e8; transition: transform 0.4s cubic-bezier(0.2, 0.7, 0.2, 1), color 0.3s; }
.faq-item.open .faq-chev { transform: rotate(180deg); color: #c3d0ff; }
.faq-a { position: relative; z-index: 1; display: grid; grid-template-rows: 0fr; transition: grid-template-rows 0.45s cubic-bezier(0.2, 0.7, 0.2, 1); }
.faq-item.open .faq-a { grid-template-rows: 1fr; }
.faq-a-in { overflow: hidden; }
.faq-body { padding: 0 24px 20px 68px; color: #c8cde0; font-size: 14px; line-height: 1.65; transform: translateY(-6px); transition: transform 0.35s 0.05s; }
.faq-item.open .faq-body { transform: none; }
.faq-body p { margin: 0 0 12px 0; }
.faq-body ol { margin: 0 0 12px 0; padding-left: 22px; }
.faq-body li { margin: 0 0 7px 0; padding-left: 4px; }
.faq-body li::marker { color: #7c93e8; font-weight: 700; }
.faq-body strong { color: #ffffff; font-weight: 600; }
.faq-body a { color: #8fb0ff; text-decoration: none; border-bottom: 1px solid #3a4978; transition: color 0.2s, border-color 0.2s; }
.faq-body a:hover { color: #d3defe; border-bottom-color: #d3defe; }
.faq-body code { font-family: Consolas, 'Courier New', monospace; font-size: 12.5px; padding: 2px 6px; border-radius: 6px; background: #1b244a; color: #c9d6ff; word-break: break-word; }
.faq-body > :last-child { margin-bottom: 0; }
.cl { margin: 14px 0; padding: 12px 14px; border-radius: 12px; border: 1px solid var(--c-b); border-left: 3px solid var(--c); background: var(--c-bg); }
.cl-t { margin: 0 0 5px 0; color: var(--c); font-size: 11px; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
.cl p { margin: 0 0 6px 0; }
.cl p:last-child { margin: 0; }
.cl-tip { --c: #60a5fa; --c-b: #1e325c; --c-bg: #121e40; }
.cl-note { --c: #a5b4d4; --c-b: #2a3251; --c-bg: #161d3c; }
.cl-important { --c: #a78bfa; --c-b: #302f61; --c-bg: #191d42; }
.cl-warning { --c: #fbbf24; --c-b: #453c2d; --c-bg: #1e202f; }
.cl-caution { --c: #f87171; --c-b: #442940; --c-bg: #1e1a35; }
@keyframes faq-in { to { transform: none; } }
@keyframes faq-shine { to { left: 130%; } }
@media (max-width: 560px) { .faq-q { padding: 16px; gap: 12px; font-size: 15px; } .faq-body { padding: 0 16px 18px 16px; } }
@media (prefers-reduced-motion: reduce) { .faq-item, .faq-item *, .faq-item::before, .faq-item::after { animation: none !important; transition: none !important; } .faq-item { transform: none; } }
</style>

<div class="faq">
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне убрать меню «Пуск» и панель задач на клиентском компьютере?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Для этого используется <strong>профиль безопасности</strong>. В разделе <strong>Политики</strong> профиля уже собраны готовые политики, которые блокируют функции Windows, — их достаточно отметить флажком. Меню «Пуск» скрывается отдельной опцией, а панель задач можно заблокировать от изменений и скрыть на ней область уведомлений. Опции полного скрытия панели задач в профиле безопасности нет.</p>
<ol><li>Откройте <strong>Станции → Профили безопасности</strong> и создайте профиль или откройте существующий.</li><li>Включите <strong>Скрыть меню «Пуск»</strong> и <strong>Запретить сворачивать оболочку</strong>. В Windows 10 меню «Пуск» будет скрыто, в Windows 11 оно останется на месте, но будет пустым и перестанет работать.</li><li>В разделе <strong>Политики</strong> отметьте ограничения для панели задач, например <strong>Explorer Taskbar Lock All</strong> (полностью блокирует панель задач от изменений), <strong>Explorer Taskbar No Notification</strong> (скрывает область уведомлений) и <strong>Explorer No Win Keys</strong> (отключает клавишу Win и её сочетания). Можно включить и все политики одной кнопкой — это максимальный уровень блокировки.</li><li>Привяжите профиль к группе станций: <strong>Станции → Группы станций</strong> → поле <strong>Профиль безопасности</strong>. Без этого профиль не применится.</li></ol>
<div class="cl cl-note"><div class="cl-t">Примечание</div><p>Ограничения можно снять в любой момент: отключите безопасность на ПК или переведите его в режим администратора.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статье <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/security-profiles/" target="_top">«Профили безопасности»</a>. Полный список политик — в статье <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/profili-bezopasnosti/kartochka-redaktirovaniya-profilya-bezopasnosti/" target="_top">«Карточка профиля безопасности»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне сохранить файлы сессии клиента, сохранения игр и другие данные?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Для этого есть <strong>личные файлы пользователей (ЛФП)</strong>. Gizmo сохраняет указанную папку с клиентского ПК на сервере и возвращает её, когда гость запускает игру или входит в систему на любом ПК клуба. Так сохранения не пропадают, даже если ПК перезагружается после каждого сеанса.</p>
<ol><li>Откройте <strong>Станции → Приложения</strong>, затем карточку нужной игры и её исполняемый файл.</li><li>Перейдите на вкладку <strong>Личные файлы</strong> и нажмите <strong>+ Создать новый личный файл</strong>.</li><li>В поле <strong>Источник</strong> укажите путь к папке с сохранениями на клиентском ПК. Если нужно сохранить запись реестра, включите параметр <strong>Реестр</strong> и укажите путь к ней в поле <strong>Источник</strong>.</li><li>Выберите <strong>Активацию</strong>: <strong>На старте</strong> — файлы возвращаются на ПК при запуске игры; <strong>При входе в систему</strong> — при входе гостя в аккаунт (при большом количестве ЛФП вход может заметно замедлиться).</li><li>При необходимости задайте <strong>Квоту</strong> — сколько МБ может занимать сохранение одного клиента (0 — без ограничения).</li></ol>
<p>Копирование с клиентского ПК на сервер всегда происходит, когда гость выходит из системы. Папку на сервере, где хранятся личные файлы, можно указать в <strong>Настройки → Клиент → Файловая система</strong> → <strong>Путь к пользовательскому хранилищу</strong>.</p>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Если сжатый размер сохранения больше квоты, оно не будет записано на сервер.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/lichnye-fayly-polzovateley/" target="_top">«Карточка ЛФП»</a> и <a href="https://docs.gizmopowered.net/docs/ru/configure/client/file-system/" target="_top">«Файловая система»</a>. Как убирать чужие сессии лаунчеров между гостями, читайте в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/session-cleanup/" target="_top">«Очистка сессий игр и лаунчеров»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как настроить автоматическое обновление игр?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Для этого используются <strong>профили развёртывания</strong>. Вы обновляете игру один раз в папке на сервере, а Gizmo сам сверяет её с папкой на клиентском ПК и копирует только изменившиеся файлы. При необходимости он удаляет на клиенте файлы, которых больше нет в источнике.</p>
<ol><li>Откройте <strong>Станции → Приложения</strong>, затем карточку игры и её исполняемый файл.</li><li>Перейдите на вкладку <strong>Развёртывания</strong> и нажмите <strong>+ Создать новую установку</strong>.</li><li>В поле <strong>Источник</strong> укажите папку с актуальной версией игры на ПК с Gizmo Server, а в поле <strong>Пункт назначения</strong> — папку игры на клиентском ПК.</li><li>Выберите <strong>Режим сравнения</strong>. Чем тщательнее сравнение, тем меньше вероятность ошибки, но тем медленнее обновление. Самый быстрый вариант — <strong>Быстрый</strong>, самый надёжный — <strong>Тщательный</strong> (дополнительно сверяет хеш-сумму файлов).</li></ol>
<p>Развёртывание выполняется перед запуском игры. Если включён параметр <strong>Auto Launch</strong>, игра запустится сразу после него, без повторного нажатия.</p>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Чтобы обновление не заполнило диск клиентского ПК, задайте минимальный процент свободного места: <strong>Настройки → Клиент → Файловая система</strong> → <strong>Развёртывание</strong>, параметр <strong>Всегда оставлять % свободного места на диске при использовании профилей развёртывания</strong>. Если после развёртывания места останется меньше, операция будет прервана.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статье <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/razvertyvaniya/" target="_top">«Карточка развёртывания»</a>. Как добавить игру и создать исполняемый файл, читайте в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/client-shell/add-app-to-shell/" target="_top">«Как добавить игру в клиентскую оболочку»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как поменять пароль менеджера для клиентской оболочки?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Откройте <strong>Настройки → Клиент → Оболочка</strong> и в блоке <strong>Общее</strong> укажите новое значение в поле <strong>Пароль менеджера</strong>. С этим паролем в скрытом окне Gizmo Client открывается режим обслуживания. В нём можно свернуть оболочку, деактивировать или удалить Gizmo Client.</p>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>По умолчанию пароль менеджера — <code>password</code>. Обязательно смените его и храните в надёжном месте: с этим паролем можно свернуть оболочку, деактивировать или удалить Gizmo Client.</p></div>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Изменения вступят в силу только после перезагрузки Gizmo Client.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статье <a href="https://docs.gizmopowered.net/docs/ru/configure/client/shell/" target="_top">«Оболочка»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как мне настроить скин для оболочки?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Внешний вид оболочки задаётся <strong>профилями темы оформления</strong>. Для разных групп станций можно сделать разные профили, например отдельный для VIP-зоны.</p>
<ol><li>Откройте <strong>Настройки → Клиент → Темы оформления</strong>. Создайте профиль кнопкой <strong>Создать профиль оформления</strong> или откройте существующий через <strong>«...» → Редактировать</strong>.</li><li>Настройте нужные разделы: фон и логотип (<strong>Медиа</strong>), экран входа, главную страницу, магазин, страницу приложений. Для тонкой настройки внешнего вида есть поле <strong>Пользовательский CSS</strong> в разделе <strong>Другое</strong>.</li><li>Назначьте профиль станциям: <strong>Станции → Группы станций</strong> → поля <strong>Тема оформления</strong> и <strong>Профиль темы оформления</strong>. Чтобы сделать профиль профилем по умолчанию, нажмите <strong>«...» → Установить значение по умолчанию</strong>.</li></ol>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статьях <a href="https://docs.gizmopowered.net/docs/ru/configure/client/skins/" target="_top">«Темы оформления»</a> и <a href="https://docs.gizmopowered.net/docs/ru/configure/client/skins/skin-profile/" target="_top">«Карточка профиля темы оформления»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Почему я не могу указать пароль для учётной записи клиента?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Скорее всего, пароль не подходит под <strong>политику паролей</strong> клуба. Она задаёт минимальную и максимальную длину пароля и обязательные группы символов: строчные буквы, прописные буквы, цифры. Политика действует, когда клиент создаёт или меняет пароль в Gizmo Client. Если, например, требуются прописные буквы, а пароль набран только строчными, сохранить его не получится.</p>
<ol><li>Откройте <strong>Настройки → Клиент → Оболочка</strong> → блок <strong>Политика паролей</strong>.</li><li>Посмотрите, какие требования включены, и придумайте пароль, который им соответствует. Особенно проверьте регистр букв и наличие цифр.</li><li>При необходимости смягчите требования. Учтите, что более простые пароли легче подобрать.</li></ol>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Изменения в разделе <strong>Оболочка</strong> вступают в силу только после перезагрузки Gizmo Client.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Подробнее — в статье <a href="https://docs.gizmopowered.net/docs/ru/configure/client/shell/" target="_top">«Оболочка»</a>. Как создавать аккаунты клиентов, читайте в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/staff/user-accounts-guide/" target="_top">«Аккаунты клиентов»</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  function isClear(c) {
    return !c || c === 'transparent' || /rgba\(.*,\s*0\)$/.test(c);
  }
  function applyBg() {
    var bg = 'transparent';
    try {
      var el = window.frameElement;
      if (el) {
        var cs = window.parent.getComputedStyle(el);
        if (cs.colorScheme) document.documentElement.style.colorScheme = cs.colorScheme;
      }
      while (el) {
        var c = window.parent.getComputedStyle(el).backgroundColor;
        if (!isClear(c)) { bg = c; break; }
        el = el.parentElement;
      }
    } catch (e) {}
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }
  applyBg();
  try {
    var pdoc = window.parent.document;
    var mo = new MutationObserver(applyBg);
    mo.observe(pdoc.documentElement, { attributes: true });
    if (pdoc.body) mo.observe(pdoc.body, { attributes: true });
  } catch (e) {}
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
(function () {
  var root = document.querySelector('.faq');
  function fit() {
    try {
      var frame = window.frameElement;
      if (frame) frame.style.height = Math.ceil(root.getBoundingClientRect().height) + 'px';
    } catch (e) {}
  }
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
  if ('ResizeObserver' in window) new ResizeObserver(fit).observe(root);
  window.addEventListener('load', fit);
  fit();
})();
</script>

</html>
