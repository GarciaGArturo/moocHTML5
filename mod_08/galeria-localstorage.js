// Las variables globales
  // el array original
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

  // Variable de tiempo y diapositia actual
    var t, actual;
  // Guarda el array en "original" para ser recuperado
    var galeria_original = galeria;

// Genera la cita y el temporizador
  function select(i){
    actual = i; // indice actual

    $("nav a")
      .removeClass("on off")
      .addClass(function(j){return(j===i)?"on":"off";});

    // si hay algo en galería
      if (!(galeria.length === 0)) { 
    // Extrae del array
        $("#persona").html(galeria[i].persona);
        $("#frase").html(galeria[i].frase);
        $("#foto").attr("src", galeria[i].foto);
    // si no hay nada mensaje 404
      } else { 
    // Mensaje de vacío
        $("#persona").html("<span style='text-align: center;font-size: 1.5rem;'>Frase no encontrada</span>");
        $("#frase").html("<span style='text-align: center;font-size: 3em;'>4 0 4</span>");
        $("#foto").attr("src", "https://dummyimage.com/352x427/000/FFF&text=X");
      }

    // Resetea el temporizador
      clearTimeout(t);
    // Presenta la diapositiva Actual
     t = setTimeout( function(){select((i + 1) % galeria.length);}, 6000);
  }

// Genera botonera inferior
  function generar_selector(){
    // Inicia la variable
    var selector = $("#selector");

    // Vacía la botonera selector
    selector.html("");
    
    // Vuelve a llenar la botonera con los que haya
    galeria.forEach(function(elem,i) {
      selector.append("<li><a onClick='select("+i+")'></a></li>");
    });
  }

