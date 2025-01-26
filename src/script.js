function generatePoem(event) {
  event.preventDefault();

  //   let poemText = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: "La vie en rose",
    autoStart: true,
    delay: 60,
    cursor: "",
    loop: false,
  });
}

let formElement = document.querySelector("#poem-form");
formElement.addEventListener("submit", generatePoem);
