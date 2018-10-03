import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import 'react-dropdown/style.css'

import DropdownNode from './DropdownNode'
import SvgTag1 from './SvgTag1'
import SvgTag2 from './SvgTag2'
import SearchBar from "./SearchBar";


class App extends React.Component {







  render() {
const PRODUCTS = [
  {category: 'Sporting Goods', price: '$49.99', stocked: true, name: 'Football'},
  {category: 'Sporting Goods', price: '$9.99', stocked: true, name: 'Baseball'},
  {category: 'Sporting Goods', price: '$29.99', stocked: false, name: 'Basketball'},
  {category: 'Electronics', price: '$99.99', stocked: true, name: 'iPod Touch'},
  {category: 'Electronics', price: '$399.99', stocked: false, name: 'iPhone 5'},
  {category: 'Electronics', price: '$199.99', stocked: true, name: 'Nexus 7'}
];

const sourceNode = [
  { value: '_4AFFDB6F-2C01-49FB-851A-A330D77C52E1', label: 'beginNode_v1:_4AFFDB6F-2C01-49FB-851A-A330D77C52E1' },
  { value: '_DE006624-FF55-4A7E-97C6-58E69D838DB0', label: 'endNode_v1:_DE006624-FF55-4A7E-97C6-58E69D838DB0' },
  { value: '_2C0FB115-C8E6-49A2-AF2A-3FAA0B6EE0D3', label: 'userInput1:_2C0FB115-C8E6-49A2-AF2A-3FAA0B6EE0D3'}

];

const targetNode = [
  { value: '_89BBE3F7-5F0A-47F3-BD81-AEA2B2783A89', label: 'beginNode_v2:_89BBE3F7-5F0A-47F3-BD81-AEA2B2783A89' },
  { value: '_09DECC05-5BBC-4B93-B1BF-F4EB54B10D17', label: 'endNode_v2:_09DECC05-5BBC-4B93-B1BF-F4EB54B10D17' },
  { value: '_CD1467DE-1C78-4DD0-BC33-EA2556D57969', label: 'userInput1:_CD1467DE-1C78-4DD0-BC33-EA2556D57969'},
  { value: '_F95A804A-46EA-45B8-98DB-60A46431CC68', label: 'userInput2:_F95A804A-46EA-45B8-98DB-60A46431CC68' },
  { value: '_DE006624-FF55-4A7E-97C6-58E69D838DB0', label: 'middleNode_v2:_DE006624-FF55-4A7E-97C6-58E69D838DB0'}
];



const sourceDiagram = () => (
  <div>
    <SvgTag1 />
  </div>
);

const targetDiagram = () => (
  <div>
    <SvgTag2 />
  </div>
);

   return (


<div>
  <Router>
    <div>
<SearchBar/>
      <table >
        <tbody>
          <tr>
            <td>&nbsp;</td>
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td>
              <Link to="/sourceDiagram">sourceDiagram</Link>
            </td>
            <td>
              <Link to="/targetDiagram">targetDiagram</Link>
            </td>
          </tr>
          <tr>
            <td>
              <DropdownNode options={sourceNode} />
            </td>
            <td>
              <DropdownNode options={targetNode} />
            </td>
          </tr>
        </tbody>
      </table>

      <Route path="/sourceDiagram" component={sourceDiagram} />
      <Route path="/targetDiagram" component={targetDiagram} />

    </div>
  </Router>
</div>

    );
  }
}
export default App;
