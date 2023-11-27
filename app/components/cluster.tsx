export type ClusterProps = {
    children?: React.ReactNode;
};

export function Cluster({ children }: ClusterProps) {
    return <div className="flex flex-wrap gap-1">
        {children}
    </div>;
}