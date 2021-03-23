/*
customerUpdate.onshow=function(){
    txtaCustomers4_contents.style.height = "150px"
    query = "SELECT * FROM customers"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtaCustomers4.value = message
    }
}


btnUpdate.onclick=function(){
    let newName = inpNewName.value
    let oldName = inpOldName.value
    query = "SELECT * FROM customers WHERE `name` = '" + oldName + "'"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        customers = JSON.parse(req.responseText)
        if (customers.length > 0) {
            query = "UPDATE customer SET `name` ='" + newName + "' WHERE `name` = '" + oldName + "'"
            req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=clc90595&query=" + query)
            if (req.status ==  200)  
                if (req.responseText == 500)   
                    lblMessage4.textContent = `You have successfully updated ${oldName} to ${newName}.`
                else
                    lblMessage4.value = `There was a problem updating ${oldName} to ${newName}.`
            else   
                lblMessage4.value = `Error: ${req.status}`
        }
    } 
}
*/

  

