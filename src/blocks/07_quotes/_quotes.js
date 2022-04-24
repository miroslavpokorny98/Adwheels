const cardNums = document.querySelector(".cardNums");
const quote = document.querySelector(".quote");
const qouteAuthor = document.querySelector(".qouteAuthor");
const arrowLeft = document.querySelector(".arrowLeft");
const arrowRight = document.querySelector(".arrowRight");

// TODO: add all quotes to html instead of js 
const rotation = [
    [
        "Nekonvenční reklamní plochy kreativně reinterpretují použití tradičních médií způsoby, které napřímo aktivují zákazníky. Kombinace tradičních a nekonvenčních forem marketingové komunikace je jeden  z nejúčinnějších způsobů jak vybudovat znalost o značce a přimět zákazníky ke komunikaci s ní.",
        "(BIRAGHI, GAMBETTI A GRAFFIGNA, 2014)"
    ],[
        "Za celý život strávíme v autě více než 4 roky života. Za tu dobu průměrně 142x nouzově zabrzdíme, 3312x se napijeme, 2432x někoho políbíme, ale především se nudíme.",
        "(COMMON SENSE ADVISORY, 2018)"
    ],[
        "Průměrný konzument je vystaven několika tisícům marketingových komunikačních sdělení za den, jen zlomku si však vědomě všimne. Pro inzerenty je tak stále obtížnější dosáhnout na své cílové skupiny.",
        "(SHAPIRO A NIELSEN, 2013 ; LOPEZ-PUMAREJO, BASSELL, 2009:33)"
    ],[
        "Navzdory rostoucí popularitě venkovní reklamy přistupují některé státy, včetně České republiky, k regulaci nebo dokonce k plošnému zákazu billboardů. Jedinou efektivní obranou marketingových profesionálu proti takovýmto tendencím je využití nekonvenčních forem marketingové komunikace.",
        "(MAHDAWI, 2015)"
    ],[
        "Tradičním inzertním plochám zasazuje velkou ránu jejich nadužívanost způsobující tzv. „billboardovou slepotu”. To de facto znamená, že „konvenční média ztrácí sílu přitáhnout zákazníkovu pozornost”.",
        "(VAN DEN PUTTE, 2009 ; BASS ET AL., 2007 ; DARKE A RITCHIE, 2007)"
    ],[
        "Pokud je člověk ve známém prostředí překvapen neznámým reklamním formátem, zaměří na něj svou pozornost a lépe si jej zapamatuje. Užití nekonvenčních venkovních ploch tak vede díky vyvolání překvapení k dramatickému nárůstu znalosti značky.",
        "(HUTTER A HOFFMANN, 2011)"
    ],[
        "Překvapený zákazník je náchylnější své pocity sdílet. Překvapení tedy pozitivně ovlivňuje frekvenci ústního doporučení, které je považováno za jeden z nejspolehlivějších zdrojů informací.",
        "(DERBAIX A VANHAMME, 2003 ; HONG-YOUL, 2004)"
    ],[
        "Znalost značky a ústní doporučení hrají významnou roli během rozhodovacího procesu, a to zejména v kontextu prodejů inzerovaných produktů nebo služeb.",
        "(DAHLÉN, FRIBERG A NILSSON, 2009 ; DUAN, GU A WHINSTON, 2008)"
    ]
]

console.log(quote);

currentQuote = 0;

arrowRight.onclick = function () {
    currentQuote = (currentQuote + 1) % 8
    updateQuote(currentQuote)
}

arrowLeft.onclick = function () {
    if (currentQuote == 0){
        currentQuote = rotation.length - 1
    } else {
        currentQuote = (currentQuote - 1) % 8
    }
    updateQuote(currentQuote)
}

function updateQuote (quoteNum) {
    cardNums.innerHTML = "0" + (currentQuote+1) + "<span>/0" + rotation.length + "</span>"
    
    quote.style.opacity = "0";
    qouteAuthor.style.opacity = "0";
    
    setTimeout(function () {
        quote.innerHTML = rotation[quoteNum][0];
        qouteAuthor.textContent = rotation[quoteNum][1];
        quote.style.opacity = "1";
        qouteAuthor.style.opacity = "0.5";
    }, 250);  // must also change transition in css x2

    
}

