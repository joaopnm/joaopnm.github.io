 $(document).ready(function() {
    $("#button").click(function() {
        $("#navbarHeader").toggle();
    });
});


validateForm = () => {
    let fname = document.myform.inputName4.value, lname = document.myform.inputLastName4.value,
    birth = document.myform.inputAge4.value, email = document.myform.inputEmail4.value,
    country = document.myform.inputCountry.value;

    if(fname == null || lname == "" || birth == null || email == "" && country == null) {
        alert("Missing details, can't subscribe");
    } else {
        alert("Successfully submitted your info to the hackers :)");
        let fname = "", lname = "", birth = "", email = "", country = "";
    }
}

