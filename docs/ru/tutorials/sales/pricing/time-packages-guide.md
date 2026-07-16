---
order: 2
title: Пакеты времени
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 8 12 3 3 8v8l9 5 9-5z"/><path d="M3 8l9 5 9-5"/><line x1="12" y1="13" x2="12" y2="21"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как создать пакет времени</h2>
    <div class="gx-meta">
      <span>15–20 минут</span>
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

Пакеты времени продают клубу больше, чем обычная почасовая оплата -- гость видит выгодное предложение и покупает именно его, даже если изначально планировал сидеть меньше.

## Создание пакета

Перейдите в <cmd text="Настройки"/> -> <cmd text="Пакеты"/> -> <cmd text="Создать пакет времени"/>. Полей здесь много, но ниже -- только то, что действительно нужно для старта.

**Детали пакета**

-  **Имя** -- выберите единый формат для всех пакетов, например «\[зона\] + длительность»: Standart 3 часа, VIP 5 часов.

-  **Товарная группа** -- категория, к которой относится пакет (настраивается в <cmd text="Магазин"/> -> <cmd text="Группы товаров"/>).

-  **Количество минут**, которое даёт пакет, и при необходимости -- описание.

**Доступность**

-  **Доступно для бронирования** -- можно ли оплатить этим пакетом бронирование пк.

-  **Показать в клиентской оболочке** -- появится ли пакет в магазине на клиентских пк.

-  В таблице ниже добавьте только те филиалы и группы станций, где пакет реально должен продаваться -- например, пакет Standart 3 часа не стоит привязывать к зоне VIP, иначе гости будут покупать его дешевле и использовать в более дорогой зоне. Чтобы пакет можно было купить прямо в клиентской оболочке, включите переключатель **«Заказ»** рядом с каждой добавленной группой.

-  **Незарегистрированные** -- включите, если пакетом смогут пользоваться и разовые (гостевые) учётные записи.

-  В таблице **Группа пользователей** отметьте, кому доступен пакет. Обычно проще дать доступ всем группам, если нет причин ограничивать.

> [!NOTE]
> 
> Группа пользователей -- это категория клиентов со своими ценами, скидками и доступами. Например, вы можете создать «Зарегистрированные» -- обычные клиенты, «Гости» -- разовые аккаунты, «VIP» -- премиум со скидкой 10%, «Staff» -- сотрудники со скидкой 100% и без ограничений системы.

![](./../../../instalation/instalation-8.png){width=1233px height=483px}

**Доступность в филиалах**

Похожая настройка, но на уровне целого филиала -- определяет, в каких клубах сети пакет вообще можно использовать. По умолчанию выключена -- включите для нужных филиалов.

**Диапазон использования и расписание продаж**

Эти два поля ограничивают пакет по датам или времени.

-  **Диапазон дат** -- конкретные даты, когда пакет можно купить или использовать. Пригодится для акционных пакетов с ограниченным сроком.

-  **Диапазон времени** -- дни недели и часы, когда пакет доступен для покупки или использования. Если выключено -- ограничений нет.

**Срок службы пакета**

Срок службы -- условия, при которых пакет сгорает. Это мотивирует гостя доиграть пакет, а не растягивать его на потом.

Есть два момента начала отсчёта:

-  **С момента покупки** -- отсчёт стартует сразу после оплаты.

-  **От использования** -- отсчёт стартует, когда гость начинает пакет использовать.

И три типа истечения:

-  **Истекает после \[время\]** -- пакет сгорает через заданный промежуток.

-  **Истекает в \[время дня\]** -- пакет сгорает в ближайшее наступление указанного времени суток.

-  **Истекает при выходе из системы** -- пакет сгорает при перезапуске пк. Будьте аккуратны: случайный выход из аккаунта или перезагрузка тоже удалят пакет.

Самый частый вариант -- пакет сгорает через своё же количество часов после начала использования. Например, для пакета на 5 часов: **Срок действия истекает после** -- 5, формат -- часы, отсчёт -- «От использования».

![](./../../../instalation/instalation-11.png){width=1227px height=375px}

**Ценообразование**

Укажите цену пакета в деньгах и, если нужно, в баллах. Если оплата возможна и деньгами, и баллами на выбор -- переключите «И» на «ИЛИ».

> [!IMPORTANT]
> 
> Баллы -- часть бонусной системы: вы начисляете клиентам баллы за покупки, а они тратят их на товары и пакеты по установленной вами цене.

## Пакеты и бонусные баллы

Если у вас уже есть бонусная система, не забудьте настроить начисление баллов в блоке «Награда» для каждого нового пакета -- иначе часть пакетов будет копить баллы, а часть нет, и гости это быстро заметят. Подробнее -- в статье [«Бонусные баллы для клиентов»](./../../loyalty/loyalty-program.md).