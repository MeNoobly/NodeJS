import Application from "./framework/Application.js";
import userRouter from "./src/user-router.js";
import jsonParser from "./framework/parserJson.js";
import parseURL from "./framework/parseURL.js";
import mongoose from "mongoose";

const PORT = process.env.PORT || 5000;
const app = new Application();

app.use(jsonParser);
app.use(parseURL("http://localhost:5000"));
app.addRouter(userRouter);

const start = async () => {
    try {
        await mongoose.connect(
            "mongodb+srv://84956743974:12345@cluster0.8bgwz1e.mongodb.net/?retryWrites=true&w=majority"
        );
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();
