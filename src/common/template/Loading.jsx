import React from 'react';
import ReactLoading from 'react-loading';
import Logo from '../../assets/img/logo_brasao.png'
 
const Loading = ({ type, color }) => (
    <div className="loading-template">
        <div className="row">
            <div className="col-md-12">
                <img src={Logo} alt=""/>
            </div>
            <div className="col-md-12">
                <label htmlFor="">Carregando</label>
            </div>
            <ReactLoading type={type} color={color} height={200} width={100} />
        </div>
    </div>
);
 
export default Loading;