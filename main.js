// Etape 1 - Sélectionner nos éléments
let input = document.querySelector('#prix');
let bouton = document.querySelector('#formulaire');
let alerte = document.querySelector('small');

// Etape 2 - Cacher l'erreur
alerte.style.display="none";

// Etape 3 - Générer un nombre aléatoire
let nombreAléatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;

// Etape 6 - Créer la fonction vérifier
function verifier(nombre){
  let instructions = document.createElement('div');
  if(nombre<nombreAléatoire){
    instructions.textContent = "#" + coups + "(" + nombre + ") c'est plus!";
    instructions.className = "instruction plus";
  }
  else if(nombre>nombreAléatoire){
        instructions.textContent = "#" + coups + "(" + nombre + ") c'est moins!";
    instructions.className = "instruction moins";
  }
  else{
        instructions.textContent = "#" + coups + "(" + nombre + ") Félicitations, vous avez trouvé le Juste Prix!";
    instructions.className = "instruction fini";
  }

  //ajouter l'élément devant les autres
  document.querySelector('#instructions').prepend(instructions);
} 

// Etape 4 - Vérifier que l'utilisateur donne bien un nombre
input.addEventListener('keyup',()=>{
  if (isNaN(input.value)){
    alerte.style.display= "inline"
  }
  else{
    alerte.style.display= "none"
  };
});

// Etape 5 - Agir à l'envoi du formulaire
bouton.addEventListener('submit',(e)=>{
  e.preventDefault();
if (isNaN(input.value) || input.value==''){
  input.style.borderColor="red";
}  
else{
  coups++;
  input.style.borderColor="silver";
  nombreChoisi = input.value;
  input.value = '';
  verifier(nombreChoisi);
}  
});
