# 09 - Drills: "what does this print?"

Every answer below was **executed in Node v20.20.2** (`node tools/verify.js`), none comes from memory.

How to use: read the snippet, commit to an answer ON PAPER, then open the answer. Snippets marked *(strict)* run under `"use strict"`. `Error:X` means "throws X". Snippets that are function bodies are shown as such.

## typeof

**1.**

```js
typeof null
```
<details><summary>Answer</summary>

`'object'` - Historical bug kept for compatibility. null is NOT an object.

</details>

**2.**

```js
typeof NaN
```
<details><summary>Answer</summary>

`'number'` - NaN is a (special) numeric value.

</details>

**3.**

```js
typeof typeof 0
```
<details><summary>Answer</summary>

`'string'` - typeof always returns a string, so the outer one gives "string".

</details>

**4.**

```js
typeof undeclaredAnywhere
```
<details><summary>Answer</summary>

`'undefined'` - typeof on a never-declared name does NOT throw. Reading it would.

</details>

**5.**

```js
typeof []
```
<details><summary>Answer</summary>

`'object'` - Arrays are objects. Use Array.isArray() to tell them apart.

</details>

**6.**

```js
typeof function () {}
```
<details><summary>Answer</summary>

`'function'` - Functions are objects, but typeof reports "function" (convenient, technically inconsistent).

</details>

**7.**

```js
typeof new String("a")
```
<details><summary>Answer</summary>

`'object'` - The wrapper object is not the primitive. typeof String("a") is "string".

</details>

**8.**

```js
typeof 10n
```
<details><summary>Answer</summary>

`'bigint'` - BigInt literal.

</details>

**9.**

```js
typeof Symbol()
```
<details><summary>Answer</summary>

`'symbol'` - Symbol.

</details>

**10.**

```js
typeof ""
```
<details><summary>Answer</summary>

`'string'` - Empty string is still a string (not undefined, not null).

</details>

**11.**

```js
typeof Math
```
<details><summary>Answer</summary>

`'object'` - Math is a built-in object, not a function.

</details>

**12.**

```js
typeof /a/
```
<details><summary>Answer</summary>

`'object'` - A regular expression literal produces a RegExp object.

</details>

## Numbers

**13.**

```js
0.1 + 0.2
```
<details><summary>Answer</summary>

`0.30000000000000004` - Binary floating point. Never compare floats with ===.

</details>

**14.**

```js
0.1 + 0.2 === 0.3
```
<details><summary>Answer</summary>

`false` - See above.

</details>

**15.**

```js
(0.1 + 0.2).toFixed(2)
```
<details><summary>Answer</summary>

`'0.30'` - toFixed returns a STRING (math2 task trap).

</details>

**16.**

```js
1 / 0
```
<details><summary>Answer</summary>

`Infinity` - No error on division by zero.

</details>

**17.**

```js
0 / 0
```
<details><summary>Answer</summary>

`NaN` - Undefined operation.

</details>

**18.**

```js
-1 / 0
```
<details><summary>Answer</summary>

`-Infinity` - Negative infinity.

</details>

**19.**

```js
NaN === NaN
```
<details><summary>Answer</summary>

`false` - NaN is the only value not equal to itself.

</details>

**20.**

```js
NaN == NaN
```
<details><summary>Answer</summary>

`false` - Same with ==.

</details>

**21.**

```js
Object.is(NaN, NaN)
```
<details><summary>Answer</summary>

`true` - Object.is treats NaN as equal to itself.

</details>

**22.**

```js
NaN ** 0
```
<details><summary>Answer</summary>

`1` - The one exception to "NaN propagates".

</details>

**23.**

```js
isNaN("abc")
```
<details><summary>Answer</summary>

`true` - Global isNaN converts to number first.

</details>

**24.**

```js
Number.isNaN("abc")
```
<details><summary>Answer</summary>

`false` - Number.isNaN does NOT convert: "abc" is not the value NaN.

</details>

**25.**

```js
isNaN(undefined)
```
<details><summary>Answer</summary>

`true` - undefined converts to NaN. (The math2 template uses isNaN(finalNumber): an undefined finalNumber "fails" the check.)

</details>

**26.**

```js
2 ** 53 === 2 ** 53 + 1
```
<details><summary>Answer</summary>

`true` - Beyond 2**53 integers lose precision (that is why BigInt exists).

</details>

**27.**

```js
-0 === 0
```
<details><summary>Answer</summary>

`true` - -0 exists, === ignores it.

</details>

**28.**

```js
Object.is(-0, 0)
```
<details><summary>Answer</summary>

`false` - Object.is does not.

</details>

**29.**

```js
0xff + 0b101 + 0o17
```
<details><summary>Answer</summary>

`275` - 255 + 5 + 15. Hex, binary, octal literals.

</details>

**30.**

```js
1_000 + 1e3
```
<details><summary>Answer</summary>

`2000` - Numeric separators and scientific notation are literals.

</details>

**31.**

```js
5..toString()
```
<details><summary>Answer</summary>

`'5'` - 5. is a number, then .toString(). "5.toString()" is a SyntaxError.

