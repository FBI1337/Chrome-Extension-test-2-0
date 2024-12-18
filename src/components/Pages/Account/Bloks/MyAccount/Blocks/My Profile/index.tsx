import React from 'react' 
import { HEADER_NAME } from '../../../../../../../constants';
import Header from '../../../../../../Shared/Header/secondHeader';
import Button from '../../../../../../Shared/Button/Logout';

type IProps = {
  handleLogout: () => void;
}

const MyProfile: React.FC<IProps> = ({ handleLogout }) => {

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