---
order: 0.9
title: Мастер настройки Gizmo Server
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как пройти мастер настройки Gizmo Server</h2>
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

Сразу после установки Gizmo Server нужно пройти мастер настройки -- он инициализирует базу данных и связывает сервер с вашим личным кабинетом. Без этого шага сервер не заработает.

## Как открыть мастер настройки

На пк с установленным туда Gizmo Server откройте приложение **ConfigurationTool** через ярлык на рабочем столе, либо по пути `C:\Program Files\NETProjects\Gizmo Server\tools\configuration`.

## Шаги мастера

-  Перейдите в <cmd text="Мастер настройки"/> -> <cmd text="Далее"/> -- откроется страница «Параметры базы данных».

   ![](./setup-wizard.png){width=698px height=658px}

-  Если не уверены, что там менять, лучше не трогать -- по умолчанию всё уже настроено правильно и указывает на локальную базу данных, установленную вместе с сервером.

-  Нажмите <cmd text="Далее"/> ещё раз -- откроется страница с данными вашего аккаунта.

-  Укажите логин и пароль, которые использовали при регистрации личного кабинета на сайте Gizmo, и нажмите <cmd text="Далее"/>.

> [!NOTE]
> 
> Данные личного кабинета нужны здесь для того, чтобы сервер мог активировать лицензию и получать обновления. Если вы ещё не зарегистрировали личный кабинет -- сделайте это в статье [«Личный кабинет»](./../../../personal-account.md) прежде, чем продолжать.

-  Когда мастер завершён, можно включить и запустить саму службу сервера.

![](./setup-wizard-2.png){width=699px height=660px}



## Расширенная настройка

Разберем все возможные параметры Мастера настроек.

### Параметры базы данных

**Создать новую базу данных** -- если включить флажок, при подключении будет создана новая База данных. Это не удалит текущую, но чтобы переключиться на нее, потребуется изменить параметры соединения.

**Тип базы данных** -- позволяет выбрать между MSSQL и PostgreSQL. По умолчанию используется MSSQL, и мы рекомендуем использовать этот вариант. Но если вы хотите подключить PostgreSQL, изучите руководство по его настройке.

**Имя узла базы данных** -- адрес, по которому доступна ваша база данных в системе. Это может быть локальный вид, имя пк или даже сетевой адрес. 

**Имя базы данных** -- название базы данных клуба, которую Gizmo создаст в SQL. Можно назвать ее как удобно, но лучше оставить стандартной.

**Тип проверки подлинности** -- как приложение будет проверять сертификат при подключении.

### Настройки подписки

**Имя пользователя** и **Пароль** -- логин или пароль вашей учетной записи на нашем сайте.

### Управление Сервисом Gizmo

**Отображаемое имя, описание и путь к исполняемому файлу** **изменить нельзя** -- это параметры, настраиваемые автоматически.

**Тип запуска** -- определяет то, как служба будет запускаться в Windows.

-  Automatic (рекомендуем) -- отложенный автоматический запуск при запуске системы. Это означает, что сервер загрузится после старта всех остальных компонентов системы, что может занять до 5 минут.

-  Manual -- требует ручного запуска сервера при каждой перезагрузке Windows.

-  Disabled -- служба отключена и не может быть запущена до изменения статуса.



## Проблемы и их решение

### «Invalid username or password» при вводе данных в настройках подписки

<img src="./setup-wizard-5.png" crop="0,0,100,100" width="252px" height="150px" float="left"/>

Вы ввели неверные учетные данные аккаунта с нашего сайта. Если не помните их, обратитесь в поддержку.







### «Cannot create SQL Server login»

<img src="./setup-wizard-3.png" crop="0,0,100,100" width="341px" height="148px" float="left"/>

Откройте **Управление сервисом Gizmo** -> Переключите режим в **Расширенный** и укажите логин/пароль, с которыми вы входите в этот аккаунт Windows. Если у вас нет пароля на аккаунте, назначьте его.



### «Неверное имя пользователя или пароль» при включении расширенного режима

<img src="./setup-wizard-6.png" crop="0,0,100,100" width="404px" height="149px" float="left"/>

Вы указали неверные учетные данные для входа в аккаунт Windows, либо пароля для этого аккаунта нет. Проверьте данные и создайте пароль, если он отсутствует.