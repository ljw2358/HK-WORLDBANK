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
        
        const buttonMap = {
            'assetsBtn': { m: 'assets', a: 'getPiBalance' },
            'transferBtn': { m: 'trade', a: 'transfer' },
            'paymentBtn': { m: 'payment', a: 'pay' },
            'depositBtn': { m: 'deposit', a: 'add' },
            'withdrawBtn': { m: 'withdraw', a: 'get' },
            'loanBtn': { m: 'loan', a: 'apply' },
            'exchangeBtn': { m: 'exchange', a: 'swap' },
            'investBtn': { m: 'invest', a: 'run' },
            'historyBtn': { m: 'history', a: 'view' }
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
HK_Engine.startRewardSystem = function() {
    console.log("혜공 형님의 9개 에코시스템 보상 엔진 가동 중...");

    // 1번: 로그인 시 즉시 보상 (최초 100 PI)
    if (!localStorage.getItem('userBalance')) {
        localStorage.setItem('userBalance', 100);
        console.log("로그인 보상 100 PI가 지급되었습니다.");
    }

  // [최적화] 비동기 잔액 갱신 모듈
HK_Engine.startRewardSystem = function() {
    // 1초마다 데이터를 직접 갱신하는 대신 
    // 실제 Pi 네트워크 API와 동기화될 준비를 합니다.
    setInterval(async () => {
        try {
            const currentBalance = parseFloat(localStorage.getItem('userBalance')) || 0;
            const newBalance = (currentBalance + 0.01).toFixed(4);
            
            // 데이터 업데이트 비동기 처리
            await localStorage.setItem('userBalance', newBalance);
            
            // UI 호출은 엔진과 분리하여 독립적으로 처리
            if (typeof HK_UI !== 'undefined' && typeof HK_UI.updateBalance === 'function') {
                HK_UI.updateBalance(newBalance);
            }
        } catch (err) {
            console.error("시스템 데이터 동기화 실패:", err);
        }
    }, 1000);
};

};

// 엔진 부팅 시 보상 시스템 자동 실행
HK_Engine.bootAll = (function(originalBoot) {
    return function() {
        originalBoot.apply(this, arguments);
        HK_Engine.startRewardSystem();
    };
})(HK_Engine.bootAll);
// 9개 에코시스템 통합 보상 및 증식 엔진
(function() {
    console.log("혜공 형님의 9개 에코시스템 보상 엔진 초기화 중...");

    // 1번: 로그인 보상 (최초 1회 100 PI 지급)
    if (!localStorage.getItem('userBalance')) {
        localStorage.setItem('userBalance', '100');
        console.log("로그인 보상 100 PI 지급 완료.");
    }

    // 3번: LP 스테이킹 실시간 증식 (1초마다 0.01 PI씩 증가)
    setInterval(() => {
        let currentBalance = parseFloat(localStorage.getItem('userBalance')) || 0;
        let newBalance = (currentBalance + 0.01).toFixed(2);
        localStorage.setItem('userBalance', newBalance.toString());
        
        // 화면에 수동으로라도 표시되도록 콘솔 로그 출력 (UI 연동 전 확인용)
        console.log("현재 스테이킹 자산: " + newBalance + " PI");
        
        // UI 연동 시도
        if (typeof HK_UI !== 'undefined' && typeof HK_UI.updateBalance === 'function') {
            HK_UI.updateBalance(newBalance);
        }
    }, 1000);

    console.log("9개 에코시스템 보상 엔진 가동 완료.");
})();
