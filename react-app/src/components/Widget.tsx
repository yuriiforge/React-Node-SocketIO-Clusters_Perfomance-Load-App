import { useState, useEffect } from 'react';

import Cpu from './Cpu';
import Memory from './Memory';
import Info from './Info';
import { PerformanceData } from '../types/PerformanceData';
import socket from '../utilities/socketConnection';

interface Props {
  data: PerformanceData;
}

const Widget = ({ data }: Props) => {
  const [isAlive, setIsAlive] = useState<boolean>(true);
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

  const notAliveDiv = !isAlive ? (
    <div className="not-active">Offline</div>
  ) : (
    <></>
  );

  useEffect(() => {
    socket.on('connectedOrNot', (isAlive, machineMacA) => {
      if (machineMacA === data.macA) {
        setIsAlive(isAlive);
      }
    });
  }, [data.macA]);

  return (
    <div className="widget row justify-content-evenly">
      {notAliveDiv}
      <Cpu data={cpuData} />
      <Memory data={memoryData} />
      <Info data={infoData} />
    </div>
  );
};

export default Widget;
