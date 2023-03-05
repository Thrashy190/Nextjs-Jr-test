import LeadsIcons from '@/assets/IconLeads.svg';
import HappyFace from '@/assets/IconHappyFace.svg';
import SadFace from '@/assets/IconSadFace.svg';
import CardProps from '@/interface/CardInterface';

export const oportunityCard: CardProps = {
  color: 'pantone-blue',
  icon: LeadsIcons,
  title: 'Opportunity',
  info: [
    { subtitle: 'SOLD.com Leads', data: 500 },
    { subtitle: 'Customers we promoted you to', data: 100, percetage: 20 },
    { subtitle: 'Appointments set with you', data: 30 },
  ],
};

export const winsCard: CardProps = {
  color: 'pantone-green',
  icon: HappyFace,
  title: 'Wins',
  info: [
    { subtitle: 'Your signed agreements', data: 15 },
    { subtitle: 'Your closings', data: 10 },
  ],
  volume: [
    { subtitle: 'Your closed volume', data: 3000000 },
    { subtitle: 'Your commission (est)', data: 50000 },
  ],
};

export const lossesCard: CardProps = {
  color: 'pantone-red',
  icon: SadFace,
  title: 'Losses',
  info: [
    { subtitle: 'Appointments that signed with another agent', data: 15 },
    { subtitle: 'Lost closings', data: 10 },
  ],
  volume: [
    { subtitle: 'Lost volume', data: 3000000 },
    { subtitle: 'Lost commission (est)', data: 50000 },
  ],
};
