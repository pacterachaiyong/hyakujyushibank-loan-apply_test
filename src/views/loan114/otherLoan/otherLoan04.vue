<template>
    <div v-loading="loading" class="container">
        <el-row id="title" class="title">
            <div>{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="../../../assets/imgs/page04/pc_loan_04.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="../../../assets/imgs/page04/m_loan_04.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 40px;">
            <div>※以下の項目を確認のうえ、<span class="red-color">「送信」</span>ボタンを押してください。</div>
        </el-row>
        <el-row style="margin-top: 10px;">
            <div>※修正する場合は<span class="red-color">「修正する」</span>ボタンを押して該当の項目を修正してください。</div>
        </el-row>

        <el-row style="margin-top: 40px;">
            <div><a style="border-bottom:1px dashed #ccc;">お申込日&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;西暦&nbsp;&nbsp;{{ dateYear }} 年 {{
                dateMonth }} 月 {{ dateDay }} 日 </a></div>
        </el-row>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-normal-58-education-loan4 right-border-line"
                >
                    <div class="label-home-center-education-loan4 label-font-css">ダイレクトメール</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="20"
                    class="label-normal-58-education-loan4"
                >
                    <div class="sub-label-home-center-education-loan4">
                        <span>{{args.dairekutoMail}} </span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row
            style="margin-top: 30px;"
            class="label-font-css"
        >
            <el-col
                style="margin-top: 15px;"
                :xs="16"
                :sm="20"
            >
                <div style="color: #6e6e6e">■ご本人さまについて</div>
            </el-col>
            <el-col
                :xs="8"
                :sm="4"
            >
                <el-button
                    type="danger"
                    class="button-width-100-150px"
                    @click="changePage01Btn"
                >修正する
                </el-button>
            </el-col>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">お名前</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[漢字]</span>
                        <span style="margin-left: 10px;">{{ args.lastName }}  {{ args.firstName }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[カナ]</span>
                        <span style="margin-left: 10px;">{{ args.lastKanaName }}  {{ args.firstKanaName }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">生年月日</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>西暦</span>
                        <span style="margin-left: 10px;">{{ birthdayYear }} 年 {{ birthdayMonth }} 月 {{ birthdayDay }} 日 </span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">性別</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.sexKbn }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">郵便番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>〒</span>
                        <span style="margin-left: 10px;">{{ args.postCode }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">ご自宅住所</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[都道府県]</span>
                        <span style="margin-left: 10px;">{{ args.prefecturesCode }}  {{ args.address }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[以降ご住所]</span>
                        <span style="margin-left: 10px;">{{ args.otherAddress }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">お電話番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[ご自宅]</span>
                        <span style="margin-left: 10px;">{{ args.teleNumber }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[携帯・PHS]</span>
                        <span style="margin-left: 10px;">{{ args.phoneNumber }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row v-show="loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">本人確認書類</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.myConfirmation }}</span>
                        <span style="margin-left: 10px;">{{ args.myConfirmationCode }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="loanTypeHave()" class="hr-style">

            <el-row v-show="loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-172-50px right-border-line"
                >
                    <div class="label-enAddress-other-loan04 label-font-css">お住まい
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col class="sub-label-enAddress-input-other-loan04">
                            <span>{{ args.enAddress }}</span>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="6"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span class="sub-label-font-css">[持家]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="18"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span>{{ args.houseFlg }}</span>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="6"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span class="sub-label-font-css">[住宅ローン]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="18"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span>{{ args.houseLoanFlg }}</span>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="6"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span class="sub-label-font-css">[賃貸支払]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="18"
                            class="sub-radio-enAddress-input-other-loan04"
                        >
                            <span>{{ args.paymentFlg }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <el-row v-show="!loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">お住まい</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.enAddress }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">居住年数</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.liveYear }}</span>
                        <span style="margin-left: 10px;">年</span>
                        <span style="margin-left: 10px;">{{ args.liveMonth }}</span>
                        <span style="margin-left: 10px;">ヶ月</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">ご家族</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[配偶者]</span>
                        <span style="margin-left: 10px;">{{ args.spouse }} {{ args.liveType }}</span>
                    </div>

                    <div v-show="!loanTypeHave()" class="sub-label-name-double-row-other-loan04">
                        <span>[扶養家族]</span>
                        <span style="margin-left: 10px;">{{ args.familyNumber }}</span>
                        <span style="margin-left: 10px;">人</span>
                    </div>

                    <div v-show="loanTypeHave()" class="sub-label-name-double-row-other-loan04">
                        <span style="margin-right: 10px;">世帯人数(本人を含む)</span>
                        <span style="margin-right: 10px;">{{ args.homeNumber }}</span>

                        <span>[扶養家族]</span>
                        <span style="margin-left: 10px;">{{ args.familyNumber }}</span>
                        <span style="margin-left: 10px;">人</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row
            style="margin-top: 30px;"
            class="label-font-css"
        >
            <el-col
                style="margin-top: 15px;"
                :xs="16"
                :sm="20"
            >
                <div style="color: #6e6e6e">■お勤め先または事業先について</div>
            </el-col>
            <el-col
                :xs="8"
                :sm="4"
            >
                <el-button
                    type="danger"
                    class="button-width-100-150px"
                    @click="changePage02Btn"
                >修正する
                </el-button>
            </el-col>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">お勤め先名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[漢字]</span>
                        <span style="margin-left: 10px;">{{ args.companyName }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[カナ]</span>
                        <span style="margin-left: 10px;">{{ args.companyKanaName }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">業種</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.jobType }}</span>
                    </div>
                </el-col>
            </el-row>
            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">お勤め先郵便番号
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>〒</span>
                        <span style="margin-left: 10px;">{{ args.workPostCode }}</span>
                    </div>
                </el-col>
            </el-row>
            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">お勤め先所在地
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[都道府県]</span>
                        <span style="margin-left: 10px;">{{ args.workPrefecturesCode }} {{ args.workAddress }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[以降ご住所]</span>
                        <span style="margin-left: 10px;">{{ args.workOtherAddress }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px  right-border-line"
                >
                    <div class="label-name-double-row-other-loan04 label-font-css">お勤め先電話番号
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[電話番号]</span>
                        <span style="margin-left: 10px;">{{ args.workTeleNumber }}</span>
                    </div>

                    <div class="sub-label-name-double-row-other-loan04">
                        <span>[内線]</span>
                        <span style="margin-left: 10px;">{{ args.workPhoneNumber }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">所得区分</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.getKbnFlg }}  {{ args.getKbn }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">役職</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.position }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">従業員数</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.jobNumber }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color right-border-line"
                    style="height: 55px"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">所属部署</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.department }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">勤続（営）年数
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.workYear }}</span>
                        <span style="margin-left: 10px;">年</span>
                        <span style="margin-left: 10px;">{{ args.workMonth }}</span>
                        <span style="margin-left: 10px;">ヶ月</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">税込年収</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.incomeYear }}</span>
                        <span style="margin-left: 10px;">万円</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">資本金</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.money }}</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">住宅ローン契約（当行）
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.rentLoanContract }}</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <el-row
            style="margin-top: 30px;"
            class="label-font-css"
        >
            <el-col
                style="margin-top: 15px;"
                :xs="16"
                :sm="20"
            >
                <div style="color: #6e6e6e">■お申込内容について</div>
            </el-col>
            <el-col
                :xs="8"
                :sm="4"
            >
                <el-button
                    type="danger"
                    class="button-width-100-150px"
                    @click="changePage03Btn"
                >修正する
                </el-button>
            </el-col>
        </el-row>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">お申込金額</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.applicationMoney }}万円</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">お借入希望日
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>西暦</span>
                        <span style="margin-left: 10px;">{{ this.getHopeDateYear }} 年 {{ this.getHopeDateMonth }} 月 {{ this.getHopeDateDay }} 日 </span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">毎月返済希望額
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.returnHopeMonth }}円</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">返済希望回数
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.returnHopeCount }}回</span>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="args.inCount" class="hr-style">

            <el-row v-show="args.inCount">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px  right-border-line"
                >
                    <div class="label-name-single-row-other-loan04 label-font-css">内据置回数</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-other-loan04">
                        <span>{{ args.inCount }}</span>
                        <span>&nbsp;&nbsp;回</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-396-50px  right-border-line"
                >
                    <div class="label-name-six-row-other-loan04 label-font-css">ご利用目的</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="6"
                            class="label-background-color-change label-150-35px right-border-line"
                        >
                            <div class="sub-label-name-three-row-other-loan04">
                                目的
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            style="align:middle"
                        >

                            <div class="sub-textarea-other-loan04">
                                <el-input
                                    v-model="args.purpose"
                                    style="border: 0px"
                                    type="textarea"
                                    readonly
                                    :rows="6"
                                    resize="none"
                                >
                                </el-input>
                            </div>
                        </el-col>
                    </el-row>

                    <hr class="hr-style isPc"/>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-background-color-change label-50-35px  right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">所要資金総額</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.moneyTotal }}</span>
                                <span>&nbsp;&nbsp;万円</span>
                            </div>
                        </el-col>
                    </el-row>
                    <hr class="hr-style isPc"/>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-background-color-change label-95-35px right-border-line"
                        >
                            <div class="pay-money-name-other-loan04">お支払先（ご購入先）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="6"
                        >
                            <div
                                :class="[
                                    {'pay-money-other-loan04': String(args.payMoney1).length > 24},
                                    {'pay-money-other-loan04-2': String(args.payMoney1).length > 16 && String(args.payMoney1).length <= 24},
                                    {'pay-money-other-loan04-3': String(args.payMoney1).length > 8 && String(args.payMoney1).length <= 16},
                                    {'pay-money-other-loan04-4': String(args.payMoney1).length <= 8},
                                ]"
                            >
                                <span>{{ args.payMoney1 }}</span>
                            </div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="4"
                            class="label-background-color-change label-95-35px"
                            style="border-left: 1px solid rgb(230,230,230);border-right: 1px solid rgb(230,230,230)"
                        >
                            <div class="small-sub-label-name-single-row-other-loan04">金額</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="6"
                        >
                            <div class="money-other-loan04">
                                <span>{{ args.money1 }}</span>
                                <span v-show="args.money1!=''">&nbsp;&nbsp;万円</span>
                            </div>
                        </el-col>
                    </el-row>
                    <hr class="hr-style isPc"/>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-background-color-change label-95-35px right-border-line"
                        >
                            <div class="pay-money-name-other-loan04">お支払先（ご購入先）</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="6"
                        >
                            <div
                                :class="[
                                    {'pay-money-other-loan04': String(args.payMoney2).length > 24},
                                    {'pay-money-other-loan04-2': String(args.payMoney2).length > 16 && String(args.payMoney2).length <= 24},
                                    {'pay-money-other-loan04-3': String(args.payMoney2).length > 8 && String(args.payMoney2).length <= 16},
                                    {'pay-money-other-loan04-4': String(args.payMoney2).length <= 8},
                                ]"
                            >
                                <span>{{ args.payMoney2 }}</span>
                            </div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="4"
                            class="label-background-color-change label-95-35px"
                            style="border-left: 1px solid rgb(230,230,230);border-right: 1px solid rgb(230,230,230)"
                        >
                            <div class="small-sub-label-name-single-row-other-loan04">金額</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="6"
                        >
                            <div class="money-other-loan04">
                                <span>{{ args.money2 }}</span>
                                <span v-show="args.money2!=''">&nbsp;&nbsp;万円</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div
            v-show="args.ownAccountKbn == 'はい'"
            class="font-size-16-14px"
            style="margin-top: 10px; border:1px solid #e6e6e6;"
        >
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color right-border-line label-154-50px"
                >
                    <div
                        class="label-name-three-row-other-loan04 label-font-css"
                    >
                        返済口座
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">当行に口座をお持ちですか？</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.ownAccountKbn }}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <hr class="hr-style isPc"/>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">支店</div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.storeName }}</span>
                            </div>
                        </el-col>
                    </el-row>
                    <hr class="hr-style isPc"/>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">口座番号</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>普通</span>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <span>{{ args.accountNumber }}</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>
        <div
            v-show="args.ownAccountKbn == 'いいえ'"
            class="font-size-16-14px"
            style="margin-top: 10px; border:1px solid #e6e6e6;"
        >
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color right-border-line label-50-50px"
                >
                    <div
                        class="label-name-three-row-other-loan04-15 label-font-css"
                    >
                        返済口座
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">当行に口座をお持ちですか？</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.ownAccountKbn }}</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    :class="[{label_362_50px:args.increaseFlg==='はい'},
                             {label_206_50px:args.increaseFlg==='いいえ'},
                             'label-background-color','right-border-line']"
                >
                    <div
                        :class="[{label_name_seven_row_other_loan04:args.increaseFlg==='はい'},
                                 {label_name_seven_row_other_loan04_01:args.increaseFlg==='いいえ'},
                                 'label-font-css']"
                    >
                        返済内訳
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">年2回増額返済併用を利用しますか？</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.increaseFlg }}</span>
                            </div>
                        </el-col>
                    </el-row>

                    <hr class="hr-style isPc"/>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-background-color-change label-150-35px right-border-line"
                        >
                            <div class="sub-label-name-three-row-other-loan04">
                                毎月返済
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済日</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="12"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">{{ args.returnDay }}</div>
                                </el-col>
                            </el-row>
                            <hr class="hr-style isPc"/>
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済開始日</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="18"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        <span>西暦</span>
                                        <span style="margin-left: 10px;">{{ this.returnStartDayYear }} 年 {{ this.returnStartDayMonth }} 月 {{ this.returnStartDayDay }} 日 </span>
                                    </div>
                                </el-col>
                            </el-row>
                            <hr class="hr-style isPc"/>
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済元金</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="12"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">{{ args.returnMoney }}&nbsp;&nbsp;&nbsp;万円</div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>

                    <hr v-show="args.increaseFlg=='はい'" class="hr-style isPc"/>

                    <el-row v-show="args.increaseFlg=='はい'">
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-background-color-change label-154-35px right-border-line"
                        >
                            <div class="sub-label-name-three-row-other-loan04">
                                年2回増額返済併用
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済月</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="12"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">{{ args.increaseReturn1 }}&nbsp;&nbsp;&nbsp;月 ・
                                        {{ args.increaseReturn2 }}&nbsp;&nbsp;&nbsp;月
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済開始日</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="18"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        <span>西暦</span>
                                        <span style="margin-left: 10px;">{{ this.returnStartDay2Year }} 年 {{ this.returnStartDay2Month }} 月 {{ this.returnStartDay2Day }} 日 </span>
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="6"
                                    class="label-background-color-change label-50-35px  right-border-line"
                                >
                                    <div style="padding-left: 20px;padding-top: 18px">返済元金</div>
                                </el-col>
                                <el-col
                                    :xs="24"
                                    :sm="12"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">{{ args.returnMoney2 }}&nbsp;&nbsp;&nbsp;万円
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    :class="[{title_01: args.getFromOtherFlg === 'はい'},
                             {title_00: args.getFromOtherFlg !== 'はい'},
                             'label-background-color','right-border-line']"
                >
                    <div
                        :class="[{name_01: args.getFromOtherFlg === 'はい'},
                                 {name_00: args.getFromOtherFlg !== 'はい'},
                                 'label-font-css']"
                    >
                        その他のお借入
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="12"
                            class="label-background-color-change label-50-35px right-border-line"
                        >
                            <div class="sub-label-name-single-row-other-loan04">当行以外でのお借入がございますか？</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <div class="sub-label-name-single-row-other-loan04">
                                <span>{{ args.getFromOtherFlg }}</span>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row v-show="args.getFromOtherFlg == 'はい'">
                        <el-col>
                            <hr class="hr-style isPc"/>
                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        お取引内容
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        残高
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        年間返済額
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        無担保ローン
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.noLoanRest }}
                                        <span v-show="args.noLoanRest!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class=" label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.noLoanReturnMoney }}
                                        <span v-show="args.noLoanReturnMoney!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>
                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        住宅ローン
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.loanRest }}
                                        <span v-show="args.loanRest!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class=" label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.loanReturnMoney }}
                                        <span v-show="args.loanReturnMoney!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        カードローン
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.cardLoanRest }}
                                        <span v-show="args.cardLoanRest!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class=" label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.cardLoanRestRM }}
                                        <span v-show="args.cardLoanRestRM!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>
                            </el-row>
                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        信販会社等他社
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.otherComRest }}
                                        <span v-show="args.otherComRest!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class=" label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ args.otherComReturnMoney }}
                                        <span v-show="args.otherComReturnMoney!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>
                            </el-row>

                            <hr class="hr-style isPc"/>

                            <el-row>
                                <el-col
                                    :xs="10"
                                    :sm="8"
                                    class="label-background-color-change label-50-35px right-border-line"
                                >
                                    <div class="sub-label-name-single-row-other-loan04">
                                        年間返済額合計
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">

                                    </div>
                                </el-col>
                                <el-col
                                    :xs="7"
                                    :sm="8"
                                    class="label-50-35px right-border-line"
                                >
                                    <div class="little-sub-label-name-single-row-other-loan04">
                                        {{ this.returnMoneyTotal }}
                                        <span v-show="args.returnMoneyTotal!=''">&nbsp;&nbsp;&nbsp;万円</span>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 75px;margin-bottom: 30px;text-align: center">
            <el-row>
                <el-col :xs="24" :sm="24">
                    <el-button
                        type="danger"
                        style="width: 130px;"
                        @click="nextBtn()"
                    >送信する
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from "vue-property-decorator";
import {apply114Loan, apply114LoanGetDetail} from '@/api/loan114';
import inputCheck from '@/libs/inputCheck';
import constants from '@/libs/constants';
import utils from '@/libs/utils';

  @Component
