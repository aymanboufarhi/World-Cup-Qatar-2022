// code pour cacher le volet 2

function fleft() {
    var y= document.getElementById('side2');
    
    if (y.style.display === 'none') {
        y.style.display = 'block';
      } else {
        y.style.display = 'none';
  }
}

// code pour cacher le volet 5

function fright() {
    var  x = document.getElementById('side5');

    if (x.style.display === 'none') {
        x.style.display = 'block';
      } else {
        x.style.display = 'none';
      }
}
// Afficher les actualités dans le volet 5  quand en clique sur les actualités dans le volet 1

let act = document.getElementById("actual");
var x = document.getElementById('myDIV');
x.style.display = "none";
act.addEventListener('click', ()=> {
    if(x.style.display === "none"){
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
});

var slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
  showSlides(slideIndex += n);
}
function currentSlide(n) {
  showSlides(slideIndex = n);
}
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if(n > slides.length) {
    slideIndex = 1
  }
  if(n < 1) {
    slideIndex = slides.length
  }
  for(i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for(i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

let acc = document.getElementById("acceuil");
let accslide = document.getElementById("accslide");

acc.addEventListener("click", () => {
    accslide.style.display = "block";
    matchs.style.display = "none";
    tab8.style.display="none";
    tab1.style.display="none";
    tab2.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   

    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

let a = document.getElementById("a");
let b = document.getElementById("b");
let c = document.getElementById("c");
let d = document.getElementById("d");
let e = document.getElementById("e");
let f = document.getElementById("f");
let g = document.getElementById("g");
let h = document.getElementById("h");

let ga = document.getElementById("ga");
let gb = document.getElementById("gb");
let gc = document.getElementById("gc");
let gd = document.getElementById("gd");
let ge = document.getElementById("ge");
let gf = document.getElementById("gf");
let gg = document.getElementById("gg");
let gh = document.getElementById("gh");

// Maroc
let mar = document.getElementById("maroc");
let pm = document.getElementById("p_m");
// Brazil
let brz = document.getElementById("brz");
let pb = document.getElementById("pb");
// France
let fr = document.getElementById("frc");
let pf = document.getElementById("pf");
// Argentine
let arg = document.getElementById("arg");
let pa = document.getElementById("pa");
// Pays-bas
let pba = document.getElementById("pba");
let pi = document.getElementById("pi");
// Portugal
let prt = document.getElementById("prt");
let po = document.getElementById("po");
// Espagne
let spa = document.getElementById("spa");
let esp = document.getElementById("esp");
// Angleterre
let ango = document.getElementById("ango");
let ang = document.getElementById("ang");

// les Tableaux des joueurs
let tab1 = document.getElementById("marc-team");
let tab2 = document.getElementById("portugue-team");
let tab7 = document.getElementById("espagne-team");
let tab8 = document.getElementById("Pays-Bas-team");
let tab3 = document.getElementById("uk-team");
let tab4 = document.getElementById("brz-team");
let tab5 = document.getElementById("arg-team");
let tab6 = document.getElementById("frc-team");


ga.style.display = "none";
gb.style.display = "none";
gc.style.display = "none";
gd.style.display = "none";
ge.style.display = "none";
gf.style.display = "none";
gg.style.display = "none";
gh.style.display = "none";

tab8.style.display="none";
tab1.style.display="none";
tab2.style.display="none";
tab3.style.display="none";
tab4.style.display="none";
tab5.style.display="none";
tab6.style.display="none";
tab7.style.display="none";
mar.style.display = "none";
brz.style.display = "none";
fr.style.display = "none";
arg.style.display = "none";
ango.style.display = "none";
spa.style.display = "none";
prt.style.display = "none";
pba.style.display = "none";

// Les codes pour afficher les images des joueurs dans le volet 3
// Afficher juste l’équipe et le tableau du Pays-Bas et masquée les autres équipes avec leur tableaux
pi.addEventListener("click", () => {
    tab1.style.display="none";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "block";
    tab8.style.display="block";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau du Portugal et masquée les autres équipes avec leur tableaux

po.addEventListener("click", () => {
    tab1.style.display="none";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "block";
    pba.style.display = "none";
    tab2.style.display="block";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau d'Espagne et masquée les autres équipes avec leur tableaux

esp.addEventListener("click", () => {
    tab1.style.display="none";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "block";
    tab7.style.display="block";
    prt.style.display = "none";
    pba.style.display = "none";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau d'Angleterre et masquée les autres équipes avec leur tableaux

ang.addEventListener("click", () => {
    tab1.style.display="none";
    tab3.style.display="block";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "block";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau du Maroc et masquée les autres équipes avec leur tableaux

pm.addEventListener("click", () => {

    mar.style.display = "block";
    tab1.style.display="block";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau d'argentine et masquée les autres équipes avec leur tableaux

pa.addEventListener("click", () => {
    tab1.style.display="none";
    tab5.style.display="block";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "block";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Afficher juste l’équipe et le tableau du brézil et masquée les autres équipes avec leur tableaux
pb.addEventListener("click", () => {
    tab1.style.display="none";
    mar.style.display = "none";
    brz.style.display = "block";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    tab4.style.display="block";
    matchs.style.display = "none";
    accslide.style.display = "none";
});
// Afficher juste l’équipe et le tableau de france et masquée les autres équipes avec leur tableaux
pf.addEventListener("click", () => {
    tab1.style.display="none";
    tab6.style.display="block";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "block";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    matchs.style.display = "none";
    accslide.style.display = "none";
});

// Affiche seulement le groupe A sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

a.addEventListener("click", () => {
    ga.style.display = "block";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   

    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";

});

// Affiche seulement le groupe B sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

b.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "block";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";
    mar.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";
   
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Affiche seulement le groupe C sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

c.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "block";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";
    
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Affiche seulement le groupe D sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

d.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "block";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";
   
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Affiche seulement le groupe E sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

e.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "block";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});


// Affiche seulement le groupe F sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

f.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "block";
    gg.style.display = "none";
    gh.style.display = "none";
    mar.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Affiche seulement le groupe G sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

g.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "block";
    gh.style.display = "none";
    mar.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Affiche seulement le groupe H sur le volet 2 et cache les tableaux, les images, et les stats d'autre equipe

h.addEventListener("click", () => {
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "block";
    mar.style.display = "none";

    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";
    tab2.style.display="none";
    tab1.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    tab8.style.display="none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});

// Les statistiques des joueurs d'Angleterre

let ep1 = document.getElementById("ep1");
let ep2 = document.getElementById("ep2");
let ep3 = document.getElementById("ep3");
let ep4 = document.getElementById("ep4");
let ep5 = document.getElementById("ep5");
let ep6 = document.getElementById("ep6");
let ep7 = document.getElementById("ep7");
let ep8 = document.getElementById("ep8");
let ep9 = document.getElementById("ep9");
let ep10 = document.getElementById("ep10");
let ep11 = document.getElementById("ep11");

let eps1 = document.getElementById("eps1");
let eps2 = document.getElementById("eps2");
let eps3 = document.getElementById("eps3");
let eps4 = document.getElementById("eps4");
let eps5 = document.getElementById("eps5");
let eps6 = document.getElementById("eps6");
let eps7 = document.getElementById("eps7");
let eps8 = document.getElementById("eps8");
let eps9 = document.getElementById("eps9");
let eps10 = document.getElementById("eps10");
let eps11 = document.getElementById("eps11");

eps1.style.display = "none";
eps2.style.display = "none";
eps3.style.display = "none";
eps4.style.display = "none";
eps5.style.display = "none";
eps6.style.display = "none";
eps7.style.display = "none";
eps8.style.display = "none";
eps9.style.display = "none";
eps10.style.display = "none";
eps11.style.display = "none";

// cacher les statistiques d'un joueur d'Angleterre quand on clique sur un autre

ep1.addEventListener("click", () => {
    eps1.style.display = "block";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep2.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "block";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep3.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "block";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep4.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "block";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep5.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "block";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep6.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "block";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep7.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "block";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep8.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "block";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep9.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "block";
    eps10.style.display = "none";
    eps11.style.display = "none";
});
ep10.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "block";
    eps11.style.display = "none";
});
ep11.addEventListener("click", () => {
    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "block";
});

// Les statistiques des joueurs du Brézil

let bp1 = document.getElementById("bp1");
let bp2 = document.getElementById("bp2");
let bp3 = document.getElementById("bp3");
let bp4 = document.getElementById("bp4");
let bp5 = document.getElementById("bp5");
let bp6 = document.getElementById("bp6");
let bp7 = document.getElementById("bp7");
let bp8 = document.getElementById("bp8");
let bp9 = document.getElementById("bp9");
let bp10 = document.getElementById("bp10");
let bp11 = document.getElementById("bp11");

let bps1 = document.getElementById("bps1");
let bps2 = document.getElementById("bps2");
let bps3 = document.getElementById("bps3");
let bps4 = document.getElementById("bps4");
let bps5 = document.getElementById("bps5");
let bps6 = document.getElementById("bps6");
let bps7 = document.getElementById("bps7");
let bps8 = document.getElementById("bps8");
let bps9 = document.getElementById("bps9");
let bps10 = document.getElementById("bps10");
let bps11 = document.getElementById("bps11");

bps1.style.display = "none";
bps2.style.display = "none";
bps3.style.display = "none";
bps4.style.display = "none";
bps5.style.display = "none";
bps6.style.display = "none";
bps7.style.display = "none";
bps8.style.display = "none";
bps9.style.display = "none";
bps10.style.display = "none";
bps11.style.display = "none";


// cacher les statistiques d'un joueur du Brézil quand on clique sur un autre

bp1.addEventListener("click", () => {
    bps1.style.display = "block";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp2.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "block";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp3.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "block";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp4.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "block";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp5.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "block";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp6.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "block";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp7.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "block";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp8.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "block";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp9.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "block";
    bps10.style.display = "none";
    bps11.style.display = "none";
});
bp10.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "block";
    bps11.style.display = "none";
});
bp11.addEventListener("click", () => {
    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "block";
});

// Les statistiques des joueurs du france

let fp1 = document.getElementById("fp1");
let fp2 = document.getElementById("fp2");
let fp3 = document.getElementById("fp3");
let fp4 = document.getElementById("fp4");
let fp5 = document.getElementById("fp5");
let fp6 = document.getElementById("fp6");
let fp7 = document.getElementById("fp7");
let fp8 = document.getElementById("fp8");
let fp9 = document.getElementById("fp9");
let fp10 = document.getElementById("fp10");
let fp11 = document.getElementById("fp11");

let fps1 = document.getElementById("fps1");
let fps2 = document.getElementById("fps2");
let fps3 = document.getElementById("fps3");
let fps4 = document.getElementById("fps4");
let fps5 = document.getElementById("fps5");
let fps6 = document.getElementById("fps6");
let fps7 = document.getElementById("fps7");
let fps8 = document.getElementById("fps8");
let fps9 = document.getElementById("fps9");
let fps10 = document.getElementById("fps10");
let fps11 = document.getElementById("fps11");

fps1.style.display = "none";
fps2.style.display = "none";
fps3.style.display = "none";
fps4.style.display = "none";
fps5.style.display = "none";
fps6.style.display = "none";
fps7.style.display = "none";
fps8.style.display = "none";
fps9.style.display = "none";
fps10.style.display = "none";
fps11.style.display = "none";

// cacher les statistiques d'un joueur du Brézil quand on clique sur un autre

fp1.addEventListener("click", () => {
    fps1.style.display = "block";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp2.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "block";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp3.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "block";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp4.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "block";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp5.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "block";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp6.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "block";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp7.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "block";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp8.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "block";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp9.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "block";
    fps10.style.display = "none";
    fps11.style.display = "none";
});
fp10.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "block";
    fps11.style.display = "none";
});
fp11.addEventListener("click", () => {
    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "block";
});

// Les statistiques des joueurs d'argentine

let ap1 = document.getElementById("ap1");
let ap2 = document.getElementById("ap2");
let ap3 = document.getElementById("ap3");
let ap4 = document.getElementById("ap4");
let ap5 = document.getElementById("ap5");
let ap6 = document.getElementById("ap6");
let ap7 = document.getElementById("ap7");
let ap8 = document.getElementById("ap8");
let ap9 = document.getElementById("ap9");
let ap10 = document.getElementById("ap10");
let ap11 = document.getElementById("ap11");

let aps1 = document.getElementById("aps1");
let aps2 = document.getElementById("aps2");
let aps3 = document.getElementById("aps3");
let aps4 = document.getElementById("aps4");
let aps5 = document.getElementById("aps5");
let aps6 = document.getElementById("aps6");
let aps7 = document.getElementById("aps7");
let aps8 = document.getElementById("aps8");
let aps9 = document.getElementById("aps9");
let aps10 = document.getElementById("aps10");
let aps11 = document.getElementById("aps11");

aps1.style.display = "none";
aps2.style.display = "none";
aps3.style.display = "none";
aps4.style.display = "none";
aps5.style.display = "none";
aps6.style.display = "none";
aps7.style.display = "none";
aps8.style.display = "none";
aps9.style.display = "none";
aps10.style.display = "none";
aps11.style.display = "none";

// cacher les statistiques d'un joueur d'Argentine quand on clique sur un autre

ap1.addEventListener("click", () => {
    aps1.style.display = "block";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap2.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "block";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap3.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "block";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap4.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "block";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap5.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "block";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap6.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "block";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap7.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "block";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap8.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "block";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap9.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "block";
    aps10.style.display = "none";
    aps11.style.display = "none";
});
ap10.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "block";
    aps11.style.display = "none";
});
ap11.addEventListener("click", () => {
    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "block";
});

// Les statistiques des joueurs du Maroc
mp1.style.display="none";
mp2.style.display="none";
mp3.style.display="none";
mp4.style.display="none";
mp5.style.display="none";
mp6.style.display="none";
mp7.style.display="none";
mp8.style.display="none";
mp9.style.display="none";
mp10.style.display="none";
mp11.style.display="none";

// Les statistiques des joueurs d'Espagne

spp1.style.display="none";
spp2.style.display="none";
spp3.style.display="none";
spp4.style.display="none";
spp5.style.display="none";
spp6.style.display="none";
spp7.style.display="none";
spp8.style.display="none";
spp9.style.display="none";
spp10.style.display="none";
spp11.style.display="none";

// Les statistiques des joueurs du portugal

prtp1.style.display="none";
prtp2.style.display="none";
prtp3.style.display="none";
prtp4.style.display="none";
prtp5.style.display="none";
prtp6.style.display="none";
prtp7.style.display="none";
prtp8.style.display="none";
prtp9.style.display="none";
prtp10.style.display="none";
prtp11.style.display="none";

// Les statistiques des joueurs du Pays-Bas

pbasp1.style.display="none";
pbasp2.style.display="none";
pbasp3.style.display="none";
pbasp4.style.display="none";
pbasp5.style.display="none";
pbasp6.style.display="none";
pbasp7.style.display="none";
pbasp8.style.display="none";
pbasp9.style.display="none";
pbasp10.style.display="none";
pbasp11.style.display="none";

// recuperer l'id du section des matchs
let matchs = document.getElementById("matchcontainer");
// recuperer l'id du bouttons de macths sur le volet 1
let matchschedule = document.getElementById("pdg");
// cacher initialement les horaires des matchs
matchs.style.display = "none";
// cacher tous les tableaux et les images des joueures lorsqu'on clique sur sur le bouttons "Matchs" sur le volet 1
matchschedule.addEventListener("click", () => {
    matchs.style.display = "block";
    accslide.style.display = "none";
    ga.style.display = "none";
    gb.style.display = "none";
    gc.style.display = "none";
    gd.style.display = "none";
    ge.style.display = "none";
    gf.style.display = "none";
    gg.style.display = "none";
    gh.style.display = "none";

    tab8.style.display="none";
    tab1.style.display="none";
    tab2.style.display="none";
    tab3.style.display="none";
    tab4.style.display="none";
    tab5.style.display="none";
    tab6.style.display="none";
    tab7.style.display="none";
    mar.style.display = "none";
    brz.style.display = "none";
    fr.style.display = "none";
    arg.style.display = "none";
    ango.style.display = "none";
    spa.style.display = "none";
    prt.style.display = "none";
    pba.style.display = "none";

    eps1.style.display = "none";
    eps2.style.display = "none";
    eps3.style.display = "none";
    eps4.style.display = "none";
    eps5.style.display = "none";
    eps6.style.display = "none";
    eps7.style.display = "none";
    eps8.style.display = "none";
    eps9.style.display = "none";
    eps10.style.display = "none";
    eps11.style.display = "none";

    bps1.style.display = "none";
    bps2.style.display = "none";
    bps3.style.display = "none";
    bps4.style.display = "none";
    bps5.style.display = "none";
    bps6.style.display = "none";
    bps7.style.display = "none";
    bps8.style.display = "none";
    bps9.style.display = "none";
    bps10.style.display = "none";
    bps11.style.display = "none";

    fps1.style.display = "none";
    fps2.style.display = "none";
    fps3.style.display = "none";
    fps4.style.display = "none";
    fps5.style.display = "none";
    fps6.style.display = "none";
    fps7.style.display = "none";
    fps8.style.display = "none";
    fps9.style.display = "none";
    fps10.style.display = "none";
    fps11.style.display = "none";

    aps1.style.display = "none";
    aps2.style.display = "none";
    aps3.style.display = "none";
    aps4.style.display = "none";
    aps5.style.display = "none";
    aps6.style.display = "none";
    aps7.style.display = "none";
    aps8.style.display = "none";
    aps9.style.display = "none";
    aps10.style.display = "none";
    aps11.style.display = "none";

    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";
    
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    
    
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";
    prtp11.style.display="none";   
     
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    pbasp11.style.display="none";
});
//////////////////////////////maroc//////////////////////////////////////
//afficher les statistique de chaque joueur lors du click sur son image
document.getElementById("bono").addEventListener("click", () => {
    let mp1=document.getElementById("mp1")
    mp1.style.display="block";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("hakimi").addEventListener("click", () => {
    let mp2=document.getElementById("mp2")
    mp2.style.display="block";
    mp1.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("nayef").addEventListener("click", () => {
    let mp3=document.getElementById("mp3")
    mp3.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("says").addEventListener("click", () => {
    let mp4=document.getElementById("mp4")
    mp4.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("mezrawi").addEventListener("click", () => {
    let mp5=document.getElementById("mp5")
    mp5.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("ounahi").addEventListener("click", () => {
    let mp6=document.getElementById("mp6")
    mp6.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("mrabet").addEventListener("click", () => {
    let mp7=document.getElementById("mp7")
    mp7.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("amellah").addEventListener("click", () => {
    let mp8=document.getElementById("mp8")
    mp8.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("boufal").addEventListener("click", () => {
    let mp9=document.getElementById("mp9")
    mp9.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp10.style.display="none";
    mp11.style.display="none";

});
document.getElementById("zyach").addEventListener("click", () => {
    let mp10=document.getElementById("mp10")
    mp10.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp11.style.display="none";

});
document.getElementById("ensyri").addEventListener("click", () => {
    let mp11=document.getElementById("mp11")
    mp11.style.display="block";
    mp1.style.display="none";
    mp2.style.display="none";
    mp3.style.display="none";
    mp4.style.display="none";
    mp5.style.display="none";
    mp6.style.display="none";
    mp7.style.display="none";
    mp8.style.display="none";
    mp9.style.display="none";
    mp10.style.display="none";

});
// ////////////////////////////////////////////Espagne///////////////////////////////
//afficher les statistique de chaque joueur lors du click sur son image.
document.getElementById("Simón").addEventListener("click", () => {
    let spp1=document.getElementById("spp1")
    spp1.style.display="block";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";

});
document.getElementById("serji").addEventListener("click", () => {
    let spp2=document.getElementById("spp2")
    spp2.style.display="block";
    spp1.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("pantorres").addEventListener("click", () => {
    let spp3=document.getElementById("spp3")
    spp3.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("jordialba").addEventListener("click", () => {
    let spp4=document.getElementById("spp4")
    spp4.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
});
document.getElementById("carvajal").addEventListener("click", () => {
    let spp5=document.getElementById("spp5")
    spp5.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("busquets").addEventListener("click", () => {
    let spp6=document.getElementById("spp6")
    spp6.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("gavi").addEventListener("click", () => {
    let spp7=document.getElementById("spp7")
    spp7.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("pedri").addEventListener("click", () => {
    let spp8=document.getElementById("spp8")
    spp8.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("morata").addEventListener("click", () => {
    let spp9=document.getElementById("spp9")
    spp9.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp10.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("ferrantorres").addEventListener("click", () => {
    let spp10=document.getElementById("spp10")
    spp10.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp11.style.display="none";
    });
document.getElementById("asensio").addEventListener("click", () => {
    let spp11=document.getElementById("spp11")
    spp11.style.display="block";
    spp1.style.display="none";
    spp2.style.display="none";
    spp3.style.display="none";
    spp4.style.display="none";
    spp5.style.display="none";
    spp6.style.display="none";
    spp7.style.display="none";
    spp8.style.display="none";
    spp9.style.display="none";
    spp10.style.display="none";
    });

/////////////////////////////////Portugue/////////////////////////
//afficher les statistique de chaque joueur lors du click sur son image
document.getElementById("Diego Costa").addEventListener("click",() => {
    let prtp1=document.getElementById("prtp1")
    prtp10.style.display="none";
    prtp1.style.display="block";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("António Silva").addEventListener("click",() => {
    let prtp2=document.getElementById("prtp2")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="block";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("Rúben Dias").addEventListener("click",() => {
    let prtp3=document.getElementById("prtp3")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="block";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("Nuno Mendes").addEventListener("click",() => {
    let prtp4=document.getElementById("prtp4")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="block";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("Raphaël Guerreiro").addEventListener("click",() => {
    let prtp5=document.getElementById("prtp5")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="block";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("William Carvalho").addEventListener("click",() => {
    let prtp6=document.getElementById("prtp6")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="block";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});


document.getElementById("Vitinha").addEventListener("click",() => {
    let prtp7=document.getElementById("prtp7")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="block";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});

document.getElementById("Matheus Nunes").addEventListener("click",() => {
    let prtp8=document.getElementById("prtp8")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="block";
    prtp9.style.display="none";
    prtp11.style.display="none";

});


document.getElementById("Rafael Leão").addEventListener("click",() => {
    let prtp9=document.getElementById("prtp9")
    prtp10.style.display="none";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="block";
    prtp11.style.display="none";

});

document.getElementById("Bruno Fernandes").addEventListener("click",() => {
    let prtp10=document.getElementById("prtp10")
    prtp10.style.display="block";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp11.style.display="none";

});
document.getElementById("Cristiano Ronaldo").addEventListener("click",() => {
    let prtp11=document.getElementById("prtp11")
    prtp11.style.display="block";
    prtp1.style.display="none";
    prtp2.style.display="none";
    prtp3.style.display="none";
    prtp4.style.display="none";
    prtp5.style.display="none";
    prtp6.style.display="none";
    prtp7.style.display="none";
    prtp8.style.display="none";
    prtp9.style.display="none";
    prtp10.style.display="none";

});

////////////////////////////PaysBas/////////////////////////////////////////
//afficher les statistique de chaque joueur lors du click sur son image
document.getElementById("Justin Bijlow").addEventListener("click",() => {
    let pbasp1=document.getElementById("pbasp1")
    pbasp11.style.display="none";
    pbasp1.style.display="block";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Daley Blind").addEventListener("click",() => {
    let pbasp2=document.getElementById("pbasp2")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="block";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Jurriën Timber").addEventListener("click",() => {
    let pbasp3=document.getElementById("pbasp3")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="block";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Frenkie de Jong").addEventListener("click",() => {
    let pbasp4=document.getElementById("pbasp4")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="block";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Kenneth Taylor").addEventListener("click",() => {
    let pbasp5=document.getElementById("pbasp5")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="block";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Davy Klaassen").addEventListener("click",() => {
    let pbasp6=document.getElementById("pbasp6")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="block";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Memphis Depay").addEventListener("click",() => {
    let pbasp7=document.getElementById("pbasp7")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="block";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Steven Bergwijn").addEventListener("click",() => {
    let pbasp8=document.getElementById("pbasp8")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="block";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});

document.getElementById("Jeremie Frimpong").addEventListener("click",() => {
    let pbasp9=document.getElementById("pbasp9")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="block";
    pbasp10.style.display="none";
    

});

document.getElementById("Luuk de Jong").addEventListener("click",() => {
    let pbasp10=document.getElementById("pbasp10")
    pbasp11.style.display="none";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="blocK";
    

});


document.getElementById("Andries Noppert").addEventListener("click",() => {
    let pbasp11=document.getElementById("pbasp11")
    pbasp11.style.display="block";
    pbasp1.style.display="none";
    pbasp2.style.display="none";
    pbasp3.style.display="none";
    pbasp4.style.display="none";
    pbasp5.style.display="none";
    pbasp6.style.display="none";
    pbasp7.style.display="none";
    pbasp8.style.display="none";
    pbasp9.style.display="none";
    pbasp10.style.display="none";
    

});