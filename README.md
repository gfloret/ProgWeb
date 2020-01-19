# Projet de Programmation Web

## Groupe :
- Guillaume Floret
- Arthur Herman
- Dorian Ropert

## Description :
Réalisation d'un outil en ligne de création et de partage de playlists de musiques. Avec un système d'inscription et de connexion, les utilisateurs identifiés peuvent rechercher des musiques Youtube, et les ajouter à leur playlist personnelle, pour pouvoir les lire plus tard. L'application met également à disposition un système de salons (public/privé), que les utilisateurs peuvent créer ou rejoindre, pour partager et écouter les musiques des autres utilisateurs. Chaque salon a sa propre playlist, et est également pourvu d'un chat horodaté, que les membres peuvent utiliser pour communiquer au sein d'un même salon.

<br>

## Technologies utilisées

- Front : Angular & Bootstrap
- Back : NodeJS (Express)
- API tierce : Youtube
- Base de données : MongoDB

<br>

## Accès au site
L'application a été déployée en utilisant *heroku* et est disponible à l'adresse : http://smart-jukebox.herokuapp.com

Note : La version déployée est un peu plus instable que la version du dépôt : https://github.com/gfloret/ProgWeb et des latences ou retards d'affichage peuvent apparaître occasionnellement (rafraîchir la page résout le problème).

<br>

## Utilisation & Fonctionnalités
Après inscription & connexion (les indications à l'écran devraient permettre d'achever ces étapes sans difficultés), le site se décompose en trois parties :
- Recherche : 
    - effectuer une recherche d'une vidéo Youtube
    - écouter dans un lecteur intégré les musiques trouvées
    - enregistrer des musiques dans sa playlist perso
    - envoyer des musiques à ses salons (dont on est le propriétaire)
- Lecture :
    - lire ou supprimer des vidéos de la playlist
    - lorsque la lecture d'une vidéo est terminée, la suivante est automatiquement lue (on repart au début si on lit la dernière musique)
    - le lecteur est désactivé tant qu'aucune vidéo n'a été selectionnée
- Salons : 
    - créer un salon public, ou privé si un mot de passe est spécifié (un salon privé sera marqué avec une icône de cadenas)
    - cliquer sur un salon public ajoute automatiquement le membre au salon, ce salon apparaîtra par la suite dans l'onglet "Mes salons"
    - les salons dont on est le propriétaire sont démarqués par une icône à côté du nom du salon
    - les salons privés nécessitent un mot de passe pour la première fois où ils sont accédés uniquement (l'icône de cadenas deviendra un cadenas ouvert pour signifer que l'accès n'est plus restreint)
    - les membres (non propriétaires) ne peuvent pas supprimer de musiques de la playlist, ni supprimer le salon (mais ils peuvent le quitter)
    - la lecture de playlist est identique à celle de la page Lecture
    - les membres d'un salon peuvent communiquer via un chat propre à chaque salon

<br>

## Déploiement local
Ouvrir un terminal dans le dossier **/smartJukeboxBack** puis lancer la commande :
```bash
npm start
```
Dans un autre terminal, lancer dans le dossier **/smartJukebox** la commande :
```bash
npm start
```
