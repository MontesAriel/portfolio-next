import Layout from "../components/Layout";


const _error = ({ statusCode }) => {
    return(
        <Layout>
            {
                statusCode ? (
                    <p className="text-center"> No se pudo cargar esta página: Status Code {statusCode}</p>
                ) : (
                    <p>No se pudo cargar esta página.</p>
                )
            }
            <p className="text-center"> No se pudo cargar tu página.</p>
        </Layout>
    )
}

export default _error;