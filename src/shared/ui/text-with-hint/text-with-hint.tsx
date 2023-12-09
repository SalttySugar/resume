import React, { ComponentProps, FC } from "react";
import { useHoverDirty } from "react-use";
import { useFloating, shift } from "@floating-ui/react";
import { cn } from "@/shared/libs/utils";

export type TextWithHintProps = ComponentProps<"p"> & {
  as?: "p" | "span",
  hint?: string
}
export const TextWithHint: FC<TextWithHintProps> = (props) => {
  const {
    as: Component = "p",
    hint,
    className,
    ...rest
  } = props;

  const { refs, floatingStyles } = useFloating({
    placement: "top",
    strategy: "absolute",
    middleware: [shift()]
  });
  // TODO: fix this
  // @ts-ignore
  const isHovering = useHoverDirty(refs.reference, refs.reference.current != null);


  return (
    <>
      <Component
        ref={refs.setReference}
        {...rest}
        className={cn("cursor-pointer", className)}
      />
      {hint && isHovering && (
        <div
          ref={refs.setFloating}
          style={floatingStyles}
          className="p-4 bg-slate-800 drop-shadow-md absolute text-white rounded-md"
        >
          {hint}
        </div>
      )}

    </>
  )
}
