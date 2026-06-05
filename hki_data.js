// hki_data.js - HK-WorldBank 데이터베이스
const HKI_Data = {
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

    // 데이터 업데이트 함수
    update: function(category, key, value) {
        this[category][key] = value;
        console.log(`[DATA] 업데이트 완료: ${key} = ${value}`);
    }
};
// hki_data.js - HK-WorldBank 데이터베이스
const HKI_Data = {
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

    // 데이터 업데이트 함수
    update: function(category, key, value) {
        this[category][key] = value;
        console.log(`[DATA] 업데이트 완료: ${key} = ${value}`);
    }
};
// hki_data.js - HK-WorldBank 통합 데이터베이스
const HKI_Data = {
    // 1단계: 자산 및 상태
    assets: {
        piBalance: 1000.00,
        totalDeposit: 50000.00,
        rewardPoints: 250.5
    },
    // 2단계: 거래 및 교환
    transactions: {
        lastTransfer: "2026-06-05",
        dexLiquidity: 1000000,
        status: "active"
    },
    // 3단계: 생태계
    ecosystem: {
        ubiRate: 0.05,
        stakingAPY: 12.5,
        nodeCount: 9
    }
};
// hki_data.js 에 추가할 부분
const HKI_Data = {
    // ... 기존 데이터들 ...
    
    // 삐니가 읽을 대화 데이터
    faq: [
        ["너 누구야", "저는 형님의 비전을 실현하는 HK 비서 삐니입니다."],
        ["UBI", "6월 30일까지 UBI 30만 원 지급을 위한 시스템이 가동 중입니다."],
        ["이율", "현재 스테이킹 이율은 12.5%입니다."],
        ["안녕", "안녕하십니까 혜공 형님, 오늘도 비전 실현을 위해 대기 중입니다."]
    ]
};
