import clsx from "clsx"
import { ReactNode } from "react"
import classes from "./Grid.module.css"

type Props = {
  children: ReactNode
  columns?: number
}

export const Grid = ({ children, columns = 0 }: Props) => (
  <div className={clsx(classes.grid, classes[`columns-${columns}`])}>
    {children}
  </div>
)
