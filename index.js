// TRENDING STORES & GUIDES
let userName =JSON.parse(localStorage.getItem("user"))||[];
console.log(userName)
document.getElementById("user_name").innerText = userName
const tredingStories = document.getElementById("tredingStories-img");
const tredingStories_preBtn = document.getElementById("tredingStories-preBtn");
const tredingStories_nextBtn = document.getElementById("tredingStories-nextBtn");
var val = 0;

const tredingStoriesImages = [
    "https://images-static.nykaa.com/uploads/d74fb421-ff4e-4d66-a0ff-be26735529aa.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/21e843f7-0138-4aa9-9ff5-fde2b0001c0d.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/a15577a1-fd77-475a-932c-3ac32cf97e8e.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/2fcd8ea8-412a-42e6-a814-4d9dc6fee1d6.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/7b433929-ea76-4c46-91e3-53bdb9aa7387.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/1f89f0af-8b04-4c5c-8714-26db1c6fa246.gif?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/cee3de00-3e33-462f-b633-3b307fbaa636.jpg?tr=w-1200,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/dac00fed-ecb3-4e53-af91-2811d02b8a4c.gif?tr=w-1200,cm-pad_resize",
];

tredingStoriesImages.forEach(function(el,index){
    let img = document.createElement("img");
    img.src = el;
    if(index<3){
        tredingStories.append(img);
    }
});

tredingStories_preBtn.onclick = function(event){
    val--;
    if(val>=0){
        tredingStories.innerHTML = null;

        for(j=val;j<val+3;j++){
            let img = document.createElement("img");
            img.src = tredingStoriesImages[j];
            tredingStories.append(img);
        }
    }
    else if(val < 0){
        val = 0;
    }
    // console.log(val);
};

tredingStories_nextBtn.onclick = function(event){
    val++;
    if(val<6){
        tredingStories.innerHTML = null;

        for(j=val;j<val+3;j++){
            let img = document.createElement("img");
            img.src = tredingStoriesImages[j];
            tredingStories.append(img);
        }
    }
    else if(val<7){
        tredingStories.innerHTML = null;

        for(j=val;j<val+2;j++){
            let img = document.createElement("img");
            img.src = tredingStoriesImages[j];
            tredingStories.append(img);
        }
    }
    else if(val >= 7){
        val = 6;
    }
    // console.log(val);
};

// HIDDEN GEMS
const hiddenGems = document.getElementById("hiddenGems-img");
const hiddenGems_preBtn = document.getElementById("hiddenGems-preBtn");
const hiddenGems_nextBtn = document.getElementById("hiddenGems-nextBtn");
var value = 0;

const hiddenGemsImages = [
    "https://images-static.nykaa.com/uploads/75670f0f-2dd2-4a97-97e4-30ba9e8f7624.Jpg?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/0d423d10-6265-409c-9db4-2f26882d8d56.jpg?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/602ceef9-499c-4b04-a6a8-ac89b9b66cb3.gif?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/2372a4e7-8331-4a3e-ba19-bbe1f8ee2b75.gif?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/45f85548-94ce-494b-9d1e-6a721e1cf43f.gif?tr=w-600,cm-pad_resize",
];

hiddenGemsImages.forEach(function(el,index){
    let img = document.createElement("img");
    img.src = el;
    if(index<3){
        hiddenGems.append(img);
    }
});

hiddenGems_preBtn.onclick = function(event){
    value--;
    if(value>=0){
        hiddenGems.innerHTML = null;

        for(j=value;j<value+3;j++){
            let img = document.createElement("img");
            img.src = hiddenGemsImages[j];
            hiddenGems.append(img);
        }
    }
    else if(value < 0){
        value = 0;
    }
    console.log(value);
};

