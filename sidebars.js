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
      'Controls': [
        'reference/controls/overview',
        {
          'Layout': [
            'reference/controls/page',
            'reference/controls/stack',
            'reference/controls/text',
            'reference/controls/icon',
            'reference/controls/image',
          ]
        },        
        {
          'Basic inputs': [
            'reference/controls/button',
            'reference/controls/checkbox',
            'reference/controls/choicegroup',
            'reference/controls/dropdown',
            'reference/controls/link',
            'reference/controls/message',
            'reference/controls/searchbox',
            'reference/controls/slider',
            'reference/controls/spinbutton',
            'reference/controls/textbox',
            'reference/controls/toggle',
          ]
        },
        {
          'Commands & Navs': [
            'reference/controls/nav',
            'reference/controls/toolbar',
            'reference/controls/tabs',
          ]
        },        
        {
          'Lists & Grids': [
            'reference/controls/grid',
          ]
        },
        {
          'Progress': [
            'reference/controls/progress',
            'reference/controls/spinner',
          ]
        },
        {
          'Surfaces': [
            'reference/controls/callout',
            'reference/controls/dialog',
            'reference/controls/panel',
          ]
        },
        {
          'Charts': [
            'reference/controls/line-chart',
            'reference/controls/pie-chart',
            'reference/controls/vertical-bar-chart',
            'reference/controls/bar-chart',
          ]
        },        
      ],
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
