<!DOCTYPE html>
<html>
  <head>
    <titule> script teste 1 </titule>
    <H1> PARTICANDO REPERTORIO </H1>
  
  <h2>tentando alguma coisa</h2>

    <img src="https://th.bing.com/th/id/OIP.iL3ldza_k3xBxT7CCgS_XAHaFj?pid=ImgDet&rs="></img>

    primeira  numero:<input id="numero1" type="number"> <br />
    segundo numero:<input id="numero2" type="numero"> <br />
    <button onclik="inverte()">Inverter</button>

    public class Pessoa {
    private String nome;
    private int idade;
    private boolean brasileiro;
 
     public Pessoa(String nome, int idade, boolean brasileiro) {
         setNome(nome);
        setIdade(idade);
         setBrasileiro(brasileiro);
    }

    // Getters e Setters

   public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
   }
    public int getIdade() {
       return this.idade;
    }
   public void setIdade(int idade) {
        this.idade = idade;
    }

    public boolean isBrasileiro() {
        return this.brasileiro;
    }

    public void setBrasileiro(boolean brasileiro) {
       this.brasileiro = brasileiro;
    }
}
    




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