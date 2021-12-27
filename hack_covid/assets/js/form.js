function post(options) {
  const succesMsg = document.getElementById("succes-msg");
  fetch("http://41.226.11.252:11895/inscrire/", {
    method: "post",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(options),
  })
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data);
      if (!data.errors) {
        succesMsg.innerHTML = "Votre inscription a été enregistrée avec succès";
        succesMsg.style.opacity = 1;

        setTimeout(() => {
          succesMsg.style.opacity = 0;
        }, 2000);
      }
    });
}
async function submit() {
  const nom = document.getElementById("nom").value;
  const prenom = document.getElementById("prenom").value;
  const age = document.getElementById("age").value;
  const profession = document.getElementById("exampleFormControlSelect1").value;
  const telephone = document.getElementById("num-tel").value;
  const email = document.getElementById("email").value;
  const ville = document.getElementById("ville").value;
  const titreProjet = document.getElementById("Titre_projet").value;
  const condidature = document.getElementById("condidature").value;
  const typeParticipation = document.getElementById("exampleFormControlSelect2")
    .value;

  const lien = document.getElementById("vid").value;
  const options = {
    nom,
    prenom,
    age,
    profession,
    telephone,
    email,
    ville,
    titreProjet,
    typeParticipation,
    condidature,
    lien,
  };
  if (
    !nom ||
    !prenom ||
    !age ||
    !profession ||
    !telephone ||
    !email ||
    !ville ||
    !titreProjet ||
    !typeParticipation ||
    !condidature
  ) {
    return alert("Veuillez remplir tous les champs. !");
  } else if (isNaN(age)) {
    return alert("Age invalide!");
  } else if (isNaN(telephone)) {
    return alert("Num telephone invalide!");
  }

  post(options);
}
document.getElementById("form_button").addEventListener("click", submit);
