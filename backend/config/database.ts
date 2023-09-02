import mongoose from "mongoose";
//import User from '../models/user'
import * as seeds from "./seeds";

function config(callback: () => void) {
    console.log("Trying to connect mongodb...");
    mongoose
        .connect(process.env.DATABASE_URL as string)
        .then(async () => {
            console.log("Mongodb connected successfully.");
            //			await User.deleteMany()
            // await seeds.fakeUsers({ admin: 1, applicant: 10, recruiter: 7 })
            ///await seeds.fakePosts(25)
            callback();
        })
        .catch((err) => {
            console.log("Failed to connect. Error: ", err);
        });
}

export { config };
