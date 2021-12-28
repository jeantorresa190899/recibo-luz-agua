// stand 1-14
let nombres = ['MARCELINO PRADO','EDITA FARFAN','MARITZA SALGUEDO','TEODORO TORRES','BENITA PEREZ','ANTONIO REYES','YESSICA VILCA','MARINA HOYOS','KIMBERLY CAMPOS','BENITA PEREZ ','ELIZABETH ARMAS','TIMOTEO HUARACA','MONICA TORALVA','EDITA RODRIGO'];
// stand 29-30
let nombres2 = ['LIZ ROCIO QUISPE','SAYDA VILCA'];
// stand 15-28
let nombres3 = ['FRANCISCA MONCADA','MARINA HOYOS','OSCAR PRADO','CARMEN CHAVEZ','MARITZA SALGUEDO','EDITA FARFAN','MARCELINO PRADO','EDITA RODRIGO','GUALBERTO MICUILLA','VALENTINA PARIONA','YUVE LUZ TARAZONA','BENITA PEREZ','TEODORO TORRES','KATERY RUT D.'];

nombres.forEach(nombre => {
    contenido.innerHTML += `
    <div class="row m-4 text-center">
        <h5 class="col m-2">${nombres.indexOf(nombre) + 1}</h5>
        <h5 class="col m-2">${nombre}</h5>
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="actual-${nombres.indexOf(nombre) + 1}">
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="antes-${nombres.indexOf(nombre) + 1}">
    </div>
    <hr>
    `;
});

nombres2.forEach(nombre =>{
    contenido2.innerHTML += `
    <div class="row m-4 text-center">
        <h5 class="col m-2">${nombres2.indexOf(nombre) + 29}</h5>
        <h5 class="col m-2">${nombre}</h5>
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="actual-${nombres2.indexOf(nombre) + 29}">
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="antes-${nombres2.indexOf(nombre) + 29}">
    </div>
    <hr>
    `;
});

nombres3.forEach(nombre =>{
    contenido3.innerHTML += `
    <div class="row m-4 text-center">
        <h5 class="col m-2">${nombres3.indexOf(nombre) + 15}</h5>
        <h5 class="col m-2">${nombre}</h5>
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="actual-${nombres3.indexOf(nombre) + 15}">
        <input style="max-width:120px" type="number" class="form-control col mx-4" id="antes-${nombres3.indexOf(nombre) + 15}">
    </div>
    <hr>
    `;
});

// Closure
(function() {
    /**
     * Ajuste decimal de un número.
     *
     * @param {String}  type  El tipo de ajuste.
     * @param {Number}  value El número.
     * @param {Integer} exp   El exponente (El logaritmo de ajuste en base 10).
     * @returns {Number} El valor ajustado.
     */
    function decimalAdjust(type, value, exp) {
      // Si exp es undefined o cero...
      if (typeof exp === 'undefined' || +exp === 0) {
        return Math[type](value);
      }
      value = +value;
      exp = +exp;
      // Si el valor no es un número o exp no es un entero...
      if (isNaN(value) || !(typeof exp === 'number' && exp % 1 === 0)) {
        return NaN;
      }
      // Shift
      value = value.toString().split('e');
      value = Math[type](+(value[0] + 'e' + (value[1] ? (+value[1] - exp) : -exp)));
      // Shift back
      value = value.toString().split('e');
      return +(value[0] + 'e' + (value[1] ? (+value[1] + exp) : exp));
    }
  
    // Decimal round
    if (!Math.round10) {
      Math.round10 = function(value, exp) {
        return decimalAdjust('round', value, exp);
      };
    }
    // Decimal floor
    if (!Math.floor10) {
      Math.floor10 = function(value, exp) {
        return decimalAdjust('floor', value, exp);
      };
    }
    // Decimal ceil
    if (!Math.ceil10) {
      Math.ceil10 = function(value, exp) {
        return decimalAdjust('ceil', value, exp);
      };
    }
  })();
  
document.querySelector('#boton').addEventListener('click', add);

