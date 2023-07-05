import Navbar from "./Navbar";
import { useEffect } from "react";
import { useRouter } from "next/router";
import nProgress from "nprogress";

const Layout = ({ children, footer = true, dark = false }) => {

    const router = useRouter();
    
    useEffect(() => {
    
        const handleRouterChange = url =>{
            nProgress.start();
        }

        router.events.on('routeChangeStart', handleRouterChange)
        router.events.on('routeChangeComplete', () => nProgress.done());
        
        return () => {
            router.events.off('routeChangeStart', handleRouterChange)
        
        }
    }, [])
    
    return(
        <div className={dark ? 'bg-dark' : ''}>  

            <header>
                <Navbar />
            </header>
            
            <main className="container py-4">
                {children}
            </main>

            {
                footer && (
                    <footer className="bg-dark text-light text-center">
                        <div className="container p-4">
                            <h4>&copy; 2023 Portafolio Ariel Montes</h4>
                            <p>todos los derechos reservados.</p>
                        </div>
                    </footer>
                )
            }
        </div>
    )
}


export default Layout;