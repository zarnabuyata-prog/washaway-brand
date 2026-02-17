import { useState } from "react";
import { cn } from "@/lib/utils";

interface SmoothImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {}

const SmoothImage = ({ className, onLoad, ...props }: SmoothImageProps) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <img
      {...props}
      className={cn(
        "transition-opacity duration-700 ease-in-out",
        loaded ? "opacity-100" : "opacity-0",
        className
      )}
      onLoad={(e) => {
        setLoaded(true);
        onLoad?.(e);
      }}
    />
  );
};

export default SmoothImage;
