import React, { FunctionComponent } from 'react';

interface IDescription {
    description : string;
}

const Description = ({description}: IDescription) => {

  return (<p className="my-[30px] text-center lg:text-start text-linkcolor">{description}</p>);
};

export default Description;
