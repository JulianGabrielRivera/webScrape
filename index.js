// just web scraping points for DOM manipulation lesson in ironhack
// https://news.ycombinator.com/

let pointsElement;
let articlesArray = [];
for (let i = 0; i < no.length - 1; i++) {
  pointsElement = no[i].children[0].innerHTML.split(" ")[0];
  console.log(pointsElement, "hi");
  console.log(i);
  console.log(no[i].children[0].innerHTML.split(" ")[0]);
  points = pointsElement ? pointsElement.innerHTML : "0";
  articlesArray.push({
    // title: articles[i].children[2].innerText,
    point: +pointsElement,
  });
}

articlesArray.sort(function (a, b) {
  return a.point - b.point;
});
