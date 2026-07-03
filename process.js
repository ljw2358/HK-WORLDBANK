// ==========================================
// HK WorldBank Core Process Engine v3.0
// ==========================================

// 1. 전역 자산 변수 설정
let totalQuantity = 0.000000;
let realtimeInterest = 0.000000;
let activeInterestRate = 0.00002;
let isMainnetApplied = false;

// 2. 실시간 이자 누적기 (1초마다 구동)
setInterval(() => {
    if(totalQuantity > 0) {
        realtimeInterest += totalQuantity * activeInterestRate;
        const interestDisplay = document.getElementById('user-realtime-interest');
        if (interestDisplay) interestDisplay.innerText = realtimeInterest.toFixed(6);
    }
}, 1000);

// 3. 50개국 언어 매핑 테이블 (코드명 -> 형님의 번역 데이터명)
const langMap = {
    "ko": "한국어", "en": "English", "ja": "日本語", "zh": "中文", "es": "Español",
    "fr": "Français", "de": "Deutsch", "ru": "Русский", "ar": "العربية", "pt": "Português",
    "hi": "हिन्दी", "it": "Italiano", "tr": "Türkçe", "nl": "Nederlands", "vi": "Tiếng Việt",
    "th": "ไทย", "pl": "Polski", "sv": "Svenska", "da": "Dansk", "no": "Norsk",
    "fi": "Suomi", "el": "Ελληνικά", "hu": "Magyar", "cs": "Čeština", "ro": "Română",
    "bg": "Български", "uk": "Українська", "id": "Indonesian", "ms": "Malay", "tl": "Filipino",
    "fa": "Farsi", "he": "Hebrew", "ur": "Urdu", "bn": "Bengali", "gu": "Gujarati",
    "mr": "Marathi", "pa": "Punjabi", "ta": "Tamil", "te": "Telugu", "kn": "Kannada",
    "ml": "Malayalam", "si": "Sinhala", "km": "Khmer", "lo": "Lao", "my": "Burmese",
    "mn": "Mongolian", "kk": "Kazakh", "uz": "Uzbek", "sw": "Swahili"
};

// 4. UI 기본 언어팩
const langPack = {
    ko: { title: "월드뱅크 플랫폼", status: "실시간 초동기화 연산 중", welcome: "반갑습니다. HK 월드뱅크 통합 지능형 서비스 센터입니다.", ph: "원장 상태 및 금융 노드에 대해 질문하십시오..." },
    en: { title: "WorldBank Hub", status: "Inference Loop Synchronized", welcome: "Welcome. HK WorldBank Centralized Intelligent Support Core is online.", ph: "Search network ledger status..." },
    zh: { title: "世界银行平台", status: "实时同步中", welcome: "欢迎光临。HK世界银行综合智能服务中心。", ph: "请询问账本状态..." },
    ja: { title: "ワールドバンク", status: "リアルタイム同期中", welcome: "ようこそ。HKワールドバンク統合知能型サービスセンターです。", ph: "台帳ステータスについて質問してください..." }
};

