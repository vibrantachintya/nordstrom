  //elements in the following array are all the products.

  var array=[
    {
        
        name:'Shane Fleece Hoodie',
        brand:'RVCA',
        price:3200.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/f2955684-1cac-4639-8fba-38b47638b5aa.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        imgUrl2:"https://n.nordstrommedia.com/id/sr3/d4f63517-8eb1-4525-85a7-1c6de026e32d.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196",
        imgUrl3:"https://n.nordstrommedia.com/id/sr3/dd74bb88-701b-4af1-bae7-8fff64c69007.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196", 
        imgUrl4:"https://n.nordstrommedia.com/id/sr3/b93f04f8-a26d-454a-bb48-37cb78e1f52f.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/7907e81a-632b-45c9-9efb-890cab92d3d8.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/7907e81a-632b-45c9-9efb-890cab92d3d8.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/7907e81a-632b-45c9-9efb-890cab92d3d8.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/7907e81a-632b-45c9-9efb-890cab92d3d8.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Billionare Boys Club BB Arch Long Sleeve Cotton Graphic Tee',
        brand:'Billionaire Boys Club',
        price:6015.74,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/67dce9b3-9f2a-4270-aa91-3b56a28f21f5.jpeg?h=365&w=240&dpr=2", 
        imgUrl2:"https://n.nordstrommedia.com/id/sr3/d2cd7ed5-bbe9-4d4f-a05e-d3d772a8c68a.jpeg?crop=pad&pad_color=FFF&format=jpeg&w=780&h=1196"
    },
    {
        name:'Wrangler Heritage Denim Jacket',
        brand:'Wrangler',
        price:12753.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/74f1bab0-e697-4055-80c9-c156320e5b74.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Dri-FIT Assorted 3-Pack Everyday Plus Athletic Socks',
        brand:'Nike',
        price:1443.78,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/6de523b6-8342-4a24-9bc3-4fdcff2aed22.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:"Men's Color Multiplier Logo Hoodie",
        brand:'Vans',
        price: 5173.54 ,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/7907e81a-632b-45c9-9efb-890cab92d3d8.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Blanket Jacquard Shirt Jacket',
        brand:'BP.',
        price: 4732.38,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/1d9591f4-829a-4012-b131-80f7d5ab9a0e.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Sportswear Tech Fleece Joggers',
        brand:'Nike',
        price:6333.37,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/c4f70a9c-44e5-4ac7-a16a-9c2963a4a153.jpeg?h=365&w=240&dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:3400,
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    },
    {
        name:'Graphic Tees',
        brand:'TOPMAN',
        price:'Rs 3400',
        imgUrl:"https://n.nordstrommedia.com/id/sr3/cbfb4060-b109-4321-8322-4379c0dca803.jpeg?h=365&amp;w=240&amp;dpr=2", 
    }
    
]
localStorage.setItem('product',JSON.stringify(array))
array.map(function(elem){
    var product_div = document.createElement('div');
    product_div.setAttribute('class','smalldiv')
    var product_img= document.createElement('img');
    product_img.setAttribute('id','image')
    product_img.setAttribute('src',elem.imgUrl);
    var product_img2 = document.createElement('img');
    product_img2.setAttribute('src',elem.imgUrl2);
    var name_box = document.createElement('h4');
    name_box.setAttribute('class','name');
    name_box.textContent=elem.name;
    var brand_box=document.createElement('h4');
    brand_box.setAttribute('class','brand')
    brand_box.textContent=elem.brand;
    var inr = document.createElement('div');
    inr.textContent='INR';
    inr.setAttribute('id','inr')
    var price_box=document.createElement('h3');
    price_box.setAttribute('class','price')
    price_box.textContent=elem.price;
    var price_div= document.createElement('div');
    price_div.setAttribute('class','price_div');
    price_div.append(inr,price_box)
    product_div.append(product_img,brand_box,name_box,price_div)
    console.log(product_img,brand_box,name_box,price_div)
    document.getElementById('products_container').append(product_div);
         product_div.addEventListener('click',function selectItem(event){
            var current_product = elem;
            localStorage.setItem('this_product',JSON.stringify(current_product));
            window.location.href='display_page.html'
        })
   
})


