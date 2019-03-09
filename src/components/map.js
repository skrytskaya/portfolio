import React, { useEffect } from 'react'

const Map = () => {
  useEffect(() => {
    setTimeout(() => {
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2tyeXRza2F5YSIsImEiOiJjanN2MHB2c20wMjNtNDRuendmcTEwazB6In0.hQRpesDAzHlvghUNMywa5Q'
      const mapboxClient = mapboxSdk({ accessToken: mapboxgl.accessToken })
      const popup = new mapboxgl.Popup({ offset: 25 })
        .setText('Currently I am here.')
      mapboxClient.geocoding.forwardGeocode({
        query: 'Barcelona, Spain',
        autocomplete: false,
        limit: 1
      })
        .send()
        .then(function (response) {
          if (response && response.body && response.body.features && response.body.features.length) {
            const feature = response.body.features[0]
            const map = new mapboxgl.Map({
              container: 'map',
              style: 'mapbox://styles/mapbox/streets-v9',
              center: feature.center,
              zoom: 10
            })
            new mapboxgl.Marker()
              .setLngLat(feature.center)
              .setPopup(popup)
              .addTo(map)
          }
      })
    }, 100)
  }, [])
  const mapStyle = {
    // position: 'absolute',
    // bottom: '0',
    width: '100%',
    height: '40vh'
    // #marker {
    //   background-image: url('https://docs.mapbox.com/mapbox-gl-js/assets/washington-monument.jpg');
    //   background-size: cover;
    //   width: 50px;
    //   height: 50px;
    //   border-radius: 50%;
    //   cursor: pointer;
    //   }
       
    //   .mapboxgl-popup {
    //   max-width: 200px;
    //   }
  }
  return (
    <div style={mapStyle} id='map'></div>
  )
}

export default Map
