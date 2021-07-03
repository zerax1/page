form.onsubmit= (event) => {
    event.preventDefault()
    try{
        if(!fname.value && !lname.value) throw new Error('Ism va familiyangizni toliq  kiriting')
        if(fname.value.match(/[0-9]/) || lname.value.match(/[0-9]/)) throw new Error('Ism va familyada son ishlatilmasin')
    }catch(error){
        errorfname.textContent=error.message
    }
    try{
        if(!username.value) throw new Error('username kiritish shart')
        if(username.value.length>12) throw new Error('username 12 ta belgidan oshmasligi kerak')
        if(!username.value.match(/[A-Z]/)) throw new Error('username katta harfdan foydalanish kerak')
        if(!username.value.match(/[0-9]/)) throw new Error('username belgi va raqamdan foydalanish kerak')
    }catch(error){
        usercheck.textContent=error.message
    }
    try{
        if(!password.value) throw new Error("parol kiritilishi shart")
        if(!password.value.match(/[0-9]/)) throw new Error("parolda raqam qatnashishi shart")
        if(password.value.length<8) throw new Error("parol kamida 8ta belgidan iborat bo'lishi kerak")
        if(!password.value.match(/[a-z]/)) throw new Error('parolda harfdan foydalanish kerak')
    }catch(error){
        passcheck.textContent=error.message
    }
    try{
        if(!email.value) throw new Error("email kiritilishi shart")
        let gmailkey='@gmail.com'
        let counter=0
        let n=0
        let j=0
        
        n=email.value.indexOf('@')
        
        for(let i=n;i<email.value.length;i++){
            if(gmailkey[j]==email.value[i]){
                counter++
            }
            j++
        }
        if(counter!==10) throw new Error('Emailda @gmail.com bilan tugashi kerak')
        
    }catch(error){
        emailcheck.textContent=error.message
    }
    try{
        if(conpass.value!==password.value) throw new Error('Avval kiritgan parolingiz bilan mos tushmadi')
        if(!conpass.value) throw new Error('Parolni tasdiqlang')
        heading.textContent="Muvaffaqiyatli Ro'yxatdan O'tdingiz!"
        

    }catch(error){
        conpasscheck.textContent=error.message
    }
    
}
