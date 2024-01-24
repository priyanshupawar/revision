let express = require("express");
const app = express;

const PORT = 7000;
const hostName = "127.0.0.7";

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post("/post",(req,res)=>{
    console.log(req.body)
    res.status(201).send("New POST request from data recive")
})

app.listen(PORT, hostName, () => {
  console.log(`Server Started in http://${hostName}:${PORT}`);
});
