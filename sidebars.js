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
    'Pglet service': [
      'pglet-service/overview',
    ],
    'Reference': [{
      'Controls': [
        'reference/controls/overview',
        'reference/controls/page',
        'reference/controls/stack',
        'reference/controls/text',
        'reference/controls/link',
        'reference/controls/icon',
        'reference/controls/textbox',
        'reference/controls/button',
        'reference/controls/checkbox',
        'reference/controls/dropdown',
        'reference/controls/progress',
        'reference/controls/spinner'
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
