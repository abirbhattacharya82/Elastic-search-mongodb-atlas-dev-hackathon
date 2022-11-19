const search=document.getElementById('search');
search.addEventListener('keyup',()=>{
    document.getElementById("suggestions").style.display="block";
    // remove childs of suggestions
    const suggestions=document.getElementById('suggestions');
    while(suggestions.firstChild){
        suggestions.removeChild(suggestions.firstChild);
    }
    let results = [];
    let input = search.value;
    if (input.length) {
        results = data.filter((item) => {
        return item.toLowerCase().includes(input.toLowerCase());
        });
    }
    
    var i=0;
    while(i<5)
    {
        if(results.length==i)
        {
            break;
        }
        else
        {
            var x=results[i];
            var child=document.createElement("div");
            child.setAttribute("class","player");
            child.setAttribute("id","id_"+x);
            var j="replace_name('id_"+x+"')";
            child.setAttribute("onclick",j);
            child.innerHTML=x;
            document.getElementById("suggestions").appendChild(child);
        }
        i++;
    }
});
function replace_name(var_id)
{
    var x=document.getElementById(var_id).innerHTML;
    document.getElementById("search").value=x;
    document.getElementById("suggestions").innerHTML="";
    generate();
}
function generate()
{
    document.getElementById('loader').style.display="block";

    document.getElementById("suggestions").style.display="none";
    document.getElementById("suggestions").innerHTML="";

    // clearing all childs inside list
    const list=document.getElementById('list');
    while(list.firstChild){
        list.removeChild(list.firstChild);
    }

    const url='https://lazy-ruby-mackerel-hem.cyclic.app/find-by-name?name='+document.getElementById("search").value;
    
    fetch(url)
    .then(detail=>detail.json())
    .then(data=>{
        document.getElementById('loader').style.display="none";
        if(data[0].short_name==document.getElementById("search").value)
        {
            var x=data[0];

            var child=document.createElement("div");
            child.setAttribute("class","single");
            child.setAttribute("id",x.sofifa_id);

            const name=document.createElement("div");
            name.setAttribute("class","name");
            name.innerHTML=x.short_name;

            const overall=document.createElement("div");
            overall.setAttribute("class","overall");
            overall.innerHTML=x.overall;

            const details=document.createElement("div");
            details.setAttribute("class","details");
            details.setAttribute("id","detail_"+x.sofifa_id);

            const nationality=document.createElement("div");
            nationality.setAttribute("class","nationality");
            nationality.innerHTML=x.nationality;

            const club=document.createElement("div");
            club.setAttribute("class","club");
            club.innerHTML=x.club;

            const age=document.createElement("div");
            age.setAttribute("class","age");
            age.innerHTML="Age: "+x.age;

            const height=document.createElement("div");
            height.setAttribute("class","height");
            height.innerHTML="Height: "+x.height_cm+" cm";

            details.appendChild(nationality);
            details.appendChild(club);
            details.appendChild(age);
            details.appendChild(height);

            child.appendChild(name);
            child.appendChild(overall);
            child.appendChild(details);

            document.getElementById('list').appendChild(child);
        }
        else
        {
            for(var i=0;i<data.length;i++)
            {
                var x=data[i];

                var child=document.createElement("div");
                child.setAttribute("class","single");
                child.setAttribute("id",x.sofifa_id);

                const name=document.createElement("div");
                name.setAttribute("class","name");
                name.innerHTML=x.short_name;

                const overall=document.createElement("div");
                overall.setAttribute("class","overall");
                overall.innerHTML=x.overall;

                const details=document.createElement("div");
                details.setAttribute("class","details");
                details.setAttribute("id","detail_"+x.sofifa_id);

                const nationality=document.createElement("div");
                nationality.setAttribute("class","nationality");
                nationality.innerHTML=x.nationality;

                const club=document.createElement("div");
                club.setAttribute("class","club");
                club.innerHTML=x.club;

                const age=document.createElement("div");
                age.setAttribute("class","age");
                age.innerHTML="Age: "+x.age;

                const height=document.createElement("div");
                height.setAttribute("class","height");
                height.innerHTML="Height: "+x.height_cm+" cm";

                details.appendChild(nationality);
                details.appendChild(club);
                details.appendChild(age);
                details.appendChild(height);

                child.appendChild(name);
                child.appendChild(overall);
                child.appendChild(details);

                document.getElementById('list').appendChild(child);
            }
        }
        
    });
}
document.getElementById('search').addEventListener('keypress',function(e){
    if(e.key==='Enter')
    {
        // remove suggestion box
        document.getElementById("suggestions").style.display="none";
        document.getElementById("suggestions").innerHTML="";
        
        generate();
    }
});
const data=[
    'L. Messi',
    'Cristiano Ronaldo',
    'Neymar Jr',
    'J. Oblak',
    'E. Hazard',
    'K. De Bruyne',
    'M. ter Stegen',
    'V. van Dijk',
    'L. Modric',
    'M. Salah',
    'K. Mbapp�',
    'K. Koulibaly',
    'H. Kane',
    'Alisson',
    'De Gea',
    'N. Kant�',
    'G. Chiellini',
    'S. Ag�ero',
    'Sergio Ramos',
    'L. Su�rez',
    'R. Lewandowski',
    'Sergio Busquets',
    'A. Griezmann',
    'P. Dybala',
    'P. Pogba',
    'Ederson',
    'R. Sterling',
    'C. Eriksen',
    'T. Courtois',
    'Piqu�',
    'S. Handanovi??',
    'M. Neuer',
    'H. Lloris',
    'David Silva',
    'E. Cavani',
    'D. God�n',
    'T. Kroos',
    'M. Reus',
    'P. Aubameyang',
    'S. Man�',
    'A. Laporte',
    'Bernardo Silva',
    'Casemiro',
    'H. Son',
    'Fernandinho',
    'Thiago Silva',
    'K. Benzema',
    'J. Vertonghen',
    'D. Mertens',
    'M. Hummels',
    'T. Alderweireld',
    'Jordi Alba',
    'Thiago',
    'K. Navas',
    'L. Insigne',
    'L. San�',
    'Marquinhos',
    'M. �kriniar',
    'M. Verratti',
    'S. Umtiti',
    'W. Szczesny',
    'J. Kimmich',
    'Isco',
    'Roberto Firmino',
    'I. Rakitic',
    'M. Pjanic',
    'A. Di Mar�a',
    'L. Bonucci',
    'Coutinho',
    'Parejo',
    'T. M�ller',
    'C. Immobile',
    'A. Lacazette',
    'M. de Ligt',
    'G. Donnarumma',
    'F. de Jong',
    'R. Varane',
    'N. S�le',
    'S. Milinkovic-Savic',
    'Rodri',
    'Sa�l',
    'Fabinho',
    'A. Robertson',
    'J. Gim�nez',
    'C. Lenglet',
    'Bruno Fernandes',
    'A. Lopes',
    'P. Gul�csi',
    'R. B�rki',
    'R. Lukaku',
    'K. Manolas',
    'Neto',
    'D. Alaba',
    'M. Icardi',
    'Carvajal',
    'H. Ziyech',
    'Z. Ibrahimovic',
    'A. G�mez',
    'G. Higua�n',
    'B. Matuidi',
    'G. Bale',
    'Marcelo',
    'A. Witsel',
    'Alex Sandro',
    'Iago Aspas',
    'Koke',
    'J. Rodr�guez',
    'Allan',
    'J. Sancho',
    'K. Havertz',
    'O. Demb�l�',
    'Kepa',
    'Jo�o Cancelo',
    'D. Alli',
    'L. Hern�ndez',
    'Arthur',
    'M. Depay',
    'L. Goretzka',
    'J. Brandt',
    'K. Coman',
    'S. Gnabry',
    'N. Fekir',
    'B. Leno',
    'Luis Alberto',
    'Alex Telles',
    'J. Pavlenka',
    'S. de Vrij',
    'Felipe Anderson',
    'Pepe',
    'Jo�o Moutinho',
    'S. Ruffier',
    'S. Sirigu',
    'M. Ham��k',
    'Sokratis',
    'Lucas Leiva',
    'M. �zil',
    'Javi Mart�nez',
    'Y. Sommer',
    'E. D�eko',
    'G. Wijnaldum',
    'I. Peri�ic',
    'M. Mand�ukic',
    'A. Vidal',
    'J. Boateng',
    'Azpilicueta',
    'Jos� Callej�n',
    'I. G�ndogan',
    'Paulinho',
    'K. Walker',
    'Canales'
];