const http = require('http');
const fs = require('fs');
const path = require('path');

// ポート番号やメッセージは環境変数から取得
const port = process.env.PORT || 8080;
const message = process.env.MESSAGE || 'Hello, World!';

// 静的コンテンツのパス
const staticContentPath = process.env.STATIC_PATH || './static';

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        // 動的なメッセージを表示
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(message);
    } else {
        // 静的コンテンツを提供
        const filePath = path.join(staticContentPath, req.url);
        fs.readFile(filePath, (err, content) => {
            if (err) {
                res.writeHead(404, { 'Content-Type': 'text/plain' });
                res.end('Not Found');
            } else {
                res.writeHead(200, { 'Content-Type': 'text/html' });
                res.end(content);
            }
        });
    }
});

server.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

