import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

export default function Menu() {
    const isMobile = useMediaQuery({ maxWidth: 767 }); // Define um breakpoint para telas menores

    return (
        <nav className={`fixed top-20 left-0 z-40 w-full ${isMobile ? 'h-screen  bg-red-500' : ''}`}>
            <div className={`${isMobile ? 'flex items-center justify-center h-full' : 'flex items-center justify-center h-12'}`}>
                <div className={`btn-group md:flex-row flex-col ${isMobile ? 'h-3/4 md:h-auto' : ''}`}>
                    <Link to='/home/all' className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Home</Link>
                    <Link to='/home/HOMENS' className="btn w-40 hover:bg-hb mb-2 md:mb-0">Homens</Link>
                    <Link to='/home/MULHERES' className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Mulheres</Link> 
                    <Link to='/home/TRAVESTIS' className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Travestis</Link>
                    <Link to="/anuncie" className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Anuncie</Link>
                    <Link to='/home/VIPS' className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Vips</Link>
                    <Link to="/sobre" className="btn w-40 hover:bg-hb mb-2 md:mb-0 ">Sobre</Link>
                </div>
            </div>
        </nav>
    );
}
