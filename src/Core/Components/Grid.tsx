import React, { FunctionComponent } from 'react';

interface IGrid {
    numberOfColumns: number;
    children : React.ReactNode
    additionalClass?: string;
    dontCenter?: boolean
}

const Grid = ({numberOfColumns, children, additionalClass, dontCenter} : IGrid) => {

    const generateColumns = ()=>{
        switch (numberOfColumns) {
            case 1: return "lg:grid-cols-1";
            case 2: return "lg:grid-cols-2";
            case 3: return "lg:grid-cols-3";
            case 4: return "lg:grid-cols-4";
            case 5: return "lg:grid-cols-5";
        }
    }

  return <div className={`w-full h-full grid grid-cols-1 ${!dontCenter && 'place-items-center'} ${generateColumns()} ${additionalClass}`}>{children}</div>
};

export default Grid;
