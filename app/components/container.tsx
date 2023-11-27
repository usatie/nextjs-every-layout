export function Container({ children }: { children: React.ReactNode }) {
    return <div className="bg-white p-6">
        <div className="p-6 bg-black">
            {children}
        </div>
    </div>;
}