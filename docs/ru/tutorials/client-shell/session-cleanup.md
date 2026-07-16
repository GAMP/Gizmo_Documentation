---
order: 3
title: Очистка сессий игр и лаунчеров
---

<html>

<style>
  html, body { margin: 0; padding: 0; background: #1a1e33; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  @media (prefers-color-scheme: light) { html, body { background: #ffffff; } }
  * { box-sizing: border-box; }
  .gx-card { position: relative; width: 100%; border-radius: 18px; overflow: hidden; background: #232a4a; background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%); border: none; box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset; padding: 26px 32px 28px; font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif; }
  .gx-card .gx-glow { position: absolute; inset: -30px -44px auto -60px; height: 200px; background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%); filter: blur(2px); pointer-events: none; }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker { display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0; color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title { max-width: 560px; margin: 0 0 18px 0; color: #ffffff; font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em; }
  .gx-card .gx-meta { display: flex; align-items: center; color: rgba(255, 255, 255, 0.5); font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase; }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как автоматически подчищать сессии игр и лаунчеров между гостями</h2>
    <div class="gx-meta">
      <span>10 минут</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Низкая сложность</span>
    </div>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff'; var DARK_BG = '#1a1e33';
  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') { theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'; }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg; document.body.style.backgroundColor = bg;
  }
  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>

Знакомая ситуация: гость ушёл, за пк садится следующий -- и обнаруживает чужой Steam-аккаунт всё ещё в сети, с сохранённой библиотекой и, возможно, привязанной картой. В лучшем случае это неловко, в худшем -- повод для реальной претензии к клубу. Гости почти никогда не выходят из игр и лаунчеров сами, и рассчитывать на их сознательность бессмысленно -- разумнее настроить автоматическую очистку один раз и забыть об этой проблеме.

## Основной механизм -- перезагрузка при выходе

Главный инструмент для этого уже есть в общих настройках оболочки: <cmd text="Настройки"/> -> <cmd text="Оболочка"/> -> **Действие при выходе из системы**. Если выбран вариант **Перезагрузка**, компьютер полностью перезапускается после завершения сеанса гостя -- вместе с этим сбрасываются все запущенные приложения и локальные сессии лаунчеров, которые не сохраняют авторизацию отдельно от системы.

Рекомендуем выбирать именно **Перезагрузку**, а не более мягкие варианты вроде «Закрытие всех программ» -- разница на первый взгляд небольшая, но именно она отделяет чистый пк от пк с чужими открытыми сессиями.

## Если лаунчер сохраняет вход после перезагрузки

Некоторые лаунчеры (в первую очередь Steam, если у него включён режим "оставаться в сети" или автовход) могут сохранять авторизацию даже после перезагрузки пк -- в этом случае одной перезагрузки недостаточно, и проблема с чужими аккаунтами вернётся снова.

## Смежные настройки

-  **Завершение ожидающих сессий** и **Выход из системы отключённых клиентов** в <cmd text="Настройки"/> -> <cmd text="Оболочка"/> -> «Настройки клиентских сессий» -- отвечают за автоматическое завершение сессии при потере связи между сервером и клиентом, а не за очистку самих игровых лаунчеров, но тоже влияют на то, как быстро закрывается "зависшая" сессия гостя, если что-то в сети пошло не так.

Настроить это один раз при разворачивании клуба гораздо проще, чем потом объяснять недовольному гостю, почему в его сессии обнаружился чужой прогресс в игре.
