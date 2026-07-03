// 10대 프로세스 실행 로직
function executeProcess(funcName) {
    const area = document.getElementById('process-area');
    let formHTML = "";

    if (funcName === '지갑연결') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">연동할 메인넷 노드 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK 글로벌 코어 노드 (권장)</option>
                <option>Pi 메인넷 퍼블릭 노드</option>
                <option>이더리움 브릿지 노드</option>
            </select>`;
    } else if (funcName === '송금') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">수신자 지갑 주소</label>
            <input type="text" placeholder="예: HK_982_A7X..." class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">전송 수량 (HK)</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">`;
    } else if (funcName === '결제') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">가맹점 식별 코드</label>
            <input type="text" placeholder="코드 입력" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">
            <label class="block text-slate-400 text-xs mb-1">결제 금액 (USD)</label>
            <input type="number" placeholder="$ 0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">`;
    } else if (funcName === '예치') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">예치 자산</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>HK (월드뱅크 코어 토큰)</option>
                <option>PI (파이 네트워크)</option>
            </select>
            <label class="block text-slate-400 text-xs mb-1">예치 기간</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500 cursor-pointer">
                <option>3개월 (예상 연이율 8%)</option>
                <option>6개월 (예상 연이율 12%)</option>
                <option>12개월 (예상 연이율 24%)</option>
            </select>`;
    } else if (funcName === '보상') {
        formHTML = `<div class="p-4 bg-indigo-500/10 border border-indigo-500/30 rounded-lg mb-3">
                        <p class="text-xs text-indigo-300">현재 청구 가능한 보상</p>
                        <p class="text-2xl font-mono font-bold text-white">1,250.50 HK</p>
                    </div>`;
    } else if (funcName === '기본소득') {
        formHTML = `<div class="p-4 bg-pink-500/10 border border-pink-500/30 rounded-lg mb-3 text-center">
                        <p class="text-xs text-pink-300">생체 인증 완료</p>
                        <p class="text-base font-bold text-white mt-1">이번 달 UBI: 500 HK 수령 가능</p>
                    </div>`;
    } else if (funcName === '스왑' || funcName === 'DEX스왑') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">변환 수량</label>
            <input type="number" placeholder="0.00" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3 focus:outline-none focus:border-amber-500">`;
    } else if (funcName === 'LP스테이킹') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">유동성 풀 선택</label>
            <select class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-3"><option>HK / PI 페어 (APR 35%)</option></select>`;
    } else if (funcName === 'PI수량 추가') {
        formHTML = `
            <label class="block text-slate-400 text-xs mb-1">확보할 PI 수량</label>
            <input type="number" id="pi-add-amount" placeholder="예: 1000" class="w-full bg-slate-950 border border-slate-700 rounded-lg px-3 py-2 text-white mb-2">`;
    }

    area.innerHTML = `
        <div class="transition-all duration-300">
            <h3 class="text-amber-500 font-bold mb-3 text-lg border-b border-slate-700 pb-2">[${funcName}] 프로세스 진행</h3>
            <div class="mb-4">${formHTML}</div>
            <div id="next-btn-${funcName}"><button onclick="showAuth('${funcName}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition">확인 및 서명 단계로 이동</button></div>
            <div id="auth-section-${funcName}" class="hidden mt-4 pt-4 border-t border-slate-700">
                <input type="password" id="auth-code" maxlength="6" placeholder="PIN 6자리" class="w-full bg-slate-950 border border-slate-700 rounded-xl px-3 py-2 text-white text-center mb-2">
                <button onclick="confirmAuth('${funcName}')" class="w-full bg-amber-500 text-slate-900 font-black py-2 rounded-xl">원장 승인</button>
            </div>
        </div>`;
}

function showAuth(funcName) {
    document.getElementById(`next-btn-${funcName}`).classList.add('hidden');
    document.getElementById(`auth-section-${funcName}`).classList.remove('hidden');
}

function confirmAuth(funcName) {
    const code = document.getElementById('auth-code').value;
    if (code.length === 6) {
        if (funcName === 'PI수량 추가') {
            const addAmount = parseFloat(document.getElementById('pi-add-amount').value) || 0;
            totalQuantity += addAmount;
            document.getElementById('user-quantity').innerText = totalQuantity.toFixed(6);
        }
        alert("원장 승인 완료: " + funcName);
    } else {
        alert("6자리 PIN을 입력하세요.");
    }
}

let totalQuantity = 0.000000;
let realtimeInterest = 0.000000;

setInterval(() => {
    realtimeInterest += totalQuantity * 0.00002;
    const el = document.getElementById('user-realtime-interest');
    if(el) el.innerText = realtimeInterest.toFixed(6);
}, 1000);

function requestMainnet() { alert("메인넷 신청이 코어팀에 접수되었습니다."); }
function unlockFeeWallet() { alert("수수료 지갑 잠금 해제 시스템 실행"); }
