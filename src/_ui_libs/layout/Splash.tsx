import React from 'react';
import { Wrap } from '../_index';

export function Splash() {
  return (
    <Wrap height="100%" align="center" crossAlign="center" css={{ flex: 1 }}>
      <AppIcon />
    </Wrap>
  );
}

function AppIcon() {
  return (
    <svg
      width="70"
      height="72"
      viewBox="0 0 410 412"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect y="115" width="297" height="297" rx="80" fill="#C3DAFF" />
      <rect x="37" y="48" width="324" height="324" rx="80" fill="#5798FB" fill-opacity="0.5" />
      <rect x="86" width="324" height="324" rx="86" fill="url(#paint0_linear_452_49)" />
      <defs>
        <linearGradient
          id="paint0_linear_452_49"
          x1="343.5"
          y1="1.90752e-05"
          x2="148"
          y2="324"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#3682FF" />
          <stop offset="1" stop-color="#2E7BFC" stop-opacity="0.65" />
        </linearGradient>
      </defs>
    </svg>
  );
}
