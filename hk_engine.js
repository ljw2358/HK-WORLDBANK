// hk_engine.js - 최후의 엔진: 원본 함수 직접 호출 모드
window.HK_WorldBank_activate = function() {
    console.log("엔진 알맹이 가동 시작");
};

// 버튼 클릭 시 원본 코드의 함수를 직접 실행하도록 강제 매핑
window.sendMoney = function() { typeof executeTransaction === 'function' ? executeTransaction("pay", "송금") : alert("원본 함수 없음"); };
window.payment = function() { typeof executeTransaction === 'function' ? executeTransaction("payment", "결재") : alert("원본 함수 없음"); };
window.deposit = function() { typeof executeTransaction === 'function' ? executeTransaction("deposit", "예치") : alert("원본 함수 없음"); };
window.stake = function() { typeof executeTransaction === 'function' ? executeTransaction("stake", "스테이킹") : alert("원본 함수 없음"); };
window.claimReward = function() { typeof executeTransaction === 'function' ? executeTransaction("claimReward", "보상") : alert("원본 함수 없음"); };
window.claimUBI = function() { typeof executeTransaction === 'function' ? executeTransaction("claimUBI", "기본소득") : alert("원본 함수 없음"); };
window.approveSwap = function() { typeof executeTransaction === 'function' ? executeTransaction("approveSwap", "스왑승인") : alert("원본 함수 없음"); };
window.getPiBalance = function() { typeof getPiBalance === 'function' ? getPiBalance() : alert("잔액조회 함수 없음"); };
window.executeSwap = function() { typeof executeTransaction === 'function' ? executeTransaction("executeSwap", "DEX스왑") : alert("원본 함수 없음"); };