</details>

**32.**

```js
5.toString()
```
<details><summary>Answer</summary>

`Error:SyntaxError` - The parser reads "5." as a decimal literal.

</details>

**33.**

```js
(255).toString(16)
```
<details><summary>Answer</summary>

`'ff'` - Base conversion.

</details>

**34.**

```js
(1.005).toFixed(2)
```
<details><summary>Answer</summary>

`'1.00'` - 1.005 is really 1.00499999999999989... Rounding follows the real binary value.

</details>

**35.**

```js
12.34.toFixed(1)
```
<details><summary>Answer</summary>

`'12.3'` - Number literal followed by a method works when the literal already has a dot.

</details>

**36.**

```js
Math.round(2.5) + Math.round(-2.5)
```
<details><summary>Answer</summary>

`1` - round(2.5)=3 and round(-2.5)=-2 (ties go toward +Infinity).

</details>

**37.**

```js
Math.max()
```
<details><summary>Answer</summary>

`-Infinity` - Empty max is -Infinity, empty min is Infinity.

</details>

**38.**

```js
7 + 13 / 9 + 7
```
<details><summary>Answer</summary>

`15.444444444444445` - math2 template: division before additions.

</details>

**39.**

```js
((7 + 13 / 9 + 7) * (100 / 2 * 6)).toFixed(2)
```
<details><summary>Answer</summary>

`'4633.33'` - math2: result *= result2, then toFixed(2). It is a string; Number() it for finalNumber.

</details>

**40.**

```js
Number((4633.3333).toFixed(2))
```
<details><summary>Answer</summary>

`4633.33` - String -> number again.

</details>

## Type conversions

**41.**

```js
"5" + 2
```
<details><summary>Answer</summary>

`'52'` - + with a string concatenates.

</details>

**42.**

```js
"5" - 2
```
<details><summary>Answer</summary>

`3` - - only means subtraction.

</details>

**43.**

```js
"5" * "2"
```
<details><summary>Answer</summary>

`10` - * converts both to numbers.

</details>

**44.**

```js
1 + 2 + "3"
```
<details><summary>Answer</summary>

`'33'` - Left to right: 3 first, then "33".

</details>

**45.**

```js
"1" + 2 + 3
```
<details><summary>Answer</summary>

`'123'` - Left to right: "12" then "123".

</details>

**46.**

```js
"12" - 2
```
<details><summary>Answer</summary>

`10` - Not "unconcatenation".

</details>

**47.**

```js
+"" + +" " + +"
"
```
<details><summary>Answer</summary>

`0` - Whitespace-only strings convert to 0.

</details>

**48.**

```js
+"abc"
```
<details><summary>Answer</summary>

`NaN` - Unary + = Number().

</details>

**49.**

```js
+true + +null
```
<details><summary>Answer</summary>

`1` - true=1, null=0.

</details>

**50.**

```js
+undefined
```
<details><summary>Answer</summary>

`NaN` - null->0 but undefined->NaN.

</details>

**51.**

```js
+[]
```
<details><summary>Answer</summary>

`0` - [] -> "" -> 0.

</details>

**52.**

```js
+[5]
```
<details><summary>Answer</summary>

`5` - [5] -> "5" -> 5.

</details>

**53.**

```js
+[1, 2]
```
<details><summary>Answer</summary>

`NaN` - "1,2" -> NaN.

</details>

**54.**

```js
+{}
```
<details><summary>Answer</summary>

`NaN` - "[object Object]" -> NaN.

</details>

**55.**

```js
Number("12px")
```
<details><summary>Answer</summary>

`NaN` - Number is strict about the WHOLE string.

</details>

**56.**

```js
parseInt("12px")
```
<details><summary>Answer</summary>

`12` - parseInt reads while it can.

</details>

**57.**

```js
parseFloat("3.14abc")
```
<details><summary>Answer</summary>

`3.14` - Same idea.

</details>

**58.**

```js
Number("0xa") + Number("4e8") / 2
```
<details><summary>Answer</summary>

`200000010` - Hex and scientific notation are parsed (teacher note).

</details>

**59.**

```js
Number("1,5")
```
<details><summary>Answer</summary>

`NaN` - Only "." is the decimal separator.

</details>

**60.**

```js
Number("  12  ")
```
<details><summary>Answer</summary>

`12` - Trims whitespace.

</details>

**61.**

```js
Number(null) + Number(false) + Number("")
```
<details><summary>Answer</summary>

`0` - All three are 0.

</details>

**62.**

```js
String(null) + String(undefined)
```
<details><summary>Answer</summary>

`'nullundefined'` - String conversion is obvious.

</details>

**63.**

```js
String([1, 2]) + String([]) + String({})
```
<details><summary>Answer</summary>

`'1,2[object Object]'` - [] gives "" (empty).

</details>

**64.**

```js
[] + {}
```
<details><summary>Answer</summary>

`'[object Object]'` - Both to strings, then concatenated.

</details>

**65.**

```js
[1] + [2]
```
<details><summary>Answer</summary>

`'12'` - No array merging with +.

