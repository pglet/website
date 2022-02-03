---
title: Message
sidebar_label: Message
slug: message
---

A banner displays errors, warnings, or important information about an open app or file. For example, if a file failed to upload an error message bar should appear.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

[Live demo](https://python-message-example.pgletio.repl.co)

To run the examples below use the following wrapper:

```python
import pglet
from pglet import Message
with pglet.page("myapp") as page:
    page.clean()
  # insert example code here
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

### Basic messages

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
  Message(value='This is just a message.'),
  Message(value='Success message with dismiss button', dismiss=True, type='success'),
  Message(value='Error message with dismiss button', dismiss=True, type='error'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/message/basic-messages.png" width="70%" />

### Truncated message

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
page.add(
      Message(type='blocked', truncated=True, dismiss=True, value='Blocked Message - single line, with dismiss button and truncated text. Truncation is not available if you use action buttons or multiline and should be used sparingly. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris. You\'ve been warned!'))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/message/truncated-message.gif" width="70%" />

### Messages with buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import MessageButton
  page.add(
    Message(type='warning', dismiss=True, value='Warning message with buttons', buttons=[
      MessageButton(text='Yes', action='yes'),
      MessageButton(text='No', action='no')
    ]),
    Message(type='severeWarning', multiline=True, value='SevereWarning defaults to multiline. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi luctus, purus a lobortis tristique, odio augue pharetra metus, ac placerat nunc mi nec dui. Vestibulum aliquam et nunc semper scelerisque. Curabitur vitae orci nec quam condimentum porttitor et sed lacus. Vivamus ac efficitur leo. Cras faucibus mauris libero, ac placerat erat euismod et. Donec pulvinar commodo odio sit amet faucibus. In hac habitasse platea dictumst. Duis eu ante commodo, condimentum nibh pellentesque, laoreet enim. Fusce massa lorem, ultrices eu mi a, fermentum suscipit magna. Integer porta purus pulvinar, hendrerit felis eget, condimentum mauris.', buttons=[
      MessageButton('OK'),
      MessageButton('Cancel')
    ]))
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/message/messages-with-buttons.png" width="70%" />

### Message with dismiss event

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Text
def message_dismissed(e):
  t.value = "Message dismissed!"
  page.update()

m = Message(value='Message with dismiss event', dismiss=True, on_dismiss=message_dismissed)
t = Text()
  
page.add(m, t)
input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/message/message-with-dismiss-event.gif" width="80%" />

### Message with dismiss event and buttons

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
from pglet import Text, MessageButton
def message_dismissed(e):
  t.value = f"Message dismissed with {e.data} action"
  page.update()

m = Message(value='Message with dismiss event and buttons', dismiss=True, on_dismiss=message_dismissed,    buttons=[
  MessageButton('OK'),
  MessageButton('Cancel')
])
    
t = Text()
  
page.add(m, t)
input()
```
  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

<img src="/img/docs/controls/message/message-with-dismiss-event-and-buttons.gif" width="80%" />

## Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `value`         | string |         | Message text. |
| `type`          | string | `info`  | Message type: `info` (default), `error`, `blocked`, `severeWarning`, `success`, `warning` |
| `multiline`     | bool   | `false` | Determines if the message bar is multi lined. If false, and the text overflows over buttons or to another line, it is clipped. |
| `truncated`     | bool   | `false` | Determines if the message bar text is truncated. If true, a button will render to toggle between a single line view and multiline view. This prop is for single line message bars with no buttons only in a limited space scenario. |
| `dismiss`       | bool   | `false` | Whether to display "dismiss" button. |
| `icon`          | string |         | Custom icon to replace the message bar icon. If unset, default will be the icon set by message `type`. |
| `iconColor`     | string |         | Message icon color. |
| `dismissIcon`   | string |         | Custom icon to replace the dismiss icon. If unset, default will be "Clear" icon. |
| `dismissIconColor` | string |      | Custom dismiss icon color. |
| `data`          | string |         | Additional data attached to the control. The value is passed in `click` event data. |

## Events

| Name      | Description |
| --------- | ----------- |
| `dismiss` | Fires when the message is dismissed. |

## Child controls

* [`Button`](#button-control)

## `Button` control

Allows adding custom action buttons on the right side or message, e.g. "Yes/No", "Abort/Retry/Ignore".

### Properties

| Name            | Type   | Default | Description |
| --------------- | ------ | ------- | ----------- |
| `text`          | string |         | Button text. |
| `action`        | string |         | The value to pass into `dismiss` event when the button is clicked. The `text` value is used if `action` is not specified. |
