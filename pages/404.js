import Layout from "../components/Layout";
import Link from "next/link";

const notFound = () => (
    <Layout>
        <div className="text-center">
            <h1>Error 404</h1>
            <p>Esta página no existe, por favor, retorna al 
                <Link href="/"> inicio.</Link>
            </p>
        </div>
    </Layout>
)

export default notFound;