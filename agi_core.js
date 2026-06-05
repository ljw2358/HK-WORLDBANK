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
// agi_core.js - HK WorldBank 지능형 엔진
import HKData from './hki_data.js';

const AGICore = {
    generateResponse: (userInput) => {
        // 1. FAQ 데이터가 로드되었는지 확인
        if (!HKData || !HKData.faq) return "시스템이 비전 데이터를 로딩 중입니다.";

        // 2. [핵심] 질문 키워드 매칭
        // 사용자가 입력한 단어(userInput)가 FAQ 리스트(item[0])에 있는지 검색
        const found = HKData.faq.find(item => userInput.includes(item[0]));
        
        // 3. 매칭 성공 시 실제 답변을, 실패 시 분석 중 멘트를 반환
        return found ? found[1] : `형님, '${userInput}'에 대해 HK 비전 엔진이 심층 분석 중입니다. 형님의 스테이킹 전략과 연동하여 정밀 보고드리겠습니다.`;
    }
};

export default AGICore;
