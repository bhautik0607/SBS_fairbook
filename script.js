const data = {
    "Std 9": {
        "ગણિત": ["1. સંખ્યા પદ્ધતિ", "2. બહુપદીઓ"],
        "વિજ્ઞાન": ["1. આપણી આસપાસમાં દ્રવ્ય"]
    },
    "Std 10": {
        "ગણિત": ["1. વાસ્તવિક સંખ્યાઓ", "2. બહુપદીઓ"],
        "વિજ્ઞાન": ["1. રાસાયણિક પ્રક્રિયાઓ"]
    },
    "Streams": {
        "Science": {
            "ગણિત": ["1. સંબંધ અને વિધેય", "2. ત્રિકોણમિતિય પ્રતિવિધેયો", "3. શ્રેણિક"],
            "જીવવિજ્ઞાન": ["1. સપુષ્પી વનસ્પતિઓમાં પ્રજનન", "2. માનવ પ્રજનન"]
        },
        "Commerce": {
            "નામું (Accounts)": ["1. ભાગીદારી વિષય પ્રવેશ"],
            "આંકડાશાસ્ત્ર (Stats)": ["1. સૂચક આંક"]
        },
        "Arts": {
            "મનોવિજ્ઞાન": ["1. સંવેદન, ધ્યાન અને પ્રત્યક્ષીકરણ"]
        }
    }
};

const contentArea = document.getElementById('app-content');

function loadHome() {
    if (!contentArea) return; // જો એરિયા ના મળે તો અટકી જાવ
    contentArea.innerHTML = `
        <button class="btn-card grad-1" onclick="loadSubjects('Std 9')">ધોરણ 9</button>
        <button class="btn-card grad-2" onclick="loadSubjects('Std 10')">ધોરણ 10</button>
        <button class="btn-card grad-3" onclick="loadStreamSelection('Std 11')">ધોરણ 11</button>
        <button class="btn-card grad-4" onclick="loadStreamSelection('Std 12')">ધોરણ 12</button>
    `;
}

// બાકીના બધા ફંક્શન (loadStreamSelection, loadSubjects વગેરે જે મેં પહેલા આપ્યા હતા તે જ)
function loadStreamSelection(stdName) {
    contentArea.innerHTML = `
        <button class="back-btn" onclick="loadHome()">← પાછા જાઓ</button>
        <h2 style="text-align:center">${stdName}</h2>
        <button class="btn-card grad-1" onclick="loadSubjects('Science', true, '${stdName}')">વિજ્ઞાન પ્રવાહ (Science)</button>
        <button class="btn-card grad-5" onclick="loadSubjects('Commerce', true, '${stdName}')">સામાન્ય પ્રવાહ (Commerce)</button>
        <button class="btn-card grad-2" onclick="loadSubjects('Arts', true, '${stdName}')">સામાન્ય પ્રવાહ (Arts)</button>
    `;
}

function loadSubjects(key, isSenior = false, stdName = "") {
    let list = isSenior ? data["Streams"][key] : data[key];
    contentArea.innerHTML = `<button class="back-btn" onclick="${isSenior ? `loadStreamSelection('${stdName}')` : 'loadHome()'}">← પાછા જાઓ</button>
                             <h3 style="text-align:center">${isSenior ? stdName + " - " + key : key}</h3>`;
    Object.keys(list).forEach((sub, index) => {
        let btn = document.createElement('button');
        btn.className = `btn-card grad-${(index % 5) + 1}`;
        btn.innerText = sub;
        btn.onclick = () => loadChapters(list[sub], sub, key, isSenior, stdName);
        contentArea.appendChild(btn);
    });
}

function loadChapters(chapters, subName, backKey, isSenior, stdName) {
    contentArea.innerHTML = `<button class="back-btn" onclick="loadSubjects('${backKey}', ${isSenior}, '${stdName}')">← પાછા જાઓ</button>
                             <h3 style="text-align:center">${subName}</h3>`;
    chapters.forEach((chap, index) => {
        let btn = document.createElement('button');
        btn.className = `btn-card grad-${(index % 4) + 1}`;
        btn.innerText = chap;
        btn.onclick = () => loadPDFOptions(chap, subName, backKey, isSenior, stdName);
        contentArea.appendChild(btn);
    });
}

function loadPDFOptions(chapName, subName, backKey, isSenior, stdName) {
    contentArea.innerHTML = `<button class="back-btn" onclick="loadChapters(null, '${subName}', '${backKey}', ${isSenior}, '${stdName}')">← પાછા જાઓ</button>
                             <h4 style="text-align:center">${chapName}</h4>`;
    let options = (isSenior && backKey === 'Science') 
        ? ["પાઠ્ય-પુસ્તક", "ક્લાસ નોટ", "સ્વાધ્યાય", "સેક્શન A", "સેક્શન B", "PYQ'S"]
        : ["પાઠ્ય-પુસ્તક", "ક્લાસ નોટ", "સ્વાધ્યાય", "સેક્શન A", "સેક્શન B"];
    options.forEach((opt, index) => {
        let btn = document.createElement('button');
        btn.className = `btn-card grad-${(index % 5) + 1}`;
        btn.innerText = opt;
        btn.onclick = () => alert(opt + " ટૂંક સમયમાં અપલોડ થશે!");
        contentArea.appendChild(btn);
    });
}

function toggleNav() {
    let sb = document.getElementById("sidebar");
    if(sb) sb.style.width = sb.style.width === "250px" ? "0" : "250px";
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
}

// આ લાઈન સૌથી મહત્વની છે, જે એપ ચાલુ કરશે
window.onload = loadHome;
