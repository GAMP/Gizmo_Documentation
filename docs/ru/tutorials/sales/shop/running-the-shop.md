---
order: 1
title: Товары и наборы
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M3 4h2l2.5 12.5a2 2 0 0 0 2 1.5h8a2 2 0 0 0 2-1.5L21 8H6"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как настроить товары и комбо наборы для их продажи</h2>
    <div class="gx-meta">
      <span>10 минут</span>
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

Магазин -- это ассортимент клуба (напитки, снеки, аксессуары) и склад, который считает остатки. Каждый товар настраивается один раз через карточку -- дальше он просто продаётся на кассе или в клиентской оболочке.

## Создание товара

Откройте <cmd text="Магазин"/> -> <cmd text="Товары"/> -> <cmd text="Создать товар"/>. Карточка разбита на несколько блоков -- разберём, что в каждом из них.

**Основные**

Укажите имя и товарную группу этого товара, а также при необходимости отметьте, как он должен вести себя в чеке:

-  **Это услуга** -- при формировании чека Gizmo учитывает этот товар как услугу, а не как товар.

-  **Является акцизом** -- в чек уходят данные о том, что у товара есть акцизная метка.

-  **Имеет маркировку товара** -- включайте, если продаёте товар, подпадающий под «Честный знак». После включения продать товар можно будет только после сканирования кода маркировки сканером.

Прикрепите изображение товара -- оно будет видно и в клиентском магазине, и администратору в карточке товара.

**Доступность**

-  **Показать в клиентской оболочке** -- появится ли карточка товара в магазине оболочки у гостей.

-  **Филиал** -- для какого филиала доступен товар. Обязательно включите нужный филиал, иначе товар нельзя будет продать.

-  **Незарегистрированные** -- можно ли продавать товар клиентам с разовой (гостевой) учётной записью. Рекомендуем включать.

-  **Группа пользователей** -- каким группам клиентов доступен товар. Рекомендуем отмечать все группы, если нет причин ограничивать.

**Ценообразование**

-  **Цена** -- стоимость товара в деньгах и/или баллах.

**Расписание продаж**

-  **Диапазон дат** -- конкретные даты, когда товар доступен для покупки. Включайте, только если нужно ограничить продажу определёнными датами.

-  **Диапазон времени** -- дни недели и часы, когда товар доступен для продажи. Если выключено -- ограничений нет.

**Награда**

-  **Баллы** -- сколько баллов начисляется клиенту за покупку этого товара.

**Склад**

-  **Штрихкод** -- штрихкод товара. Полезно, чтобы быстро находить товар по штрихкоду, и обязательно, если продаёте его по коду маркировки.

-  **Складской учёт** -- будет ли товар учитываться на складе. Если включить, становятся доступны ещё три настройки:

   -  **Запретить продажу закончившегося** -- не даёт продать товар, если его остаток на складе равен нулю.

   -  **Уведомление о наличии остатков** -- предупреждает администратора, когда количество товара опускается ниже критического порога.

   -  **Варианты склада** -- что именно списывается при продаже:

      -  **По умолчанию** -- списывается только сам товар.

      -  **Целевой** -- вместе с товаром дополнительно списывается другой выбранный товар в указанном количестве -- например, стакан или соломинка при продаже напитка.

## Наборы товаров

Наборы товаров позволяют объединить несколько товаров в одно комбо. Например «Энергетик + пакет "Ночь" по сниженной цене». Наборы полезны и для составных товаров из реального ассортимента -- скажем, у вас есть сэндвич, в который можно добавить экстра-порцию сыра, а сыр при этом учитывается как отдельный товар. В этом случае создайте набор из товаров «Сэндвич» и «Сыр» -- при продаже набора обе позиции спишутся со склада.

Чтобы создать набор, откройте <cmd text="Магазин"/> -> <cmd text="Наборы"/> -> <cmd text="Создать набор"/>. Настраивается набор так же, как обычный товар, кроме двух отличий:

-  Ниже блока доступности, в поиске выберите, какие товары или пакеты будут входить в этот набор.

-  По умолчанию набор может иметь собственную позицию на складе, как обычный товар. Если вместо этого вы хотите, чтобы при продаже набора со склада списывались именно входящие в него товары, включите **Складской учёт** внизу карточки набора и обязательно выберите тип «Собственный склад».
