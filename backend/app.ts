import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import * as database from "./config/database";
require("dotenv").config({ path: "./.env" });

const app = express();

// middleware
app.use(cors());
app.use(bodyParser.json());

// routes

// server listening
// Wait the database to connect before launching everything
database.config(() => {
    app.listen(process.env.PORT, () => {
        console.log(`Server running on http://localhost:${process.env.PORT}`);
    });
});
