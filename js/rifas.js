function calcTotal() {
    const precio=500
    console.log("Ingreso a calcTotal")

    let cant=document.getElementById("cant").value
    console.log(cant)

    if (cant>=1) {
        let total=cant*precio
        console.log(total)

        let desc=document.getElementById("desc").value
        total=total - (total*desc/100)
    
        // document.getElementById("total").style.color="red"
        document.getElementById("total").className="p-1"
        document.getElementById("total").innerHTML=total
            
    } else {
        document.getElementById("total").className="bg-danger p-1"
        document.getElementById("total").innerHTML="La cantidad de rifas debe ser mayor o igual a 1"
        
    }


    
}