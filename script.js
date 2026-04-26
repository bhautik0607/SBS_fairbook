const quotes = [
    "સફળતાનો કોઈ શોર્ટકટ નથી, મહેનત જ તેની ચાવી છે.",
    "તમારો સમય મર્યાદિત છે, તેને બીજા માટે વેડફશો નહીં.",
    "શીખવું ક્યારેય બંધ ન કરો, કારણ કે જીવન ક્યારેય શીખવવાનું બંધ કરતું નથી.",
    "નિષ્ફળતા એ સફળતાનું પ્રથમ પગલું છે.",
    "વિશ્વાસ રાખો, તમે જે ધારો તે કરી શકો છો."
];

const data = {
    "Std 9": { "ગણિત": ["સંખ્યા પદ્ધતિ", "બહુપદીઓ"], "વિજ્ઞાન": ["ગતિ", "પેશીઓ"] },
    "Std 10": { "ગણિત": ["વાસ્તવિક સંખ્યાઓ", "સંભાવના"], "વિજ્ઞાન": ["રાસાયણિક પ્રક્રિયાઓ"] },
    "Streams": {
        "Science": { "ગણિત": ["શ્રેણિક", "નિશ્ચાયક"], "જીવવિજ્ઞાન": ["પ્રજનન"] },
        "Commerce": { "નામું": ["વાર્ષિક હિસાબો"] },
        "Arts": { "મનોવિજ્ઞાન": ["બુદ્ધિ"] }
    }
};

let pinnedQuestions = JSON.parse(localStorage.getItem('pinned')) || [];
const contentArea = document.getElementById('app-content');
const quoteArea = document.getElementById('quote-container');

function showSplashScreen() {
    contentArea.innerHTML = `
        <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:70vh;">
            <img src="icon.png" style="width:120px; border-radius:20px;">
            <h1 style="color:#6200ee;">Digital Fairbook</h1>
            <p>જ્ઞાન એ જ શક્તિ છે...</p>
        </div>
    `;
    setTimeout(loadHome, 2000);
}

function updateQuote() {
    const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quoteArea.innerText = randomQuote;
}

function loadHome() {
    updateQuote();
    contentArea.innerHTML = `
        <button class="btn-card grad-1" onclick="loadSubjects('Std 9')">ધોરણ 9</button>
        <button class="btn-card grad-2" onclick="loadSubjects('Std 10')">ધોરણ 10</button>
        <button class="btn-card grad-3" onclick="loadStreamSelection('Std 11')">ધોરણ 11</button>
        <button class="btn-card grad-4" onclick="loadStreamSelection('Std 12')">ધોરણ 12</button>
        <button class="btn-card grad-5" onclick="loadPinnedPage()" style="margin-top:20px;">⭐ Pinned Questions</button>
    `;
}

function loadStreamSelection(std) {
    updateQuote();
    contentArea.innerHTML = `
        <button class="back-btn" onclick="loadHome()">← પાછા</button>
        <button class="btn-card grad-1" onclick="loadSubjects('Science', true, '${std}')">Science</button>
        <button class="btn-card grad-5" onclick="loadSubjects('Commerce', true, '${std}')">Commerce</button>
        <button class="btn-card grad-2" onclick="loadSubjects('Arts', true, '${std}')">Arts</button>
    `;
}

function loadSubjects(key, isSenior = false, stdName = "") {
    updateQuote();
    let list = isSenior ? data["Streams"][key] : data[key];
    contentArea.innerHTML = `<button class="back-btn" onclick="${isSenior ? `loadStreamSelection('${stdName}')` : 'loadHome()'}">← પાછા</button>`;
    
    Object.keys(list).forEach((sub, index) => {
        let btn = document.createElement('button');
        btn.className = `btn-card grad-${(index % 5) + 1}`;
        btn.innerText = sub;
        btn.onclick = () => loadChapters(list[sub], sub, key, isSenior, stdName);
        contentArea.appendChild(btn);
    });
}

function loadChapters(chapters, subName, backKey, isSenior, stdName) {
    updateQuote();
    contentArea.innerHTML = `<button class="back-btn" onclick="loadSubjects('${backKey}', ${isSenior}, '${stdName}')">← પાછા</button><h3>${subName}</h3>`;
    
    chapters.forEach((chap, index) => {
        let div = document.createElement('div');
        div.className = `btn-card grad-${(index % 4) + 1}`;
        div.innerHTML = `${chap} <span class="pin-btn ${pinnedQuestions.includes(chap) ? 'active' : ''}" onclick="event.stopPropagation(); togglePin('${chap}')">★</span>`;
        div.onclick = () => alert(chap + " નું મટીરિયલ ટૂંક સમયમાં આવશે.");
        contentArea.appendChild(div);
    });
}

function togglePin(question) {
    if (pinnedQuestions.includes(question)) {
        pinnedQuestions = pinnedQuestions.filter(q => q !== question);
    } else {
        pinnedQuestions.push(question);
    }
    localStorage.setItem('pinned', JSON.stringify(pinnedQuestions));
    alert("Pinned લિસ્ટ અપડેટ થયું!");
    // Refresh star color visually
    event.target.classList.toggle('active');
}

function loadPinnedPage() {
    updateQuote();
    contentArea.innerHTML = `<button class="back-btn" onclick="loadHome()">← પાછા</button><h3>⭐ Pinned Questions</h3>`;
    if (pinnedQuestions.length === 0) {
        contentArea.innerHTML += "<p style='text-align:center;'>કોઈ પ્રશ્ન પિન કરેલો નથી.</p>";
    } else {
        pinnedQuestions.forEach(q => {
            let div = document.createElement('div');
            div.className = "btn-card grad-3";
            div.innerText = q;
            contentArea.appendChild(div);
        });
    }
    toggleNav(); // Sidebar close
}

function toggleNav() {
    let sb = document.getElementById("sidebar");
    sb.style.width = sb.style.width === "250px" ? "0" : "250px";
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

window.onload = showSplashScreen;
    
