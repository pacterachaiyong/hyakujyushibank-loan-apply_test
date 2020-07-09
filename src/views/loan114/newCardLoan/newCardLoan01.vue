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

        <el-row style="margin-top: 16px; color: #6e6e6e;" class="label-font-css">
            <div>■ご本人さまについてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-145-50px right-button-line"
                >
                    <div class="label-name-new-card-loan01 label-font-css">お名前<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                    class="label-100px"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="3"
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[姓]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-new-card-loan01"
                        >
                            <el-input
                                ref="lastName"
                                v-model.trim ="lastName"
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[名]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-new-card-loan01"
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[セイ]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-new-card-loan01"
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[メイ]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="9"
                            class="sub-label-name-input-new-card-loan01 last-input"
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
                    <div class="label-birthday-new-card-loan01 label-font-css">生年月日<span
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
                            class="sub-label-birthday-new-card-loan01"
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
                                        class="birthday-width sub-label-birthday-input-new-card-loan01"
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
                                        class="birthday-width-detail sub-label-birthday-input-detail-new-card-loan01 last-input"
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
                    <div class="label-birthday-new-card-loan01 label-font-css">性別<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-gender-new-card-loan01">
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
                    <div class="label-birthday-new-card-loan01 label-font-css">国籍<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-gender-new-card-loan01">
                        <el-radio-group id="country" v-model="country">
                            <el-radio label="1"><span class="radio-font-size">日本</span></el-radio>
                            <el-radio label="2"><span class="radio-font-size">日本国籍以外</span></el-radio>
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
                    <div class="label-birthday-new-card-loan01 label-font-css">運転免許証番号<span
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
                            :sm="6"
                            class="sub-label-gender-new-card-loan01"
                        >
                            <el-radio-group
                                id="driverLicenseFlg"
                                v-model="driverLicenseFlg"
                                @change="driverLicenseFlgChange"
                            >
                                <el-radio label="1"><span class="radio-font-size">有</span></el-radio>
                                <el-radio label="0"><span class="radio-font-size">無</span></el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col
                            v-show="driverLicenseFlg === '1'"
                            :xs="24"
                            :sm="18"
                            class="sub-label-birthday-input-new-card-loan01 last-input"
                        >
                            <el-input
                                ref="driverLicenseNo"
                                v-model.trim="driverLicenseNo"
                                placeholder=""
                                maxlength="12"
                                minlength="12"
                                @input="onInputEvent('driverLicenseNo', true)"
                            ></el-input>
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
                    <div class="label-postcode-new-card-loan01 label-font-css">郵便番号<span
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
                        class="sub-label-postcode-new-card-loan01"
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
                    <div class="label-address-new-card-loan01 label-font-css">ご自宅住所<span
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan01"
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan01"
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

                    <div class="sub-label-address-new-card-loan01">
                        <span class="red-color">※番地・マンション名・部屋番号等はお客様自身でご入力してください。</span>
                    </div>
                    <div class="sub-label-address-new-card-loan01 last-input" style="margin-bottom: 10px;">
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
                    <div class="label-tel-new-card-loan01 label-font-css">お電話番号<span
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[ご自宅]</span>
                            <div style="margin-left: -8px;"></div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan01"
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
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">[携帯・PHS]</span>
                            <div style="margin-left: -8px;"></div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan01 last-input"
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

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-new-card-loan01 label-font-css">お住まい<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-input-new-card-loan01">
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
                    <div class="label-birthday-new-card-loan01 label-font-css">居住年数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-input-new-card-loan01">

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
                        <span class="sub-label-font-css" style="margin-left: 10px;">年</span>
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
                        <span class="sub-label-font-css" style="margin-left: 10px;">ヶ月</span>
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
                    <div class="label-birthday-new-card-loan01 label-font-css">家賃（住宅ローン）<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-enAddress-input-new-card-loan01">
                        <el-input
                            ref="rentLoan"
                            v-model.trim="rentLoan"
                            minlength="1"
                            maxlength="7"
                            placeholder="（例）70000"
                            style="width: 50%;"
                            @input="onInputEvent('rentLoan')"
                        ></el-input>
                        <span class="sub-label-font-css" style="margin-left: 10px;">円／毎月</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-name-warning-new-card-loan01 label-font-css">ご家族<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-family-new-card-loan01">
                        <el-select
                            ref="spouse"
                            v-model="spouse"
                            placeholder="選択してください"
                            style="width: 62%;"
                        >
                            <el-option
                                v-for="item in familyOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                        <el-radio-group
                            id="liveType"
                            v-model="liveType"
                            if="liveType"
                            class="input-radio"
                        >
                            <el-radio label="1"><span>同居</span></el-radio>
                            <el-radio label="2" style="margin-left: -20px;"><span>別居</span></el-radio>
                        </el-radio-group>
                    </div>
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="4"
                            class="sub-label-name-new-card-loan01"
                        >
                            <span class="sub-label-font-css">扶養家族</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="20"
                            class="sub-label-name-input-new-card-loan01 last-input"
                        >
                            <el-input
                                ref="familyNumber"
                                v-model.trim="familyNumber"
                                maxlength="9"
                                placeholder="（例）2"
                                style="width: 50%;"
                                @input="onInputEvent('familyNumber')"
                            ></el-input>
                            <span class="sub-label-font-css" style="margin-left: 20px;">人</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="11"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-birthday-new-card-loan01 label-font-css">奥様（ご主人）はこのお申込みをご承知ですか<span
                        class="red-color"
                        style="float: right;font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="13"
                >
                    <div class="sub-label-masterKnowFlg-input-new-card-loan01">
                        <el-radio-group id="masterKnowFlg" v-model="masterKnowFlg">
                            <el-radio label="1"><span class="radio-font-size">はい</span></el-radio>
                            <el-radio label="0"><span class="radio-font-size">いいえ</span></el-radio>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 40px; margin-bottom: 80px;">
            <el-row>
                <el-col :xs="0" :sm="19">
                    <div>&nbsp;</div>
                </el-col>
                <el-col :xs="24" :sm="5">
                    <el-button
                        type="danger"
                        class="nextBtn-new-card-loan01"
                        @click="nextBtn"
                    ><span style="font-weight: bold">次へ</span></el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import 'element-ui/lib/theme-chalk/display.css';
