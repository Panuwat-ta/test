import React from 'react'
import { Link } from 'react-router-dom'

function HomePage() {
  // TODO: จะย้าย logic จาก App.jsx เดิมมาที่นี่ในข้อถัดไป
  
  return (
    <div>
      <header>
        <h1>🍳 Recipe Finder (React V2 with Router)</h1>
        <p>กำลังพัฒนา... (ข้อ 2.2)</p>
      </header>
      
      {/* ทดสอบ router */}
      <Link to="/meal/52772">ทดสอบไปหน้ารายละเอียด</Link>
    </div>
  )
}

export default HomePage