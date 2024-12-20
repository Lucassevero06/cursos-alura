export function escapar(
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
) {
    const metodoOriginal = descriptor.value;
    descriptor.value = function (...args: Array<any>) {
        let retorno = metodoOriginal.apply(this, args);
        if (retorno instanceof String) {
            console.log(`@escape em ação na classe 
                ${this.constructor.name} para o metodo ${propertyKey}`);
            retorno = retorno.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        return retorno;
    }

    return descriptor;
}
