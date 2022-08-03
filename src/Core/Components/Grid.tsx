import React, { FunctionComponent } from 'react';

interface IGrid {
    numberOfColumns: number;
    children : React.ReactNode
    additionalClass?: string;
}

const Grid = ({numberOfColumns, children, additionalClass} : IGrid) => {

    const generateColumns = ()=>{
        switch (numberOfColumns) {
            case 1: return "grid-cols-1";
            case 2: return "grid-cols-2";
            case 3: return "grid-cols-3";
            case 4: return "grid-cols-4";
            case 5: return "grid-cols-5";
        }
    }

  return <div className={`w-full h-full grid ${generateColumns()} ${additionalClass}`}>{children}</div>
};

export default Grid;
