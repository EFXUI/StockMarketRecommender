import utils from './utils/utils';
import Header from './components/header/header';
import createServer from './api/server';
import './styles/index.css';

import Search from './components/search/search';
import Results from './components/results/results';

if (process.env.NODE_ENV === 'development') {
    // create a fake server
    createServer();
}

const appp = () => {
    const header = null || document.getElementById('header');
    header.innerHTML = Header.render();
    Header.post_render();   
    
    const results = document.getElementById('results-list');
    var resultsInstance = new Results(results);
    resultsInstance.render();

    const search = document.getElementById('search-form');
    var searchInstance = new Search(search);
    searchInstance.render();
}

// Listen on hash change:
window.addEventListener('hashchange', appp);
/* window.addEventListener('click', () => {
            console.log('salut');
        }); */
// Listen on page load:
window.addEventListener('load', appp);
