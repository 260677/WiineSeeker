// @ts-nocheck
import mongoose from 'mongoose'

import { User } from '.'

mongoose.connect('mongodb://localhost:27017/project')
    .then(() => User.deleteMany())
        .then(() =>
            Promise.all([
            User.create({ name: 'Malu Gomes', email: 'malu@mac.com', password: '123malu123'}),
            User.create({ name: 'Bia Machado', email: 'bia@mac.com', password: '123bia123'}),
            User.create({ name: 'Carol Machado', email: 'carol@mac.com', password: '123carol123'}),
            User.create({ name: 'Samuel Machado', email: 'samuel@mac.com', password: '123samuel123'}),
            User.create({ name: 'Luiz Machado', email: 'luiz@mac.com', password: '123luiz123'})
            ])
        )
        .then(() => mongoose.disconnect())
        .then(() => console.log('populated'))
        .catch(console.error)


    


  
    


