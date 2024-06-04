import mongoose from 'mongoose'

import { Point, Market } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Point.deleteMany())
    .then(() => Market.deleteMany())
    .then(() => {
        const point1 = new Point({ type: 'Point', coordinates: [41.3803416,2.1540512] })
        const point2 = new Point({ type: 'Point', coordinates: [41.3762672,2.1317849] })
        const point3 = new Point({ type: 'Point', coordinates: [41.4020559,2.2080025] })
        const point4 = new Point({ type: 'Point', coordinates: [41.4004016,2.2033415] })
        const point5 = new Point({ type: 'Point', coordinates: [41.4063086,2.2096713] })
        const point6 = new Point({ type: 'Point', coordinates: [41.4029903,2.2035441] })
        const point7 = new Point({ type: 'Point', coordinates: [41.4030778,2.2028185] })
        const point8 = new Point({ type: 'Point', coordinates: [41.3794451,2.1327317] })
        const point9 = new Point({ type: 'Point', coordinates: [41.3790909,2.1473229] })
        const point10 = new Point({ type: 'Point', coordinates: [41.3796237,2.128687] })
        const point11 = new Point({ type: 'Point', coordinates: [41.3757808,2.1364736] })
        const point12 = new Point({ type: 'Point', coordinates: [41.3838244,2.1063495] })
        const point13 = new Point({ type: 'Point', coordinates: [41.3822107,2.1356177] })
        const point14 = new Point({ type: 'Point', coordinates: [41.4030778,2.2028185] })
        const point15 = new Point({ type: 'Point', coordinates: [41.3876036,2.1313865] })

        return Promise.all([
            Market.create({ title: 'Mercadona Calabria', address: 'Calle Calabria, 129', location: point1, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7'] }),
            Market.create({ title: 'Mercadona Gran Via', address: 'Gran Via de les Corts Catalanes, 373', location: point2, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7'] }),
            Market.create({ title: 'Condis Taulat', address: 'Calle Taulat, 185', location: point3, wines: ['663bb7946a81b24281e658e2', '663bb7946a81b24281e658df', '663bb7946a81b24281e658eb'] }),
            Market.create({ title: 'Bonpreu  Ramon Turró', address: 'Calle Ramon Turró, 2', location: point4, wines: ['663bb7946a81b24281e658e5', '663bb7946a81b24281e658f6', '663bb7946a81b24281e658f7'] }),
            Market.create({ title: 'Mercadona Provençals', address: 'Calle Provençals, 5', location: point5, wines: ['663bb7946a81b24281e658e1', '663bb7946a81b24281e658e0', '663bb7946a81b24281e658e7'] }),
            Market.create({ title: 'Condis Bilbao', address: 'Calle Bilbao, 53', location: point6, wines: ['663bb7946a81b24281e658e2', '663bb7946a81b24281e658df', '663bb7946a81b24281e658eb'] }),
            Market.create({ title: 'BonArea Bilbao', address: 'Calle Bilbao, 67', location: point7, wines: ['663bb7946a81b24281e658ec', '663bb7946a81b24281e658ea', '663bb7946a81b24281e658e6'] }),
            Market.create({ title: 'Condis Entença', address: 'Calle Entença, 85', location: point8, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Condis Floridablanca', address: 'Calle Floridablanca, 96', location: point9, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Condis Llança', address: 'Calle de Llança, 48', location: point10, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Bonpreu Tamarit', address: 'Calle Tamarit, 130', location: point11, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Bonpreu Josep Tarradellas', address: 'Calle Josep Tarradellas, 45', location: point12, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'BonArea València', address: 'Calle València, 31', location: point13, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'BonArea Rocafort', address: 'Calle Rocafort, 56', location: point14, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
            Market.create({ title: 'Mercadona Villadomat', address: 'Calle Viladomat, 279', location: point15, wines: ['662e80da9bd0437d6003be78', '662e80da9bd0437d6003be87', '662bc0b43f7b2f41c2b230ea'] }),
        ])
    })
    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)