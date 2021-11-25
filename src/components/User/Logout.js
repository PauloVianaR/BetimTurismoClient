import React from "react";
import Axios from "axios";
import {useHistory} from 'react-router-dom';
import './Logout.css';

export default () => {

    Axios.defaults.withCredentials = true;
    const history = useHistory();

    const simClick = async () => {
        await Axios.get("http://betimturismo-backend.herokuapp.com/logoutCookie").then(() =>{
            window.alert("Sessão encerrada!")
        });

        history.push("/login")

        window.location.reload();
    }

    const naoClick = () => {
        history.push("/")
    }

    return (
        <div>
            <h2 className="h2--logout">Deseja mesmo fazer o logout?</h2>
            <div className="botoes--logout">
                <input type="submit" value="Sim" className="sim--logout" onClick={simClick} />
                <input type="submit" value="Não" className="nao--logout" onClick={naoClick} />
            </div>            
        </div>
    )
}