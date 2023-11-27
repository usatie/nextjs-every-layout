import { Box } from "@/app/components/box";
import { RecursiveStack } from "./recursive-stack";
import { Container } from "@/app/components/container";

export default function RecursionPage() {
	return (
		<Container>
			<RecursiveStack>
				<Box />
				<Box />
				<Box>
					<Box />
					<Box />
				</Box>
				<Box />
			</RecursiveStack>
		</Container>
	);
}
