export type ClusterProps = {
    children?: React.ReactNode;
    justify?: "justify-start" | "justify-end" | "justify-center" | "justify-between" | "justify-around" | "justify-evenly";
    align?: "items-start" | "items-end" | "items-center" | "items-baseline" | "items-stretch";
    space?: "gap-1" | "gap-2" | "gap-3" | "gap-4" | "gap-5" | "gap-6" | "gap-7" | "gap-8" | "gap-9" | "gap-10" | "gap-11" | "gap-12" | "gap-14" | "gap-16" | "gap-20" | "gap-24" | "gap-28" | "gap-32" | "gap-36" | "gap-40" | "gap-44" | "gap-48" | "gap-52" | "gap-56" | "gap-60" | "gap-64" | "gap-72" | "gap-80" | "gap-96;
};

export function Cluster({ children, justify = "justify-start", align = "items-start", space = "gap-4" }: ClusterProps) {
    return <div className={`flex flex-wrap gap-1 ${justify} ${align} ${space}`}>
        {children}
    </div>;
}