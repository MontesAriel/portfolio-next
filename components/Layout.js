import { useEffect } from "react";
import Navbar from './Navbar'
import { useRouter } from "next/router";
import NProgress from "nprogress";
import 'nprogress/nprogress.css';




const Layout = ({ children, footer = true, dark = false }) => {
  const router = useRouter();

  useEffect(() => {
    const handleStart = (url) => {
      NProgress.set(0.3);
    };

    const handleComplete = () => {
      NProgress.done();
    };

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, []);

  return (
    <div className={dark ? "bg-dark" : ""}>
      <header>
        <Navbar />
      </header>

      <main className="container py-4">{children}</main>

      {footer && (
        <footer className="bg-dark text-light text-center">
          <div className="container p-4">
            <h4>&copy; 2023 Portfolio Ariel Montes</h4>
            <p>todos los derechos reservados.</p>
          </div>
        </footer>
      )}
    </div>
  );
};

export default Layout;