hiddenGems_nextBtn.onclick = function(event){
    value++;
    if(value<3){
        hiddenGems.innerHTML = null;

        for(j=value;j<value+3;j++){
            let img = document.createElement("img");
            img.src = hiddenGemsImages[j];
            hiddenGems.append(img);
        }
    }
    else if(value<4){
        hiddenGems.innerHTML = null;

        for(j=value;j<value+2;j++){
            let img = document.createElement("img");
            img.src = hiddenGemsImages[j];
            hiddenGems.append(img);
        }
    }
    else if(value >= 4){
        value = 3;
    }
    console.log(value);
};

// EDITOR'S CHOICE
const editorsChoice = document.getElementById("editorsChoice-img");
const editorsChoice_preBtn = document.getElementById("editorsChoice-preBtn");
const editorsChoice_nextBtn = document.getElementById("editorsChoice-nextBtn");
var value3 = 0;

const editorsChoiceImages = [
    "https://images-static.nykaa.com/uploads/ebcff9d8-8958-477d-96d7-e6282b6be022.jpg?tr=w-300,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/c5bc7bb3-7586-4300-939f-d1748d3a87c6.jpg?tr=w-300,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/50e62b4e-a2a4-46e1-9d63-7c75ca05fd68.png?tr=w-300,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/e1c07ec1-0183-4718-a73f-2c493fe15016.png?tr=w-300,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/320206be-82c2-48a0-91a8-3ae9d9304b40.png?tr=w-300,cm-pad_resize",
];

editorsChoiceImages.forEach(function(el,index){
    let img = document.createElement("img");
    img.src = el;
    if(index<4){
        editorsChoice.append(img);
    }
});

editorsChoice_preBtn.onclick = function(event){
    value3--;
    if(value3>=0){
        editorsChoice.innerHTML = null;

        for(j=value3;j<value3+4;j++){
            let img = document.createElement("img");
            img.src = editorsChoiceImages[j];
            editorsChoice.append(img);
        }
    }
    else if(value3 < 0){
        value3 = 0;
    }
    console.log(value3);
};

editorsChoice_nextBtn.onclick = function(event){
    value3++;
    if(value3<2){
        editorsChoice.innerHTML = null;

        for(j=value3;j<value3+4;j++){
            let img = document.createElement("img");
            img.src = editorsChoiceImages[j];
            editorsChoice.append(img);
        }
    }
    else if(value3 >= 2){
        value3 = 1;
    }
    console.log(value3);
};

// DIFFERENT BRANDS
const diffBrands = document.getElementById("diffBrands-img");
const diffBrands_preBtn = document.getElementById("diffBrands-preBtn");
const diffBrands_nextBtn = document.getElementById("diffBrands-nextBtn");
var value4 = 0;

const diffBrandsImages = [
    "https://images-static.nykaa.com/uploads/c65934b0-1275-4464-a51a-8f830cc336ee.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/c6b93411-2058-4ccd-8fe3-0dae83134167.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/e4590404-710a-41e2-a423-cdd25807eddb.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/4d77aeab-33b7-4b7c-9823-71817b70adf1.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/b237ef3c-fc27-46c7-a68b-4bb2ba683b0c.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/d3925573-a892-4265-b9e6-3c950b79d6da.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/1b7890b5-f307-4f73-8c02-6eef453c35c0.png?tr=w-600,cm-pad_resize",
    "https://images-static.nykaa.com/uploads/1b7890b5-f307-4f73-8c02-6eef453c35c0.png?tr=w-600,cm-pad_resize",
];

diffBrandsImages.forEach(function(el,index){
    let img = document.createElement("img");
    img.src = el;
    if(index<4){
        diffBrands.append(img);
    }
});

diffBrands_preBtn.onclick = function(event){
    value4--;
    if(value4>=0){
        diffBrands.innerHTML = null;

        for(j=value4;j<value4+4;j++){
            let img = document.createElement("img");
            img.src = diffBrandsImages[j];
            diffBrands.append(img);
        }
    }
    else if(value4 < 0){
        value4 = 0;
    }
    console.log(value4);
};

