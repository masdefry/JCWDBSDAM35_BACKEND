'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

type HeaderPageTitleProps = {
  title: string;
  createUrl?: string;
  createLabel?: string;
};

export default function HeaderPageTitle({
  title,
  createUrl,
  createLabel = 'Create',
}: HeaderPageTitleProps) {
  const pathname = usePathname();

  const segments = pathname.split('/').filter(Boolean);

  const breadcrumbs = segments.map((segment, index) => {
    const href = '/' + segments.slice(0, index + 1).join('/');
    const label = segment
      .replace(/-/g, ' ')
      .replace(/\b\w/g, (l) => l.toUpperCase());

    return { label, href };
  });

  return (
    <div className='flex justify-between items-center'>
      <div>
        <h2 className='font-bold text-2xl'>{title}</h2>

        <div className='breadcrumbs text-xs'>
          <ul>
            <li>
              <Link href='/'>Home</Link>
            </li>
            {breadcrumbs.map((item, index) => (
              <li key={index}>
                {index === breadcrumbs.length - 1 ? (
                  <span className='text-gray-500'>{item.label}</span>
                ) : (
                  <Link href={item.href}>{item.label}</Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {createUrl && (
        <div>
          <details className='dropdown'>
            <summary className='btn m-1 bg-red-700 text-white rounded-full'>
              <Link href={createUrl}>{createLabel}</Link>
            </summary>
          </details>
        </div>
      )}
    </div>
  );
}
