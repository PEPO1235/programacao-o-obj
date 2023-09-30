let carro1 = new Carro('VW', 'gol', 'gasolina', 4, 5, 7);
let moto1 = new Moto('Honda', 'XRE300 Sahara', 'Flex');
let onibus1 = new Onibus('Iveco', 'Class9', 'Diesel', 29, 2, 6, 720);
let jetski1 = new Jetski('Yamaha', 'FX cruiser SHVO', 'Gasolina');

let lekMotors = new EstoqueDeVeiculos();
lekMotors.adicionarVeiculo(carro1);
lekMotors.adicionarVeiculo(moto1);
lekMotors.adicionarVeiculo(onibus1);
lekMotors.adicionarVeiculo(jetski1);

console.log(lekMotors);

