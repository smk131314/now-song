import React , { Component } from "react";
import { Link } from "react-router-dom";
import classNames from "classnames/bind";
import styles from "./Header.module.css";

import {GoThreeBars} from 'react-icons/go';
import {IoMdSearch} from 'react-icons/io';
import {FiLogIn} from 'react-icons/fi';


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
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isSearchClicked : false,
      isNavClicked : false,
    };
    this.toggleSearch = this.toggleSearch.bind(this);
    this.toggleNav = this.toggleNav.bind(this);
  }
  // state = {
  //   isSearchClicked : false
  // }


  toggleSearch = () => {
    this.setState({isSearchClicked: !this.state.isSearchClicked})
  }
  toggleNav = () => {
    this.setState({isNavClicked: !this.state.isNavClicked})
  }

  render() {
    return (
      <header className={cx("header")}>
        <div className={cx("titleAndBtn")}>
            <GoThreeBars className={cx("bar")} onClick={this.toggleSearch}/>
            <span className={cx("title")}>Now song</span>
        </div>
        <div className={cx("icons")}>
            <div className={cx("search")} >
              <SearchInput isSearchClicked={this.state.isSearchClicked} />
              <button className={cx("searchBtn")} onClick={this.toggleSearch} >
                <IoMdSearch />
              </button>
            </div>
            <button className={cx("login")}><FiLogIn /></button>
        </div>
      </header>
    );
  }
}

const SearchInput = ({ isSearchClicked }) => (
  <div  >
    { isSearchClicked ? <input className={cx("searchInput")} type="search" placeholder="  Search for music.." /> : null }
  </div>
);


/* Nav 컴포넌트 수정하기/ css 구현하기
const Nav = ({ isNavClicked }) => (
  if ( isNavClicked ) {
    return (
      <div className={cx("NavBox")>
        <ul className={cx("NavList")>
          <li>- HOME</li>
          <li>- DISCOVER</li>
          <li>- PLAYLIST</li>
          <li>- LIKES</li>
        </ul>
      </div>
  );

  }

);
*/

// const Header = () => {

//   this.toggleSearch = this.toggleSearch.bind(this);

//   const toggleSearch = () => {
//     this.setState({isSearchClicked: !this.state.isSearchClicked})
//   }
  
//   return (
//     <header className={cx("header")}>
//         <div className={cx("titleAndBtn")}>
//             <GoThreeBars className={cx("bar")}/>
//             <span className={cx("title")}>Now song</span>
//         </div>
//         <div className={cx("icons")}>
//             <div className={cx("search")} >
//               <SearchInput isSearchClicked={this.state.isSearchClicked} />
//               <button className={cx("searchBtn")} onClick={this.toggleSearch} >
//                 <IoMdSearch />
//               </button>
//             </div>
//             <button className={cx("login")}><FiLogIn /></button>
//         </div>
//       </header>
//   );
// };
export default Header;

