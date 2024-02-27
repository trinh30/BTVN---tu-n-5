var man=[
    {
    id:1,
    name:"Quần jean nam",
    code:"TC143NA",
    price:"200.000",
    image:"https://ann.com.vn/wp-content/uploads/khong-the-bo-lo-nhung-mau-quan-jeans-nam-dep-2018-245-327.jpg"
    },
    {
    id:2,
    name:"Áo thun nam",
    code:"TC1342NA",
    price:"300.000",
    image:"https://4men.com.vn/images/thumbs/2017/08/nhung-mau-ao-thun-nam-dep-nhat-hien-nay-tai-4men-news-237.jpg"
    },
    {
    id:3,
    name:"Áo sơ mi nam",
    code:"TC323",
    price:"400.000",
    image:"https://fashionminhthu.com.vn/wp-content/uploads/2018/05/ao-so-mi-nam-moi-1.jpg"
    },
    {
    id:4,
    name:"Áo polo",
    code:"TC223",
    price:"500.000",
    image:"https://product.hstatic.net/1000352218/product/ao_polo_nam_kwin_kps018s8_09_96ae8bcbe64446f38da011099b4a34c9.jpg"
    }

]
var women=[
    {
    id:1,
    name:"Áo khoác nữ",
    code:"TC143",
    price:"200.000",
    image:"https://thoitrangteenthienphuc.vn/upload/images/%C3%A1o%20kho%C3%A1c%20kaki/ao%20khoa%20kaki%20nu.jpg"
    },
    {
    id:2,
    name:"Áo thun nữ",
    code:"TC123",
    price:"300.000",
    image:"https://img.arabshoppy.com/ae04/kf/S027e10dba3a54b23b8e60bd2e34ab6d5w.jpg"
    },
    {
    id:3,
    name:"Chân váy nữ",
    code:"TC323",
    price:"400.000",
    image:"https://img.alicdn.com/bao/uploaded/i2/484072869/O1CN01zLRFq61X42z5pVX4j_!!484072869.jpg"
    },
    {
    id:4,
    name:"Áo sơ mi nữ",
    code:"TC223",
    price:"500.000",
    image:"https://blueoceanuniform.vn/wp-content/uploads/2021/05/2115dad8eb48a766011a3ef3a44af5ec-768x768.jpg"
    }
]
function listProducts(){
    for(let i=0; i<= man.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+man[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<h5 class="card-title">'+man[i].name+'</h5>';
        demo += '<p class="card-text">'+man[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("men").innerHTML+= demo;


    }
    for(let i=0; i<= women.length-1;i++){
        var demo = '<div class="col-3">';
        demo+= '<div class="card" style="width: 18rem; ">';
        demo+= '<img src="'+women[i].image+'" class="card-img-top" style="height:400px; ">';
        demo += '<div class="card-body">';
        demo += '<div class="card-title">'+women[i].name + '</h5>';
        demo += '<p class="card-text">'+women[i].price+'</p>';
        demo += '<a href="#" class="btn btn-primary" onclick="oder()">Đặt mua</a>';
        demo += '</div>';
        demo += '</div>';
        demo += '</div>';
        console.log(demo);
        document.getElementById("women").innerHTML+= demo;


    }

}