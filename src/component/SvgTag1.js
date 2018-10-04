import React, { Component } from 'react';

import svgcontents from '../svg/1.svg'
import { Samy, SvgProxy } from 'react-samy-svg';

export default class SvgTag1 extends Component {
    render () {
      const selectorId = "#"  + this.props.selectorId + "undefined";
      console.log('SvgTag1 selectorId ' + selectorId);
        return (

                <div>
                <Samy svgXML={svgcontents} >
                  <SvgProxy selector={selectorId} fill="red"/>
                </Samy>
                </div>
                )
    }
};
