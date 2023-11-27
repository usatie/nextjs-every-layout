import Link from "next/link";
import { Container } from "../components/container";
import { Stack } from "../components/stack";
import { Box } from "../components/box";
import { Center } from "../components/center";

export default function ClusterExamplePage() {
    return (
        <Container>
            <Center>
                <Stack>
                    <Box padding="px-4 py-2"><Link href="/cluster/1">Tags</Link></Box>
                    <Box padding="px-4 py-2"><Link href="/cluster/2">Header</Link></Box>
                </Stack>
            </Center>
        </Container>
    );
}