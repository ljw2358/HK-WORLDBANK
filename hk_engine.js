// hk_engine.js - 최후의 강제 연결 엔진
(function() {
    const attachEngine = () => {
        console.log("엔진 재연결 시도...");
        
        // 형님의 원본 HTML 버튼들을 강제로 찾아냅니다
        const buttons = document.querySelectorAll('button');
        
        buttons.forEach(btn => {
            const text = btn.innerText.trim();
            // 각 버튼 텍스트에 맞는 원본 함수를 강제로 호출하도록 매핑
            if (text === "송금") btn.onclick = () => sendMoney();
            if (text === "결재") btn.onclick = () => payment();
            if (text === "예치") btn.onclick = () => deposit();
            if (text === "스테이킹") btn.onclick = () => stake();
            if (text === "보상") btn.onclick = () => claimReward();
            if (text === "기본소득") btn.onclick = () => claimUBI();
            if (text === "스왑승인") btn.onclick = () => approveSwap();
            if (text === "잔액조회") btn.onclick = () => getPiBalance();
            if (text === "DEX스왑") btn.onclick = () => executeSwap();
        });
        console.log("버튼 강제 연결 완료!");
    };

    // 로드 후 2초 뒤에 한 번 더 확실하게 연결
    window.addEventListener('load', () => setTimeout(attachEngine, 2000));
})();
