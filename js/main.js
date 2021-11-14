//=================
//BodyLock
function body_lock(delay) {
    let body = document.querySelector("body");
    if (body.classList.contains('_lock')) {
        body_lock_remove(delay);
    } else {
        body_lock_add(delay);
    }
}
function body_lock_remove(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        setTimeout(() => {
            for (let index = 0; index < lock_padding.length; index++) {
                const el = lock_padding[index];
                el.style.paddingRight = '0px';
            }
            body.style.paddingRight = '0px';
            body.classList.remove("_lock");
        }, delay);

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
function body_lock_add(delay) {
    let body = document.querySelector("body");
    if (unlock) {
        let lock_padding = document.querySelectorAll("._lp");
        for (let index = 0; index < lock_padding.length; index++) {
            const el = lock_padding[index];
            el.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        }
        body.style.paddingRight = window.innerWidth - document.querySelector('.wrapper').offsetWidth + 'px';
        body.classList.add("_lock");

        unlock = false;
        setTimeout(function () {
            unlock = true;
        }, delay);
    }
}
//=================

var isMobile = { Android: function () { return navigator.userAgent.match(/Android/i); }, BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); }, iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, Opera: function () { return navigator.userAgent.match(/Opera Mini/i); }, Windows: function () { return navigator.userAgent.match(/IEMobile/i); }, any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); } };
function isIE() {
    ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
if (isIE()) {
    document.querySelector('html').classList.add('ie');
}
if (isMobile.any()) {
    document.querySelector('html').classList.add('_touch');
}

// Получить цифры из строки
//parseInt(itemContactpagePhone.replace(/[^\d]/g, ''))

function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support === true) {
        document.querySelector('html').classList.add('_webp');
    } else {
        document.querySelector('html').classList.add('_no-webp');
    }
});

function ibg() {
    if (isIE()) {
        let ibg = document.querySelectorAll("._ibg");
        for (var i = 0; i < ibg.length; i++) {
            if (ibg[i].querySelector('img') && ibg[i].querySelector('img').getAttribute('src') != null) {
                ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
            }
        }
    }
}
ibg();

window.addEventListener("load", function () {
    if (document.querySelector('.wrapper')) {
        setTimeout(function () {
            document.querySelector('.wrapper').classList.add('_loaded');
        }, 0);
    }
});

let unlock = true;

//Menu
let iconMenu = document.querySelector(".icon-menu");
if (iconMenu != null) {
    let delay = 500;
    let menuBody = document.querySelector(".menu__body");
    iconMenu.addEventListener("click", function (e) {
        if (unlock) {
            body_lock(delay);
            iconMenu.classList.toggle("_active");
            menuBody.classList.toggle("_active");
        }
    });
};
function menu_close() {
    let iconMenu = document.querySelector(".icon-menu");
    let menuBody = document.querySelector(".menu__body");
    iconMenu.classList.remove("_active");
    menuBody.classList.remove("_active");
}

//Slider


//BildSlider
let sliders = document.querySelectorAll('._swiper');
if (sliders) {
    for (let index = 0; index < sliders.length; index++) {
        let slider = sliders[index];
        if (!slider.classList.contains('swiper-bild')) {
            let slider_items = slider.children;
            if (slider_items) {
                for (let index = 0; index < slider_items.length; index++) {
                    let el = slider_items[index];
                    el.classList.add('swiper-slide');
                }
            }
            let slider_content = slider.innerHTML;
            let slider_wrapper = document.createElement('div');
            slider_wrapper.classList.add('swiper-wrapper');
            slider_wrapper.innerHTML = slider_content;
            slider.innerHTML = '';
            slider.appendChild(slider_wrapper);
            slider.classList.add('swiper-bild');

            if (slider.classList.contains('_swiper_scroll')) {
                let sliderScroll = document.createElement('div');
                sliderScroll.classList.add('swiper-scrollbar');
                slider.appendChild(sliderScroll);
            }
        }
        if (slider.classList.contains('_gallery')) {
            //slider.data('lightGallery').destroy(true);
        }
    }
    sliders_bild_callback();
}

function sliders_bild_callback(params) { }

let sliderScrollItems = document.querySelectorAll('._swiper_scroll');
if (sliderScrollItems.length > 0) {
    for (let index = 0; index < sliderScrollItems.length; index++) {
        const sliderScrollItem = sliderScrollItems[index];
        const sliderScrollBar = sliderScrollItem.querySelector('.swiper-scrollbar');
        const sliderScroll = new Swiper(sliderScrollItem, {
            observer: true,
            observeParents: true,
            direction: 'vertical',
            slidesPerView: 'auto',
            freeMode: true,
            scrollbar: {
                el: sliderScrollBar,
                draggable: true,
                snapOnRelease: false
            },
            mousewheel: {
                releaseOnEdges: true,
            },
        });
        sliderScroll.scrollbar.updateSize();
    }
}


