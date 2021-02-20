import * as React from 'react'
import ReactPaginate from 'react-paginate'

import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type Props = {
  pageCount: number
  handlePageClick: (data: number) => void
}

const Paginator: React.FunctionComponent<Props> = ({ pageCount, handlePageClick }: Props) => {
  return (
    <ReactPaginate
      previousLabel={<FiChevronLeft className="w-7 h-7" />}
      nextLabel={<FiChevronRight className="w-7 h-7" />}
      breakLabel={'...'}
      breakClassName={'break-me'}
      pageCount={pageCount}
      marginPagesDisplayed={2}
      pageRangeDisplayed={1}
      onPageChange={(data) => handlePageClick(data.selected)}
      containerClassName={'flex list-none p-0'}
      pageClassName={'mx-4'}
      pageLinkClassName={'outline-none'}
      activeClassName={'bg-blue-300 dark:bg-blue-500 rounded-2xl h-6 w-6 flex justify-center'}
      initialPage={0}
    />
  )
}

export default Paginator
