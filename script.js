function toggleMenu() {
    var sidebar = document.getElementById("sidebar");
    sidebar.style.width = (sidebar.style.width === "280px") ? "0" : "280px";
}

const studyData = {
    "Std 12": {
        "ગણિત (Maths)": ["1. સંબંધ અને વિધેય", "2. ત્રિકોણમિતિય પ્રતિવિધેયો", "3. શ્રેણિક", "4. નિશ્ચાયક", "5. સાતત્ય અને વિકલનીયતા", "6. વિકલિતના ઉપયોગો", "7. સંકલન", "8. સંકલનનો ઉપયોગ", "9. વિકલ સમીકરણો", "10. સદિશ બીજગણિત", "11. ત્રિપરિમાણીય ભૂમિતિ", "12. સુરેખ આયોજન", "13. સંભાવના"],
        "જીવવિજ્ઞાન (Biology)": ["1. સપુષ્પી વનસ્પતિઓમાં પ્રજનન", "2. માનવ પ્રજનન", "3. પ્રાજનનિક સ્વાસ્થ્ય", "4. આનુવંશિકતા અને ભિન્નતા", "5. આનુવંશિકતાનો આણ્વીય આધાર", "6. ઉદવિકાસ", "7. માનવ સ્વાસ્થ્ય અને રોગો", "8. માનવ કલ્યાણમાં સૂક્ષ્મજીવો", "9. જૈવતકનીકી : સિદ્ધાંતો", "10. જૈવતકનીકી અને પ્રયોજનો", "11. સજીવો અને વસ્તી", "12. નિવસનતંત્રો", "13. જૈવવિવિધતા"],
        "ગુજરાતી": ["1. મોરલી", "2. શરણાઈના સૂર", "3. દમયંતી સ્વયંવર", "4. સત્યાગ્રહાશ્રમ", "5. રામબાણ", "6. ઉછીનું માંગનારાઓ", "7. શ્યામ રંગ સમીપે", "8. અમરનાથની યાત્રાએ"],
        "અંગ્રેજી": ["Unit 1: Can You Install Love?", "Unit 2: Unforgettable Walt Disney", "Unit 3: Manage Your Stress", "Unit 4: The Blind Deaf Fish"],
        "અર્થશાસ્ત્ર (Eco)": ["1. અર્થશાસ્ત્રમાં આલેખ", "2. વૃદ્ધિ અને વિકાસ", "3. નાણું અને ફુગાવો", "4. બેન્કિંગ", "5. ગરીબી", "6. બેરોજગારી"],
        "મનોવિજ્ઞાન": ["1. સંવેદન, ધ્યાન અને પ્રત્યક્ષીકરણ", "2. શીખવાની ક્રિયા", "3. બુદ્ધિ", "4. મનોવલણ અને પૂર્વગ્રહ"]
    },
    "Std 11": {
        "ગણિત (Maths)": ["1. ગણ", "2. સંબંધ અને વિધેય", "3. ત્રિકોણમિતિય વિધેયો", "4. સંકર સંખ્યાઓ", "5. સુરેખ અસમતાઓ", "6. ક્રમચય અને સંચય"],
        "નામાનાં મૂળતત્વો (AC)": ["1. હિસાબી પદ્ધતિ", "2. વ્યવહારોની દ્વિ-અસર", "3. GST", "4. આમનોંધ", "5. રોકડમેળ"],
        "ગુજરાતી": ["1. નાવિક વળતો બોલિયો", "2. પોસ્ટ ઓફિસ", "3. એમ ઉગાર્યો ચંદ્રહાસ", "4. જીભ"],
        "હિન્દી / સંસ્કૃત": ["1. સાખી (કબીર)", "2. પદ (મીરાબાઈ)", "3. નમસ્કાર", "4. સંસ્કૃત સાહિત્ય પરિચય"]
    },
    "Std 10": {
        "ગણિત": ["1. વાસ્તવિક સંખ્યાઓ", "2. બહુપદીઓ", "3. દ્વિચલ સુરેખ સમીકરણ", "4. દ્વિઘાત સમીકરણ", "5. સમાંતર શ્રેણી", "6. ત્રિકોણ", "13. આંકડાશાસ્ત્ર", "14. સંભાવના"],
        "વિજ્ઞાન": ["1. રાસાયણિક પ્રક્રિયાઓ", "2. ઍસિડ, બેઇઝ અને ક્ષાર", "3. ધાતુઓ", "4. કાર્બન સંયોજનો", "5. જૈવિક ક્રિયાઓ", "10. માનવ આંખ"],
        "સામાજિક વિજ્ઞાન": ["1. ભારતનો વારસો", "2. સાંસ્કૃતિક વારસો (પરંપરા)", "3. શિલ્પ અને સ્થાપત્ય", "4. સાહિત્યિક વારસો", "15. આર્થિક વિકાસ"],
        "ગુજરાતી": ["1. વૈષ્ણવજન", "2. રેસનો ઘોડો", "3. શીલવંત સાધુને", "4. ભૂલી ગયા પછી"]
    },
    "Std 9": {
        "ગણિત": ["1. સંખ્યા પદ્ધતિ", "2. બહુપદીઓ", "3. યામ ભૂમિતિ", "4. દ્વિચલ સુરેખ સમીકરણ", "5. ત્રિકોણ", "12. આંકડાશાસ્ત્ર"],
        "વિજ્ઞાન": ["1. આપણી આસપાસમાં દ્રવ્ય", "2. શુદ્ધ દ્રવ્યો", "5. સજીવનો પાયાનો એકમ", "7. ગતિ", "9. ગુરુત્વાકર્ષણ"],
        "સામાજિક વિજ્ઞાન": ["1. બ્રિટિશ સત્તાનો ઉદય", "2. પ્રથમ વિશ્વયુદ્ધ", "8. બંધારણનું ઘડતર", "13. ભારત: સ્થાન અને ભૂસ્તર"],
        "ગુજરાતી": ["1. સાંજ સમે શામળિયો", "2. ચોરી અને પ્રાયશ્ચિત", "3. પછે શામળિયોજી બોલિયા", "4. ગોપાળબાપા"]
    }
};

