import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'

import InputAndLabel from '../../common/form/labelAndInput';
import Grid from '../../common/template/grid';

class MatriculaInicialList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div id="corpo" className="dashboard">
                <div className="row">
                    <div className="col-md-9">
                        <div className="panel panel-default">
                            <div className="panel-heading panel-header-custom">
                                <div className="row">
                                    <div className="col-md-10">
                                        <label htmlFor=""> Acompanhamento - Matricula Inicial </label>
                                    </div>
                                    <div className="col-md-2">
                                        <a href="#" className="pull-right"><FontAwesomeIcon icon="plus-square" /> Novo </a>
                                    </div>
                                </div>
                            </div>
                            <div className="panel-body">
                                <div className="row">
                                    <div className="col-md-11">
                                    </div>
                                    <div className="col-md-1 pull-right">
                                        <select name="limit" id="limit" className="form-control">
                                            <option value="10">10</option>
                                            <option value="20">20</option>
                                            <option value="20">50</option>
                                            <option value="20">100</option>
                                        </select>
                                    </div>
                                </div>
                                <div className="row table-responsive">
                                    <div className="col-md-12">
                                        <table className="table table-striped table-condensed">
                                            <thead>
                                                <tr> 
                                                    <th>
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" /></label>
                                                        </div>    
                                                    </th> 
                                                    <th>Município</th> 
                                                    <th>Região</th> 
                                                    <th>Inep</th> 
                                                    <th>Escola</th> 
                                                    <th></th> 
                                                    <th></th> 
                                                    <th>Status</th> 
                                                    <th>E</th>
                                                    <th>T</th> 
                                                    <th>D</th> 
                                                    <th>A</th> 
                                                </tr> 
                                            </thead> 
                                            <tbody> 
                                                <tr valign="middle"> 
                                                    <td>
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" /></label>
                                                        </div>
                                                    </td> 
                                                    <td>FORTALEZA</td> 
                                                    <td>6</td> 
                                                    <td>23064676</td> 
                                                    <td>EEFM PROFESSORA ALDAGISA BONFIM SOARES</td> 
                                                    <td><button className="btn btn-sm btn-primary">Verificar</button></td> 
                                                    <td><button className="btn btn-sm btn-info">Pendências</button></td>
                                                    <td><i className="fa text-success"><FontAwesomeIcon icon="check-circle"/></i></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                </tr> 
                                                <tr valign="middle"> 
                                                    <td>
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" /></label>
                                                        </div>
                                                    </td> 
                                                    <td>FORTALEZA</td> 
                                                    <td>6</td> 
                                                    <td>23064676</td> 
                                                    <td>EEFM PROFESSORA ALDAGISA BONFIM SOARES</td> 
                                                    <td><button className="btn btn-sm btn-primary">Verificar</button></td> 
                                                    <td><button className="btn btn-sm btn-info">Pendências</button></td>
                                                    <td><i className="fa text-success"><FontAwesomeIcon icon="check-circle"/></i></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                </tr> 
                                                <tr valign="middle"> 
                                                    <td>
                                                        <div className="checkbox">
                                                            <label><input type="checkbox" /></label>
                                                        </div>
                                                    </td> 
                                                    <td>FORTALEZA</td> 
                                                    <td>6</td> 
                                                    <td>23064676</td> 
                                                    <td>EEFM PROFESSORA ALDAGISA BONFIM SOARES</td> 
                                                    <td><button className="btn btn-sm btn-primary">Verificar</button></td> 
                                                    <td><button className="btn btn-sm btn-info">Pendências</button></td>
                                                    <td><i className="fa text-success"><FontAwesomeIcon icon="check-circle"/></i></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                    <td><FontAwesomeIcon icon="check-circle"/></td> 
                                                </tr> 
                                            </tbody> 
                                        </table>
                                    </div>
                                </div>
                                <div className="row">   
                                    <div className="col-md-12">
                                        <label htmlFor="" className="label-pagination-custom pull-right">3 de 3 Registros</label>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <div className="div-custom">
                                        <button className="btn btn-danger btn-sm pull-left"><FontAwesomeIcon icon="trash-alt" /> Excluir</button>
                                        </div>
                                    </div>
                                    <div className="col-md-6">
                                        <nav aria-label="Page navigation" id="paginacao">
                                            <ul className="pagination pagination-sm pull-right">
                                                <li>
                                                <a href="#" aria-label="Previous">
                                                    <span aria-hidden="true">&laquo;</span>
                                                </a>
                                                </li>
                                                <li><a href="#">1</a></li>
                                                <li><a href="#">2</a></li>
                                                <li><a href="#">3</a></li>
                                                <li><a href="#">4</a></li>
                                                <li><a href="#">5</a></li>
                                                <li>
                                                <a href="#" aria-label="Next">
                                                    <span aria-hidden="true">&raquo;</span>
                                                </a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>    
                    <div className="col-md-3">
                        <div className="panel panel-default">
                            <div className="panel-heading panel-header-custom">
                                <i className="fa"><FontAwesomeIcon icon="search" /></i> Buscar 
                                <span className="caret pull-right"></span>
                            </div>
                            <div className="panel-body">
                                <div className="row">  
                                    <Grid cols='12'>
                                        <label htmlFor="description" className="label-search-custom">CREDE:</label>
                                        <select name="crede" id="crede" className='form-control'>
                                            <option value="0">Todas as CREDES</option>
                                        </select>
                                    </Grid>
                                </div>          
                                <div className="row">      
                                    <Grid cols='12'>
                                        <label htmlFor="description" className="label-search-custom">INEP:</label>
                                        <input id="description" className='form-control'
                                            placeholder="Informar o INEP"
                                        />
                                    </Grid>
                                    <Grid cols='12'>
                                        <label htmlFor="description" className="label-search-custom">Escola:</label>
                                        <div className="input-group">
                                            <input id="description" className='form-control'
                                                placeholder="Informar a Escola"
                                            />
                                            <span className="input-group-btn">
                                                <button className="btn btn-default" type="button">
                                                    <FontAwesomeIcon icon="search" />
                                                </button>
                                            </span>
                                        </div>
                                    </Grid>
                                </div>
                                <hr />
                                <div className="row">
                                    <Grid cols='12'>
                                        <div className="btn-group" role="group" aria-label="...">
                                            <button type="button" className="btn btn-custom">
                                                <FontAwesomeIcon icon="search" /> Consultar
                                            </button>
                                            <button type="button" className="btn btn-custom">
                                                <FontAwesomeIcon icon="trash-alt" /> Limpar
                                            </button>
                                        </div>
                                    </Grid>
                                </div>    
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default MatriculaInicialList