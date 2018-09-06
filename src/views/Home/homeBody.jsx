import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import Footer from '../Template/footer';
import Avisos from './avisos';
import AcessoRapido from './acessoRapido';
import Noticias from './noticias';

import { getAvisos, getInformacoes } from './homeAction';

class HomeBody extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const { getAvisos } = this.props;
        return(
            <div id="corpo" className="dashboard">
                <Avisos avisos={ getAvisos }/>
                <AcessoRapido />
                <Noticias info={ getInformacoes }/>
                <Footer />
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => bindActionCreators({ getAvisos, getInformacoes },dispatch);
export default connect(null,mapDispatchToProps)(HomeBody);