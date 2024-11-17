function insert(num)
{
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num; 
}

function clean()
{
    document.getElementById('resultado').innerHTML = "";
}

function back()
{
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.lent, -1);
}

function calcular()
{
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado)
    {
        document.getElementById('resultado').innerHTML = eval(resultdo);
    }

    else
    {
        document.getElementById('resultado').innerHTML = "Vish..."
    }
}