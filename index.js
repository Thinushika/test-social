const express = require("express");
const home = require("./routes/home");
const cors = require('cors');

// Middlewares
const app = express();
app.use(cors());
app.use(express.json());

// Routes


app.use("/home", home);

// connection
const port = process.env.PORT || 9001;
app.listen(port, () => console.log(`Listening to port ${port}`));