import utils from '@/libs/utils';
import message from '@/libs/message';
import inputCheck from '@/libs/inputCheck';
import constants from '@/libs/constants';
import {apply114LoanGetAddress, apply114LoanTmp, apply114LoanGetDetail} from '@/api/loan114';

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

    country: string = ''

    driverLicenseFlg: string = ''
    driverLicenseNo: string = ''

    postCode: string = ''
    bkPostCode: string = ''
    prefecturesCode: string = ''
    address: string = ''
    otherAddress: string = ''
    kanaAddress: string = ''

    teleNumber: string = ''
    phoneNumber: string = ''

    enAddress: string = ''

    liveYear: string = ''
    liveMonth: string = ''

    rentLoan: string = ''

    spouse: string = ''
    liveType: string = ''
    familyNumber: string = ''

    masterKnowFlg: string = ''

    options: any = constants.prefecturesCodeList

    homeOptions: any = constants.enAddressList_new

    monthOption: any = constants.liveMonthList

    liveYearOption: any = constants.liveYearList

    birthdayMonthOption: any = constants.dateMonthList

    birthdayDayOption: any = constants.dateDayList

    familyOptions: any = constants.spouseList

    yearOptions: any = constants.dateYearList1950_2020

    // 半角转全角
    changeFirstName() {
      this.firstName = utils.changeToDBC(this.firstName.replace(/[ 　]{2,}/g, " "))
    }
    // 半角转全角
    changeLastName() {
      this.lastName = utils.changeToDBC(this.lastName)
    }
    // 半角转全角
    changeFirstKanaName() {
      this.firstKanaName = utils.changeToDBC(utils.toKatakanaCase(this.firstKanaName).replace(/[ 　]{2,}/g, " "))
    }
    // 半角转全角
    changeLastKanaName() {
      this.lastKanaName = utils.changeToDBC(utils.toKatakanaCase(this.lastKanaName))
    }

    changeAddress() {
      this.address = utils.changeToDBC(this.address)
    }

    changeOtherAddress() {
      this.otherAddress = utils.changeToDBC(this.otherAddress)
    }

    mounted() {
      this.init()
      // 打开页面 滚动至头部位置
      let title: any = document.getElementById("app")
      title.scrollIntoView();

      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01) {
        // 向后台发送请求渲染页面 this.$store.state.loanStore.docId
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        this.loading = true
        apply114LoanGetDetail(params).then(res => {
          console.log(res)
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
          this.country = data.country
          this.driverLicenseFlg = data.driverLicenseFlg
          this.driverLicenseNo = data.driverLicenseNo
          this.postCode = data.postCode
          this.prefecturesCode = data.prefecturesCode
          this.address = data.address
          this.otherAddress = data.otherAddress
          this.kanaAddress = data.kanaAddress
          this.teleNumber = data.teleNumber
          this.phoneNumber = data.phoneNumber
          this.enAddress = data.enAddress
          this.liveYear = data.liveYear
          this.liveMonth = data.liveMonth
          this.rentLoan = data.rentLoan
          this.spouse = data.spouse
          this.liveType = data.liveType
          this.familyNumber = data.familyNumber
          this.masterKnowFlg = data.masterKnowFlg
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      }

    }

    init() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage) {
        this.$router.push('/errorPage')
      }
      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }

    }

    onInputEvent(eventName, strFlag) {
      if(strFlag){
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      }else{
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
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

        // 生年月日（正しい歴日チェック）
      } else if (inputCheck.checkDateFormat(utils.hyphenAdd(this.birthday))) {
        this.$message.error(message.birthday04);
        let birthdayYear: any = this.$refs.birthdayYear
        birthdayYear.focus()
        return;

        // 生年月日（年齢チェック）
      } else if (20 > inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday))) {
        this.$message.error(message.birthday02);
        let birthdayYear: any = this.$refs.birthdayYear
        birthdayYear.focus()
        return;

        // 生年月日（年齢チェック）
      } else if (inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)) >= 65) {
        this.$message.error(message.birthday03);
        let birthdayYear: any = this.$refs.birthdayYear
        birthdayYear.focus()
        return;

        // 性別（空チェック）
      } else if (inputCheck.checkNull(this.sexKbn)) {
        this.$message.error(message.sexKbn01);
        let sexKbn: any = document.getElementById("sexKbn")
        sexKbn.scrollIntoView();
        return;

        // 国籍（空チェック）
      } else if (inputCheck.checkNull(this.country)) {
        this.$message.error(message.country01);
        let country: any = document.getElementById("country")
        country.scrollIntoView();
        return;

        // 運転免許証番号有無（空チェック）
      } else if (inputCheck.checkNull(this.driverLicenseFlg)) {
        this.$message.error(message.driverLicenseFlg01);
        let driverLicenseFlg: any = document.getElementById("driverLicenseFlg")
        driverLicenseFlg.scrollIntoView();
        return;

        // 運転免許証番号有無が「有」の場合、運転免許証番号（空チェック）
      } else if (this.driverLicenseFlg == "1" && inputCheck.checkNull(this.driverLicenseNo)) {
        this.$message.error(message.driverLicenseNo01);
        let driverLicenseNo: any = this.$refs.driverLicenseNo
        driverLicenseNo.focus()
        return;

        // 運転免許証番号有無が「有」の場合、運転免許証番号（桁数チェック）
      } else if (this.driverLicenseFlg == "1" && inputCheck.checkLength(this.driverLicenseNo, 12)) {
        this.$message.error(message.driverLicenseNo02);
        let driverLicenseNo: any = this.$refs.driverLicenseNo
        driverLicenseNo.focus()
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

        // お住まい（空チェック）
      } else if (inputCheck.checkNull(this.enAddress)) {
        this.$message.error(message.enAddress01);
        let enAddress: any = this.$refs.enAddress
        enAddress.focus()
        return;

        // 居住年数_年（空チェック）
      } else if (inputCheck.checkNull(this.liveYear)) {
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

        // 家賃（住宅ローン）（空チェック）
      } else if (inputCheck.checkNull(this.rentLoan)) {
        this.$message.error(message.rentLoan01);
        let rentLoan: any = this.$refs.rentLoan
        rentLoan.focus()
        return;

        // ご家族_配偶者（空チェック）
      } else if (inputCheck.checkNull(this.spouse)) {
        this.$message.error(message.spouse01);
        let spouse: any = this.$refs.spouse
        spouse.focus()
        return;

        // 居住形態（空チェック）
      } else if (inputCheck.checkNull(this.liveType)) {
        this.$message.error(message.liveType01);
        let liveType: any = document.getElementById("liveType")
        liveType.scrollIntoView();
        return;

        // 扶養家族（空チェック）
      } else if (inputCheck.checkNull(this.familyNumber)) {
        this.$message.error(message.familyNumber01);
        let familyNumber: any = this.$refs.familyNumber
        familyNumber.focus()
        return;

        // 奥様（ご主人）はこのお申し込みをご承知ですか（空チェック）
      } else if (inputCheck.checkNull(this.masterKnowFlg)) {
        this.$message.error(message.masterKnowFlg01);
        let masterKnowFlg: any = document.getElementById("masterKnowFlg")
        masterKnowFlg.scrollIntoView();
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
        apply114LoanGetAddress(params).then(res =>{
          this.kanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
          this.commit()
        }).catch(err=> {
          console.log('err::',err)
          this.commit()
        })
      }else {
        this.commit()
      }
    }
    commit(){

      let params: any = {
        'flag': '1',
        'loanType': '0',
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'limitMoney': this.$store.state.loanStore.limitMoney,
        'dairekutoMail': this.$store.state.loanStore.dairekutoMail,
        'firstName': this.firstName,
        'lastName': this.lastName,
        'firstKanaName': this.firstKanaName,
        'lastKanaName': this.lastKanaName,
        'birthday': this.birthday,
        'sexKbn': this.sexKbn,
        'age': inputCheck.checkBirthdayAge(utils.hyphenAdd(this.birthday)),
        'country': this.country,
        'driverLicenseFlg': this.driverLicenseFlg,
        'driverLicenseNo': this.driverLicenseNo,
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
        'rentLoan': this.rentLoan,
        'spouse': this.spouse,
        'liveType': this.liveType,
        'familyNumber': this.familyNumber,
        'masterKnowFlg': this.masterKnowFlg
      }

      apply114LoanTmp(params).then(res => {
        this.$store.commit('loanStore/setFlg01', true);
        this.$store.commit('loanStore/setLoanAppSeq', res.data.resultData.loanAppSeq);

        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/newCardLoan04');
        } else {
          this.$router.push('/newCardLoan02');
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
      }else if (inputCheck.checkLength(this.postCode, 7)) {
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
    driverLicenseFlgChange(){
      this.driverLicenseNo = '';
    }


}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .birthday-width {
      width: 80%;
    }
    .birthday-width-detail {
      width: 18%;
    }
    .label-postcode-new-card-loan01 {
      margin-top: 17px;
      margin-left: 20px;
    }
    .sub-label-postcode-new-card-loan01 {
      padding-top: 5px;
      padding-left: 30px;
      padding-right: 10px;
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
    .label-name-new-card-loan01 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .label-name-warning-new-card-loan01 {
      margin-top: 40px;
      margin-left: 20px;
    }
    .label-address-new-card-loan01 {
      margin-top: 70px;
      margin-left: 20px;
    }
    .label-tel-new-card-loan01 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .sub-label-name-new-card-loan01 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-address-new-card-loan01 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .sub-label-name-input-new-card-loan01 {
      padding-top: 7px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .sub-label-masterKnowFlg-input-new-card-loan01 {
      padding-top: 15px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .label-birthday-new-card-loan01 {
      margin-top: 17px;
      margin-left: 20px;
    }
    .sub-label-family-new-card-loan01 {
      padding-top: 7px;
      padding-left: 30px;
    }
    .sub-label-birthday-new-card-loan01 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-birthday-input-new-card-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 15px;
    }
    .sub-label-birthday-input-detail-new-card-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 15px;
    }
    .sub-label-enAddress-input-new-card-loan01 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 30px;
    }
    .sub-label-gender-new-card-loan01 {
      padding-top: 15px;
      padding-left: 20px;
    }
    .sub-label-postcode-new-card-loan01 {
      padding-top: 5px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .addressBtn {
      width: 40%;
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
    .nextBtn-new-card-loan01 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }
  }

  @media screen and (max-width: 767px) {
    .birthday-width {
      width: 60%;
    }
    .birthday-width-detail {
      width: 23%;
    }
    .label-postcode-new-card-loan01 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-postcode-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
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
    .label-name-new-card-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .label-name-warning-new-card-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .label-address-new-card-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .label-tel-new-card-loan01 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-name-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-address-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-family-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-name-input-new-card-loan01 {
      padding-top: 8px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .label-birthday-new-card-loan01 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-birthday-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-birthday-input-new-card-loan01 {
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-birthday-input-detail-new-card-loan01 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-enAddress-input-new-card-loan01 {
      padding: 20px 10px 20px 10px;
    }
    .sub-label-masterKnowFlg-input-new-card-loan01 {
      padding: 20px 10px 20px 30px;
    }
    .sub-label-gender-new-card-loan01 {
      padding-top: 20px;
      padding-left: 30px;
      padding-bottom: 20px;
    }
    .sub-label-postcode-new-card-loan01 {
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
    .nextBtn-new-card-loan01 {
      width: 100%;
      background: #fc0019;
      height: 50px;
    }
  }
</style>
