import { ReactNode } from "react"
import classes from "./Grid.module.css"

type Props = {
  children: ReactNode
}

export const Grid = ({ children }: Props) => (
  <div className={classes.grid}>{children}</div>
)
