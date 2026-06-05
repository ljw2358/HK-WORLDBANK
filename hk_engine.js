// hk_engine.js: HK-WorldBank 통합 엔진
window.HK_Engine = {
    // 9개 기능 모듈을 담을 곳
    assets: { getPiBalance: () => console.log("잔액 조회 모듈") },
    trade: { transfer: () => console.log("송금 모듈") },
    // 3~9번 모듈을 여기에 계속 추가하세요

    // 엔진 초기화 및 버튼 매핑
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 가동 완료");
        
        // 버튼 ID와 연결할 모듈 정보를 매핑
        const buttonMap = {
            'transferBtn': { module: 'trade', action: 'transfer' },
            'assetsBtn': { module: 'assets', action: 'getPiBalance' }
        };
        
        // HTML에 버튼이 존재할 때만 클릭 이벤트 연결
        Object.keys(buttonMap).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = () => {
                    const { module, action } = buttonMap[id];
                    this[module][action]();
                };
            }
        });
    }
};
            }
        });
    }
};
// hk_engine.js: HK-WorldBank 통합 엔진
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
