---
title: Как настроить способы оплаты
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как выбрать, чем гости платят на стойке и в клиентской оболочке</h2>
    <div class="gx-meta">
      <span>10–15 минут</span>
      <span class="gx-meta-sep">/</span>
      <span class="gx-meta-level">Низкая сложность</span>
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

Один гость платит наличными на стойке, другой -- картой, третий списывает баллы за пакет прямо со своего пк. Способы оплаты определяют, какие из этих вариантов доступны в клубе и где именно: у администратора в Gizmo Manager, у гостя в Gizmo Client или и там, и там.

В Gizmo есть четыре встроенных способа оплаты. К ним можно добавить свои -- например, оплату через онлайн-эквайринг. Все настройки собраны на одной странице: **Настройки -> Финансовый -> Способы оплаты**.

## Шаг 1. Настройте стандартные способы оплаты

Стандартные способы встроены в систему, удалить их нельзя -- только настроить доступность:

- **Cash** -- наличные;
- **Credit Card** -- банковская карта;
- **Deposit** -- оплата с депозита пользователя;
- **Points** -- оплата баллами лояльности.

Для каждого способа задайте три переключателя:

- **Включен** -- работает ли способ в системе вообще;
- **Менеджер** -- доступен ли он администратору в Gizmo Manager;
- **Клиент** -- доступен ли он гостю в Gizmo Client.

Например, если наличные принимаются только на стойке, оставьте у **Cash** включённым **Менеджер** и выключите **Клиент**.

## Шаг 2. Включите оплату картой через терминал

Этот шаг нужен, если к кассе подключён платёжный терминал. Как подключить терминал к кассе -- в инструкции [«Как подключить Companion и настроить кассу»](./companion-and-register.md).

1. Включите **Использовать платежный терминал при оплате банковской картой** -- теперь оплата картой будет проводиться через подключённый терминал.
2. Выберите режим работы терминала: **Не в сети** (офлайн-режим) или **В сети** (онлайн-режим).

Какой режим выбрать и чем они отличаются на практике:

> [!NOTE]
>
> Данный раздел находится в разработке.

## Шаг 3. Добавьте свой способ оплаты

Свой способ оплаты нужен, если гости платят чем-то, чего нет среди стандартных. В блоке **Дополнительные способы оплаты** нажмите **+ Создать способ оплаты** и выберите тип.

<tabs>

<tab name="Не в сети">

Способ для приёма платежей без интеграции с внешней платёжной системой.

1. Укажите **Имя** -- под ним способ будет отображаться в интерфейсе. Поле обязательно.
2. Включите **Включен**, затем отметьте, где способ доступен: **Менеджер** и (или) **Клиент**.
3. Если способ должен учитываться при фискализации чеков, включите **Фискальный** и выберите **Вид платежа фискального чека** -- например, наличные.
4. Сохраните.

</tab>

<tab name="В сети">

Способ для онлайн-оплаты через платёжного провайдера.

1. Откроется страница **Провайдеры платежей** со списком доступных интеграций: Click.uz, Cloud Payments, Kaspi, OPay, Pay Selection, Stripe, Tinkoff, YooKassa.
2. Нажмите на карточку нужного провайдера и следуйте инструкциям по настройке интеграции. Провайдеры с меткой «Уже добавлено» повторно выбрать нельзя.

Настройка интеграции с каждым провайдером:

> [!NOTE]
>
> Данный раздел находится в разработке.

</tab>

</tabs>

Созданный способ появится в таблице дополнительных способов. Для него доступны те же переключатели **Включен**, **Менеджер**, **Клиент**. Порядок отображения меняется перетаскиванием за иконку перетаскивания <icon code="grip-vertical" />, удаление -- иконкой корзины.

Поля карточки -- в статье [«Карточка способа оплаты»](./../../../configure/finance/paymet-methods/payment-method-card.md).

## Шаг 4. Настройте пополнение депозита из клиентской оболочки

Если гости пополняют депозит сами, через Gizmo Client, задайте правила в блоке **Настройки онлайн-депозита для Shell**:

1. **Разрешить произвольную сумму пополнения** -- включите, если гость может сам ввести любую сумму в пределах лимитов.
2. **Минимальная сумма** и **Максимальная сумма** -- лимиты одного пополнения.
3. **Шаблоны** -- суммы, которые гость увидит в виде кнопок быстрого выбора. Нажмите **+ Добавить шаблон**, укажите сумму и нажмите **Готово**. Например, 500, 1000 и 2000.

В блоке **Другое** укажите адреса страниц, на которые гость попадёт после онлайн-оплаты: **URL для успешного платежа** и **URL для неуспешных платежей**.

## Шаг 5. Сохраните настройки

Сохраните изменения на странице способов оплаты и проверьте, что в окне продажи в Gizmo Manager и в Gizmo Client отображаются нужные способы.

## Результат

- Администратор и гость видят только те способы оплаты, которые вы для них включили.
- Оплата картой на стойке проходит через платёжный терминал, если он подключён и включён.
- Гость может пополнить депозит из клиентской оболочки в заданных пределах.

Описание всех полей -- в статье [«Способы оплаты»](./../../../configure/finance/paymet-methods/_index.md) раздела «Настройка». Параметры фискализации чеков -- в статье [«Налоги и валюта»](./../../../configure/organization/taxes-and-currency.md).
