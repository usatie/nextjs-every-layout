export type RecursiveStackProps = {
    children?: React.ReactNode;
    gap?: string;
};

export function RecursiveStack({ children, gap = "gap-4" }: RecursiveStackProps) {
    // Arbitrary Variants with dynamic value doesn't work with Tailwind?
    // https://tailwindcss.com/docs/just-in-time-mode#arbitrary-variants
    // <div className={`flex flex-col ${gap} [&>*]:${gap}`}>
    return (
        < div className={`flex flex-col ${gap} [&>*]:gap-4`}>
            {children}
        </div >
    );
}