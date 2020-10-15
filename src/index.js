module.exports = function toReadable (number) {
    let th = ['','hundred','thousand','million', 'billion','trillion'];
    let dg = ['zero','one','two','three','four','five','six','seven','eight','nine'];
    let tn = ['ten','eleven','twelve','thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    let tw = ['twenty','thirty','forty','fifty','sixty','seventy','eighty','ninety'];
console.log(number);
    number = number.toString();
    number = number.replace(/[\, ]/g,'');
    if (number != parseFloat(number)) return 'not a number';
    var x = number.indexOf('.');
    if (x == -1)
        x = number.length;
    if (x > 15)
        return 'too big';
    var n = number.split(''); 
    var str = '';
    var sk = 0;
    for (var i=0;   i < x;  i++) {
        if ((x-i)%3==2) { 
            if (n[i] == '1') {
                str += tn[Number(n[i+1])] + ' ';
                i++;
                sk=1;
            } else if (n[i]!=0) {
                str += tw[n[i]-2] + ' ';
                sk=1;
            }
        } else if (n[i]!=0) { // 0235
            str += dg[n[i]] +' ';
            if ((x-i)%3==0) str += 'hundred ';
            sk=1;
        }
        if ((x-i)%3==1) {
            if (sk)
                str += th[(x-i-1)/3] + ' ';
            sk=0;
        }
    }

    if (x != number.length) {
        var y = number.length;
        str += 'point ';
        for (var i=x+1; i<y; i++)
            str += dg[n[i]] +' ';
    }
    
    // console.log('Q' + str.replace(/\s+/g,' ') + 'Q');
    console.log('Q' + str.replace(/\s+/g,' ') + 'Q');
    
    let numString = str.replace(/\s+/g,' ');
    if (number == 0) return 'zero';

    return numString.trimEnd();

};