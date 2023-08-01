import React, { ReactNode, useState } from 'react';
import { cx } from 'emotion';

import { RiArrowDropDownLine } from 'react-icons/ri';
import { WrapperMenu } from './_navigationStyle';
import { FiMenu } from 'react-icons/fi';

export interface IListmenu {
  text: string;
  url: string;
  child?: IListmenu[];
}
type IPropsPushMenu = {
  logoSrc?: string;
  menuList: IListmenu[];
  sideRight: JSX.Element;
};

export const PushMenu = ({ logoSrc, sideRight, menuList }: IPropsPushMenu) => {
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const sideLeft = (
    <div className="pages">
      {menuList.map((e: IListmenu, i: number) => (
        <a href={e.url} key={i}>
          {e.text} {e.child?.length ? <RiArrowDropDownLine /> : null}
          {e.child && (
            <ul>
              {e.child.map((c: IListmenu, i: number) => (
                <li>
                  <a href={c.url}>{c.text}</a>
                </li>
              ))}
            </ul>
          )}
        </a>
      ))}
    </div>
  );
  return (
    <WrapperMenu>
      <div
        className={cx(
          'push-menu-wraper',
          'container-fluid',
          toggleMenu && 'show'
        )}
      >
        <div className="left-side">
          <div className="logo">
            {logoSrc && <img alt="logo" src={logoSrc} />}
          </div>
          {sideLeft}
        </div>

        <div className="right-side">
          {sideRight}
          <span className="menu" onClick={() => setToggleMenu(!toggleMenu)}>
            <FiMenu />
          </span>
        </div>
      </div>

      <div className="sidebar"></div>
    </WrapperMenu>
  );
};
