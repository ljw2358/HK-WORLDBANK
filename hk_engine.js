// hk_engine.js - HK-WorldBank 최종 통합 엔진

window.HK_Engine = {
    // 9개 기능 로드 엔진
    modules: {
        assets: { getPiBalance: () => alert("Pi 관련 조회 성공") },
        trade: { transfer: () => alert("송금 성공") },
        payment: { pay: () => alert("결제 성공") },
        deposit: { add: () => alert("예치 성공") },
        withdraw: { get: () => alert("출금 성공") },
        loan: { apply: () => alert("대출 신청") },
        exchange: { swap: () => alert("환전 성공") },
        invest: { run: () => alert("투자 시작") },
        history: { view: () => alert("기록 조회") }
    },

    // 9개 에코시스템 통합 보상 및 중심 엔진 부팅
  // hk_engine.js - HK-WorldBank 총괄 엔진 연동
window.HK_Engine = {
    // 9개 기능 모듈 완전 정비
    modules: {
        assets: { getPibalance: () => alert("Pi 코인 조회 성공"), transfer: () => alert("송금 성공"), get: () => alert("잔액 조회") },
        trade: { transfer: () => alert("송금 성공") },
        payment: { pay: () => alert("결제 성공") },
        deposit: { add: () => alert("예치 성공") },
        withdraw: { get: () => alert("인출 성공") },
        loan: { apply: () => alert("대출 신청") },
        exchange: { swap: () => alert("스왑 성공") },
        invest: { run: () => alert("투자 시작") },
        history: { view: () => alert("기록 조회") }
    },

    // 10개 어시스턴트 통합 보상 및 정비 부팅
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 부팅 시작...");
        
        const buttonMap = {
            'assetsBtn': { m: 'assets', a: 'getPibalance' },
            'dexSwapBtn': { m: 'exchange', a: 'swap' },
            'ipStakingBtn': { m: 'invest', a: 'run' },
            'transferBtn': { m: 'assets', a: 'transfer' },
            'paymentBtn': { m: 'payment', a: 'pay' },
            'depositBtn': { m: 'deposit', a: 'add' },
            'rewardBtn': { m: 'assets', a: 'get' },
            'incomeBtn': { m: 'assets', a: 'get' },
            'piSyncBtn': { m: 'exchange', a: 'swap' }
        };

        Object.keys(buttonMap).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = () => {
                    const map = buttonMap[id];
                    if (this.modules[map.m] && typeof this.modules[map.m][map.a] === 'function') {
                        this.modules[map.m][map.a]();
                    }
                };
            } else {
                console.warn(`[엔진 경고] 화면에서 ID '${id}' 인 버튼을 찾을 수 없습니다.`);
            }
        });
    },

    // 백그라운드 보상 시스템 가동
    startRewardsSystem: async function() {
        console.log("3번 엔진 가동: 보상 모드 전통");

        const rwdSystem = async () => {
            try {
                const rwdBalance = localStorage.getItem('userBalance');
                let currentBalance = parseFloat(rwdBalance) || 0;
                let newBalance = (currentBalance + 0.01).toFixed(4);

                localStorage.setItem('userBalance', newBalance);

                // 만약 화면에 UI가 있으면 즉시 연동 업데이트
                if (typeof HK_UI !== 'undefined' && HK_UI.updateBalance) {
                    HK_UI.updateBalance(newBalance);
                }

                setTimeout(rwdSystem, 3000);
            } catch (err) {
                console.error("보상 시스템 가동 경고, 3초 후 엔진 재시도...", err);
                setTimeout(rwdSystem, 3000);
            }
        };

        rwdSystem();
    }
};

// 페이지 로드 시 자동 지연 실행 안착
window.addEventListener('DOMContentLoaded', () => {
    if (window.HK_Engine) {
        window.HK_Engine.bootAll();
        window.HK_Engine.startRewardsSystem();
    }
});


    // 백업 엔진 및 백그라운드 보상 시스템 가동
    startRewardSystem: async function() {
        console.log("3번 엔진 가동: 보상 모드 전통");
        
        const rwdSystem = async () => {
            try {
                const rawBalance = localStorage.getItem('userBalance');
                let currentBalance = parseFloat(rawBalance) || 0;
                let newBalance = (currentBalance + 0.01).toFixed(4);
                
                localStorage.setItem('userBalance', newBalance);
                
                // 전역 데이터 UI가 정의되어 있다면 연동 업데이트
                if (typeof HK_UI !== 'undefined' && HK_UI.updateBalance) {
                    HK_UI.updateBalance(newBalance);
                }
                
                // 1초마다 보상 주기적 흐름 가동
                setTimeout(rwdSystem, 1000);
            } catch (err) {
                console.error("보상 시스템 가동 경고, 3초 후 엔진 재시작...", err);
                setTimeout(rwdSystem, 3000);
            }
        };
        
        rwdSystem();
    }
};

// 페이지 로드 완료 시 엔진 자동 실행 안전 장치
window.addEventListener('DOMContentLoaded', () => {
    if (window.HK_Engine) {
        window.HK_Engine.bootAll();
        window.HK_Engine.startRewardSystem();
    }
});
