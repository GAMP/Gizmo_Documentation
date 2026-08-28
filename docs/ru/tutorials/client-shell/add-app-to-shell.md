---
title: Как добавить игру в клиентскую оболочку
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как добавить игры и программы в клиентскую оболочку</h2>
    <div class="gx-meta">
      <span>20–30 минут</span>
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

Приложение в Gizmo -- это игра или программа, которую гость может запустить из клиентской оболочки. Настраивается в <cmd text="Станции"/> -> <cmd text="Приложения"/> и состоит из двух связанных, но разных сущностей:

-  **Карточка приложения** -- то, что видит гость: иконка, название, категория. Создаётся один раз.

-  **Исполняемый файл** внутри карточки -- то, что реально запускается на клиентском пк: путь до игры и параметры запуска. Одной карточке можно назначить несколько исполняемых файлов -- например, если игра установлена по разным путям на разных пк клуба (бывает, если образы клиентских пк собирали в разное время или разные люди).

Так разделено специально: обложку и название не нужно настраивать заново для каждого пк, а путь запуска можно гибко подстроить под конкретные машины.

Перейдите в <cmd text="Станции"/> -> <cmd text="Приложения"/> -> <cmd text="Создать приложение"/>.

## Шаг 1. Создайте карточку приложения

-  **Название** -- то, что видит гость в оболочке. Добавьте и обложку -- за иконками и обложками для игр из Steam удобно ходить на [steamgriddb.com](https://www.steamgriddb.com), там уже готовы обложки почти для всего, что есть в Steam.

-  **Группа по умолчанию** и **категория** в разделе **Организация приложений** -- определяют, куда приложение попадёт в оболочке и как его можно будет отфильтровать.

![](./../../instalation/instalation-13.png){width=608px height=337px}

-  Сохраните карточку и откройте её заново -- теперь в неё можно добавить исполняемый файл.

## Шаг 2. Добавьте исполняемый файл

Нажмите **\+ Создать исполняемый файл** внутри карточки и заполните:

-  **Подпись** -- название ярлыка, которое увидит гость, и иконка для него (тоже можно взять с steamgriddb.com).

-  **Доступность** -- филиалы, в которых этот ярлык должен появиться. Без включения доступности для нужного филиала ярлык нигде не будет виден, и вы потом полчаса будете искать, что не так.

![](./../../instalation/instalation-18.png){width=805px height=173px}

-  **Путь к исполняемому файлу** -- путь на клиентском пк (не на сервере), по которому запускается приложение. **Рабочий каталог** обычно совпадает с этим же путём.

> [!TIP]
> 
> Как найти путь к игре, на примере Steam:
>
> 1. Найдите ярлык на рабочем столе, нажмите правой кнопкой мыши -> «Перейти к расположению файла».
>
> ![](./../../instalation/instalation-14.png){width=456px height=192px}
>
> 1. Откроется папка с игрой -- скопируйте путь из адресной строки проводника, например `C:\Program Files (x86)\Steam`.
>
> ![](./../../instalation/instalation-15.png){width=1122px height=330px}
>
> 1. В поля **Путь к исполняемому файлу** и **Рабочий каталог** впишите этот путь, добавив в конце название запускаемого файла: `C:\Program Files (x86)\Steam\steam.exe`.
>
> ![](./../../instalation/instalation-16.png){width=807px height=389px}

## Шаг 3. Настройте параметры запуска

В разделе **Организация параметров запуска** рекомендуем включить **Auto Launch** и **Monitor Children** -- для подавляющего большинства игр этого достаточно, чтобы всё работало гладко.

-  **Auto Launch** -- параметр поведения запуска приложения из оболочки. Уточнение: это не автозапуск приложения при включении пк, а другая функция.

-  **Monitor Children** -- позволяет Gizmo Client отслеживать дочерние процессы, запущенные приложением (например, отдельные лаунчеры или античит-модули), а не только сам исполняемый файл.
![](./../../instalation/instalation-17.png){width=807px height=349px}

Сохраните настройки -- приложение готово.

## Если приложение не появилось у гостя

Приложение появится в оболочке на всех клиентских пк, где оно установлено по указанному пути. Если путь не совпадает хотя бы на одном пк -- ярлык там не будет отображаться. Первым делом при проблемах проверяйте именно совпадение пути установки игры с путём, указанным в исполняемом файле -- это причина девяти проблем из десяти.

## Когда игр становится много

Если вы добавляете не одну-две игры, а весь каталог клуба (а это легко доходит до полусотни позиций), не пытайтесь сделать всё за один присест. Разбейте на категории заранее -- шутеры, стратегии, спортивные симуляторы -- ещё до того, как начнёте создавать карточки, и заполняйте группу по умолчанию сразу правильно. Переразбирать полсотни уже созданных приложений по категориям задним числом гораздо дольше, чем сделать это по ходу.