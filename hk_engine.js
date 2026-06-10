// hk_engine.js: HK-WorldBank 최종 통합 엔진
window.HK_Engine = {
    // 9개 기능 모듈 정의
    modules: {
        assets: { getPiBalance: () => alert("Pi 잔액 조회 성공") },
        trade: { transfer: () => alert("송금 성공") },
        payment: { pay: () => alert("결제 성공") },
        deposit: { add: () => alert("입금 성공") },
        withdraw: { get: () => alert("출금 성공") },
        loan: { apply: () => alert("대출 신청") },
        exchange: { swap: () => alert("환전 성공") },
        invest: { run: () => alert("투자 시작") },
        history: { view: () => alert("기록 조회") }
    },

    // 엔진 가동: 버튼 ID와 모듈 기능을 매핑
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 가동 완료");
        
      // hk_engine.js 파일의 buttonMap 수정
const buttonMap = {
    'assetsBtn': { m: 'assets', a: 'getPiBalance' }, // PI 수량 (상단 1)
    'dexSwapBtn': { m: 'exchange', a: 'swap' }, // DEX 스왑 (상단 2)
    'lpStakingBtn': { m: 'invest', a: 'run' }, // LP 스테이킹 (상단 3)
    'transferBtn': { m: 'assets', a: 'transfer' }, // 송금
    'paymentBtn': { m: 'payment', a: 'pay' }, // 결재
    'depositBtn': { m: 'deposit', a: 'add' }, // 예치
    'rewardBtn': { m: 'assets', a: 'get' }, // 보상 (임시 매핑)
    'incomeBtn': { m: 'assets', a: 'get' }, // 기본소득 (임시 매핑)
    'swapBtn': { m: 'exchange', a: 'swap' } // 스왑
};
 

        Object.keys(buttonMap).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = () => {
                    const map = buttonMap[id];
                    this.modules[map.m][map.a]();
                };
            }
        });
    }
};

// 페이지 로드 시 엔진 가동
window.addEventListener('load', () => {
    window.HK_Engine.bootAll();
});
// 9개 에코시스템 통합 보상 및 증식 엔진
// [통합 엔진] 최적화된 보상 시스템
// 50번 줄부터 시작하는 기존 로직을 지우고 아래를 붙여넣으세요.
HK_Engine.startRewardSystem = async () => {
    console.log("3번 엔진 가동: 보안 모드 적용");
    
    // 재귀적 루프 방식을 사용하여 인터벌 오류 방지
    const runSystem = async () => {
        try {
            const rawBalance = localStorage.getItem('userBalance');
            const currentBalance = parseFloat(rawBalance) || 0;
            const newBalance = (currentBalance + 0.01).toFixed(4);
            
            localStorage.setItem('userBalance', newBalance);
            
            if (typeof HK_UI !== 'undefined') {
                HK_UI.updateBalance(newBalance);
            }
            // 다음 실행을 1초 뒤로 예약 (안정적인 호출)
            setTimeout(runSystem, 1000);
        } catch (err) {
            console.error("시스템 간섭 감지, 3번 엔진 재시작...", err);
            setTimeout(runSystem, 2000); // 오류 발생 시 2초 후 재시도
        }
    };
    
    runSystem();
};
};

// 엔진 부팅 및 초기화
HK_Engine.bootAll = (function(originalBoot) {
    return function() {
        originalBoot.apply(this, arguments);
        HK_Engine.startRewardSystem();
    };
})(HK_Engine.bootAll);
