<template>
  <!-- <footer class="">
    <p class="text-right">Copyright &copy; 1990-2014 Peter Doe, todos los derechos reservados.</p>
  </footer> -->
  <footer class="bg-dark text-white">
    <div class="container-fluid">
      <nav class="row">
        <ul class="col-3 list-unstyled">
          <img
            class="logo"
            src="https://www.carlogos.org/car-logos/tesla-logo.png"
            alt="logo"
          />
        </ul>
        <ul class="col-3 list-unstyled developers">
          <li class="fw-bold text-uppercase fs-5">Developers</li>
          <li class="fw-normal"><small>Axel Podostrojec</small></li>
          <li class="fw-normal"><small>Lautaro Robles</small></li>
          <li class="fw-normal"><small>Francisco Carbonelli</small></li>
          <li class="fw-normal"><small>Onnig Pannosiang</small></li>
        </ul>
        <ul class="col-3 list-unstyled">
          <li class="fw-bold text-uppercase fs-5 ">Redes sociales</li>
          <img
            class="redes-sociales"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/2048px-Facebook_f_logo_%282019%29.svg.png"
            alt="logo"
          />
          <img
            class="redes-sociales instagram"
            src="https://i.pinimg.com/originals/3b/21/c7/3b21c7efd2ba9c119fb8d361acacc31d.png"
            alt="logo"
          />
          <img
            class="redes-sociales"
            src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Twitter_Logo.png"
            alt="logo"
          />
          <img
            class="redes-sociales youtube"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4f/YouTube_social_white_squircle.svg/600px-YouTube_social_white_squircle.svg.png"
            alt="logo"
          />
        </ul>
        <ul class="col-3 list-unstyled">
          <img
            class="QR"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Codigo_QR.svg/1200px-Codigo_QR.svg.png"
            alt="logo"
          />
        </ul>
      </nav>
    </div>
  </footer>
</template>

<style>
/* footer {
  background-color: black;
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  color: rgb(255, 255, 255);
} */

ul {
  padding-top: 20px;
}

.logo {
  width: 40%;
  height: 85%;
}

.QR {
  width: 40%;
  height: 80%;
  float: right;
  background-color: white;
  margin-right: 16%;
}

.developers {
  float: right;
}

.redes-sociales {
  margin-top: 20px;
  margin-right: 10px;
  width: 30px;
  height: 30px;
}

.instagram {
  width: 40px;
  height: 40px;
}

.youtube {
  width: 40px;
  height: 40px;
}
</style>
