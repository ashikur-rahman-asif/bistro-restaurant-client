// import React from 'react';

const SectionTitle = ({heading,subHeading}) => {
    return (
        <div className="md:w-4/12 text-center my-8 mx-auto">
            <p className="text-yellow-600 mb-4">--- {subHeading} ---</p>
            <h3 className="uppercase text-3xl border-y-4 py-4">{heading}</h3>
        </div>
    );
};

export default SectionTitle;