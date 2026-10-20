  document.addEventListener("DOMContentLoaded", function () {
      // Классы для удаления: { "селектор": ["класс1", "класс2"] }
    const classesToRemove = {
    ".t-btn": ["t-btnflex", "t-btnflex_type_button"], //  Тильда добавила эти классы к кнопкам 29.07.2025
    ".t-col": ["t-prefix_1", "t-prefix_4"],
    ".t795__title": ["t-title_xs"],
    ".t795__descr": ["t-descr_xl"],
    ".t030__title": ["t-title_xxs"],
    ".t030__descr": ["t-descr_md"],
    ".t165 .t-col": ["t165__vmiddle"],
    ".t165__text": ["t-text_sm"],
    ".t958__popup-item": ["t-width_4"],
    ".uc-column-reverse .t-col_8": ["t165__col-top"],
    ".uc-main-block .t-btn": ["t-btnflex_md"],
    ".uc-main-teachers .t-btn": ["t-btnflex_md"],
    ".uc-descHeroHeader .t-text": ["t-text_md"],
    ".uc-foundersInstitute .t527__itemwrapper": ["t527__itemwrapper_2"],
    ".t503__container": ["t-card__container_inrow1", 
                       "t-card__container_inrow2",
                       "t-card__container_inrow3",
                       "t-card__container_inrow4"],
    ".uc-specifications-02 .t1095__textwrapper": ["t1095__textwr_leftpadding"],
    "#rec1255516271 .t-card__uptitle": ["t-uptitle"],
    "#rec1282526171 .t-container": ["t-container"],
    ".t1196 .t-section__container": ["t-container"],
    "#rec1527650641 .t-container": ["t-container"],
    ".uc-popup-reg .t-popup__container": ["t-width_10"]
    };
      
      
    // Классы для добавления
    const elementsToAddCol8 = [".t030__title", ".t030__descr", "h2.t-section__title.t-align_left", ".t-section__descr.t-align_left"];
    const elementsToAddCol6 = [".uc-programs-slider .t1196__item"];
    const elementsToAddCol3 = [".uc-events-slider .t1196__item"];
    const elementsToAddAccentBlock = [".uc-advantages_01 li", ".uc-mission .t165", ".uc-accent-header .t795", ".t481", ".t794__content", "#rec1168902126 .t503", ".t983__card", ".uc-about_program .t491", ".t1196__item", ".uc-events-main_block .t-container"]; // , ".uc-advantages_02 .t503", ".t975__wrapper", "#rec1142617041 .t-popup"
    const elementsToAddWhiteBlock = ["#rec1168902126 ul.t503__container li", ".uc-about_program ul.t491__container li"];
    const elementsToAddContainerFluid = [".uc-mission .t165", ".uc-accent-header .t795", ".t975__wrapper", "#rec1168902126 .t503", ".uc-about_program .t491", "#rec1267432761 .t117", "#rec1282526171 .t431 > div"]; 
    const elementsToAddContainer = [".t958__gallery", "#rec1255516271 .t774__container", ".uc-curriculum .t897__container", ".uc-events-slider .t1196__items", "#rec1527650641 .t165"]; // , ".uc-programs-slider .t1196__controls"
    const elementsToAddTextT1 = [".t165__text", ".uc-descHeroHeader .t-text", "#rec1191010491 .t-text", ".uc-specifications-02 .t-descr", "#rec1260268831 .t572__text", ".uc-t1 .t-text", ".t185__text"]; // , ".t958__review-text"
    const elementsToAddButtonS = [".t794__typo", ".uc-events-slider .t-btn"];
    const elementsToAddButtonM = [".t-btnflex_md", ".t481 .t-menu__link-item", "#rec1255516271 .t-btn"]; //, ".uc-programs-slider a.t-btn"
    const elementsToAddButtonL = [".uc-main-block .t-btn", ".uc-main-teachers .t-btn"];
    
    const elementsToAddButtonStyleAccentMain = [".uc-programs-slider a.t-btn:first-child", ".uc-events-slider .t-btn"];
    const elementsToAddButtonStyleAccentMinor = [".t668__icon", ".t185 .t-btn"];
    
    const elementsToAddButtonStyleNeutralMain = [".uc-events-main_block .t-btn"];
    const elementsToAddButtonStyleNeutralOutline = [".uc-about_program .t-btn"];
    const elementsToAddButtonStyleNeutralMinor = [".uc-programs-slider a.t-btn:last-child"];
    const elementsToAddButtonStyleNeutralGhost = [".t-popup__close-wrapper", ".t-feed_col .t-feed__post-popup__close-wrapper a.t-popup__close", ".t824__popup-close"];
    
    const elementsToAddButtonIconS = ["#rec1142617041 .t-popup__close-wrapper"];
    const elementsToAddButtonIconM = [".t-popup__close-wrapper", ".t958__next", ".t958__previous", ".t958__close-button", ".uc-programs-slider .t1196__control", ".t-feed_col .t-feed__post-popup__close-wrapper a.t-popup__close", ".t668__icon"]; // , ".t975__list-item"
    
    const elementsToAddColTop = [".uc-column-reverse .t-col_4"];
    
    const elementsToAddBadge = [".uc-bread-crumbs .t758__link-item__wrapper"];
    const elementsToAddBadgeL = [".uc-main-block .badge", ".uc-main-teachers .badge", ".uc-bread-crumbs .badge", ".uc-events-main_block .badge"];
    
    const elementsToAddBadgeStyleAccentMinor = [".uc-bread-crumbs .badge"];
    
    
    const elementsToAddGradientTitle = [".uc-main-teachers h1", ".uc-events-main_block h1"];
    
     // Ищем span с точным совпадением background-color в атрибуте style
    const spansBadge = document.querySelectorAll("span[style='background-color: rgb(0, 182, 255);']");
    
    // Добавляем класс badge
    spansBadge.forEach(span => {
        span.classList.add("badge");
    });
    
    // Все элементы с id, начинающимся на "rec"
    const elementsToConvertSection = document.querySelectorAll('div[id^="rec"]');


        // Элементы для замены div -> h2
    const elementsToConvertH2 = [".t-section__container .t-section__title"];

    // Элементы для замены div -> h3
    const elementsToConvertH3 = [".t030__descr", ".t795__descr", ".t-section__descr" ];
    
    // Элементы для замены div -> h4
    const elementsToConvertH4 = [".uc-h4", ".t958__author-name", "#rec1163982661 .t1052__text", ".t897 .js-feed-post-title", ".t527__persname", ".t521__leftcol .t521__time", 
                                "#rec1269113371 .t1062__title", ".t668__title", ".uc-sveden-info-block .t220__title", ".t-card__title", "#rec1300418071 .t390__title", ".t994__title", ".t517__section-title"];
    
    // Элементы для замены div -> button
    const elementsToConvertButton = [ ".t958__previous", ".t958__next" ];

    
    // ——————————————————————
    // Удаление ненужных классов у всех найденных элементов
    Object.entries(classesToRemove).forEach(([selector, classes]) => {
      document.querySelectorAll(selector).forEach(el => {
        if (classes && Array.isArray(classes)) {
          classes.forEach(cls => el.classList.remove(cls));
        }
      });
    });


    // ——————————————————————
    // Добавление класса t-col_8 всем найденным элементам
    elementsToAddCol8.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("t-col_8");
      });
    });
    
        // Добавление класса t-col_6 всем найденным элементам
    elementsToAddCol6.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("t-col_6");
      });
    });
    
        // Добавление класса t-col_3 всем найденным элементам
    elementsToAddCol3.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("t-col_3");
      });
    });
    
        // Добавление класса accent-block всем найденным элементам
    elementsToAddAccentBlock.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("accent-block");
      });
    });
    
        // Добавление класса white-block всем найденным элементам
    elementsToAddWhiteBlock.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("white-block");
      });
    });
    
        // Добавление класса container-fluid всем найденным элементам
    elementsToAddContainerFluid.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("container-fluid");
      });
    });
    
        // Добавление класса container-fluid всем найденным элементам
    elementsToAddContainer.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("t-container");
      });
    });
    
        // Добавление класса text-t1 всем найденным элементам
    elementsToAddTextT1.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("text-t1");
      });
    });
    
            // Добавление класса btn-s всем найденным элементам
    elementsToAddButtonS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-s");
      });
    });
    
        // Добавление класса btn-m всем найденным элементам
    elementsToAddButtonM.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-m");
      });
    });
    
        // Добавление класса btn-l всем найденным элементам
    elementsToAddButtonL.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-l");
      });
    });
    
        // Добавление класса btn-style-accent-main всем найденным элементам
    elementsToAddButtonStyleAccentMain.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-accent-main");
      });
    });
    
    
        // Добавление класса btn-style-neutral-main всем найденным элементам
    elementsToAddButtonStyleNeutralMain.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-neutral-main");
      });
    });
    
            // Добавление класса btn-style-neutral-outline всем найденным элементам
    elementsToAddButtonStyleNeutralOutline.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-neutral-outline");
      });
    });
    
    // Добавление класса btn-style-neutral-minor всем найденным элементам
    elementsToAddButtonStyleNeutralMinor.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-neutral-minor");
      });
    });
    
        // Добавление класса btn-style-neutral-ghost всем найденным элементам
    elementsToAddButtonStyleNeutralGhost.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-neutral-ghost");
      });
    });
    
        // Добавление класса btn-style-accent-minor всем найденным элементам
    elementsToAddButtonStyleAccentMinor.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn-style-accent-minor");
      });
    });
    
        // Добавление класса btn_icon-s всем найденным элементам
    elementsToAddButtonIconS.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("btn_icon-s");
      });
    });
    
        // Добавление класса btn_icon-m всем найденным элементам
    elementsToAddButtonIconM.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
          if (!el.closest("#rec1142617041")) {
            el.classList.add("btn_icon-m");
          }
      });
    });
    
        // Добавление класса badge всем найденным элементам
    elementsToAddBadge.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("badge");
      });
    });
    
        // Добавление класса badge-l всем найденным элементам
    elementsToAddBadgeL.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("badge-l");
      });
    });
    
            // Добавление класса badge-style-accent-minor всем найденным элементам
    elementsToAddBadgeStyleAccentMinor.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("badge-style-accent-minor");
      });
    });
    
        // Добавление класса t165__col-top всем найденным элементам
    elementsToAddColTop.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("t165__col-top");
      });
    });
    
        // Добавление класса t165__col-top всем найденным элементам
    elementsToAddGradientTitle.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        el.classList.add("gradient-title");
      });
    });
    
    
    // Находим все кнопки с классом .t-btn
    document.querySelectorAll(".t-btn").forEach(btn => {
      const table = btn.querySelector("table");
      if (table) {
        const td = table.querySelector("td"); // любой td, без условия
        if (td) {
          const span = document.createElement("span");
          span.textContent = td.textContent.trim();
    
          btn.innerHTML = ""; // очищаем
          btn.appendChild(span);
        } else {
          table.remove(); // если td нет вообще
        }
      }
    });
    

    // ——————————————————————
    
    // Замена элементов на <h2> у всех найденных элементов, если они ещё не <h2>
    elementsToConvertH2.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        if (!el.closest("#rec1191387201")) {
            if (el.tagName.toLowerCase() !== 'h2') {
              const newH2 = document.createElement("h2");
              // Копируем все атрибуты
              Array.from(el.attributes).forEach(attr => {
                newH2.setAttribute(attr.name, attr.value);
              });
              // Копируем содержимое
              newH2.innerHTML = el.innerHTML;
              // Заменяем элемент
              el.parentNode.replaceChild(newH2, el);
            }
        }
      });
    });
    
    // ——————————————————————
    // Замена элементов на <h3> у всех найденных элементов
    elementsToConvertH3.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const newH3 = document.createElement("h3");
        Array.from(el.attributes).forEach(attr => {
          newH3.setAttribute(attr.name, attr.value);
        });
        newH3.innerHTML = el.innerHTML;

        el.parentNode.replaceChild(newH3, el);
      });
    });
    
    // ——————————————————————
    // Замена элементов на <h4> у всех найденных элементов
    elementsToConvertH4.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const newH4 = document.createElement("h4");
        Array.from(el.attributes).forEach(attr => {
          newH4.setAttribute(attr.name, attr.value);
        });
        newH4.innerHTML = el.innerHTML;

        el.parentNode.replaceChild(newH4, el);
      });
    });
    
    // ——————————————————————
    // Замена элементов на <button> у всех найденных элементов
    elementsToConvertButton.forEach(selector => {
      document.querySelectorAll(selector).forEach(el => {
        const newButton = document.createElement("button");
        Array.from(el.attributes).forEach(attr => {
          newButton.setAttribute(attr.name, attr.value);
        });
        newButton.innerHTML = el.innerHTML;

        el.parentNode.replaceChild(newButton, el);
      });
    });
    
    // Замена элементов на <section> у всех найденных элементов
    elementsToConvertSection.forEach(el => {
      const newSection = document.createElement("section");
      // Копируем атрибуты
      Array.from(el.attributes).forEach(attr => {
        newSection.setAttribute(attr.name, attr.value);
      });
      // Копируем содержимое
      newSection.innerHTML = el.innerHTML;
      // Заменяем div на section в DOM
      el.parentNode.replaceChild(newSection, el);
    });

    
    document.querySelectorAll('.t795, .t030').forEach(block => {
        let h2 = block.querySelector('h2');
        const h3 = block.querySelector('h3');
        if (h2 && !h3) {
          h2.style.setProperty('margin-bottom', 'var(--spacing-mb-header)', 'important');
        }
    });
  
    document.querySelectorAll('h2.t-section__title').forEach(h2 => {
        const parent = h2.parentElement;
        if (!parent) return;
    
        const hasH3Descr = parent.querySelector('h3.t-section__descr');
    
        if (!hasH3Descr) {
            h2.style.setProperty('margin-bottom', 'var(--spacing-mb-header)', 'important');
        }
    });
  
    // Удаление ненужного элемента
    document.querySelectorAll('.t396 .t396__filter, .t396 .t396__carrier, .t-popup__close-icon, .uc-programs-slider .t1196__control svg[viewBox="0 0 40 40"], .t668__icon.t668__icon-hover, .t668__circle, .t668 svg[role="presentation"], .t824__popup-icon-close, .t824__mobile-top-panel').forEach(element => {
        element.remove();
    });
    


  
    // Проверяем наличие кнопок в любом из блоков
    const hasButtons = $('.uc-main-block .t165__btn-container, .uc-main-teachers .t165__btn-container').length > 0;
    
    // Назначаем классы бейджам
    $('.uc-main-block .badge, .uc-main-teachers .badge').each(function(i) {
        $(this).addClass(i === 0 
          ? (hasButtons ? 'badge-style-accent-minor' : 'badge-style-accent-main') 
          : (hasButtons ? 'badge-style-neutral-minor' : 'badge-style-neutral-main')
        );
    });
    
    
    // Удаляем .t165__btn-wrapper, оставляя только <a>
    $('.uc-main-block, .uc-main-teachers').each(function() {
        const $btnWrapper = $(this).find('.t165__btn-wrapper');
        if ($btnWrapper.length) {
          const $button = $btnWrapper.find('a');
          $btnWrapper.replaceWith($button);
        }
    });
    
    
        // Добавляем класс btn-style-accent-main первой кнопке в каждом блоке
    function addButtonAccentMainClass(selectors) {
        selectors.forEach(selector => {
          const elements = document.querySelectorAll(selector);
          if (elements.length > 0) {
            elements[0].classList.add("btn-style-accent-main");
          }
        });
    }
    addButtonAccentMainClass([".uc-main-block .t-btn", ".uc-main-teachers .t-btn"]);
  
        // Добавление стрелок в кнопки, влево и вправо, вниз, вверх
    document.querySelectorAll("#rec1156277186 .t958__previous, #rec1156277186 .t958__next, .uc-programs-slider .t1196__control, .t-feed_col .t-feed__post-popup__close-wrapper a.t-popup__close").forEach(btn => {
        let iconBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconBtn.setAttribute("viewBox", "0 0 24 24");
        
        btn.prepend(iconBtn);
        
        iconBtn.innerHTML = `<path d="M8.64355 7.18555L4.57715 11.252H22.0156V12.752H4.57715L8.64355 16.8184L7.58301 17.8799L2.23633 12.5322C2.09577 12.3916 2.01662 12.2008 2.0166 12.002C2.01667 11.8031 2.09574 11.6123 2.23633 11.4717L7.58301 6.125L8.64355 7.18555Z" fill="currentColor"/>`;
    });
    
        // Добавление стрелок плюса
    document.querySelectorAll(".t668 .t668__icon .t668__lines").forEach(btn => {
        let iconBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconBtn.setAttribute("viewBox", "0 0 24 24");
        
        btn.prepend(iconBtn);
        
        iconBtn.innerHTML = `<path d="M12.75 11.25H22.001V12.75H12.75V22.001H11.25V12.75H1.99902V11.25H11.25V1.99902H12.75V11.25Z" fill="currentColor"/>`;
    });
    
    
    document.querySelectorAll(".t958__close-button, .t-popup__close-wrapper, .t824__popup-close").forEach(btn => {
        let iconBtn = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        iconBtn.setAttribute("viewBox", "0 0 24 24");
        
        btn.prepend(iconBtn);
    
        iconBtn.innerHTML = `<path d="M19.6025 5.45898L13.0605 12L19.6025 18.542L18.541 19.6025L12 13.0605L5.45898 19.6025L4.39746 18.542L10.9395 12L4.39746 5.45898L5.45898 4.39844L12 10.9395L18.541 4.39844L19.6025 5.45898Z" fill="currentColor"/>`;
    });
    
    

    
    // СЧЁТЧИК ЧИСЕЛ ДЛЯ БЛОКА 'У НАС ХОТЯТ УЧИТЬСЯ'
    // === Вспомогательная функция throttle для оптимизации scroll-событий ===
    function throttle(fn, wait) {
        let time = Date.now();
        return function () {
            if ((time + wait - Date.now()) < 0) {
                fn.apply(this, arguments);
                time = Date.now();
            }
        };
    }
    
    
    $(document).ready(function () {
    
        // === Шаг 1: Добавляем data-counter к нужным элементам вручную через JS ===
        // Это нужно, если вы не можете добавить атрибуты в HTML напрямую.
        $('[field="li_title__6124858981300"]').attr('data-counter', '35+');
        $('[field="li_title__6124858981301"]').attr('data-counter', '480+');
        $('[field="li_title__6124858981302"]').attr('data-counter', '1150+');
    
        // === Шаг 2: Перебираем все элементы с атрибутом data-counter ===
        $('.t1052__title').each(function () {
            let $el = $(this); // текущий элемент
            let rawData = $el.attr('data-counter') || '0+'; // получаем значение из data-counter
    
            // Разделяем число и суффикс (например, '35+' → endValue=35, suffix='+' )
            let endValue = parseInt(rawData) || 0;
            let suffix = rawData.replace(/\d+/g, '');
    
            // Настраиваем параметры анимации
            let duration = 2000 + Math.random() * 500; // разное время анимации для эффекта "живости"
            let distance = 200; // расстояние до блока, при котором запускается анимация
            let blockStatus = true; // флаг, чтобы анимация проигрывалась только один раз
    
            // === Шаг 3: Обработчик события прокрутки с throttle для производительности ===
            const scrollHandler = throttle(function () {
                // Условие: пользователь прокрутил до блока
                let scrollEvent = ($(window).scrollTop() > ($el.offset().top - $(window).height() + distance));
    
                if (scrollEvent && blockStatus) {
                    blockStatus = false; // отключаем повторный запуск анимации
                    $(window).off('scroll', scrollHandler); // удаляем обработчик scroll для этого элемента
    
                    // === Запуск анимации роста чисел ===
                    $({ numberValue: 0 }).animate({ numberValue: endValue }, {
                        duration: duration,
                        easing: "swing",
                        step: function (val) {
                            // Отображаем число с пробелами как разделителями тысяч
                            $el.html(String(Math.ceil(val)).replace(/(\d)(?=(\d{3})+([^\d]|$))/g, '$1 ') + suffix);
                        },
                        complete: function () {
                            // После окончания анимации показываем финальное значение
                            $el.html(endValue + suffix);
                        }
                    });
                }
            }, 100);
    
            // === Шаг 4: Подписываемся на событие scroll и сразу делаем первую проверку ===
            $(window).on('scroll', scrollHandler);
            scrollHandler(); // проверяем сразу при загрузке страницы, если блок уже виден
        });
    });
    


    // БЛОК ОПИСАНИЯ ПОД ГЛАВНЫМ БЛОКОМ uc-descHeroHeader (нужно сделать наплыв на главный блок)
    (function () {
        // Только для экранов от 768px
        if (window.innerWidth < 768) return;
    
        var marker = document.querySelector('.uc-descHeroHeader');
        if (!marker) return;
    
        // Предыдущий .t-rec — Hero-блок
        var hero = marker.previousElementSibling;
    
        while (hero && !hero.classList.contains('t-rec')) {
            hero = hero.previousElementSibling;
        }
    
        if (!hero) return;
    
        // Сохраняем место Hero после перевода в fixed
        var placeholder = document.createElement('div');
        placeholder.className = 'uc-scroll-hero-placeholder';
        hero.parentNode.insertBefore(placeholder, hero);
    
        // Контент после Hero отображается поверх него
        for (var block = marker; block; block = block.nextElementSibling) {
            if (block.classList.contains('t-rec')) {
                block.classList.add('uc-scroll-cover');
            }
        }
    
        // Снегопад может появиться после загрузки страницы
        var snowfall = document.querySelector('#t971__snowfall');
        var snowfallObserver;
        var snowfallTimeout;
    
        function findSnowfall() {
            if (snowfall) return;
    
            snowfall = document.querySelector('#t971__snowfall');
    
            if (snowfall) {
                snowfallObserver.disconnect();
                clearTimeout(snowfallTimeout);
                updateHero();
            }
        }
    
        // Ждём снегопад только ограниченное время.
        // Наблюдаем только за непосредственными изменениями внутри body.
        if (!snowfall) {
            snowfallObserver = new MutationObserver(findSnowfall);
    
            snowfallObserver.observe(document.body, {
                childList: true
            });
    
            snowfallTimeout = setTimeout(function () {
                snowfallObserver.disconnect();
            }, 5000);
        }
    
        var heroTop;
    
        function recalculateHeroTop() {
            var wasFixed = hero.classList.contains('uc-scroll-hero');
    
            if (wasFixed) {
                hero.classList.remove('uc-scroll-hero');
                hero.style.clipPath = '';
                placeholder.style.height = '0';
    
                if (snowfall) {
                    snowfall.style.clipPath = '';
                }
            }
    
            heroTop = hero.getBoundingClientRect().top + window.pageYOffset;
    
            updateHero();
        }
    
        function updateHero() {
            var fixed = window.pageYOffset >= heroTop;
    
            hero.classList.toggle('uc-scroll-hero', fixed);
            placeholder.style.height = fixed ? hero.offsetHeight + 'px' : '0';
    
            if (!fixed) {
                hero.style.clipPath = '';
    
                if (snowfall) {
                    snowfall.style.clipPath = '';
                }
    
                return;
            }
    
            // Нижняя граница marker определяет область Hero
            var markerBottom = marker.getBoundingClientRect().bottom;
            var clipBottom = markerBottom > 0 ? 0 : Math.abs(markerBottom);
            var clip = 'inset(0 0 ' + clipBottom + 'px 0)';
    
            hero.style.clipPath = clip;
    
            // Снегопад ограничивается так же, как Hero
            if (snowfall) {
                snowfall.style.clipPath = clip;
            }
        }
    
        // Пересчитываем после полной загрузки
        window.addEventListener('load', recalculateHeroTop);
    
        // Пересчитываем при изменении размера окна
        window.addEventListener('resize', recalculateHeroTop);
    
        // Обновляем при прокрутке
        window.addEventListener('scroll', updateHero, { passive: true });
    
        // Первоначальный расчёт
        heroTop = hero.getBoundingClientRect().top + window.pageYOffset;
        updateHero();
    })();




  
});

