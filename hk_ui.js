// hk_ui.js - HK-WorldBank UI 컨트롤러
const HK_UI = {
    // 엔진 기능 매핑
    init: function() {
        console.log("[UI] 시스템 버튼 매핑 시작");
    },

    // 9개 덩어리 호출 함수
    exec: function(module, action) {
        if (HK_Engine[module] && HK_Engine[module][action]) {
            HK_Engine[module][action]();
        } else {
            console.error("해당 기능을 찾을 수 없습니다.");
        }
    }
};

// 페이지 로드 시 UI 초기화
window.onload = function() {
    HK_UI.init();
    HK_Engine.bootAll(); // 엔진 가동
};

