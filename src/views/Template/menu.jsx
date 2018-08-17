import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import profile from '../../assets/img/profile_renato.jpg';
import { recolheMenu, mouseEnter, mouseLeaves } from './menuFunc';

class Menu extends Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        recolheMenu();

        $(".navbar-default").hover(mouseEnter, mouseLeaves);
        $('.collapsed').click(function(){
            console.log('teste');
        });
    }

    render(){
        const { actions, user, authenticated } = this.props;
        return (
            <div className="table-cell padding-left-right-0 sidebar navbar navbar-default">
                <div className="ultimo-acesso text-center">
                    <div>
                        <FontAwesomeIcon icon="calendar" /> Último Acesso: 12/11/2017
                    </div>
                </div>
                <div className="profile text-center hidden-xs">
                    <img src={ profile } height="60" width="60" alt="Foto do Úsuario" className="img-responsive"/>
                    <div className="nome hidden-xs">Fulano de Tal</div>
                    <div className="cargo">COORDENADORIA REGIONAL</div>
                </div>
                <div className="drawer navbar-header" data-toggle="drawer">
                    <button type="button" className="navbar-toggle" data-toggle="drawer" data-target=".navbar-responsive-collapse">
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                    </button>
                </div>

                <div className="navbar-collapse collapse navbar-responsive-collapse padding-left-right-0 ">
                    <div className="hidden-sm hidden-md hidden-lg">
                        <div className="ultimo-acesso text-center ">
                            <i className="fa fa-calendar" aria-hidden="true"></i> Último Acesso: 12/11/2017
                        </div>
                        <div className="profile text-center ">
                            <img src={ profile } height="40" width="40" alt="Foto do Úsuario"/>
                            <div className="nome">Carol Mendonça</div>
                            <div className="cargo">COORDENADORIA REGIONAL DE DESENVOLVIMENTO</div>
                        </div>
                    </div>
                    <div id="wrapper" className="toggled">
                        <div id="sidebar-wrapper" className="clearfix">
                            <ul className="menu">
                                <li>
                                    <a href="/home">
                                        <i className="fa"><FontAwesomeIcon icon="home" /></i> <span>Início</span> 
                                    </a>
                                </li>
                                <hr />
                                <li className="dropdown-submenu">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseAcompanhamento">
                                        <i className="fa"><FontAwesomeIcon icon="book-open" /></i> 
                                        <span>Acompanhamento</span> </a>
                                    <div id="collapseAcompanhamento" className="panel-collapse collapse out">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <a href="/matricula-inicial">1ª Fase - Matricula Inicial</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#">2ª Fase - Rendimento</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <hr />
                                <li className="dropdown-submenu">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseRelatorio"><i
                                            className="fa"><FontAwesomeIcon icon="file" /></i> <span>Relatórios</span> </a>
                                    <div id="collapseRelatorio" className="panel-collapse collapse out">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <a href="#">Conferência</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <hr />
                                <li className="dropdown-submenu">
                                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseOpcoes"><i
                                            className="fa"><FontAwesomeIcon icon="cogs" /></i> <span>Opções</span> </a>
                                    <div id="collapseOpcoes" className="panel-collapse collapse out">
                                        <ul className="list-group">
                                            <li className="list-group-item">
                                                <a href="#">Alterar Senha</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#">Usuário</a>
                                            </li>
                                            <li className="list-group-item">
                                                <a href="#">Grupos</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <hr />
                                <li className="btn-sair">
                                    <a href="#" onClick={actions.logout}>
                                    <i className="fa">
                                        <FontAwesomeIcon icon="sign-out-alt" color="green" />
                                    </i>
                                    <span>Sair</span> 
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;