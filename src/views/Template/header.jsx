import React, {Component} from 'react';
import logo_brasao from '../../assets/img/logo_brasao.png';
import logo_gov from '../../assets/img/logo_gov.png';
import { CONSTANTS } from '../../common/utils/constants';

class Header extends Component {
    render(){
        return(
            <div id="topo">
                <div className="row cabecalho">
                    <div className="bg-degrader">
                        <div className="col-md-12 padding-left-right-0">
                            <div className="titulo">
                                <h1>{CONSTANTS.TITLE}</h1>
                                <h4>{CONSTANTS.SUBTITLE1} <span>|</span> {CONSTANTS.SUBTITLE2} </h4>
                            </div>
                            <div className="logo-brasao text-right hidden-lg hidden-md">
                                <img src={logo_brasao}/>
                            </div>
                            <div className="logo text-right hidden-xs">
                                <img src={logo_gov}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header;


