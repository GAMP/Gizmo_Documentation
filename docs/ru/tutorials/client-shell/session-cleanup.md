---
title: Очистка сессий игр и лаунчеров
order: 4
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"/><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как автоматически подчищать сессии игр и лаунчеров между гостями</h2>
    <div class="gx-meta">
      <span>10 минут</span>
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

Знакомая ситуация: гость ушёл, за пк садится следующий -- и обнаруживает чужой Steam-аккаунт всё ещё в сети, с сохранённой библиотекой и, возможно, привязанной картой. В лучшем случае это неловко, в худшем -- повод для реальной претензии к клубу. Гости почти никогда не выходят из игр и лаунчеров сами, и рассчитывать на их сознательность бессмысленно -- разумнее настроить автоматическую очистку один раз и забыть об этой проблеме.

Настроить это один раз при разворачивании клуба гораздо проще, чем потом объяснять недовольному гостю, почему в его сессии обнаружился чужой прогресс в игре.

## Шаг 1. Включите перезагрузку при выходе из системы

Главный инструмент для этого уже есть в общих настройках оболочки.

1. Откройте <cmd text="Настройки"/> -> <cmd text="Клиент"/> -> <cmd text="Оболочка"/> -> **Действие при выходе из системы**.
2. Выберите вариант **Перезагрузка**. Компьютер будет полностью перезапускаться после завершения сеанса гостя -- вместе с этим сбрасываются все запущенные приложения и локальные сессии лаунчеров, которые не сохраняют авторизацию отдельно от системы.

Рекомендуем выбирать именно **Перезагрузку**, а не более мягкие варианты вроде «Закрытие всех программ» -- разница на первый взгляд небольшая, но именно она отделяет чистый пк от пк с чужими открытыми сессиями.

> [!WARNING]
>
> Некоторые лаунчеры (в первую очередь Steam, если у него включён режим «оставаться в сети» или автовход) могут сохранять авторизацию даже после перезагрузки пк -- в этом случае одной перезагрузки недостаточно, и проблема с чужими аккаунтами вернётся снова.

## Шаг 2. Проверьте смежные настройки клиентских сессий

-  **Завершение ожидающих сеансов** и **Выход из системы отключенных клиентов** в <cmd text="Настройки"/> -> <cmd text="Клиент"/> -> <cmd text="Оболочка"/>, блок **Сеанс пользователя**, -- отвечают за автоматическое завершение сеанса при потере связи между сервером и клиентом, а не за очистку самих игровых лаунчеров, но тоже влияют на то, как быстро закрывается «зависшая» сессия гостя, если что-то в сети пошло не так.

## Шаг 3. Добавьте задачи очистки на выход пользователя

Для лаунчеров, которые помнят вход даже после перезагрузки, настройте скрипт, который удаляет сохранённую авторизацию при завершении сеанса гостя.

1. Откройте <cmd text="Станции"/> -> <cmd text="Задачи"/> и создайте задачу типа **Скрипт**. Подробнее -- в статье [«Задачи»](./../../usage/gizmo-manager/stations/zadachi.md).
2. Выберите **Тип сценария**: **Пакетный (Batch)** для команд или **Скрипт реестра** для `.reg`-скриптов, и вставьте скрипт для нужного лаунчера из списка ниже.
3. Включите **Скрытое выполнение задачи**.
4. На вкладке **Активации задач** назначьте задачу на событие **Выход пользователя** -- см. статью [«Активации задач»](./../../usage/gizmo-manager/stations/task-activations.md).

> [!WARNING]
>
> Скрипты удаляют файлы на клиентском пк. Проверьте пути -- особенно если лаунчер установлен не в папку по умолчанию -- и сначала запустите задачу на одном пк.

<note type="hotfixes" title="Steam" collapsed="true">

Замените `D:\Games\Steam` на путь к папке Steam на ваших пк.

```
set "Steam=D:\Games\Steam"
taskkill /F /IM "steam.exe"
taskkill /F /IM "steamwebhelper.exe"
del /S /Q "%Steam%\config\*.vdf"
rmdir /S /Q "%Steam%\userdata"
rmdir /S /Q "%LocalAppData%\Steam\htmlcache"
```

</note>

<note type="hotfixes" title="Epic Games Launcher" collapsed="true">

```
cd /d "%LocalAppData%\EpicGamesLauncher\Saved\Config\WindowsEditor\"
type GameUserSettings.ini | findstr /i /v "Data" > temp.txt
del GameUserSettings.ini
rename temp.txt GameUserSettings.ini
```

В некоторых версиях лаунчера файл лежит в папке `Windows` вместо `WindowsEditor` -- проверьте путь на своих пк.

</note>

<note type="hotfixes" title="Battle.net" collapsed="true">

```
cd /d "%AppData%\Battle.net"
type Battle.net.config | findstr /i /v "SavedAccountNames" > temp.txt
del Battle.net.config
rename temp.txt Battle.net.config
```

</note>

<note type="hotfixes" title="Riot Client (Valorant, League of Legends)" collapsed="true">

```
rmdir /S /Q "%LocalAppData%\Riot Games\Riot Client"
```

