import { Box } from "@/app/components/box";
import { RecursiveStack } from "./recursive-stack";
import { Container } from "@/app/components/container";
import { Center } from "@/app/components/center";

export default function RecursionPage() {
	return (
		<Container>
			<Center>
				<RecursiveStack>
					<Box />
					<Box />
					<Box>
						<Box />
						<Box />
					</Box>
					<Box />
				</RecursiveStack>
			</Center>
		</Container>
	);
}
