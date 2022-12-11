import clsx from "clsx"
import { ReactNode } from "react"
import classes from "./Grid.module.css"

type Props = {
  children: ReactNode
  columns?: 0 | 1 | 2 | 3 | 4 | 5 | 6
}

export const Grid = ({ children, columns = 0 }: Props) => (
  <div className={clsx(classes.grid, classes[`columns-${columns}`])}>
    {children}
  </div>
)
