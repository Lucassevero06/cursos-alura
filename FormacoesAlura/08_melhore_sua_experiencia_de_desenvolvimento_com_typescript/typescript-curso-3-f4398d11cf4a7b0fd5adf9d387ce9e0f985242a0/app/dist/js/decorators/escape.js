export function escape(target, propertyKey, descriptor) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        let retorno = metodoOriginal.apply(this, args);
        if (retorno instanceof String) {
            console.log(`@escape em ação na classe 
                ${this.constructor.name} para o metodo ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        retorno;
    };
    return descriptor;
}
