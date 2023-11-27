import { Button } from "../components/button";
import { Center } from "../components/center";
import { Container } from "../components/container";
import { Stack } from "../components/stack";

export default function CenterExamplePage() {
    return (
        <Container>
            <Stack gap="space-y-6">
                <h1 className="text-4xl font-bold">Our documentation</h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Atque molestiae optio numquam tenetur quas, sapiente temporibus, ipsa quam, repudiandae velit soluta maxime cupiditate est suscipit ut esse possimus quae? Et ipsam expedita, itaque rerum earum corporis architecto debitis, at nesciunt id harum assumenda. Eligendi quam odio itaque debitis libero. Architecto!</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis deserunt necessitatibus nostrum similique hic eligendi non placeat repellendus ratione et voluptas quas laborum illo sapiente numquam odio est, voluptate magni id? Repudiandae voluptatibus, molestiae iste exercitationem impedit voluptate quisquam eos laudantium doloribus velit itaque adipisci rem corporis vitae sit. Numquam.</p>
                <Center intrinsic>
                    <Button>Launch demo</Button>
                </Center>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Et praesentium rem, voluptatum officiis a fugit dolorem doloremque corrupti velit incidunt ut temporibus quaerat qui ratione earum quam suscipit voluptatem nemo.</p>
            </Stack>
        </Container>
    )
}