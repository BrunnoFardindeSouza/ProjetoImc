let calcular = document.getElementById('calcular')
let limpar = document.getElementById('limpar')
let res = document.getElementById('msg')
let res1 = document.getElementById('msg1')
let res2 = document.getElementById('msg2')
let peso = document.getElementById('peso')
let altura = document.getElementById('altura')

calcular.addEventListener('click',()=>{
    if(peso.value.length == 0 || altura.value.length == 0 ){
        alert('Preencha todos os campos e tente novamente')
    }else{
        console.log(peso.value)
        res.style.display='block'
        let imc = Number(peso.value)/(Number(altura.value ** 2))
        res1.innerHTML=`Seu indice de massa corporal é ${imc}`
        if(imc >= 17.0 && imc <=18.4){
            // Magreza grau 1
            res2.innerHTML='Você faz parte da classfição : Magreza grau 1 '

        }else if(imc >= 18.5 && imc <= 24.9){
            // Adequado
            res2.innerHTML='Você faz parte da classfição : Adequado '

        }else if(imc >=25.0 && imc <=29.9){
            // Sobrepeso
            res2.innerHTML='Você faz parte da classfição : Sobrepeso '
        }else if(imc>=30.0){
            // Obesidade
            res2.innerHTML='Você faz parte da classfição : Obesidade '
        }
        setTimeout(()=>{
            imc = 0
            res1.innerHTML=''
            res2.innerHTML=''
            res.style.display='none'

        },15000) 

    }
    
})
limpar.addEventListener('click',()=>{
    res.style.display='none'
    peso.value=''
    altura.value=''

})