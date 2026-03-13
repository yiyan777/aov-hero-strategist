// showHeros.js 只負責將英雄陣列渲染出來，不用管是血量大於3000還是所有的英雄

export const initEventListeners = (
  onFilterClick,
  onResetAllClick,
  onOccupationClick,
) => {
  const lifeOver3000Btn = document.getElementById("lifeOver3000");
  const showAllHerosBtn = document.getElementById("showAllHeros");
  const titleH1 = document.getElementById("title");
  const occupationFilterDiv = document.getElementById("occupation-filter");

  lifeOver3000Btn.addEventListener("click", () => {
    titleH1.textContent = "血量大於3000的英雄";
    onFilterClick();
  });

  showAllHerosBtn.addEventListener("click", () => {
    titleH1.textContent = "所有英雄";

    onResetAllClick();
  });

  occupationFilterDiv.addEventListener("click", (e) => {
    // console.log("點到的是", e.target.tagName);
    if (e.target.tagName === "BUTTON") {
      const occupation = e.target.dataset.type;
      titleH1.textContent = occupation; // 修改標題為該被點擊之按鈕的 data-type
      // console.log(occupation);
      onOccupationClick(occupation);
    }
  });
};

export const showHeros = (Heros) => {
  const heroDiv = document.getElementById("heros");
  const fragment = document.createDocumentFragment(); // 虛擬容器

  heroDiv.innerHTML = "";

  // console.log(Heros);
  Heros.forEach((h) => {
    const heroWrapper = document.createElement("div");
    const heroNameH3 = document.createElement("h3");
    const heroOccupationP = document.createElement("p");
    const heroLifeP = document.createElement("p");
    const heroMoveP = document.createElement("p");
    const heroControlP = document.createElement("p");
    // const heroDeleteBtn = document.createElement("button");

    // heroDeleteBtn.addEventListener("click", (e) => {
    //   console.log(e.target.dataset);
    //   const { id } = e.target.dataset; // 解構賦值
    //   // 此時，View 應該立刻呼叫一個由 Controller 傳進來的「處理員（Handler）」，並把 id 當作參數丟進去。
    //   console.log("view 偵測到點擊, 抓 id 並傳給 controller");
    //   onDeleteClick(id);
    // });

    // heroDeleteBtn.dataset.id = h.id; // 設定 data-id 屬性
    // heroDeleteBtn.dataset.name = h.name; // 設定 data-name 屬性

    heroNameH3.textContent = `名稱：${h.name}`;
    heroOccupationP.textContent = `職業：${h.occupation.join("/")}`; // .join()方法會將陣列的元素提出並組成字串
    // console.log(typeof h.occupation.join("/"));

    heroLifeP.textContent = `血量：${h.life}`;
    // heroDeleteBtn.textContent = "X";

    heroWrapper.className = "hero-wrapper";
    // heroDeleteBtn.className = "hero-delete-btn";

    // heroWrapper.appendChild(heroDeleteBtn);
    heroWrapper.appendChild(heroNameH3);
    heroWrapper.appendChild(heroOccupationP);
    heroWrapper.appendChild(heroLifeP);

    fragment.appendChild(heroWrapper);
  });

  heroDiv.appendChild(fragment);
};
