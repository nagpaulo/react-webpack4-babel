import Axios from 'axios';


let avisosMock = [
    {
        "id":1,
        "titulo" : "Informação",
        "quantidade": 719,
        "mensagem" : "Total de Escolas Estaduais no Ceará"
    },
    {
        "id":2,
        "titulo" : "Matricula Inicial",
        "quantidade": 32,
        "mensagem" : "Escolas prontas para migracão 1ª Fase - Matricula Inicial"
    },
    {
        "id":3,
        "titulo" : "Matricula Inicial",
        "quantidade": 687,
        "mensagem" : "Escolas com erros para migração 1ª Fase - Matricula Inicial"
    }
    ,
    {
        "id":4,
        "titulo" : "Data de Corte - Matricula Inicial",
        "quantidade": '30',
        "mensagem" : "Data final para matricula inicial é 30 de Maio de 2018"
    }
];


let informacaoMock = [
    {
        "id":1,
        "data":"21 de Novembro de 2018",
        "imagem":require("../../assets/img/photo1.jpg"),
        "titulo":"Felis a efficitur accumsan",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur accumsan, augue mi sollicitudin lectus"
    },
    {
        "id":2,
        "data":"22 de Novembro de 2018",
        "imagem":require("../../assets/img/photo2.jpg"),
        "titulo":"Felis a efficitur accumsan",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur accumsan, augue mi sollicitudin lectus"
    },
    {
        "id":3,
        "data":"23 de Novembro de 2018",
        "imagem":require("../../assets/img/photo3.jpg"),
        "titulo":"Felis a efficitur accumsan",
        "descricao":"Lorem ipsum dolor sit amet, consectetur adipiscing elit. In laoreet, felis a efficitur accumsan, augue mi sollicitudin lectus"
    }
];

export const getAvisos = () => {
    return {
        type: 'AVISOS_CHANGED',
        payload: avisosMock
    }
}

export const getInformacoes = () => {
    return {
        type: 'INFORMACAO_CHANGED',
        payload: informacaoMock
    }
}