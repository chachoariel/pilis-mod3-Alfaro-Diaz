import { useContext, useEffect } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { UserContext } from '../../context/UserContext';
import logo from '../../assets/logo.png';
import './Navigation.css';
import { MdAddLocationAlt } from "react-icons/md";

const Navigation = () => {
    const { currentUser, setCurrentUser } = useContext(UserContext);

    useEffect(() => {
        const userStored = localStorage.getItem('currentUser')
        //console.log({userStored})
        if (userStored) {
            setCurrentUser(JSON.parse(userStored))
        }
    }, [])

    const handleSignOut = () => {
        setCurrentUser(null);
    };

  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={logo} alt='No hay imagen' className='logo' />
        </Link>
        <div className='nav-links-container'>
            {/* {currentUser ? (
                <Link className='nav-link' to='place/create'>
                    <MdAddLocationAlt className='add-place'/>
                    Nuevo Lugar
                </Link>
            ) : (
                <span className='nav-link'>Nuevo Lugar</span>
            )} */}

            <Link className='nav-link' to='place/create'>
                Nuevo Lugar
            </Link>

            {currentUser ? (
                <span className='nav-link' onClick={handleSignOut}>
                    Cerrar Sesion
                </span>
            ) : (
                <Link className='nav-link sign-in' to='/login'>
                    Iniciar Sesion
                </Link>
            )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

    export default Navigation;
