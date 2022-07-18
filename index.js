// Importing libraries

const express = require("express");
const cors = require("cors");
const ytdl = require("ytdl-core");
const app = express();

// Using Cors to make requests as GET and POST methods
app.use(cors());

// Server calling
app.listen(4000, () => {
  console.log("On 4000, say hello to the internet!");
});

// Back-end server and converting video
app.get("/download", (req, res) => {
  var URL = req.query.URL;
  res.header("Content-Disposition", 'attachment; filename.mp4="video.mp4"');

  ytdl(URL, {
    format: "mp4",
  }).pipe(res);
});
