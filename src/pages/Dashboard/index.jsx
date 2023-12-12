import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import LogoImg from '../../img/teste.png';
import './dashboard.css';
import useAuth from '../../hooks/useAuth';

const Dashboard = () => {
  const { signout } = useAuth();

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
