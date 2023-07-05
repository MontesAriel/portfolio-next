import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";
// import { Canvas } from "react-three-fiber";
// import AvatarEscene from "../components/AvatarEscene";
import TypingText from "../components/TypingText";

const Index = () => (
    <>
        <Layout> 
            {/* section card image */}

            <section>
                <div className="col-md-12">
                    <div style={{color:"white"}}>
                        <div className="row">
                                <div style={{display:'flex', alignItems:'center', flexDirection:'column'}}>
                                    <div>
                                        <img style={{width:'200px'}} src="./avatar3.png" alt="avatar"/>
                                        <h1 className="h1-name">Ariel Montes</h1>
                                    </div>
                                <TypingText />
                                </div>

                                 <div className="sobre-mi">   
                                    <p > Tengo 27 años, Vivo en Argentina, y hace aproximadamente dos años, entré al mundo IT. Hoy puedo decir que soy un desarrollador full stack (MERN), pero que me gusta más el front.
                                        Estudio de forma tanto autodidacta como autónoma. Tengo muchas ganas de seguir aprendiendo y ganar nuevas experiencias. 
                                        Me considero una persona emprendedora, visionaria, proactiva, que le gusta trabajar tanto en equipo como en forma individual y con ganas de superarme con excelencia mis propios límites.
                                    </p>
                                </div>
                                <div className="links-contacto">
                                    <Link href="/" className="links">Contacto</Link>
                                    <Link href="/" className="links">Linkedin</Link>
                                    <Link href="/" className="links">Instagram</Link>
                                </div>

                        </div>
                    </div>
                </div>
            </section>
      

            {/* segunda seccion */}
            <section>
                
                    <div className="col-md-12">                     
                        <div className="card-body">
                                <h3 style={{color:'white'}}>Skills</h3>
                                <div style={{display:'flex', justifyContent:'center'}}>
                                    {
                                        skills.map(({skill, porcentaje, image, description}, i) => {
                                            return(
                                                <div  key={i}>
                                                    <h5>{skill}</h5>
                                                    <div className="container-img-skill">
                                                        <img style={{width:'90px'}}src={image} alt={description}/>
                                                    </div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                           
                        </div>
                    </div>
                </section>

                    <section>
                        <div style={{marginTop:'30px'}} className="col-md-12">
                        <div style={{color:'white'}}>
                            <div className="card-body">
                                <h2>Experiencia</h2>

                                <ul>
                                    {experiences.map(({title, duration, position, description}, i) => {
                                        return(
                                        <li key={i}>
                                            <h4>{title}</h4>
                                            <h6>{duration}</h6>
                                            <h5>{position}</h5>
                                            <p>{description}</p>
                                        </li>
                                        )
                                    })}
                                </ul>
                                </div> 
                            </div>
                        </div>
                    </section>

                
           

            {/* Portfolio */}
            <main>
                <div className="row">
                    <div className="col-md-12"></div>
                    <div className="card card-body bg-dark">
                        <div className="row">
                            <div className="col-md-12">
                                <h2 className="text-center text-light">Portfolio</h2>
                            </div>
                            
                            {projects.map(({image, title, description, lenguajes}, i) =>{
                                return(
                                    <div className="col-md-4 p-2" key={i}>
                                        <div className="card h-100">
                                            <div className="overflow"> 
                                                <img 
                                                    src={image} 
                                                    alt="projects portfolio"
                                                    className="card-img"
                                                />
                                            </div>
                                            <div className="card-body">
                                                <h6>{title}</h6>
                                                <p>{description}</p>
                                                <p>{lenguajes}</p>
                                                <Link href="#">Ver más</Link>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </main>
        </Layout>
    </>
)

export default Index;