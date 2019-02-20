var naglowek = document.querySelector('h1');
naglowek.textContent= "Trochę o C#";



document.querySelector('body').oncopy = function()
{
    alert("Nie kopiuj. Ja wszystko widzę ;)")
}

var zmianaObrazka = document.querySelector('img');
zmianaObrazka.onclick = function()
{
    var zrodlo = zmianaObrazka.getAttribute('src');
    if(zrodlo === 'images/csharp.png')
        {
            zmianaObrazka.setAttribute('src', 'images/zdj2.jpg');
        }
    else
        {
            zmianaObrazka.setAttribute('src', 'images/csharp.png');
        }
}

var przycisk = document.querySelector('button');
var naglowek = document.querySelector('h1');

    
    
  function setUserName() 
    {
    var imie = prompt('Twoje imie:');
    localStorage.setItem('imie', imie);
    naglowek.textContent = 'Trochę o C# ' + imie;
    }

    przycisk.onclick = function() 
    {
    setUserName();
    }






