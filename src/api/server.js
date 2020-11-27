import { Server, Model } from 'miragejs';
import stocks from './stock';

export default function ({ environment = 'development' } = {}) {
  // New instance of the Server class
  return new Server({
    environment,

    models: {
        stocks: Model
    },

    /**
     * Fill the database with our data.
     * 
     * @param {Server} server 
     */
    seeds(server) {
      server.db.loadData({
        stocks,
      })
    },

    routes() {
        /**
         * Set a prefix for routes.
         */
        this.namespace = '/api';

        /**
         * GET /api/stocks.
         * Return all stocks.
         */
        this.get('/stocks', schema => {
            return schema.stocks.all();
        });
    },
  });
}