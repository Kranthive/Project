import React  from "react";

const Header = () => {  
  let day;
  switch (new Date().getDay()){
    case 0:
    day = "Sunday";
    break;
    case 1:
     day = "Monday";
     break;
     case 2:
    day = "Tuesday";
    break;
    case 3:
     day = "Wednesday";
     break;
     case 4:
    day = "Thursday";
    break;
    case 5:
     day = "Friday";
     break;
     case 6:
     day = "Saturday";
     break;
  }
  document.getElementById("demo").innerHTML = "Today is "+ day;
 
  
   
  //print page
    function handlePrint() {
        window.print()
    }
  

  
     
  
  
  

    return(
        <>  
<h6>Personal Details</h6>
<div id="demo"> Bad day</div>
<p id="demo2"></p>



<button className="btn btn-outline-success" onClick={handlePrint}> Print </button>




        </>

        
    );   
};
export default Header;