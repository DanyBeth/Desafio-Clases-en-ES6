import Cliente from './cliente.js' ;

import Impuestos from './impuestos.js' ;


let i1 = new Impuestos(1000000, 180000);

let c1 = new Cliente("Luis", i1);


console.log(c1.calcularImpuesto());

