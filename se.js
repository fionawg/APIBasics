const { write } = require('fs');
const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/'){
        res.write('Hello, World! ');
        res.write('This is Web Dev!');
        res.end();
    }
    if (req.url === '/api/courses'){
        res.write(JSON.stringify([1, 2, 3]));
        res.write('This is a list of offerings at BTHS.');
        res.end();
    }
});

/*server.listen(3000, () => {
    console.log('Listening on port 3000...');
});*/
console.log("Listening on port 3000...");