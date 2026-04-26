const data = {
    "Std 9": {
        "ગણિત": ["1. સંખ્યા પદ્ધતિ", "2. બહુપદીઓ", "3. યામ ભૂમિતિ", "4. દ્વિચલ રેખીય સમીકરણો", "5. યુક્લિડની ભૂમિતિનો પરિચય", "6. રેખાઓ અને ખૂણાઓ", "7. ત્રિકોણ", "8. ચતુષ્કોણ", "9. વર્તુળ", "10. હેરોનનું સૂત્ર", "11. પૃષ્ઠફળ અને ઘનફળ", "12. આંકડાશાસ્ત્ર"],
        "વિજ્ઞાન": ["1. આપણી આસપાસમાં દ્રવ્ય", "2. શું આપણી આસપાસના દ્રવ્યો શુદ્ધ છે?", "3. પરમાણુઓ અને અણુઓ", "4. પરમાણુનું બંધારણ", "5. સજીવનો પાયાનો એકમ", "6. પેશીઓ", "7. ગતિ", "8. બળ તથા ગતિના નિયમો", "9. ગુરુત્વાકર્ષણ", "10. કાર્ય અને ઉર્જા", "11. ધ્વનિ", "12. અન્ન સ્ત્રોતોમાં સુધારણા"],
        "સામાજિક વિજ્ઞાન": ["1. ભારતમાં બ્રિટિશ સત્તાનો ઉદય", "2. પ્રથમ વિશ્વયુદ્ધ અને રશિયન ક્રાંતિ"],
        "ગુજરાતી": ["1. સાંજ સમે શામળિયો", "2. ચોરી અને પ્રાયશ્ચિત"]
    },
    "Std 10": {
        "ગણિત": ["1. વાસ્તવિક સંખ્યાઓ", "2. બહુપદીઓ", "3. દ્વિચલ રેખિય સમીકરણ યુગ્મ", "4. દ્વિઘાત સમીકરણ", "5. સમાંતર શ્રેણી", "6. ત્રિકોણ", "7. યામ ભૂમિતિ", "8. ત્રિકોણમિતિનો પરિચય", "14. સંભાવના"],
        "વિજ્ઞાન": ["1. રાસાયણિક પ્રક્રિયાઓ અને સમીકરણો", "2. એસિડ, બેઇઝ અને ક્ષાર", "5. જૈવિક ક્રિયાઓ", "13. આપણું પર્યાવરણ"]
    },
    "Streams": {
        "Science": {
            "ગણિત": ["1. સંબંધ અને વિધેય", "2. ત્રિકોણમિતિય પ્રતિવિધેયો", "3. શ્રેણિક", "4. નિશ્ચાયક", "7. સંકલન", "13. સંભાવના"],
            "જીવવિજ્ઞાન": ["1. સપુષ્પી વનસ્પતિઓમાં પ્રજનન", "2. માનવ પ્રજનન"],
            "ભૌતિક વિજ્ઞાન": ["1. વિદ્યુતભાર અને ક્ષેત્રો", "2. સ્થિર વિદ્યુતસ્થિતિમાન"],
            "રસાયણ વિજ્ઞાન": ["1. દ્રાવણો", "2. વિદ્યુતરસાયણ"]
        },
        "Commerce": {
            "નામું (Accounts)": ["1. ભાગીદારી વિષય પ્રવેશ", "2. વાર્ષિક હિસાબો"],
            "આંકડાશાસ્ત્ર (Stats)": ["1. સૂચક આંક", "2. સહસંબંધ"]
        },
        "Arts": {
            "મનોવિજ્ઞાન": ["1. સંવેદન, ધ્યાન અને પ્રત્યક્ષીકરણ"],
            "ભૂગોળ": ["1. માનવ ભૂગોળ પરિચય"]
        }
    }
};

const contentArea = document.getElementById('app-content');

function loadHome() {
    contentArea.innerHTML = `
        <button class="btn-card grad-1" onclick="loadSubjects('Std 9')">ધોરણ 9</button>
        <button class="btn-card grad-2" onclick="loadSubjects('Std 10')">ધોરણ 10</button>
        <button class="btn-card grad-3" onclick="loadStreamSelection('Std 11')">ધોરણ 11</button>
        <button class="btn-card grad-4" onclick="loadStreamSelection('Std 12')">ધોરણ 12</button>
    `;
}

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
    sb.style.width = sb.style.width === "250px" ? "0" : "250px";
}

function toggleDarkMode() {
    document.body.classList.toggle('dark-mode');
    toggleNav();
}

loadHome();
