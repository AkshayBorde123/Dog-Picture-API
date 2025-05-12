let url = "https://dog.ceo/api/breeds/image/random ";

let btn = document.querySelector("button");
let img = document.querySelector("img");

btn.addEventListener("click", async () => {
  let path = await generateImg();
  img.setAttribute("src", path);
  console.log(path);
});

async function generateImg() {
  try {
    let res = await axios.get(url);
    return res.data.message;
  } catch (e) {
    return "Image Not Found";
  }
}
