// @ts-nocheck
import mongoose from 'mongoose'
import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/5d/38/b8n5TfpO_o.png`, title: 'Clot', description: '"Garnatxa negra, mazuelo, i syrah. Wood notes, balanced"', type: 'red', price: 2.95, rates: [3.5] }),
            Wine.create({ image: `https://images2.imgbox.com/7b/da/78AQYrwE_o.png`, title: 'Vent Del Mar', description: '"Garnatxa Negra, Syrah, Garnatxa Peluda i Garnatxa Tintorera. Ecologic wine from Terra Alta. Cherry notes"', type: 'red', price: 6.35, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/af/63/OcSccvC8_o.png`, title: 'Bover', description: '"Tinto jove, cherry and mineral notes"', type: 'red', price: 2.99, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/cc/33/WZBYW0fx_o.png`, title: 'Terra Endins', description: ' "Syrah i Garnatxa negra. Cherry, red fruits and flowers. Balanced,ideal with cheeses and grilled meat"', type: 'red', price: 5.95, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/31/96/HTr605lJ_o.png`, title: 'Tal com Raja', description: '"Six months in french roble, strong and balanced, cherry and mineral notes"', type: 'red', price: 6.65, rates: [4.3] }),
            Wine.create({ image: `https://images2.imgbox.com/fb/12/qJC6pJRf_o.png`, title: 'Alto Acin Rueda', description: '"100% Verdejo, fresh, white flowers and mineral notes"', type: 'white', price: 6.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/26/5f/vxuVydfQ_o.png`, title: 'Perro Verde Verdejo', description: '"Garnacha joven, fruity and floral notes"', type: 'white', price: 11.95, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/35/87/ccHyXt6B_o.png`, title: 'Gotim Blanc', description: '"DO Costers del Segre. 6 months french oak, strong and balanced, white flowers notes. Perfect to enjoy with strong cheeses or meat"', type: 'white', price: 6.95, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/1a/20/wBjhvhDp_o.png`, title: 'La Bestia Blanca', description: '"Empordà, yong wine but balanced, typical Mediterranean, to go with cheese, light meal"', type: 'white', price: 6.65, rates: [4.8] }),
            Wine.create({ image: `https://images2.imgbox.com/cf/70/D4D8dUsV_o.png`, title: 'Reforjat', description: '"Fresh, fruity and balaced. Perfect with all sorts of fish"', type: 'white', price: 5.95, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/4e/aa/CSZzljZP_o.png`, title: 'Masia Oliveda Rosado', description: '"100% Merlot, cherry notes, perfect for all ocasions. Balanced and vibrant"', type: 'pink', price: 4.79, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/e0/2e/MpPxJKqy_o.png`, title: 'El Follet', description: '"Ecologic pink wine. Fresh, vibrant, blueberry and cherry notes"', type: 'pink', price: 7.75, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/21/5a/B00ORksW_o.png`, title: 'Busca Raons', description: '"Costers del Segre, fruity and floral notes"', type: 'pink', price: 5.49, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/5f/e9/OK8Gy1Is_o.png`, title: 'Homenaje', description: '"Navarra, fresh and vibrant, pink flowers notes. Perfect to enjoy with light cheeses"', type: 'pink', price: 4.39, rates: [3.9] }),
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
