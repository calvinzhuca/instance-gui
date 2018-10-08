import React, { Component } from 'react';

import { Samy, SvgProxy } from 'react-samy-svg';

export default class SvgTag extends Component {
    render () {
      //this selectorid maps to the svg id, has to start with "#"
      const selectorId = "#"  + this.props.selectorId + "undefined";
      console.log('SvgTag selectorId ' + selectorId);
        return (

                <div>
                <Samy svgXML={this.props.svgcontents} style={{width:'100%', height:'20%', border:'solid 1px'}}>
                  <SvgProxy selector={selectorId} fill="red"/>
                </Samy>
                </div>
                )
    }
};
