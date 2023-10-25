"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const fake_data_1 = __importDefault(require("../lib/fake-data"));
function config(callback) {
    console.log("Trying to connect mongodb...");
    mongoose_1.default
        .connect(process.env.DATABASE_URL)
        .then(() => __awaiter(this, void 0, void 0, function* () {
        console.log("Mongodb connected successfully.");
        try {
            (0, fake_data_1.default)();
            console.log("All fake data generated successfully");
        }
        catch (error) {
            console.log("An error has occurred during fake data generation: ", error);
        }
        callback();
    }))
        .catch((err) => {
        console.log("Failed to connect. Error: ", err);
    });
}
exports.config = config;
