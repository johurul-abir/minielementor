const h1 = document.querySelector(".screen .cardbody h1");
const headingInput = document.querySelector(".sidebar .heading input");

// heading input code //
headingInput.addEventListener("input", function(){
let headingval = headingInput.value;
if(!headingval){
    headingval=`<h1> Heading title </h1>`;
}
h1.innerHTML= headingval;
});


// color dynamic code here //
const color = document.querySelector(".color input");

color.oninput = (e) => {
h1.style.color = e.target.value;
}

// font family dynamic code //
const font = document.getElementById("font");

font.oninput = () => {

    h1.style.fontFamily = font.value;

};



// font-weight dynamic code here //

const fontWeight = document.getElementById("font-weight");

fontWeight.oninput = () => {

    h1.style.fontWeight = fontWeight.value;

};


//control font size dynamic code//
const fontSize = document.querySelector(".font-size input");
const span = document.querySelector(".font-size span");

fontSize.addEventListener("input", function(){
    const fontVal = this.value;
    span.innerHTML= fontVal + "px";

    h1.style.fontSize = `${fontVal}px`;
 
});


// align control dynamic code//
const alignbtn = document.querySelectorAll(".align button");



alignbtn.forEach((item, index) => {

    item.onclick = (e) => {
      
        h1.style.textAlign = e.target.getAttribute('name'); 
    
    }    
   
});











// content dynamic code here //

const p = document.querySelector(".screen .cardbody p");
const content = document.querySelector(".sidebar .content textarea");

// heading input code //
content.addEventListener("input", function(){
let paval = content.value;
if(!paval){
    paval=`<p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus animi earum officiis suscipit aperiam ratione voluptates, numquam aspernatur alias eius itaque aliquid perferendis, voluptatum nemo mollitia sint facere </p>`;
}
p.innerHTML= paval;
});


// color dynamic code here //
const pcolor = document.querySelector(".pcolor input");

pcolor.oninput = (e) => {
p.style.color = e.target.value;
}



//font family dynamic code //
const contentfamily = document.getElementById("contentfont");

contentfamily.oninput = () => {

    p.style.fontFamily = contentfamily.value;

};



// font-weight dynamic code here //

const pfontWeight = document.getElementById("pfont-weight");

pfontWeight.oninput = () => {

    p.style.fontWeight = pfontWeight.value;

};


//control font size dynamic code//
const pfontSize = document.querySelector(".pfont-size input");
const pspan = document.querySelector(".pfont-size span");

pfontSize.addEventListener("input", function(){
    const pfontVal = this.value;
    pspan.innerHTML= pfontVal + "px";

    p.style.fontSize = `${pfontVal}px`;
 
});


// align control dynamic code//
const palignbtn = document.querySelectorAll(".palign button");


palignbtn.forEach((item, index) => {

    item.onclick = (e) => {
      
        p.style.textAlign = e.target.getAttribute('name'); 
    
    }    
   
});













// button text dynamic code here //
const buttonText = document.querySelector(".buttonText input");
const button = document.querySelector(".screen .cardbody button")

buttonText.addEventListener("input", function(){
    let btnval = buttonText.value;
    console.log(btnval);
    if(!btnval){
        btnval=`<button> Click here </button>`;
    }
    button.innerHTML= btnval;
    });

// button color control code here //
const buttonColor = document.querySelector(".buttonColor input");

buttonColor.oninput = (e) => {
button.style.color = e.target.value;
};

// button background color control code here //
const buttonBgc = document.querySelector(".bgColor input");

buttonBgc.oninput = (e) => {
button.style.backgroundColor = e.target.value;
};


// button align control section code here //

const buttonDiv = document.querySelector(".actionbtn")
const buttonAlign = document.querySelectorAll(".btnalign button");



buttonAlign.forEach((item, index) => {

    item.onclick = (e) => {
      
        buttonDiv.style.textAlign = e.target.getAttribute('name'); 
    
    }    
   
});



