import aboutImg from "./assets/hero-img.jpg"

const content = document.getElementById("content")

let loadAbout = function () {
    const info = document.createElement("div");
    info.setAttribute("id", "info")

    const heading = document.createElement("h2")
    heading.textContent = "Lorem ipsum"
    info.appendChild(heading)

    const aboutText = document.createElement("p")
    aboutText.textContent = "Lorem ipsum dolor sit amet consectetur adipiscing elit. Ex sapien vitae pellentesque sem placerat in id.Pretium tellus duis convallis tempus leo eu aenean.Urna tempor pulvinar vivamus fringilla lacus necmetus.Iaculis massa nisl malesuada lacinia integer nunc posuere.Semper vel class aptent taciti sociosqu ad litora.Conubia nostra inceptos himenaeos orci varius natoque penatibus.Dis parturient montes nascetur ridiculus mus donec rhoncus.Nulla molestie mattis scelerisque maximus eget fermentum odio.Purus est efficitur laoreet mauris pharetra vestibulum fusce."
    info.appendChild(aboutText)

    const imageCell = document.createElement("div");
    imageCell.setAttribute("id", "hero-img")

    const heroImage = document.createElement("img")
    heroImage.src = aboutImg;
    heroImage.setAttribute("alt", "french toast with blueberries")
    imageCell.appendChild(heroImage)

    content.appendChild(info)
    content.appendChild(imageCell)

    return;
}

export {loadAbout};