import { cn } from "@/lib/utils"
import React from "react"

const InputGroup = ({ className, children }) => {
  return (
    <div
      className={cn(
        "input-group focus-within:shadow-lg pl-4 transition-all relative flex items-center w-full rounded-full overflow-hidden",
        className || ""
      )}
    >
      {children}
    </div>
  )
}

const Input = React.forwardRef((props, ref) => {
  const { className, ...rest } = props

  return (
    <input
      className={cn(
        "input-control w-full py-3 pr-4 outline-none placeholder:font-normal placeholder:text-sm",
        className || ""
      )}
      autoComplete="off"
      autoCorrect="off"
      spellCheck="false"
      ref={ref}
      {...rest}
    />
  )
})

const InputGroupText = ({ className, children }) => {
  return (
    <div className={cn("input-group-text mr-3", className || "")}>
      {children}
    </div>
  )
}

InputGroup.Text = InputGroupText
InputGroup.Input = Input

export default InputGroup
