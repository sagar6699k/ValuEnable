const app = require("./index")
const PORT = 2022;

app.listen(PORT,async function () {
  
    console.log(`Listening on the port: http://localhost:${PORT}`);
  })