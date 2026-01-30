export interface TimelineEvent {
  id: string;
  title: string;
  description: string;
  category: 'technology' | 'framework' | 'browser' | 'organization' | 'tool' | 'milestone';
  importance: 'critical' | 'high' | 'medium' | 'low';
  icon: string;
}

export interface TimelineYear {
  year: number;
  events: TimelineEvent[];
}

export interface TimelineData extends Array<TimelineYear> {}

export interface CategoryConfig {
  name: string;
  label: string;
  color: string;
  bgColor: string;
}

export interface ImportanceConfig {
  level: string;
  label: string;
  size: string;
  priority: number;
}