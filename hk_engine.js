// hk_engine.js - HK-WorldBank 통합 엔진
window.HK_Engine = {
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
            }
        });
    },

    startRewardsSystem: async function() {
        console.log("3번 엔진 가동: 보상 모드");
        const rwdSystem = () => {
            try {
                let currentBalance = parseFloat(localStorage.getItem('userBalance')) || 50000;
                let newBalance = (currentBalance + 0.01).toFixed(4);
                localStorage.setItem('userBalance', newBalance);
                setTimeout(rwdSystem, 3000);
            } catch (err) {
                setTimeout(rwdSystem, 3000);
            }
        };
        rwdSystem();
    }
};

window.addEventListener('DOMContentLoaded', () => {
    if (window.HK_Engine) {
        window.HK_Engine.bootAll();
        window.HK_Engine.startRewardsSystem();
    }
});
