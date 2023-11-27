export type ButtonProps = {
    children?: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
    return <button className="bg-white text-black font-bold py-2 px-8">
        {children}
    </button>;
}