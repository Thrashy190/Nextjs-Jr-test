export interface InfoItems {
  subtitle: string;
  data: number;
  percetage?: number;
}

export interface VolumeItems {
  subtitle: string;
  data: number;
}

export default interface StatsCardProps {
  color: string;
  icon: any;
  title: string;
  info: InfoItems[];
  volume?: VolumeItems[];
}
