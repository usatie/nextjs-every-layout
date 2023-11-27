import { Center } from "@/app/components/center";

export function Container({ children }: { children: React.ReactNode }) {
    return <div className="p-8">
        <Center>
            {children}
        </Center>
    </div>;
}