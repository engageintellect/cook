import { AnimatedSubscribeButton } from "@/components/magicui/animated-subscribe-button";
import { CheckIcon, ChevronRightIcon } from "lucide-react";

export function SubscribeButton() {
  return (
    <AnimatedSubscribeButton
      brand="#ffbd7a"
      subscribeStatus={true}
      buttonTextColor="#000009"
      initialText={
        <span className="group inline-flex items-center">
          Subscribe{" "}
          <ChevronRightIcon className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      }
      changeText={
        <span className="group inline-flex items-center">
          <CheckIcon className="mr-2 h-4 w-4" />
          Subscribed{" "}
        </span>
      }
    />
  );
}
