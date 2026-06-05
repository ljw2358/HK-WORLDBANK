// agi_core.js - HK WorldBank 지능형 엔진
import HKData from './hki_data.js';

const AGICore = {
    generateResponse: (userInput, lang = 'ko') => {
        // 1. 데이터 베이스가 비어있는지 확인
        if (!HKData || !HKData[lang] || !HKData[lang].faq) {
            return "형님, 지식 베이스가 로드되지 않았습니다. 데이터를 확인해 주세요.";
        }

        const faqs = HKData[lang].faq;
        
        // 2. 키워드 매칭: 질문에 포함된 단어를 FAQ에서 찾음
        const match = faqs.find(item => userInput.includes(item[0]));
        
        // 3. 답변 반환
        if (match) {
            return match[1]; // 찾았다면 바로 그 답변을 반환!
        }
        
        return "형님, 그 질문은 HK AGI 커널이 정밀 분석 중입니다. 형님의 비전을 바탕으로 답변을 준비하겠습니다.";
    }
};

export default AGICore;
import HKData from './hki_data.js';

const AGICore = {
    generateResponse: (userInput) => {
        // 1. 데이터 파일(HKData)에 faq 구조가 있는지 확인
        if (!HKData || !HKData.faq) return "시스템이 비전 데이터를 로딩 중입니다.";

        // 2. 입력된 키워드와 질문 매칭
        const found = HKData.faq.find(item => userInput.includes(item[0]));
        
        // 3. 매칭되면 답변을, 없으면 안내 멘트를 반환
        return found ? found[1] : "혜공 형님의 비전을 정밀 분석 중입니다.";
    }
};
export default AGICore;