export default class Error extends Vue {
    applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    loading: boolean = true
    args: any = {}

    argsForSend: any = {}

    birthdayYear: string = ''
    birthdayMonth: string = ''
    birthdayDay: string = ''

    graduateYearMonthYear: string = ''
    graduateYearMonthMonth: string = ''

    getHopeDateYear: string = ''
    getHopeDateMonth: string = ''
    getHopeDateDay: string = ''

    returnStartDayYear: string = ''
    returnStartDayMonth: string = ''
    returnStartDayDay: string = ''
    returnStartDay2Year: string = ''
    returnStartDay2Month: string = ''
    returnStartDay2Day: string = ''

    returnMoneyTotal: string = ''

    dateYear: string = new Date().getFullYear().toString()
    dateMonth: string = (new Date().getMonth() + 1).toString()
    dateDay: string = new Date().getDate().toString()

    homeOptions: any = constants.enAddressList_other

    homeNumberOptions: any = constants.homeNumberList

    jobTypeOptions: any = constants.jobTypeList

    dutiesOptions: any = constants.positionList_other

    jobContentOptions: any = constants.workContentList

    companyRegisterMoneyOptions: any = constants.moneyList

    getMoneyTypeOptions: any = constants.getKbnFlgList

    peopleNumberOptions: any = constants.jobNumberList

