import React, { Component } from 'react';


import DefinitionDiagramButton from './DefinitionDiagramButton'
import SvgControllerPan from './SvgControllerPan'

export default class DefinitionDiagrams extends Component {



    render () {
      const sourceShown = {
  			display: this.props.sourceDiagramshown ? "block" : "none"
  		};

      const targetShown = {
  			display: this.props.targetDiagramshown ? "block" : "none"
  		}


      const sourceDisplayText= this.props.sourceDiagramshown ? "Hide Source Diagram" : "Show Source Diagram";
      const targetDisplayText= this.props.targetDiagramshown ? "Hide Target Diagram" : "Show Target Diagram";

        return (
          <table border="0">
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                    <tr>
                      <td>Source: {this.props.sourceInfo.processId}</td>
                      <td>Target: {this.props.targetInfo.processId}</td>
                    </tr>
                      <tr>
                        <td>
                          <DefinitionDiagramButton
                            onButtonClick={this.props.sourceDiagramButtonClick}
                            displayText={sourceDisplayText}
                            sourceDiagramshown={this.props.sourceDiagramshown}
                          />
                        </td>
                        <td>
                          <DefinitionDiagramButton
                            onButtonClick={this.props.targetDiagramButtonClick}
                            displayText={targetDisplayText}
                            isShown={targetShown}
                          />
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td>
                  <h2 style={sourceShown}>
                    Source Process Definition Diagram
                    <SvgControllerPan svgcontents={this.props.sourceInfo.svgFile}
                      previousSelector={this.props.sourcePreviousSelector}
                      currentSelector={this.props.sourceCurrentSelector}
                    />
                  </h2>
                  <h2 style={targetShown}>
                    Target Process Definition Diagram
                    <SvgControllerPan svgcontents={this.props.targetInfo.svgFile}
                      previousSelector={this.props.targetPreviousSelector}
                      currentSelector={this.props.targetCurrentSelector}
                    />
                  </h2>



                </td>
              </tr>

            </tbody>
          </table>

                )
    }


};
