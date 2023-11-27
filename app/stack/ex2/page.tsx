import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";

export default function NestedVariantsPage() {
  return (
  <>
	<Stack gap="gap-8">
		<Box />
		<Box />
		<Stack gap="gap-2">
			<Box />
			<Box />
			<Box />
			<Box />
		</Stack>
		<Box />
		<Box />
	</Stack>
	</>
  );
}
