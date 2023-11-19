let formz = document.getElementById("formz")
formz.addEventListener('submit',(e)=>{
    e.preventDefault();
    let firstn = document.getElementById('firstn').value
    console.log(firstn)
    let lastn = document.getElementById('lastn').value 
    console.log(lastn);
    let birth = document.getElementById('birth').value
    console.log(birth);
    let Emai = document.getElementById('Emai').value
    console.log(Emai);
    let Add = document.getElementById('Add').value
    console.log(Add);
    let Cont = document.getElementById('Cont').value
    console.log(Cont);
    let sch = document.getElementById('sch').value
    console.log(sch);
})