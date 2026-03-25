const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 5173;
const DIST_DIR = path.join(__dirname, 'dist');

const server = http.createServer((req, res) => {
  // Serve index.html for all routes
  let filePath = path.join(DIST_DIR, req.url);

  // Default to index.html for root and routes
  if (req.url === '/' || !path.extname(req.url)) {
    filePath = path.join(DIST_DIR, 'index.html');
  }

  fs.readFile(filePath, (err, data) => {
    if (err) {
      // 404 - serve index.html
      fs.readFile(path.join(DIST_DIR, 'index.html'), (err, data) => {
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
        res.end(data);
      });
      return;
    }

    const ext = path.extname(filePath);
    let contentType = 'text/html';
    if (ext === '.js') contentType = 'application/javascript';
    if (ext === '.css') contentType = 'text/css';
    if (ext === '.png') contentType = 'image/png';
    if (ext === '.jpg') contentType = 'image/jpeg';
    if (ext === '.webp') contentType = 'image/webp';
    if (ext === '.ico') contentType = 'image/x-icon';
    if (ext === '.svg') contentType = 'image/svg+xml';

    res.writeHead(200, { 'Content-Type': contentType });
    res.end(data);
  });
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/`);
});
