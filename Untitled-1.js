<!DOCTYPE html>
<html>
  <head>
    <titule>cursojava script teste 1 </titule>
    primeira  numero:<input id="numero1" type="number"> <br />
    segundo numero:<input id="numero2" type="numero"> <br />
    <button onclik="inverte()">Inverter</button>
    
    <script type="text/javascript">

      fuction inverte(){
        var num1 = parseFloat(document.getElementById("numero1").value);
        var nnum2 = parseFloat(document.getElementById("numero2").value);

        var aux = num1
        num1=num2;
        nnum2=aux;

        alert("Antes:\n"+
        "numero1="+document.getElementById("numero1").value+"\n"+
        "numero2="+document.getElementById("numeero2").value+"\n\n"+
        "Invertido:\n"+
        "numero1="+num1+"n"+
        "numero2="+num2+"\n\n");
      }
    </script>

  </head>
</html>