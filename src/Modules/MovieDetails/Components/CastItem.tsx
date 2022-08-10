import React, { FunctionComponent } from 'react';

interface ICastItem {
    name : string;
    role:string

}

const DetailsDescription = ({name, role}: ICastItem) => {

    return (
        <>

            <div>
                <p className={`text-accent max-w-[30ch] overflow-x-hidden truncate`}>{name}</p>
                <p className={`text-linkhover max-w-[30ch] overflow-x-hidden truncate`}>{role}</p>

            </div>
        </>
    );
};

export default DetailsDescription;
