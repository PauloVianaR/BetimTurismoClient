import React, {useState} from "react";
import './Section.css';
import Slider from './Slider/Slider';
import {useHistory} from 'react-router-dom';

export default () => {

    const history = useHistory();

    const [destinoSearch,setdestinoSearch] = useState(".");

    const pushTravel = () => {
        
        let destinoUp = destinoSearch.toUpperCase().trim();

        switch (destinoUp) {
            case "RIO DE JANEIRO":
                history.push("travelSearchRio")
            break;

            case "CARIBE":
                history.push("/travelSearchCaribe")
            break;

            case "MOSCOU":
                history.push("/travelSearchMoscou")
            break;

            case "PARIS":
                history.push("/travelSearchParis")
            break;

            case "ORLANDO":
                history.push("/travelSearchOrlando")
            break;
        
            default:
                history.push("/erro")
            break;
        } 
        
    }

    const consultTravel = () => {
        history.push("/erro")
    }

    return (
        <div className = "section2">

            <div className="busca--pginicial">
                <tr>
                    <td><label className="lblDestino">Procure agora seu destino:</label></td>
                    <td><input type="text" placeholder="Destino" onChange={(e) => {setdestinoSearch(e.target.value);}}></input></td> 
                    <td><input type="submit" value="Busca" onClick={pushTravel} className="btn--busca--destino" ></input></td>
                </tr>
            </div> 
            
            <Slider />

            <p id="fraseconsulta">
                Para adiquirir sua viagem insira a origem, o destino e a data da viagem.
            </p>
            <div id="dadosviagem">
                <tr id="tblDados">
                    <td> <input type="text" placeholder="Origem" id="inputOrigem" /></td>
                    <td></td>
                    <td> <input type="text" placeholder="Destino" id="inputDestino" /></td>
                    <td> <input type="text" placeholder="Data de Saída" id="inputDTSaida" /></td>
                    <td> <input type="text" placeholder="Data de Retorno" id="inputDTRetorno" /></td>
                    <td> <input type="submit" value="Consultar" id="btnConsultar" onClick={consultTravel} /></td>
                </tr>
            </div>
            <div id="infoContato">
                <h2>
                    <u>CONTATO</u>
                </h2>
                <p>Queremos muito ouvir você, nos envie um e-mail? Entraremos em contato com você o mais breve possível</p>
            </div>
            <article id="dadoscontato">
                <h3>contato@betimturismo.com</h3>
                    <div id="labl">
                        <label>(31) 0202-0000</label>
                    </div>
                <h3> Rua Brasil, 100, Betim-MG</h3>
            </article>
            <article id="dadosemail">
                <div id="nomemail">
                    <div id="areaMsgn">
                        <h4 id="mensagem">Mensagem</h4>
                        <textarea name="areamsg" id="areaMensagem" cols="50" rows="10"></textarea>
                        <button type="submit">Enviar</button>
                    </div>
                    <div id="preenchimento">
                        <h4>Nome</h4> 
                        <input type="text" id="nomecontato" />
                        <h4>E-mail</h4>
                        <input type="email" id="emailcont" /> <br />
                        <input type="checkbox" value = "novidades" id="recnovidades" />Receber Novidades
                    </div>
                </div>
            </article>
        </div>
    )
}