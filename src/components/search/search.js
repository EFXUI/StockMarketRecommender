import './search.css';

export default class {
  
  constructor(symbol) {
      this.symbol = symbol;
  }
  
  render() {
    let symbol = '' ;
    let markup = `
      <input id="search-symbol" class="search-symbol" type="text" placeholder="Search by symbol" />
    `;

    this.symbol.innerHTML = markup;

    document.getElementById('search-symbol').addEventListener('focus', () => {
        this.placeholder = '';
    });


    document.getElementById('search-symbol').addEventListener('input', (e) => {
        console.log(e);
        this.symbol = e.target.value;
        // this.showResults();
    });
  }  
};