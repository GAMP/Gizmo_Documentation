---
title: Как настроить скин оболочки
order: 6
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="currentColor"/><circle cx="17.5" cy="10.5" r=".5" fill="currentColor"/><circle cx="8.5" cy="7.5" r=".5" fill="currentColor"/><circle cx="6.5" cy="12.5" r=".5" fill="currentColor"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Как оформить клиентскую оболочку в стиле вашего клуба</h2>
    <div class="gx-meta">
      <span>15–20 минут</span>
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

Оболочка -- первое, что видит гость, садясь за пк. По умолчанию в Gizmo стоит нейтральная тема, рассчитанная на любой клуб. Если заменить в ней фон, логотип и экран входа, оболочка будет выглядеть как часть вашего клуба, а не как стандартная программа.

Внешний вид оболочки задаётся **профилем темы оформления** -- набором фонов, логотипа и параметров отображения. Профиль назначается группе станций, поэтому у разных зон клуба, например Standart и VIP, может быть своё оформление.

## Шаг 1. Подготовьте файлы

Заранее соберите файлы, которые будете загружать:

- **Фон главного экрана** -- изображение или видео, которое гость видит после входа в оболочку. Формат: JPG, PNG или MP4.
- **Фон экрана входа** -- изображение или видео до авторизации. Формат: JPG, PNG или MP4.
- **Логотип клуба** -- формат PNG или SVG.

> [!TIP]
>
> Подбирайте фоны под разрешение мониторов на игровых пк, чтобы изображение не растягивалось и не теряло чёткость.

## Шаг 2. Создайте профиль темы оформления

1. Откройте **Настройки -> Клиент -> Темы оформления** и нажмите **Создать профиль оформления** в правом верхнем углу.
2. Укажите **Имя** профиля -- понятное, например «VIP-зона» или «Основной».
3. В блоке **Медиа** загрузите подготовленные файлы: **Фоновые медиа**, **Фоновое медиа для входа в систему** и **Лого**. Перетащите файл в нужную область или нажмите **Загрузить файл**.

Остальные блоки настройте по желанию:

**Страница входа в систему**
- **Вход пользователя** -- показывает на экране входа форму авторизации.
- **Показать QR-код хоста** -- показывает QR-код на экране входа. Ссылку, заголовок и описание для него можно указать в полях **URL QR-кода**, **Заголовок QR-кода** и **Описание QR-кода** -- например, ссылку на сообщество клуба.

**Номер хоста**
- **Показать на обоях** и **Показать на заставке** -- выводят номер игрового места на экран, чтобы гость и администратор сразу видели, какой это пк.
- **Префикс** -- текст перед номером, например «ПК».
- **Фиксированная позиция** -- закрепляет номер в одном углу экрана. Если оставить анимацию, номер будет перемещаться по экрану с заданным интервалом.

**Ротатор входа в систему** -- включите, если хотите, чтобы на экране входа сменялись несколько изображений, например афиши турниров. Укажите интервал смены в секундах и **Папку для мультимедиа** с файлами.

**Главная страница, страница магазина и страница приложений** -- включают соответствующие разделы оболочки и задают, сколько элементов показывать в строке и в блоках популярных товаров и приложений.

**Пользовательский CSS** -- в блоке **Другое** можно задать собственные CSS-стили оболочки: вручную или загрузив файл кнопкой **Загрузить файл CSS**. Пригодится, если стандартных настроек не хватает и в клубе есть человек, знакомый с CSS.

4. Сохраните профиль.

Описание всех полей -- в статье [«Карточка профиля темы оформления»](./../../configure/client/skins/skin-profile.md).

## Шаг 3. Назначьте профиль станциям

Профиль сам по себе не применяется -- его нужно привязать к группе станций.

1. Перейдите в **Станции -> Группы станций** и откройте группу, для которой создавали профиль.
2. В поле **Тема оформления** выберите тему оболочки, а в поле **Профиль темы оформления** -- созданный профиль.
3. Сохраните изменения и повторите для остальных групп станций.

Все поля группы -- в статье [«Карточка редактирования группы станций»](./../../usage/gizmo-manager/stations/station-groups/station-group-card.md).

> [!NOTE]
>
> Чтобы сделать профиль стандартным для клуба, откройте **Настройки -> Клиент -> Темы оформления**, нажмите **«...»** напротив профиля и выберите **Установить значение по умолчанию**. Профиль по умолчанию отмечен в таблице меткой «По умолчанию». Подробнее -- в статье [«Темы оформления»](./../../configure/client/skins/_index.md).

> [!TIP]
>
> Чтобы VIP-зона выглядела иначе, чем основной зал, создайте для каждой зоны свой профиль -- с другими фонами и логотипом -- и назначьте его соответствующей группе станций. Как разделить клуб на зоны -- в инструкции [«Профили безопасности»](./security-profiles.md), раздел «Шаг 1. Настройте группы станций под игровые зоны».

## Шаг 4. Проверьте результат

Подойдите к любому игровому пк из настроенной группы и посмотрите на экран входа и главный экран оболочки. Если новое оформление не появилось, перезапустите оболочку на этом пк: на **Карте** выберите игровое место и нажмите **Перезапустить оболочку** -- это перезагружает Gizmo Client, не перезагружая сам компьютер. Подробнее -- в статье [«Карта»](./../../usage/gizmo-manager/map/_index.md).

## Результат

Оболочка на игровых пк выглядит как часть вашего клуба: на экране входа и главном экране -- ваши фоны и логотип. У каждой группы станций может быть своё оформление, например у зон Standart и VIP.
