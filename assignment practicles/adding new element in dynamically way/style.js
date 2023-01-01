
        // Getting the parent element in which
        // the new div will be created
        let task = document.getElementsByClassName("tasks");
  
        // Getting the addTask button element
        let addTask = document.getElementById("addTask");
          
        // Adding onclick event to the button
        addTask.addEventListener('click', function () {
      
            // Traversing through collection of HTML
            // elements (tasks here)
            for (let i = 0; i < task.length; i++) {
                  
                // New div element is created  
                let newDiv = document.createElement("div");
                      
                // Setting the attribute of class type to newDiv 
                newDiv.setAttribute("class", "list");
                     
                // innerText used to write the text in newDiv 
                newDiv.innerText = "New Div created";
                       
                // Finally append the newDiv to the
                // parent i.e. tasks   
                task[i].append(newDiv);
            }
        })
    