export enum CardType {
  Narrative,
  PieChart,
  LineChart,
  BarChart,
  AreaChart,
}

export let cardTypeDescriptions: Record<keyof typeof CardType, string> = {
  Narrative: 'Narrative',
  PieChart: 'Pie chart',
  LineChart: 'Line chart',
  BarChart: 'Bar chart',
  AreaChart: 'Area chart',
};
