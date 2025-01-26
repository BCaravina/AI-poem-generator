async function generatePoem(response) {
  //   let poemText = document.querySelector("#poem");
  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 20,
    cursor: "",
  });
}

async function getApiResponse(event) {
  event.preventDefault();

  const apiKey = "c49ed490tce5aa3a51c741aaobee84ef";
  const context =
    "You are a poet that writes romantic poems no longer than 6 lines. Separate each line with a <br /> and do not include a title to the poem";
  const userInput = document.querySelector("#text-input");
  let prompt = `Generate a poem in Brazilian Portuguese from the word ${userInput.value}`;
  const apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  axios.get(apiUrl).then(generatePoem);

  document.getElementById("poem").textContent = new Typewriter("#poem", {
    strings: "Creating a poem for you...",
    autoStart: true,
    cursor: "",
    loop: true,
  });
}
document.getElementById("poem-form").addEventListener("submit", getApiResponse);
// let formElement = document.querySelector("#poem-form");
// formElement.addEventListener("submit", getApiResponse);
