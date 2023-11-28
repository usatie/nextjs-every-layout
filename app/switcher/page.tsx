import { Box } from "../components/box";
import { Center } from "../components/center";
import { Container } from "../components/container";
import { Switcher } from "../components/switcher";

export default function SwitcherPage() {
    return (
        <Container>
            <Center>
                <Switcher threshold="40rem">
                    <Box>CSS</Box>
                    <Box>C++</Box>
                    <Box>C</Box>
                    <Box>Web Development</Box>
                </Switcher>
            </Center>
        </Container>
    );
}