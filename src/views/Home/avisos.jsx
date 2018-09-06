import React from 'react';

export default props => {
    const { avisos } = props;
    const list = avisos().payload;
    return(
        <div className="row chamada ">
            {list.map( 
                aviso => (
                    <div className="col-xs-4" key={aviso.id}>
                        <div className="box">
                            <h5>{aviso.titulo.toUpperCase()}</h5>
                            <div className="col-md-2 padding-left-right-0 padding-right-10">
                                <span>{aviso.quantidade}</span>
                            </div>
                            <div className="col-md-10 padding-left-right-0">
                                <strong>{aviso.mensagem}</strong>
                            </div>
                        </div>
                    </div>
                )
            )}    
        </div>
    )
}