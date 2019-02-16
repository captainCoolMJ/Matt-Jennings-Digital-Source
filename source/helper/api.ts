export const api = {
    fetch: (url: string) => {

        let fetch;

        if (typeof window === 'undefined') {
            fetch = require('node-fetch');
        } else {
            fetch = window.fetch;
        }
        
        return fetch(url).then((res) => res.json());
    }
};