</details>

**66.**

```js
"b" + "a" + +"a" + "a"
```
<details><summary>Answer</summary>

`'baNaNa'` - Classic: +"a" is NaN, then concatenated.

</details>

**67.**

```js
"5" + + "5"
```
<details><summary>Answer</summary>

`'55'` - Unary + makes 5, but then the binary + concatenates.

</details>

**68.**

```js
// function body
let a = "1", b = "2";
return [a + b, +a + +b];
```
<details><summary>Answer</summary>

`[ '12', 3 ]` - The unary + trick (prompt values!).

</details>

**69.**

```js
[Number(undefined), Number(null), Number(true), Number("")]
```
<details><summary>Answer</summary>

`[ NaN, 0, 1, 0 ]` - The ToNumber table: undefined -> NaN, null -> 0.

</details>

**70.**

```js
"" + 1 + 0
```
<details><summary>Answer</summary>

`'10'` - String first.

</details>

**71.**

```js
"" - 1 + 0
```
<details><summary>Answer</summary>

`-1` - "" - 1 = -1, + 0.

</details>

**72.**

```js
true + false
```
<details><summary>Answer</summary>

`1` - 1 + 0.

</details>

**73.**

```js
"4" - 2
```
<details><summary>Answer</summary>

`2` - Numeric.

</details>

**74.**

```js
"4px" - 2
```
<details><summary>Answer</summary>

`NaN` - Whole string must be numeric.

</details>

**75.**

```js
7 / 0
```
<details><summary>Answer</summary>

`Infinity` - No error.

</details>

**76.**

```js
" -9 " + 5
```
<details><summary>Answer</summary>

`' -9 5'` - Concatenation: spaces kept.

</details>

**77.**

```js
" -9 " - 5
```
<details><summary>Answer</summary>

`-14` - Spaces trimmed for numbers.

</details>

**78.**

```js
null + 1
```
<details><summary>Answer</summary>

`1` - null -> 0.

</details>

**79.**

```js
undefined + 1
```
<details><summary>Answer</summary>

`NaN` - undefined -> NaN.

</details>

**80.**

```js
" \t 
" - 2
```
<details><summary>Answer</summary>

`-2` - Whitespace-only -> 0.

</details>

## Truthy / falsy

**81.**

```js
Boolean("0")
```
<details><summary>Answer</summary>

`true` - Any non-empty string is truthy, including "0" and "false".

</details>

**82.**

```js
Boolean(" ")
```
<details><summary>Answer</summary>

`true` - A space is not empty.

</details>

**83.**

```js
Boolean([]) && Boolean({})
```
<details><summary>Answer</summary>

`true` - Empty array and object are truthy.

</details>

**84.**

```js
Boolean(NaN) || Boolean(-0) || Boolean(0n) || Boolean("")
```
<details><summary>Answer</summary>

`false` - The full falsy list: false, 0, -0, 0n, "", null, undefined, NaN.

</details>

**85.**

```js
Boolean(new Boolean(false))
```
<details><summary>Answer</summary>

`true` - Any object is truthy, even a wrapper around false.

</details>

**86.**

```js
!!"false"
```
<details><summary>Answer</summary>

`true` - !! is Boolean().

</details>

**87.**

```js
[] == false
```
<details><summary>Answer</summary>

`true` - [] -> "" -> 0 and false -> 0. But [] is truthy in an if!

</details>

**88.**

```js
[] == ![]
```
<details><summary>Answer</summary>

`true` - ![] is false, then as above.

</details>

## Comparisons and equality

**89.**

```js
null == undefined
```
<details><summary>Answer</summary>

`true` - Special rule.

</details>

**90.**

```js
null === undefined
```
<details><summary>Answer</summary>

`false` - Different types.

</details>

**91.**

```js
null == 0
```
<details><summary>Answer</summary>

`false` - == with null/undefined does no numeric conversion.

</details>

**92.**

```js
null >= 0
```
<details><summary>Answer</summary>

`true` - >= converts null to 0, while == does not. Inconsistent but true.

</details>

**93.**

```js
null > 0
```
<details><summary>Answer</summary>

`false` - 0 > 0 is false.

</details>

**94.**

```js
undefined == 0
```
<details><summary>Answer</summary>

`false` - Rule above.

</details>

**95.**

```js
undefined > 0 || undefined < 0 || undefined >= 0
```
<details><summary>Answer</summary>

`false` - undefined -> NaN: every comparison is false.

</details>

**96.**

```js
0 == ""
```
<details><summary>Answer</summary>

`true` - "" -> 0.

</details>

**97.**

```js
0 == "0"
```
<details><summary>Answer</summary>

`true` - "0" -> 0.

</details>

**98.**

```js
"" == "0"
```
<details><summary>Answer</summary>

`false` - Both strings: no conversion. == is not transitive!

</details>

**99.**

```js
false == "0"
```
<details><summary>Answer</summary>

`true` - Both to 0.

</details>

**100.**

```js
false == undefined
```
<details><summary>Answer</summary>

`false` - Rule above.

</details>

**101.**

