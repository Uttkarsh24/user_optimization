import hashPasswordWorker from "./passwordWorker.js";
import changePasswordWorker from "./changePasswordWorker.js";
import forgotPasswordWorker from "./forgotPasswordWorker.js";

const initializeWorkers = () => {
    console.log("Starting workers...");
    hashPasswordWorker;
    changePasswordWorker;
    forgotPasswordWorker;
};

export default initializeWorkers;