# AoV Hero Strategist (傳說對決英雄戰略家)

這是一個基於 **原生 JavaScript (Vanilla JS)** 開發的英雄資訊管理系統。本專案旨在透過實作 **MVC (Model-View-Controller)** 架構，達成資料處理與視覺呈現的完全解耦。

---

## 核心功能

- **非同步資料管理**：使用 `Fetch API` 獲取 JSON 英雄資料，並實作快取機制 (Caching) 減少重複請求。
- **多重篩選邏輯**：
  - 支援英雄「多重職業」精準過濾（如：坦克/輔助）。
  - 實作「英雄特性 (Traits)」篩選功能（如：真傷、霸體、恢復）。
  - 動態血量門檻過濾系統。
- **效能優化**：
  - 運用 **事件委派 (Event Delegation)** 減少 DOM 監聽器數量。
  - 使用 `DocumentFragment` 批量渲染，降低瀏覽器重繪 (Reflow) 頻率。

---

## 技術重點：MVC 架構實踐

本專案嚴格遵循 MVC 設計模式，確保程式碼具備高度的可維護性與擴充性：

- **Model (資料層)**：負責英雄資料的 `Fetch`、`Cache` 以及核心過濾邏輯。資料層完全不接觸 DOM。
- **View (視圖層)**：負責畫面渲染與 DOM 事件監聽。僅透過 `Callback` 與 Controller 通訊。
- **Controller (控制層)**：作為兩者的橋樑，負責協調 Model 的資料流向 View，並決定使用者的操作對應何種業務邏輯。

---

## 資料夾結構

- `/js/model`: 處理英雄數據邏輯
- `/js/pages`: 依頁面拆分的 Controller 與 View
- `/style`: 模組化 CSS 樣式
- `data.json`: 英雄資料庫

---

## 未來規劃

- [ ] 排位賽推薦英雄演算法。
- [ ] 英雄強弱等級 (Tier List) 標註。
- [ ] 本地存儲 (LocalStorage) 記錄使用者偏好。
