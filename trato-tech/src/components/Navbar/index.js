import styles from './Navbar.module.scss'
import { ReactComponent as Logo} from '../../assets/logo.svg';

const Navbar = () => {
  return (
    <nav className={styles.nav}>
      <Logo className={styles.Logo} />
    </nav>
  )
}

export default Navbar