function add(){

// Este codigo regresa los valores de cada #ACTUAL-index de los inputs
    var actuales = [];
    for (let index = 1; index <= nombres.length; index++) {

        // Almacenarlos en un array para luego restar elementos con otro array de anteriores    
        if(document.querySelector("#actual-"+index).value == ''){
            document.querySelector("#actual-"+index).value == 0;
            actuales.push();
        }

        actuales.push(document.querySelector("#actual-"+index).value);
        console.log(document.querySelector("#actual-"+index).value);
    }
    console.log(actuales);

    // OBS: MUCHAS LINEAS DE CODIGO PARA RECOGER SOLOS DOS INPUTS.VALUE 
    var actuales2 = []
    for (let index = 29; index < 29 + nombres2.length; index++) {
        if(document.querySelector("#actual-"+index).value == ''){
            document.querySelector("#actual-"+index).value == 0;
            actuales2.push();
        }

        actuales2.push(document.querySelector("#actual-"+index).value);
        console.log(document.querySelector("#actual-"+index).value);
    }
    console.log(actuales2);

    var actuales3 = []
    for (let index = 15; index < 15 + nombres3.length; index++) {
        if(document.querySelector("#actual-"+index).value == ''){
            document.querySelector("#actual-"+index).value == 0;
            actuales3.push();
        }

        actuales3.push(document.querySelector("#actual-"+index).value);
        console.log(document.querySelector("#actual-"+index).value);
    }
    console.log(actuales3);

// Este codigo regresa los valores de cada #ANTES-index de los inputs
var anteriores = [];
for (let index = 1; index <= nombres.length; index++) {

    // Almacenarlos en un array para luego restar elementos con otro array de anteriores    
    if(document.querySelector("#antes-"+index).value == ''){
        document.querySelector("#antes-"+index).value == 0;
        anteriores.push();
    }

    anteriores.push(document.querySelector("#antes-"+index).value);
    console.log(document.querySelector("#antes-"+index).value);
}
console.log(anteriores);

// OBS: MUCHAS LINEAS DE CODIGO PARA RECOGER SOLOS DOS INPUTS.VALUE 
var anteriores2 = []
for (let index = 29; index < 29 + nombres2.length; index++) {
    if(document.querySelector("#antes-"+index).value == ''){
        document.querySelector("#antes-"+index).value == 0;
        anteriores2.push();
    }

    anteriores2.push(document.querySelector("#antes-"+index).value);
    console.log(document.querySelector("#antes-"+index).value);
}
console.log(anteriores2);

var anteriores3 = []
for (let index = 15; index < 15 + nombres3.length; index++) {
    if(document.querySelector("#antes-"+index).value == ''){
        document.querySelector("#antes-"+index).value == 0;
        anteriores3.push();
    }

    anteriores3.push(document.querySelector("#antes-"+index).value);
    console.log(document.querySelector("#antes-"+index).value);
}
console.log(anteriores3);

    // PISO 3
    let actual_salon = document.querySelector("#actual-salon").value;
    let antes_salon = document.querySelector("#antes-salon").value;
    if(document.querySelector("#actual-salon").value == ''){
        document.querySelector("#actual-salon").value == 0;
        actual_salon = 0;
    }
    if(document.querySelector("#antes-salon").value == ''){
        document.querySelector("#antes-salon").value == 0;
        antes_salon = 0;
    }


// AGREGANDO LOS DATOS A UNA TABLA
let datos_tabla = document.querySelector("#datos_tabla");
datos_tabla.innerHTML = '';
let datos_tabla2 = document.querySelector("#datos_tabla2");
datos_tabla2.innerHTML = '';

var kw = document.querySelector("#kw").value;
var alumbrado = parseFloat(document.querySelector("#alumbrado").value);
var agua = parseFloat(document.querySelector("#agua").value);
var agua_2 = parseFloat(document.querySelector("#agua-2").value);

// REVISAR, ESTA OK PERO FALTA CON LAS DEMAS VARIABLES
if(document.querySelector("#alumbrado").value == ''){
    document.querySelector("#alumbrado").value == 0;
    alumbrado = 0;
}
if(document.querySelector("#agua").value == ''){
    document.querySelector("#agua").value == 0;
    agua = 0;
}
if(document.querySelector("#agua-2").value == ''){
    document.querySelector("#agua-2").value == 0;
    agua_2 = 0;
}


    nombres.forEach(nombre => {
        let lec_actual = actuales[nombres.indexOf(nombre)];
        let lec_antes = anteriores[nombres.indexOf(nombre)];
        let lec_kw = lec_actual - lec_antes;
        let imp_luz = Math.round10(lec_kw * kw, -1);
        let total = imp_luz + alumbrado + agua;

        datos_tabla.innerHTML += 
        `<tr>
            <td>${1 + nombres.indexOf(nombre)}</td>
            <td>${nombre}</td>
            <td>${lec_actual}</td>
            <td>${lec_antes}</td>
            <td>${lec_kw}</td>
            <td>${imp_luz.toFixed(2)}</td>
            <td>${alumbrado.toFixed(2)}</td>
            <td>${agua.toFixed(2)}</td>
            <td><b>${total.toFixed(2)}</b></td>
        </tr>`
    });
    nombres2.forEach(nombre => {
        let lec_actual = actuales2[nombres2.indexOf(nombre)];
        let lec_antes = anteriores2[nombres2.indexOf(nombre)];
        let lec_kw = lec_actual - lec_antes;
        let imp_luz = Math.round10(lec_kw * kw, -1);

        var total = imp_luz + alumbrado + agua;

            if(nombres2.indexOf(nombre) == 1){
                total = imp_luz + alumbrado + agua_2;
                agua = agua_2;
            }

        datos_tabla.innerHTML += 
        `<tr>
            <td>${29 + nombres2.indexOf(nombre)}</td>
            <td>${nombre}</td>
            <td>${lec_actual}</td>
            <td>${lec_antes}</td>
            <td>${lec_kw}</td>
            <td>${imp_luz.toFixed(2)}</td>
            <td>${alumbrado.toFixed(2)}</td>
            <td>${agua.toFixed(2)}</td>
            <td><b>${total.toFixed(2)}</b></td>
        </tr>`
    });

    var agua = parseFloat(document.querySelector("#agua").value);
    if(document.querySelector("#agua").value == ''){
        document.querySelector("#agua").value == 0;
        agua = 0;
    }

    nombres3.forEach(nombre => {
        let lec_actual = actuales3[nombres3.indexOf(nombre)];
        let lec_antes = anteriores3[nombres3.indexOf(nombre)];
        let lec_kw = lec_actual - lec_antes;
        let imp_luz = Math.round10(lec_kw * kw, -1);
        let total = imp_luz + alumbrado + agua;

        datos_tabla2.innerHTML += 
        `<tr>
            <td>${15 + nombres3.indexOf(nombre)}</td>
            <td>${nombre}</td>
            <td>${lec_actual}</td>
            <td>${lec_antes}</td>
            <td>${lec_kw}</td>
            <td>${imp_luz.toFixed(2)}</td>
            <td>${alumbrado.toFixed(2)}</td>
            <td>${agua.toFixed(2)}</td>
            <td><b>${total.toFixed(2)}</b></td>
        </tr>`
    });



    

    var lec_salon = actual_salon - antes_salon;
    var imp_luz_salon = Math.round10(lec_salon * kw, -1);
    var alumbrado = 0;
    var total = imp_luz_salon + alumbrado + agua_2;
    datos_tabla2.innerHTML += 
        `<tr>
            <td>3er Piso</td>
            <td>SALON DE EVENTOS</td>
            <td>${actual_salon}</td>
            <td>${antes_salon}</td>
            <td>${lec_salon}</td>
            <td>${imp_luz_salon.toFixed(2)}</td>
            <td>${alumbrado}</td>
            <td>${agua_2.toFixed(2)}</td>
            <td><b>${total.toFixed(2)}</b></td>
        </tr>`;


}

document.querySelector('#descargar').addEventListener('click', descargar);

function descargar(){
    const elemento = document.getElementById('topdf');
    var opt = {
        margin:       .3,
        filename:     'myfile.pdf',
        image:        { type: 'jpeg', quality: 0.98 },
        html2canvas:  { scale: 2 },
        jsPDF:        { unit: 'in', format: 'letter', orientation: 'portrait' }
      };
    html2pdf().set(opt).from(elemento).save();
}


    
