import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

export default function MapsBlog() {
  return (
    <div className="blog-page css">
      <h1 className="blog-header one">Having a good ol' time with Map APIs</h1>
      <p className="blog-text">September 17, 2020 | 8 min</p>

      <div className="blog-links">
        <AnchorLink offset={() => 104} href="#geolocation">{`Geolocation`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#geocode">{`Geocode`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#leaflet">{`Leaflet`}</AnchorLink>
        <AnchorLink offset={() => 104} href="#directions">{`Directions`}</AnchorLink>
      </div>

      <p className="blog-text">How to implement Geolocation, Google Geocode API, Leaflet Map API, and Google Directions API in just React Frontend</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/map.png" alt="Leaflet Map rendering a marker" />
      </div>

      <p className="blog-text">Perhaps the most functionally useful of the personal projects I've created is Curbalert, an application meant for users to post images and details of perfectly good items other people are throwing away, with their locations all viewable on a public map. "One person's trash is another person's treasure" sums it up quite nicely.</p>

      <p className="blog-text">But how do we get the map working, you ask? Well, I've got you. For my project, I used Geolocation API, Google Geocode API, Leaflet Map API, and Google Directions API.</p>

      <p className="blog-text">You WILL need a Google Developer account which gives access to API keys in order to use Geocode API and Directions API. If you're lucky, Google will give free credits, enough to make a large number of requests required for testing.</p>

      <p className="blog-text">Leaflet Map API is a free, open-source JavaScript library with a lot of functionality for markers, popups, and different plugins for map styling as well. There is support for React named react-leaflet, but the DOCS will often resort to their JS counterpart. You'll have to do a little extra problem solving compared to other React libraries because of this, and I'll admit, the shallow documentation for React Leaflet was frustrating, and had me cursing God numerous times. Not in a good way.</p>

      <p className="blog-text">Just know that <span className="blog-text code span">useRef</span> hook will come in handy whenever you need to manipulate any specific element within the map.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/leafletvsgoogle.jpg" alt="Visual comparison of Leaflet and Google Map API." />
      </div>
      
      <p className="blog-text">Google Maps does the same stuff if not more, but isn't free, and is strictly JS without React component support.</p>

      <p className="blog-text">If you plan on using all Google APIs for Geolocation, Geocode, Map, and Directions, go ahead Richie Rich. Most of the code should work the same, but keep in mind, Geolocation makes a call every time your application runs. In addition, you will be doubling the amount of requests made to Google compared to my stack, and these can rack up costs. This is why I limited my Google requests to two APIs.</p>

      <p className="blog-text">I will note, if this project is intended to go beyond a personal project, use Google Map API instead of Leaflet because...</p>

      <p className="blog-text">Google Directions requires the use of their own Google Map API, and isn't meant to be used with anything else, like Leaflet. I discovered this when I ran into a constant CORS issue after implementing Google Directions. Not even placing the fetch from the backend will get around it. Another time I cursed God because this discovery meant I'd have to rewrite all my map code surrounding Leaflet Map to accommodate a Google Map, even though they accomplished the same thing.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/cors.png" alt="A coder's response about why there is a CORS issue with Google Directions and Leaflet." />
      </div>

      <p className="blog-text">So, I settled for a patch up job, sending the Google Directions fetch through a CORS-Anywhere API to dodge the dreaded/hated CORS policy. CORS-Anywhere works for any endpoint, and only requires you to prepend <span className="blog-text code span">https://cors-anywhere.herokuapp.com/</span> to the endpoint you are fetching from.</p>

      <p className="blog-text">So, suck on that, Google.</p>

      <p className="blog-text">Again, if money is no concern and you want your project to function beyond a personal pet project, go with Google Maps API. You will just need to finesse more JS functions.</p>

      <h2 id="geolocation" className="blog-header two">
        Geolocation
      </h2>

      <p className="blog-text">First thing your app needs to do is retrieve the coordinates of the user, and for this we use Geolocation, a free and publicly available JS API.</p>

      <p className="blog-text">For privacy, users will be prompted to approve or decline this functionality, so keep in mind that if the users decline, none of these map functions will work. Without location data, your map will be as silent as Charlie Chaplin with no location to center on, no points to draw directions to, and no addresses whatsoever.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/geolocation.png" alt="Code for running Geolocation." />
      </div>

      <p className="blog-text">The function <span className="blog-text code span">fetchLocation()</span> calls the Geolocation API with <span className="blog-text code span">navigator.geolocation.getCurrentPosition</span>. When the response is ready, we make a call to <span className="blog-text code span">geolocationCallback()</span>, returning an object with latitude & longitude coordinates which you can store in a state.</p>

      <h2 id="geocode" className="blog-header two">
        Google Geocode
      </h2>

      <p className="blog-text">These coordinates don't mean much outside of the code however. User's have no idea what a bunch of negative numbers with decimals mean. So, to translate these coordinates into familiar and user-friendly addresses, our code needs to fetch from Google Geocode API. To do this, <span className="blog-text code span">geolocationCallback()</span> finishes with a call to another function, <span className="blog-text code span">geoCodeLocation()</span>.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/geocode.png" alt="Code for running Google Geocode." />
      </div>

      <p className="blog-text">Google Geocode takes latitude, longitude, and the Google API key as parameters, returning an object filled with address values. These values can be useful, so be sure to save them in state for later use as well. In my project, I passed these values to the POST form, automagically filling out the address inputs allowing users to skip this step when creating a post.</p>

      <p className="blog-text">From the user's perspective, they will login, approve of Geolocation usage, and when making a post, will already have the required address inputs filled out. This makes the application more convenient to use, especially since it's meant to be used on the move.</p>

      <h2 id="leaflet" className="blog-header two">
        Leaflet Map
      </h2>

      <p className="blog-text">To set up the Leaflet map, make sure to <span className="blog-text code span">npm install react-leaflet</span>, then import all the necessary components.</p>

      <p className="blog-text code p">import {`{ Map, TileLayer, Marker, Popup, Polyline }`} from 'react-leaflet'</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/maprender.png" alt="Code for rendering complete Map." />
      </div>

      <p className="blog-text">Map is the base component and will be the main wrapper for every other Leaflet component. There are a number of properties, but the most important to have are <span className="blog-text code span">center</span> and <span className="blog-text code span">zoom</span>. Pass a latitude/longitude value to <span className="blog-text code span">center</span> and the map will focus on that point when the map is rendered. <span className="blog-text code span">zoom</span> only requires a number between 1 to 30 and determines how far or close the map should zoom onto the point previously passed to <span className="blog-text code span">center</span>. 15 works best in my opinion. You should also give Map a <span className="blog-text code span">className</span> to style its dimensions.</p>

      <p className="blog-text">Tilelayer comes next, which creates the map itself using layers. This component provides the entire look and feel of the map, and can be customized for different styles.</p>

      <p className="blog-text">Marker is for pinpointing any object on the map you want to signify and the most basic property to have is <span className="blog-text code span">position</span>, a latitude/longitude of the object you are trying to display on the map. The marker is also customizable with the <span className="blog-text code span">icon</span> property. This icon takes a specific format to replace Leaflet's default, but here's the code to do it using an HTML icon from Font Awesome:</p>

      <div className="blog-text code block">
        <p>Include Font Awesome's header in the head of your HTML:</p>
        <p>{`<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.3.1/css/all.css" crossorigin="anonymous">`}</p>
        <p>Outside of your return, create the variable for the icon:</p>
        <p className="blog-text code nospace">{`const pinU = renderToStaticMarkup(<i id="user" className="fas fa-map-pin"></i>)`}</p>
        <p>{`const pin = divIcon({ html: pinU });`}</p>

        <p>Then, in the Map component where you are rendering the Marker, pass the pin to the icon prop:</p>
        <p className="blog-text code nospace">{`<Marker icon={pin} position={position}>`}</p>
      </div>

      <p className="blog-text">Popup is a wrapper component that renders from the marker when the user interacts with the marker, through a click or a hover. Similar to Google maps, when you click a point and a box pops up with the address or rating of the location clicked. Popup is a simple wrapper, and all you need to do is write the HTML and style it to your liking.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/project-images/curbalert/curbalert01.jpg" alt="Curbalert Application demonstrating Popups on Leaflet Map." />
      </div>

      <p className="blog-text">If you wanted to do more things with the marker, like activate its popup when an element outside of the map is clicked, use <span className="blog-text code span">useRef</span> hook to select it. As previously mentioned, <span className="blog-text code span">useRef</span> should be used whenever a map element in Leaflet needs to be selected.</p>

      <p className="blog-text">Lastly, a polyline is the line drawn on the map between two points, usually seen in Google Maps when viewing directions. Polyline component is used for wrapping the Google Directions polyline after decoding, which takes a <span className="blog-text code span">positions</span> property. This one will have to be obtained from decoding the polyline provided by Google Directions API response object.</p>

      <p className="blog-text">The user coordinates retrieved from Geolocation saved in state can be passed to the <span className="blog-text code span">center</span> property in Map component and the <span className="blog-text code span">position</span> property in Marker component. This will center the map on the marker of your user.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/center.png" alt="Map with marker centered on map." />
      </div>

      <p className="blog-text">When creating a post, the form should submit the address and coordinates from state previously retrieved from Geolocation and Geocode to persist in the backend. Then you can simply write a render function mapping each object's coordinates key into the position prop of a Marker component.</p>

      <h2 id="directions" className="blog-header two">
        Google Directions
      </h2>

      <p className="blog-text">With the user and object coordinates, you have everything you need to implement Google Directions. For Curbalert, every item has a button with an onClick that calls a function, <span className="blog-text code span">fetchDirections()</span>.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/fetchDirections.png" alt="fetchDirections function." />
      </div>

      <p className="blog-text"><span className="blog-text code span">fetchDirections()</span> has three vital parts. Importing a function from an npm package <span className="blog-text code span">polyline-encoded</span>, making a call to Geolocation API again, and finally the fetch from Google Directions.</p>

      <p className="blog-text"><span className="blog-text code span">polyUtil</span> from <span className="blog-text code span">polyline-encoded</span> has no React support, so you will be using a basic node require. Gross, right? This is required to decode the polyline code provided from the Google Directions response. Again, the polyline is the blue line connecting every step of the given directions between the user and the destination.</p>
      
      <p className="blog-text">Geolocation is called again to update the user's location since the initial Geolocation call was way back when the user first logged in. If the user had been consistently walking, their location will have most likely changed, so we should update this data.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/directions.png" alt="directionsCall function." />
      </div>

      <p className="blog-text">Finally, our function <span className="blog-text code span">fetchDirections()</span> makes the fetch request from Google Directions API with <span className="blog-text code span">directionsCall()</span>.</p>

      <p className="blog-text">You may also notice there are two endpoints to fetch from. This is because Google Directions allows for very specific modes of public transportation when deciding directions. Since I only wanted to account for subway within public transport, <span className="blog-text code span">transitUrl</span> includes a specific parameter <span className="blog-text code span">transit_mode=subway</span>.</p>

      <p className="blog-text">Meanwhile, <span className="blog-text code span">allUrl</span> can take care of walking, biking, or automobile, interpolated from the <span className="blog-text code span">mode</span> prop. This is also where I attach the CORS-Anywhere API to bypass CORS policy.</p>

      <p className="blog-text">Down below in the fetch, <span className="blog-text code span">object.routes[0].overview_polyline.points</span> is the exact path to the polyline from the Directions response object, and is saved to <span className="blog-text code span">encoded</span> variable. Then, <span className="blog-text code span">polyUtil.decode(encoded)</span> deciphers the polyline from <span className="blog-text code span">encoded</span>, saves to <span className="blog-text code span">polyline</span> variable, and finally saved to state. The specific direction steps themselves are saved to <span className="blog-text code span">route</span> in state to be used later.</p>

      <p className="blog-text">Then, the only thing you need to render this polyline in your Map is the Polyline component previously imported. I include a condition to render the Polyline component only when there is a decoded polyline saved in state.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/polyline.png" alt="Code for polyline component in Map component" />
      </div>

      <p className="blog-text">Google Directions is a masterpiece of technology. The Directions data is abundant with information, and is generated dynamically for any two coordinates, all within less than a second. The response JSON even includes HTML to help easily render steps, and all you need to do is render them appropriately into Marker and Popups. Truly a marvel of modern software.</p>

      <div className="blog-image">
        <img className="blog-image__img" src="/images/blog-images/maps/directionsapi.jpg" alt="Console log of Google Directions response object." />
      </div>

      <p className="blog-text">If anyone has paid any attention here, all we've done is utilize the software and technology already created by other brilliant minds.</p>

    </div>
  )
}