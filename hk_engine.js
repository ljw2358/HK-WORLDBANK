// hk_engine.js - 최후의 직접 호출 엔진
console.log("엔진 로드 완료");

// 형님 원본에 있는 함수를 직접 호출하도록 강제
function sendMoney() { pay(); } 
function payment() { payment(); } 
function deposit() { deposit(); }
function stake() { stake(); }
function claimReward() { claimReward(); }
function claimUBI() { claimUBI(); }
function approveSwap() { approveSwap(); }
function getPiBalance() { getPiBalance(); }
function executeSwap() { executeSwap(); }
