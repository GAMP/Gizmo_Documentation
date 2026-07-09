---
order: 0.8
title: Пользовательское соглашение
---

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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">
      Как настроить пользовательское соглашение для ваших клиентов в <span class="gx-accent">Gizmo</span>
    </h2>
    <div class="gx-meta">
      <span>3–5 минут</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Низкая сложность</span>
    </div>
    <p class="gx-desc">Разберём, где включить соглашение, как оформить его текст и сделать обязательным для клиента при регистрации.</p>
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



**Пользовательское соглашение -- это условия предоставления услуг вашего заведения, с которыми клиент обязан согласиться при регистрации или первом входе в систему. Использовать его можно не только для юридических документов, но и чтобы показать гостю правила клуба, либо вовсе сделать приветственное окно интерактивным, добавив свои кнопки или изображения.**

## Как настроить

-  Откройте **Gizmo Manager** -> **Настройки** -> **Организация** -> **Пользовательские соглашения**.

-  В разделе  нажмите **Создать пользовательское соглашение**.

![](./nastroyka-rele-ot-sonoff-10.png){width=1919px height=1079px}



-  Заполните заголовок и текст соглашения. Вы можете менять его через удобный редактор, либо переключиться в режим просмотра кода, чтобы использовать HTML формат -- для этого нажмите на кнопку <icon code="code-xml"/>

> [!TIP]
> ### В чем плюсы HTML формата?
> HTML код позволит вам создать полноценную веб страницу в пользовательском соглашении. Это открывает любые возможности в плане оформления, интерактивности и соответствия документа брендбуку клуба.

-  В пункте **Согласие** выберите тип появления пользовательского соглашения.

<table header="none">
<tr>
<td>

**Обязательно**

</td>
<td>

*Клиент будет обязан согласиться с офертой при регистрации или первом входе в аккаунт.*

</td>
</tr>
<tr>
<td>

**Необязательно**

</td>
<td>

*Клиент может закрыть окно оферты, не соглашаясь с ней.*

</td>
</tr>
<tr>
<td>

**Показывать всегда**

</td>
<td>

*Соглашение будет требоваться не только при регистрации, но и **при каждом** входе в аккаунт*

</td>
</tr>
</table>

-  **Сохраните** изменения.



**Готово -- соглашение сразу начнёт применяться ко всем новым клиентам.**