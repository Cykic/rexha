import abstractView from "./abstractView.js";

class currentCategoryView extends abstractView{ 
    constructor(){
        super()
   
    } 
  currentCategoryTitle =document.querySelector('.currentCategory')
  parentEl= document.querySelector('.second-productCategory')
  singleparentEl= document.querySelector('.single-productCategory') 
 async getHtml(){
  this.singleparentEl.classList.add('hide')
  this.parentEl.classList.remove('hide')
     this.hideElement()
     this.showElement()
    this.currentCategoryTitle.innerHTML =this._data[0].category
     
    return this._data.map(this.generateMarkupPreview).join('')
    }
    generateMarkupPreview(products){
        
     return ` 
     
     <div data-id='${products._id}' class="section__third__top-sales__container">
     <a href="#${products._id}" >
          <div class="section__third__top-sales__container__img"  id='currentCategory'>
       <img src="img/top-2.jfif" alt="T-shirt" class="imgs" />
     </div>
     <p class="discription">
       <b>${products.name}</b>
     </p>
     <p class="price">${currentCategory.calculatePrice(products.price)}</p>
     <button class="btn add-to-cart">Add To Cart</button>
     </a>
   </div>
  `
        
    }
 
}
export default new currentCategoryView()
const currentCategory= new currentCategoryView()