const http = require('http');

const menProducts = [
    { id: 1, name: 'Men Product 1', price: 20.99 },
    { id: 1, name: 'Men Product 2', price: 26.99 },
    { id: 1, name: 'Men Product 3', price: 27.99 },
];

const womenProducts = [
    { id: 1, name: 'Women Product 1', price: 25.99 },
    { id: 1, name: 'Women Product 2', price: 20.99 },
    { id: 1, name: 'Women Product 3', price: 29.99 },
];

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'application/json');
    if (req.url === '/') {
        res.end(JSON.stringify({ message: 'Welcome to Men & Women Dummy Data' }));
    } else if (req.url === '/men') {
        res.end(JSON.stringify(menProducts));
    } else if (req.url === '/women') {
        res.end(JSON.stringify(womenProducts));
    } else {
        res.statusCode = 404;
        res.end(JSON.stringify({ message: 'Page not found' }));
    }
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}/`);
});
