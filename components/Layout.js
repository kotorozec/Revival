import Navbar from "./Navbar";
import Footer from "./Footer";
import CustomCursor from "./CustomCursor";



const Layout = ({children}) => {
    return (
        <>
            <CustomCursor/>
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