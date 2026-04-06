// Study Vault - Complete Subject Tracker
// Persistent storage, no emoji overload, chapter toggles

// ======================== DATA STRUCTURE ========================
const subjectsData = [
    {
        id: "phy1",
        name: "Physics 1st Paper",
        chapters: [
            "ভৌতজগত ও পরিমাপ",
            "ভেক্টর",
            "গতিবিদ্যা",
            "নিউটনীয় বলবিদ্যা",
            "কাজ, ক্ষমতা ও শক্তি",
            "মহাকর্ষ ও অভিকর্ষ",
            "পদার্থের গাঠনিক ধর্ম",
            "পর্যায়বৃত্ত গতি",
            "তরঙ্গ",
            "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"
        ]
    },
    {
        id: "phy2",
        name: "Physics 2nd Paper",
        chapters: [
            "তড়িৎক্ষেত্র ও স্থির তড়িৎ",
            "ইসর তড়িৎ",
            "চল তড়িৎ",
            "তড়িৎ প্রবাহের তাপীয় ক্রিয়া ও তাপকরণ",
            "তড়িৎচুম্বকীয় আবেশ",
            "জ্যামিতিক আলোকবিজ্ঞান",
            "ভৌত আলোকবিজ্ঞান",
            "আধুনিক পদার্থবিজ্ঞান",
            "পরমাণু মডেল ও নিউক্লীয় পদার্থবিজ্ঞান",
            "সেমিকন্ডাক্টর ও ইলেকট্রনিক্স",
            "জ্যোতির্বিজ্ঞান"
        ]
    },
    {
        id: "math1",
        name: "Mathematics 1st Paper",
        chapters: [
            "ম্যাট্রিক্স ও নির্ণায়ক",
            "সরলরেখা",
            "বৃত্ত",
            "বিন্যাস ও সমাবেশ",
            "ত্রিকোণমিতিক অনুপাত",
            "সংযুক্ত ও যৌগিক কোণের ত্রিকোণমিতি",
            "ফাংশন ও ফাংশনের লেখচিত্র",
            "অন্তরীকরণ",
            "যোগজীকরণ",
            "বাস্তব সংখ্যা ও অসমতা",
            "জটিল সংখ্যা",
            "বহুপদী ও বহুপদী সমীকরণ",
            "দ্বিপদী বিস্তৃতি"
        ]
    },
    {
        id: "math2",
        name: "Mathematics 2nd Paper",
        chapters: [
            "স্থিতিবিদ্যা",
            "ত্রিমাত্রিক জ্যামিতি",
            "সূচক ও লগারিদম",
            "অন্তরীকরণের জ্যামিতিক প্রয়োগ",
            "নির্দিষ্ট ও অনির্দিষ্ট যোগজ",
            "সাধারণ সমীকরণ ও অসমতা",
            "ভেক্টর জ্যামিতি",
            "সসীম ধারা",
            "সমতল ও সরলরেখা",
            "বৃত্ত ও উপবৃত্ত"
        ]
    },
    {
        id: "chem1",
        name: "Chemistry 1st Paper",
        chapters: [
            "ল্যাবরেটরির নিরাপদ ব্যবহার",
            "উপগত রসায়ন",
            "মৌলের পর্যায়বৃত্ত ধর্ম ও রাসায়নিক বন্ধন",
            "রাসায়নিক পরিবর্তন",
            "কর্মমুখী রসায়ন",
            "পরিবেশ রসায়ন"
        ]
    },
    {
        id: "chem2",
        name: "Chemistry 2nd Paper",
        chapters: [
            "জৈব রসায়ন",
            "জেব যৌগ",
            "পরিমাণগত রসায়ন",
            "তড়িৎ রসায়ন",
            "অধৈনিক রসায়ন",
            "শিল্প রসায়ন"
        ]
    },
    {
        id: "botany",
        name: "Botany",
        chapters: [
            "কোষ ও এর গঠন",
            "কোষ বিভাজন",
            "কোষ রসায়ন",
            "অঙ্গসংস্থান",
            "শৈবাল ও ছত্রাক",
            "ব্রায়োফাইটা ও টেরিডোফাইটা",
            "নগ্নবীজী ও আবৃতবীজী উদ্ভিদ",
            "টিস্যু ও টিস্যুতন্ত্র",
            "উদ্ভিদ শারীরতত্ত্ব",
            "উদ্ভিদ প্রজনন",
            "জীব প্রযুক্তি",
            "বিবর্তন ও সংরক্ষণ, জীবের পরিবেশ"
        ]
    },
    {
        id: "zoology",
        name: "Zoology",
        chapters: [
            "প্রাণীর ভিজ্ঞা ও শ্রেণিবিন্যাস",
            "প্রাণীর পরিচিতি",
            "পরিপাক ও শোষণ",
            "রক্ত সঞ্চালন",
            "শ্বাসক্রিয়া ও বর্জন",
            "বহিঃক্ষরণ ও অন্তঃক্ষরণ",
            "চলন ও অঙ্গচালনা",
            "সমন্বয় ও নিয়ন্ত্রণ",
            "মানব জীবনের ধারাবাহিকতা",
            "মানবদেহের প্রতিরক্ষা",
            "জিনতত্ত্ব ও বিবর্তন",
            "প্রাণীর আচরণ"
        ]
    },
    {
        id: "ict",
        name: "ICT",
        chapters: [
            "তথ্য ও যোগাযোগ প্রযুক্তি বিশ্ব",
            "কম্পিউটার সিস্টেম",
            "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস",
            "ওয়েব ডিজাইন ও উন্নয়ন",
            "ডেটাবেজ ব্যবস্থা",
            "প্রোগ্রামিং ভাষা",
            "সাইবার নিরাপত্তা",
            "উদ্ভাবন ও প্রযুক্তি নির্ভর সমাজ"
        ]
    }
];

