---
order: 5
title: Gizmo Manager как приложение
---

> [!CAUTION]
> 
> **ЭТОТ РАЗДЕЛ НАХОДИТСЯ В ПРОРАБОТКЕ. ИНСТРУКЦИИ В НЕМ МОГУТ БЫТЬ НЕПОЛНЫМИ ИЛИ НЕКОРРЕКТНЫМИ.**

<html>

<style>
  html, body {
    margin: 0;
    padding: 0;
    background: #1a1e33;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }

  @media (prefers-color-scheme: light) {
    html, body {
      background: #ffffff;
    }
  }

  * {
    box-sizing: border-box;
  }

  .gx-card {
    position: relative;
    width: 100%;
    border-radius: 18px;
    overflow: hidden;
    background: #232a4a;
    background-image: linear-gradient(180deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0) 100%);
    border: none;
    box-shadow: 0 1px 0 0 rgba(255, 255, 255, 0.04) inset;
    padding: 26px 32px 28px;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }
  .gx-card .gx-glow {
    position: absolute;
    inset: -30px -44px auto -60px;
    height: 200px;
    background: radial-gradient(45% 100% at 8% 0%, rgba(82, 110, 211, 0.28) 0%, rgba(82, 110, 211, 0) 72%);
    filter: blur(2px);
    pointer-events: none;
  }
  .gx-card .gx-card-content { position: relative; }
  .gx-card .gx-kicker {
    display: flex; align-items: center; gap: 8px; margin: 0 0 14px 0;
    color: #7c93e8; font-size: 12px; line-height: 1.3; font-weight: 600;
    letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-kicker svg { flex: none; width: 15px; height: 15px; }
  .gx-card .gx-title {
    max-width: 560px; margin: 0 0 18px 0; color: #ffffff;
    font-size: clamp(22px, 3vw, 27px); line-height: 1.34; font-weight: 700; letter-spacing: -0.015em;
  }
  .gx-card .gx-accent { color: #a9bdf5; }
  .gx-card .gx-meta {
    display: flex; align-items: center; color: rgba(255, 255, 255, 0.5);
    font-size: 11.5px; line-height: 1; font-weight: 600; letter-spacing: 0.1em; text-transform: uppercase;
  }
  .gx-card .gx-meta-sep { margin: 0 12px; opacity: 0.4; }
  .gx-card .gx-meta-level { color: #86efac; }
  .gx-card .gx-meta-level.medium { color: #fde68a; }
  .gx-card .gx-meta-level.high { color: #fca5a5; }
  .gx-card .gx-desc {
    max-width: 560px; margin: 16px 0 0 0; color: rgba(255, 255, 255, 0.56);
    font-size: 13px; line-height: 1.6;
  }
</style>

<div class="gx-card">
  <div class="gx-glow"></div>
  <div class="gx-card-content">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">
      Как открыть Gizmo Manager отдельным приложением, а не вкладкой браузера
    </h2>
    <div class="gx-meta">
      <span>3-5 минут</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Низкая сложность</span>
    </div>
    <p class="gx-desc">Превратим страницу Gizmo Manager в отдельное окно на рабочем столе — с ярлыком, значком в панели задач и без адресной строки браузера.</p>
  </div>
</div>

<script>
(function () {
  var LIGHT_BG = '#ffffff';
  var DARK_BG = '#1a1e33';

  function applyBg() {
    var theme = document.documentElement.dataset.theme;
    if (theme !== 'light' && theme !== 'dark') {
      theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    var bg = theme === 'light' ? LIGHT_BG : DARK_BG;
    document.documentElement.style.backgroundColor = bg;
    document.body.style.backgroundColor = bg;
  }

  applyBg();
  new MutationObserver(applyBg).observe(document.documentElement, { attributes: true, attributeFilter: ['data-theme'] });
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyBg);
})();
</script>

</html>



> [!NOTE]
> 
> Полноценного десктопного приложения для Gizmo V3 не существует -- используется веб-архитектура, которая позволяет управлять клубом с любого устройства, где есть браузер.
>
> Поэтому мы просто установим страницу приложения из браузера -- опыт использования будет максимально близок к нативному приложению.

## Установщик

Скачайте и запустите этот установщик приложения. Он автоматически добавит Gizmo Manager в виде десктопной страницы.

## Ручная установка через браузер

Сначала выберите браузер, из которого будете устанавливать приложение. Мы рекомендуем Edge, но подойдёт любой браузер с поддержкой установки страниц в качестве веб-приложений.

Откройте в выбранном браузере страницу авторизации Gizmo Manager: `https://gizmo.local/apps/manager/signin`.

Ниже -- инструкции для двух самых популярных браузеров:

<tabs>

<tab name="Edge">

-  Нажмите **три точки в правом верхнем углу -> Другие инструменты -> Приложения -> Установить Gizmo Manager**.

![](./menedzher-kak-nativnoe-prilozhenie.png){width=1917px height=1031px}



-  Через секунду появится окно с подтверждением -- нажмите **Установить**.

![](./menedzher-kak-nativnoe-prilozhenie-2.png){width=1919px height=1033px}



-  Откроется новое окно -- это и есть приложение, которым можно пользоваться. Рекомендуем сразу включить пункты **Закрепить на панели задач**, **Закрепить на начальном экране** и **Создать ярлык на рабочем столе**.

![](./menedzher-kak-nativnoe-prilozhenie-3.png){width=1918px height=1032px}

</tab>

<tab name="Chrome">

-  Нажмите **три точки в правом верхнем углу -> Транслировать, сохранить, поделиться -> Установить приложение «Gizmo Manager»**.

![](./menedzher-kak-nativnoe-prilozhenie-4.png){width=1918px height=1030px}



-  Через секунду появится окно с подтверждением -- нажмите **Установить**.

![](./menedzher-kak-nativnoe-prilozhenie-5.png){width=1918px height=1033px}



-  Откроется новое окно -- это и есть приложение, которым можно пользоваться.

</tab>

</tabs>