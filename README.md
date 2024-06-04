# WineSeeker Poblenou App

## Intro

WineSeeker is a wine searcher app developed with REACT abd Typescript focused mainly in supermarkets and small wine shops around Barcelona, right now especially centred in Poblenou. The search includes wine type (red, white or pink), price range, and a range of proximity defined by the user, up to 1KM. It also filters markets by their opening hours.

Wines are based also on a low - medium budget. So far the more expensive is 20 euros.

Throught the app, users can choose the best wine option near them, viewing the supermarket location in an map and the results of the search displayed under it. 

Once the user try the wine, they can leave a review from 1-5 and also a comment.

![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNTk1ejVheDhibXFzb29tZnVub3gwN3Q3d25pZ240YW03OHVjamNhbSZlcD12MV9naWZzX3NlYXJjaCZjdD1n/XukORs5yMW0Ao/giphy.gif)

## Functional Description

### Use Cases

- search a wine by type (red, white, rosé) 
- search a wine by price range
- search a wine by proximity
- filter markets by opening hour
- get as result the nearest wines that match the search (listed under the map)
- get the supermarkets and small shops that have the chosen option 
- choose one of the options that better suit the user's taste (listed under it)
- find the spuermarket or small shop address, description and market's location in the map 
- rate the wine
- review the wine

v0.1
- users can set the initial location that they wnat, in any point of the city, and keep the search from there
- evaluate market
- finally, evaluate the whole experience


## Technical Description

### Technologies

- JavaScript
- TypeScript
- React
- Express
- Node
- Tailwind
- Mongoose
- Leaflet (for the Map)
- Figma

### Data Model

User
- id (required)
- name (string, required)
- email (string, required)
- password (string, required)

Wine
- id (required)
- image (string, required)
- title (string, required)
- description (string, required)
- type (string, required, enum: red|white|rose)
- price (number, required)
- rate (number, required, enum: 1|2|3|4|5)
- average rating
- comments (string, optional)

Point
- coordinates (number, required)

Market
- id (required)
- title (string, required)
- address (string, required)
- location (PointType)
- wines (WineType)
- hours (HourType)

Hours
- day (string, required)
- open (string, required)
- close (string, required)


Review
- user (User.id, required)
- comment (Wine.comment)
- date (date, required)



