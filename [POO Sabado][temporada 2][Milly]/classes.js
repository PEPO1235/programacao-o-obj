class Veiculo{
    constructor(fabricante, modelo, qtdPortas, qtdpassageiros, tipoDeCombustivel, qtdPneus, volumeDePortaMalas){
        this.fabricante = fabricante;       
        this.modelo = modelo;
        this.qtdPortas = qtdPortas;
        this.qtdpassageiros = qtdpassageiros;
        this.tipoDeCombustivel = tipoDeCombustivel;
        this.qtdPneus = qtdPneus;
        this.volumeDePortaMalas = volumeDePortaMalas;
 
    }
}

class Carro extends Veiculo{
    constructor(fabricante, modelo, qtdpassageiros, tipoDeCombustivel, qtdPneus, volumeDePortaMalas, qtdPortas){
    super(fabricante, modelo, tipoDeCombustivel)
    this.qtdpassageiros = qtdpassageiros;
    this.qtdPneus = qtdPneus;
    this.volumeDePortaMalas = volumeDePortaMalas;
    this.qtdPortas = qtdPortas;

    }
}

class Moto extends Veiculo{
    constructor(fabricante, modelo, tipoDeCombustivel){
        super(fabricante, modelo, tipoDeCombustivel)

    }
}

class Onibus extends Veiculo{
    constructor(fabricante, modelo, qtdpassageiros, volumeDePortaMalas, qtdPneus, qtdPortas, tipoDeCombustivel){
       super(fabricante, modelo, tipoDeCombustivel)
        this.qtdpassageiros = qtdpassageiros;
        this.volumeDePortaMalas = volumeDePortaMalas;
        this.qtdPneus = qtdPneus;
        this.qtdPortas = qtdPortas;

    }
}

class Jetski extends Veiculo{
    constructor(fabricante, modelo, tipoDeCombustivel){
    super(fabricante, modelo, tipoDeCombustivel);
    }
}

class EstoqueDeVeiculos{
    constructor(){
        this.listaDeVeiculos = [];
    }

    adicionarVeiculo(veiculo){
    if ((veiculo instanceof Veiculo) && !(veiculo instanceof Jetski)){
    this.listaDeVeiculos.push(Veiculo);
} else {
    console.error('Não é um veiculo, fera!')

    }
   }
  }