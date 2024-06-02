const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const { config } = require("../config/appConfig");
const userRoutes = require("../routes/userRoutes");
const productRoutes = require("../routes/productRoutes");
const categoryRoutes = require("../routes/categoryRoutes");
const countriesEnRoutes = require("../routes/countriesEnRoutes");

/* App level Config */
const {
	app: { port, origin },
	db: { databaseURL },
} = config;

/* MongoDB setup */
mongoose.connect(databaseURL, {
	useNewUrlParser: true,
});
const database = mongoose.connection;

database.on("error", (error) => {
	console.log(error);
});

database.once("connected", () => {
	console.log("Database Connected");
});

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
	cors({
		credentials: true,
		origin,
		methods: ["GET", "PUT", "POST", "DELETE", "HEAD", "PATCH"],
	})
);

app.use("/api", userRoutes);
app.use("/api", productRoutes);
app.use("/api", categoryRoutes);
app.use("/api", countriesEnRoutes);

app.listen(port, () => {
	console.log(`Server is running on PORT: ${port}`);
});
