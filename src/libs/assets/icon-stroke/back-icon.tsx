import React from 'react';

export default function BackIcon({ size = 24, fill = '#555', ...props }: AssetType) {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' width={size} height={size} viewBox='0 0 22 22'>
      <g id='back-icon' transform='translate(-216 -86)'>
        <rect
          id='사각형_8376'
          data-name='사각형 8376'
          width='22'
          height='22'
          transform='translate(216 86)'
          fill='none'
          opacity='0'
        />
        <path
          id='패스_32763'
          data-name='패스 32763'
          d='M21.558,2.406l-9.408,8.2a1.445,1.445,0,0,1-1.955.024l-9.749-8A1.429,1.429,0,0,1,0,1.614a1.4,1.4,0,0,1,.427-1A1.428,1.428,0,0,1,1.416.206h.019a1.416,1.416,0,0,1,.953.356l8.739,7.117,8.454-7.3A1.463,1.463,0,0,1,21.56.392,1.4,1.4,0,0,1,22,1.4a1.394,1.394,0,0,1-.442,1.006'
          transform='translate(232 86) rotate(90)'
          fill={fill}
        />
      </g>
    </svg>
  );
}
