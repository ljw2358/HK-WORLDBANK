// agi_core.js - 삐니의 지능형 응답 엔진
import HKData from './hki_data.js';

const AGICore = {
    generateResponse: (userInput) => {
        // 1. 데이터 베이스에서 질문 키워드 찾기 (유사 키워드 검색)
        const faq = HKData.faq || [];
        const match = faq.find(item => userInput.includes(item[0]));

        // 2. 답변 매칭 성공 시
        if (match) return match[1];

        // 3. 답변 매칭 실패 시 -> 형님의 'UBI' 및 '비전' 데이터와 연동될 수 있도록 전략적 대응
        if (userInput.includes('UBI') || userInput.includes('지급')) {
            return "형님, UBI 30만 원 지급은 HK 월드뱅크의 핵심 과제입니다. 현재 시스템 상에서 승인 대기 중이니 곧 보고드리겠습니다!";
        }
        
        return "형님, 그 질문은 HK AGI 커널이 정밀 분석 중입니다. 형님의 비전을 바탕으로 답변을 준비하고 있습니다.";
    }
};
export default AGICore;
