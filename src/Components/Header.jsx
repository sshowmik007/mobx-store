import React from 'react'
import { Link , useNavigate } from 'react-router-dom'
import { useStore } from '../Hooks/useStore';

import { observer } from 'mobx-react-lite'

const Header = observer(() => {
  const {
    rootStore: { loginStore },
  } = useStore();
  const navigate = useNavigate();
  const onLogout = () => {
    loginStore.logout();
    navigate("/login");
  }
    
  return (
    <div class=" bg-cyan-800 text-white shadow-lg px-6">
    <div class="container mx-auto flex items-center h-24">
        {/* image */}
        <Link to="/">
          
      <a href="" class="flex items-center justify-center">
        <img class="h-16" src="https://mobx.js.org/assets/mobx.png" alt="mob-x" />
        <span class="ml-4 uppercase font-black">MOB-x<br/>Store</span>
      </a>
        </Link>
      {/* nav */}
      <nav class="contents font-semibold text-base lg:text-lg">
        <ul class="mx-auto flex items-center">
          <li class="p-5 xl:p-8 active">
              <Link to="/">
                <a href="">
                  <span>Home</span>
                </a>
              </Link>
          </li>
          <li class="p-5 xl:p-8">
            <a href="">
              <span>About</span>
            </a>
          </li>
          <li class="p-5 xl:p-8">
            <a href="">
              <span>Projects</span>
            </a>
          </li>
          <li class="p-5 xl:p-8">
            <a href="">
              <span>Services</span>
            </a>
          </li>
          <li class="p-5 xl:p-8">
            <a href="">
              <span>Blog</span>
            </a>
          </li>
        </ul>
      </nav>

{/* button */}



{!loginStore.getUserToken && (
  <>
  
<Link to="/login" className='border border-white rounded-full font-bold px-8 py-2'>
      Login
</Link>

<Link to="/signup" className>
<button class="border border-white rounded-full font-bold px-8 py-2">
  Sign-Up
</button>
</Link>
<Link to="/checkout" className='border border-white rounded-full font-bold px-8 py-2'>
      Checkout
</Link>
  </>
)}


{loginStore.getUserDetails?.username &&(
  <>
  
  <span className="m-2">
                Welcome {loginStore.userDetails?.username}
  </span>

  <Link to="/login" onClick={onLogout} className='border border-white rounded-full font-bold px-8 py-2'>
    Logout
  </Link>
  
  </>
)}
   
      {/* <button class="border border-white rounded-full font-bold px-8 py-2">Sign up</button> */}
      {/* <button class="border border-white rounded-full font-bold px-8 py-2">Login</button> */}
    </div>
  </div>
  )
});

export default Header