function openStd(stdName) {
    const mainContent = document.getElementById('main-content');
    let optionsHTML = `<h3>${stdName}</h3><div class="grid">`;
    if (stdName === 'Std 11' || stdName === 'Std 12') {
        optionsHTML += `
            <button class="btn" onclick="showSubjects('${stdName}', 'Science')">🚀 Science</button>
            <button class="btn" onclick="showSubjects('${stdName}', 'Commerce')">💼 Commerce</button>
            <button class="btn" onclick="showSubjects('${stdName}', 'Arts')">🎨 Arts</button>
        `;
    } else {
        showSubjects(stdName, 'General');
        return; 
    }
    optionsHTML += `<button class="btn" onclick="location.reload()" style="background:#eee; color:#333; margin-top:10px;">🔙 Back</button></div>`;
    mainContent.innerHTML = optionsHTML;
}

function showSubjects(std, stream) {
    const mainContent = document.getElementById('main-content');
    let subjects = [];
    if (std === 'Std 9' || std === 'Std 10') {
        subjects = ['ગણિત', 'વિજ્ઞાન', 'અંગ્રેજી', 'ગુજરાતી', 'હિન્દી', 'સંસ્કૃત', 'સામાજિક વિજ્ઞાન'];
    } else if (stream === 'Science') {
        subjects = ['ગણિત (Maths)', 'જીવવિજ્ઞાન (Biology)', 'ભૌતિક વિજ્ઞાન (Physics)', 'રસાયણ વિજ્ઞાન (Chemistry)', 'અંગ્રેજી', 'ગુજરાતી'];
    } else if (stream === 'Commerce') {
        subjects = ['નામાનાં મૂળતત્વો (AC)', 'વાણિજ્ય વ્યવસ્થા (BA)', 'અર્થશાસ્ત્ર (Eco)', 'આંકડાશાસ્ત્ર (Stat)', 'S.P.C.C.', 'ગુજરાતી', 'અંગ્રેજી'];
    } else if (stream === 'Arts') {
        subjects = ['ઇતિહાસ', 'ભૂગોળ', 'મનોવિજ્ઞાન', 'સમાજશાસ્ત્ર', 'અર્થશાસ્ત્ર', 'ગુજરાતી', 'અંગ્રેજી', 'હિન્દી / સંસ્કૃત'];
    }
    let subjectsHTML = `<h3>${std} - વિષયો</h3><div class="grid">`;
    subjects.forEach(sub => {
        subjectsHTML += `<button class="btn" onclick="openChapters('${std}', '${sub}')">${sub}</button>`;
    });
    subjectsHTML += `<button class="btn" onclick="location.reload()" style="background:#eee; color:#333; margin-top:10px;">🏠 Home</button></div>`;
    mainContent.innerHTML = subjectsHTML;
}

