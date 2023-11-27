export type CenterProps = {
    children?: React.ReactNode;
};
export function Center({ children }: CenterProps) {
    return <div className="max-w-prose mx-auto content-box">
        {children}
    </div>;
}