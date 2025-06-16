import { locations } from '../src/data/locations';
import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import 'dotenv/config';

dotenv.config({ path: '.env.local' });

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
const metadataBaseUrl = 'https://maps.googleapis.com/maps/api/streetview/metadata';

interface StreetViewMetadata {
  status: string;
  copyright: string;
  date: string;
  pano_id: string;
  location: {
    lat: number;
    lng: number;
  };
}

interface StreetViewResponse {
  status: string;
  copyright?: string;
  date?: string;
  location?: {
    lat: number;
    lng: number;
  };
}

interface Location {
  title: string;
  lat: number;
  lng: number;
}

async function checkStreetView(location: Location) {
  const { lat, lng, title } = location;
  const url = `https://maps.googleapis.com/maps/api/streetview/metadata?location=${lat},${lng}&key=${apiKey}`;
  
  try {
    const response = await fetch(url);
    const data = await response.json() as StreetViewResponse;
    return {
      title,
      lat,
      lng,
      status: data.status,
      available: data.status === 'OK'
    };
  } catch (error) {
    return {
      title,
      lat,
      lng,
      status: 'ERROR',
      available: false
    };
  }
}

export async function checkStreetViewMetadata(lat: number, lng: number): Promise<StreetViewMetadata> {
  const url = `${metadataBaseUrl}?location=${lat},${lng}&key=${apiKey}`;
  const response = await fetch(url);
  return response.json() as Promise<StreetViewMetadata>;
}

async function main() {
  console.log('Checking Street View availability...\n');
  
  const results = await Promise.all(locations.map(checkStreetView));
  
  console.log('Locations without Street View coverage:');
  console.log('=====================================');
  const unavailable = results.filter(r => !r.available);
  unavailable.forEach(loc => {
    console.log(`${loc.title} (${loc.lat}, ${loc.lng}) - Status: ${loc.status}`);
  });
  
  console.log('\nLocations with Street View coverage:');
  console.log('=====================================');
  const available = results.filter(r => r.available);
  available.forEach(loc => {
    console.log(`${loc.title} (${loc.lat}, ${loc.lng})`);
  });
  
  console.log('\nSummary:');
  console.log(`Total locations: ${results.length}`);
  console.log(`Available: ${available.length}`);
  console.log(`Unavailable: ${unavailable.length}`);
}

main().catch(console.error); 