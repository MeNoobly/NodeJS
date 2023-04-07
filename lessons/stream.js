// Readable - чтение
// Writable - запись
// Duplex - для чтения и записи Readable + Writable
// Transform - такой же, как и Duplex, но может изменить данные по мере чтения

const fs = require("fs");
const path = require("path");

const textPath = path.resolve(__dirname, "test.txt");

// fs.readFile(textPath, (error, data) => {
//     if (error) {
//         throw error;
//     }

//     console.log(data);
// });

// const stream = fs.createReadStream(textPath, { encoding: "utf-8" });

// stream.on("data", (chunk) => {
//     console.log(chunk);
// });

// stream.on("close", () => console.log("закончили читать"));
// stream.on("open", () => console.log("начали читать"));
// stream.on("eror", (error) => console.log(error));

// const writableStream = fs.createWriteStream(textPath);

// for (let i = 0; i < 20; i++) {
//     writableStream.write(i + "\n");
// }

// writableStream.end();
// writableStream.close();
// writableStream.destroy();

const http = require("http");

http.createServer((request, response) => {
    const stream = fs.createReadStream(textPath);

    // Стрим закончит читать раньше, чем пользователь скачает

    // stream.on("data", (chunk) => {
    //     response.write(chunk);
    // });
    // stream.on("end", () => {
    //     response.end();
    // });

    stream.pipe(response);
});
