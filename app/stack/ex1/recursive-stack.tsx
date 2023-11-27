export type RecursiveStackProps = {
    children?: React.ReactNode;
    gap?: string;
};

export function RecursiveStack({ children, gap = "space-y-4" }: RecursiveStackProps) {
    // Arbitrary Variants with dynamic value doesn't work with Tailwind?
    // https://tailwindcss.com/docs/just-in-time-mode#arbitrary-variants
    // <div className={`flex flex-col ${gap} [&>*]:${gap}`}>

    // This applies all the children to have the same gap
    // [&_]:space-y-4 [&>*]:space-y-4
    return (
        < div className={`flex flex-col [&_]:${gap} [&>*]:${gap}`}>
            {children}
        </div >
    );
}