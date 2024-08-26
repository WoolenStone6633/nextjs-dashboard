import Table from '@/app/ui/customers/table'
import Search from '@/app/ui/search';
import { lusitana } from '@/app/ui/fonts';
import { Suspense } from 'react';
import { CustomersTableSkeleton, TableCustRowSkeleton } from '@/app/ui/skeletons';

export default function Page({ searchParams }: { searchParams?: { query?: string; };}) {
  const query = searchParams?.query || ''

  return (
    <div>
      <div className="w-full">
      <h1 className={`${lusitana.className} mb-4 md:mb-8 text-2xl`}>
        Customers
      </h1>
      <Search placeholder="Search customers..." />
      <Suspense key={query} fallback={<CustomersTableSkeleton/>}>
        <Table query={query} />
      </Suspense>
      </div>
    </div>
  )
}