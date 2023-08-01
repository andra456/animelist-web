import React from 'react';
import { PushMenu, IListmenu } from '@ui';
import { IoMdNotifications, IoMdSearch } from 'react-icons/io';

import { header } from './_layoutStyle';

const Header = (props: any) => {
  const options = props;
  const nav = options.layout === 'sidebar' ? true : false;

  const menu: IListmenu[] = [
    { text: 'Collection', url: '#', child: [] },
    { text: 'Anime', url: '#', child: [] },
    { text: 'Manga', url: '#', child: [] },
    { text: 'Schedule', url: '#', child: [] },
  ];

  const sideRight = (
    <div className="navigation">
      <div className="search">
        <IoMdSearch />
      </div>
      <a href="/kosong">
        <IoMdNotifications />
      </a>
    </div>
  );
  console.log(options, nav);
  return (
    <div className={header}>
      {nav ? (
        <PushMenu
          menuList={menu}
          logoSrc="https://anilist.co/img/icons/icon.svg"
          sideRight={sideRight}
        />
      ) : null}
    </div>
  );
};

export default Header;
