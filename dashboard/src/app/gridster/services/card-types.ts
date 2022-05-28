export enum CardType {
  Narrative = 1,
  PieChart = 2,
  LineChart = 3,
  BarChart = 4,
  AreaChart = 5,
}

export let cardTypeDescriptions: Record<keyof typeof CardType, string> = {
  Narrative: 'Narrative',
  PieChart: 'Pie chart',
  LineChart: 'Line chart',
  BarChart: 'Bar chart',
  AreaChart: 'Area chart',
};
