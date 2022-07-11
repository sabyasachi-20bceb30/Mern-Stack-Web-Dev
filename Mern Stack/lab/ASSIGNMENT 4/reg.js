const form = document.getElementsByTagName('form')[0];

form.addEventListener('submit',(event)=>{
    let valid = 1;
    let error_text = '';

    const name = document.getElementsByName('name')[0].value;
    console.log(name);
    if(name == '' && valid == 1){
        error_text = '*Please enter your Name';
        valid = 0;
        console.log(error_text);
        document.getElementById('name_error').style.display = 'block';
        document.getElementById('name_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('name_error').style.border = 'solid 2px red';
        document.getElementById('name_error').innerText = error_text;
    }

    const email = document.getElementsByName('email')[0].value;
    if(email == '' && valid == 1){
        error_text = '*Please enter your Email';
        valid = 0;
        document.getElementById('email_error').style.display = 'block';
        document.getElementById('email_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('email_error').style.border = 'solid 2px red';
        document.getElementById('email_error').innerText = error_text;
    }

     const phone_no = document.getElementsByName('phno')[0].value;

    const gender = document.getElementsByName('gender');
    let sex = '';
    for(let i=0;i<gender.length;i++)
    {
        if(gender[i].checked)
            sex=gender[i].value;
    }
    if(sex == '' && valid == 1){
        error_text = '*Please Select your Gender';
        valid = 0;
        document.getElementById('gender_error').style.display = 'block';
        document.getElementById('gender_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('gender_error').style.border = 'solid 2px red';
        document.getElementById('gender_error').innerText = error_text;
    }

     const address = document.getElementById('Address').value;

    const pincode = document.getElementsByName('pincode')[0].value;
    if(pincode == '' && valid == 1){
        error_text = '*Please enter your Pincode';
        valid = 0;
        document.getElementById('pincode_error').style.display = 'block';
        document.getElementById('pincode_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('pincode_error').style.border = 'solid 2px red';
        document.getElementById('pincode_error').innerText = error_text;
    }

    const password = document.getElementsByName('PASSWORD')[0].value;
    if(password == '' && valid == 1){
        error_text = '*Please Enter a Password';
        valid = 0;
        document.getElementById('password_error').style.display = 'block';
        document.getElementById('password_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('password_error').style.border = 'solid 2px red';
        document.getElementById('password_error').innerText = error_text;
    }

    const confirm_password = document.getElementsByName("confirm")[0].value;
    if(confirm_password == '' && valid == 1){
        error_text = '*Please write the Password set above';
        valid = 0;
        document.getElementById('confirm_error').style.display = 'block';
        document.getElementById('confirm_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('confirm_error').style.border = 'solid 2px red';
        document.getElementById('confirm_error').innerText = error_text;
    }
    else if(confirm_password != password && valid == 1)
    {
        error_text = '*The Password dont match';
        valid = 0;
        document.getElementById('confirm_error').style.display = 'block';
        document.getElementById('confirm_error').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('confirm_error').style.border = 'solid 2px red';
        document.getElementById('confirm_error').innerText = error_text;
    }

    const check = document.getElementById("t&c").checked ? document.getElementById("t&c").value : '';
    if(check == '' && valid == 1){
        error_text = '*Please CHECK the terms & conditions';
        valid = 0;
        document.getElementById('check_error').style.display = 'block';
        document.getElementById('cb').style.backgroundColor = 'rgba(255, 0, 0, 0.497)';
        document.getElementById('cb').style.border = 'solid 2px red';
        document.getElementById('check_error').innerText = error_text;
    }

    if(valid == 1){
        document.getElementById('reg.form').style.display = 'none';
        document.getElementById('complete').style.display = 'block';
        document.getElementById('content').style.display = 'block';
        document.getElementById('content').innerText = `PROFILE \n \nNAME: ${name} \nEMAIL: ${email} \nGENDER: ${sex} \nPINCODE: ${pincode} \nPASSWORD: ${password}`
    }
     
    event.preventDefault();
})