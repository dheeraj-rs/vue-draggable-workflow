/*
 * date: 2020-01-17
 * desc:
 */

export const FLOW_TYPE = {
  action: 'action',
  condition: 'condition',
  flow: 'flow',
  temp: 'temp',
};

export const FLOW_ITEM_TYPE = {
  startNode: 'startNode',
  endNode: 'endNode',
  waitNode: 'waitNode',
  tempNode: 'tempNode',
  nodeNode: 'nodeNode',
  ifNode: 'ifNode',
  expandNode: 'expandNode',
  list: 'list',
};

export const FLOW_LIST = {
  action: [
    {
      id: 'nodeNode',
      type: 'nodeNode',
      className: 'step-tag',
      name: 'Node',
      groupType: 'action',
    },
  ],
  // Condition Control
  condition: [
    {
      id: 'conditionNode',
      type: 'ifNode',
      className: 'step-if',
      name: 'Condition Judgment',
      groupType: 'condition',
    },
    {
      id: 'switchNode',
      type: 'expandNode',
      className: 'step-expand',
      name: 'Condition Group',
      groupType: 'condition',
    },
  ],
  // Flow Control
  flow: [
    {
      id: 'startNode',
      type: 'startNode',
      className: 'step-start',
      name: 'Start',
      groupType: 'flow',
      hidden: true,
    },
    {
      id: 'stopNode',
      type: 'endNode',
      className: 'step-end',
      name: 'End',
      groupType: 'flow',
    },
  ],
  // Temp
  temp: [
    {
      id: 'tempNode',
      type: 'tempNode',
      className: 'step-temp',
      name: 'Temp',
      groupType: 'temp',
    },
  ],
};

export const FLOW_ALL_LIST = [
  {
    type: FLOW_TYPE.action,
    ref: 'actionFlow',
    children: FLOW_LIST.action,
  },
  {
    type: FLOW_TYPE.flow,
    ref: 'flowFlow',
    children: FLOW_LIST.flow,
  },
  {
    type: FLOW_TYPE.condition,
    ref: 'conditionFlow',
    children: FLOW_LIST.condition,
  },
];
