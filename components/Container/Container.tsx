import clsx from "clsx"
import { ReactNode } from "react"
import classes from "./Container.module.css"

type Props = {
  children: ReactNode
  size?: "small" | "medium" | "large"
}

export const Container = ({ children, size = "medium" }: Props) => (
  <div className={clsx(classes.container, classes[size])}>{children}</div>
)
