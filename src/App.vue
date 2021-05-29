<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div id="nav">
  <header>
      <div class="logo_container">
        <li><router-link to="/"><i class="fab fa-accusoft logo"></i></router-link></li>
      </div>
      <nav>
        <ul class="nav_links">
          <li><router-link to="/">Acceuil</router-link></li>
          <li><router-link to="/services">Services</router-link></li>
          <li><router-link to="/competence">Compétences</router-link></li>
          <li><router-link to="/portfolio">Portfolio</router-link></li>
          <li><router-link to="/tarif">Tarifs</router-link></li>
          <li><router-link to="/apropos">À propos</router-link></li>
        </ul>
      </nav>
      <router-link to="/contact"><a class="cta"><button>contact</button></a></router-link>
    </header>
  </div>
  <router-view/>
</template>

<style>

/* GENARALE STYLE */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  text-decoration: none;
  list-style-type: none;
}


li,
a,
button {
  font-family: "Montserrat", sans-serif;
  font-weight: 500;
  font-size: 16px;
  color: #26332d;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 20px 10%;
}

.logo {
  cursor: pointer;
  font-size: 50px;
  color: #42b983;
}

.logo_container {
  margin-right: auto;
}

.nav_links {
  list-style: none;
}

.nav_links li {
  display: inline-block;
  padding: 0px 20px;
}

.nav_links li a {
  transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
  color: #42b983;
  transition: all 0.3s ease 0s;
}

button {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: #42b983;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease 0;
  color: white
}

button:hover {
  background-color: #42b983dc;
}
</style>
