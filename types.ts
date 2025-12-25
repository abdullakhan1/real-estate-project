export interface Property {
  id: string;
  title: string;
  price: string;
  location: string;
  type: 'Residential' | 'Commercial' | 'Luxury' | 'Rental' | 'New Project';
  bedrooms: number;
  sqft: number;
  image: string;
  images: string[];
  status: 'Ready' | 'Under Construction';
  description: string;
  amenities: string[];
  coordinates: { lat: number; lng: number };
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
}

export enum PageRoute {
  HOME = '/',
  PROPERTIES = '/properties',
  PROPERTY_DETAIL = '/properties/:id',
  ABOUT = '/about',
  SERVICES = '/services',
  CONTACT = '/contact',
  BLOG = '/blog',
}