const express = require("express");
const cors = require("cors");
const PORT = 3131;

const indexRouter = require("./routes/index");
const app = express();

app.use(express.json());
app.use(cors());
// routes
app.use("/api/v1", indexRouter);
app.get("/test", async (req, res) => {
	try {
		res.send("hello");
	} catch (error) {
		console.log(error);
	}
});

app.listen(PORT, () => console.log(`Listening on port ${PORT}!`));
