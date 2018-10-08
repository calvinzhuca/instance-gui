import React, { Component } from 'react';

import 'react-dropdown/style.css'



import SearchBar from "./SearchBar";
import DefinitionMappingTable from "./DefinitionMappingTable";
import DefinitionTables from "./DefinitionTables";


export default class App extends Component {


  render() {




   return (


<div>

    <div>
      <SearchBar />

      <DefinitionTables/>

      <DefinitionMappingTable />


    </div>

</div>


    );
  }
}
