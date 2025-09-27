// creating node server and deploy on Heroku

const http = require("http");
const fs = require("fs");
const PORT = process.env.PORT;

const handleReadFile = (fileName, statusCode, res) => {
    fs.readFile(fileName, "utf-8", (err, data) => {
        if (err) {
            console.log(err);
            res.writeHead(500, { "content-type": "text/plain" });
            res.write("Internal Server Error");
            res.end();
        } else {
            res.writeHead(statusCode, {
                "content-type": "text/html"
            });
            res.write(data);
            res.end();
        }
    });  
};

const server = http.createServer((req, res) => {
    if (req.url === "/") {
        handleReadFile("index.html", 200, res);
    } else if (req.url === "/about") {
        handleReadFile("about.html", 200, res);
    } else if (req.url === "/contact") {
        handleReadFile("contact.html", 200, res);
    } else {
         handleReadFile("404.html", 404, res);
    }
});

server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
