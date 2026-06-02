const express = require('express');
const app = express();
const path = require('path');

// 현재 폴더 전체를 공개하여 모든 파일이 읽히게 합니다.
app.use(express.static(__dirname));

// 루트 경로 접속 시 HK-WorldBank.html을 명시적으로 연결합니다.
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'HK-WorldBank.html'));
});

app.listen(5000, '0.0.0.0', () => {
    console.log("HK-WorldBank 금융 엔진 5000번 포트에서 풀가동 중!");
});
