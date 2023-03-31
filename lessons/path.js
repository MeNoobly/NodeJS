const path = require("path");

// склеивание путей
console.log(path.join("first", "second", "third"));

console.log(__dirname); // строка, содержащая абсолютный путь к текущей директории
console.log(path.resolve("first", "second", "third")); // получение абсолютного пути, аккуратное использование

const fullpath = path.resolve("first", "second", "third");
console.log(path.parse(fullpath)); // Парсинг пути
console.log(path.sep); // Разделитель в ОС
console.log(path.isAbsolute("first/second")); // Проверка на абсолютный путь
console.log(path.basename(fullpath)); // Название файла
console.log(path.extname(fullpath)); // Расширение файла
