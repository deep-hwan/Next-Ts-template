export interface ScrollType {
  scroll?: {
    type?: 'visible' | 'auto' | 'scroll' | 'hidden';
    bar?: boolean;
  };
}

export function ScrollTheme({ scroll }: ScrollType) {
  const { type, bar } = scroll ?? {};

  return {
    overflow: type ?? 'visible',

    '::-webkit-scrollbar': {
      display: bar ? 'flex' : 'none' ?? 'none',
      width: '4px',
      height: '4px',
    },
    '::-webkit-scrollbar-track': {
      backgroundColor: 'transparent',
    },
    '::-webkit-scrollbar-thumb': {
      backgroundColor: '#cccccc',
      borderRadius: '100px',
    },
    '::-webkit-scrollbar-thumb:hover': {
      background: '#e2e2e2',
    },
    '::-webkit-scrollbar-button:start:decrement, ::-webkit-scrollbar-button:end:increment': {
      width: 0,
      height: 0,
      backgroundColor: 'transparent',
    },
  };
}
