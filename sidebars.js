module.exports = {
  someSidebar: {
    'Pglet': [
      'introduction',
      'quickstart',
      'layouts',
      'inputs',
    ],
    'Languages': [
      'reference/languages/python',
      'reference/languages/bash',
      'reference/languages/powershell',
      'reference/languages/javascript',
    ],    
    'Reference': [{
      'Controls': [
        'reference/controls/overview',
        'reference/controls/page',
        'reference/controls/stack',
        'reference/controls/text',
        'reference/controls/textbox',
        'reference/controls/button',
        'reference/controls/checkbox',
        'reference/controls/dropdown',
        'reference/controls/progress'
      ],
      'Pglet protocol': [
        'reference/protocol/overview',
        {
          'Commands': [
            'reference/protocol/commands/add',
            'reference/protocol/commands/set',
            'reference/protocol/commands/get',
            'reference/protocol/commands/clean',
            'reference/protocol/commands/remove',
            'reference/protocol/commands/quit'        
          ],
        }
      ]
    }],
  },
};
