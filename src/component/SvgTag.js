import React, { Component } from 'react';
import { SvgLoader, SvgProxy } from 'react-svgmt';

export default class SvgTag extends Component {
    render () {
        return (

                <div>
                  <SvgLoader svgXML={this.props.svgcontents} style={{width:'100%', height:'20%', border:'solid 0px'}}>
                      <SvgProxy selector={this.props.previousSelector} fill="black"/>
                      <SvgProxy selector={this.props.currentSelector} fill="red"/>
                  </SvgLoader>
                </div>
                )
    }
};
