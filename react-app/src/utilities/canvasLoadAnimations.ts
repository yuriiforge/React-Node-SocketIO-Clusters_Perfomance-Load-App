const drawCircle = (
  canvas: HTMLCanvasElement | null,
  currentLoad: number
): void => {
  if (canvas) {
    const context = canvas.getContext('2d');
    if (!context) return;

    // Clear previous
    context.clearRect(0, 0, 500, 500);

    // Draw inner circle
    context.fillStyle = '#ccc';
    context.beginPath();
    context.arc(100, 100, 90, 0, Math.PI * 2);
    context.closePath();
    context.fill();

    // Draw outer line
    context.lineWidth = 10;

    if (currentLoad < 20) {
      context.strokeStyle = '#00ff00';
    } else if (currentLoad < 40) {
      context.strokeStyle = '#337ab7';
    } else if (currentLoad < 60) {
      context.strokeStyle = '#f0ad4e';
    } else {
      context.strokeStyle = '#d9534f';
    }

    context.beginPath();
    context.arc(
      100,
      100,
      95,
      Math.PI * 1.5,
      Math.PI * 1.5 + (Math.PI * 2 * currentLoad) / 100
    );
    context.stroke();
  }
};

export default drawCircle;
