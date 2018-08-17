import React, { Component } from 'react';
import Footer from '../Template/footer';
import foto1 from '../../assets/img/photo1.jpg';
import foto2 from '../../assets/img/photo2.jpg';
import foto3 from '../../assets/img/photo3.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class HomeBody extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return(
            <div id="corpo" className="dashboard">
                <div className="row chamada ">
                    <div className="col-xs-4">
                        <div className="box">
                            <h5>AVISO IMPORTANTE</h5>
                            <div className="col-md-2 padding-left-right-0 padding-right-10">
                                <span>58</span>
                            </div>
                            <div className="col-md-10 padding-left-right-0"><strong>Informações sobre algum
                                quantitativo</strong></div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="box">
                            <h5>AVISO IMPORTANTE</h5>
                            <div className="col-md-2 padding-left-right-0 padding-right-10">
                                <span>58</span>
                            </div>
                            <div className="col-md-10 padding-left-right-0"><strong>Informações sobre algum
                                quantitativo</strong></div>
                        </div>
                    </div>
                    <div className="col-xs-4">
                        <div className="box">
                            <h5>AVISO IMPORTANTE</h5>
                            <div className="col-md-2 padding-left-right-0 padding-right-10">
                                <span>58</span>
                            </div>
                            <div className="col-md-10 padding-left-right-0"><strong>Informações sobre algum
                                quantitativo</strong></div>
                        </div>
                    </div>
                </div>
                <div className="row acesso">
                    <div className="col-md-12">
                        <h4 className="titulo-chamada">ACESSO RÁPIDO</h4>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="http://www.seduc.ce.gov.br" target="_blank">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="desktop" /></i>
                            </div>
                            <span>SEDUC</span>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="http://intranet.seduc.ce.gov.br" target="_blank">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="wifi" /></i>
                            </div>
                            <span>INTRANET</span>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="#">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="envelope" /></i>
                            </div>
                            <span>WEBMAIL</span>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="#">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="pencil-alt" /></i>
                            </div>
                            <span>SIGE</span>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="#">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="graduation-cap" /></i>
                            </div>
                            <span>ACADÊMICO</span>
                        </a>
                    </div>
                    <div className="col-xs-6 col-sm-4 col-md-2">
                        <a href="#">
                            <div className="box">
                                <i className="fa fa-3x"><FontAwesomeIcon icon="comment-dots" /></i>
                            </div>
                            <span>ATENDIMENTO</span>
                        </a>
                    </div>
                </div>
                <div className="row noticia">
                    <div className="col-md-12">
                        <h4 className="titulo-chamada">INFORMAÇÃO RELEVANTE</h4>
                    </div>
                    <div className="col-sm-4">
                        <a href="#">
                            <img className="img-responsive" src={foto1} />
                            <div className="date">21 de Novembro de 2017</div>
                            <h2>Felis a efficitur accumsan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur
                                accumsan, augue mi</p>
                        </a>
                    </div>
                    <div className="col-sm-4">
                        <a href="#">
                            <img className="img-responsive" src={foto2} />
                            <div className="date">21 de Novembro de 2017</div>
                            <h2>Felis a efficitur accumsan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur
                                accumsan, augue mi sollicitudin lectus</p>
                        </a>
                    </div>

                    <div className="col-sm-4">
                        <a href="#">
                            <img className="img-responsive" src={foto3} />
                            <div className="date">21 de Novembro de 2017</div>
                            <h2>Felis a efficitur accumsan</h2>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur
                                accumsan</p>
                        </a>
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}

export default HomeBody;