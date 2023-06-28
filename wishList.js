var item=document.querySelector('#lista')

function guardar(){
    sessionStorage.setItem('wishlist', item.innerHTML)
    alert('Libros guardados')

}

function mostrar(){
    if(sessionStorage.getItem('wishlist')){
        item.innerHTML=sessionStorage.getItem('wishlist')
    }
    
}

function borrar(){
    sessionStorage.clear()
    location.reload()
    alert("Libros eliminados")
    
}