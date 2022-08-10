import React, { FunctionComponent } from 'react';
import Image from "./Image";
import LogoImage from "../../../public/images/JustWatch-logo-large.webp"
import HeaderActions from "./HeaderActions";
import {Link} from "react-router-dom";

interface IHeaderProps {}

const Header = ({} : IHeaderProps) => {

  return (
      <header className="w-full h-[71px] bg-transparentblack sticky top-0 flex z-[100] ">
          <nav className="max-w-[1752px] w-full mx-auto flex flex-col lg:flex-row items-center lg:space-between lg:px-16">
              <div className="w-full flex items-center space-x-10 justify-center lg:justify-start">
                 <Link to="/">
                     <Image width="w-[131px] lg:w-[220px]" alt="Website logo" imageSource={LogoImage}/>
                 </Link>
                  <Link to="/favourites">
                      <h2 className="text-iconcolor font-bold">Favourites</h2>
                  </Link>
              </div>
             <HeaderActions/>
          </nav>
      </header>
  );
};

export default Header;