```js
"1" == 1
```
<details><summary>Answer</summary>

`true` - String to number.

</details>

**102.**

```js
"2" > "12"
```
<details><summary>Answer</summary>

`true` - Both strings: lexicographic ("2" > "1").

</details>

**103.**

```js
2 > "12"
```
<details><summary>Answer</summary>

`false` - One number: numeric.

</details>

**104.**

```js
"a" > "A"
```
<details><summary>Answer</summary>

`true` - Lowercase has a greater Unicode code.

</details>

**105.**

```js
"Z" < "a"
```
<details><summary>Answer</summary>

`true` - All uppercase < lowercase.

</details>

**106.**

```js
"ñ" > "z" && "á" > "z"
```
<details><summary>Answer</summary>

`true` - Non-ASCII letters sort AFTER z (not a dictionary order).

</details>

**107.**

```js
"apple" < "apple pie"
```
<details><summary>Answer</summary>

`true` - A prefix is smaller.

</details>

**108.**

```js
"10" < "9"
```
<details><summary>Answer</summary>

`true` - Strings again.

</details>

**109.**

```js
[10, 9, 1].sort().join()
```
<details><summary>Answer</summary>

`'1,10,9'` - Default sort compares as strings.

</details>

**110.**

```js
"stromboli" === "stROmBoLi"
```
<details><summary>Answer</summary>

`false` - Case-sensitive (math3 password).

</details>

**111.**

```js
[1] == 1
```
<details><summary>Answer</summary>

`true` - [1] -> "1" -> 1.

</details>

**112.**

```js
({}) == ({})
```
<details><summary>Answer</summary>

`false` - Objects compare by reference.

</details>

**113.**

```js
[] === []
```
<details><summary>Answer</summary>

`false` - Two different arrays.

</details>

**114.**

```js
3 > 2 > 1
```
<details><summary>Answer</summary>

`false` - (3>2)=true, true>1 is false.

</details>

**115.**

```js
1 < 2 < 3
```
<details><summary>Answer</summary>

`true` - (1<2)=true, true<3 is true.

</details>

**116.**

```js
3 > 2 >= 1
```
<details><summary>Answer</summary>

`true` - true >= 1.

</details>

**117.**

```js
5 > 4
```
<details><summary>Answer</summary>

`true` - jsinfo comparison task.

</details>

**118.**

```js
"apple" > "pineapple"
```
<details><summary>Answer</summary>

`false` - "a" < "p".

</details>

**119.**

```js
"2" > "12"
```
<details><summary>Answer</summary>

`true` - Strings.

</details>

**120.**

```js
undefined == null
```
<details><summary>Answer</summary>

`true` - Special rule.

</details>

**121.**

```js
undefined === null
```
<details><summary>Answer</summary>

`false` - Strict.

</details>

**122.**

```js
null == "
0
"
```
<details><summary>Answer</summary>

`false` - null == only undefined.

</details>

**123.**

```js
null === +"
0
"
```
<details><summary>Answer</summary>

`false` - null !== 0.

</details>

## Operators, precedence, assignment

**124.**

```js
2 ** 3 ** 2
```
<details><summary>Answer</summary>

`512` - ** is right-to-left: 2 ** 9.

</details>

**125.**

```js
-2 ** 2
```
<details><summary>Answer</summary>

`Error:SyntaxError` - Ambiguous unary minus before **: parentheses required.

</details>

**126.**

```js
(-2) ** 2
```
<details><summary>Answer</summary>

`4` - With parentheses.

</details>

**127.**

```js
-5 % 3
```
<details><summary>Answer</summary>

`-2` - The result has the sign of the dividend.

</details>

**128.**

```js
5 % -3
```
<details><summary>Answer</summary>

`2` - Same rule.

</details>

**129.**

```js
5.5 % 2
```
<details><summary>Answer</summary>

`1.5` - % works with floats.

</details>

**130.**

```js
-48 % 2 === 0
```
<details><summary>Answer</summary>

`true` - -48 % 2 is -0 and -0 === 0. Parity: use % 2 === 0, never === 1 (negative odds give -1).

</details>

**131.**

```js
2 + "3" * 4
```
<details><summary>Answer</summary>

`14` - * before +.

</details>

**132.**

```js
+"2" + +"3"
```
<details><summary>Answer</summary>

`5` - +apples + +oranges.

</details>

**133.**

```js
(1, 2, 3)
```
<details><summary>Answer</summary>

`3` - Comma operator: last value.

</details>

**134.**

```js
(1 + 2, 3 + 4)
```
<details><summary>Answer</summary>

`7` - Same.

</details>

**135.**

```js
// function body
let a = 1;
return a++ + ++a;
```
<details><summary>Answer</summary>

`4` - 1 (a becomes 2) + 3 (a becomes 3).

</details>

**136.**

```js
// function body
let i = 0;
i = i++;
return i;
```
<details><summary>Answer</summary>

`0` - Postfix returns the old value, which is then assigned back.

</details>

**137.**

```js
// function body
let x, y;
x = y = 2 + 1;
return [x, y];
```
<details><summary>Answer</summary>

