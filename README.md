# 金菓薏官網 JIN GUOYI INTEGRATED MARKETING

純 HTML / CSS / JS 靜態網站，無需建置流程，可直接部署至 GitHub Pages 或任何靜態主機。

## 頁面結構

- `index.html` — 首頁
- `about.html` — 關於我們
- `services.html` — 服務介紹
- `cases.html` — 案例分享（列表）
- `case-detail.html` — 案例分享（內頁範例）
- `blog.html` — 知識文教學（列表）
- `blog-post.html` — 知識文教學（內頁範例）

## 目前狀態

版型已依據社群風格與 CIS 色系（橘 #DB8A3C／黑／米白）完整建置，圖片區塊皆為預留佔位色塊，
內文中標示「〔請填入⋯⋯〕」或斜體灰字者為預留文案位，正式文案與素材到位後可直接替換。

## 本機預覽

不需安裝任何套件，直接用瀏覽器開啟 `index.html`，或用簡易伺服器預覽：

```bash
python3 -m http.server 8000
```

再開啟 http://localhost:8000

## 部署到 GitHub Pages

1. 將此資料夾推送到 GitHub repo
2. 於 repo 設定 → Pages → Source 選擇 `main` 分支 `/ (root)`
3. 等待幾分鐘即可透過 `https://<帳號>.github.io/<repo>/` 存取
