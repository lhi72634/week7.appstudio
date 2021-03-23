/*
customerAdd.onshow=function(){{
    txtaCustomers3_contents.style.height = "150px"
    query = "SELECT * FROM customers"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) {
        results = JSON.parse(req.responseText)
        let message = ""
        for (i = 0; i < results.length; i++)
            message = message + results[i][1] + "\n"
        txtaCustomers3.value = message
    }
}

btnAdd.onclick=function(){
    let name = inpName.value
    let street = inpStreet.value
    let city = inpCity.value
    let state = inpState.value
    let zipcode = inpZipcode.value
    let query = "INSERT INTO customer (`name`,`street`,`city`,`state`,`zipcode`) VALUES ('" + name + "', '" + street + "', + '" + city + "', '" + state + "', '" + zipcode + "', )"
    req = Ajax("https://ormond.creighton.edu/courses/375/ajax-connection.php", "POST", "host=ormond.creighton.edu&user=" + netID + "&pass=" + pw + "&database=" + netID + "&query=" + query)
    if (req.status == 200) { 
        if (req.responseText == 500)    
            lblMessage3.value = "You have successfully added the customer!"
        else
            lblMessage3.value = "There was a problem with adding the customer to the database."
    } else 
        lblMessage3.value = "Error: " + req.status
    }
    

*/
