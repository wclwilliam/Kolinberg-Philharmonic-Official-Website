// Swiper - 新聞
// 1. 920以下執行新聞輪播
// 2. 每頁1張

let newsSwiper = undefined;

function initNewsSwiper() {
    const screenWidth = window.innerWidth;
    const dynamicGap = screenWidth * 0.05;

    // 1. 抓取元素
    const newsSection = document.querySelector('.news .container');
    const newsWrap = document.querySelector('.news .container .wrap');
    const newsSlides = document.querySelectorAll('.news .container .wrap > a');

    // ★★★ 安全檢查：如果 HTML 還沒準備好，或者改名了找不到，就直接結束，不要報錯
    if (!newsSection || !newsWrap) {
        // console.log("找不到新聞區塊元素，稍後再試"); // 測試時可以打開這行
        return;
    }

    // === 狀況 A: 手機版 (< 920px) ===
    if (screenWidth < 920) {
        if (newsSwiper == undefined) {
            // 1. 手動補上 class
            newsSection.classList.add('swiper'); 
            newsWrap.classList.add('swiper-wrapper');       
            newsSlides.forEach(slide => slide.classList.add('swiper-slide')); 

            // 2. 啟動 Swiper
            newsSwiper = new Swiper(newsSection, {
                loop: true,
                slidesPerView: 1,
                spaceBetween: dynamicGap,
                // ★★★ 記得把這裡的註解拿掉，不然按鈕沒反應 ★★★
                pagination: { el: '.news .swiper-pagination', clickable: true },
                navigation: { nextEl: '.news .swiper-button-next', prevEl: '.news .swiper-button-prev' },
            });
        }
        else {
            // 更新間距
            newsSwiper.params.spaceBetween = dynamicGap;
            newsSwiper.update();
        }
    }
    // === 狀況 B: 電腦版 (>= 920px) ===
    else {
        if (newsSwiper != undefined) {
            newsSwiper.destroy(true, true);
            newsSwiper = undefined;

            newsSection.classList.remove('swiper');
            newsWrap.classList.remove('swiper-wrapper');
            newsSlides.forEach(slide => slide.classList.remove('swiper-slide'));
        }
    }
}

// ★★★ 關鍵修改在這裡 ★★★
// 不要直接 initNewsSwiper(); 
// 改用 'load' 事件，確保 HTML/CSS/圖片 全部載入完畢才執行
window.addEventListener('load', function() {
    initNewsSwiper();
});

// 監聽縮放 (這行維持原樣)
window.addEventListener('resize', initNewsSwiper);




// Swiper - 商品
// 1. 首頁商品輪播
// 2. 576以上時2張，576以下時1張

const productSwiper = new Swiper('.webshop .swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 10,
    breakpoints: {
        // 當螢幕寬度 >= 576px 時 (包含平板、電腦)
        576: {
            slidesPerView: 2,  // 恢復成 2 張
            spaceBetween: 20   // 間距恢復 20
        }
    },

    // If we need pagination
    pagination: {
        el: '.webshop .swiper-pagination',
        clickable: true,
    },

    // Navigation arrows
    navigation: {
        nextEl: '.webshop .swiper-button-next',
        prevEl: '.webshop .swiper-button-prev',
    },


});