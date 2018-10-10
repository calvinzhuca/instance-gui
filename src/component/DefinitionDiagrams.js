import React, { Component } from 'react';

import SvgTag from './SvgTag'
import DefinitionDiagramButton from './DefinitionDiagramButton'
import svgcontents1 from '../svg/1.svg'
import svgcontents2 from '../svg/2.svg'


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
                    <SvgTag svgcontents={svgcontents1}
                      previousSelector={this.props.sourcePreviousSelector}
                      currentSelector={this.props.sourceCurrentSelector}
                    />
                  </h2>
                  <h2 style={targetShown}>
                    Target Process Definition Diagram
                    <SvgTag svgcontents={svgcontents2}
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
