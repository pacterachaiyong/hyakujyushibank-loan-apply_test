<template>
    <div v-loading="loading" class="container">
        <el-row class="title">
            <div id="title">{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="../../../assets/imgs/page03/pc_loan_03.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="../../../assets/imgs/page03/m_loan_03.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px;">
            <div>■お申込内容についてご入力ください。</div>
        </el-row>

        <hr class="hr-style" style="margin-top: 10px;"/>

        <el-row style="margin-top: 10px;">
            <div>お客様のご希望をお書きください。</div>
        </el-row>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;" class="div-objective-height">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-70-50px right-button-line"
                >
                    <div class="label-money-warning-other-loan03 label-font-css">お申込金額<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-money-other-loan03">
                        <el-input
                            ref="applicationMoney"
                            v-model.trim="applicationMoney"
                            maxlength="4"
                            placeholder="（例）200"
                            style="width: 30%;"
                            @input="changeHankanaMoney('applicationMoney')"
                        ></el-input>
                        <span style="margin-left: 10px;" class="sub-label-font-css">万円</span>
                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">{{ moneyWarning }}</div>
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
                    <div class="label-money-other-loan03 label-font-css">お借入希望日<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div>
                        <el-row>
                            <el-col
                                :xs="24"
                                :sm="8"
                                class="sub-label-money-other-loan03"
                            >
                                <span class="sub-label-font-css">西暦</span>
                                <el-select
                                    ref="getHopeDateYear"
                                    v-model="getHopeDateYear"
                                    style="margin-left: 5px;"
                                    class="birthday-width"
                                    placeholder="選択してください"
                                    @change="changeDatetime()"
                                >
                                    <el-option
                                        v-for="item in yearOptions"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>
                            </el-col>

                            <el-col
                                :xs="24"
                                :sm="16"
                                class="sub-label-money-detail-other-loan03"
                            >

                                <el-select
                                    ref="getHopeDateMonth"
                                    v-model="getHopeDateMonth"
                                    style="width: 38%"
                                    placeholder="選択してください"
                                    @change="changeDatetime()"
                                >
                                    <el-option
                                        v-for="item in birthdayMonthOption"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>

                                <span
                                    style="margin-left: 5px;"
                                >月</span>

                                <el-select
                                    ref="getHopeDateDay"
                                    v-model="getHopeDateDay"
                                    style="margin-left: 10px;width: 38%"
                                    placeholder="選択してください"
                                    @change="changeDatetime()"
                                >
                                    <el-option
                                        v-for="item in birthdayDayOption"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    >
                                    </el-option>
                                </el-select>

                                <span style="margin-left: 5px;">日</span>
                            </el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-176-50px-1 right-button-line"
                >
                    <div class="label-money-warning-message-other-loan03 label-font-css">毎月返済希望額<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-money-other-loan03">
                        <el-input
                            ref="returnHopeMonth"
                            v-model.trim="returnHopeMonth"
                            maxlength="8"
                            placeholder="（例）20000"
                            style="width: 30%;"
                            @input="onInputEvent('returnHopeMonth')"
                        ></el-input>
                        <span style="margin-left: 10px;" class="sub-label-font-css">円</span>
                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">半角数字8桁まで</div>


                        <div style="margin-bottom: 6px; font-size: 14px;">
                            <span class="red-color"><div style="float: left">※</div><div style="display: table">毎月返済の金額は金利と返済回数によって変わります。ご参考として返済額シミュレーションをご利用ください。　シミュレーションは
                                <a
                                    target="_blank"
                                    href="https://www.114bank.co.jp/personal/products/loan/simulator/loan1.html"
                                    style="display: contents;"
                                >
                                    <span style="text-decoration:underline">こちら</span>
                                </a></div></span>
                        </div>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-114px right-button-line"
                >
                    <div class="label-money-warning-other-loan03-1 label-font-css">返済希望回数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-money-other-loan03">
                        <el-input
                            ref="returnHopeCount"
                            v-model.trim="returnHopeCount"
                            maxlength="3"
                            placeholder="（例）100"
                            style="width: 30%;"
                            @input="onInputEvent('returnHopeCount')"
                        ></el-input>
                        <span style="margin-left: 10px;" class="sub-label-font-css">回</span>
                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">{{ returnHopeCountWarning }}</div>
                        <div style="font-size: 14px;">
                            <span class="red-color"><div style="float: left">※</div><div style="display: flex">{{ returnHopeCount2Warning }}</div></span>
                        </div>

                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row v-show="educationLoanHave()">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-70-50px right-button-line"
                >
                    <div class="label-money-warning-other-loan03 label-font-css">内据置回数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-money-other-loan03">
                        <el-input
                            ref="inCount"
                            v-model.trim="inCount"
                            maxlength="3"
                            placeholder="（例）40"
                            style="width: 80%;"
                            @blur="changeDatetime()"
                            @input="onInputEvent('inCount')"
                        ></el-input>
                        <span style="margin-left: 10px;" class="sub-label-font-css">回</span>
                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">残りの在学期間中は据置できます</div>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="educationLoanHave()" class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50-380px right-button-line"
                >
                    <div class="label-objective-other-loan03 label-font-css">ご利用目的
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-168-14px label-background-color-change"
                        >
                            <div class="sub-label-objective-other-loan03">
                                目的<span
                                    class="red-color"
                                    style="float: right; font-weight: normal;"
                                >【必須】</span>
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="sub-label-objective-input-other-loan03">
                                <el-input
                                    ref="purpose"
                                    v-model.trim="purpose"
                                    maxlength="60"
                                    type="textarea"
                                    resize="none"
                                    style="width: 80%"
                                    :rows="5"
                                    :placeholder="purposeWarning"
                                    @blur="purposeBlur"
                                >
                                </el-input>
                                <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">60文字まで</div>
                            </div>
                        </el-col>
                    </el-row>

                    <hr class="hr-style isPc"/>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-need-money-total-other-loan03 label-70-14px label-background-color-change"
                        >
                            <div>
                                所要資金総額<span
                                    class="red-color"
                                    style="float: right; font-weight: normal;"
                                >【必須】</span>
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="label-need-money-total-input-other-loan03">
                                <el-input
                                    ref="moneyTotal"
                                    v-model.trim="moneyTotal"
                                    maxlength="4"
                                    style="width: 40%;"
                                    placeholder="（例）60"
                                    @input="onInputEvent('moneyTotal')"
                                ></el-input>
                                <span style="margin-left: 10px;">万円</span>
                                <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-need-money-total-other-loan03 label-70-14px label-background-color-change"
                        >
                            <div>
                                お支払先（ご購入先）
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="label-need-money-total-input-other-loan03">
                                <el-input
                                    ref="payMoney1"
                                    v-model="payMoney1"
                                    maxlength="30"
                                    style="width: 80%;"
                                    :placeholder="payMoney1Warning"
                                    @blur="payMoney1Blur"
                                ></el-input>
                                <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">30文字まで</div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-need-money-total-other-loan03 label-70-14px label-background-color-change"
                        >
                            <div>
                                金額
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="label-need-money-total-input-other-loan03">
                                <el-input
                                    ref="money1"
                                    v-model="money1"
                                    maxlength="4"
                                    style="width: 40%;"
                                    placeholder="（例）250"
                                    @input="onInputEvent('money1')"
                                ></el-input>
                                <span style="margin-left: 5px;">万円</span>
                                <div style="margin-top: 5px; color: #fc0019;font-size: 14px;" class="last-input">
                                    半角数字4桁まで
                                </div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-need-money-total-other-loan03 label-70-14px label-background-color-change"
                        >
                            <div>
                                お支払先（ご購入先）
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="label-need-money-total-input-other-loan03">
                                <el-input
                                    ref="payMoney2"
                                    v-model="payMoney2"
                                    maxlength="30"
                                    style="width: 80%;"
                                    :placeholder="payMoney2Warning"
                                    @blur="payMoney2Blur"
                                ></el-input>
                                <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">30文字まで</div>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-need-money-total-other-loan03 label-70-14px label-background-color-change"
                        >
                            <div>
                                金額
                            </div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div class="label-need-money-total-input-other-loan03">
                                <el-input
                                    ref="money2"
                                    v-model="money2"
                                    maxlength="4"
                                    style="width: 35%;"
                                    :placeholder="money2Warning"
                                    @input="onInputEvent('money2')"
                                ></el-input>
                                <span style="margin-left: 5px;">万円</span>
                                <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    :class="[{ label_170_50px:ownAccountKbn === '1' },
                             { label_50_50px:ownAccountKbn === '0' },
                             'label-background-color','right-button-line']"
                >
                    <div
                        :class="[{label_payment_account_other_loan03_1:ownAccountKbn === '1' },
                                 {label_payment_account_other_loan03_0:ownAccountKbn === '0'},
                                 'label-font-css']"
                    >返済口座
                        <span
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
                            :sm="8"
                        >
                            <div class="sub-label-payment-account-other-loan03">
                                <div class="sub-label-font-css">当行に口座をお持ちですか？</div>
                            </div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="16"
                        >
                            <div id="ownAccountKbnTest" class="sub-label-payment-account-radio-other-loan03">
                                <el-radio-group v-model="ownAccountKbn" @change="ownAccountKbnChange">
                                    <el-radio label="1"><span>はい</span></el-radio>
                                    <el-radio label="0"><span>いいえ</span></el-radio>
                                </el-radio-group>
                            </div>
                        </el-col>
                    </el-row>

                    <el-row
                        v-show="ownAccountKbn === '1'"
                        class="add-line"
                    >
                        <el-col
                            :span="8"
                            class="label-50-14px sub-label-payment-account-have-title-other-loan03"
                        >
                            <div>
                                <div>支店</div>
                            </div>
                        </el-col>

                        <el-col
                            :span="16"
                            class="sub-label-payment-account-have-content-other-loan03"
                        >
                            <el-select
                                ref="storeName"
                                v-model="storeName"
                                placeholder="（例）高松支店"
                            >
                                <el-option-group
                                    v-for="group in hopeStoreNameOption"
                                    :key="group.label"
                                    :label="group.label"
                                >
                                    <el-option
                                        v-for="item in group.options"
                                        :key="item.label"
                                        :label="item.label"
                                        :value="item.label"
                                    ></el-option>
                                </el-option-group>
                            </el-select>
                        </el-col>
                    </el-row>

                    <el-row v-show="ownAccountKbn === '1'">
                        <el-col
                            :span="8"
                            class="label-70-14px sub-label-payment-account-have-title-detail-other-loan03"
                        >
                            <div>
                                <div>口座番号</div>
                            </div>
                        </el-col>

                        <el-col
                            :span="16"
                            class="sub-label-payment-account-number-content-other-loan03"
                        >
                            <div>
                                <span>普通</span>
                                <el-input
                                    ref="accountNumber"
                                    v-model.trim="accountNumber"
                                    maxlength="7"
                                    style="width: 50%;margin-left: 10px;"
                                    placeholder="（例）1234567"
                                    @blur="changeAccountNumber"
                                    @input="onInputEvent('accountNumber', true)"
                                ></el-input>
                                <div style="margin-top: 5px; margin-left: 44px;color: #fc0019; font-size: 14px;">半角数字7桁</div>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>


        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div
                        v-show="increaseFlg !== '1'"
                        class="label-payment-account-other-loan03 label-font-css"
                    >返済内訳<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="8"
                    class="label-50-14px sub-label-breakdown-other-loan03 "
                >
                    <div>
                        <div class="sub-label-font-css">年2回増額返済併用を利用しますか？</div>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="9"
                    class="sub-label-breakdown-radio-other-loan03"
                >
                    <div>
                        <el-radio-group
                            id="increaseFlg"
                            v-model="increaseFlg"
                            @change="changeDatetime"
                        >
                            <el-radio label="1"><span>はい</span></el-radio>
                            <el-radio label="0"><span>いいえ</span></el-radio>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style isPc" style="float: right;width: 75%"/>

            <el-row>
                <el-col
                    :xs="0"
                    :sm="6"
                    class="label-background-color label-196-50px right-button-line"
                >
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-month-payment-account-other-loan03 label-196-14px label-background-color-change"
                >
                    <div>
                        <div>毎月返済</div>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="12"
                >

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="label-50-14px label-month-payment-account-detail-day-other-loan03"
                        >
                            <span>返済日</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="label-month-payment-account-detail-day-input-other-loan03"
                        >
                            <el-select
                                ref="returnDay"
                                v-model="returnDay"
                                style="margin-left: 5px;"
                                placeholder="選択してください"
                                @change="changeDatetime"
                            >
                                <el-option
                                    v-for="item in returnDayOption"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                        </el-col>
                    </el-row>


                    <el-row class="label-50px">
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="label-50-14px label-month-payment-account-detail-day-other-loan03"
                        >
                            <span>返済開始日</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="label-month-payment-account-detail-day-input-other-loan03"
                        >
                            <el-date-picker
                                ref="returnStartDay"
                                v-model="returnStartDay"
                                disabled
                                value-format="yyyyMMdd"
                                format="yyyy-MM-dd"
                                style="margin-left: 5px;"
                                placeholder=""
                            >
                            </el-date-picker>
                        </el-col>
                    </el-row>

                    <el-row class="label-50px">
                        <el-col
                            class="label-70-14px label-month-payment-account-detail-day-warning-other-loan03"
                            :xs="24"
                            :sm="5"
                        >
                            <span>返済元金</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="label-month-payment-account-detail-day-input-other-loan03 last-input"
                        >
                            <el-input
                                ref="returnMoney"
                                v-model.trim="returnMoney"
                                maxlength="4"
                                style="width: 80%; margin-left: 5px;"
                                placeholder="（例）100"
                                @input="onInputEvent('returnMoney')"
                            ></el-input>
                            <span style="margin-left: 5px;">万円</span>
                            <div style="margin-top: 5px; color: #fc0019; margin-left:5px;font-size: 14px;">半角数字4桁まで</div>
                        </el-col>
                    </el-row>
                    <div class="last-input" style="float: left;margin-bottom: 10px;margin-left: 10px; font-size: 14px;">
                        <span class="red-color">年２回増額返済を希望しない場合はお申込み金額をご入力ください。</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style isPc" style="float: right;width: 75%"/>


            <el-row v-show="increaseFlg === '1'">
                <el-col
                    :xs="0"
                    :sm="6"
                    class="label-background-color label-300-50px right-button-line"
                >
                    <div
                        class="label-payment-account-other-loan03 label-font-css"
                    >返済内訳<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-month-payment-account-other-loan03-01 label-300-14px label-background-color-change"
                >
                    <div>
                        <div>年2回増額返済併用</div>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="12"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="7"
                            class="label-month-payment-account-detail-day-other-loan03 label-127-14px-1"
                            style="height: 60px"
                        >
                            <span>返済月（1回目）</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="17"
                            class="label-month-payment-account-detail-month-radio-other-loan03"
                        >
                            <el-row>
                                <el-select
                                    v-model="increaseReturn1"
                                    style="width: 40%;margin-left: 5px;"
                                    @change="onChangeMonth01()"
                                >
                                    <el-option
                                        v-for="item in monthOption"
                                        :key="item.value"
                                        :label="item.label"
                                        :value="item.value"
                                    ></el-option>
                                </el-select>
                                <span style="margin-left: 5px;">月</span>
                            </el-row>
                            <el-row>
                                <div style="margin-top: 5px;margin-left: 6px; color: #fc0019; font-size: 14px;" class="last-input">
                                    1～6月からご選択いただけます
                                </div>
                            </el-row>
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="7"
                            class="label-month-payment-account-detail-day-other-loan03 label-127-14px-1"
                        >
                            <span>返済月（2回目）</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="17"
                            class="label-month-payment-account-detail-month-radio-other-loan03"
                        >
                            <el-select
                                v-model="increaseReturn2"
                                style="width: 40%;margin-left: 5px;"
                                placeholder="请选择"
                                @change="onChangeMonth02()"
                            >
                                <el-option
                                    v-for="item in monthOption02"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                            <span style="margin-left: 5px;">月</span>
                            <div style="margin-top: 5px;margin-left: 6px; color: #fc0019; font-size: 14px;">7～12月からご選択いただけます</div>
                        </el-col>
                    </el-row>
                    <el-row class="label-50px">
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="label-50-14px label-month-payment-account-detail-day-other-loan03"
                        >
                            <span>返済開始日</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="label-month-payment-account-detail-day-input-other-loan03"
                        >
                            <el-date-picker
                                ref="returnStartDay2"
                                v-model="returnStartDay2"
                                disabled
                                value-format="yyyyMMdd"
                                format="yyyy-MM-dd"
                                style="margin-left: 5px;"
                                placeholder=""
                            >
                            </el-date-picker>
                        </el-col>
                    </el-row>

                    <el-row class="label-50px">
                        <el-col
                            class="label-50-14px label-month-payment-account-detail-day-other-loan03"
                            :xs="24"
                            :sm="5"
                        >
                            <span>返済元金</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="label-month-payment-account-detail-day-input-other-loan03 last-input"
                        >
                            <el-input
                                ref="returnMoney2"
                                v-model.trim="returnMoney2"
                                maxlength="3"
                                style="width: 80%; margin-left: 5px;"
                                placeholder="（例）20"
                                @input="onInputEvent('returnMoney2')"
                            ></el-input>
                            <span style="margin-left: 5px;">万円</span>
                            <div style="margin-top: 5px; margin-left: 6px; color: #fc0019; font-size: 14px;">{{ returnMoney2Warning
                            }}
                            </div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="24"
                            class="last-input"
                        >
                            <span style="padding-top: 10px;margin-bottom: 5px;margin-left: 10px; font-size: 14px;" class="red-color">〇お申込み金額の５０％以内の金額をご入力ください。</span><br>
                            <span
                                style="margin-bottom: 10px;margin-left: 10px; font-size: 14px;float: left"
                                class="red-color-not-right"
                            >〇</span>
                            <span
                                style="margin-bottom: 10px;margin-left: 10px; font-size: 14px;display:table"
                                class="red-color-not-right"
                            >毎月返済元金と年２回増額返済元金の合計がお申込み金額となるようご入力ください。</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    :class="[{ test_title_01: getFromOtherFlg === '1' },
                             { test_title_00: getFromOtherFlg !== '1' },
                             'label-background-color','right-button-line']"
                >
                    <div
                        :class="[{test_title_name_01: getFromOtherFlg === '1'},
                                 'label-font-css','test_title_name_00']"
                    >その他のお借入
                        <span class="red-color" style="float: right; font-weight: normal;">【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                    :class="[{ test_body_01: getFromOtherFlg === '1' },'test_body_00']"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="11"
                            class="label-50-14px sub-label-breakdown-other-loan03"
                        >
                            <div>当行以外でのお借入がございますか？</div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="13"
                            class="label-month-payment-account-detail-day-radio-other-loan03 last-input"
                        >
                            <el-radio-group
                                id="getFromOtherFlg"
                                v-model="getFromOtherFlg"
                                @change="getFromOtherFlgChange"
                            >
                                <el-radio label="1"><span>はい</span></el-radio>
                                <el-radio label="0"><span>いいえ</span></el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>
                    <el-row v-show="getFromOtherFlg === '1'">
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="label-50px  label-loan-reference-content-other-loan03"
                        >
                            <div>お取引内容</div>
                        </el-col>
                        <el-col
                            :xs="0"
                            :sm="8"
                            class="label-50px  label-loan-reference-content-other-loan03"
                        >
                            <div>残高</div>
                        </el-col>
                        <el-col
                            :xs="0"
                            :sm="8"
                            class="label-50px  label-loan-reference-content-other-loan03"
                        >
                            <div>年間返済額</div>
                        </el-col>
                    </el-row>

                    <el-row v-show="getFromOtherFlg === '1'">
                        <el-col>
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="8"
                                    class="label-50-14px label-loan-reference-content-title-other-loan03"
                                >
                                    <div>
                                        無担保ローン
                                    </div>
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    残高
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    年間返済額
                                </el-col>


                                <el-col
                                    :xs="12"
                                    :sm="8"
                                >
                                    <div class="label-loan-reference-content-sub-detail-other-loan03">
                                        <el-input
                                            ref="noLoanRest"
                                            v-model.trim="noLoanRest"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）100"
                                            @input="onInputEvent('noLoanRest')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="8"
                                >
                                    <div class="label-loan-reference-content-sub-detail-other-loan03">
                                        <el-input
                                            ref="noLoanReturnMoney"
                                            v-model.trim="noLoanReturnMoney"
                                            maxlength="4"
                                            style="width: 78%;"
                                            placeholder="（例）24"
                                            @input="onInputEvent('noLoanReturnMoney')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="8"
                                    class="label-50-14px label-loan-reference-content-title-other-loan03"
                                >
                                    <div>住宅ローン</div>
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    残高
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    年間返済額
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div>
                                        <el-input
                                            ref="loanRest"
                                            v-model.trim="loanRest"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）1000"
                                            @input="onInputEvent('loanRest')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div>
                                        <el-input
                                            ref="loanReturnMoney"
                                            v-model.trim="loanReturnMoney"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）100"
                                            @input="onInputEvent('loanReturnMoney')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="8"
                                    class="label-50-14px label-loan-reference-content-title-other-loan03"
                                >
                                    <div>カードローン</div>
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    残高
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    年間返済額
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div>
                                        <el-input
                                            ref="cardLoanRest"
                                            v-model.trim="cardLoanRest"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）0"
                                            @input="onInputEvent('cardLoanRest')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div class="otherLoans-content">
                                        <el-input
                                            ref="cardLoanRestRM"
                                            v-model.trim="cardLoanRestRM"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）0"
                                            @input="onInputEvent('cardLoanRestRM')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                            </el-row>

                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="8"
                                    class="label-50-14px label-loan-reference-content-title-other-loan03"
                                >
                                    <div>信販会社等他社</div>
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    残高
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="0"
                                    class="isMobile label-loan-reference-content-sub-title-other-loan03"
                                >
                                    年間返済額
                                </el-col>

                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div>
                                        <el-input
                                            ref="otherComRest"
                                            v-model.trim="otherComRest"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）50"
                                            @input="onInputEvent('otherComRest')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                                <el-col
                                    :xs="12"
                                    :sm="8"
                                    class="label-loan-reference-content-sub-detail-other-loan03"
                                >
                                    <div>
                                        <el-input
                                            ref="otherComReturnMoney"
                                            v-model.trim="otherComReturnMoney"
                                            style="width: 78%;"
                                            maxlength="4"
                                            placeholder="（例）12"
                                            @input="onInputEvent('otherComReturnMoney')"
                                        ></el-input>
                                        <span style="margin-left: 5px;">万円</span>
                                        <div style="margin-top: 5px; color: #fc0019; font-size: 14px;" class="last-input">半角数字4桁まで</div>
                                    </div>
                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 40px;margin-bottom: 80px;">
            <el-row>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="backBtn-other-loan03"
                        @click="backBtn()"
                    >戻る
                    </el-button>
                </el-col>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="nextBtn-other-loan03"
                        @click="nextBtn()"
                    >次へ
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import 'element-ui/lib/theme-chalk/display.css';
import inputCheck from '@/libs/inputCheck';
import message from '@/libs/message02';
import utils from '@/libs/utils'
import constants from '@/libs/constants';
import {apply114LoanGetDetail, apply114LoanGetHopeStoreName, apply114LoanTmp} from '@/api/loan114';

  @Component
