import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import IconCart from "./IconCart";


export default function NavBar(){



    return(
            <>
            <div className="container-fluid row bg-dark " >
                <h1 className="bg-dark text-white">ElectroShop</h1>
                    <ul className="nav justify-content-center flex-row flex-md-row">
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Celulares
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Auriculares
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Consolas
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Parlantes
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Notebooks
                            </a>
                        </li>
                        <li className="d-inline-block"><a className="navbar-brand text-white " href="#">
                            Hardware
                            </a>
                        </li>
                        <li className="d-inline-block">
                            <IconCart/>
                        </li>
                    </ul>
                </div>
                
            </>
    )
}