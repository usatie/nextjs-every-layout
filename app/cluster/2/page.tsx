import { Cluster } from "../../components/cluster";
import { Container } from "../../components/container";

export default function ClusterExamplePage() {
    return (
        <Container>
            <Cluster justify="justify-between" align="items-center" space="gap-4">
                <div className="bg-white w-32 h-16"></div>
                <Cluster>
                    <a className="underline text-sm">About</a>
                    <a className="underline text-sm">Blog</a>
                    <a className="underline text-sm">Shop</a>
                    <a className="underline text-sm">Contact</a>
                    <a className="underline text-sm">Accessibility</a>
                </Cluster>
            </Cluster>
        </Container>

    )
}