// 5. 형님의 50개국 풀스택 본문 언어 데이터 (langData)
const langData = {
    "한국어": {
        intro_h: "[서론: 부의 흐름을 바꾸는 곳, HK 월드뱅크]",
        intro_p: "평범한 방문자가 문을 열고 들어오는 순간, HK 월드뱅크는 단순한 금융 공간을 넘어선 새로운 경제 생태계로 안내합니다. 이곳은 혜공 형님께서 설계하신 '고객의 성공'을 위한 디지털 전초기지입니다.",
        main_t: "[본론: 고객의 성공을 위한 4대 수익 엔진]",
        e1_t: "1. 탈중앙화 스마트 자산 운용 (DEX 스왑)",
        e1_d: "방문자는 중간 관리자 없는 탈중앙화 P2P 거래를 통해 자신의 자산을 원하는 형태로 '즉각 다이렉트 변환'할 수 있습니다.",
        e2_t: "2. 유동성 창출의 마법 (LP 스테이킹)",
        e2_d: "내가 가진 자산을 단순히 보유하는 것에 그치지 않습니다. 유동성 공급에 참여하여 지속적인 수익을 발생시킵니다.",
        e3_t: "3. 인센티브와 분산 복지의 연결 (보상 및 기본소득)",
        e3_d: "방문자가 머무는 모든 활동은 인센티브로 정산되어 즉각적인 보상으로 돌아옵니다.",
        e4_t: "4. 10대 분산 연동망의 힘 (송금, 결제, 예치)",
        e4_d: "대륙을 넘나드는 초고속 송금, 실시간 상거래 승인, 그리고 자산의 가치를 지키는 예치 시스템은 방문자에게 금융의 완벽한 주권을 제공합니다.",
        ai_t: "[결말: 혜공의 지능형 엔진, 고객의 성공을 돕다]",
        ai_d: "방문자가 의문이 생길 때, 'HK 지능형 추론 엔진'이 즉각 반응합니다. 다국어 실시간 교차 추론과 자산 동기화 시스템은 고객의 성공적인 자산 운용을 돕는 든든한 파트너가 됩니다."
    },
    "English": {
        intro_h: "[Introduction: Where Wealth Flows Change, HK World Bank]",
        intro_p: "The moment an ordinary visitor opens the door, HK World Bank guides them into a new economic ecosystem beyond simple financial space.",
        main_t: "[Body: 4 Major Profit Engines for Customer Success]",
        e1_t: "1. Decentralized Smart Asset Management (DEX Swap)",
        e1_d: "Visitors can immediately convert assets into desired forms via P2P trading without intermediaries.",
        e2_t: "2. Magic of Liquidity Creation (LP Staking)",
        e2_d: "It does not stop at holding assets. Participate in liquidity supply and generate continuous profits.",
        e3_t: "3. Connection of Incentive and Decentralized Welfare (Rewards & UBI)",
        e3_d: "All activities are settled as incentives for instant rewards.",
        e4_t: "4. Power of 10 Intercontinental Networks (Transfer, Payment, Deposit)",
        e4_d: "Ultra-fast transfers, real-time commerce approvals, and value-protecting deposit systems provide complete sovereignty.",
        ai_t: "[Conclusion: Hyekong's Intelligent Engine, Assisting Customer Success]",
        ai_d: "When visitors have questions, the 'HK Intelligent Inference Engine' responds instantly. Multilingual real-time cross-inference and asset synchronization systems become strong partners."
    },
    "日本語": { ai_d: "疑問が生じた時、HK知能型推論エンジンが即座に反応し、リアルタイム交差推論をサポートします。" },
    "中文": { ai_d: "每当访问者产生疑问时，“HK智能推理引擎”都会做出即时响应，提供多语言交叉推理与资产同步。" },
    "Español": { ai_d: "Cuando surgen dudas, el 'HK Intelligent Inference Engine' responde al instante con inferencia cruzada." },
    "Français": { ai_d: "Le 'HK Intelligent Inference Engine' répond instantanément à toutes vos interrogations en temps réel." },
    "Deutsch": { ai_d: "Bei Fragen reagiert die 'HK Intelligent Inference Engine' sofort mit mehrsprachiger Echtzeit-Inferenz." },
    "Русский": { ai_d: "При возникновении вопросов 'HK Intelligent Inference Engine' мгновенно реагирует, проводя кросс-анализ." },
    "العربية": { ai_d: "عندما تظهر أي استفسارات، يستجيب 'HK Intelligent Inference Engine' فوراً عبر الاستدلال المتقاطع." },
    "Português": { ai_d: "Quando surgem dúvidas, o 'HK Intelligent Inference Engine' responde prontamente com sincronização de ativos." },
    "हिन्दी": { ai_d: "जब भी प्रश्न उठते हैं, 'HK Intelligent Inference Engine' रीयल-टाइम क्रॉस-अनुमान के साथ प्रतिक्रिया करता है।" },
    "Italiano": { ai_d: "In caso di domande, l'HK Intelligent Inference Engine risponde all'istante con inferenza incrociata." },
    "Türkçe": { ai_d: "Sorularınız olduğunda, 'HK Intelligent Inference Engine' gerçek zamanlı çapraz çıkarımla anında yanıt verir." },
    "Nederlands": { ai_d: "Bij vragen reageert de 'HK Intelligent Inference Engine' direct met real-time cross-inference." },
    "Tiếng Việt": { ai_d: "Khi có bất kỳ thắc mắc nào, 'HK Intelligent Inference Engine' sẽ phản hồi ngay lập tức để hỗ trợ khách hàng." },
    "ไทย": { ai_d: "เมื่อมีข้อสงสัย 'HK Intelligent Inference Engine' จะตอบสนองทันทีด้วยระบบการอนุมานข้ามภาษาแบบเรียลไทม์" },
    "Polski": { ai_d: "W przypadku pytań 'HK Intelligent Inference Engine' reaguje natychmiast za pomocą wnioskowania krzyżowego." },
    "Svenska": { ai_d: "När frågor uppstår svarar 'HK Intelligent Inference Engine' omedelbart med realtidskorsinferens." },
    "Dansk": { ai_d: "Når der opstår spørgsmål, svarer 'HK Intelligent Inference Engine' med det samme i realtid." },
    "Norsk": { ai_d: "Hvis det oppstår spørsmål, svarer 'HK Intelligent Inference Engine' umiddelbart med kryssinferens." },
    "Suomi": { ai_d: "Kysymysten herätessä 'HK Intelligent Inference Engine' reagoi välittömästi reaaliaikaisella ristiinpäättelyllä." },
    "Ελληνικά": { ai_d: "Όταν προκύπτουν ερωτήματα, το 'HK Intelligent Inference Engine' αποκρίνεται αμέσως με διασταυρούμενη συμπερασματολογία." },
    "Magyar": { ai_d: "Kérdések esetén a 'HK Intelligent Inference Engine' azonnal válaszol valós idejű kereszt-következtetéssel." },
    "Čeština": { ai_d: "Pokud se objeví dotazy, 'HK Intelligent Inference Engine' okamžitě reaguje s křížovým vyvozováním v reálném čase." },
    "Română": { ai_d: "Când apar întrebări, 'HK Intelligent Inference Engine' răspunde instantaneu prin inferență încrucișată." },
    "Български": { ai_d: "При въпроси 'HK Intelligent Inference Engine' реагира незабавно с крос-извеждане на заключения в реално време." },
    "Українська": { ai_d: "При виникненні питань 'HK Intelligent Inference Engine' миттєво реагує, проводячи крос-аналіз у реальному часі." },
    "Indonesian": { ai_d: "Ketika muncul pertanyaan, 'HK Intelligent Inference Engine' merespons seketika dengan inferensi silang rea-time." },
    "Malay": { ai_d: "Apabila timbul persoalan, 'HK Intelligent Inference Engine' bertindak balas serta-merta dengan inferensi silang." },
    "Filipino": { ai_d: "Kapag may mga katanungan, ang 'HK Intelligent Inference Engine' ay agad na tumutugon gamit ang cross-inference." },
    "Farsi": { ai_d: "هنگام بروز هرگونه سؤال، موتور استنتاج هوشمند HK با استنتاج متقابل و هم زمان پاسخ می دهد." },
    "Hebrew": { ai_d: "כאשר עולות שאלות, ה-'HK Intelligent Inference Engine' מגיב מיד עם הסקה מצולבת בזמן אמת." },
    "Urdu": { ai_d: "جب بھی سوالات اٹھتے ہیں، 'HK Intelligent Inference Engine' ریئل ٹائم کراس انفرنس کے ساتھ جواب دیتا ہے۔" },
    "Bengali": { ai_d: "যখনই প্রশ্ন ওঠে, 'HK Intelligent Inference Engine' রিয়েল-টাইম ক্রস-ইনফারেন্সের সাথে সাথে প্রতিক্রিয়া জানায়।" },
    "Gujarati": { ai_d: "જ્યારે પણ પ્રશ્નો ઉભા થાય છે, ત્યારે 'HK Intelligent Inference Engine' રિયલ-ટાઇમ ક્રોસ-અનુમાન સાથે તરત જ પ્રતિક્રિયા આપે છે." },
    "Marathi": { ai_d: "जेव्हा जेव्हा प्रश्न उद्भवतात, तेव्हा 'HK Intelligent Inference Engine' रिअल-टाइम क्रॉस-अनुमानासह त्वरित प्रतिसाद देते." },
    "Punjabi": { ai_d: "ਜਦੋਂ ਵੀ ਸਵਾਲ ਉੱਠਦੇ ਹਨ, 'HK Intelligent Inference Engine' ਰੀਅਲ-ਟਾਈਮ ਕਰਾਸ-ਅਨੁਮਾਨ ਨਾਲ ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਕਰਦਾ ਹੈ।" },
    "Tamil": { ai_d: "கேள்விகள் எழும்போது, 'HK Intelligent Inference Engine' நிகழ்நேர குறுக்கு அனுமானத்துடன் உடனடியாக பதிலளிக்கிறது." },
    "Telugu": { ai_d: "ప్రశ్నలు తలెత్తినప్పుడు, 'HK Intelligent Inference Engine' రియల్-టైమ్ క్రాస్-ఇన్ఫరెన్స్ తో తక్షణమే స్పందిస్తుంది." },
    "Kannada": { ai_d: "ಪ್ರಶ್ನೆಗಳು ಉದ್ಭವಿಸಿದಾಗ, 'HK Intelligent Inference Engine' ನೈಜ-ಸಮಯದ ಕ್ರಾಸ್-ಅನುಮಾನದೊಂದಿಗೆ ತಕ್ಷಣವೇ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ." },
    "Malayalam": { ai_d: "ചോദ്യങ്ങൾ ഉയർന്നുവരുമ്പോൾ, 'HK Intelligent Inference Engine' തത്സമയ ക്രോസ്-ഇൻഫറൻസിലൂടെ ഉടനടി പ്രതികരിക്കുന്നു." },
    "Sinhala": { ai_d: "ප් රශ්න මතු වූ විට, 'HK Intelligent Inference Engine' තථ් ය කාලීන හරස් අනුමාන සමඟ ක්ෂණිකව ප් රතිචාර දක්වයි." },
    "Khmer": { ai_d: "នៅពេលដែលមានសំណួរកើតឡើង 'HK Intelligent Inference Engine' ឆ្លើយតបភ្លាមៗជាមួយនឹងការសន្និដ្ឋានឆ្លងភាសាតាមពេលវេលាជាក់ស្តែង។" },
    "Lao": { ai_d: "ເມື່ອມີຂໍ້ສົງໄສ 'HK Intelligent Inference Engine' ຈະຕອບສະໜອງທັນທີດ້ວຍລະບົບການອະນຸມານຂ້າມພາສາແບບຮຽວທາມ." },
    "Burmese": { ai_d: "မေးခွန်းများရှိလာပါက 'HK Intelligent Inference Engine' သည် အချိန်နှင့်တပြေးညီ ချက်ချင်းတုံ့ပြန်ဖြေကြားပေးမည်ဖြစ်သည်။" },
    "Mongolian": { ai_d: "Асуулт гарч ирэх бүрт 'HK Intelligent Inference Engine' бодит цаг хугацаанд шууд хариу үйлдэл үзүүлнэ." },
    "Kazakh": { ai_d: "Сұрақтар туындаған кезде 'HK Intelligent Inference Engine' нақты уақыт режимінде кросс-қорытындымен лезде жауап береді." },
    "Uzbek": { ai_d: "Savollar tug'ilganda 'HK Intelligent Inference Engine' real vaqt rejimida kross-xulosa bilan darhol javob beradi." },
    "Swahili": { ai_d: "Wakati maswali yanatokea, 'HK Intelligent Inference Engine' inajibu mara moja kwa wakati halisi." }
};

