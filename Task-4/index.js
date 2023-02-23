document.addEventListener("DOMContentLoaded", () => {
  let clickCount1 = 0;
  let clickCount2 = 0;
  let clickCount3 = 0;
  let clickCount4 = 0;
  let clickCount5 = 0;
  let clickCount6 = 0;

  // Create the first element
  const div1 = document.createElement("div");
  div1.style.width = "200px";
  div1.style.height = "200px";
  div1.style.backgroundColor = "red";
  div1.style.display = "flex";
  div1.style.margin = "10px";
  div1.style.justifyContent = "center";
  div1.style.alignItems = "center";
  div1.innerText = ` ${clickCount1} `;
  div1.addEventListener("click", () => {
    clickCount1++;
    div1.innerText = ` ${clickCount1} `;
    div1.style.backgroundColor = "blue";
  });
  document.body.appendChild(div1);

  // Create the second element 
  const div2 = document.createElement("div");
  div2.style.width = "300px";
  div2.style.height = "100px";
  div2.style.backgroundColor = "purple";
  div2.style.display = "flex";
  div2.style.marginTop = "-160px";
  div2.style.marginLeft = "210px";
  div2.style.verticalAlign = "top";
  div2.style.justifyContent = "center";
  div2.style.alignItems = "center";
  div2.innerText = ` ${clickCount1} `;
  div2.style.display = "flex";

  div2.addEventListener("click", () => {
    clickCount2++;
    div2.innerText = ` ${clickCount2} `;
    div2.style.backgroundColor = "green";
  });
  document.body.appendChild(div2);

  // Create the third element
  const div3 = document.createElement("div");
  div3.style.width = "150px";
  div3.style.height = "50px";
  div3.style.backgroundColor = "blue";
  div3.style.display = "flex";
  div3.style.marginTop = "-150px";
  div3.style.marginLeft = "210px";
  div3.style.verticalAlign = "top";
  div3.style.justifyContent = "center";
  div3.style.alignItems = "center";
  div3.innerText = ` ${clickCount1} `;
  div3.addEventListener("click", () => {
    clickCount3++;
    div3.innerText = ` ${clickCount3} `;
    div3.style.backgroundColor = "yellow";
  });
  document.body.appendChild(div3);

  // Create the fourth element
  const div4 = document.createElement("div");
  div4.style.width = "150px";
  div4.style.height = "50px";
  div4.style.backgroundColor = "green";
  div4.style.display = "flex";
  div4.style.marginTop = "-50px";
  div4.style.marginLeft = "360px";
  div4.style.verticalAlign = "top";
  div4.style.justifyContent = "center";
  div4.style.alignItems = "center";
  div4.innerText = ` ${clickCount1} `;
  div4.addEventListener("click", () => {
    clickCount4++;
    div4.innerText = ` ${clickCount4} `;
    div4.style.backgroundColor = "orange";
  });
  document.body.appendChild(div4);

  // Create the fifth element 
  const div5 = document.createElement("div");
  div5.style.width = "150px";
  div5.style.height = "50px";
  div5.style.backgroundColor = "orange";
  div5.style.display = "flex";
  div5.style.marginTop = "100px";
  div5.style.marginLeft = "210px";
  div5.style.verticalAlign = "top";
  div5.style.justifyContent = "center";
  div5.style.alignItems = "center";
  div5.innerText = ` ${clickCount1} `;
  div5.addEventListener("click", () => {
    clickCount5++;
    div5.innerText = ` ${clickCount5} `;
    div5.style.backgroundColor = "purple";
  });
  document.body.appendChild(div5);
  6;
  // Create the sixth element
  const div6 = document.createElement("div");
  div6.style.width = "150px";
  div6.style.height = "50px";
  div6.style.backgroundColor = "beige";
  div6.style.display = "flex";
  div6.style.marginTop = "-50px";
  div6.style.marginLeft = "360px";
  div6.style.verticalAlign = "top";
  div6.style.justifyContent = "center";
  div6.style.alignItems = "center";
  div6.innerText = ` ${clickCount1} `;
  div6.addEventListener("click", () => {
    clickCount6++;
    div6.innerText = `${clickCount6}`;
    div6.style.backgroundColor = "pinq";
  });
  document.body.appendChild(div6);
});
