module.exports = {
  someSidebar: {
    'Getting started': [
      'introduction',
      'how-it-works',
      'use-cases',
    ],
    'Tutorials': [
      'tutorials/python',
      'tutorials/bash',
      'tutorials/powershell',
      'tutorials/node',
    ],
    'Controls': [
      'controls/overview',
      {
        'Layout': [
          'controls/page',
          'controls/stack',
          'controls/text',
          'controls/icon',
          'controls/image',
        ]
      },        
      {
        'Basic inputs': [
          'controls/button',
          'controls/checkbox',
          'controls/choicegroup',
          'controls/dropdown',
          'controls/link',
          'controls/message',
          'controls/searchbox',
          'controls/slider',
          'controls/spinbutton',
          'controls/textbox',
          'controls/toggle',
        ]
      },
      {
        'Commands & Navs': [
          'controls/nav',
          'controls/toolbar',
          'controls/tabs',
        ]
      },        
      {
        'Lists & Grids': [
          'controls/grid',
        ]
      },
      {
        'Progress': [
          'controls/progress',
          'controls/spinner',
        ]
      },
      {
        'Surfaces': [
          'controls/callout',
          'controls/dialog',
          'controls/panel',
        ]
      },
      {
        'Charts': [
          'controls/line-chart',
          'controls/pie-chart',
          'controls/vertical-bar-chart',
          'controls/bar-chart',
        ]
      },        
    ],    
    'Guides': [
      //'layout',
      //'theming',
      'deep-linking',
      //'deployment',
    ],
    'Pglet Server': [
      'pglet-server/installation',
    ],    
    'Pglet Service': [
      'pglet-service/overview',
    ],
    'Reference': [{
      'Pglet protocol': [
        'reference/protocol/overview',
        {
          'Commands': [
            'reference/protocol/commands/add',
            'reference/protocol/commands/set',
            'reference/protocol/commands/get',
            'reference/protocol/commands/clean',
            'reference/protocol/commands/replace',
            'reference/protocol/commands/remove',
            'reference/protocol/commands/quit'        
          ],
        }
      ]
    }],
  },
};
