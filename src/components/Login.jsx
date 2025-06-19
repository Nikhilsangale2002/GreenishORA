import React from 'react'

export default function Login() {
  return (
<div className="container Login align-items-center">
     <div class="login-container">
    <div class="login-card ">
      <h2>login or Singup</h2>
      <form>
        <label for="mobile">Mobile Number</label>
        <input type="tel" id="mobile" name="mobile" placeholder="+91 9876543210" required/>
        
        <button type="submit">Send OTP</button>
      </form>
    </div>
  </div>
</div>

  )
}
