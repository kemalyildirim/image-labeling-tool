import { useEffect, useRef } from "react";

export default function Canvas({
  width,
  height,
  src,
}: {
  width: number;
  height: number;
  src: string;
}) {
  const myCanvas = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const context = myCanvas.current?.getContext("2d");
    const image = new Image();
    image.src = src;
    image.onload = () => {
      context?.drawImage(image, 0, 0, 500, 500);
    };
  }, []);
  return <canvas ref={myCanvas} width={width} height={height} />;
}
