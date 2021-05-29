<template>
  <div id="nav">
    <header class="container">
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

<script>
export default {
  name: 'Navbar',
  props: {
    msg: String
  }
}

window.addEventListener("scroll", function () {
  const header = document.querySelector("#nav");
  header.classList.toggle("sticky", window.scrollY > 50);
});
</script>

<style scoped>

#nav {
  position: sticky;
  top: 0;
  background: #272727;
  transition: 0.5s;
}

#nav.sticky {
  background: #fff;
  padding: 10px 10px;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0, 0.1);
}

li,
a,
button {
  font-family: "Open Sans", sans-serif;
  font-weight: 600;
  font-size: 16px;
  color: #26332d;
  text-decoration: none;
}

header {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 15px 0%;
}

.logo {
  cursor: pointer;
  font-size: 50px;
  color: #8b9be4;
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
  color: white;
  transition: all 0.3s ease 0s;
}

#nav.sticky .nav_links li a {
  color: black;
  transition: all 0.3s ease 0s;
}

.nav_links li a:hover {
  color: #8b9be4;
  transition: all 0.3s ease 0s;
}

button {
  margin-left: 20px;
  padding: 9px 25px;
  background-color: #5462a0;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  transition: all 0.3s ease;
  color: white
}

button:hover {
  background-color: #5462a0;
}
</style>
