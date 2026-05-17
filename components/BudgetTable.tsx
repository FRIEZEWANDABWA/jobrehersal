import React from "react";

type Column = {
  header: string;
  accessor: string;
  align?: "left" | "right" | "center";
};

type BudgetTableProps = {
  columns: Column[];
  data: Record<string, string | number>[];
  totalLabel?: string;
  totalValue?: string | number;
};

export function BudgetTable({ columns, data, totalLabel, totalValue }: BudgetTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-800/80 bg-slate-900/30 backdrop-blur-sm shadow-sm">
      <div className="overflow-x-auto no-scrollbar">
        <table className="w-full text-left text-sm text-slate-300">
          <thead className="bg-slate-950/50 text-xs uppercase tracking-[0.1em] text-slate-500">
            <tr>
              {columns.map((col, idx) => (
                <th
                  key={idx}
                  className={`px-6 py-4 font-semibold ${
                    col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                  }`}
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60">
            {data.map((row, rowIdx) => (
              <tr key={rowIdx} className="transition-colors hover:bg-slate-800/30">
                {columns.map((col, colIdx) => (
                  <td
                    key={colIdx}
                    className={`px-6 py-4 ${
                      col.align === "right" ? "text-right" : col.align === "center" ? "text-center" : "text-left"
                    } ${colIdx === 0 ? "font-medium text-slate-100" : "font-mono text-slate-400"}`}
                  >
                    {row[col.accessor]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
          {totalLabel && totalValue !== undefined && (
            <tfoot className="bg-amber-500/[0.03] border-t border-amber-500/20">
              <tr>
                <td
                  colSpan={columns.length - 1}
                  className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-amber-500/90"
                >
                  {totalLabel}
                </td>
                <td className="px-6 py-4 text-right font-mono text-base font-semibold text-amber-400">
                  {totalValue}
                </td>
              </tr>
            </tfoot>
          )}
        </table>
      </div>
    </div>
  );
}