`[ 3, 3 ]` - = is an operator, right-to-left. (y declared first.)

</details>

**138.** *(strict)*

```js
// function body
let x = y = 3;
return x;
```
<details><summary>Answer</summary>

`Error:ReferenceError` - y was never declared; strict mode forbids creating it.

</details>

**139.**

```js
// function body
let a;
a += 3;
return a;
```
<details><summary>Answer</summary>

`NaN` - undefined + 3 is NaN. (let a += 3 on one line is a SyntaxError.)

</details>

**140.**

```js
// function body
let a = 1;
return (a = 3) + a;
```
<details><summary>Answer</summary>

`6` - Assignment is an expression returning 3.

</details>

**141.**

```js
// function body
let n = 2;
n += 5;
n *= 2;
return n;
```
<details><summary>Answer</summary>

`14` - Modify-in-place.

</details>

**142.**

```js
4 ** (1 / 2) + 8 ** (1 / 3)
```
<details><summary>Answer</summary>

`4` - ** works with non-integers: square root 2 + cube root 2.

</details>

**143.**

```js
2 + 2 + "1"
```
<details><summary>Answer</summary>

`'41'` - Left to right.

</details>

**144.**

```js
"1" + 2 + 2
```
<details><summary>Answer</summary>

`'122'` - Left to right.

</details>

**145.**

```js
6 - "2" + "6" / "2"
```
<details><summary>Answer</summary>

`7` - 4 + 3.

</details>

**146.**

```js
"$" + 4 + 5 + 4 * "2"
```
<details><summary>Answer</summary>

`'$458'` - "$4", "$45", then 4*"2" = 8 appended.

</details>

**147.**

```js
1 + 2 + "3" + 4 * 5
```
<details><summary>Answer</summary>

`'3320'` - 3, "33", then 20 appended.

</details>

## &&  ||  ??  !

**148.**

```js
1 && 2
```
<details><summary>Answer</summary>

`2` - && returns the first falsy or the last.

</details>

**149.**

```js
0 && 2
```
<details><summary>Answer</summary>

`0` - Short-circuit returns 0, not false.

</details>

**150.**

```js
1 && null && 2
```
<details><summary>Answer</summary>

`null` - First falsy.

</details>

**151.**

```js
null || "x"
```
<details><summary>Answer</summary>

`'x'` - || returns the first truthy or the last.

</details>

**152.**

```js
"" || 0 || null
```
<details><summary>Answer</summary>

`null` - All falsy: the last.

</details>

**153.**

```js
undefined || null
```
<details><summary>Answer</summary>

`null` - The last one.

</details>

**154.**

```js
null ?? 5
```
<details><summary>Answer</summary>

`5` - ?? only skips null/undefined.

</details>

**155.**

```js
0 ?? 5
```
<details><summary>Answer</summary>

`0` - 0 is not nullish.

</details>

**156.**

```js
0 || 5
```
<details><summary>Answer</summary>

`5` - || skips every falsy.

</details>

**157.**

```js
"" ?? "x"
```
<details><summary>Answer</summary>

`''` - Empty string is kept.

</details>

**158.**

```js
true || false && false
```
<details><summary>Answer</summary>

`true` - && binds tighter than ||.

</details>

**159.**

```js
(true || false) && false
```
<details><summary>Answer</summary>

`false` - Parentheses.

</details>

**160.**

```js
!!"" + !!"0"
```
<details><summary>Answer</summary>

`1` - false + true = 1.

</details>

**161.**

```js
null || undefined ?? 1
```
<details><summary>Answer</summary>

`Error:SyntaxError` - Mixing || and ?? needs parentheses.

</details>

**162.**

```js
// function body
let a = 0;
a ||= 5;
a ??= 9;
return a;
```
<details><summary>Answer</summary>

`5` - ||= replaces falsy, ??= only nullish.

</details>

**163.**

```js
// function body
let log = [];
(log.push(1), 0) && log.push(2);
return log;
```
<details><summary>Answer</summary>

`[ 1 ]` - Right side not evaluated (short-circuit).

</details>

**164.**

```js
null || 2 && 3 || 4
```
<details><summary>Answer</summary>

`3` - && first: 2 && 3 -> 3; then null || 3 || 4 -> 3.

</details>

**165.**

```js
// function body
let log = [];
const f = (n) => { log.push(n);
return undefined;
};
const r = f(1) || 2 || f(3);
return [r, log];
```
<details><summary>Answer</summary>

`[ 2, [ 1 ] ]` - jsinfo "alert(alert(1) || 2 || alert(3))": f(1) logs, undefined is falsy, 2 is truthy and stops the chain. f(3) never runs.

</details>

**166.**

```js
// function body
let log = [];
const f = (n) => { log.push(n);
return undefined;
};
const r = f(1) && f(2);
return [r, log];
```
<details><summary>Answer</summary>

`[ undefined, [ 1 ] ]` - && stops at the first falsy value.

</details>

**167.**

```js
// function body
const age = 15;
return !(age >= 14 && age <= 90);
```
<details><summary>Answer</summary>

