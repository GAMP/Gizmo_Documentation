---
order: 1
title: Как добавить игру в клиентскую оболочку
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как добавить игры и программы в клиентскую оболочку</h2>
    <div class="gx-meta">
      <span>15–25 минут</span>
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

Оболочка Gizmo Client -- это красивая витрина, пока в ней нечего запускать. Ставить игры на клиентские пк вы, конечно, будете как обычно, через Steam, Epic или любой другой лаунчер -- но чтобы гость видел их прямо в интерфейсе клуба и запускал одним кликом, каждую игру нужно добавить в Gizmo Manager как приложение. Разберём это на примере Steam-игры -- с любым другим лаунчером принцип точно такой же.

## Из чего состоит приложение

Каждое приложение в Gizmo -- это две отдельные сущности:

-  **Карточка приложения** -- то, что видит гость: иконка, название, категория. Создаётся один раз.

-  **Исполняемый файл** внутри карточки -- то, что реально запускается на клиентском пк: путь до игры и параметры запуска. Одной карточке можно назначить несколько исполняемых файлов -- например, если игра установлена по разным путям на разных пк клуба (бывает, если образы клиентских пк собирали в разное время или разные люди).

Так разделено специально: обложку и название не нужно настраивать заново для каждого пк, а путь запуска можно гибко подстроить под конкретные машины.

## Шаг 1. Создайте карточку приложения

Перейдите в <cmd text="Станции"/> -> <cmd text="Приложения"/> -> <cmd text="Создать приложение"/>.

-  Укажите название, которое увидит гость, и добавьте обложку -- за иконками и обложками для игр из Steam удобно ходить на [steamgriddb.com](https://www.steamgriddb.com), там уже готовы обложки почти для всего, что есть в Steam.

-  В разделе **Организация приложений** укажите группу по умолчанию и категорию.

-  Сохраните карточку и откройте её заново -- теперь в неё можно добавить исполняемый файл.

## Шаг 2. Добавьте исполняемый файл

Нажмите **\+ Создать исполняемый файл** внутри карточки и заполните:

-  **Подпись** -- название ярлыка, которое увидит гость, и иконка для него (тоже можно взять с steamgriddb.com).

-  **Доступность** -- обязательно включите её для нужного филиала, иначе ярлык нигде не появится, и вы потом полчаса будете искать, что не так.

-  **Путь к исполняемому файлу** -- путь, по которому игра установлена на клиентских пк (не на сервере).

> [!TIP]
> 
> Как найти путь к игре, на примере Steam:
>
> 1. Найдите ярлык на рабочем столе, нажмите правой кнопкой мыши -> «Перейти к расположению файла».
>
> 1. Откроется папка с игрой -- скопируйте путь из адресной строки проводника, например `C:\Program Files (x86)\Steam`.
>
> 1. В поля **Путь к исполняемому файлу** и **Рабочий каталог** впишите этот путь, добавив в конце название запускаемого файла: `C:\Program Files (x86)\Steam\steam.exe`.

## Шаг 3. Настройте параметры запуска

В разделе **Организация параметров запуска** рекомендуем включить **Auto Launch** и **Monitor Children** -- для подавляющего большинства игр этого достаточно, чтобы всё работало гладко.

Полное описание того, за что отвечает каждый параметр -- в статье [«Карточка приложения»](./apps-card.md).

## Если приложение не появилось у гостя

Приложение появится в оболочке на всех клиентских пк, где оно установлено по указанному пути. Если путь не совпадает хотя бы на одном пк -- ярлык там не будет отображаться. Первым делом при проблемах проверяйте именно совпадение пути установки игры с путём, указанным в исполняемом файле -- это причина девяти проблем из десяти.

## Когда игр становится много

Если вы добавляете не одну-две игры, а весь каталог клуба (а это легко доходит до полусотни позиций), не пытайтесь сделать всё за один присест. Разбейте на категории заранее -- шутеры, стратегии, спортивные симуляторы -- ещё до того, как начнёте создавать карточки, и заполняйте группу по умолчанию сразу правильно. Переразбирать полсотни уже созданных приложений по категориям задним числом гораздо дольше, чем сделать это по ходу.

Общий процесс первоначальной настройки приложений при разворачивании клуба также описан в статье [«Установка»](./../../instalation/_index.md), в разделе «Оболочка».
