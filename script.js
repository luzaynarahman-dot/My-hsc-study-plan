// Study Bee - Complete Study Application
// Created by Luzayna

let subjects = [];
let routineBlocks = [];
let completedStatus = {};
let currentSubjectId = "";

// Timer variables
let timerInterval = null;
let timeSeconds = 25 * 60;
let currentTimerMode = "25";

// Daily Goal variables
let dailyGoal = 3;
let todayCompleted = 0;
let lastResetDate = "";

// Quick Notes
let quickNotes = "";

// Modal state
let currentEditChapterId = null;
let currentEditSubjectId = null;

// Theme
let currentTheme = "ocean";

// ======================== INITIALIZE DEFAULT SUBJECTS ========================

function initDefaultSubjects() {
    return [
        {
            id: "phy1",
            name: "Physics 1st Paper",
            isCustom: false,
            chapters: ["ভৌতজগৎ ও পরিমাপ", "ভেক্টর", "গতিবিদ্যা", "নিউটনিয়ান বলবিদ্যা", "কাজ, শক্তি ও ক্ষমতা", "মহাকর্ষ ও অভিকর্ষ", "পদার্থের গাঠনিক ধর্ম", "পর্যায়বৃত্ত গতি", "তরঙ্গ", "আদর্শ গ্যাস ও গ্যাসের গতিতত্ত্ব"]
        },
        {
            id: "phy2",
            name: "Physics 2nd Paper",
            isCustom: false,
            chapters: ["তাপগতিবিদ্যা", "স্থির তড়িৎ", "চল তড়িৎ", "তড়িৎ প্রবাহের চুম্বক ক্রিয়া", "তড়িৎচুম্বকীয় আবেশ", "জ্যামিতিক আলোকবিজ্ঞান", "ভৌত আলোকবিজ্ঞান", "আধুনিক পদার্থবিজ্ঞান", "পরমাণু মডেল", "সেমিকন্ডাক্টর ও ইলেকট্রনিক্স", "জ্যোতির্বিজ্ঞান"]
        },
        {
            id: "math1",
            name: "Higher Math 1st Paper",
            isCustom: false,
            chapters: ["ম্যাট্রিক্স ও নির্ণায়ক", "ভেক্টর", "সরলরেখা", "বৃত্ত", "বিন্যাস ও সমাবেশ", "ত্রিকোণমিতিক অনুপাত", "সংযুক্ত কোণের ত্রিকোণমিতি", "ফাংশন ও লেখচিত্র", "অন্তরীকরণ", "যোগজীকরণ"]
        },
        {
            id: "math2",
            name: "Higher Math 2nd Paper",
            isCustom: false,
            chapters: ["বাস্তব সংখ্যা ও অসমতা", "যোগাশ্রয়ী প্রোগ্রাম", "জটিল সংখ্যা", "বহুপদী ও সমীকরণ", "দ্বিপদী বিস্তৃতি", "কণিক", "বিপরীত ত্রিকোণমিতিক ফাংশন", "স্থিতিবিদ্যা", "সমতলে বস্তুগণার গতি", "বিস্তার পরিমাপ ও সম্ভাবনা"]
        },
        {
            id: "chem1",
            name: "Chemistry 1st Paper",
            isCustom: false,
            chapters: ["ল্যাবরেটরির নিরাপদ ব্যবহার", "গুণগত রসায়ন", "মৌলের পর্যায়বৃত্ত ধর্ম", "রাসায়নিক পরিবর্তন", "কর্মমুখী রসায়ন"]
        },
        {
            id: "chem2",
            name: "Chemistry 2nd Paper",
            isCustom: false,
            chapters: ["পরিবেশ রসায়ন", "জৈব রসায়ন", "পরিমাণগত রসায়ন", "তড়িৎ রসায়ন", "অর্থনৈতিক রসায়ন"]
        },
        {
            id: "botany",
            name: "Botany",
            isCustom: false,
            chapters: ["কোষ ও এর গঠন", "কোষ বিভাজন", "কোষ রসায়ন", "অণুজীব", "শৈবাল ও ছত্রাক", "ব্রায়োফাইটা ও টেরিডোফাইটা", "নগ্নবীজী ও আবৃতবীজী", "টিস্যু ও টিস্যুতন্ত্র", "উদ্ভিদ শারীরতত্ত্ব", "উদ্ভিদ প্রজনন", "জীব প্রযুক্তি", "জীবের পরিবেশ ও সংরক্ষণ"]
        },
        {
            id: "zoology",
            name: "Zoology",
            isCustom: false,
            chapters: ["প্রাণীর শ্রেণিবিন্যাস", "প্রাণীর পরিচিতি", "পরিপাক ও শোষণ", "রক্ত ও সঞ্চালন", "শ্বসন ও শ্বাসক্রিয়া", "বর্জ্য ও নিষ্কাশন", "চলন ও অঙ্গচালনা", "সমন্বয় ও নিয়ন্ত্রণ", "জীবনের ধারাবাহিকতা", "মানবদেহের প্রতিরক্ষা", "জিনতত্ত্ব ও বিবর্তন", "প্রাণীর আচরণ"]
        },
        {
            id: "ict",
            name: "ICT",
            isCustom: false,
            chapters: ["তথ্য ও যোগাযোগ প্রযুক্তি", "কমিউনিকেশন সিস্টেম", "সংখ্যা পদ্ধতি ও ডিজিটাল ডিভাইস", "HTML", "প্রogramming ভাষা", "ডেটাবেজ"]
        }
    ];
}