// document.ready
  $(function (){
    // Inicializa la memoria del navegador y convierte a JSON el array
      localStorage.galeria = ( localStorage.galeria || JSON.stringify(galeria) );
    // recupera el arreglo del navegador
      galeria = JSON.parse(localStorage.galeria);

    // regenera los botoncitos inferiores
      generar_selector(); 

    // Botón Cerrar. cierra la zona de editar si está abierta
      // si se hace click en el botón cerrar
        $("#cerrar").on("click", function(){
          // cierra zona de datos
            $("#datos").css("display", "none");
          // esconde el mismo botón
            $("#cerrar").css("display", "none");
          // presenta la barra editar
            $("#editar").css("display", "block");
        });

    // Boton Editar. Abre la zona de editar con los datos actuales
      // si click en el botón editar
        $("#editar").on("click", function(){
          // para el tiempo y la marquesina
          clearTimeout(t); 

          // Si no se han borraron todos
            if (!(galeria.length === 0)) {

              // Se extraten los datos de la actual
                $("#persona_d").html(galeria[actual].persona);
                $("#frase_d").html(galeria[actual].frase);
                $("#foto_d").html(galeria[actual].foto);

              // Se muestran los botones de la zona de editar
                // zona de editar abierta
                  $("#datos").css("display", "block");
                // Botón de añadir nuevo aparece
                  $("#nuevo").css("display", "block");
                // Botón de borrar actual aparece
                  $("#borrar").css("display", "block");
                // Botón de guardar aparece
                  $("#guardar").css("display", "block");

                // Botón de cerrar zona de editar aparece
                  $("#cerrar").css("display", "block");
                // Botón de abrir zona de editar desapacece
                  $("#editar").css("display", "none");
          // Si ya se borraron todos
              } else { 
                  
                  // Se presenta el formulario sin datos
                    $("#persona_d").html("");
                    $("#frase_d").html("");
                    $("#foto_d").html("");

                  // apaga los botones que no se usan
                    $("#datos").css("display", "block");
                    $("#nuevo").css("display", "block");
                    $("#borrar").css("display", "none");
                    $("#guardar").css("display", "none");

                    $("#cerrar").css("display", "block");
                    $("#editar").css("display", "none");
                }
        });



    // Botón Nuevo. Añade una cita al final: push() 
      // Al hacer click en "nuevo"
        $("#nuevo").on("click", function(){
          // cierra el editor al añadir
            $("#datos").css("display", "none");
          // Esconde el botón cerrar
            $("#cerrar").css("display", "none");
          // Muestra el botón editar
            $("#editar").css("display", "block");

        // Si hay un campo vacío
          if ( $("#persona_d").html() === ("<br>") || $("#persona_d").html() === ("") || $("#frase_d").html() === ("<br>") || $("#frase_d").html() === ("") ) {

            $("#persona").html("Al parecer dejaste un campo sin rellenar. Intenta de nuevo. (Puedes dejar el campo de la imagen vacío)");
            $("#frase").html("Error");
            $("#foto").attr("src", "images/edicion.jpg");
            $("#datos").css("display", "block");
        // si los datos están completos
          } else { 
              // si no se pone imagen se pone una por default
              if ( $("#foto_d").html() === ("<br>") || $("#foto_d").html() === ("") ) { $("#foto_d").html("images/no-imagen.jpg")};

              // añade al final la nueva cita
              actual = galeria.push({
                 persona:$("#persona_d").html(),
                 frase:$("#frase_d").html(),
                 foto:$("#foto_d").html()
              }) - 1;

              // Vuelve a generar la botonera inferior
              generar_selector();
              // Muestra el actual
              select(actual);
            }
            // Recompone la base de datos
              localStorage.galeria = JSON.stringify(galeria);
      });

    // Botón Borrar. Borra la cita actual: splice()
      // Al hacer click en el botón borrar
        $("#borrar").on("click", function(){
          // cierra el editor al borrar
            $("#datos").css("display", "none"); 
          // Quita el notón cerrar
            $("#cerrar").css("display", "none");
          // Muestra el botón editar
            $("#editar").css("display", "block");

          // borra el indice actual, solo uno
            galeria.splice(actual,1); 
          // Vuelve a generar botonera inferior
            generar_selector();

          // si era el último item !!
            if (actual === (galeria.length)) { actual -= 1 } 
          // Muestra el actual
            select(actual);

          // Recompone la base de datos
            localStorage.galeria = JSON.stringify(galeria);
        });

    // Botón guardar. Modifica una cita al final 
      // al hacer click en guardar
        $("#guardar").on("click", function(){
          // cierra el editor al editar
            $("#datos").css("display", "none"); 
          // Quita el botón cerrar
            $("#cerrar").css("display", "none");
          // Muestra el botón mostrar
            $("#editar").css("display", "block");

          // Si hay un campo vacío
          if ( $("#persona_d").html() === ("<br>") || $("#persona_d").html() === ("") || $("#frase_d").html() === ("<br>") || $("#frase_d").html() === ("") ) {

            // mensaje de error de datos vacíos
            $("#persona").html("Al parecer dejaste un campo sin rellenar. Intenta de nuevo. (Puedes dejar el campo de la imagen vacío)");
            $("#frase").html("Error");
            $("#foto").attr("src", "images/edicion.jpg");
            // deja el editor abierto
            $("#datos").css("display", "block"); 

          } else { // si se llenaron los campos

              // si no se pone imagen se pone una por default
              if ( $("#foto_d").html() === ("<br>") || $("#foto_d").html() === ("") ) { $("#foto_d").html("images/no-imagen.jpg")};

              // se modifica el índice actual de la matriz
              galeria[actual] = {
                 persona:$("#persona_d").html(),
                 frase:$("#frase_d").html(),
                 foto:$("#foto_d").html()
              };
              // Vuelve a generar la botonera inferior
                generar_selector();
              // Muestra la transparencia actual
                select(actual);
            }

          // Recompone la base de datos
              localStorage.galeria = JSON.stringify(galeria);

        });

    // Botón reload. Recarga la base de datos
      // Al hacer click en el botón
        $("#reload").on("click", function(){
          // Para el tiempo
            clearTimeout(t);
          // Muestra mensaje en alert
            var resp = confirm("Se restaurará la base de datos original \n ¿Está seguro?");
          // Verifica respuesta
            // Si la respuesta es OK:
              if (resp == true) {
                // Recupera la BD original
                  localStorage.galeria = JSON.stringify(galeria_original);
                // Carga la BD original en el array de memoria
                  galeria = JSON.parse(localStorage.galeria);
                // Regenrea los botonera
                  generar_selector();
                // Reinicia las diapositivas
                  select(0);
              }
            // Muestra las diapositivas
              select(actual);
          });

    select(0);
  });


