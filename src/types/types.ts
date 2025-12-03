import React from 'react';

export interface Message {
  id: string;
  role: 'user' | 'model';
  content: string;
  timestamp: Date;
}

export enum LoadingState {
  IDLE = 'IDLE',
  LOADING = 'LOADING',
  STREAMING = 'STREAMING',
  ERROR = 'ERROR',
}

export interface ServiceItem {
  id: string;
  title: string;
  icon: React.ReactNode;
  description: string;
}