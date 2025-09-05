interface Props {
  data: {
    freeMemory: number;
    totalMemory: number;
    usedMemory: number;
    memoryUsage: number;
  };
}

const Memory = ({ data }: Props) => {
  return <div>Memory</div>;
};

export default Memory;