function generateId() {
    return Date.now().toString(36) + Math.random().toString(36).substr(2);
}

// ======================== LOAD & SAVE ========================

function loadFromLocalStorage() {
    // Force reset logic: version change করলে পুরানো ভুল ডাটা মুছে যাবে
    const currentCodeVersion = "v3_fixed_subjects"; 
    const savedVersion = localStorage.getItem("studyBeeVersion");
    const savedSubjects = localStorage.getItem("studyBeeSubjects");
    
    if (!savedSubjects || savedVersion !== currentCodeVersion) {
        subjects = initDefaultSubjects();
        completedStatus = {};
        localStorage.setItem("studyBeeVersion", currentCodeVersion);
        saveToLocalStorage(); 
    } else {
        try {
            subjects = JSON.parse(savedSubjects);
            const savedProgress = localStorage.getItem("studyBeeProgress");
            completedStatus = savedProgress ? JSON.parse(savedProgress) : {};
        } catch(e) { 
            subjects = initDefaultSubjects(); 
        }
    }
    
    // রুটিন লোড করার অংশ
    const savedRoutine = localStorage.getItem("studyBeeRoutine");
    if (savedRoutine) {
        try { routineBlocks = JSON.parse(savedRoutine); } catch(e) { routineBlocks = []; }
    }
    
    if (routineBlocks.length === 0) {
        routineBlocks = [
            { id: generateId(), startTime: "05:00", endTime: "06:00", subject: "Physics", activity: "Practice" },
            { id: generateId(), startTime: "20:00", endTime: "22:00", subject: "Chemistry", activity: "Problem Solving" }
        ];
    }
    
    // গোল এবং নোট লোড করার অংশ
    const savedGoal = localStorage.getItem("studyBeeDailyGoal");
    if (savedGoal) {
        try {
            const goalData = JSON.parse(savedGoal);
            dailyGoal = goalData.dailyGoal || 3;
            todayCompleted = goalData.todayCompleted || 0;
            lastResetDate = goalData.lastResetDate || "";
        } catch(e) {}
    }
    
    const savedNotes = localStorage.getItem("studyBeeNotes");
    quickNotes = savedNotes || "";
    
    const savedTheme = localStorage.getItem("studyBeeTheme");
    if (savedTheme) applyTheme(savedTheme);
    
    if (subjects.length > 0 && !currentSubjectId) {
        currentSubjectId = subjects[0].id;
    }
}


function saveToLocalStorage() {
    localStorage.setItem("studyBeeSubjects", JSON.stringify(subjects));
    localStorage.setItem("studyBeeProgress", JSON.stringify(completedStatus));
    localStorage.setItem("studyBeeRoutine", JSON.stringify(routineBlocks));
    
    const goalData = { dailyGoal, todayCompleted, lastResetDate };
    localStorage.setItem("studyBeeDailyGoal", JSON.stringify(goalData));
    localStorage.setItem("studyBeeNotes", quickNotes);
    localStorage.setItem("studyBeeTheme", currentTheme);
    
    updateGlobalStats();
    renderSubjectTabs();
    updateCurrentSubjectProgress();
    updateDailyGoalUI();
    updateShareStats();
    drawProgressRing();
}

function checkDateReset() {
    const today = new Date().toDateString();
    if (lastResetDate !== today) {
        todayCompleted = 0;
        lastResetDate = today;
        saveToLocalStorage();
    }
}

// ======================== THEME MANAGEMENT ========================

