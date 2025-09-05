interface Props {
  data: {
    osType: string;
    upTime: number;
    macA: string;
    cpuType: string;
    cpuSpeed: number;
    numCores: number;
  };
}

const Info = ({ data }: Props) => {
  return <div>Info</div>;
};

export default Info;
