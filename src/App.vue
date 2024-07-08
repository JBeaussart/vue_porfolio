<template>
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" integrity="sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w==" crossorigin="anonymous" referrerpolicy="no-referrer" />
  <div id="nav">
  <header>
      <RouterLink to="/" class="name">Jérémy Beaussart</RouterLink>
      <nav>
        <ul class="nav_links">
          <li @click="e => e.target.classList.add('active')"><router-link to="/services">Services</router-link></li>
          <li @click="e => e.target.classList.add('active')"><router-link to="/projets">Projets</router-link></li>
          <li @click="e => e.target.classList.add('active')"><router-link to="/a-propos">À propos</router-link></li>
        </ul>
      </nav>
      <router-link to="/contact"><a class="cta"><button>Me contacter</button></a></router-link>
    </header>
  </div>
  <router-view/>
</template>

<style>
/* GENARALE STYLE */
@font-face {
  font-family: "RobotoMono";
  src: url('~@/assets/fonts/RobotoMono.ttf');
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "RobotoMono";
}

.container {
    width: 80%;
    margin: auto;
    margin-top: 120px;
  }

li,
a,
button {
  font-weight: 500;
  font-size: 16px;
  color: #26332d;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10%;
  background: white;
  margin-bottom: 30px;
  position: fixed;
  top: 0;
  width: 100%;
}

.name {
  cursor: pointer;
  font-size: 30px;
  color: #42b983;
  margin-right: auto;
  font-weight: bold;
}

.active {
  border-bottom: 2px #42b983 solid;
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