if (document.querySelector('.slider-photo')) {
    let brandsSlider = new Swiper('.slider-photo__items', {

        // effect: 'fade',
        // autoplay: {
        //     delay: 5000,
        //     disableOnInteraction: true,
        // },

        // observer: true,
        observeParents: true,
        // slidesPerView: 1,
        spaceBetween: 0,
        // autoHeight: true,
        speed: 800,
        // simulateTouch: true,
        loop: true,
        preloadImages: true,

        breakpoints: {
            480: {
                slidesPerView: 1,
            },
            768: {
                slidesPerView: 3,
            },
            992: {
                slidesPerView: 4,
            },
        },
    });
}

//Tabs
let tabs = document.querySelectorAll("._tabs");
for (let index = 0; index < tabs.length; index++) {
    let tab = tabs[index];
    let tabs_items = tab.querySelectorAll(".catalog__block-btn");
    let tabs_blocks = tab.querySelectorAll("._tabs-items");
    for (let index = 0; index < tabs_items.length; index++) {
        let tabs_item = tabs_items[index];
        tabs_item.addEventListener("click", function (e) {
            for (let index = 0; index < tabs_items.length; index++) {
                let tabs_item = tabs_items[index];
                tabs_item.classList.remove('_active');
                tabs_blocks[index].classList.remove('_active');
            }
            tabs_item.classList.add('_active');
            tabs_blocks[index].classList.add('_active');
            e.preventDefault();
        });
    }
}
let btnErotic = document.querySelector(".content-main__btn-erotic");
let btnEvery = document.querySelector(".content-main__btn-everyday");
let btnEroticCatalog = document.querySelector(".catalog__block-btn-erotic");
let btnEveryCatalog = document.querySelector(".catalog__block-btn-everyday");
let everyItems = document.querySelector(".catalog__body-items-everyday");
let eroticItems = document.querySelector(".catalog__body-items-erotic");

btnErotic.addEventListener("click", function (e) {
    btnEvery.classList.remove('_active');
    btnEroticCatalog.classList.add('_active');
    btnEveryCatalog.classList.remove('_active');
    everyItems.classList.remove('_active');
    eroticItems.classList.add('_active');
    e.preventDefault();
});
btnEvery.addEventListener("click", function (e) {
    btnErotic.classList.remove('_active');
    btnEroticCatalog.classList.remove('_active');
    btnEveryCatalog.classList.add('_active');
    everyItems.classList.add('_active');
    eroticItems.classList.remove('_active');
    e.preventDefault();
});


let erotic = document.querySelectorAll(".content-main__btn-erotic");
let everyBtn = document.querySelectorAll(".catalog__block-btn-everyday");
let eroticBtn = document.querySelectorAll(".catalog__block-btn-erotic");


//SizesActive
let sizeItemsAll = document.querySelectorAll(".catalog-sizes-items");
let sizeDisable = document.querySelectorAll(".catalog-sizes-item-null");

for (let index = 0; index < sizeItemsAll.length; index++) {
    let sizeItem = sizeItemsAll[index];
    let sizeItems = sizeItem.querySelectorAll("._checked-size");
    for (let index = 0; index < sizeItems.length; index++) {
        let sizeItem = sizeItems[index];
        if (sizeItem != sizeDisable) {
            sizeItem.addEventListener("click", function (e) {
                for (let index = 0; index < sizeItems.length; index++) {
                    let sizeItem = sizeItems[index];
                    sizeItem.classList.remove('_active');
                }
                sizeItem.classList.add('_active');
                e.preventDefault();
            });
        }
    }
}

//Scroll


function scrollTo(elenent) {
    window.scroll({
        left: 0,
        top: elenent.offsetTop,
        behavior: 'smooth'
    })
}
let goto_links = document.querySelectorAll('._goto');
if (goto_links) {
    for (let index = 0; index < goto_links.length; index++) {
        let goto_link = goto_links[index];
        goto_link.addEventListener('click', function (e) {
            let target_block_class = goto_link.getAttribute('href').replace('#', '');
            let target_block = document.querySelector('.' + target_block_class);
            scrollTo(target_block);
            let iconMenu = document.querySelector(".icon-menu");
            let menuBody = document.querySelector(".menu__body");
            iconMenu.classList.remove("_active");
            menuBody.classList.remove("_active");
            e.preventDefault();
        });
    }
}


//CART

