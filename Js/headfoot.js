
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
          <link rel="stylesheet" href="../CSS/style.css">
         
      
         
         
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
            <li class="active"><a href="home.html">Home</a></li>
            <li><a href="../HTML/about.html">About</a></li>
            <li><a href="../HTML/tags.html">Tags</a></li>
            <li><a href="../HTML/recipes.html">Recipes</a></li>
            <a href="../HTML/contact.html"><button type="button">Contact US </button></a>
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
          <a href="https://www.facebook.com/amar.mishra.5832343" class="btn" target="blank">facebook</a>
          <a href="https://twitter.com/RajanAmar999" class="btn" target="blank">twitter</a>
          <a href="https://www.instagram.com/amar__rajan/?hl=en" class="btn" target="blank">instagram</a>
          <a href="https://in.pinterest.com/amar1998fzd/" class="btn" target="blank">pinterest</a>
          <a href="https://www.linkedin.com/in/amar-mishra-860815122/" class="btn" target="blank">linkedin</a>
      </div>
  
      <h1 class="credit"> created by <span> Amar Mishra (Michael) </span> 2022 || All rights reserved! </h1>
  
  </section>
  <script
src="https://code.jquery.com/jquery-3.6.0.js"></script>
<script>
$(document).on('click','ul li',function(){
$(this).addClass('active').siblings().removeClass('active')
})
</script>

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
        <li><a href="../HTML/tagstemplate1.html" class="btn">Beef (4)</a></li>
        <li><a href="../HTML/tagstemplate2.html" class="btn">Breakfast (1)</a></li>
        <li><a href="../HTML/tagstemplate3.html" class="btn">Lunch (3)</a></li>
        <li><a href="../HTML/tagstemplate4.html" class="btn">Dinner (2)</a></li></ol>
    </div>`
  
  }
}
customElements.define('my-recipe', MyRecipe)

const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length;
for(let i=0; i < menuLength; i++){
  if(menuItem[i].href===currentLocation){
      menuItem[i].className = "active"
  }
}

class MyRecipeCard extends HTMLElement {
  connectedCallback() {
      this.innerHTML =`<div class="recipes-list">
      <!-- single recipe -->
      <a href="#" class="recipe">
        <img
          src="../images/g-6.jpg"
          class="img recipe-img"
          alt=""
        />
        <h5>Carne Asada</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      <!-- end of single recipe -->
      <!-- single recipe -->
      <a href="#" class="recipe">
        <img
          src="../images/g-3.jpg"
          class="img recipe-img"
          alt=""
        />
        <h5>Greek Ribs</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      <!-- end of single recipe -->
      <!-- single recipe -->
      <a href="#" class="recipe">
        <img
          src="../images/g-4.jpg"
          class="img recipe-img"
          alt=""
        />
        <h5>Vegetable Soup</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      <!-- end of single recipe -->
      <!-- single recipe -->
      <a href="#" class="recipe">
        <img
          src="../images/g-5.jpg"
          class="img recipe-img"
          alt=""
        />
        <h5>Banana Pancakes</h5>
        <p>Prep : 15min | Cook : 5min</p>
      </a>
      <!-- end of single recipe -->
    </div>`
  
  }
}
customElements.define('my-recipe-card', MyRecipeCard)