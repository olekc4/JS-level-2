"use strict";
class ProductList {
  constructor(/*container = '.products'*/) {
    this.container = document.querySelector('.products');
    this.goods = [];
    this.productObjects = [];
  }

  /** метод записывает массив товаров в this.goods
   *
   */
  fetchGoods() {
    this.goods = [
      {id: 1, title: 'Notebook', price: 20000},
      {id: 2, title: 'Mouse', price: 1500},
      {id: 3, title: 'Keyboard', price: 5000},
      {id: 4, title: 'Gamepad', price: 4500},
    ];
  }

  /** метод записывает в this.productObjects каждый товар и вставляет HTML разметку этого товара
   * 
   */
  render() {
    for (const good of this.goods) {
      const productObject = new ProductItem(good);
      // console.log(productObject);
      this.productObjects.push(productObject);

      this.container.insertAdjacentHTML('beforeend', productObject.getHTMLString());
    }
  }

  /** метод суммирует стоимость всех товаров
   * 
   */
  calcSumm() {
    let summ = 0;
    this.productObjects.forEach (good => {
      summ += good.price;
    });
    console.log(summ);
  }
}

class ProductItem {
  constructor(product, img='https://via.placeholder.com/200x150') {
    this.id = product.id;
    this.title = product.title;
    this.price = product.price;
    this.img = img;
  }
  /**
   * 
   * @returns возвращает HTML разметку товара
   */
  getHTMLString() {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${this.img}" alt="Some img">
                <div class="desc">
                    <h3>${this.title}</h3>
                    <p>${this.price} \u20bd</p>
                    <button class="buy-btn">Купить</button>
                </div>
            </div>`;
  }
}

const list = new ProductList();
list.fetchGoods();
list.render();
list.calcSumm();



// const products = [
//   {id: 1, title: 'Notebook', price: 1000},
//   {id: 2, title: 'Mouse', price: 100},
//   {id: 3, title: 'Keyboard', price: 250},
//   {id: 4, title: 'Gamepad', price: 150},
// ];

// const getProductHTMLString = (item) => `<div class="product-item">
//               <h3>${item.title}</h3>
//               <p>${item.price}</p>
//               <button class="by-btn">Добавить</button>
//             </div>`;

// const renderProducts = (productList) => {
//   // const list = productList.map((good) => getProductHTMLString(good.title, good.price));
   
//   document
//     .querySelector('.products')
//     .innerHTML = productList.map(good => getProductHTMLString(good)).join('');
//   //console.log(list);
// }

// renderProducts(products);
