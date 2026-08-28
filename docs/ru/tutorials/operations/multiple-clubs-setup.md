---
title: Несколько клубов на одном сервере
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"/><path d="M14 2v5a1 1 0 0 0 1 1h5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как подключить сеть клубов к одному Gizmo Server</h2>
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

Если у вас сеть из нескольких клубов -- скажем, точка в одном районе города и ещё одна в другом -- первая мысль обычно "значит, нужен второй сервер". На самом деле нет: все клубы сети можно вести с одного Gizmo Server, просто добавив каждый как отдельный **филиал**. Это и проще в обслуживании, и дешевле, и удобнее для вас как для владельца.

## Зачем это нужно

Один сервер на всю сеть -- это единая база клиентов: постоянный гость, который обычно ходит в клуб у дома, но оказался проездом у второй точки, всё равно узнаётся системой, а его баланс и статус видны в обоих клубах. Плюс единая отчётность по всей сети сразу -- не нужно сводить цифры из двух разных панелей вручную. И настройка тарифов, пакетов, прав доступа делается один раз в одном месте, а не повторяется в каждом клубе заново.

При этом у каждого филиала могут быть свои особенности -- свой адрес, часовой пояс, даже своё юридическое лицо и налоговый режим, если это нужно.

## Как добавить клуб как филиал

-  В Gizmo Manager откройте <cmd text="Настройки"/> -> <cmd text="Филиалы"/> -> <cmd text="Создать филиал"/>.

-  Заполните адрес, название и контакты нового клуба.

-  Если у этого клуба другое юридическое лицо или другой налоговый режим (например, другой регион с другой ставкой налога), переопределите настройки налогов именно для этого филиала -- по умолчанию они наследуются от общих настроек сервера.

Полный список полей карточки филиала -- в статье [«Карточка филиала»](./../../configure/organization/branches/branch.md).

## Что настраивается отдельно на каждый филиал

После создания филиала для него нужно будет отдельно настроить:

-  **Игровые зоны и группы станций** -- у каждого клуба свои залы и своё оборудование, копировать один в один не получится, да и незачем.

-  **Тарифы и пакеты времени** -- цены между клубами сети часто отличаются, даже если оформление и логика одинаковые.

-  **Кассы** -- каждая точка продаж в каждом клубе -- это отдельная касса со своим Companion.

Настройки клиентской оболочки, прав доступа операторов и большинство остальных параметров сервера остаются общими для всей сети автоматически -- их менять по новой не придётся.

> [!NOTE]
> 
> Клиентские пк каждого клуба должны быть подключены к локальной сети именно того сервера, на котором заведены филиалы -- см. [«Доступ к Gizmo по сети»](./../client-shell/network-access.md). В остальном настройка станций для каждого клуба не отличается от настройки одного клуба -- те же группы станций, профили безопасности и приложения, просто в привязке к своему филиалу.