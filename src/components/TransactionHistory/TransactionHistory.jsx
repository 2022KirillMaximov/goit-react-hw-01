import css from "./TransactionHistory.module.css";
import clsx from "clsx";

export default function TransactionHistory({ items }) {
  return (
    <table className={css.table}>
      <thead className={css.head}>
        <tr>
          <th >Type</th>
          <th >Amount</th>
          <th >Currency</th>
        </tr>
      </thead>
<tbody >
      {items.map(({ id, type, amount, currency }, index) => (
        
          <tr key={id}
            className={ clsx(css.colorBgWhite, index % 2 ? css.cellBgGrey : css.cellBgWhite)}
          >
            <td className={css.cell}>{type}</td>
            <td className={css.cell}>{amount}</td>
            <td className={css.cell}>{currency}</td>
          </tr>
     
      ))}
           </tbody>
    </table>
  );
}