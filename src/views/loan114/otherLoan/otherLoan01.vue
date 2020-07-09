<template>
    <div
        id="title"
        v-loading="loading"
        class="container"
    >
        <el-row class="title">
            <div >{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="../../../assets/imgs/page01/pc_loan_01@2x.png"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="../../../assets/imgs/page01/m_loan_01@2x.png"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px;" class="label-font-css">
            <div style="color: #6e6e6e">■ご本人さまについてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-145-50px right-button-line"
                >
                    <div class="label-name-other-loan01 label-font-css">お名前<span
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
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[姓]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-input
                                ref="lastName"
                                v-model.trim="lastName"
                                placeholder="（例）百十四"
                                minlength="1"
                                maxlength="20"
                                @blur="changeLastName"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">20文字まで</div>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[名]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-input
                                ref="firstName"
                                v-model.trim="firstName"
                                placeholder="（例）太郎"
                                minlength="1"
                                maxlength="20"
                                @blur="changeFirstName"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">20文字まで</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[セイ]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-input
                                ref="lastKanaName"
                                v-model.trim="lastKanaName"
                                placeholder="（例）ヒャクジュウシ"
                                minlength="1"
                                maxlength="30"
                                @blur="changeLastKanaName"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">30文字まで</div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[メイ]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-other-loan01 last-input"
                        >
                            <el-input
                                ref="firstKanaName"
                                v-model.trim="firstKanaName"
                                placeholder="（例）タロウ"
                                minlength="1"
                                maxlength="30"
                                @blur="changeFirstKanaName"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">30文字まで</div>
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
                    <div class="label-birthday-other-loan01 label-font-css">生年月日<span
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
                            class="sub-label-birthday-other-loan01"
                        >
                            <span class="sub-label-font-css">西暦</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="21"
                        >
                            <el-row>
                                <el-col
                                    :xs="24"
                                    :sm="8"
                                >
                                    <el-select
                                        ref="birthdayYear"
                                        v-model="birthdayYear"
                                        class="birthday-width sub-label-birthday-input-other-loan01"
                                        placeholder="選択してください"
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
                                >

                                    <el-select
                                        ref="birthdayMonth"
                                        v-model="birthdayMonth"
                                        class="birthday-width-detail sub-label-birthday-input-detail-other-loan01 last-input"
                                        placeholder="選択してください"
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
                                        ref="birthdayDay"
                                        v-model="birthdayDay"
                                        style="margin-left: 10px;"
                                        class="birthday-width-detail"
                                        placeholder="選択してください"
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
                    <div class="label-birthday-other-loan01 label-font-css">性別<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-gender-other-loan01 last-input">
                        <el-radio-group
                            id="sexKbn"
                            v-model="sexKbn"
                            style="color: #fc0019"
                        >
                            <el-radio label="1"><span class="radio-font-size">男性</span></el-radio>
                            <el-radio label="2"><span class="radio-font-size">女性</span></el-radio>
                        </el-radio-group>
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
                    <div class="label-birthday-other-loan01 label-font-css">郵便番号<span
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
                        class="sub-label-postcode-other-loan01"
                    >
                        <el-col
                            :xs="24"
                            :sm="10"
                        >
                            <span>〒</span>
                            <el-input
                                ref="postCode"
                                v-model.trim="postCode"
                                placeholder="（例）7600050"
                                maxlength="7"
                                style="margin-left: 10px;width: 88%;"
                                @input="onInputEvent('postCode', true)"
                                @blur="watchPostCode('postCode', 'bkPostCode', 'kanaAddress')"
                            ></el-input>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="14"
                            class="mobileBtn last-input"
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
                    class="label-background-color label-181-50px right-button-line"
                >
                    <div class="label-address-other-loan01 label-font-css">ご自宅住所<span
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
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-select
                                ref="prefecturesCode"
                                v-model="prefecturesCode"
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
                                ref="address"
                                v-model.trim="address"
                                style="width: calc(60% - 5px); margin-left: 10px;"
                                minlength="1"
                                maxlength="60"
                                placeholder="（例）高松市亀井町"
                                @blur="changeAddress"
                            ></el-input>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-input
                                ref="otherAddress"
                                v-model.trim="otherAddress"
                                placeholder="（例）〇丁目〇〇番地　〇マンション〇号"
                                minlength="1"
                                maxlength="60"
                                @blur="changeOtherAddress"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">市町村と合わせて60文字まで</div>
                        </el-col>
                    </el-row>

                    <div class="sub-label-address-other-loan01">
                        <span class="red-color">※番地・マンション名・部屋番号等はお客様自身でご入力してください。</span>
                    </div>
                    <div class="sub-label-address-other-loan01 last-input" style="margin-bottom: 10px;">
                        <span class="red-color">※提出いただく本人確認資料記載の住所が現住所と異なる場合はお申込みはできません。</span>
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
                    <div class="label-tel-other-loan01 label-font-css">お電話番号<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【いずれか必須】</span>
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
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[ご自宅]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan01"
                        >
                            <el-input
                                ref="teleNumber"
                                v-model.trim="teleNumber"
                                maxlength="10"
                                placeholder="（例）0871231234"
                                @input="onInputEvent('teleNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字10桁</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-other-loan01"
                        >
                            <span class="sub-label-font-css">[携帯・PHS]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-other-loan01 last-input"
                        >
                            <el-input
                                ref="phoneNumber"
                                v-model.trim="phoneNumber"
                                maxlength="11"
                                placeholder="（例）09012345678"
                                @input="onInputEvent('phoneNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字11桁</div>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr v-show="loanTypeHave()" class="hr-style"/>

            <el-row v-show="loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan01 label-font-css">本人確認書類<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-input-other-loan01">
                        <el-select
                            ref="myConfirmation"
                            v-model="myConfirmation"
                            placeholder="選択してください"
                            @change="myConfirmationChange"
                        >
                            <el-option
                                v-for="item in confirmOptions"
                                :key="item.value"
                                style="border-color: #fef0f0;"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <el-input
                            v-show="myConfirmation"
                            ref="myConfirmationCode"
                            v-model.trim="myConfirmationCode"
                            :maxlength="myConfirmationCodeLength"
                            class="myConfirmationCode-other-loan01"
                            placeholder=""
                            @input="myConfirmationCodeRegTest()"
                        ></el-input>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row v-show="loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-172-50px right-button-line"
                >
                    <div class="label-home-other-loan01 label-font-css">お住まい<span
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
                        <el-col class="sub-label-enAddress-input-other-loan01">
                            <el-select
                                ref="enAddress"
                                v-model="enAddress"
                                placeholder="選択してください"
                            >
                                <el-option
                                    v-for="item in homeOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="5"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <span class="sub-label-font-css">[持家]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="19"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <el-radio-group
                                id="houseFlg"
                                v-model="houseFlg"
                                if="houseFlg"
                                class="input-radio"
                            >
                                <el-radio label="1"><span>有</span></el-radio>
                                <el-radio style="margin-left: -10px;" label="0"><span>無</span>
                                </el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="5"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <span class="sub-label-font-css">[住宅ローン]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="19"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <el-radio-group
                                id="houseLoanFlg"
                                v-model="houseLoanFlg"
                                if="houseLoanFlg"
                                class="input-radio"
                            >0
                                <el-radio label="1"><span>有</span></el-radio>
                                <el-radio style="margin-left: -10px;" label="0"><span>無</span>
                                </el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="8"
                            :sm="5"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <span class="sub-label-font-css">[賃貸支払]</span>
                        </el-col>
                        <el-col
                            :xs="16"
                            :sm="19"
                            class="sub-radio-enAddress-input-other-loan01"
                        >
                            <el-radio-group
                                id="paymentFlg"
                                v-model="paymentFlg"
                                if="paymentFlg"
                                class="input-radio"
                            >
                                <el-radio label="1"><span>有</span></el-radio>
                                <el-radio style="margin-left: -10px;" label="0"><span>無</span>
                                </el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>

                    <el-row>
                        <div class="sub-label-address-other-loan01">
                            <span class="red-color">お申込みご本人さまが名義人、住宅ローン借入者、賃貸支払者かどうかについて、ご入力ください。</span>
                        </div>
                    </el-row>
                </el-col>
            </el-row>

            <el-row v-show="!loanTypeHave()">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-other-loan01 label-font-css">お住まい<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-other-loan01">
                        <el-select
                            ref="enAddress"
                            v-model="enAddress"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in homeOptions"
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
                    <div class="label-birthday-other-loan01 label-font-css">居住年数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-input-other-loan01">
                        <el-select
                            ref="liveYear"
                            v-model="liveYear"
                            placeholder="選択してください"
                            style="width: 30%;"
                        >
                            <el-option
                                v-for="item in liveYearOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <span style="margin-left: 10px;">年</span>
                        <el-select
                            ref="liveMonth"
                            v-model="liveMonth"
                            placeholder="選択してください"
                            style="width: 30%; margin-left: 20px;"
                        >
                            <el-option
                                v-for="item in monthOption"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <span style="margin-left: 10px;">ヶ月</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-200-58px right-button-line"
                >
                    <div class="label-family-CEL01 label-font-css">ご家族<span
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
                            class="sub-label-family-CEL01"
                        >
                            <span>[配偶者]</span>
                            <el-radio-group
                                v-model="spouse"
                                style="margin-left: 20px;"
                                @change="spouseChange"
                            >
                                <el-radio label="1"><span style="font-size: 16px; color: #000;">有</span></el-radio>
                                <el-radio style="margin-left: -15px;" label="2"><span style="font-size: 16px; color: #000;">無</span>
                                </el-radio>
                            </el-radio-group>
                        </el-col>

                        <el-col
                            v-show="spouse === '1'"
                            :xs="24"
                            :sm="16"
                            class="sub-label-family-CEL01"
                        >
                            <span>[居住形態]</span>
                            <el-radio-group v-model="liveType" style="margin-left: 20px;">
                                <el-radio label="1"><span style="font-size: 16px; color: #000;">同居</span></el-radio>
                                <el-radio style="margin-left: -15px;" label="2"><span style="font-size: 16px; color: #000;">別居</span>
                                </el-radio>
                            </el-radio-group>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            v-show="loanTypeHave()"
                            :xs="24"
                            :sm="13"
                            class="sub-label-family-CEL01"
                        >
                            <span>世帯人数(本人を含む)</span>
                            <el-select
                                ref="homeNumber"
                                v-model="homeNumber"
                                placeholder="選択してください"
                                style="width: 35%; margin-left: 10px;"
                            >
                                <el-option
                                    v-for="item in peopleNumberOptions"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value"
                                ></el-option>
                            </el-select>
                        </el-col>

                        <el-col
                            :xs="24"
                            :sm="12"
                            class="sub-label-family-CEL01 last-input"
                        >
                            <span>扶養家族</span>
                            <el-input
                                v-model.trim="familyNumber"
                                placeholder="（例）2"
                                style="width: 30%; margin-left: 10px;"
                                minlength="1"
                                maxlength="9"
                                @input="onInputEvent('familyNumber')"
                            ></el-input>
                            <span style="margin-left: 10px;">人</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; margin-bottom: 30px;">
            <el-row>
                <el-col :xs="14" :sm="21">
                    <div>&nbsp;</div>
                </el-col>
                <el-col :xs="10" :sm="3">
                    <el-button
                        class="nextBtn"
                        type="danger"
                        style="width: 120px;"
                        @click="nextBtn"
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
import utils from "@/libs/utils";
import message from '@/libs/message';
import inputCheck from "@/libs/inputCheck";
import constants from '@/libs/constants';
import {apply114LoanGetAddress, apply114LoanGetDetail, apply114LoanTmp} from '@/api/loan114';

  @Component
export default class Error extends Vue {
    applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    loading: boolean = false
    lastName: string = ''
    firstName: string = ''
    lastKanaName: string = ''
    firstKanaName: string = ''
    birthday: string = ''
    birthdayDay: string = '01'
    birthdayMonth: string = '01'
    birthdayYear: string = '1995'


    sexKbn: string = ''
    postCode: string = ''
    bkPostCode: string = ''
    prefecturesCode: string = ''
    address: string = ''
    kanaAddress: string = ''
    otherAddress: string = ''
    teleNumber: string = ''
    phoneNumber: string = ''
    myConfirmation: string = ''
    myConfirmationCode: string = ''
    myConfirmationCodeLength: string = ''
    enAddress: string = ''

    houseFlg: string = ''
    houseLoanFlg: string = ''
    paymentFlg: string = ''

    liveYear: string = ''
    liveMonth: string = ''
    spouse: string = ''
    liveType: string = ''

    homeNumber: string = ''

    familyNumber: string = ''

    stringNumber: string = ''

    options: any = constants.prefecturesCodeList

    yearOptions: any = constants.dateYearList1950_2020

    homeOptions: any = constants.enAddressList_other

    confirmOptions: any = constants.myConfirmationList

    monthOption: any = constants.liveMonthList

    peopleNumberOptions: any = constants.homeNumberList

    birthdayMonthOption: any = constants.dateMonthList

    birthdayDayOption: any = constants.dateDayList

    liveYearOption: any = constants.liveYearList

  changeFirstName() {
    this.firstName = utils.changeToDBC(this.firstName.replace(/[ 　]{2,}/g, " "))
  }

  changeLastName() {
    this.lastName = utils.changeToDBC(this.lastName)
  }

  changeFirstKanaName() {
    this.firstKanaName = utils.changeToDBC(utils.toKatakanaCase(this.firstKanaName).replace(/[ 　]{2,}/g, " "))
  }

  changeLastKanaName() {
    this.lastKanaName = utils.changeToDBC(utils.toKatakanaCase(this.lastKanaName))
  }

    changeAddress() {
      this.address = utils.changeToDBC(this.address)
    }

    changeOtherAddress() {
      this.otherAddress = utils.changeToDBC(this.otherAddress)
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
      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01) {
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        this.loading = true
        apply114LoanGetDetail(params).then(res => {
          const data = res.data.resultData
          this.lastName = data.lastName
          this.firstName = data.firstName
          this.lastKanaName = data.lastKanaName
          this.firstKanaName = data.firstKanaName
          this.birthday = data.birthday
          this.birthdayDay = data.birthday.substr(6, 2)
          this.birthdayMonth = data.birthday.substr(4, 2)
          this.birthdayYear = data.birthday.substr(0, 4)
          this.sexKbn = data.sexKbn
          this.postCode = data.postCode
          this.prefecturesCode = data.prefecturesCode
          this.address = data.address
          this.otherAddress = data.otherAddress
          this.teleNumber = data.teleNumber
          this.phoneNumber = data.phoneNumber
          this.myConfirmation = data.myConfirmation
          this.myConfirmationCode = data.myConfirmationCode
          this.enAddress = data.enAddress
          this.houseFlg = data.houseFlg
          this.houseLoanFlg = data.houseLoanFlg
          this.paymentFlg = data.paymentFlg
          this.liveYear = data.liveYear
          this.liveMonth = data.liveMonth
          this.spouse = data.spouse
          this.liveType = data.liveType
          this.homeNumber = data.homeNumber
          this.familyNumber = data.familyNumber
          this.loading = false
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
      }

      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }

    watchPostCode(postCode, bkPostCode, kanaAddress){
      if ( this[bkPostCode] != '' && this[bkPostCode] != this[postCode]) {
          this[kanaAddress] = ''
      }
      this[bkPostCode] = this[postCode]
    }

    nextBtn() {

      this.birthday = this.birthdayYear + this.birthdayMonth + this.birthdayDay

        // お名前（漢字）：姓（空チェック）
      if (inputCheck.checkNull(this.lastName)) {
        this.$message.error(message.lastName01);
        let lastName: any = this.$refs.lastName
        lastName.focus()
        return;

        // お名前（漢字）：姓（全角チェック（漢字））
      } else if (inputCheck.zenkakuCheck(this.lastName)) {
        this.$message.error(message.lastName02);
        let lastName: any = this.$refs.lastName
        lastName.focus()
        return;

        // お名前（漢字）：名（空チェック）
      } else if (inputCheck.checkNull(this.firstName)) {
        this.$message.error(message.firstName01);
        let firstName: any = this.$refs.firstName
        firstName.focus()
        return;

        // お名前（漢字）：名（全角チェック（漢字と中点））
      } else if (inputCheck.zenkakuCheck1(this.firstName)) {
        this.$message.error(message.firstName02);
        let firstName: any = this.$refs.firstName
        firstName.focus()
        return;

        // お名前（カナ）：セイ（空チェック）
      } else if (inputCheck.checkNull(this.lastKanaName)) {
        this.$message.error(message.lastKanaName01);
        let lastKanaName: any = this.$refs.lastKanaName
        lastKanaName.focus()
        return;

        // お名前（カナ）：セイ（全角チェック（カナ））
      } else if (inputCheck.zenkakuCheck2(this.lastKanaName)) {
        this.$message.error(message.lastKanaName02);
        let lastKanaName: any = this.$refs.lastKanaName
        lastKanaName.focus()
        return;

        // お名前（カナ）：メイ（空チェック）
      } else if (inputCheck.checkNull(this.firstKanaName)) {
        this.$message.error(message.firstKanaName01);
        let firstKanaName: any = this.$refs.firstKanaName
        firstKanaName.focus()
        return;

        // お名前（カナ）：メイ（全角チェック（カナと中点））
      } else if (inputCheck.zenkakuCheck3(this.firstKanaName)) {
        this.$message.error(message.firstKanaName02);
        let firstKanaName: any = this.$refs.firstKanaName
        firstKanaName.focus()
        return;

        // 生年月日_年（空チェック）
      } else if (inputCheck.checkNull(this.birthdayYear)) {
        this.$message.error(message.birthdayYear01);
        let birthdayYear: any = this.$refs.birthdayYear
        birthdayYear.focus()
        return;

        // 生年月日_月（空チェック）
      } else if (inputCheck.checkNull(this.birthdayMonth)) {
        this.$message.error(message.birthdayYear01);
        let birthdayMonth: any = this.$refs.birthdayMonth
        birthdayMonth.focus()
        return;

        // 生年月日_日（空チェック）
      } else if (inputCheck.checkNull(this.birthdayDay)) {
        this.$message.error(message.birthdayYear01);
        let birthdayDay: any = this.$refs.birthdayDay
        birthdayDay.focus()
        return;

        // 生年月日_日（正しい歴日チェック）
      } else if (inputCheck.checkDateFormat(utils.hyphenAdd(this.birthday))) {
        this.$message.error(message.birthday04);
        let birthdayYear: any = this.$refs.birthdayYear
        birthdayYear.focus()
        return;
      }

      // 生年月日（年齢チェック）
      if (this.loanType == 'フリーローン') {
        if (inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)) >= 76) {
          this.$message.error(message.birthday03);
          let birthday: any = this.$refs.birthday
          birthday.focus()
          return;
        }
      } else {
        if (inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)) >= 65) {
          this.$message.error(message.birthday03);
          let birthday: any = this.$refs.birthday
          birthday.focus()
          return;
        }
      }

        // 生年月日（年齢チェック）
      if (inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)) < 20) {
        this.$message.error(message.birthday02);
        let birthday: any = this.$refs.birthday
        birthday.focus()
        return;

        // 性別（空チェック）
      } else if (inputCheck.checkNull(this.sexKbn)) {
        this.$message.error(message.sexKbn01);
        let sexKbn: any = document.getElementById("sexKbn")
        sexKbn.scrollIntoView();
        return;

        // 郵便番号（空チェック）
      } else if (inputCheck.checkNull(this.postCode)) {
        this.$message.error(message.postCode01);
        let postCode: any = this.$refs.postCode
        postCode.focus()
        return;

        // 郵便番号（桁数チェック）
      } else if (inputCheck.checkLength(this.postCode, 7)) {
        this.$message.error(message.postCode02);
        let postCode: any = this.$refs.postCode
        postCode.focus()
        return;

        // ご自宅住所：都道府県（空チェック）
      } else if (inputCheck.checkNull(this.prefecturesCode)) {
        this.$message.error(message.prefecturesCode01);
        let prefecturesCode: any = this.$refs.prefecturesCode
        prefecturesCode.focus()
        return;

        // ご自宅住所：市町村（空チェック）
      } else if (this.otherAddress.length < 60 && inputCheck.checkNull(this.address)) {
        this.$message.error(message.address01);
        let address: any = this.$refs.address
        address.focus()
        return;

        // ご自宅住所：市町村（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.address) && inputCheck.zenkakuCheck(this.address)) {
        this.$message.error(message.address02);
        let address: any = this.$refs.address
        address.focus()
        return;

        // ご自宅住所：以降ご住所（空チェック）
      } else if (this.address.length < 60 && inputCheck.checkNull(this.otherAddress)) {
        this.$message.error(message.otherAddress01);
        let otherAddress: any = this.$refs.otherAddress
        otherAddress.focus()
        return;

        // ご自宅住所：以降ご住所（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.otherAddress) && inputCheck.zenkakuCheck(this.otherAddress)) {
        this.$message.error(message.otherAddress02);
        let otherAddress: any = this.$refs.otherAddress
        otherAddress.focus()
        return;

        // ご自宅住所：以降ご住所（組合せチェック）
      } else if (this.address.trim().length + this.otherAddress.trim().length > 60) {
        this.$message.error(message.otherAddress03);
        let address: any = this.$refs.address
        address.focus()
        return;

        // お電話番号（いずれか空チェック）
      } else if (inputCheck.checkNull(this.teleNumber) && inputCheck.checkNull(this.phoneNumber)) {
        this.$message.error(message.teleNumber01);
        let teleNumber: any = this.$refs.teleNumber
        teleNumber.focus()
        return;

        // お電話番号：ご自宅（桁数チェック）
      } else if (!inputCheck.checkNull(this.teleNumber) && inputCheck.checkLength(this.teleNumber, 10)) {
        this.$message.error(message.teleNumber03);
        let teleNumber: any = this.$refs.teleNumber
        teleNumber.focus()
        return;

        // お電話番号：ご自宅（10桁の電話番号の形式チェック）
      } else if (!inputCheck.checkNull(this.teleNumber) && inputCheck.check10TeleNumber(this.teleNumber)) {
        this.$message.error(message.teleNumber02);
        let teleNumber: any = this.$refs.teleNumber
        teleNumber.focus()
        return;

        // お電話番号：携帯・PHS（桁数チェック）
      } else if (!inputCheck.checkNull(this.phoneNumber) && inputCheck.checkLength(this.phoneNumber, 11)) {
        this.$message.error(message.phoneNumber02);
        let phoneNumber: any = this.$refs.phoneNumber
        phoneNumber.focus()
        return;

        // お電話番号：携帯・PHS（11桁の電話番号の形式チェック）
      } else if (!inputCheck.checkNull(this.phoneNumber) && inputCheck.check11TeleNumber(this.phoneNumber)) {
        this.$message.error(message.phoneNumber01);
        let phoneNumber: any = this.$refs.phoneNumber
        phoneNumber.focus()
        return;
      }

      // 提携教育ローン
      if (this.loanTypeHave()) {

        // 本人確認書類（空チェック）
        if (inputCheck.checkNull(this.myConfirmation)) {
          this.$message.error(message.myConfirmation01);
          let myConfirmation: any = this.$refs.myConfirmation
          myConfirmation.focus()
          return;
        }

        // 本人確認書類が選択される場合
        if (this.myConfirmation) {

          // 本人確認書類番号（空チェック）
          if (inputCheck.checkNull(this.myConfirmationCode)) {
            this.$message.error(message.myConfirmationCode03);
            let myConfirmationCode: any = this.$refs.myConfirmationCode
            myConfirmationCode.focus()
            return;
          }

          // 本人確認書類番号（桁数チェック）
          if (this.myConfirmation == '1' || this.myConfirmation == '2' || this.myConfirmation == '4') {
            if (this.myConfirmationCode.trim().length > 12) {
              this.$message.error(message.myConfirmationCode01);
              let myConfirmationCode: any = this.$refs.myConfirmationCode
              myConfirmationCode.focus()
              return;
            }
          } else if (this.myConfirmation == '3' || this.myConfirmation == '5') {
            if (this.myConfirmationCode.trim().length > 20) {
              this.$message.error(message.myConfirmationCode02);
              let myConfirmationCode: any = this.$refs.myConfirmationCode
              myConfirmationCode.focus()
              return;
            }
          }
        }
      }

      // お住まい（空チェック）
      if (inputCheck.checkNull(this.enAddress)) {
        this.$message.error(message.enAddress01);
        let enAddress: any = this.$refs.enAddress
        enAddress.focus()
        return;
      }

      // 提携教育ローン
      if (this.loanTypeHave()) {

          // 持家有無（空チェック）
        if (inputCheck.checkNull(this.houseFlg)) {
          this.$message.error(message.houseFlg01);
          let houseFlg: any = document.getElementById("houseFlg")
          houseFlg.scrollIntoView();
          return;

          // 住宅ローン有無（空チェック）
        } else if (inputCheck.checkNull(this.houseLoanFlg)) {
          this.$message.error(message.houseLoanFlg01);
          let houseLoanFlg: any = document.getElementById("houseLoanFlg")
          houseLoanFlg.scrollIntoView();
          return;

          // 賃貸支払有無（空チェック）
        } else if (inputCheck.checkNull(this.paymentFlg)) {
          this.$message.error(message.paymentFlg01);
          let paymentFlg: any = document.getElementById("paymentFlg")
          paymentFlg.scrollIntoView();
          return;
        }
      }

        // 居住年数_年（空チェック）
      if (inputCheck.checkNull(this.liveYear)) {
        this.$message.error(message.liveYear01);
        let liveYear: any = this.$refs.liveYear
        liveYear.focus()
        return;

        // 居住年数_ヶ月（空チェック）
      } else if (inputCheck.checkNull(this.liveMonth)) {
        this.$message.error(message.liveMonth01);
        let liveMonth: any = this.$refs.liveMonth
        liveMonth.focus()
        return;

        // ご家族_配偶者（空チェック）
      } else if (inputCheck.checkNull(this.spouse)) {
        this.$message.error(message.spouse01);
        let spouse: any = document.getElementById("spouse")
        spouse.scrollIntoView();
        return;
      }

      // ご家族_配偶者が「有」の場合
      if (this.spouse == '1') {

        // 居住形態（空チェック）
        if (inputCheck.checkNull(this.liveType)) {
          this.$message.error(message.liveType01);
          let liveType: any = document.getElementById("liveType")
          liveType.scrollIntoView()
          return;
        }
      }

      // 提携教育ローン
      if (this.loanTypeHave()) {

        // ご家族_世帯人数（本人を含む）（空チェック）
        if (inputCheck.checkNull(this.homeNumber)) {
          this.$message.error(message.homeNumber01);
          let homeNumber: any = this.$refs.homeNumber
          homeNumber.focus()
          return;
        }
      }

      // 扶養家族（空チェック）
      if (inputCheck.checkNull(this.familyNumber)) {
        this.$message.error(message.familyNumber01);
        let familyNumber: any = this.$refs.familyNumber
        familyNumber.focus()
        return;
      }
      this.loading = true
      if (inputCheck.checkNull(this.kanaAddress)) {
        const params = {
          "query": this.postCode,
          "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
          "output": "json",
          "detail": "full"
        }
        apply114LoanGetAddress(params).then(res => {
          this.kanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
          this.commit()
        }).catch(err => {
          console.log('err::', err)
          this.commit()
        })
      } else {
        this.commit()
      }
    }
    commit(){

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
        'flag': '1',
        'loanType': this.stringNumber,
        'loanTypeName': this.loanType,
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'limitMoney': this.$store.state.loanStore.limitMoney,
        'dairekutoMail': this.$store.state.loanStore.dairekutoMail,
        'lastName': this.lastName,
        'firstName': this.firstName,
        'lastKanaName': this.lastKanaName,
        'firstKanaName': this.firstKanaName,
        'birthday': this.birthday,
        'sexKbn': this.sexKbn,
        'age': inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)),
        'postCode': this.postCode,
        'prefecturesCode': this.prefecturesCode,
        'address': this.address,
        'otherAddress': this.otherAddress,
        'kanaAddress': this.kanaAddress,
        'teleNumber': this.teleNumber,
        'phoneNumber': this.phoneNumber,
        'enAddress': this.enAddress,
        'liveYear': this.liveYear,
        'liveMonth': this.liveMonth,
        'spouse': this.spouse,
        'liveType': this.liveType,
        'familyNumber': this.familyNumber,
      }

      if (this.loanTypeHave()) {
        params['myConfirmation'] = this.myConfirmation
        params['myConfirmationCode'] = this.myConfirmationCode
        params['houseFlg'] = this.houseFlg
        params['houseLoanFlg'] = this.houseLoanFlg
        params['paymentFlg'] = this.paymentFlg
        params['homeNumber'] = this.homeNumber
      }

      apply114LoanTmp(params).then(res => {

        this.$store.commit('loanStore/setFlg01', true);
        this.$store.commit('loanStore/setLoanAppSeq', res.data.resultData.loanAppSeq);

        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/otherLoan04');
        } else {
          this.$router.push('/otherLoan02');
        }
        this.loading = false
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    getAddress() {

      let postCode: any = this.$refs.postCode

      if (inputCheck.checkNull(this.postCode)) {
        this.$message.error('「郵便番号」を入力してください。');
        postCode.focus()
        return;
      } else if (inputCheck.checkLength(this.postCode, 7)) {
        this.$message.error(message.postCode02);
        postCode.focus()
        return;
      }

      const params = {
        "query": this.postCode,
        "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
        "output": "json",
        "detail": "full"
      }
      apply114LoanGetAddress(params).then(res => {
        // const data = res.data
        for (let item of this.options) {
          for (let item2 of item.options) {
            if (item2.label == res.data.Feature[0].Property.AddressElement[0].Name) {
              this.prefecturesCode = item2.value
            }
          }
        }
        this.address = String(res.data.Feature[0].Property.AddressElement[1].Name) + String(res.data.Feature[0].Property.AddressElement[2].Name)
        this.kanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
      }).catch(err => {
        this.$message.error('検索に失敗しました。');
        console.log(err)
      })
    }

    onInputEvent(eventName, strFlag) {
      if(strFlag){
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      }else{
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
      }
    }

    myConfirmationCodeRegTest(){
      this.myConfirmationCode = this.myConfirmationCode.replace(/[^a-zA-Z0-9]/g, '');
    }

    spouseChange(){
      this.liveType = '';
    }
    myConfirmationChange(){
     this.myConfirmationCode = '';
     if (this.myConfirmation == '1' || this.myConfirmation == '2' || this.myConfirmation == '4') {
       this.myConfirmationCodeLength = '12'
     } else if (this.myConfirmation == '3' || this.myConfirmation == '5') {
       this.myConfirmationCodeLength = '20'
     }
    }
}
</script>

