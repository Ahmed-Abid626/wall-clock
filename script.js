setInterval(
  function () {
      var d = new Date(); 
      var sec = d.getSeconds() * 6; 
      var mint = d.getMinutes() * 6; 
      var hour = d.getHours() * 30 + d.getMinutes() / 2;

      
      document.getElementById('sec_').style.transform = "rotate(" + sec + "deg)";
      document.getElementById('mint_').style.transform = "rotate(" + mint + "deg)";
      document.getElementById('hour_').style.transform = "rotate(" + hour + "deg)";
      
      }, 1000 
    
);

