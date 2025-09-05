export interface PerformanceData {
  freeMemory: number;
  totalMemory: number;
  usedMemory: number;
  memoryUsage: number;
  osType: string;
  upTime: number;
  cpuType: string;
  numCores: number;
  cpuSpeed: number;
  cpuLoad: number;
  macA: string;
}

export type PerformanceDataMap = {
  [macA: string]: PerformanceData;
};
