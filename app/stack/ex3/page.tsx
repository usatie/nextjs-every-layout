import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import { Container } from "@/app/components/container";
import { Center } from "@/app/components/center";
import { Button } from "@/app/components/button";

export default function NestedVariantsPage() {
    return (
        <Container>
            <Center intrinsic>
                <div className="w-1/2 h-1/2">
                    <Box>
                        <Stack space="space-y-4">
                            <Stack space="space-y-1">
                                <p className="text-sm font-bold">Name</p>
                                <input type="text" className="w-full bg-black border-2 px-2"></input>
                            </Stack>
                            <Stack space="space-y-1">
                                <p className="text-sm font-bold">Email</p>
                                <input type="email" className="w-full bg-black border-2 px-2"></input>
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
