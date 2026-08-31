---
title: Резервное копирование в облако
order: 2
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как хранить резервные копии не только на сервере</h2>
    <div class="gx-meta">
      <span>10 минут</span>
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

Встроенное резервное копирование Gizmo Server исправно сохраняет копии базы данных -- но локально, на диске самого сервера (подробно -- в статье [«Резервная копия»](./../../configure/server/backup.md)). Это отлично защищает от повреждения базы данных: файл слетел, обновление пошло не так, кто-то случайно почистил не ту папку -- копия рядом, восстановились и работаем дальше. Но представьте другой сценарий: сгорел блок питания и вместе с ним диск, или сервер просто украли из клуба вместе со всеми копиями внутри. В этом случае локальные копии бесполезны -- они сгорели или уехали вместе с сервером.

## Идея решения

Отдельной облачной функции резервного копирования в Gizmo пока нет, но собрать её самостоятельно проще, чем кажется -- нужно просто переиспользовать уже существующую настройку. **Путь хранения резервной копии на сервере** можно указать не на системный диск, а в папку, которая синхронизируется с облаком. Дальше всю грязную работу сделает облачный клиент, а вам останется только один раз всё настроить.

## Как это сделать

-  Установите на сервере клиент любого облачного хранилища с локальной синхронизацией папки -- подойдёт Яндекс.Диск, Google Drive или любой другой сервис, который уже используете в компании.

-  В настройках Gizmo Server откройте <cmd text="Настройки"/> -> <cmd text="Резервное копирование"/> и в поле **Путь хранения резервной копии на сервере** укажите путь к синхронизируемой папке облачного клиента.

-  Сохраните настройки -- дальше копии будут создаваться туда же, а облачный клиент автоматически будет забирать их за пределы сервера, без вашего участия.

> [!WARNING]
> 
> Убедитесь, что пользователь операционной системы, от имени которого запущен Gizmo Server, обладает правами на чтение и запись в эту папку -- иначе копии просто не будут создаваться, и вы узнаете об этом в худший момент. Это то же самое требование, что и для обычного локального пути.

## Что стоит время от времени проверять

-  Что синхронизация с облаком реально происходит, а не просто копится в локальной папке без загрузки -- загляните в интерфейс облачного клиента и убедитесь, что файлы действительно уезжают наверх.

-  Что свободного места в облачном хранилище хватает с учётом **максимального количества файлов резервных копий**, которое вы указали в настройках сервера -- если лимит места меньше, чем суммарный вес всех копий, часть из них просто не загрузится.

Разовая настройка, которая потом работает сама -- ровно то, ради чего вообще стоит с этим возиться.

> [!NOTE]
> 
> Это практический способ через существующие настройки, а не отдельная встроенная функция Gizmo. Если в будущем появится собственная интеграция с облачными хранилищами, этот раздел будет обновлён.