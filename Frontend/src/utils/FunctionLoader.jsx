
import { DotLottieReact } from '@lottiefiles/dotlottie-react';
import React from 'react';
const FunctionLoader = ({ size = 180, text = "Loading...", className = "" }) => {
  return (
    <div className={`w-full flex items-center justify-center ${className}`}>
      <div className="flex flex-col items-center justify-center gap-1 text-primary">
        <div style={{ width: size }}>
          <DotLottieReact
            src="https://lottie.host/2b4d451b-92df-488a-bea3-c628d9606fe0/4ceMhldRjJ.lottie"
            loop
            autoplay
          />
        </div>
        <span className="text-sm font-body">{text}</span>
      </div>
    </div>
  );
};

export default FunctionLoader;
