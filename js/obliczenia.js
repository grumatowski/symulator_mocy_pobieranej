/* plik: obliczenia.js */
/* autor: Grzegorz RUMATOWSKI */
/* obliczenia wedle schematu blokowego umieszczonego w pracy */ 

function obliczPunkty(dane)
{
    var ro = 1.21; // gęstośc czynnika
    var stosunek_et = [0.86, 0.98, 1, 0.966, 0.86]; // stosunek sprawności izentropowych

    var mi0 = 1 - (Math.sqrt(Math.sin(dane.beta2 * (Math.PI / 180))) / (Math.pow(dane.z, 0.7))); // współczynnik zmniejszenia mocy wentylatora
    var u2 = (dane.D2 * Math.PI * dane.n) / 60; // prędkość obwodowa wirnika
    var c2u = (dane.deltapzn * 1000) / (ro * u2 * dane.etazn); // prędkość zależna od ułopatkowania wirnika
    var fi2r = (c2u * Math.tan(dane.alfa2 * Math.PI / 180)) / u2; // wskaźnik prędkości koła wirnikowego
    var fi2r0 = (mi0 * fi2r) / (mi0 - (c2u / u2)); // wartośc wskaznika prędkości koła wirnikowego dla wartości zerowej charakterystyki koła wirnikowego
    var Qmax = dane.Qzn * (fi2r0 / fi2r); // przepływ maksymalny

    var krok = 0.6;

    var daneDoWykresu = {};
    daneDoWykresu.deltap = []; // tablica wartości sprężu (deltap)
    daneDoWykresu.Q = []; // tablica wartości wydajności`
    daneDoWykresu.eta = []; // etazn * stosunek_et
	daneDoWykresu.wspQ = []; //współczynnik Q: 1-Q/Qmax
    daneDoWykresu.mp = []; // tablica wartości mocy pobieranej

    /* obliczanie punktów charakterystyk */
	
    for (var i = 0; i < 5; i++)
	{
        daneDoWykresu.Q[i] = krok * dane.Qzn;
        daneDoWykresu.wspQ[i] = 1 - (daneDoWykresu.Q[i] / Qmax);
        daneDoWykresu.eta[i] = dane.etazn * stosunek_et[i];
        daneDoWykresu.deltap[i] =(293/(273+dane.tc))*((Math.round(ro * (Math.pow(u2, 2)) * mi0 * daneDoWykresu.wspQ[i] * daneDoWykresu.eta[i])) / 1000); //spręż w kPa;
		daneDoWykresu.mp[i] = ((daneDoWykresu.Q[i]*daneDoWykresu.deltap[i])/(daneDoWykresu.eta[i]*dane.etas))/100; // 0.1 kW
        krok += 0.2;
    }

    return daneDoWykresu;
}