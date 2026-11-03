---
title: Как перезапустить сервер Gizmo
order: 1.7
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как перезапустить Gizmo Server и не прервать сеансы гостей</h2>
    <div class="gx-meta">
      <span>10 минут</span>
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

Gizmo Server -- главный компонент Gizmo: к нему подключаются все клиентские пк и Gizmo Manager. Перезапускать его приходится нечасто, но бывает нужно: например, после добавления, удаления, включения или отключения интеграций, после установки нового SSL-сертификата или по просьбе службы поддержки. Изменения в этих настройках не заработают, пока сервер не перезапущен.

Пока сервер перезапускается, клиентские пк теряют с ним связь. Если в клубе в этот момент играют гости, важно заранее настроить, что произойдёт с их сеансами, -- иначе перезапуск может разлогинить весь зал. Разберём, как подготовиться и как перезапустить сервер в каждом режиме работы.

## Шаг 1. Определите, как работает ваш сервер

От этого зависит, как его перезапускать.

- **Служба** -- фоновый процесс Windows, который запускается вместе с системой. Этот режим рекомендуется для постоянной работы.
- **Консольное приложение** -- сервер запускается вручную, через ярлык на рабочем столе или из папки `C:\Program Files\NETProjects\Gizmo Server`. Этот режим используют для сбора ошибок, единоразового запуска или по просьбе поддержки.

Чем отличаются режимы и как установить службу -- в статье [«Режимы работы сервера»](./../../usage/gizmo-server/run-modes.md).

Оба режима относятся к серверу, установленному на Windows. Кроме того, Gizmo Server устанавливается на Linux и в Docker -- для этих вариантов см. шаг 4. Облачная версия сервера находится в разработке.

## Шаг 2. Заранее настройте поведение сеансов при потере связи

Что случится с сеансами гостей, пока сервер недоступен, определяют настройки оболочки. Откройте **Настройки -> Клиент -> Оболочка**, блок **Сеанс пользователя**:

- **Выход из системы отключенных клиентов** -- если включено, при потере связи с сервером сеанс гостя завершится в самом Gizmo Client.
- **Завершение ожидающих сеансов** -- если включено, при потере связи сеанс гостя завершится в Gizmo Server и Gizmo Manager.
- **Время ожидания [Секунды]** -- сколько секунд Gizmo ждёт восстановления связи, прежде чем завершить сеанс по одной из опций выше. По умолчанию -- 180 секунд.

Если обе опции выключены, сеансы гостей не завершатся автоматически из-за потери связи. Если включена хотя бы одна, сеанс завершится, когда связь пропадёт дольше, чем задано в **Времени ожидания**.

> [!IMPORTANT]
>
> Изменения опций **Время ожидания**, **Выход из системы отключенных клиентов** и **Завершение ожидающих сеансов** применяются только после перезагрузки Gizmo Client. Поменять их «на лету» прямо перед перезапуском сервера не получится -- настройте их заранее. Чтобы применить настройки, не перезагружая сами пк, на **Карте** выберите игровые места и нажмите **Перезапустить оболочку** -- Gizmo Client перезапустится без перезагрузки компьютера.

Подробнее -- в статье [«Оболочка»](./../../configure/client/shell.md).

## Шаг 3. Оцените, сколько у вас времени

- Если опции завершения сеансов включены, сервер должен снова заработать до того, как истечёт **Время ожидания**. Со значением по умолчанию у вас есть 180 секунд.
- Если опции выключены, сеансы гостей не прервутся из-за потери связи, но на время перезапуска клиентские пк всё равно останутся без связи с сервером.

> [!TIP]
>
> Если перезапуск не срочный, выберите время, когда в клубе меньше всего гостей.

## Шаг 4. Перезапустите сервер

**Если сервер работает как служба**

1. На серверном пк запустите конфигуратор ConfigurationTool. Он находится в папке `C:\Program Files\NETProjects\Gizmo Server\tools\configuration`.
2. Перейдите в раздел **«Управление Сервисом Gizmo»**.
3. Остановите службу и снова запустите её.

> [!TIP]
>
> Если Windows требует учётные данные для управления службой, включите **Расширенный режим** и укажите логин и пароль, с которыми входите в аккаунт Windows при запуске пк. Если пароля для входа в систему нет, создайте его.

**Если сервер работает как консольное приложение**

1. Закройте окно консоли сервера.
2. Запустите сервер снова -- через ярлык на рабочем столе или из папки `C:\Program Files\NETProjects\Gizmo Server`.

**Если сервер установлен на Linux или в Docker**

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 5. Проверьте, что всё работает

1. Откройте Gizmo Manager и перейдите на **Карту**.
2. Убедитесь, что игровые места снова на связи, а сеансы гостей на месте.
3. Если перезапуск был нужен для новой интеграции или сертификата, проверьте, что они заработали.

> [!NOTE]
>
> Если после перезапуска клиентский пк не подключается к серверу, пройдите чек-лист из инструкции [«Проблемы подключения клиентских пк»](./../client-shell/client-connection-troubleshooting.md).

## Результат

- Сервер перезапущен, и изменения, которые требовали перезапуска, вступили в силу.
- Сеансы гостей пережили перезапуск: либо опции завершения сеансов выключены, либо сервер вернулся раньше, чем истекло **Время ожидания**.
- В следующий раз перезапуск займёт пару минут: настройки сеанса уже подготовлены.

Связанные статьи -- [«Режимы работы сервера»](./../../usage/gizmo-server/run-modes.md), [«Оболочка»](./../../configure/client/shell.md) и [«Добавление интеграции»](./../../configure/server/plugins/add-new-plugin.md).
