import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import api from '../../services/api';

import LogoImf from '../../assets/logo.svg'

export default function NewIncident(props) {

    const history = useHistory();
    
    const ongId = localStorage.getItem('ongId');

    const [title, setTitle] = useState();
    const [description, setDescription] = useState();
    const [value, setValue] = useState();

    async function handleNewIncident(e){
        try{
            e.preventDefault();

            const data = {
                title,
                description,
                value
            }
            await api.post('/incident', data, {
                headers: {
                    Autorization: ongId,
                }});

            history.push('/profile');
        }catch(err){
            alert('Falha na inserção, tente novamente');
        }
    }

    return (
        <div className="new-incident">
           <div  className="content">
                <section>
                    <img src={LogoImf} alt="Be The Hero"/>

                    <h1>Cadastrar novo caso</h1>
                    <p>Descreva o caso detalhadamente para encontar um herói para resolver isso</p>

                    <Link to="/profile" className="back-link">
                            <FiArrowLeft size={16} color="#E02041"/>
                            Voltar para home
                    </Link>
                </section>

                <form onSubmit={handleNewIncident}>
                    <input 
                        onChange={ e => setTitle(e.target.value)} 
                        value={title}
                        placeholder="Titulo do caso"/>
                    <textarea 
                        onChange={ e => setDescription(e.target.value)}
                        value={description}
                        placeholder="Descrição"/>
                    <input 
                        onChange={ e => setValue(e.target.value)}
                        value={value}
                        placeholder="Valor em reais"/>

                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}