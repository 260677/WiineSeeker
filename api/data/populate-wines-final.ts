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
            Wine.create({ image: `https://images2.imgbox.com/21/5a/B00ORksW_o.png`, title: 'Busca Raons', description: '"Costers del Segre, fruity and floral notes"', type: 'pink', price: 7.99, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/5f/e9/OK8Gy1Is_o.png`, title: 'Homenaje', description: '"Navarra, fresh and vibrant, pink flowers notes. Perfect to enjoy with light cheeses"', type: 'pink', price: 4.39, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, title: 'Raimat Clamor', description: '"Young and fresh, typicall from Costers del Segre, cherry notes"', type: 'red', price: 6.45, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/65/db/WMzEztf6_o.png`, title: 'Matinada Montsant', description: '"Garnacha and Syrah, strong, woody flavour"', type: 'red', price: 4.75, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/65/db/WMzEztf6_o.png`, title: 'Matinada Montsant', description: '"Garnacha and Syrah, strong, woody flavour"', type: 'red', price: 6.99, rates: [3.5] }),
            Wine.create({ image: `https://images2.imgbox.com/49/79/ijYiqEjW_o.png`, title: 'Cop de Ma', description: '"Tinto jove, cherry and mineral notes"', type: 'red', price: 3.89, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/15/a1/rYIixUfV_o.png`, title: 'Montsant Caminos del Vent', description: '"Cherry, red fruits and flowers. Balanced,ideal with cheeses and grilled meat"', type: 'red', price: 4.95, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/0c/57/PefhlbJ5_o.png`, title: 'Ribera del Duero Tonteo', description: '"6 months in french roble, strong and balanced, cherry and mineral notes"', type: 'red', price: 6.29, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/de/15/Rn50maQr_o.png`, title: 'Mucho Mas', description: '"Teampranillo and Syrah, vanilla and cherry notes. Perfect with strong cheeses"', type: 'red', price: 5.59, rates: [3.6] }),
            Wine.create({ image: `https://images2.imgbox.com/1a/26/SNTvzuIf_o.png`, title: 'Perro Flaco Campo de Borja', description: '"Garnacha joven, fruity and floral notes"', type: 'red', price: 4.95, rates: [3.6] }),
            Wine.create({ image: `https://images2.imgbox.com/68/8d/IDqtKX0J_o.png`, title: 'Ribera del Duero Celeste', description: '"Six months french oak, strong and balanced, cherry notes. Perfect to enjoy with strong cheeses or meat"', type: 'red', price: 9.35, rates: [4.8] }),
            Wine.create({ image: `https://images2.imgbox.com/6c/f3/8kAtsaVz_o.png`, title: 'Secrets de Mar', description: 'Terra Alta, yong wine but balanced, typical Mediterranean, to go with cheese, light meal', type: 'red', price: 7.65, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/79/a7/BFIdYiOq_o.png`, title: 'Terra Baixa', description: '"Tempranillo suave, tinto joven, cherry and wood notes"', type: 'red', price: 3.25, rates: [3.1] }),
            Wine.create({ image: `https://images2.imgbox.com/3f/bc/kl7kQw6n_o.png`, title: 'Priorat Bruixola', description: '"Strong and balanced, one year oak, cherry notes, perfect for all ocasions" ', type: 'red', price: 14.99, rates: [4.9] }),
            Wine.create({ image: `https://images2.imgbox.com/be/d5/fXAyVKwP_o.png`, title: 'Verdejo Molongo', description: '"Fresh verdejo, fruity and balaced. Perfect with all sorts of fish"', type: 'white', price: 4.99, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/1c/46/X1w6yWOS_o.png`, title: 'El Xitxarel.lo', description: '"100% xarel.lo, fruity and floral notes"', type: 'white', price: 10.95, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/49/74/E5RihHbU_o.png`, title: 'Aguja Blanc Pescador', description: '"Macabeo 60% Parellada 20% Xarel·lo 20%, fresh and vibrant"', type: 'white', price: 4.25, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/3f/10/ZDgxW2JO_o.png`, title: 'Protos', description: '"Three months french oak, 100% verdejo, fresh and vibrant"', type: 'white', price: 7.65, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/c0/c5/BMrsipYs_o.png`, title: 'Masia Freye', description: '"Penedés joven, white flowers note"', type: 'white', price: 8.19, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/29/19/FDUBM2eL_o.png`, title: 'Albariño Terras Gauda', description: '"Rías Baixas, vibrant and balanced white wine, perfect with fish and strong cheeses"', type: 'white', price: 15.75, rates: [4.9] }),
            Wine.create({ image: `https://images2.imgbox.com/5f/9c/LXhzOkeR_o.png`, title: 'Sommos Gewurztraminer', description: '"Mineral, strong and balanced"', type: 'white', price: 10.05, rates: [4.9] }),
            Wine.create({ image: `https://images2.imgbox.com/a7/8e/C9oLqn2Q_o.png`, title: 'Mrs. Viu Sauvigñon', description: '"White flowers and cotton notes, lingering, balanced"', type: 'white', price: 3.49, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/8d/66/LrYG3ZUd_o.png`, title: 'Cabernet Sauvigñon Agramond', description: '"Cabernet Sauvignon 85% Merlot 15%, cherry notes, fresh and vibrant"', type: 'pink', price: 6.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/15/63/lEGKp0KT_o.png`, title: 'Vino Rosado Eloqüent', description: '"Penedés, mediterranean, fruity and vibrant"', type: 'pink', price: 5.49, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/aa/2f/6thkS75G_o.png`, title: 'Raimat Abadia', description: '"Cabernet Sauvignon and Tempranillo, Costers del Segre, balanced and tasty, chrry notes"', type: 'pink', price: 7.95, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/de/44/tsnoXTny_o.png`, title: 'K Que Si Rosado Rioja', description: '"Garnacha Tinta joven, pink flowers note"', type: 'pink', price: 3.89, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/02/68/ZQwgBIwj_o.png`, title: 'Viña Albani', description: '"Frizzante, cherry note, vibrant"', type: 'pink', price: 4.99, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/f6/0f/316N9bpz_o.png`, title: 'Bobal para Pecar', description: '"Cherry and wildbrries notes, fruity, lingering taste. Ideal for: rice, meat, cheeses"', type: 'red', price: 2.90, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/a4/30/DM1OqPRh_o.png`, title: 'Coto de Imaz', description: '"Rioja Temapranillo, 18 months wine barrel(french oak). Strong, full body"', type: 'white', price: 8.60, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/54/04/GG6LXWnj_o.png`, title: 'D.O. Montsant Racó del Convent', description: '"Ruby red, fruity and mineral notes. Ideal with strong cheeses"', type: 'white', price: 4.20, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/45/28/j08WAHHP_o.png`, title: 'D.O. Priorat Arc de Pedra', description: '"Cherry, red fruits and spicies. Balanced and elegant. Ideal with jamón, cheeses and grilled meat"', type: 'red', price: 8.5, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/c7/ac/hBiwcbcl_o.png`, title: 'Ribera del Duero 13 Hectáreas', description: '"6 months in french roble, woody and wildberries notes, strong. Perfect with curated cheeses, ham, meat"', type: 'red', price: 5.25, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/a3/a0/mkupXkS3_o.png`, title: 'The GuvNor', description: '"Teampranillo, vanilla and cherry notes. Perfect with blue cheese"', type: 'red', price: 2.85, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/a3/a0/mkupXkS3_o.png`, title: 'The GuvNor', description: '"Teampranillo, vanilla and cherry notes. Perfect with blue cheese"', type: 'red', price: 6.5, rates: [3.4] }),
            Wine.create({ image: `https://images2.imgbox.com/03/0b/luyKxzz8_o.png`, title: 'Albariño Pazo de Orantes', description: '"Fresh albariño, white flowers and fruit notes, balanced"', type: 'white', price: 6, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/1b/43/C3VpR50y_o.png`, title: 'Gewürztraminer Mar de Uvas', description: '"Three months french oak, white flowers and fruits, strong, balanced. Perfect to enjoy with light cheeses"', type: 'white', price: 4.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/0b/99/vWwsEXMk_o.png`, title: 'Alicia en el país de las uvas', description: '"Suave y goloso, cherry and blueberry notes"', type: 'pink', price: 2.25, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/ef/76/1LjCXCcA_o.png`, title: 'D.O Rioja Arteso Clarete', description: '"Pink flowers, lemon and sweet cotton notes"', type: 'pink', price: 3.25, rates: [3.3] }),
            Wine.create({ image: `https://images2.imgbox.com/03/ae/QesoJVcc_o.png`, title: 'Gamellón', description: '"DO Jumilla, Monastrell grapes, structured and balanced, wood notes, perfect with meat"', type: 'red', price: 3.45, rates: [3.8] }),
            Wine.create({ image: `https://images2.imgbox.com/da/94/RbYBr2LL_o.png`, title: 'Faustino Reserva', description: '"Rioja Reserva, floral and balanced, rich and complex"', type: 'red', price: 8.5, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/8c/54/qVAccZ78_o.png`, title: 'Portia', description: '"Ribeira del Duero, six months french oak, lingering and complex, perfect with stron chesses"', type: 'red', price: 6.99, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/f5/09/Tsymnkit_o.png`, title: 'Volaverunt', description: '"Garnacha, Tempranillo, Merlot and Cabernet. Rich but fresh, well structured"', type: 'red', price: 5.90, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/62/7d/BqSh9Opg_o.png`, title: 'Vegas del Pas Verdejo', description: '"100% Verdejo, fresh, potent, citric nottes"', type: 'white', price: 4.90, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/8d/1a/aqCvXzE2_o.png`, title: 'La Estrella Reserva', description: '"DO Rioja. Fresh and fruity, blackberries, black olives and ciruela"', type: 'red', price: 6.90, rates: [4.2] }),
            Wine.create({ image: `https://images2.imgbox.com/dc/7e/uTpnlAge_o.png`, title: 'Tabagonia', description: '"Albariño, fresh, fruity and balaced. Perfect with all sorts of fish"', type: 'white', price: 9.90, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/37/3b/r2uuPvgK_o.png`, title: 'La Bien Pintá', description: '"Fresh, and balanced, well structured. Verdejo 100%"', type: 'white', price: 3.5, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/3b/70/CpFSSq23_o.png`, title: 'Hachón Sauvignon Blanc', description: '"Fresh, and balanced, well structured. Verdejo 100%"', type: 'white', price: 3.5, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/76/61/AtyJhUyi_o.png`, title: 'Neo', description: '"Ribeira del Duero, intense, floral, wild berries"', type: 'red', price: 12, rates: [4.5] }),

        ])

    )

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)
