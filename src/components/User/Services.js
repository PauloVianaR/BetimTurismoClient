import React, {useState,useEffect} from "react";
import Axios from "axios";
import './Services.css';

export default () => {

    const [userSection,setUserSection] = useState("");
    const [travelsList,setTravelsList] = useState("");
    const [dataIdaFilter, setDIF] = useState("");
    const [dataVoltaFilter, setDVF] = useState("");
    const [index, setIndex] = useState(0);

    Axios.defaults.withCredentials = true;

    useEffect(() => {
        const loadAll = async() =>{
            await Axios.get("http://localhost:3001/login").then((response) => {
                if (response.data.loggedIn == true) {
                    setUserSection(response.data.user[0].login);
                }
            });
        }

        loadAll();

    }, []);
    
    const getTravelL = async() => {
       if(userSection === ""){
           window.alert("Necessário fazer o login para exibir as viagens!");
       } else {
           await Axios.post("http://localhost:3001/api/getTravellsUser",{
                userSection : userSection
                }).then((response) => {
                if(response.data.message){
                    window.alert(response.data.message)
                } else{
                    setTravelsList(response.data.dadosViagens)
                }
            }); 
       }
    }

    const encerraViagem = async () => {
        if(userSection === ""){
            window.alert("Necessário fazer o login encerrar viagens!");
        } else if(travelsList[index].status_viagem === "ENCERRADA"){
            window.alert("Esta viagem já está encerrada!");
        } else {
            await Axios.post("http://localhost:3001/api/FinishTravel", {
                idlugarviagem : travelsList[index].idlugarviagem
            }).then((response) => {
                if(response.data.message){
                    window.alert(response.data.message)

                    getTravelL();
                }
            });
        }
    }

    const getFirstTravel = async () => {
        if(travelsList === ""){
            await getTravelL();

            setIndex(0)
        } else {
            setIndex(0)
        }
    }

    const getLastTravel = async () => {
        if(travelsList === ""){
            await getTravelL();

            travelsList !== "" ? setIndex(travelsList.length - 1) : setIndex(0)
        } else {
            setIndex(travelsList.length - 1)
        }
    }

    const filterTravellDate = async () => {
        if(travelsList === ""){
            await getTravelL();
        }

        if(dataIdaFilter === "" && dataVoltaFilter === ""){
            window.alert("Necessário preencher os filtro de DATA IDA e DATA VOLTA");
        } 
        else{
            getTravelforDate()
        }
    }

    function getTravelforDate() {
        let validator = false;
        
        for (let i = 0; i < travelsList.length; i++) {
            if(travelsList[i].data_ida.substring(0,10) == dataIdaFilter && travelsList[i].data_volta.substring(0,10) == dataVoltaFilter){
                setIndex(i);
                validator = true;
            }            
        }

        if(!validator){
            window.alert("Não existem viagens marcadas para essas datas!")
        }
    }

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

    return (
      <div className="container--services">
        <h3 className="title--service--pag">Serviços de Viagens</h3>
        <div className = "opcoes--filtro">          
            <input type="submit" className="btn--mostra--viagem" value="Exibir viagem mais recente" onClick={() => getLastTravel()} />
            <input type="submit" className="btn--mostra--viagem" value="Exibir primeira viagem" onClick={() => getFirstTravel()} />
            <input type="submit" className="btn--mostra--viagem" value="Buscar viagem por data" onClick={() => filterTravellDate()} />
            <div className="data--search">
                <label>DATA IDA</label>
                <input type="date" onChange={(e) => {setDIF(e.target.value);}} />
            </div>
            <div className="data--search">
                <label>DATA VOLTA</label>
                <input type="date" onChange={(e) => {setDVF(e.target.value);}} />
            </div>
            <input type="submit" className="btn--desmarca--viagem" value="✖  Encerrar esta viagem" onClick={encerraViagem} />       
        </div>
          <section className="lists">
            <div className="viagens--lista">
                <div className="dataIda">
                    <label><span role="img" aria-label="aviao">✈</span>IDA</label> <br />
                    <label className="dia--mes">
                        {travelsList === "" ? "DIA/MES/ANO" : `${travelsList[index].data_ida.substring(8,10)} de ${escolheMes(travelsList[index].data_ida.substring(5,7))}. ${travelsList[index].data_ida.substring(0,4)}`}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--ida">
                    <label>CNF</label>
                    <label className="city--name">
                        {travelsList === "" ? "Cidade/País" : `${travelsList[index].CidadeIda} - ${travelsList[index].PaisIda}`}
                    </label>
                    <label className="hora--travel">{travelsList === "" ? "00:00" : travelsList[index].hora_ida}</label>
                </div>                
                <div className={`direto--nome${travelsList === "" ? "" : (travelsList[index].status_viagem === "ENCERRADA" ? "--encerr" : "")}`}>
                    <label className = "direto--label">{travelsList === "" ? "STATUS" : travelsList[index].status_viagem}</label>
                </div>
                <div className="dataSDU--ida">
                    <label>SDU</label>
                    <label className="city--name">
                        {travelsList === "" ? "Cidade/País" : `${travelsList[index].CidadeVolta} - ${travelsList[index].PaisVolta}`}
                    </label>
                    <label className="hora--travel">{travelsList === "" ? "00:00" : travelsList[index].hora_volta}</label>
                </div>
                <div className="tempo--calculo">
                    <label>{travelsList === "" ? "0h0m" : travelsList[index].tempovoo}</label>
                </div>
            </div>

            <div className="viagens--lista--volta">
                <div className="dataIda">
                    <label><span role="img" aria-label="aviao">✈</span>VOLTA</label> <br />
                    <label className="dia--mes">
                        {travelsList === "" ? "DIA/MES/ANO" : `${travelsList[index].data_volta.substring(8,10)} de ${escolheMes(travelsList[index].data_volta.substring(5,7))}. ${travelsList[index].data_volta.substring(0,4)}`}
                    </label>
                    <input type="radio" checked="true" className="radio-ida1" /><small className="latam">LATAM</small>
                </div>
                <div className="dataCNF--ida">
                    <label>CNF</label>
                    <label className="city--name">
                        {travelsList === "" ? "Cidade/País" : `${travelsList[index].CidadeVolta} - ${travelsList[index].PaisVolta}`}
                    </label>
                    <label className="hora--travel">{travelsList === "" ? "00:00" : travelsList[index].hora_ida}</label>
                </div>                
                <div className={`direto--nome${travelsList === "" ? "" : (travelsList[index].status_viagem === "ENCERRADA" ? "--encerr" : "")}`}>
                    <label className = "direto--label">{travelsList === "" ? "STATUS" : travelsList[index].status_viagem}</label>
                </div>
                <div className="dataSDU--ida">
                    <label>SDU</label>
                    <label className="city--name">
                        {travelsList === "" ? "Cidade/País" : `${travelsList[index].CidadeIda} - ${travelsList[index].PaisIda}`}
                    </label>
                    <label className="hora--travel">{travelsList === "" ? "00:00" : travelsList[index].hora_volta}</label>
                </div>
                <div className="tempo--calculo">
                    <label>{travelsList === "" ? "0h0m" : travelsList[index].tempovoo}</label>
                </div>
            </div>
          </section>
          <div className="info--travel--serv">
            <label className="pay--value">VALOR PAGO: R${travelsList === "" ? "0,00" : travelsList[index].precototal}</label>
            <label>TOTAL VIAGENS: {travelsList === "" ? "0" : travelsList.length}</label>
          </div>
      </div>
    )
}