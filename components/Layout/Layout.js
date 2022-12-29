import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "../Buttons/BackToTopButton";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
                <main className={"min-h-[80vh]"}>
                    {children}
                    <BackToTopButton/>
                </main>
            <Footer/>
        </>
    )
}
export default Layout