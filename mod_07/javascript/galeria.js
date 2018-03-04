var t, actual;

// Genera la cita y el temporizador
  function select(i){
    actual = i; // indice actual

    $("nav a")
      .removeClass("on off")
      .addClass(function(j){return(j===i)?"on":"off";});

    if (!(galeria.length === 0)) { // si hay algo en galería

      $("#persona").html(galeria[i].persona);
      $("#frase").html(galeria[i].frase);
      $("#foto").attr("src", galeria[i].foto);

    } else { // si no hay nada mensaje 404

      $("#persona").html("<span style='text-align: center;font-size: 1.5rem;'>Frase no encontrada</span>");
      $("#frase").html("<span style='text-align: center;font-size: 3em;'>4 0 4</span>");
      $("#foto").attr("src", "https://dummyimage.com/352x427/000/FFF&text=X");

    }

    clearTimeout(t);
    t = setTimeout( function(){select((i + 1) % galeria.length);}, 6000);
  }

// Genera botonera
  function generar_selector(){
    var selector = $("#selector");

    selector.html("");
    
    galeria.forEach(function(elem,i) {
      selector.append("<li><a onClick='select("+i+")'></a></li>");
    });
  }

// document.ready
  $(function (){
    generar_selector(); // regenera los botoncitos

    // Abre con los datos actuales
      $("#editar").on("click", function(){
        clearTimeout(t); // para el tiempo

        // Si no se han borraron todos
          if (!(galeria.length === 0)) {

            $("#persona_d").html(galeria[actual].persona);
            $("#frase_d").html(galeria[actual].frase);
            $("#foto_d").html(galeria[actual].foto);

            $("#datos").css("display", "block");
            $("#nuevo").css("display", "block");
            $("#borrar").css("display", "block");
            $("#guardar").css("display", "block");

          } else { // Si ya se borraron todos
              
              $("#persona_d").html("");
              $("#frase_d").html("");
              $("#foto_d").html("");

              // apaga los botones que no se usan
              $("#datos").css("display", "block");
              $("#nuevo").css("display", "block");
              $("#borrar").css("display", "none");
              $("#guardar").css("display", "none");
            }
      });

    // Añade una cita al final push()
      $("#nuevo").on("click", function(){
        $("#datos").css("display", "none"); // cierra el editor al añadir

        // Si hay un campo vacío
        if ( $("#persona_d").html() === ("<br>") || $("#persona_d").html() === ("") || $("#frase_d").html() === ("<br>") || $("#frase_d").html() === ("") ) {

          $("#persona").html("Al parecer dejaste un campo sin rellenar. Intenta de nuevo. (Puedes dejar el campo de la imagen vacío)");
          $("#frase").html("Error");
          $("#foto").attr("src", "images/edicion.jpg");
          $("#datos").css("display", "block");

        } else { // si los datos están completos

            // si no se pone imagen se pone una por default
            if ( $("#foto_d").html() === ("<br>") || $("#foto_d").html() === ("") ) { $("#foto_d").html("images/no-imagen.jpg")};

            // añade al final la nueva cita
            actual = galeria.push({
               persona:$("#persona_d").html(),
               frase:$("#frase_d").html(),
               foto:$("#foto_d").html()
            }) - 1;

            generar_selector();
            select(actual);
          }

      });

    // *** Borra la cita actual splice()
      $("#borrar").on("click", function(){
        $("#datos").css("display", "none"); // cierra el editor al borrar

        galeria.splice(actual,1); // borra el indice actual, solo uno

        generar_selector();

        if (actual === (galeria.length)) { actual -= 1 } // si era el último !!
        
        select(actual);
      });

    // Modifica una cita al final 
      $("#guardar").on("click", function(){
        $("#datos").css("display", "none"); // cierra el editor al editar

        // Si hay un campo vacío
        if ( $("#persona_d").html() === ("<br>") || $("#persona_d").html() === ("") || $("#frase_d").html() === ("<br>") || $("#frase_d").html() === ("") ) {

          // mensaje de error de datos vacíos
          $("#persona").html("Al parecer dejaste un campo sin rellenar. Intenta de nuevo. (Puedes dejar el campo de la imagen vacío)");
          $("#frase").html("Error");
          $("#foto").attr("src", "images/edicion.jpg");
          $("#datos").css("display", "block"); // deja el editor abierto

        } else { // si se llenaron los campos

            // si no se pone imagen se pone una por default
            if ( $("#foto_d").html() === ("<br>") || $("#foto_d").html() === ("") ) { $("#foto_d").html("images/no-imagen.jpg")};

            // se modifica el índice actual de la matriz
            galeria[actual] = {
               persona:$("#persona_d").html(),
               frase:$("#frase_d").html(),
               foto:$("#foto_d").html()
            };

            generar_selector();
            select(actual);
          }

      });

    select(0);
  });

// el array
  var galeria = [
     { persona:"Buddha - बुद्धा",
       frase:"En la confrontación entre el arrollo y la roca, el arrollo siempre ganará, no por la fuerza, sino por la persistencia.",
       foto:"images/buda.jpg"
     },
     { persona:"Khalil Gibran - جبران خليل جبران بن ميخائل بن سعد",
       frase:"El silencio del envidioso está lleno de ruidos.",
       foto:"images/gibran.jpg"
     },
     { persona:"Confucio - 孔子",
       frase: "Todo tiene belleza pero no todo el mundo la puede ver.",
       foto:"images/confucio.jpg"
     },
     { persona:"Lev Nikoláievich Tolstói - Лев Николаевич Толстой",
       frase:"Mi felicidad consiste en que sé apreciar lo que tengo y no deseo con exceso lo que no tengo.",
       foto:"images/tolstoi.jpg"
     },
     { persona:"Platón - Πλάτων",
       frase:"El más importante y principal negocio público es la buena educación de la juventud.",
       foto:"images/platon.jpg"
     },
     { persona:"Henrik Ibsen - hɛnɾɪk ˈjoːhɑn ˈɪpsən",
       frase:"Si dudas de ti mismo, estás vencido de antemano.",
       foto:"images/ibsen.jpg"
     }
  ];
