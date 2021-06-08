import React, { useState } from 'react';
import { Link } from 'gatsby';
import { Layout } from 'antd';
import 'font-awesome/less/font-awesome.less';
import style from './header.module.less';
import '../../../styles/global.less';
import { useWindowSize } from '../../../utils/hooks';

export default () => {
  const [menu, setMenu] = useState(false);

  const [width] = useWindowSize();
  const toggleMenu = () => {
    if (width !== 0 && width <= 768) {
      if (menu) {
        setMenu(false);
      } else {
        setMenu(true);
      }
    }
  };
  return (
    <Layout className={`${style.navWrap} ${menu ? null : style.hidden} ${menu ? style.openMenu : null} ${style.backgroundDiv}`}>
      <ul className={style.nav}>
        <li className={style.navItem}>
          <Link to="/" onClick={toggleMenu} activeClassName={style.anchorActive}>
            About
          </Link>
        </li>
        <li className={style.navItem}>
          <Link to="/contact" onClick={toggleMenu} activeClassName={style.anchorActive}>
            Contact
          </Link>
        </li>
        <li className={style.navItem}>
          <Link to="/blog" onClick={toggleMenu} activeClassName={style.anchorActive}>
            Blog
          </Link>
        </li>
        <li className={style.navItem}>
          <Link to="/tags" onClick={toggleMenu} activeClassName={style.anchorActive}>
            Tags
          </Link>
        </li>
        <li className={style.navItem}>
          <Link to="/resume" onClick={toggleMenu} activeClassName={style.anchorActive}>
            Resume
          </Link>
        </li>
        <li className={style.navItem}>
          <Link to="/credits" onClick={toggleMenu} activeClassName={style.anchorActive}>
            Credits
          </Link>
        </li>
      </ul>
    </Layout>
  );
};
