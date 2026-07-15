---
order: 3
title: Льготы для персонала
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как дать сотрудникам бесплатное или льготное время на пк</h2>
    <div class="gx-meta">
      <span>10–15 минут</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level medium">Средняя сложность</span>
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

Хороший администратор часто выбирает работу в клубе ещё и потому, что любит там находиться и играть. Дайте ему эту возможность официально, а не закрывайте глаза на то, что он тихонько садится за свободный пк между сменами -- так вы теряете и контроль над тем, что происходит, и повод лишний раз сказать сотруднику спасибо.

Аккаунт оператора, который вы создаёте для входа в Gizmo Manager, даёт доступ только туда -- он никак не связан со входом в клиентскую оболочку на игровых пк. Так что для льготной игры нужен отдельный клиентский аккаунт с особыми условиями.

## Идея решения

Готовой кнопки "сделать сотрудника льготным" в Gizmo нет -- вместо этого льгота собирается из уже знакомых вам инструментов: отдельной группы пользователей и правил доступности пакетов или тарифов для этой группы. Звучит как лишний шаг, но на деле занимает пару минут и даёт вам полный контроль над тем, что именно и на каких условиях доступно сотрудникам.

## Шаги

-  Создайте группу пользователей **Staff** -- как создавать группы, описано в статье [«Группы пользователей»](./user-groups.md).

-  Заведите обычный клиентский аккаунт для сотрудника и назначьте ему группу **Staff**.

-  Настройте нужную льготу одним из способов:

   -  **Скидка 100% (бесплатная игра)** -- создайте отдельный тариф или пакет времени с ценой 0, доступный только группе **Staff**. Как ограничить доступность пакета конкретной группой пользователей -- в статье [«Карточка пакета времени»](./../../configure/finance/time-products/time-product-card.md).

   -  **Скидка меньше 100%** -- аналогично, но вместо цены 0 укажите льготную цену в пакете или тарифе, предназначенном для группы **Staff**.

## Важные ограничения

-  Льготный тариф или пакет должен быть привязан только к группе **Staff**, а не открыт всем -- иначе скидкой сможет воспользоваться любой гость, и вся идея потеряет смысл.

-  Если сотрудник увольняется, не забудьте вернуть его клиентский аккаунт в обычную группу пользователей или удалить его -- иначе льгота останется активной, и об этом узнаете не вы, а бухгалтерия при следующей сверке.

## Стоит ли этим вообще заниматься

Да -- это одна из тех мелочей, которая почти ничего не стоит клубу (сотрудники и так проводят на рабочем месте часть свободного времени), но заметно влияет на атмосферу в команде. Люди ценят, когда о них думают не только в контексте обязанностей.

> [!NOTE]
> 
> Здесь описан общий принцип, основанный на уже подтверждённых механизмах Gizmo (группы пользователей + ограничение доступности пакета/тарифа по группе). Если в интерфейсе появится специальный, более прямой способ разметить аккаунт как "сотрудник" -- этот раздел будет обновлён.
