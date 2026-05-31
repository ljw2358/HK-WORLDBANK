// hk_engine.js - 9개 덩어리 통합 컨트롤러
window.HK_WorldBank_activate = function() {
    console.log("HK-WorldBank 통합 엔진 가동");

    // 9개 기능 정의
    const functions = {
        transfer: () => alert("송금 성공!"),
        payment: () => alert("결제 성공!"),
        deposit: () => alert("입금 성공!"),
        withdraw: () => alert("출금 성공!"),
        loan: () => alert("대출 심사 중..."),
        exchange: () => alert("환전 완료!"),
        invest: () => alert("투자 정보 확인"),
        history: () => alert("거래 내역 조회"),
        setting: () => alert("환경 설정")
    };

    // 버튼 ID와 기능 매핑
    const buttonMap = {
        'transferBtn': functions.transfer,
        'paymentBtn': functions.payment,
        'depositBtn': functions.deposit,
        'withdrawBtn': functions.withdraw,
        'loanBtn': functions.loan,
        'exchangeBtn': functions.exchange,
        'investBtn': functions.invest,
        'historyBtn': functions.history,
        'settingBtn': functions.setting
    };

    // 버튼 ID들을 순회하며 이벤트 연결
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