window.onload = function () {


    document.addEventListener("click", documentActions);

    // Actions (делегирование события click)
    function documentActions(e) {
        const cartSpan = document.querySelector('.header__card-icon span');
        const targetElement = e.target;
        if (targetElement.classList.contains('catalog-item-desc__btn')) {
            const productId = targetElement.closest('.catalog-item').dataset.pid;
            addToCart(targetElement, productId);
            e.preventDefault();
        }

        if (targetElement.classList.contains('cart-list__delete')) {
            const productId = targetElement.closest('.cart-list__item').dataset.cartPid;
            updateCart(targetElement, productId, false);
            e.preventDefault();
        }
        if (targetElement.classList.contains('cart-header__icon') || targetElement.closest('.cart-header__icon')) {
            if (document.querySelector('.cart-list').children.length > 0) {
                document.querySelector('.cart-header').classList.toggle('_active');
            }
            e.preventDefault();
        }

        // else if (!targetElement.closest('.cart-header__body') && !targetElement.classList.contains('catalog-item-desc__btn')) {
        //     document.querySelector('.cart-header__body').classList.remove('_active');
        // }

    }


    // AddToCart
    function addToCart(productButton, productId) {
        if (!productButton.classList.contains('_hold')) {
            productButton.classList.add('_hold');
            productButton.classList.add('_fly');

            const cart = document.querySelector('.header__card-icon');
            const product = document.querySelector(`[data-pid="${productId}"]`);
            const productImage = product.querySelector('.catalog-item__img');




            const productImageFly = productImage.cloneNode(true);

            const productImageFlyWidth = productImage.offsetWidth;
            const productImageFlyHeight = productImage.offsetHeight;
            const productImageFlyTop = productImage.getBoundingClientRect().top;
            const productImageFlyLeft = productImage.getBoundingClientRect().left;

            productImageFly.setAttribute('class', '_flyImage _ibg');
            productImageFly.style.cssText =
                `
			left: ${productImageFlyLeft}px;
			top: ${productImageFlyTop}px;
			width: ${productImageFlyWidth}px;
			height: ${productImageFlyHeight}px;
		`;

            document.body.append(productImageFly);

            const cartFlyLeft = cart.getBoundingClientRect().left;
            const cartFlyTop = cart.getBoundingClientRect().top;

            productImageFly.style.cssText =
                `
			left: ${cartFlyLeft + 40}px;
			top: ${cartFlyTop}px;
			width: 0px;
			height: 0px;
			opacity:0;
		`;

            productImageFly.addEventListener('transitionend', function () {
                if (productButton.classList.contains('_fly')) {
                    productImageFly.remove();
                    updateCart(productButton, productId);
                    productButton.classList.remove('_fly');
                }
            });
        }
    }

    function updateCart(productButton, productId, productAdd = true) {
        const cart = document.querySelector('.cart-header');
        const cartIcon = cart.querySelector('.header__card-container');
        const cartQuantity = cartIcon.querySelector('span');
        const cartProduct = document.querySelector(`[data-cart-pid="${productId}"]`);
        const cartList = document.querySelector('.cart-list');

        //Добавляем
        if (productAdd) {
            if (cartQuantity) {
                cartQuantity.innerHTML = ++cartQuantity.innerHTML;
            } else {
                cartIcon.insertAdjacentHTML('beforeend', `<span>1</span>`);
            }
            if (!cartProduct) {
                const product = document.querySelector(`[data-pid="${productId}"]`);
                const cartProductImage = product.querySelector('.catalog-item__img').innerHTML;
                const cartProductTitle = product.querySelector('.catalog-item-desc__name').innerHTML;
                const cartProductContent = `
			<a href="" class="cart-list__image _ibg">${cartProductImage}</a>
			<div class="cart-list__body">
				<a href="" class="cart-list__title">${cartProductTitle}</a>
				<div class="cart-list__quantity">Количество: <span>1</span></div>
				<a href="" class="cart-list__delete">Удалить</a>
			</div>`;
                cartList.insertAdjacentHTML('beforeend', `<li data-cart-pid="${productId}" class="cart-list__item">${cartProductContent}</li>`);
            } else {
                const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
                cartProductQuantity.innerHTML = ++cartProductQuantity.innerHTML;
            }

            // После всех действий
            productButton.classList.remove('_hold');
        } else {
            const cartProductQuantity = cartProduct.querySelector('.cart-list__quantity span');
            cartProductQuantity.innerHTML = --cartProductQuantity.innerHTML;
            if (!parseInt(cartProductQuantity.innerHTML)) {
                cartProduct.remove();
            }

            const cartQuantityValue = --cartQuantity.innerHTML;

            if (cartQuantityValue) {
                cartQuantity.innerHTML = cartQuantityValue;
            } else {
                cartQuantity.remove();
                cart.classList.remove('_active');
            }
        }
    }
}

//open-closeCart
let cardOpen = document.querySelector('.header__card-container');
let cardBody = document.querySelector('.cart-header__body');

cardOpen.addEventListener('click', function (e) {
    cardBody.classList.toggle('_active');
    e.preventDefault();
});

//closeCart
let orderClose = document.querySelector('.header-body__order-close');
orderClose.addEventListener('click', function (e) {
    cardBody.classList.remove('_active');
    e.preventDefault();
});