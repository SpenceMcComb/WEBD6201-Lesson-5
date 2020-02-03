"use strict";
//IIFE - Immediately Invoked Function Expression
// mean? -> anonymous self-executing function

let app;
(function(app){

    // Declare Function Variables here...
    console.log("%cDeclaring Variables", "color: red;")
    
    /**
     * Variable initialization in this function
     *
     */
    function Start()
    {
      let mainContent = $("#mainContent")
      console.log(mainContent);

      let mainCont = document.getElementById("#mainContent");
      console.log(mainCont);

      let mainQuery = document.querySelectorAll("#mainContent")[0];
      console.log(mainQuery);

      let mainFirstQuery = document.querySelector("#mainContent");
      console.log(mainQuery);

      
      Main();
    }

    /**
     * Main Program entry point is here
     *
     */
    function Main()
    {
       


    }
    
    

    window.addEventListener("load", Start);
})(app || (app = {}));

