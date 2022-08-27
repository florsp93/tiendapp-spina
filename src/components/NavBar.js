import basketLogo from '../assets/navbar-logo.png';

const NavBar = () => {

    return (
        <div class="navBarPrincipal">
            <div className='logoDiv'>
                <img className='logoNavBar' src={basketLogo} />
                <h1 className='navBarBrand'>tiendApp</h1>
            </div>
            <div className="linksNavBarDiv">
                <a className="inicioNavBar selected" href="/">Inicio</a>
                <a href="vehiculos">Vehiculos</a>
                <a href="electronica">Electronica</a>
                <a href="libros">Libros</a>
            </div>
            <div className='logInDiv'>
                <a href="logIn">Log In</a>
            </div>
        </div>
    )
}

export default NavBar;