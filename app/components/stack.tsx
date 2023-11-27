export type StackProps = {
  children?: React.ReactNode;
  gap?: string;
};

export function Stack({ children, gap = "space-y-4" }: StackProps) {
  // Arbitrary Variants with dynamic value doesn't work with Tailwind?
  // https://tailwindcss.com/docs/just-in-time-mode#arbitrary-variants
  // <div className={`flex flex-col ${gap} [&>*]:${gap} [&>*]:rounded [&_*]:border-gray-500`}>
  return (
    < div className={`flex flex-col ${gap} [&>*]:${gap}`}>
      {children}
    </div >
  );
}