`false` - Inside range -> NOT -> false.

</details>

**168.**

```js
// function body
let h;
h = h ?? 100;
return h;
```
<details><summary>Answer</summary>

`100` - Same as h ??= 100.

</details>

**169.**

```js
(null || undefined) ?? "ok"
```
<details><summary>Answer</summary>

`'ok'` - With parentheses mixing is allowed.

</details>

## Conditional (ternary) operator

**170.**

```js
true ? false ? 1 : 2 : 3
```
<details><summary>Answer</summary>

`2` - Right-associative nesting.

</details>

**171.**

```js
0 ? "a" : "" ? "b" : "c"
```
<details><summary>Answer</summary>

`'c'` - Chained: a ? x : b ? y : z.

</details>

**172.**

```js
(() => {a: 1})()
```
<details><summary>Answer</summary>

`undefined` - {a: 1} is a BLOCK with a label, not an object.

</details>

**173.**

```js
(() => ({a: 1}))()
```
<details><summary>Answer</summary>

`{ a: 1 }` - Parentheses make it an object literal.

</details>

## Strings and literals

**174.**

```js
`a ${`b ${`c`} d`} e`
```
<details><summary>Answer</summary>

`'a b c d e'` - Nested template literals.

</details>

**175.**

```js
"the result is ${1 + 2}"
```
<details><summary>Answer</summary>

`'the result is ${1 + 2}'` - Only backticks interpolate.

</details>

**176.**

```js
`1 + 2 = ${1 + 2}`
```
<details><summary>Answer</summary>

`'1 + 2 = 3'` - Any expression.

</details>

**177.**

```js
`${[1, 2]}${{}}${null}${undefined}`
```
<details><summary>Answer</summary>

`'1,2[object Object]nullundefined'` - String conversion inside ${}.

</details>

**178.**

```js
`l1
l2`.split("
").length
```
<details><summary>Answer</summary>

`2` - Template literals allow real newlines.

</details>

**179.**

```js
// function body
let s = "abc";
s[0] = "z";
return s;
```
<details><summary>Answer</summary>

`'abc'` - Strings are immutable: silently ignored in sloppy mode.

</details>

**180.** *(strict)*

```js
// function body
let s = "abc";
s[0] = "z";
return s;
```
<details><summary>Answer</summary>

`Error:TypeError` - In strict mode the same line throws.

</details>

**181.**

```js
"abc".length
```
<details><summary>Answer</summary>

`3` - Property, no parentheses.

</details>

**182.**

