import useCanvasCursor from "./hooks/useCanvasCursor";

const CanvasCursor = () => {
  useCanvasCursor();
  return <canvas id="canvas" />;
};

export default CanvasCursor;
