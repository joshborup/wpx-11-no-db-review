const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const movieController = require("./controller/movieController");

app.use(bodyParser.json());

app.get("/api/movies", movieController.movieTime);
app.put("/api/movies/:id", movieController.updateMovie);
app.post("/api/movies", movieController.userAddMovie);
app.delete("/api/movies/:id", movieController.movieDelete);

const PORT = 4000;
app.listen(PORT, () => console.log(`server listening on port ${PORT}`));
