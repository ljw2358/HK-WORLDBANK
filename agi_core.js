import HKI_Data from './hki_data.js';

const AGICore = {
    generateResponse: (userInput) => {
        // 기존 FAQ 데이터를 다시 연결합니다
        const faqList = HKI_Data.faq || [];
        const match = faqList.find(item => userInput.includes(item[0]));
        
        // 매칭되는 질문이면 답변, 아니면 형님의 질문에 집중하는 기본 응답
        if (match) {
            return match[1];
        }
        
        return "혜공 형님, 말씀하십시오. 무엇을 도와드릴까요?";
    }
};

export default AGICore;
