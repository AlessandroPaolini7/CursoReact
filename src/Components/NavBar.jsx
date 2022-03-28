import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';


export default function NavBar(){



    return(
            <>
            <div class="container-fluid row bg-dark " >
                <h1 class="bg-dark text-white">ElectroShop</h1>
                    <ul class="nav justify-content-center flex-row flex-md-row">
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Celulares
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Auriculares
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Consolas
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Parlantes
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Notebooks
                            </a>
                        </li>
                        <li class="d-inline-block"><a class="navbar-brand text-white " href="#">
                            Hardware
                            </a>
                        </li>
                    </ul>
                </div>
                
            </>
    )
}