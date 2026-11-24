import express from "express";
import cors from "cors";
import Lab5 from "./Lab5.js";
import Courses from "./Courses.js";

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("webdev-server is running. Try /lab5/welcome"));

Lab5(app);
Courses(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
