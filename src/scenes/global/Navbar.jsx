import React,{ useEffect } from 'react';
// import { Link } from 'react-router-dom';
import { UserAuth } from './AuthContext';
import { GoogleButton } from 'react-google-button';
import { useNavigate } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
  const { user, logOut } = UserAuth();
  const { googleSignIn } = UserAuth();
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      await googleSignIn();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (user != null) {
      navigate('/account');
    }
  }, [user]);

  const handleSignOut = async () => {
    try {
      await logOut()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div >
      {user?.displayName ? (
        <button className='login-button' onClick={handleSignOut}>{user.displayName}</button>
      ) : (
        // <Link to='/signin'>Sign in</Link>
        <GoogleButton onClick={handleGoogleSignIn} />
      )}
    </div>
  );
};

export default Navbar;
