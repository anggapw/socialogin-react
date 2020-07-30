import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';

const Login = () => {
  const [dataLoginGoogle, setDataLoginGoogle] = useState();
  const [statusLogin, setStatusLogin] = useState(false);

  //Arrow function
  const responseGoogle = (response) => {
    setDataLoginGoogle(response.profileObj);
    localStorage.setItem('name', response.profileObj.givenName);
    localStorage.setItem('email', response.profileObj.email);
    localStorage.setItem('image', response.profileObj.imageUrl);
    setStatusLogin(true);
  }

  //Arrow function
  const responseFacebook = (response) => {
    console.log(response);
  }

  const componentClicked = () => {
    console.log( "Clicked!" )
  }

  return (
      <div className="wrapperLogin">
        <GoogleLogin
          clientId="684306579514-fuh5hpbiuelbpdrljmf57nsbkjiceeop.apps.googleusercontent.com"
          buttonText="Sign in with google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={'single_host_origin'}
        />

        <FacebookLogin
          appId="283944939339095"
          autoLoad={true}
          fields="name,email,picture"
          onClick={componentClicked}
          callback={responseFacebook}
          icon="fa-facebook"
          size="small"
        />

        {
          statusLogin ? (
            <Redirect
            to={{
              pathname: "/profile",
            }}
          />
          ) : (
            <Redirect
            to={{
              pathname: "/",
            }}
          />
          )
        }
      </div>
  );
}

export default Login;