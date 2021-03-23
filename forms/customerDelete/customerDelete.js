/*
btnDelete.onclick=function(){
    let customerName = inpDelete.value
    let found = false
    for (i = 0; i < customers.length; i++) {
        if (customerName == customers[i][1]){
            found = true
            break 
        }
    }

     
customerDelete.onshow=function(){
   query = "SELECT * FROM customer"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
  
  if (found == false)
       lblMessage2.value = "That customer name is not in the database."
    else if (found == true) {
      query = "DELETE FROM customer WHERE name = '" + customerName + "'"      
      req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
      if (req.status == 200) 
            if (req.responseText == 500)    
                lblMessage2.value = `You have successfully deleted the customer named ${customerName}`
            else
                lblMessage2.value = `There was a problem deleting ${customerName} from the database.`
      else
        lblMessage2.value = `Error: ${req.status}`
    } 
  }
*/