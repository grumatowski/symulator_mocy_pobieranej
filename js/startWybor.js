/* plik: startWybor.js *
/* autor: Grzegorz RUMATOWSKI */
/* cel: wykonuje odpowiednie przekierowanie w zalezności od dokonanego wyboru */

function analizaWyboru(event)
{
	event.preventDefault();
	
	if(document.getElementById('aP').checked) // dwie charakterystyki podstawowe
	{
		location.assign("html/analityczne_obliczenia_wentylatora_podstawowe.html");
	}
	else if(document.getElementById('aM').checked) // charakterystyki: podstawowa i poboru mocy
	{
		location.assign("html/analityczne_obliczenia_wentylatora.html");
	}
	else if(document.getElementById('nW').checked) // charakterystyki wentylatora na podstawie współrzędnych
	{
		console.log("charakterystyki wentylatora na podstawie współrzędnych");
	}
	else if(document.getElementById('nP').checked) // charakterystyki pompy na podstawie współrzędnych
	{
		console.log("charakterystyki pompy na podstawie współrzędnych");
	}
}