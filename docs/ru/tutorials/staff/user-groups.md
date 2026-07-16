---
order: 1
title: Группы пользователей
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="7" r="4"/><path d="M3 21v-2a4 4 0 0 1 4-4h4a4 4 0 0 1 4 4v2"/><circle cx="17" cy="7" r="3"/><path d="M21 21v-2a3.5 3.5 0 0 0-2-3.17"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как разделить клиентов на группы с разными правилами</h2>
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

Не все ваши гости одинаковы -- и это касается не только характера, но и того, на каких условиях они у вас играют. Постоянный клиент, разовый гость с улицы, участник турнира и ваш собственный сотрудник, решивший поиграть в свободную смену -- всем им, скорее всего, нужны разные правила: разные тарифы, разные скидки, разный доступ к пакетам. Группы пользователей -- это именно тот инструмент, который позволяет развести всех этих людей по разным корзинам и настроить каждой свои условия, не трогая остальных.

## Зачем группировать клиентов

Без групп все клиенты в системе равны -- одни и те же тарифы и пакеты для всех, без исключений. С группами можно, например:

-  Дать постоянным клиентам отдельную цену или бонусные накопительные баллы -- это простой способ показать, что вы цените их лояльность.

-  Выдать сотрудникам скидку или бесплатное время, чтобы они могли протестировать новую игру или просто отдохнуть в перерыве -- подробнее в статье [«Льготы для персонала»](./staff-perks.md).

-  Ограничить доступ к определённым тарифам или пакетам только определённой группе -- например, специальные условия для участников закрытого турнира.

## Как создать группу

-  В Gizmo Manager откройте <cmd text="Пользователи"/> -> <cmd text="Группы"/> -> <cmd text="Создать группу"/>.

-  Укажите **название группы** -- оно будет видно оператору при выборе группы для клиента, так что лучше называть их понятно: «Постоянные», «VIP», «Staff», а не «Группа 1».

-  Настройте правила группы: доступные тарифы и пакеты, скидку (если нужна), приоритет при бронировании.

## Как назначить клиента в группу

Откройте карточку клиента в разделе <cmd text="Пользователи"/> и выберите нужную группу в поле **Группа**. Изменить группу клиента можно в любой момент -- если гость из разового превратился в постоянного, просто переключите его в другую группу, история и баланс никуда не денутся.

## С чего начать

Если групп у вас пока нет вообще, необязательно продумывать сложную иерархию сразу. Для старта обычно достаточно двух-трёх: обычные зарегистрированные клиенты, гости без аккаунта и сотрудники. Остальные группы -- вроде VIP или участников турниров -- добавляются по мере необходимости, когда в них появляется реальный смысл.
