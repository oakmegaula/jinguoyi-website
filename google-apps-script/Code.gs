/**
 * 金菓薏官網「免費品牌健檢」表單 → Google Sheet 接收端
 *
 * 部署方式請見同資料夾的 README.md
 */

function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var data = JSON.parse(e.postData.contents);

  var headers = ["時間", "姓名稱呼", "品牌服務類型", "粉專連結", "是否買過假粉", "每月預算", "聯絡方式", "需求項目", "來源頁面"];
  if (sheet.getLastRow() === 0) {
    sheet.appendRow(headers);
  }

  sheet.appendRow([
    new Date(),
    data.name || "",
    data.bizType || "",
    data.fbLink || "",
    data.fakeFans || "",
    data.budget || "",
    data.contact || "",
    data.interests || "",
    data.page || ""
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ result: "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}
