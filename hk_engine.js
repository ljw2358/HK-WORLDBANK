<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <title>HK-WorldBank Platform</title>
    <style>
        body { background: #000; color: #fff; font-family: sans-serif; text-align: center; padding: 20px; }
        .lang-select { background: #1a1a1a; color: #ffd700; border: 1px solid #ffd700; padding: 5px; border-radius: 5px; }
        .grid-container { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin: 20px 0; }
        .btn { background: #1a1a1a; border: 1px solid #333; padding: 20px; border-radius: 15px; color: #00ff00; font-weight: bold; cursor: pointer; }
        .full-btn { background: #ff00ff; color: white; padding: 20px; border-radius: 15px; width: 100%; border: none; font-weight: bold; margin-top: 10px; }
    </style>
</head>
<body>

    <select class="lang-select">
        <option>한국어 (KO)</option><option>ENGLISH (EN)</option><option>O'ZBEK (UZ)</option><option>ҚАЗАҚША (KK)</option>
        <option>FILIPINO (TL)</option><option>KISWAHILI (SW)</option><option>OROMOO (OM)</option><option>FRANÇAIS (FR)</option>
        <option>DEUTSCH (DE)</option><option>ITALIANO (IT)</option><option>TÜRKÇE (TR)</option><option>POLSKI (PL)</option>
        <option>中文 (ZH)</option><option>日本語 (JA)</option><option>हिन्दी (HI)</option><option>العربية (AR)</option>
        <option>Español (ES)</option><option>Tiếng Việt (VI)</option><option>ไทย (TH)</option><option>Bahasa Indonesia (ID)</option>
        <option>Português (BR)</option><option>Afrikaans (ZA)</option><option>Yorùbá (NG)</option><option>አማርኛ (ET)</option>
        <option>Masri (EG)</option><option>Bemba (ZM)</option><option>नेपाली (NE)</option><option>Schwiizerdütsch (CH)</option>
        <option>Тоҷикӣ (TG)</option><option>සිංහල (LK)</option><option>Română (RO)</option><option>Русский (RU)</option>
    </select>

    <h1>HK WORLD BANK</h1>
    <div id="status">시스템 통합 가동 시작...</div>

    <div class="grid-container">
        <button class="btn" onclick="sendMoney()">🚀<br>송금</button>
        <button class="btn" onclick="payment()">🛒<br>결재</button>
        <button class="btn" onclick="deposit()">🏦<br>예치</button>
        <button class="btn" onclick="claimReward()">🎁<br>보상</button>
        <button class="btn" onclick="claimUBI()">💳<br>기본소득</button>
        <button class="btn" onclick="approveSwap()">🔄<br>스왑</button>
        <button class="btn" onclick="getPiBalance()">📊<br>PI 수량</button>
        <button class="btn" onclick="executeSwap()">📉<br>DEX 스왑</button>
        <button class="btn" onclick="depositLP()">💎<br>LP 스테이킹</button>
    </div>

    <button class="full-btn">글로벌 AI 지원센터 (FAQ 20)</button>

    <script>
        // 엔진 로직 및 에코시스템 가동 함수
        window.initKEngine = function() { console.log("엔진 가동 완료!"); };
        
        window.HK_WorldBank_activate = function() {
            console.log("HK-WorldBank 9대 에코시스템 통합 가동 완료!");
            document.getElementById('status').innerText = "시스템 활성화 완료!";
        };

        // 각 모듈 기능 삽입
        function sendMoney() { alert("송금 엔진 가동"); }
        function payment() { alert("결재 엔진 가동"); }
        function deposit() { alert("예치 엔진 가동"); }
        function claimReward() { alert("보상 엔진 가동"); }
        function claimUBI() { alert("기본소득 엔진 가동"); }
        function approveSwap() { alert("스왑 엔진 가동"); }
        function getPiBalance() { alert("PI 잔액조회"); }
        function executeSwap() { alert("DEX 스왑 실행"); }
        function depositLP() { alert("LP 스테이킹 실행"); }

        // 시스템 자동 로드
        window.onload = function() {
            initKEngine();
            setTimeout(HK_WorldBank_activate, 500);
        };
    </script>
</body>
</html>
