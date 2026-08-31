---
title: Доступ к Gizmo по сети
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как открыть Gizmo Manager с любого пк в клубе</h2>
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

Со стойки администратора Gizmo Manager открывается по адресу `gizmo.local` -- и это работает без всякой магии просто потому, что сервер стоит в паре метров от вас, на той же машине или в той же локальной сети с настроенным по умолчанию именем. Но рано или поздно вам понадобится зайти в Manager с другого пк -- например, второй администратор хочет открыть карту клуба со своего места, не отходя от кассы. Или вы подключаете устройство, которому имя `gizmo.local` ничего не говорит, вроде Companion на кассе. И тут выясняется, что нужен настоящий адрес сервера в сети -- его локальный IP.

## Как узнать локальный IP сервера

<tabs>

<tab name="Через интерфейс Windows">

-  Нажмите правой кнопкой мыши по иконке сети в правом нижнем углу экрана -> Параметры сети и Интернета

</tab>

<tab name="Консольное приложение">

На пк, где установлен Gizmo Server (Windows):

-  Откройте `cmd` (Win + R, введите `cmd`, нажмите Enter).

-  Введите команду `ipconfig` и нажмите Enter.

-  Найдите строку **IPv4-адрес** в разделе вашего активного сетевого адаптера -- обычно это что-то вроде `192.168.1.25`.

Это и есть локальный IP-адрес сервера в вашей сети -- запишите его, он пригодится в паре следующих шагов.

</tab>

</tabs>



## Как зайти в Gizmo Manager с другого пк

На любом другом пк, подключённом к той же локальной сети (той же Wi-Fi или тому же роутеру, что и сервер), откройте в браузере:

```
http://<локальный IP сервера>/apps/manager/signin
```

Например, `http://192.168.1.25/apps/manager/signin`.

> [!WARNING]
> 
> Это сработает, только если оба пк находятся в одной локальной сети. Если клуб разбит на разные сегменты сети (VLAN) или сервер работает в Docker, потребуется дополнительная настройка -- полный разбор параметров сети, доменных имён и портов есть в статье [«Сеть»](./../../configure/server/network.md).

## Тот же IP пригодится для Companion

При настройке Gizmo Companion спрашивают именно этот адрес -- в его интерфейсе это поле **Имя хоста**, а порт по умолчанию -- 80 (если вы, конечно, не меняли протоколы и порты в настройках сети сервера). Так что если уже узнали IP для входа в Manager с другого пк -- для Companion его тоже хватит, искать второй раз не придётся.

> [!TIP]
> 
> Если IP-адрес сервера со временем меняется (например, роутер выдаёт его динамически, и после перезагрузки он уже другой), удобнее один раз