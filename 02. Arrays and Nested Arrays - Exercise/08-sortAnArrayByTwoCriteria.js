function sortAnArrayByTwoCriteria(arr) {
    const sorted = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));
    console.log(sorted.join("\n"));
 }