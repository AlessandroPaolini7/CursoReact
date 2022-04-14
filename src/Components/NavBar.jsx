import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import CartWidget from "./CartWidget";
import { Link } from "react-router-dom";


export default function NavBar(){



    return(
            <>
            <div className="container-fluid row bg-dark " >
                <h1><Link to='/' className="bg-dark text-white">ElectroShop</Link></h1>
                    <ul className="nav justify-content-center flex-row flex-md-row">
                        <Link to='/category/celulares' className="d-inline-block navbar-brand text-white">
                            Celulares
                        </Link>
                        <Link to='/category/auriculares' className="d-inline-block navbar-brand text-white">
                            Auriculares
                        </Link>
                        <Link to='/category/consolas' className="d-inline-block navbar-brand text-white">
                            Consolas
                        </Link>
                        <Link to='/category/parlantes' className="d-inline-block navbar-brand text-white">
                            Parlantes
                        </Link>
                        <Link to='/category/tablets' className="d-inline-block navbar-brand text-white">
                            Tablets
                        </Link>
                        <Link to='/category/hardware' className="d-inline-block navbar-brand text-white">
                            Hardware
                        </Link>
                        <li className="d-inline-block navbar-brand text-white">
                            <CartWidget/>
                        </li>
                    </ul>
                </div>
                
            </>
    )
}