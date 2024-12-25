import Chawakorn 
from time import sleep
bot = Chawakorn.Bot('https://docs.google.com/forms/d/1x_X7xs1OPwtP49iQdT4R2lYtHiEbtYHt5Ao_gLYoM-Q/viewform?edit_requested=true')
def scroll_to_element(xpath):
    try:
        element = bot.find_element(xpath)
        bot.driver.execute_script("arguments[0].scrollIntoView();", element)
        sleep(1)  
    except Exception as e:
        print(f"Error scrolling to element: {e}")
target_iterations = 20  #เลือกจำนวนครั้ง
count = 0
success_count = 0
failure_count = 0
while count < target_iterations:
    try:
        bot.Start()
        bot.send_Click('//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div[1]/div/span')
        bot.send_Random_Click([
            '//*[@id="i6"]/div[3]/div',
            '//*[@id="i9"]/div[3]/div',
            '//*[@id="i12"]/div[3]/div',
       ])
        bot.send_Random_Click([
            '//*[@id="i20"]/div[3]/div',
            '//*[@id="i23"]/div[3]/div',
            '//*[@id="i26"]/div[3]/div',
            '//*[@id="i29"]/div[3]/div',
        ])
        bot.send_Random_Click([
            '//*[@id="i37"]/div[3]/div',
            '//*[@id="i40"]/div[3]/div',
            '//*[@id="i43"]/div[3]/div',
            '//*[@id="i46"]/div[3]/div',
            '//*[@id="i49"]/div[3]/div',
            ])
        bot.send_Random_Click([
            '//*[@id="i57"]/div[3]/div',
            '//*[@id="i60"]/div[3]/div',
            '//*[@id="i63"]/div[3]/div',
            '//*[@id="i66"]/div[3]/div',
            '//*[@id="i49"]/div[3]/div',
            ])
        bot.send_Click('//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div[1]/div[2]/span',)
        bot.send_Random_Click([
            '//*[@id="i6"]/div[3]/div',
            '//*[@id="i9"]/div[3]/div',
            '//*[@id="i12"]/div[3]/div',
            '//*[@id="i15"]/div[3]/div',
       ])
        bot.send_Random_Click([
            '//*[@id="i23"]/div[3]/div',
            '//*[@id="i26"]/div[3]/div',
            '//*[@id="i29"]/div[3]/div',
            '//*[@id="i32"]/div[3]/div',
        ])
        bot.send_Random_Click([
            '//*[@id="i40"]/div[3]/div',
            '//*[@id="i43"]/div[3]/div',
            '//*[@id="i46"]/div[3]/div',
            ])
        bot.send_Random_Click([
            '//*[@id="i54"]/div[3]/div',
            '//*[@id="i57"]/div[3]/div',
            '//*[@id="i60"]/div[3]/div',
            ])
        bot.send_Random_Click([
            '//*[@id="i71"]/div[3]/div',
            '//*[@id="i74"]/div[3]/div',
            '//*[@id="i77"]/div[3]/div',
            '//*[@id="i80"]/div[3]/div',
            '//*[@id="i83"]/div[3]/div',
        ])
        bot.send_Random_Click([
            '//*[@id="i91"]/div[3]/div',
            '//*[@id="i94"]/div[3]/div',
            '//*[@id="i97"]/div[3]/div',
        ])
        bot.send_Click('//*[@id="mG61Hd"]/div[2]/div/div[3]/div[1]/div[1]/div[2]/span')
        bot.close()
        count += 1
        success_count += 1
        print(f'สำเร็จครั้งที่ {count}')
    except Exception as e:
        failure_count += 1
        print(f"Error occurred during iteration {count + 1}: {e}")
        bot.close()
print(f"จำนวนครั้งที่สำเร็จ: {success_count}")
print(f"จำนวนครั้งที่ไม่สำเร็จ: {failure_count}")
