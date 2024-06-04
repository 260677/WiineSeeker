// @ts-nocheck
import mongoose from 'mongoose'
import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/f6/0f/316N9bpz_o.png`, title: 'Bobal para Pecar', description: '"Cherry and wildbrries notes, fruity, lingering taste. Ideal for: rice, meat, cheeses"', type: 'red', price: 2.90, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/a4/30/DM1OqPRh_o.png`, title: 'Coto de Imaz', description: '"Rioja Temapranillo, 18 months wine barrel(french oak). Strong, full body"', type: 'white', price: 8.60, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/54/04/GG6LXWnj_o.png`, title: 'D.O. Montsant Racó del Convent', description: '"Ruby red, fruity and mineral notes. Ideal with strong cheeses"', type: 'white', price: 4.20, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/45/28/j08WAHHP_o.png`, title: 'D.O. Priorat Arc de Pedra', description: '"Cherry, red fruits and spicies. Balanced and elegant. Ideal with jamón, cheeses and grilled meat"', type: 'red', price: 8.5, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/c7/ac/hBiwcbcl_o.png`, title: 'Ribera del Duero 13 Hectáreas', description: '"6 months in french roble, woody and wildberries notes, strong. Perfect with curated cheeses, ham, meat"', type: 'red', price: 5.25, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/a3/a0/mkupXkS3_o.png`, title: 'The GuvNor', description: '"Teampranillo, vanilla and cherry notes. Perfect with blue cheese"', type: 'red', price: 2.85, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/03/0b/luyKxzz8_o.png`, title: 'Albariño Pazo de Orantes', description: '"Fresh albariño, white flowers and fruit notes, balanced"', type: 'white', price: 6, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/1b/43/C3VpR50y_o.png`, title: 'Gewürztraminer Mar de Uvas', description: '"Three months french oak, white flowers and fruits, strong, balanced. Perfect to enjoy with light cheeses"', type: 'white', price: 4.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/0b/99/vWwsEXMk_o.png`, title: 'Alicia en el país de las uvas', description: '"Suave y goloso, cherry and blueberry notes"', type: 'pink', price: 2.25, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/ef/76/1LjCXCcA_o.png`, title: 'D.O Rioja Arteso Clarete', description: '"Pink flowers, lemon and sweet cotton notes"', type: 'pink', price: 3.25, rates: [3.3] }),
           
    
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