function applyTheme(theme) {
    currentTheme = theme;
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("studyBeeTheme", theme);
}

function initThemeSwitcher() {
    const themeOptions = document.querySelectorAll(".theme-option");
    themeOptions.forEach(option => {
        option.addEventListener("click", () => {
            const theme = option.getAttribute("data-theme");
            if (theme) applyTheme(theme);
            closePanel();
        });
    });
}

// ======================== SIDE PANEL ========================

function openPanel() {
    document.getElementById("sidePanel").classList.add("open");
    document.getElementById("panelOverlay").classList.add("active");
}

function closePanel() {
    document.getElementById("sidePanel").classList.remove("open");
    document.getElementById("panelOverlay").classList.remove("active");
}

function initSidePanel() {
    const menuBtn = document.getElementById("menuToggleBtn");
    const closeBtn = document.getElementById("closePanelBtn");
    const overlay = document.getElementById("panelOverlay");
    
    if (menuBtn) menuBtn.addEventListener("click", openPanel);
    if (closeBtn) closeBtn.addEventListener("click", closePanel);
    if (overlay) overlay.addEventListener("click", closePanel);
}

// ======================== SUBJECT & CHAPTER MANAGEMENT ========================

function addCustomSubject(name) {
    const newId = `custom_${generateId()}`;
    subjects.push({
        id: newId,
        name: name,
        isCustom: true,
        chapters: []
    });
    currentSubjectId = newId;
    saveToLocalStorage();
    renderSubjectTabs();
    renderChapters();
}

function deleteSubject(subjectId) {
    const subject = subjects.find(s => s.id === subjectId);
    if (!subject.isCustom) {
        alert("Default subjects cannot be deleted. You can hide them by not using them.");
        return;
    }
    if (confirm(`Delete "${subject.name}" and all its chapters?`)) {
        subjects = subjects.filter(s => s.id !== subjectId);
        for (let key in completedStatus) {
            if (key.startsWith(subjectId)) delete completedStatus[key];
        }
        if (currentSubjectId === subjectId && subjects.length > 0) {
            currentSubjectId = subjects[0].id;
        }
        saveToLocalStorage();
        renderSubjectTabs();
        renderChapters();
    }
}

function editSubjectName(subjectId, newName) {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject && subject.isCustom) {
        subject.name = newName;
        saveToLocalStorage();
        renderSubjectTabs();
        renderChapters();
    } else if (subject && !subject.isCustom) {
        alert("Default subject names cannot be changed.");
    }
}

function addChapterToSubject(subjectId, chapterName) {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject) {
        subject.chapters.push(chapterName);
        const key = `${subjectId}_ch${subject.chapters.length - 1}`;
        completedStatus[key] = false;
        saveToLocalStorage();
        if (currentSubjectId === subjectId) renderChapters();
        renderSubjectTabs();
    }
}

function editChapterName(subjectId, chapterIndex, newName) {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject && subject.chapters[chapterIndex]) {
        subject.chapters[chapterIndex] = newName;
        saveToLocalStorage();
        if (currentSubjectId === subjectId) renderChapters();
        renderSubjectTabs();
    }
}

function deleteChapter(subjectId, chapterIndex) {
    const subject = subjects.find(s => s.id === subjectId);
    if (subject && subject.chapters[chapterIndex]) {
        subject.chapters.splice(chapterIndex, 1);
        const newCompletedStatus = {};
        for (let key in completedStatus) {
            if (key.startsWith(subjectId)) {
                const parts = key.split('_ch');
                const oldIndex = parseInt(parts[1]);
                if (oldIndex < chapterIndex) {
                    newCompletedStatus[key] = completedStatus[key];
                } else if (oldIndex > chapterIndex) {
                    newCompletedStatus[`${subjectId}_ch${oldIndex - 1}`] = completedStatus[key];
                }
            } else {
                newCompletedStatus[key] = completedStatus[key];
            }
        }
        completedStatus = newCompletedStatus;
        saveToLocalStorage();
        if (currentSubjectId === subjectId) renderChapters();
        renderSubjectTabs();
    }
}

function toggleChapterCompletion(subjectId, chapterIndex) {
    const key = `${subjectId}_ch${chapterIndex}`;
    const wasCompleted = completedStatus[key];
    completedStatus[key] = !wasCompleted;
    
    if (!wasCompleted && completedStatus[key]) {
        todayCompleted++;
    } else if (wasCompleted && !completedStatus[key]) {
        todayCompleted--;
    }
    
    saveToLocalStorage();
    if (currentSubjectId === subjectId) renderChapters();
    renderSubjectTabs();
}

