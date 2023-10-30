import Recruiter from "../models/recruiter";
import Admin from "../models/admin";
import Applicant from "../models/applicant";
import { Strategy as LocalStrategy } from "passport-local";
import passport from "passport";

export default () => {
    passport.use(
        new LocalStrategy(
            { usernameField: "email" },
            async (email, password, done) => {
                let user;
                user = await Applicant.findOne({ email });
                if (user) {
                    if (user.password !== password) {
                        return done(null, false, {
                            message: "Password mismatch",
                        });
                    }
                    return done(null, { role: "applicant", data: user });
                }
                user = await Recruiter.findOne({ email });
                if (user) {
                    if (user.password !== password) {
                        return done(null, false, {
                            message: "Password mismatch",
                        });
                    }
                    return done(null, { role: "recruiter", data: user });
                }
                user = await Admin.findOne({ email });
                if (user) {
                    if (user.password !== password) {
                        return done(null, false, {
                            message: "Password mismatch",
                        });
                    }
                    return done(null, { role: "admin", data: user });
                }
                done(null, false, { message: "User doesn't exist" });
            }
        )
    );

    passport.serializeUser(({ role, data }: any, done) => {
        done(null, { role, id: data._id });
    });

    passport.deserializeUser(async ({ role, id }: any, done) => {
        let user;
        if (role === "recruiter") {
            user = await Recruiter.findById(id);
            return done(null, { role, data: user });
        }
        if (role === "applicant") {
            user = await Applicant.findById(id);
            return done(null, { role, data: user });
        }
        if (role === "admin") {
            user = await Admin.findById(id);
            return done(null, { role, data: user });
        }
        done(null, false);
    });
};
