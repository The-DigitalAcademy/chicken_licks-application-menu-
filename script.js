// product variables
var product__img = [
    {
      num: 1,
      name: 'soul sister',
      price: 5089,
      image:
        'https://th.bing.com/th/id/R.0e102d8a299e268d610a11aeccaa3a3f?rik=of0sZE3oUcUNiQ&riu=http%3a%2f%2fwww.findtakeaways.co.za%2fimages%2fSpecials%2fChickenLicken.PNG&ehk=sO%2fy2ntDNQdKjMWHTu7PwPVJXIB2HY7NzjfrQRSEeBo%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      num:2,
      name: 'Double chicken',
      price: 10090,
      image:
        'https://th.bing.com/th/id/R.d11bb356325b1c09b1f4ac8ab1d8fe5a?rik=TbID83%2b0ED7u7Q&riu=http%3a%2f%2fwww.findtakeaways.co.za%2fimages%2frockmysouljpg.jpg&ehk=1WfTXuyBjH2ZAOR9erg1nDgKnk%2b7QSW0%2bEKzGQufWxM%3d&risl=&pid=ImgRaw&r=0&sres=1&sresct=1',
    },
    {
      num:3,
      name: 'chicken lick',
      price: 8090,
      image:
        'https://th.bing.com/th/id/OIP.LPmyNCrFDExT_joey1MqkgHaHa?pid=ImgDet&w=504&h=504&rs=1',
    },
    {
      num: 4,
      name: 'no bone no problem',
      price: 7090,
      image:
        'https://chickenlicken.co.za/hotwings/assets/img/HotwingsSoul6.jpg',
    },
    {
      num: 5,
      name: 'hot wings',
      price: 6090,
      image:
        'https://chickenlicken.co.za/hotwings/assets/img/HotwingsParty16.jpg',
    },
    {
      num: 6,
      name: 'hot wings party',
      price: 6190,
      image:
        'https://th.bing.com/th/id/R.3a117bd96454b410af11aa1a18ae87cf?rik=3vzCecuz6X0QhQ&riu=http%3a%2f%2fwww.findtakeaways.co.za%2fimages%2fChicken+Licken+Hotwing+deluxe.JPG&ehk=eXBfgr8WiNdEPBHX1fVB2hkx2L7mZS8SXcn4YP%2fHJmg%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      num: 7,
      name: 'chickenlicken deliver',
      price: 17089,
      image:
        'https://th.bing.com/th/id/R.ca4c6f150b459c9cfe668530ed23ffcd?rik=eNHX2phHl0C99w&riu=http%3a%2f%2fwww.findtakeaways.co.za%2fimages%2fChicken+Licken+Family+Full+House+8.JPG&ehk=p9vSV8mZXhDUhcDUZ0kiiSz0il1qEY%2f6hNqAOTbfAHM%3d&risl=&pid=ImgRaw&r=0',
    },
    {
      num: 8,
      name: 'chickenlicken full family',
      price: 10990,
      image:
        'https://www.findtakeaways.co.za/images/familyjpg(1).jpg?w=247&h=139&scale=both&mode=crop',
    },
  ]

  var cartChicken = []
  
  var costall = 0;
  
 // for html LINK JS TO HTML ELEMENT
  var products = document.getElementById('products')
  var images = document.getElementById('images')
  var addtotal= document.getElementById('addtotal')
  var countadd= document.getElementById('countadd')

  // Display Product
  function  provescreen() {
    products.innerHTML = ""
    // loop into product__img and display
    for (let i = 0; i < product__img.length; i++) {
      products.innerHTML += `
      
      
      <div class="product">
          <div class="product__img">
              <img
                src=${product__img[i].image}
                alt=""
              />
          </div>
              <div class="product__name">${product__img[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(product__img[i].rates)}
                </div>
                <div class="product__price">R <span>${product__img[i].price}</span></div> 
                  <button onclick="screenIImg(${i})">+ ADD TO CART</button>
            </div>
      
      `
    }
  }

  provescreen();
  
  
  function screenIImg(i) {
    document.getElementById('totalnum')
    cartChicken.push(product__img[i])
  
    calculateTotal();
    provescreen();
    show();
  }
  
  function show() {
  
    images.innerHTML = ""
  
    for (let i = 0; i < cartChicken.length; i++) {
      images.innerHTML += `
      
      <div class="product">
          <div class="product__img">
              <img
                src="${cartChicken[i].image}"
                alt=""
              />
          </div>
              <div class="product__name">${cartChicken[i].name}</div>
                <div class="product__rate">
                  ${'<span>*</span>'.repeat(cartChicken[i].rates)}
                </div>
                <div class=+"product__price">R <span>${cartChicken[i].price}</span></div>
                <button onclick="remove(${i})">- Remove</button> 
                  
            </div>
      
      `
    }
    countadd.innerHTML = cartChicken.length;
  
    totalsum.innerHTML = `R${costall  }`;
  }
  
    function calculateTotal() {
      costall = 0;
  
      for (let i = 0; i < cartChicken.length; i ++) {
        costall += Number(cartChicken[i].price)
        
      }
    }
  
  function remove(i) {
    cartChicken.splice(i, 1);
  
    calculateTotal();
    show();
  }
  
  
  show();
  provescreen();
  
  
  
  