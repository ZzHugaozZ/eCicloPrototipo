btVoltar.addEventListener("click", (err) => {
    window.location.href = "../telas/tInicial.html";
  })
  const auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (!user) {
    window.location.href = "../telas/index.html";
  }
});