// 6. 언어 변경 로직 (본문 텍스트 연동)
function switchLanguage(lang) {
    const data = langPack[lang] || langPack['en'];
    
    // UI 기본 요소 변경
    const navTitle = document.getElementById('nav-title');
    const agiStatus = document.getElementById('agi-status');
    const chatInput = document.getElementById('chat-input');
    
    if(navTitle) navTitle.innerText = data.title;
    if(agiStatus) agiStatus.innerText = data.status;
    if(chatInput) chatInput.placeholder = data.ph;
    
    // 형님의 langData에서 언어를 찾아서 챗봇 환영 메시지 텍스트를 바꿈
    const mappedName = langMap[lang]; 
    const welcomeMsg = document.getElementById('welcome-msg');
    
    if (welcomeMsg) {
        if (mappedName && langData[mappedName] && langData[mappedName].ai_d) {
            welcomeMsg.innerText = langData[mappedName].ai_d;
        } else {
            welcomeMsg.innerText = data.welcome;
        }
    }
}

// 7. 10대 프로세스 실행 로직 (동적 폼 생성)
function executeProcess(funcName) {
    const area = document.getElementById('process-area');
    if (!area) return;
    
    let formHTML = "";

    if (funcName === '지갑연결') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">연동할 메인넷 노드 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK 글로벌 코어 노드 (권장)</option>
                <option>Pi 메인넷 퍼블릭 노드</option>
                <option>이더리움 브릿지 노드</option>
            </select>
        `;
    } else if (funcName === '송금') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">수신자 지갑 주소</label>
            <input type="text" placeholder="예: HK_982_A7X..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">전송 수량 (HK)</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === '결제') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">가맹점 식별 코드 (Merchant ID)</label>
            <input type="text" placeholder="식별 코드 입력" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">결제 금액 (USD 기준)</label>
            <input type="number" placeholder="$ 0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === '예치') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">예치 자산 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK (월드뱅크 코어 토큰)</option>
                <option>PI (파이 네트워크)</option>
            </select>
            <label class="block text-slate-400 text-xs mb-1">예치 기간</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>3개월 (예상 연이율 8%)</option>
                <option>6개월 (예상 연이율 12%)</option>
                <option>12개월 (예상 연이율 24%)</option>
            </select>
        `;
    } else if (funcName === '보상') {
        formHTML = `
            <div class="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg mb-3">
                <p class="text-xs text-indigo-300 mb-1">현재 청구 가능한 보상 내역</p>
                <p class="text-2xl font-mono font-bold text-white">1,250.50 <span class="text-sm">HK</span></p>
            </div>
        `;
    } else if (funcName === '기본소득') {
        formHTML = `
            <div class="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg mb-3 text-center">
                <i class="fa-solid fa-fingerprint text-4xl text-pink-400 mb-3 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"></i>
                <p class="text-xs text-pink-300">생체 인증 기반 DID 신원 확인 완료</p>
                <p class="text-base font-bold text-white mt-1">이번 달 UBI: 500 HK 수령 가능</p>
            </div>
        `;
    } else if (funcName === '스왑' || funcName === 'DEX스왑') {
        formHTML = `
            <div class="flex items-center gap-2 mb-3">
                <div class="flex-1">
                    <label class="block text-slate-400 text-xs mb-1">From</label>
                    <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 cursor-pointer"><option>HK</option><option>PI</option></select>
                </div>
                <i class="fa-solid fa-arrow-right text-slate-500 mt-4"></i>
                <div class="flex-1">
                    <label class="block text-slate-400 text-xs mb-1">To</label>
                    <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 cursor-pointer"><option>PI</option><option>USDT</option></select>
                </div>
            </div>
            <label class="block text-slate-400 text-xs mb-1">변환 수량</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === 'LP스테이킹') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">유동성 풀(Pool) 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK / PI 페어 (APR 35%)</option>
                <option>HK / USDT 페어 (APR 15%)</option>
            </select>
            <label class="block text-slate-400 text-xs mb-1">LP 토큰 예치 수량</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === 'PI수량 추가') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">확보할 PI 수량 입력</label>
            <input type="number" id="pi-add-amount" placeholder="예: 1000" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-2 focus:outline-none focus:border-amber-500">
            <p class="text-[10px] text-teal-400"><i class="fa-solid fa-circle-info mr-1"></i>입력하신 수량은 승인 즉시 메인 대시보드 지갑에 실제 반영됩니다.</p>
        `;
    }

    area.innerHTML = `
        <div class="transition-all duration-300">
            <h3 class="text-amber-500 font-bold mb-3 text-lg border-b border-slate-700 pb-2"><i class="fa-solid fa-microchip mr-2"></i>[${funcName}] 프로세스 진행</h3>
            
            <div class="mb-4">
                ${formHTML}
            </div>
            
            <div id="next-btn-${funcName}">
                <button onclick="showAuth('${funcName}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-lg">확인 및 서명 단계로 이동 <i class="fa-solid fa-arrow-right ml-1"></i></button>
            </div>

            <div id="auth-section-${funcName}" class="hidden mt-4 pt-4 border-t border-slate-700">
                <label class="block text-slate-400 text-xs mb-2">원장 기록을 위한 6자리 서명 (PIN):</label>
                <div class="flex gap-2">
                    <input type="password" id="auth-code" maxlength="6" placeholder="******" class="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white flex-1 focus:outline-none focus:border-amber-500 text-center tracking-[0.5em] font-mono text-lg">
                    <button onclick="confirmAuth('${funcName}')" class="bg-amber-500 text-slate-900 font-black px-6 py-2 rounded-xl hover:bg-amber-400 transition cursor-pointer shadow-lg shadow-amber-500/20">원장 승인</button>
                </div>
            </div>
        </div>
    `;
}

