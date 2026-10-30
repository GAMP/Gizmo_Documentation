---
title: Как настроить испытания
order: 8
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как создать испытание с наградой за выполненные достижения</h2>
    <div class="gx-meta">
      <span>10–15 минут</span>
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

Достижения отмечают то, что гость уже сделал, а испытания подталкивают его сделать что-то ещё: «приди пять раз за месяц -- и получи час игры в подарок». Испытание -- это набор достижений, за выполнение которого гость получает награду: баллы, товар или время. Испытание можно ограничить по срокам и по количеству выполнений, а награду -- выдавать автоматически или вручную на стойке оператора.

Ниже создадим испытание «Неделя пополнений»: гость, который пять раз получил достижение «Ежедневное пополнение депозита», получает 100 баллов.

## Шаг 1. Подготовьте достижения

Испытание собирается из уже созданных достижений. Если нужных достижений ещё нет, создайте их по инструкции [«Как настроить достижения»](./achievements.md).

## Шаг 2. Создайте испытание

1. Откройте **Маркетинг -> Испытания**. В таблице показаны уже созданные испытания: название, статус, даты начала и окончания и доступность -- сколько выполнений ещё осталось.
2. Нажмите **Создать испытание** в правом верхнем углу -- откроется карточка испытания.
3. Заполните основные поля:
   - **Включено** -- статус испытания;
   - **Название**;
   - **Скрыть от клиентов** -- включите, если испытание не должно быть видно гостям.
4. Выберите **Тип окна** -- когда действует испытание:
   - **Бессрочный** -- без ограничения по датам;
   - **С окном** -- укажите **Начало** и **Окончание** действия испытания.

## Шаг 3. Задайте требования

В поле **Требования** перечисляются достижения, которые гость должен получить, и сколько раз.

1. Выберите достижение из списка.
2. Укажите количество -- в нашем примере 5.
3. Нажмите **Добавить**. Повторите для других достижений, если испытание состоит из нескольких.

Ошибочно добавленное достижение удалите кнопкой **Х** на его бейдже.

## Шаг 4. Ограничьте количество выполнений

В блоке **Выполнения и лимиты** задайте:

- **Макс. выполнений на клиента** -- сколько раз один гость может выполнить испытание;
- **Максимум выполнений всего** -- сколько раз испытание могут выполнить все гости вместе. Оставьте поле пустым, если ограничение не нужно. Например, «первые 50 гостей получат приз» -- укажите 50.

## Шаг 5. Добавьте награды

В блоке **Награды** укажите, что гость получит за выполнение испытания. Можно добавить сколько угодно наград, в том числе разных типов.

1. Выберите **Тип награды**:
   - **Баллы** -- укажите количество баллов;
   - **Товар** -- выберите товар и укажите количество;
   - **Время** -- укажите количество времени.
2. Если награду должен выдавать оператор, отметьте, что она выдаётся вручную. Иначе гость получит её автоматически.
3. Нажмите **Добавить**.

Лишнюю награду удалите кнопкой **Х** на её бейдже.

Как оператор выдаёт награду вручную, когда гость обращается на стойку:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 6. Добавьте изображение и сохраните

1. В блоке **Медиа** загрузите изображение испытания -- его увидят гости в Gizmo Client.
2. Сохраните испытание.

## Шаг 7. Управляйте испытаниями

Действия с испытанием доступны в меню **…** в его строке: **Редактировать**, **Отключить**, **Скрыть от клиентов**, **Удалить**. Карточку также открывает двойное нажатие на строку. Чтобы удалить несколько испытаний сразу, отметьте их галочками -- галочка в шапке таблицы выбирает все.

> [!WARNING]
>
> Испытание -- это оферта для гостя. Если гость выполнил испытание до того, как вы его отредактировали, оно останется у него выполненным вне зависимости от новых условий.

## Результат

- Гость видит испытание в Gizmo Client, если оно включено и не скрыто.
- Когда гость получает все требуемые достижения в нужном количестве, испытание считается выполненным, и он получает награду -- автоматически или у оператора.
- Испытание перестаёт выполняться после даты окончания или после того, как исчерпаны лимиты выполнений.

Описание всех параметров -- в статьях [«Испытания»](./../../usage/gizmo-manager/marketing/challenges/_index.md) и [«Карточка испытания»](./../../usage/gizmo-manager/marketing/challenges/challange-card.md).
