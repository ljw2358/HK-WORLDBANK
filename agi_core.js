const AGI_Core = {
    getAIResponse: (userInput) => {
        const input = userInput.toLowerCase();
        
        // AGI 답변 로직 업그레이드
        if (input.includes("안녕")) return "반갑습니다! HK WorldBank 공식 론칭을 환영합니다.";
        if (input.includes("pi") || input.includes("파이")) return "HK WorldBank는 Pi Network와 결합된 차세대 글로벌 산업 플랫폼입니다. 현재 스테이킹과 유동성 풀이 활성화되어 있습니다.";
        if (input.includes("산업") || input.includes("플랫폼")) return "HK WorldBank는 로보틱스, 에너지, 우주 산업을 잇는 거대 산업 클러스터 생태계입니다.";
        
        return "무엇을 도와드릴까요? HK WorldBank AGI 지원센터가 24시간 대기 중입니다.";
    }
};

export default AGI_Core;

