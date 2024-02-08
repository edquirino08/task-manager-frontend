// eslint-disable-next-line no-unused-vars
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import './dashboard.css';

const Dashboard = () => {
  const { signout } = useAuth();
  const location = useLocation();

  useEffect(() => {
    const userData = location.state?.userData;
    console.log(userData);
  }, [location]);


  const handleLogout = () => {
    signout();
  };

  return (
    <div className='dashboard-container'>
      <div className='top-bar'>
        <img src={LogoImg} alt='Logo' className='logo' />
        <div className='logout-container'>
          <button className='logout' onClick={handleLogout}>
            <FontAwesomeIcon icon={faSignOutAlt} />
            Logout
          </button>
        </div>
      </div>
      <div className='paper-container'>
      </div>
    </div>
  );
}

export default Dashboard;
