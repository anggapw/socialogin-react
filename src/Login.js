import React, { useState } from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin from 'react-facebook-login';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap'

import './Login.css'

const Login = () => {
  const [dataLoginGoogle, setDataLoginGoogle] = useState();
  const [dataLoginFacebook, setDataLoginFacebook] = useState();
  const [statusLogin, setStatusLogin] = useState(false);

  //Arrow function
  const responseGoogle = (response) => {
    setDataLoginGoogle(response.profileObj);
    localStorage.setItem('name', response.profileObj.givenName);
    localStorage.setItem('email', response.profileObj.email);
    localStorage.setItem('image', response.profileObj.imageUrl);
    setStatusLogin(true);
    console.log(dataLoginGoogle);
  }


  //Arrow function
  const responseFacebook = (response) => {
    setDataLoginFacebook(response.accessToken);
    localStorage.setItem('name', response.name);
    localStorage.setItem('email', response.email);
    localStorage.setItem('image', response.picture.data.url);
    setStatusLogin(true);
    console.log(dataLoginFacebook);
  }

  const componentClicked = () => {
    console.log("Clicked!")
  }

  return (
    <div className="wrapperLogin">
      <div className="socialLogin">
        <div>
          <GoogleLogin
            clientId="673696835480-p4bbj6botcgp3m0j8a92g8eclpki4aci.apps.googleusercontent.com"
            buttonText="Sign in with google"
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
          />
        </div>
        <div>
          <FacebookLogin
            appId="914586299045474"
            autoLoad={true}
            fields="name,email,picture"
            onClick={componentClicked}
            callback={responseFacebook}
            icon="fa-facebook"
            size="small"
          />
        </div>
      </div>
      <p>or login with email</p>
      <div>
        <Form>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
          </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
        </Button>
        </Form>
      </div>


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