# 67543210044-3 panuwat takham

## ภาพรวมของโปรเจกต์: "Recipe Finder" 🍳
ในข้อสอบนี้คุณจะต้องสร้างเว็บแอปพลิเคชันสำหรับค้นหาสูตรอาหาร โดยใช้ Public API จาก TheMealDB ซึ่งเป็นบริการฟรีที่ไม่ต้องใช้ API Key การทำงานจะแบ่งออกเป็น 2 ส่วนหลัก เพื่อวัดความเข้าใจในเทคโนโลยีที่แตกต่างกัน

## คำแนะนำการใช้ TheMealDB API
เพื่อดึงข้อมูลจาก TheMealDB API (https://www.themealdb.com)

1. EndpointAPI Endpoint ค้นหาตาม KEYWORD: https://www.themealdb.com/api/json/v1/1/search.php?s=KEYWORD * แทนที่ KEYWORD ด้วยคำที่ผู้ใช้ค้นหา

ตัวอย่างคำค้นหา (Keywords):

ค้นหาตามหมวดหมู่ (Category): Seafood, Chicken, Beef, Pork, Dessert, Vegetarian, Pasta
ค้นหาตามสัญชาติ (Cuisine): Thai, Japanese, Italian, Mexican, Indian, Chinese
ค้นหาตามชื่อเมนู (Specific Meal): Arrabiata, Sushi, Lasagne, Pad Thai, Tom Yum Goong, Spaghetti Carbonara
💡 คำแนะนำ: เพื่อให้ง่ายต่อการทดสอบ ให้เริ่มจากการค้นหาด้วย หมวดหมู่ เช่น Chicken เพื่อดูว่าแอปของคุณสามารถแสดงผลหลายรายการได้ถูกต้องหรือไม่

นอกจากการค้นหาแล้ว TheMealDB API ยังสามารถดึงข้อมูลของเมนูอาหารที่เจาะจงด้วย ID ได้

2. Endpoint สำหรับดึงข้อมูลตาม ID: https://www.themealdb.com/api/json/v1/1/lookup.php?i=MEAL_ID * แทนที่ MEAL_ID ด้วย ID ของเมนูอาหาร (เช่น 52772) * ผลลัพธ์ที่ได้จะมีข้อมูล strInstructions (วิธีทำ), strIngredient1 - strIngredient20 (ส่วนผสม), และ strYoutube (ลิงก์วิดีโอ)

API นี้ไม่จำเป็นต้องใช้ Key ในการเข้าถึง คุณสามารถใช้คำค้นหา (Keyword) ที่หลากหลายเพื่อทดสอบแอปพลิเคชันของคุณได้


## Part 1: Vanilla JS & API Integration
เป้าหมาย: ใช้ HTML, CSS, และ JavaScript (ES6+) เพื่อทำให้หน้าเว็บแบบ Static สามารถค้นหาและแสดงผลข้อมูลสูตรอาหารจาก API ได้

## Live App Part1
- https://part1-vanilla-js.netlify.app/

## Part 2: React.js Application with Vite
เป้าหมาย: สร้างแอปพลิเคชันเดิมขึ้นมาใหม่ด้วย React.js เพื่อฝึกฝนการคิดแบบ Component-Based, การจัดการ State, และการ Build for Production

## Live App Part2
- https://part2-react.netlify.app/