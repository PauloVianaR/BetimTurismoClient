import React, { useState, useEffect } from "react";
import Axios from 'axios';
import {useHistory} from 'react-router-dom';
import './TravelCaribe.css';

export default () => {
    const history = useHistory();

    const [qtdAdulto, setqtdAdulto] = useState(1);
    const [qtdQuarto, setqtdQuarto] = useState(1);
    const [dataida, setdataida] = useState("");
    const [datavolta, setdatavolta] = useState("");
    const [horaida, sethoraIda] = useState("");
    const [horavolta, sethoraVolta] = useState("");
    const [userSection,setUserSection] = useState("");
    const [cidadeida, setCidadeIda] = useState("");
    const [cidadevolta, setCidadeVolta] = useState(""); 
    const [tempoviagem, setTempoViagem] = useState("");

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        const loadAll = async() =>{
            await Axios.get("http://betimturismo-backend.herokuapp.com/login").then((response) => {
                if (response.data.loggedIn == true) {
                    setUserSection(response.data.user[0].login);
                }
            });

            sethoraIda("21:00");
            sethoraVolta("11:35");
            setCidadeIda("BELO HORIZONTE")
            setCidadeVolta("CARIBE")
            setTempoViagem("14h35m")
        }

        loadAll();

    }, []);
    
    const escolheMes = (mes) =>{
        
        let mesChosen = "";
        
        switch (mes) {
            case "01":
                mesChosen="JAN"
            break;

            case "02":
                mesChosen="FEB"
            break;

            case "03":
                mesChosen="MAR"
            break;

            case "04":
                mesChosen="ABR"
            break;

            case "05":
                mesChosen="MAIO"
            break;

            case "06":
                mesChosen="JUM"
            break;

            case "07":
                mesChosen="JUL"
            break;

            case "08":
                mesChosen="AGO"
            break;

            case "09":
                mesChosen="SET"
            break;

            case "10":
                mesChosen="OUT"
            break;

            case "11":
                mesChosen="NOV"
            break;

            case "12":
                mesChosen="DEZ"
            break;
        
            default:
                mesChosen="";
            break;
        }

        return mesChosen;
    }

    const selecionarViagem = () =>{
        if(userSection == ""){
            window.alert("Necessário realizar o login para marcar uma viagem")
        } else if(dataida == "" || datavolta == ""){
            window.alert("Selecione a data de Ida e a data de Volta da viagem")
        } else {
            Axios.post("http://betimturismo-backend.herokuapp.com/api/insertTravel", {
            cidadeida: cidadeida,
            cidadevolta: cidadevolta,
            dataida: dataida,
            datavolta: datavolta,
            horaida: horaida,
            horavolta: horavolta,
            userSection: userSection,
            precoviagem: `${(56 * qtdQuarto) + (4500 * qtdAdulto)}`,
            tempoviagem : tempoviagem,
            }).then(() =>{
                
            })

            window.alert("Viagem Marcada!")
        }
    }    

    return(
        <div>
            <div className = "pesquisaviagem">
                <div className="busca">
                    <label>DESTINO </label>
                    <input type="text" placeholder="🔍 Caribe" className="cidade--busca" />
                </div>
                <div className="data--ida">
                    <label>DATA IDA</label> <br />
                    <input type="date" className="data--ida--busca" onChange={(e) =>{setdataida(e.target.value);}} />
                </div>
                <div className="data--volta">
                    <label>DATA VOLTA</label> <br />
                    <input type="date" className="data--volta--busca" onChange={(e) =>{setdatavolta(e.target.value);}} />
                </div>
                <div className="quartos-pessoas">
                    <label><span role="img" aria-label="cama">🛏</span>QUARTOS: </label> 
                    <input type="number" max="10" min="1" onChange={(e) =>{setqtdQuarto(e.target.value);}} /> <br />
                    <br />
                    <label><span role="img" aria-label="pessoas">👨‍👧</span>PESSOAS: </label>
                    <input type="number" max="10" min="1" onChange={(e) =>{setqtdAdulto(e.target.value);}} />
                </div>
                <div className="hotel-empresaaerea">
                    <label>HOTEL </label> <br />
                    <input type="text" placeholder="🔍 HOTEL X" className="hotel" /> <br />
                    <label>EMPRESA AÉREA: </label> <br />
                    <input type="text" placeholder="🔍 LATAM" className="empresaaerea" />
                </div>
            </div>

            <div className="seleciona--viagem--ida">
                <div className="dataIda">
                    <label><span role="img" aria-label="aviao">✈</span>IDA</label> <br />
                    <label className="dia--mes">
                        {dataida != "" ? `${dataida.substring(8)} de ${escolheMes(dataida.substring(5,7))}. ${dataida.substring(0,4)}` : "Selecione a data ida"}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--ida">
                    <label>CNF</label>
                    <label className="city--name">BELO HORIZONTE</label>
                    <label className="hora--travel">21:00</label>
                </div>                
                <div className="direto--nome">
                    <label className = "direto--label">DIRETO</label>
                </div>
                <div className="dataSDU--ida">
                    <label>SDU</label>
                    <label className="city--name">CARIBE</label>
                    <label className="hora--travel">11:35</label>
                </div>
                <div className="tempo--calculo">
                    <label>14h35m</label>
                </div>
            </div>

            <div className="seleciona--viagem--volta">
                <div className="dataVolta">
                    <label><span role="img" aria-label="aviao">✈</span>VOLTA</label> <br />
                    <label className="dia--mes">
                        {datavolta != "" ? `${datavolta.substring(8)} de ${escolheMes(datavolta.substring(5,7))}. ${datavolta.substring(0,4)}` : "Selecione a data volta"}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--volta">
                    <label>CNF</label>
                    <label className="city--name">CARIBE</label>
                    <label className="hora--travel">21:00</label>
                </div>                
                <div className="direto--nome">
                    <label className = "direto--label">DIRETO</label>
                </div>
                <div className="dataSDU--volta">
                    <label>SDU</label>
                    <label className="city--name">BELO HORIZONTE</label>
                    <label className="hora--travel">11:35</label>
                </div>
                <div className="tempo--calculo">
                    <label>14h35m</label>
                </div>
            </div>

            <div className="seleciona--viagem--ida--indireto">
                <div className="data--ida--indireto">
                    <label><span role="img" aria-label="aviao">✈</span>IDA</label> <br />
                    <label className="dia--mes">
                        {dataida != "" ? `${dataida.substring(8)} de ${escolheMes(dataida.substring(5,7))}. ${dataida.substring(0,4)}` : "Selecione a data ida"}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--ida">
                    <label>CNF</label>
                    <label className="city--name">BELO HORIZONTE</label>
                    <label className="hora--travel">07:50</label>
                </div>                
                <div className="direto--nome">
                    <label className = "direto--label">INDIRETO</label>
                </div>
                <div className="dataSDU--ida">
                    <label>SDU</label>
                    <label className="city--name">CARIBE</label>
                    <label className="hora--travel">22:50</label>
                </div>
                <div className="tempo--calculo">
                    <label>15h00m</label>
                </div>
            </div>

            <div className="seleciona--viagem--volta--indireto">
                <div className="data--volta--indireto">
                    <label><span role="img" aria-label="aviao">✈</span>IDA</label> <br />
                    <label className="dia--mes">
                        {datavolta != "" ? `${datavolta.substring(8)} de ${escolheMes(datavolta.substring(5,7))}. ${datavolta.substring(0,4)}` : "Selecione a data volta"}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--ida">
                    <label>CNF</label>
                    <label className="city--name">CARIBE</label>
                    <label className="hora--travel">07:50</label>
                </div>                
                <div className="direto--nome">
                    <label className = "direto--label">INDIRETO</label>
                </div>
                <div className="dataSDU--ida">
                    <label>SDU</label>
                    <label className="city--name">BELO HORIZONTE</label>
                    <label className="hora--travel">22:50</label>
                </div>
                <div className="tempo--calculo">
                    <label>15h00m</label>
                </div>
            </div>
            
            <div className="paymentarea">
                <div className="head">
                    <label className="preco--info--head">PREÇO POR ADULTO</label>
                    <label className="preco--adulto--reais">R$4500</label>
                </div>
                <div className="price--single">
                    <label className="qtd--adulto">{qtdAdulto} ADULTO{qtdAdulto > 1 ? "S" : ""}</label>
                    <label className="valor--adulto">R${4500 * qtdAdulto}</label>
                </div>
                <div className="taxas">
                    <label className="taxa--info">IMPOSTOS, TAXAS E <br /> ENCARGOS</label>
                    <label className="valor--adulto">R${56 * qtdQuarto}</label>
                </div>
                <div className="tipo--viagem">
                    <label className="tipo--info">TIPO VIAGEM</label>
                    <label className="valor--adulto">DIRETO</label>
                </div>
                <div className="preco--final">
                    <label className="preco--final--info">PREÇO FINAL</label>
                    <label className="preco--final--valor">R${(56 * qtdQuarto) + (4500 * qtdAdulto)}</label>
                    <input type="submit" className="btn--select--price" value="SELECIONAR" onClick={selecionarViagem} />
                </div>
            </div>
        </div>        
    )
} 