// Module

const comprarBoleto = (function() {

    // Privado
    let evento = 'Conferencia JS 2019';
    let precio = 20000;
    const adquirirBoleto = () => {
        const elemento = document.createElement('p');
        elemento.textContent = `Comprando boleto para ${evento}`;
        document.querySelector('#app').appendChild(elemento);
    }

    // Publico
    return {
        mostrarBoleto: function() {
            // console.log(evento);
            adquirirBoleto();
        }
    }

})();

comprarBoleto.mostrarBoleto();
console.log(evento);