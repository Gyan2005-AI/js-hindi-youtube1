console.log( 2 > 1 ); // Output will be in boolean (True and False)
console.log( 2 >= 1 );
console.log( 2 < 1 );
console.log( 2 == 1 );
console.log( 2 != 1 );


console.log( "2" > 1 )
console.log( "02" > 1 )


console.log( null > 0 )
console.log( null == 0 )
console.log( null >= 0 )

//The reason is that the equality check == and comparisons >,<,>=,>= works differently.
//Comparisons converts null into number treating as 0.
//Thats why (3) null >= 0 is true and (1) null > 0 is false.



console.log( undefined == 0 );
console.log( undefined > 0 );
console.log( undefined < 0 );


// ===

console.log( "2" === 2 ) // === checks strictly the value as well as datatype






