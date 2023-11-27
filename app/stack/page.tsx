import { Stack } from "@/app/components/stack";
import { Box } from "@/app/components/box";
import Link from "next/link";

export default function StackPage() {
  return (
  	<Stack>
		<Link href="/stack/ex1">Recursion</Link>
		<Link href="/stack/ex2">Nested Variants</Link>
		<Link href="/stack/ex3">Example 3</Link>
	</Stack>
  );
}
