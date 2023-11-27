export type BoxProps = {
  children?: React.ReactNode;
  padding?: string;
  borderWidth?: string;
};
export function Box({ children, padding = "p-4", borderWidth = "border-4" }: BoxProps) {
  return (
    <div className={`flex flex-col ${padding} border-white ${borderWidth}`}>
      {children}
    </div>
  );
}
