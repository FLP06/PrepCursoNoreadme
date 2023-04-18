const http = require("http");
const data = require("./utils/data")

const PORT = 3001;



http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");

    const { url } = req;

    if (url.includes("/rickandmorty/character/")) {
      const id = url.split("/").at(-1);
      const character = data.find((char)=> char.id == id)
      
      
      res.end(JSON.stringify(character));
    }
    else res.end("Error ruta no encontrada")
    
  })
  .listen(PORT, "localhost");
