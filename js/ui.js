var globalne = {};

function przygotujDane()
{
    var dane = {};

    dane.z = parseFloat(document.getElementById('z').value); // liczba łopatek
    dane.alfa2 = parseFloat(document.getElementById('alfa2').value); // kąt wypływającego strumienia
    dane.beta2 = parseFloat(document.getElementById('beta2').value); // wylotowy kąt łopatkowy
    dane.D2 = parseFloat(document.getElementById('D2').value); // średnica zewnętrzna wieńca łopatkowego
    dane.deltapzn = parseFloat(document.getElementById('deltapzn').value); // spręż w punkcie znaminowym
    dane.etazn = parseFloat(document.getElementById('etazn').value); // sprawność wentylatora w punkcie znamionowym
    dane.etas = parseFloat(document.getElementById('etas').value); // sprawność silnika napędowego
    dane.n = parseFloat(document.getElementById('n').value); // prędkość obrotowa silnika
    dane.Qzn = parseFloat(document.getElementById('Qzn').value);
    dane.tc = parseFloat(document.getElementById('tc').value); // temperatura czynnika

    return dane;
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
    var daneDoWykresu = obliczPunkty(dane);
    narysujWykresInterpolacji(globalne.board, daneDoWykresu.Q, daneDoWykresu.deltap);
	narysujWykresInterpolacji(globalne.board, daneDoWykresu.Q, daneDoWykresu.mp);
}

function przygotujPustyWykres()
{
	globalne.board = JXG.JSXGraph.initBoard('box', { boundingbox: [-1, 10, 90, -1], axis: true });
}