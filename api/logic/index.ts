// @ts-nocheck
import registerUser from './registerUser.ts';
import authenticateUser from './authenticateUser.ts';
import retrieveUser from './retrieveUser.ts';
import retrieveWines from './retrieveWines.ts';
import findWinesAndMarkets from './findWinesAndMarkets.ts';
import addNewRating from './addNewRating.ts';
import retrieveWineById from './retrieveWinebyId.ts';
import addNewReview from './addNewReview.ts';
import retrieveUserWithId from './retrieveUserWithId.ts';
import retrieveReviews from './retrieveReviews.ts';
import editReview from './editReview.ts';


const logic = {
    registerUser,
    authenticateUser,
    retrieveUser,
    retrieveWines,
    findWinesAndMarkets,
    addNewRating,
    retrieveWineById,
    addNewReview,
    retrieveReviews,
    retrieveUserWithId,
    editReview,
    
};

export default logic;