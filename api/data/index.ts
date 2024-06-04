// __@ts-nocheck
import mongoose, { ObjectId } from 'mongoose'
const { Schema, model } = mongoose
const { Types: { ObjectId } } = Schema

type UserType = {
    name: string
    email: string
    password: string
}

const user = new Schema<UserType> ({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

type ReviewType = {
    user: ObjectId
    comment: string
    createdAt: Date
}

const review = new Schema<ReviewType>({
    user: {
        type: ObjectId,
        required: true,
        ref: 'User'
    },
    comment: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,
      },
})

type WineType = {
    image: string,
    title: string,
    description: string,
    type: 'red' | 'white' | 'pink',
    price: number,
    rates: number[],
    averageRating: number,
    comments: ObjectId[]
}

const wine = new Schema<WineType>({
    image: {
        type: String,
        required: true,
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: false,
        enum: ['red', 'white', 'pink']
    },
    price: {
        type: Number,
        required: true,
        min: 0
    },
    rates: {
        type: [Number],
        default: [],
    },
    averageRating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5 
    },
    comments: {
        type: [ObjectId],
        ref: 'Review',
        default: [],
      }
})

type PointType = {
    type: 'Point'
    coordinates: [number, number]
}

const point = new Schema<PointType> ({
    type: {
        type: String,
        enum: ['Point'],
        required: true
    },
    coordinates: {
        type: [Number, Number],
        required: true
    }
})

type HourType = {
    day: string
    open: string
    close: string
  };
 
  const hour = new Schema<HourType> ({
    day: {
      type: String,
      required: true
    },
    open: {
      type: String,
      required: true
    },
    close: {
      type: String,
      required: true
    }
  })

type MarketType = {
    title: string
    address: string
    location: PointType
    wines: ObjectId[]
    hours: HourType[]
}

const market = new Schema<MarketType> ({
    title: {
        type: String,
        required: true
    }, 
    address: {
        type: String,
        required: true
    },
    location: {
        type: point,
        required: true,
        coordinates: { type: [Number], default: [0, 0] }
    },
    wines: [{
        type: ObjectId,
        ref: 'Wine'
    }],
    hours: {
        type: [hour],
        required: true
      }
})

market.index({ location: '2dsphere' })



const User = model<UserType>('User', user)
const Wine = model<WineType>('Wine', wine)
const Point = model<PointType>('Point', point)
const Market = model<MarketType>('Market', market)
const Review = model<ReviewType>('Review', review)
const Hour = model<HourType>('Hour', hour)


export {
    UserType,
    User,
    WineType,
    Wine,
    PointType,
    Point,
    Market,
    MarketType,
    ReviewType,
    Review,
    HourType,
    Hour
}





