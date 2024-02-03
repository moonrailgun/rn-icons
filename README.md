
## RN Icons

`react-native` version of [`react-icons`](https://github.com/react-icons/react-icons)

Include popular icons in your React Native projects easily with `rn-icons`, which utilizes ES6 imports that allows you to include only the icons that your project is using.

## Installation

```bash
yarn add react-native-svg rn-icons
# or
npm install react-native-svg rn-icons --save
# or
pnpm install react-native-svg rn-icons

cd ios && pod install # for react-native-svg
```


example usage

```jsx
import { FaBeer } from "rn-icons/fa";

function Question() {
  return (
    <Text>
      Lets go for a <FaBeer />?
    </Text>
  );
}
```

<!-- [View the documentation](https://react-icons.github.io/react-icons) for further usage examples and how to use icons from other packages. _NOTE_: each Icon package has it's own subfolder under `react-icons` you import from. -->

For example, to use an icon from **Material Design**, your import would be: `import { ICON_NAME } from 'rn-icons/md';`

## How to pick icons

Checkout this website: [https://react-icons.github.io/react-icons/](https://react-icons.github.io/react-icons/). you can view all icons.

and replace library name from `react-icons` to `rn-icons` will be ok.

## Icons

| Icon Library                                                            | License                                                                                           | Version                                  | Count |
| ----------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- | ---------------------------------------- | ----: |
| [Circum Icons](https://circumicons.com/)                                | [MPL-2.0 license](https://github.com/Klarr-Agency/Circum-Icons/blob/main/LICENSE)                 | 1.0.0                                    |   288 |
| [Font Awesome 5](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 5.15.4-3-gafecf2a                        |  1612 |
| [Font Awesome 6](https://fontawesome.com/)                              | [CC BY 4.0 License](https://creativecommons.org/licenses/by/4.0/)                                 | 6.4.2                                    |  2025 |
| [Ionicons 4](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 4.6.3                                    |   696 |
| [Ionicons 5](https://ionicons.com/)                                     | [MIT](https://github.com/ionic-team/ionicons/blob/master/LICENSE)                                 | 5.5.4                                    |  1332 |
| [Material Design icons](http://google.github.io/material-design-icons/) | [Apache License Version 2.0](https://github.com/google/material-design-icons/blob/master/LICENSE) | 4.0.0-90-g1ea21d5429                     |  4341 |
| [Typicons](http://s-ings.com/typicons/)                                 | [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/)                                   | 2.1.2                                    |   336 |
| [Github Octicons icons](https://octicons.github.com/)                   | [MIT](https://github.com/primer/octicons/blob/master/LICENSE)                                     | 18.3.0                                   |   264 |
| [Feather](https://feathericons.com/)                                    | [MIT](https://github.com/feathericons/feather/blob/master/LICENSE)                                | 4.29.1                                   |   287 |
| [Lucide](https://lucide.dev/)                                           | [ISC](https://github.com/lucide-icons/lucide/blob/main/LICENSE)                                   | v4.11.0-15-g7493227d                     |  1215 |
| [Game Icons](https://game-icons.net/)                                   | [CC BY 3.0](https://creativecommons.org/licenses/by/3.0/)                                         | 12920d6565588f0512542a3cb0cdfd36a497f910 |  4040 |
| [Weather Icons](https://erikflowers.github.io/weather-icons/)           | [SIL OFL 1.1](http://scripts.sil.org/OFL)                                                         | 2.0.12                                   |   219 |
| [Devicons](https://vorillaz.github.io/devicons/)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.8.0                                    |   192 |
| [Ant Design Icons](https://github.com/ant-design/ant-design-icons)      | [MIT](https://opensource.org/licenses/MIT)                                                        | 4.3.1                                    |   789 |
| [Bootstrap Icons](https://github.com/twbs/icons)                        | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.11.1                                   |  2716 |
| [Remix Icon](https://github.com/Remix-Design/RemixIcon)                 | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 3.5.0                                    |  2537 |
| [Flat Color Icons](https://github.com/icons8/flat-color-icons)          | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.2                                    |   329 |
| [Grommet-Icons](https://github.com/grommet/grommet-icons)               | [Apache License Version 2.0](http://www.apache.org/licenses/)                                     | 4.11.0                                   |   635 |
| [Heroicons](https://github.com/tailwindlabs/heroicons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 1.0.6                                    |   460 |
| [Heroicons 2](https://github.com/tailwindlabs/heroicons)                | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.0.18                                   |   876 |
| [Simple Icons](https://simpleicons.org/)                                | [CC0 1.0 Universal](https://creativecommons.org/publicdomain/zero/1.0/)                           | 9.20.0                                   |  2753 |
| [Simple Line Icons](https://thesabbir.github.io/simple-line-icons/)     | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.5.5                                    |   189 |
| [IcoMoon Free](https://github.com/Keyamoon/IcoMoon-Free)                | [CC BY 4.0 License](https://github.com/Keyamoon/IcoMoon-Free/blob/master/License.txt)             | d006795ede82361e1bac1ee76f215cf1dc51e4ca |   491 |
| [BoxIcons](https://github.com/atisawd/boxicons)                         | [CC BY 4.0 License](https://github.com/atisawd/boxicons/blob/master/LICENSE)                      | 2.1.4                                    |  1634 |
| [css.gg](https://github.com/astrit/css.gg)                              | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.1.1                                    |   704 |
| [VS Code Icons](https://github.com/microsoft/vscode-codicons)           | [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/)                                         | 0.0.35                                   |   439 |
| [Tabler Icons](https://github.com/tabler/tabler-icons)                  | [MIT](https://opensource.org/licenses/MIT)                                                        | 2.40.0                                   |  4836 |
| [Themify Icons](https://github.com/lykmapipo/themify-icons)             | [MIT](https://github.com/thecreation/standard-icons/blob/master/modules/themify-icons/LICENSE)    | v0.1.2-2-g9600186                        |   352 |
| [Radix Icons](https://icons.radix-ui.com)                               | [MIT](https://github.com/radix-ui/icons/blob/master/LICENSE)                                      | @radix-ui/react-icons@1.3.0-1-g94b3fcf   |   318 |
| [Phosphor Icons](https://github.com/phosphor-icons/core)                | [MIT](https://github.com/phosphor-icons/core/blob/main/LICENSE)                                   | 2.0.2                                    |  7488 |
| [Icons8 Line Awesome](https://icons8.com/line-awesome)                  | [MIT](https://github.com/icons8/line-awesome/blob/master/LICENSE.md)                              | 1.3.1                                    |  1544 |

You can add more icons by submitting into [`react-icons`](https://github.com/react-icons/react-icons) with pull requests or creating issues. And this repo with be sync.

## Configuration

You can configure rn-icons props using [React Context API](https://reactjs.org/docs/context.html).

_Requires **React 16.3** or higher._

```jsx
import { IconContext } from "rn-icons";

<IconContext.Provider value={{ color: "blue" }}>
  <div>
    <FaFolder />
  </div>
</IconContext.Provider>;
```

| Key         | Default               | Notes                              |
| ----------- | --------------------- | ---------------------------------- |
| `color`     | `undefined` (inherit) |                                    |
| `style`     | `undefined`           | Can overwrite size and color       |

## Contributing

`./build-script.sh` will build the whole project. See also CI scripts for more information.

### Development

```bash
pnpm install
cd packages/react-icons
pnpm fetch  # fetch icon sources
pnpm build
```

### Add/Update icon set

Check [react-icons](https://github.com/react-icons/react-icons)

### Preview

TODO

## Why React SVG components instead of fonts?

In React native, use fonts is hard to maintain, and its must be touch native code which react native dont like. With `rn-icons`, you can serve only the needed icons instead of one big font file to the users, helping you to recognize which icons are used in your project.


## Related Projects

- [react-icons](https://github.com/react-icons/react-icons)

## Licence

MIT

- Icons are taken from the other projects so please check each project licences accordingly.