// ======================== RENDER FUNCTIONS ========================

function renderSubjectTabs() {
    const container = document.getElementById("subjectTabs");
    if (!container) return;
    container.innerHTML = "";
    
    subjects.forEach(sub => {
        let completed = 0;
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            if (completedStatus[`${sub.id}_ch${idx}`]) completed++;
        }
        const total = sub.chapters.length;
        
        const tab = document.createElement("div");
        tab.className = `subject-tab ${currentSubjectId === sub.id ? "active" : ""}`;
        tab.innerHTML = `
            <span class="subject-tab-name">${escapeHtml(sub.name)}</span>
            <span class="subject-tab-stats">${completed}/${total}</span>
            ${sub.isCustom ? `
                <div class="tab-actions">
                    <button class="tab-edit" data-id="${sub.id}" title="Edit Subject">✎</button>
                    <button class="tab-delete" data-id="${sub.id}" title="Delete Subject">🗑</button>
                </div>
            ` : ''}
        `;
        
        tab.addEventListener("click", (e) => {
            if (e.target.classList.contains("tab-edit") || e.target.classList.contains("tab-delete")) return;
            currentSubjectId = sub.id;
            renderSubjectTabs();
            renderChapters();
            document.getElementById("currentSubjectName").innerText = sub.name;
            updateCurrentSubjectProgress();
        });
        
        const editBtn = tab.querySelector(".tab-edit");
        if (editBtn) {
            editBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                currentEditSubjectId = sub.id;
                document.getElementById("editSubjectInput").value = sub.name;
                document.getElementById("editSubjectModal").style.display = "block";
            });
        }
        
        const deleteBtn = tab.querySelector(".tab-delete");
        if (deleteBtn) {
            deleteBtn.addEventListener("click", (e) => {
                e.stopPropagation();
                deleteSubject(sub.id);
            });
        }
        
        container.appendChild(tab);
    });
}

function renderChapters() {
    const subject = subjects.find(s => s.id === currentSubjectId);
    const container = document.getElementById("chaptersContainer");
    if (!container) return;
    
    if (!subject || subject.chapters.length === 0) {
        container.innerHTML = '<div class="empty-chapters">No chapters yet. Click "Add Chapter" to get started.</div>';
        return;
    }
    
    container.innerHTML = "";
    
    subject.chapters.forEach((chapter, idx) => {
        const isCompleted = completedStatus[`${subject.id}_ch${idx}`] === true;
        const chapterDiv = document.createElement("div");
        chapterDiv.className = `chapter-item ${isCompleted ? "completed" : ""}`;
        chapterDiv.setAttribute("data-index", idx);
        chapterDiv.draggable = true;
        
        chapterDiv.innerHTML = `
            <div class="drag-handle-chapter" draggable="false">⋮⋮</div>
            <div class="chapter-checkbox"></div>
            <span class="chapter-title">${escapeHtml(chapter)}</span>
            <div class="chapter-actions">
                <button class="chapter-edit" data-idx="${idx}">✎</button>
                <button class="chapter-delete" data-idx="${idx}">🗑</button>
            </div>
        `;
        
        const checkbox = chapterDiv.querySelector(".chapter-checkbox");
        checkbox.addEventListener("click", (e) => {
            e.stopPropagation();
            toggleChapterCompletion(subject.id, idx);
        });
        
        const editBtn = chapterDiv.querySelector(".chapter-edit");
        editBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            currentEditChapterId = idx;
            document.getElementById("editChapterInput").value = chapter;
            document.getElementById("editChapterModal").style.display = "block";
        });
        
        const deleteBtn = chapterDiv.querySelector(".chapter-delete");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation();
            if (confirm(`Delete "${chapter}"?`)) {
                deleteChapter(subject.id, idx);
            }
        });
        
        container.appendChild(chapterDiv);
    });
    
    attachChapterDragDrop();
}

