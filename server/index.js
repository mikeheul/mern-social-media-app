import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();


//* MIDDLEWARES
// Controls the maximum request body size
app.use(bodyParser.json( {limit: '30mb', extended: true}));
// Returns middleware that only parses urlencoded bodies and only looks at requests where the Content-Type header matches the type option.
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
// CORS is a node.js package for providing a Connect/Express middleware that can be used to enable CORS with various options.
app.use(cors());

app.use('/posts', postRoutes);

const CONNECTION_URL = "mongodb+srv://mikeheul:mikeheul123@cluster0.vlqbc.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL, { 
    useUnifiedTopology: true })
        .then(() => app.listen(PORT, () => console.log(`Listening on Server ${PORT}`)))
        .catch((error) => console.log(error.message))





