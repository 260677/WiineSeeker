import mongoose from 'mongoose'
import { Point, Market, Hour } from '.' 

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => {
        return Promise.all([
            Point.deleteMany(),
            Market.deleteMany()
        ])
    })
    .then(() => {
        const point18 = new Point({ type: 'Point', coordinates: [41.4021816,2.2056232] })

        return Promise.all([
            Market.create({
                title: 'Alimentació Poblenou',
                address: 'Calle Ramón Turró, 245',
                location: point18,
                wines: [
                    '66537c8942940b230f03ca2b',
                    '66537c8942940b230f03ca29',
                    '66537c8942940b230f03ca2a'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '23:00' },
                    { day: 'Tuesday', open: '09:00', close: '23:00' },
                    { day: 'Wednesday', open: '09:00', close: '23:00' },
                    { day: 'Thursday', open: '09:00', close: '23:00' },
                    { day: 'Friday', open: '09:00', close: '23:00' },
                    { day: 'Saturday', open: '09:00', close: '23:00' },
                    { day: 'Sunday', open: '09:00', close: '22:00' },
                   
                ]
            })
        ])
    })

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)