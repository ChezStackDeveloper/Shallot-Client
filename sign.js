function sign_in_check() {
 let username = getCookie("username");
  if (username != "") {
   alert("Welcome again " + username);
  } else {
    window.location.href = "sign.html";
  }


}