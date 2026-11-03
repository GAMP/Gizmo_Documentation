---
title: Промокоды
order: 5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M13 5v2"/><path d="M13 17v2"/><path d="M13 11v2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как работают промокоды и что подготовить перед запуском акции</h2>
    <div class="gx-meta">
      <span>5 минут</span>
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

Постоянная скидка подходит для тех, кто уже ходит к вам регулярно. А если нужно разово порадовать гостя -- раздать флаеры на открытии нового филиала или подарить скидку подписчикам в соцсетях, -- удобнее промокод: гость вводит его один раз и получает своё предложение.

В Gizmo промокоды создаются в рамках акций -- акционных кампаний на вкладке **Маркетинг -> Акции**. Промокод единоразово активирует для пользователя скидку или целую скидочную группу. Клиент может активировать промокод у администратора или сам -- через клиентскую оболочку.

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 1. Подготовьте скидку или скидочную группу

Промокод не задаёт размер скидки сам -- он активирует уже существующую скидку или скидочную группу. Поэтому сначала создайте то, что гость получит по промокоду: например, скидку 20% на пакеты времени. Как это сделать -- в инструкции [«Скидки и акции»](./discounts-and-promotions.md), шаги 1–4.

## Шаг 2. Создайте акцию с промокодом

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 3. Примените промокод при продаже

Если гость называет промокод на стойке:

1. Откройте **Касса -> Продажи**, выберите гостя и добавьте позиции в корзину.
2. Введите код в поле **Введите промокод** под корзиной и нажмите **Применить промокод**.
3. Проверьте строку **Скидка** в итогах корзины и нажмите **Оплата**.

## Результат

Гость вводит промокод у администратора или в клиентской оболочке и единоразово получает скидку или скидочную группу, привязанную к акции.
