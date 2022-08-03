import React, { FunctionComponent } from 'react';
import Input from "./Input";
import {ImSearch} from "react-icons/im";
import Button from "./Button";

interface IHeaderFunctions {}

type NavigationItem = {
    id: string;
    item: any
}

const HeaderActions = ({} : IHeaderFunctions) => {
    const [navigationBarState, setNavigationBarState] = React.useState<string>("default");
    const links = {
        default : [
            {id: "new", item: <a href="#">Novo</a>},
            {id: "mostWatched", item: <a href="#">Najgledanije</a>},
            {id: "search", item:  <Input icon={<ImSearch/>} placeholder="Pretrazi filmove ili serije"/>},
            {id: "button", item:  <Button text="Prijava" type="navigation"/>},
        ]
    } as Record<string, NavigationItem[]>

  return (
      <ul className="flex items-center space-x-4 text-linkcolor ">
          {
              links[navigationBarState].map((navigationItem : NavigationItem)=>
                  <li className="hover:text-linkhover" key={navigationItem.id}>{navigationItem.item}</li>)
          }
      </ul>
  );
};

export default HeaderActions;
