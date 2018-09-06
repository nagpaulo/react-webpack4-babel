import React, { Component } from 'react';
import { CONSTANTS } from '../../common/utils/constants';

class Footer extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="row rodape">
                <div className="col-md-12">
                    <div className="row">
                        <div className="col-md-12">
                            <p className="site">{CONSTANTS.FOOTER1}</p>
                            <p>{CONSTANTS.FOOTER2}</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;