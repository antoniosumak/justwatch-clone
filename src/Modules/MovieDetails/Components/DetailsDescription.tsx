import React, { FunctionComponent } from 'react';

interface IDetailsDescription {
    description : string;
    isFullWidth?:boolean

}

const DetailsDescription = ({description, isFullWidth}: IDetailsDescription) => {

    return (<p className={`text-descriptioncolor ${isFullWidth ? 'w-full' : 'max-w-[30ch]'}`}>{description}</p>);
};

export default DetailsDescription;
