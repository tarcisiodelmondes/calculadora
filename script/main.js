function Calculator() {
  this.display = document.querySelector(".display");

  this.init = () => {
    this.captureClick();
    this.captureEnter();
  };

  this.captureEnter = () => {
    document.addEventListener("keyup", (event) => {
      if (event.keyCode !== 13) return;
      this.performsCalc();
    });
  };

  this.captureClick = () => {
    document.addEventListener("click", (event) => {
      const elemento = event.target;
      if (elemento.classList.contains("btn-num")) this.addNumDisplay(elemento);
      if (elemento.classList.contains("btn-clear")) this.clear();
      if (elemento.classList.contains("btn-del")) this.delete();
      if (elemento.classList.contains("btn-eq")) this.performsCalc();
    });
  };

  this.addNumDisplay = (elemento) => {
    this.display.value += elemento.innerText;
    this.display.focus();
  };
  this.clear = () => (this.display.value = "");

  this.delete = () => (this.display.value = this.display.value.slice(0, -1));
  this.performsCalc = () => {
    try {
      const account = eval(this.display.value);
      if (!account) {
        alert("Erro, conta invalida");
        return;
      }
      this.display.value = account;
    } catch (error) {
      alert("Conta invalida");
      return;
    }
  };
}

const calculadora = new Calculator();
calculadora.init();
