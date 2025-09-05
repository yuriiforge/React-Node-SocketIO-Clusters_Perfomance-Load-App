const os = require('os');

const getCpuLoad = () =>
  new Promise((resolve, reject) => {
    const start = cpuAverage();
    setTimeout(() => {
      const end = cpuAverage();
      const idleDiff = end.idle - start.idle;
      const totalDiff = end.totalMs - start.totalMs;

      // calculate the percentage of the used CPU
      const percentOfCpu = 100 - Math.floor((100 * idleDiff) / totalDiff);
      resolve(percentOfCpu);
    }, 100);
  });

const performanceLoadData = () =>
  new Promise(async (resolve, reject) => {
    const cpus = os.cpus();

    const freeMemory = os.freemem();
    const totalMemory = os.totalmem();
    const usedMemory = totalMemory - freeMemory;
    const memoryUsage = Math.floor((usedMemory / totalMemory) * 100) / 100;

    const osType = os.type();

    const upTime = os.uptime();
    const cpuType = cpus[0].model;
    const numCores = cpus.length;
    const cpuSpeed = cpus[0].speed;

    const cpuLoad = await getCpuLoad();
    resolve({
      freeMemory,
      totalMemory,
      usedMemory,
      memoryUsage,
      osType,
      upTime,
      cpuType,
      numCores,
      cpuSpeed,
      cpuLoad,
    });
  });

function cpuAverage() {
  const cpus = os.cpus();
  // cpus is an array of all cores. we need the average of all cores
  let idleMs = 0;
  let totalMs = 0;

  cpus.forEach((aCore) => {
    for (mode in aCore.times) {
      totalMs += aCore.times[mode];
    }
    idleMs += aCore.times.idle;
  });

  return {
    idle: idleMs / cpus.length,
    totalMs: totalMs / cpus.length,
  };
}

const run = async () => {
  const data = await performanceLoadData();
  console.log(data);
};
run();
