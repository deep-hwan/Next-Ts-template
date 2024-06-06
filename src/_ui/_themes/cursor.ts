export interface CursorType {
  cursor?: 'default' | 'grab' | 'pointer' | 'zoom';
}

export const CursorTheme = ({ cursor, onClick }: CursorType & { onClick?: any }) => {
  return {
    cursor: onClick ? 'pointer' : cursor,
    userSelect: onClick && 'none',
  };
};
