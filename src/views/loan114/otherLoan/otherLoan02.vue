<template>
    <div v-loading="loading" class="container">
        <el-row class="title">
            <div id="title">{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="@/assets/imgs/page02/pc_loan_02.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="@/assets/imgs/page02/m_loan_02.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; color: #6e6e6e;" class="label-font-css">
            <div>■お勤め先または事業先についてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-140-50px right-button-line"
                >
                    <div class="label-name-other-loan02 label-font-css">お勤め先名（屋号）<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[漢字]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="21"
                            class="sub-label-name-input-other-loan02"
                        >
                            <el-input
                                ref="companyName"
                                v-model.trim="companyName"
                                maxlength="40"
                                placeholder="（例）香川商事株式会社"
                                @blur="companyNameBlur"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">40文字まで</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[カナ]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="21"
                            class="sub-label-name-input-other-loan02 last-input"
                        >
                            <el-input
                                ref="companyKanaName"
                                v-model.trim="companyKanaName"
                                maxlength="60"
                                placeholder="（例）カガワショウジカブシキカイシャ"
                                @blur="companyKanaNameBlur"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">60文字まで</div>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">業種<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-select
                            ref="jobType"
                            v-model="jobType"
                            placeholder="選択してください"
                            style="width: 50%;"
                        >
                            <el-option
                                v-for="item in jobTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">お勤め先郵便番号<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row
                        class="sub-label-postcode-other-loan02"
                    >
                        <el-col
                            :xs="24"
                            :sm="10"
                        >
                            <span>〒</span>
                            <el-input
                                ref="workPostCode"
                                v-model.trim="workPostCode"
                                placeholder="（例）7600007"
                                maxlength="7"
                                style="margin-left: 10px;width: 88%;"
                                @input="onInputEvent('workPostCode', true)"
                                @blur="watchPostCode('workPostCode', 'bkWorkPostCode', 'workKanaAddress')"
                            ></el-input>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="14"
                        >
                            <el-button
                                type="danger"
                                plain
                                class="addressBtn"
                                @click="getAddress()"
                            >住所検索
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-155-50px right-button-line"
                >
                    <div class="label-address-other-loan02 label-font-css">お勤め先所在地<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan02"
                        >
                            <el-select
                                ref="workPrefecturesCode"
                                v-model="workPrefecturesCode"
                                placeholder="（例）香川県"
                                style="width: calc(40% - 5px);"
                            >
                                <el-option-group
                                    v-for="group in options"
                                    :key="group.label"
                                    :label="group.label"
                                >
                                    <el-option
                                        v-for="item in group.options"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-option-group>
                            </el-select>
                            <el-input
                                ref="workAddress"
                                v-model.trim="workAddress"
                                style="width: calc(60% - 5px); margin-left: 10px;"
                                maxlength="60"
                                placeholder="（例）高松市中央町"
                                @blur="workAddressBlur"
                            ></el-input>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan02"
                        >
                            <el-input
                                ref="workOtherAddress"
                                v-model.trim="workOtherAddress"
                                placeholder="（例）〇丁目〇〇番地"
                                maxlength="60"
                                @blur="workOtherAddressBlur"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">市町村と合わせて60文字まで</div>
                        </el-col>
                    </el-row>

                    <div class="sub-label-address-other-loan02 last-input">
                        <span class="red-color">※番地・マンション名・部屋番号等はお客様自身でご入力してください。</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-140-50px right-button-line"
                >
                    <div class="label-name-other-loan02 label-font-css">お勤め先電話番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="6"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[電話番号]<span class="red-color" style="float: right; font-weight: normal;">【必須】</span></span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            class="sub-label-name-input-other-loan02"
                        >
                            <el-input
                                ref="workTeleNumber"
                                v-model.trim="workTeleNumber"
                                maxlength="11"
                                placeholder="（例）0879876543"
                                @input="onInputEvent('workTeleNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字10桁もしくは11桁</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="6"
                            class="sub-label-name-other-loan02"
                        >
                            <span class="sub-label-font-css">[内線]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            class="sub-label-name-input-other-loan02 last-input"
                        >
                            <el-input
                                ref="workPhoneNumber"
                                v-model.trim="workPhoneNumber"
                                maxlength="8"
                                placeholder="（例）1234"
                                @input="onInputEvent('workPhoneNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字8桁まで</div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-80-50px right-button-line"
                >
                    <div class="label-getKbnFlg-other-loan02 label-font-css">所得区分<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-select
                            ref="getKbnFlg"
                            v-model="getKbnFlg"
                            placeholder="選択してください"
                            @change="getKbnFlgChange"
                        >
                            <el-option
                                v-for="item in getMoneyTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>

                        <el-input
                            v-if="getKbnFlg === '4'"
                            ref="getKbn"
                            v-model.trim="getKbn"
                            class="getKbn"
                            maxlength="60"
                            placeholder="入力してください"
                            @blur="changeGetKbn()"
                        ></el-input>
                    </div>
                    <div class="sub-label-message-other-loan02 last-input">
                        <span class="red-color">主な所得を選択してください</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">役職<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-select
                            ref="position"
                            v-model="position"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in dutiesOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">従業員数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-select
                            ref="jobNumber"
                            v-model="jobNumber"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in peopleNumberOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">所属部署</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-input
                            ref="department"
                            v-model.trim="department"
                            maxlength="60"
                            placeholder="（例）営業部"
                            @blur="departmentBlur"
                        ></el-input>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">勤続（営）年数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row
                        class="sub-label-live-time-other-loan02"
                    >
                        <el-col
                            :xs="24"
                            :sm="12"
                        >
                            <el-select
                                ref="workYear"
                                v-model="workYear"
                                placeholder="選択してください"
                                class="input-class"
                            >
                                <el-option
                                    v-for="item in liveYearOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                            <span style="margin-left: 10px;">年</span>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="sub-content"
                        >
                            <el-select
                                ref="workMonth"
                                v-model="workMonth"
                                placeholder="選択してください"
                                class="input-class"
                            >
                                <el-option
                                    v-for="item in monthOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                            <span style="margin-left: 10px;">ヶ月</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-111-50px right-button-line"
                >
                    <div class="label-yearmoney-other-loan02 label-font-css">税込年収<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-input
                            ref="incomeYear"
                            v-model.trim="incomeYear"
                            maxlength="4"
                            placeholder="（例）300"
                            style="width: 80%;"
                            @input="onInputEvent('incomeYear')"
                        ></el-input>
                        <span style="margin-left: 10px">万円</span>
                    </div>

                    <div class="sub-label-address-other-loan02">
                        <span class="red-color">※一般個人は源泉徴収票の収入金額を、個人事業主は確定申告書別表の所得金額を記入する。</span>
                    </div>
                    <div class="sub-label-address-other-loan02 last-input" style="margin-bottom: 10px;">
                        <span class="red-color">※複数収入源のある方は、総年間給与収入＋総年間年金収入＋事業所得金額で算出する。</span>
                    </div>

                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan02 label-font-css">資本金</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-birthday-input-other-loan02">
                        <el-select v-model="money" placeholder="選択してください">
                            <el-option
                                v-for="item in companyRegisterMoneyOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            >
                            </el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="8"
                    class="label-background-color label-70-50px right-button-line"
                >
                    <div class="label-loanbank-other-loan02 label-font-css">住宅ローン契約（当行）<span
                        class="red-color"
                        style="float: right;font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="16"
                >
                    <div class="sub-label-gender-other-loan02 last-input">
                        <el-radio-group id="rentLoanContract" v-model="rentLoanContract">
                            <el-radio label="1"><span>有</span></el-radio>
                            <el-radio label="0"><span>無</span></el-radio>
                        </el-radio-group>
                    </div>

                    <div class="sub-label-message-other-loan02 last-input">
                        <span class="red-color">当行に住宅ローン契約がありますか。</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 40px;margin-bottom: 80px;">
            <el-row>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="backBtn-other-loan02"
                        @click="backBtn()"
                    >戻る
                    </el-button>
                </el-col>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="nextBtn-other-loan02"
                        @click="nextBtn()"
                    >次へ
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';
import utils from "@/libs/utils";
import message from "@/libs/message02";
import {apply114LoanGetAddress, apply114LoanGetDetail, apply114LoanTmp} from "@/api/loan114";
import inputCheck from "@/libs/inputCheck";
import constants from '@/libs/constants';

  @Component
export default class Error extends Vue {
    applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    loading: boolean = false
    companyName: string = ''
    companyKanaName: string = ''
    jobType: string = ''
    workPostCode: string = ''
    bkWorkPostCode: string = ''
    workPrefecturesCode: string = ''
    workAddress: string = ''
    workOtherAddress: string = ''
    workKanaAddress: string = ''
    workTeleNumber: string = ''
    workPhoneNumber: string = ''
    getKbn: string = ''
    getKbnFlg: string = ''
    position: string = ''
    jobNumber: string = ''
    department: string = ''
    workYear: string = ''
    workMonth: string = ''
    incomeYear: string = ''
    money: string = ''
    rentLoanContract: string = ''
    stringNumber: string = ''

    options: any = constants.prefecturesCodeList


    monthOption: any = constants.liveMonthList

    jobTypeOptions: any = constants.jobTypeList

    getMoneyTypeOptions: any = constants.getKbnFlgList

    dutiesOptions: any = constants.positionList_other

    peopleNumberOptions: any = constants.jobNumberList

    companyRegisterMoneyOptions: any = constants.moneyList

    liveYearOption: any = constants.workYearList

    loanTypeHave() {
      return this.loanType.includes('提携教育ローン')
    }

    public get loanType(): string {
      return this.$store.state.loanStore.loanType;
    }

    changeGetKbn() {
      this.getKbn = utils.changeToDBC(this.getKbn)
    }

    // 半角转全角
    companyNameBlur() {
      this.companyName = utils.changeToDBC(this.companyName)
    }

    companyKanaNameBlur() {
      this.companyKanaName = utils.changeToDBC(this.companyKanaName)
      this.companyKanaName = utils.toKatakanaCase(this.companyKanaName)
    }

    workOtherAddressBlur() {
      this.workOtherAddress = utils.changeToDBC(this.workOtherAddress)
    }

    workAddressBlur() {
      this.workAddress = utils.changeToDBC(this.workAddress)
    }

    departmentBlur() {
      this.department = utils.changeToDBC(this.department)
    }

    mounted() {
      this.init()
      let title: any = document.getElementById("app")
      title.scrollIntoView();
      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01) {
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }

        this.loading = true
        apply114LoanGetDetail(params).then(res => {
          const data = res.data.resultData
          this.companyName = data.companyName
          this.companyKanaName = data.companyKanaName
          this.jobType = data.jobType
          this.workPostCode = data.workPostCode
          this.workPrefecturesCode = data.workPrefecturesCode
          this.workAddress = data.workAddress
          this.workOtherAddress = data.workOtherAddress
          this.workTeleNumber = data.workTeleNumber
          this.workPhoneNumber = data.workPhoneNumber
          this.getKbn = data.getKbn
          this.getKbnFlg = data.getKbnFlg
          this.position = data.position
          this.jobNumber = data.jobNumber
          this.department = data.department
          this.workYear = data.workYear
          this.workMonth = data.workMonth
          this.incomeYear = data.incomeYear
          this.money = data.money
          this.rentLoanContract = data.rentLoanContract
          this.loading = false
          console.log(data)
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
      }

      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }

    watchPostCode(postCode, bkPostCode, kanaAddress) {
      if (this[bkPostCode] != '' && this[bkPostCode] != this[postCode]) {
          this[kanaAddress] = ''
      }
      this[bkPostCode] = this[postCode];
    }

    backBtn() {
      this.$router.push('/otherLoan01')
    }

    nextBtn() {

      // お勤め先（屋号）漢字（空チェック）
      if (inputCheck.checkNull(this.companyName)) {
        if (this.loanType == '教育ローン') {
          this.$message.error(message.educationCompanyName01);
        } else {
          this.$message.error(message.companyName01);
        }
        let companyName: any = this.$refs.companyName
        companyName.focus()
        return;

        // お勤め先（屋号）漢字（全角チェック（漢字））
      } else if (inputCheck.zenkakuCheck(this.companyName)) {
        if (this.loanType == '教育ローン') {
          this.$message.error(message.educationCompanyName02);
        } else {
          this.$message.error(message.companyName02);
        }
        let companyName: any = this.$refs.companyName
        companyName.focus()
        return;

        // お勤め先（屋号）カナ（空チェック）
      } else if (inputCheck.checkNull(this.companyKanaName)) {
        if (this.loanType == '教育ローン') {
          this.$message.error(message.educationCompanyKanaName01);
        } else {
          this.$message.error(message.companyKanaName01);
        }
        let companyKanaName: any = this.$refs.companyKanaName
        companyKanaName.focus()
        return;

        // お勤め先（屋号）カナ（全角チェック（カナ））
      } else if (inputCheck.zenkakuCheck2(this.companyKanaName)) {
        if (this.loanType == '教育ローン') {
          this.$message.error(message.educationCompanyKanaName02);
        } else {
          this.$message.error(message.companyKanaName02);
        }
        let companyKanaName: any = this.$refs.companyKanaName
        companyKanaName.focus()
        return;

        // 業種（空チェック）
      } else if (inputCheck.checkNull(this.jobType)) {
        this.$message.error(message.jobType01);
        let jobType: any = this.$refs.jobType
        jobType.focus()
        return;

        // お勤め先郵便番号（空チェック）
      } else if (inputCheck.checkNull(this.workPostCode)) {
        this.$message.error(message.workPostCode01);
        let workPostCode: any = this.$refs.workPostCode
        workPostCode.focus()
        return;

        // お勤め先郵便番号（桁数チェック）
      } else if (inputCheck.checkLength(this.workPostCode, 7)) {
        this.$message.error(message.workPostCode02);
        let workPostCode: any = this.$refs.workPostCode
        workPostCode.focus()
        return;

        // お勤め先所在地都道府県（空チェック）
      } else if (inputCheck.checkNull(this.workPrefecturesCode)) {
        this.$message.error(message.workPrefecturesCode01);
        let workPrefecturesCode: any = this.$refs.workPrefecturesCode
        workPrefecturesCode.focus()
        return;

        // お勤め先所在地市町村（空チェック）
      } else if (this.workOtherAddress.length < 60 && inputCheck.checkNull(this.workAddress)) {
        this.$message.error(message.workAddress01);
        let workAddress: any = this.$refs.workAddress
        workAddress.focus()
        return;

        // お勤め先所在地市町村（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.workAddress) && inputCheck.zenkakuCheck(this.workAddress)) {
        this.$message.error(message.workAddress02);
        let workAddress: any = this.$refs.workAddress
        workAddress.focus()
        return;

        // お勤め先所在地以降ご住所（空チェック）
      } else if (this.workAddress.length < 60 && inputCheck.checkNull(this.workOtherAddress)) {
        this.$message.error(message.workOtherAddress01);
        let workOtherAddress: any = this.$refs.workOtherAddress
        workOtherAddress.focus()
        return;

        // お勤め先所在地以降ご住所（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.workOtherAddress) && inputCheck.zenkakuCheck(this.workOtherAddress)) {
        this.$message.error(message.workOtherAddress02);
        let workOtherAddress: any = this.$refs.workOtherAddress
        workOtherAddress.focus()
        return;

        // お勤め先所在地以降ご住所（組合せチェック）
      } else if (this.workAddress.trim().length + this.workOtherAddress.trim().length > 60) {
        this.$message.error(message.workOtherAddress03);
        let workAddress: any = this.$refs.workAddress
        workAddress.focus()
        return;

        // お勤め先電話番号（空チェック）
      } else if (inputCheck.checkNull(this.workTeleNumber)) {
        this.$message.error(message.workTeleNumber05);
        let workTeleNumber: any = this.$refs.workTeleNumber
        workTeleNumber.focus()
        return;

        // お勤め先電話番号（桁数チェック）
      } else if (!inputCheck.checkNull(this.workTeleNumber) && inputCheck.checkLength(this.workTeleNumber, 10) && inputCheck.checkLength(this.workTeleNumber, 11)) {
        this.$message.error(message.workTeleNumber04);
        let workTeleNumber: any = this.$refs.workTeleNumber
        workTeleNumber.focus()
        return;

        // お勤め先電話番号（10桁の電話番号の形式チェック）
      } else if (!inputCheck.checkNull(this.workTeleNumber) && this.workTeleNumber.trim().length == 10) {
        if (inputCheck.check10TeleNumber(this.workTeleNumber)) {
          this.$message.error(message.workTeleNumber03);
          let workTeleNumber: any = this.$refs.workTeleNumber
          workTeleNumber.focus()
          return;
        }
      }
        // お勤め先電話番号（11桁の電話番号の形式チェック）
      if (!inputCheck.checkNull(this.workTeleNumber) && this.workTeleNumber.trim().length == 11) {
        if (inputCheck.check11TeleNumber(this.workTeleNumber)) {
          this.$message.error(message.workTeleNumber03);
          let workTeleNumber: any = this.$refs.workTeleNumber
          workTeleNumber.focus()
          return;
        }
      }

        // 所得区分（空チェック）
      if (inputCheck.checkNull(this.getKbnFlg)) {
        this.$message.error(message.getKbn01);
        let getKbnFlg: any = this.$refs.getKbnFlg
        getKbnFlg.focus()
        return;

        // 所得区分が「4.その他請負等」の場合、所得区分その他請負等（空チェック）
      } else if (this.getKbnFlg == '4' && inputCheck.checkNull(this.getKbn)) {
        this.$message.error(message.getKbn02);
        let getKbn: any = this.$refs.getKbn
        getKbn.focus()
        return;

        // 所得区分が「4.その他請負等」の場合、所得区分その他請負等（全角チェック（漢字））
      } else if (this.getKbnFlg == '4' && !inputCheck.checkNull(this.getKbn) && inputCheck.zenkakuCheck(this.getKbn)) {
        this.$message.error(message.getKbn03);
        let getKbn: any = this.$refs.getKbn
        getKbn.focus()
        return;

        // 役職（空チェック）
      } else if (inputCheck.checkNull(this.position)) {
        this.$message.error(message.position01);
        let position: any = this.$refs.position
        position.focus()
        return;

        // 従業員数（空チェック）
      } else if (inputCheck.checkNull(this.jobNumber)) {
        this.$message.error(message.jobNumber01);
        let jobNumber: any = this.$refs.jobNumber
        jobNumber.focus()
        return;

        // 所属部署が空でない場合（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.department) && inputCheck.zenkakuCheck(this.department)) {
        this.$message.error(message.department02);
        let department: any = this.$refs.department
        department.focus()
        return;

        // 勤続（営）年数_年（空チェック）
      } else if (inputCheck.checkNull(this.workYear)) {
        this.$message.error(message.workYear01);
        let workYear: any = this.$refs.workYear
        workYear.focus()
        return;

        // 勤続（営）年数_ヶ月（空チェック）
      } else if (inputCheck.checkNull(this.workMonth)) {
        this.$message.error(message.workMonth01);
        let workMonth: any = this.$refs.workMonth
        workMonth.focus()
        return;

        // 税込年収（空チェック）
      } else if (inputCheck.checkNull(this.incomeYear)) {
        this.$message.error(message.incomeYear01);
        let incomeYear: any = this.$refs.incomeYear
        incomeYear.focus()
        return;
      }

      // 提携教育ローンと教育ローン
      if (this.loanTypeHave() || this.loanType == '教育ローン') {

        // 税込年収（金額チェック）
        if (parseInt(this.incomeYear) < 150) {
          this.$message.error(message.incomeYear03);
          let incomeYear: any = this.$refs.incomeYear
          incomeYear.focus()
          return;
        }
      }

      // 住宅ローン契約（空チェック）
      if (inputCheck.checkNull(this.rentLoanContract)) {
        if (this.loanType == '教育ローン') {
          this.$message.error(message.rentLoanContract02);
        } else {
          this.$message.error(message.rentLoanContract01);
        }
        let rentLoanContract: any = document.getElementById("rentLoanContract")
        rentLoanContract.focus()
        return;
      }

      this.loading = true
      if (inputCheck.checkNull(this.workKanaAddress)) {
        const params = {
          "query": this.workPostCode,
          "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
          "output": "json",
          "detail": "full"
        }
        apply114LoanGetAddress(params).then(res => {
          this.workKanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
          this.commit()
        }).catch(err => {
          console.log('err::', err)
          this.commit()
        })
      } else {
        this.commit()
      }
    }

    commit() {

      if (this.loanTypeHave()) {
        this.stringNumber = '4'
      } else if (this.loanType == 'フリーローン') {
        this.stringNumber = '3'
      } else if (this.loanType == 'マイカーローン') {
        this.stringNumber = '1'
      } else if (this.loanType == '教育ローン') {
        this.stringNumber = '2'
      }

      let params: any = {
        'flag': '2',
        'loanType': this.stringNumber,
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'companyName': this.companyName,
        'companyKanaName': this.companyKanaName,
        'jobType': this.jobType,
        'workPostCode': this.workPostCode,
        'workPrefecturesCode': this.workPrefecturesCode,
        'workAddress': this.workAddress,
        'workOtherAddress': this.workOtherAddress,
        'workKanaAddress': this.workKanaAddress,
        'workTeleNumber': this.workTeleNumber,
        'workPhoneNumber': this.workPhoneNumber,
        'getKbnFlg': this.getKbnFlg,
        'getKbn': this.getKbn,
        'position': this.position,
        'jobNumber': this.jobNumber,
        'workYear': this.workYear,
        'workMonth': this.workMonth,
        'department': this.department,
        'incomeYear': this.incomeYear,
        'money': this.money,
        'rentLoanContract': this.rentLoanContract,
      }

      // this.$store.commit('loanStore/setFlg02', true);
      // this.$router.push('/otherLoan03');
      apply114LoanTmp(params).then(res => {
        this.$store.commit('loanStore/setFlg02', true);

        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/otherLoan04');
        } else {
          this.$router.push('/otherLoan03');
        }
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    getAddress() {
      let workPostCode: any = this.$refs.workPostCode
      if (inputCheck.checkNull(this.workPostCode)) {
        this.$message.error('「お勤め先郵便番号」を入力してください。');
        workPostCode.focus()
        return;
      } else if (inputCheck.checkLength(this.workPostCode, 7)) {
        this.$message.error(message.workPostCode02);
        workPostCode.focus()
        return;
      }

      const params = {
        "query": this.workPostCode,
        "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
        "output": "json",
        "detail": "full"
      }
      apply114LoanGetAddress(params).then(res => {
        // const data = res.data
        for (let item of this.options) {
          for (let item2 of item.options) {
            if (item2.label == res.data.Feature[0].Property.AddressElement[0].Name) {
              this.workPrefecturesCode = item2.value
            }
          }
        }
        this.workAddress = String(res.data.Feature[0].Property.AddressElement[1].Name) + String(res.data.Feature[0].Property.AddressElement[2].Name)
        this.workKanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
      }).catch(err => {
        this.$message.error('検索に失敗しました。');
        console.log(err)
      })
    }

    onInputEvent(eventName, strFlag) {
      if (strFlag) {
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      }else{
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
      }
    }

    getKbnFlgChange() {
      this.getKbn = '';
    }
}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .input-class {
      margin-left: 10px;
    }
    .sub-label-address-other-loan02 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .sub-label-message-other-loan02 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .getKbn {
      width: 50%;
      margin-left: 10px;
    }
    .radio-font-size {
      font-size: 16px;
    }
    .title {
      padding: 10px 0px 10px 20px;
      margin-top: 20px;
      font-size: 18px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-right: 0.5px solid rgb(230, 230, 230);
    }
    .label-name-other-loan02 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .sub-label-name-other-loan02 {
      padding-top: 15px;
      padding-left: 20px;
    }
    .sub-label-name-input-other-loan02 {
      padding-top: 7px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .label-birthday-other-loan02 {
      margin-top: 15px;
      margin-left: 20px;
    }
    .label-getKbnFlg-other-loan02 {
      margin-top: 30px;
      margin-left: 20px;
    }
    .label-yearmoney-other-loan02 {
      margin-top: 40px;
      margin-left: 20px;
    }
    .label-loanbank-other-loan02 {
      margin-top: 28px;
      margin-left: 20px;
    }
    .sub-label-birthday-input-other-loan02 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }
    .sub-label-postcode-other-loan02 {
      padding-top: 5px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .postCode1 {
      width: 35%;
    }
    .postCode2 {
      width: 40%;
    }
    .addressBtn {
      width: 40%;
    }
    .label-address-other-loan02 {
      margin-top: 70px;
      margin-left: 20px;
    }
    .sub-label-address-other-loan02 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .sub-label-live-time-other-loan02 {
      margin-top: 5px;
      margin-left: 20px;
    }
    .sub-label-gender-other-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .backBtn-other-loan02 {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .nextBtn-other-loan02 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }
    .label-tel-other-loan02-num {
      margin-top: 60px;
    }
  }

  @media screen and (max-width: 767px) {
    .sub-label-address-other-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-message-other-loan02 {
      padding-top: 0px;
      padding-left: 10px;
    }
    .getKbn {
      width: calc(100%);
      margin-top: 8px;
    }
    .last-input {
      margin-bottom: 20px;
    }
    .radio-font-size {
      font-size: 14px;
    }
    .title {
      padding: 10px 0px 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      //font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .label-name-other-loan02 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-name-other-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-name-input-other-loan02 {
      padding-top: 8px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .label-birthday-other-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .label-getKbnFlg-other-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .label-yearmoney-other-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .label-loanbank-other-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-input-other-loan02 {
      padding: 20px 10px 20px 10px;
    }
    .sub-label-postcode-other-loan02 {
      padding: 20px 10px 20px 10px;
    }
    .postCode1 {
      /*width: calc(35% - 34px);*/
      width: calc(45% - 30px);
    }
    .postCode2 {
      /*width: calc(100% - 38px);*/
      width: calc(55% - 28px);
    }
    .addressBtn {
      width: 100%;
      margin-top: 15px;
    }
    .label-address-other-loan02 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-live-time-other-loan02 {
      padding: 20px 10px 20px 10px;
    }
    .sub-content {
      margin-top: 16px;
    }
    .sub-label-gender-other-loan02 {
      padding-top: 20px;
      padding-left: 30px;
    }
    .backBtn-other-loan02 {
      width: 130px;
      background: #fc0019;
    }
    .nextBtn-other-loan02 {
      width: 130px;
      background: #fc0019;
      float: right;
    }
    .label-tel-other-loan02-num {
      margin-top: 15px;
      text-align: center;
    }
  }
</style>
