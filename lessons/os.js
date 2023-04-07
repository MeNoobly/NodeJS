const os = require("os");
const cluster = require("cluster");

// console.log(process.platform);
// console.log(os.platform());
// console.log(os.arch()); // архитектура процессора
// console.log(os.cpus()); // описание ядра процессора
// console.log(os.cpus().length); // количество ядер процессора

// const cpus = os.cpus();

// console.log(process.pid);

if (cluster.isMaster) {
    for (let index = 0; index < os.cpus().length - 2; index++) {
        cluster.fork();
    }
    cluster.on("exit", (worker) => {
        console.log(`Воркер с pid = ${worker.process.pid} умер`);
        cluster.fork();
    });
} else {
    console.log(`Воркер с pid = ${process.pid} запущен`);
    setInterval(() => {
        console.log(`Воркер с pid = ${process.pid} еще работает`);
    }, 10000);
}