function openChapters(std, subject) {
    const mainContent = document.getElementById('main-content');
    // અહીં વિષયના નામ સરખાવતી વખતે વધારાની સ્પેસ દૂર કરી છે
    let chapters = (studyData[std] && studyData[std][subject]) ? studyData[std][subject] : ["આ વિષયના ચેપ્ટર્સ ટૂંક સમયમાં ઉમેરાશે..."];
    let chaptersHTML = `<h3>${std} - ${subject}</h3><div class="grid">`;
    chapters.forEach(chap => {
chaptersHTML += `
  <div style="display:flex; gap:10px; margin-bottom:10px;">
    <button class="btn" style="flex:1; text-align:left;" onclick="openPDF('https://example.com/demo.pdf')">
      📄 ${chap}
    </button>
    <button class="btn" style="width:50px; background:#ffc107;" onclick="saveForLater('${chap}', '${std} - ${subject}: ${chap}')">
      ⭐
    </button>
  </div>`;

    });
    chaptersHTML += `<button class="btn" onclick="location.reload()" style="background:#eee; color:#333; margin-top:10px;">🔙 Back</button></div>`;
    mainContent.innerHTML = chaptersHTML;
}

function openPDF(link) {
    window.open(link, "_blank");
}

// ૧. Service Worker રજીસ્ટ્રેશન (Offline Support માટે)
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('./sw.js')
      .then(() => console.log("Offline mode setup successful!"))
      .catch(err => console.log("SW Error: ", err));
  });
}

// ૨. Save for Later ફંક્શન (બટન ક્લિક પર ચાલશે)
function saveForLater(id, title) {
  let savedItems = JSON.parse(localStorage.getItem('fairbookSaved')) || [];
  const exists = savedItems.find(item => item.id === id);
  
  if (!exists) {
    savedItems.push({ id: id, title: title });
    localStorage.setItem('fairbookSaved', JSON.stringify(savedItems));
    alert("સેવ થઈ ગયું! ✅");
  } else {
    alert("પહેલેથી સેવ કરેલું છે! 😊");
  }
}

// ૩. સેવ કરેલી આઈટમ્સ બતાવવા માટેનું ફંક્શન
function viewSavedItems() {
  let savedItems = JSON.parse(localStorage.getItem('fairbookSaved')) || [];
  let mainContent = document.getElementById('main-content');

  if (savedItems.length === 0) {
    alert("તમે હજુ સુધી કોઈ આઈટમ સેવ કરી નથી!");
    return;
  }

  let html = `<h3>તમારી સેવ કરેલી આઈટમ્સ</h3><div class="grid">`;
  
  savedItems.forEach((item, index) => {
    html += `
      <div style="display:flex; gap:10px; margin-bottom:10px; width:100%;">
        <button class="btn" style="flex:1; text-align:left;" onclick="openPDF('https://example.com/demo.pdf')">
          📄 ${item.title}
        </button>
        <button class="btn" style="width:50px; background:#dc3545; color:white;" onclick="removeSavedItem(${index})">
          🗑️
        </button>
      </div>`;
  });

  html += `<button class="btn" onclick="location.reload()" style="background:#eee; color:#333; margin-top:10px;">🔙 પાછા જાઓ</button></div>`;
  
  mainContent.innerHTML = html;
}

// ૪. લિસ્ટમાંથી આઈટમ ડીલીટ કરવા માટે
function removeSavedItem(index) {
  let savedItems = JSON.parse(localStorage.getItem('fairbookSaved')) || [];
  savedItems.splice(index, 1);
  localStorage.setItem('fairbookSaved', JSON.stringify(savedItems));
  viewSavedItems(); // લિસ્ટ રિફ્રેશ કરવા માટે
}
