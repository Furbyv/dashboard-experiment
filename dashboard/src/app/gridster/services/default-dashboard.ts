import { CardType } from './card-types';
import { CardTemplate } from './dashboard.service';

export const foo: CardTemplate[] = [
  {
    id: 1,
    type: CardType.Narrative,
    position: {
      id: 1,
      x: 0,
      y: 0,
      cols: 1,
      rows: 2,
    },
    content:
      '<h2>Example narrative</h2><p>This is an example narrative. Please, edit this text by pressing "edit text" under this card\'s menu item.</p><p><br></p><p>Examples:</p><p><span style="background-color: rgb(255, 255, 102);">Example1</span></p><p><span style="color: rgb(230, 0, 0);">Example2</span></p><p><em><u>Example3</u></em></p><ul><li>abc</li><li>def</li><li><s>ghji</s></li></ul><p><br></p><pre class="ql-syntax" spellcheck="false">if(code) block\n</pre>',
  },
  {
    id: 2,
    type: CardType.PieChart,
    position: {
      id: 2,
      x: 1,
      y: 2,
      cols: 1,
      rows: 2,
    },
  },
  {
    id: 3,
    type: CardType.LineChart,
    position: {
      id: 3,
      x: 2,
      y: 2,
      cols: 1,
      rows: 2,
    },
  },
  {
    id: 4,
    type: CardType.BarChart,
    position: {
      id: 4,
      x: 1,
      y: 0,
      cols: 2,
      rows: 2,
    },
  },
  {
    id: 5,
    type: CardType.AreaChart,
    position: {
      id: 5,
      x: 0,
      y: 2,
      cols: 1,
      rows: 2,
    },
  },
];
