// @ts-nocheck
import mongoose from 'mongoose'

import { Point, Market } from '.'


mongoose.connect('mongodb://localhost:27017/test')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.38091, 2.0811182] })
        const point2 = new Point({ type: 'Point', coordinates: [41.38091, 2.0811182] })
        /* const point3 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point4 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point5 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point6 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point7 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point8 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point9 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point10 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point11 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point12 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point13 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point14 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point15 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point16 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point17 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point18 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point19 = new Point({ type: 'Point', coordinates: [50, 55] })
        const point20 = new Point({ type: 'Point', coordinates: [50, 55] }) */
        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['6632560516680824270ffe54', '662e80da9bd0437d6003be7c', '662bc0b43f7b2f41c2b230e9'] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['6632560516680824270ffe54', '662e80da9bd0437d6003be7c', '662bc0b43f7b2f41c2b230e9'] }),
           /*  Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Mercadona', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea', ] }), */
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)

