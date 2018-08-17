import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import Menu from './menu'
import Header from './header';
import * as sessionActions from '../Login/loginAction';

class Template extends Component {
    constructor(props){
        super(props);
    }

    render(){
        const { actions, user, authenticated, view } = this.props;
        const View = view;
        return (
            <div className="table-layout">
                <Menu actions={actions} user={user} authenticated={authenticated}/>
                <div className="table-cell">
                    <div className=" row margin-left-rigth-15">
                        <Header />
                        <View />
                    </div>
                </div>
            </div>
        )
    }
}
const { object, bool } = PropTypes;

Template.propTypes = {
    actions: object.isRequired,
    user: object.isRequired,
    authenticated: bool.isRequired
};

const mapStateToProps = (state) => ({
    user: state.session.user,
    authenticated: state.session.authenticated
});

const mapDispatchToProps = (dispatch) => {
    return {
        actions: bindActionCreators(sessionActions, dispatch)
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Template);