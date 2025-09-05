import { useRef } from 'react';
import drawCircle from '../utilities/canvasLoadAnimations';

interface Props {
  data: {
    freeMemory: number;
    totalMemory: number;
    usedMemory: number;
    memoryUsage: number;
  };
}

const Memory = ({ data }: Props) => {
  const memRef = useRef<HTMLCanvasElement | null>(null);
  drawCircle(memRef.current, data.memoryUsage * 100);

  const totalMemInGB = Math.floor((data.totalMemory / 1073741824) * 100) / 100;
  const freeMemInGB = Math.floor((data.freeMemory / 1073741824) * 100) / 100;

  return (
    <div className="mem col-3">
      <h3>Memory Usage</h3>
      <div className="canvas-wrapper">
        <canvas ref={memRef} width="200" height="200"></canvas>
        <div className="mem-text">{data.memoryUsage * 100}%</div>
      </div>
      <div>Total Memory: {totalMemInGB}gb</div>
      <div>Free Memory: {freeMemInGB}gb</div>
    </div>
  );
};

export default Memory;
