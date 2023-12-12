import styles from '../styles/Components.module.css'
import Image from 'next/image';
export default function Topo() {
    return (
        <div className={styles.topo}>
            <br></br>
            <div className='logo'>
            <Image src="/img/logo.png" alt="logo" width={80} height={80} />
            </div>
            <h1>Salem Web</h1>
            <br></br>
        </div>
    )
}
