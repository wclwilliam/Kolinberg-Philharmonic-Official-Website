// 帶入節目資料(全部)(陣列)
const programsData = [
    // --- 2025 DECEMBER (10 Events) ---
    {
        id: 1,
        title: "Mahler: Symphony No. 5",
        date: "09 DEC. 2025",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Mahler"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Experience the emotional depth of Mahler’s masterpiece, featuring the famous Adagietto."
    },
    {
        id: 2,
        title: "Beethoven: Choral Symphony",
        date: "11 DEC. 2025",
        time: "20:00",
        venue: "Musikverein",
        location: "Vienna",
        composer: ["Beethoven"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A monumental performance of Beethoven's Ninth, celebrating joy and universal brotherhood."
    },
    {
        id: 3,
        title: "Mozart: The Great Piano Concertos",
        date: "12 DEC. 2025",
        time: "19:30",
        venue: "Royal Albert Hall",
        location: "London",
        composer: ["Mozart"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "An evening dedicated to Mozart's most brilliant and lyrical works for piano and orchestra."
    },
    {
        id: 4,
        title: "Tchaikovsky: Pathétique Symphony",
        date: "14 DEC. 2025",
        time: "19:00",
        venue: "Suntory Hall",
        location: "Tokyo",
        composer: ["Tchaikovsky"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Tchaikovsky's final symphony, a profound journey through passion, despair, and silence."
    },
    {
        id: 5,
        title: "Brahms: Symphony No. 1",
        date: "15 DEC. 2025",
        time: "20:00",
        venue: "Carnegie Hall",
        location: "New York",
        composer: ["Brahms"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Often called 'Beethoven's Tenth', this symphony reveals Brahms' mastery of orchestral power."
    },
    {
        id: 6,
        title: "Bach: Cello Suites Evening",
        date: "18 DEC. 2025",
        time: "18:00",
        venue: "Kolinberg Chamber Hall",
        location: "Berlin",
        composer: ["Bach"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "An intimate performance of Bach’s timeless suites, exploring the pure essence of the cello."
    },
    {
        id: 7,
        title: "Chopin: Piano Recital",
        date: "20 DEC. 2025",
        time: "19:30",
        venue: "Vienna State Opera",
        location: "Vienna",
        composer: ["Chopin"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A romantic evening featuring Chopin’s Nocturnes and Ballades, performed with poetic touch."
    },
    {
        id: 8,
        title: "Wagner: Overtures & Preludes",
        date: "24 DEC. 2025",
        time: "18:00",
        venue: "Barbican Centre",
        location: "London",
        composer: ["Wagner"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Dramatic selections from Wagner's operas, setting a grand tone for the holiday eve."
    },
    {
        id: 9,
        title: "Bach: Christmas Oratorio",
        date: "25 DEC. 2025",
        time: "16:00",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Bach"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Celebrate Christmas with Bach's glorious oratorio, featuring full choir and orchestra."
    },
    {
        id: 10,
        title: "New Year's Eve Gala: Beethoven",
        date: "31 DEC. 2025",
        time: "22:00",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Beethoven"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Ring in the new year with the triumphant sounds of Beethoven's Eroica Symphony."
    },

    // --- 2026 JANUARY (10 Events) ---
    {
        id: 11,
        title: "New Year's Concert: Mozart",
        date: "01 JAN. 2026",
        time: "11:00",
        venue: "Musikverein",
        location: "Vienna",
        composer: ["Mozart"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Start 2026 with the grace and elegance of Mozart's finest symphonies in Vienna."
    },
    {
        id: 12,
        title: "Stravinsky: The Firebird",
        date: "05 JAN. 2026",
        time: "19:00",
        venue: "Suntory Hall",
        location: "Tokyo",
        composer: ["Stravinsky"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A dazzling display of orchestral color, featuring the complete Firebird ballet score."
    },
    {
        id: 13,
        title: "Rachmaninoff: Symphony No. 2",
        date: "08 JAN. 2026",
        time: "20:00",
        venue: "Carnegie Hall",
        location: "New York",
        composer: ["Rachmaninoff"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Sweeping melodies and lush harmonies define this beloved romantic Russian masterpiece."
    },
    {
        id: 14,
        title: "Mahler: Resurrection Symphony",
        date: "10 JAN. 2026",
        time: "19:30",
        venue: "Royal Albert Hall",
        location: "London",
        composer: ["Mahler"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Mahler's Symphony No. 2, a colossal work exploring life, death, and spiritual rebirth."
    },
    {
        id: 15,
        title: "Beethoven: Symphony No. 5",
        date: "12 JAN. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Beethoven"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The most famous four notes in history drive this journey from darkness into light."
    },
    {
        id: 16,
        title: "Mozart: Symphony No. 40",
        date: "15 JAN. 2026",
        time: "19:30",
        venue: "Vienna State Opera",
        location: "Vienna",
        composer: ["Mozart"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Mozart's tragic G minor symphony, showcasing his intense emotional expression."
    },
    {
        id: 17,
        title: "Tchaikovsky: Violin Concerto",
        date: "18 JAN. 2026",
        time: "19:00",
        venue: "Suntory Hall",
        location: "Tokyo",
        composer: ["Tchaikovsky"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A virtuoso showcase featuring one of the most beloved concertos in the repertoire."
    },
    {
        id: 18,
        title: "Brahms: A German Requiem",
        date: "22 JAN. 2026",
        time: "19:30",
        venue: "Barbican Centre",
        location: "London",
        composer: ["Brahms"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A deeply human requiem offering comfort and hope, performed by full choir."
    },
    {
        id: 19,
        title: "Bach: Goldberg Variations",
        date: "25 JAN. 2026",
        time: "18:00",
        venue: "Kolinberg Chamber Hall",
        location: "Berlin",
        composer: ["Bach"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A chamber arrangement of Bach's intricate variations, displaying mathematical beauty."
    },
    {
        id: 20,
        title: "Chopin & Rachmaninoff Night",
        date: "28 JAN. 2026",
        time: "20:00",
        venue: "Carnegie Hall",
        location: "New York",
        composer: ["Chopin", "Rachmaninoff"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A piano extravaganza featuring the romantic works of two keyboard legends."
    },

    // --- 2026 FEBRUARY (10 Events) ---
    {
        id: 21,
        title: "Wagner: The Ring Highlights",
        date: "01 FEB. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Wagner"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Epic orchestral selections from Wagner's Ring Cycle, exploring myth and power."
    },
    {
        id: 22,
        title: "Stravinsky: Rite of Spring",
        date: "04 FEB. 2026",
        time: "19:30",
        venue: "Musikverein",
        location: "Vienna",
        composer: ["Stravinsky"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The revolutionary ballet score that changed music forever with its primal rhythms."
    },
    {
        id: 23,
        title: "Rachmaninoff: Piano Concerto 3",
        date: "07 FEB. 2026",
        time: "19:30",
        venue: "Royal Albert Hall",
        location: "London",
        composer: ["Rachmaninoff"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Known as the 'Everest of Piano Concertos', a test of endurance and virtuosity."
    },
    {
        id: 24,
        title: "Mahler: Symphony No. 9",
        date: "10 FEB. 2026",
        time: "19:00",
        venue: "Suntory Hall",
        location: "Tokyo",
        composer: ["Mahler"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Mahler's final completed symphony, a poignant farewell to life and music."
    },
    {
        id: 25,
        title: "Valentine's Gala: Tchaikovsky",
        date: "14 FEB. 2026",
        time: "20:00",
        venue: "Carnegie Hall",
        location: "New York",
        composer: ["Tchaikovsky"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A romantic evening featuring Romeo and Juliet and other passionate love themes."
    },
    {
        id: 26,
        title: "Beethoven: Emperor Concerto",
        date: "16 FEB. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Beethoven"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Beethoven's grandest piano concerto, heroic in spirit and symphonic in scale."
    },
    {
        id: 27,
        title: "Mozart: Requiem",
        date: "20 FEB. 2026",
        time: "19:30",
        venue: "Vienna State Opera",
        location: "Vienna",
        composer: ["Mozart"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Mozart's final unfinished masterpiece, shrouded in mystery and divine beauty."
    },
    {
        id: 28,
        title: "Brahms: Symphony No. 4",
        date: "22 FEB. 2026",
        time: "19:30",
        venue: "Barbican Centre",
        location: "London",
        composer: ["Brahms"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A tragic and structurally brilliant symphony, culminating in a powerful passacaglia."
    },
    {
        id: 29,
        title: "Bach: Brandenburg Concertos",
        date: "25 FEB. 2026",
        time: "19:00",
        venue: "Suntory Hall",
        location: "Tokyo",
        composer: ["Bach"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The pinnacle of Baroque orchestral music, performed on modern instruments."
    },
    {
        id: 30,
        title: "Chopin: Piano Concertos",
        date: "28 FEB. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Chopin"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Closing the month with the youthful and brilliant piano concertos of Chopin."
    }
];

// 變數設定

// 一頁要有幾個節目
const itemsPerPage = 5;
// 初始值為第1頁
let currentPage = 1;
// 節目數量(未篩選) (預設為全部節目數量)
// 建議修改：這裡實際上現在是「列表顯示用的資料 (經過日期篩選)」
let currentData = programsData;

// 建議修改：新增變數 - 日曆判定用資料 (經過內容篩選，但尚未經過日期篩選)
let programsForCalendar = programsData;

// 日曆目前顯示的月份
let currentDisplayDate = new Date();
// 使用者選取的日期 (預設今天)
let selectedDateObj = new Date();
// 月份陣列
const monthNames = ["JAN", "FEB", "MAR", "APR", "MAY", "JUN", "JUL", "AUG", "SEP", "OCT", "NOV", "DEC"];
// 已勾選的篩選條件
let activeFilters = {
    composer: [],
    director: [],
    location: []
};

// 定義 DOM 元素
const container = document.getElementById('program_container');
const pagination = document.getElementById('pagination_container');
// 搜尋
const searchInput = document.getElementById('search_product_input');
// 日曆
const calendarTitle = document.getElementById('calendar_title');
const calendarGrid = document.getElementById('date_grid');
const prevMonthBtn = document.getElementById('previous_month_btn');
const nextMonthBtn = document.getElementById('next_month_btn');
// Back to Today 按鈕
const todayBtn = document.getElementById('today_btn');
// 日曆開關按鈕
const dateToggleBtn = document.getElementById('date_toggle_btn');
const calendarSection = document.querySelector('.program_calender');

// 篩選
// 切換按鈕、下拉選單、兩種清除按鈕
const filterToggleBtn = document.getElementById('filter_toggle_btn');
const filterDropdown = document.getElementById('filter_dropdown');
const resetAllBtn = document.getElementById('reset_all_btn'); // 外部全域重置
const clearOptionsBtn = document.getElementById('clear_options_btn'); // 內部只清選項


// 日期工具函式

// 1. 比較兩個日期是否同一天 回傳true or false
function isSameDay(d1, d2) {
    return d1.getFullYear() === d2.getFullYear() &&
        d1.getMonth() === d2.getMonth() &&
        d1.getDate() === d2.getDate();
}

// 2. 解析日期字串 (把 "15 OCT. 2025" 變成 Date 物件) 回傳乾淨的Date
function parseProgramDate(dateStr) {
    const cleanDateStr = dateStr.replace('.', '');
    return new Date(cleanDateStr);
}

// 3. 檢查某一天是否有節目 (決定是否加 .highlight)
function checkHasProgram(dateToCheck) {
    // 建議修改：檢查對象改為 programsForCalendar (符合篩選條件的資料)
    return programsForCalendar.some(function (item) {
        const pDate = parseProgramDate(item.date);
        return isSameDay(pDate, dateToCheck);
    });
}

// 篩選選單生成 (獨立區塊)

// 自動生成篩選選項函式 (依照資料陣列)
function initFilterOptions() {
    // 定義資料對應關係
    const categories = [
        { key: 'composer', isArray: true, containerId: 'filter_composer_list' },
        { key: 'director', isArray: true, containerId: 'filter_director_list' },
        { key: 'location', isArray: false, containerId: 'filter_location_list' }
    ];

    categories.forEach(function (cat) {
        const container = document.getElementById(cat.containerId);
        const uniqueSet = new Set();

        // 1. 抓取不重複資料
        programsData.forEach(function (item) {
            const val = item[cat.key];
            if (cat.isArray) {
                val.forEach(v => uniqueSet.add(v));
            } else {
                uniqueSet.add(val);
            }
        });

        // 2. 排序並生成 Checkbox
        Array.from(uniqueSet).sort().forEach(function (name) {
            const label = document.createElement('label');
            const input = document.createElement('input');

            input.type = 'checkbox';
            input.value = name;

            // 監聽勾選事件：更新狀態並觸發篩選
            input.addEventListener('change', function (e) {
                const value = e.target.value;
                if (e.target.checked) {
                    activeFilters[cat.key].push(value);
                } else {
                    activeFilters[cat.key] = activeFilters[cat.key].filter(v => v !== value);
                }
                masterFilter(); // 呼叫總篩選
            });

            label.appendChild(input);
            label.appendChild(document.createTextNode(name));
            container.appendChild(label);
        });
    });
}

// 渲染節目資料
function renderPrograms(data) {
    //初始container為空
    container.innerHTML = '';

    //如果沒有資料
    if (data.length === 0) {
        // 建議修改：使用 class 取代 inline style，並加入重置按鈕連結
        container.innerHTML = `
                <div class="no_result_msg">
                    <p class="fs-xl fw-bold text-secondary">No programs found.</p>
                    <p class="fs-base text-main">
                        We couldn't find any programs matching your current filters.<br>
                        Try adjusting your criteria or 
                        <button id="inline_reset_btn" class="btn_inline_reset">
                            Reset All Filters
                        </button>.
                    </p>
                </div>
            `;
        // 綁定動態生成的按鈕事件
        document.getElementById('inline_reset_btn').addEventListener('click', performResetAll);
        return;
    }

    //把節目從陣列中取出(依照current page)，放到頁面
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageData = data.slice(startIndex, endIndex);

    //如果有資料，生成節目卡片 (一頁有幾張卡片就生成幾次)
    pageData.forEach(function (item) {
        const html = `
            <a href="./program_content.html" class="program_link_wrapper">
                <div class="card">
                    <div class="pic col-5">
                        <img src="${item.image}" alt="${item.title}">
                    </div>
                    <div class="content col-7">
                        <h3 class="fs-xl fw-bold">${item.title}</h3>
                        <div class="location_time">
                            <div class="location">
                                <div class="icon"><i class="fa-solid fa-location-dot"></i></div>
                                <span class="text fs-base">${item.venue} (${item.location})</span>
                            </div>
                            <div class="time">
                                <div class="icon"><i class="fa-solid fa-clock"></i></div>
                                <span class="text fs-base">${item.date} / ${item.time}</span>
                            </div>
                        </div>
                        <p class="fs-base">${item.description}</p>
                    </div>
                </div>
            </a>
        `;
        container.innerHTML += html;
    });
}


// 渲染頁碼
function renderPagination(data) {
    //初始頁碼為空
    pagination.innerHTML = '';

    // 建議修改：沒資料時不渲染頁碼
    if (data.length === 0) return;

    //判定總頁數
    const totalPages = Math.ceil(data.length / itemsPerPage);

    //渲染頁碼
    for (let i = 1; i <= totalPages; i++) {

        //創造按鈕(依序從1到總頁數)
        const li = document.createElement('li');
        li.className = 'item';
        const a = document.createElement('a');
        a.href = "#";
        a.textContent = i;

        //設定按鈕外觀：依據active狀態加上class(顏色)
        if (i === currentPage) {
            a.className = 'link_active';
        } else {
            a.className = 'link';
        }

        //增加按鈕功能：點選連結，更新成被點選的那個頁碼及節目內容
        a.addEventListener('click', function (e) {
            e.preventDefault();
            currentPage = i;
            updateView();
            // 1. 先抓取你要滾動到的目標元素
            // 這裡我建議抓取 ".filter_search" (篩選區)，這樣換頁後剛好看到篩選器跟節目
            const targetElement = document.querySelector('.filter_search');

            // 2. 執行滾動
            if (targetElement) { // 確保有抓到元素才滾動，避免報錯
                targetElement.scrollIntoView({
                    behavior: 'smooth', // 平滑滾動
                    block: 'start'      // 讓元素的頂部對齊視窗頂部
                });
            }
        });

        //掛到網頁上：把a包在li裡面，丟到pagination裡面
        li.appendChild(a);
        pagination.appendChild(li);
    }
}

// 渲染日曆
function renderCalendar() {
    //初始日曆為空
    calendarGrid.innerHTML = '';

    const year = currentDisplayDate.getFullYear();
    const month = currentDisplayDate.getMonth(); // 0~11

    // 更新標題
    calendarTitle.textContent = `${monthNames[month]} ${year}`;

    // 計算當月資訊
    const firstDayOfMonth = new Date(year, month, 1).getDay(); // 0(週日)~6
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const lastDayOfWeek = new Date(year, month + 1, 0).getDay();
    const endPadding = 6 - lastDayOfWeek;

    // (A) 產生前面空白格
    for (let i = 0; i < firstDayOfMonth; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'date_cell empty';
        calendarGrid.appendChild(emptyCell);
    }

    // (B) 產生日期格
    for (let i = 1; i <= daysInMonth; i++) {
        const cell = document.createElement('div');
        cell.className = 'date_cell';
        cell.textContent = i;

        const thisCellDate = new Date(year, month, i);
        const realToday = new Date();

        // 判斷樣式: 今天? 選中? 有節目?
        if (isSameDay(thisCellDate, realToday)) cell.classList.add('today');
        if (isSameDay(thisCellDate, selectedDateObj)) cell.classList.add('selected');

        // 建議修改：檢查 programsForCalendar 決定是否 highlight
        if (checkHasProgram(thisCellDate)) cell.classList.add('highlight');

        // 綁定點擊事件
        cell.addEventListener('click', function () {
            selectedDateObj = new Date(year, month, i);
            // 建議修改：點擊日期只觸發 masterFilter，不手動 call renderCalendar (會自動重畫)
            masterFilter();
        });

        calendarGrid.appendChild(cell);
    }

    // (C) 補上最後空白日期
    for (let i = 0; i < endPadding; i++) {
        const emptyCell = document.createElement('div');
        emptyCell.className = 'date_cell empty';
        calendarGrid.appendChild(emptyCell);
    }
}

// 核心功能與篩選邏輯 (獨立區塊)

// 建議修改：獨立出全域重置功能，供多處調用
function performResetAll() {
    // 清空篩選條件
    activeFilters = { composer: [], director: [], location: [] };
    // 清空搜尋框
    searchInput.value = "";

    // 取消所有 Checkbox 勾選
    const checkboxes = filterDropdown.querySelectorAll('input[type="checkbox"]');
    checkboxes.forEach(cb => cb.checked = false);

    // 重置日期與日曆月份
    selectedDateObj = new Date();
    currentDisplayDate = new Date();

    // 關閉日曆
    calendarSection.classList.remove('active');

    // 執行篩選
    masterFilter();
}

// 建議修改：核心總篩選函式 (日曆+其他篩選)
function masterFilter() {
    // 1. 取得搜尋關鍵字
    const keyword = searchInput.value.toLowerCase().trim();

    // 2. 第一階段：內容篩選 (Search + Checkbox) -> 決定日曆亮燈
    programsForCalendar = programsData.filter(function (item) {

        // Checkbox 篩選 (若有勾選，必須符合其中之一)
        let matchComposer = true;
        if (activeFilters.composer.length > 0) {
            matchComposer = item.composer.some(c => activeFilters.composer.includes(c));
        }

        let matchDirector = true;
        if (activeFilters.director.length > 0) {
            matchDirector = item.director.some(d => activeFilters.director.includes(d));
        }

        let matchLocation = true;
        if (activeFilters.location.length > 0) {
            matchLocation = activeFilters.location.includes(item.location);
        }

        // 關鍵字搜尋 (標題 或 作曲家)
        let matchSearch = true;
        if (keyword) {
            const titleMatch = item.title.toLowerCase().includes(keyword);
            const composerMatch = item.composer.some(c => c.toLowerCase().includes(keyword));
            matchSearch = titleMatch || composerMatch;
        }

        return matchComposer && matchDirector && matchLocation && matchSearch;
    });

    // 3. 第二階段：日期篩選 (Date) -> 決定列表顯示
    const filterDate = new Date(selectedDateObj);
    filterDate.setHours(0, 0, 0, 0);

    currentData = programsForCalendar.filter(function (item) {
        const programDate = parseProgramDate(item.date);
        programDate.setHours(0, 0, 0, 0);
        return programDate >= filterDate;
    });

    // 4. 重置頁碼並更新畫面
    currentPage = 1;
    renderCalendar(); // 重畫日曆 (更新光點)
    updateView();     // 重畫列表
}

// 重整頁面
function updateView() {
    renderPrograms(currentData);
    renderPagination(currentData);
}

// 事件監聽與初始化

// 1. 搜尋表單提交
document.querySelector('form[role="search"]').addEventListener('submit', function (e) {
    e.preventDefault();
    masterFilter();
});

// 2. Filter 開關按鈕
filterToggleBtn.addEventListener('click', function (e) {
    e.stopPropagation(); // 防止冒泡
    filterDropdown.classList.toggle('hidden');

    // UX 優化：如果篩選打開了，把日曆關掉
    if (!filterDropdown.classList.contains('hidden')) {
        calendarSection.classList.remove('active');
    }
});

// 3. 點擊畫面其他地方關閉 Filter
document.addEventListener('click', function (e) {
    if (!filterDropdown.contains(e.target) && e.target !== filterToggleBtn) {
        filterDropdown.classList.add('hidden');
    }
});

// 4. 建議修改：外部 Reset All 按鈕 (若存在才綁定)
if (resetAllBtn) {
    resetAllBtn.addEventListener('click', performResetAll);
}

// 5. 建議修改：內部 Clear Options 按鈕 (只清選項)
if (clearOptionsBtn) {
    clearOptionsBtn.addEventListener('click', function () {
        activeFilters = { composer: [], director: [], location: [] };
        const checkboxes = filterDropdown.querySelectorAll('input[type="checkbox"]');
        checkboxes.forEach(cb => cb.checked = false);
        masterFilter(); // 保留搜尋和日期，只重置選項
    });
}

// 6. 日曆切換月份按鈕 (保留原本的邏輯)
prevMonthBtn.addEventListener('click', function () {
    currentDisplayDate.setMonth(currentDisplayDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', function () {
    currentDisplayDate.setMonth(currentDisplayDate.getMonth() + 1);
    renderCalendar();
});

// 7. 建議修改：Back to Today 按鈕
if (todayBtn) {
    todayBtn.addEventListener('click', function () {
        currentDisplayDate = new Date(); // 切換回當前月份
        renderCalendar();
    });
}

// 8. 日曆toggle按鈕
if (dateToggleBtn) {
    dateToggleBtn.addEventListener('click', function (e) {
        e.stopPropagation(); // 防止冒泡
        // 切換 active class
        calendarSection.classList.toggle('active');

        // UX 優化：如果日曆打開了，把篩選選單關掉，避免畫面太亂
        if (calendarSection.classList.contains('active')) {
            filterDropdown.classList.add('hidden');
        }
    });
}

// 初始化執行
initFilterOptions(); // 先產生篩選選項
renderCalendar();    // 畫日曆
masterFilter();      // 執行第一次資料載入