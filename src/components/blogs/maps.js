import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function MapsBlog() {
  return (
    <div className="blog-page css">
      <h1 className="blog-header one">Having a good ol' time with Map APIs</h1>
      <p className="blog-text">September 17, 2020 | 9 min</p>

      <div className="blog-links">
        <AnchorLink offset={() => 104} href="#geolocation">{`Geolocation`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#geocode">{`GeoCode`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#leaflet">{`Leaflet`}</AnchorLink>
      </div>

      <p className="blog-text">How to implement Geolocation, Google Geocode API, Leaflet Map API, and Google Directions API in just React Frontend</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/project-images/curbalert/curbalert01.jpg" alt="Curbalert Application demonstrating Google Directions on Leaflet Map." />
      </div>

      <p className="blog-text">Perhaps the most functionally useful of the personal projects I've created is Curbalert, an application meant for users to post unwanted but useful items onto a public map. "One person's trash is another person's treasure" sums it up quite nicely.</p>

      <p className="blog-text">So if a person is moving to a new house and can't take their good condition couch with them, they place it on the curb or their stoop. The mover or a passerby can take a picture, post the item in Curbalert, and instantly other users will be able to see the exact location on a map and get directions to the item from the user's location.Pretty useful if you're living in a big city, because things like great furniture get wasted all the time.</p>

      <p className="blog-text">But how do we get the map working? For my project, I used Geolocation API, Google Geocode API, Leaflet Map API, and Google Directions API.</p>

      <p className="blog-text">Leaflet Map API is a free, open source JavaScript library with a lot of functionality for markers, popups, with different plugins for map styling as well. There's a React library named react-leaflet, so just install and import the components to get it going. DOCS will explain most of it.</p>

      <p className="blog-text">Leaflet was a no brainer for me since Google charges money for use of their APIs, even though they give a $300 starter credit. What I did not know was Google Directions API requires the use of their own Google Map API, and isn't meant to be used with anything else, like Leaflet. I discovered this when I ran into a constant CORS issue after implementing Google Directions. Not even calling from backend could get around it. Since I had already based most of my map code around the Leaflet Map, I didn't want to rewrite everything for a Google Map doing the same thing.</p>

      <p className="blog-text">I settled for a patch up job, sending the Google Directions fetch through a CORS-Anywhere API to dodge the dreaded CORS policy.</p>

      <p className="blog-text">Google Maps is actually just as simple to implement, if not slightly more convenient, as Leaflet API. But from here on, I will be explaining how to use Leaflet with Google Directions.</p>

      <p id="geolocation" className="blog-text">First thing your app needs to do is retrieve the coordinates of the user, and for this we use Geolocation, a free and publicly available JS API. For privacy, users will be prompted to approve or decline the usage of this API, but this data will be vital to the rest of your map functions. Without this key data, your map will not have a location to center on, it will not able to draw directions, and will not be able to retrieve any addresses.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/geolocation.png" alt="Code for running Geolocation." />
      </div>

      <p className="blog-text">The function <span className="blog-text code span">fetchLocation</span> calls the Geolocation API with <span className="blog-text code span">navigator.geolocation.getCurrentPosition</span>. When the response is ready, <span className="blog-text code span">fetchLocation</span> will call <span className="blog-text code span">geolocationCallback</span>, returning a position object with latitude & longitude coordinates, which you can store in a state.</p>

      <p id="geocode"className="blog-text">These coordinates don't mean much outside of the code however. User's have no idea what a bunch of numbers with decimals mean. So, to translate these coordinates into familiar and user-friendly addresses, our code needs to fetch from Google's GeoCode API. After storing the coordinates in state, <span className="blog-text code span">geolocationCallback</span> makes a call to <span className="blog-text code span">geoCodeLocation function</span>.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/geocode.png" alt="Code for running Google Geocode." />
      </div>

      <p className="blog-text">Google GeoCode takes latitude, longitude, and the Google API key as parameters, returning an object filled with address values. These values can be stored in state to be used as well. In my project, I passed these values to the POST form, automagically filling out the address inputs allowing users to skip this step when creating a post.</p>

      <p className="blog-text">From the user's perspective, they will login, approve of Geolocation usage, and when making a post, will already have the required address inputs filled out. Anyone walking around will not immediately know their address location unless they opened Google maps, and since this application was meant to be used while on the move, I wanted to make everything as convenient as possible.</p>

      <p id="leaflet" className="blog-text">To set up the Leaflet map, just import all the components.</p>

      <p className="blog-text code p">import {`{ Map, TileLayer, Marker, Popup, Polyline }`} from 'react-leaflet'</p>

      <p className="blog-text">Map is the base component and will be the main wrapper for every other Leaflet component. There are a number of properties, but the most important to have are <span className="blog-text code span">center</span> and <span className="blog-text code span">zoom</span>. Pass a latitude/longitude value to <span className="blog-text code span">center</span> and the map will focus on that point to start. <span className="blog-text code span">zoom</span> only requires a number and determines how far or close the map should zoom onto the point passed to <span className="blog-text code span">center</span>. You should also give Map a <span className="blog-text code span">className</span> directly to style its dimensions</p>

      <p className="blog-text">Tilelayer comes next, which creates the map itself using layers. This component provides the entire look and feel of the map, and can be customized for different styles.</p>

      <p className="blog-text">Marker is for pinpointing any object on the map you want to signify and the most basic property to have is <span className="blog-text code span">position</span>, a latitude/longitude of the object you are trying to display on the map. The marker is also customizable with the <span className="blog-text code span">icon</span> property. This icon takes a specific format to replace Leaflet's default, but here's the code to do it using an HTML icon from Font Awesome:</p>

      <div className="blog-text code block">
        <p>Include Font Awesome's header in the head of your HTML:</p>
        <p>{`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" crossorigin="anonymous">`}</p>
        <p className="blog-text code nospace">{`const pinU = renderToStaticMarkup(<i id="user" className="fas fa-map-pin"></i>)`}</p>
        <p>{`const pinUser = divIcon({ html: pinU });`}</p>

        <p>Then, in the Map component where you are rendering the Marker:</p>
        <p>{`<Marker icon={pinUser} position={position}>`}</p>
      </div>

      <p className="blog-text">Popup is a wrapper component that renders from the marker when the user interacts with the marker, through a click or a hover. Similar to Google maps, when you click a point and a box pops up with the address or rating of the location clicked. Popup is a simple wrapper, and all you need to do is write the HTML and style it to your liking.</p>

      <p className="blog-text">Last, Polyline is used for wrapping the Google Directions polyline after decoding.</p>

      <p className="blog-text"></p>

      <p className="blog-text"></p>

      <p className="blog-text"></p>

      <p className="blog-text"></p>

      <p className="blog-text"></p>

    </div>
  )
}