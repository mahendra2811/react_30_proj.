import React from 'react'

export default function Eleven() {
  let quotes = [
    "sdadfads asdfasdf dsfadsfa " , " 2nd para " , "3rd para " , "4th para "
, "5th para ", " 6th" , "7th "    ];

const randomIndex = Math.floor(Math.random()*quotes.length);

const quote = quotes[randomIndex];
console.log(quote);
return (

    <div>
      {quote}
    </div>
  )
}
