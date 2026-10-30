---
title: Как свернуть, отключить или удалить оболочку
order: 5.5
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
    <h2 class="gx-title">Как выйти из оболочки на игровом пк, отключить или удалить Gizmo Client</h2>
    <div class="gx-meta">
      <span>5–10 минут</span>
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

Оболочка Gizmo Client закрывает гостю доступ к Windows: если в профиле безопасности включено **Запретить сворачивать оболочку**, гость не свернёт её как обычное приложение. Но администратору время от времени нужно выйти из оболочки -- например, поставить игру или проверить настройки системы, -- а иногда и убрать Gizmo Client с пк совсем.

Для этого есть два способа. Первый -- **режим администратора**: он включается удалённо из Gizmo Manager, снимает всю безопасность и сворачивает оболочку. Второй -- **режим обслуживания** на самом пк: в него входят через скрытое окно Gizmo Client по паролю менеджера, и в нём можно свернуть оболочку, деактивировать или удалить Gizmo Client.

## Шаг 1. Смените пароль менеджера

Пароль менеджера открывает режим обслуживания на любом клиентском пк, поэтому первым делом замените стандартный пароль на свой.

1. Откройте **Настройки -> Клиент -> Оболочка**, блок **Общее**.
2. Укажите новое значение в поле **Пароль менеджера**.
3. Сохраните настройки.

> [!IMPORTANT]
>
> По умолчанию пароль менеджера -- `password`. Обязательно смените его и храните в надёжном месте: с этим паролем можно свернуть оболочку, деактивировать или удалить Gizmo Client.

> [!WARNING]
>
> Изменения в разделе **Оболочка** вступают в силу только после перезагрузки Gizmo Client.

## Шаг 2. Сверните оболочку из Gizmo Manager

Этот способ не требует подходить к пк и вводить пароль.

1. Откройте раздел **Карта** и выберите игровое место -- или сразу несколько.
2. В категории **Хосты** откройте **Оболочка** и нажмите **Включить режим администратора**. Пк перейдёт в режим полного доступа: вся безопасность снимается, клиентская оболочка сворачивается, и открывается доступ к операционной системе.
3. Когда работа на пк закончена, нажмите там же **Выключить режим администратора** -- пк выйдет из режима полного доступа.

Если нужно только снять ограничения профилей безопасности, не сворачивая оболочку, используйте в категории **Хосты -> Система** действия **Откл. безопасность** и **Вкл. безопасность**. Чтобы перезагрузить саму оболочку, не перезапуская пк, -- **Хосты -> Перезапустить оболочку**.

Все действия с игровыми местами -- в статье [«Карта»](./../../usage/gizmo-manager/map/_index.md).

## Шаг 3. Войдите в режим обслуживания на пк

Режим обслуживания открывается в специальном скрытом окне Gizmo Client по паролю менеджера. Как открыть скрытое окно:

> [!NOTE]
>
> Данный раздел находится в разработке.

В скрытом окне введите пароль менеджера из шага 1. В режиме обслуживания доступны действия:

- свернуть оболочку Gizmo Client;
- деактивировать Gizmo Client;
- удалить Gizmo Client.

## Шаг 4. Удалите Gizmo Client

Удалить Gizmo Client с пк можно из режима обслуживания (шаг 3). Порядок удаления и что происходит с пк в Gizmo Manager после удаления:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Результат

- Стандартный пароль менеджера заменён, и посторонний не сможет свернуть, деактивировать или удалить оболочку.
- Чтобы выйти в Windows на игровом пк, достаточно включить режим администратора из Gizmo Manager, а затем выключить его, когда работа закончена.
- На самом пк свернуть, деактивировать или удалить Gizmo Client можно из режима обслуживания по паролю менеджера.

Описание поля **Пароль менеджера** и других общих настроек -- в статье [«Оболочка»](./../../configure/client/shell.md). Как запретить гостям сворачивать оболочку -- в инструкции [«Профили безопасности»](./security-profiles.md).
