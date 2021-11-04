import React from 'react';
import './Footer.css';

export default () =>{
    return(
        <div className="Footer">
            <footer>
                <div id="direitos">
                    <label>Betim Turismo LTDA. Todos os direitos reservados</label>
                </div>
                <div id="redes">
                    <tr>
                        <td id="insta"><a href="https://instagram.com">Instagram</a></td>
                        <td>|</td>
                        <td id="fb"><a href="https://facebook.com">Facebook</a></td>
                    </tr>
                </div>
            </footer>
        </div>
    )
}