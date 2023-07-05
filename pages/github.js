import Link from "next/link";
import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({user, statusCode}) =>{ 

    if(statusCode) {
        return <Error statusCode={statusCode}/>
    }

    return(
        <> 
            <Layout footer={false} dark={true}>
                <div className="row">
                    <div className="col-md-4 offset-md-4">
                        <div className="card card-body text-center">
                            <h1>{user.name}</h1>
                            <img src={user.avatar_url} alt="avatar github"/>
                            <p>{user.bio}</p>
                            <Link 
                                href={user.blog} 
                                target="_blank" 
                                className="btn btn-outline-secondary my-2">
                               Mi Blog
                            </Link>
                            <Link 
                                href={user.html_url} 
                                target="_blank" 
                                className="btn btn-outline-secondary my-2">
                                Ir al Github
                            </Link>
                        </div>
                    </div>
                </div>
            </Layout>
        </>
    )
}

export async function getServerSideProps(){
    const res = await fetch("https://api.github.com/users/MontesAriel");
    const data = await res.json();
    
    const statusCode = res.status > 200 ? res.status : false;

    return{
        props: {
            user: data,
            statusCode
        }
    }
}

export default Github;