import React, { useReducer } from 'react';
import Heading from '@tds/core-heading';
import {useState, useEffect} from "react";

const Watches = () => {
    const [listWatches, setListWatches] = useState([]);

    useEffect(() => {
        getWatches()
      });

    const getWatches = () => {
        fetch('/watches').then(res=> {
            res.json().then(data => {
                console.log(data);
            })
        })
    }
    return(
        <>
            <Heading level="h1">Watches Catalogue</Heading>
        </>
    )
};

export default Watches;
