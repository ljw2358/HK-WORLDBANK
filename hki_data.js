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
