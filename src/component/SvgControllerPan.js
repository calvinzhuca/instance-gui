import React, { Component } from 'react';

import {ReactSVGPanZoom} from 'react-svg-pan-zoom';
import { SvgLoader, SvgProxy } from 'react-svgmt';


export default class SvgControllerPan extends Component {

  constructor(props, context) {
    super(props, context);
    this.Viewer = null;
  }

  componentDidMount() {
    this.Viewer.fitToViewer();
  }



    render () {
        return (

                <div>
                    <ReactSVGPanZoom
                      style={{border: "1px solid black"}}
                      width={800} height={400} ref={Viewer => this.Viewer = Viewer}
                      onClick={event => console.log('click', event.x, event.y, event.originalEvent)}
                      onMouseUp={event => console.log('up', event.x, event.y)}
                      onMouseMove={event => console.log('move', event.x, event.y)}
                      onMouseDown={event => console.log('down', event.x, event.y)}>

                          <svg width='800' height='400'>
                              <SvgLoader svgXML={this.props.svgcontents} style={{width:'100%', height:'20%', border:'solid 0px'}}>
                                    <SvgProxy selector={this.props.previousSelector} fill="black"/>
                                    <SvgProxy selector={this.props.currentSelector} fill="red"/>
                              </SvgLoader>
                          </svg>
                      </ReactSVGPanZoom>

                </div>
                )
    }
};
