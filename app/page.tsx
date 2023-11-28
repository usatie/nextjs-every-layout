import Link from "next/link";
import { Box } from "./components/box";
import { Cluster } from "./components/cluster";
import { Container } from "./components/container";

export default function Home() {
  return (
    <main>
      <Container>
        <Cluster>
          <Box><Link href="/box">Box -&gt;</Link></Box>
          <Box><Link href="/center">Center -&gt;</Link></Box>
          <Box><Link href="/cluster">Cluster -&gt;</Link></Box>
          <Box><Link href="/sidebar">Sidebar -&gt;</Link></Box>
          <Box><Link href="/switcher">Switcher -&gt;</Link></Box>
          <Box><Link href="/stack">Stack -&gt;</Link></Box>
        </Cluster>
      </Container>
    </main>
  )
}
