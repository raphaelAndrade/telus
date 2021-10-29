import React from 'react';
import Heading from '@tds/core-heading';
import { Link } from 'react-router-dom';

const Home = () => {
    return(
        <>
        <Heading level="h1">Device Catalogue</Heading>
        <Link to={'./watches'}>
        <button variant="raised">
            List Watches
        </button>
      </Link>
      <Link to={'./iphones'}>
        <button variant="raised">
            List Iphones
        </button>
      </Link>
        </>
    )
};

export default Home;
