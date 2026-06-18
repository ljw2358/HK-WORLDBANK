// hk_data.js
const HK_Data = {
    assets: { piBalance: 1000.00, totalDeposit: 50000.00, rewardPoints: 250.5 },
    transactions: { lastTransfer: "2026-06-05", dexLiquidity: 1000000, status: "active" },
    ecosystem: { ubiRate: 0.05, stakingAPY: 12.5, nodeCount: 9 },
    faq: [
        ["누구야", "저는 HK 비서 피니입니다."],
        ["UBI", "6월 30일 전 UBI 개시 전 기금을 전 시스템에 가동 중입니다."],
        ["이율", "현재 스테이킹 이율은 12.5%입니다."]
    ]
};
window.HK_Data = HK_Data;
console.log("📊 [성공] hk_data.js 데이터베이스 로드 완료!");
