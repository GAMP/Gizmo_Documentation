---
order: 1
title: Подключение кассы и терминала
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="6" width="20" height="14" rx="2"/><path d="M2 10h20"/><path d="M6 15h2"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как подготовиться к подключению кассы и терминала эквайринга</h2>
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

Физическое подключение фискального принтера (кассы) и терминала эквайринга -- отдельный процесс, и в большинстве случаев он проходит вместе с поддержкой Gizmo: слишком много переменных, от модели принтера до региональных требований к чекам, чтобы описать это одной универсальной инструкцией. Но часть подготовки можно и нужно сделать самостоятельно заранее -- это ощутимо ускорит само подключение и сэкономит вам переписку туда-обратно.

## Что настроить до обращения в поддержку

-  **Gizmo Companion должен быть установлен и подключён.** Companion превращает обычный пк в точку продаж и передаёт данные кассе -- без него оборудование работать не будет. Как его установить и подключить -- в статье [«Установка»](./../../../instalation/_index.md), в разделе «Касса».

-  **POS-устройства в Companion.** На панели слева в Companion откройте **POS устройства** и укажите COM-порты денежного ящика, сканера штрихкода и считывателя смарт-карт -- если они у вас есть и уже подключены физически. Чаще всего нужен именно сканер штрихкода: он обязателен, если продаёте товары с маркировкой «Честный знак», или просто удобен, чтобы искать товары по штрихкоду быстрее, чем вручную.

-  **Карточка кассы заполнена в Gizmo Manager.** Перейдите в <cmd text="Настройки"/> -> <cmd text="Кассы"/> и убедитесь, что для нужного пк указаны **Филиал**, **Компаньон**, **Склад**, **Номер** и **Имя**. Полный разбор всех полей карточки кассы -- в статье [«Карточка кассы»](./../../../configure/finance/registers/register-card.md).

## Какая касса какому пк соответствует

Если в клубе несколько точек продаж, важно не перепутать кассы между собой -- иначе продажи одного пк улетят в отчёты другого, и разбираться с этим постфактум неприятно. Ориентируйтесь по полю **Компаньон** в карточке кассы: при создании компаньона в <cmd text="Настройки"/> -> <cmd text="Компаньоны"/> вы называли его понятным именем (например, по названию пк или стойки). То же самое имя должно быть выбрано в поле **Компаньон** нужной кассы -- так вы всегда сможете сопоставить кассу с конкретным физическим пк, даже если касс десяток.

## Что подготовить перед обращением в поддержку

Когда Companion, POS-устройства и карточка кассы настроены, соберите для поддержки:

-  Модель и производителя фискального принтера (кассы).

-  Модель и производителя терминала эквайринга (если подключаете).

-  Номер кассы и её название из Gizmo Manager, чтобы поддержка сразу понимала, о какой точке продаж речь.

-  Способ подключения оборудования к пк (USB, COM-порт, сеть).

Чем полнее этот список, тем быстрее пройдёт само подключение -- поддержке не придётся выяснять детали в несколько заходов.

> [!NOTE]
> 
> Само техническое подключение (регистрация кассы в ФНС, настройка драйверов фискального принтера, привязка терминала к процессингу) выполняется совместно с поддержкой Gizmo -- индивидуально для вашего оборудования и региона. Эта статья закрывает только то, что можно и нужно подготовить заранее самостоятельно.
