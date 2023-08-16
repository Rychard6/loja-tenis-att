import { Link } from "react-router-dom";
import Anuncie from "../pages/anuncie";
export default function Menu() {
    return (
        <nav className="mt-4 fixed top-16 left-0 z-40 w-full">
            <div className="flex items-center justify-center h-12">
                <div className="btn-group">
                    <Link to='/' className="btn w-40 hover:bg-hb">Home</Link>
                    <button className="btn w-40 hover:bg-hb">mulheres</button>
                    <button className="btn w-40 hover:bg-hb">Homens</button>
                    <button className="btn w-40 hover:bg-hb">Travesti</button>
                    <Link to="/anuncie" className="btn w-40 hover:bg-hb">Anuncie</Link>
                    <button className="btn w-40 hover:bg-hb">Vips</button>
                    <Link to="/sobre" className="btn w-40 hover:bg-hb">Sobre</Link>
                </div>
            </div>
        </nav>
    );
}
