import React, { ReactNode } from 'react';

interface GlowingOutlineProps {
  children: ReactNode;
}

const GlowingOutline: React.FC<GlowingOutlineProps> = ({ children }) => {
  return (
    <div
      className={`
        relative p-[5px] rounded 
        bg-[conic-gradient(rgb(61,210,227),rgb(113,80,234),rgb(61,210,227))]
        shadow-[0_0_30px_rgba(0,140,255,0.4),_0_0_60px_rgba(213,75,202,0.4)]
        ml-0 mr-0
        max-xl:ml-5 max-xl:mr-5
        inline-block
      `}
    >
      <div className="rounded bg-[#171f2d] p-0 text-white">
        {children}
      </div>
    </div>
  );
};

export default GlowingOutline;