function attachChapterDragDrop() {
    const items = document.querySelectorAll(".chapter-item");
    let dragSrc = null;
    
    items.forEach(item => {
        item.addEventListener("dragstart", (e) => {
            dragSrc = parseInt(item.getAttribute("data-index"));
            e.dataTransfer.setData("text/plain", "");
            item.style.opacity = "0.5";
        });
        item.addEventListener("dragend", (e) => {
            item.style.opacity = "1";
        });
        item.addEventListener("dragover", (e) => e.preventDefault());
        item.addEventListener("drop", (e) => {
            e.preventDefault();
            const target = parseInt(item.getAttribute("data-index"));
            if (dragSrc !== null && dragSrc !== target) {
                const subject = subjects.find(s => s.id === currentSubjectId);
                const dragged = subject.chapters[dragSrc];
                subject.chapters.splice(dragSrc, 1);
                subject.chapters.splice(target, 0, dragged);
                
                const newCompletedStatus = {};
                for (let i = 0; i < subject.chapters.length; i++) {
                    newCompletedStatus[`${subject.id}_ch${i}`] = completedStatus[`${subject.id}_ch${i}`] || false;
                }
                Object.assign(completedStatus, newCompletedStatus);
                saveToLocalStorage();
                renderChapters();
            }
            dragSrc = null;
        });
    });
}

function updateCurrentSubjectProgress() {
    const subject = subjects.find(s => s.id === currentSubjectId);
    if (!subject) return;
    let total = subject.chapters.length;
    let done = 0;
    for (let idx = 0; idx < total; idx++) {
        if (completedStatus[`${subject.id}_ch${idx}`]) done++;
    }
    const percent = total === 0 ? 0 : Math.round((done / total) * 100);
    const fillBar = document.getElementById("subjectProgressFill");
    const percentText = document.getElementById("subjectProgressText");
    if (fillBar) fillBar.style.width = `${percent}%`;
    if (percentText) percentText.innerText = `${percent}%`;
    document.getElementById("currentSubjectName").innerText = subject.name;
}

function updateGlobalStats() {
    let totalCh = 0, completedCh = 0;
    for (let sub of subjects) {
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            totalCh++;
            if (completedStatus[`${sub.id}_ch${idx}`]) completedCh++;
        }
    }
    const globalSpan = document.getElementById("globalStats");
    if (globalSpan) globalSpan.innerText = `${completedCh} / ${totalCh} completed`;
}

function updateShareStats() {
    let total = 0, completed = 0;
    for (let sub of subjects) {
        total += sub.chapters.length;
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            if (completedStatus[`${sub.id}_ch${idx}`]) completed++;
        }
    }
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    document.getElementById("shareTotal").innerText = total;
    document.getElementById("shareCompleted").innerText = completed;
    document.getElementById("sharePercent").innerText = `${percent}%`;
}

function escapeHtml(str) {
    if (!str) return "";
    return str.replace(/[&<>]/g, function(m) {
        return m === '&' ? '&amp;' : m === '<' ? '&lt;' : '&gt;';
    });
}

// ======================== ROUTINE FUNCTIONS ========================

function renderRoutine() {
    const container = document.getElementById("routineList");
    if (!container) return;
    if (routineBlocks.length === 0) {
        container.innerHTML = '<div class="empty-routine">No time blocks added.</div>';
        return;
    }
    container.innerHTML = "";
    routineBlocks.forEach((block, index) => {
        const blockDiv = document.createElement("div");
        blockDiv.className = "routine-block";
        blockDiv.setAttribute("data-id", block.id);
        blockDiv.setAttribute("data-index", index);
        blockDiv.draggable = true;
        blockDiv.innerHTML = `
            <div class="drag-handle">⋮⋮</div>
            <div class="routine-time">
                <input type="text" class="time-input start-time" value="${block.startTime}" data-field="startTime" data-id="${block.id}" placeholder="06:00">
                <span>-</span>
                <input type="text" class="time-input end-time" value="${block.endTime}" data-field="endTime" data-id="${block.id}" placeholder="07:00">
            </div>
            <div class="routine-subject"><input type="text" class="subject-input" value="${escapeHtml(block.subject)}" data-field="subject" data-id="${block.id}" placeholder="Subject"></div>
            <div class="routine-activity"><input type="text" class="activity-input" value="${escapeHtml(block.activity)}" data-field="activity" data-id="${block.id}" placeholder="Activity"></div>
            <button class="delete-block-btn" data-id="${block.id}">✕</button>
        `;
        container.appendChild(blockDiv);
    });
    attachRoutineEvents();
    attachRoutineDragDrop();
}

function attachRoutineEvents() {
    document.querySelectorAll('.start-time, .end-time, .subject-input, .activity-input').forEach(input => {
        input.removeEventListener('change', handleRoutineChange);
        input.addEventListener('change', handleRoutineChange);
    });
    document.querySelectorAll('.delete-block-btn').forEach(btn => {
        btn.removeEventListener('click', handleDeleteBlock);
        btn.addEventListener('click', handleDeleteBlock);
    });
}