```js
"It's" === `It's` && "a\tb".length === 3
```
<details><summary>Answer</summary>

`true` - Quote styles are equivalent; \t is one character.

</details>

## Variables, const, scope, strict mode

**183.**

```js
let let = 5
```
<details><summary>Answer</summary>

`Error:SyntaxError` - "let" cannot be a let-bound name.

</details>

**184.**

```js
let return = 5
```
<details><summary>Answer</summary>

`Error:SyntaxError` - Reserved word. (No error until that line is parsed/reached: a linter would warn earlier.)

</details>

**185.**

```js
// function body
const a = 1;
a = 2;
```
<details><summary>Answer</summary>

`Error:TypeError` - Assignment to constant variable.

</details>

**186.**

```js
// function body
const a = [1];
a.push(2);
return a;
```
<details><summary>Answer</summary>

`[ 1, 2 ]` - const protects the binding, not the contents.

</details>

**187.**

```js
// function body
const a;
```
<details><summary>Answer</summary>

`Error:SyntaxError` - const needs an initializer.

</details>

**188.**

```js
// function body
let a = 1;
let a = 2;
```
<details><summary>Answer</summary>

`Error:SyntaxError` - No redeclaration with let/const.

</details>

**189.**

```js
// function body
var a = 1;
var a = 2;
return a;
```
<details><summary>Answer</summary>

`2` - var allows redeclaration (one reason to avoid it).

</details>

**190.**

```js
// function body
let a = [1];
let b = a;
b.push(2);
return a;
```
<details><summary>Answer</summary>

`[ 1, 2 ]` - Only the reference is copied.

</details>

**191.**

```js
// function body
let a = 1;
let b = a;
b++;
return a;
```
<details><summary>Answer</summary>

`1` - Primitives are copied by value.

</details>

**192.**

```js
// function body
typeof x;
let x = 1;
```
<details><summary>Answer</summary>

`Error:ReferenceError` - typeof is only "safe" for names that were never declared. Inside the temporal dead zone it throws too.

</details>

**193.**

```js
// function body
x;
let x = 1;
```
<details><summary>Answer</summary>

`Error:ReferenceError` - Temporal dead zone.

</details>

**194.**

```js
// function body
return typeof x;
var x = 1;
```
<details><summary>Answer</summary>

`'undefined'` - var is hoisted (undefined until assigned).

</details>

**195.** *(strict)*

```js
// function body
num = 5;
return num;
```
<details><summary>Answer</summary>

`Error:ReferenceError` - Strict mode: num is not defined.

</details>

**196.**

```js
// function body
num = 5;
return num;
```
<details><summary>Answer</summary>

`5` - Sloppy mode silently creates a global.

</details>

## Semicolons (ASI)

**197.**

```js
// function body
let a = "abc"
[1, 2].length;
return a;
```
<details><summary>Answer</summary>

`1` - No ; inserted before "[": parsed as "abc"[(1, 2)].length, i.e. "c".length. So a is 1, not "abc".

</details>

**198.**

```js
// function body
const v = function () { return 1 }
(2);
return typeof v;
```
<details><summary>Answer</summary>

`'number'` - The "(" continues the line: the function is CALLED and v is 1.

</details>

**199.**

```js
// function body
let a = 1
let b = 2
return a + b
```
<details><summary>Answer</summary>

`3` - Newlines usually do act as ;.

</details>

**200.**

```js
// function body
return
5
```
<details><summary>Answer</summary>

`undefined` - ASI puts ; after return: never newline after return.

</details>

**201.**

```js
// function body
return (
5
)
```
<details><summary>Answer</summary>

`5` - Open parenthesis on the same line fixes it.

</details>

## Functions

**202.**

```js
// function body
return f();
function f() { return 1;
}
```
<details><summary>Answer</summary>

`1` - Function declarations are hoisted.

</details>

**203.**

```js
// function body
return f();
const f = function () { return 1;
};
```
<details><summary>Answer</summary>

`Error:ReferenceError` - Function expression in a const: temporal dead zone.

</details>

**204.**

```js
// function body
return f();
var f = function () { return 1;
};
```
<details><summary>Answer</summary>

`Error:TypeError` - var is hoisted as undefined: "f is not a function".

</details>

**205.**

```js
// function body
function f(a, b = "d") { return b;
} return [f(1), f(1, undefined), f(1, null), f(1, "")];
```
<details><summary>Answer</summary>

`[ 'd', 'd', null, '' ]` - Defaults only for strictly undefined.

</details>

**206.**

```js
// function body
function f(a, b = a * 2) { return b;
} return f(4);
```
<details><summary>Answer</summary>

`8` - Defaults may use earlier parameters.

</details>

**207.**

```js
// function body
function f(t) { t = t || "empty";
return t;
} return [f(0), f(""), f(null)];
```
<details><summary>Answer</summary>

`[ 'empty', 'empty', 'empty' ]` - || treats every falsy as missing, even 0.

</details>

**208.**

```js
// function body
function f(t) { return t ?? "unknown";
} return [f(0), f(""), f(null), f()];
```
<details><summary>Answer</summary>

`[ 0, '', 'unknown', 'unknown' ]` - ?? only null/undefined.

</details>

**209.**

```js
// function body
function f() {} return f();
```
<details><summary>Answer</summary>

`undefined` - No return -> undefined.

</details>

**210.**

```js
// function body
function f() { return;
} return f() === undefined;
```
<details><summary>Answer</summary>

`true` - Empty return -> undefined.

</details>

**211.**

```js
// function body
function f(a, b) {} return f.length;
```
<details><summary>Answer</summary>

`2` - Declared parameters.

</details>

**212.**

```js
// function body
function f(a, b = 1, c) {} return f.length;
```
<details><summary>Answer</summary>

`1` - length stops at the first default.

</details>

**213.**

```js
// function body
function f(a) { return a;
} return f(1, 2, 3);
```
<details><summary>Answer</summary>

`1` - Extra arguments are ignored; missing ones are undefined.

</details>

**214.**

```js
// function body
let a = 1;
function f(a) { a = 2;
} f(5);
return a;
```
<details><summary>Answer</summary>

`1` - The parameter shadows the outer variable.

</details>

**215.**

```js
// function body
return new Function("a", "let a = 1;
return a;")
```
<details><summary>Answer</summary>

`Error:SyntaxError` - A local let cannot redeclare a parameter (teacher note).

</details>

**216.**

```js
// function body
let n = 1;
function f() { let n = 2;
return n;
} f();
return n;
```
<details><summary>Answer</summary>

`1` - Local variable shadows outer one; the outer is untouched.

</details>

**217.**

```js
// function body
let n = 1;
function f() { n = 2;
} f();
return n;
```
<details><summary>Answer</summary>

`2` - No local declaration: modifies the outer.

</details>

**218.**

```js
// function body
const f = (a, b) => a + b;
return f(1, 2) + f.name.length;
```
<details><summary>Answer</summary>

`4` - Arrow assigned to const takes the name "f" (length 1).

</details>

**219.**

```js
// function body
function g(cb) { return cb(2);
} return g(x => x * 3);
```
<details><summary>Answer</summary>

`6` - Callback: a function passed as argument.

</details>

**220.**

```js
// function body
function f() {} const alias = f;
return alias === f;
```
<details><summary>Answer</summary>

`true` - Same object: no call, no parentheses.

</details>

## Loops

**221.**

```js
// function body
for (let i = 0;
i < 3;
i++) {} return typeof i;
```
<details><summary>Answer</summary>

`'undefined'` - let is block-scoped to the for.

</details>

**222.**

```js
// function body
for (var i = 0;
i < 3;
i++) {} return i;
```
<details><summary>Answer</summary>

`3` - var leaks out; ends at 3.

</details>

**223.**

```js
// function body
let n = 0;
do { n++;
} while (false);
return n;
```
<details><summary>Answer</summary>

`1` - do..while runs at least once.

</details>

**224.**

```js
// function body
let n = 0;
while (false) { n++;
} return n;
```
<details><summary>Answer</summary>

`0` - while may run zero times.

</details>

**225.**

```js
// function body
let i = 3, out = [];
while (i--) out.push(i);
return out;
```
<details><summary>Answer</summary>

`[ 2, 1, 0 ]` - i-- is tested BEFORE the decrement takes effect on the body.

</details>

**226.**

```js
// function body
let out = [];
for (let i = 0;
i < 6;
i++) { if (i % 2) continue;
if (i > 3) break;
out.push(i);
} return out;
```
<details><summary>Answer</summary>

`[ 0, 2 ]` - continue skips odds; break at 4.

</details>

**227.**

```js
// function body
let out = [], i = 0;
for (;
i < 3;) out.push(i++);
return out;
```
<details><summary>Answer</summary>

`[ 0, 1, 2 ]` - Any of the three for-parts can be omitted.

</details>

**228.**

```js
// function body
let out = [];
for (let i = 0, j = 3;
i < j;
i++, j--) out.push([i, j].join("-"));
return out;
```
<details><summary>Answer</summary>

`[ '0-3', '1-2' ]` - Comma in the init and step parts.

</details>

**229.**

```js
// function body
for (const i = 0;
i < 2;
i++) {}
```
<details><summary>Answer</summary>

`Error:TypeError` - The step i++ assigns to a const.

</details>

**230.**

```js
// function body
let out = [];
outer: for (let i = 0;
i < 3;
i++) { for (let j = 0;
j < 3;
j++) { if (j === 1) continue outer;
if (i === 2) break outer;
out.push(`${i}${j}`);
} } return out;
```
<details><summary>Answer</summary>

`[ '00', '10' ]` - Labels reach the outer loop.

</details>

**231.**

```js
// function body
let t = "", i = 5;
while (i >= 2) { if (i % 2) { i--;
continue;
} t += i + ",";
i--;
} return t;
```
<details><summary>Answer</summary>

`'4,2,'` - In while, decrement BEFORE continue or it loops forever. Note the trailing separator.

</details>

**232.**

```js
// function body
let i = 3, out = [];
while (--i) out.push(i);
return out;
```
<details><summary>Answer</summary>

`[ 2, 1 ]` - Prefix: decrement first, 0 stops before the body runs.

</details>

**233.**

```js
// function body
let out = [];
for (let i = 0;
i < 3;
++i) out.push(i);
let out2 = [];
for (let i = 0;
i < 3;
i++) out2.push(i);
return out.join() === out2.join();
```
<details><summary>Answer</summary>

`true` - i++ vs ++i in the step part makes no difference (value unused).

</details>

**234.**

```js
new Function("let i = 0; (i > 0) ? break : i++;")
```
<details><summary>Answer</summary>

`Error:SyntaxError` - break/continue are statements; ? : needs expressions.

</details>

**235.**

```js
new Function("5++")
```
<details><summary>Answer</summary>

`Error:SyntaxError` - ++ needs a variable (assignment target).

</details>

## switch

**236.**

```js
// function body
function f(x) { switch (x) { case 2: return "num";
default: return "other";
} } return f("2");
```
<details><summary>Answer</summary>

`'other'` - switch compares with ===.

</details>

**237.**

```js
// function body
let out = "";
switch (1) { case 1: out += "a";
case 2: out += "b";
break;
case 3: out += "c";
} return out;
```
<details><summary>Answer</summary>

`'ab'` - Fall-through without break.

</details>

**238.**

```js
// function body
let out = "";
switch (5) { default: out += "d";
case 1: out += "1";
break;
case 2: out += "2";
} return out;
```
<details><summary>Answer</summary>

`'d1'` - default can be in the middle; it falls through too.

</details>

**239.**

```js
// function body
function f(s) { switch (true) { case s < 0 || s > 100: return "err";
case s < 20: return "low";
default: return "high";
} } return [f(-1), f(19.5), f(50), f(NaN)];
```
<details><summary>Answer</summary>

`[ 'err', 'low', 'high', 'high' ]` - switch(true) hack (#9 of the UT task). NaN ends in default.

</details>

**240.**

```js
// function body
let out = "";
switch (1) { case 1: let a = 5;
out += a;
break;
case 2: out += typeof a;
} return out;
```
<details><summary>Answer</summary>

`'5'` - The whole switch body is ONE block scope (let in a case needs {} to be safe).

</details>

**241.**

```js
// function body
function f(v) { switch (v) { case "1": case 1: return "one";
default: return "?";
} } return [f(1), f("1"), f(true)];
```
<details><summary>Answer</summary>

`[ 'one', 'one', '?' ]` - Grouped cases share code; === means 1 and "1" need separate cases.

</details>

