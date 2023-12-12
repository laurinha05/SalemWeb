import Head from 'next/head';
import Rodape from '../components/Rodape';
import Topo from '../components/Topo';
import styles from '../styles/Page.module.css';
import Image from 'next/image';


export default function Home() {
  return (
    <div>
      <Head>
        <title> Salem Web</title>
      </Head>

      <Topo />

      <div className={styles.home}>
        <h1> O seu portal exclusivo acessível sobre animais </h1>
        <h3>Clique no link abaixo para visualizar a descrição dos animais</h3>
        <br></br>
        <Image src="/img/bicho.png" alt="bichos variados" width={500} height={300} />
        <br></br>
        <button type="button"><a href="\objetos"> Acesse aqui para conhecer os cada animal </a></button>
      </div>
      <br></br>
      <br></br>
      <Rodape />
    </div>
  )
}
