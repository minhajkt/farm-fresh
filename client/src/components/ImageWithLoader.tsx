import React, { useState } from "react";

interface ImageWithLoaderProps {
  src: string;
  alt: string;
  className?: string;
  onLoaded?: () => void; 
}

const ImageWithLoader: React.FC<ImageWithLoaderProps> = ({
  src,
  alt,
  className,
  onLoaded,
}) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  const placeholderBaseClass =
    "absolute inset-0 flex items-center justify-center";

  const handleImageLoad = () => {
    setLoaded(true);
    if (onLoaded) {
      onLoaded(); 
    }
  };

  const handleImageError = () => {
    setLoaded(true); 
    setError(true);
    if (onLoaded) {
      onLoaded(); 
    }
  };

  return (
    <div className="relative w-full h-full overflow-hidden">
      {!loaded && !error && (
        <div className={`${placeholderBaseClass} bg-gray-300 animate-pulse`}>
        </div>
      )}

      {error && (
        <div
          className={`${placeholderBaseClass} bg-red-100 text-red-700 text-sm text-center p-2`}
        >
          Image failed to load
        </div>
      )}

      <img
        src={src}
        alt={alt}
        className={`${className || ""} transition-opacity duration-300 ${
          loaded && !error ? "opacity-100" : "opacity-0"
        } ${error ? "hidden" : ""}`}
        onLoad={handleImageLoad}
        onError={handleImageError}
        loading="lazy"
      />
    </div>
  );
};

export default ImageWithLoader;
