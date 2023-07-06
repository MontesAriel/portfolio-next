import Layout from "../components/Layout";
import Link from "next/link";
import { skills, experiences, projects } from "../profile";
import TypingText from "../components/TypingText";
import FormContact from "../components/FormContact";
import NavbarDesplegable from "../components/NavbarDesplegable";
import { useEffect, useState } from "react";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';

const Index = () => {
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const menuItem = entry.target.getAttribute("id");
          setActiveMenuItem(menuItem);
          centerSectionContent(entry.target);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      observer.observe(section);
    });

    return () => {
      sections.forEach((section) => {
        observer.unobserve(section);
      });
    };
  }, []);

  const [activeMenuItem, setActiveMenuItem] = useState("");

  const handleMenuItemClick = (menuItem) => {
    setActiveMenuItem(menuItem);
    smoothScrollTo(menuItem);
  };

  const smoothScrollTo = (target) => {
    const element = document.getElementById(target);
    const navbarHeight = document.querySelector(".navbar-desplegable").offsetHeight;
    const offset = navbarHeight + 50; // Ajusta el desplazamiento según sea necesario

    if (element) {
        const topPosition =
        element.getBoundingClientRect().top +
        window.scrollY -
        offset +
        window.innerHeight / 2 -
        element.offsetHeight / 2;

      window.scrollTo({
        top: topPosition,
        behavior: "smooth",
      });
    }
  };

  const centerSectionContent = (section) => {
    const sectionContent = section.querySelector(".section-content");

    if (sectionContent) {
      const windowHeight = window.innerHeight;
      const sectionHeight = section.offsetHeight;
      const paddingTop = (windowHeight - sectionHeight) / 2;
      sectionContent.style.paddingTop = `${paddingTop}px`;
    }
  };

  return (
    <>
      <Layout className="container">
        {/* section card image */}
        <NavbarDesplegable activeMenuItem={activeMenuItem} handleMenuItemClick={handleMenuItemClick} />
        <section id="sobre-mi" className="section section-1">
          <div className="col-md-12">
            <div style={{ color: "white" }}>
              <div className="row">
                <div style={{ display: "flex", alignItems: "center", flexDirection: "column" }}>
                  <div>
                    <img style={{ width: "200px" }} src="./avatar3.png" alt="avatar" />
                    <h1 className="h1-name">Ariel Montes</h1>
                  </div>
                  <TypingText />
                </div>

                <div className="sobre-mi section-content">
                  <p>
                    Tengo 27 años, Vivo en Argentina, y hace aproximadamente dos años, entré al mundo IT. Hoy puedo decir
                    que soy un desarrollador full stack (MERN), pero que me gusta más el front. Estudio de forma tanto
                    autodidacta como autónoma. Tengo muchas ganas de seguir aprendiendo y ganar nuevas experiencias.
                    Me considero una persona emprendedora, visionaria, proactiva, que le gusta trabajar tanto en equipo como en forma individual y con ganas de superarme con excelencia mis propios límites.
                  </p>
              
              </div>
            </div>
          </div>
          </div>
            <div className="links-contacto">
                <Link href="https://www.linkedin.com/in/montesariel/" className="links">
                Linkedin
                </Link>
                <Link href="https://www.instagram.com/arieelmontes/" className="links">
                Instagram
                </Link>
            </div>
        </section>

        {/* segunda seccion */}
        <section id="skills" style={{ margin: '200px 0' }}>
  <div className="col-md-12">
    <div className="card-body">
      <h3 style={{ color: 'white', textAlign:'center', marginBottom:'40px' }}>Skills</h3>

      {/* Front-end */}
      <div>
        <h5 style={{ color: 'white' }}>Front-end</h5>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {skills
            .filter((skill) => skill.tecnologies === 'front-end')
            .map(({ image, tecnologies, description }, i) => (
              <div key={i}>
                <div className="container-img-skill">
                  <img style={{ width: '90px' }} src={image} alt={description} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Back-end */}
      <div>
        <h5 style={{ color: 'white' }}>Back-end</h5>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {skills
            .filter((skill) => skill.tecnologies === 'back-end')
            .map(({ image, tecnologies, description }, i) => (
              <div key={i}>
                <div className="container-img-skill">
                  <img style={{ width: '90px' }} src={image} alt={description} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Database */}
      <div>
        <h5 style={{ color: 'white' }}>Database</h5>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {skills
            .filter((skill) => skill.tecnologies === 'base de datos')
            .map(({ image, tecnologies, description }, i) => (
              <div key={i}>
    
                <div className="container-img-skill">
                  <img style={{ width: '90px' }} src={image} alt={description} />
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Others */}
      <div>
        <h5 style={{ color: 'white' }}>Others</h5>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          {skills
            .filter((skill) => skill.tecnologies === 'otros')
            .map(({ image, tecnologies, description }, i) => (
              <div key={i}>
                <div className="container-img-skill">
                  <img style={{ width: '90px' }} src={image} alt={description} />
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  </div>
</section>

        {/* Portfolio */}
        <section id="portfolio" className="section section-3">
  
                <h2 className="text-center text-light">Portfolio</h2>
                <Grid sx={{ flexGrow: 1 }} container spacing={2}>
                <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={2}>
                {projects.map(({ image, title, description, lenguajes }, i) => {
                  return (
                    <Grid item key={i}>
                        <Paper sx={{
                            height: 500,
                            width: 400,
                            }}
                            style={{background:"#333", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}
                        >
                        <div className="overflow">
                          <img src={image} alt="projects portfolio" className="card-img" />
                        </div>
                        <div style={{color:"white", textAlign:"center", marginTop:"10px"}}>
                          <h6 style={{fontSize:"21px", color:"#ff5357"}}>{title}</h6>
                          <p>{description}</p>
                          <p>{lenguajes}</p>
                          <Link href="#">Ver más</Link>
                        </div>
                      </Paper>
                    </Grid>
                  );
                })}
              </Grid>
            </Grid>
          </Grid>
        </section>

        {/* <Grid sx={{ flexGrow: 1 }} container spacing={2}>
            <Grid item xs={12}>
                <Grid container justifyContent="center" spacing={spacing}>
                {proyects.map(({ image, title, description, lenguajes }, i) => (
                    <Grid key={i} item>
                    <Paper
                        sx={{
                        height: 400,
                        width: 300,
                        }}
                        style={{background:"#333"}}
                    />
                    <div className="overflow">
                          <img src={image} alt="projects portfolio" className="card-img" />
                        </div>
                      <h6>{title}</h6>
                          <p>{description}</p>
                          <p>{lenguajes}</p>
                          <Link href="#">Ver más</Link>
                    </Grid>
                ))}
                </Grid>
            </Grid>
        </Grid> */}

        <section id="contacto" style={{ margin: "220px 0" }} >
          <div >
            <FormContact />
          </div>
        </section>
      </Layout>
    </>
  );
};

export default Index;