</note>

<note type="hotfixes" title="VK Play (Warface и др.)" collapsed="true">

Скрипт рассчитан на лаунчер, установленный в папку по умолчанию `%LocalAppData%\GameCenter`.

```
cd /d "%LocalAppData%\GameCenter"
type GameCenter.ini | findstr /i /v "MyComUserLogin MyComUserMagic2 MyComUserMagic4 MyComUserUid CurrentUserName CurrentUserNick" > temp.txt
del GameCenter.ini
rename temp.txt GameCenter.ini
```

</note>

<note type="hotfixes" title="Wargaming и Lesta" collapsed="true">

```
rmdir /S /Q "%AppData%\Wargaming.net\WorldOfTanks"
del /S /Q "%AppData%\Wargaming.net\GameCenter\user_info.xml"
```

</note>

<note type="hotfixes" title="FACEIT и FACEIT AC" collapsed="true">

FACEIT -- **Пакетный (Batch)**:

```
rmdir /S /Q "%AppData%\FACEIT"
```

FACEIT AC -- **Скрипт реестра**:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\FACEIT\FACEIT Client]
"token"=""
```

</note>

<note type="hotfixes" title="Discord" collapsed="true">

```
taskkill /F /IM "Discord.exe"
rmdir /S /Q "%AppData%\Discord"
```

</note>

<note type="hotfixes" title="TeamSpeak 3 и TeamSpeak 6" collapsed="true">

TeamSpeak 3:

```
taskkill /F /IM ts3client_win64.exe
del /F /Q "%AppData%\TS3Client\settings.db"
```

TeamSpeak 6:

```
taskkill /F /IM TeamSpeak.exe
del /F /Q "%AppData%\TeamSpeak\Default\settings.db"
```

</note>

<note type="hotfixes" title="Google Chrome" collapsed="true">

```
del /S /Q "%LocalAppData%\Google\Chrome\User Data\Default\*"
del /S /Q "%LocalAppData%\Google\Chrome\User Data\Default\Cache\*"
```

</note>

<note type="hotfixes" title="Другие игры и программы" collapsed="true">

Arena Breakout: Infinite:

```
taskkill /F /IM "arena_breakout_infinite_launcher.exe"
rmdir /S /Q "%AppData%\arena_breakout_infinite_launcher"
```

Delta Force:

```
taskkill /F /IM "df_launcher_global.exe"
rmdir /S /Q "%AppData%\df_launcher_global"
for /d %%i in ("%AppData%\df_launcher_global_*") do rmdir /S /Q "%%i"
```

Genshin Impact -- **Скрипт реестра**:

```
Windows Registry Editor Version 5.00

[HKEY_CURRENT_USER\Software\miHoYo\Genshin Impact]
"MIHOYOSDK_ADL_PROD_OVERSEA_h1158948810"=""
```

Roblox:

```
taskkill /F /IM "RobloxPlayerBeta.exe"
rmdir /S /Q "%LocalAppData%\Roblox\LocalStorage"
```

4Game:

```
rmdir /S /Q "%LocalAppData%\4Game\4game_cis\CEF\global\Local Storage\leveldb"
del /F /Q "%ProgramData%\4Game\4game_cis\accounts-live.db"
```

ExitLag:

```
taskkill /F /IM "ExitLag.exe"
rmdir /S /Q "%LocalAppData%\ExitLag"
```

</note>

### Где лаунчеры хранят авторизацию

Если нужного лаунчера нет в списке, найдите файл, в котором он хранит вход, и удаляйте или очищайте его задачей:

| Лаунчер или программа | Где хранится авторизация |
|---|---|
| Steam | `<папка Steam>\config\loginusers.vdf` |
| Epic Games Launcher | `%LocalAppData%\EpicGamesLauncher\Saved\Config\Windows\GameUserSettings.ini` (или папка `WindowsEditor`) |
| Battle.net | `%AppData%\Battle.net\Battle.net.config` |
| Riot Client | `%LocalAppData%\Riot Games\Riot Client\Data\RiotClientPrivateSettings.yaml` |
| EA app (EA Desktop) | `%LocalAppData%\Electronic Arts\EA Desktop\cookie.ini` |
| Ubisoft Connect | `%LocalAppData%\Ubisoft Game Launcher\settings.yml` |
| Wargaming Game Center | `%AppData%\Wargaming.net\GameCenter\user_info.xml` |
| Rockstar Games Launcher | `%UserProfile%\Documents\Rockstar Games\Social Club\Profiles` |
| Minecraft | `%AppData%\.minecraft\launcher_accounts.json` |
| Discord | `%AppData%\Discord` |
| FACEIT AC | Реестр: `HKEY_CURRENT_USER\Software\FACEIT\FACEIT Client` |

## Результат

- После завершения сеанса гостя пк полностью перезагружается: запущенные приложения и локальные сессии лаунчеров сбрасываются, и следующий гость садится за чистый пк.
- «Зависшие» сессии при потере связи между сервером и клиентом завершаются автоматически.
- Задачи очистки удаляют сохранённую авторизацию лаунчеров, которые помнят вход после перезагрузки.
