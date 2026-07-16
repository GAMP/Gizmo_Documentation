---
order: 1
title: Тарификация
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h8l10 10-8 8L3 11z"/><circle cx="8" cy="8" r="1.5"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как настроить тарифы почасовой оплаты</h2>
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

Тарифы -- это то, на чём клуб зарабатывает каждый час. Прежде чем создавать тариф, определитесь с игровыми зонами, у которых будет собственная цена.

## Создание тарифа

Перейдите в <cmd text="Настройки"/> -> <cmd text="Тарифы"/>. По умолчанию там уже есть два тарифа -- «Цены для станций» и «Цены для терминалов». Можно использовать их или создать новые.

-  Откройте тариф (или создайте новый) и назовите его понятно, например Standart.

-  Укажите филиал (по умолчанию -- основной) и группу станций, для которой действует тариф. Если тариф называется Standart, привяжите его к группе станций Standart. Если одна цена действует сразу на несколько зон, выберите все нужные группы.

-  Заполните **стартовый взнос** и **минимальный взнос**. Стартовый взнос -- фиксированная сумма, которая списывается при каждом входе в систему, как клубная плата, без начисления времени. Минимальный взнос -- минимальная сумма пополнения баланса на этом тарифе. Если модель вашего клуба не требует иного, **рекомендуем оставить оба поля равными 0**.

-  Укажите стоимость часа в поле **Почасовая оплата** -- это сумма, которая будет списываться у гостя за час игры.

-  Поля **Начислять каждые (минут)** и **Бесплатные минуты** нужны, только если хотите дать гостю немного бесплатного времени в начале сессии -- например, чтобы он успел пополнить баланс. В этом случае поставьте **Начислять каждые (минут)** -- 1, а **Бесплатные минуты** -- нужное количество (например, 5 для пяти бесплатных минут).

![](./../../../instalation/instalation-6.png){width=1919px height=1079px}

Полный список всех полей карточки тарифа -- в статье [«Карточка тарифа»](./../../../configure/finance/tariffs/tariff-card.md).

## Расписания -- разные цены в разное время

Если по вечерам или в выходные цена должна быть другой, используйте расписания -- это отрезок времени, в который тариф временно меняется, а затем возвращается к обычному.

Например, нужно, чтобы с 17:00 пятницы до 8:00 понедельника действовала цена 200 ₽ вместо обычных 150 ₽.

-  Нажмите <cmd text="Создать расписание"/> и откройте его.

-  Заполните поля так же, как в основном тарифе, но укажите нужную цену -- в примере это 200 ₽.

-  В таблице справа отметьте мышкой дни и время, когда действует это расписание.

![](./../../../instalation/instalation-7.png){width=1919px height=1079px}

Создайте тариф для каждой игровой зоны клуба по этой же инструкции.

## Пошаговая тарификация

Помимо простого почасового тарифа есть пошаговый -- цена меняется в зависимости от того, на какой минуте сеанса находится гость (например, первые 30 минут дороже, дальше дешевле). Подробности -- в той же статье [«Карточка тарифа»](./../../../configure/finance/tariffs/tariff-card.md).

> [!NOTE]
> 
> Это ориентир, а не исчерпывающая инструкция по ценообразованию -- как именно выстраивать цену по часам и дням для конкретно вашего клуба, лучше решать самостоятельно, ориентируясь на загрузку и другие факторы.