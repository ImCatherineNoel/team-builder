import React from "react";
import '../App.css';
// - [ ] In `Form.js` build out your markup.
// - [ ] Build inputs for `name`, `email` and `role` (backend engineer, frontend engineer, designer, etc. Use your imagination).
// - [ ] You will have to decide which component is responsible for maintaining the _state_ of the form (`Form` itself, or its parent `App`). Each approach has advantages and disadvantages.
// - [ ] Render your `Form` component in `App`. The `App` component should hand down through props any callback(s) needed for `Form` to do its job (adding new members to your team members state on submit).


const Form  = (props) => {


     return (
          <div>
          <h1>Add Team Member</h1>
          <form>
               <label>
                    Name: <input id='name' type='text' required />
               </label>

               <label>
                    Email: <input id='email' type='email' pattern=".+@globex.com" required/>
               </label>

               <label>
                    Role: <input id='role' type='text' required/>
               </label>
               
               <button className='button' type='submit'>Add Member</button>
          </form>
          </div>
     )
}


export default Form;