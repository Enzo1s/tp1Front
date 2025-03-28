import {APIProvider, Map, Marker} from '@vis.gl/react-google-maps';
import React from 'react'
import { API_KEY_GOOGLE_MAP } from '../constants/keys'

const MapRender = ({position}) => {
  return (
    <APIProvider apiKey={API_KEY_GOOGLE_MAP}>
    <Map zoom={12} center={position}>
      <Marker position={position} />
    </Map>
  </APIProvider>
  )
}

export default MapRender