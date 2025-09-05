import Cpu from './Cpu';
import Memory from './Memory';
import Info from './Info';
import { PerformanceData } from '../types/PerformanceData';

interface Props {
  data: PerformanceData;
}

const Widget = ({ data }: Props) => {
  const {
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
    macA,
  } = data;

  const cpuData = {
    cpuLoad,
  };

  const memoryData = {
    freeMemory,
    totalMemory,
    usedMemory,
    memoryUsage,
  };

  const infoData = {
    osType,
    upTime,
    macA,
    cpuType,
    cpuSpeed,
    numCores,
  };

  return (
    <div className="widget row justify-content-evenly">
      <h1>Widget</h1>
      <Cpu data={cpuData} />
      <Memory data={memoryData} />
      <Info data={infoData} />
    </div>
  );
};

export default Widget;
