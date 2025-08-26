# Meal Search App – Version 2 Analysis

## 1. Overview
Version 2 aims to enhance the existing Meal Search App with the following features:
- View detailed information of a selected meal.
- Display ingredients, instructions, and video tutorial links.
- Provide navigation back to the search results.

---

## 2. DOM Elements

### Existing Elements
- `#search-form` – Form for input and submit
- `#search-input` – Text input for search keyword
- `#results-grid` – Container for meal cards

### New Elements for Version 2
- `#meal-detail` – Container for meal details (initially hidden)
  - `<h2>` – Meal name
  - `<img>` – Meal image
  - `<ul>` – Ingredients list
  - `<p>` – Instructions
  - `<a>` – Video tutorial link (optional)
  - `<button id="back-btn">` – Back button to return to search

### Display Strategy
- Use `.hidden { display: none; }` class to toggle between:
  - `#results-grid` → Search results
  - `#meal-detail` → Detailed view

---

## 3. Event Handling Strategy

### Meal Card Click
- Meal cards are dynamically created in `displayRecipes()` function.
- Attach `click` event listener during creation:
  - Option 1: Pass entire `meal` object to `showMealDetails(meal)`
  - Option 2: Pass `meal.idMeal` to fetch full details from API (`lookup.php?i=ID`)

### Back Navigation
- `#back-btn` click listener to:
  - Hide `#meal-detail`
  - Show `#results-grid` (optionally re-fetch previous search results)

---

## 4. API Integration Plan

### Endpoints
1. Search meals by keyword (existing)
    `https://www.themealdb.com/api/json/v1/1/search.php?s=KEYWORD`
    ใช้สำหรับค้นหาและแสดง Meal Cards Response มี array ของ meals พร้อมข้อมูลเบื้องต้น เช่น idMeal, strMeal, strMealThumb, strCategory, strArea
2. Lookup meal by ID (new for detail page)
    `https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID`
    - ใช้สำหรับดึงรายละเอียดของเมนูที่ผู้ใช้คลิก
        - Response มีข้อมูลทั้งหมดรวมถึง: strMeal, strMealThumb, strCategory, strArea
        - strInstructions – วิธีทำ
        - strYoutube – ลิงก์วิดีโอ (ถ้ามี)
        - strIngredient1…20 และ strMeasure1…20 – ส่วนผสมและปริมาณ
3. Data Processing for Ingredients
    - Loop จาก 1 ถึง 20:
        - ตรวจสอบว่า strIngredientN มีค่าไม่ว่าง รวม strIngredientN + strMeasureN เป็นรายการ

4. Notes
    - สามารถเลือกวิธีแสดง Detail Page ได้สองแบบ:
        - ใช้ข้อมูลจาก Search API – ส่ง object meal ทั้งหมดไปแสดง detail
        - ใช้ Lookup API – ส่ง idMeal ไป fetch ใหม่ → ปลอดภัยกว่าหากต้องการข้อมูลครบสมบูรณ์

