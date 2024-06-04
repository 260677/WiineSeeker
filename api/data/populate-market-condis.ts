import mongoose from 'mongoose'
import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2060713] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4027215,2.2009681] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794426,2.1322796] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3791358,2.1595525] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796277,2.1438884] })
        
        return Promise.all([
            Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
               
            ] }),
            Market.create({ title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
               
            ]   }),
            Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
               
            ]   }),
            Market.create({ title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
               
            ]   }),
            Market.create({ title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['66537c8942940b230f03ca3f', '66537c8942940b230f03ca4f', '66537c8942940b230f03ca3e', '66537c8942940b230f03ca3d', '66537c8942940b230f03ca3c', '66537c8942940b230f03ca3a', '66537c8942940b230f03ca3b', '66537c8942940b230f03ca51', '66537c8942940b230f03ca4e', '66537c8942940b230f03ca4d', '66537c8942940b230f03ca4c', '66537c8942940b230f03ca4b', '66537c8942940b230f03ca49', '66537c8942940b230f03ca48', '66537c8942940b230f03ca46', '66537c8942940b230f03ca45', '66537c8942940b230f03ca44', '66537c8942940b230f03ca43', '66537c8942940b230f03ca42', '66537c8942940b230f03ca41', '66537c8942940b230f03ca35', '66537c8942940b230f03ca34', '66537c8942940b230f03ca33', '66537c8942940b230f03ca32'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
               
            ]   }),
            
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)