
// hk_engine.js - HK-WorldBank 통합 엔진 (클릭 이벤트 완벽 연동 버전)
window.HK_Engine = {
    modules: {
        assets: { getPibalance: () => alert("📁 지갑 연동 및 Pi 잔액 조회 성공"), transfer: () => alert("💸 송금 기능 실행") },
        payment: { pay: () => alert("💳 에스크로 결제 실행") },
        deposit: { add: () => alert("🏦 자산 예치(Deposit) 실행") },
        reward: { get: () => alert("💰 보상 볼트(Reward Vault) 확인") },
        income: { get: () => alert("🪙 UBI 기본소득 지급 확인") },
        exchange: { swap: () => alert("💱 DEX 스왑 실행") },
        investment: { run: () => alert("📈 DEX 유동성 스왑 실행") },
        ipStaking: { run: () => alert("🪙 LP 스테이킹 실행") },
        piSync: { sync: () => alert("🔄 Pi 수령 및 월장 동기화 실행") }
    },

    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 부팅 시작...");
        
        const buttonMap = {
            'assetsBtn': { m: 'assets', a: 'getPibalance' },
            'transferBtn': { m: 'assets', a: 'transfer' },
            'paymentBtn': { m: 'payment', a: 'pay' },
            'depositBtn': { m: 'deposit', a: 'add' },
            'rewardBtn': { m: 'reward', a: 'get' },
            'incomeBtn': { m: 'income', a: 'get' },
            'dexSwapBtn': { m: 'exchange', a: 'swap' },
            'investmentBtn': { m: 'investment', a: 'run' },
            'ipStakingBtn': { m: 'ipStaking', a: 'run' },
            'piSyncBtn': { m: 'piSync', a: 'sync' }
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
        console.log("HK-WorldBank Event Listeners Bound.");
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
