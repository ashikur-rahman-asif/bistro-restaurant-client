// import React from 'react';
import { Helmet, HelmetProvider } from "react-helmet-async";
const PageTitle = ({title}) => {
  return (
    <div>
      <HelmetProvider>
        <Helmet>
        <title>{title}</title>
        </Helmet>
      </HelmetProvider>
    </div>
  );
};

export default PageTitle;