function handleRoutineChange(e) {
    const field = e.target.getAttribute('data-field');
    const blockId = e.target.getAttribute('data-id');
    const block = routineBlocks.find(b => b.id === blockId);
    if (block && field) { block[field] = e.target.value; saveToLocalStorage(); }
}

function handleDeleteBlock(e) {
    routineBlocks = routineBlocks.filter(b => b.id !== e.target.getAttribute('data-id'));
    saveToLocalStorage();
    renderRoutine();
}

function attachRoutineDragDrop() {
    const blocks = document.querySelectorAll('.routine-block');
    let dragSrc = null;
    blocks.forEach(block => {
        block.addEventListener('dragstart', (e) => { dragSrc = parseInt(block.getAttribute('data-index')); e.dataTransfer.setData('text/plain', ''); });
        block.addEventListener('dragover', (e) => e.preventDefault());
        block.addEventListener('drop', (e) => {
            e.preventDefault();
            const target = parseInt(block.getAttribute('data-index'));
            if (dragSrc !== null && dragSrc !== target) {
                const dragged = routineBlocks[dragSrc];
                routineBlocks.splice(dragSrc, 1);
                routineBlocks.splice(target, 0, dragged);
                saveToLocalStorage();
                renderRoutine();
            }
        });
    });
}

function addTimeBlock() {
    routineBlocks.push({ id: generateId(), startTime: "09:00", endTime: "10:00", subject: "New Subject", activity: "Study" });
    saveToLocalStorage();
    renderRoutine();
}

function exportRoutine() {
    const blob = new Blob([JSON.stringify(routineBlocks, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "study_bee_routine.json";
    a.click();
    URL.revokeObjectURL(a.href);
}

function importRoutine() {
    document.getElementById("importFileInput").click();
    document.getElementById("importFileInput").onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                routineBlocks = JSON.parse(evt.target.result);
                saveToLocalStorage();
                renderRoutine();
                alert("Routine imported successfully.");
            } catch(err) { alert("Invalid file format."); }
        };
        reader.readAsText(file);
    };
}

// ======================== TIMER ========================

