/* autor: Grzegorz RUMATOWSKI */

var globalne = {};

function przygotujDane()
{
	
	var dane = {};

	dane.Q = (document.getElementById('Q').value).split(';');  // tablica współżędnych wartości sprężu
	dane.deltap = (document.getElementById('deltap').value).split(';'); 
	dane.etas = (document.getElementById('etas').value).split(';');  // sprawność silnika
	dane.etap = (document.getElementById('etap').value).split(';');  // sprawność pompy

	return dane;
}

function przygotujPunkty(dane)
{
    var daneDoWykresu = {};
    
    daneDoWykresu.Q = []; // tablica wartości wydajności (Q)
    daneDoWykresu.deltap = []; // tablica wartości sprężu (deltap)
	daneDoWykresu.etas = []; // tablica wartości sprawności silnika
	daneDoWykresu.etap = []; // tablica wartości sprawności pompy
	daneDoWykresu.mp = []; // tablica wartości mocy pobieranej 
    
    for (var i=0; i<dane.Q.length;i++)
	{
		daneDoWykresu.Q[i] = parseFloat(dane.Q[i]);
	}

    for (var i=0; i<dane.deltap.length;i++)
	{
		daneDoWykresu.deltap[i] = parseFloat(dane.deltap[i]);
	}
	
	for (var i=0; i<dane.etas.length;i++)
	{
		daneDoWykresu.etas[i] = parseFloat(dane.etas[i]);
	}
	
	for (var i=0; i<dane.etap.length;i++)
	{
		daneDoWykresu.etap[i] = parseFloat(dane.etap[i]);
	}

	for (var i=0; i<dane.etap.length;i++)
	{
		daneDoWykresu.mp[i] = ((daneDoWykresu.Q[i]*daneDoWykresu.deltap[i] )/(dane.etas[i]*dane.etap[i]))/1000;
	}
	
    console.log("moc: "+daneDoWykresu.mp);
    return daneDoWykresu;
}

function narysujWykresInterpolacji(board, x, y)
{
    var p = [];

    for (var i = 0; i < x.length; i++) {
        p.push(board.create('point', [x[i], y[i]], {size:1}))
    }

    var f = JXG.Math.Numerics.lagrangePolynomial(p);
    return  board.create('functiongraph', [f, x[0] - 1, x[x.length - 1] + 1], {strokeWidth:2});
}

function narysujWykres(event)
{
    event.preventDefault();

    var dane = przygotujDane();
    var daneDoWykresu = przygotujPunkty(dane);
    narysujWykresInterpolacji(globalne.board, daneDoWykresu.Q, daneDoWykresu.deltap);
	narysujWykresInterpolacji(globalne.board, daneDoWykresu.Q, daneDoWykresu.mp);
}

function przygotujPustyWykres()
{
	globalne.board = JXG.JSXGraph.initBoard('box', { boundingbox: [-1, 25,110, -1], axis: true });
}