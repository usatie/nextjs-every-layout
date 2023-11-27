import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import { Center } from "@/app/components/center";
import Link from "next/link";

export default function StackPage() {
	return (
		<Stack>
			<Center>
				<Stack>
					<Box padding="px-4 py-2"><Link href="/stack/ex1">Recursion</Link></Box>
					<Box padding="px-4 py-2"><Link href="/stack/ex2">Nested Variants</Link></Box>
					<Box padding="px-4 py-2"><Link href="/stack/ex3">Example 3</Link></Box>
				</Stack>
			</Center>
		</Stack>
	);
}
