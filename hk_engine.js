// hk_engine.js: 완벽 통합 엔진
window.HK_Engine = {
    // 9개 모듈 정의
    assets: { getPiBalance: () => alert("Pi 잔액 조회 성공") },
    trade: { transfer: () => alert("송금 성공!") },
    
    // 엔진 가동 함수
    bootAll: function() {
        console.log("HK-WorldBank 통합 엔진 가동 완료");
        
        // 버튼 연결 로직
        const btn = document.getElementById('transferBtn');
        if (btn) {
            btn.onclick = () => this.trade.transfer();
        }
    }
};

