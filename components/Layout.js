import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({children}) => {
    return (
        <>
            <Navbar/>
            <div>
                <main className={"min-h-screen"}>
                    {children}
                </main>
            </div>
            <Footer/>
        </>
    )
}
export default Layout