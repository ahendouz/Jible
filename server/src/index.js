import express from "express";
require("dotenv").config();

import { db } from "./database";

const app = express();

const port = process.env.PORT || 4000;

app.listen(port, () => console.log(`Server is running on port ${port} 🚀🚀🚀`));
