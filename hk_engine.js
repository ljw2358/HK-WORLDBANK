// hk_engine.js: HK-WorldBank 통합 엔진 (통합 본)
window.HK_Engine = {
    // 9개 덩어리(모듈)를 관리하는 객체
    assets: { 
        getPiBalance: () => console.log("잔액 조회 모듈 가동") 
    },
    trade: { 
        transfer: () => console.log("송금 모듈 가동") 
    },
    // 나머지 7개 모듈은 여기에 추가하시면 됩니다.

    // 엔진 초기화 및 버튼 매핑
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 가동 완료");
        
        // 버튼 ID와 모듈 기능을 연결하는 매핑 테이블
        const buttonMap = {
            'transferBtn': { module: 'trade', action: 'transfer' },
            'assetsBtn': { module: 'assets', action: 'getPiBalance' }
            // 나머지 버튼 ID들도 여기서 추가하세요
        };
        
        Object.keys(buttonMap).forEach(id => {
            const btn = document.getElementById(id);
            if (btn) {
                btn.onclick = () => {
                    const { module, action } = buttonMap[id];
                    // 엔진 객체 내부의 해당 기능 호출
                    this[module][action]();
                };
            }
        });
    }
};
