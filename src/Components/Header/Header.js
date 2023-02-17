import React,{useContext} from 'react';
import { useHistory } from 'react-router-dom';
import './Header.css';
import OlxLogo from '../../assets/OlxLogo';
import Search from '../../assets/Search';
import Arrow from '../../assets/Arrow';
import SellButton from '../../assets/SellButton';
import SellButtonPlus from '../../assets/SellButtonPlus';
import { AuthContext, FirebaseContext } from '../../store/Context';
import Swal from 'sweetalert2';
function Header() {
  const history=useHistory()
  const {user}=useContext(AuthContext)
  const {firebase}=useContext(FirebaseContext)


  const olxLogout=()=>{
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Logout !'
    }).then((result) => {
      if (result.isConfirmed) {
        firebase.auth().signOut();
        history.push('/login')
      }
    })
  }

  return (
    <div className="headerParentDiv" >
      <div className="headerChildDiv">
        <div onClick={()=>history.push('/')} className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
          <span>{user ? `Welcome ${user.displayName}` : <a onClick={()=>history.push('/login')}>Login</a>}</span>
          <hr />

        </div>
       {user ?  <span className='button-24' onClick={olxLogout}>Logout </span>: ''}
         

       { user ? <div onClick={()=>history.push('/create')} className="sellMenu">
          <SellButton ></SellButton>
          <div  className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div> :
        <div className="sellMenu" onClick={()=>history.push('/login')}>
          <SellButton ></SellButton>
          <div  className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>}
      </div>
    </div>
  );
}

export default Header;
