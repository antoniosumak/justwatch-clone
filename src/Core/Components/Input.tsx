import React, { FunctionComponent } from 'react';

interface IInput {
    icon: React.ReactNode;
    placeholder? :string;
}

const Input = ({icon, placeholder}: IInput) => {
  
  return (<div>
      <label htmlFor=""></label>
      <div className="relative">
          {icon && <div className="absolute top-[50%] transform -translate-y-[50%] pl-3 text-iconcolor">{icon}</div>}
          <input type="text" className={`p-1 rounded-[0.25rem] ${icon && "pl-10"} bg-darkgray`} placeholder={placeholder}/>
      </div>
  </div>);
};

export default Input;