// ПОСЛЕ ЗАГРУЗКИ DOM



// === ГЛОБАЛЬНОЕ ПРИМЕНЕНИЕ ТЕМЫ (выполняется на всех страницах) === // === РАБОТА С КНОПКОЙ И ПЕРЕКЛЮЧАТЕЛЕМ НОЧНОЙ ТЕМЫ ===
    // Добавим функцию, которая проверяет, стоит ли на устройстве тёмная тема по умолчанию
const getSystemTheme = () => window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';

    // Восстанавливаем сохранённую тему из localStorage
// const savedTheme = localStorage.getItem('theme') || 'light';
const savedTheme = localStorage.getItem('theme') || getSystemTheme();
const isDarkOnInit = savedTheme === 'dark';

    // Применяем начальную тему
document.documentElement.classList.toggle('dark-theme', isDarkOnInit);


/*———————————————ТИТУЛЬНЫЙ БЛОК НА СТРАНИЦАХ HERO HEADER———————————————*/

(function() {
  const bp = 991.98, ctxs = ['.uc-main-block', '.uc-main-teachers'];
  const html = document.documentElement;

  // Скрываем страницу плавно
  html.style.opacity = '0';
  html.style.transition = 'opacity .5s ease-in-out';

  function rearrange() {
    ctxs.forEach(c => {
      const ctx = document.querySelector(c);
      if (!ctx) return;
      const img = ctx.querySelectorAll('.t-col.t-col_6')[1],
            txtWrap = ctx.querySelector('.t165__textwrapper'),
            container = ctx.querySelector('.t-container');
      if (!img || !txtWrap || !container) return;

      const isMobile = window.innerWidth <= bp,
            isInText = img.parentNode === txtWrap,
            targets = txtWrap.querySelectorAll('.t165__text, h1.t165__title');
      const target = Array.from(targets).filter(el => el.offsetParent !== null).pop();

      if (isMobile && !isInText) target ? target.after(img) : txtWrap.append(img);
      else if (!isMobile && isInText) container.append(img);
    });

    // Показываем страницу плавно после перестановки
    requestAnimationFrame(() => {
      html.style.opacity = '1';
    });
  }

  window.addEventListener('load', rearrange);
  window.addEventListener('resize', rearrange);
})();




