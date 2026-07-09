---
order: 0.8
title: Пользовательское соглашение
---

<html>

<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<style>
  :root {
    --gz-primary: #526ed3;
    --gz-primary-light: #6c86e2;
    --gz-navy-900: #0e1524;
    --gz-navy-800: #17213c;
  }

  html,
  body {
    margin: 0;
    padding: 0;
    background: #1a1e33;
    font-family: 'Segoe UI', system-ui, -apple-system, Roboto, Arial, sans-serif;
  }

  @media (prefers-color-scheme: light) {
    html,
    body {
      background: #ffffff;
    }
  }

  * {
    box-sizing: border-box;
  }

  .gx-hero {
    position: relative;
    width: 100%;
    padding: 34px 38px;
    border-radius: 20px;
    overflow: hidden;
    color: #ffffff;
    border: 1px solid rgba(255,255,255,0.08);
    background: linear-gradient(135deg, var(--gz-navy-900) 0%, var(--gz-navy-800) 60%, #1c2c57 100%);
    box-shadow: inset 0 3px 0 0 var(--gz-primary);
  }

  .gx-kicker {
    display: flex;
    align-items: center;
    gap: 8px;
    margin: 0 0 14px 0;
    color: rgba(255,255,255,0.72);
    font-size: 13px;
    line-height: 1.3;
    font-weight: 600;
    letter-spacing: 0.04em;
    text-transform: uppercase;
  }

  .gx-kicker svg {
    flex: none;
    width: 16px;
    height: 16px;
    color: var(--gz-primary-light);
  }

  .gx-title {
    max-width: 920px;
    margin: 0;
    color: #ffffff;
    font-size: clamp(24px, 3.4vw, 32px);
    line-height: 1.3;
    font-weight: 700;
    letter-spacing: -0.015em;
  }

  .gx-title .gx-accent {
    color: #9db4f0;
  }

  .gx-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    margin-top: 20px;
  }

  .gx-tag {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    min-height: 28px;
    padding: 5px 12px;
    border-radius: 999px;
    border: 1px solid rgba(255,255,255,0.16);
    background: rgba(255,255,255,0.08);
    color: #d7deea;
    font-size: 13px;
    line-height: 1;
    font-weight: 500;
  }

  .gx-tag.low {
    border-color: rgba(74, 222, 128, 0.4);
    background: rgba(74, 222, 128, 0.12);
    color: #86efac;
  }

  .gx-tag.medium {
    border-color: rgba(250, 204, 21, 0.4);
    background: rgba(250, 204, 21, 0.12);
    color: #fde68a;
  }

  .gx-tag.high {
    border-color: rgba(248, 113, 113, 0.4);
    background: rgba(248, 113, 113, 0.12);
    color: #fca5a5;
  }

  @media (max-width: 640px) {
    .gx-hero {
      padding: 24px;
    }
  }
</style>
</head>

<body>
  <section class="gx-hero">
    <p class="gx-kicker">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text-icon lucide-file-text"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/><path d="M10 9H8"/><path d="M16 13H8"/><path d="M16 17H8"/></svg>
      В этом блоке вы узнаете
    </p>

    <h1 class="gx-title">
      Как настроить создать и оформить пользовательское соглашение для клуба в <span class="gx-accent">Gizmo</span>
    </h1>

    <div class="gx-tags">
      <span class="gx-tag">3–5 минут</span>
      <span class="gx-tag low">Низкая сложность</span>
    </div>
  </section>

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
</body>

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