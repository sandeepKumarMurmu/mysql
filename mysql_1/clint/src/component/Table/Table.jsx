import { TableBody } from "./TableBody"
import { TableHade } from "./TableHade"

export const Table=()=>{
    return <table className="table table-dark table-striped">
    <TableHade/>
    <TableBody/>
  </table>
}