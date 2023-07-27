import Link from "next/link";
import Layout from "../components/Layout";
import Error from "./_error";

const Github = ({user, statusCode}) =>{ 

    if(statusCode) {
        return <Error statusCode={statusCode}/>
    }

    return(
        <> 
            <Layout footer={true} >
                <div style={{width:700}}>
                    <div  className="col-md-4 offset-md-4">
                        <div 
                            style={{background:'#333', color:"#fff", borderRadius:'10px', boxShadow: 'rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset'}} 
                            className="card card-body text-center"
                        >
                            <h1>{user.name}</h1>
                            <img src={user.avatar_url} alt="avatar github"/>
                            <p>{user.bio}</p>

                            <Link 
                                href={user.html_url}
                                style={{color:'#fff'}} 
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