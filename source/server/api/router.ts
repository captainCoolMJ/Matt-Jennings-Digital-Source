import { Router } from 'express';
import firebase from 'firebase';
import { AppDangerousConfigurationType } from '../../app/configuration/types';

export const apiRouter = (configuration: AppDangerousConfigurationType) => {

    const fb = firebase.initializeApp({
        apiKey: configuration.databaseKey,
        databaseURL: configuration.databaseUrl
    });

    const api = Router({ mergeParams: true });

    api.get('/skills', (req, res) => {
    
        fb.database().ref('/skills').once('value')
            .then((snapshot) => res.status(200).send({
                data: snapshot.val()
            }))
            .catch((err) => res.status(500).send('There was a problem'));
    });
    
    api.get('/timeline', (req, res) => {
    
        fb.database().ref('/timeline').once('value')
            .then((snapshot) => res.status(200).send({
                data: snapshot.val()
            }))
            .catch((err) => res.status(500).send('There was a problem'));
    });
    
    api.get('/portfolio', (req, res) => {
    
        fb.database().ref('/portfolio').once('value')
            .then((snapshot) => res.status(200).send({
                data: snapshot.val()
            }))
            .catch((err) => res.status(500).send('There was a problem'));
    });
    
    return api;
}