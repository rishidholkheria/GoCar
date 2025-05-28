'use client';

import dynamic from 'next/dynamic';

const SelectCab = dynamic(() => import('./SelectCab'), {
  ssr: false,
});

export default function SelectCabWrapper() {
  return <SelectCab />;
}
