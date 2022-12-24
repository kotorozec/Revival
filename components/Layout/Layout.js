import Navbar from "./Navbar";
import Footer from "./Footer";
import BackToTopButton from "../Buttons/BackToTopButton";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>

            <div>
                <main className={"min-h-[80vh]"}>
                    {children}
                    <BackToTopButton/>
                </main>
            </div>
            <Footer/>
        </>
    )
}
export default Layout