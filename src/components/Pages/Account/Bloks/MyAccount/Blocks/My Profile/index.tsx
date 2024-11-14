import React from 'react' 
import { HEADER_NAME } from '../../../../../../../constants';
import Header from './components/Header';
import Button from './components/button';

type IProps = {
  goToProfile: () => void;
  onCloseExstention: () => void;
  handleLogout: () => void;
}

const MyProfile: React.FC<IProps> = ({ goToProfile, onCloseExstention, handleLogout }) => {

  return (
    <>
    <Header
    name={HEADER_NAME}
    goToProfile={goToProfile}
    onCloseExstention={onCloseExstention}
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