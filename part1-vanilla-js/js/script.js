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
    const resultsGrid = document.getElementById('results-grid');
    
    if (!meals) {
        resultsGrid.innerHTML = '<p class="status-message">No recipes found.</p>';
        return;
    }
    
    resultsGrid.innerHTML = '';
    
    meals.forEach(meal => {
        // สร้าง meal card พร้อม data-meal-id
        const mealCard = document.createElement('div');
        mealCard.className = 'meal-card';
        mealCard.setAttribute('data-meal-id', meal.idMeal); // สำคัญ!
        mealCard.style.cursor = 'pointer'; // แสดงว่าคลิกได้
        
        mealCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <h3>${meal.strMeal}</h3>
        `;
        
        resultsGrid.appendChild(mealCard);
    });
    
    console.log('แสดงผลลัพธ์:', meals.length, 'รายการ');
}



// Global variables สำหรับ DOM elements
let mealDetailsSection = null;
let resultsContainer = null;

// อัปเดตฟังก์ชัน initializeDOMElements
function initializeDOMElements() {
    mealDetailsSection = document.getElementById('meal-details-section');
    resultsContainer = document.getElementById('results-container');
    
    // ติดตั้ง event handlers
    setupMealCardClickHandlers();
    setupBackButtonHandler();
    
    console.log('Initialize DOM elements และ event handlers เสร็จแล้ว');
}

// Function สำหรับแสดงหน้ารายละเอียด
function showMealDetailsPage() {
    if (resultsContainer) resultsContainer.style.display = 'none';
    if (mealDetailsSection) mealDetailsSection.classList.remove('hidden');
    
    // Scroll to top
    window.scrollTo(0, 0);
}

// Function สำหรับแสดงหน้าค้นหา
function showSearchPage() {
    if (mealDetailsSection) mealDetailsSection.classList.add('hidden');
    if (resultsContainer) resultsContainer.style.display = 'block';
}

// เรียกใช้ initialize เมื่อ DOM โหลดเสร็จ
document.addEventListener('DOMContentLoaded', initializeDOMElements);


// Event delegation สำหรับจับการคลิกที่ meal cards
function setupMealCardClickHandlers() {
    const resultsGrid = document.getElementById('results-grid');
    
    resultsGrid.addEventListener('click', function(event) {
        console.log('คลิกที่:', event.target);
        
        // หา meal card ที่ใกล้ที่สุด
        const mealCard = event.target.closest('.meal-card');
        
        if (mealCard) {
            const mealId = mealCard.getAttribute('data-meal-id');
            console.log('คลิกที่ meal ID:', mealId);
            
            if (mealId) {
                // เรียกฟังก์ชันเพื่อโหลดรายละเอียด
                loadMealDetails(mealId);
            }
        }
    });
    
    console.log('ติดตั้ง event listener สำหรับ meal cards แล้ว');
}


function setupBackButtonHandler() {
    const backButton = document.getElementById('back-to-search-btn');
    
    if (backButton) {
        backButton.addEventListener('click', function() {
            console.log('กดปุ่มกลับ');
            showSearchPage();
        });
        
        console.log('ติดตั้ง event listener สำหรับปุ่มกลับแล้ว');
    }
}


// Placeholder function สำหรับโหลดรายละเอียด (จะทำจริงในข้อต่อไป)
function loadMealDetails(mealId) {
    console.log('กำลังโหลดรายละเอียดสำหรับ meal ID:', mealId);
    
    // แสดงหน้ารายละเอียดก่อน (เพื่อทดสอบการทำงาน)
    showMealDetailsPage();
    
    // แสดง loading state
    document.getElementById('details-loading').classList.remove('hidden');
    document.getElementById('meal-details-content').classList.add('hidden');
    document.getElementById('details-error').classList.add('hidden');
    
    // TODO: จะเพิ่มการเรียก API จริงในข้อ 1.4
}