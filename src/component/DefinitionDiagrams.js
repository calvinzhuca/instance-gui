import React, { Component } from 'react';
import SvgTag from './SvgTag'
import DefinitionDiagramButton from './DefinitionDiagramButton'
import svgcontents1 from '../svg/1.svg'
import svgcontents2 from '../svg/2.svg'


export default class DefinitionDiagrams extends Component {
  constructor (props) {
    super(props)


  }



    render () {



        return (
            <div>

              <tr>
                <td>
                  <DefinitionDiagramButton svgcontents={svgcontents1}/>
                </td>
                <td>
                  <DefinitionDiagramButton svgcontents={svgcontents2}/>                
                </td>

              </tr>
              <tr>


              </tr>


            </div>
                )
    }


};
