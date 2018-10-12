import React, { Component } from 'react';

import 'react-dropdown/style.css'

import SearchBar from "./SearchBar";
import DefinitionMappingTable from "./DefinitionMappingTable";
import DefinitionTables from "./DefinitionTables";


export default class App extends Component {


  render() {


const REACT_VERSION = React.version;

   return (
      <div>
      <div>React version: {REACT_VERSION}</div>
        <div>
          <SearchBar />

          <DefinitionTables />

          <DefinitionMappingTable />
        </div>
      </div>

    );
  }



}
