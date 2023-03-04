interface InfoItems {
  subtitle: string;
  data: number;
  percetage?: number;
}

interface VolumeItems {
  subtitle: string;
  data: number;
}

export default interface CardProps {
  color: string;
  icon: any;
  title: string;
  info: Array<InfoItems>;
  volume?: Array<VolumeItems>;
}
