#!/usr/bin/env node
/**
 * XOR Properties
 
 XOR
┏━━━┯━━━┯━━━━━┓
┃ A │ B │ A^B ┃
┠───┼───┼─────┨
┃ 0 │ 0 │  0  ┃
┠───┼───┼─────┨
┃ 1 │ 0 │  1  ┃
┠───┼───┼─────┨
┃ 0 │ 1 │  1  ┃
┠───┼───┼─────┨
┃ 1 │ 1 │  0  ┃
┗━━━┷━━━┷━━━━━┛

Commutative Property
A ^ B = B ^ A
┏━━━┯━━━┯━━━━━┓  ┏━━━┯━━━┯━━━━━┓
┃ A │ B │ A^B ┃  ┃ B │ A │ B^A ┃
┠───┼───┼─────┨  ┠───┼───┼─────┨
┃ 0 │ 0 │  0  ┃  ┃ 0 │ 0 │  0  ┃
┠───┼───┼─────┨  ┠───┼───┼─────┨
┃ 1 │ 0 │  1  ┃  ┃ 0 │ 1 │  1  ┃
┠───┼───┼─────┨  ┠───┼───┼─────┨
┃ 0 │ 1 │  1  ┃  ┃ 1 │ 0 │  1  ┃
┠───┼───┼─────┨  ┠───┼───┼─────┨
┃ 1 │ 1 │  0  ┃  ┃ 1 │ 1 │  0  ┃
┗━━━┷━━━┷━━━━━┛  ┗━━━┷━━━┷━━━━━┛

Zero'd
A^A = 0

Associative Property
A^B^C = A^C^B
A 0110
B 1010
C 1011
A^B = 1100
1100 ^ C = 0111

A^C^B
A^C = 1101
1101 ^ B = 0111
*/

function findMissingItem(subject, n) {
	if(!Array.isArray(subject) || !subject.length ) return null;
	let missing = subject[0];
	for(let i=1; i<subject.length; i++){
		missing = missing ^ subject[i];	
	}
	for(let i=1; i<=n; i++){
		missing = missing ^ i;
	}
	return missing;
}

function findMissingItem2(subject, n) {
	return ((n*(n+1))/2) - subject.reduce((a,i)=>a+i,0);
}

function tests() {
	[
		[findMissingItem, [[1,2], 3], 3],
		[findMissingItem, [[1, 2, 3, 4, 5, 6, 7], 7], 0],
		[findMissingItem, [[2, 7, 4, 3, 6, 5, 8], 8], 1],
		[findMissingItem2, [[1,2], 3], 3],
		[findMissingItem2, [[1, 2, 3, 4, 5, 6, 7], 7], 0],
		[findMissingItem2, [[2, 7, 4, 3, 6, 5, 8], 8], 1]
	].forEach(test=>{
		let result = test[0](...test[1]),
			expected = test[2],
			passed = result === expected;

		console.log("Result '%s' expected '%s' -- ", result, expected, passed?'SUCCESS':'FAILED');
	});
}

if (require.main === module) {
	tests();
}
