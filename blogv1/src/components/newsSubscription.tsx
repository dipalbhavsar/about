import React, {FC, ChangeEvent, FormEvent, useState } from 'react';
import styled from '@emotion/styled';
import addToMailchimp from 'gatsby-plugin-mailchimp'

interface ISignUpData {
  emailAddress: string;
  firstName: string;
  lastName: String;
}
interface ISignUpResult {
  success: boolean;
  message: string;
}

// interface IProps {
//  onSignUp: (data: ISignUpData) => ISignUpResult;// 
// }

const NewsSubscription = ()  => {
  const [email, setEmail] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [emailAddressError, setEmailAddressError] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [submitResult, setSubmitResult] = useState({ result:"", message: "" });

  const handleFirstNameChange = (e) => {
    setFName(e.currentTarget.value);
  };
  
  const handleLastNameChange = (e) => {
    setLName(e.currentTarget.value);
  };

  const handleEmailAddressChange = (e) => {
    setEmail(e.currentTarget.value);
  };

  const validateEmailAddress = (value) => {
    const error = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
      value
    )
      ? ""
      : "You must enter a valid email address";
    setEmailAddressError(error);
    return error;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    debugger;
    const emailAddressValidationError = validateEmailAddress(email);
    if (emailAddressValidationError === "") {
      debugger;
      const result = await addToMailchimp(email,{FNAME:fName, LNAME:lName}); 
      debugger;
      setSubmitted(true);
      
      setSubmitResult({message : result.msg, result:result.result});
      console.log("result = " + result);
      e.su
      debugger;
    }
  };

  return (
    <div
      className="sidebar-box subs-wrap img py-4"
      // style="background-image: url(images/bg_1.jpg);"
    >
      <div className="overlay"></div>
      <h3 className="mb-4 sidebar-heading">Newsletter</h3>
      <p className="mb-4">
        Get awesome design content in your inbox every week. Subscribe here.
      </p>
      <form action="https://dipalbhavsar.us10.list-manage.com/subscribe/post?u=f756252497326df0842cc8176&amp;id=b520c27181" method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form" className="subscribe-form validate" target="_blank" noValidate={true} onSubmit={handleSubmit}>
        <div className="form-group">
          <InputWrapper type="email" value={email} name="EMAIL" id="mce-EMAIL" className="form-control" placeholder="Email Address" onChange={handleEmailAddressChange}/>
          <span className="error">{emailAddressError}</span>
          <InputWrapper type="text" value={fName} name="FNAME" id="mce-FNAME" className="form-control" placeholder="First Name" onChange={handleFirstNameChange}/>
          <InputWrapper type="text" value={lName} name="LNAME" id="mce-LNAME" className="form-control" placeholder="Last Name" onChange={handleLastNameChange}/>

          <input type="submit" value="Subscribe" className="mt-2 btn btn-white submit" disabled={submitted && submitResult.result === "success"} />
          {submitted && (
            <div className="row">
              <span className={submitResult.result === "success" ? "submit-success" : "submit-failure"}>
                 { submitResult.result === "success" ? submitResult.message : submitResult.message.split('to list')[0]}
              </span>
            </div>
          )}
          <div id="mce-responses" className="clear">
		        <div className="response" id="mce-error-response" style={{'display':'none'}}></div>
		        <div className="response" id="mce-success-response" style={{'display':'none'}}></div>
	        </div> 
        </div>
      </form>
    </div>
  )
}
const InputWrapper = styled.input`
margin:10px 0px;
`;

export default NewsSubscription
