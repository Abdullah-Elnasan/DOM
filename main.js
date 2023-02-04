var myContainer = document.createElement("div");
myContainer.setAttribute("class", "box-image");
var arrayH4 = [
  "مشاوي",
  "كبب",
  "شاورما",
  "لحم دجاج",
  "الفروج المشوي",
  "مندي دجاج",
  "مندي دجاج",
  " مندي دجاج مشوي",
  " الكبب القصورية",
  " كريسبي",
  " سمك مشوي",
  "همبرغر",
];
console.log(arrayH4[0]);
for (let i = 1; i < 13; i++) {
  var myDiv = document.createElement("div");
  var myImages = document.createElement("img");
  myImages.setAttribute("src", `image/img${[i]}.jpg`);
  var myH4 = document.createElement("h4");
  var myTextH4 = document.createTextNode(`${arrayH4[i - 1]}`);
  myH4.appendChild(myTextH4);
  myDiv.appendChild(myImages);
  myDiv.appendChild(myH4);
  myContainer.appendChild(myDiv);
  myDiv.setAttribute("class", "image");
  myH4.style =
    "text-align: center;font-weight: 800;color: white;font-family: sans-serif; background-color: #e6ae14; font-size: 20px;margin-top: 0px;padding: 10px; border-bottom-right-radius: 20px; border-bottom-left-radius: 20px";
  myImages.style =
    " border-top-left-radius: 10px; border-top-right-radius: 10px  ";
}

document.body.appendChild(myContainer);

myContainer.style =
  "display: flex;flex-wrap: wrap;width: 100%; justify-content: space-around; background-color: black; padding-top: 25px";
myImages.style.width = "calc(100%)";
