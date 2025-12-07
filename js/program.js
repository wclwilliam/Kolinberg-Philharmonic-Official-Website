// 帶入節目資料(全部)(陣列)
const programsData = [
    {
        id: 1,
        title: "James Conducts Mahler's Seventh",
        date: "15 OCT. 2025",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Mahler"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "James calls Mahler’s Seventh a “cosmic symphony,” moving from chaos to glory."
    },
    {
        id: 2,
        title: "Beethoven & Mozart Night",
        date: "20 NOV. 2025",
        time: "20:00",
        venue: "Kolinberg Chamber Hall",
        location: "Munich",
        composer: ["Beethoven", "Mozart"],
        director: ["Karajan"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The most famous four notes in history. A journey from darkness to light."
    },
    {
        id: 3,
        title: "Mozart's Requiem",
        date: "07 DEC. 2025",
        time: "18:00",
        venue: "Vienna State Opera",
        location: "Vienna",
        composer: ["Mozart"],
        director: ["Bohm"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Mozart's final masterpiece, shrouded in mystery and beauty."
    },
    {
        id: 4,
        title: "Tchaikovsky: Swan Lake",
        date: "05 JAN. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Tchaikovsky"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A fairy tale of love and deception told through lush orchestration."
    },
    {
        id: 5,
        title: "Baroque Masterpieces",
        date: "14 FEB. 2026",
        time: "15:00",
        venue: "Teatro dell'Opera",
        location: "Rome",
        composer: ["Vivaldi", "Bach"],
        director: ["Abbado"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Experience the sounds of nature through Vivaldi's timeless violin concertos."
    },
    {
        id: 6,
        title: "Chopin Piano Gala",
        date: "28 FEB. 2026",
        time: "19:00",
        venue: "Kolinberg Chamber Hall",
        location: "Warsaw",
        composer: ["Chopin"],
        director: ["Pollini"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A romantic evening dedicated to the poet of the piano, featuring his nocturnes and ballades."
    },
    {
        id: 7,
        title: "Wagner's Ring Cycle: Highlights",
        date: "15 MAR. 2026",
        time: "18:00",
        venue: "Bayreuth Festspielhaus",
        location: "Bayreuth",
        composer: ["Wagner"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Epic selections from the Ring Cycle, exploring themes of power, love, and redemption."
    },
    {
        id: 8,
        title: "Debussy & Ravel: French Impressions",
        date: "10 APR. 2026",
        time: "20:00",
        venue: "Philharmonie de Paris",
        location: "Paris",
        composer: ["Debussy", "Ravel"],
        director: ["Boulez"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Immerse yourself in the shimmering colors and fluid rhythms of French Impressionism."
    },
    {
        id: 9,
        title: "Stravinsky: The Rite of Spring",
        date: "22 MAY. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Stravinsky"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The revolutionary ballet score that changed music forever with its primal energy."
    },
    {
        id: 10,
        title: "Brahms: Symphony No. 4",
        date: "14 JUN. 2026",
        time: "19:00",
        venue: "Musikverein",
        location: "Vienna",
        composer: ["Brahms"],
        director: ["Kleiber"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Brahms' final symphony, a work of tragic power and intricate construction."
    },
    {
        id: 11,
        title: "Verdi Opera Night",
        date: "04 JUL. 2026",
        time: "18:30",
        venue: "La Scala",
        location: "Milan",
        composer: ["Verdi"],
        director: ["Muti"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Celebrated arias and choruses from Aida, La Traviata, and Nabucco."
    },
    {
        id: 12,
        title: "Bach: Brandenburg Concertos",
        date: "18 AUG. 2026",
        time: "16:00",
        venue: "St. Thomas Church",
        location: "Leipzig",
        composer: ["Bach"],
        director: ["Gardiner"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The pinnacle of Baroque orchestral music, performed on period instruments."
    },
    {
        id: 13,
        title: "Dvořák: New World Symphony",
        date: "05 SEP. 2026",
        time: "20:00",
        venue: "Carnegie Hall",
        location: "New York",
        composer: ["Dvorak"],
        director: ["Bernstein"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Dvořák's tribute to American spirituals and landscapes, blended with Bohemian soul."
    },
    {
        id: 14,
        title: "Sibelius: Finlandia",
        date: "20 SEP. 2026",
        time: "19:00",
        venue: "Helsinki Music Centre",
        location: "Helsinki",
        composer: ["Sibelius"],
        director: ["Salonen"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A powerful musical statement of Finnish national identity and rugged landscapes."
    },
    {
        id: 15,
        title: "Rachmaninoff Piano Concerto No. 2",
        date: "12 OCT. 2026",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Rachmaninoff"],
        director: ["Gergiev"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Sweeping melodies and virtuosic piano passages define this beloved romantic concerto."
    },
    {
        id: 16,
        title: "Handel's Messiah",
        date: "15 DEC. 2026",
        time: "18:00",
        venue: "Royal Albert Hall",
        location: "London",
        composer: ["Handel"],
        director: ["Rattle"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A holiday tradition featuring the Hallelujah Chorus and soaring vocal solos."
    },
    {
        id: 17,
        title: "Schubert: Unfinished Symphony",
        date: "10 JAN. 2027",
        time: "19:00",
        venue: "Kolinberg Chamber Hall",
        location: "Vienna",
        composer: ["Schubert"],
        director: ["Harnoncourt"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Two movements of pure lyrical beauty that leave listeners wondering what might have been."
    },
    {
        id: 18,
        title: "Mendelssohn: A Midsummer Night's Dream",
        date: "14 FEB. 2027",
        time: "15:00",
        venue: "Gewandhaus",
        location: "Leipzig",
        composer: ["Mendelssohn"],
        director: ["Chailly"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Magical incidental music capturing the whimsy and romance of Shakespeare's play."
    },
    {
        id: 19,
        title: "Haydn: The Creation",
        date: "20 MAR. 2027",
        time: "18:00",
        venue: "Esterházy Palace",
        location: "Eisenstadt",
        composer: ["Haydn"],
        director: ["Fischer"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A monumental oratorio depicting the biblical story of creation with joy and reverence."
    },
    {
        id: 20,
        title: "Elgar: Cello Concerto",
        date: "05 APR. 2027",
        time: "19:30",
        venue: "Barbican Centre",
        location: "London",
        composer: ["Elgar"],
        director: ["Barenboim"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A poignant and deeply emotional work, reflecting the sorrow of the post-war era."
    },
    {
        id: 21,
        title: "Modern Minimalists",
        date: "18 MAY. 2027",
        time: "20:00",
        venue: "Walt Disney Concert Hall",
        location: "Los Angeles",
        composer: ["Glass", "Reich"],
        director: ["Dudamel"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Exploring the hypnotic rhythms and repetitive structures of contemporary minimalism."
    },
    {
        id: 22,
        title: "Opera Gala Night",
        date: "12 JUN. 2027",
        time: "19:00",
        venue: "Sydney Opera House",
        location: "Sydney",
        composer: ["Puccini", "Verdi", "Rossini"],
        director: ["Bonynge"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A star-studded evening featuring the greatest hits from the Italian opera repertoire."
    },
    {
        id: 23,
        title: "Grieg: Peer Gynt",
        date: "08 JUL. 2027",
        time: "18:00",
        venue: "Grieghallen",
        location: "Bergen",
        composer: ["Grieg"],
        director: ["Ruud"],
        image: "./image/2_program/program_467_309.jpg",
        description: "From 'Morning Mood' to 'In the Hall of the Mountain King', a journey through Nordic folklore."
    },
    {
        id: 24,
        title: "Berlioz: Symphonie Fantastique",
        date: "20 AUG. 2027",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Berlioz"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A psychedelic orchestral narrative detailing an artist's self-destructive obsession."
    },
    {
        id: 25,
        title: "Liszt: Piano Masterworks",
        date: "10 SEP. 2027",
        time: "19:00",
        venue: "Liszt Academy",
        location: "Budapest",
        composer: ["Liszt"],
        director: ["Schiff"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Virtuoso piano performances celebrating the genius of Franz Liszt."
    },
    {
        id: 26,
        title: "Strauss: Also sprach Zarathustra",
        date: "05 OCT. 2027",
        time: "20:00",
        venue: "Elbphilharmonie",
        location: "Hamburg",
        composer: ["Strauss"],
        director: ["Thielemann"],
        image: "./image/2_program/program_467_309.jpg",
        description: "The tone poem made famous by '2001: A Space Odyssey', a philosophical musical journey."
    },
    {
        id: 27,
        title: "Copland: Appalachian Spring",
        date: "15 NOV. 2027",
        time: "15:00",
        venue: "Kennedy Center",
        location: "Washington D.C.",
        composer: ["Copland"],
        director: ["Alsop"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Capturing the essence of the American spirit with open harmonies and folk melodies."
    },
    {
        id: 28,
        title: "Holst: The Planets",
        date: "01 DEC. 2027",
        time: "19:30",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Holst"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "A spectacular astrological suite, from the menace of Mars to the mysticism of Neptune."
    },
    {
        id: 29,
        title: "Chamber Music Sunday",
        date: "12 DEC. 2027",
        time: "11:00",
        venue: "Kolinberg Chamber Hall",
        location: "Berlin",
        composer: ["Haydn", "Mozart"],
        director: ["Kolinberg Quartet"],
        image: "./image/2_program/program_467_309.jpg",
        description: "An intimate morning performance of classic string quartets."
    },
    {
        id: 30,
        title: "New Year's Eve Gala",
        date: "31 DEC. 2027",
        time: "22:00",
        venue: "Kolinberg Main Hall",
        location: "Berlin",
        composer: ["Strauss", "Offenbach"],
        director: ["James"],
        image: "./image/2_program/program_467_309.jpg",
        description: "Ring in the new year with waltzes, polkas, and festive cheer."
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