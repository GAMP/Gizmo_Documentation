---
title: Как добавить консоль или другое игровое место
order: 2
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="6" x2="10" y1="11" y2="11"/><line x1="8" x2="8" y1="9" y2="13"/><line x1="15" x2="15.01" y1="12" y2="12"/><line x1="18" x2="18.01" y1="10" y2="10"/><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как завести в Gizmo консоль, симулятор или бильярдный стол и вести по ним учёт</h2>
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

Кроме игровых пк в клубе часто есть места, на которые Gizmo Client не установить: зона с PlayStation, гоночный симулятор, бильярдный стол. Чтобы такие места не выпадали из кассы и отчётов, их заводят в Gizmo как **терминалы**. Gizmo не управляет терминалом напрямую, но ведёт по нему учёт времени и продаж.

Игровой пк появляется в списке станций сам, при первом подключении Gizmo Client к серверу. Терминал так не умеет -- его, как и контроллер, создают **только вручную**. Контроллер нужен, если вы хотите удалённо включать и выключать HDMI-сигнал на экране места -- чаще всего так контролируют время на консолях.

## Шаг 1. Проверьте лицензии

Откройте **Настройки -> Организация -> Подписка** и проверьте, что подписка активна, а лицензий не меньше, чем игровых мест в клубе, -- консоли тоже считаются. Подробнее -- в статье [«Подписка»](./../../configure/organization/subscription.md).

## Шаг 2. Подготовьте группу станций

От группы станций зависит, по какой цене гость играет на месте и какие пакеты времени ему доступны. Если консоли должны стоить иначе, чем пк, заведите для них отдельную группу.

1. Откройте **Станции -> Группы станций** и нажмите **Создать группу станций**.
2. Укажите **Название** (например, «Консоли») и **Филиал**. Остальные поля -- **Тема оформления**, **Группа приложений**, **Профиль безопасности**, **Гостевая группа по умолчанию** -- заполните при необходимости.
3. Сохраните группу.
4. Привяжите к группе тариф: откройте **Настройки -> Финансовый -> Тарифы**, выберите тариф и укажите в нём **Филиал** и новую группу станций. Подробнее -- в инструкции [«Тарификация»](./../sales/pricing/tariffs-guide.md).

Если подходящая группа уже есть, этот шаг можно пропустить. Поля группы -- в статье [«Карточка редактирования группы станций»](./../../usage/gizmo-manager/stations/station-groups/station-group-card.md).

## Шаг 3. Добавьте контроллер (если он есть)

Пропустите этот шаг, если на месте не нужен удалённый контроль HDMI-сигнала.

1. Откройте **Станции -> Контроллеры** и нажмите **Создать контроллер**.
2. Заполните поля:
   - **Имя** -- название контроллера в Gizmo, например по номеру места;
   - **Серийный номер** -- номер с корпуса устройства, по нему запись сопоставляется с физическим контроллером;
   - **Филиал** -- филиал, к которому относится контроллер.
3. Сохраните карточку.

Как физически подключить контроллер к экрану и к сети клуба:

> [!NOTE]
>
> Данный раздел находится в разработке.

Поля карточки -- в статье [«Карточка редактирования контроллера»](./../../usage/gizmo-manager/stations/controllers/controller-card.md).

## Шаг 4. Создайте терминал

1. Откройте **Станции -> Терминалы** и нажмите **Создать терминал** в правом верхнем углу.
2. Заполните поля:
   - **Имя** -- под этим названием место будет в списке станций, на карте клуба и в поиске;
   - **Номер** -- порядковый номер места в Gizmo;
   - **Слоты** -- сколько гостей могут быть одновременно авторизованы на месте. Например, если за одной консолью играют вдвоём, укажите 2;
   - **Филиал** -- филиал, в котором отображается место;
   - **Группа станций** -- группа из шага 2;
   - **Слои карты** -- на каких слоях карты будет видно место;
   - **Контроллер** -- контроллер из шага 3, если он есть.
3. Сохраните карточку.

Поля карточки -- в статье [«Карточка редактирования терминала»](./../../usage/gizmo-manager/stations/terminals/terminal-card.md).

## Шаг 5. Проверьте место на карте

Откройте раздел **Карта** и переключитесь на слой, который вы указали в карточке терминала, -- новое место появится на нём. Если нужно, снимите режим блокировки карты и перетащите плитку на своё место в схеме зала, а затем верните блокировку. Как создавать слои -- в статье [«Слои карты»](./../../usage/gizmo-manager/stations/sloi-karty/_index.md).

Как вести сеанс гостя на терминале и как работает отключение HDMI-сигнала через контроллер:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 6. Учтите оборудование места (по желанию)

Если к месту прилагаются геймпады, руль или гарнитура, их можно внести в инвентарный справочник: **Станции -> Типы оборудования -> Создать тип оборудования**, укажите **Имя** и **Количество**. Gizmo этим оборудованием не управляет, а только хранит сведения о нём. Выдать оборудование гостю и забрать его обратно можно на карте клуба, командами **Выдать** и **Получить** в группе **Оборудование**. Подробнее -- в статье [«Типы оборудования»](./../../usage/gizmo-manager/stations/tipy-oborudovaniya.md).

## Результат

- Консоль или другое место появилось в списке станций и на карте клуба.
- Время на месте тарифицируется по тарифу его группы станций, а продажи по нему попадают в кассу и отчёты.
- Если к месту привязан контроллер, HDMI-сигнал на его экране можно включать и выключать удалённо.

Обзор раздела -- в статье [«Станции»](./../../usage/gizmo-manager/stations/_index.md).
