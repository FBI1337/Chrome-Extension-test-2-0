import React from 'react' 
import { HEADER_NAME } from '../../../../../../../constants';
import Header from '../../../../../../Shared/Header/secondHeader';
import Button from '../../../../../../Shared/Button/Logout';

type IProps = {
  onToggleIsShow: () => void;
  onCloseExstention: () => void;
  handleLogout: () => void;
}

const MyProfile: React.FC<IProps> = ({ onToggleIsShow, onCloseExstention, handleLogout }) => {

  return (
    <>
    <Header
    name={HEADER_NAME}
    onToggleIsShow={onToggleIsShow}
    onCloseExstention={onCloseExstention}
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