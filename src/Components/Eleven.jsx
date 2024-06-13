import React from 'react'

export default function Eleven() {
  let quote = [
    "sdadfads asdfasdf dsfadsfa " , " 2nd para " , "3rd para " , "4th para "
, "5th para "    ];

const randomIndex = Math.floor(Math.random()*quote.length);

const quote = quote[randomIndex];
// console.log(quote);
return (

<div>
  {quote}
</div>
)
}
