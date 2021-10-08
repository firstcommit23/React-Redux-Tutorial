import React from 'react';

const RenderPropsSample = ({ children }) => {
    return <div>결과 : {children(5)}</div>;
};

export default RenderPropsSample;
