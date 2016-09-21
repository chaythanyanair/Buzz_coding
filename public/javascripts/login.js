function check()
    {
      //alert("hai");
      //document.write("Voila");

      var nameValue = document.form1.uname.value;
      var pass = document.form1.psw.value;
      
      
      if (nameValue == "chaythanyanair" && pass == "root") {
        alert("voila");

        window.location.href = "welcome.html";
        //window.open("welcome.html");
        return false;

      }
    }