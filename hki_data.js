// hk_data.js - HK-WorldBank 데이터베이스 및 관리 엔진

const HK_Data = {
    // 1단계: 자산 정보
    assets: {
        piBalance: 1000.00,
        totalDeposit: 50000.00,
        rewardPoints: 250.5
    },

    // 2단계: 거래 내역 및 설정
    transactions: {
        lastTransfer: "2026-06-05",
        dexLiquidity: 1000000,
        status: "active"
    },

    // 3단계: 생태계 수치
    ecosystem: {
        ubiRate: 0.05,
        stakingAPY: 12.5,
        nodeCount: 9
    },

    // FAQ 데이터 (챗봇용)
    faq: [
        ["누구야", "저는 금융의 비전을 실현하는 HK 비서 피니입니다."],
        ["UBI", "6월 30일 전 UBI 개시 전 기금을 전 시스템에 가동 중입니다."],
        ["이율", "현재 스테이킹 이율은 12.5%입니다."],
        ["리뷰", "안전한지 현황 안내, 오늘도 비전 달성을 위해 달립니다."]
    ],

    // 데이터 업데이트 함수
    update: function(category, key, value) {
        if (this[category]) {
            this[category][key] = value;
            console.log(`[DATA] 업데이트 완료: ${key} = ${value}`);
        } else {
            console.error(`[DATA] 존재하지 않는 카테고리입니다: ${category}`);
        }
    }
};

// 브라우저 전역 변수로 등록 (index.html에서 바로 쓸 수 있도록 조치)
window.HK_Data = HK_Data;