// СОЗДАНИЕ БЕЙДЖЕЙ ИЗ СКОБОК У КАРТОЧЕК УЧЕБНОГО ПЛАНА ПРОГРАММЫ
$(function() {
  function insertBadge($link, text) {
    if (!$link.length || !text) return;
    if ($link.next('.badge').length) return;
    $('<span class="badge badge-l badge-style-accent-main"></span>')
      .text(text)
      .insertAfter($link);
  }

  function processPost($link) {
    if (!$link.length) return;
    var match = $link.text().match(/\(([^)]+)\)/);
    if (match) {
      var textInBrackets = match[1].trim();
      $link.text($link.text().replace(/\s*\([^)]+\)/, '').trim());
      insertBadge($link, textInBrackets);
    }
  }

  function processAll($container) {
    $container.find('.js-feed-post-link').each(function() {
      processPost($(this));
    });
  }

  $('.uc-curriculum').each(function() {
    var $curriculum = $(this);
    processAll($curriculum);

    var observer = new MutationObserver(function(mutations) {
      mutations.forEach(function(mutation) {
        $(mutation.addedNodes).each(function() {
          var $added = $(this);
          if ($added.is('.js-feed-post') || $added.find('.js-feed-post').length) {
            processAll($added);
          }
        });
      });
    });
    observer.observe(this, { childList: true, subtree: true });
  });
});


   
// === Функция обновления заголовка У КАРТОЧЕК УЧЕБНОГО ПЛАНА ПРОГРАММЫ ===
t_onReady(function () {
    const $curriculum = $('.uc-curriculum');
    if (!$curriculum.length) return;

    if (typeof feedContent === 'undefined') return;

    // === Функция обновления заголовка ===
    function updateHeader($switcher) {
        const $block = $switcher.closest('.t897');
        if (!$block.length || !$block.parents('.uc-curriculum').length) return;

        const $h3 = $block.find('h3[field="bdescr"]');
        if (!$h3.length) return;

        const titleKey = $switcher.attr('data-feedpart-title');
        const data = feedContent[titleKey];
        if (!data) return;
        
        // Формируем HTML только если есть данные
        let finalHtml = '';
        
        // module и title объединяем без <br>
        if (data.module || data.title) {
            finalHtml += (data.module ? `<strong style="color:var(--text-accent)">${data.module}</strong>` : '');
            finalHtml += (data.title ? `<strong> ${data.title}</strong>` : '');
        }
        
        // section и desc объединяем
        if (data.section && data.desc) {
            // добавляем <br> только если уже есть module/title
            if (finalHtml) finalHtml += '<br>';
            finalHtml += `<span style="color:var(--text-accent)">${data.section}</span> ${data.desc}`;
        }
        
        $h3.html(finalHtml);
    }

    // === Обработчик клика по табам ===
    $(document).off('click.uc').on('click.uc', '.js-feed-parts-switcher', function () {
        const $this = $(this);
        if (!$this.closest('.uc-curriculum').length) return;

        $('.js-feed-parts-switcher').removeClass('t-active');
        $this.addClass('t-active');
        updateHeader($this);
    });

    // === Ждём появления табов ===
    const checkTabs = setInterval(() => {
        const $tabs = $('.js-feed-parts-switcher');
        if ($tabs.length > 1) {
            clearInterval(checkTabs);
            initTabs();
        }
    }, 100);

    // === Инициализация табов ===
    function initTabs() {
        const $target = $curriculum.find('.js-feed-parts-switcher').eq(1); // 1.1. Раздел
        if (!$target.length) return;

        const $link = $target.find('a');
        const href = $link.attr('href');
        if (!href) return;

        // Устанавливаем хэш
        if (window.location.hash !== href) {
            window.location.hash = href;
        }

        // Активируем таб
        $('.js-feed-parts-switcher').removeClass('t-active');
        $target.addClass('t-active');

        // Имитируем клик
        if ($link[0]) $link[0].click();

        // Обновляем заголовок
        updateHeader($target);

        // === Обработчик hashchange с декодированием ===
        $(window).off('hashchange.uc').on('hashchange.uc', function () {
            const currentHash = window.location.hash;
            const decodedHash = decodeURIComponent(currentHash);

            const $activeTab = $curriculum.find('.js-feed-parts-switcher a')
                .filter(function () {
                    return decodeURIComponent($(this).attr('href')) === decodedHash;
                })
                .parent();

            if ($activeTab.length) {
                $('.js-feed-parts-switcher').removeClass('t-active');
                $activeTab.addClass('t-active');
                updateHeader($activeTab);
            }
        });
    }
});



