import './App.css';
import socket from './utilities/socketConnection';
import { useEffect, useState } from 'react';
import Widget from './components/Widget';
import { PerformanceDataMap } from './types/PerformanceData';

function App() {
  const [performanceData, setPerformanceData] = useState<PerformanceDataMap>(
    {}
  );

  useEffect(() => {
    socket.on('perfData', (data) => {
      const copyPerfData = { ...performanceData };
      copyPerfData[data.macA] = data;
      setPerformanceData(copyPerfData);
    });

    // Cleanup listeners
    return () => {
      socket.off('perfData');
    };
  }, [performanceData]);

  const widgets = Object.values(performanceData).map((d) => (
    <Widget key={d.macA} data={d} />
  ));

  return <div className="container">{widgets}</div>;
}

export default App;
