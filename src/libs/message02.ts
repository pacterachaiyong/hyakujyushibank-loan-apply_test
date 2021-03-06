const message = {
  // new card loan 03page
  purposeFlg01: '「ご利用目的」を選択してください。',

  purpose01: '「ご利用目的」を入力してください。',
  purpose02: '「ご利用目的」に使用できない文字または記号が含まれています。',

  getFlg01: '「無担保ローンのお借入」を選択してください。',
  getCount01: '「無担保ローンのお借入の件数」を入力してください。',
  getCount02: '「無担保ローンのお借入の件数」を半角数字で入力してください。',
  getMoney01: '「無担保ローンのお借入の金額」を入力してください。',
  getMoney02: '「無担保ローンのお借入の金額」を半角数字で入力してください。',

  sendFlg01: '「出向先有無」を選択してください。',
  companyName01: '「お勤め先名の漢字」を入力してください。',
  companyName02: '「お勤め先名の漢字」に使用できない文字または記号が含まれています。',
  educationCompanyName01: '「お勤め先名（屋号）の漢字」を入力してください。',
  educationCompanyName02: '「お勤め先名（屋号）の漢字」に使用できない文字または記号が含まれています。',
  companyKanaName01: '「お勤め先名のカナ」を入力してください。',
  companyKanaName02: '「お勤め先名のカナ」に使用できない文字または記号が含まれています。',
  educationCompanyKanaName01:'「お勤め先名（屋号）のカナ」を入力してください。',
  educationCompanyKanaName02:'「お勤め先名（屋号）のカナ」に使用できない文字または記号が含まれています。',
  jobType01:'「業種」を選択してください。',
  workPostCode01: '「お勤め先郵便番号」を入力してください。',
  workPostCode02: '7桁のお勤め先郵便番号を半角数字で入力してください。',
  workPrefecturesCode01: '「お勤め先所在地の都道府県」を選択してください。',
  workAddress01: '「お勤め先所在地の市町村」を入力してください。',
  workAddress02: '「お勤め先所在地の市町村」に使用できない文字または記号が含まれています。',
  workOtherAddress01: '「お勤め先所在地の以降ご住所」を入力してください。',
  workOtherAddress02: '「お勤め先所在地の以降ご住所」に使用できない文字または記号が含まれています。',
  workOtherAddress03: 'お勤め先所在地の以降ご住所は市町村と合わせて60文字まで入力してください。',
  workTeleNumber01: '代表電話または所属部直通電話いずれの入力が必須です。',
  workTeleNumber02: '10桁の代表電話を半角数字で入力してください。',
  workTeleNumber04: '10桁または11桁のお勤め先電話番号を半角数字で入力してください。',
  workTeleNumber03: 'お勤め先電話番号の形式が正しくありません。',
  workTeleNumber05: '「お勤め先電話番号」を入力してください。',
  workTeleNumber06: '代表電話の形式が正しくありません。',
  workPhoneNumber01: '10桁または11桁の所属部直通を半角数字で入力してください。',
  workPhoneNumber02: '所属部直通の形式が正しくありません。',
  getKbn01:'「所得区分」を選択してください。',
  getKbn02:'「所得区分」を入力してください。',
  getKbn03:'「所得区分」に使用できない文字または記号が含まれています。',

  jobContent01: '「事業内容」を選択してください。',
  position01: '「役職」を選択してください。',
  jobNumber01:'「従業員数」を選択してください。',
  department01: '「所属部課名」に使用できない文字または記号が含まれています。',
  department02: '「所属部署」に使用できない文字または記号が含まれています。',
  workYearMonth01: '「入社年月」を選択してください。',
  workYear01: '「勤続（営）年数の年」を選択してください。',
  workMonth01: '「勤続（営）月数」を選択してください。',

  payment01: '「給料日」を選択してください。',
  graduateYearMonth01: '「最終学校卒業年月」を選択してください。',

  visitingName01: '「出向先会社名の漢字」を入力してください。',
  visitingName02: '「出向先会社名の漢字」に使用できない文字または記号が含まれています。',
  visitingKanaName01: '「出向先会社名のカナ」を入力してください。',
  visitingKanaName02: '「出向先会社名のカナ」に使用できない文字または記号が含まれています。',
  visitingDepartment01: '「出向先所属部課名」に使用できない文字または記号が含まれています。',
  visitingPosition01: '「出向先役職」を選択してください。',
  visitingPostCode01: '「出向先郵便番号」を入力してください。',
  visitingPostCode02: '7桁の出向先郵便番号を半角数字で入力してください。',
  visitPreCode01: '「出向先住所の都道府県」を選択してください。',
  visitAddress01: '「出向先住所の市町村」を入力してください。',
  visitAddress02: '「出向先住所の市町村」に使用できない文字または記号が含まれています。',
  visitOtherAddress01: '「出向先住所の以降ご住所」を入力してください。',
  visitOtherAddress02: '「出向先住所の以降ご住所」に使用できない文字または記号が含まれています。',
  visitOtherAddress03: '出向先住所の以降ご住所は市町村と合わせて60文字まで入力してください。',
  visitTelNumber01: '「出向先電話番号」を入力してください。',
  visitTelNumber02: '10桁または11桁の出向先電話番号を半角数字で入力してください。',
  visitTelNumber03: '出向先電話番号の形式が正しくありません。',

  incomeFlg01: '「年収」を選択してください。',
  incomeYear01: '「税込年収」を入力してください。',
  incomeYear02: '「税込年収」を半角数字で入力してください。',
  incomeYear03: '「税込年収」を150万円以上の金額で入力してください。',
  workContent01: '「お仕事の内容」を選択してください。',
  workNumber01: '「社員数」を選択してください。',
  workType01: '「就業形態」を選択してください。',
  workTypeCode01: '「お勤め先の種類」を選択してください。',
  money01: '「資本金」を選択してください。',
  rentLoanContract01: '「住宅ローン契約」を選択してください。',
  rentLoanContract02: '「住宅ローン契約（当行）」を選択してください。',
  comPreCode01: '「本社所在地」を選択してください。',
  healthType01: '「健康保険証の種類」を選択してください。',


  applicationMoney01: '「お申込金額」を入力してください。',
  applicationMoney03: '「お申込金額」を10～500の範囲で入力してください。',
  applicationMoney04: '「お申込金額」を10～1000の範囲で入力してください。',
  applicationMoney05: '「お申込金額」を10～400の範囲で入力してください。',
  applicationMoney06: '「お申込金額」を10～300の範囲で入力してください。',
  getHopeDate01: '「お借入希望日」を選択してください。',
  getHopeDate02: '「お借入希望日」を3ヶ月以内の未来日で指定してください。',
  getHopeDate03: '「お借入希望日」を正しい暦日で選択してください。',
  getHopeDate04: '「お借入希望日」を平日で選択してください。',
  returnHopeMonth01: '「毎月返済希望額」を入力してください。',
  returnHopeMonth02: '「毎月返済希望額」を半角数字で入力してください。',
  returnHopeMonth03: '融資期間を超えてしまいます。',
  returnHopeCount01: '「返済希望回数」を入力してください。',
  returnHopeCount02: '「返済希望回数」を半角数字で入力してください。',
  returnHopeCount03: '「返済希望回数」を6～120の範囲で入力してください。',
  returnHopeCount04: '「返済希望回数」を6～162の範囲で入力してください。',
  returnHopeCount05: '「返済希望回数」を12～162の範囲で入力してください。',
  returnHopeCount06: '「返済希望回数」を12～132の範囲で入力してください。',
  returnHopeCount07: '「返済希望回数」を12～138の範囲で入力してください。',
  returnHopeCount08: '「返済希望回数」を12～123の範囲で入力してください。',
  inCount01: '「内据置回数」を入力してください。',
  inCount02: '「内据置回数」を0～78の範囲で入力してください。',
  inCount03: '「内据置回数」を0～72の範囲で入力してください。',
  inCount04: '「内据置回数」を0～54の範囲で入力してください。',
  inCount05: '「内据置回数」を0～51の範囲で入力してください。',
  inCount06: '「内据置回数」を0～42の範囲で入力してください。',
  inCount07: '内据置回数は返済希望回数より小さい値を入力してください。',
  moneyTotal01: '「ご利用目的の所要資金総額」を入力してください。',
  moneyTotal02: '「ご利用目的の所要資金総額」を半角数字で入力してください。',
  moneyTotal03: '「ご利用目的の所要資金総額」をお申込み金額以上でご入力ください。',
  payMoney101: '「ご利用目的のお支払先1」を入力してください。',
  payMoney102: '「ご利用目的のお支払先1」に使用できない文字または記号が含まれています。',
  money101: '「ご利用目的の金額1」を入力してください。',
  money102: '「ご利用目的の金額1」を半角数字で入力してください。',
  payMoney201: '「ご利用目的のお支払先2」を入力してください。',
  payMoney202: '「ご利用目的のお支払先2」に使用できない文字または記号が含まれています。',
  money201: '「ご利用目的の金額2」を入力してください。',
  money202: '「ご利用目的の金額2」を半角数字で入力してください。',
  ownAccountKbn01: '「返済口座の当行口座有無」を選択してください。',
  storeName01: '「返済口座の支店名」を選択してください。',
  accountNumber01: '「返済口座の口座番号」を入力してください。',
  accountNumber02: '「返済口座の口座番号」を半角数字で入力してください。',
  returnDay01: '「返済内訳の毎月返済の返済日」を選択してください。',
  returnMoney01: '「返済内訳の毎月返済の返済元金」を入力してください。',
  returnMoney02: '返済元金はお申込み金額と同じで入力してください。',
  returnMoney03: '融資期間を超えてしまいます。',
  returnMoney201: '「年２回増額返済併用の返済元金」を入力してください。',
  returnMoney202: '返済元金はお申込み金額と同じで入力してください。',
  returnMoney203: '年２回増額返済併用時の返済元金はお申込み金額の５０％以内で入力してください。',
  getFlg001: '「その他のお借入_当行以外でのお借入」を選択してください。',
  getFlg002: '「その他のお借入_当行以外でのお借入」を下のいずれかの欄の残高・年間返済額で入力してください。',
  noLoanRest01: '「無担保ローンの残高」を入力してください。',
  noLoanRest02: '「無担保ローンの残高」を半角数字で入力してください。',
  noLoanReturnMoney01: '「無担保ローンの年間返済額」を入力してください。',
  noLoanReturnMoney02: '「無担保ローンの年間返済額」を半角数字で入力してください。',
  loanRest01: '「住宅ローンの残高」を入力してください。',
  loanRest02: '「住宅ローンの残高」を半角数字で入力してください。',
  loanReturnMoney01: '「住宅ローンの年間返済額」を入力してください。',
  loanReturnMoney02: '「住宅ローンの年間返済額」を半角数字で入力してください。',
  cardLoanRest01: '「カードローンの残高」を入力してください。',
  cardLoanRest02: '「カードローンの残高」を半角数字で入力してください。',
  cardLoanRestRM01: '「カードローンの年間返済額」を入力してください。',
  cardLoanRestRM02: '「カードローンの年間返済額」を半角数字で入力してください。',
  otherComRest01: '「信販会社等他社の残高」を入力してください。',
  otherComRest02: '「信販会社等他社の残高」を半角数字で入力してください。',
  otherComReturnMoney01: '「信販会社等他社の年間返済額」を入力してください。',
  otherComReturnMoney02: '「信販会社等他社の年間返済額」を半角数字で入力してください。',

  otherComRest201: '信販会社等他社の残高」を入力してください。',
  otherComRest202: '信販会社等他社の残高」を半角数字で入力してください。',
  otherComReturnMoney201: '「信販会社等他社の年間返済額」を入力してください。',
  otherComReturnMoney202: '「信販会社等他社の年間返済額」を半角数字で入力してください。',
  hopeStoreName01: '「お取引希望店」を選択してください。',


}
export default message