// ======================== STATE ========================
let completedStatus = {};   // format: { "phy1_ch0": true, "phy1_ch1": false }
let currentSubjectId = "phy1";

// ======================== LOAD & SAVE ========================
function loadFromLocalStorage() {
    const saved = localStorage.getItem("studyVaultProgress");
    if (saved) {
        try {
            const parsed = JSON.parse(saved);
            completedStatus = parsed.completedStatus || {};
        } catch(e) { completedStatus = {}; }
    }
    // ensure every chapter has at least false entry (clean structure for future)
    for (let sub of subjectsData) {
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            const key = `${sub.id}_ch${idx}`;
            if (completedStatus[key] === undefined) {
                completedStatus[key] = false;
            }
        }
    }
}

function saveToLocalStorage() {
    const data = { completedStatus };
    localStorage.setItem("studyVaultProgress", JSON.stringify(data));
    updateGlobalStats();
    updateSidebarStats();
    if (currentSubjectId) {
        updateCurrentSubjectProgress();
    }
}

// ======================== UI HELPERS ========================
function updateGlobalStats() {
    let totalCh = 0;
    let completedCh = 0;
    for (let sub of subjectsData) {
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            totalCh++;
            const key = `${sub.id}_ch${idx}`;
            if (completedStatus[key]) completedCh++;
        }
    }
    const globalSpan = document.getElementById("globalStats");
    if (globalSpan) globalSpan.innerText = `${completedCh} / ${totalCh} completed`;
}

function updateSidebarStats() {
    const subjectItems = document.querySelectorAll(".subject-item");
    for (let sub of subjectsData) {
        let total = sub.chapters.length;
        let done = 0;
        for (let idx = 0; idx < total; idx++) {
            const key = `${sub.id}_ch${idx}`;
            if (completedStatus[key]) done++;
        }
        const percent = total === 0 ? 0 : Math.round((done / total) * 100);
        const statSpan = document.querySelector(`.subject-item[data-id="${sub.id}"] .subject-stats`);
        if (statSpan) statSpan.innerText = `${done}/${total}`;
        
        // also update progress bar if active subject
    }
}

function updateCurrentSubjectProgress() {
    const subject = subjectsData.find(s => s.id === currentSubjectId);
    if (!subject) return;
    let total = subject.chapters.length;
    let done = 0;
    for (let idx = 0; idx < total; idx++) {
        const key = `${subject.id}_ch${idx}`;
        if (completedStatus[key]) done++;
    }
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    const fillBar = document.getElementById("subjectProgressFill");
    const percentText = document.getElementById("subjectProgressText");
    if (fillBar) fillBar.style.width = `${percent}%`;
    if (percentText) percentText.innerText = `${percent}%`;
}

