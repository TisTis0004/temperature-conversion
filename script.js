const input = document.getElementById('input')
const submit = document.getElementById('submit')
const result = document.getElementById('result')
const f = document.getElementById('f')
const c = document.getElementById('c')

submit.onclick = () => {
    let temp = parseInt(input.value)
    if(f.checked){
        temp = temp * 1.8 + 32
        result.innerText = `The temperature is ${temp.toFixed(2)} °F.`
    }
    else if(c.checked){
        temp = (temp - 32) * 0.55
        result.innerText = `The temperature is ${temp.toFixed(2)} °C.`
    }
    else if(isNaN(temp))
        result.innerText = `Please enter a temperature first.`
    else
        result.innerText = `Please select a temperature scale to be converted to.`
}
