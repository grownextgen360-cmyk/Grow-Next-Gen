import React from 'react';

export interface ServiceCard {
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}

export interface CaseStudy {
  id: number;
  client: string;
  result: string;
  category: string;
  image: string;
  description: string;
}

export interface Testimonial {
  name: string;
  role: string;
  content: string;
  stars: number;
  avatar: string;
}