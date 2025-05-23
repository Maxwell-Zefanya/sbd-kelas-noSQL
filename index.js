require("dotenv").config();

const userRoutes = require('./routes/UserRoute');
const accountRoutes = require('./routes/AccountRoute');
const gameRoutes = require("./routes/Game.Route");
const achievementRoutes = require('./routes/AchievementRoute');

const express = require('express');
const cors = require('cors');
const db = require('./config/db');

const port = process.env.PORT;
const app = express();

// connect to database
db.connectDB();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
    cors({
        methods: "GET,POST,PUT,DELETE",
        credentials: true
    })
);


// status
app.get('/status', (req, res) => {
    res.status(200).send({ status: "Server is running" });
})

// redirect /user to userRoute
app.use("/user", userRoutes);

// redirect /score to scoreRoute
app.use("/account", accountRoutes);

//redirect /game to gameRoutes
app.use("/game", gameRoutes);

//redirect /achievement to achievementRoute
app.use("/achievement", achievementRoutes);

//redirect /review to reviewRoute
app.use("/review", achievementRoutes);

app.listen(port, () => {
    console.log(`🚀 Server is running on PORT ${port}`);
})