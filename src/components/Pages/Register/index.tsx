import React, {useState} from'react'
import styles from './style.module.css'



const Register: React.FC = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className={styles.wrapper}> 
      <header className={styles.header}>VPN</header>
      <form>
        <label>
          <br className={styles.text}>
          Username:
          </br>
          <input className={styles.username} value={username} onChange={e => setUsername(e.target.value)}/>
        </label>
        <label> 
          <br className={styles.text}>
          Password:
          </br>
          <input className={styles.password} value={password} onChange={e => setPassword(e.target.value)}/>
        </label>
      </form>
    </div>

    // <div className={styles.wrapper}>Хуй</div>
  )
}

export default Register
