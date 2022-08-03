import React, { FunctionComponent } from 'react';

interface IActionSubtitle {
    subtitle: string;
}

const AccentSubtitle = ({subtitle}: IActionSubtitle) => {
  return (
      <h6 className="text-[13px] text-primary font-bold tracking-[2.5px] my-[2rem]">{subtitle}</h6>
  );
};

export default AccentSubtitle;
