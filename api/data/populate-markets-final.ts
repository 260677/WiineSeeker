import mongoose from 'mongoose'

import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point11 = new Point({ type: 'Point', coordinates: [41.3794138, 2.1522515] })
        const point12 = new Point({ type: 'Point', coordinates: [41.3838244, 2.1063495] })
        const point4 = new Point({ type: 'Point', coordinates: [41.4012839,2.2025024] })
        const point3 = new Point({ type: 'Point', coordinates: [41.4016842,2.2051857] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4022095,2.2038422] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794426, 2.1322796] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3791358, 2.1595525] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796277, 2.1438884] })
        const point1 = new Point({ type: 'Point', coordinates: [41.38091, 2.1506411] })
        const point2 = new Point({ type: 'Point', coordinates: [41.376267, 2.1137611] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4058355, 2.2095172] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876077, 2.1436569] })
        const point17 = new Point({ type: 'Point', coordinates: [41.403099, 2.203008] })
        const point18 = new Point({ type: 'Point', coordinates: [41.4021816, 2.2056232] })
        const point19 = new Point({ type: 'Point', coordinates: [41.403412,2.2024036] })
        const point20 = new Point({ type: 'Point', coordinates: [41.403099, 2.203008] })
        const point21 = new Point({ type: 'Point', coordinates: [41.4016842,2.2051857] })


        return Promise.all([
            Market.create({
                title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['66545e3ad9a2652a9153d6e0', '66545e3ad9a2652a9153d6df', '66545e3ad9a2652a9153d6e4', '66545e3ad9a2652a9153d6e3', '66545e3ad9a2652a9153d6e2', '66545e3ad9a2652a9153d6d9', '66545e3ad9a2652a9153d6d8', '66545e3ad9a2652a9153d6dc', '66545e3ad9a2652a9153d6de', '66545e3ad9a2652a9153d6dd', '66545e3ad9a2652a9153d6db', '66545e3ad9a2652a9153d6da', '66545e3ad9a2652a9153d6cc', '66545e3ad9a2652a9153d6d1', '66545e3ad9a2652a9153d6ce', '66545e3ad9a2652a9153d6d7', '66545e3ad9a2652a9153d6d6', '66545e3ad9a2652a9153d6d5', '66545e3ad9a2652a9153d6d3', '66545e3ad9a2652a9153d6d2', '66545e3ad9a2652a9153d6d0', '66545e3ad9a2652a9153d6cd', '66545e3ad9a2652a9153d6be'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['66545e3ad9a2652a9153d6e0', '66545e3ad9a2652a9153d6df', '66545e3ad9a2652a9153d6e4', '66545e3ad9a2652a9153d6e3', '66545e3ad9a2652a9153d6e2', '66545e3ad9a2652a9153d6d9', '66545e3ad9a2652a9153d6d8', '66545e3ad9a2652a9153d6dc', '66545e3ad9a2652a9153d6de', '66545e3ad9a2652a9153d6dd', '66545e3ad9a2652a9153d6db', '66545e3ad9a2652a9153d6da', '66545e3ad9a2652a9153d6cc', '66545e3ad9a2652a9153d6d1', '66545e3ad9a2652a9153d6ce', '66545e3ad9a2652a9153d6d7', '66545e3ad9a2652a9153d6d6', '66545e3ad9a2652a9153d6d5', '66545e3ad9a2652a9153d6d3', '66545e3ad9a2652a9153d6d2', '66545e3ad9a2652a9153d6d0', '66545e3ad9a2652a9153d6cd', '66545e3ad9a2652a9153d6be'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['66545e3ad9a2652a9153d6e0', '66545e3ad9a2652a9153d6df', '66545e3ad9a2652a9153d6e4', '66545e3ad9a2652a9153d6e3', '66545e3ad9a2652a9153d6e2', '66545e3ad9a2652a9153d6e1', '66545e3ad9a2652a9153d6d9', '66545e3ad9a2652a9153d6d8', '66545e3ad9a2652a9153d6dc', '66545e3ad9a2652a9153d6de', '66545e3ad9a2652a9153d6dd', '66545e3ad9a2652a9153d6db', '66545e3ad9a2652a9153d6da', '66545e3ad9a2652a9153d6cc', '66545e3ad9a2652a9153d6d1', '66545e3ad9a2652a9153d6ce', '66545e3ad9a2652a9153d6d7', '66545e3ad9a2652a9153d6d6', '66545e3ad9a2652a9153d6d5', '66545e3ad9a2652a9153d6d3', '66545e3ad9a2652a9153d6d2', '66545e3ad9a2652a9153d6d0', '66545e3ad9a2652a9153d6cd', '66545e3ad9a2652a9153d6be'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['66545e3ad9a2652a9153d6e0', '66545e3ad9a2652a9153d6df', '66545e3ad9a2652a9153d6e4', '66545e3ad9a2652a9153d6e3', '66545e3ad9a2652a9153d6e2', '66545e3ad9a2652a9153d6e1', '66545e3ad9a2652a9153d6d9', '66545e3ad9a2652a9153d6d8', '66545e3ad9a2652a9153d6dc', '66545e3ad9a2652a9153d6de', '66545e3ad9a2652a9153d6dd', '66545e3ad9a2652a9153d6db', '66545e3ad9a2652a9153d6da', '66545e3ad9a2652a9153d6cc', '66545e3ad9a2652a9153d6d1', '66545e3ad9a2652a9153d6ce', '66545e3ad9a2652a9153d6d7', '66545e3ad9a2652a9153d6d6', '66545e3ad9a2652a9153d6d5', '66545e3ad9a2652a9153d6d3', '66545e3ad9a2652a9153d6d2', '66545e3ad9a2652a9153d6d0', '66545e3ad9a2652a9153d6cd', '66545e3ad9a2652a9153d6be'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['66545e3ad9a2652a9153d6e0', '66545e3ad9a2652a9153d6df', '66545e3ad9a2652a9153d6e4', '66545e3ad9a2652a9153d6e3', '66545e3ad9a2652a9153d6e2', '66545e3ad9a2652a9153d6e1', '66545e3ad9a2652a9153d6d9', '66545e3ad9a2652a9153d6d8', '66545e3ad9a2652a9153d6dc', '66545e3ad9a2652a9153d6de', '66545e3ad9a2652a9153d6dd', '66545e3ad9a2652a9153d6db', '66545e3ad9a2652a9153d6da', '66545e3ad9a2652a9153d6cc', '66545e3ad9a2652a9153d6d1', '66545e3ad9a2652a9153d6ce', '66545e3ad9a2652a9153d6d7', '66545e3ad9a2652a9153d6d6', '66545e3ad9a2652a9153d6d5', '66545e3ad9a2652a9153d6d3', '66545e3ad9a2652a9153d6d2', '66545e3ad9a2652a9153d6d0', '66545e3ad9a2652a9153d6cd', '66545e3ad9a2652a9153d6be'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },

                ]
            }),
            Market.create({
                title: 'Bonpreu Tamarit', address: 'Calle Tamarit, 130', location: point11, wines: ['66545e3ad9a2652a9153d6ca', '66545e3ad9a2652a9153d6c9', '66545e3ad9a2652a9153d6c8', '66545e3ad9a2652a9153d6c7', '66545e3ad9a2652a9153d6c6', '66545e3ad9a2652a9153d6c1', '66545e3ad9a2652a9153d6c5', '66545e3ad9a2652a9153d6c4', '66545e3ad9a2652a9153d6c3', '66545e3ad9a2652a9153d6c2', '66545e3ad9a2652a9153d6c0', '66545e3ad9a2652a9153d6bf'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Bonpreu Josep Tarradellas', address: 'Calle Josep Tarradellas, 45', location: point12, wines: ['66545e3ad9a2652a9153d6ca', '66545e3ad9a2652a9153d6c9', '66545e3ad9a2652a9153d6c8', '66545e3ad9a2652a9153d6c7', '66545e3ad9a2652a9153d6c6', '66545e3ad9a2652a9153d6c1', '66545e3ad9a2652a9153d6c5', '66545e3ad9a2652a9153d6c4', '66545e3ad9a2652a9153d6c3', '66545e3ad9a2652a9153d6c2', '66545e3ad9a2652a9153d6c0', '66545e3ad9a2652a9153d6bf'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Bonpreu  Llull', address: 'Calle Lull, 200', location: point4, wines: ['66545e3ad9a2652a9153d6ca', '66545e3ad9a2652a9153d6c9', '66545e3ad9a2652a9153d6c8', '66545e3ad9a2652a9153d6c7', '66545e3ad9a2652a9153d6c6', '66545e3ad9a2652a9153d6c1', '66545e3ad9a2652a9153d6c5', '66545e3ad9a2652a9153d6c4', '66545e3ad9a2652a9153d6c3', '66545e3ad9a2652a9153d6c2', '66545e3ad9a2652a9153d6c0', '66545e3ad9a2652a9153d6bf'],
                hours: [
                    { day: 'Monday', open: '09:00', close: '18:00' },
                    { day: 'Tuesday', open: '09:00', close: '18:00' },
                    { day: 'Wednesday', open: '09:00', close: '18:00' },
                    { day: 'Thursday', open: '09:00', close: '18:00' },
                    { day: 'Friday', open: '09:00', close: '18:00' },
                    { day: 'Saturday', open: '09:00', close: '18:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['66545e3ad9a2652a9153d6ee', '66545e3ad9a2652a9153d6ea', '66545e3ad9a2652a9153d6f0', '66545e3ad9a2652a9153d6ef', '66545e3ad9a2652a9153d6e5', '66545e3ad9a2652a9153d6ed', '66545e3ad9a2652a9153d6eb', '66545e3ad9a2652a9153d6e9', '66545e3ad9a2652a9153d6e8', '66545e3ad9a2652a9153d6e7', '66545e3ad9a2652a9153d6e6'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['66545e3ad9a2652a9153d6ee', '66545e3ad9a2652a9153d6ea', '66545e3ad9a2652a9153d6f0', '66545e3ad9a2652a9153d6ef', '66545e3ad9a2652a9153d6e5', '66545e3ad9a2652a9153d6ed', '66545e3ad9a2652a9153d6eb', '66545e3ad9a2652a9153d6e9', '66545e3ad9a2652a9153d6e8', '66545e3ad9a2652a9153d6e7', '66545e3ad9a2652a9153d6e6'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['66545e3ad9a2652a9153d6ee', '66545e3ad9a2652a9153d6ea', '66545e3ad9a2652a9153d6f0', '66545e3ad9a2652a9153d6ef', '66545e3ad9a2652a9153d6e5', '66545e3ad9a2652a9153d6ed', '66545e3ad9a2652a9153d6eb', '66545e3ad9a2652a9153d6e9', '66545e3ad9a2652a9153d6e8', '66545e3ad9a2652a9153d6e7', '66545e3ad9a2652a9153d6e6'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['66545e3ad9a2652a9153d6ee', '66545e3ad9a2652a9153d6ea', '66545e3ad9a2652a9153d6f0', '66545e3ad9a2652a9153d6ef', '66545e3ad9a2652a9153d6e5', '66545e3ad9a2652a9153d6ed', '66545e3ad9a2652a9153d6eb', '66545e3ad9a2652a9153d6e9', '66545e3ad9a2652a9153d6e8', '66545e3ad9a2652a9153d6e7', '66545e3ad9a2652a9153d6e6'], hours: [
                    { day: 'Monday', open: '09:00', close: '21:00' },
                    { day: 'Tuesday', open: '09:00', close: '21:00' },
                    { day: 'Wednesday', open: '09:00', close: '21:00' },
                    { day: 'Thursday', open: '09:00', close: '21:00' },
                    { day: 'Friday', open: '09:00', close: '21:00' },
                    { day: 'Saturday', open: '09:00', close: '21:00' },
                ]
            }),
            Market.create({
                title: 'Lidl Lope de Vega', address: 'Calle Lope de Vega, 112', location: point19, wines: ['66545e3ad9a2652a9153d6f3', '66545e3ad9a2652a9153d6f8', '66545e3ad9a2652a9153d6f6', '66545e3ad9a2652a9153d6f5', '66545e3ad9a2652a9153d6f4', '66545e3ad9a2652a9153d6f1', '66545e3ad9a2652a9153d6fa'], hours: [
                    { day: 'Monday', open: '09:00', close: '18:15' },
                    { day: 'Tuesday', open: '09:00', close: '18:15' },
                    { day: 'Wednesday', open: '09:00', close: '18:15' },
                    { day: 'Thursday', open: '09:00', close: '18:15' },
                    { day: 'Friday', open: '09:00', close: '18:15' },
                    { day: 'Saturday', open: '09:00', close: '18:15' },
                ]
            }),
            Market.create({
                title: 'Alimentació Poblenou',
                address: 'Calle Ramón Turró, 245',
                location: point18,
                wines: [
                    '66545e3ad9a2652a9153d6cf',
                    '66545e3ad9a2652a9153d6cb',
                    '66545e3ad9a2652a9153d6f7',
                    '66545e3ad9a2652a9153d6f2',
                    '66545e3ad9a2652a9153d6ec',
                    
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
            }),
            Market.create({
                title: 'BonÀrea Bilbao',
                address: 'Calle Bilbao, 67',
                location: point17,
                wines: [
                    '66545e3ad9a2652a9153d6bc',
                    '66545e3ad9a2652a9153d6bb',
                    '66545e3ad9a2652a9153d6bd'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '18:00' },
                    { day: 'Tuesday', open: '09:00', close: '18:00' },
                    { day: 'Wednesday', open: '09:00', close: '18:00' },
                    { day: 'Thursday', open: '09:00', close: '18:00' },
                    { day: 'Friday', open: '09:00', close: '18:00' },
                    { day: 'Saturday', open: '09:00', close: '18:00' },

                ]
            }),
            Market.create({
                title: 'All Day & Night Bilbao',
                address: 'Calle Bilbao, 30',
                location: point20,
                wines: [
                    '66537c8942940b230f03ca2b',
                    '66537c8942940b230f03ca29',
                    '66545e3ad9a2652a9153d6f5',
                    '66545e3ad9a2652a9153d6ef'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '04:00' },
                    { day: 'Tuesday', open: '09:00', close: '04:00' },
                    { day: 'Wednesday', open: '09:00', close: '04:00' },
                    { day: 'Thursday', open: '09:00', close: '04:00' },
                    { day: 'Friday', open: '09:00', close: '04:00' },
                    { day: 'Saturday', open: '09:00', close: '04:00' },
                   
                ]
            }),
            Market.create({
                title: 'Only Afternoon Lope de Vega',
                address: 'Calle Lope de Vega, 30',
                location: point21,
                wines: [
                    '66545e3ad9a2652a9153d6dd',
                    '66545e3ad9a2652a9153d6c7',
                    '66545e3ad9a2652a9153d6f5',
                    '66545e3ad9a2652a9153d6e5',
                    '66545e3ad9a2652a9153d6c5',
                    '66545e3ad9a2652a9153d6e9'
                ],
                hours: [
                    { day: 'Monday', open: '14:30', close: '17:00' },
                    { day: 'Tuesday', open: '14:30', close: '17:00' },
                    { day: 'Wednesday', open: '14:30', close: '17:00' },
                    { day: 'Thursday', open: '14:30', close: '17:00' },
                    { day: 'Friday', open: '14:30', close: '17:00' },
                    { day: 'Saturday', open: '14:30', close: '17:00' },
                   
                ]
            })
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)