<style lang="scss">
  .label-155px {
    height: 155px;
  }

  .label-normal-160px {
    height: 160px;
  }

  @media screen and (min-width: 768px) {
    .birthday-width {
      width: 80%;
    }
    .birthday-width-detail {
      width: 18%;
    }
    .label-family-CEL01 {
      margin-top: 88px;
      margin-left: 20px;
    }
    .label-200-58px {
      height: 200px;
    }
    .sub-label-family-CEL01 {
      padding-top: 30px;
      padding-left: 30px;
    }
    .el-step__title {
      line-height: 18px;
    }
    .label-normal-58-160px {
      height: 160px;
    }
    .radio-font-size {
      font-size: 16px;
    }
    .title {
      padding: 10px 0 10px 20px;
      margin-top: 20px;
      font-size: 18px;
      /*font-weight: bold;*/
      color: #272727;
      background: #f7f7f7;
    }
    .label-name-other-loan01 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .label-address-other-loan01 {
      margin-top: 70px;
      margin-left: 20px;
    }
    .label-tel-other-loan01 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .sub-label-name-other-loan01 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-address-other-loan01 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .sub-label-name-input-other-loan01 {
      padding-top: 7px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .sub-label-masterKnowFlg-input-other-loan01 {
      padding-top: 15px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .label-birthday-other-loan01 {
      margin-top: 17px;
      margin-left: 20px;
    }
    .label-home-other-loan01 {
      margin-top: 75px;
      margin-left: 20px;
    }
    .sub-label-family-other-loan01 {
      padding-top: 7px;
      padding-left: 30px;
    }
    .sub-label-birthday-other-loan01 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-birthday-input-other-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }
    .sub-label-birthday-input-detail-other-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }
    .sub-label-enAddress-input-other-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }

    .sub-radio-enAddress-input-other-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }

    .sub-label-gender-other-loan01 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-postcode-other-loan01 {
      padding-top: 5px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .addressBtn {
      width: 40%;
    }
    .nextBtn {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .input-radio {
      margin-left: 20px;
    }
    .postCode1 {
      width: 35%;
    }
    .postCode2 {
      width: 40%;
    }
    .right-button-line {
      border-right: 0.5px solid rgb(230, 230, 230);
    }
    .label-172-50px {
      height: 172px;
    }
    .label-enAddress-other-loan01 {
      margin-top: 50px;
      margin-left: 20px;
    }
    .sub-label-enAddress-other-loan01 {
      padding-top: 5px;
      padding-left: 30px;
    }
    .myConfirmationCode-other-loan01 {
      margin-left: 10px;
      width: 50%;
    }
  }

  @media screen and (max-width: 767px) {
    .birthday-width {
      width: 60%;
    }
    .birthday-width-detail {
      width: 23%;
    }
    .label-family-CEL01 {
      margin-top: 20px;
      text-align: center;
    }
    .label-200-58px {
      height: 58px;
    }
    .sub-label-family-CEL01 {
      padding-top: 20px;
      padding-left: 30px;
    }
    .el-step__title {
      line-height: 18px;
    }
    .label-normal-58-160px {
      height: 58px;
    }
    .last-input {
      margin-bottom: 20px;
    }
    .title {
      padding: 10px 0 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      //font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }
    .label-name-other-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .label-address-other-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .label-tel-other-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-name-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-address-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-family-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-name-input-other-loan01 {
      padding-top: 8px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .label-birthday-other-loan01 {
      margin-top: 17px;
      text-align: center;
    }
    .label-home-other-loan01 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-birthday-input-other-loan01 {
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-birthday-input-detail-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-enAddress-input-other-loan01 {
      padding: 20px 10px 20px 10px;
    }
    .sub-radio-enAddress-input-other-loan01 {
      padding: 20px 10px 20px 10px;
    }
    .sub-label-masterKnowFlg-input-other-loan01 {
      padding: 20px 10px 20px 30px;
    }
    .sub-label-gender-other-loan01 {
      padding-top: 20px;
      padding-left: 30px;
    }
    .sub-label-postcode-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .addressBtn {
      width: 100%;
      margin-top: 15px;
    }
    .mobileBtn {
      text-align: center;
    }
    .nextBtn {
      width: 100%;
      background: #fc0019;
      height: 50px;

    }
    .input-radio {
      margin-left: 5px;
    }
    .radio-font-size {
      font-size: 14px;
    }
    .postCode1 {
      /*width: calc(35% - 34px);*/
      width: calc(45% - 30px);
    }
    .postCode2 {
      /*width: calc(100% - 38px);*/
      width: calc(55% - 28px);
    }
    .right-button-line {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .label-172-50px {
      height: 50px;
    }
    .label-enAddress-other-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-enAddress-other-loan01 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }
    .myConfirmationCode-other-loan01 {
      margin-top: 10px;
      width: 100%;
    }
  }
</style>
