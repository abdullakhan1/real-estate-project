import { Property, Testimonial, BlogPost } from './types';

export const PROPERTIES: Property[] = [
  {
    id: '1',
    title: 'Sea-View Luxury Apartment',
    price: '₹4.2 Cr',
    location: 'Worli, Mumbai',
    type: 'Luxury',
    bedrooms: 3,
    sqft: 1850,
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?q=80&w=2070&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&w=1974&auto=format&fit=crop'
    ],
    status: 'Ready',
    description: 'Experience unparalleled luxury in this stunning 3BHK apartment offering panoramic views of the Arabian Sea. Features premium Italian marble flooring, a modular kitchen, and world-class amenities.',
    amenities: ['Swimming Pool', 'Gym', '24/7 Security', 'Parking', 'Sea View', 'Clubhouse'],
    coordinates: { lat: 19.0178, lng: 72.8478 }
  },
  {
    id: '2',
    title: 'Modern Office Space',
    price: '₹12.5 Cr',
    location: 'Bandra-Kurla Complex',
    type: 'Commercial',
    bedrooms: 0,
    sqft: 2500,
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=2069&auto=format&fit=crop'
    ],
    status: 'Ready',
    description: 'Premium grade A office space located in the heart of Mumbai\'s financial district. Fully furnished with conference rooms and high-speed internet infrastructure.',
    amenities: ['Central AC', 'Conference Room', 'Cafeteria', 'Valet Parking', 'High-speed Elevators'],
    coordinates: { lat: 19.0674, lng: 72.8686 }
  },
  {
    id: '3',
    title: 'Cozy Family Home',
    price: '₹2.8 Cr',
    location: 'Andheri West',
    type: 'Residential',
    bedrooms: 2,
    sqft: 1100,
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=2070&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&w=2071&auto=format&fit=crop'
    ],
    status: 'Ready',
    description: 'A perfect starter home for a small family. Located near Metro station and top schools. Features a spacious balcony and modern interiors.',
    amenities: ['Gated Community', 'Garden', 'Children Play Area', 'Intercom'],
    coordinates: { lat: 19.1136, lng: 72.8697 }
  },
  {
    id: '4',
    title: 'Skyline Penthouse',
    price: '₹15 Cr',
    location: 'Lower Parel',
    type: 'Luxury',
    bedrooms: 5,
    sqft: 4500,
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=2070&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop'
    ],
    status: 'Ready',
    description: 'The epitome of high-rise living. This penthouse spans two floors with a private terrace garden and jacuzzi.',
    amenities: ['Private Elevator', 'Terrace Garden', 'Jacuzzi', 'Concierge Service', 'Helipad Access'],
    coordinates: { lat: 18.9977, lng: 72.8376 }
  },
  {
    id: '5',
    title: 'Green Valley Villas',
    price: '₹5.5 Cr',
    location: 'Navi Mumbai',
    type: 'New Project',
    bedrooms: 4,
    sqft: 3200,
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop',
    images: [
        'https://images.unsplash.com/photo-1613977257363-707ba9348227?q=80&w=2070&auto=format&fit=crop', 
        'https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=2070&auto=format&fit=crop'
    ],
    status: 'Under Construction',
    description: 'Spacious villas nestled in nature. Enjoy cleaner air and open spaces while being connected to the city.',
    amenities: ['Private Garden', 'Clubhouse', 'Jogging Track', 'Solar Power'],
    coordinates: { lat: 19.0330, lng: 73.0297 }
  },
  {
    id: '6',
    title: 'Studio Apartment',
    price: '₹85 L',
    location: 'Powai',
    type: 'Rental',
    bedrooms: 1,
    sqft: 550,
    image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2130&auto=format&fit=crop',
    images: ['https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=2130&auto=format&fit=crop'],
    status: 'Ready',
    description: 'Compact and efficient studio apartment ideal for working professionals. Close to Hiranandani Business Park.',
    amenities: ['Gym', 'Laundromat', 'Security', 'Lake View'],
    coordinates: { lat: 19.1176, lng: 72.9060 }
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    name: 'Rohit Mehta',
    role: 'IT Professional',
    content: 'Skyline Realtors helped us find our perfect Bandra apartment in just two weeks! Professional and transparent.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 2,
    name: 'Anjali Desai',
    role: 'Entrepreneur',
    content: 'The investment consulting provided was top-notch. I secured a great commercial property in BKC with their help.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop'
  },
  {
    id: 3,
    name: 'Vikram Singh',
    role: 'Doctor',
    content: 'Trustworthy and efficient. The legal documentation process was smooth thanks to their team.',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?q=80&w=200&auto=format&fit=crop'
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'Top 5 Investment Hotspots in Mumbai (2025)',
    excerpt: 'Discover the emerging neighborhoods offering high ROI for real estate investors in the coming year.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073&auto=format&fit=crop',
    date: 'Oct 15, 2024',
    category: 'Investment'
  },
  {
    id: 2,
    title: 'How to Buy Your First Home in India',
    excerpt: 'A comprehensive guide to navigating home loans, down payments, and legal checks for first-time buyers.',
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?q=80&w=2070&auto=format&fit=crop',
    date: 'Sep 28, 2024',
    category: 'Guide'
  },
  {
    id: 3,
    title: 'Real Estate Trends You Can’t Ignore',
    excerpt: 'From sustainable homes to smart living, here are the trends shaping the Mumbai skyline.',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop',
    date: 'Sep 10, 2024',
    category: 'Trends'
  }
];