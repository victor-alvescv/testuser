import { Button, Field, Fieldset, Input } from '@chakra-ui/react';
import React from 'react';
import { RiArrowRightLine } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { PasswordInput } from './ui/password-input';

const SignForm = ({signedIn, passErrorMessage, emailErrorMessage, setEmail, signin, setPassword}) => {
    return (
        <div className='signin_form'>
        { signedIn ? ( 
          <Link to='/search'>
              <Button 
              className='explore_button'
              colorPalette="red" 
              variant="solid">
                Explore Movies <RiArrowRightLine />
              </Button>
          </Link>) :
    <Fieldset.Root size="lg" maxW="md" invalid={passErrorMessage || emailErrorMessage}>
    <div className="signin_wrapper">
      <h1 className='signin_title'>Sign in</h1>
      <Fieldset.Content className='form'>
       <Field color="white" label="Email address" invalid={emailErrorMessage}>
          <Input
          height='45px' 
          padding="4px"
          color="black"
          background='white' 
          onChange={(event) => setEmail(event.target.value)} name="email" 
          placeholder='me@example.com'
          type="email" 
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              {signin;
            }
          }}
          />
        </Field>
             <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '16px'}}>
          {emailErrorMessage}
              </Fieldset.ErrorText>

        <Field color="white" label="Password">
          <PasswordInput
          height='45px' 
          padding="4px"
          color="black"
          background='white'
          borderColor={!passErrorMessage || 'red'} 
          name="name" 
          type='password'
          onChange={(event) => setPassword(event.target.value)} 
          onKeyDown={(e) => {
            if(e.key === "Enter") {
              signin();
            }
          }}
          />
        </Field>
            <Fieldset.ErrorText style={{ fontWeight: 'bolder', fontSize: '18px', color: 'red'}}>
            {passErrorMessage}
            </Fieldset.ErrorText>
      </Fieldset.Content>

      <Button 
      className='form_button'
      onClick={signin} 
      type="submit" 
      alignSelf="flex-start"
      width="150px"
      fontWeight="600"
      fontSize='18px'>
        Sign In!
      </Button>
<div className="signin__signup--wrapper">
        <h1>
          New to Cinema Library?   
        </h1>
        <Link to='/signup'>
          <u className='signupnow__link'>  Signup now</u>
        </Link>
</div>
    </div>
    </Fieldset.Root>
             }
        </div>
    );
}

export default SignForm;
