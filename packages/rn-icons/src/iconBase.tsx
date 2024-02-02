import * as React from 'react';
import { Svg } from 'react-native-svg';
import { IconContext, DefaultContext } from './iconContext';
import { View, ViewStyle } from 'react-native';
import { SvgTagKeys, tagMap } from './svgTags';

export interface IconTree {
  tag: SvgTagKeys;
  attr: { [key: string]: string };
  child: IconTree[];
}

function Tree2Element(tree: IconTree[]): React.ReactElement[] {
  return (
    tree &&
    tree.map((node, i) => {
      if (!tagMap[node.tag]) {
        return <View />;
      }

      return React.createElement(
        tagMap[node.tag] as any,
        {
          key: i,
          ...node.attr,
        },
        Tree2Element(node.child)
      );
    })
  );
}
export function GenIcon(data: IconTree) {
  // eslint-disable-next-line react/display-name
  return (props: IconBaseProps) => (
    <IconBase attr={{ ...data.attr }} {...props}>
      {Tree2Element(data.child)}
    </IconBase>
  );
}

export interface IconBaseProps {
  children?: React.ReactNode;
  size?: string | number;
  title?: string;
  style?: ViewStyle;
}

export type IconType = (props: IconBaseProps) => JSX.Element;
export function IconBase(
  props: IconBaseProps & { attr?: Record<string, string> }
): JSX.Element {
  const elem = (conf: IconContext) => {
    const { attr, size, title, ...svgProps } = props;
    const computedSize = size || conf.size || '1em';

    return (
      <Svg
        stroke="currentColor"
        fill="currentColor"
        strokeWidth="0"
        {...conf.attr}
        {...attr}
        {...svgProps}
        style={{
          ...conf.style,
          ...props.style,
        }}
        height={computedSize}
        width={computedSize}
      >
        {title && <title>{title}</title>}
        {props.children}
      </Svg>
    );
  };

  return IconContext !== undefined ? (
    <IconContext.Consumer>
      {(conf: IconContext) => elem(conf)}
    </IconContext.Consumer>
  ) : (
    elem(DefaultContext)
  );
}
