class rounded extends HTMLElement{
    constructor(){
        super()
        this.attachShadow({mode: 'open'})
        this.sheet = ''
    }
    changeSheet(){
        this.sheet = `
        .mainCircle{
            position: absolute;
            top: ${this.getAttribute('wy')}rem;
            ${this.getAttribute('sh')}: ${this.getAttribute('wx')}rem;
            display: grid;
            place-items: center;
            width : ${this.getAttribute('msize')}rem;
            height :${this.getAttribute('msize')}rem;
            border-radius : 50%;background-color: ${this.getAttribute('mcolor')};
            z-index : ${this.hasAttribute('back') ? -1 : 0}
        }
        .tinyCircle{
            width : ${this.getAttribute('tsize')}rem;
            height :${this.getAttribute('tsize')}rem;
            border-radius : 50%;
            background-color: ${this.getAttribute('tcolor')};
        }
        `
    }
    connectedCallback(){
        this.changeSheet()
        const mainCircle = document.createElement('div'),
        tinyCircle = document.createElement('div'),
        styles = document.createElement('style'),
        fr = document.createDocumentFragment();

        mainCircle.classList.add('mainCircle');
        tinyCircle.classList.add('tinyCircle');
        
        styles.setAttribute('type','text/css')
        styles.textContent = this.sheet;

        mainCircle.appendChild(tinyCircle)
        fr.appendChild(mainCircle)
        fr.appendChild(styles)
        this.shadowRoot.appendChild(fr)
    }
    attributeChangedCallback(){
        this.changeSheet()
    }
}

customElements.define('g-rounded',rounded)