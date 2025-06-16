import * as dotenv from 'dotenv';
import fetch from 'node-fetch';
import { locations } from '../src/data/locations';
import * as fs from 'fs';
import { checkStreetViewMetadata } from './check-street-view';

// Load environment variables
dotenv.config({ path: '.env.local' });

const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY!;
const metadataBaseUrl = 'https://maps.googleapis.com/maps/api/streetview/metadata';

async function verifyStreetView() {
  console.log('Checking Street View coverage for all locations...\n');
  
  const results = [];
  
  for (const location of locations) {
    try {
      const metadata = await checkStreetViewMetadata(location.lat, location.lng);
      
      console.log(`Location: ${location.title}`);
      console.log(`Coordinates: ${location.lat}, ${location.lng}`);
      console.log(`Status: ${metadata.status}`);
      
      if (metadata.status === 'OK') {
        console.log(`Panorama ID: ${metadata.pano_id}`);
        console.log(`Date: ${metadata.date}`);
        console.log(`Copyright: ${metadata.copyright}`);
        console.log(`Is Google: ${metadata.copyright.toLowerCase().includes('google')}`);
        
        if (metadata.copyright.toLowerCase().includes('google')) {
          results.push({
            ...location,
            streetViewMetadata: {
              pano: metadata.pano_id,
              copyright: metadata.copyright,
              date: metadata.date
            },
            isGoogleStreetView: true
          });
        }
      }
      
      console.log('-------------------\n');
      
      // Add a small delay to avoid rate limiting
      await new Promise(resolve => setTimeout(resolve, 200));
      
    } catch (error) {
      console.error(`Error checking ${location.title}:`, error);
    }
  }
  
  // Write results to a file
  const outputPath = 'src/data/verified-locations.ts';
  
  const fileContent = `import { Location } from '@/types/location';

// Contains only locations with confirmed Google Street View coverage
export const locations: Location[] = ${JSON.stringify(results, null, 2)};`;
  
  fs.writeFileSync(outputPath, fileContent);
  
  console.log(`\nResults summary:`);
  console.log(`Total locations: ${locations.length}`);
  console.log(`Locations with Street View: ${results.length}`);
  console.log(`\nVerified locations have been saved to: ${outputPath}`);
}

verifyStreetView(); 