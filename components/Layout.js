import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "./BackToTopButton";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>

            <div>
                <main className={"min-h-fit"}>
                    {children}
                    <BackToTopButton/>
                </main>
            </div>
            <Footer/>
        </>
    )
}
export default Layout