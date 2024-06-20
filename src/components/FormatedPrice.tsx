import React from 'react';

interface Props {
  price: number;
}

export default function FormattedPrice({ price }: Props) {
  const formattedAmount = new Number(price).toLocaleString('en-US', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  });

  return <span>{formattedAmount}</span>;
}
