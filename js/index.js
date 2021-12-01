  const shoesData = [
    {
      id : "1",
      name: "Mocalaureat Flat Red Sole Loafers",
      brand: "Christian Louboutin",
      category: "Loafers",
      color: "Black/Loubi",
      price: "$695",
      releaseDate: "2020",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_3201463_100106_m",
    },
    {
      id : "2",
      name: "Brushed Metal Leather Penny Loafers",
      brand: "Bougeotte",
      category: "Loafers",
      color: "Charcoal",
      price: "$830",
      releaseDate: "2020",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_4078043_100133_m",
    },
    {
      id : "3",
      name: "Viv Rangers Buckle Loafers",
      brand: "Roger Vivier",
      category: "Loafers",
      color: "Black",
      price: "$1,050",
      releaseDate: "2019",
      rating: "4.2",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_3145803_100106_m",
    },
    {
      id : "4",
      name: "Jessa Leather Horse Bit Loafers",
      brand: "Tory Burch",
      category: "Loafers",
      color: "Perfect Black PE",
      price: "$398",
      releaseDate: "2020",
      rating: "4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_4213806_100106_m",
    },
    {
      id : "5",
      name: "Lyvi Kiltie Tassel Loafer Mules",
      brand: "See By Chloe",
      category: "Loafers",
      color: "Black",
      price: "$375",
      releaseDate: "2021",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_4227030_100106_m",
    },
    {
      id : "6",
      name: "Easy Bicolor Leather Penny Loafers",
      brand: "Ganni",
      category: "Loafers",
      color: "Placid Blue",
      price: "$395",
      releaseDate: "2021",
      rating: "4.4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4214111_100426_m",
    },
    {
      id : "7",
      name: "Creeper Calfskin Monk Loafers",
      brand: "Ganni",
      category: "Loafers",
      color: "Black",
      price: "$475",
      releaseDate: "2021",
      rating: "4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4214108_100106_m",
    },
    {
      id : "8",
      name: "Calfskin Logo Flat Loafers",
      brand: "Prada",
      category: "Loafers",
      color: "Bianco",
      price: "$950",
      releaseDate: "2021",
      rating: "4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4206576_100189_m",
    },
    {
      id : "9",
      name: "Goldie Pearly Grain Leather Loafers",
      brand: "Stuart Weitzman",
      category: "Loafers",
      color: "Black",
      price: "$450",
      releaseDate: "2019",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4181888_100106_m",
    },
    {
      id : "10",
      name: "Lia 2 Shearling Leather Loafers",
      brand: "Malone Souliers",
      category: "Loafers",
      color: "Neutral",
      price: "$595",
      releaseDate: "2020",
      rating: "4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4103486_100319_m",
    },
    {
      id : "11",
      name: "Leather Dual-Grip Slingback Sandals",
      brand: "Dries Van Noten",
      category: "Sandals",
      color: "Green",
      price: "$775",
      releaseDate: "2021",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4226008_100340_m",
    },
    {
      id : "12",
      name: "Dual-Grip Shearling Cozy Sandals",
      brand: "Dries Van Noten",
      category: "Sandals",
      color: "Camel",
      price: "$860",
      releaseDate: "2014",
      rating: "4.2",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4143832_100273_m",
    },
    {
      id : "13",
      name: "Quilted Leather Slingback Sporty Sandals",
      brand: "Dries Van Noten",
      category: "Sandals",
      color: "Black",
      price: "$855",
      releaseDate: "2013",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4143834_100106_m",
    },
    {
      id : "14",
      name: "Marga Crystal-Buckle Slide Sandals",
      brand: "Jimmy Choo",
      category: "Sandals",
      color: "Black/Crystal",
      price: "$795",
      releaseDate: "2016",
      rating: "4.1",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4067034_100106_m",
    },
    {
      id : "15",
      name: "Fur Sporty Buckle Sandals",
      brand: "Saint Laurent",
      category: "Sandals",
      color: "Nero",
      price: "$795",
      releaseDate: "2017",
      rating: "4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4125577_100106_m",
    },
    {
      id : "16",
      name: "Patent Leather Crystal Slide Sandals",
      brand: "Giuseppe Zanotti",
      category: "Sandals",
      color: "Nero",
      price: "$795",
      releaseDate: "2016",
      rating: "4.1",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4069693_100106_m",
    },
    {
      id : "17",
      name: "x Birkenstock Milano Double-Buckle Sporty Slingback Sandals",
      brand: "Jil Sander",
      category: "Sandals",
      color: "Black",
      price: "$525",
      releaseDate: "2015",
      rating: "4.6",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4109894_100106_m",
    },
    {
      id : "18",
      name: "Fussbett Bicolor Calfskin Slingback Sandals",
      brand: "Marni",
      category: "Sandals",
      color: "Black/White",
      price: "$650",
      releaseDate: "2013",
      rating: "4.7",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4128960_100101_m",
    },
    {
      id : "19",
      name: "Forager Calfskin Dual-Grip Sport Sandals",
      brand: "Birkenstock",
      category: "Sandals",
      color: "Lemon Drop",
      price: "$450",
      releaseDate: "2017",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_4048749_100612_m",
    },
    {
      id : "20",
      name: "So Kate Patent Pointed-Toe Red Sole Pump",
      brand: "Christian Louboutin",
      category: "Pumps/Heels",
      color: "Black",
      price: "$745",
      releaseDate: "2013",
      rating: "4.1",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_1200/01/nm_878680_100106_m",
    },
    {
      id : "21",
      name: "YSL Logo- Heel Sandal with Black Hardware",
      brand: "Saint Laurent",
      category: "Pumps/Heels",
      color: "Nero",
      price: "$995",
      releaseDate: "2017",
      rating: "4.1",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_2796987_100106_m",
    },
    {
      id : "22",
      name: "Luriane Metallic Leather Slingback High-Heel Sandals",
      brand: "Schutz",
      category: "Pumps/Heels",
      color: "Gold",
      price: "$118",
      releaseDate: "2019",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_2915940_100602_m",
    },
    {
      id : "23",
      name: "Lou Crystal Suede Pumps",
      brand: "Schutz",
      category: "Pumps/Heels",
      color: "Black",
      price: "$118",
      releaseDate: "2017",
      rating: "4.4",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4191035_100106_m",
    },
    {
      id : "24",
      name: "Zala Point-Toe Pumps",
      brand: "Marc Fisher",
      category: "Pumps/Heels",
      color: "Black",
      price: "$160",
      releaseDate: "2019",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_2832482_100107_m",
    },
    {
      id : "25",
      name: "Marina Ankle-Strap Sandals",
      brand: "Badgley Mischka",
      category: "Pumps/Heels",
      color: "Red",
      price: "$225",
      releaseDate: "2016",
      rating: "4.2",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4134417_100520_m",
    },
    {
      id : "26",
      name: "Patent Leather Sandals with Logo Heel",
      brand: "Dolce & Gabbana",
      category: "Pumps/Heels",
      color: "Black",
      price: "$1,195",
      releaseDate: "2017",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3289324_100106_m",
    },
    {
      id : "27",
      name: "Jenlove Leather Peep-Toe Red Sole High-Heel Pumps",
      brand: "Christian Louboutin",
      category: "Pumps/Heels",
      color: "Black",
      price: "$995",
      releaseDate: "2015",
      rating: "4.2",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4038866_100106_m",
    },
    {
      id : "28",
      name: "Frida Embroidered Suede Sphere Sandals",
      brand: "Kat Maconie",
      category: "Pumps/Heels",
      color: "Pink",
      price: "$390",
      releaseDate: "2021",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4133464_100550_m",
    },
    {
      id : "29",
      name: "95mm Leather Metallic-Heel Slide Sandals",
      brand: "Fendi",
      category: "Pumps/Heels",
      color: "Black",
      price: "$1,390",
      releaseDate: "2021",
      rating: "4.2",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4139688_100106_m",
    },
    {
      id : "30",
      name: "Oversized Sneakers",
      brand: "Alexander McQueen",
      category: "Sneakers",
      color: "White/ Black",
      price: "$580",
      releaseDate: "2014",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_2005999_100106_m",
    },
    {
      id : "31",
      name: "Tiketa Slip-On Red Sole Runner Sneakers",
      brand: "Christian Louboutin",
      category: "Sneakers",
      color: "Black",
      price: "$845",
      releaseDate: "2021",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3505392_100106_m",
    },
    {
      id : "32",
      name: "Superstar Leather Glitter Low-Top Sneakers",
      brand: "Golden Goose",
      category: "Sneakers",
      color: "White/ Black",
      price: "$530",
      releaseDate: "2007",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4134261_100188_m",
    },
    {
      id : "33",
      name: "Arrow Text Graphic Print Suede Low-Top Sneakers",
      brand: "Off- White",
      category: "Sneakers",
      color: "White/ Black",
      price: "$400",
      releaseDate: "2018",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3621224_100101_m",
    },
    {
      id : "34",
      name: "Beth Grip Strap Sneakers",
      brand: "Isabel Marant",
      category: "Sneakers",
      color: "White",
      price: "$385",
      releaseDate: "2016",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_2924100_100189_m",
    },
    {
      id : "35",
      name: "New Salmond Check Leather Sneakers",
      brand: "Burberry",
      category: "Sneakers",
      color: "White",
      price: "$520",
      releaseDate: "2019",
      rating: "4.5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3312511_100189_m",
    },
    {
      id : "36",
      name: "SDU Bicolor Runner Sneakers",
      brand: "Veja",
      category: "Sneakers",
      color: "Blue",
      price: "$125",
      releaseDate: "2021",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4073063_100385_m",
    },
    {
      id : "37",
      name: "Vieirissima Mock-Croc Red Sole Court Sneakers",
      brand: "Christian Louboutin",
      category: "Sneakers",
      color: "Black",
      price: "$795",
      releaseDate: "2021",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4038854_100404_m",
    },
    {
      id : "38",
      name: "Loubishark Donna Red Sole Sneakers",
      brand: "Christian Louboutin",
      category: "Sneakers",
      color: "Red",
      price: "$895",
      releaseDate: "2021",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4076078_100144_m",
    },
    {
      id : "39",
      name: "Franckie Bicolor Low-Top Sneakers",
      brand: "Chloe",
      category: "Sneakers",
      color: "White",
      price: "$525",
      releaseDate: "2021",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3731327_100189_m",
    },
    {
      id : "40",
      name: "Kate Calfskin Red Sole Stiletto Knee Boots",
      brand: "Christian Louboutin",
      category: "Boots",
      color: "Black",
      price: "$1,495",
      releaseDate: "2019",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4076069_100106_m",
    },
    {
      id : "41",
      name: "The Tire Boots",
      brand: "Bottega Veneta",
      category: "Boots",
      color: "Black/ Blue",
      price: "$1,200",
      releaseDate: "2021",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3516355_100127_m",
    },
    {
      id : "42",
      name: "Montreal Calfskin Zip Snow Booties",
      brand: "Gianvito Rossi",
      category: "Boots",
      color: "Beige",
      price: "$1,395",
      releaseDate: "2021",
      rating: "4.3",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4109438_100296_m",
    },
    {
      id : "43",
      name: "Macademia Mixed Leather Red Sole Platform Booties",
      brand: "Christian Louboutin",
      category: "Boots",
      color: "Beige",
      price: "$1,795",
      releaseDate: "2021",
      rating: "3.9",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4076075_100143_m",
    },
    {
      id : "44",
      name: "Analeah Snake-Print Leather Tall Boots",
      brand: "Schutz",
      category: "Boots",
      color: "Black",
      price: "$238",
      releaseDate: "2019",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3371040_100106_m",
    },
    {
      id : "45",
      name: "Koller Calfskin Chain Knee Boots",
      brand: "Saint Laurent",
      category: "Boots",
      color: "Black",
      price: "$1,895",
      releaseDate: "2021",
      rating: "3.9",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4114859_100106_m",
    },
    {
      id : "46",
      name: "Derby Leather Knee Riding Boots",
      brand: "Khaite",
      category: "Boots",
      color: "Dark Brown",
      price: "$1,460",
      releaseDate: "2018",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_3514294_100244_m",
    },
    {
      id : "47",
      name: "Edith 15mm Calfskin Boots",
      brand: "Chloe",
      category: "Boots",
      color: "Black",
      price: "$1,250",
      releaseDate: "2017",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4139046_100106_m",
    },
    {
      id : "48",
      name: "Ginette Knit Waterproof Rain Boots",
      brand: "Moncler",
      category: "Boots",
      color: "Green",
      price: "$400",
      releaseDate: "2017",
      rating: "5",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4091683_100338_m",
    },
    {
      id : "49",
      name: "So Kate Mock-Croc Red Sole Ankle Booties",
      brand: "Christian Louboutin",
      category: "Boots",
      color: "Navy",
      price: "$1,095",
      releaseDate: "2016",
      rating: "4.8",
      photo:
        "https://media.neimanmarcus.com/f_auto,q_auto:low,ar_4:5,c_fill,dpr_2.0,w_590/01/nm_4038794_100404_m",
    },
  ];

  function shoeTemplate(shoe) {
    return `
        <div class="box">
              <div class="icons">
                <a class="qucikpreview" id="${shoe.id}"  onClick="filterById(this.id)" type="button"
                data-toggle="modal"
                data-target="#exampleModalCenter">Quick Preview</a>
              </div>
              <div class="content" id="${shoe.category}">
                <img src="${shoe.photo}">
                <h3 maxlength = "4">${shoe.name}</h3>
 
              </div>
            </div>
        `;
  }

  document.getElementById("box-container").innerHTML = `
        ${shoesData.map(shoeTemplate).join("")}
      `;

  function detailTemplate(shoe) {
    return `
          <div class="card">
          <img
            class="card-img"
            src=${shoe.photo}
            alt="Vans" style="width=60%;"
          />
          <div class="card-img-overlay d-flex justify-content-end">
            <a href="#" class="card-link text-danger like">
              <i class="fas fa-heart"></i>
            </a>
          </div>
          <div class="card-body">
            <h4 class="card-title">${shoe.name}</h4>
            <h6 class="card-subtitle mb-2 text-muted">Category:${shoe.category}</h6>
            <p class="card-text">
              The Vans All-Weather MTE Collection features footwear and apparel
              designed to withstand the elements whilst still looking cool.
            </p>
            <div class="options d-flex flex-fill">
                <p>Color:</p>
                <span>&#160;&#160;${shoe.color}</span>
            </div>
            <div class="buy d-flex justify-content-between align-items-center">
            <!--  <div class="price text-success">
                <h5 class="mt-4">$125</h5>
              </div>
              <a href="#" class="btn btn-danger mt-3"
                ><i class="fas fa-shopping-cart"></i> Add to Cart</a
              > -->
            </div>
          </div>
        </div>
            `;
  }
  function filterById(id){
    
    console.log(id);
  let shoe = shoesData.find(item => item.id === id);
  console.log(shoe);
  document.getElementById("demo").innerHTML =  detailTemplate(shoe);

  }


