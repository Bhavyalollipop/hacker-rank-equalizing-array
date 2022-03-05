function getsortedObject(arr,threshold, mincount,n) {
    var sortobj = {}
    var i =0;
    while(i < n) {
        var arri = arr[i];
        sortobj[arri] = sortobj[arri] ? sortobj[arri] + 1 : 1;
        if(sortobj[arri] >= threshold) {
            return mincount.reduce((pval, cval) => cval.val == arri ? pval + cval?.opcount : pval, 0)
        }
        i++;
    }
    return null;
}

function minOperations(arr, threshold, d, n, mincount = []) {
    var i =0;
    while(i < n) {
        var arri = arr[i];
        mincount[i] = {
            opcount : mincount[i]?.opcount || 0,
            val : arri
        }
        var result = getsortedObject(arr,threshold,mincount,n)
        if(result || result == 0) {
            return result
        }
        if(arri > 0) {
        arri = ~~(arri/d);
            mincount[i] = {
            opcount : mincount[i]?.opcount + 1,
            val : arri
            }
        }
        arr[i] = arri;
        i++;
    }
    return minOperations(arr,threshold,d,n,mincount)
    
}
