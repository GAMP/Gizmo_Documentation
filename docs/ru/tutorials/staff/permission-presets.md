---
order: 2
title: Как выбрать готовый набор прав доступа
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как не запутаться в готовых наборах прав доступа</h2>
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

Заводить нового сотрудника и вручную расставлять галочки в десятках категорий прав -- занятие для отдельного вечера, а не для того дня, когда новый администратор уже стоит на стойке и ждёт доступ. К счастью, в Gizmo Manager для этого есть готовые наборы прав "из коробки" -- их можно назначить оператору сразу, без единого лишнего клика.

## Зачем нужны готовые наборы

Полный список отдельных разрешений в Gizmo большой -- десятки категорий вроде «Продажи», «Смена», «Остатки», «Управление» и так далее (полный разбор -- в статье [«Карточка прав доступа»](./../../configure/operators-and-permissions/permissions/permission-card.md)). Настраивать это вручную для каждого нового сотрудника долго и рискованно -- легко забыть важный чекбокс и потом удивляться, почему оператор не может закрыть смену. Готовые наборы уже собраны под типовые роли в клубе и назначаются сразу при создании оператора, в <cmd text="Настройки"/> -> <cmd text="Права доступа"/>.

## Кассир

Это набор, который мы рекомендуем для рядового оператора точки продаж -- сотрудника, который принимает гостей, оформляет продажи пакетов и товаров и работает со сменой на кассе. Для большинства новых сотрудников на стойке этого набора хватает с первого дня.

## Как выбрать между наборами

При создании оператора набор указывается в поле **Предустановка прав доступа** карточки оператора -- см. статью [«Карточка оператора»](./../../configure/operators-and-permissions/operators/operators-card.md).

Перед тем как назначить сотруднику любой набор, кроме **Кассира**, откройте его в <cmd text="Настройки"/> -> <cmd text="Права доступа"/> и вручную проверьте состав -- каждая категория показывает количество включённых разрешений (например, 19/22), так что сравнить наборы между собой можно за пару минут, даже не читая описание каждого пункта.

## Если готовые наборы не подходят

Если для вашего клуба нужна нестандартная роль -- например, старший администратор с доступом к отчётам, но без прав менять настройки сервера -- не пытайтесь подогнать под неё существующий набор через боль и компромиссы. Создайте свой набор на основе ближайшего готового: откройте его, сохраните копию под новым именем и донастройте нужные галочки. Это займёт минут десять, зато потом такую роль можно будет переиспользовать для всех похожих сотрудников.
