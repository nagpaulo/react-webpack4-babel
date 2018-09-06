import React from 'react';
import Loadable from 'react-loadable';
import Loading from '../../common/template/Loading';

export const LoadableLogin = Loadable({
  loader: () => import('../../views/Login/login'),
  loading() {
    return <Loading type="cylon" color="#b7b7b7"/>
  }
});

export const LoadableHome = Loadable({
  loader: () => import('../../views/Home/home'),
  loading() {
    return <Loading type="cylon" color="#b7b7b7"/>
  }
});

export const LoadableMatriculaInicial = Loadable({
  loader: () => import('../../views/Acompanhamento/matriculaInicial'),
  loading() {
    return <Loading type="cylon" color="#b7b7b7"/>
  }
});