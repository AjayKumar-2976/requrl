var http = require("http")
var server = http.createServer((req,res)=>{
    if(req.url == "/home"){
        res.write("THIS IS HOME PAGE")
    }
    else if(req.url == "/movies"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write("THIS IS MOVIES PAGE")
    }
    
    else if(req.url == "/movies/puspha2"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify("welcome to movies, PUSPHA2 is playing now"))
    }

    else if(req.url == "/movies/OG"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify("welcome to movies, OG is playing now"))
    }
    else if(req.url == "/movies/gamechanger"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify("welcome to movies, GAME_CHANGER is playing now"))
    }
    else if(req.url == "/movies/squidgame"){
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify("welcome to movies, SQUID_GAME is playing now"))
    }
    else{
        res.writeHead(200,{"content-type": "application/json"})
        res.write(JSON.stringify("PLEASE ENTER VALID URL"))
    }
    res.end()
})

server.listen(2100,()=>{
    console.log("SERVER IS RUNNING");
    
})