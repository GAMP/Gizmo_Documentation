---
title: Бонусные баллы для клиентов
order: 3
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как построить простую систему кешбэка на баллах</h2>
    <div class="gx-meta">
      <span>15 минут</span>
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

Рано или поздно вы зададите себе вопрос -- как удержать гостя, который уже приходил, и сделать так, чтобы в следующий раз он выбрал именно ваш клуб. Постоянные скидки уменьшают выручку и быстро становятся ожидаемой нормой, а не приятным бонусом. Бонусные баллы работают мягче -- гость получает что-то вроде своей внутренней валюты клуба, копит её, и это тонкая, но рабочая причина возвращаться именно к вам.

В этом руководстве мы разберём настройку системы лояльности через баллы. Чтобы назначать скидки, промокоды и создавать акции -- смотрите статью [«Скидки и акции»](./discounts-and-promotions.md).

## Как это работает

Идея простая -- клиент покупает пакет времени или товар, и одновременно с покупкой ему на счёт начисляются баллы. Копится баланс баллов, который потом можно потратить на следующую покупку. Возможна частичная и полная оплата -- в зависимости от того, как вы настроите систему.

## Где включить начисление

Начисление бывает двух типов -- за товары и пакеты времени, и за почасовую оплату.

#### Товары и пакеты времени

Начисление баллов настраивается прямо в карточке пакета времени или товара, в блоке **Награда** -- там вы указываете, сколько баллов клиент получит за покупку именно этой позиции. Ничего не мешает начислять разное количество баллов за разные пакеты -- например, больше баллов за более дорогие и долгие сессии, чтобы стимулировать гостей брать именно их, или 10% от каждого товара.

![](./loyalty-program.png){width=666px height=210px}

#### Почасовая оплата

Начисление баллов за почасовую оплату настраивается для отдельных групп пользователей. Откройте <cmd text="Пользователи"/> -> <cmd text="Группы пользователей"/> и выберите группу, для которой хотите настроить кешбэк. В карточке группы дойдите до раздела **Лояльность** и отредактируйте его, нажав на иконку карандаша. Доступны два типа начисления кешбэка:

-  **Деньги** -- баллы начисляются за выбранную сумму баланса, потраченную на почасовую оплату. Обратите внимание -- именно на почасовую оплату, а не на любые другие товары или пакеты.

-  **Время** -- баллы начисляются за отыгранное время.

Для любого способа укажите количество баллов и сумму денег или времени, которые нужно потратить для их получения. Рекомендуем ставить значения как можно меньше -- например, вместо 10 баллов за 100 рублей лучше 1 балл за 10 рублей, потому что если клиент потратит 99 рублей, а не 100, в первом случае он не получит ни одного балла. Также учитывайте, что начисление баллов происходит только в момент выхода клиента из сессии и закрытия его счётов, а не сразу после трат.

## Как тратить баллы

В блоке **Ценообразование** карточки пакета или товара есть возможность указать стоимость в баллах, а также переключить условие их траты:

-  **Стоимость в деньгах «И» стоимость в баллах** -- оплата обязательно происходит и деньгами, и баллами одновременно. То есть если вы поставите цену 100 рублей И 50 баллов, клиенту нужно иметь и 100 рублей, и 50 баллов, чтобы купить товар.

-  **Стоимость в деньгах «ИЛИ» стоимость в баллах** -- клиент сам выбирает, чем платить: обычными деньгами или накопленными баллами. Рекомендуем выбирать этот вариант.