// @ts-nocheck
import mongoose from 'mongoose'
import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
    .then(() =>
        Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/65/db/WMzEztf6_o.png`, title: 'Matinada Montsant', description: '"Garnacha and Syrah, strong, woody flavour"', type: 'red', price: 4.75, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/be/d5/fXAyVKwP_o.png`, title: 'Verdejo Molongo', description: '"Fresh verdejo, fruity and balaced. Perfect with all sorts of fish"', type: 'white', price: 4.99, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/aa/2f/6thkS75G_o.png`, title: 'Raimat Abadia', description: '"Cabernet Sauvignon and Tempranillo, Costers del Segre, balanced and tasty, chrry notes"', type: 'pink', price: 7.95, rates: [4] }),
        ])

    )

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
