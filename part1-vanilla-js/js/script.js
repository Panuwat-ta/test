//เลือก DOM Elements
const form = document.querySelector("#search-form");
const searchInput = document.getElementById("search-input");
const resultsGrid = document.getElementById("results-grid");

//เพิ่ม Event Listener
form.addEventListener("submit", (event) => {
    event.preventDefault();
    const keyword = searchInput.value.trim(); // ดึงค่าจาก input
    if (keyword) {
        
        //เรียกใช้ฟังก์ชัน
        searchRecipes(keyword); //รับคำค้นมาจาก input 
        console.log(keyword)
    }
});

//สร้าง async function
async function searchRecipes(keyword) {
    try {
        //Loading State
        resultsGrid.innerHTML = "<p>Searching for recipes...</p>";
        console.log("loading:", "โหลดอยู่รอแปป", resultsGrid.innerHTML);
        const response = await fetch(
            `https://www.themealdb.com/api/json/v1/1/search.php?s=${keyword}`
        );
        const data = await response.json();

        //เรียกฟังก์ชันแสดงผล
        displayRecipes(data.meals);

        console.log("Response data:", data);
    } catch (error) {
        console.error("Error fetching data:", error);
        //แสดงข้อผิดพลาด
        resultsGrid.innerHTML = "<p>An error occurred. Please try again later.</p>";
    }
}

//สร้างฟังก์ชันแสดงผล
function displayRecipes(meals) {
    // ล้างข้อมูลเก่า
    resultsGrid.innerHTML = "";

    //ตรวจสอบข้อมูล
    if (!meals) {
        resultsGrid.innerHTML = "<p>No recipes found.</p>";
        return;
    }

    //วนลูปและสร้าง Element
    meals.forEach((meal) => {
        const mealDiv = document.createElement("div");
        mealDiv.classList.add("meal-card");

        //สร้าง Meal Card
        mealDiv.innerHTML = `
      <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
      <h3>${meal.strMeal}</h3>
      <h3>Category: ${meal.strCategory}</h3>
      <h3>Area: ${meal.strArea}</h3>
      <h3><a href="${meal.strSource || '#'}" target="_blank">View Recipe</a></h3>
    `;

        resultsGrid.appendChild(mealDiv);
    });
}