// Добавляем/удаляем классы кнопке, когда она появится в DOM
const updateButtonClasses = () => {
  const button = document.querySelector('.js-feed-btn-show-all-posts');
  if (button) {
    button.classList.add('btn-m', 'btn-style-neutral-minor');
    button.classList.remove('t-btnflex');
  } else {
    requestAnimationFrame(updateButtonClasses);
  }
};

updateButtonClasses();



// БЛОК Учебный план программы ПОПАП
t_onReady(function () {
    // Если нет блока — выходим (защита от ошибок)
    if (!$('.uc-curriculum').length) return;

    // Подписываемся на клик по посту
    $(document).off('click', '.t-feed__post').on('click', '.t-feed__post', function () {
        let attempts = 0;
        const interval = setInterval(function () {
            const $btn = $('.uc-curriculum button.js-feed-popup-close');
            if ($btn.length) {
                clearInterval(interval);

                // Удаляем старые иконки
                $btn.find('svg').remove();

                // Создаём SVG-иконку "назад"
                const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
                svg.setAttribute('viewBox', '0 0 24 24');
                svg.setAttribute('class', 'btn-icon');
                svg.innerHTML = '<path d="M8.64355 7.18555L4.57715 11.252H22.0156V12.752H4.57715L8.64355 16.8184L7.58301 17.8799L2.23633 12.5322C2.09577 12.3916 2.01662 12.2008 2.0166 12.002C2.01667 11.8031 2.09574 11.6123 2.23633 11.4717L7.58301 6.125L8.64355 7.18555Z" fill="currentColor"/>';

                $btn.prepend(svg);
                $btn.addClass('btn_icon-m btn-style-neutral-ghost');
            }

            // Защита от бесконечного цикла (макс. 600 мс)
            if (++attempts >= 20) clearInterval(interval);
        }, 30);
    });
});


