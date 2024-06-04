import mongoose from 'mongoose'
import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.38091,2.1506411] })
        const point2 = new Point({ type: 'Point', coordinates: [41.376267,2.1137611] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4058355,2.2095172] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876077,2.1436569] })

        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
            ] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
            ] }),
            Market.create({ title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
            ] }),
            Market.create({ title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['66537c8942940b230f03ca5a', '66537c8942940b230f03ca5b', '66537c8942940b230f03ca59', '66537c8942940b230f03ca58', '66537c8942940b230f03ca57', '66537c8942940b230f03ca56', '66537c8942940b230f03ca55', '66537c8942940b230f03ca53', '66537c8942940b230f03ca5c', '66537c8942940b230f03ca54', '66537c8942940b230f03ca52'], hours: [
                { day: 'Monday', open: '09:00', close: '21:00' },
                { day: 'Tuesday', open: '09:00', close: '21:00' },
                { day: 'Wednesday', open: '09:00', close: '21:00' },
                { day: 'Thursday', open: '09:00', close: '21:00' },
                { day: 'Friday', open: '09:00', close: '21:00' },
                { day: 'Saturday', open: '09:00', close: '21:00' },
            ] }),
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)