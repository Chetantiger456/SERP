
    function loadPage(){
        document.getElementById('username').textContent = localStorage.getItem('username')
        console.log(arrayOfProduct)
        displayList()
    }

    
    var arrayOfProduct = []

    function addproduct(event){
        event.preventDefault()
         
        var product = document.getElementById('product').value
        if(product == '' && product.length == 0){
            document.getElementById('productErrorMsg').textContent = 'Item cannot be empty'
            return false
        }else{ 
            document.getElementById('productErrorMsg').textContent = ''
            //return true
        }
        var date = new Date
        date = date.toDateString().slice(4, 10)
        date = `${date.split(' ')[1]} ${date.split(' ')[0]}`
       
        let arrayLength = arrayOfProduct.length
        
        arrayOfProduct.push({"id": arrayLength+1, "product": product, "date": date})
        localStorage.setItem('items', JSON.stringify(arrayOfProduct))
       
        displayList()
        
    }                        

    function displayList(){
        var items = JSON.parse(localStorage.getItem('items'))
        var listProduct = ''
            items.map((element, index) => {
                listProduct += `<li id=${element.id} ondblclick="deleteListElement(${element.id})">${index+1} ${element.product} ${element.date}</li>`
            })
        
        document.getElementById('ulbody').innerHTML = listProduct
    }

   function deleteListElement(id){
        //console.log("Hello", id)
        let items = JSON.parse(localStorage.getItem('items'))
        let filterItems = items.filter(element =>{
                return element.id != id
             })
             arrayOfProduct = [...filterItems]
        localStorage.setItem('items', JSON.stringify(filterItems))
        displayList()
    }
