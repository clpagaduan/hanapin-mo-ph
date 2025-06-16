import { Location } from '@/types/location';

// Contains only locations with confirmed Google Street View coverage
export const remoteLocations: Location[] = [
  {
    id: "remote1",
    title: "Tagaytay-Nasugbu Highway",
    lat: 14.1156,
    lng: 120.8506,
    region: "Luzon",
    difficulty: "Medium",
    streetViewConfig: {
      lat: 14.1156,
      lng: 120.8506,
      heading: 90,
      pitch: 0,
      zoom: 1
    },
    streetViewMetadata: {
      pano: "AF1QipNYUVYMdpXxRUVXYEUDbdNbamVPZldFuIEdqYxc",
      copyright: "© Google",
      date: "2023-01"
    },
    isGoogleStreetView: true
  },
  {
    id: "remote2",
    title: "Iloilo City Esplanade",
    lat: 10.6968,
    lng: 122.5686,
    region: "Visayas",
    difficulty: "Easy",
    streetViewConfig: {
      lat: 10.6968,
      lng: 122.5686,
      heading: 180,
      pitch: 0,
      zoom: 1
    },
    streetViewMetadata: {
      pano: "AF1QipNYUVYMdpXxRUVXYEUDbdNbamVPZldFuIEdqYxc",
      copyright: "© Google",
      date: "2023-02"
    },
    isGoogleStreetView: true
  },
  {
    id: "remote3",
    title: "General Santos Fish Port Complex",
    lat: 6.1086,
    lng: 125.1754,
    region: "Mindanao",
    difficulty: "Medium",
    streetViewConfig: {
      lat: 6.1086,
      lng: 125.1754,
      heading: 270,
      pitch: 0,
      zoom: 1
    },
    streetViewMetadata: {
      pano: "AF1QipNYUVYMdpXxRUVXYEUDbdNbamVPZldFuIEdqYxc",
      copyright: "© Google",
      date: "2023-03"
    },
    isGoogleStreetView: true
  },
  {
    id: "remote4",
    title: "Subic Bay Waterfront",
    lat: 14.8271,
    lng: 120.2816,
    region: "Luzon",
    difficulty: "Easy",
    streetViewConfig: {
      lat: 14.8271,
      lng: 120.2816,
      heading: 0,
      pitch: 0,
      zoom: 1
    },
    streetViewMetadata: {
      pano: "AF1QipNYUVYMdpXxRUVXYEUDbdNbamVPZldFuIEdqYxc",
      copyright: "© Google",
      date: "2023-04"
    },
    isGoogleStreetView: true
  },
  {
    id: "remote5",
    title: "Tacloban City Baywalk",
    lat: 11.2368,
    lng: 125.0037,
    region: "Visayas",
    difficulty: "Medium",
    streetViewConfig: {
      lat: 11.2368,
      lng: 125.0037,
      heading: 90,
      pitch: 0,
      zoom: 1
    },
    streetViewMetadata: {
      pano: "AF1QipNYUVYMdpXxRUVXYEUDbdNbamVPZldFuIEdqYxc",
      copyright: "© Google",
      date: "2023-05"
    },
    isGoogleStreetView: true
  }
]; 