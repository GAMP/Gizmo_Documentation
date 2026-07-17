---
order: 1
title: Карточка профиля безопасности
---

Эта карточка открывается при создании или редактировании профиля безопасности.

### Данные профиля безопасности

-  Название -- наименование профиля.

-  Скрыть меню «ПУСК» -- скрывает «ПУСК» в Windows 10, и делает его нефункциональным (пустым) в Windows 11.

-  Запретить сворачивать оболочку -- блокирует сворачивание оболочки. Если отключено, клиенты могут свернуть ее как обычное приложение на панели задач.

-  Ограничение переключения между рабочими столами -- блокирует переключение между рабочими столами Windows.



### Ограничения

Позволяет создать кастомные ограничения. При нажатии «+ Создать ограничение» появляется параметр, который можно настроить.

-  Параметр -- имя контента (приложения), который необходимо ограничить. То, что здесь нужно указывать, зависит от типа ограничения.

-  Тип ограничения -- как Gizmo будет определять и блокировать контент.

   -  Имя файла -- имя исполняемого файла, как оно отображается в проводнике Windows. Пример *chrome.exe.*

   -  Название класса -- Имя класса окна приложения. Чтобы найти имя класса приложения, сторонние утилиты.

   -  Название окна -- Имя окна в том виде, в каком оно появляется на панели задач.

   -  Значок в трее -- Специальные коды для скрытия значков в системном трее.

