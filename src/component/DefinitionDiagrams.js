import React, { Component } from 'react';
import SvgTag from './SvgTag'
import DefinitionDiagramButton from './DefinitionDiagramButton'
import svgcontents1 from '../svg/1.svg'
import svgcontents2 from '../svg/2.svg'


export default class DefinitionDiagrams extends Component {
  constructor (props) {
    super(props)

    this.state = {
			sourceDiagramshown: false,
      targetDiagramshown: false
		};
    this.handleSourceDiagramButtonClick = this.handleSourceDiagramButtonClick.bind(this);
    this.handleTargetDiagramButtonClick = this.handleTargetDiagramButtonClick.bind(this);
  }

  handleSourceDiagramButtonClick(){
    console.log('handleSourceDiagramButtonClick ' + this.state.sourceDiagramshown)
    this.setState({
			sourceDiagramshown: !this.state.sourceDiagramshown
		});
  }

  handleTargetDiagramButtonClick(){
    console.log('handleTargetDiagramButtonClick ' + this.state.targetDiagramshown)
    this.setState({
			targetDiagramshown: !this.state.targetDiagramshown
		});
  }

    render () {
      var sourceShown = {
  			display: this.state.sourceDiagramshown ? "block" : "none"
  		};

      var targetShown = {
  			display: this.state.targetDiagramshown ? "block" : "none"
  		}




        return (
          <table border="1">
            <tbody>
              <tr>
                <td>
                  <table>
                    <tbody>
                      <tr>
                        <td>
                          <DefinitionDiagramButton
                            onButtonClick={this.handleSourceDiagramButtonClick}
                            displayText="Source Diagram"
                          />
                        </td>
                        <td>
                          <DefinitionDiagramButton
                            onButtonClick={this.handleTargetDiagramButtonClick}
                            displayText="Target Diagram"
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
                    <SvgTag
                      selectorId={this.props.sourceNodeStr}
                      svgcontents={svgcontents1}
                    />
                  </h2>

                  <h2 style={targetShown}>
                    Target Process Definition Diagram
                    <SvgTag
                      selectorId={this.props.targetNodeStr}
                      svgcontents={svgcontents2}
                    />
                  </h2>
                </td>
              </tr>
            </tbody>
          </table>

                )
    }


};
