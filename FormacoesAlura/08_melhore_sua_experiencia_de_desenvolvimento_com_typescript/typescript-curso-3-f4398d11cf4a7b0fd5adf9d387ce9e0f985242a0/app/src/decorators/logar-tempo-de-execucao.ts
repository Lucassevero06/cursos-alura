export function logarTempoDeExecucao(emSegundos: boolean = false) { //decorator
    return function(
        target: any, // ele retorna o construtor ou o protottype da classe
        propertyKey: string, //retorna o nome do metodo que foi decorado
        descriptor: PropertyDescriptor //tem a referencia pro metodo original
    ) {
        const metodoOriginal = descriptor.value;
        descriptor.value = function(...args: Array<any>) {
            let divisor = 1;
            let unidade = 'milisegundos';
            if (emSegundos) {
                divisor = 1000;
                unidade = 'segundos';
            }
            const t1 = performance.now();
            const retorno = metodoOriginal.apply(this, args);
            const t2 = performance.now();
            console.log(`${propertyKey}, tempo de execução: ${(t2 - t1) / divisor} ${unidade}`);
            retorno;
        };

        return descriptor;
    }
}