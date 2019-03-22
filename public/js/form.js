const processContactFrom = () => {
   const name = document.forms['contact']['name'].value;
   const email = document.forms['contact']['email'].value;
   const company = document.forms['contact']['company'].value;
   const description = document.forms['contact']['message'].value;
 if(name, email, company, description) {

    fetch('http://www.localhost:3000/success', {
        method: 'post',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
            name: name,
            email: email,
            company: company,
            description: description
        })
    })
    .then(response => response.json())
    .then(data => {
        console.log('front end', data);
        if(data.id) {
            return alert('Form submitted successfully')
        } else {
            alert('Unable to submit the form');
        }
    })
 }else {
     return alert("Please fill all the fields")
}

 } 
   