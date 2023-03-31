const fsPromise = require("fs/promises");

fsPromise.mkdir("/").then().catch();
fsPromise.readFile("/").then().catch();
fsPromise.writeFile("/").then().catch();
fsPromise.appendFile("/").then().catch();
fsPromise.rm("/").then().catch();
fsPromise.rmdir("/").then().catch();
