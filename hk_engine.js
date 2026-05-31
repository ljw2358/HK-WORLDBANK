window.pay = function() { alert("송금 성공!"); };
// hk_engine.js (최소 복구 버전)
window.HK_WorldBank_activate = function() {
    console.log("HK-WorldBank 엔진이 가동되었습니다.");
    // 여기에 형님의 9개 기능 함수를 순서대로 정의하세요
    window.transfer = () => console.log("송금 실행");
    window.payment = () => console.log("결제 실행");
    // ... 나머지 7개 모듈 추가
};
// hk_engine.js - 9개 덩어리 통합 컨트롤러
window.HK_WorldBank_activate = function() {
    console.log("HK-WorldBank 통합 엔진 가동");

    // 1. 송금 및 결제 기능 (기존 함수들을 여기로 모으세요)
    window.transfer = () => alert("송금 성공!");
    window.payment = () => alert("결제 성공!");

    // 2. 9개 덩어리 자동 연결 (원본 HTML 수정 없이 버튼에 기능 입히기)
    const buttonMap = {
        'transferBtn': window.transfer,
        'paymentBtn': window.payment
        // ... 여기에 형님의 나머지 7개 버튼 ID와 함수를 매핑하세요
    };

    Object.keys(buttonMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.onclick = buttonMap[id];
            console.log(id + " 연결 완료");
        }
    });
};

// 페이지 로드 시 엔진 자동 실행
window.onload = function() {
    window.HK_WorldBank_activate();
};

