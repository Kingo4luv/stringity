const strSlug = (str, del = "-") => {
    return str.toLowerCase().split(" ").join(del)
}

const strTruncate = (str, num, strToAppend = "....") => {
    return str.split("").splice(0, num).join("") + strToAppend;
}


// const strAfter = (str, strAfter) => {
//     let strArray = str.split(" ");
//     let strAfterArray = strAfter.split(" ")

//     if (strArray.indexOf(strAfterArray[strAfterArray.length - 1]) === -1) {
//         return str
//     }


//     return strArray.slice(strArray.indexOf(strAfterArray[strAfterArray.length - 1]) + 1).join(" ")

// }

// const strAfterLast = (str, strAfter) => {
//     let strArray = str.split(" ");

//     if (strArray.includes(strAfter)) {
//         return strArray.slice(strArray.indexOf(strAfter) + 1).join(" ");
//     }

//     return str;

// }

//convert string to camel case
const strCamel = (str) => {
    return str.split("_").map((item, i) =>
        i > 0 ? item.substr(0, 1).toUpperCase() + item.substr(1) : item
    ).join("")
}

//convert string to studly case
const strStudly = (str) => {
    return str.split("_").map((item, i) =>
        item.substr(0, 1).toUpperCase() + item.substr(1)
    ).join("")
}

//check if string contains a given value
const strContains = (str, contains) => {
    return str.split(" ").includes(contains);
}

//check if string contains all array value
const strContainsAll = (str, containsArr) => {
    const boolArray = [];
    const strArr = str.toLowerCase().split(" ");
    containsArr.forEach(word => {
        boolArray.push(strArr.includes(word.toLowerCase()));
    });
    return boolArray.includes(false) ? false : true;

}


//check if a given string ends with a value
const strEndsWith = (str, endsWith) => {
    const strArr = str.toLowerCase().split(" ");
    return strArr[strArr.length - 1] === endsWith.toLowerCase();
}


//check if a given string starts with a value
const strStartsWith = (str, startsWith) => {
    const strArr = str.toLowerCase().split(" ");
    return strArr[0] === startsWith.toLowerCase();
}
//converts the given string to kebab-case


//converts the given string to Title Case
const strTitle = (str) => {
    return str.split(" ").map(word => word.substr(0, 1).toUpperCase() + word.substr(1)).join(" ")
}


//returns the given string with the first character capitalized
const strUcFirst = (str) => {
    return str.split(" ").map((word, i) => i < 1 ? word.substr(0, 1).toUpperCase() + word.substr(1) : word).join(" ")
}

//limits the number of words in a string
const strLimitWords = (str, num, strToAppend = "...") => {
    return str.split(" ").slice(0, num).join(" ") + strToAppend
}

console.log(strLimitWords("this is just me sha", 3, ));