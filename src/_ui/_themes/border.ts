export interface BorderType {
  border?: {
    solid: number;
    position?: 'all' | 'left' | 'right' | 'top' | 'bottom';
    color?: string;
  };
}

export const BorderTheme = ({ border }: BorderType) => {
  return {
    border:
      !border?.position || border?.position === 'all'
        ? `${border?.solid}px solid ${border?.color}`
        : undefined,
    borderBottom:
      border?.position === 'bottom' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderTop: border?.position === 'top' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderRight:
      border?.position === 'right' ? `${border?.solid}px solid ${border?.color}` : undefined,
    borderLeft:
      border?.position === 'left' ? `${border?.solid}px solid ${border?.color}` : undefined,
  };
};
