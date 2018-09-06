import React from 'react';

export default props => {
    const { info } = props;
    const list = info().payload;
    return (
        <div className="row noticia">
            <div className="col-md-12">
                <h4 className="titulo-chamada">INFORMAÇÃO RELEVANTE</h4>
            </div>
            {list.map(
                info => (
                    <div className="col-sm-4" key={info.id}>
                        <a href="#">
                            <img className="img-responsive" src={info.imagem} />
                            <div className="date">{info.data}</div>
                            <h2>{info.titulo}</h2>
                            <p>{info.descricao}</p>
                        </a>
                    </div>
                )
            )}
        </div>
    )
}