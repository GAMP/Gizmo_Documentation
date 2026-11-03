---
title: Как установить SSL-сертификат на сервер
order: 3.5
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как установить собственный SSL-сертификат и убрать ошибку сертификата</h2>
    <div class="gx-meta">
      <span>5–10 минут</span>
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

Gizmo Server и Gizmo Manager доступны по сети по протоколам http и https, и для работы по https нужен SSL-сертификат. По умолчанию сервер использует встроенный самоподписанный сертификат -- браузер может ему не доверять и показывать ошибку сертификата при подключении к серверу.

Чтобы ошибка ушла, установите на сервер собственный доверенный SSL-сертификат в формате PFX. Делается это один раз в настройках сети сервера.

## Шаг 1. Подготовьте сертификат

Понадобится файл SSL-сертификата в формате PFX. Где получить сертификат и как подготовить файл PFX:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 2. Проверьте протокол и имя хоста

1. Откройте **Настройки -> Сервер -> Сеть**, блок **Настройки сетевого интерфейса**.
2. Убедитесь, что включён протокол https. По умолчанию выбраны http и https на портах 80 и 443 соответственно.
3. Проверьте поле **Имя хоста** -- доменное имя, по которому сервер доступен в сети. Значение по умолчанию -- «gizmo.local» (доступ только в локальной сети).

> [!WARNING]
>
> Если Gizmo Server запущен через Docker, настройки портов сервером игнорируются, а Gizmo Manager и Gizmo Server будут недоступны по доменному имени по умолчанию (gizmo.local) -- это особенность работы Docker-контейнеров.

Какие значения подходят для имени хоста и как настроить доступ к серверу по сети -- в инструкции [«Доступ к Gizmo по сети»](./network-access.md).

## Шаг 3. Загрузите сертификат

1. На той же странице **Настройки -> Сервер -> Сеть** найдите блок **Сертификат PFX**.
2. Нажмите **Обзор** и выберите файл сертификата.

> [!NOTE]
>
> Чтобы вернуться к встроенному самоподписанному сертификату, нажмите **Очистить** в том же блоке.

## Шаг 4. Перезагрузите Gizmo Server

Новый сертификат применится только после перезагрузки Gizmo Server. Пока сервер перезапускается, клиентские пк теряют с ним связь, поэтому выберите время, когда в клубе меньше всего гостей.

Как перезапустить сервер в каждом режиме работы и как подготовить к этому сеансы гостей -- в инструкции [«Как перезапустить сервер Gizmo»](./../operations/server-restart.md).

## Шаг 5. Проверьте подключение

Откройте Gizmo Manager в браузере по адресу с вашим именем хоста -- например, `https://gizmo.local/apps/manager/signin` -- и убедитесь, что браузер больше не показывает ошибку сертификата.

## Результат

- Gizmo Server работает по https с вашим доверенным сертификатом вместо встроенного самоподписанного.
- Браузер больше не показывает ошибку сертификата при подключении к серверу.

Описание всех настроек сети сервера -- в статье [«Сеть»](./../../configure/server/network.md) раздела «Настройка». Если клиентские пк не подключаются к серверу по другим причинам -- смотрите инструкцию [«Проблемы подключения клиентских пк»](./client-connection-troubleshooting.md).
