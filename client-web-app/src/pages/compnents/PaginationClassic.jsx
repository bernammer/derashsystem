import React from 'react';

const PaginationClassic = ({currentPage, count, totalPages}) => {
    return (
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <nav className="mb-4 sm:mb-0 sm:order-1" role="navigation" aria-label="Navigation">
                <ul className="flex justify-center">
                    <li className="ml-3 first:ml-0">
                        <a className="btn bg-white border-slate-200 text-slate-300 cursor-not-allowed" href="#0"
                           disabled>&lt;- Previous</a>
                    </li>
                    <li className="ml-3 first:ml-0">
                        <a className="btn bg-white border-slate-200 hover:border-slate-300 text-indigo-500" href="#0">Next
                            -&gt;</a>
                    </li>
                </ul>
            </nav>
            <div className="text-sm text-slate-500 text-center sm:text-left">
                Showing <span className="font-medium text-slate-600">page {currentPage ?? 1}</span> of <span
                className="font-medium text-slate-600">{totalPages}</span> with <span
                className="font-medium text-slate-600">{count}</span> records
            </div>
        </div>
    );
}

export default PaginationClassic;
