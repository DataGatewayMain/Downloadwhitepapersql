const express = require("express");
const cors = require("cors");
require("dotenv/config");
const app = express();
const Formroute = require("./Routes/FormsRoutes");
const morgan = require("morgan");

// Middleware
app.use(express.json());
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use("/DownloadPaper", Formroute);

// Default route
app.get("/", (req, res) => {
    res.send("Download API!!");
});

// Connection
app.listen(process.env.PORT, () => {
    console.log(`Server running on port ${process.env.PORT}`);
});
