---
title: Профили безопасности
order: 3
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="11" width="14" height="10" rx="2"/><path d="M8 11V7a4 4 0 0 1 8 0v4"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как настроить профиль безопасности станций</h2>
    <div class="gx-meta">
      <span>15–20 минут</span>
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

Без профиля безопасности гость может делать с игровым пк что угодно, вплоть до отключения самой оболочки -- это стандартные возможности Windows, и заблокировать их можно только ограничив доступ к соответствующим настройкам системы. Профиль безопасности -- набор таких ограничений, который назначается группе станций целиком.

## Игровые зоны и группы станций

Игровые зоны -- это залы вашего клуба, которые отличаются ценами, оформлением и другими параметрами. Например, Standart, VIP и PS5 -- это три игровые зоны. Прежде чем настраивать профиль безопасности, определитесь с зонами -- профиль назначается именно на группу станций.

-  Перейдите в <cmd text="Станции"/> -> <cmd text="Группы станций"/>. По умолчанию там уже есть несколько групп -- их можно переименовать, удалить или создать свои.

-  Открыв группу, укажите филиал, профиль оформления, группу приложений и гостевую группу по умолчанию.

![](./../../instalation/instalation-4.png){width=1919px height=1079px}

Создайте группу под каждую игровую зону клуба -- например, для зон Standart, VIP и Консоли получится три группы станций.

![](./../../instalation/instalation-5.png){width=1919px height=1079px}

## Создание профиля безопасности

Откройте <cmd text="Станции"/> -> <cmd text="Профили безопасности"/> и создайте профиль. Параметры можно включать по своему усмотрению, но вот что мы рекомендуем большинству клубов.

**Общие ограничения оболочки**

-  Назовите профиль.

-  Включите **Скрыть меню «Пуск»**, **Запретить сворачивать оболочку** и **Ограничение переключения между рабочими столами**.

**Файловая система**

В разделе **Файловая система** отметьте все буквы дисков -- так разделы будут скрыты и заблокированы для гостя.

**Политики**

В разделе **Политики** включите все параметры безопасности одной кнопкой.

Это максимальный уровень блокировки -- он закрывает гостю почти всё за пределами оболочки. Через профили можно так же блокировать конкретные приложения, процессы и даже сайты в браузере гостя.

![](./../../instalation/instalation-19.png){width=1919px height=1079px}

## Как назначить профиль станциям

Профиль безопасности не применяется сам по себе -- его нужно привязать к группе станций. Перейдите в <cmd text="Станции"/> -> <cmd text="Группы станций"/> -- откройте каждую группу и привяжите к ней профиль безопасности.

> [!TIP]
> 
> Ограничения не безвозвратны -- их всегда можно снять, отключив безопасность на пк или переведя его в режим администратора.