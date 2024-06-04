// @ts-nocheck
import mongoose from 'mongoose'
import { Wine } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => Wine.deleteMany())
        .then(() =>
            Promise.all([
            Wine.create({ image: `https://images2.imgbox.com/dd/94/DpvEjiXU_o.png`, title: 'Raimat Clamor', description: '"Young and fresh, typicall from Costers del Segre, cherry notes"', type: 'red', price: 6.45, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/65/db/WMzEztf6_o.png`, title: 'Matinada Montsant', description: '"Garnacha and Syrah, strong, woody flavour"', type: 'red', price: 4.75, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/49/79/ijYiqEjW_o.png`, title: 'Cop de Ma', description: '"Tinto jove, cherry and mineral notes"', type: 'red', price: 3.89, rates: [3.2] }),
            Wine.create({ image: `https://images2.imgbox.com/15/a1/rYIixUfV_o.png`, title: 'Montsant Caminos del Vent', description: '"Cherry, red fruits and flowers. Balanced,ideal with cheeses and grilled meat"', type: 'red', price: 4.95, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/0c/57/PefhlbJ5_o.png`, title: '"Ribera del Duero Tonteo', description: '6 months in french roble, strong and balanced, cherry and mineral notes"', type: 'red', price: 6.29, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/de/15/Rn50maQr_o.png`, title: 'Mucho Mas', description: '"Teampranillo and Syrah, vanilla and cherry notes. Perfect with strong cheeses"', type: 'red', price: 5.59, rates: [3.6] }),
            Wine.create({ image: `https://images2.imgbox.com/1a/26/SNTvzuIf_o.png`, title: 'Perro Flaco Campo de Borja', description: '"Garnacha joven, fruity and floral notes"', type: 'red', price: 4.95, rates: [3.6] }),
            Wine.create({ image: `https://images2.imgbox.com/68/8d/IDqtKX0J_o.png`, title: 'Ribera del Duero Celeste', description: '"Six months french oak, strong and balanced, cherry notes. Perfect to enjoy with strong cheeses or meat"', type: 'red', price: 9.35, rates: [4.8] }),
            Wine.create({ image: `https://images2.imgbox.com/6c/f3/8kAtsaVz_o.png`, title: 'Secrets de Mar', description: 'Terra Alta, yong wine but balanced, typical Mediterranean, to go with cheese, light meal', type: 'red', price: 7.65, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/79/a7/BFIdYiOq_o.png`, title: 'Terra Baixa', description: '"Tempranillo suave, tinto joven, cherry and wood notes"', type: 'red', price: 3.25, rates: [3.1] }),
            Wine.create({ image: `https://images2.imgbox.com/3f/bc/kl7kQw6n_o.png`, title: 'Priorat Bruixola', description: '"Strong and balanced, one year oak, cherry notes, perfect for all ocasions" ', type: 'red', price: 14.99, rates: [5] }),
            Wine.create({ image: `https://images2.imgbox.com/be/d5/fXAyVKwP_o.png`, title: 'Verdejo Molongo', description: '"Fresh verdejo, fruity and balaced. Perfect with all sorts of fish"', type: 'white', price: 4.99, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/1c/46/X1w6yWOS_o.png`, title: 'El Xitxarel.lo', description: '"100% xarel.lo, fruity and floral notes"', type: 'white', price: 10.95, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/49/74/E5RihHbU_o.png`, title: 'Aguja Blanc Pescador', description: '"Macabeo 60% Parellada 20% Xarel·lo 20%, fresh and vibrant"', type: 'white', price: 4.25, rates: [4.5] }),
            Wine.create({ image: `https://images2.imgbox.com/4b/8f/uZ9JHHts_o.png`, title: 'Rueda Perro Verde', description: '"100% Verdejo, fresh, white flowers and mineral notes"', type: 'white', price: 11.95, rates: [4.7] }),
            Wine.create({ image: `https://images2.imgbox.com/3f/10/ZDgxW2JO_o.png`, title: 'Protos', description: '"Three months french oak, 100% verdejo, fresh and vibrant"', type: 'white', price: 7.65, rates: [4.6] }),
            Wine.create({ image: `https://images2.imgbox.com/c0/c5/BMrsipYs_o.png`, title: 'Masia Freye', description: '"Penedés joven, white flowers note"', type: 'white', price: 8.19, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/29/19/FDUBM2eL_o.png`, title: 'Albariño Terras Gauda', description: '"Rías Baixas, vibrant and balanced white wine, perfect with fish and strong cheeses"', type: 'white', price: 15.75, rates: [4.9] }),
            Wine.create({ image: `https://images2.imgbox.com/5f/9c/LXhzOkeR_o.png`, title: '"Sommos Gewurztraminer" ', description: 'Mineral, strong and balanced', type: 'white', price: 10.05, rates: [4.9] }),
            Wine.create({ image: `https://images2.imgbox.com/a7/8e/C9oLqn2Q_o.png`, title: 'Mrs. Viu Sauvigñon', description: '"White flowers and cotton notes, lingering, balanced"', type: 'white', price: 3.49, rates: [3.7] }),
            Wine.create({ image: `https://images2.imgbox.com/8d/66/LrYG3ZUd_o.png`, title: 'Cabernet Sauvigñon Agramond', description: '"Cabernet Sauvignon 85% Merlot 15%, cherry notes, fresh and vibrant"', type: 'pink', price: 6.65, rates: [4.4] }),
            Wine.create({ image: `https://images2.imgbox.com/15/63/lEGKp0KT_o.png`, title: 'Vino Rosado Eloqüent', description: '"Penedés, mediterranean, fruity and vibrant"', type: 'pink', price: 5.49, rates: [4.1] }),
            Wine.create({ image: `https://images2.imgbox.com/aa/2f/6thkS75G_o.png`, title: 'Raimat Abadia', description: '"Cabernet Sauvignon and Tempranillo, Costers del Segre, balanced and tasty, chrry notes"', type: 'pink', price: 7.95, rates: [4] }),
            Wine.create({ image: `https://images2.imgbox.com/de/44/tsnoXTny_o.png`, title: 'K Que Si Rosado Rioja', description: '"Garnacha Tinta joven, pink flowers note"', type: 'pink', price: 3.89, rates: [3.9] }),
            Wine.create({ image: `https://images2.imgbox.com/02/68/ZQwgBIwj_o.png`, title: 'Viña Albani', description: '"Frizzante, cherry note, vibrant"', type: 'pink', price: 4.99, rates: [3.8] })
            ])

        )

        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)
