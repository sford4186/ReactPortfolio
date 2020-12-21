import React, { Component } from "react";



const Contact =()=>{


    return (
      <>
      <div></div>
      <div class="container">
          
        <form>
            <br/>
            <h1>Contact Information </h1>
            <br/>
            <div class="form-group">
                <label for="formGroupExampleInput">Name</label>
                <input type="text" class="form-control" id="formGroupExampleInput"/>
            </div>
            <br/>

            <div class="form-group">
                <label for="exampleInputEmail1">Email Address</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>



            <div class="form-group">
                <label for="exampleFormControlTextarea1">Message</label>
                <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
            </div>

            <div class="form-group row">
                <div class="col-sm-10">
                <button type="submit" class="btn btn-primary" style={{"backgroundColor": "purple"}} onClick= {e=>e.preventDefault}> Submit</button>
                </div>
            </div>
        </form>
    </div>
</>
      
    );
  
}




export default Contact;