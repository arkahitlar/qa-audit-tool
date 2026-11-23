const http = require("http");


const agents = [
    { id: 1, name: "Audit Agent" },
    { id: 2, name: "Quality Agent" },
    { id: 3, name: "Reporting Agent" }
];

const port = 3000

const server = http.createServer((req, res) => {
    if(req.url === "/"){
        res.writeHead(200, {
            "Content-type": "text/plain"
        });
        res.end("QA audit tool is running")
    }
    else if (req.url === "/agents"){
        res.writeHead(200, {
            "Content-type": "application/json"
        })
        res.end(JSON.stringify(agents))
    }
    else{
        res.writeHead(404, {
            "Content-Type" : "text/plain"
        })
        res.end("404-request not found")
    }
        
})

server.listen(port, () =>{
    console.log(`server is running on port ${port} `)
})