function updateTimerDisplay() {
    const mins = Math.floor(timeSeconds / 60);
    const secs = timeSeconds % 60;
    document.getElementById("timerDisplay").innerText = `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
}

function startTimer() {
    if (timerInterval) clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        if (timeSeconds <= 1) {
            clearInterval(timerInterval);
            timerInterval = null;
            alert("Timer finished! Time for a break.");
        } else {
            timeSeconds--;
            updateTimerDisplay();
        }
    }, 1000);
}

function pauseTimer() { if (timerInterval) { clearInterval(timerInterval); timerInterval = null; } }
function resetTimer() { pauseTimer(); timeSeconds = currentTimerMode === "25" ? 25*60 : currentTimerMode === "50" ? 50*60 : 5*60; updateTimerDisplay(); }
function setTimerMode(mode) { currentTimerMode = mode; resetTimer(); }

// ======================== DAILY GOAL ========================

function updateDailyGoalUI() {
    document.getElementById("dailyGoalInput").value = dailyGoal;
    document.getElementById("todayCompleted").innerText = `${todayCompleted} chapters done today`;
    drawProgressRing();
}

function drawProgressRing() {
    const canvas = document.getElementById("progressRing");
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    const size = 120;
    canvas.width = size;
    canvas.height = size;
    const percent = dailyGoal > 0 ? Math.min(100, (todayCompleted / dailyGoal) * 100) : 0;
    document.getElementById("ringPercentage").innerText = `${Math.round(percent)}%`;
    
    ctx.clearRect(0, 0, size, size);
    const center = size/2, radius = 50, startAngle = -0.5 * Math.PI;
    const endAngle = startAngle + (2 * Math.PI * percent / 100);
    
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = "var(--border)";
    ctx.lineWidth = 8;
    ctx.stroke();
    
    ctx.beginPath();
    ctx.arc(center, center, radius, startAngle, endAngle);
    ctx.strokeStyle = "var(--accent-secondary)";
    ctx.stroke();
}

function setDailyGoal() {
    const input = document.getElementById("dailyGoalInput");
    dailyGoal = parseInt(input.value) || 3;
    saveToLocalStorage();
    updateDailyGoalUI();
}

function resetDailyGoal() {
    todayCompleted = 0;
    saveToLocalStorage();
    updateDailyGoalUI();
}

// ======================== QUICK NOTES ========================

function loadQuickNotes() {
    const textarea = document.getElementById("quickNotes");
    if (textarea) textarea.value = quickNotes;
}

function saveQuickNotes() {
    const textarea = document.getElementById("quickNotes");
    if (textarea) { quickNotes = textarea.value; localStorage.setItem("studyBeeNotes", quickNotes); }
}

function clearNotes() {
    if (confirm("Clear all notes?")) { quickNotes = ""; loadQuickNotes(); saveQuickNotes(); }
}

// ======================== SHARE PROGRESS ========================

function shareProgress() {
    let total = 0, completed = 0;
    for (let sub of subjects) {
        total += sub.chapters.length;
        for (let idx = 0; idx < sub.chapters.length; idx++) {
            if (completedStatus[`${sub.id}_ch${idx}`]) completed++;
        }
    }
    const percent = total > 0 ? Math.round((completed / total) * 100) : 0;
    const message = `Study Bee Report: I have completed ${completed} out of ${total} chapters (${percent}%). Keep grinding!`;
    const msgDiv = document.getElementById("shareMessage");
    if (navigator.share) {
        navigator.share({ title: "My Study Progress", text: message });
    } else {
        msgDiv.innerText = message;
        setTimeout(() => { msgDiv.innerText = ""; }, 3000);
        navigator.clipboard.writeText(message);
        alert("Progress copied to clipboard!");
    }
}

// ======================== BACKUP & RESTORE ========================

function exportAllData() {
    const allData = {
        subjects: subjects,
        completedStatus: completedStatus,
        routineBlocks: routineBlocks,
        dailyGoal: { dailyGoal, todayCompleted, lastResetDate },
        quickNotes: quickNotes,
        version: "1.0"
    };
    const blob = new Blob([JSON.stringify(allData, null, 2)], { type: "application/json" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "study_bee_full_backup.json";
    a.click();
    URL.revokeObjectURL(a.href);
}

function importAllData() {
    document.getElementById("importAllDataInput").click();
    document.getElementById("importAllDataInput").onchange = function(e) {
        const file = e.target.files[0];
        if (!file) return;
        const reader = new FileReader();
        reader.onload = function(evt) {
            try {
                const data = JSON.parse(evt.target.result);
                if (data.subjects) subjects = data.subjects;
                if (data.completedStatus) completedStatus = data.completedStatus;
                if (data.routineBlocks) routineBlocks = data.routineBlocks;
                if (data.dailyGoal) {
                    dailyGoal = data.dailyGoal.dailyGoal || 3;
                    todayCompleted = data.dailyGoal.todayCompleted || 0;
                    lastResetDate = data.dailyGoal.lastResetDate || "";
                }
                if (data.quickNotes) quickNotes = data.quickNotes;
                if (subjects.length > 0 && !currentSubjectId) currentSubjectId = subjects[0].id;
                saveToLocalStorage();
                renderSubjectTabs();
                renderChapters();
                renderRoutine();
                loadQuickNotes();
                updateDailyGoalUI();
                alert("Data imported successfully!");
            } catch(err) { alert("Invalid backup file."); }
        };
        reader.readAsText(file);
    };
}

// ======================== MODAL HANDLERS ========================

function initModals() {
    const modals = document.querySelectorAll(".modal");
    const closeBtns = document.querySelectorAll(".modal-close");
    
    closeBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            modals.forEach(m => m.style.display = "none");
        });
    });
    
    window.addEventListener("click", (e) => {
        modals.forEach(m => { if (e.target === m) m.style.display = "none"; });
    });
    
    document.getElementById("saveChapterEditBtn")?.addEventListener("click", () => {
        const newName = document.getElementById("editChapterInput").value.trim();
        if (newName && currentEditChapterId !== null) {
            editChapterName(currentSubjectId, currentEditChapterId, newName);
            document.getElementById("editChapterModal").style.display = "none";
            currentEditChapterId = null;
        }
    });
    
    document.getElementById("cancelChapterEditBtn")?.addEventListener("click", () => {
        document.getElementById("editChapterModal").style.display = "none";
        currentEditChapterId = null;
    });
    
    document.getElementById("saveSubjectEditBtn")?.addEventListener("click", () => {
        const newName = document.getElementById("editSubjectInput").value.trim();
        if (newName && currentEditSubjectId) {
            editSubjectName(currentEditSubjectId, newName);
            document.getElementById("editSubjectModal").style.display = "none";
            currentEditSubjectId = null;
        }
    });
    
    document.getElementById("cancelSubjectEditBtn")?.addEventListener("click", () => {
        document.getElementById("editSubjectModal").style.display = "none";
        currentEditSubjectId = null;
    });
    
    document.getElementById("addSubjectBtn")?.addEventListener("click", () => {
        document.getElementById("addSubjectModal").style.display = "block";
    });
    
    document.getElementById("confirmAddSubjectBtn")?.addEventListener("click", () => {
        const name = document.getElementById("addSubjectInput").value.trim();
        if (name) {
            addCustomSubject(name);
            document.getElementById("addSubjectModal").style.display = "none";
            document.getElementById("addSubjectInput").value = "";
        }
    });
    
    document.getElementById("cancelAddSubjectBtn")?.addEventListener("click", () => {
        document.getElementById("addSubjectModal").style.display = "none";
        document.getElementById("addSubjectInput").value = "";
    });
    
    document.getElementById("addChapterBtn")?.addEventListener("click", () => {
        document.getElementById("addChapterModal").style.display = "block";
    });
    
    document.getElementById("confirmAddChapterBtn")?.addEventListener("click", () => {
        const name = document.getElementById("addChapterInput").value.trim();
        if (name && currentSubjectId) {
            addChapterToSubject(currentSubjectId, name);
            document.getElementById("addChapterModal").style.display = "none";
            document.getElementById("addChapterInput").value = "";
        }
    });
    
    document.getElementById("cancelAddChapterBtn")?.addEventListener("click", () => {
        document.getElementById("addChapterModal").style.display = "none";
        document.getElementById("addChapterInput").value = "";
    });
}

// ======================== EXAM ROUTINE MODAL ========================

function initExamModal() {
    const modal = document.getElementById("examModal");
    const btn = document.getElementById("viewExamRoutineBtn");
    if (btn) btn.onclick = () => modal.style.display = "block";
    const span = document.getElementsByClassName("modal-close")[0];
    if (span) span.onclick = () => modal.style.display = "none";
    window.onclick = (e) => { if (e.target == modal) modal.style.display = "none"; };
}

// ======================== TABS & DATE ========================

function initTabs() {
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const tabId = btn.getAttribute('data-tab');
            document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(c => c.classList.remove('active'));
            btn.classList.add('active');
            document.getElementById(`${tabId}-tab`).classList.add('active');
            if (tabId === 'routine') renderRoutine();
            if (tabId === 'tools') { loadQuickNotes(); updateShareStats(); drawProgressRing(); }
        });
    });
}

function updateLiveDate() {
    const dateElem = document.getElementById("liveDate");
    if (dateElem) {
        const now = new Date();
        const banglaMonths = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const weekdays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        dateElem.innerText = `${weekdays[now.getDay()]}, ${now.getDate()} ${banglaMonths[now.getMonth()]} ${now.getFullYear()}`;
    }
}

// ======================== INITIALIZATION ========================

function init() {
    loadFromLocalStorage();
    renderSubjectTabs();
    renderChapters();
    updateLiveDate();
    setInterval(updateLiveDate, 60000);
    
    document.getElementById("addTimeBlockBtn")?.addEventListener("click", addTimeBlock);
    document.getElementById("exportRoutineBtn")?.addEventListener("click", exportRoutine);
    document.getElementById("importRoutineBtn")?.addEventListener("click", importRoutine);
    document.getElementById("startTimerBtn")?.addEventListener("click", startTimer);
    document.getElementById("pauseTimerBtn")?.addEventListener("click", pauseTimer);
    document.getElementById("resetTimerBtn")?.addEventListener("click", resetTimer);
    document.querySelectorAll(".timer-mode-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".timer-mode-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            setTimerMode(btn.getAttribute("data-mode"));
        });
    });
    document.getElementById("dailyGoalInput")?.addEventListener("change", setDailyGoal);
    document.getElementById("resetDailyGoalBtn")?.addEventListener("click", resetDailyGoal);
    document.getElementById("quickNotes")?.addEventListener("input", saveQuickNotes);
    document.getElementById("clearNotesBtn")?.addEventListener("click", clearNotes);
    document.getElementById("shareProgressBtn")?.addEventListener("click", shareProgress);
    document.getElementById("exportAllDataBtn")?.addEventListener("click", exportAllData);
    document.getElementById("importAllDataBtn")?.addEventListener("click", importAllData);
    
    initModals();
    initExamModal();
    initTabs();
    initSidePanel();
    initThemeSwitcher();
    updateDailyGoalUI();
    updateShareStats();
    loadQuickNotes();
}

document.addEventListener("DOMContentLoaded", init);
