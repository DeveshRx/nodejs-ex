

// Get a reference to the database service
var database = firebase.database();

function BusinessContactForm() {
    var Name = document.getElementById("InputName").value;
    var CompanyName = document.getElementById("InputCB").value;
    var Email = document.getElementById("InputEmail").value;
    var Phone = document.getElementById("InputPhoneNumber").value;
    var Message = document.getElementById("InputMessage").value;

    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();
    var hr = today.getHours();
    var min = today.getMinutes();
    var mms = today.getMilliseconds();
    var s = today.getSeconds();
    var ActualDate= hr+":"+min+" , "+dd+"-"+mm+"-"+yyyy;

    var srno = yyyy + mm + dd + hr + min + s + mms;
    var TodayDate = yyyy + "/" + mm;
    console.log(srno);



    firebase.database().ref("PublicNode/Forms/"+TodayDate+"/" + srno).set({
        "Name": Name,
        "CompanyName": CompanyName,
        "Email": Email,
        "Phone": Phone,
        "Message":Message,
        "Date":ActualDate
    }, function (error) {
        if (error) {
            // The write failed...
            console.log(error);
        } else {
            // Data saved successfully!
            console.log("Data saved successfully!");
            ShowModal();
        }
    });

}

function ShowModal() {
    $('#exampleModal').modal("show")
}

function closeF() {
    window.location.href = "index.html";

}
