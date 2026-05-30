// hk_engine.js - 비침투적 자동 연결 엔진
window.HK_WorldBank_activate = function() {
    console.log("엔진이 가동되었습니다.");
};

// 버튼 클릭 시 이벤트 강제 연결 함수
function setupButtons() {
    const actions = {
        "송금": sendMoney,
        "결재": payment,
        "예치": deposit,
        "스테이킹": stake,
        "보상": claimReward,
        "기본소득": claimUBI,
        "스왑승인": approveSwap,
        "잔액조회": getPiBalance,
        "DEX스왑": executeSwap
    };

    // 페이지 내의 모든 버튼을 찾아 클릭 이벤트 자동 부여
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => {
        const text = btn.innerText;
        if (actions[text]) {
            btn.onclick = actions[text];
            console.log(text + " 버튼 연결 성공!");
        }
    });
}

// 페이지가 다 로드되면 1초 뒤에 버튼 연결 실행
window.addEventListener('load', () => {
    setTimeout(setupButtons, 1000);
});
