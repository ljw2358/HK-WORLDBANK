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
