
const menu = document.createElement('nav');
        menu.id = 'menu';
        menu.innerHTML = `
            <ul>
                <li><a href="#intro">Accueil</a></li>
                <li><a href="#jv-and-tcg">Jeux Vidéo & TCG</a></li>
                <li><a href="#guests">Invités</a></li>
                <li><a href="#cosplay">Cosplay</a></li>
                <li><a href="#partners">Partenaires</a></li>
                <li><a href="#contact-us">Contact</a></li>
            </ul>
        `;
        document.body.appendChild(menu);

        const burgerIcon = document.getElementById('burger-icon');
        let menuVisible = false;

        function toggleMenu() {
            menuVisible = !menuVisible;
            menu.style.display = menuVisible ? 'block' : 'none';
            burgerIcon.innerHTML = menuVisible ? 'X' : '☰';
        }

        burgerIcon.addEventListener('click', toggleMenu);

        
        const links = document.querySelectorAll('#menu a');
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetSection = document.querySelector(targetId);
                targetSection.scrollIntoView({ behavior: 'smooth' });
                toggleMenu(); 
            });
        });


        const form = document.querySelector("form");
        const lastnameInput = document.querySelector("input[name='lastname']");
        const firstnameInput = document.querySelector("input[name='firstname']");
        const mailInput = document.querySelector("input[name='mail']");
        const objectInput = document.querySelector("input[name='object']");
        const messageInput = document.querySelector("textarea[name='message']");
        const agreementInput = document.querySelector("#agreed");
        const submitBtn = document.querySelector("button[type='submit']");
        
        function validateName(name) {
          const regex = /^[a-zA-ZÀ-ÿ\s]{2,50}$/; 
          return regex.test(name);
        }
        
        function validateEmail(email) {
          const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
          return regex.test(email);
        }
        
        function validateObjectAndMessage(text) {
          return text.trim().length >= 3 && text.trim().length <= 250; 
        }
        
        function disableButton() {
          const isFormValid = validateForm();
          submitBtn.disabled = !isFormValid;
        }
        
        function validateForm() {
          let isValid = true;
        
          
          if (!validateName(lastnameInput.value)) {
            lastnameInput.style.border = "2px solid red";
            isValid = false;
          } else {
            lastnameInput.style.border = "";
          }
        
         
          if (!validateName(firstnameInput.value)) {
            firstnameInput.style.border = "2px solid red";
            isValid = false;
          } else {
            firstnameInput.style.border = "";
          }
        
         
          if (!validateEmail(mailInput.value)) {
            mailInput.style.border = "2px solid red";
            isValid = false;
          } else {
            mailInput.style.border = "";
          }
        
          
          if (!validateObjectAndMessage(objectInput.value)) {
            objectInput.style.border = "2px solid red";
            isValid = false;
          } else {
            objectInput.style.border = "";
          }
        
       
          if (!validateObjectAndMessage(messageInput.value)) {
            messageInput.style.border = "2px solid red";
            isValid = false;
          } else {
            messageInput.style.border = "";
          }
        
   
          if (!agreementInput.checked) {
            agreementInput.parentElement.style.border = "2px solid red";
            isValid = false;
          } else {
            agreementInput.parentElement.style.border = "";
          }
        
          return isValid;
         }
        
        form.addEventListener("input", disableButton);

        
        
        form.addEventListener("submit", function (event) {
          event.preventDefault(); 
        
          if (validateForm()) {
            alert("Votre message a été envoyé avec succès !");
            
            lastnameInput.value = "";
            firstnameInput.value = "";
            mailInput.value = "";
            objectInput.value = "";
            messageInput.value = "";
            agreementInput.checked = false;
            disableButton(); 
          }
 });

         
          
          
          
          
         
          

          
