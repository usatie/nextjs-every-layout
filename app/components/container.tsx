import { Center } from "@/app/components/center";

export function Container({ children }: { children: React.ReactNode }) {
    return <div className="bg-white p-8">
        <div className="p-8 bg-black">
            <Center>
                {children}
            </Center>
        </div>
    </div>;
}