// БЛОК НА СТРАНИЦЕ С ВСЕМИ ПРЕПОДАВАТЕЛЯМИ

jQuery(function($) {
    // Шаг 1: Проверяем, есть ли на странице блок .uc-teachers
    if (!$('.uc-teachers').length) {
        return; // Нет блока — ничего не делаем
    }

    const observer = new MutationObserver(function() {
        const $input = $('.uc-teachers .js-store-filter-search');
        if ($input.length && !$input.attr('maxlength')) {
            $input.attr('maxlength', '50');
            observer.disconnect(); // Останавливаем, как только установили
        }
    });

    // Наблюдаем за всем DOM, но только если .uc-teachers присутствует
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
});


t_onReady(function () {
    function checkProgramsSliderControls() {
        // Проходим по каждому слайдеру с нужным классом
        $('.uc-programs-slider').each(function () {
            var $slider = $(this); // текущий слайдер
            var $controlCol = $slider.find('.t-col_2, .t1196__controls'); // колонка с кнопками
            var $sliderItems = $slider.find('.t1196__item');
            var itemCount = $sliderItems.length;
            var isLargeScreen = $(window).width() >= 992;

            if (itemCount < 3 && isLargeScreen) {
                $controlCol.css('display', 'none');
            } else {
                $controlCol.css('display', ''); // сбрасываем, если условие не выполняется
            }
        });
    }

    // Выполняем при загрузке страницы
    checkProgramsSliderControls();

    // Выполняем при ресайзе окна (с дебаунсом)
    var resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkProgramsSliderControls, 100);
    });
});


