import { cn } from '@/lib/utils';
import { SvgProps, sharedAttributes } from '../Icon';
import { type JSX } from 'react';

const Diversity = (props: SvgProps): JSX.Element => {
  const { className } = props;

  return (
    <svg
      {...sharedAttributes(props)}
      className={cn('icon--diversity', className)}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_12555_1456)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99996 2.00002C4.68625 2.00002 1.99996 4.68631 1.99996 8.00002C1.99996 11.3137 4.68625 14 7.99996 14C11.3137 14 14 11.3137 14 8.00002C14 4.68631 11.3137 2.00002 7.99996 2.00002ZM0.666626 8.00002C0.666626 3.94993 3.94987 0.666687 7.99996 0.666687C12.05 0.666687 15.3333 3.94993 15.3333 8.00002C15.3333 12.0501 12.05 15.3334 7.99996 15.3334C3.94987 15.3334 0.666626 12.0501 0.666626 8.00002Z"
          fill="#7C2D12"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M0.666626 7.99998C0.666626 7.63179 0.965103 7.33331 1.33329 7.33331H14.6666C15.0348 7.33331 15.3333 7.63179 15.3333 7.99998C15.3333 8.36817 15.0348 8.66665 14.6666 8.66665H1.33329C0.965103 8.66665 0.666626 8.36817 0.666626 7.99998Z"
          fill="#7C2D12"
        />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M7.99996 0.666687C8.18724 0.666687 8.36588 0.745461 8.49219 0.883738C10.2687 2.82862 11.2783 5.35259 11.3331 7.98613C11.3333 7.99539 11.3333 8.00465 11.3331 8.01391C11.2783 10.6474 10.2687 13.1714 8.49219 15.1163C8.36588 15.2546 8.18724 15.3334 7.99996 15.3334C7.81268 15.3334 7.63404 15.2546 7.50773 15.1163C5.73122 13.1714 4.72163 10.6474 4.66677 8.01391C4.66658 8.00465 4.66658 7.99539 4.66677 7.98613C4.72163 5.35259 5.73122 2.82862 7.50773 0.883738C7.63404 0.745461 7.81268 0.666687 7.99996 0.666687ZM6.00011 8.00002C6.0458 10.0499 6.7508 12.0235 7.99996 13.6328C9.24912 12.0235 9.95411 10.0499 9.9998 8.00002C9.95411 5.95013 9.24912 3.97658 7.99996 2.36722C6.7508 3.97658 6.0458 5.95013 6.00011 8.00002Z"
          fill="#7C2D12"
        />
      </g>
      <defs>
        <clipPath id="clip0_12555_1456">
          <rect width="16" height="16" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Diversity;
