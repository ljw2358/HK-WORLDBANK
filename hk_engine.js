// hk_engine.js: 전역 엔진 객체
window.HK_Engine = {
    // 9개 모듈 정의
    assets: { getPiBalance: () => alert("Pi 잔액 조회 성공") },
    trade: { transfer: () => alert("송금 성공!") },
    // 필요에 따라 여기에 다른 7개 모듈을 추가하세요
    
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 가동 완료");
        
        // 버튼 ID와 모듈 기능을 매핑
        const buttonMap = {
            'transferBtn': { module: 'trade', action: 'transfer' },
            'assetsBtn': { module: 'assets', action: 'getPiBalance' }
            // 여기에 나머지 버튼들도 추가하세요
        };
        
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
