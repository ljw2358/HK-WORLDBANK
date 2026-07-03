// 10대 프로세스 실행 로직
function executeProcess(funcName) {
    const area = document.getElementById('process-area');
    let formHTML = "";

    // [기능별 폼 렌더링 생략 - 동일]
    // ... (상기 제공해주신 로직을 그대로 붙여넣으세요) ...

    area.innerHTML = `
        <div class="transition-all duration-300">
            <h3 class="text-amber-500 font-bold mb-3 text-lg border-b border-slate-700 pb-2"><i class="fa-solid fa-microchip mr-2"></i>[${funcName}] 프로세스 진행</h3>
            <div class="mb-4">${formHTML}</div>
            <div id="next-btn-${funcName}"><button onclick="showAuth('${funcName}')" class="w-full bg-slate-700 hover:bg-slate-600 text-white font-bold py-3 rounded-xl transition cursor-pointer shadow-lg">확인 및 서명 단계로 이동 <i class="fa-solid fa-arrow-right ml-1"></i></button></div>
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

// 상태 및 이벤트 리스너 통합 관리
let totalQuantity = 0.000000;
let isMainnetApplied = false;

// [나머지 로직 (confirmAuth, requestMainnet, unlockFeeWallet, switchLanguage 등 모두 여기에 이동)]
// ... (나머지 전체 로직을 이 파일에 순서대로 기입) ...
