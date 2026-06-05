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
// hk_ui.js - 9개 모듈 제어 가교(Bridge)
const HK_UI = {
    // 1. 초기화: 엔진 가동 및 리스너 등록
    init: function() {
        console.log("[UI] 시스템 버튼 매핑 완료");
        HK_Engine.bootAll();
    },

    // 2. 모듈 실행 함수: 버튼 클릭 시 호출
    // 사용법 예: onclick="HK_UI.run('assets', 'getPiBalance')"
    run: function(moduleType, actionName) {
        console.log(`[UI] 명령 실행: ${moduleType} -> ${actionName}`);
        
        // 엔진 모듈이 존재하는지 확인 후 실행
        if (HK_Engine[moduleType] && typeof HK_Engine[moduleType][actionName] === 'function') {
            HK_Engine[moduleType][actionName]();
            alert(`${actionName} 실행됨`); // 간단한 시각적 피드백
        } else {
            console.error("해당 모듈 또는 기능을 찾을 수 없습니다.");
        }
    }
};

// 페이지 로드 시 엔진 자동 가동
window.onload = function() {
    HK_UI.init();
};
// hk_ui.js - 9개 모듈 제어 가교(Bridge)
const HK_UI = {
    // 1. 초기화: 엔진 가동 및 리스너 등록
    init: function() {
        console.log("[UI] 시스템 버튼 매핑 완료");
        HK_Engine.bootAll();
    },

    // 2. 모듈 실행 함수: 버튼 클릭 시 호출
    // 사용법 예: onclick="HK_UI.run('assets', 'getPiBalance')"
    run: function(moduleType, actionName) {
        console.log(`[UI] 명령 실행: ${moduleType} -> ${actionName}`);
        
        // 엔진 모듈이 존재하는지 확인 후 실행
        if (HK_Engine[moduleType] && typeof HK_Engine[moduleType][actionName] === 'function') {
            HK_Engine[moduleType][actionName]();
            alert(`${actionName} 실행됨`); // 간단한 시각적 피드백
        } else {
            console.error("해당 모듈 또는 기능을 찾을 수 없습니다.");
        }
    }
};

// 페이지 로드 시 엔진 자동 가동
window.onload = function() {
    HK_UI.init();
};
(1836번 줄) const script = document.createElement('script');
...
(중략)
...
(1946번 줄) });
