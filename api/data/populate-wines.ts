// @ts-nocheck
import mongoose from 'mongoose'

import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/f6/0f/316N9bpz_o.png`, title: 'Bobal para Pecar', description: 'cherry and wildbrries notes, fruity, lingering taste. Ideal for: rice, meat, cheeses.', type: 'red', price: 2.90, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/a4/30/DM1OqPRh_o.png`, title: 'Coto de Imaz', description: 'Rioja Temapranillo, 18 months wine barrel(french oak). Strong, full body', type: 'white', price: 8.60, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/54/04/GG6LXWnj_o.png`, title: 'D.O. Montsant Racó del Convent', description: 'Ruby red, fruity and mineral notes. Ideal with strong cheeses', type: 'white', price: 4.20, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/45/28/j08WAHHP_o.png`, title: 'D.O. Priorat Arc de Pedra', description: 'Cherry, red fruits and spicies. Balanced and elegant. Ideal with jamón, cheeses and grilled meat.', type: 'red', price: 8.5, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/c7/ac/hBiwcbcl_o.png`, title: 'Ribera del Duero 13 Hectáreas', description: '6 months in french roble, woody and wildberries notes, strong. Perfect with curated cheeses, ham, meat', type: 'red', price: 5.25, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/a3/a0/mkupXkS3_o.png`, title: 'The GuvNor', description: 'Teampranillo, vanilla and cherry notes. Perfect with blue cheese.', type: 'red', price: 2.85, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/03/0b/luyKxzz8_o.png`, title: 'Albariño Pazo de Orantes', description: 'Fresh albariño, white flowers and fruit notes, balanced.', type: 'white', price: 6, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/1b/43/C3VpR50y_o.png`, title: 'Gewürztraminer Mar de Uvas', description: '3 months french oak, white flowers and fruits, strong, balanced. Perfect to enjoy with light cheeses.', type: 'white', price: 4.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/43/07/pdD2tfwg_o.png`, title: 'D.O Catalunya Perelada Blanc de Blancs', description: 'floral and fruity aromas, smooth and elegant, typical Mediterranean wine.', type: 'white', price: 3.95, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/0b/99/vWwsEXMk_o.png`, title: 'Alicia en el país de las uvas', description: 'suave y goloso, cherry and blueberry notes', type: 'pink', price: 2.25, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/ef/76/1LjCXCcA_o.png`, title: 'D.O Rioja Arteso Clarete', description: 'pink flowers, lemon and sweet cotton notes', type: 'pink', price: 3.25, rates: [3.3] }),
            Wine.create({ image: ``, title: 'Onix Priorat', description: 'syrah and garnache, cherry notes', type: 'red', price: 6, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Red Wolf', description: 'roble, dry, woody', type: 'red', price: 8, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Montepulcciano dAbruzo', description: 'san giovese grapes, blueberry and cherry notes', type: 'red', price: 9, rates: [4.8] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Priorat Camino de las Piedras', description: '2 months in french roble, woody, persistent in the mouth', type: 'red', price: 10, rates: [3.5] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Montsant de los Sants', description: 'strong body, 2 month barrica, cherry notes', type: 'red', price: 12, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Toro del Rey', description: 'light cherry color, strong blueberry and cotton notes', type: 'red', price: 14, rates: [3] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Rioja Roja', description: 'woody, dry, rioja 6 months roble', type: 'red', price: 15, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Red Butterflies Priorat', description: 'cherry, wood', type: 'red', price: 18, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Nero dAvola', description: '6 month roble, fruity and dry', type: 'red', price: 19, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Brunello de Montalcino', description: 'notes of cherry, blueberry and soil, smoked', type: 'red', price: 22, rates: [5] }),
            Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Pink Flamingo', description: 'natural wine, young and fresh', type: 'pink', price: 3, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Rose Bouquet', description: 'lemon, lily, roses', type: 'pink', price: 5, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Cherry Lips', description: 'intense and dry', type: 'pink', price: 7, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Chic Rosé', description: 'rose, lemon and sweet cotton notes', type: 'pink', price: 10, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Pink Bubbles', description: 'cherry, lemon and dry cotton notes', type: 'pink', price: 12, rates: [4.6] }),


            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'White Garnache', description: 'jasmine, lemon and sweet cotton notes', type: 'white', price: 3, rates: [3] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Snow White', description: 'natural wine, drops of cherry and peach', type: 'white', price: 4, rates: [3.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Blanco de Nieves', description: '3 months barrica, strong body and dense', type: 'white', price: 5, rates: [4] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Albariño Trás Montes', description: 'lemon, peach and jasmine notes', type: 'white', price: 7, rates: [3] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Jasmim Branco', description: 'pure jasmine, 6 months barrica', type: 'white', price: 9, rates: [4.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Chardonnai Tres Joli', description: 'french wine, 2 years roble, woody, dry', type: 'white', price: 12, rates: [2.8] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Blanc du Monde', description: 'garnache blanca, 2 years roble, drops of cherry, cotton and lemon', type: 'white', price: 15, rates: [3.8] }),
            // Wine.create({ image: `https://images2.imgbox.com/bc/9b/XvaxUUNp_o.png`, title: 'Malbec Blanco', description: 'malbec argentino, 2 years french roble, fruity, fresh', type: 'white', price: 18, rates: [4.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Cataluña Red', description: 'ull de llebre grapes, woody and fresh', type: 'red', price: 3.5, rates: [3.4] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Malbec Rouge', description: 'exported malbec, roble, cherry and blueberry notes', type: 'red', price: 4, rates: [3.8] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Red Montsant', description: 'jasmine, lemon and sweet cotton notes', type: 'red', price: 4.5, rates: [4.2] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Onix Priorat', description: 'syrah and garnache, cherry notes', type: 'red', price: 6, rates: [4] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Red Wolf', description: 'roble, dry, woody', type: 'red', price: 8, rates: [4.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Montepulcciano dAbruzo', description: 'san giovese grapes, blueberry and cherry notes', type: 'red', price: 9, rates: [4.8] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Priorat Camino de las Piedras', description: '2 months in french roble, woody, persistent in the mouth', type: 'red', price: 10, rates: [3.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Montsant de los Sants', description: 'strong body, 2 month barrica, cherry notes', type: 'red', price: 12, rates: [3.8] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Toro del Rey', description: 'light cherry color, strong blueberry and cotton notes', type: 'red', price: 14, rates: [3] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Rioja Roja', description: 'woody, dry, rioja 6 months roble', type: 'red', price: 15, rates: [4] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Red Butterflies Priorat', description: 'cherry, wood', type: 'red', price: 18, rates: [4.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Nero dAvola', description: '6 month roble, fruity and dry', type: 'red', price: 19, rates: [4.2] }),
            // Wine.create({ image: `https://images2.imgbox.com/e6/46/7bonCIVh_o.png`, title: 'Brunello de Montalcino', description: 'notes of cherry, blueberry and soil, smoked', type: 'red', price: 22, rates: [5] }),
            // Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Pink Flamingo', description: 'natural wine, young and fresh', type: 'pink', price: 3, rates: [4.7] }),
            // Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Rose Bouquet', description: 'lemon, lily, roses', type: 'pink', price: 5, rates: [4.1] }),
            // Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Cherry Lips', description: 'intense and dry', type: 'pink', price: 7, rates: [3.9] }),
            // Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Chic Rosé', description: 'rose, lemon and sweet cotton notes', type: 'pink', price: 10, rates: [4.5] }),
            // Wine.create({ image: `https://images2.imgbox.com/c5/a2/6JaotefB_o.png`, title: 'Pink Bubbles', description: 'cherry, lemon and dry cotton notes', type: 'pink', price: 12, rates: [4.6] }),
    
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
