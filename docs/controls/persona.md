---
title: Persona
sidebar_label: Persona
slug: persona
---

A persona is a visual representation of a person across products, typically showcasing the image that person has chosen to upload themselves. The control can also be used to show that person's online status.

The complete control includes an individual's avatar (an uploaded image or a composition of the person’s initials on a background color), their name or identification, and online status.

## Examples

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs groupId="language">
  <TabItem value="python" label="Python" default>

```python
import pglet
from pglet import Persona

page = pglet.page("persona-test")
page.add(Persona("Jack Reacher", secondary_text="Designer", size=8))
page.add(Persona("John Smith", secondary_text="Student", size=24))
page.add(Persona("Marry Poppins", size=32, presence="busy", hide_details=True))
page.add(
    Persona(
        "Feodor",
        size=32,
        image_url="https://avatars.githubusercontent.com/u/5041459?s=88&v=4",
        presence="online",
    )
)
page.add(Persona("Alice Brown", size=72, secondary_text="Wonderer"))
```

  </TabItem>
  <TabItem value="powershell" label="PowerShell">

```powershell
# TODO
```

  </TabItem>
</Tabs>

## Properties

| Name                | Type     | Default  | Description |
| ------------------- | -------- | -------- | ----------- |
| `imageUrl`          | string   |          | Url to the image to use, should be a square aspect ratio and big enough to fit in the image area. |
| `imageAlt`          | string   |          | The `imageAlt` attribute holds a text description of the image, which isn't mandatory but is incredibly useful for accessibility — screen readers read this description out to their users so they know what the image means. Alt text is also displayed on the page if the image can't be loaded for some reason: for example, network errors, content blocking, or linkrot. |
| `initialsColor`     | string   | Derived from `text`  | The background color when the user's initials are displayed: `blue`, `burgundy`, `coolGray`, `cyan`, `darkBlue`, `darkGreen`, `darkRed`, `gold`, `green`, `lightBlue`, `lightGreen`, `lightPink`, `lightRed`, `magenta`, `orange`, `pink`, `purple`, `rust`, `teal`, `transparent`, `violet`, `warmGray`. The color is algorithmically derived from `text` property if not set ([here's the algorithm](https://github.com/microsoft/fluentui/blob/dab45a2afe609709735b9b6e604a1af40d50e809/packages/react/src/components/Persona/PersonaInitialsColor.ts#L35-L52) if you are curious). |
| `initialsTextColor` | string   |          | The text color when the user's initials are displayed. |
| `text`              | string   |          | Primary text to display, usually the name of the person. |
| `secondaryText`     | string   |          | Secondary text to display, usually the role of the user. |
| `tertiaryText`      | string   |          | Tertiary text to display, usually the status of the user. The tertiary text will only be shown when using size `72` or `100`. |
| `optionalText`      | string   |          | Optional text to display, usually a custom message set. The optional text will only be shown when using size `100`. |
| `size`              | number   | `48`     | The pre-defined size of the control: `8`, `24`, `32`, `40`, `48`, `56`, `72`, `100`, `120.` |
| `presence`          | string   | `none`   | Presence of the person to display: `none`, `offline`, `online`, `away`, `blocked`, `busy`, `dnd`. |
| `hideDetails`       | string   |          | Whether to not render persona details, and just render the persona image/initials. |