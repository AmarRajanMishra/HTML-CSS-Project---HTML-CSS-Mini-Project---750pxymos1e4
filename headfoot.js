
class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <html lang="en">
        <head>
          
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <link rel="icon" type="image/x-icon" href="abc.ico">
            <title>Foody</title>
            
            <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>

            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"/>
        
            <!-- custom css file link  -->
            <link rel="stylesheet" href="style.css">
           
        
           
           
        </head>
        <body onload="myFunction()">

  <div id="loading"></div>
        <header>

        <div class="hero">
            
 
         <nav>
           <div class="logo">
              Foody
           </div>
           <input type="checkbox" id="click">
           <label for="click" class="menu-btn">
           <i class="fas fa-bars"></i>
           </label>
           <ul>
              <li><a class="active" href="home.html">Home</a></li>
              <li><a href="about.html">About</a></li>
              <li><a href="tags.html">Tags</a></li>
              <li><a href="recipes.html">Recipes</a></li>
              <li><a href="contact.html"><button type="button">Contact US </button></a></li>
           </ul>
        </nav>
         </div>
     
     </header>`
    }
}
customElements.define('my-header', MyHeader)

class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`<section class="footer">

        <div class="share">
            <a href="https://www.facebook.com/amar.mishra.5832343" class="btn">facebook</a>
            <a href="https://twitter.com/RajanAmar999" class="btn">twitter</a>
            <a href="https://www.instagram.com/amar__rajan/?hl=en" class="btn">instagram</a>
            <a href="https://in.pinterest.com/amar1998fzd/" class="btn">pinterest</a>
            <a href="https://www.linkedin.com/in/amar-mishra-860815122/" class="btn">linkedin</a>
        </div>
    
        <h1 class="credit"> created by <span> Michael </span> 2022 || all rights reserved! </h1>
    
    </section>

   </body>
</html>`
    
    }
}
customElements.define('my-footer', MyFooter)

class MyRecipe extends HTMLElement {
    connectedCallback() {
        this.innerHTML =`<div class="tags-container">
        <h4>Recipes</h4>
        <ol class="gradient-list">
          <li><a href="#" class="btn">Beef (4)</a></li>
          <li><a href="#" class="btn">Breakfast (1)</a></li>
          <li><a href="#" class="btn">Lunch (3)</a></li>
          <li><a href="#" class="btn">Dinner (2)</a></li></ol>
      </div>`
    
    }
}
customElements.define('my-recipe', MyRecipe)

// const currentLocation = location.href;
// const menuItem = document.querySelectorAll('a');
// const menuLength = menuItem.length;
// for(let i=0; i < menuLength; i++){
//     if(menuItem[i].href===currentLocation){
//         menuItem[i].className = "active"
//     }
// }