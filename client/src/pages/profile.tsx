import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import styles from '@/styles/Home.module.css'


const Profile = () => {
    return ( 
        <>
        <div className={styles.home}>
        <Navbar />
        <Sidebar />  
        
      </div>
        </>
     );
}
 
export default Profile;