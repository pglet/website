module.exports = {
  someSidebar: [
    {
      'Getting started': [
        'introduction',
        // 'layout',
        // 'theming',
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
            'controls/splitstack',
          ]
        },
        {
          'Basic input': [
            'controls/button',
            'controls/checkbox',
            'controls/choicegroup',
            'controls/dropdown',
            'controls/combobox',
            'controls/datepicker',          
            'controls/link',
            'controls/searchbox',
            'controls/slider',
            'controls/spinbutton',
            'controls/textbox',
            'controls/toggle',
          ]
        },
        {
          'Collections': [
            'controls/grid',
          ]
        },
        {
          'Media': [
            'controls/icon',
            'controls/image',          
          ]
        },        
        {
          'Navigation': [
            'controls/nav',
            'controls/tabs',
          ]
        },
        {
          'Status and Info': [
            'controls/message',
            'controls/progress',
            'controls/spinner',
          ]
        },        
        {
          'Toolbars': [
            'controls/toolbar',
          ]
        },
        {
          'Dialogs and Flyouts': [
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
        {
          'Utilities': [
            'controls/html',
            'controls/iframe',            
            'controls/persona',                          
            'controls/text',
          ]
        },        
      ],
      'Guides': [
        'hot-reload',
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
    }],
};
