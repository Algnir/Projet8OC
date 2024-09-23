const axios = require('axios');

const url = 'https://projet8oc.onrender.com/ping';

// Fonction pour pinguer le serveur pour éviter qu'il soit inactif
function pingServer() {
    axios.get(url)
        .then(response => {
            console.log(`Serveur pingé avec succès à ${new Date().toLocaleString()}`);
        })
        .catch(error => {
            console.error(`Erreur lors du ping du serveur: ${error}`);
        });
}

module.exports = pingServer;
