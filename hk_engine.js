window.pay = function() { alert("송금 성공!"); };
// hk_engine.js (최소 복구 버전)
window.HK_WorldBank_activate = function() {
    console.log("HK-WorldBank 엔진이 가동되었습니다.");
    // 여기에 형님의 9개 기능 함수를 순서대로 정의하세요
    window.transfer = () => console.log("송금 실행");
    window.payment = () => console.log("결제 실행");
    // ... 나머지 7개 모듈 추가
};