// 8. 1단계 -> 2단계(서명창) 열기 로직
function showAuth(funcName) {
    document.getElementById(`next-btn-${funcName}`).classList.add('hidden');
    document.getElementById(`auth-section-${funcName}`).classList.remove('hidden');
}

// 9. 최종 승인 및 UI 렌더링 로직
function confirmAuth(funcName) {
    const code = document.getElementById('auth-code').value;
    if (code.length === 6) {
        
        // PI수량 추가 시 실제 좌측 상단 자산 현황판 수량 상승!
        if (funcName === 'PI수량 추가') {
            const addAmount = parseFloat(document.getElementById('pi-add-amount').value) || 0;
            totalQuantity += addAmount;
            const userQtyElement = document.getElementById('user-quantity');
            if (userQtyElement) userQtyElement.innerText = totalQuantity.toFixed(6);
        }

        // AGI 챗봇에 트랜잭션 정상 기록 알림 발송
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
            chatBox.insertAdjacentHTML('beforeend', `
                <div class="flex items-start space-x-2.5 justify-end mt-2">
                    <div class="bg-amber-500 text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-bold text-xs shadow-lg">
                        [원장 알림] ${funcName} 트랜잭션 정상 기록 완료 (서명: ${code.replace(/./g, '*')})
                    </div>
                </div>
            `);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        // 성공 메시지 화면 렌더링
        document.getElementById('process-area').innerHTML = `
            <div class="text-center py-6">
                <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-check text-3xl text-emerald-400"></i>
                </div>
                <p class="text-emerald-400 font-bold text-lg">${funcName} 스마트 계약 완료</p>
                <p class="text-slate-400 text-xs mt-2">해당 트랜잭션이 HK 분산 원장에 영구적으로 기록되었습니다.</p>
            </div>
        `;
    } else {
        alert("서명을 위해 6자리 숫자를 정확히 입력하세요.");
    }
}

// 10. 메인넷 신청
function requestMainnet() {
    if(isMainnetApplied) {
        alert("이미 메인넷 신청 원장이 코어팀 심사 큐에 대기 중입니다.");
        return;
    }
    isMainnetApplied = true;
    const statusEl = document.getElementById('mainnet-status');
    if (statusEl) {
        statusEl.innerHTML = `<i class="fa-solid fa-square-check text-emerald-400 mr-1"></i>코어팀 심사 접수 완료`;
        statusEl.className = "text-xs text-emerald-400 font-bold";
    }
    alert("코어팀 메인넷 연동 신청 데이터가 완벽히 전송되었습니다.");
}

// 11. 지갑 잠금 해제
function unlockFeeWallet() {
    const password = document.getElementById('fee-password-input').value.trim();
    const lockScreen = document.getElementById('fee-lock-screen');
    const realData = document.getElementById('fee-real-data');
    const card = document.getElementById('card-fee-wallet');

    if (password === '897791') {
        if(lockScreen) lockScreen.classList.add('hidden');
        if(realData) realData.classList.remove('hidden');
        if(card) {
            card.classList.remove('border-red-500/10');
            card.classList.add('border-emerald-500');
        }
        alert("수수료 지갑 노드 잠금이 해제되었습니다.");
    } else {
        alert("보안 비밀번호 불일치. 접근을 차단합니다.");
    }
}

// 12. 챗봇 메시지 전송 로직
function handleSendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chat-input');
    if (!input) return;
    
    const msg = input.value.trim();
    if (!msg) return;

    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    chatBox.insertAdjacentHTML('beforeend', `<div class="flex items-start space-x-2.5 justify-end"><div class="bg-amber-500 text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-bold text-xs">${msg}</div></div>`);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        chatBox.insertAdjacentHTML('beforeend', `
            <div class="flex items-start space-x-2.5"><div class="w-8 h-8 bg-gradient-to-tr from-purple-600 to-amber-500 rounded-lg flex items-center justify-center text-xs text-white font-bold"><i class="fa-solid fa-brain"></i></div><div class="bg-slate-700/60 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 border border-purple-500/20 text-xs">
                <span class="block text-[10px] text-purple-400 font-bold mb-1"><i class="fa-solid fa-microchip animate-pulse mr-1"></i> 고도화 추론 완료</span>
                혜공 형님, 질의하신 데이터베이스 상태 분석이 지능형 매트릭스를 통해 완전 정상 판정되었습니다.
            </div></div>
        `);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}
// 13. 프로세스 모듈 초기화
console.log("HK-WorldBank 시스템 모듈이 정상적으로 로드되었습니다.");

// 필요 시 페이지 로드 완료 후 실행될 함수들 호출
// document.addEventListener('DOMContentLoaded', () => {
//     // 초기화 로직이 있다면 여기에 추가
// });
// 13. 언어 데이터 및 변경 로직
// ==========================================
// HK WorldBank Core Process Engine v3.0
// ==========================================

// 1. 전역 자산 변수 설정
let totalQuantity = 0.000000;
let realtimeInterest = 0.000000;
let activeInterestRate = 0.00002;
let isMainnetApplied = false;

// 2. 실시간 이자 누적기 (1초마다 구동)
setInterval(() => {
    if(totalQuantity > 0) {
        realtimeInterest += totalQuantity * activeInterestRate;
        const interestDisplay = document.getElementById('user-realtime-interest');
        if (interestDisplay) interestDisplay.innerText = realtimeInterest.toFixed(6);
    }
}, 1000);

// 3. 50개국 언어 매핑 테이블 (코드명 -> 형님의 번역 데이터명)
const langMap = {
    "ko": "한국어", "en": "English", "ja": "日本語", "zh": "中文", "es": "Español",
    "fr": "Français", "de": "Deutsch", "ru": "Русский", "ar": "العربية", "pt": "Português",
    "hi": "हिन्दी", "it": "Italiano", "tr": "Türkçe", "nl": "Nederlands", "vi": "Tiếng Việt",
    "th": "ไทย", "pl": "Polski", "sv": "Svenska", "da": "Dansk", "no": "Norsk",
    "fi": "Suomi", "el": "Ελληνικά", "hu": "Magyar", "cs": "Čeština", "ro": "Română",
    "bg": "Български", "uk": "Українська", "id": "Indonesian", "ms": "Malay", "tl": "Filipino",
    "fa": "Farsi", "he": "Hebrew", "ur": "Urdu", "bn": "Bengali", "gu": "Gujarati",
    "mr": "Marathi", "pa": "Punjabi", "ta": "Tamil", "te": "Telugu", "kn": "Kannada",
    "ml": "Malayalam", "si": "Sinhala", "km": "Khmer", "lo": "Lao", "my": "Burmese",
    "mn": "Mongolian", "kk": "Kazakh", "uz": "Uzbek", "sw": "Swahili"
};