    confirmOptions: any = constants.myConfirmationList

    returnDayOption: any = constants.returnDayList

    options: any = constants.prefecturesCodeList

    loanTypeHave() {
      return this.loanType.includes('提携教育ローン')
    }

    public get loanType(): string {
      return this.$store.state.loanStore.loanType;
    }

    returnMoneyNum(arg) {
      if (inputCheck.checkNull(arg)) {
        return 0
      } else {
        return parseInt(arg)
      }
    }

    mounted() {
      this.init()

      let title: any = document.getElementById("app")
      title.scrollIntoView();


      if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
        let params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        apply114LoanGetDetail(params).then(res => {
          this.argsForSend = res.data.resultData
          this.argsForSend.requestType = '1'
          this.argsForSend.loanTypeName = this.$store.state.loanStore.loanType
          this.argsForSend.trade = this.$store.state.loanStore.trade
          const data = res.data.resultData
          this.args.dairekutoMail = data.dairekutoMail == '0' ? '金融商品等のダイレクトメール等は希望しません。' : '金融商品等のダイレクトメール等は希望します。'
          this.args.firstName = data.firstName
          this.args.lastName = data.lastName
          this.args.firstKanaName = data.firstKanaName
          this.args.lastKanaName = data.lastKanaName
          this.args.birthday = data.birthday

          if (data.sexKbn == '1') {
            this.args.sexKbn = '男性'
          } else if (data.sexKbn == '2') {
            this.args.sexKbn = '女性'
          }

          if (data.country == '1') {
            this.args.country = '日本'
          } else if (data.country == '0') {
            this.args.country = '日本国籍以外'
          }
          if (data.driverLicenseFlg == '1') {
            this.args.driverLicenseFlg = '有'
          } else if (data.driverLicenseFlg == '0') {
            this.args.driverLicenseFlg = '無'
          }
          this.args.driverLicenseNo = data.driverLicenseNo
          this.args.postCode = data.postCode
          for (let item of this.options) {
            for (let item2 of item.options) {
              if (item2.value == data.prefecturesCode) {
                this.args.prefecturesCode = item2.label
              }
            }
          }
          this.args.address = utils.nullFormat(data.address)
          this.args.otherAddress = utils.nullFormat(data.otherAddress)
          this.args.teleNumber = utils.nullFormat(data.teleNumber)
          this.args.phoneNumber = utils.nullFormat(data.phoneNumber)

          for (let item of this.confirmOptions) {
            if (item.value == data.myConfirmation) {
              this.args.myConfirmation = item.label
            }
          }
          this.args.myConfirmationCode = data.myConfirmationCode

          for (let item of this.homeOptions) {
            if (item.value == data.enAddress) {
              this.args.enAddress = item.label
            }
          }

          this.args.liveYear = data.liveYear
          this.args.liveMonth = data.liveMonth
          this.args.rentLoan = data.rentLoan

          if (data.spouse == '1') {
            this.args.spouse = '有'
          } else if (data.spouse == '2') {
            this.args.spouse = '無'
          }
          if (data.liveType == '1') {
            this.args.liveType = '同居'
          } else if (data.liveType == '2') {
            this.args.liveType = '別居'
          }
          this.args.familyNumber = data.familyNumber

          for (let item of this.homeNumberOptions) {
            if (item.value == data.homeNumber) {
              this.args.homeNumber = item.label
            }
          }

          if (data.masterKnowFlg == '0') {
            this.args.masterKnowFlg = 'いいえ'
          } else if (data.masterKnowFlg == '1') {
            this.args.masterKnowFlg = 'はい'
          }

          if (data.sendFlg == '0') {
            this.args.sendFlg = 'なし'
          } else if (data.sendFlg == '1') {
            this.args.sendFlg = 'あり'
          }

          if (data.houseFlg == '1') {
            this.args.houseFlg = '有'
          } else if (data.houseFlg == '0') {
            this.args.houseFlg = '無'
          }

          if (data.houseLoanFlg == '1') {
            this.args.houseLoanFlg = '有'
          } else if (data.houseLoanFlg == '0') {
            this.args.houseLoanFlg = '無'
          }

          if (data.paymentFlg == '1') {
            this.args.paymentFlg = '有'
          } else if (data.paymentFlg == '0') {
            this.args.paymentFlg = '無'
          }

          this.args.companyName = data.companyName
          this.args.companyKanaName = data.companyKanaName
          this.args.workPostCode = data.workPostCode
          for (let item of this.options) {
            for (let item2 of item.options) {
              if (item2.value == data.workPrefecturesCode) {
                this.args.workPrefecturesCode = item2.label
              }
            }
          }
          this.args.workAddress = utils.nullFormat(data.workAddress)
          this.args.workOtherAddress = utils.nullFormat(data.workOtherAddress)
          this.args.workTeleNumber = data.workTeleNumber
          this.args.workPhoneNumber = utils.nullFormat(data.workPhoneNumber)
          for (let item of this.jobTypeOptions) {
            if (item.value == data.jobType) {
              this.args.jobType = item.label
            }
          }
          for (let item of this.dutiesOptions) {
            if (item.value == data.position) {
              this.args.position = item.label
            }
          }
          this.args.department = utils.nullFormat(data.department)
          this.args.workYearMonth = data.workYearMonth
          this.args.payment = data.payment
          this.args.graduateYearMonth = data.graduateYearMonth
          this.args.visitingName = data.visitingName
          this.args.visitingKanaName = data.visitingKanaName
          this.args.visitingDepartment = data.visitingDepartment

          this.args.visitingPostCode = data.visitingPostCode
          this.args.visitPreCode = data.visitPreCode
          this.args.visitAddress = data.visitAddress
          this.args.visitOtherAddress = data.visitOtherAddress
          this.args.visitTelNumber = data.visitTelNumber
          if (data.incomeFlg == '0') {
            this.args.incomeFlg = '固定給'
          } else if (data.incomeFlg == '1') {
            this.args.incomeFlg = '歩合給'
          }
          this.args.incomeYear = utils.moneyFormat(data.incomeYear)

          for (let item of this.jobContentOptions) {
            if (item.value == data.workContent) {
              this.args.workContent = item.label
            }
          }

          for (let item of this.peopleNumberOptions) {
            if (item.value == data.workNumber) {
              this.args.workNumber = item.label
            }
          }
          if (data.workType == '1') {
            this.args.workType = '社員'
          } else if (data.workType == '3') {
            this.args.workType = 'アルバイト・パート'
          }

          for (let item of this.companyRegisterMoneyOptions) {
            if (item.value == data.money) {
              this.args.money = item.label
              break;
            } else {
              this.args.money = "-"
            }
          }
          this.args.comPreCode = data.comPreCode

          this.args.otherPurpose = data.otherPurpose
          this.args.getCount = data.getCount
          this.args.getMoney = data.getMoney
          this.args.hopeStoreNmae = data.hopeStoreNmae

          if (data.bankAccount == '0') {
            this.args.bankAccount = 'なし'
          } else if (data.bankAccount == '1') {
            this.args.bankAccount = 'あり'
          }

          this.args.sendFlg = data.sendFlg
          for (let item of this.getMoneyTypeOptions) {
            if (item.value == data.getKbnFlg) {
              this.args.getKbnFlg = item.label
            }
          }
          if (data.getKbnFlg == '4') {
            this.args.getKbn = data.getKbn
          }

          for (let item of this.peopleNumberOptions) {
            if (item.value == data.jobNumber) {
              this.args.jobNumber = item.label
            }
          }

          if (data.rentLoanContract == '1') {
            this.args.rentLoanContract = '有'
          } else if (data.rentLoanContract == '0') {
            this.args.rentLoanContract = '無'
          }

          this.args.applicationMoney = utils.moneyFormat(data.applicationMoney)
          this.args.returnHopeMonth = utils.moneyFormat(data.returnHopeMonth)
          this.args.returnHopeCount = data.returnHopeCount
          this.args.inCount = data.inCount
          this.args.moneyTotal = utils.moneyFormat(data.moneyTotal)
          this.args.payMoney1 = utils.nullFormat(data.payMoney1)
          this.args.payMoney2 = utils.nullFormat(data.payMoney2)
          this.args.money1 = utils.moneyFormat(utils.nullFormat(data.money1))
          this.args.money2 = utils.moneyFormat(utils.nullFormat(data.money2))
          if (data.ownAccountKbn == '1') {
            this.args.ownAccountKbn = 'はい'
          } else if (data.ownAccountKbn == '0') {
            this.args.ownAccountKbn = 'いいえ'
          }
          this.args.storeName = data.storeName
          this.args.storeNameFlg = data.storeNameFlg
          if (data.increaseFlg == '1') {
            this.args.increaseFlg = 'はい'
          } else if (data.increaseFlg == '0') {
            this.args.increaseFlg = 'いいえ'
          }
          this.args.accountNumber = data.accountNumber
          for (let item of this.returnDayOption) {
            if (item.value == data.returnDay) {
              this.args.returnDay = item.label
              this.argsForSend.returnDay = item.label
            }
          }
          this.args.returnMoney = utils.moneyFormat(data.returnMoney)
          this.args.returnMoney2 = utils.moneyFormat(data.returnMoney2)
          this.args.returnStartDay = data.returnStartDay
          this.returnStartDayYear = data.returnStartDay.slice(0, 4)
          this.returnStartDayMonth = data.returnStartDay.slice(4, 6)
          this.returnStartDayDay = data.returnStartDay.slice(6)

          this.args.increaseReturn1 = data.increaseReturn1
          this.args.increaseReturn2 = data.increaseReturn2
          this.args.returnStartDay2 = data.returnStartDay2

          this.args.noLoanRest = utils.moneyFormat(utils.nullFormat(data.noLoanRest))
          this.args.noLoanReturnMoney = utils.moneyFormat(utils.nullFormat(data.noLoanReturnMoney))
          this.args.loanRest = utils.moneyFormat(utils.nullFormat(data.loanRest))
          this.args.loanReturnMoney = utils.moneyFormat(utils.nullFormat(data.loanReturnMoney))
          this.args.cardLoanRest = utils.moneyFormat(utils.nullFormat(data.cardLoanRest))
          this.args.cardLoanRestRM = utils.moneyFormat(utils.nullFormat(data.cardLoanRestRM))
          this.args.otherComRest = utils.moneyFormat(utils.nullFormat(data.otherComRest))
          this.args.otherComReturnMoney = utils.moneyFormat(utils.nullFormat(data.otherComReturnMoney))

          this.returnStartDay2Year = data.returnStartDay2.slice(0, 4)
          this.returnStartDay2Month = data.returnStartDay2.slice(4, 6)
          this.returnStartDay2Day = data.returnStartDay2.slice(6)

          if (data.getFromOtherFlg == '1') {
            this.args.getFromOtherFlg = 'はい'
          } else if (data.getFromOtherFlg == '0') {
            this.args.getFromOtherFlg = 'いいえ'
          }


          this.returnMoneyTotal = (this.returnMoneyNum(data.noLoanReturnMoney) + this.returnMoneyNum(data.loanReturnMoney) + this.returnMoneyNum(data.cardLoanRestRM) +
            this.returnMoneyNum(data.otherComReturnMoney)).toString()

          this.args.purpose = data.purpose

          this.getHopeDateYear = data.getHopeDate.slice(0, 4)
          this.getHopeDateMonth = data.getHopeDate.slice(4, 6)
          this.getHopeDateDay = data.getHopeDate.slice(6)
          this.birthdayYear = data.birthday.slice(0, 4)
          this.birthdayMonth = data.birthday.slice(4, 6)
          this.birthdayDay = data.birthday.slice(6)
          this.args.workYear = data.workYear
          this.args.workMonth = data.workMonth
          this.loading = false
          console.log(this.args)
        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      }
    }

    init() {
      if (!(this.loanType == 'マイカーローン' || this.loanType == '教育ローン' || this.loanType == 'フリーローン' ||
        this.loanType == '徳島文理大学提携教育ローン' || this.loanType == '四国学院大学提携教育ローン' || this.loanType == '穴吹学園提携教育ローン'
        || this.loanType == '禅林学園提携教育ローン' || this.loanType == '中国学園提携教育ローン' || this.loanType == '高松大学・高松短期大学提携教育ローン' ||
        this.loanType == '香川大学提携教育ローン' || this.loanType == '四国医療専門学校提携教育ローン' || this.loanType == '岡山商科大学提携教育ローン'
        || this.loanType == '香川短期大学提携教育ローン')) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.agreeCheck) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.flg01BeforePage) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.flg01) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.flg02) {
        this.$router.push('/errorPage')
      } else if (!this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage')
      }

      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }


    changePage01Btn() {
      if (!this.$store.state.loanStore.agreeCheck || !this.$store.state.loanStore.flg01BeforePage ||
        !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 ||
        !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/otherLoan01');
      }
    }

    changePage02Btn() {
      if (!this.$store.state.loanStore.agreeCheck || !this.$store.state.loanStore.flg01BeforePage ||
        !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 ||
        !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/otherLoan02');
      }
    }

    changePage03Btn() {
      if (!this.$store.state.loanStore.agreeCheck || !this.$store.state.loanStore.flg01BeforePage ||
        !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 ||
        !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/otherLoan03');
      }
    }

    nextBtn() {
      if (!(this.loanType == 'マイカーローン' || this.loanType == '教育ローン' || this.loanType == 'フリーローン' ||
        this.loanType == '徳島文理大学提携教育ローン' || this.loanType == '四国学院大学提携教育ローン' || this.loanType == '穴吹学園提携教育ローン'
        || this.loanType == '禅林学園提携教育ローン' || this.loanType == '中国学園提携教育ローン' || this.loanType == '高松大学・高松短期大学提携教育ローン' ||
        this.loanType == '香川大学提携教育ローン' || this.loanType == '四国医療専門学校提携教育ローン' || this.loanType == '岡山商科大学提携教育ローン'
        || this.loanType == '香川短期大学提携教育ローン')
        || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 ||
        !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.argsForSend.getHopeDate = this.getHopeDateYear + this.getHopeDateMonth + this.getHopeDateDay
        this.loading = true
        apply114Loan(this.argsForSend).then(res => {
          if (res.data.resultStatus == 'NG') {
            this.$router.push('/errorPage');
          } else {
            this.$store.commit('loanStore/resetData');
            this.$router.push('/otherLoan05');
          }
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.loading = false
          this.$router.push('/errorPage');
        })
      }
    }
}
</script>

