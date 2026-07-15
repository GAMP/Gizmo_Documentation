---
order: 1
title: Проблемы подключения клиентских пк
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
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 9v4"/><path d="M12 17h.01"/><path d="M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L14.71 3.86a2 2 0 0 0-3.42 0Z"/></svg>
      В этом блоке вы узнаете
    </p>
    <h2 class="gx-title">Что проверить, если клиентский пк не подключается к серверу</h2>
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

Бесконечно висит этап загрузки Gizmo Client, иконка сервера в левом нижнем углу экрана красная, пк вообще не появляется в <cmd text="Станции"/> -> <cmd text="Компьютеры"/> в Gizmo Manager, или отображается отключенным на карте клуба? Прежде чем писать в поддержку, стоит пройтись по базовому чек-листу -- в девяти случаях из десяти дело в одной из причин ниже.

## Убедитесь, что клубу достаточно лицензий

Возможно, вы подключили игровых мест больше, чем позволяет подписка, или ее данные не обновились. Откройте Gizmo Manager > Настройки > Подписка, и проверьте, что она активна, а в поле лицензий указано количество равное или больше количества игровых мест, которые вы подключили -- включая консоли.

## Проверьте сеть

-  Клиентский пк должен находиться в той же локальной сети, что и сервер. Как это проверить и как узнать локальный IP сервера -- в статье [«Доступ к Gizmo по сети»](./network-access.md).

-  В настройках сервера, в <cmd text="Настройки"/> -> <cmd text="Сеть"/> -> <cmd text="Правила подключения"/>, должны быть включены **Автоматическое обнаружение** и **Восстановление имени хоста** -- без них клиентские пк не подключаются автоматически, это отдельно отмечено в статье [«Установка»](./../../instalation/_index.md).

-  Проверьте, не блокирует ли соединение антивирус или файрвол на клиентском пк или на сервере -- Gizmo Client и Gizmo Server должны свободно обмениваться данными по локальной сети.

## Проверьте сам клиент

-  Убедитесь, что Gizmo Client установлен именно той версией, которая совместима с текущей версией Gizmo Server -- рекомендуем скачивать установщик из <cmd text="Настройки"/> -> <cmd text="О программе"/> в самом Gizmo Manager, а не использовать старый установщик с другого пк.

-  Перезапустите Gizmo Client и сам пк -- часть проблем с подключением решается обычной перезагрузкой, как бы банально это ни звучало.

-  Проверьте, что на клиентском пк не запущено несколько экземпляров Gizmo Client одновременно.

## Проверьте привязку в Gizmo Manager

-  Откройте <cmd text="Станции"/> -> <cmd text="Компьютеры"/> -- пк должен появиться здесь хотя бы раз после успешного подключения к серверу. Если пк не появляется вообще -- проблема на уровне сети или установки клиента, а не привязки, и дальше искать в настройках станции смысла нет.

-  Если пк появился, но не работает как ожидается, проверьте, что для него указаны **Филиал**, **Группа станций** и **слой карты** -- без этого пк не отобразится на карте клуба в разделе <cmd text="Карта"/>.

## Если ничего не помогло

Обратитесь в поддержку Gizmo -- опишите, на каком именно этапе останавливается подключение (загрузка, красная иконка сервера, пк не появляется в списке), и что из списка выше вы уже проверили. Это ускорит диагностику в разы -- поддержке не придётся заново проходить с вами то, что вы уже с