import React, { FunctionComponent } from 'react';

interface IDescription {
    description : string;
}

const Description = ({description}: IDescription) => {

  return (<p className="my-[30px] text-linkcolor">{description}</p>);
};

export default Description;
