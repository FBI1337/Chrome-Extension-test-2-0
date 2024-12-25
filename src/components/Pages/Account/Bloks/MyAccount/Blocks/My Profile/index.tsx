import React from 'react' 
import { HEADER_NAME } from '../../../../../../../constants';
import Header from '../../../../../../Shared/Header/secondHeader';
import Button from '../../../../../../Shared/Button/Logout';
import { useNavigate } from 'react-router-dom';

const MyProfile: React.FC = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.setItem('isAuthenticated', 'false');
    localStorage.removeItem('token');
    navigate('/');
  }

  return (
    <>
    <Header
    name={HEADER_NAME}
    variant='My Profile'
    />
    <div>
      <Button
      handleLogout={handleLogout}
      />
    </div>
    </>
  )
}

export default MyProfile