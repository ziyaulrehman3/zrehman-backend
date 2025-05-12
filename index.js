import dotenv from "dotenv";
dotenv.config();

import express from "express";

import { ContactMailSender } from "./assets/Mailer.js";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello from Server");
});

app.post("/contact", async (req, res) => {
  const data = req.body;

  if (process.env.CONTACT_FORM_KEY === req.headers.key) {
    try {
      await ContactMailSender(data);
      res.status(200).json({ message: "Query Submitted!" });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Error, Try Again!" });
    }
  } else {
    res.status(401).json({ message: "You're Unauthorized" });
  }
});

app.get("/signup", () => {
  res.send("Hello ");
});

app.listen(process.env.PORT || 3000, () => {
  console.log("Server is Running..");
});

export default app;
