function toggleMode() {
  const html = document.documentElement
  html.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  //substituir a imagem
  if (html.classList.contains("light")) {
    //se  tiver com light mode. adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar-light.png")
  } else {
    //se tiver sem light mode. adicionar a imagem ligth
    img.setAttribute("src", "./assets/avatar.png")
  }

  //mudar a escrita da imagem com light mode
  // {
  //img.setAttribute("alt", "Foto de Mayk Brito sorrindo, de óculos de sol e camisa azul ")
  //} else {
  //mudar a escrita da imagem sem light mode
  //img.setAttribute("alt", "Foto de Mayk Brito sorrindo, //de óculos e camiseta preta.")

  //}
}