export default class Error extends Vue {
    applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    loading: boolean = false
    applicationMoney: string = ''
    getHopeDate: string = ''
    getHopeDateDay: string = ''
    getHopeDateMonth: string = ''
    getHopeDateYear: string = ''

    returnHopeMonth: string = ''
    returnHopeCount: string = ''

    inCount: string = ''

    purpose: string = ''
    moneyTotal: string = ''
    payMoney1: string = ''
    money1: string = ''
    payMoney2: string = ''
    money2: string = ''
    ownAccountKbn: string = ''
    storeName: string = ''
    storeNameFlg: string = ''
    accountNumber: string = ''
    increaseFlg: string = '1'
    returnDay: string = ''
    returnStartDay: string = ''
    returnMoney: string = ''
    increaseReturn1: string = '1'
    increaseReturn2: string = '7'
    returnStartDay2: string = ''
    returnMoney2: string = ''
    getFromOtherFlg: string = ''
    noLoanRest: string = ''
    noLoanReturnMoney: string = ''
    loanRest: string = ''
    loanReturnMoney: string = ''
    cardLoanRest: string = ''
    cardLoanRestRM: string = ''
    otherComRest: string = ''
    otherComReturnMoney: string = ''
    stringNumber: string = ''

    onChangeReturnMonth: any = 0

