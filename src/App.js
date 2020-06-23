import React from 'react';
import logo from './logo.svg';
import './App.css';
// importer twitter bootstrap (lib css) dans notre projet jour2 => soit plus joli
// ajouter bootstrap => lien de commande 
// pm i bootstrapn //  télécharger dans le dossier node_modules la librairie bootstrap
// depuis le site npmjs.com => https://www.npmjs.com/package/bootstrap
// attention il faut lancer cette commande dans le dossier jour2
// créer un nouveau composant 
// src/Compteur.jsx
import Compteur from "./Compteur";

function App() {
  return (
    <div className="container">
      <Compteur />
    </div>
  );
}

export default App;
