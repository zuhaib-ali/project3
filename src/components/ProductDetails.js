import React from 'react';

let productName = "";
const shoes = {
    "Nike-shoes":{
        name:"nike",
        img:"https://fgl.scene7.com/is/image/FGLSportsLtd/FGL_332979914_01_a?wid=800&hei=800&bgColor=0,0,0,0&fmt=png-alpha&resMode=sharp2&op_sharpen=1"
    },
    "Nike-shoes-2":{
        name:"nike",
        img:"https://www.tactics.com/a/am84/2/vans-slip-on-pro-shoes-black-white-gum.jpg"
    },
    "Nike-shoes-3":{
        name:"nike",
        img:"https://image.cnbcfm.com/api/v1/image/105680013-1547583426762nike1.jpg?v=1547583682"
    },
    "Nike-shoes-4":{
        name:"nike",
        img:"https://images.asia.christianlouboutin.com/media/catalog/product/cache/1/thumbnail/1200x/602f0fa2c1f0d1ba5e241f914e856ff9/1/1/5/0/christianlouboutin-greggo-1150377_BK01_4_1200x1200_1572435758.jpg"
    },
    "Nike-shoes-5":{
        name:"nike",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSaTKRMx0ikQDF1o_eTFjnR_88LEWTZwtot2Q&usqp=CAU"
    },
    "Nike-shoes-6":{
        name:"nike men's shoes:",
        img:"https://www.skechers.com/dw/image/v2/BDCN_PRD/on/demandware.static/-/Library-Sites-SkechersSharedLibrary/default/dwdcaa39ce/images/Landing/men/SKX44314-2020-New-Site-Q2-Content-Grid_M_Athletic-Sneakers_232032-BLOR.jpg?sw=356"
    },
    "Nike-shoes-7":{
        name:"nike men's shoes:",
        img:"https://static.nike.com/a/images/t_PDP_1280_v1/f_auto,q_auto:eco/i1-9cfea66d-b519-4b29-8e43-ce4164e8c558/adapt-bb-2-tie-dye-basketball-shoe-vdFwKS.jpg"
    },
    "Nike-shoes-8":{
        name:"nike men's shoes:",
        img:"https://cdn.britannica.com/04/123704-050-023DC490/Pair-leather-shoes.jpg"
    },
    "Nike-shoes-9":{
        name:"nike men's shoes:",
        img:"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F28%2F2020%2F01%2Fsperry-womens-loafer-WALKINGSHOES1019.jpg"
    },

    "Nike-shoes-10":{
        name:"nike men's shoes:",
        img:"https://images.squarespace-cdn.com/content/v1/59aa18678fd4d28748fdc362/1582234001660-F0S8MPSOXU2TFPKTLT9L/ke17ZwdGBToddI8pDm48kIIWdAnyBSrZ5E6Gv7JXlDh7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k9kZPbuygN4RSDPe_G5PO_pbVb0jdkjHmk-MhSr8npod9fyhKaF6iH64GfT8sX2GQ/IMG_9272.jpg"
    },
}

let i = 0;
function call(para) {
    setTimeout(() => {
        let shoes_list = document.getElementById("shoes_list");
        let li = document.createElement("li");
        let div = document.createElement("div");
        let img = document.createElement("img");
        let p = document.createElement("p");

        if(productName !== undefined){
            if(para[1].name === productName){
                img.src=para[1].img;
                p.innerText="Product Name: "+para[1].name;
                div.append(img);
                div.append(p);
                li.append(div);
                shoes_list.append(li);
            }
        }else{
            img.src=para[1].img;
            p.innerText="Product Name: "+para[1].name;
            div.append(img);
            div.append(p);
            li.append(div);
            shoes_list.append(li);
        }
    }, 10);
}

function ProductDetails(props) {
    productName = props["product"].name;
    Object.entries(shoes).map(call);
    return(
        <div>
            <ul id="shoes_list"></ul>
        </div>
    );
}

export default ProductDetails;