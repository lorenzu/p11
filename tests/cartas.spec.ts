import 'mocha'
import { expect } from 'chai';
import { Carta, Tipo, Color, Rareza } from '../src/Carta.js';
import { ColecciondeCartas } from '../src/ColecciondeCartas.js';

let coleccion: ColecciondeCartas;

beforeEach(() => {
  coleccion = new ColecciondeCartas();
});

const carta1: Carta = {
  id: 1,
  nombre: 'Prueba',
  mana: 1,
  color: Color.Azul,
  tipo: Tipo.Criatura,
  rareza: Rareza.Comun,
  reglas: 'Una carta de prueba.',
  valor_mercado: 10
};

const carta2: Carta = {
  id: 100,
  nombre: 'Prueba',
  mana: 1,
  color: Color.Azul,
  tipo: Tipo.Criatura,
  rareza: Rareza.Comun,
  reglas: 'Una carta de prueba.',
  valor_mercado: 10
};

describe("Asynchronous function agregarcarta tests", () => {
  it("agregarcarta should provide an error", (done) => {
    coleccion.agregarcarta("test_user", carta1, (error) => {
      if (error) {
        expect(error).to.be.equal("Error: ya existe una carta con ese ID en la colección de test_user");
        done();
      }
    });
  });
});

describe("Asynchronous function agregarcarta tests", () => {
  it("agregarcarta should add a card", (done) => {
    coleccion.agregarcarta("test_user", carta2, (error, message) => {
      if (error === undefined) {
        expect(message).to.be.equal("Carta agregada a la colección de test_user");
        coleccion.eliminarcarta('test_user', 100);
        done();
      }
    });
  });

});


