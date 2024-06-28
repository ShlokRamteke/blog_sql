import express from "express";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import postRoutes from "./routes/posts.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
import multer from "multer";
import "dotenv/config";

const app = express();
const port = 8800 || 5000;

app.use(express.json());
app.use(cors());
app.use(cookieParser());

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../client/public/upload");
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage });

app.post("/api/upload", upload.single("file"), function (req, res) {
  const file = req.file;
  res.status(200).json(file.filename);
});

app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/users", usersRoutes);

app.listen(port, () => {
  console.log(`Backend server is running at port: ${port}`);
});
