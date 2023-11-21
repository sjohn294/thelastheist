import React, { Component } from "react";
import ReactSearchBox from "react-search-box";
import { useState } from 'react';
import { useQuery } from '@apollo/client';
// import { QUERY_VEHICLES } from '../../utils/queries.js';


const SearchBar = () => {
    const [vehicle, setVehicle] = useState('');

// const [data, { error }] = useQuery(QUERY_VEHICLES);
const handleFormSubmit = async (event) => {
    event.preventDefault();
console.log(event)
    // try {
    //     // Execute mutation and pass in defined parameter data as variables
    //     const { data } = await addProfile({
    //       variables: { vehicle },
    //     });
  
    //     window.location.replace('/searchVehicle:{}');
    //   } catch (err) {
    //     console.error(err);
    //   }
}

    return (
      <ReactSearchBox id='SearchBarContainer'
        placeholder="Placeholder"
        value="Doe"
        // data={this.data}
        // callback={(record) => console.log(record)}
      />
    )
    };
    export default SearchBar;