export interface ShadowType {
  shadow?: {
    x?: number;
    y?: number;
    blur?: number;
    color?: string;
  };
}

export const ShadowTheme = ({ shadow }: ShadowType) => {
  const x = shadow?.x ?? 0;
  const y = shadow?.y ?? 2;
  const blur = shadow?.blur ?? 20;
  const color = shadow?.color ?? 'rgba(0,0,0,0.08)';

  return {
    boxShadow: shadow ? `${x}px ${y}px ${blur}px ${color}` : undefined,
  };
};
