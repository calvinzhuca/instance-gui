import React from "react";
import FilterableProductTable from "./FilterableProductTable";
import DropdownNode from './DropdownNode'
import 'react-dropdown/style.css'
import SvgCommonTag from './SvgCommonTag'
import SvgTag from './SvgTag'

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
  { value: 'sourceNode1', label: 'sourceNode1' },
  { value: 'sourceNode2', label: 'sourceNode2'},
  { value: 'sourceNode3', label: 'sourceNode3' },
  { value: 'sourceNode4', label: 'sourceNode4'}
]; 
  
const targetNode = [
  { value: 'targetNodeA', label: 'targetNodeA' },
  { value: 'targetNodeB', label: 'targetNodeB'},
  { value: 'targetNodeC', label: 'targetNodeC' },
  { value: 'targetNodeD', label: 'targetNodeD'}
]; 
    
    
   return (
      <div>
        <DropdownNode options={sourceNode}/>
        
        <DropdownNode options={targetNode}/>
    <SvgTag />
    
    

        <FilterableProductTable products={PRODUCTS} />

     </div>
    );
  }
}
export default App;
