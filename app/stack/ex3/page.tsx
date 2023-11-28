import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import { Container } from "@/app/components/container";
import { Center } from "@/app/components/center";
import { Button } from "@/app/components/button";

function Label({ children }: { children?: React.ReactNode }) {
    return <label className="text-sm font-bold">{children}</label>;
}

function Input() {
    return <input type="text" className="w-full bg-black border-2 px-2"></input>;
}

export default function NestedVariantsPage() {
    return (
        <Container>
            <Center intrinsic>
                <div className="max-w-prose h-1/2">
                    <Box>
                        <Stack space="space-y-4">
                            <Stack space="space-y-1">
                                <Label>Name</Label>
                                <Input />
                            </Stack>
                            <Stack space="space-y-1">
                                <Label>Email</Label>
                                <Input />
                                <p className="text-xs">Type correct email address</p>
                            </Stack>
                            <div className="flex flex-row-reverse"><Button>Submit</Button></div>
                        </Stack>
                    </Box>
                </div>
            </Center>
        </Container>
    );
}
