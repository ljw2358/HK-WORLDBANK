// hk_engine.js - 최강 자동 연결 엔진
window.addEventListener('load', function() {
    console.log("엔진 가동: 버튼 연결을 시작합니다.");

    // 버튼과 함수를 직접 연결 (형님의 원본 함수 이름 그대로 사용)
    const buttonActions = {
        "송금": "sendMoney",
        "결재": "payment",
        "예치": "deposit",
        "스테이킹": "stake",
        "보상": "claimReward",
        "기본소득": "claimUBI",
        "스왑승인": "approveSwap",
        "잔액조회": "getPiBalance",
        "DEX스왑": "executeSwap"
    };

    const allButtons = document.querySelectorAll('button');
    allButtons.forEach(btn => {
        const text = btn.innerText.trim();
        if (buttonActions[text]) {
            const funcName = buttonActions[text];
            // 버튼을 클릭했을 때 해당 함수를 강제 실행
            btn.addEventListener('click', function(e) {
                if (typeof window[funcName] === 'function') {
                    window[funcName]();
                } else {
                    alert(text + " 기능을 찾을 수 없습니다.");
                }
            });
            console.log(text + " 버튼 연결 완료!");
        }
    });
});
