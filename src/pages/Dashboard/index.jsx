import React from 'react';
import './dashboard.css';
import { useLocation } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import LogoImg from '../../img/teste.png';
import { FiSettings, FiLogOut } from 'react-icons/fi';


const Dashboard = () => {
  const { signout } = useAuth();
  const location = useLocation();

  React.useEffect(() => {
    const userData = location.state?.userData;
    console.log(userData);
  }, [location]);


  const handleLogout = () => {
    signout();
  };

  return (
    <div className='dashboard-container'>
      <div className='logo-container'>
        <img src={LogoImg} alt='Logo' className='logo' />
        <FiLogOut className='logout-button' onClick={handleLogout} />
      </div>
      <div className='options-container'>
        <FiSettings className='settings-button' onClick={handleLogout} />
      </div>
    </div>
  );
}

export default Dashboard;
