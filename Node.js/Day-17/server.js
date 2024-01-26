const express = require("express");
const { collection } = require("./dbConnect");

const PORT = 2000;
const hostName = "127.0.0.2";

const app = express();

app.use(express.json());
app.get("/getstudent", async (req, res) => {
  let student = await collection;
  let data = await student.find().toArray();
  res.send(data);
});
app.post("/poststudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.insertOne(data);
  res.send(response);
});

app.delete("/deletestudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.deleteOne(data);
  res.send(response);
});
app.patch("/updatestudent", async (req, res) => {
  let data = req.body;
  let student = await collection;
  let response = await student.updateOne(data, {
    $set: { age: 40, address: "bnglore", SID: "1020AC" },
  });
  res.send(response);
});

app.listen(PORT, hostName, () => {
  console.log(`server running in http://${hostName}:${PORT}`);
});
