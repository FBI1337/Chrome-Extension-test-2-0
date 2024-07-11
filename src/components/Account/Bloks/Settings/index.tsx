import React from 'react'
import Preference from './Blocks/Preference'
import IncognitoMode from './Blocks/IncognitoMode'



const Settings: React.FC = () => {

  return (
  <div> 
    Settings
    <Preference />
    <IncognitoMode />
  </div>
  )
}

export default Settings
