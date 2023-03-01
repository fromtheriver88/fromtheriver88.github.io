/* const btnToggle = document.querySelector('.toggle-btn');

btnToggle.addEventListener('click', function() {
	document.getElementById('sidebar').classlist.toggle('active');
	// body...
})
 */




const boton = document.getElementById("boton");
const seccion = document.getElementById("miboton");

boton.addEventListener("click", function() {
  if (seccion.style.display === "none") {
    seccion.style.display = "block";
  } else {
    seccion.style.display = "none";
  }
});