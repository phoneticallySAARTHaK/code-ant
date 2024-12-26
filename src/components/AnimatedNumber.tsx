import { Text, TextProps } from "@chakra-ui/react";
import { FC, memo, useEffect, useRef } from "react";

/**
 * Starts a number from 0 to `value`.
 *
 * @param props
 *
 * @param props.value The actual number
 *
 * @param props.duration Animation Duration
 *
 * @param props.stepDuration Interval duration in ms, default is 100ms
 *
 * @param props.play
 *
 * @privateRemarks
 * Sets `aria-hidden` on the "animating" span to avoid incorrect values.
 */
export const AnimatedNumber: FC<
  {
    value: number;
    duration: number;
    play: boolean;
    stepDuration?: number;
  } & TextProps
> = memo(({ value, play, duration, stepDuration, ...props }) => {
  const spanRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | undefined = undefined;
    // start animation
    if (play) {
      const stepDurationMS = stepDuration || 100;
      const steps = Math.ceil(duration / stepDurationMS);
      const stepSize = Math.ceil(value / steps);

      intervalId = setInterval(() => {
        const node = spanRef.current;
        if (!node) {
          clearInterval(intervalId);
          return;
        }

        const currentValue = parseInt(node.textContent || "");

        if (isNaN(currentValue)) {
          node.innerHTML = "" + value;
          clearInterval(intervalId);
          return;
        }

        const nextValue = currentValue + stepSize;

        if (nextValue >= value) {
          node.innerHTML = "" + value;
          clearInterval(intervalId);
        } else {
          node.innerHTML = "" + nextValue;
        }
      }, stepDurationMS);
    }

    return () => {
      clearInterval(intervalId);
    };
  }, [play]);

  return (
    <Text as="span" {...props}>
      <Text position="absolute" left="-999vw" w="1px" h="1px">
        {value}
      </Text>
      <Text aria-hidden="true" ref={spanRef} as="span">
        0
      </Text>
    </Text>
  );
});
