function randomColor(number) {
   return Math.floor(Math.random() * (number + 1));
}

function cuadrado() {
   let cuadrado = document.createElement('div'), tomar = document.getElementById('container');

   cuadrado.style.padding = '60px';
   cuadrado.style.background = '#00b4d8';
   cuadrado.style.border = '2px solid white';
   cuadrado.style.width = '200px';
   cuadrado.style.height = '200px';
   cuadrado.style.margin = '0 auto';
   cuadrado.style.transition = '250ms';
   cuadrado.style.marginBottom = '25px';

   tomar.appendChild(cuadrado);

   cuadrado.addEventListener('mouseenter', function (e) {
      let effecto = e.target, 
      changeColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;

      effecto.style.background = changeColor;
      effecto.style.transition = '250ms'; 
   });

   cuadrado.addEventListener('mouseleave', function (e) {
      let effecto = e.target;

      effecto.style.background = '#00b4d8';
      effecto.style.transition = '250ms'; 
   });
}

function circulo() {
   let circulo = document.createElement('div'), tomar = document.getElementById('container');

       circulo.style.padding = '60px';
       circulo.style.width = '200px';
       circulo.style.height = '200px';
       circulo.style.border = '2px solid white';
       circulo.style.borderRadius = '100px';
       circulo.style.background = '#00b4d8';
       circulo.style.margin = '0 auto';
       circulo.style.marginBottom = '25px';

       tomar.appendChild(circulo);

       circulo.addEventListener('mouseenter', function(e) {
          let effecto = e.target, 
          changeColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;

          effecto.style.background = changeColor;
          effecto.style.transition = '250ms';
       });

       circulo.addEventListener('mouseleave', function(e) {
         let effecto = e.target;

         effecto.style.background = '#00b4d8';
         effecto.style.transition = '250ms';
      });
}

function rectangulo() {
   let rectangulo = document.createElement('div'), tomar = document.getElementById('container');
   
   rectangulo.style.padding = '60px';
   rectangulo.style.width = '300px';
   rectangulo.style.border = '2px solid white';
   rectangulo.style.background = '#00b4d8';
   rectangulo.style.margin = '0 auto';
   rectangulo.style.marginBottom = '25px';

   tomar.appendChild(rectangulo);

   rectangulo.addEventListener('mouseenter', function(e) {
      let efecto = e.target, 
      changeColor = `rgb(${randomColor(255)}, ${randomColor(255)}, ${randomColor(255)})`;

      efecto.style.background = changeColor;
      efecto.style.transition = '250ms';
   });

   rectangulo.addEventListener('mouseleave', function(e) {
      let efecto = e.target;

      efecto.style.background = '#00b4d8';
      efecto.style.transition = '250ms';
   });
}

cuadrado();
circulo();
rectangulo();
triangulo();