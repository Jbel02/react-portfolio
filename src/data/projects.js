import hotelImg from '../assets/Proj_1.png'
import musicImg from '../assets/Proj_2.png'
import parkingImg from '../assets/Proj_3.png'

// Single source of truth for the Projects section. Both the cards and their
// modals render from this array, so adding a fourth project is a data change
// rather than a markup change.
export const projects = [
  {
    id: 'hotel',
    title: 'Hotel Reservation System',
    image: hotelImg,
    tech: 'Java',
    summary:
      'A full-cycle Java hotel booking system with role-based access for clients, receptionists, and managers — covering reservations, payments, and guest check-in.',
    details:
      'A full hotel booking system with three roles — clients register and book rooms with dynamic pricing and add-ons, receptionists check guests in and filter reservations, and managers oversee bookings and process cancellations. Supports full or 30% deposit payments, with all records persisted across sessions in structured text files and validated at every input.',
    tags: ['Role-based access', 'Dynamic pricing', 'File persistence'],
    gradient:
      'linear-gradient(135deg, rgba(45, 212, 191, 0.35), rgba(30, 41, 59, 0.45))',
  },
  {
    id: 'harmonyhub',
    title: 'Harmony Hub Music Store Management System',
    image: musicImg,
    tech: 'Java',
    summary:
      'Java retail system built on five data structures ArrayList, Stack, Queue, Linked List, and BST handling inventory, order fulfillment, and a tiered loyalty program.',
    details:
      "A music store system where each module uses the data structure suited to it: an ArrayList for sortable inventory, a linked list for order fulfillment with VIP priority, a stack for LIFO refunds, a queue for FIFO online orders, and a binary search tree for fast, sorted loyalty account lookups with automatic tier progression. Ships pre-loaded with sample data so it's explorable right away.",
    tags: ['Data structures', 'Loyalty tiers', 'Order fulfillment'],
    gradient:
      'linear-gradient(135deg, rgba(16, 185, 129, 0.35), rgba(59, 130, 246, 0.4))',
  },
  {
    id: 'parkpal',
    title: 'ParkPal — Campus Parking App',
    image: parkingImg,
    tech: 'Figma',
    summary:
      'Figma-designed mobile app prototype for real-time parking availability, with live slot tracking, a reservation flow, and dual driver/admin roles.',
    details:
      'A mobile-first prototype for real-time campus parking. A live map shows every zone with individual slots color-coded vacant, reserved, or occupied, plus a synced timestamp for trust. Users pick a slot and confirm a reservation; attendants and admins can mark spots occupied or vacant directly to keep the map accurate. A team project focused on working out the flow before writing any code.',
    tags: ['UI/UX design', 'Prototyping', 'Team project'],
    gradient:
      'linear-gradient(135deg, rgba(45, 212, 191, 0.35), rgba(248, 113, 113, 0.35))',
  },
]
