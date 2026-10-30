---
title: Как удалённо включить, перезагрузить и выключить пк
order: 1
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как включать, перезагружать и выключать пк клуба прямо из Gizmo Manager</h2>
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

Утром перед открытием нужно включить весь зал, а ночью -- выключить его. Обходить каждый пк по очереди долго, особенно если места стоят на разных этажах. В Gizmo Manager это делается с карты клуба: выделяете нужные места -- и одной командой включаете, перезагружаете или выключаете их.

Выключение и перезагрузка работают на включённых пк. Удалённое включение выключенного пк работает по технологии Wake On LAN -- её нужно один раз подготовить на самих клиентских пк.

## Шаг 1. Включите Wake On LAN на клиентских пк

Этот шаг нужен только для удалённого включения. Если вы собираетесь только выключать и перезагружать пк, переходите к шагу 3.

На каждом клиентском пк включите Wake On LAN в BIOS/UEFI и в настройках сетевой карты.

> [!WARNING]
>
> Если Wake On LAN на клиентском пк не настроен, команда **Включить** не сработает. В Windows 10 включение по сети из обычного выключения не поддерживается, пока включён быстрый запуск -- подробнее в [статье Microsoft](https://learn.microsoft.com/ru-ru/troubleshoot/windows-client/setup-upgrade-and-drivers/wake-on-lan-feature).

Где именно в BIOS/UEFI и в свойствах сетевой карты находятся нужные параметры:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 2. Проверьте MAC-адрес пк в Gizmo

Сигнал на включение отправляется на MAC-адрес сетевой карты пк, поэтому он должен быть указан в карточке компьютера.

1. Откройте **Станции -> Компьютеры**. Столбец **MAC-адрес** в списке показывает адрес каждого пк.
2. Если у пк адрес не заполнен, дважды нажмите на него -- откроется карточка компьютера.
3. Укажите **MAC адрес** и сохраните карточку.

Поля карточки -- в статье [«Карточка редактирования компьютера»](./../../usage/gizmo-manager/stations/computers/computer-card.md).

## Шаг 3. Выдайте операторам нужное разрешение

Удалённое включение доступно только операторам с разрешением **Включение хостов** (категория **«Управление»**).

1. Откройте **Настройки -> Операторы и настройки прав доступа -> Права доступа**.
2. Выберите набор прав, назначенный оператору.
3. В категории **«Управление»** включите **Включение хостов** и сохраните набор.

Какие разрешения отвечают за выключение и перезагрузку пк:

> [!NOTE]
>
> Данный раздел находится в разработке.

Все разрешения -- в статье [«Карточка прав доступа»](./../../configure/operators-and-permissions/permissions/permission-card.md).

## Шаг 4. Управляйте питанием с карты клуба

1. Откройте раздел **Карта**.
2. Выберите одно игровое место или сразу несколько.
3. В группе **Хосты** выберите действие:
   - **Включить** (CTRL+T) -- отправляет запрос на включение пк по сети, если он выключен;
   - **Перезагрузить** (CTRL+R) -- перезапускает пк, если он включён;
   - **Выключить** (CTRL+ALT+T) -- выключает пк, если он включён.

Те же действия есть в контекстном меню по правой кнопке мыши и в верхней панели инструментов карты.

> [!TIP]
>
> Если на пк зависла только клиентская оболочка, перезагружать весь пк не обязательно. В группе **Хосты** выберите **Перезапустить оболочку** -- Gizmo Client перезапустится, а сам пк продолжит работать.

Все действия карты -- в статье [«Карта»](./../../usage/gizmo-manager/map/_index.md).

## Результат

- Оператор включает выключенные пк с карты клуба по Wake On LAN -- по одному или целой группой.
- Перезагрузка и выключение пк выполняются с карты, без похода к игровому месту.
