import { SVGProps } from 'react';

/**
 * IconNarrowRight renders a right arrow icon that is narrow.
 *
 * @param {SVGProps<SVGSVGElement>} props - SVG props.
 * @returns {JSX.Element} An arrow icon.
 */

function IconNarrowRight({ ...props }: SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      width='14'
      height='14'
      viewBox='0 0 24 24'
      fill='none'
      stroke='currentColor'
      strokeWidth='2'
      strokeLinecap='round'
      strokeLinejoin='round'
      className='icon icon-tabler icons-tabler-outline icon-tabler-arrow-narrow-right'
      {...props}
    >
      <path stroke='none' d='M0 0h24v24H0z' fill='none' />
      <path d='M5 12l14 0' />
      <path d='M15 16l4 -4' />
      <path d='M15 8l4 4' />
    </svg>
  );
}

export default IconNarrowRight;
