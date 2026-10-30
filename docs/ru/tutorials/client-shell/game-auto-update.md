---
title: Как настроить автоматическое обновление игр
order: 1.6
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"/><path d="M21 3v5h-5"/><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"/><path d="M8 16H3v5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как обновлять игры на всех клиентских пк автоматически</h2>
    <div class="gx-meta">
      <span>10–15 минут</span>
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

Вышел патч к популярной игре -- и обновлять её вручную на каждом из двадцати пк клуба долго, а гости тем временем не могут зайти на сервер со старой версией. Gizmo позволяет обновить игру один раз и разнести обновление по клиентским пк автоматически.

Для этого используются **профили развёртывания**. Вы обновляете игру в папке на сервере, а Gizmo сам сверяет её с папкой на клиентском пк и копирует только изменившиеся файлы, а при необходимости удаляет на клиенте файлы, которых больше нет в источнике. Развёртывание выполняется перед запуском игры, к исполняемому файлу которой прикреплён профиль.

## Шаг 1. Подготовьте актуальную версию игры на сервере

Держите актуальную версию игры в отдельной папке на пк с Gizmo Server -- именно её Gizmo будет использовать как источник для клиентских пк. Когда выходит обновление, обновите игру в этой папке.

Как организовать папку-источник и обновлять в ней игру:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 2. Ограничьте заполнение диска на клиентских пк

Чтобы обновление не заполнило диск клиентского пк, задайте минимальный запас свободного места:

1. Откройте **Настройки -> Клиент -> Файловая система**, блок **Развёртывание**.
2. Укажите значение параметра **Всегда оставлять % свободного места на диске при использовании профилей развёртывания**.

Если после развёртывания свободного места останется меньше указанного значения, операция будет прервана. Подробнее -- в статье [«Файловая система»](./../../configure/client/file-system.md).

## Шаг 3. Создайте профиль развёртывания

1. Откройте **Станции -> Приложения**, затем карточку игры и её исполняемый файл.
2. Перейдите на вкладку **Развёртывания** и нажмите **+ Создать новую установку** -- откроется карточка развёртывания. Если подходящий профиль уже создан, прикрепите его в поле **Выберите развёртывание**.
3. Заполните карточку:
   - **Имя** -- название профиля развёртывания;
   - **Источник** -- папка с актуальной версией игры на пк с Gizmo Server (шаг 1);
   - **Пункт назначения** -- папка игры на клиентском пк, с которой сверяется источник и куда копируются отличающиеся файлы.
4. Выберите **Режим сравнения**. Чем тщательнее сравнение, тем меньше вероятность ошибки, но тем медленнее обновление:
   - **Быстрый** -- сверяет файлы и папки только по длине и атрибутам;
   - **Стандарт** -- по времени последнего изменения, длине и атрибутам;
   - **Стандартный без атрибутов** -- по времени изменения и длине;
   - **Тщательный** -- самый медленный и самый надёжный: дополнительно считает и сверяет хеш-сумму файлов.
5. При необходимости ограничьте состав развёртывания полями **Включить файлы**, **Включить каталоги**, **Исключить файлы** и **Исключить каталоги** -- поддерживаются групповые символы, элементы разделяются «;». В поле **Реестр** можно указать скрипт реестра, который выполнится при развёртывании.
6. Сохраните карточку развёртывания и исполняемый файл.

Описание всех полей -- в статье [«Карточка развёртывания»](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/razvertyvaniya.md).

> [!TIP]
>
> Если перед развёртыванием нужно выполнить скрипт, назначьте его на событие **Задачи до развёртывания** на вкладке **Задачи** того же исполняемого файла. Подробнее -- в статье [«Карточка редактирования исполняемого файла»](./../../usage/gizmo-manager/stations/prilozheniya/kartochka-redaktirovaniya-ispolnyaemogo-fayla/_index.md).

## Шаг 4. Включите запуск игры сразу после обновления

На вкладке **Главная** исполняемого файла, в блоке **Организация параметров запуска**, включите **Auto Launch**. Тогда игра запустится сразу после развёртывания. Если параметр выключен, гостю придётся нажать дважды: первый раз -- чтобы выполнить развёртывание, второй -- чтобы подтвердить запуск.

## Результат

- Когда гость запускает игру, Gizmo сначала сверяет папку игры на пк с папкой на сервере и копирует только изменившиеся файлы.
- Обновлять игру нужно один раз -- в папке-источнике на сервере; клиентские пк получат обновление при следующем запуске.
- Если на диске клиентского пк не хватает места с учётом заданного запаса, развёртывание прерывается.

Как добавить игру и создать исполняемый файл -- в инструкции [«Как добавить игру в клиентскую оболочку»](./add-app-to-shell.md). Как сохранять прогресс гостей между сеансами -- в инструкции [«Как сохранять прогресс игр гостей между сеансами»](./personal-files.md).