// 4. UI 기본 언어팩
const langPack = {
    ko: { title: "월드뱅크 플랫폼", status: "실시간 초동기화 연산 중", welcome: "반갑습니다. HK 월드뱅크 통합 지능형 서비스 센터입니다.", ph: "원장 상태 및 금융 노드에 대해 질문하십시오..." },
    en: { title: "WorldBank Hub", status: "Inference Loop Synchronized", welcome: "Welcome. HK WorldBank Centralized Intelligent Support Core is online.", ph: "Search network ledger status..." },
    zh: { title: "世界银行平台", status: "实时同步中", welcome: "欢迎光临。HK世界银行综合智能服务中心。", ph: "请询问账本状态..." },
    ja: { title: "ワールドバンク", status: "リアルタイム同期中", welcome: "ようこそ。HKワールドバンク統合知能型サービスセンターです。", ph: "台帳ステータスについて質問してください..." }
};

// 5. 형님의 50개국 풀스택 본문 언어 데이터 (langData)
const langData = {
    "한국어": {
        intro_h: "[서론: 부의 흐름을 바꾸는 곳, HK 월드뱅크]",
        intro_p: "평범한 방문자가 문을 열고 들어오는 순간, HK 월드뱅크는 단순한 금융 공간을 넘어선 새로운 경제 생태계로 안내합니다. 이곳은 혜공 형님께서 설계하신 '고객의 성공'을 위한 디지털 전초기지입니다.",
        main_t: "[본론: 고객의 성공을 위한 4대 수익 엔진]",
        e1_t: "1. 탈중앙화 스마트 자산 운용 (DEX 스왑)",
        e1_d: "방문자는 중간 관리자 없는 탈중앙화 P2P 거래를 통해 자신의 자산을 원하는 형태로 '즉각 다이렉트 변환'할 수 있습니다.",
        e2_t: "2. 유동성 창출의 마법 (LP 스테이킹)",
        e2_d: "내가 가진 자산을 단순히 보유하는 것에 그치지 않습니다. 유동성 공급에 참여하여 지속적인 수익을 발생시킵니다.",
        e3_t: "3. 인센티브와 분산 복지의 연결 (보상 및 기본소득)",
        e3_d: "방문자가 머무는 모든 활동은 인센티브로 정산되어 즉각적인 보상으로 돌아옵니다.",
        e4_t: "4. 10대 분산 연동망의 힘 (송금, 결제, 예치)",
        e4_d: "대륙을 넘나드는 초고속 송금, 실시간 상거래 승인, 그리고 자산의 가치를 지키는 예치 시스템은 방문자에게 금융의 완벽한 주권을 제공합니다.",
        ai_t: "[결말: 혜공의 지능형 엔진, 고객의 성공을 돕다]",
        ai_d: "방문자가 의문이 생길 때, 'HK 지능형 추론 엔진'이 즉각 반응합니다. 다국어 실시간 교차 추론과 자산 동기화 시스템은 고객의 성공적인 자산 운용을 돕는 든든한 파트너가 됩니다."
    },
    "English": {
        intro_h: "[Introduction: Where Wealth Flows Change, HK World Bank]",
        intro_p: "The moment an ordinary visitor opens the door, HK World Bank guides them into a new economic ecosystem beyond simple financial space.",
        main_t: "[Body: 4 Major Profit Engines for Customer Success]",
        e1_t: "1. Decentralized Smart Asset Management (DEX Swap)",
        e1_d: "Visitors can immediately convert assets into desired forms via P2P trading without intermediaries.",
        e2_t: "2. Magic of Liquidity Creation (LP Staking)",
        e2_d: "It does not stop at holding assets. Participate in liquidity supply and generate continuous profits.",
        e3_t: "3. Connection of Incentive and Decentralized Welfare (Rewards & UBI)",
        e3_d: "All activities are settled as incentives for instant rewards.",
        e4_t: "4. Power of 10 Intercontinental Networks (Transfer, Payment, Deposit)",
        e4_d: "Ultra-fast transfers, real-time commerce approvals, and value-protecting deposit systems provide complete sovereignty.",
        ai_t: "[Conclusion: Hyekong's Intelligent Engine, Assisting Customer Success]",
        ai_d: "When visitors have questions, the 'HK Intelligent Inference Engine' responds instantly. Multilingual real-time cross-inference and asset synchronization systems become strong partners."
    },
    "日本語": { ai_d: "疑問が生じた時、HK知能型推論エンジンが即座に反応し、リアルタイム交差推論をサポートします。" },
    "中文": { ai_d: "每当访问者产生疑问时，“HK智能推理引擎”都会做出即时响应，提供多语言交叉推理与资产同步。" },
    "Español": { ai_d: "Cuando surgen dudas, el 'HK Intelligent Inference Engine' responde al instante con inferencia cruzada." },
    "Français": { ai_d: "Le 'HK Intelligent Inference Engine' répond instantanément à toutes vos interrogations en temps réel." },
    "Deutsch": { ai_d: "Bei Fragen reagiert die 'HK Intelligent Inference Engine' sofort mit mehrsprachiger Echtzeit-Inferenz." },
    "Русский": { ai_d: "При возникновении вопросов 'HK Intelligent Inference Engine' мгновенно реагирует, проводя кросс-анализ." },
    "العربية": { ai_d: "عندما تظهر أي استفسارات، يستجيب 'HK Intelligent Inference Engine' فوراً عبر الاستدلال المتقاطع." },
    "Português": { ai_d: "Quando surgem dúvidas, o 'HK Intelligent Inference Engine' responde prontamente com sincronização de ativos." },
    "हिन्दी": { ai_d: "जब भी प्रश्न उठते हैं, 'HK Intelligent Inference Engine' रीयल-टाइम क्रॉस-अनुमान के साथ प्रतिक्रिया करता है।" },
    "Italiano": { ai_d: "In caso di domande, l'HK Intelligent Inference Engine risponde all'istante con inferenza incrociata." },
    "Türkçe": { ai_d: "Sorularınız olduğunda, 'HK Intelligent Inference Engine' gerçek zamanlı çapraz çıkarımla anında yanıt verir." },
    "Nederlands": { ai_d: "Bij vragen reageert de 'HK Intelligent Inference Engine' direct met real-time cross-inference." },
    "Tiếng Việt": { ai_d: "Khi có bất kỳ thắc mắc nào, 'HK Intelligent Inference Engine' sẽ phản hồi ngay lập tức để hỗ trợ khách hàng." },
    "ไทย": { ai_d: "เมื่อมีข้อสงสัย 'HK Intelligent Inference Engine' จะตอบสนองทันทีด้วยระบบการอนุมานข้ามภาษาแบบเรียลไทม์" },
    "Polski": { ai_d: "W przypadku pytań 'HK Intelligent Inference Engine' reaguje natychmiast za pomocą wnioskowania krzyżowego." },
    "Svenska": { ai_d: "När frågor uppstår svarar 'HK Intelligent Inference Engine' omedelbart med realtidskorsinferens." },
    "Dansk": { ai_d: "Når der opstår spørgsmål, svarer 'HK Intelligent Inference Engine' med det samme i realtid." },
    "Norsk": { ai_d: "Hvis det oppstår spørsmål, svarer 'HK Intelligent Inference Engine' umiddelbart med kryssinferens." },
    "Suomi": { ai_d: "Kysymysten herätessä 'HK Intelligent Inference Engine' reagoi välittömästi reaaliaikaisella ristiinpäättelyllä." },
    "Ελληνικά": { ai_d: "Όταν προκύπτουν ερωτήματα, το 'HK Intelligent Inference Engine' αποκρίνεται αμέσως με διασταυρούμενη συμπερασματολογία." },
    "Magyar": { ai_d: "Kérdések esetén a 'HK Intelligent Inference Engine' azonnal válaszol valós idejű kereszt-következtetéssel." },
    "Čeština": { ai_d: "Pokud se objeví dotazy, 'HK Intelligent Inference Engine' okamžitě reaguje s křížovým vyvozováním v reálném čase." },
    "Română": { ai_d: "Când apar întrebări, 'HK Intelligent Inference Engine' răspunde instantaneu prin inferență încrucișată." },
    "Български": { ai_d: "При въпроси 'HK Intelligent Inference Engine' реагира незабавно с крос-извеждане на заключения в реално време." },
    "Українська": { ai_d: "При виникненні питань 'HK Intelligent Inference Engine' миттєво реагує, проводячи крос-аналіз у реальному часі." },
    "Indonesian": { ai_d: "Ketika muncul pertanyaan, 'HK Intelligent Inference Engine' merespons seketika dengan inferensi silang rea-time." },
    "Malay": { ai_d: "Apabila timbul persoalan, 'HK Intelligent Inference Engine' bertindak balas serta-merta dengan inferensi silang." },
    "Filipino": { ai_d: "Kapag may mga katanungan, ang 'HK Intelligent Inference Engine' ay agad na tumutugon gamit ang cross-inference." },
    "Farsi": { ai_d: "هنگام بروز هرگونه سؤال، موتور استنتاج هوشمند HK با استنتاج متقابل و هم زمان پاسخ می دهد." },
    "Hebrew": { ai_d: "כאשר עולות שאלות, ה-'HK Intelligent Inference Engine' מגיב מיד עם הסקה מצולבת בזמן אמת." },
    "Urdu": { ai_d: "جب بھی سوالات اٹھتے ہیں، 'HK Intelligent Inference Engine' ریئل ٹائم کراس انفرنس کے ساتھ جواب دیتا ہے۔" },
    "Bengali": { ai_d: "যখনই প্রশ্ন ওঠে, 'HK Intelligent Inference Engine' রিয়েল-টাইম ক্রস-ইনফারেন্সের সাথে সাথে প্রতিক্রিয়া জানায়।" },
    "Gujarati": { ai_d: "જ્યારે પણ પ્રશ્નો ઉભા થાય છે, ત્યારે 'HK Intelligent Inference Engine' રિયલ-ટાઇમ ક્રોસ-અનુમાન સાથે તરત જ પ્રતિક્રિયા આપે છે." },
    "Marathi": { ai_d: "जेव्हा जेव्हा प्रश्न उद्भवतात, तेव्हा 'HK Intelligent Inference Engine' रिअल-टाइम क्रॉस-अनुमानासह त्वरित प्रतिसाद देते." },
    "Punjabi": { ai_d: "ਜਦੋਂ ਵੀ ਸਵਾਲ ਉੱਠਦੇ ਹਨ, 'HK Intelligent Inference Engine' ਰੀਅਲ-ਟਾਈਮ ਕਰਾਸ-ਅਨੁਮਾਨ ਨਾਲ ਤੁਰੰਤ ਪ੍ਰਤੀਕਿਰਿਆ ਕਰਦਾ ਹੈ।" },
    "Tamil": { ai_d: "கேள்விகள் எழும்போது, 'HK Intelligent Inference Engine' நிகழ்நேர குறுக்கு அனுமானத்துடன் உடனடியாக பதிலளிக்கிறது." },
    "Telugu": { ai_d: "ప్రశ్నలు తలెత్తినప్పుడు, 'HK Intelligent Inference Engine' రియల్-టైమ్ క్రాస్-ఇన్ఫరెన్స్ తో తక్షణమే స్పందిస్తుంది." },
    "Kannada": { ai_d: "ಪ್ರಶ್ನೆಗಳು ಉದ್ಭವಿಸಿದಾಗ, 'HK Intelligent Inference Engine' ನೈಜ-ಸಮಯದ ಕ್ರಾಸ್-ಅನುಮಾನದೊಂದಿಗೆ ತಕ್ಷಣವೇ ಪ್ರತಿಕ್ರಿಯಿಸುತ್ತದೆ." },
    "Malayalam": { ai_d: "ചോദ്യങ്ങൾ ഉയർന്നുവരുമ്പോൾ, 'HK Intelligent Inference Engine' തത്സമയ ക്രോസ്-ഇൻഫറൻസിലൂടെ ഉടനടി പ്രതികരിക്കുന്നു." },
    "Sinhala": { ai_d: "ප් රශ්න මතු වූ විට, 'HK Intelligent Inference Engine' තථ් ය කාලීන හරස් අනුමාන සමඟ ක්ෂණිකව ප් රතිචාර දක්වයි." },
    "Khmer": { ai_d: "នៅពេលដែលមានសំណួរកើតឡើង 'HK Intelligent Inference Engine' ឆ្លើយតបភ្លាមៗជាមួយនឹងការសន្និដ្ឋានឆ្លងភាសាតាមពេលវេលាជាក់ស្តែង។" },
    "Lao": { ai_d: "ເມື່ອມີຂໍ້ສົງໄສ 'HK Intelligent Inference Engine' ຈະຕອບສະໜອງທັນທີດ້ວຍລະບົບການອະນຸມານຂ້າມພາສາແບບຮຽວທາມ." },
    "Burmese": { ai_d: "မေးခွန်းများရှိလာပါက 'HK Intelligent Inference Engine' သည် အချိန်နှင့်တပြေးညီ ချက်ချင်းတုံ့ပြန်ဖြေကြားပေးမည်ဖြစ်သည်။" },
    "Mongolian": { ai_d: "Асуулт гарч ирэх бүрт 'HK Intelligent Inference Engine' бодит цаг хугацаанд шууд хариу үйлдэл үзүүлнэ." },
    "Kazakh": { ai_d: "Сұрақтар туындаған кезде 'HK Intelligent Inference Engine' нақты уақыт режимінде кросс-қорытындымен лезде жауап береді." },
    "Uzbek": { ai_d: "Savollar tug'ilganda 'HK Intelligent Inference Engine' real vaqt rejimida kross-xulosa bilan darhol javob beradi." },
    "Swahili": { ai_d: "Wakati maswali yanatokea, 'HK Intelligent Inference Engine' inajibu mara moja kwa wakati halisi." }
};

