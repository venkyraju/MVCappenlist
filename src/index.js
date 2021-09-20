import "./styles.css";

class Model {
  constructor(data) {
    this.data = data || [
      {
        type: "taks",
        status: "todo",
        discription: "create list of items",
        id: "x45679"
      },
      {
        type: "taks",
        status: "todo",
        discription: "dom implementaion",
        id: "x45679"
      }
    ];
  }
  getDataList() {
    return this.data || [];
  }
  addList(item) {
    this.data.push(item);
  }
}

class View {
  constructor(model) {
    this.data = model;
  }

  createDom(rootElement) {
    const initData = this.data.getDataList();
    this.rootElement = rootElement;
    const datalist = initData.map((item) => {
      const itemEl = document.createElement("button");
      itemEl.innerText = item.discription;
      itemEl.type = "button";
      itemEl.id = item.id;
      itemEl.onclick = function () {
        alert("hi : " + itemEl.id);
      };
      return itemEl;
    });
    // Element.replaceChildren()
    this.rootElement.replaceChildren(...datalist);
  }
  rePiantall() {
    this.createDom(this.rootElement);
  }
}
const model = new Model();
const view = new View(model);
console.log(view);

view.createDom(document.getElementById("root"));
model.addList({
  type: "taks",
  status: "todo",
  discription: "create list of items2",
  id: "x45679d"
});
view.rePiantall(document.getElementById("root"));

model.addList({
  type: "taks",
  status: "todo",
  discription: "create list of items4",
  id: "x45679d"
});
view.rePiantall(document.getElementById("root"));
