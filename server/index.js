const express = require("express");
const bParser = require("body-parser");
const cors = require("cors");
// const path = require("path");
const port = 3000;
const router = require("./router");

const app = express();
app.use(bParser.json());
app.use(bParser.urlencoded({ extended: true }));
// app.use("/", express.static(path.join(__dirname, "../client/dist")));
app.use(cors());
app.listen(port, () => {console.log("server online:" + port);});

app.get("/server/test", (req, res) => {
  console.log("visited");
  res.status(200).send(":" + port + " is watching you");
});



// app.get(`https://api.fda.gov/drug/label.json?search=description::/para?drug=${name}&limit=1`,(req, res) => {

//   var name = req.query.name
//     if (err) {
//       req.status(404).send(err)
//     } else {
//       req.status(200).send(req.body)
//     }
//   })



app.use("/mvp", router);