t_onReady(function () {
    function checkEventsSliderControls() {
        // Проходим по каждому слайдеру с нужным классом
        $('.uc-events-slider').each(function () {
            var $slider = $(this); // текущий слайдер
            var $controlCol = $slider.find('.t-col_2, .t1196__controls'); // колонка с кнопками
            var $sliderItems = $slider.find('.t1196__item');
            var itemCount = $sliderItems.length;
            var isLargeScreen = $(window).width() >= 992;

            if (itemCount < 4 && isLargeScreen) {
                $controlCol.css('display', 'none');
            } else {
                $controlCol.css('display', ''); // сбрасываем, если условие не выполняется
            }
        });
    }

    // Выполняем при загрузке страницы
    checkEventsSliderControls();

    // Выполняем при ресайзе окна (с дебаунсом)
    var resizeTimer;
    $(window).on('resize', function () {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(checkEventsSliderControls, 100);
    });
});


t_onReady(function () {
    var imgPath = 'https://static.tildacdn.com/tild6537-3561-4566-b031-643064333635/not_found.svg';

    function insertEmptyImage($block) {
        if (!$block.find('.custom-empty-img').length) {
            $block.prepend('<img class="custom-empty-img" src="' + imgPath + '" alt="Ничего не найдено" >');
        }
    }

    // Вставляем в существующие блоки (если они уже на странице)
    $('.t-feed__error-msg-wrapper, .t-store__empty-part-msg-wrapper').each(function() {
        insertEmptyImage($(this));
    });

    // Следим за динамическими блоками
    new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            $(mutation.addedNodes).each(function() {
                var $node = $(this);
                if ($node.hasClass('t-feed__error-msg-wrapper') || $node.hasClass('t-store__empty-part-msg-wrapper')) {
                    insertEmptyImage($node);
                } else {
                    $node.find('.t-feed__error-msg-wrapper, .t-store__empty-part-msg-wrapper').each(function() {
                        insertEmptyImage($(this));
                    });
                }
            });
        });
    }).observe(document.body, { childList: true, subtree: true });
});


// Добавление класса slider карточкам при media screen and (max-width: 767.98px) и ul содержит больше 4 элементов
$(document).ready(function () {
  function checkSliderClass() {
    const $ul = $('ul.t503__container');
    if (!$ul.length) return; // если элемента нет — ничего не делаем

    if (window.matchMedia('(max-width: 767.98px)').matches) {
      $ul.each(function () {
        const $this = $(this);
        if ($this.children().length > 4) {
          $this.addClass('slider');
        } else {
          $this.removeClass('slider');
        }
      });
    } else {
      // при большем экране класс удаляем
      $ul.removeClass('slider');
    }
  }

  // Проверка при загрузке
  checkSliderClass();

  // Проверка при изменении размера окна
  $(window).on('resize', checkSliderClass);
});



