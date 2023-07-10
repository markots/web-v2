import React, { CSSProperties } from 'react';
import Svgtext1 from '../component/Features/text';
import Svgtext2 from '../component/Features/text2';

const MarqueeText2 = () => {
  const marqueeContainerStyle: CSSProperties = {
    width: '100%',
    overflow: 'hidden',
  };

  const marqueeContentStyle: CSSProperties = {
    display: 'inline-block',
    whiteSpace: 'nowrap',
    animation: 'marquee-animation 15s linear infinite',
  };

  const keyframesStyle = `
    @keyframes marquee-animation {
      0% {
        transform: translateX(100%);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  `;

  return (
    <div style={marqueeContainerStyle}>
      <style>{keyframesStyle}</style>
      <div style={marqueeContentStyle}>
        <Svgtext2 />
      </div>
    </div>
  );
};

export default MarqueeText2;
