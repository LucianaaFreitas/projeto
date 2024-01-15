function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se  tiver com light mode. adicionar a imagem ligth
    img.setAttribute("src", "./assets/img-luciana-light.png")
  } else {
    //se tiver sem light mode. adicionar a imagem ligth
    img.setAttribute("src", "./assets/img-luciana.png")
  }

}
