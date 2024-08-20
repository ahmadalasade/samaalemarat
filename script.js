<script>
        function sendMail(){
          let parms = {
            email: document.getElementById("email").value
            subject: document.getElementById("subject").value
          }
          emailjs.send("service_qql2gn5","template_gbzw11v",parms).then(alert("email sent"))



        }

      </script>