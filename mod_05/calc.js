      var num;     // inicializa variables
      var acc = 0; // acumulador
      var op = ""; // operador de funciones binarias

    $(function() { 
          
        num = $("#num");
        num.val("");      // inicializa el contenido de input
        num.focus();      // pone el cursor en la pantalla

        // Script original que devuelve la fecha
          var hora = new Date().getHours();
          var nombre = "<br>bienvenido a la calculadora de <em>Arturo García</em>";
          var msj = "";

          if          (hora < 7)  { msj = "Buenas noches";}
            else if   (hora < 12) { msj = "Buenos días";}
              else if (hora < 21) { msj = "Buenas tardes";}
                else              { msj = "Buenas noches";}

          $("#h1").html(msj + nombre);

        // Limpia el display y el acc
          $("#clear").on("click", 
            function() { 
              num.val("");
              num.focus();
            }
          );

        // Operaciones unitarias
          // Eleva al cuadrado
          $("#x2").on("click",
            function() {
              if (es_numero()) {
                  num.val( Math.pow(num.val(), 2) );
                } else { num.val("error");}
              num.focus();
            }
          );
          // Raíz cuadrada
          $("#raiz").on("click", 
            function() {
              if (es_numero()) {
                  num.val( Math.sqrt(num.val()) );
                } else { num.val("error");}
              num.focus();
            }
          );
          // Inverso
          $("#inverso").on("click",
            function() {
              if (es_numero()) {
                  num.val(1 / num.val());
                } else { num.val("error");} 
              num.focus();
            }
          );
          // Devuelve el entero positivo
          $("#ent").on("click", 
            function() {
              if (es_numero()) {
                  if (num.val() >= 0) {num.val(+Math.floor(num.val()));}
                  if (num.val() < 0) {num.val(-Math.ceil(num.val()));}
                } else { num.val("error");} 
              num.focus();
            }
          );
          // Potencia de 2
          $("#_2x").on("click", 
            function() {
              if (es_numero()) {
                  num.val(Math.pow(2, num.val()));
                } else { num.val("error");}
              num.focus();
            }
          );
          // Factorial
          $("#fact").on("click",
              function() {
                var res = num.val();
                if (es_numero()) {
                  var cont = num.val();
                  cont--;
                  while( cont > 1 ) {
                    res*= cont--;
                  } 
                } else {
                  res = "ERROR" ;
                  }
                num.val( res );
                num.focus();
              }
          );

        // Operaciones CVS
          // Sumatoria
          $("#sumatoria").on("click",
            function() {
              var lista = num.val().split(",");
              var i = 0;
              acc = 0;
              while ( i < lista.length ) {
                acc = acc + (+lista[i]);
                i++;
              }
              num.val( acc );
              num.focus();
            }
          );

          // Producto
          $("#producto").on("click",
            function() {
              var lista = num.val().split(",");
              var i = 0;
              acc = 1;
              while ( i < lista.length ) {
                acc = acc * (+lista[i]);
                i++;
              }
              num.val( acc );
              num.focus();
            }
          );
        // Operaciones binarias
          $("#mas").on("click",   function() { acc = num.val();  op = "+"; vaciar(); });
          $("#menos").on("click", function() { acc = num.val();  op = "-"; vaciar(); });
          $("#X").on("click",     function() { acc = num.val();  op = "x"; vaciar(); });
          $("#div").on("click",   function() { acc = num.val();  op = "d"; vaciar(); });
          $("#pot").on("click",   function() { acc = num.val();  op = "p"; vaciar(); });

          $("#calcula").on("click",
            function() {
              if (op === "+") { num.val( +acc + +num.val() ) }
              if (op === "-") { num.val( +acc - +num.val() ) }
              if (op === "x") { num.val( +acc * +num.val() ) }
              if (op === "d") { num.val( +acc / +num.val() ) }
              if (op === "p") { num.val( Math.pow(+acc, +num.val() ) ) }
              num.focus();
            }
          );


    }); // Termina el $document.ready
    // -------------------------------

      // Limpia el input al hacer onClick
        function vaciar() { num.on("click", function() { num.val(""); } );
          num.focus();
        };
     // ¿Es un número?
       function es_numero () { 
         esNumero = $.isNumeric( num.val() );
         return esNumero;
       };
    