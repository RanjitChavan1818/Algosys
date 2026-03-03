const express = require("express")
const { exec } = require("child_process")
const fs = require("fs")
const cors = require('cors')

const app = express();
app.use(cors())
app.use(express.json());

app.post("/run", (req, res) => {
  const {code, input} = req.body

  // Save the code to a temporary file
  fs.writeFileSync("temp.c", code);
  fs.writeFileSync("input.txt",input)

  // Compile and run the code with input file
  exec("gcc temp.c -o temp && ./temp < input.txt", (err, stdout, stderr) => {
    if (err || stderr) {
      res.json({ output: stderr || err.message });
    } else {
      res.json({ output: stdout });
    }

    fs.unlinkSync("temp.c")
    fs.unlinkSync("temp")
    fs.unlinkSync("input.txt")
  });
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
