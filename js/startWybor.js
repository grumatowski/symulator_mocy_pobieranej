/* plik: startWybor.js *
/* autor: Grzegorz RUMATOWSKI */
/* cel: wykonuje odpowiednie przekierowanie w zalezności od dokonanego wyboru */

function analizaWyboru(event)
{
	event.preventDefault();
	
	if(document.getElementById('a').checked) // charakterystyki wentylatora podmuchu
	{
		location.assign("html/obliczenia_wentylatora_podmuchu.html?#");
	}
	else if(document.getElementById('b').checked) // charakterystyki wentylatora spalin
	{
		location.assign("html/obliczenia_wentylatora_spalin.html?#");
	}
	else if(document.getElementById('c').checked) // interpolacja charakterystyk: przeplywowej i poboru mocy wentylatora podmuchu
	{
		location.assign("html/interpolacja_wentylatora_podmuchu.html?#");
	}
	else if(document.getElementById('d').checked) // interpolacja charakterystyk: przeplywowej i poboru mocy wentylatora spalin
	{
		location.assign("html/interpolacja_wentylatora_spalin.html?#");
	}
	else if(document.getElementById('e').checked) // charakterystyki pompy na podstawie współrzędnych
	{
		location.assign("html/interpolacja_pompy.html?#");
	}
}