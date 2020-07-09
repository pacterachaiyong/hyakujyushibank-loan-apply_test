let mappingFlag = '1'
const utils = {
  //全角数字を半角数字に変換する
  ToCDB : function(str) {
    let tmp = "";
    for(let i=0;i<str.length;i++)
    {
      if(str.charCodeAt(i)>65248&&str.charCodeAt(i)<65375){
        tmp += String.fromCharCode(str.charCodeAt(i)-65248);
      }else {
        tmp += String.fromCharCode(str.charCodeAt(i));
      }
    }
    return tmp
  },
  //半角を全角に変換する
  changeToDBC : function(str) {
    let result = '';
    let len = str.length;
    for (let i = 0; i < len; i++) {
      let cCode: number = str.charCodeAt(i);
      cCode = cCode >= 0x0021 && cCode <= 0x007e ? cCode + 65248 : cCode;
      cCode = cCode == 0x0020 ? 0x03000 : cCode;
      result += String.fromCharCode(cCode);
    }
    return utils.toZenkanaCase(result);
  },
  //全角ひらがなを全角カタカナに変換します
  toKatakanaCase : function(str) {
    let i = str.length, a = [];

    while (i--) {
      let c: number = str.charCodeAt(i);
      // @ts-ignore
      a[i] = (0x3041 <= c && c <= 0x3096) ? c + 0x0060 : c;
    }
    return String.fromCharCode.apply(null, a);
  },
  //半角のカタカナを全角のカタカナに変換します
  toZenkanaCase : function(str) {
    let i, j, k1 = [],k2 = [], f, c, a = [];
    let flag1 = false
    let flag2 = false
    str = str.split("")
    for (j = 0; j < str.length;) {
      if (flag1) {
        // @ts-ignore
        k1.push(j)
      }
      if (flag2) {
        // @ts-ignore
        k2.push(j)
      }
      flag1 = false
      flag2 = false
      if (str[j].charCodeAt(0) === 0xFF9E) {
        str.splice(j, 1)
        if(j !== 0){
          j--
        }
        flag1 = true
      } else if (str[j].charCodeAt(0) === 0xFF9F) {
        str.splice(j, 1)
        if(j !== 0){
          j--
        }
        flag2 = true
      } else {
        j++
      }
    }
    str = str.join("")
    // str = str.split(/-|:|,/)
    for (i = 0, f = str.length; i < f; i++) {
      // @ts-ignore
      if (k1.indexOf(i) !== -1) {
        mappingFlag = '2'
      // @ts-ignore
      } else if (k2.indexOf(i) !== -1) {
        mappingFlag = '3'
      } else {
        mappingFlag = '1'
      }
      // @ts-ignore
      let m = utils.toZenkanaCase.MAPPING;
      c = str.charCodeAt(i);
      // @ts-ignore
      a.push(m()[c] || c);
    }

    return String.fromCharCode.apply(null, a);
  },
  // 日付の月と日の0を補足する
  zeroAdd : function(date){

    if (String(date).length == 1) {
      return "0" + String(date);
    }

    return date;
  },
  hyphenAdd : function(date){
    if (/^\d{8}$/.test(date)) {
      return String(date.slice(0, 4) + "-" + date.slice(4, 6) + "-" + date.slice(6));
    } else if (/^\d{6}$/.test(date)) {
      return String(date.slice(0, 4) + "-" + date.slice(4));
    } else {
      return String(date);
    }
  },
  // 日付の月の加算と減算
　// newDate:計算の日付（日付タイプ）
　// num：加減の月数 正の整数はnヶ月後；マイナスの整数はnヶ月前
  setDateByMonth : function(d,m){
    if ( m == 0 ) {
      return d.replace('-', '')
    }
    let dateArr = d.split('-')
    let calYear = Math.floor(Math.abs(m) / 12)
    let calMonth = Math.floor(Math.abs(m) % 12)
    if ( m > 0 ) {
      dateArr[0] = parseInt(dateArr[0]) + calYear
      dateArr[1] = parseInt(dateArr[1]) + calMonth
      console.log(dateArr)
      if ( dateArr[1] > 12 ) {
        dateArr[0]++
        dateArr[1] = dateArr[1] - 12
      }
    } else if ( m < 0 ) {
      dateArr[0] = parseInt(dateArr[0]) - calYear
      dateArr[1] = parseInt(dateArr[1]) - calMonth
      if ( dateArr[1] < 1 ) {
        dateArr[0]--
        dateArr[1] = dateArr[1] + 12
      }
    }
    dateArr[1] = utils.zeroAdd(dateArr[1])

    return dateArr.join("")
  },
  //年齢の計算
  //　strBirthday：　誕生日（例：1995-01-01）
  jsGetAge : function(strBirthday) {
    let returnAge;
    let strBirthdayArr = strBirthday.split("-");
    let birthYear = strBirthdayArr[0];
    let birthMonth = strBirthdayArr[1];
    let birthDay = strBirthdayArr[2];
    let date = new Date();
    let nowYear = date.getFullYear();
    let nowMonth = date.getMonth() + 1;
    let nowDay = date.getDate();
    if (nowYear == birthYear) {
      returnAge = 0;
    } else {
      let ageDiff = nowYear - birthYear;
      if (ageDiff > 0) {
        if (nowMonth == birthMonth) {
          let dayDiff = nowDay - birthDay;
          if (dayDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        } else {
          let monthDiff = nowMonth - birthMonth;
          if (monthDiff < 0) {
            returnAge = ageDiff - 1;
          } else {
            returnAge = ageDiff;
          }
        }
      } else {
        returnAge = -1;
      }
    }
    return returnAge.toString();
  },
  // ハイフン追加
  nullFormat : function (str) {
    if (str == "") {
      return '-'
    }
    return str
  },
  // 3桁毎に”，”を追加する
  moneyFormat : function (money) {
    if (!money) {
      return ''
    }
    return String(money).replace(/(?=(\B)(\d{3})+$)/g, ',')
  }
}

// @ts-ignore
utils.toZenkanaCase.MAPPING = function() {
  let rtn = mappingFlag === '1' ?
    {
      0xFF67: 0x30A1,
      0xFF68: 0x30A3,
      0xFF69: 0x30A5,
      0xFF6A: 0x30A7,
      0xFF6B: 0x30A9,
      0xFF70: 0x30FC,
      0xFF71: 0x30A2,
      0xFF72: 0x30A4,
      0xFF73: 0x30A6,
      0xFF74: 0x30A8,
      0xFF75: 0x30AA,
      0xFF76: 0x30AB,
      0xFF77: 0x30AD,
      0xFF78: 0x30AF,
      0xFF79: 0x30B1,
      0xFF7A: 0x30B3,
      0xFF7B: 0x30B5,
      0xFF7C: 0x30B7,
      0xFF7D: 0x30B9,
      0xFF7E: 0x30BB,
      0xFF7F: 0x30BD,
      0xFF80: 0x30BF,
      0xFF81: 0x30C1,
      0xFF82: 0x30C4,
      0xFF83: 0x30C6,
      0xFF84: 0x30C8,
      0xFF85: 0x30CA,
      0xFF86: 0x30CB,
      0xFF87: 0x30CC,
      0xFF88: 0x30CD,
      0xFF89: 0x30CE,
      0xFF8A: 0x30CF,
      0xFF8B: 0x30D2,
      0xFF8C: 0x30D5,
      0xFF8D: 0x30D8,
      0xFF8E: 0x30DB,
      0xFF8F: 0x30DE,
      0xFF90: 0x30DF,
      0xFF91: 0x30E0,
      0xFF92: 0x30E1,
      0xFF93: 0x30E2,
      0xFF94: 0x30E4,
      0xFF95: 0x30E6,
      0xFF96: 0x30E8,
      0xFF97: 0x30E9,
      0xFF98: 0x30EA,
      0xFF99: 0x30EB,
      0xFF9A: 0x30EC,
      0xFF9B: 0x30ED,
      0xFF9C: 0x30EF,
      0xFF9D: 0x30F3,
      0xFF9E: 0x309B,
      0xFF9F: 0x309C,
      0xFF66: 0x30F2
    } : mappingFlag === '2' ? {
      0xFF76:0x30AC,
      0xFF77:0x30AE,
      0xFF78:0x30B0,
      0xFF79:0x30B2,
      0xFF7A:0x30B4,
      0xFF7B:0x30B6,
      0xFF7C:0x30B8,
      0xFF7D:0x30BA,
      0xFF7E:0x30BC,
      0xFF7F:0x30BE,
      0xFF80:0x30C0,
      0xFF81:0x30C2,
      0xFF82:0x30C5,
      0xFF83:0x30C7,
      0xFF84:0x30C9,
      0xFF8A:0x30D0,
      0xFF8B:0x30D3,
      0xFF8C:0x30D6,
      0xFF8D:0x30D9,
      0xFF8E:0x30DC
    } : {
      0xFF8A:0x30D1,
      0xFF8B:0x30D4,
      0xFF8C:0x30D7,
      0xFF8D:0x30DA,
      0xFF8E:0x30DD
    }
  return rtn
}
export default utils





