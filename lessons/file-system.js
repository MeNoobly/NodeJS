const fs = require("fs");
const path = require("path");

// создание папки
// fs.mkdirSync(path.resolve(__dirname, "dir"));

// рекурсивное создание папок c синхронной функцией
// fs.mkdirSync(path.resolve(__dirname, "dir", "dir2", "dir3"), {
//     recursive: true,
// });

// ассинхронное создание папки

// console.log("Start");

// fs.mkdir(path.resolve(__dirname, "dir"), (error) => {
//     if (error) {
//         console.log(error);
//         return;
//     }
//     console.log("Папка создана");
// });

// console.log("End");

// ассинхронное удаление папки

// fs.rmdir(path.resolve(__dirname, "dir"), (error) => {
//     if (error) {
//         throw error;
//     }
// });

// добавление/перезапись файла

// fs.writeFile(path.resolve(__dirname, "test.txt"), "123456", (error) => {
//     if (error) {
//         throw error;
//     }
//     console.log("Файл создан");

// дозаписывание в файл

//     fs.appendFile(
//         path.resolve(__dirname, "test.txt"),
//         "добавили в конец",
//         (error) => {
//             if (error) {
//                 throw error;
//             }
//             console.log("Файл создан");
//         }
//     );
// });

const writeFileAsync = async (path, data) => {
    return new Promise((resolve, reject) =>
        fs.writeFile(path, data, (error) => {
            if (error) {
                return reject(error.message);
            }
            resolve();
        })
    );
};

const appendFileAsync = async (path, data) => {
    return new Promise((resolve, reject) =>
        fs.appendFile(path, data, (error) => {
            if (error) {
                return reject(error.message);
            }
            resolve();
        })
    );
};

writeFileAsync((filepath = path.resolve(__dirname, "test.txt")), "data")
    .then(() => appendFileAsync(filepath, " Дозапись в файл"))
    .then(() => appendFileAsync(filepath, " Ещё одна дозапись в файл"))
    .catch((error) => console.log(error));
