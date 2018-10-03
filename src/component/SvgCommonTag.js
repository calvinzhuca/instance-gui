import React, { Component } from 'react';


export default class SvgCommonTag extends Component {

    render () {
        return <svg fill={this.props.fillColor} height={this.props.height} width={this.props.width}>
                  <g>
                    <image
                      x="10"
                      y="197"
                      width="159"
                      height="113"
                      xlinkHref={this.props.src}
                    />
                  </g>
               </svg>;   
    }
}
