import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import { Container } from "@/app/components/container";
import { Center } from "@/app/components/center";

export default function NestedVariantsPage() {
	return (
		<Container>
			<Center>
				<Stack space="space-y-8">
					<Box />
					<Box />
					<Stack space="space-y-2">
						<Box />
						<Box />
						<Box />
						<Box />
					</Stack>
					<Box />
					<Box />
				</Stack>
			</Center>
		</Container>
	);
}
