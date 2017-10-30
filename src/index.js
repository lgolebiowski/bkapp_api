import express from "express";
import path from "path";

const app = express();

app.post("/api/auth", (req, res) => {
	res.status(400).json({errors: {global: "Invalid Credentials"}})	
});

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// import auth from "./routes/auth";
// import users from "./routes/users";

app.listen(8080, () => console.log("Running on localhost:8080"));
