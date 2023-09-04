import mongoose from "mongoose";
import generateAllFakeData from "../lib/fake-data";

function config(callback: () => void) {
    console.log("Trying to connect mongodb...");
    mongoose
        .connect(process.env.DATABASE_URL as string)
        .then(async () => {
            console.log("Mongodb connected successfully.");
            try {
                generateAllFakeData();
                console.log("All fake data generated successfully");
            } catch (error: any) {
                console.log(
                    "An error has occurred during fake data generation: ",
                    error
                );
            }
            callback();
        })
        .catch((err) => {
            console.log("Failed to connect. Error: ", err);
        });
}

export { config };
