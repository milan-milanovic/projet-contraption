/*jslint esnext:true, browser:true*/
/**
 * @module Chat
 */
export default class Chat {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    deplacer(x, y) {
        this.x = x;
        this.y = y;
        window.setTimeout (() => {
            this.div.style.transitionTimingFunction= "linear";
            this.div.style.transitionDuration= "4s";
            this.div.style.left = this.x + "px";
            this.div.style.top = this.y + "px";
        }, 50);
    }
	/**
	 * Méthode principale. Sera typiquement appelée après le chargement de la page.
	 */
	static main() {
        this.app = document.getElementById("app");
        this.ajouterStyle();
        //this.ajouterDiv();
        var chat = new Chat(100, 100);
        this.app.appendChild(chat.creerDiv());
        var chat2 = new Chat(400, 300);
        this.app.appendChild(chat2.creerDiv());
        chat.deplacer(400, 120);
        chat2.deplacer(0, 0);
    }
    static ajouterStyle() {
        var resultat = document.createElement("link");
        document.head.appendChild(resultat);
        resultat.setAttribute("rel", "stylesheet");
        resultat.setAttribute("href", "./src/chat.css");
        // var resultat = document.createElement("style");
        // document.head.appendChild(resultat);
        // var style = "#app {background-color: red}";
        // style += ".chat {border: 1px solid black}";
        // resultat.innerHTML = ;
    }
    creerDiv() {
        var resultat = document.createElement("div");
        resultat.classList.add("chat");
        resultat.style.left = this.x + "px";
        resultat.style.top = this.y + "px";
        this.div = resultat;
        return resultat;
    }
}
