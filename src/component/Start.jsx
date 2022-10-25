
import React, { useState } from "react";
import Home from "./Home";



function Start() {

    const [FirstNameLog, setFirstNameLog] = useState("");
    // const [lastNameLog, setLastNameLog] = useState("");
    // const [emailLog, setEmailLog] = useState("");
    const [flag, setFlag] = useState(false);
    const [home, setHome] = useState(true);
    let nail = localStorage.getItem("LastName").replace(/"/g, "");
    let myN = localStorage.getItem("FirstName").replace(/"/g, "");
    const handleStart = (e) => {
        e.preventDefault();
       
        // let nail = localStorage.getItem("LastName").replace(/"/g, "");
        // let pass = localStorage.getItem("Email").replace(/"/g, "");
    


        if (!FirstNameLog){
            setFlag(true);
            console.log("empty");
        }else if(FirstNameLog !== myN ){
            setFlag(true);
        }else{
            setHome(!home);
            setFlag(false);
        }

        }
    
   return (

   <div>
    <div className="start" >
    
    {home ? (
    <form onSubmit={handleStart} className="form2 mt-5">

        <h2>Welcome {(nail, myN)}, please read the instruction carefully</h2>
        <h3>Instructions</h3>
        <p>Do not close the CBT window. <br />
        Click submit when you are done with the test.
        </p>
    

    <div>
    <input type="text"  
    id=""
    className="form-control mb-2" 
    placeholder="Enter your First Name" 
    onChange={(e) => setFirstNameLog(e.target.value)}/>
    </div>
   
     <button type="submit" className="btn1 btn btn-danger mb-3">Start</button>
     

    
      

    </form>
    ):(
        <Home/>
    )}
  </div>
   </div>
   )
    
}
export default Start;