import React from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.css";

import {GoThreeBars} from 'react-icons/go'
import {IoMdSearch} from 'react-icons/io'
import {FiLogIn} from 'react-icons/fi'


const cx = classNames.bind(styles);

// const Header = ({ onLogout }) => (
//   <div className={cx("header")}>
//     <Link to={"/"} className={cx("logo")}>
//       D-Note
//     </Link>
//     <div className={cx("logout")}>
//       <MdLock onClick={onLogout} />
//     </div>
//   </div>
// );

const Header = () => (
  <header className={cx("header")}>
    <div className={cx("titleAndBtn")}>
        <GoThreeBars className={cx("bar")}/>
        <span className={cx("title")}>Now song</span>
    </div>
    <div className={cx("icons")}>
        <IoMdSearch className={cx("search")}/>
        <FiLogIn className={cx("login")}/>
    </div>
  </header>
);
export default Header;