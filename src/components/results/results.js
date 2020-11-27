import './results.css';
import axios from 'axios';

export default class {
  
  constructor(results) {
      console.log(results);
      this.results = results;
  }
  
  async render() {
    try {
        const { data } = await axios.get('/api/stocks'); // Fetch the data
        this.stocks = data.stocks;
        console.log(data);
    } catch(e) {
        console.error(e);
    }

    /* this.stocks.filter(
        stock => stock.symbol.toLowerCase().includes(symbol.toLowerCase())
    )
        */

    // Stock list markup
    // map return an array, so .join('') to get rid of the comma
    const markup = `
        <ul id="stock-results" class="stock-results">
            ${this.stocks.map(stock => `
            <li class="results-item">
                <div class="stock-symbol">
                    <h3>${stock.symbol}</h3>
                </div>
                <div class="stock-price">
                    <h3>${stock.price}</h3>
                </div>
                <div class="stock-media-count">
                    <h3>${stock.fullName}</h3>
                </div>
            </li>
            `).join('')}
        </ul>
    `;

    this.results.innerHTML = markup;

    document.getElementById('stock-results').addEventListener('click', () => {
        console.log('pressed');
    });
  }

  async showResults() {
      console.log('show results');
      this.render();
  }  
};