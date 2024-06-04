import mongoose from 'mongoose';
import { Point, Market, Hour } from '.' // Adjust this path if necessary

mongoose.connect('mongodb://localhost:27017/project')
    
    .then(() => {
        const point20 = new Point({ type: 'Point', coordinates: [41.403099, 2.203008] });

        return Promise.all([
            Market.create({
                title: 'All Day & Night Bilbao',
                address: 'Calle Bilbao, 30',
                location: point20,
                wines: [
                    '66537c8942940b230f03ca2b',
                    '66537c8942940b230f03ca29',
                    '66537c8942940b230f03ca2a'
                ],
                hours: [
                    { day: 'Monday', open: '09:00', close: '4:00' },
                    { day: 'Tuesday', open: '09:00', close: '4:00' },
                    { day: 'Wednesday', open: '09:00', close: '4:00' },
                    { day: 'Thursday', open: '09:00', close: '4:00' },
                    { day: 'Friday', open: '09:00', close: '4:00' },
                    { day: 'Saturday', open: '09:00', close: '4:00' },
                   
                ]
            })
            
        ])
    })

    .then(() => mongoose.disconnect())
    .then(() => console.log('populated'))
    .catch(console.error)