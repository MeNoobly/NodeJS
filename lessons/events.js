const Emitter = require("events");

const emitter = new Emitter();

const callback = (first, second, third) => {
    console.log(`Вы прислали сообщение ${first}`);
    console.log(`Второй аргумент ${second}`);
};

emitter.on("message", callback);
emitter.once("message-once", callback);

emitter.removeAllListeners();
emitter.removeListener("message", callback);

const MESSAGE = process.env.message || "";

if (MESSAGE) {
    emitter.emit("message", MESSAGE, 123);
} else {
    emitter.emit("message", "Вы не указали сообщение");
}
