import mongoose from 'mongoose'
import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        
        const point11 = new Point({ type: 'Point', coordinates: [41.3794138,2.1522515] })
        const point12 = new Point({ type: 'Point', coordinates: [41.3838244,2.1063495] })
        const point4 = new Point({ type: 'Point', coordinates: [41.401232,2.2000791] })

        return Promise.all([
            Market.create({ title: 'Bonpreu Tamarit', address: 'Calle Tamarit, 130', location: point11, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
            hours: [
                { day: 'Monday', open: '09:00', close: '18:00' },
                { day: 'Tuesday', open: '09:00', close: '18:00' },
                { day: 'Wednesday', open: '09:00', close: '18:00' },
                { day: 'Thursday', open: '09:00', close: '18:00' },
                { day: 'Friday', open: '09:00', close: '18:00' },
                { day: 'Saturday', open: '09:00', close: '18:00' },     
            ] }),
            Market.create({ title: 'Bonpreu Josep Tarradellas', address: 'Calle Josep Tarradellas, 45', location: point12, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
            hours: [
                { day: 'Monday', open: '09:00', close: '18:00' },
                { day: 'Tuesday', open: '09:00', close: '18:00' },
                { day: 'Wednesday', open: '09:00', close: '18:00' },
                { day: 'Thursday', open: '09:00', close: '18:00' },
                { day: 'Friday', open: '09:00', close: '18:00' },
                { day: 'Saturday', open: '09:00', close: '18:00' },
            ] }),
            Market.create({ title: 'Bonpreu  Llull', address: 'Calle Lull, 200', location: point4, wines: ['66537c8942940b230f03ca40', '66537c8942940b230f03ca4a', '66537c8942940b230f03ca47', '66537c8942940b230f03ca31', '66537c8942940b230f03ca2e', '66537c8942940b230f03ca38', '66537c8942940b230f03ca2d', '66537c8942940b230f03ca2c', '66537c8942940b230f03ca30', '66537c8942940b230f03ca37', '66537c8942940b230f03ca39', '66537c8942940b230f03ca50', '66537c8942940b230f03ca2f'],
            hours: [
                { day: 'Monday', open: '09:00', close: '18:00' },
                { day: 'Tuesday', open: '09:00', close: '18:00' },
                { day: 'Wednesday', open: '09:00', close: '18:00' },
                { day: 'Thursday', open: '09:00', close: '18:00' },
                { day: 'Friday', open: '09:00', close: '18:00' },
                { day: 'Saturday', open: '09:00', close: '18:00' },
            ] }),
           
        ]);
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)