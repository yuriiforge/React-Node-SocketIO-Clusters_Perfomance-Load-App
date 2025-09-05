import drawCircle from '../utilities/canvasLoadAnimations';
import { useRef } from 'react';

interface Props {
  data: { cpuLoad: number };
}

const Cpu = ({ data }: Props) => {
  const canvasEl = useRef<HTMLCanvasElement | null>(null);
  drawCircle(canvasEl.current, data.cpuLoad);

  return (
    <div className="cpu col-3">
      <h3>CPU Load</h3>
      <div className="canvas-wrapper">
        <canvas ref={canvasEl} className="" width="200" height="200"></canvas>
        <div className="cpu-text">{data.cpuLoad}%</div>
      </div>
    </div>
  );
};

export default Cpu;
