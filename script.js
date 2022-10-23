
function conversor (num){
    num= document.querySelector("#numb").value
    if(num < 1 || num > 3999){
        alert('Apenas números entre 1 e 3999 são aceitos!')
    }
     else {
          var rom_p_num = {
            M: 1000,
            CM: 900,
            D: 500,
            CD: 400,
            C: 100,
            XC:90,
            L:50,
            XL:40,
            X: 10,
            IX: 9,
            V: 5,
            IV:4,
            I:1
        }
        var romano = "";

            for(var x in rom_p_num){

                while(num >= rom_p_num[x]){
                romano += x;
                num -= rom_p_num[x];
                }
            }
        var resp = document.querySelector("#resp") 
         num= document.querySelector("#numb").value
         resp.innerHTML = "O número:"; romano
         resp.innerText += num
         resp.innerText += " convertido em números romanos é:"
         resp.innerHTML += romano
        }

}
