---
title: Ответы на частые вопросы
order: 6.3
---

<html>

<style>
html { --page-bg: #121212; }
@media (prefers-color-scheme: light) { html { --page-bg: #ffffff; } }
html[data-theme="dark"] { --page-bg: #121212; }
html[data-theme="light"] { --page-bg: #ffffff; }
html, body { margin: 0; padding: 0; background: var(--page-bg); font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
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

</html>

## 🌐 **Общие вопросы**

<html>

<style>
html { --page-bg: #121212; }
@media (prefers-color-scheme: light) { html { --page-bg: #ffffff; } }
html[data-theme="dark"] { --page-bg: #121212; }
html[data-theme="light"] { --page-bg: #ffffff; }
html, body { margin: 0; padding: 0; background: var(--page-bg); font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
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
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>📖 Список компонентов — в статье <a href="https://docs.gizmopowered.net/docs/ru/about/overview/" target="_blank" rel="noopener">«Компоненты»</a>, подробнее о продукте — в разделе <a href="https://docs.gizmopowered.net/docs/ru/about/" target="_blank" rel="noopener">«О продукте»</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Что такое база данных и для чего она нужна?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p><strong>База данных</strong> — это цифровой архив, где программное обеспечение <strong>хранит информацию о работе клуба</strong>. Именно в базе данных содержится важная информация: <a href="https://docs.gizmopowered.net/docs/ru/usage/gizmo-manager/users/users/" target="_blank" rel="noopener">профили гостей</a>, остаток средств на счёте, <a href="https://docs.gizmopowered.net/docs/ru/tutorials/sales/pricing/tariffs-guide/" target="_blank" rel="noopener">стоимость игрового времени</a>, <a href="https://docs.gizmopowered.net/docs/ru/tutorials/staff/user-accounts-guide/" target="_blank" rel="noopener">история покупок</a> и многое другое.</p>
<div class="cl cl-important"><div class="cl-t">Важно</div><p>Обратите внимание: при установке <a href="https://docs.gizmopowered.net/docs/ru/instalation/gizmo/" target="_blank" rel="noopener">Gizmo Server</a> база данных <strong>не устанавливается</strong> на устройство вместе с сервером. Подробнее об установке базы данных — в <a href="https://docs.gizmopowered.net/docs/ru/instalation/gizmo/self-hosted/databases/" target="_blank" rel="noopener">этом руководстве</a>.</p></div>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Как начать работать с Gizmo?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p>Всё очень просто — достаточно двух шагов:</p>
<ol><li><a href="https://gizmopowered.ru" target="_blank" rel="noopener">Зарегистрируйтесь на нашем сайте</a>.</li><li>Установите и настройте программу по шагам из статьи <a href="https://docs.gizmopowered.net/docs/ru/instalation/quick-install/" target="_blank" rel="noopener">«Быстрый старт»</a>.</li></ol>
</div></div></div></div>
<div class="faq-item"><button class="faq-q" type="button" aria-expanded="false"><span class="faq-ico">?</span><span>Могу ли я обновить версию Gizmo V2 на новую самостоятельно?</span><svg class="faq-chev" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></button><div class="faq-a"><div class="faq-a-in"><div class="faq-body">
<p><strong>Да</strong>, обновиться можно самостоятельно. Все шаги переноса настроек клуба на <strong>Gizmo V3</strong> мы подробно описали в руководстве <a href="https://docs.gizmopowered.net/docs/ru/tutorials/migration-to-v3/" target="_blank" rel="noopener">«Миграция с V2 на V3»</a>.</p>
<p>⏱️ <strong>Время:</strong> 30–50 минут</p>
<div class="cl cl-warning"><div class="cl-t">Внимание</div><p>Перед началом миграции обязательно сделайте <strong>резервную копию базы данных</strong> и проводите обновление в нерабочее для клуба время.</p></div>
<div class="cl cl-tip"><div class="cl-t">Совет</div><p>💬 Если на каком-то этапе возникнут трудности, <a href="https://docs.gizmopowered.net/docs/ru/about/support/" target="_blank" rel="noopener">обратитесь в поддержку</a>.</p></div>
</div></div></div></div>
</div>

<script>
(function () {
  Array.prototype.forEach.call(document.querySelectorAll('.faq-item'), function (item, i) {
    item.style.setProperty('--i', i);
    var btn = item.querySelector('.faq-q');
    btn.addEventListener('click', function () {
      var open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
})();
</script>

</html>
