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
// [통합 엔진] 최적화된 보상 시스템
HK_Engine.startRewardSystem = async () => {
    setInterval(async () => {
        try {
            const currentBalance = parseFloat(localStorage.getItem('userBalance')) || 0;
            const newBalance = (currentBalance + 0.01).toFixed(4);
            await localStorage.setItem('userBalance', newBalance);
            if (typeof HK_UI !== 'undefined') HK_UI.updateBalance(newBalance);
        } catch (err) {
            console.error("동기화 오류:", err);
        }
    }, 1000);
};

// 엔진 부팅 및 초기화
HK_Engine.bootAll = (function(originalBoot) {
    return function() {
        originalBoot.apply(this, arguments);
        HK_Engine.startRewardSystem();
    };
})(HK_Engine.bootAll);
