function calcular(n1, n2){
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
     
    selector = document.getElementById("selector").value
    
    switch(selector) { 
        case'+':
            calculo = (n1 + n2)
            document.getElementById("resultado").innerHTML = `O resultado da soma de ${n1} + ${n2} = ${calculo}`
            break

        case'-':
            calculo = (n1 - n2)
            document.getElementById("resultado").innerHTML = `O resultado da subtração de ${n1} - ${n2} = ${calculo}`
            break

        case'*':
            calculo = (n1 * n2)
            document.getElementById("resultado").innerHTML = `O resultado da multiplicação de ${n1} x ${n2} = ${calculo}`
            break
        
        case'/':
            calculo = ((n1/n2))
            if(Number.isNaN(calculo)){
                document.getElementById("resultado").innerHTML = `Insara uma divisor válido`
            } 
            else {
                document.getElementById("resultado").innerHTML = `O resultado da divisão ${n1} / ${n2} = ${calculo.toFixed(2)}`
                break
            }
            
        case'%':
            calculo = ((n1/100)*n2)
            document.getElementById("resultado").innerHTML = `${n1}% de ${n2} = ${n1}/100 x ${n2} = ${calculo.toFixed(2)}`
            break
    
    }
}

