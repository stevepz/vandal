import React from 'react';



export default function NightForm() {
  return (
    <div id="inquiries-section">
      <div id="inquiries-leftside">
        <p id="form-h2">NIGHTCLUB INQUIRIES</p>
        <p id="form-instructions">For Inquiries for a private event in the nightclub, please fill ou the form. Nightly entry to the lounge is subject to doorman discretion and table inquires can be made in person night of.</p>
        <div id="the-form">
          <form>
            <div id="form-line1">
              <input id="firstname" name="name" type="text" placeholder="First Name" />
              <input id="lastname" name="name" type="text" placeholder="Last Name" />
            </div>
            <div id="form-line2">
              <input id="email" name="name" type="text" placeholder="Email Address" />
              <input id="phone" name="name" type="text" placeholder="Phone Number" />
            </div>
            <div id="form-line3">
              <input id="date" name="name" type="text" placeholder="Date" />
              <input id="size" name="name" type="text" placeholder="Party Size" />
            </div>
            <div>
              <textarea id="additional" name="name" type="text" placeholder="Additional Information"></textarea>
            </div>
          </form>
        </div>
        <div id="button-div">
          <button id="form-button">MAKE REQUEST</button>
        </div>
      </div>
     

    </div>
  )
}
