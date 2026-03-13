// controller.js 負責決定何時拿資料、決定何時開始畫畫面

import {
  findHerosLifeOver3000,
  // removeHeroById,
  getHerosData,
  resetData,
  getHerosByOccupation,
} from "../../model/heroModel.js"; // 具名匯入
import { showHeros, initEventListeners } from "./heroView.js";

// const handleDeleteHero = async (heroId) => {
//   console.log("controller 收到要被刪除的英雄ID:" + heroId);
//   const newData = removeHeroById(heroId); // 呼叫model並把id傳給model, model回傳已將該id踢出的新陣列
//   console.log(newData);

//   const filteredData = await findHerosLifeOver3000(newData);

//   showHeros(filteredData, handleDeleteHero); // model回傳的結果丟給view渲染
// };

// const handleDeleteHeroForReset = async (heroId) => {
//   console.log("controller 收到要被刪除的英雄ID:" + heroId);
//   const newData = removeHeroById(heroId); // 呼叫model並把id傳給model, model回傳已將該id踢出的新陣列
//   console.log(newData);

//   const filteredData = await getHerosData(newData);

//   showHeros(filteredData, handleDeleteHeroForReset); // model回傳的結果丟給view渲染
// };

const handleFilterHero = async () => {
  console.log("老爸收到過濾按鈕被點的通知了");
  const filteredHeros = await findHerosLifeOver3000();
  console.log("過濾後的結果：", filteredHeros);
  showHeros(filteredHeros);
};

const handleResetAllHeros = async () => {
  console.log("老爸收到顯示全部的通知了");
  const allHeros = await resetData();
  showHeros(allHeros);
};

const handleShowOccupationHero = async (occupation) => {
  // console.log("從View回來的 " + occupation);
  const filteredData = await getHerosByOccupation(occupation);
  showHeros(filteredData);
};

const allHeros = await getHerosData(); // 預設初始畫面直接顯示所有英雄
showHeros(allHeros);

initEventListeners(
  handleFilterHero,
  handleResetAllHeros,
  handleShowOccupationHero,
); // 初始化事件監聽器
