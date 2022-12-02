/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { ComponentType, FC } from "react";

import AnimateHeight, { Height } from "react-animate-height";

interface AnimatedComponentProps {
  height?: Height;
  onHeightAnimationEnd?: (newHeight: Height) => any;
  onHeightAnimationStart?: (newHeight: Height) => any;
}

const withAnimation = <T extends object>(
  WrappedComponent: ComponentType<T>
): FC<T & AnimatedComponentProps> => {
  const _AnimatedComponent = (props: T & AnimatedComponentProps) => {
    const {
      height,
      onHeightAnimationStart,
      onHeightAnimationEnd,
      ...componentProps
    } = props;
    return (
      <AnimateHeight
        height={height || 0}
        duration={500}
        easing="ease-in-out"
        style={{
          width: "100%",
        }}
        onHeightAnimationStart={onHeightAnimationStart}
        onHeightAnimationEnd={onHeightAnimationEnd}
      >
        <WrappedComponent {...(componentProps as T)} />
      </AnimateHeight>
    );
  };

  return _AnimatedComponent;
};

export default withAnimation;
