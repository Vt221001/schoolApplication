import dotenv from "dotenv";
import connectDB from "./Db/db.js";
import { app } from "./app.js";

dotenv.config({
    path: "./.env",
});

const port = process.env.PORT || 3000;

connectDB()
    .then(() => {
        console.log("DB connected Sucessfully");
        app.listen(port, () => {
            console.log(`Server is running on port ${port}`);
        });

        app.on("error", (error) => {
            console.log("Error is here: ", error);
            throw error;
        });
    })
    .catch((err) => {
        console.log(err);
    });