// ОБЩАЯ СТРАНИЦА С ПРЕПОДАВАТЕЛЯМИ (вставка аватара, если нет фото)
(function () {
    'use strict';

    var CFG = {
        root: '.uc-teachers',
        card: '.js-product.t-store__card',
        api: 'https://store.tildaapi.com/api/getproductslist/?storepartuid=109845581152&getparts=true&getoptions=true&size=100&slice=1',
        avatar: 'https://static.tildacdn.com/tild3338-6162-4631-b730-393838373161/avatar.svg',
        photoWidth: 1000
    };

    var root;
    var products = {};
    var renderScheduled = false;

    function optimize(src) {
        var match = String(src).match(
            /^https?:\/\/static\.tildacdn\.com\/(.+)\/([^\/]+)$/
        );

        if (!match || !/\.(jpe?g|png|webp)$/i.test(match[2])) {
            return src;
        }

        var name = /\.webp$/i.test(match[2])
            ? match[2]
            : match[2] + '.webp';

        return 'https://optim.tildacdn.com/' +
            match[1] +
            '/-/resize/' +
            CFG.photoWidth +
            'x/-/format/webp/' +
            name;
    }

    function getPhoto(product) {
        var edition = product.editions &&
            product.editions[0] &&
            product.editions[0].img;

        if (edition) return edition;

        try {
            var gallery = JSON.parse(product.gallery || '[]');
            return gallery[0] && gallery[0].img || '';
        } catch (e) {
            return '';
        }
    }

    function createImage(product) {
        var photo = getPhoto(product);
        var source = photo ? optimize(photo) : CFG.avatar;

        var wrapper = document.createElement('div');
        wrapper.className =
            't-store__card__imgwrapper npi-teacher-card-img';

        // Воссоздаём штатный бейдж Tilda, если он есть в товаре.
        if (product.mark) {
            var markWrapper = document.createElement('div');
            markWrapper.className = 't-store__card__mark-wrapper';

            var mark = document.createElement('div');
            mark.className = 't-store__card__mark';
            mark.textContent = product.mark;

            markWrapper.appendChild(mark);
            wrapper.appendChild(markWrapper);
        }

        var image = document.createElement('div');
        image.className =
            'js-product-img t-store__card__bgimg t-bgimg loaded';

        image.setAttribute(
            'data-original',
            photo || CFG.avatar
        );

        image.style.backgroundImage =
            'url("' + source.replace(/"/g, '\\"') + '")';

        wrapper.appendChild(image);

        return wrapper;
    }

    function render() {
        renderScheduled = false;

        if (!root) return;

        var cards = root.querySelectorAll(CFG.card);

        Array.prototype.forEach.call(cards, function (card) {
            var link = card.querySelector(
                '.t-store__card__wrap_all > a'
            );

            if (!link) return;

            // Не вмешиваемся в штатные карточки Tilda.
            if (link.querySelector(
                '.t-store__card__imgwrapper:not(.npi-teacher-card-img)'
            )) {
                return;
            }

            if (link.querySelector('.npi-teacher-card-img')) {
                return;
            }

            var uid = card.getAttribute('data-product-lid');
            var product = uid && products[uid];

            if (!product) return;

            link.insertBefore(
                createImage(product),
                link.firstChild
            );
        });
    }

    function scheduleRender() {
        if (renderScheduled) return;

        renderScheduled = true;

        window.requestAnimationFrame(render);
    }

    function loadProducts() {
        fetch(CFG.api)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }

                return response.json();
            })
            .then(function (data) {
                (data.products || []).forEach(function (product) {
                    if (product.uid) {
                        products[String(product.uid)] = product;
                    }
                });

                scheduleRender();
            })
            .catch(function (error) {
                console.warn(
                    '[teachers] Не удалось загрузить данные:',
                    error
                );
            });
    }

    function init() {
        root = document.querySelector(CFG.root);

        if (!root) return;

        var observer = new MutationObserver(scheduleRender);

        observer.observe(root, {
            childList: true,
            subtree: true
        });

        loadProducts();
    }

    document.addEventListener('DOMContentLoaded', function () {
        setTimeout(init, 0);
    });

})();


