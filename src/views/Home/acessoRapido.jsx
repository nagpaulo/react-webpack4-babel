import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default props => (
    <div className="row acesso">
        <div className="col-md-12">
            <h4 className="titulo-chamada">ACESSO RÁPIDO</h4>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
            <a href="http://www.seduc.ce.gov.br" target="_blank">
                <div className="box">
                    <i className="fa fa-3x"><FontAwesomeIcon icon="desktop" /></i>
                </div>
                <span>SEDUC</span>
            </a>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
            <a href="https://webmailseduc.seduc.ce.gov.br" target="_blank">
                <div className="box">
                    <i className="fa fa-3x"><FontAwesomeIcon icon="envelope" /></i>
                </div>
                <span>WEBMAIL</span>
            </a>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
            <a href="http://sige.seduc.ce.gov.br/" target="_blank">
                <div className="box">
                    <i className="fa fa-3x"><FontAwesomeIcon icon="pencil-alt" /></i>
                </div>
                <span>SIGE</span>
            </a>
        </div>
        <div className="col-xs-6 col-sm-4 col-md-3">
            <a href="http://atendimento.seduc.ce.gov.br/otrs/customer.pl" target="_blank">
                <div className="box">
                    <i className="fa fa-3x"><FontAwesomeIcon icon="comment-dots" /></i>
                </div>
                <span>ATENDIMENTO</span>
            </a>
        </div>
    </div>
)