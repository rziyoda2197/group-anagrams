function groupAnagrams(strs) {
    const anagrams = {};
    for (const str of strs) {
        const sortedStr = str.split('').sort().join('');
        if (!anagrams[sortedStr]) {
            anagrams[sortedStr] = [str];
        } else {
            anagrams[sortedStr].push(str);
        }
    }
    return Object.values(anagrams);
}

const strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs)); // [["eat","tea","ate"],["tan","nat"],["bat"]]