// ПОТОКИ | ПОДТЯГИВАЕМ ИНФУ С ТОВАРОВ В ПОТОКИ
(function () {
    'use strict';

    var CFG = {
        marker: '.npipl-teacher',
        api: 'https://store.tildaapi.com/api/getproductslist/?storepartuid=109845581152&getparts=true&getoptions=true&size=100&slice=1',
        avatar: 'https://static.tildacdn.com/tild3338-6162-4631-b730-393838373161/avatar.svg',
        photoWidth: 1000
    };

    var productsPromise = null;
    var products = {};

    function normalizeName(value) {
        return String(value || '')
            .toLowerCase()
            .replace(/ё/g, 'е')
            .replace(/[.,;:!?()[\]"'«»]/g, ' ')
            .replace(/\s+/g, ' ')
            .trim()
            .split(' ')
            .sort()
            .join(' ');
    }

    function optimizePhoto(src) {
        var match = String(src || '').match(
            /^https?:\/\/static\.tildacdn\.com\/(.+)\/([^\/]+)$/
        );

        if (!match || !/\.(jpe?g|png|webp)$/i.test(match[2])) {
            return src;
        }

        var name = /\.webp$/i.test(match[2])
            ? match[2]
            : match[2] + '.webp';

        return 'https://optim.tildacdn.com/' +
            match[1] +
            '/-/resize/' +
            CFG.photoWidth +
            'x/-/format/webp/' +
            name;
    }

    function getPhoto(product) {
        if (
            product.editions &&
            product.editions[0] &&
            product.editions[0].img
        ) {
            return product.editions[0].img;
        }

        try {
            var gallery = JSON.parse(product.gallery || '[]');
            return gallery[0] && gallery[0].img || '';
        } catch (e) {
            return '';
        }
    }

    function loadProducts() {
        if (productsPromise) {
            return productsPromise;
        }

        productsPromise = fetch(CFG.api)
            .then(function (response) {
                if (!response.ok) {
                    throw new Error('HTTP ' + response.status);
                }

                return response.json();
            })
            .then(function (data) {
                (data.products || []).forEach(function (product) {
                    var key = normalizeName(product.title);

                    if (!key) return;

                    if (!products[key]) {
                        products[key] = [];
                    }

                    products[key].push(product);
                });

                return products;
            })
            .catch(function (error) {
                console.warn(
                    '[NPIPL teachers] Не удалось загрузить данные преподавателей:',
                    error
                );

                throw error;
            });

        return productsPromise;
    }

    function createTeacher(product) {
        var wrapper = document.createElement('div');
        wrapper.className = 'npipl-teacher__content';

        var photo = getPhoto(product) || CFG.avatar;

        // Фото
        var figure = document.createElement('figure');

        var image = document.createElement('img');
        image.src = optimizePhoto(photo);
        image.alt = product.title || 'Преподаватель';
        image.loading = 'lazy';
        image.decoding = 'async';

        figure.appendChild(image);
        wrapper.appendChild(figure);

        // ФИО
        var name = document.createElement('h4');
        name.className = 't-redactor__h4';
        name.textContent = product.title || '';
        wrapper.appendChild(name);

        // Описание
        if (product.descr) {
            var description = document.createElement('div');
            description.className = 't-redactor__text';
            description.textContent = product.descr;
            wrapper.appendChild(description);
        }

        // Ссылка «Подробнее»
        var linkUrl = product.buttonlink || product.url;

        if (linkUrl) {
            var link = document.createElement('a');

            link.className =
                't-feed__post-popup__btn t-btn btn-s btn-style-accent-ghost';

            link.href = linkUrl;

            var linkText = document.createElement('span');
            linkText.className = 't-feed__post-popup__btn-text';
            linkText.textContent = 'Подробнее';

            var svg = document.createElementNS(
                'http://www.w3.org/2000/svg',
                'svg'
            );

            svg.setAttribute('viewBox', '0 0 24 24');

            svg.innerHTML =
                '<path d="M15.3887 16.8193L19.4551 12.7529H2.0166V11.2529H19.4551L15.3887 7.18652L16.4492 6.125L21.7959 11.4727C21.9365 11.6133 21.9365 11.8041 21.7959 11.9447L16.4492 17.8799L15.3887 16.8193Z" fill="currentColor"></path>';

            link.appendChild(linkText);
            link.appendChild(svg);
            wrapper.appendChild(link);
        }

        return wrapper;
    }

    function render() {
        var markers = document.querySelectorAll(
            CFG.marker + ':not([data-npipl-rendered])'
        );

        if (!markers.length) return;

        loadProducts()
            .then(function () {
                Array.prototype.forEach.call(markers, function (marker) {
                    var teacherName = marker.getAttribute('data-teacher');

                    if (!teacherName) {
                        marker.setAttribute(
                            'data-npipl-rendered',
                            'error'
                        );
                        return;
                    }

                    var matches = products[normalizeName(teacherName)];

                    if (!matches || !matches.length) {
                        console.warn(
                            '[NPIPL teachers] Преподаватель не найден:',
                            teacherName
                        );

                        marker.setAttribute(
                            'data-npipl-rendered',
                            'error'
                        );

                        return;
                    }

                    if (matches.length > 1) {
                        console.warn(
                            '[NPIPL teachers] Найдено несколько преподавателей:',
                            teacherName
                        );

                        marker.setAttribute(
                            'data-npipl-rendered',
                            'error'
                        );

                        return;
                    }

                    marker.appendChild(
                        createTeacher(matches[0])
                    );

                    marker.setAttribute(
                        'data-npipl-rendered',
                        '1'
                    );
                });
            })
            .catch(function () {
                // Ошибка API не должна ломать страницу.
            });
    }

    function init() {
        render();

        // Tilda Feed создаёт popup динамически.
        var observer = new MutationObserver(function (mutations) {
            var needRender = false;

            for (var i = 0; i < mutations.length && !needRender; i++) {
                var nodes = mutations[i].addedNodes;

                for (var j = 0; j < nodes.length; j++) {
                    var node = nodes[j];

                    if (node.nodeType !== 1) continue;

                    if (
                        node.matches &&
                        node.matches(CFG.marker)
                    ) {
                        needRender = true;
                        break;
                    }

                    if (
                        node.querySelector &&
                        node.querySelector(CFG.marker)
                    ) {
                        needRender = true;
                        break;
                    }
                }
            }

            if (needRender) {
                render();
            }
        });

        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }

})();

// ПОТОКИ | ФОТО ПРЕПОДАВАТЕЛЯ НА КАРТОЧКЕ ПОСТА (компактная версия)
(function () {
    'use strict';
    var C = {
        root: '.uc-curriculum .t-feed__col-grid__post-wrapper',
        api: 'https://store.tildaapi.com/api/getproductslist/?storepartuid=109845581152&getparts=true&getoptions=true&size=100&slice=1',
        avatar: 'https://static.tildacdn.com/tild3338-6162-4631-b730-393838373161/avatar.svg'
    };
    var P = {}, req = null, sch = false, W = {};

    function warn(k, t, d) {
        if (W[k]) return;
        W[k] = 1;
        console.warn('[NPIPL feed photo] ' + t, d);
    }

    function norm(v) {
        return String(v || '').toLowerCase().replace(/ё/g, 'е')
            .replace(/[.,;:!?()[\]"'«»]/g, ' ').replace(/\s+/g, ' ')
            .trim().split(' ').sort().join(' ');
    }

    function photo(p) {
        var e = p.editions && p.editions[0] && p.editions[0].img;
        if (e) return e;
        try { var g = JSON.parse(p.gallery || '[]'); return (g[0] && g[0].img) || ''; }
        catch (x) { return ''; }
    }

    function opt(src) {
        var m = String(src).match(/^https?:\/\/static\.tildacdn\.com\/(.+)\/([^\/]+)$/);
        if (!m || !/\.(jpe?g|png|webp)$/i.test(m[2])) return src;
        var n = /\.webp$/i.test(m[2]) ? m[2] : m[2] + '.webp';
        return 'https://optim.tildacdn.com/' + m[1] + '/-/resize/1000x/-/format/webp/' + n;
    }

    function load() {
        if (req) return req;
        req = fetch(C.api).then(function (r) {
            if (!r.ok) throw new Error('HTTP ' + r.status);
            return r.json();
        }).then(function (d) {
            (d.products || []).forEach(function (p) {
                var k = norm(p.title);
                if (k) (P[k] = P[k] || []).push(p);
            });
        }).catch(function (e) {
            console.warn('[NPIPL feed photo] Не удалось загрузить данные преподавателей:', e);
            throw e;
        });
        return req;
    }

    function names(card) {
        var d = card.querySelector('.js-feed-post-descr');
        if (!d) return [];
        return d.innerHTML.split(/<br\s*\/?>/i).map(function (s) {
            var t = document.createElement('div');
            t.innerHTML = s;
            return (t.textContent || '').trim();
        }).filter(Boolean);
    }

    function setBg(el, u) {
        el.setAttribute('data-original', u);
        el.style.backgroundImage = 'url("' + u.replace(/"/g, '\\"') + '")';
    }

    function proc(card) {
        if (card.querySelector('.t-feed__post-imgwrapper')) return;

        var w = document.createElement('div');
        w.className = 't-feed__post-imgwrapper t-feed__post-imgwrapper_beforetitle';
        var bg = document.createElement('div');
        bg.className = 't-feed__post-bgimg t-bgimg loaded';
        setBg(bg, C.avatar);
        w.appendChild(bg);
        card.insertBefore(w, card.firstChild);

        var a = card.querySelector('.js-feed-post-link');
        var title = a ? a.textContent.trim() : '(без названия)';
        var ns = names(card);

        if (!ns.length) {
            warn('e:' + title, 'В описании поста нет преподавателей, показан аватар:', title);
            return;
        }

        load().then(function () {
            var url = '';
            for (var i = 0; i < ns.length && !url; i++) {
                var m = P[norm(ns[i])], why = '';
                if (!m || !m.length) why = 'преподаватель не найден';
                else if (m.length > 1) why = 'найдено несколько преподавателей';
                else if (!photo(m[0])) why = 'у преподавателя нет фото';
                else url = opt(photo(m[0]));
                if (why) warn('n:' + ns[i] + why, 'Пост «' + title + '»: ' + why + ':', ns[i]);
            }
            if (!url) {
                warn('a:' + title, 'Не удалось подобрать фото, показан аватар:', title);
                return;
            }
            var img = new Image();
            img.onload = function () { setBg(bg, url); };
            img.src = url;
        }).catch(function () {});
    }

    function render() {
        sch = false;
        Array.prototype.forEach.call(document.querySelectorAll(C.root), proc);
    }

    function init() {
        var r = document.querySelector('.uc-curriculum');
        if (!r) return;
        new MutationObserver(function () {
            if (sch) return;
            sch = true;
            requestAnimationFrame(render);
        }).observe(r, { childList: true, subtree: true });
        render();
    }

    if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', init);
    else init();
})();