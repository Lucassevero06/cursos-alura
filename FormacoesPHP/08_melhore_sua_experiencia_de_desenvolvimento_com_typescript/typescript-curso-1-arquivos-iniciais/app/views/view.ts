export default abstract class View<T> {
    protected elemento: Element;

    constructor(seletor: string) {
        this.elemento = document.querySelector(seletor);
    }

    public update(model: T): void {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }

    protected abstract template(model: T): string;

}