import React from 'react';
import { Badge, Icon, IconButton, Tooltip, Whisper } from 'rsuite';

const ConditionalBadge = ({ condition, children }) => {
  return condition ? <Badge content={condition}>{children}</Badge> : children;
};

const IconBtnControl = ({ ...props }) => {
  //   const { isVisible, iconName, onClick, badgeContent, tooltip } = props;
  return (
    <div
      className="ml-2"
      style={{ visibility: props.isVisible ? 'visible' : 'hidden' }}
    >
      <ConditionalBadge condition={props.badgeContent}>
        <Whisper
          placement="top"
          delay={0}
          delayHide={0}
          delayShow={0}
          trigger="hover"
          speaker={<Tooltip>{props.tooltip}</Tooltip>}
        >
          <IconButton
            {...props}
            onClick={props.onClick}
            circle
            size="xs"
            icon={<Icon icon={props.iconName} />}
          />
        </Whisper>
      </ConditionalBadge>
    </div>
  );
};

export default IconBtnControl;
