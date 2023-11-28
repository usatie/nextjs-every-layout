import { Box } from "../components/box";
import { Container } from "../components/container";
import { Sidebar } from "../components/sidebar";

export default function SidebarExamplePage() {
    return (
        <Container>
            <Sidebar sideWidth="basis-64">
                <Box>
                    <p>Side Bar</p>
                    <p>Side Bar</p>
                    <p>Side Bar</p>
                </Box>
                <Box>Not side bar</Box>
            </Sidebar>
        </Container>
    )
}