diffBrands_nextBtn.onclick = function(event){
    value4++;
    if(value4<4){
        diffBrands.innerHTML = null;

        for(j=value4;j<value4+4;j++){
            let img = document.createElement("img");
            img.src = diffBrandsImages[j];
            diffBrands.append(img);
        }
    }
    else if(value4 >= 4){
        value4 = 3;
    }
    console.log(value4);
};

// harapriya
document.getElementById("btn1").addEventListener("click",function(){
    nxtbut();
})

document.getElementById("btn2").addEventListener("click",function(){
    prvbut();
})

var count=1;
function nxtbut()
{
    if(count==6)
    {
        count=1;
    }
    else
    {
        count++;
    }
    display()
}

function prvbut()
{
    if(count==1)
    {
        count=6;
    }
    else
    {
        count--;
    }
    display()
}

function display()
{
    var val=document.querySelectorAll("#allimg > div");

    for(var i=0;i<val.length;i++)
    {
        if(i+1==count)
        {
            val[i].style.display="block";
        }
        else
        {
            val[i].style.display="none";
        }
    }
}
setInterval(nxtbut,3000)
// harapriya


// Govind
// Nav Bar

let a=document.getElementById("Sbar");
a.addEventListener("click",()=>{
    a.style.width="350px";
    document.getElementById("second4_1").style.width="305px";
})
let b=document.getElementById("navbar");
let c=document.getElementById("second");
window.onscroll=()=>{
    if(window.pageYOffset>=c.offsetTop)
    {
        b.classList.add("sticky");
        div.classList.add("sticky1");
        
    }
    else{
        b.classList.remove("sticky");
        div.classList.add("sticky1");
    }
}
const Append=(arr)=>{
    
    arr.map((elem,index)=>{
        for(let i=0;i<=elem.length-1;i++)
        {
            let p=document.createElement("p");
            p.innerText=arr[index][i];
            // console.log(p);
            document.querySelector(`.onof>div:nth-child(${index+1})`).append(p);
        }
        
        return;
    })
   

}
const femove=(info)=>{
    let arr=[]
    for(let i=0;i<=info.length-1;i++)
    {
        arr.push(info[i])
    }
    
}
let array1=[[["Face",
"Face Primer",
"Concealer",
"Foundation",
"Compact",
"Contour",
"Loose Powder",
"Blush",
"Bronzer",
"BB & CC Cream",
"Highlighters",
"Setting Spray",
"Makeup Remover"],
["Eyes",
"Kajal",
"Eyeliner",
"Mascara",
"Eye Shadow",
"Eye Brow Enhancers",
"Eye Primer",
"False Eyelashes",
"Eye Makeup Remover",
"Under Eye Concealer",
"Contact Lenses",
"NEW",
"Makeup Kits",
"Eye Palettes",
"Face Palettes",
"Customize Your Palette"],
["Lips",
"Lipstick",
"Liquid Lipstick",
"Lip Crayon",
"NEW",
"Lip Gloss",
"Lip Liner",
"Lip Plumper",
"Lip Stain",
"Lip Balm",
"Nails",
"Nail Polish",
"Nail Art Kits",
"Nail Polish Sets",
"Nail Care",
"Nail Polish Remover",
"Manicure & Pedicure Kits"],
["Tools & Brushes",
"Face Brush",
"Blush Brush",
"Eye Brush",
"Lip Brush",
"Brush Sets",
"Sponges & Applicators",
"Eyelash Curlers",
"Tweezers",
"Sharpeners",
"Mirrors",
"Makeup Pouches"],
["Top Brands",
"Kay Beauty",
"Huda Beauty",
"Charlotte Tilbury",
"M.A.C",
"Maybelline New York",
"L'Oreal Paris",
"Lakme",
"Nykaa Cosmetics",
"Nyx Pro.Makeup"],
["Quick Links",
"Combos @ Nykaa",
"New Launches",
"NFBA Nominees 2020",
"Gifts @ Nykaa",
"The Gift Store",
"Trending Searches",
"Nude Lipstick",
"Matte Lipstick",
"Red Lipstick",
"Pink Lipstick"]],[["Cleansers",
"Facewash",
"Cleanser",
"Scrubs & Exfoliators",
"Facial Wipes",
"Makeup Remover",
"Toners",
"Toners & Mists",
"Trending Searches",
"Toners Under 1000",
"Face Wash For Oily Skin",
"Oil Free Face Moisturizers",
"Lip Balm Under 500",
"Vitamin C Serum"],
["Moisturizers",
"Face Moisturizer & Day Cream",
"Night Cream",
"Face Oils",
"Serums & Essence",
"BB & CC Creams",
"Masks",
"Masks & Peels",
"Sheet Masks",
"Kits & Combos",
"Facial Kits",
"Combos @ Nykaa",
"Gift Sets"],
["Eye Care",
"Under Eye Cream & Serums",
"Dark Circles & Wrinkles",
"Puffiness",
"Eye Masks",
"Eye Makeup Remover",
"Lip Care",
"Lip Balm",
"Lip Scrubs",
"Lip Masks",
"Skin Supplements",
"Vitamins & Minerals",
"Ayurvedic Herbs"],
["Body Care",
"Body Butter",
"Lotions & Creams",
"Massage Oils",
"Anti-Stretch Mark Creams",
"Anti-Cellulite Creams",
"Bath Salts",
"Shower Gels & Body Wash",
"Bath Scrubs",
"Soaps",
"Sun Care",
"Face Sunscreen",
"Body Sunscreen",
"Neck Creams"],
["Hands & Feet",
"Hand Creams",
"Foot Creams",
"Hand & Foot Masks",
"Top Brands",
"NYKAA SKINRX",
"Innisfree",
"L'oreal Paris",
"Nykaa Naturals",
"Neutrogena",
"The Face Shop",
"Nivea",
"Mamaearth",
"Plum"],
["Shop By Concern",
"Skin Brightening",
"Acne Treatment",
"Dull Skin Treatment",
"Pigmentation",
"Anti Ageing",
"Tan Removal",
"Face Treatment",
"Pore Care",
"Sun Protection",
"Skin Dryness",
"Oil Control",
"New Launches",
"Quick Links",
"The Gift Store"]],[["Hair Care",
"Nutritional Supplements",
"Shampoo",
"Dry Shampoo",
"NEW",
"Conditioner",
"Hair Oil",
"Hair Serum",
"Hair Creams & Masks"],
["Tools & Accessories",
"Hair Brushes",
"Hair Combs",
"Dryers & Stylers",
"Straighteners",
"Rollers & Curlers",
"Hair Extensions",
"Hair Accessories"],
["Hair Styling",
"Hair Color",
"Hair Spray",
"Gels & Waxes",
"Shop By Hair Type",
"Straight",
"Curly & Wavy",
"Professional Brands"],
["Shop By Concern",
"Hairfall & Thinning",
"Dandruff",
"Dry & Frizzy Hair",
"Split Ends",
"Color Protection",
"Trending Searches",
"Hair Growth Oil",
"Dandruff Shampoo",
"Castor Oil For Hair",
"Sulphate Free Shampoo",
"Hair Straightener Brush"],
["Top Brands",
"Nykaa Naturals",
"L'Oreal Paris",
"Wella Professionals",
"L'Oreal Professionnel",
"BBlunt",
"Herbal Essences",
"Schwarzkopf Professional"],
["Quick Links",
"Combos @ Nykaa",
"New Launches",
"NFBA Nominees 2020",
"Herbal Hair Care",
"Routine Finder",
"The Beauty Ingredient Edit",
"The Safe Beauty Edit",
"The Gift Store"]],[["Hair Styling Tools",
"Hair Dryers",
"Straighteners",
"Curling Iron/Stylers",
"Multi Stylers"],
["Hair Removal Tools",
"Epilators",
"Body Groomers",
"Bikini Trimmers"],
["Shaving Tools",
"Shavers",
"Trimmers"],
["Face/Skin Tools",
"Face Epilator",
"Dermarollers",
"Cleansing Brushes",
"Acne Removal",
"Massage Tools",
"Massagers",
"Foot Care"],
["Top Brands",
"Philips",
"Alan Truman",
"Dyson",
"VEGA",
"Braun",
"Ikonic Professional",
"Nova",
"Flawless"],
["Quick Links",
"Combos @ Nykaa",
"New Launches",
"NFBA Nominees 2020",
"Gifts @ Nykaa",
"Herbal Hair Care",
"Routine Finder"]],[["Bath & Shower",
"Shower Gels & Body Wash",
"Scrubs & Exfoliants",
"Soaps",
"Bath Salts",
"Body",
"Lotions & Creams",
"Talcum Powder",
"Deodorants/Roll Ons",
"Sunscreen",
"Home & Salon Disposables"],
["Hands & Feet",
"Handwash",
"Hand Sanitizer",
"Hand Creams",
"Foot Care",
"Tissue Boxes & Handkerchiefs",
"Eye Care",
"Contact Lenses",
"Lens Solution & Accessories"],
["Feminine Hygiene",
"Sanitary Napkins",
"Tampons",
"Pantyliners",
"Shaving & Hair Removal",
"Intimate Hygiene",
"Cotton Buds & Balls",
"Menstrual Cups",
"Tools & Accessories",
"Manicure & Pedicure Kits",
"Body Scrubbers & Brushes",
"Loofahs & Sponges",
"Shower Caps",
"Miscellaneous"],
["Men's Grooming",
"Shavers & Trimmers",
"Razors & Catridges",
"Shaving Cream, Foams & Gels",
"Pre & Post Shaves",
"Beard & Moustache Care",
"Intimate Care",
"Sexual Wellness",
"Dental Care",
"Toothpaste",
"Manual Toothbrush",
"Electric Toothbrush",
"Floss & Tongue Cleaners",
"Mouthwash",
"Tooth Powder"],
["Home & Health",
"Insect Repellents",
"Pepper Spray",
"Air Fresheners",
"Toilet Seat Sanitizer",
"Face Mask",
"Gloves",
"Others",
"Travel Essentials",
"Top Brands",
"Wanderlust",
"Dove",
"Gillette",
"Pantene",
"Palmolive",
"Bella"],
["Quick Links",
"Combos @ Nykaa",
"New Launches",
"NFBA Nominees 2020",
"Gifts @ Nykaa",
"Routine Finder",
"The Gift Store",
"Trending Searches",
"Beard Oil",
"Mosquito Repellent",
"Menstrual Cup",
"Hair Removal Cream",
"Wax Strips"]],
[["Skin",
"Face Wash",
"Cleanser",
"Moisturizer",
"Face Cream",
"Face Mist",
"Facial Kits",
"Toner",
"Face Oils",
"Sunscreen",
"Night Cream",
"Day Cream",
"Under Eye Care",
"Face Bleach",
"Serums"],
["Skin",
"Sheet Masks",
"Masks & Peels",
"Scrubs & Exfoliators",
"Face Tools",
"Face Gel",
"Lip Scrub",
"Body Care",
"Shower Gels & Body Wash",
"Soaps",
"Body Lotions",
"Body Scrubs",
"Bath Salts & Bath Bombs",
"Hands & Feet Care",
"Bath Tools & Accessories",
"Oral Care"],
["Hair",
"Shampoo & Cleanser",
"Conditioner",
"Hair Masks",
"Hair Oil",
"Hair Serum",
"Hair Color",
"Tools & Accessories",
"Aromatherapy",
"Massage Oils",
"Carrier Oils",
"Essential Oils",
"Candles",
"Diffuser",
"Incense Sticks"],
["Makeup",
"Lipstick",
"Kajal",
"Eyeliner",
"Mascara",
"Nail Polish",
"Lip Balm & Gloss",
"Foundation & Concealer",
"Blush & Highlighter",
"Makeup Remover",
"Tools & Brushes",
"Trending Search",
"Tea Tree Oil",
"Eucalyptus Oil",
"Rosemary Oil",
"Jojoba Oil",
"Peppermint Oil"],
["Top Brands",
"Biotique",
"Lotus Herbals",
"The Body Shop",
"Nykaa Naturals",
"Kama Ayurveda",
"Forest Essentials",
"Khadi Natural",
"Himalaya",
"VLCC",
"Baby Care",
"Types Of Skin",
"Dry Skin",
"Normal Skin",
"Oily Skin",
"Combination Skin"],
["Shop By Concern",
"Tan Removal",
"Pigmentation",
"Acne Treatment",
"Skin Lightening",
"Anti Aging",
"Dark Circles",
"Hairfall",
"Dandruff",
"Dry & Frizzy Hair",
"QUICK LINKS",
"New Launches",
"Combos @ Nykaa",
"Gifts @ Nykaa",
"The Safe (And Clean) Beauty Edit"]],[["Baby Care",
"Body Wash & Soaps",
"Baby Oil",
"Hair Oil",
"Lotions & Creams",
"Baby Powder",
"Shampoo & Conditioner",
"Sunscreen",
"Wipes & Buds",
"Teeth & Dental Care",
"Rash Cream",
"Diapers",
"Diaper Accessories",
"Bath Accessories",
"Baby Grooming",
"Baby Bedding"],
["Kids Care",
"Nutritional Supplement",
"Body Wash & Soaps",
"Lotions & Creams",
"Hair Care",
"Sunscreen",
"Dental Care",
"Kids Makeup"],
["Maternity Care",
"Stretch Mark Creams & Oils",
"Breast Firming Gels & Creams",
"Nipple Creams",
"Nutritional Supplements",
"Maternity Pillows"],
["Nursing & Feeding",
"Feeding Bottle & Nipples",
"Teethers & Soothers",
"Breast Pumps",
"Breast Pads",
"Cleaning & Feeding Accessories",
"Bibs",
"Sippers & Cups"],
["Health & Safety",
"Nose & Ear Care",
"Gripe Water & Tummy Roll On",
"Detergents & Cleansers",
"Handwash & Sanitizer",
"Mosquito Repellent",
"Maternity Wear",
"Maternity Bra",
"Maternity Dress",
"Maternity Tops"],
["Baby Toys",
"Gift Sets",
"Shop By Concerns",
"Baby Dry Skin",
"Cracked Nipple Cream",
"Scalp Treatment",
"Coconut Oil",
"Almond Oil",
"Heat Rash",
"Body Toning & Firming",
"Baby Skin Concerns",
"Combos @ Nykaa"]],
[["Health Supplements",
"Multivitamins",
"Calcium & Vitamin D",
"Magnesium & Zinc",
"Omega 3 & Fish Oil",
"Immunity Boosters & Vitamin C",
"Other Supplements",
"Beauty Supplements",
"Collagen (Skin)",
"Biotin (Hair)",
"Vitamin E (Skin)",
"Glutathione (Skin)",
"Other Beauty Supplements"],
["Sports Nutrition",
"Whey Protein",
"Plant Protein",
"BCAA & Other Muscle Support",
"Protein & Energy Bars",
"Protein Snacks",
"Weight Management",
"Weight Gain",
"Apple Cider Vinegar",
"Green Tea",
"Green Coffee",
"Fat Burner",
"Slimming Shakes & Juices",
"Sugar Substitutes"],
["Health Foods",
"Honey",
"Dry Fruits, Nuts & Berries",
"Edible Seeds",
"Oils & Ghee",
"Black Tea & Coffee",
"Herbal Teas",
"Health Drinks",
"Breakfast Cereals",
"Other Health Foods",
"Wellness Equipment",
"Weighing Scales",
"Fitness",
"Face Steamers",
"Supports & Braces"],
["Pain Relief",
"Muscles & Joints",
"Ortho Oils",
"Period Cramps",
"Cough & Cold",
"Sexual Wellness",
"Condoms",
"Lubricants",
"Sexual Enhancers",
"Medical Devices",
"Oximeters"],
["Ayurveda & Herbs",
"Ashwagandha",
"Neem (Blood Purifier)",
"Amla (Immunity, Skin)",
"Aloe Vera (Liver, Skin)",
"Milk Thistle (Liver)",
"Wheatgrass (Detox)",
"Tulsi",
"Giloy & Guduchi (Immunity)",
"Turmeric (Anti Inflamatory)",
"Spirulina & Moringa",
"Chyavanprash",
"Shilajit",
"Other Herbal Supplements"],
["Shop By Concern",
"Diabetes",
"Digestion (Gut Health)",
"Organs - Liver, Heart, Kidney",
"Safety & First Aid",
"Weakness & Vitality",
"Kids Nutrition",
"Mental Wellness",
"Blood Pressure",
"Hormonal Balance",
"Calm & Sleep"]],[["Shaving",
"Razors & Cartridges",
"Shavers",
"Trimmers",
"Shaving Creams",
"Shaving Foams",
"Shaving Gels",
"Pre & Post Shaves",
"Aftershave Lotion",
"Shaving Brushes"],
["Beard Care",
"Beard Oil",
"Beard Butter",
"Beard Softener",
"Beard Wash",
"Beard Wax",
"Moustache Oil",
"Beard Comb",
"Moustache Wax",
"Beard Kits",
"Beard Gel",
"Beard Balm",
"Beard Cream",
"Beard Serum",
"Beard Mist",
"Beard Colour",
"Beard Shampoo"],
["Hair Care",
"Shampoo",
"Conditioner",
"Hair Styling",
"Hair Color",
"Hair Oils",
"Professional Products",
"Skin Care",
"Face Wash",
"Moisturizers",
"Sunscreen",
"Masks & Peels",
"Scrubs & Exfoliators",
"Fairness"],
["Bath & Body",
"Bath/Shower Gels",
"Soaps",
"Body Scrubs",
"Talc",
"Dental Care",
"Body Lotions",
"Intimate Care",
"Grooming Kits",
"Fragrance",
"Deodorants/Roll Ons",
"Colognes & Perfumes (EDT & EDP)",
"Luxe Fragrances"],
["Shop By Concern",
"Anti Dandruff",
"Anti Hairfall",
"Scalp Treatment",
"Anti Acne",
"Anti Ageing",
"Wellness",
"Sexual Wellness",
"Health Supplements",
"Weight Management",
"Sports Nutrition"],
["Top Brands",
"Beardo",
"Gilette",
"Livon",
"Nivea",
"Park Avenue",
"Quick Links",
"Combos @ Nykaa",
"New Launches",
"Gifts @ Nykaa",
"Routine Finder",
"The Gift Store"]],
[["Womens Fragrance",
"Perfumes (EDT / EDP)",
"Body Mists / Sprays",
"Deodorants / Roll-Ons",
"Mens Fragrance",
"Perfumes (EDT / EDP)",
"Body Mists / Sprays",
"Deodorants / Roll-Ons",
"Colognes & After Shaves"],
["Giftsets & Combos",
"Shop By Fragrance Family",
"Earthy & Woody",
"Floral",
"Fresh & Aquatic",
"Spicy & Warm",
"Oud Collection",
"Fruity",
"The Parcos Store"],
["Ultra Luxury",
"Candles"],
["Top Brands",
"Nykaa Cosmetics",
"Masaba By Nykaa",
"Dior",
"Gucci",
"Calvin Klein",
"Davidoff",
"Hermes",
"Bvlgari",
"Versace",
"Skinn By Titan",
"Paco Rabanne",
"Giorgio Armani"],
["PREMIUM AND DESIGNER BRANDS",
"Explore All",
"Dior",
"Hermès",
"Jo Malone London",
"Guerlain",
"BVLGARI",
"Salvatore Ferragamo",
"Calvin Klein",
"Giorgio Armani",
"Davidoff",
"Paco Rabanne",
"Carolina Herrera",
"Yves Saint Laurent",
"Elie Saab"],
["Dolce & Gabbana",
"Narciso Rodrigue",
"Hugo Boss",
"Montblanc",
"Quick Links",
"Combos @ Nykaa",
"New Launches",
"NFBA Nominees 2020",
"Help Me Choose - Fragrance Finder",
"Gifts @ Nykaa",
"The Gift Store"]],
[["Make Up",
"Face",
"Primer",
"Corrector & Concealer",
"Foundation",
"Compact",
"Loose Powder",
"Blush",
"Bronzer",
"Highlighter",
"Tinted Moisturizer",
"BB & CC Cream",
"Makeup Remover",
"Contouring",
"Customize Your Palette",
"Setting Spray"],
["EYES",
"Eyeliner & Kajal",
"Mascara",
"Eye Shadow",
"Brows",
"Lashes",
"Eye Primer",
"Corrector & Concealer",
"Customize Your Palette",
"Lips",
"Lipstick",
"Liquid Lipstick",
"Lip Gloss",
"Lip Liner",
"Lip Balm"],
["Nails",
"Nail Polish",
"Nail Care",
"Nail Polish Remover",
"Palettes",
"Eye Palette",
"Face Palette",
"Customize Your Palette",
"Tools & Brushes",
"Face Brush",
"Eye Brush",
"Lip Brush",
"Applicators"],
["Skin",
"Face",
"Face Wash & Cleansers",
"Toner",
"Exfoliators",
"Serum",
"Moisturisers",
"Day Cream",
"Night Cream",
"Masks",
"Sunscreen",
"Face Mist",
"Makeup Remover",
"Tools & Appliances",
"Lipcare"],
["Eyecare",
"Eye Cream",
"Serum",
"Dark Circles",
"Shop By Concern",
"Anti-Blemish",
"Brightening",
"Pigmentation",
"Oil Control",
"Dryness",
"Anti-Ageing",
"Perfumes (EDP/EDT)",
"Deodorants",
"Colognes"],
["Fragrance",
"Perfumes (EDP/EDT)",
"Aftershave",
"Face & Body Mists",
"Candles & Incense",
"Gifts",
"Hair",
"Shampoo",
"Conditioner",
"Hair Oil",
"Hair Serums & Masks",
"Hair Styling",
"Hair Color",
"Appliances"],
["Bath & Body",
"BATH",
"Soap",
"Shower Gel",
"Scrubs & Exfoliators",
"BODY",
"Moisturiser",
"Sun Protection",
"Gifts"]]];


let f=document.getElementById("header");
let d=document.getElementsByClassName("class");
var div=document.createElement("div");

console.log(d,d.length);
for(let i=0;i<=d.length-1;i++)
{ 
    d[i].addEventListener("mouseover",()=>{
       
        div.innerHTML=null;
        console.log(d[i]);
        let div1=document.createElement("div");
        let div2=document.createElement("div");        
        let div3=document.createElement("div");
        let div4=document.createElement("div");
        let div5=document.createElement("div");
        let div6=document.createElement("div");
        div.classList.add("onof");
        div.append(div1,div2,div3,div4,div5,div6)
        console.log(div)
        f.append(div);
        // document.querySelector(`.onof`).innerText=null;
        Append(array1[i]);
    });
    
    div.addEventListener("mouseleave",()=>{
        div.innerHTML=null;
        div.classList.remove("onof");
        
    })
}

document.querySelector(".class").addEventListener("click",function(){
    window.location.href = "main.html"
})