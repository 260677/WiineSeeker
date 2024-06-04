// @ts-nocheck
import mongoose from 'mongoose'
import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/08/1e/Ts3nfsIc_o.png`, title: 'Gran Closa Xarel.lo', description: '"Fresh and flora, yeat complex and persistent. 100% Xarello grapes"', type: 'white', price: 3.95, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/d2/99/lbvNq5jA_o.png`, title: 'Rosa dAbril ecológico', description: '"Penedés, floral and balanced, pink flowers and jasmine"', type: 'pink', price: 10.95, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/6b/29/q8oElit6_o.png`, title: 'Canallas', description: '"Ruby red, fruity and mineral notes. Ideal with strong cheeses"', type: 'red', price: 3.69, rates: [4.4] }),
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
