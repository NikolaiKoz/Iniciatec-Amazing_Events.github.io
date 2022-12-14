const setData = () => {
  const data = JSON.parse(localStorage.getItem("dataEvent"));
  const { name, description, img, date, price } = data;


  const main = document.getElementById("main");

  main.innerHTML = `
    <section class="detailsContainer">

    <figure class="detailsImgContainer">
        <img class="detailsImg" src="${img}" alt="Event img">
    </figure>

    <figcaption class="detailsImgInfo">
        <h3>${name}</h3>
        <p>${description}</p>
        <div class="another">
            <p class="detailsDate">${date}</p>
            <button class="details-Btn">BUY $${price}</button>
        </div>
    </figcaption>

</section>
    `;
};
setData();
