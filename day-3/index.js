const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Home Section");
});

app.get("/profile", (req, res) => {
  const resData = fs.createReadStream("./data.txt", { encoding: "utf-8" });
  resData.pipe(res);
});

app.post("/uploadData", (req, res) => {
  console.log(req.body);
  fs.appendFileSync("./data.txt", JSON.stringify(req.body), {
    encoding: "utf-8",
  });
  res.send("Welcome to Upload Page");
});

app.get("/products", (req, res) => {
  const resData = fs.readFileSync("./db.json", {encoding:"utf-8"})
 const dataProduct = JSON.parse(resData)
 res.send(JSON.stringify(dataProduct.products))
});

app.post("/addProducts", (req, res) => {

  const fileData =fs.readFileSync("./db.json", {encoding: "utf-8"})
 const prasedFile = JSON.parse(fileData)
 prasedFile.products.push(req.body)
 
  fs.writeFileSync("./db.json", JSON.stringify(prasedFile), {encoding: "utf-8"})
  res.send("Products added successfully")
});

app.delete("/delete/:id", (req, res)=>{
    const userId = req.params['id'];
const readData = fs.readFileSync("./db.json", {encoding: "utf-8"})
const parsedData = JSON.parse(readData)
fs.unlink(parsedData.products.id, ()=>{
    console.log("fddv")})
})

app.listen(5000, () => {
  console.log("Welcome to Port 5000");
});