<style scoped>
  .label-normal-58-education-loan4 {
    height: 58px;
  }
  .label-home-center-education-loan4 {
    margin-top: 25px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .title_01 {
      height: 364px;
    }

    .title_00 {
      height: 50px;
    }

    .name_00 {
      margin-top: 15px;
      margin-left: 50px;
    }

    .name_01 {
      margin-top: 168px;
      margin-left: 50px;
    }

    .label-172-50px {
      height: 120px;
    }

    .label-enAddress-other-loan04 {
      margin-top: 50px;
      margin-left: 50px;
    }

    .sub-label-enAddress-other-loan04 {
      padding-top: 5px;
      padding-left: 30px;
    }

    .right-border-line {
      border-right: 1px solid rgb(230, 230, 230);
    }

    .button-width-100-150px {
      width: 150px;
    }

    .footer {
      margin-top: 20px;
      display: block;
    }

    .title {
      padding: 10px 0 10px 20px;
      margin-top: 20px;
      font-size: 18px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }

    .font-size-16-14px {
      font-size: 16px;
    }

    .sub-label-home-center-education-loan4 {
      padding-top: 25px;
      padding-left: 50px;
    }

    .label-50-35px {
      height: 50px;
    }

    .label-80-50px {
      height: 80px;
    }

    .label-95-35px {
      height: 95px;
    }

    .label-150-35px {
      height: 150px;
    }

    .label-154-35px {
      height: 154px;
    }

    .label-154-50px {
      height: 154px;
    }

    .label-50-50px {
      height: 50px;
    }

    .label-396-50px {
      height: 396px;
    }

    .label_362_50px {
      height: 362px;
    }

    .label_206_50px {
      height: 206px;
    }

    .label-364-50px {
      height: 364px;
    }

    .label-name-double-row-other-loan04 {
      margin-top: 35px;
      margin-left: 50px;
    }

    .label-name-single-row-other-loan04 {
      margin-top: 18px;
      margin-left: 50px;
    }

    .label-name-six-row-other-loan04 {
      margin-top: 185px;
      margin-left: 50px;
    }

    .label-name-three-row-other-loan04 {
      margin-top: 68px;
      margin-left: 50px;
    }

    .label-name-three-row-other-loan04-15 {
      margin-top: 15px;
      margin-left: 50px;
    }

    .label_name_seven_row_other_loan04 {
      margin-top: 168px;
      margin-left: 50px;
    }

    .label_name_seven_row_other_loan04_01 {
      margin-top: 88px;
      margin-left: 50px;
    }

    .sub-label-name-double-row-other-loan04 {
      padding-top: 15px;
      padding-left: 50px;
    }

    .sub-label-name-single-row-other-loan04 {
      padding-top: 18px;
      padding-left: 50px;
    }

    .money-other-loan04 {
      padding-top: 37px;
      padding-left: 50px;
    }

    .pay-money-name-other-loan04 {
      padding-top: 39px;
      padding-left: 50px;
    }

    .pay-money-other-loan04 {
      text-align: center;
      padding: 10px 20px;
    }

    .pay-money-other-loan04-2 {
      text-align: center;
      padding: 20px 20px;
    }

    .pay-money-other-loan04-3 {
      text-align: center;
      padding: 29px 20px;
    }

    .pay-money-other-loan04-4 {
      text-align: center;
      padding: 38px 20px;
    }

    .sub-label-name-single-row-other-loan04-01 {
      padding-top: 11px;
      padding-left: 50px;
      padding-right: 20px;
    }

    .sub-label-name-single-row-other-loan04-other {
      padding-top: 43px;
      padding-left: 50px;
    }

    .little-sub-label-name-single-row-other-loan04 {
      padding-top: 18px;
      padding-left: 50px;
    }

    .small-sub-label-name-single-row-other-loan04 {
      text-align: center;
      padding-top: 38px
    }

    .sub-label-name-three-row-other-loan04 {
      padding-top: 60px;
      padding-left: 60px;
    }

    .sub-textarea-other-loan04 {
      padding: 10px 10px 0 10px;
    }

    .sub-radio-enAddress-input-other-loan04 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 50px;
    }

    .sub-label-enAddress-input-other-loan04 {
      padding-top: 15px;
      padding-right: 10px;
      padding-left: 50px;
    }
  }

  @media screen and (max-width: 767px) {


    .label-name-three-row-other-loan04-15 {
      margin-top: 15px;
      text-align: center;
    }

    .label-50-50px {
      height: 50px;
    }

    .title_01 {
      height: 50px;
    }

    .title_00 {
      height: 50px;
    }

    .name_00 {
      margin-top: 15px;
      text-align: center;
    }

    .name_01 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-enAddress-input-other-loan04 {
      padding: 20px 10px 20px 10px;
    }

    .sub-radio-enAddress-input-other-loan04 {
      padding: 20px 10px 20px 10px;
    }

    .label-172-50px {
      height: 50px;
    }

    .label-enAddress-other-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-enAddress-other-loan04 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .right-border-line {
      border-right: 0 solid rgb(230, 230, 230);
    }

    .button-width-100-150px {
      width: 100px;
    }

    .footer {
      margin-top: 10px;
      display: block;
    }

    .title {
      padding: 10px 0 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }

    .font-size-16-14px {
      font-size: 14px;
    }

    .sub-label-home-center-education-loan4 {
      padding-top: 20px;
      padding-left: 20px;
    }

    .label-50-35px {
      height: 35px;
    }

    .label-80-50px {
      height: 50px;
    }

    .label-150-35px {
      height: 35px;
    }

    .label-154-35px {
      height: 35px;
    }

    .label-154-50px {
      height: 50px;
    }

    .label-396-50px {
      height: 50px;
    }

    .label-95-35px {
      height: 35px;
    }

    .label_362_50px {
      height: 50px;
    }

    .label_206_50px {
      height: 50px;
    }

    .label-364-50px {
      height: 50px;
    }

    .label-name-double-row-other-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label-name-single-row-other-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label-name-six-row-other-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label-name-three-row-other-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label_name_seven_row_other_loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label_name_seven_row_other_loan04_01 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-name-double-row-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .sub-label-name-single-row-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .money-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .pay-money-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .pay-money-other-loan04-2 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .pay-money-other-loan04-3 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .pay-money-other-loan04-4 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .pay-money-name-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .sub-label-name-single-row-other-loan04-01 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .sub-label-name-single-row-other-loan04-other {
      padding-top: 27px;
      padding-left: 20px;
      padding-bottom: 27px;
    }

    .sub-label-name-three-row-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .sub-textarea-other-loan04 {
      /*padding: 10px 10px 0 10px;*/
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .small-sub-label-name-single-row-other-loan04 {
      padding-top: 10px;
      padding-left: 20px;
      padding-bottom: 10px;
    }

    .little-sub-label-name-single-row-other-loan04 {
      padding-top: 10px;
      padding-left: 10px;
      padding-bottom: 10px;
    }
  }
</style>
