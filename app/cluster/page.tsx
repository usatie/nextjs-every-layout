import { Box } from "../components/box";
import { Cluster } from "../components/cluster";
import { Container } from "../components/container";

export default function ClusterExamplePage() {
    return (
        <Container>
            <Box>
                <Cluster>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">Layout</a></Box>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">CSS</a></Box>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">Web Design</a></Box>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">Code</a></Box>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">Front-end</a></Box>
                    <Box padding="px-6 py-1"><a className="underline text-sm font-bold">Development</a></Box>
                </Cluster>
            </Box>
        </Container>

    )
}