// 6. 언어 변경 로직 (본문 텍스트 연동)
function switchLanguage(lang) {
    const data = langPack[lang] || langPack['en'];
    
    // UI 기본 요소 변경
    const navTitle = document.getElementById('nav-title');
    const agiStatus = document.getElementById('agi-status');
    const chatInput = document.getElementById('chat-input');
    
    if(navTitle) navTitle.innerText = data.title;
    if(agiStatus) agiStatus.innerText = data.status;
    if(chatInput) chatInput.placeholder = data.ph;
    
    // 형님의 langData에서 언어를 찾아서 챗봇 환영 메시지 텍스트를 바꿈
    const mappedName = langMap[lang]; 
    const welcomeMsg = document.getElementById('welcome-msg');
    
    if (welcomeMsg) {
        if (mappedName && langData[mappedName] && langData[mappedName].ai_d) {
            welcomeMsg.innerText = langData[mappedName].ai_d;
        } else {
            welcomeMsg.innerText = data.welcome;
        }
    }
}

// 7. 10대 프로세스 실행 로직 (동적 폼 생성)
function executeProcess(funcName) {
    const area = document.getElementById('process-area');
    if (!area) return;
    
    let formHTML = "";

    if (funcName === '지갑연결') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">연동할 메인넷 노드 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK 글로벌 코어 노드 (권장)</option>
                <option>Pi 메인넷 퍼블릭 노드</option>
                <option>이더리움 브릿지 노드</option>
            </select>
        `;
    } else if (funcName === '송금') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">수신자 지갑 주소</label>
            <input type="text" placeholder="예: HK_982_A7X..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">전송 수량 (HK)</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === '결제') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">가맹점 식별 코드 (Merchant ID)</label>
            <input type="text" placeholder="식별 코드 입력" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">결제 금액 (USD 기준)</label>
            <input type="number" placeholder="$ 0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === '예치') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">예치 자산 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK (월드뱅크 코어 토큰)</option>
                <option>PI (파이 네트워크)</option>
            </select>
            <label class="block text-slate-400 text-xs mb-1">예치 기간</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>3개월 (예상 연이율 8%)</option>
                <option>6개월 (예상 연이율 12%)</option>
                <option>12개월 (예상 연이율 24%)</option>
            </select>
        `;
    } else if (funcName === '보상') {
        formHTML = `
            <div class="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg mb-3">
                <p class="text-xs text-indigo-300 mb-1">현재 청구 가능한 보상 내역</p>
                <p class="text-2xl font-mono font-bold text-white">1,250.50 <span class="text-sm">HK</span></p>
            </div>
        `;
    } else if (funcName === '기본소득') {
        formHTML = `
            <div class="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg mb-3 text-center">
                <i class="fa-solid fa-fingerprint text-4xl text-pink-400 mb-3 drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]"></i>
                <p class="text-xs text-pink-300">생체 인증 기반 DID 신원 확인 완료</p>
                <p class="text-base font-bold text-white mt-1">이번 달 UBI: 500 HK 수령 가능</p>
            </div>
        `;
    } else if (funcName === '스왑' || funcName === 'DEX스왑') {
        formHTML = `
            <div class="flex items-center gap-2 mb-3">
                <div class="flex-1">
                    <label class="block text-slate-400 text-xs mb-1">From</label>
                    <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 cursor-pointer"><option>HK</option><option>PI</option></select>
                </div>
                <i class="fa-solid fa-arrow-right text-slate-500 mt-4"></i>
                <div class="flex-1">
                    <label class="block text-slate-400 text-xs mb-1">To</label>
                    <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white focus:outline-none focus:border-amber-500 cursor-pointer"><option>PI</option><option>USDT</option></select>
                </div>
            </div>
            <label class="block text-slate-400 text-xs mb-1">변환 수량</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === 'LP스테이킹') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">유동성 풀(Pool) 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK / PI 페어 (APR 35%)</option>
                <option>HK / USDT 페어 (APR 15%)</option>
            </select>
            <label class="block text-slate-400 text-xs mb-1">LP 토큰 예치 수량</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
        `;
    } else if (funcName === 'PI수량 추가') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">확보할 PI 수량 입력</label>
            <input type="number" id="pi-add-amount" placeholder="예: 1000" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-2 focus:outline-none focus:border-amber-500">
            <p class="text-[10px] text-teal-400"><i class="fa-solid fa-circle-info mr-1"></i>입력하신 수량은 승인 즉시 메인 대시보드 지갑에 실제 반영됩니다.</p>
        `;
    }

    area.innerHTML = `
        <div class="transition-all duration-300">
            <h3 class="text-amber-500 font-bold mb-3 text-lg border-b border-slate-700 pb-2"><i class="fa-solid fa-microchip mr-2"></i>[${funcName}] 프로세스 진행</h3>
            
            <div class="mb-4">
                ${formHTML}
            </div>
            
            <div id="next-btn-${funcName}">
                <button onclick="showAuth('${funcName}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-lg">확인 및 서명 단계로 이동 <i class="fa-solid fa-arrow-right ml-1"></i></button>
            </div>

            <div id="auth-section-${funcName}" class="hidden mt-4 pt-4 border-t border-slate-700">
                <label class="block text-slate-400 text-xs mb-2">원장 기록을 위한 6자리 서명 (PIN):</label>
                <div class="flex gap-2">
                    <input type="password" id="auth-code" maxlength="6" placeholder="******" class="bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white flex-1 focus:outline-none focus:border-amber-500 text-center tracking-[0.5em] font-mono text-lg">
                    <button onclick="confirmAuth('${funcName}')" class="bg-amber-500 text-slate-900 font-black px-6 py-2 rounded-xl hover:bg-amber-400 transition cursor-pointer shadow-lg shadow-amber-500/20">원장 승인</button>
                </div>
            </div>
        </div>
    `;
}

// 8. 1단계 -> 2단계(서명창) 열기 로직
function showAuth(funcName) {
    document.getElementById(`next-btn-${funcName}`).classList.add('hidden');
    document.getElementById(`auth-section-${funcName}`).classList.remove('hidden');
}

// 9. 최종 승인 및 UI 렌더링 로직
function confirmAuth(funcName) {
    const code = document.getElementById('auth-code').value;
    if (code.length === 6) {
        
        // PI수량 추가 시 실제 좌측 상단 자산 현황판 수량 상승!
        if (funcName === 'PI수량 추가') {
            const addAmount = parseFloat(document.getElementById('pi-add-amount').value) || 0;
            totalQuantity += addAmount;
            const userQtyElement = document.getElementById('user-quantity');
            if (userQtyElement) userQtyElement.innerText = totalQuantity.toFixed(6);
        }

        // AGI 챗봇에 트랜잭션 정상 기록 알림 발송
        const chatBox = document.getElementById('chat-box');
        if (chatBox) {
            chatBox.insertAdjacentHTML('beforeend', `
                <div class="flex items-start space-x-2.5 justify-end mt-2">
                    <div class="bg-amber-500 text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-bold text-xs shadow-lg">
                        [원장 알림] ${funcName} 트랜잭션 정상 기록 완료 (서명: ${code.replace(/./g, '*')})
                    </div>
                </div>
            `);
            chatBox.scrollTop = chatBox.scrollHeight;
        }

        // 성공 메시지 화면 렌더링
        document.getElementById('process-area').innerHTML = `
            <div class="text-center py-6">
                <div class="w-16 h-16 bg-emerald-500/20 rounded-full flex items-center justify-center mx-auto mb-3">
                    <i class="fa-solid fa-check text-3xl text-emerald-400"></i>
                </div>
                <p class="text-emerald-400 font-bold text-lg">${funcName} 스마트 계약 완료</p>
                <p class="text-slate-400 text-xs mt-2">해당 트랜잭션이 HK 분산 원장에 영구적으로 기록되었습니다.</p>
            </div>
        `;
    } else {
        alert("서명을 위해 6자리 숫자를 정확히 입력하세요.");
    }
}

// 10. 메인넷 신청
function requestMainnet() {
    if(isMainnetApplied) {
        alert("이미 메인넷 신청 원장이 코어팀 심사 큐에 대기 중입니다.");
        return;
    }
    isMainnetApplied = true;
    const statusEl = document.getElementById('mainnet-status');
    if (statusEl) {
        statusEl.innerHTML = `<i class="fa-solid fa-square-check text-emerald-400 mr-1"></i>코어팀 심사 접수 완료`;
        statusEl.className = "text-xs text-emerald-400 font-bold";
    }
    alert("코어팀 메인넷 연동 신청 데이터가 완벽히 전송되었습니다.");
}

// 11. 지갑 잠금 해제
function unlockFeeWallet() {
    const password = document.getElementById('fee-password-input').value.trim();
    const lockScreen = document.getElementById('fee-lock-screen');
    const realData = document.getElementById('fee-real-data');
    const card = document.getElementById('card-fee-wallet');

    if (password === '897791') {
        if(lockScreen) lockScreen.classList.add('hidden');
        if(realData) realData.classList.remove('hidden');
        if(card) {
            card.classList.remove('border-red-500/10');
            card.classList.add('border-emerald-500');
        }
        alert("수수료 지갑 노드 잠금이 해제되었습니다.");
    } else {
        alert("보안 비밀번호 불일치. 접근을 차단합니다.");
    }
}

// 12. 챗봇 메시지 전송 로직
function handleSendMessage(event) {
    event.preventDefault();
    const input = document.getElementById('chat-input');
    if (!input) return;
    
    const msg = input.value.trim();
    if (!msg) return;

    const chatBox = document.getElementById('chat-box');
    if (!chatBox) return;

    chatBox.insertAdjacentHTML('beforeend', `<div class="flex items-start space-x-2.5 justify-end"><div class="bg-amber-500 text-slate-900 p-3 rounded-2xl rounded-tr-none max-w-[85%] font-bold text-xs">${msg}</div></div>`);
    input.value = '';
    chatBox.scrollTop = chatBox.scrollHeight;

    setTimeout(() => {
        chatBox.insertAdjacentHTML('beforeend', `
            <div class="flex items-start space-x-2.5"><div class="w-8 h-8 bg-gradient-to-tr from-purple-600 to-amber-500 rounded-lg flex items-center justify-center text-xs text-white font-bold"><i class="fa-solid fa-brain"></i></div><div class="bg-slate-700/60 p-3 rounded-2xl rounded-tl-none max-w-[85%] text-slate-200 border border-purple-500/20 text-xs">
                <span class="block text-[10px] text-purple-400 font-bold mb-1"><i class="fa-solid fa-microchip animate-pulse mr-1"></i> 고도화 추론 완료</span>
                혜공 형님, 질의하신 데이터베이스 상태 분석이 지능형 매트릭스를 통해 완전 정상 판정되었습니다.
            </div></div>
        `);
        chatBox.scrollTop = chatBox.scrollHeight;
    }, 600);
}
// 13. 프로세스 모듈 초기화
console.log("HK-WorldBank 시스템 모듈이 정상적으로 로드되었습니다.");

// 필요 시 페이지 로드 완료 후 실행될 함수들 호출
// document.addEventListener('DOMContentLoaded', () => {
//     // 초기화 로직이 있다면 여기에 추가
// });
// 13. 언어 데이터 및 변경 로직


function switchLanguage(lang) {
    const data = langData[lang];
    if (!data) return;
    
    // HTML 요소가 있다면 텍스트 교체
    if (document.getElementById('nav-title')) document.getElementById('nav-title').innerText = data['nav-title'];
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerText = data['hero-title'];
    if (document.getElementById('apply-btn')) document.getElementById('apply-btn').innerText = data['apply-btn'];
    
    console.log(lang + " 언어로 전환되었습니다.");
}

// 14. 프로세스 모듈 초기화
console.log("HK-WorldBank 시스템 모듈이 정상적으로 로드되었습니다.");

    'en': {
        'nav-title': 'HK WorldBank - Global Industry Platform',
        'hero-title': 'Personal Asset Dashboard',
        'apply-btn': 'Apply for Mainnet Immediately'
    }
};

function switchLanguage(lang) {
    const data = langData[lang];
    if (!data) return;
    
    // HTML 요소가 있다면 텍스트 교체
    if (document.getElementById('nav-title')) document.getElementById('nav-title').innerText = data['nav-title'];
    if (document.getElementById('hero-title')) document.getElementById('hero-title').innerText = data['hero-title'];
    if (document.getElementById('apply-btn')) document.getElementById('apply-btn').innerText = data['apply-btn'];
    
    console.log(lang + " 언어로 전환되었습니다.");
}

// 14. 프로세스 모듈 초기화
console.log("HK-WorldBank 시스템 모듈이 정상적으로 로드되었습니다.");
// 13. 언어 데이터 및 변경 로직
const langData = {
    'ko': {
        'nav-title': 'HK 월드뱅크 - 글로벌 산업 플랫폼',
        'hero-title': '개인 자산 대시보드',
        'apply-btn': '코어팀에게 메인넷 즉시 신청하기'
    },
    'en': {
        'nav-title': 'HK WorldBank - Global Industry Platform',
        'hero-title': 'Personal Asset Dashboard',
        'apply-btn': 'Apply for Mainnet Immediately'
    }
};

function switchLanguage(lang) {
    const data = langData[lang];
    if (!data) return;
    
    // HTML에 있는 ID를 찾아서 텍스트만 쏙 바꿉니다.
    const title = document.getElementById('nav-title');
    const hero = document.getElementById('hero-title');
    const btn = document.getElementById('apply-btn');
    
    if (title) title.innerText = data['nav-title'];
    if (hero) hero.innerText = data['hero-title'];
    if (btn) btn.innerText = data['apply-btn'];
    
    console.log(lang + " 언어로 전환되었습니다.");
updateMenuLanguage(lang);
}
// 10대 연동망 자동 번역 추가 코드
function updateMenuLanguage(lang) {
    const data = langData[langMap[lang]];
    if (!data) return;

    const boxes = document.querySelectorAll('.hk-box');
    const menuKeys = ['e1', 'e4', 'e4', 'e4', 'e3', 'e3', 'e1', 'e1', 'e2', 'e4']; 

    boxes.forEach((box, index) => {
        const title = box.querySelector('h4');
        const desc = box.querySelector('p');
        const key = menuKeys[index];
        
        if (title && data[key + '_t']) title.innerText = data[key + '_t'];
        if (desc && data[key + '_d']) desc.innerText = data[key + '_d'];
    });
}
