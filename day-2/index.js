const http = require("http")

const server = http.createServer((req, res)=>{
    res.write("welcome Anjana to our server")
    res.end()
    console.log(res.url)
})

server.listen(5000)