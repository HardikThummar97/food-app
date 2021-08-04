async function getData(url) {
  try {
    let res = await fetch(url);

    let data = await res.json();

    return data;
  } catch (err) {
    console.log("err:", err);
  }
}

// function appendData(products, parent) {
//   products.forEach(({ image, title, price }) => {
//     let div = document.createElement("div");

//     let p_name = document.createElement("p");
//     p_name.innerText = title;

//     let p_price = document.createElement("p");
//     p_price.innerText = price;

//     let img = document.createElement("img");
//     img.src = image;

//     div.append(img, p_name, p_price);

//     parent.append(div);
//   });
// }

export { getData };
