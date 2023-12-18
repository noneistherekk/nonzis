function getErrorMessage(jqXHR, exception) {
    var msg = '';
    if (jqXHR.status === 0) {
        msg = 'Pas de connexion.\n Vérifiez le réseau Internet.';
    } else if (jqXHR.status == 404) {
        msg = 'Page demandée introuvable. [404]';
    } else if (jqXHR.status == 500) {
        msg = 'Erreur Interne du Serveur [500].';
    } else if (exception === 'parsererror') {
        msg = 'Échec de l\'analyse JSON demandée.';
    } else if (exception === 'timeout') {
        msg = 'Erreur de timeout.';
    } else if (exception === 'abort') {
        msg = 'Demande Ajax abandonnée.';
    } else {
        msg = jqXHR.responseText;
    }
    return msg;
}