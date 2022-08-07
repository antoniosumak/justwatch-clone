import React, { FunctionComponent } from 'react';

interface IButton {
  text: string;
  type: string;
  onClick?: Function;
}

const Button = ({ text, type, onClick }: IButton) => {
  const buttonTypes = {
    primary:
      'py-[1rem] px-[4rem] bg-primary text-black text-[18px] rounded-lg font-bold',
    navigation:
      'py-[0.5rem] px-[0.75rem] bg-buttonnavigation text-white text-[14px] rounded-md cursor-pointer hover:bg-buttonnavigationhover',
    outline:
      'py-[1rem] px-[4rem] bg-transparent text-linkcolor border border-linkcolor rounded-lg hover:bg-[rgba(153,156,159,0.1)]',
  } as Record<string, string>;

  return (
    <button className={buttonTypes[type]} onClick={() => onClick && onClick()}>
      {text}
    </button>
  );
};

export default Button;
