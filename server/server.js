import express from "express";
import cors from "cors";
import axios from "axios";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());

const PORT = 5000;

app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get(
      `${process.env.BASE_URL}/movie/popular?api_key=${process.env.API_KEY}`
    );
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Something went wrong" });
  }
});

app.get("/search", async (req, res) => {
  try {
    const query = req.query.query;

    const response = await axios.get(
      `${process.env.BASE_URL}/search/movie`,
      {
        params: {
          api_key: process.env.API_KEY,
          query: query,
        },
      }
    );

    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Search failed" });
  }
});
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});