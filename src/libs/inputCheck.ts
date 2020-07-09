import utils from '@/libs/utils';
import message from "@/libs/message";

const inputCheck = {
  // 空チェック
  checkNull : function(str){
    return str.trim().length == 0;
  },
  // 全角チェック（漢字）
  zenkakuCheck : function(str) {
    let reg: RegExp = new RegExp("^(?:[一-龥]|[ぁ-んァ-ン]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺ]|[ａ-ｚＡ-Ｚ]|[\\uFF10-\\uFF19]|[ﾟﾞ]|[（！“＃＄％＆‘＊＋－～＂＇｀．，｜［］、　。／：；＜＞＝？＠＾＿’｛｝「」│￥”）]|[ー|−―－]|[〜])+$");
    return !reg.test(str.trim());
  },
  // 全角チェック（漢字と中点）
  zenkakuCheck1 : function(str) {
    let reg: RegExp = new RegExp("^(?:[一-龥]|[ぁ-んァ-ン]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺ]|[ａ-ｚＡ-Ｚ]|[\\uFF10-\\uFF19]|[ﾟﾞ]|[（！“＃＄％＆‘＊＋－～＂＇｀．，｜［］、　。／：；＜＞＝？＠＾＿’｛｝「」│￥”～・）]|[ー|−|―|－]|[〜])+$");
    return !reg.test(str.trim());
  },
  // 全角チェック（カナ）
  zenkakuCheck2 : function(str) {
    let reg: RegExp = new RegExp("^(?:[ぁ-んァ-ン]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺ]|[ａ-ｚＡ-Ｚ]|[\\uFF10-\\uFF19]|[ﾟﾞ]|[（！“＃＄％＆‘＊＋－～＂＇｀．，｜［］、　。／：；＜＞＝？＠＾＿’｛｝「」│￥”～）]|[ー|−|―|－]|[〜])+$");
    return !reg.test(str.trim());
  },
  // 全角チェック（カナと中点）
  zenkakuCheck3 : function(str) {
    let reg: RegExp = new RegExp("^(?:[ぁ-んァ-ン]|[〃仝々]|[ゞゝゐゔゑ]|[ヾヽヷヰヸヴヱヹヲヺ]|[ａ-ｚＡ-Ｚ]|[\\uFF10-\\uFF19]|[ﾟﾞ]|[（！“＃＄％＆‘＊＋－～＂＇｀．，｜［］、　。／：；＜＞＝？＠＾＿’｛｝「」│￥”～・）]|[ー|−|―|－]|[〜])+$");
    return !reg.test(str.trim());
  },
  // 正しい歴日チェック
  checkDateFormat : function(str) {
    let reg: RegExp = new RegExp("((^((1[8-9]\\d{2})|([2-9]\\d{3}))([-\\/\\._])(10|12|0?[13578])([-\\/\\._])(3[01]|[12][0-9]|0?[1-9])$)|(^((1[8-9]\\d{2})|([2-9]\\d{3}))([-\\/\\._])(11|0?[469])([-\\/\\._])(30|[12][0-9]|0?[1-9])$)|(^((1[8-9]\\d{2})|([2-9]\\d{3}))([-\\/\\._])(0?2)([-\\/\\._])(2[0-8]|1[0-9]|0?[1-9])$)|(^([2468][048]00)([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([3579][26]00)([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([1][89][0][48])([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([2-9][0-9][0][48])([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([1][89][2468][048])([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([2-9][0-9][2468][048])([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([1][89][13579][26])([-\\/\\._])(0?2)([-\\/\\._])(29)$)|(^([2-9][0-9][13579][26])([-\\/\\._])(0?2)([-\\/\\._])(29)$))");
    return !reg.test(str.trim());
  },
  // 平日チェック
  checkWorkDate : function(str) {
    if (new Date(str).getDay() != 0 && new Date(str).getDay() != 6) {
      return false
    }
    return true
  },
  // 年齢チェック
  checkBirthdayAge : function(str) {
    return utils.jsGetAge(str)
  },
  // 桁数チェック
  checkLength : function(str, num) {
    return str.trim().length != num;
  },
  // 10桁の電話番号の形式チェック
  check10TeleNumber : function (teleNumber) {
    if (teleNumber.trim().length == 10) {
      if (teleNumber.slice(0, 1) == 0 && teleNumber.slice(1, 2) != 0) {
        return false
      }
    }
    return true
  },
  // 11桁の電話番号の形式チェック
  check11TeleNumber : function (teleNumber) {
    const phoneList = ['070', '080', '090', '050']
    if (teleNumber.trim().length == 11) {
      for (let i of phoneList) {
        if (i == teleNumber.slice(0, 3)) {
          return false;
        }
      }
    }
    return true
  },
  // 範囲チェック
  // str チェックしたい値
  // from 最小値
  // to 最大値
  checkRange : function (str, from, to) {
    return parseFloat(str) < from || parseFloat(str) > to
  }
}

export default inputCheck










