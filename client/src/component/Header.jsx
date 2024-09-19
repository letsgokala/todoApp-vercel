import React from "react";

function Heading(){
return (
    <>
    <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <div class="container-fluid">
        <ul class="navbar-nav">
        <li class="nav-item">
            <a class="nav-link active" href="#"> Khalid</a>
        </li>        
        </ul>
    </div>
    </nav>
<h1 className="text-center mt-5">My Todo list</h1> {/*the 1st class is to center the test the 2nd class is to add top-margin 5em to it*/}

    </>
    )
}


export default Heading;