    hopeReturnNum: string = ''

    yearOptions: any = constants.getHopeDateYearList

    options: any = constants.prefecturesCodeList


    monthOption: any = constants.increaseReturn1List

    monthOption02: any = constants.increaseReturn2List

    returnDayOption: any = constants.returnDayList

    birthdayMonthOption: any = constants.dateMonthList

    birthdayDayOption: any = constants.dateDayList

    moneyWarning: string = ''
    returnHopeCountWarning: string = ''
    returnHopeCount2Warning: string = ''
    returnMoney2Warning: string = ''
    purposeWarning: string = ''
    payMoney1Warning: string = ''
    payMoney2Warning: string = ''
    money2Warning: string = ''

    hopeStoreNameOption: any = []
    tmpHopeStoreNameOption: any = []

    educationLoanHave() {
      return this.loanType.includes('教育ローン')
    }

    loanTypeHave() {
      return this.loanType.includes('提携教育ローン')
    }

    public get loanType(): string {
      return this.$store.state.loanStore.loanType;
    }

    mounted() {
      this.init()
      let title: any = document.getElementById("app")
      title.scrollIntoView();

      console.log(window.screen.width);

      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01
        && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
        // 向后台发送请求渲染页面 this.$store.state.loanStore.docId
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        this.loading = true
        apply114LoanGetDetail(params).then(res => {
          const data = res.data.resultData
          console.log(res)
          this.applicationMoney = data.applicationMoney
          this.getHopeDate = data.getHopeDate
          this.getHopeDateYear = data.getHopeDate.slice(0, 4)
          this.getHopeDateMonth = data.getHopeDate.slice(4, 6)
          this.getHopeDateDay = data.getHopeDate.slice(6)
          this.returnHopeMonth = data.returnHopeMonth
          this.returnHopeCount = data.returnHopeCount
          this.inCount = data.inCount
          this.purpose = data.purpose
          this.moneyTotal = data.moneyTotal
          this.payMoney1 = data.payMoney1
          this.money1 = data.money1
          this.payMoney2 = data.payMoney2
          this.money2 = data.money2
          this.ownAccountKbn = data.ownAccountKbn
          this.storeName = data.storeName
          this.storeNameFlg = data.storeNameFlg
          this.accountNumber = data.accountNumber
          this.increaseFlg = data.increaseFlg
          this.returnDay = data.returnDay
          this.returnStartDay = data.returnStartDay
          this.returnMoney = data.returnMoney
          this.increaseReturn1 = data.increaseReturn1
          this.increaseReturn2 = data.increaseReturn2
          this.returnStartDay2 = data.returnStartDay2
          this.returnMoney2 = data.returnMoney2
          this.getFromOtherFlg = data.getFromOtherFlg
          this.noLoanRest = data.noLoanRest
          this.noLoanReturnMoney = data.noLoanReturnMoney
          this.loanRest = data.loanRest
          this.loanReturnMoney = data.loanReturnMoney
          this.cardLoanRest = data.cardLoanRest
          this.cardLoanRestRM = data.cardLoanRestRM
          this.otherComRest = data.otherComRest
          this.otherComReturnMoney = data.otherComReturnMoney
          this.onChangeReturnMonth = data.onChangeReturnMonth
          this.loading = false

        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      } else {
        this.loading = false
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
      }

      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
      if (this.loanType == 'フリーローン') {
        this.moneyWarning = '10から500までの半角数字でご入力ください'
        this.returnHopeCountWarning = '6から120までの半角数字でご入力ください'
        this.returnHopeCount2Warning = 'ご返済の希望回数（1年：12回）をご入力ください。（最大120回）'
        this.returnMoney2Warning = '申込金額の50％まで'
        this.purposeWarning = '（例）家具購入'
        this.payMoney1Warning = '（例）高松家具'
      } else if (this.loanType == 'マイカーローン') {
        this.moneyWarning = '10から1000までの半角数字でご入力ください'
        this.returnHopeCountWarning = '6から120までの半角数字でご入力ください'
        this.returnHopeCount2Warning = 'ご返済の希望回数（1年：12回）をご入力ください。（最大120回）'
        this.returnMoney2Warning = '申込金額の50％まで'
        this.purposeWarning = '（例）新車購入'
        this.payMoney1Warning = '（例）高松自動車'
      } else if (this.loanType == '教育ローン') {
        this.moneyWarning = '10から1000までの半角数字でご入力ください'
        this.returnHopeCountWarning = '6から162までの半角数字でご入力ください'
        this.returnHopeCount2Warning = 'ご返済の希望回数（1年：12回）をご入力ください。（最大162回：ただし学校や学部により異なる場合がございます。）'
        this.returnMoney2Warning = '申込金額の50％まで'
        this.purposeWarning = '（例）大学への進学資金'
        this.payMoney1Warning = '（例）さぬき大学入学金、学費'
        this.payMoney2Warning = '（例）下宿費用、生活費（学生本人）'
        this.money2Warning = '（例）150'
      } else if (this.loanTypeHave()) {
        this.returnHopeCountWarning = '12から定められた回数以内でご入力ください'
        this.returnMoney2Warning = '半角数字3桁まで'
        this.returnHopeCount2Warning = 'ご返済の希望回数（1年：12回）をご入力ください。（最大138回：ただし学校や学部により異なる場合がございます。）'
        this.purposeWarning = '（例）大学への学生納付金'
        this.payMoney1Warning = '（例）さぬき大学入学金、授業料などの学生納付金'

        if ('徳島文理大学提携教育ローン'.includes(this.loanType)) {
          this.moneyWarning = '10から1000までの半角数字でご入力ください'
        } else if ('四国学院大学提携教育ローン、　穴吹学園提携教育ローン、高松大学・高松短期大学提携教育ローン、四国医療専門学校提携教育ローン、岡山商科大学提携教育ローン、香川短期大学提携教育ローン'.includes(this.loanType)) {
          this.moneyWarning = '10から500までの半角数字でご入力ください'
        } else if ('香川大学提携教育ローン'.includes(this.loanType)) {
          this.moneyWarning = '10から400までの半角数字でご入力ください'
        } else if ('禅林学園提携教育ローン、 中国学園提携教育ローン'.includes(this.loanType)) {
          this.moneyWarning = '10から300までの半角数字でご入力ください'
        }
      }
      if ('教育ローン'.includes(this.loanType)) {
        this.hopeReturnNum = '※ご返済の希望回数（1年：12回）をご入力ください。（最大162回：ただし学校や学部により異なる場合がございます。）'
      } else if (this.loanTypeHave()) {
        this.hopeReturnNum = '※ご返済の希望回数（1年：12回）をご入力ください。（最大138回：ただし学校や学部により異なる場合がございます。）'
      } else {
        this.hopeReturnNum = '※ご返済の希望回数（1年：12回）をご入力ください。（最大120回）'
      }
      let params: any = {
        'postCode': "otherloan"
      }
      this.loading = true
      apply114LoanGetHopeStoreName(params).then(res => {
        let resHopeStoreNameOptionList: any[] = [];
        let tmp_list_item: any[] = [];
        res.data.resultData.storeList.forEach((val) => {
          // val: 当前值
          // idx：当前index
          // array: Array
          let list_item: any[] = []
          val['storeVos'].forEach((item) => {
            // val: 当前值
            // idx：当前index
            // array: Array
            let detail_dict: any = {}
            detail_dict.label = item.storeName
            detail_dict.value = item.storeNumber
            list_item.push(detail_dict)
            tmp_list_item.push(detail_dict);
          });
          resHopeStoreNameOptionList.push({'label': val.arealistnname, 'options': list_item})

        });
        this.hopeStoreNameOption = resHopeStoreNameOptionList
        this.tmpHopeStoreNameOption = tmp_list_item
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    backBtn() {
      this.$router.push('/otherLoan02')
    }

    purposeBlur() {
      this.purpose = utils.changeToDBC(this.purpose)
    }

    payMoney1Blur() {
      this.payMoney1 = utils.changeToDBC(this.payMoney1)
    }

    payMoney2Blur() {
      this.payMoney2 = utils.changeToDBC(this.payMoney2)
    }

    onChangeMonth01() {
      // 设置change 标记
      this.onChangeReturnMonth = 1
      this.changeDatetime()
    }

    onChangeMonth02() {
      // 设置change 标记
      this.onChangeReturnMonth = 2
      this.changeDatetime()
    }

    changeAccountNumber() {
      if (inputCheck.checkNull(this.accountNumber)) {
        return
      }
      while (this.accountNumber.length < 7) {
        this.accountNumber = "0" + String(this.accountNumber);
      }
    }

    changeDatetime() {

      let HopeDateYear: string = this.getHopeDateYear
      let HopeDateMonth: string = this.getHopeDateMonth
      if (this.getHopeDateDay && this.getHopeDateMonth && this.getHopeDateYear) {
        // let inCountTmp: string = this.inCount

        console.log("計算前ーお借入希望日")
        console.log(this.getHopeDateYear + '' + this.getHopeDateMonth)
        if (this.inCount) {
          // inCountTmp = '0'
          HopeDateYear = utils.setDateByMonth(HopeDateYear + '-' + utils.zeroAdd(HopeDateMonth) + '-' + '06', parseInt(this.inCount)).slice(0, 4)
          HopeDateMonth = utils.setDateByMonth(HopeDateYear + '-' + utils.zeroAdd(HopeDateMonth) + '-' + '06', parseInt(this.inCount)).slice(4, 6)
        }
        console.log("計算後ーお借入希望日")
        console.log(HopeDateYear + '' + HopeDateMonth)
        console.log("システム日付")
        console.log(new Date())

        if (this.returnDay == '1') {
          this.returnStartDay = utils.setDateByMonth(HopeDateYear + '-' + utils.zeroAdd(HopeDateMonth) + '-' + '06', 1)
        } else if (this.returnDay == '2') {
          this.returnStartDay = utils.setDateByMonth(HopeDateYear + '-' + utils.zeroAdd(HopeDateMonth) + '-' + '16', 1)
        } else if (this.returnDay == '3') {
          this.returnStartDay = utils.setDateByMonth(HopeDateYear + '-' + utils.zeroAdd(HopeDateMonth) + '-' + '26', 1)
        }
        console.log("返済開始日")
        console.log(this.returnStartDay)
      }
      if (this.increaseFlg == '1') {

        if (this.increaseReturn1 == "") {
          this.increaseReturn1 = '1';
        }
        if (this.increaseReturn2 == "") {
          this.increaseReturn2 = '7';
        }

        if (this.onChangeReturnMonth == 1) {
          this.increaseReturn2 = (parseInt(this.increaseReturn1) + 6).toString()
        } else if (this.onChangeReturnMonth == 2) {
          this.increaseReturn1 = (parseInt(this.increaseReturn2) - 6).toString()
        }

        if (this.getHopeDateDay && this.getHopeDateMonth && this.getHopeDateYear && this.returnDay == '1') {
          if (this.increaseReturn1 && this.increaseReturn2) {
            if (parseInt(HopeDateMonth) + 1 > parseInt(this.increaseReturn2)) {
              this.returnStartDay2 = String(parseInt(HopeDateYear) + 1) + utils.zeroAdd(this.increaseReturn1) + '06'
            } else if (new Date(HopeDateYear + '-' + utils.zeroAdd(String(parseInt(HopeDateMonth))) + '-' + '06') >= new Date(HopeDateYear + '-' + utils.zeroAdd(this.increaseReturn1) + '-' + '06')) {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn2) + '06'
            } else {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn1) + '06'
            }

          }
        } else if (this.getHopeDateDay && this.getHopeDateMonth && this.getHopeDateYear && this.returnDay == '2') {
          if (this.increaseReturn1 && this.increaseReturn2) {
            if (parseInt(HopeDateMonth) + 1 > parseInt(this.increaseReturn2)) {
              this.returnStartDay2 = String(parseInt(HopeDateYear) + 1) + utils.zeroAdd(this.increaseReturn1) + '16'
            } else if (new Date(HopeDateYear + '-' + utils.zeroAdd(String(parseInt(HopeDateMonth))) + '-' + '16') >= new Date(HopeDateYear + '-' + utils.zeroAdd(this.increaseReturn1) + '-' + '16')) {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn2) + '16'
            } else {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn1) + '16'
            }
          }
        } else if (this.getHopeDateDay && this.getHopeDateMonth && this.getHopeDateYear && this.returnDay == '3') {
          if (this.increaseReturn1 && this.increaseReturn2) {
            if (parseInt(HopeDateMonth) + 1 > parseInt(this.increaseReturn2)) {
              this.returnStartDay2 = String(parseInt(HopeDateYear) + 1) + utils.zeroAdd(this.increaseReturn1) + '26'
            } else if (new Date(HopeDateYear + '-' + utils.zeroAdd(String(parseInt(HopeDateMonth))) + '-' + '26') >= new Date(HopeDateYear + '-' + utils.zeroAdd(this.increaseReturn1) + '-' + '26')) {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn2) + '26'
            } else {
              this.returnStartDay2 = HopeDateYear + utils.zeroAdd(this.increaseReturn1) + '26'
            }
          }
        }
      } else {
        this.increaseReturn1 = ""
        this.increaseReturn2 = ""
        this.returnStartDay2 = ""
        this.returnMoney2 = ""
      }
      this.onChangeReturnMonth = 0
    }

    onInputEvent(eventName, strFlag) {
      if (strFlag) {
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      } else {
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
      }
    }

    changeHankanaMoney(eventName) {
      this[eventName] = this[eventName].replace(/[^0-9０-９]/g, '') == "" ? "" : String(parseInt(utils.ToCDB(this[eventName].replace(/[^0-9０-９]/g, ''))) || 0)
    }

    nextBtn() {
      this.getHopeDate = this.getHopeDateYear + this.getHopeDateMonth + this.getHopeDateDay

      for (let item of this.tmpHopeStoreNameOption) {
        if (item.label == this.storeName) {
          this.storeNameFlg = item.value
        }
      }
      // お申込金額（空チェック）
      if (inputCheck.checkNull(this.applicationMoney)) {
        this.$message.error(message.applicationMoney01);
        let applicationMoney: any = this.$refs.applicationMoney
        applicationMoney.focus()
        return;
      }

      // お申込金額（範囲チェック）
      if (this.loanType == 'マイカーローン' || this.loanType == '教育ローン' || '徳島文理大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.applicationMoney, 10, 1000)) {
          this.$message.error(message.applicationMoney04);
          let applicationMoney: any = this.$refs.applicationMoney
          applicationMoney.focus()
          return;
        }
      } else if (this.loanType == 'フリーローン' || '四国学院大学提携教育ローン、　穴吹学園提携教育ローン、高松大学・高松短期大学提携教育ローン、四国医療専門学校提携教育ローン、岡山商科大学提携教育ローン、香川短期大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.applicationMoney, 10, 500)) {
          this.$message.error(message.applicationMoney03);
          let applicationMoney: any = this.$refs.applicationMoney
          applicationMoney.focus()
          return;
        }
      } else if ('香川大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.applicationMoney, 10, 400)) {
          this.$message.error(message.applicationMoney05);
          let applicationMoney: any = this.$refs.applicationMoney
          applicationMoney.focus()
          return;
        }
      } else if ('禅林学園提携教育ローン、 中国学園提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.applicationMoney, 10, 300)) {
          this.$message.error(message.applicationMoney06);
          let applicationMoney: any = this.$refs.applicationMoney
          applicationMoney.focus()
          return;
        }
      }
      // お借入希望日_年（空チェック）
      if (inputCheck.checkNull(this.getHopeDateYear)) {
        this.$message.error(message.getHopeDate01);
        let getHopeDateYear: any = this.$refs.getHopeDateYear
        getHopeDateYear.focus()
        return;

        // お借入希望日_月（空チェック）
      } else if (inputCheck.checkNull(this.getHopeDateMonth)) {
        this.$message.error(message.getHopeDate01);
        let getHopeDateMonth: any = this.$refs.getHopeDateMonth
        getHopeDateMonth.focus()
        return;

        // お借入希望日_日（空チェック）
      } else if (inputCheck.checkNull(this.getHopeDateDay)) {
        this.$message.error(message.getHopeDate01);
        let getHopeDateDay: any = this.$refs.getHopeDateDay
        getHopeDateDay.focus()
        return;

        // お借入希望日（正しい歴日チェック）
      } else if (inputCheck.checkDateFormat(utils.hyphenAdd(this.getHopeDate))) {
        this.$message.error(message.getHopeDate03);
        let getHopeDateDay: any = this.$refs.getHopeDateDay
        getHopeDateDay.focus()
        return;

        // お借入希望日（平日チェック）
      } else if (inputCheck.checkWorkDate(utils.hyphenAdd(this.getHopeDate))) {
        this.$message.error(message.getHopeDate04);
        let getHopeDateDay: any = this.$refs.getHopeDateDay
        getHopeDateDay.focus()
        return;

        // お借入希望日（期間チェック）
      } else if (new Date(utils.hyphenAdd(this.getHopeDate)) >
        new Date(utils.hyphenAdd(utils.setDateByMonth(new Date().getFullYear() + '-' + utils.zeroAdd(new Date().getMonth() + 1) + '-' + utils.zeroAdd(new Date().getDate()), 3))) ||
        new Date(utils.hyphenAdd(this.getHopeDate)) < new Date(new Date().getFullYear() + '-' + utils.zeroAdd(new Date().getMonth() + 1) + '-' + utils.zeroAdd(new Date().getDate()))) {
        this.$message.error(message.getHopeDate02);
        let getHopeDate: any = this.$refs.getHopeDateDay
        getHopeDate.focus()
        return;

        // 毎月返済希望額（空チェック）
      } else if (inputCheck.checkNull(this.returnHopeMonth)) {
        this.$message.error(message.returnHopeMonth01);
        let returnHopeMonth: any = this.$refs.returnHopeMonth
        returnHopeMonth.focus()
        return;

        // 返済希望回数（空チェック）
      } else if (inputCheck.checkNull(this.returnHopeCount)) {
        this.$message.error(message.returnHopeCount01);
        let returnHopeCount: any = this.$refs.returnHopeCount
        returnHopeCount.focus()
        return;
      }

      // 返済希望回数（範囲チェック）
      if (this.loanType == 'フリーローン' || this.loanType == 'マイカーローン') {
        if (inputCheck.checkRange(this.returnHopeCount, 6, 120)) {
          this.$message.error(message.returnHopeCount03);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      } else if (this.loanType == '教育ローン') {
        if (inputCheck.checkRange(this.returnHopeCount, 6, 162)) {
          this.$message.error(message.returnHopeCount04);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      } else if ('香川大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.returnHopeCount, 12, 162)) {
          this.$message.error(message.returnHopeCount05);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      } else if ('徳島文理大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.returnHopeCount, 12, 132)) {
          this.$message.error(message.returnHopeCount06);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      } else if ('四国学院大学提携教育ローン、穴吹学園提携教育ローン、中国学園提携教育ローン、高松大学・高松短期大学提携教育ローン、四国医療専門学校提携教育ローン、岡山商科大学提携教育ローン、香川短期大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.returnHopeCount, 12, 138)) {
          this.$message.error(message.returnHopeCount07);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      } else if ('禅林学園提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(this.returnHopeCount, 12, 123)) {
          this.$message.error(message.returnHopeCount08);
          let returnHopeCount: any = this.$refs.returnHopeCount
          returnHopeCount.focus()
          return;
        }
      }

      if (this.loanType == '教育ローン' || this.loanType == '香川大学提携教育ローン' || this.loanType == '中国学園提携教育ローン') {

        // 内据置回数（空チェック）
        if (inputCheck.checkNull(this.inCount)) {
          this.$message.error(message.inCount01);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;

          // 内据置回数（範囲チェック）
        } else if (inputCheck.checkRange(this.inCount, 0, 78)) {
          this.$message.error(message.inCount02);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      } else if (this.loanType == '徳島文理大学提携教育ローン') {

        // 内据置回数（空チェック）
        if (inputCheck.checkNull(this.inCount)) {
          this.$message.error(message.inCount01);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;

          // 内据置回数（範囲チェック）
        } else if (inputCheck.checkRange(this.inCount, 0, 72)) {
          this.$message.error(message.inCount03);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      } else if ('四国学院大学提携教育ローン、穴吹学園提携教育ローン、高松大学・高松短期大学提携教育ローン、四国医療専門学校提携教育ローン、岡山商科大学提携教育ローン'.includes(this.loanType)) {

        // 内据置回数（空チェック）
        if (inputCheck.checkNull(this.inCount)) {
          this.$message.error(message.inCount01);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;

          // 内据置回数（範囲チェック）
        } else if (inputCheck.checkRange(this.inCount, 0, 54)) {
          this.$message.error(message.inCount04);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      } else if ('禅林学園提携教育ローン'.includes(this.loanType)) {

        // 内据置回数（空チェック）
        if (inputCheck.checkNull(this.inCount)) {
          this.$message.error(message.inCount01);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;

          // 内据置回数（範囲チェック）
        } else if (inputCheck.checkRange(this.inCount, 0, 51)) {
          this.$message.error(message.inCount05);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      } else if ('香川短期大学提携教育ローン'.includes(this.loanType)) {

        // 内据置回数（空チェック）
        if (inputCheck.checkNull(this.inCount)) {
          this.$message.error(message.inCount01);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;

          // 内据置回数（範囲チェック）
        } else if (inputCheck.checkRange(this.inCount, 0, 42)) {
          this.$message.error(message.inCount06);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      }

      // 内据置回数（組合せチェック）
      if ('教育ローン'.includes(this.loanType)) {
        if (parseInt(this.inCount) >= parseInt(this.returnHopeCount)) {
          this.$message.error(message.inCount07);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      } else if (this.loanTypeHave()) {
        if (parseInt(this.inCount) >= parseInt(this.returnHopeCount)) {
          this.$message.error(message.inCount07);
          let inCount: any = this.$refs.inCount
          inCount.focus()
          return;
        }
      }

      // ご利用目的_目的（空チェック）
      if (inputCheck.checkNull(this.purpose)) {
        this.$message.error(message.purpose01);
        let purpose: any = this.$refs.purpose
        purpose.focus()
        return;

        // ご利用目的_目的（全角チェック（漢字））
      } else if (inputCheck.zenkakuCheck(this.purpose)) {
        this.$message.error(message.purpose02);
        let purpose: any = this.$refs.purpose
        purpose.focus()
        return;
      }

      // ご利用目的_所要資金総額（空チェック）
      if (inputCheck.checkNull(this.moneyTotal)) {
        this.$message.error(message.moneyTotal01);
        let moneyTotal: any = this.$refs.moneyTotal
        moneyTotal.focus()
        return;

        // ご利用目的_所要資金総額（組合せチェック）
      } else if (parseInt(this.moneyTotal) < parseInt(this.applicationMoney)) {
        this.$message.error(message.moneyTotal03);
        let moneyTotal: any = this.$refs.moneyTotal
        moneyTotal.focus()
        return;
      }

      // ご利用目的_金額1が空でない場合
      if (!inputCheck.checkNull(this.money1)) {

        // ご利用目的_お支払先（ご購入先_1）（空チェック）
        if (inputCheck.checkNull(this.payMoney1)) {
          this.$message.error(message.payMoney101);
          let payMoney1: any = this.$refs.payMoney1
          payMoney1.focus()
          return;

          // ご利用目的_お支払先（ご購入先_1）（全角チェック（漢字））
        } else if (inputCheck.zenkakuCheck(this.payMoney1)) {
          this.$message.error(message.payMoney102);
          let payMoney1: any = this.$refs.payMoney1
          payMoney1.focus()
          return;
        }
      }

      // ご利用目的_お支払先（ご購入先_1）が空でない場合
      if (!inputCheck.checkNull(this.payMoney1)) {

        // ご利用目的_金額1（空チェック）
        if (inputCheck.checkNull(this.money1)) {
          this.$message.error(message.money101);
          let money1: any = this.$refs.money1
          money1.focus()
          return;
        }
      }

      // ご利用目的_金額2が空でない場合
      if (!inputCheck.checkNull(this.money2)) {

        // ご利用目的_お支払先（ご購入先_2）（空チェック）
        if (inputCheck.checkNull(this.payMoney2)) {
          this.$message.error(message.payMoney201);
          let payMoney2: any = this.$refs.payMoney2
          payMoney2.focus()
          return;

          // ご利用目的_お支払先（ご購入先_2）（全角チェック（漢字））
        } else if (inputCheck.zenkakuCheck(this.payMoney2)) {
          this.$message.error(message.payMoney202);
          let payMoney2: any = this.$refs.payMoney2
          payMoney2.focus()
          return;
        }
      }

      // ご利用目的_お支払先（ご購入先_2）が空でない場合
      if (!inputCheck.checkNull(this.payMoney2)) {

        // ご利用目的_金額2（空チェック）
        if (inputCheck.checkNull(this.money2)) {
          this.$message.error(message.money201);
          let money2: any = this.$refs.money2
          money2.focus()
          return;
        }
      }

      // 返済口座_当行口座有無（空チェック）
      if (inputCheck.checkNull(this.ownAccountKbn)) {
        this.$message.error(message.ownAccountKbn01);
        let ownAccountKbn: any = document.getElementById("ownAccountKbn")
        ownAccountKbn.scrollIntoView();
        return;

        // 返済口座_当行口座有無が「はい」の場合
      } else if (this.ownAccountKbn == '1') {

        // 返済口座_支店名（空チェック）
        if (inputCheck.checkNull(this.storeName)) {
          this.$message.error(message.storeName01);
          let storeName: any = this.$refs.storeName
          storeName.focus()
          return;

          // 返済口座_口座番号（空チェック）
        } else if (inputCheck.checkNull(this.accountNumber)) {
          this.$message.error(message.accountNumber01);
          let accountNumber: any = this.$refs.accountNumber
          accountNumber.focus()
          return;
        }
      }

      // 返済内訳_毎月返済_返済日（空チェック）
      if (inputCheck.checkNull(this.returnDay)) {
        this.$message.error(message.returnDay01);
        let returnDay: any = this.$refs.returnDay
        returnDay.focus()
        return;

        // 返済内訳_毎月返済_返済元金（空チェック）
      } else if (inputCheck.checkNull(this.returnMoney)) {
        this.$message.error(message.returnMoney01);
        let returnMoney: any = this.$refs.returnMoney
        returnMoney.focus()
        return;

        // 年２回増額返済併用しない場合、返済内訳_毎月返済_返済元金（組合せチェック）
      } else if (this.increaseFlg == '0' && parseInt(this.returnMoney) != parseInt(this.applicationMoney)) {
        this.$message.error(message.returnMoney02);
        let returnMoney: any = this.$refs.returnMoney
        returnMoney.focus()
        return
      }

      // 年２回増額返済併用する場合
      if (this.increaseFlg == '1') {

        // 年２回増額返済併用_返済元金（空チェック）
        if (inputCheck.checkNull(this.returnMoney2)) {
          this.$message.error(message.returnMoney201);
          let returnMoney2: any = this.$refs.returnMoney2
          returnMoney2.focus()
          return

          // 年２回増額返済併用_返済元金（組合せチェック）
        } else if (parseInt(this.returnMoney) + parseInt(this.returnMoney2) != parseInt(this.applicationMoney)) {
          this.$message.error(message.returnMoney202);
          let returnMoney2: any = this.$refs.returnMoney2
          returnMoney2.focus()
          return

          // 年２回増額返済併用_返済元金（組合せチェック）
        } else if (parseInt(this.returnMoney2) > parseInt(this.applicationMoney) / 2) {
          this.$message.error(message.returnMoney203);
          let returnMoney2: any = this.$refs.returnMoney2
          returnMoney2.focus()
          return
        }
      }

      // 返済内訳_毎月返済_返済元金（範囲チェック）
      let tmpReturnMoney = parseInt(this.returnMoney) * 10000 / parseInt(this.returnHopeMonth);

      if (this.loanType == 'マイカーローン' || this.loanType == 'フリーローン') {
        if (inputCheck.checkRange(tmpReturnMoney, 0, 120)) {
          this.$message.error(message.returnMoney03);
          let returnMoney: any = this.$refs.returnMoney
          returnMoney.focus()
          return;
        }
      } else if (this.loanType == '教育ローン' || this.loanType == '香川大学提携教育ローン') {
        if (inputCheck.checkRange(tmpReturnMoney, 0, 162)) {
          this.$message.error(message.returnMoney03);
          let returnHopeMonth: any = this.$refs.returnHopeMonth
          returnHopeMonth.focus()
          return;
        }
      } else if ('四国学院大学提携教育ローン、穴吹学園提携教育ローン、中国学園提携教育ローン、高松大学・高松短期大学提携教育ローン、四国医療専門学校提携教育ローン、岡山商科大学提携教育ローン、香川短期大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(tmpReturnMoney, 0, 138)) {
          this.$message.error(message.returnMoney03);
          let returnHopeMonth: any = this.$refs.returnHopeMonth
          returnHopeMonth.focus()
          return;
        }
      } else if ('禅林学園提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(tmpReturnMoney, 0, 123)) {
          this.$message.error(message.returnMoney03);
          let returnHopeMonth: any = this.$refs.returnHopeMonth
          returnHopeMonth.focus()
          return;
        }
      } else if ('徳島文理大学提携教育ローン'.includes(this.loanType)) {
        if (inputCheck.checkRange(tmpReturnMoney, 0, 132)) {
          this.$message.error(message.returnMoney03);
          let returnHopeMonth: any = this.$refs.returnHopeMonth
          returnHopeMonth.focus()
          return;
        }
      }

      // その他のお借入_当行以外でのお借入（空チェック）
      if (inputCheck.checkNull(this.getFromOtherFlg)) {
        this.$message.error(message.getFlg001);
        let getFromOtherFlg: any = document.getElementById("getFromOtherFlg")
        getFromOtherFlg.scrollIntoView();
        return

        // その他のお借入_当行以外でのお借入が「はい」の場合
      } else if (this.getFromOtherFlg == '1') {

        // 残高・年間返済額（空チェック）
        if (inputCheck.checkNull(this.noLoanRest) && inputCheck.checkNull(this.noLoanReturnMoney) && inputCheck.checkNull(this.loanRest) && inputCheck.checkNull(this.loanReturnMoney) &&
          inputCheck.checkNull(this.cardLoanRest) && inputCheck.checkNull(this.cardLoanRestRM) && inputCheck.checkNull(this.otherComRest) && inputCheck.checkNull(this.otherComReturnMoney)
        ) {
          this.$message.error(message.getFlg002);
          let noLoanRest: any = this.$refs.noLoanRest
          noLoanRest.focus()
          return

          // 無担保ローン_年間返済額が空でない場合、無担保ローン_残高（空チェック）
        } else if (inputCheck.checkNull(this.noLoanRest) && !inputCheck.checkNull(this.noLoanReturnMoney)) {
          this.$message.error(message.noLoanRest01);
          let noLoanRest: any = this.$refs.noLoanRest
          noLoanRest.focus()
          return

          // 無担保ローン_残高が空でない場合、無担保ローン_年間返済額（空チェック）
        } else if (!inputCheck.checkNull(this.noLoanRest) && inputCheck.checkNull(this.noLoanReturnMoney)) {
          this.$message.error(message.noLoanReturnMoney01);
          let noLoanReturnMoney: any = this.$refs.noLoanReturnMoney
          noLoanReturnMoney.focus()
          return
        }

        // 住宅ローン_年間返済額が空でない場合、住宅ローン_残高（空チェック）
        if (inputCheck.checkNull(this.loanRest) && !inputCheck.checkNull(this.loanReturnMoney)) {
          this.$message.error(message.loanRest01);
          let loanRest: any = this.$refs.loanRest
          loanRest.focus()
          return

          // 住宅ローン_残高が空でない場合、住宅ローン_年間返済額（空チェック）
        } else if (!inputCheck.checkNull(this.loanRest) && inputCheck.checkNull(this.loanReturnMoney)) {
          this.$message.error(message.loanReturnMoney01);
          let loanReturnMoney: any = this.$refs.loanReturnMoney
          loanReturnMoney.focus()
          return
        }

        // カードローン_年間返済額が空でない場合、カードローン_残高（空チェック）
        if (inputCheck.checkNull(this.cardLoanRest) && !inputCheck.checkNull(this.cardLoanRestRM)) {
          this.$message.error(message.cardLoanRest01);
          let cardLoanRest: any = this.$refs.cardLoanRest
          cardLoanRest.focus()
          return

          // カードローン_残高が空でない場合、カードローン_年間返済額（空チェック）
        } else if (!inputCheck.checkNull(this.cardLoanRest) && inputCheck.checkNull(this.cardLoanRestRM)) {
          this.$message.error(message.cardLoanRestRM01);
          let cardLoanRestRM: any = this.$refs.cardLoanRestRM
          cardLoanRestRM.focus()
          return
        }

        // 信販会社等他社_年間返済額が空でない場合、信販会社等他社_残高（空チェック）
        if (inputCheck.checkNull(this.otherComRest) && !inputCheck.checkNull(this.otherComReturnMoney)) {
          this.$message.error(message.otherComRest01);
          let otherComRest: any = this.$refs.otherComRest
          otherComRest.focus()
          return

          // 信販会社等他社_残高が空でない場合、信販会社等他社_年間返済額（空チェック）
        } else if (!inputCheck.checkNull(this.otherComRest) && inputCheck.checkNull(this.otherComReturnMoney)) {
          this.$message.error(message.otherComReturnMoney01);
          let otherComReturnMoney: any = this.$refs.otherComReturnMoney
          otherComReturnMoney.focus()
          return
        }
      }

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
        'flag': '3',
        'loanType': this.stringNumber,
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'applicationMoney': this.applicationMoney,
        'getHopeDate': this.getHopeDate,
        'returnHopeMonth': this.returnHopeMonth,
        'returnHopeCount': this.returnHopeCount,
        'purpose': this.purpose,
        'moneyTotal': this.moneyTotal,
        'payMoney1': this.payMoney1,
        'money1': this.money1,
        'payMoney2': this.payMoney2,
        'money2': this.money2,
        'ownAccountKbn': this.ownAccountKbn,
        'storeName': this.storeName,
        'storeNameFlg': this.storeNameFlg,
        'accountNumber': this.accountNumber,
        'increaseFlg': this.increaseFlg,
        'returnDay': this.returnDay,
        'returnStartDay': this.returnStartDay,
        'returnMoney': this.returnMoney,
        'increaseReturn1': this.increaseReturn1,
        'increaseReturn2': this.increaseReturn2,
        'returnStartDay2': this.returnStartDay2,
        'returnMoney2': this.returnMoney2,
        'inCount': this.inCount,
        'getFromOtherFlg': this.getFromOtherFlg,
        'noLoanRest': this.noLoanRest,
        'noLoanReturnMoney': this.noLoanReturnMoney,
        'loanRest': this.loanRest,
        'loanReturnMoney': this.loanReturnMoney,
        'cardLoanRest': this.cardLoanRest,
        'cardLoanRestRM': this.cardLoanRestRM,
        'otherComRest': this.otherComRest,
        'otherComReturnMoney': this.otherComReturnMoney
      }

      this.loading = true
      apply114LoanTmp(params).then(() => {
        this.$store.commit('loanStore/setFlg03', true);
        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/otherLoan04');
        }
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    ownAccountKbnChange() {
      this.storeName = '';
      this.accountNumber = '';
    }

    getFromOtherFlgChange() {
      this.noLoanRest = '';
      this.noLoanReturnMoney = '';
      this.loanRest = '';
      this.loanReturnMoney = '';
      this.cardLoanRest = '';
      this.cardLoanRestRM = '';
      this.otherComRest = '';
      this.otherComReturnMoney = '';
    }


}
</script>

<style lang="scss">

  @media screen and (min-width: 768px) {

    .label_170_50px {
      height: 170px;
    }

    .label_50_50px {
      height: 50px;
    }

    .label-196-14px {
      height: 196px;
    }

    .test_title_00 {
      height: 50px;
    }

    .test_title_01 {
      height: 380px;
    }

    .test_body_00 {
      height: 50px;
    }

    .test_body_01 {
      height: 380px;
    }

    .test_title_name_00 {
      height: 50px;
      margin-top: 15px;
      margin-left: 20px;
    }

    .test_title_name_01 {
      height: 380px;
      margin-top: 175px;
      margin-left: 20px;
    }

    .sub-label-address-other-loan03 {
      padding-top: 10px;
      padding-left: 30px;
    }

    .birthday-width {
      width: 80%;
    }

    .birthday-width-detail {
      width: 18%;
    }

    .backBtn-other-loan03 {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }

    .nextBtn-other-loan03 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }

    .right-button-line {
      border-right: 0.5px solid rgb(230, 230, 230);
    }

    .label-money-other-loan03 {
      margin-top: 15px;
      margin-left: 20px;
    }

    .label-money-warning-other-loan03 {
      margin-top: 25px;
      margin-left: 20px;
    }

    .label-money-warning-other-loan03-1 {
      margin-top: 45px;
      margin-left: 20px;
    }

    .label-money-warning-message-other-loan03 {
      margin-top: 50px;
      margin-left: 20px;
    }

    .sub-label-money-other-loan03 {
      padding-top: 5px;
      padding-left: 30px;
    }

    .sub-label-money-detail-other-loan03 {
      padding-top: 5px;
      padding-left: 30px;
    }

    .label-objective-other-loan03 {
      margin-top: 160px;
      margin-left: 20px;
    }

    .sub-label-objective-other-loan03 {
      padding-top: 60px;
      padding-left: 30px;
    }

    .sub-label-objective-input-other-loan03 {
      padding: 15px 10px 15px 10px;
    }

    .label-need-money-total-other-loan03 {
      padding-top: 25px;
      padding-left: 30px;
    }

    .label-need-money-total-input-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .sub-label-objective-contect-other-loan03 {
      padding-top: 25px;
      padding-left: 10px;
    }

    .sub-label-objective-contect02-other-loan03 {
      padding-top: 25px;
      padding-left: 25px;
    }

    .sub-label-objective-contect-input-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .label-payment-account-other-loan03 {
      margin-top: 15px;
      margin-left: 20px;
    }

    .label_payment_account_other_loan03_0 {
      margin-top: 15px;
      margin-left: 20px;
    }

    .label_payment_account_other_loan03_1 {
      margin-top: 75px;
      margin-left: 20px;
    }

    .sub-label-payment-account-other-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }

    .sub-label-payment-account-radio-other-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .sub-label-payment-account-have-title-other-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .sub-label-payment-account-have-title-detail-other-loan03 {
      padding-top: 25px;
      padding-left: 30px;
    }

    .sub-label-payment-account-have-content-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .sub-label-payment-account-have-content-radio-other-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .sub-label-payment-account-number-content-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .sub-label-breakdown-other-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }

    .sub-label-breakdown-radio-other-loan03 {
      margin-top: 15px;
    }

    .label-month-payment-account-other-loan03 {
      padding-left: 30px;
      padding-top: 90px;
    }

    .label-month-payment-account-other-loan03-01 {
      padding-left: 30px;
      padding-top: 135px;
    }

    .label-month-payment-account-detail-day-other-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-warning-other-loan03 {
      padding-top: 25px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-radio-other-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-month-radio-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-input-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .label-loan-reference-content-other-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .label-loan-reference-content-title-other-loan03 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .label-loan-reference-content-sub-detail-other-loan03 {
      padding-top: 5px;
      padding-left: 10px;
    }

    .label-176-50px-tmp {
      height: 176px;
    }

    .label-1oan03-01 {
      margin-bottom: 10px;
      margin-left: 23px;
      font-size: 14px;
    }

    .add-line{
      margin-top: 10px;
    }
  }

  @media screen and (max-width: 767px) {

    .label_170_50px {
      height: 50px;
    }

    .label_50_50px {
      height: 50px;
    }

    .label-196-14px {
      height: 14px;
    }

    .test_title_name_00 {
      height: 50px;
      margin-top: 15px;
      text-align: center;
    }

    .test_title_name_01 {
      height: 50px;
      margin-top: 15px;
      text-align: center;
    }

    .test_title_00 {
      height: 50px;
    }

    .test_title_01 {
      height: 50px;
    }

    .test_body_00 {
      height: 70px;
    }

    .test_body_01 {
      height: 715px;
    }

    .label-176-50px-tmp {
      height: 50px;
    }

    .label-1oan03-01 {
      margin-bottom: 10px;
      font-size: 14px;
    }

    .sub-label-address-other-loan03 {
      padding-top: 20px;
      padding-left: 10px;
    }

    .birthday-width {
      width: 60%;
    }

    .birthday-width-detail {
      width: 23%;
    }

    .last-input {
      margin-bottom: 20px;
    }

    .right-button-line {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }

    .label-money-other-loan03 {
      margin-top: 15px;
      text-align: center;
    }

    .label-money-warning-other-loan03 {
      margin-top: 15px;
      text-align: center;
    }

    .label-money-warning-other-loan03-1 {
      margin-top: 15px;
      text-align: center;
      margin-bottom: 15px;
    }

    .label-money-warning-message-other-loan03 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-money-other-loan03 {
      padding: 20px 10px 20px 10px;
    }

    .sub-label-money-detail-other-loan03 {
      padding: 0 10px 20px 10px;
    }

    .label-objective-other-loan03 {
      padding-top: 15px;
      text-align: center;
    }

    .sub-label-objective-other-loan03 {
      padding: 20px 10px 8px 10px;
    }

    .sub-label-objective-input-other-loan03 {
      padding: 28px 10px 20px 10px;
    }

    .label-need-money-total-other-loan03 {
      margin-left: 10px;
    }

    .label-need-money-total-input-other-loan03 {
      padding-left: 10px;
      padding-top: 8px;
    }

    .sub-label-objective-contect-other-loan03 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .sub-label-objective-contect02-other-loan03 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .sub-label-objective-contect-input-other-loan03 {
      margin-top: 8px;
      padding-left: 10px;
      padding-bottom: 10px;
    }

    .label-payment-account-other-loan03 {
      margin-top: 15px;
      text-align: center;
    }

    .label_payment_account_other_loan03_0{
      margin-top: 15px;
      text-align: center;
    }

    .label_payment_account_other_loan03_1{
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-payment-account-other-loan03 {
      padding-top: 15px;
      padding-left: 10px;
    }

    .sub-label-payment-account-radio-other-loan03 {
      padding-top: 25px;
      padding-left: 30px;
      padding-bottom: 20px;
    }

    .sub-label-payment-account-have-title-other-loan03 {
      margin-left: 10px;
    }

    .sub-label-payment-account-have-title-detail-other-loan03 {
      margin-top: 20px;
      margin-left: 10px;
    }

    .sub-label-payment-account-have-content-other-loan03 {
      margin-top: 8px;
      margin-left: 10px;
      padding-right: 20px;
    }

    .sub-label-payment-account-have-content-radio-other-loan03 {
      margin-top: 8px;
      margin-left: 30px;
    }

    .sub-label-payment-account-number-content-other-loan03 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .sub-label-breakdown-other-loan03 {
      margin-top: 20px;
      margin-left: 10px;
    }

    .sub-label-breakdown-radio-other-loan03 {
      margin-top: 8px;
      margin-left: 30px;
    }

    .label-month-payment-account-other-loan03 {
      padding-top: 20px;
      padding-left: 10px;
    }

    .label-month-payment-account-other-loan03-01 {
      padding-top: 20px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-other-loan03 {
      margin-top: 25px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-warning-other-loan03 {
      margin-top: 25px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-radio-other-loan03 {
      margin-top: 8px;
      padding-left: 30px;
    }

    .label-month-payment-account-detail-month-radio-other-loan03 {
      margin-top: 8px;
      padding-left: 10px;
    }

    .label-month-payment-account-detail-day-input-other-loan03 {
      padding-top: 8px;
      padding-left: 10px;
    }

    .backBtn-other-loan03 {
      width: 130px;
      background: #fc0019;
    }

    .nextBtn-other-loan03 {
      width: 130px;
      background: #fc0019;
      float: right;
    }

    .label-loan-reference-content-other-loan03 {
      padding-top: 15px;
      text-align: center;
    }

    .label-loan-reference-content-title-other-loan03 {
      margin-top: 20px;
      margin-left: 10px;
    }

    .label-loan-reference-content-sub-title-other-loan03 {
      padding-left: 10px;
      padding-top: 8px;
    }

    .label-loan-reference-content-sub-detail-other-loan03 {
      padding-top: 8px;
      padding-left: 10px;
    }
  }
</style>
