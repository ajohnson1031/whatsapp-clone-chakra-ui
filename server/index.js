require("dotenv").config();
const express = require("express");
const { Server } = require("socket.io");
const app = express();
const server = require("http").createServer(app);
const helmet = require("helmet");
const cors = require("cors");

const authRouter = require("./routes/authRouter");

const PORT = process.env.PORT || 4000;
const io = new Server(server, {
  cors: {
    origin: process.env.FRONTEND_BASE_URL,
    credentials: true,
  },
});

app.use(helmet());
app.use(cors({ origin: process.env.FRONTEND_BASE_URL, credentials: true }));
app.use(express.json());
app.use("/auth", authRouter);

io.on("connect", (socket) => {});

server.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
