const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "variables.env" });
const createServer = require("./createServer");
const bodyParser = require("body-parser");
const db = require("./db");

const server = createServer();

server.express.use(cookieParser());

server.express.use((req, res, next) => {
	const { token } = req.cookies;

	const { userId } = jwt.verify(token, process.env.APP_SECRET);
	req.userId = userId;

	next();
});

server.start(
	{
		cors: {
			credentials: true,
			origin: true
		}
	},
	details => {
		console.log(
			`Server is now running on port http://localhost:${details.port}`
		);
	}
);
