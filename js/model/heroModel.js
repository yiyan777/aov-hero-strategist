// heroModel.js 處理「英雄資料」的獲取與過濾

let cachedData = null; // 只要網頁沒有重新整理（F5），heroModel.js 裡面的 let cachedData 就會一直住在記憶體裡。

export const getHerosData = async () => {
  if (cachedData) return cachedData;

  try {
    const result = await fetch("data.json");

    if (!result.ok) {
      console.error("伺服器出現錯誤"); // 通常是伺服器問題（404, 500）
      return;
    }

    const data = await result.json(); // 用 Response 物件的 .json()方法解析成 JS 物件

    if (!Array.isArray(data) || data.length === 0) {
      console.error("資料為空或不存在");
      return;
    }

    cachedData = data;
    return data;
  } catch (e) {
    console.error("伺服器出現錯誤");
  }
};

// 具名匯出
export const findHerosLifeOver3000 = async () => {
  try {
    const data = await getHerosData();

    if (!data) return [];

    const filteredHeros = data.filter((hero) => hero.life > 3000);
    return filteredHeros;
  } catch (e) {
    console.error("處理過濾資料失敗", e); // 通常是網路斷線或 JSON 解析失敗
  }
};

// export const removeHeroById = (heroId) => {
//   console.log("Model 收到要被刪除的英雄ID:" + heroId);
//   // console.log(cachedData);
//   console.log(cachedData);
//   const newData = cachedData.filter((h) => h.id !== Number(heroId));
//   cachedData = newData;
//   return newData;
// };

export const resetData = async () => {
  try {
    const result = await fetch("data.json");

    if (!result.ok) {
      console.error("伺服器出現錯誤"); // 通常是伺服器問題（404, 500）
      return;
    }

    const data = await result.json(); // 用 Response 物件的 .json()方法解析成 JS 物件

    if (!Array.isArray(data) || data.length === 0) {
      console.error("資料為空或不存在");
      return;
    }

    cachedData = data;
    return data;
  } catch (e) {
    console.error("伺服器出現錯誤");
  }
};

export const getHerosByOccupation = async (occupation) => {
  // console.log("Model收到了" + occupation);
  const data = await getHerosData();
  // console.log(data);
  const filteredData = data.filter((h) => h.occupation.includes(occupation));
  console.log(`${occupation}陣列:`, filteredData);
  return filteredData;
};