Вы можете использовать подстановочные символы ( \* ,?), чтобы ограничить несколько исполняемых файлов одним ограничением. Например, при добавлении **Cheat Engine\*** Windowname будут заблокированы все версии приложения [Cheat engine](https://www.cheatengine.org/)



### Файловая система

Позволяет скрывать и блокировать доступ к буквам дисков в проводнике Windows. Выберите все буквы, которые нужно блокировать. Рекомендуется заблокировать все.



## Политики

Готовые политики, блокирующие функционал Windows. Можно включать отметкой флажка или искать в поиске.

Все доступные политики:

### Hardware

-  **Disable USB Mass Storage** -- блокирует USB-накопители (флешки, внешние диски) на клиентском пк.

### Edge

-  **Edge Allow File Selection Dialogs** -- запрещает системные диалоги выбора файлов, например при загрузке файла на сайт.

-  **Edge Allow Games Menu** -- запрещает показ игрового меню Edge.

-  **Edge Allow Surf Game** -- запрещает мини-игру с бегущим сёрфером при отсутствии интернета.

-  **Edge Always Open Pdf Externally** -- все PDF всегда открываются во внешней программе, а не во встроенном просмотрщике Edge.

-  **Edge Application Guard Upload Blocking Enabled** -- блокирует выгрузку файлов из изолированного режима Application Guard на диск.

-  **Edge Autofill Credit Card Enabled** -- отключает автозаполнение данных банковских карт на сайтах.

-  **Edge Autofill Memberships Enabled** -- отключает автозаполнение сохранённых данных абонементов и членских карт.

-  **Edge Block External Extensions** -- блокирует установку расширений из источников за пределами Microsoft Store и корпоративных политик.

-  **Edge Browser Add Profile Enabled** -- запрещает добавлять новые профили браузера.

-  **Edge Browser Guest Mode Enabled** -- отключает гостевой режим браузера.

-  **Edge Clear Browsing Data On Exit** -- очищает историю и данные браузера при каждом закрытии.

-  **Edge Clear Cached Images And Files On Exit** -- очищает кэш изображений и файлов при закрытии.

-  **Edge Click Once Enabled** -- запрещает запуск приложений по технологии ClickOnce через браузер.

-  **Edge Configure Share** -- отключает кнопку «Поделиться» в браузере.

-  **EdgeCrypto Wallet Enabled** -- отключает встроенный криптокошелёк Edge.

-  **Edge Default Automatic Downloads Setting** -- блокирует автоматические множественные загрузки.

-  **Edge Default Browser Setting Enabled** -- запрещает Edge предлагать себя браузером по умолчанию.

-  **Edge Default File System Read Guard Setting** -- запрещает сайтам чтение файловой системы через File System Access API.

-  **Edge Default File System Write Guard Setting** -- запрещает сайтам запись в файловую систему через File System Access API.

-  **Edge Default Search Provider Context Menu Access Allowed** -- запрещает поиск через контекстное меню поисковиком по умолчанию.

-  **Edge Default Search Provider Enabled** -- отключает использование поисковика по умолчанию.

-  **Edge Default Web Usb Guard Setting** -- запрещает сайтам доступ к USB-устройствам через WebUSB API.

-  **Edge Developer Tools Availability** -- блокирует доступ к инструментам разработчика (F12).

-  **Edge Direct Invoke Enabled** -- запрещает сайтам напрямую открывать локальные приложения по протокольной ссылке без диалога подтверждения.

-  **Edge Disable Screenshots** -- запрещает создание скриншотов средствами браузера.

-  **Edge Download Restrictions** -- ограничивает, какие файлы разрешено скачивать.

-  **Edge Collections Enabled** -- отключает функцию «Коллекции» для сохранения контента с сайтов.

-  **Edge EDrop Enabled** -- отключает функцию Drop: отправку файлов и сообщений себе между устройствами.

-  **Edge Follow Enabled** -- отключает подписку на любимые сайты (функция Follow).

-  **Edge Wallet CheckoutEnabled** -- отключает автозаполнение данных кошелька при онлайн-оплате на сайтах.

-  **Edge Wallet Etree Enabled** -- отключает одну из функций встроенного кошелька Edge.

-  **Edit Favorites Enabled** -- запрещает редактировать список избранного.

-  **Edge Enable Media Router** -- отключает медиа-роутер -- трансляцию видео и аудио на внешние устройства.

-  **Edge Favorites Bar Enabled** -- скрывает панель избранного под адресной строкой.

-  **Edge Feature Flag Overrides Control** -- запрещает пользователю менять экспериментальные флаги через edge://flags.

-  **Edge Gamer Mode Enabled** -- отключает игровой режим Edge.

-  **Edge Hide First Run Experience** -- скрывает приветственный экран при первом запуске браузера.

-  **Edge Hide Internet Explorer Redirect UXF or Incompatible Sites Enabled** -- скрывает уведомление о перенаправлении в режим Internet Explorer для несовместимых сайтов.

-  **Edge Hide Restore Dialog Enabled** -- скрывает диалог восстановления вкладок после сбоя браузера.

-  **Edge Homepage Is New Tab Page** -- принудительно делает страницу новой вкладки домашней страницей.

-  **Hubs Sidebar Enabled** -- отключает боковую панель (Sidebar) с виджетами и приложениями.

-  **Edge In Private Mode Availability** -- запрещает режим InPrivate.

-  **Edge Internet Explorer Integration Level** -- уровень интеграции режима Internet Explorer в Edge.

-  **Edge Internet Explorer Integration Local File Allowed** -- запрещает открытие локальных файлов в режиме IE.

-  **Edge Internet Explorer Integration Local File Show Context Menu** -- скрывает пункт открытия в режиме IE в контекстном меню для локальных файлов.

-  **Edge Internet Explorer Integration Reload In IEMode Allowed** -- запрещает пользователю вручную перезагрузить страницу в режиме IE.

-  **Edge Internet Explorer Integration Zone Identifier Mht File Allowed** -- запрещает открытие MHT-файлов с меткой зоны безопасности в режиме IE.

-  **Edge Internet Explorer Mode Enable Save PageAs** -- запрещает сохранение страницы («Сохранить как») в режиме IE.

-  **Edge Internet Explorer Mode Toolbar Button Enabled** -- скрывает кнопку переключения в режим IE на панели инструментов.

-  **Edge Intranet File Links Enabled** -- запрещает переход по ссылкам на файлы во внутренней сети.

-  **Edge Local Browser Data Share Enabled** -- запрещает обмен локальными данными браузера между профилями и приложениями.

-  **Edge Microsoft Edge Insider Promotion Enabled** -- скрывает предложения перейти на инсайдерские сборки Edge.

-  **Edge Mouse Gesture Enabled** -- отключает управление браузером через жесты мышью.

-  **Edge New Tab Page Allowed Background Types** -- задаёт, какие типы фона разрешены на странице новой вкладки.

-  **Edge New Tab Page App Launcher Enabled** -- скрывает панель запуска приложений на странице новой вкладки.

-  **Edge New Tab Page Bing Chat Enabled** -- скрывает Bing Chat на странице новой вкладки.

-  **Edge New Tab Page Content Enabled** -- отключает контентные блоки (новости, виджеты) на странице новой вкладки.

-  **Edge New Tab Page Hide Default Top Sites** -- скрывает сайты по умолчанию из списка часто посещаемых.

-  **Edge New Tab Page Quick Links Enabled** -- скрывает быстрые ссылки на странице новой вкладки.

-  **Edge Password Generator Enabled** -- отключает встроенный генератор паролей.

-  **Edge Password Manager Enabled** -- отключает менеджер паролей браузера.

-  **Edge Pin Browser Essentials Toolbar Button** -- запрещает закреплять кнопку «Обслуживание браузера» на панели инструментов.

-  **Edge Pinning Wizard Allowed** -- запрещает мастер закрепления сайта как отдельного приложения.

-  **Edge Printing Enabled** -- запрещает печать из браузера.

-  **Edge Quick Search Show Mini Menu** -- скрывает мини-меню быстрого поиска по выделенному тексту.

-  **Edge Read Aloud Enabled** -- отключает функцию чтения страницы вслух.

-  **Edge Redirect Sites From Internet Explorer Prevent BHO Install** -- блокирует установку надстроек браузера при перенаправлении с Internet Explorer.

-  **Edge Remote Debugging Allowed** -- запрещает удалённую отладку браузера.

-  **Edge Restore On Startup** -- задаёт, что принудительно открывать при запуске браузера: новую вкладку, конкретные страницы или прошлую сессию.

-  **Edge Show Acrobat Subscription Button** -- скрывает кнопку с предложением подписки Adobe Acrobat при работе с PDF.

-  **Edge Show Downloads Toolbar Button** -- скрывает кнопку «Загрузки» на панели инструментов.

-  **Edge Show Home Button** -- скрывает кнопку «Домой» на панели инструментов.

-  **Edge SmartScreen Pua Enabled** -- включает блокировку потенциально нежелательных приложений через SmartScreen.

-  **Edge Speech Recognition Enabled** -- отключает распознавание речи в браузере.

-  **Edge Split Screen Enabled** -- отключает режим разделения экрана на две вкладки.

-  **Edge Standalone Hubs Sidebar Enabled** -- отключает боковую панель в отдельном режиме отображения.

-  **Edge Sync Disabled** -- отключает синхронизацию данных браузера с учётной записью Microsoft.

-  **Edge Task Manager End Process Enabled** -- запрещает завершать процессы через диспетчер задач браузера.

-  **Edge Upload From Phone Enabled** -- запрещает загрузку файлов с телефона через QR-код.

-  **Edge User Feedback Allowed** -- запрещает отправку отзывов о браузере в Microsoft.

-  **Edge Video Capture Allowed** -- запрещает сайтам доступ к камере.

-  **Edge Wallet Donation Enabled** -- отключает функцию пожертвований через встроенный кошелёк.

-  **Edge Web Capture Enabled** -- отключает инструмент захвата веб-страницы (скриншот и аннотирование страницы).

-  **Edge Form Suggest Passwords** -- запрещает предлагать сохранённые пароли для автозаполнения форм.

-  **Edge Use FormSuggest** -- отключает автозаполнение форм: адреса и стандартные данные.

-  **Explorer Allow Online Tips** -- запрещает показ онлайн-подсказок проводника.

-  **Explorer Disable Local Machine Run** -- блокирует автозапуск программ из ветки автозагрузки для всех пользователей (HKLM Run).

-  **Explorer Disable Local Machine Run Once** -- блокирует автозапуск программ из ветки одноразовой автозагрузки для всех пользователей (HKLM RunOnce).

-  **Explorer Dont Set Autoplay Checkbox** -- не показывает флажок «Всегда выполнять это действие» в диалоге автозапуска.

-  **Exolorer Hide Power Options** -- скрывает кнопки управления питанием: сон, перезагрузка, завершение работы.

-  **Explorer Allow No Autorun** -- запрещает автозапуск (тот же параметр, что и Explorer No Autorun).

-  **Explorer No Change Start Menu** -- запрещает изменять настройки меню «Пуск».

-  **Explorer No Drive Type AutoRun** -- отключает автозапуск для определённых типов дисков.

-  **Explorer No Recent Docs History** -- отключает хранение истории недавних документов.

-  **Explorer No Run** -- убирает пункт «Выполнить» из меню «Пуск».

-  **Explorer No Set Taskbar** -- запрещает менять настройки панели задач.

-  **Explorer No Start Menu MFU programs List** -- отключает список часто используемых программ в меню «Пуск».

-  **Explorer No Start Menu More Programs** -- убирает список «Все программы» из меню «Пуск».

-  **Explorer No Tray Context Menu** -- отключает контекстное меню значков в трее.

### One Drive

-  **OneDrive Prevent Network Traffic Pre User Sign In** -- запрещает OneDrive обращаться к сети до входа пользователя в систему.

### Windows Explorer

-  **Remove the Option to Change or Hide Toolbars** -- убирает возможность менять или скрывать панели инструментов проводника.

-  **Remove and prevent access to the Shut Down, Restart, Sleep, and Hibernate commands** -- убирает и запрещает доступ к командам «Завершение работы», «Перезагрузка», «Сон» и «Гибернация».

-  **Hide and disable all items on the desktop** -- скрывает и отключает все значки на рабочем столе.

-  **Disable Removable Media autorun** -- отключает автозапуск со съёмных носителей.

-  **Hide Drives in My Computer** -- скрывает диски в окне «Этот компьютер».

-  **Remove File menu from File Explorer** -- убирает меню «Файл» из проводника.

-  **Disable Folder Options Menu** -- отключает пункт меню «Параметры папок».

-  **Remove the Map and Disconnect Network Drive Options** -- убирает пункты подключения и отключения сетевого диска.

-  **Disable Network Neighborhood** -- отключает «Сетевое окружение».

-  **Remove Run menu from Start Menu** -- убирает пункт «Выполнить» из меню «Пуск».

-  **Disable saving settings on exit** -- не сохраняет изменения настроек проводника при выходе.

-  **Remove shortcut menus from the desktop and from Windows Explorer** -- убирает контекстные меню на рабочем столе и в проводнике.

-  **Disables or removes all menu items and buttons that log the user off the system.** -- убирает все пункты меню и кнопки для выхода пользователя из системы.

-  **Disable tray contextual menu** -- отключает контекстное меню значков в трее.

-  **Prohibit access to Control Panel and PC settings** -- запрещает доступ к панели управления и параметрам пк.

-  **Remove Logoff on the Start Menu** -- убирает пункт «Выход из системы» из меню «Пуск».

-  **Explorer disable WAU** -- отключает автоматическое обновление Windows.

-  **Explorer Disable Context Menus In Start** -- отключает контекстные меню в меню «Пуск».

-  **Explorer Explorer Ribbon Starts Minimized** -- лента проводника при запуске свёрнута.

-  **Explorer Hide Recently Added Apps** -- скрывает список недавно установленных приложений в меню «Пуск».

-  **Explorer No New App Alert** -- отключает уведомление о новых установленных приложениях.

-  **Explorer Always Show Classic Menu** -- всегда показывает классическую строку меню в проводнике.

-  **Explorer Clear Recent Docs On Exit** -- очищает список недавних документов при выходе из системы.

-  **Explorer Clear Recent Prog For New User In Start Menu** -- очищает список недавних программ в меню «Пуск» для новых пользователей.

-  **Explorer Disable Current User Run** -- блокирует автозапуск программ из ветки автозагрузки текущего пользователя (HKCU Run).

-  **Explorer Disable Current User Run Once** -- блокирует автозапуск программ из ветки одноразовой автозагрузки текущего пользователя (HKCU RunOnce).

-  **Explorer Disable Thumbnails** -- отключает миниатюры файлов, показывает только иконки.

-  **Explorer Disable Thumbnails On Network Folders** -- отключает миниатюры файлов в сетевых папках.

-  **Explorer Disallow Run** -- запрещает запуск программ из отдельно задаваемого списка.

-  **Explorer Dont Set Autoplay Checkbox** -- не показывает флажок «Всегда выполнять это действие» в диалоге автозапуска.

-  **Explorer Hide SCA Health** -- скрывает раздел «Работоспособность» в Центре поддержки Windows.

-  **Explorer Hide SCA Network** -- скрывает раздел «Сеть» в Центре поддержки Windows.

-  **Explorer Hide SCA Power** -- скрывает раздел «Электропитание» в Центре поддержки Windows.

-  **Explorer Intellimenus** -- отключает «умные» меню, скрывающие редко используемые пункты.

-  **Explorer Lock Taskbar** -- блокирует панель задач от перемещения и изменения размера.

-  **Explorer Max Recent Docs** -- задаёт максимальное количество документов в списке «Недавние».

-  **Explorer No Active Desktop Changes** -- запрещает менять параметры активного рабочего стола.

-  **Explorer No Autorun** -- отключает автозапуск со всех дисков.

-  **Explorer No Auto Update** -- отключает автоматическое обновление Windows.

-  **Explorer No CD Burning** -- отключает встроенную функцию записи CD/DVD средствами проводника.

-  **Explorer No Change Start Menu** -- запрещает изменять настройки меню «Пуск».

-  **Explorer No Close** -- убирает возможность завершения работы Windows.

-  **Explorer No Close Drag Drop Bands** -- запрещает перетаскивать и переупорядочивать панели на панели задач.

-  **Explorer No Common Groups** -- скрывает общие группы программ (для всех пользователей) в меню «Пуск».

-  **Explorer No Computers Near Me** -- убирает раздел «Компьютеры поблизости» в сетевом окружении.

-  **Explorer No Desktop** -- скрывает рабочий стол целиком.

-  **Explorer No DFS Tab** -- убирает вкладку распределённой файловой системы в свойствах папки.

-  **Explorer No Drives** -- скрывает диски в проводнике и в диалогах открытия и сохранения файлов.

-  **Explorer No Favorites Menu** -- убирает меню «Избранное» в проводнике.

-  **Explorer No File Menu** -- убирает меню «Файл» в проводнике.

-  **Explorer No Find** -- убирает возможность поиска файлов.

-  **Explorer No Folder Options** -- убирает пункт «Параметры папок» из меню «Сервис».

-  **Explorer No Hardware Tab** -- убирает вкладку «Оборудование» в свойствах дисков.

-  **Explorer No Instrumentation** -- отключает отслеживание действий пользователя в оболочке.

-  **Explorer No Internet Icon** -- убирает значок Internet Explorer с рабочего стола.

-  **Explorer No Logoff** -- убирает пункт «Выход из системы».

-  **Explorer No Manage My Computer Verb** -- убирает пункт «Управление» из контекстного меню «Мой компьютер».

-  **Explorer No Moving Bands** -- запрещает перемещать панели инструментов в проводнике.

-  **Explorer No Net Connect Disconnect** -- запрещает подключать и отключать сетевые диски.

-  **Explorer No Net Hood** -- скрывает «Сетевое окружение».

-  **Explorer No Network Connections** -- убирает доступ к папке «Сетевые подключения».

-  **Explorer No Preview Pane** -- отключает область предварительного просмотра в проводнике.

-  **Explorer No Properties My Computer** -- убирает пункт «Свойства» для «Мой компьютер».

-  **Explorer No Properties My Documents** -- убирает пункт «Свойства» для «Мои документы».

-  **Explorer No Properties Recycle Bin** -- убирает пункт «Свойства» для «Корзины».

-  **Explorer No Reading Pane** -- отключает область чтения в проводнике.

-  **Explorer No Recent Docs History** -- отключает хранение истории недавних документов.

-  **Explorer No Recent Docs Menu** -- убирает пункт «Недавние документы» из меню «Пуск».

-  **Explorer No Recent Docs Net Hood** -- не показывает сетевые ресурсы в списке недавних документов.

-  **Explorer No Recycle Files** -- отключает «Корзину»: файлы удаляются сразу без возможности восстановления.

-  **Explorer No Run** -- убирает пункт «Выполнить» из меню «Пуск».

-  **Explorer No Run as Install Prompt** -- убирает пункт «Запуск от имени администратора» для установщиков.

-  **Explorer No Save Settings** -- не сохраняет изменения расположения окон и параметров проводника.

-  **Explorer No Search Comm In Start Menu** -- убирает поиск по коммуникациям (почта, контакты) в меню «Пуск».

-  **Explorer No Search Computer Link In Start Menu** -- убирает ссылку поиска компьютера в меню «Пуск».

-  **Explorer No Search Files In Start Menu** -- отключает поиск файлов через меню «Пуск».

-  **Explorer No Search Internet In Start Menu** -- убирает поиск в интернете из меню «Пуск».

-  **Explorer No Search Programs In Start Menu** -- отключает поиск программ через меню «Пуск».

-  **Explorer No Security Tab** -- убирает вкладку «Безопасность» в свойствах файлов и папок.

-  **Explorer No Set Folders** -- запрещает менять параметры отображения содержимого папок.

-  **Explorer No Set Taskbar** -- запрещает менять настройки панели задач.

-  **Explorer No Shared Documents** -- убирает папку «Общие документы».

-  **Explorer No Shell Search Button** -- убирает кнопку поиска в проводнике.

-  **Explorer No SM Balloon Tip** -- отключает всплывающие подсказки меню «Пуск».

-  **Explorer No SM Configure Programs** -- убирает пункт настройки программ по умолчанию из меню «Пуск».

-  **Explorer No SM Help** -- убирает пункт «Справка» из меню «Пуск».

-  **Explorer No SM My Docs** -- убирает «Мои документы» из меню «Пуск».

-  **Explorer No SM My Pictures** -- убирает «Мои рисунки» из меню «Пуск».

-  **Explorer No Start Menu Eject PC** -- убирает пункт «Извлечь ПК» из меню «Пуск».

-  **Explorer No Start Menu MFU programs List** -- отключает список часто используемых программ в меню «Пуск».

-  **Explorer No Start Menu More Programs** -- убирает список «Все программы» из меню «Пуск».

-  **Explorer No Start Menu My Games** -- убирает раздел «Игры» из меню «Пуск».

-  **Explorer No Start Menu My Music** -- убирает «Моя музыка» из меню «Пуск».

-  **Explorer No Start Menu Network Places** -- убирает «Сетевое окружение» из меню «Пуск».

-  **Explorer No Start Menu Pinned List** -- убирает список закреплённых программ из меню «Пуск».

-  **Explorer No Start Menu SubFolders** -- не показывает вложенные папки в меню «Пуск».

-  **Explorer No Thumbnail Cache** -- отключает кэширование миниатюр.

-  **Explorer No Toolbars On Taskbar** -- запрещает добавлять панели инструментов на панель задач.

-  **Explorer No Tray Context Menu** -- отключает контекстное меню значков в трее.

-  **Explorer No User Folder In Start Menu** -- убирает папку пользователя из меню «Пуск».

-  **Explorer No User Name In Start Menu** -- не показывает имя пользователя в меню «Пуск».

-  **Explorer No View Context Menu** -- убирает вкладку «Вид» из контекстного меню.

-  **Explorer No View On Drive** -- запрещает менять параметры отображения для дисков.

-  **Explorer No Welcome Screen** -- отключает приветственный экран после входа в Windows.

-  **Explorer No Windows Update** -- блокирует доступ к Windows Update через меню «Пуск».

-  **Explorer No Win Keys** -- отключает клавишу Win и её горячие комбинации.

-  **Explorer Quick Launch Enabled** -- отключает панель быстрого запуска.

-  **Explorer Restrict Cpl** -- ограничивает доступ к отдельным апплетам панели управления.

-  **Explorer Restrict Welcome Center** -- блокирует доступ к «Центру приветствия» Windows.

-  **Explorer Settings Page Visibility** -- определяет, какие страницы приложения «Параметры» видны пользователю.

-  **Explorer Start Menu LogOff** -- скрывает или скрывает пункт выхода из системы в меню «Пуск».

-  **Explorer Taskbar Lock All** -- полностью блокирует панель задач от любых изменений.

-  **Explorer Taskbar No Add Remove Toolbar** -- запрещает добавлять и удалять панели инструментов на панели задач.

-  **Explorer Taskbar No Drag Toolbar** -- запрещает перетаскивать панели инструментов на панели задач.

-  **Explorer Taskbar No Notification** -- скрывает область уведомлений на панели задач.

-  **Explorer Taskbar No Redock** -- запрещает перемещать панель задач к другому краю экрана.

-  **Explorer Taskbar No Resize** -- запрещает изменять размер панели задач.

-  **Explorer Disallow Run powershell** -- блокирует запуск обычной PowerShell (powershell.exe).

-  **Explorer Disallow Run powershell_ise** -- блокирует запуск PowerShell ISE (powershell_ise.exe).

-  **Explorer Restrict Cpl mmsys.cpl** -- блокирует доступ к апплету настройки звука в панели управления.

-  **Explorer WAU Disabled** -- отключает автоматическое обновление Windows.

-  **Explorer Clear Tiles On Exit** -- очищает плитки меню «Пуск» при выходе пользователя.

-  **Explorer Disable Context Menus In Start** -- отключает контекстные меню в меню «Пуск».

-  **Explorer Disable Notification Center** -- отключает Центр уведомлений Windows.

-  **Explorer Disable Search Box Suggestions** -- отключает подсказки в поисковой строке.

-  **Explorer Disable Thumbs DB On Network Folders** -- запрещает создание файлов thumbs.db в сетевых папках.

-  **Explorer Enable Legacy Balloon Notifications** -- отключает современный стиль уведомлений в пользу старого вида (balloon).

-  **Explorer Explorer Ribbon Starts Minimized** -- лента проводника при запуске свёрнута.

-  **Explorer Hide Content View Mode Snippets** -- скрывает предпросмотр содержимого в режиме просмотра «Содержимое».

-  **Explorer Hide People Bar** -- скрывает панель «Люди» на панели задач.

-  **Explorer Hide Recently Added Apps** -- скрывает список недавно установленных приложений в меню «Пуск».

-  **Explorer No Autoplay Fornon Volume** -- отключает автозапуск для устройств, не являющихся томами.

-  **Explorer No Balloon Feature Advertisements** -- отключает всплывающие рекламные подсказки о функциях Windows.

-  **Explorer No Pinning Store To Taskbar** -- запрещает закреплять Microsoft Store на панели задач.

-  **Explorer No Pinning To Destinations** -- запрещает закреплять элементы в списках переходов.

-  **Explorer No Pinning To Taskbar** -- запрещает закреплять программы на панели задач.

-  **Explorer No Remote Destinations** -- скрывает удалённые объекты в списках переходов.

-  **Explorer No Search Everywhere Link In Start Menu** -- убирает ссылку «Искать всюду» из меню «Пуск».

-  **Explorer No Search Internet Try Harder Button** -- убирает кнопку расширенного поиска в интернете.

-  **Explorer No Start Menu Downloads** -- убирает папку «Загрузки» из меню «Пуск».

-  **Explorer No Start Menu Homegroup** -- убирает «Домашнюю группу» из меню «Пуск».

-  **Explorer No Start Menu Recorded TV** -- убирает раздел «Записанное ТВ» из меню «Пуск».

-  **Explorer No Start Menu Videos** -- убирает «Видео» из меню «Пуск».

-  **Explorer No Systray System Promotion** -- отключает рекламные значки системы в трее.

-  **Explorer No Uninstall From Start** -- запрещает удалять программы прямо из меню «Пуск».

-  **Explorer Show Run As Different User In Start** -- скрывает пункт «Запуск от имени другого пользователя» в меню «Пуск».

-  **Explorer Show Windows Store Apps On Taskbar** -- скрывает приложения из Microsoft Store на панели задач.

-  **Explorer Taskbar No Pinned List** -- очищает и запрещает список закреплённых значков на панели задач.

### System

-  **Remove Change Password** -- убирает вкладку смены пароля с экрана блокировки Windows.

-  **Disable the Command Prompt** -- блокирует запуск командной строки.

-  **Disable Workstation Lock** -- запрещает блокировку рабочей станции, включая Win+L.

-  **DisableRegistryTools** -- блокирует запуск редактора реестра.

-  **Disable Task Manager** -- блокирует запуск диспетчера задач.

-  **HideFastUserSwitching** -- скрывает быстрое переключение пользователей.

-  **System Disable Startup Sound** -- отключает звук приветствия Windows при запуске.

-  **System Disable Status Messages** -- отключает информационные сообщения о состоянии, например «Применение параметров…» при входе.

-  **System Allow Domain Delay Lock** -- разрешает отложенную блокировку рабочей станции в домене.

-  **System Disable Lock Screen App Notifications** -- отключает уведомления приложений на экране блокировки.

-  **System Disable Change Password** -- запрещает пользователю менять свой пароль.

-  **System Disable Lock Workstation** -- запрещает блокировать рабочую станцию.

-  **System Disable Registry Tools** -- блокирует средства редактирования реестра.

-  **System Disable Task Mgr** -- блокирует диспетчер задач.

-  **System Disable CMD** -- блокирует командную строку.

### Windows

-  **Windows Turn Off Win Cal** -- отключает Windows Calendar.

-  **Windows Turn Off Sidebar** -- отключает боковую панель Windows (гаджеты).

-  **Windows File History** -- управляет доступностью функции «История файлов».

-  **Windows Allow Game DVR** -- запрещает запись игрового процесса (Game DVR / Xbox Game Bar).

-  **Windows Disable Home Group** -- отключает «Домашнюю группу».

-  **Windows Maps Auto Download And Update Map Data** -- запрещает автоматическую загрузку и обновление офлайн-карт приложения «Карты».

-  **Windows No Lock Screen Camera** -- убирает быстрый доступ к камере с экрана блокировки.

-  **Windows No Lock Screen Slideshow** -- отключает слайд-шоу изображений на экране блокировки.

-  **Windows Powershell Execution Policy** -- задаёт политику выполнения скриптов PowerShell.

-  **Windows Powershell Enable Scripts** -- запрещает выполнение скриптов PowerShell.

-  **WindowsSearch Allow Cortana In Aad** -- запрещает работу Кортаны для учётных записей Azure AD.

-  **WindowsSearch Allow Cortana In Aad Path Oobe** -- запрещает Кортану в Azure AD на этапе первоначальной настройки системы.

-  **WindowsSearch Allow Cloud Search** -- запрещает поиск по облачному контенту, например файлам OneDrive, через поиск Windows.

-  **WindowsSearch Allow Cortana** -- запрещает работу голосового помощника Кортана.

-  **WindowsSearch Allow Cortana Above Lock** -- запрещает использовать Кортану с экрана блокировки.

-  **Windows TurnOffWinCal** -- отключает Windows Calendar.

-  **Windows Prevent Run** -- запрещает запуск программ из отдельно задаваемого списка.

-  **Windows Sound Recorder** -- управляет доступностью приложения «Звукозапись».

-  **Windows Cloud Content Disable Windows Spotlight Features** -- отключает функции Windows Spotlight на экране блокировки и рабочем столе.

-  **Windows Cloud Content Disable Windows Spotlight Windows Welcome Experience** -- отключает приветственные экраны Windows Spotlight после крупных обновлений.

-  **Windows CredUI Disable Password Reveal** -- убирает кнопку показа пароля в стандартных диалогах ввода пароля.

### Chrome

-  **Chrome Ads Setting For Intrusive Ads Sites** -- блокирует навязчивую рекламу на сайтах, нарушающих стандарты Better Ads.

-  **Chrome Allow Deleting Browser History** -- запрещает пользователю удалять историю браузера.

-  **Chrome Allow Dinosaur Easter Egg** -- запрещает игру-динозаврика при отсутствии интернета.

-  **Chrome Allow File Selection Dialogs** -- запрещает системные диалоги выбора файлов.

-  **Chrome Allow Outdated Plugins** -- запрещает работу устаревших плагинов.

-  **Chrome Autofill Credit Card Enabled** -- отключает автозаполнение банковских карт.

-  **Chrome Background Mode Enabled** -- запрещает Chrome работать в фоне после закрытия всех окон.

-  **Chrome Block External Extensions** -- блокирует установку расширений из внешних источников.

-  **Chrome Bookmark Bar Enabled** -- скрывает панель закладок.

-  **Chrome Browser Add Person Enabled** -- запрещает добавлять новые профили браузера.

-  **Chrome Browser Guest Mode Enabled** -- отключает гостевой режим браузера.

-  **Chrome Browser Signin** -- управляет возможностью входа в браузер с аккаунтом Google.

-  **Chrome Built In Dns Client Enabled** -- отключает встроенный DNS-клиент Chrome вместо системного.

-  **Chrome Default Browser Setting Enabled** -- запрещает Chrome предлагать себя браузером по умолчанию.

-  **Chrome Developer Tools Availability** -- управляет доступностью инструментов разработчика.

-  **Chrome Disable Screenshots** -- запрещает создание скриншотов средствами браузера.

-  **Chrome Dns Over Https Mode** -- задаёт режим работы DNS-over-HTTPS.

-  **Chrome Download Restrictions** -- ограничивает, какие файлы разрешено скачивать.

-  **Chrome Edit Bookmarks Enabled** -- запрещает редактировать закладки.

-  **Chrome Force Ephemeral Profiles** -- делает профиль браузера временным: все данные удаляются при закрытии.

-  **Chrome Hide Web Store Icon** -- скрывает значок Chrome Web Store.

-  **Chrome Incognito Mode Availability** -- управляет доступностью режима инкогнито.

-  **Chrome NTP Custom Background Enabled** -- запрещает менять фоновое изображение страницы новой вкладки.

-  **Chrome Password Manager Enabled** -- отключает менеджер паролей браузера.

-  **Chrome Printing Enabled** -- запрещает печать из браузера.

-  **Chrome Site Per Process** -- отключает изоляцию сайтов по отдельным процессам для безопасности.

-  **Chrome Spellcheck Enabled** -- отключает проверку орфографии.

-  **Chrome SpellCheck Service Enabled** -- запрещает использовать облачный сервис проверки орфографии Google.

-  **Chrome Sync Disabled** -- отключает синхронизацию данных браузера с аккаунтом Google.

-  **Chrome Translate Enabled** -- отключает предложение перевода страниц.

### Miscellaneous

-  **Windows Assistance No Active Help** -- отключает активную справку и удалённую помощь Windows.

-  **Windows Camera Allow Camera** -- запрещает использование камеры устройства.

-  **Windows Event Viewer MicrosoftRedirectionProgram** -- управляет перенаправлением событий журнала событий Windows в сторонние программы просмотра.

-  **Windows Messenger Client Prevent Run** -- запрещает запуск клиента Windows Messenger.

-  **Windows Sound Recorder Soundrec** -- управляет доступностью классического приложения «Звукозапись».

-  **Windows Speech AllowSpeechModelUpdate** -- запрещает обновление речевых моделей распознавания речи.

-  **WindowsNT MYS DisableShowAtLogon** -- отключает показ подсказок «Совет дня» при входе в систему.

-  **WindowsNT IIS PreventIISInstall** -- запрещает установку компонента IIS в Windows.

-  **Push Notifications NoCloudApplicationNotification** -- отключает push-уведомления приложений через облако Microsoft.

-  **Protected Event Logging Encryption Certificate** -- сертификат шифрования для защищённого журналирования событий PowerShell.

-  **Protected Event Logging Enable Protected Event Logging** -- включает защищённое журналирование событий PowerShell.

-  **Windows Inc Workspace Allow Windows Ink Workspace** -- запрещает использование рабочей области Windows Ink.

### Windows defender

-  **Windows Defender pua protection** -- включает защиту от потенциально нежелательных приложений.

-  **Windows Defender Allow Fast Service Startup** -- разрешает ускоренный запуск службы Защитника Windows.

-  **Windows Defender Service Keep Alive** -- не даёт службе Защитника останавливаться.

-  **Windows Defender Realtime Protection Disable Behavior Monitoring** -- отключает мониторинг поведения процессов в защите реального времени.

-  **Windows Defender Realtime Protection Disable IOAV Protection** -- отключает проверку файлов при загрузке из интернета и открытии.

-  **Windows Defender Realtime Protection Disable On Access Protection** -- отключает проверку файлов в момент доступа к ним.

-  **Windows Defender Realtime Protection Disable Realtime Monitoring** -- полностью отключает защиту в реальном времени.

-  **Windows Defender Realtime Protection Disable Scan On Realtime Enable** -- отключает проверку при включении защиты реального времени.

-  **Windows DefenderScan Disable Scanning Network Files** -- исключает сетевые файлы из проверки Защитником.

### Removable storage

-  **Removable Storage Devices Deny All Removable Storage Devices** -- полностью блокирует все съёмные накопители.

-  **Removable Storage Devices CD and DVD Deny Execute** -- запрещает запуск программ с CD/DVD.

-  **Removable Storage Devices CD and DVD Deny Read** -- запрещает чтение с CD/DVD.

-  **Removable Storage Devices Tape Drives Deny Write** -- запрещает запись на ленточные накопители.

-  **Removable Storage Devices Tape Drives Deny Execute** -- запрещает запуск программ с ленточных накопителей.

-  **Removable Storage Devices Tape Drives Deny Read** -- запрещает чтение с ленточных накопителей.

-  **Removable Storage Devices CD and DVD Deny Write** -- запрещает запись на CD/DVD.

-  **Removable Storage Devices Removable Disks Deny Execute** -- запрещает запуск программ со съёмных дисков.

-  **Removable Storage Devices Removable Disks Deny Read** -- запрещает чтение со съёмных дисков.

-  **Removable Storage Devices Removable Disks Deny Write** -- запрещает запись на съёмные диски.

-  **Removable Storage Devices Floppy Drives Deny Execute** -- запрещает запуск программ с дискет.

-  **Removable Storage Devices Floppy Drives Deny Read** -- запрещает чтение с дискет.

-  **Removable Storage Devices Floppy Drives Deny Write** -- запрещает запись на дискеты.

### Windows update

-  **Windows Update Manage Preview Builds Policy Value** -- задаёт значение политики управления предварительными сборками Windows.

-  **WindowsUpdate Do Not Connect To Windows Update Internet Locations** -- запрещает обращение к серверам обновлений напрямую через интернет, например при использовании WSUS.

-  **WindowsUpdate Manage Preview Builds** -- отключает или отключает получение предварительных сборок Windows.

-  **Windows Update Set Disable UXWU Access** -- отключает доступ к разделу «Центр обновления Windows» в параметрах.

-  **Windows UpdateAu Allow MU Update Service** -- запрещает использовать службу Microsoft Update для обновления других продуктов Microsoft.

-  **Windows UpdateAu Au Options** -- задаёт режим автообновления: уведомлять, скачивать и уведомлять, или устанавливать по расписанию.

-  **Windows UpdateAu Automatic Maintenance Enabled** -- отключает автоматическое обслуживание системы, включая фоновую установку обновлений.

-  **Windows UpdateAu Scheduled Install Day** -- задаёт день недели для установки обновлений по расписанию.

-  **Windows UpdateAu scheduledinstalleveryweek** -- устанавливает обновления каждую неделю, а не раз в месяц.

-  **Windows UpdateAu Scheduled Install First Week** -- устанавливает обновления в первую неделю месяца.

-  **Windows UpdateAu Scheduled Install Fourth Week** -- устанавливает обновления в четвёртую неделю месяца.

-  **Windows UpdateAu Scheduled Install Second Week** -- устанавливает обновления во вторую неделю месяца.

-  **Windows UpdateAu Scheduled install Third Week** -- устанавливает обновления в третью неделю месяца.

-  **Windows UpdateAu Scheduled Install Time** -- задаёт время суток для установки обновлений по расписанию.

-  **Windows UpdateAu No Auto Update** -- полностью отключает автоматическое обновление Windows.

### Windows firewall

-  **Windows Firewall Domain Disable Notifications** -- отключает уведомления брандмауэра в доменном профиле сети.

-  **Windows Firewall Domain Enable Firewall** -- включает брандмауэр в доменном профиле сети.

-  **Windows Firewall Standard Disable Notifications** -- отключает уведомления брандмауэра в частном или публичном профиле сети.

-  **Windows Firewall Standard Enable Firewall** -- включает брандмауэр в частном или публичном профиле сети.

### Windows store

-  **Windows Store Auto Download** -- запрещает автоматическую загрузку обновлений приложений из Microsoft Store.

-  **Windows Store Disable OS Upgrade** -- блокирует предложения обновления версии Windows через Store.

-  **Windows Store Disable Store Apps** -- полностью отключает Microsoft Store.

-  **Windows Store Remove Windows Store** -- удаляет доступ к приложению Microsoft Store.

-  **Windows Store Require Private Store Only** -- запрещает установку только из корпоративного магазина организации.

-  **Windows Store Disable OS Upgrade** -- блокирует предложения обновления версии Windows через Store.

-  **Windows Store Remove Windows Store** -- удаляет доступ к приложению Microsoft Store.

-  **Windows Store Require Private Store Only** -- запрещает установку только из корпоративного магазина организации.

### Active desktop

-  **Active Desktop NoAdding Components** -- запрещает добавлять компоненты активного рабочего стола.

-  **Active Desktop No Components** -- отключает компоненты активного рабочего стола целиком.

-  **Active Desktop No Deleting Components** -- запрещает удалять компоненты активного рабочего стола.

-  **Active Desktop No Editing Components** -- запрещает редактировать компоненты активного рабочего стола.

-  **Attachments Scan With AntiVirus** -- принудительно проверяет вложения антивирусом перед открытием.

### Common dialog

-  **Hide the common dialog back button** -- скрывает кнопку «Назад» в стандартных диалогах открытия и сохранения файлов.

-  **Hide the dropdown list of recent files** -- скрывает выпадающий список недавних файлов в этих диалогах.

-  **Hide the common dialog places bar** -- скрывает панель «Избранные места» в этих диалогах.

-  **Comdlg32 No Back Button** -- скрывает кнопку «Назад» в стандартных диалогах открытия и сохранения файлов.

-  **Comdlg32 No File Mru** -- скрывает выпадающий список недавних файлов в этих диалогах.

-  **Comdlg32 No Places Bar** -- скрывает панель «Избранные места» в этих диалогах.

### Network

-  **Network No Entire Network** -- скрывает пункт «Вся сеть» в сетевом окружении.

-  **Network Connections Allow Advanced TCPIP Config** -- запрещает менять расширенные настройки TCP/IP в свойствах подключения.

-  **Network Connections New Connection Wizard** -- управляет доступностью мастера создания нового подключения.

### No enum

-  **Remove Computer icon on the desktop** -- убирает значок «Компьютер» с рабочего стола.

-  **Hide Network Places** -- скрывает «Сетевое окружение».

-  **Hide Control Panel** -- скрывает панель управления.

-  **Disable Chrome downloads** -- блокирует загрузки файлов в браузере Chrome.

-  **NonEnum Remove Computer icon on the desktop** -- убирает значок «Компьютер» с рабочего стола.

-  **NonEnum Remove My Documents icon on the desktop** -- убирает значок «Мои документы» с рабочего стола.

-  **NonEnum Remove Recycle Bin icon from desktop** -- убирает значок «Корзина» с рабочего стола.

### MMC

-  **MMCPolicy Restrict Author Mode** -- запрещает открывать MMC в авторском режиме создания и редактирования консолей.

-  **MMCPolicy Restrict To Permitted Snapins** -- разрешает использовать в MMC только оснастки из явно заданного списка.

-  **MMC Policy Restrict Security Configuration and Analysis** -- запрещает оснастку сравнения и применения шаблонов безопасности.

-  **MMC Policy Restrict SMTP Protocol** -- запрещает оснастку управления службой SMTP-сервера.

-  **MMC Policy Restrict System Properties** -- запрещает оснастку свойств системы.

-  **MMC Policy Restrict Administrative Templates (Users)** -- запрещает оснастку административных шаблонов пользовательской части групповых политик.

-  **MMC Policy Restrict Administrative Templates (Users) (1)** -- запрещает оснастку административных шаблонов пользовательской части групповых политик.

-  **MMC Policy Restrict Administrative Templates (Users) (2)** -- запрещает оснастку административных шаблонов пользовательской части групповых политик.

-  **MMC Policy Restrict .Net Framework Configuration** -- запрещает оснастку настройки .NET Framework.

-  **MMC Policy Restrict Routing and Remote Access** -- запрещает оснастку службы маршрутизации и удалённого доступа.

-  **MMC Policy Restrict AppleTalk Routing** -- запрещает оснастку маршрутизации протокола AppleTalk.

-  **MMC Policy Restrict ADSI Edit** -- запрещает редактор ADSI Edit для правки Active Directory.

-  **MMC Policy Restrict Authorization Manager** -- запрещает оснастку диспетчера авторизации.

-  **MMC Policy Restrict Wireless Monitor** -- запрещает оснастку мониторинга беспроводных сетей.

-  **MMC Policy Restrict Removable Storage** -- запрещает оснастку управления съёмными носителями.

-  **MMC Policy RestrictIAS Logging** -- запрещает оснастку журналирования службы IAS.

-  **MMC Policy Restrict Public Key Policies** -- запрещает оснастку политик открытых ключей.

-  **MMC Policy Restrict Event Viewer** -- запрещает «Просмотр событий».

-  **MMC Policy Restrict Event Viewer (2)** -- запрещает «Просмотр событий».

-  **MMC Policy Restrict Removable Storage Management** -- запрещает расширенную оснастку управления съёмными носителями.

-  **MMC Policy Restrict Remote Desktops** -- запрещает оснастку управления несколькими сеансами удалённого рабочего стола.

-  **MMC Policy Restrict Certification Authority Policy Settings** -- запрещает оснастку политик центра сертификации.

-  **MMC Policy Restrict Disk Defragmenter** -- запрещает оснастку дефрагментации диска.

-  **MMC Policy Restrict System Information** -- запрещает оснастку «Сведения о системе».

-  **MMC Policy Restrict Certificates** -- запрещает оснастку «Сертификаты».

-  **MMC Policy Restrict IP Security Monitor** -- запрещает оснастку мониторинга политик IPsec.

-  **MMC Policy Restrict Shared Folders** -- запрещает оснастку «Общие папки».

-  **MMC Policy Restrict Services** -- запрещает оснастку «Службы».

-  **MMC Policy Restrict Computer Management** -- запрещает оснастку «Управление компьютером».

-  **MMC Policy Restrict Shared Folders Ext** -- запрещает расширенную версию оснастки «Общие папки».

-  **MMC Policy Restrict Remote Access** -- запрещает оснастку удалённого доступа.

-  **MMC Policy Restrict Security Templates** -- запрещает оснастку шаблонов безопасности.

-  **MMC Policy Restrict WMI Control** -- запрещает оснастку управления службой WMI.

-  **MMC Policy Restrict Local Users and Groups** -- запрещает оснастку «Локальные пользователи и группы».

-  **MMC Policy Restrict Enterprise PKI** -- запрещает оснастку мониторинга инфраструктуры открытых ключей предприятия.

-  **MMC Policy Restrict Distributed File System** -- запрещает оснастку распределённой файловой системы.

-  **MMC Policy Restrict Logical and Mapped Drives** -- запрещает оснастку отображения логических и подключённых сетевых дисков.

-  **MMC Policy Restrict Device Manager** -- запрещает «Диспетчер устройств».

-  **MMC Policy Restrict Device Manager (2)** -- запрещает «Диспетчер устройств».

-  **MMC Policy Restrict Performance Logs and Alerts** -- запрещает оснастку журналов и оповещений производительности.

-  **MMC Policy Restrict FAX Service** -- запрещает оснастку управления службой факса.

-  **MMC Policy Restrict SNMP** -- запрещает оснастку настройки протокола SNMP.

-  **MMC Policy Restrict Disk Management** -- запрещает оснастку «Управление дисками».

-  **MMC Policy Restrict IAS** -- запрещает оснастку службы IAS.

-  **MMC Policy Restrict Group Policy Object Editor** -- запрещает редактор объектов групповой политики.

-  **MMC Policy Restrict IPX Routing** -- запрещает оснастку маршрутизации протокола IPX.

-  **MMC Policy Restrict IPX RIP Routing** -- запрещает маршрутизацию IPX по протоколу RIP.

-  **MMC Policy Restrict IPX SAP Routing** -- запрещает маршрутизацию IPX по протоколу SAP.

-  **MMC Policy Restrict Indexing Service** -- запрещает оснастку службы индексирования файлов.

-  **MMC Policy Restrict DCOM Configuration Extension** -- запрещает расширение настройки компонентов DCOM.

-  **MMC Policy Restrict Internet Information Services** -- запрещает оснастку веб-сервера IIS.

-  **MMC Policy Restrict Certificate Templates** -- запрещает оснастку шаблонов сертификатов.

-  **MMC Policy Restrict Send Console Message** -- запрещает отправку сообщений другим пользователям сети через консоль.

-  **MMC Policy Restrict RAS Dialin - User Node** -- запрещает узел настройки удалённого доступа для конкретного пользователя.

-  **MMC Policy Restrict Extended View (Web View)** -- запрещает расширенный (веб) режим отображения MMC.

-  **MMC Policy Restrict Remote Desktop Services Configuration** -- запрещает оснастку настройки служб удалённых рабочих столов.

-  **MMC Policy Restrict Service Dependencies** -- запрещает просмотр зависимостей служб Windows.

-  **MMC Policy Restrict IP Routing** -- запрещает оснастку настройки маршрутизации IP.

-  **MMC Policy Restrict DHCP Relay Management** -- запрещает управление ретрансляцией DHCP.

-  **MMC Policy Restrict RIP Routing** -- запрещает маршрутизацию по протоколу RIP.

-  **MMC Policy Restrict OSPF Routing** -- запрещает маршрутизацию по протоколу OSPF.

-  **MMC Policy Restrict IGMP Routing** -- запрещает маршрутизацию многоадресной рассылки по протоколу IGMP.

-  **MMC Policy Restrict Connection Sharing (NAT)** -- запрещает общий доступ к подключению (NAT).

-  **MMC Policy Restrict ActiveX Control** -- запрещает вставку элементов управления ActiveX в консоль MMC.

-  **MMC Policy Restrict Link to Web Address** -- запрещает добавление ссылок на веб-адреса в консоль MMC.

-  **MMC Policy Restrict Component Services** -- запрещает оснастку «Службы компонентов».

-  **MMC Policy Restrict Active Directory Sites and Services** -- запрещает оснастку «Active Directory -- сайты и службы».

-  **MMC Policy Restrict Routing** -- запрещает общую оснастку маршрутизации.

-  **MMC Policy Restrict Certification Authority** -- запрещает оснастку центра сертификации.

-  **MMC Policy Restrict IP Security Policy Management** -- запрещает управление политиками IPsec.

-  **MMC Policy Restrict Group Policy Management** -- запрещает «Управление групповой политикой».

-  **MMC Policy Restrict Telephony** -- запрещает оснастку настройки телефонии.

-  **MMC Policy Restrict Active Directory Users and Computers** -- запрещает оснастку «Active Directory -- пользователи и компьютеры».

-  **MMC Policy Restrict Active Directory Domains and Trusts** -- запрещает оснастку «Active Directory -- домены и доверие».

-  **MMC Policy Restrict QoS Admission Control** -- запрещает оснастку управления допуском по качеству обслуживания сети.

-  **MMC Policy Restrict FrontPage Server Extensions** -- запрещает расширения сервера FrontPage.

-  **MMC Policy Restrict Server Manager** -- запрещает «Диспетчер серверов».

-  **MMC Policy Restrict Network Policy Server** -- запрещает оснастку сервера сетевых политик.

-  **MMC Policy Restrict Online Responder** -- запрещает оснастку службы онлайн-отклика для проверки статуса сертификатов.

-  **MMC Policy Restrict TPM Management** -- запрещает управление доверенным платформенным модулем.

-  **MMC Policy Restrict Health Registration Authority** -- запрещает службу регистрации работоспособности.

-  **MMC Policy Restrict NAP Client Configuration** -- запрещает настройку клиента защиты доступа к сети.

-  **MMC Policy Restrict Windows Firewall with Advanced Security** -- запрещает брандмауэр Windows в режиме повышенной безопасности.

-  **MMC Policy Restrict Failover Clusters Manager** -- запрещает «Диспетчер отказоустойчивых кластеров».

### Power shell

-  **PowerShell Enable Scripts** -- запрещает выполнение скриптов PowerShell.

-  **PowerShell Execution Policy** -- задаёт политику выполнения скриптов PowerShell.

### Task scheduler

-  **Task Scheducler Allow Browse** -- запрещает обзор запланированных задач через интерфейс.

-  **Task Scheducler Task Creation** -- запрещает пользователю создавать новые запланированные задачи.

### Windows error reporting

-  **Windows Error Reporting Disabled** -- полностью отключает отправку отчётов об ошибках в Microsoft.

-  **Windows Error Reporting Dont Send Additional Data** -- не отправляет дополнительные данные, например дампы памяти, вместе с отчётом.

-  **Windows Error Reporting Logging Disabled** -- отключает журналирование отчётов об ошибках.

### Windows media player

-  **Windows Media Player Prevent CD DVD Metadata Retrieval** -- запрещает получение метаданных CD/DVD из интернета.

-  **Windows Media Player Prevent Codec Download** -- запрещает автоматическую загрузку кодеков.

-  **Windows Media Player Prevent Music File Metadata Retrieval** -- запрещает получение метаданных музыкальных файлов из интернета.

-  **Windows Media Player Prevent Radio Presets Retrieval** -- запрещает загрузку предустановленных интернет-радиостанций.