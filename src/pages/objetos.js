import React from 'react';
import Rodape from '../components/Rodape';
import Topo from '../components/Topo';
import styles from '../styles/Page.module.css';
import Link from 'next/link';

function Objetos({ objetos }) {

    return (
        <div>

            <Topo />
            <div className={styles.objeto}>
                <title>Animais</title>
                <h1> Lista de animais </h1>
                <h4>Clique no nome e saiba mais informações</h4>
                <br></br>
                {objetos.map((objeto, index) => (
                    <Link href='/profile/[nome]' as={`/profile/${index}`}>
                        <div key={objeto.nome}> <p> {objeto.nome} </p> </div>
                    </Link>


                ))}
                <br></br>
                <button type="button"><a href="\"> Voltar</a></button>
                
            </div>
            <br></br>
            <Rodape />

        </div>
    )
}
export const getStaticProps = (async (context) => {
    const res = await fetch('https://www.bocaweb.com.br/apibocaweb?nome=animal')
    const repo = await res.json()
    const objetos = await repo;
    return {
        props: { objetos }
    }
})
export default Objetos;
