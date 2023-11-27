import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import { Container } from "@/app/components/container";

export default function NestedVariantsPage() {
	return (
		<Container>
			<Stack gap="space-y-8">
				<Box />
				<Box />
				<Stack gap="space-y-2">
					<Box />
					<Box />
					<Box />
					<Box />
				</Stack>
				<Box />
				<Box />
			</Stack>
		</Container>
	);
}
