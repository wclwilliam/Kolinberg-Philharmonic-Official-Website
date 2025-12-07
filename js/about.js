document.addEventListener('DOMContentLoaded', function () {
    // 1. 選取時間軸所有的 li 圓圈
    const timelineItems = document.querySelectorAll('.history .timeline li');

    // 2. 初始化 History Swiper
    const historySwiper = new Swiper('.history .swiper', {
        // 基礎設定
        direction: 'horizontal',
        loop: false, // 時間軸通常不建議無限循環，這樣邏輯比較清楚
        speed: 600,  // 切換速度設慢一點，配合優雅的風格
        slidesPerView: 1,
        spaceBetween: 50, // 保持你原本的設定
        
        // 分頁器與導航
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // === 核心邏輯：監聽事件 ===
        on: {
            // 初始化時執行一次，確保第一顆球狀態正確
            init: function() {
                updateTimelineClasses(this.activeIndex);
            },
            // 每次滑動切換後執行
            slideChange: function () {
                updateTimelineClasses(this.activeIndex);
            }
        }
    });

    // 3. 定義更新 Class 的函式
    function updateTimelineClasses(activeIndex) {
        timelineItems.forEach((item, index) => {
            // 移除所有舊狀態
            item.classList.remove('past', 'current', 'future');

            // 根據索引判斷狀態
            if (index < activeIndex) {
                item.classList.add('past');    // 過去的年份
            } else if (index === activeIndex) {
                item.classList.add('current'); // 當前的年份
            } else {
                item.classList.add('future');  // 未來的年份
            }
        });
    }

    // 4. (選用功能) 點擊年份圓圈，Swiper 自動跳轉
    timelineItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            historySwiper.slideTo(index);
        });
        // 為了讓使用者知道可以點，加個手型游標
        item.style.cursor = 'pointer'; 
    });
});