function renderChapterList() {
    const subject = subjectsData.find(s => s.id === currentSubjectId);
    if (!subject) return;
    const container = document.getElementById("chaptersContainer");
    if (!container) return;
    container.innerHTML = "";
    
    subject.chapters.forEach((chapterName, idx) => {
        const key = `${subject.id}_ch${idx}`;
        const isCompleted = completedStatus[key] === true;
        const card = document.createElement("div");
        card.className = `chapter-card ${isCompleted ? "completed" : ""}`;
        card.setAttribute("data-chapter-index", idx);
        
        const checkboxDiv = document.createElement("div");
        checkboxDiv.className = "chapter-checkbox";
        
        const titleSpan = document.createElement("span");
        titleSpan.className = "chapter-title";
        titleSpan.innerText = chapterName;
        
        card.appendChild(checkboxDiv);
        card.appendChild(titleSpan);
        
        card.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleChapterCompletion(subject.id, idx);
        });
        
        container.appendChild(card);
    });
    
    updateCurrentSubjectProgress();
    updateSidebarStats();
    updateGlobalStats();
}

function toggleChapterCompletion(subjectId, chapterIdx) {
    const key = `${subjectId}_ch${chapterIdx}`;
    const current = completedStatus[key] === true;
    completedStatus[key] = !current;
    saveToLocalStorage();
    
    // re-render current list if same subject
    if (subjectId === currentSubjectId) {
        renderChapterList();
    } else {
        // just update stats without full re-render
        updateSidebarStats();
        updateGlobalStats();
    }
}

// render sidebar navigation
function renderSidebar() {
    const sidebarList = document.getElementById("subjectList");
    if (!sidebarList) return;
    sidebarList.innerHTML = "";
    
    subjectsData.forEach(sub => {
        const totalCh = sub.chapters.length;
        let doneCount = 0;
        for (let idx = 0; idx < totalCh; idx++) {
            const key = `${sub.id}_ch${idx}`;
            if (completedStatus[key]) doneCount++;
        }
        const div = document.createElement("div");
        div.className = `subject-item ${currentSubjectId === sub.id ? "active" : ""}`;
        div.setAttribute("data-id", sub.id);
        
        const nameSpan = document.createElement("span");
        nameSpan.className = "subject-name";
        nameSpan.innerText = sub.name;
        
        const statSpan = document.createElement("span");
        statSpan.className = "subject-stats";
        statSpan.innerText = `${doneCount}/${totalCh}`;
        
        div.appendChild(nameSpan);
        div.appendChild(statSpan);
        
        div.addEventListener("click", () => {
            currentSubjectId = sub.id;
            renderSidebar();
            renderChapterList();
            document.getElementById("currentSubjectName").innerText = sub.name;
            updateCurrentSubjectProgress();
        });
        sidebarList.appendChild(div);
    });
}

// reset all chapters for all subjects
function resetAllProgress() {
    const confirmReset = confirm("WARNING: This will mark ALL chapters as incomplete across all subjects. Continue?");
    if (!confirmReset) return;
    for (let sub of subjectsData) {
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            const key = `${sub.id}_ch${idx}`;
            completedStatus[key] = false;
        }
    }
    saveToLocalStorage();
    renderSidebar();
    if (currentSubjectId) {
        renderChapterList();
    }
    updateGlobalStats();
    updateCurrentSubjectProgress();
}

// date live update
function updateLiveDate() {
    const dateElem = document.getElementById("liveDate");
    if (dateElem) {
        const now = new Date();
        const options = { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' };
        dateElem.innerText = now.toLocaleDateString(undefined, options);
    }
}

// extra: update on load and interval
function init() {
    loadFromLocalStorage();
    renderSidebar();
    // set default subject title
    const defaultSub = subjectsData.find(s => s.id === currentSubjectId);
    if (defaultSub) document.getElementById("currentSubjectName").innerText = defaultSub.name;
    renderChapterList();
    updateGlobalStats();
    updateCurrentSubjectProgress();
    updateLiveDate();
    setInterval(updateLiveDate, 60000);
    
    const resetBtn = document.getElementById("resetAllBtn");
    if (resetBtn) resetBtn.addEventListener("click", resetAllProgress);
}

// start everything when DOM ready
document.addEventListener("DOMContentLoaded", init);
