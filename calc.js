const hasil = document.querySelector('.result');
const reset = document.querySelector('.reset');
function addData(value){
    document.querySelector('input').value += value;
}

    hasil.addEventListener('click',()=>{
        const resultValue = document.querySelector('input')
        document.querySelector('input').value = eval(resultValue.value)
    })
    reset.addEventListener('click',()=>{
        document.querySelector('input').value = " ";
    })
    function deleteData(value){
        if(value.key === "Backspace"){
            const del = document.querySelector('.result').valu
            document.querySelector('.result').value = del.slice(0,-1);
        }
    }

