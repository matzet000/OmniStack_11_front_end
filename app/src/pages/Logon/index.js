import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi'

import api from '../../services/api';

import './styles.css'
import herosImg from '../../assets/heroes.png'
import LogoImf from '../../assets/logo.svg'

export default function Logon(props) {

    const history = useHistory();

    async function hanndlerlogin(e){
        e.preventDefault();

        try{
            const response = await api.post('/sessions', { id });
            console.log(response.data.name);

            localStorage.setItem('ongId', id);
            localStorage.setItem('ongName', response.data.name);

            history.push('/profile');
        }catch(err){
            alert('Falha no login, tente novamente')
        }
    }

    const [id, setId] = useState('');

    return (
        <div className="logon-container">
            <section className="form">
                <img src={LogoImf} alt="Be The Hero"/>

                <form onSubmit={hanndlerlogin}>
                    <h1>Faça seu logon</h1>

                    <input 
                        placeholder="Sua ID"
                        value={id}
                        onChange={e => setId(e.target.value)}
                    />
                    <button className="button" type="submit">Entrar</button>

                    <Link to="/register" className="back-link">
                        <FiLogIn size={16} color="#E02041"/>
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={herosImg} alt="Heros"/>
        </div>
    )
}