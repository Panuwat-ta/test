import React from 'react'
import { Link, useParams } from 'react-router-dom'

function MealDetailPage() {
  const { mealId } = useParams()
  
  // TODO: จะเพิ่ม logic ดึงข้อมูลในข้อถัดไป
  
  return (
    <div>
      <Link to="/">← กลับไปหน้าค้นหา</Link>
      <h1>หน้ารายละเอียดอาหาร</h1>
      <p>Meal ID จาก URL: {mealId}</p>
      <p>กำลังพัฒนา... (ข้อ 2.3-2.4)</p>
    </div>
  )
}

export default MealDetailPage