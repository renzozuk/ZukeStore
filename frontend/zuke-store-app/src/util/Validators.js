function getDigit(number) {
    if (number < 9) return number;
    return Math.floor(number / 10) + number % 10;
}
 
function getSize(d) {
    let num = d.toString();
    return num.length;
}

function getPrefix(number,k) {
    if (getSize(number) > k) {
        let num = number.toString();
        return parseInt(num.substring(0, k));
    }
    return number;
}
 
function prefixMatched(number,d) {
    return getPrefix(number, getSize(d)) == d;
}
 

function sumOfDoubleEvenPlace(number) {
    let sum = 0;
    let num = number.toString() ;
    for (let i = getSize(number) - 2; i >= 0; i -= 2)
        sum += getDigit((num.charCodeAt(i) - '0'.charCodeAt(0)) * 2);
    
    return sum;
}
 
function sumOfOddPlace(number) {
    let sum = 0;
    let num = number.toString();
    for (let i = getSize(number) - 1; i >= 0; i -= 2)
        sum += num.charCodeAt(i) - '0'.charCodeAt(0);
    return sum;
}
 
function isValid(number) {
    return (getSize(number) >= 13 &&
            getSize(number) <= 16) &&
        (prefixMatched(number, 4) ||
        prefixMatched(number, 5) ||
        prefixMatched(number, 37) ||
        prefixMatched(number, 6)) &&
        ((sumOfDoubleEvenPlace(number) +
        sumOfOddPlace(number)) % 10 == 0);
}

function isVisa(number) {
    return number.startsWith("4") && (number.length === 13 || number.length === 16 || number.length === 19);
}

function isMasterCard(number) {
    return ((parseInt(number.substring(0, 2)) >= 51 && parseInt(number.substring(0, 2)) <= 55) || (parseInt(number.substring(0, 4)) >= 2221 && parseInt(number.substring(0, 4)) <= 2720)) && number.length === 16;
}

export { isValid, isVisa, isMasterCard };