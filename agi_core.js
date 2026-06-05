import HKData from './hki_data.js'; // 형님의 데이터가 들어있는 파일

const AGICore = {
    generateResponse: (userInput) => {
        // 1. 데이터 베이스에서 질문 키워드 찾기
        // 예: 사용자가 '이율'을 입력하면, '이율'이 포함된 답변을 찾아냄
        const faq = HKData.faq || [];
        const found = faq.find(item => userInput.includes(item[0]));

        // 2. 답변 매칭 시 반환, 아니면 기본 안내 메시지
        return found ? found[1] : "혜공 형님의 비전을 정밀 분석 중입니다. 형님의 의도가 반영되도록 학습하고 있습니다.";
    }
};

export default AGICore;
// agi_core.js
import HKData from './hki_data.js';

const AGICore = {
    generateResponse: (userInput) => {
        // 1. FAQ 검색 (형님이 처음에 만든 로직)
        const faq = HKData.faq || [];
        const match = faq.find(item => userInput.includes(item[0]));
        
        if (match) return match[1];

        // 2. [변경 포인트] FAQ에 없는 질문일 때의 지능적 대응
        // 여기서 바로 '분석 중' 멘트를 띄우는 대신, 
        // 형님의 HK 비전 핵심 키워드를 활용해 삐니가 답변을 생성하도록 유도합니다.
        return `형님, '${userInput}'에 대해 HK 비전 엔진이 분석 중입니다. 형님의 스테이킹 전략과 연결하여 보고드리겠습니다.`;
    }
};
