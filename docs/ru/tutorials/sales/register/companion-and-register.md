---
title: Как подключить Companion и настроить кассу
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 7V5a2 2 0 0 1 2-2h2"/><path d="M17 3h2a2 2 0 0 1 2 2v2"/><path d="M21 17v2a2 2 0 0 1-2 2h-2"/><path d="M7 21H5a2 2 0 0 1-2-2v-2"/><path d="M8 7v10"/><path d="M12 7v10"/><path d="M17 7v10"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как превратить пк администратора в точку продаж: Companion, касса и сканер штрихкода</h2>
    <div class="gx-meta">
      <span>20–30 минут</span>
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

Тарифы и пакеты настроены, но продавать их пока не через что: нужна точка продаж -- пк, с которого администратор оформляет продажи товаров и пакетов. Точкой продаж его делает **Gizmo Companion** -- приложение-мост между сервером Gizmo и кассовым оборудованием: фискальным принтером, терминалом эквайринга, денежным ящиком, сканером штрихкодов. Без Companion продажи не заработают.

Схема такая: на каждую точку продаж устанавливается свой Companion, он подключается к серверу, а затем привязывается к **кассе** в Gizmo Manager. В одном клубе может быть несколько касс. Кассовый аппарат и терминал эквайринга можно подключить сразу или позже -- на настройку Companion и кассы они не влияют. Подробнее о Companion -- в статье [«Что такое Gizmo Companion и зачем он нужен?»](./../../../about/overview/gizmo-companion/what-is-gizmo-companion.md).

## Шаг 1. Создайте компаньон в Gizmo Manager

Один компаньон -- на одну точку продаж (пк).

1. Откройте **Настройки -> Сервер -> Компаньоны** и нажмите **Создать Companion** в правом верхнем углу.
2. Укажите **Название** -- понятное, например по расположению точки продаж: «Стойка, 1 этаж».
3. Сохраните. Компаньон появится в списке.
4. Дважды нажмите на компаньон -- откроется его карточка. Скопируйте токен иконкой копирования в поле **Токен**: он понадобится в шаге 3.

Подробнее -- в статье [«Компаньоны»](./../../../configure/server/companions/_index.md).

## Шаг 2. Установите Companion на пк точки продаж

1. Откройте **Настройки -> О программе** и в блоке **Загрузки** скачайте установщик **Компаньон Gizmo**.
2. Запустите установщик **на том пк, с которого будете продавать** (обычно это пк администратора), и пройдите все шаги.

Подробнее -- в статье [«О программе»](./../../../configure/others/about.md).

## Шаг 3. Подключите Companion к серверу

1. На пк точки продаж откройте интерфейс Companion -- ярлыком на рабочем столе или по адресу [localhost:8000](http://localhost:8000) в браузере на этом же пк.
2. В настройках подключения укажите:
   - **Протокол**;
   - **Имя хоста** -- локальный IP сервера Gizmo;
   - **Порт** -- по умолчанию 80.
3. Вставьте токен из шага 1, убедитесь, что значение в поле изменилось, и сохраните.
4. Вернитесь в Gizmo Manager, в **Настройки -> Сервер -> Компаньоны**, и проверьте, что в столбце **Статус** указано **Подключено**. Если нет -- пройдите шаги заново.

Как узнать локальный IP сервера -- в инструкции [«Доступ к Gizmo по сети»](./../../client-shell/network-access.md).

## Шаг 4. Подключите сканер штрихкода и другие POS-устройства

Этот шаг нужен, если к пк точки продаж физически подключены сканер штрихкода, денежный ящик или считыватель смарт-карт.

1. В интерфейсе Companion, на панели слева, откройте **POS устройства**.
2. Укажите COM-порты подключённых устройств: денежного ящика, сканера штрихкода, считывателя смарт-карт.
3. Сохраните настройки.

Раздел подключения самой кассы в Companion пока не трогайте -- о нём в шаге 6.

> [!TIP]
>
> Сканер штрихкода обязателен, если вы продаёте товары с маркировкой «Честный знак», и просто удобен, чтобы находить товары быстрее, чем вручную. Чтобы товар находился по сканеру, заполните поле **Штрихкод** в его карточке -- см. [«Карточка товара»](./../../../usage/gizmo-manager/magazin/products/kartochka-produkta.md). Штрихкод можно задать и пакету времени.

## Шаг 5. Привяжите Companion к кассе

1. Откройте **Настройки -> Финансовый -> Кассы**. Здесь могут уже быть кассы -- это имена всех пк, которые когда-либо подключались к серверу.
2. Откройте кассу пк точки продаж. Если её нет, нажмите **Создать кассу**.
3. Заполните поля:
   - **Филиал** -- обязательное поле;
   - **Компаньон** -- компаньон из шага 1;
   - **Номер** -- порядковый номер кассы среди всех точек продаж;
   - **Имя** -- любое удобное название, обязательное поле;
   - **Наличных на начало смены** -- оставьте 0 или укажите сумму, если в начале смены в кассе уже должны числиться наличные.
4. Если точка продаж в клубе одна, включите **Касса по умолчанию для филиала**.
5. Поля с номерами терминала, принтеров и QR-дисплея пока не трогайте -- они нужны только для подключения кассового аппарата и терминала эквайринга.
6. Сохраните изменения.

> [!TIP]
>
> Ненужные кассы можно удалить и оставить только реальные точки продаж -- так раздел будет проще читать.

Все поля кассы -- в статье [«Карточка кассы»](./../../../configure/finance/registers/register-card.md).

## Шаг 6. Подключите кассовый аппарат и терминал эквайринга

<color color="#99B1E6">**Только для клубов, которые подключают к Gizmo ККТ или терминал эквайринга.**</color>

Техническое подключение кассового аппарата и терминала -- отдельный процесс, с ним помогает поддержка удалённо. Со стороны Gizmo Manager нужно:

1. В **Настройки -> Финансовый -> Кассы** открыть кассу точки продаж и указать **Номер принтера фискальных чеков** (ККТ) и/или **Номер платёжного терминала** -- нумерация указана в KKMServer.
2. В **Настройки -> Организация -> Налоги и валюта** указать валюту и заполнить **Настройки налогов** -- эти параметры используются при печати чеков. Если у филиалов разные юридические лица, налоги для них переназначаются в разделе «Филиалы». Подробнее -- в статье [«Налоги и валюта»](./../../../configure/organization/taxes-and-currency.md).
3. Сохранить изменения.

Подготовка к подключению ККТ и терминала, настройка кассы в Companion:

> [!NOTE]
>
> Данный раздел находится в разработке.

> [!NOTE]
>
> Если интеграцию с ККМ-сервером ранее настраивали наши специалисты, [обратитесь в чат поддержки](./../../../about/support.md) -- мы подскажем нужные данные для ввода.

Чтобы оплата картой проходила через терминал, включите его в способах оплаты -- см. инструкцию [«Как настроить способы оплаты»](./payment-methods.md).

## Результат

- Пк администратора стал точкой продаж: Companion подключён к серверу и привязан к кассе.
- Продажи товаров и пакетов проходят через эту кассу.
- Если подключён сканер, товары находятся по штрихкоду.
- Если подключены ККТ и терминал эквайринга, Companion передаёт им команды на печать чеков и оплату картой.

Работа с кассой в течение смены -- в статье [«Касса»](./../../../usage/gizmo-manager/tochka-prodazh/_index.md).
