import { Box } from "@/app/components/box";
import { RecursiveStack } from "./recursive-stack";


export default function RecursionPage() {
	return (
		<>
			<RecursiveStack>
				<Box />
				<Box />
				<Box>
					<Box />
					<Box />
				</Box>
				<Box />
			</RecursiveStack>
		</>
	);
}
