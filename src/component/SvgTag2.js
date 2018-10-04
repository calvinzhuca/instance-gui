import React, { Component } from 'react';
import svgcontents from '../svg/2.svg'
import { Samy, SvgProxy } from 'react-samy-svg';

export default class SvgTag2 extends Component {

    render () {
      const selectorId = "#"  + this.props.selectorId + "undefined";
      console.log('SvgTag2 selectorId ' + selectorId);

        return (
                <div>
                <Samy svgXML={svgcontents} >
                  <SvgProxy selector={selectorId} fill="blue"/>
                </Samy>
                </div>
                )
    }
};
