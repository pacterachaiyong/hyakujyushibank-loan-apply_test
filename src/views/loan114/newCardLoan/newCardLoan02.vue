<template>
    <div
        id="title"
        v-loading="loading"
        class="container"
    >
        <el-row class="title">
            <div>{{this.applyPageTitle}}</div>
        </el-row>

        <el-row style="margin-top: 16px;" class="isPc">
            <el-row>
                <img
                    style="width: 960px;"
                    src="../../../assets/imgs/page02/pc_loan_02.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; background-size: 50%;" class="isMobile">
            <el-row style="text-align: center">
                <img
                    style="width: calc(100%);"
                    src="../../../assets/imgs/page02/m_loan_02.svg"
                    alt=""
                >
            </el-row>
        </el-row>

        <el-row style="margin-top: 16px; color: #6e6e6e;" class="label-font-css">
            <div>■お勤め先についてご入力ください。</div>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="11"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-know-new-card-loan02 sub-label-font-css">出向先（派遣先）の有無について<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="13"
                >
                    <div
                        id="sendFlg"
                        class="label-know-input-new-card-loan02 last-input"
                        @change="sendFlgChange"
                    >
                        <el-radio-group v-model="sendFlg">
                            <el-radio label="0"><span class="radio-font-size">なし</span></el-radio>
                            <el-radio label="1"><span class="radio-font-size">あり</span></el-radio>
                        </el-radio-group>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-140-50px right-button-line"
                >
                    <div class="label-name-new-card-loan02 label-font-css">お勤め先名<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-name-input-first-new-card-loan02">
                        <span class="sub-label-font-css">[漢字]</span>
                        <el-input
                            ref="companyName"
                            v-model.trim="companyName"
                            maxlength="40"
                            placeholder="（例）香川商事株式会社"
                            class="sub-label-name-input-width-new-card-loan02"
                            @blur="companyNameBlur"
                        ></el-input>
                        <div style="margin-top: 5px; margin-left: 55px; color: #fc0019; font-size: 14px;">40文字まで</div>
                    </div>
                    <div class="sub-label-name-input-new-card-loan02 last-input">
                        <span class="sub-label-font-css">[カナ]</span>
                        <el-input
                            ref="companyKanaName"
                            v-model.trim="companyKanaName"
                            maxlength="60"
                            placeholder="（例）カガワショウジカブシキカイシャ"
                            class="sub-label-name-input-width-new-card-loan02"
                            @blur="companyKanaNameBlur"
                        ></el-input>
                        <div style="margin-top: 5px; margin-left: 55px; color: #fc0019; font-size: 14px;">60文字まで</div>
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
                    <div class="label-postcode-new-card-loan02 label-font-css">お勤め先郵便番号<span
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
                        class="sub-label-postcode-new-card-loan02"
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
                    class="label-background-color label-155-50px right-button-line"
                >
                    <div class="label-address-new-card-loan02 label-font-css">お勤め先所在地<span
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
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02"
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
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02"
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

                    <div class="sub-label-address-new-card-loan02 last-input">
                        <span class="red-color">※番地・マンション名・部屋番号等はお客様自身でご入力してください。</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-140-50px right-button-line-num"
                >
                    <div class="label-tel-new-card-loan02 label-font-css">お勤め先電話番号</div>
                </el-col>

                <el-col
                    :xs="0"
                    :sm="2"
                    class="label-background-color label-140-50px right-button-line"
                >
                    <el-row class="hidden-sm-and-down">
                        <el-col :span="4">
                            <div class="label-font-css label-tel-new-card-loan02-num" style="margin-left: -6px">
                                <span style="color: #fc0019; font-weight: normal;">【</span>
                            </div>
                        </el-col>
                        <el-col :span="16">
                            <div class="label-font-css label-tel-new-card-loan02-num" style="margin-top: 50px;">
                                <span style="color: #fc0019;font-weight: normal;">いずれ<br>か必須</span>
                            </div>
                        </el-col>
                        <el-col :span="4">
                            <div class="label-font-css label-tel-new-card-loan02-num">
                                <span style="color: #fc0019; font-weight: normal;">】</span>
                            </div>
                        </el-col>
                    </el-row>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[代表電話]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02"
                        >
                            <el-input
                                ref="workTeleNumber"
                                v-model.trim="workTeleNumber"
                                maxlength="10"
                                placeholder="（例）0879876543"
                                @input="onInputEvent('workTeleNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字10桁</div>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[所属部直通]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02 last-input"
                        >
                            <el-input
                                ref="workPhoneNumber"
                                v-model.trim="workPhoneNumber"
                                maxlength="11"
                                placeholder="（例）0879871234"
                                @input="onInputEvent('workPhoneNumber', true)"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字10桁または11桁</div>
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
                    <div class="label-job-content-new-card-loan02 label-font-css">事業内容<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="jobType"
                            v-model="jobType"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in jobTypeOtions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-job-content-new-card-loan02 label-font-css">役職<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="position"
                            v-model="position"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in positionOtions"
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
                    <div class="label-job-content-new-card-loan02 label-font-css">所属部課名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-input
                            ref="department"
                            v-model.trim="department"
                            maxlength="20"
                            placeholder="（例）営業課"

                            @blur="departmentBlur"
                        ></el-input>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-job-content-new-card-loan02 label-font-css">給料日<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="sub-label-job-content-input-new-card-loan02"
                >
                    <el-select
                        ref="payment"
                        v-model="payment"
                        placeholder="（例）25"
                    >
                        <el-option
                            v-for="item in dayOption"
                            ref="payment"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value"
                        >
                        </el-option>
                    </el-select>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-job-content-new-card-loan02 label-font-css">入社年月<span
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
                            class="sub-label-birthday-new-card-loan02"
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
                                        ref="workYearMonthYear"
                                        v-model="workYearMonthYear"
                                        class="birthday-width sub-label-birthday-input-new-card-loan02"
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
                                        ref="workYearMonthMonth"
                                        v-model="workYearMonthMonth"
                                        class="birthday-width-detail sub-label-birthday-input-detail-new-card-loan02 last-input month-width"
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
                    <div class="label-job-content-new-card-loan02 label-font-css">最終学歴卒業年月<span
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
                            class="sub-label-birthday-new-card-loan02"
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
                                        ref="graduateYearMonthYear"
                                        v-model="graduateYearMonthYear"
                                        class="birthday-width sub-label-birthday-input-new-card-loan02"
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
                                        ref="graduateYearMonthMonth"
                                        v-model="graduateYearMonthMonth"
                                        class="birthday-width-detail sub-label-birthday-input-detail-new-card-loan02 last-input month-width"
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

                                </el-col>
                            </el-row>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr v-show="sendFlg === '1'" class="hr-style"/>

            <el-row v-show="sendFlg === '1'">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-140-50px right-button-line"
                >
                    <div class="label-name-new-card-loan02 label-font-css">出向先会社名<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div class="sub-label-name-input-first-new-card-loan02">
                        <span class="sub-label-font-css">[漢字]</span>
                        <el-input
                            ref="visitingName"
                            v-model.trim="visitingName"
                            maxlength="40"
                            placeholder="（例）香川販売株式会社"
                            class="sub-label-name-input-width-new-card-loan02"
                            @blur="visitingNameBlur"
                        ></el-input>
                        <div style="margin-top: 5px; margin-left: 55px; color: #fc0019; font-size: 14px;">40文字まで</div>
                    </div>
                    <div class="sub-label-name-input-new-card-loan02 last-input">
                        <span class="sub-label-font-css">[カナ]</span>
                        <el-input
                            ref="visitingKanaName"
                            v-model.trim="visitingKanaName"
                            maxlength="60"
                            placeholder="（例）カガワハンバイカブシキカイシャ"
                            class="sub-label-name-input-width-new-card-loan02"
                            @blur="visitingKanaNameBlur"
                        ></el-input>
                        <div style="margin-top: 5px; margin-left: 55px; color: #fc0019; font-size: 14px;">60文字まで</div>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="sendFlg === '1'" class="hr-style"/>

            <el-row v-show="sendFlg === '1'">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-job-content-new-card-loan02 label-font-css">出向先所属部課名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-input
                            ref="visitingDepartment"
                            v-model.trim="visitingDepartment"
                            maxlength="20"
                            placeholder="（例）販売課"
                            @blur="visitingDepartmentBlur"
                        ></el-input>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-job-content-new-card-loan02 label-font-css">役職<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="visitingPosition"
                            v-model="visitingPosition"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in positionOtions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="sendFlg === '1'" class="hr-style"/>

            <el-row v-show="sendFlg === '1'">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan02 label-font-css">出向先郵便番号<span
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
                        class="sub-label-postcode-new-card-loan02"
                    >
                        <el-col
                            :xs="24"
                            :sm="10"
                        >
                            <span>〒</span>
                            <el-input
                                ref="visitingPostCode"
                                v-model.trim="visitingPostCode"
                                placeholder="（例）7600050"
                                maxlength="7"
                                style="margin-left: 10px;width: 88%;"
                                @input="onInputEvent('visitingPostCode', true)"
                                @blur="watchPostCode('visitingPostCode', 'bkVisitingPostCode', 'visitKanaAddress')"
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
                                @click="getAddress02()"
                            >住所検索
                            </el-button>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr v-show="sendFlg === '1'" class="hr-style"/>

            <el-row v-show="sendFlg === '1'">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-155-50px right-button-line"
                >
                    <div class="label-address-new-card-loan02 label-font-css">出向先住所<span
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
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02"
                        >
                            <el-select
                                ref="visitPreCode"
                                v-model="visitPreCode"
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
                                ref="visitAddress"
                                v-model.trim="visitAddress"
                                style="width: calc(60% - 5px); margin-left: 10px;"
                                maxlength="60"
                                placeholder="（例）高松市亀井町"
                                @blur="visitAddressBlur"
                            ></el-input>
                        </el-col>
                    </el-row>

                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="5"
                            class="sub-label-name-new-card-loan02"
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="sub-label-name-input-new-card-loan02"
                        >
                            <el-input
                                ref="visitOtherAddress"
                                v-model.trim="visitOtherAddress"
                                placeholder="（例）〇丁目〇〇番地"
                                maxlength="60"
                                @blur="visitOtherAddressBlur"
                            ></el-input>
                            <div style="margin-top: 5px; color: #fc0019; font-size: 14px;">市町村と合わせて60文字まで</div>
                        </el-col>
                    </el-row>

                    <div class="sub-label-address-new-card-loan02 last-input">
                        <span class="red-color">※番地・マンション名・部屋番号等はお客様自身でご入力してください。</span>
                    </div>
                </el-col>
            </el-row>


            <hr v-show="sendFlg === '1'" class="hr-style"/>

            <el-row v-show="sendFlg === '1'">
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-70-50px right-button-line"
                >
                    <div class="label-postcode-warning-new-card-loan02 label-font-css">出向先電話番号<span
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
                        style="margin-right: 10px;"
                        class="sub-label-postcode-new-card-loan02"
                    >
                        <el-col
                            :xs="24"
                            :sm="10"
                        >
                            <el-input
                                ref="visitTelNumber"
                                v-model.trim="visitTelNumber"
                                placeholder="（例）0879876543"
                                maxlength="11"
                                style="margin-left: 10px;"
                                @input="onInputEvent('visitTelNumber', true)"
                            ></el-input>
                            <div style="margin-left: 10px;margin-top: 5px; color: #fc0019; font-size: 14px;">ハイフンなし半角数字10桁または11桁</div>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="14"
                            class="mobileBtn last-input"
                        >
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
                    <div class="label-yearmoney-new-card-loan02 label-font-css">年収<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                    class="label-normal-58"
                >
                    <el-row>
                        <el-col
                            :xs="24"
                            :sm="8"
                            class="sub-label-money-new-card-loan02"
                        >
                            <el-radio-group id="incomeFlg" v-model="incomeFlg">
                                <el-radio label="0"><span>固定給</span></el-radio>
                                <el-radio label="1" style="margin-left: -15px;"><span>歩合給</span></el-radio>
                            </el-radio-group>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                            class="sub-label-money-input-new-card-loan02 last-input"
                        >
                            <el-input
                                ref="incomeYear"
                                v-model.trim="incomeYear"
                                maxlength="4"
                                placeholder="（例）400"
                                style="margin-left: 5px;"
                                class="year-money-input-width"
                                @input="onInputEvent('incomeYear')"
                            ></el-input>
                            <span style="margin-left: 5px;" class="sub-label-font-css">万円</span>
                        </el-col>
                    </el-row>

                    <div class="sub-label-address-new-card-loan02">
                        <span class="red-color">※一般個人は源泉徴収票の収入金額を、個人事業主は確定申告書別表の所得金額を記入する。</span>
                    </div>
                    <div class="sub-label-address-new-card-loan02 last-input" style="margin-bottom: 10px;">
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
                    <div class="label-postcode-new-card-loan02 label-font-css">お仕事の内容<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="workContent"
                            v-model="workContent"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in jobContentOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan02 label-font-css">社員数<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="workNumber"
                            v-model="workNumber"
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
                    <div class="label-postcode-new-card-loan02 label-font-css">就業形態<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="18"
                >
                    <div id="workType" class="sub-label-joptype-new-card-loan02">
                        <el-radio-group v-model="workType">
                            <el-radio label="1"><span style="font-size: 16px; color: #000;">社員</span></el-radio>
                            <el-radio label="3"><span style="font-size: 16px; color: #000;">アルバイト・パート</span></el-radio>
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
                    <div class="label-postcode-new-card-loan02 label-font-css">お勤め先の種類<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-normal-58"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="workTypeCode"
                            v-model="workTypeCode"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in companyTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan02 label-font-css">資本金</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="money"
                            v-model="money"
                            placeholder="選択してください"
                        >
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

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan02 label-font-css">本社所在地<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="comPreCode"
                            v-model="comPreCode"
                            placeholder="選択してください"
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
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="6"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan02 label-font-css">健康保険証の種類<span
                        class="red-color"
                        style="float: right; font-weight: normal;"
                    >【必須】</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="6"
                >
                    <div class="sub-label-job-content-input-new-card-loan02">
                        <el-select
                            ref="healthType"
                            v-model="healthType"
                            placeholder="選択してください"
                        >
                            <el-option
                                v-for="item in insuranceTypeOptions"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value"
                            ></el-option>
                        </el-select>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div style="margin-top: 40px;margin-bottom: 80px;">
            <el-row>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="backBtn-new-card-loan02"
                        @click="backBtn()"
                    >戻る
                    </el-button>
                </el-col>
                <el-col :xs="12" :sm="12">
                    <el-button
                        type="danger"
                        class="nextBtn-new-card-loan02"
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
import utils from '@/libs/utils';
import inputCheck from '@/libs/inputCheck';
import message from '@/libs/message02';
import constants from '@/libs/constants';
import {apply114LoanGetDetail, apply114LoanGetAddress, apply114LoanTmp} from '@/api/loan114';

  @Component
export default class Error extends Vue {
    applyPageTitle: string = this.$store.state.loanStore.applyPageTitle
    loading: boolean = false
    sendFlg: string = ''
    companyName: string = ''
    companyKanaName: string = ''
    workPostCode: string = ''
    bkWorkPostCode: string = ''
    workPrefecturesCode: string = ''
    workAddress: string = ''
    workOtherAddress: string = ''
    workKanaAddress: string = ''
    workTeleNumber: string = ''
    workPhoneNumber: string = ''
    jobType: string = ''
    position: string = ''
    department: string = ''
    payment: string = ''

    workYearMonth: string = ''
    workYearMonthYear: string = ''
    workYearMonthMonth: string = ''

    graduateYearMonth: string = ''
    graduateYearMonthYear: string = ''
    graduateYearMonthMonth: string = ''

    visitingName: string = ''
    visitingKanaName: string = ''
    visitingDepartment: string = ''
    visitingPosition: string = ''
    visitingPostCode: string = ''
    bkVisitingPostCode: string = ''
    visitPreCode: string = ''
    visitAddress: string = ''
    visitOtherAddress: string = ''
    visitKanaAddress: string = ''
    visitTelNumber: string = ''

    incomeFlg: string = ''
    incomeYear: string = ''
    workContent: string = ''
    workNumber: string = ''
    workType: string = ''
    workTypeCode: string = ''
    money: string = ''
    comPreCode: string = ''
    healthType: string = ''

    options: any = constants.prefecturesCodeList

    jobTypeOtions: any = constants.jobTypeList

    positionOtions: any = constants.positionList_new

    dayOption: any = constants.paymentList

    jobContentOptions: any = constants.workContentList

    peopleNumberOptions: any = constants.workNumberList

    companyTypeOptions: any = constants.workTypeCodeList

    companyRegisterMoneyOptions: any = constants.moneyList

    insuranceTypeOptions: any = constants.healthTypeList

    yearOptions: any = constants.workYearMonthYearList

    birthdayMonthOption: any = constants.dateMonthList

    mounted() {
      this.init()

      let title: any = document.getElementById("app")
      title.scrollIntoView();

      if (this.$store.state.loanStore.loanType && this.$store.state.loanStore.agreeCheck &&
        this.$store.state.loanStore.flg01BeforePage && this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02) {
        const params: any = {
          'loanAppSeq': this.$store.state.loanStore.loanAppSeq
        }
        this.loading = true
        apply114LoanGetDetail(params).then(res => {
          const data = res.data.resultData
          this.sendFlg = data.sendFlg
          this.companyName = data.companyName
          this.companyKanaName = data.companyKanaName
          this.workPostCode = data.workPostCode
          this.workPrefecturesCode = data.workPrefecturesCode
          this.workAddress = data.workAddress
          this.workOtherAddress = data.workOtherAddress
          this.workTeleNumber = data.workTeleNumber
          this.workPhoneNumber = data.workPhoneNumber
          this.jobType = data.jobType
          this.position = data.position
          this.department = data.department
          this.workYearMonthYear = data.workYearMonth.substr(0, 4)
          this.workYearMonthMonth = data.workYearMonth.substr(4, 2)
          this.payment = data.payment
          this.graduateYearMonthYear = data.graduateYearMonth.substr(0, 4)
          this.graduateYearMonthMonth = data.graduateYearMonth.substr(4, 2)
          this.visitingName = data.visitingName
          this.visitingKanaName = data.visitingKanaName
          this.visitingDepartment = data.visitingDepartment
          this.visitingPosition = data.visitingPosition
          this.visitingPostCode = data.visitingPostCode
          this.visitPreCode = data.visitPreCode
          this.visitAddress = data.visitAddress
          this.visitOtherAddress = data.visitOtherAddress
          this.visitTelNumber = data.visitTelNumber
          this.incomeFlg = data.incomeFlg
          this.incomeYear = data.incomeYear
          this.workContent = data.workContent
          this.workNumber = data.workNumber
          this.workType = data.workType
          this.workTypeCode = data.workTypeCode
          this.money = data.money
          this.comPreCode = data.comPreCode
          this.healthType = data.healthType
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      }
    }

    init() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01) {
        this.$router.push('/errorPage')
      }
      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }

    // 半角转全角
    companyNameBlur() {
      this.companyName = utils.changeToDBC(this.companyName)
    }

    companyKanaNameBlur() {
      this.companyKanaName = utils.changeToDBC(this.companyKanaName)
      this.companyKanaName = utils.toKatakanaCase(this.companyKanaName)
    }

    visitingNameBlur() {
      this.visitingName = utils.changeToDBC(this.visitingName)
    }

    visitingKanaNameBlur() {
      this.visitingKanaName = utils.changeToDBC(this.visitingKanaName)
      this.visitingKanaName = utils.toKatakanaCase(this.visitingKanaName)
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

    visitingDepartmentBlur() {
      this.visitingDepartment = utils.changeToDBC(this.visitingDepartment)
    }

    visitAddressBlur() {
      this.visitAddress = utils.changeToDBC(this.visitAddress)
    }

    visitOtherAddressBlur() {
      this.visitOtherAddress = utils.changeToDBC(this.visitOtherAddress)
    }

    changeVisitingKanaNameBlur() {
      this.visitingKanaName = utils.toKatakanaCase(utils.changeToDBC(this.visitingKanaName))
    }

    changeVisitingNameBlur() {
      this.visitingName = utils.changeToDBC(this.visitingName)
    }

    nextBtn() {
      this.workYearMonth = this.workYearMonthYear + this.workYearMonthMonth

      this.graduateYearMonth = this.graduateYearMonthYear + this.graduateYearMonthMonth

      // 出向先（派遣先）の有無について（空チェック）
      if (inputCheck.checkNull(this.sendFlg)) {
        this.$message.error(message.sendFlg01);
        let sendFlg: any = document.getElementById("sendFlg")
        sendFlg.scrollIntoView();
        return;

        // お勤め先（屋号）漢字（空チェック）
      } else if (inputCheck.checkNull(this.companyName)) {
        this.$message.error(message.companyName01);
        let companyName: any = this.$refs.companyName
        companyName.focus()
        return;

        // お勤め先（屋号）漢字（全角チェック（漢字））
      } else if (inputCheck.zenkakuCheck(this.companyName)) {
        this.$message.error(message.companyName02);
        let companyName: any = this.$refs.companyName
        companyName.focus()
        return;

        // お勤め先（屋号）カナ（空チェック）
      } else if (inputCheck.checkNull(this.companyKanaName)) {
        this.$message.error(message.companyKanaName01);
        let companyKanaName: any = this.$refs.companyKanaName
        companyKanaName.focus()
        return;

        // お勤め先（屋号）カナ（全角チェック（カナ））
      } else if (inputCheck.zenkakuCheck2(this.companyKanaName)) {
        this.$message.error(message.companyKanaName02);
        let companyKanaName: any = this.$refs.companyKanaName
        companyKanaName.focus()
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

        // お勤め先電話番号（いずれか空チェック）
      } else if (inputCheck.checkNull(this.workTeleNumber) && inputCheck.checkNull(this.workPhoneNumber)) {
        this.$message.error(message.workTeleNumber01);
        let workTeleNumber: any = this.$refs.workTeleNumber
        workTeleNumber.focus()
        return;

        // お勤め先電話番号：代表電話（桁数チェック）
      } else if (!inputCheck.checkNull(this.workTeleNumber) && inputCheck.checkLength(this.workTeleNumber, 10)) {
        this.$message.error(message.workTeleNumber02);
        let workTeleNumber: any = this.$refs.workTeleNumber
        workTeleNumber.focus()
        return;

        // お勤め先電話番号：代表電話（10桁の電話番号の形式チェック）
      } else if (!inputCheck.checkNull(this.workTeleNumber) && inputCheck.check10TeleNumber(this.workTeleNumber)) {
        this.$message.error(message.workTeleNumber06);
        let workTeleNumber: any = this.$refs.workTeleNumber
        workTeleNumber.focus()
        return;

        // お勤め先電話番号：所属部直通（桁数チェック）
      } else if (!inputCheck.checkNull(this.workPhoneNumber) && inputCheck.checkLength(this.workPhoneNumber, 10) && inputCheck.checkLength(this.workPhoneNumber, 11)) {
        this.$message.error(message.workPhoneNumber01);
        let workPhoneNumber: any = this.$refs.workPhoneNumber
        workPhoneNumber.focus()
        return;

        // お勤め先電話番号：所属部直通（10桁の電話番号の形式チェック）
      } else if (!inputCheck.checkNull(this.workPhoneNumber) && this.workPhoneNumber.trim().length == 10) {
        if (inputCheck.check10TeleNumber(this.workPhoneNumber)) {
          this.$message.error(message.workPhoneNumber02);
          let workPhoneNumber: any = this.$refs.workPhoneNumber
          workPhoneNumber.focus()
          return;
        }
      }

      // お勤め先電話番号：所属部直通（11桁の電話番号の形式チェック）
      if (!inputCheck.checkNull(this.workPhoneNumber) && this.workPhoneNumber.trim().length == 11) {
        if (inputCheck.check11TeleNumber(this.workPhoneNumber)) {
          this.$message.error(message.workPhoneNumber02);
          let workPhoneNumber: any = this.$refs.workPhoneNumber
          workPhoneNumber.focus()
          return;
        }
      }

      // 事業内容（空チェック）
      if (inputCheck.checkNull(this.jobType)) {
        this.$message.error(message.jobContent01);
        let jobType: any = this.$refs.jobType
        jobType.focus()
        return;

        // 役職（空チェック）
      } else if (inputCheck.checkNull(this.position)) {
        this.$message.error(message.position01);
        let position: any = this.$refs.position
        position.focus()
        return;

        // 所属部課名が空でない場合（全角チェック（漢字））
      } else if (!inputCheck.checkNull(this.department) && inputCheck.zenkakuCheck(this.department)) {
        this.$message.error(message.department01);
        let department: any = this.$refs.department
        department.focus()
        return;

        // 給料日（空チェック）
      } else if (inputCheck.checkNull(this.payment)) {
        this.$message.error(message.payment01);
        let payment: any = this.$refs.payment
        payment.focus()
        return;

        // 入社年月_年（空チェック）
      } else if (inputCheck.checkNull(this.workYearMonthYear)) {
        this.$message.error(message.workYearMonth01);
        let workYearMonthYear: any = this.$refs.workYearMonthYear
        workYearMonthYear.focus()
        return;

        // 入社年月_月（空チェック）
      } else if (inputCheck.checkNull(this.workYearMonthMonth)) {
        this.$message.error(message.workYearMonth01);
        let workYearMonthMonth: any = this.$refs.workYearMonthMonth
        workYearMonthMonth.focus()
        return;

        // 最終学校卒業年月_年（空チェック）
      } else if (inputCheck.checkNull(this.graduateYearMonthYear)) {
        this.$message.error(message.graduateYearMonth01);
        let graduateYearMonthYear: any = this.$refs.graduateYearMonthYear
        graduateYearMonthYear.focus()
        return;

        // 最終学校卒業年月_月（空チェック）
      } else if (inputCheck.checkNull(this.graduateYearMonthMonth)) {
        this.$message.error(message.graduateYearMonth01);
        let graduateYearMonthMonth: any = this.$refs.graduateYearMonthMonth
        graduateYearMonthMonth.focus()
        return;
      }

      // 出向先（派遣先）の有無についてが「あり」の場合
      if (this.sendFlg == '1') {

          // 出向先会社名漢字（空チェック）
        if (inputCheck.checkNull(this.visitingName)) {
          this.$message.error(message.visitingName01);
          let visitingName: any = this.$refs.visitingName
          visitingName.focus()
          return;

          // 出向先会社名漢字（全角チェック（漢字））
        } else if (inputCheck.zenkakuCheck(this.visitingName)) {
          this.$message.error(message.visitingName02);
          let visitingName: any = this.$refs.visitingName
          visitingName.focus()
          return;

          // 出向先会社名カナ（空チェック）
        } else if (inputCheck.checkNull(this.visitingKanaName)) {
          this.$message.error(message.visitingKanaName01);
          let visitingKanaName: any = this.$refs.visitingKanaName
          visitingKanaName.focus()
          return;

          // 出向先会社名カナ（全角チェック（カナ））
        } else if (inputCheck.zenkakuCheck2(this.visitingKanaName)) {
          this.$message.error(message.visitingKanaName02);
          let visitingKanaName: any = this.$refs.visitingKanaName
          visitingKanaName.focus()
          return;

          // 出向先（派遣先）状況_所属部課名が空でない場合（全角チェック（漢字））
        } else if (!inputCheck.checkNull(this.visitingDepartment) && inputCheck.zenkakuCheck(this.visitingDepartment)) {
          this.$message.error(message.visitingDepartment01);
          let visitingDepartment: any = this.$refs.visitingDepartment
          visitingDepartment.focus()
          return;

          // 出向先（派遣先）状況_役職（空チェック）
        } else if (inputCheck.checkNull(this.visitingPosition)) {
          this.$message.error(message.visitingPosition01);
          let visitingPosition: any = this.$refs.visitingPosition
          visitingPosition.focus()
          return;

          // 出向先郵便番号（空チェック）
        } else if (inputCheck.checkNull(this.visitingPostCode)) {
          this.$message.error(message.visitingPostCode01);
          let visitingPostCode: any = this.$refs.visitingPostCode
          visitingPostCode.focus()
          return;

          // 出向先郵便番号（桁数チェック）
        } else if (inputCheck.checkLength(this.visitingPostCode, 7)) {
          this.$message.error(message.visitingPostCode02);
          let visitingPostCode: any = this.$refs.visitingPostCode
          visitingPostCode.focus()
          return;

          // 出向先住所都道府県（空チェック）
        } else if (inputCheck.checkNull(this.visitPreCode)) {
          this.$message.error(message.visitPreCode01);
          let visitPreCode: any = this.$refs.visitPreCode
          visitPreCode.focus()
          return;

          // 出向先住所市町村（空チェック）
        } else if (this.visitOtherAddress.length < 60 && inputCheck.checkNull(this.visitAddress)) {
          this.$message.error(message.visitAddress01);
          let visitAddress: any = this.$refs.visitAddress
          visitAddress.focus()
          return;

          // 出向先住所市町村（全角チェック（漢字））
        } else if (!inputCheck.checkNull(this.visitAddress) && inputCheck.zenkakuCheck(this.visitAddress)) {
          this.$message.error(message.visitAddress02);
          let visitAddress: any = this.$refs.visitAddress
          visitAddress.focus()
          return;

          // 出向先住所以降ご住所（空チェック）
        } else if (this.visitAddress.length < 60 && inputCheck.checkNull(this.visitOtherAddress)) {
          this.$message.error(message.visitOtherAddress01);
          let visitOtherAddress: any = this.$refs.visitOtherAddress
          visitOtherAddress.focus()
          return;

          // 出向先住所以降ご住所（全角チェック（漢字））
        } else if (!inputCheck.checkNull(this.visitOtherAddress) && inputCheck.zenkakuCheck(this.visitOtherAddress)) {
          this.$message.error(message.visitOtherAddress02);
          let visitOtherAddress: any = this.$refs.visitOtherAddress
          visitOtherAddress.focus()
          return;

          // 出向先住所以降ご住所（組合せチェック）
        } else if (this.visitAddress.trim().length + this.visitOtherAddress.trim().length > 60) {
          this.$message.error(message.visitOtherAddress03);
          let visitAddress: any = this.$refs.visitAddress
          visitAddress.focus()
          return;

          // 出向先電話番号（空チェック）
        } else if (inputCheck.checkNull(this.visitTelNumber)) {
          this.$message.error(message.visitTelNumber01);
          let visitTelNumber: any = this.$refs.visitTelNumber
          visitTelNumber.focus()
          return;

          // 出向先電話番号（桁数チェック）
        } else if (inputCheck.checkLength(this.visitTelNumber, 10) && inputCheck.checkLength(this.visitTelNumber, 11)) {
          this.$message.error(message.visitTelNumber02);
          let visitTelNumber: any = this.$refs.visitTelNumber
          visitTelNumber.focus()
          return;

          // 出向先電話番号（10桁の電話番号の形式チェック）
        } else if (!inputCheck.checkNull(this.visitTelNumber) && this.visitTelNumber.trim().length == 10) {
          if (inputCheck.check10TeleNumber(this.visitTelNumber)) {
            this.$message.error(message.visitTelNumber03);
            let visitTelNumber: any = this.$refs.visitTelNumber
            visitTelNumber.focus()
            return;
          }
        }
          // 出向先電話番号（11桁の電話番号の形式チェック）
        if (!inputCheck.checkNull(this.visitTelNumber) && this.visitTelNumber.trim().length == 11) {
          if (inputCheck.check11TeleNumber(this.visitTelNumber)) {
            this.$message.error(message.visitTelNumber03);
            let visitTelNumber: any = this.$refs.visitTelNumber
            visitTelNumber.focus()
            return;
          }
        }
      }

        // 年収（空チェック）
      if (inputCheck.checkNull(this.incomeFlg)) {
        this.$message.error(message.incomeFlg01);
        let incomeFlg: any = document.getElementById("incomeFlg")
        incomeFlg.scrollIntoView();
        return

        // 税込年収（空チェック）
      } else if (inputCheck.checkNull(this.incomeYear)) {
        this.$message.error(message.incomeYear01);
        let incomeYear: any = this.$refs.incomeYear
        incomeYear.focus()
        return;

        // お仕事の内容（空チェック）
      } else if (inputCheck.checkNull(this.workContent)) {
        this.$message.error(message.workContent01);
        let workContent: any = this.$refs.workContent
        workContent.focus()
        return;

        // 社員数（空チェック）
      } else if (inputCheck.checkNull(this.workNumber)) {
        this.$message.error(message.workNumber01);
        let workNumber: any = this.$refs.workNumber
        workNumber.focus()
        return;

        // 就業形態（空チェック）
      } else if (inputCheck.checkNull(this.workType)) {
        this.$message.error(message.workType01);
        let workType: any = document.getElementById("workType")
        workType.scrollIntoView();
        return;

        // お勤め先の種類（空チェック）
      } else if (inputCheck.checkNull(this.workTypeCode)) {
        this.$message.error(message.workTypeCode01);
        let workTypeCode: any = this.$refs.workTypeCode
        workTypeCode.focus()
        return;

        // 本社所在地（空チェック）
      } else if (inputCheck.checkNull(this.comPreCode)) {
        this.$message.error(message.comPreCode01);
        let comPreCode: any = this.$refs.comPreCode
        comPreCode.focus()
        return;

        // 健康保険証の種類（空チェック）
      } else if (inputCheck.checkNull(this.healthType)) {
        this.$message.error(message.healthType01);
        let healthType: any = this.$refs.healthType
        healthType.focus()
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
          this.getVisitKanaAddress()
        }).catch(err => {
          console.log('err::', err)
          this.getVisitKanaAddress()
        })
      } else {
        this.getVisitKanaAddress()
      }
    }

    getVisitKanaAddress(){
      if (this.sendFlg == '1' && inputCheck.checkNull(this.visitKanaAddress)) {
        const params = {
          "query": this.visitingPostCode,
          "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
          "output": "json",
          "detail": "full"
        }
        apply114LoanGetAddress(params).then(res => {
          this.visitKanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
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

      let params: any = {
        'flag': '2',
        'loanType': '0',
        'loanAppSeq': this.$store.state.loanStore.loanAppSeq,
        'sendFlg': this.sendFlg,
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
        'position': this.position,
        'department': this.department,
        'workYearMonth': this.workYearMonth,
        'payment': this.payment,
        'graduateYearMonth': this.graduateYearMonth,
        'incomeFlg': this.incomeFlg,
        'incomeYear': this.incomeYear,
        'workContent': this.workContent,
        'workNumber': this.workNumber,
        'workType': this.workType,
        'workTypeCode': this.workTypeCode,
        'money': this.money,
        'comPreCode': this.comPreCode,
        'healthType': this.healthType
      }

      if (this.sendFlg == '1') {
        params['visitingName'] = this.visitingName
        params['visitingKanaName'] = this.visitingKanaName
        params['visitingDepartment'] = this.visitingDepartment
        params['visitingPosition'] = this.visitingPosition
        params['visitingPostCode'] = this.visitingPostCode
        params['visitPreCode'] = this.visitPreCode
        params['visitAddress'] = this.visitAddress
        params['visitOtherAddress'] = this.visitOtherAddress
        params['visitKanaAddress'] = this.visitKanaAddress
        params['visitTelNumber'] = this.visitTelNumber
      }

      apply114LoanTmp(params).then(() => {
        this.$store.commit('loanStore/setFlg02', true);

        if (this.$store.state.loanStore.flg01 && this.$store.state.loanStore.flg02 && this.$store.state.loanStore.flg03) {
          this.$router.push('/newCardLoan04');
        } else {
          this.$router.push('/newCardLoan03');
        }

        this.loading = false
      }).catch(err => {
        console.log(err)
        this.$router.push('/errorPage');
      })
    }

    backBtn() {
      this.$router.push('/newCardLoan01')
    }

    onInputEvent(eventName, strFlag) {
      if (strFlag) {
        this[eventName] = this[eventName].replace(/[^\d]/g, '');
      } else {
        this[eventName] = this[eventName].replace(/[^\d]/g, '') == "" ? "" : String(parseInt(this[eventName].replace(/[^\d]/g, '')) || 0);
      }
    }

    watchPostCode(postCode, bkPostCode, kanaAddress){
      if ( this[bkPostCode] != '' && this[bkPostCode] != this[postCode]) {
          this[kanaAddress] = ''
      }
      this[bkPostCode] = this[postCode]
    }

    getAddress() {

      let workPostCode: any = this.$refs.workPostCode

      if (inputCheck.checkNull(this.workPostCode)) {
        this.$message.error(message.workPostCode01);
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

    getAddress02() {

      let visitingPostCode: any = this.$refs.visitingPostCode

      if (inputCheck.checkNull(this.visitingPostCode)) {
        this.$message.error(message.visitingPostCode01);
        visitingPostCode.focus()
        return;
      } else if (inputCheck.checkLength(this.visitingPostCode, 7)) {
        this.$message.error(message.visitingPostCode02);
        visitingPostCode.focus()
        return;
      }

      const params = {
        "query": this.visitingPostCode,
        "appid": "dj0zaiZpPXNUeEh5WHNZYkFzUyZzPWNvbnN1bWVyc2VjcmV0Jng9NmQ-",
        "output": "json",
        "detail": "full"
      }
      apply114LoanGetAddress(params).then(res => {
        // const data = res.data
        for (let item of this.options) {
          for (let item2 of item.options) {
            if (item2.label == res.data.Feature[0].Property.AddressElement[0].Name) {
              this.visitPreCode = item2.value
            }
          }
        }
        this.visitAddress = String(res.data.Feature[0].Property.AddressElement[1].Name) + String(res.data.Feature[0].Property.AddressElement[2].Name)
        this.visitKanaAddress = utils.toKatakanaCase(String(res.data.Feature[0].Property.AddressElement[1].Kana) + String(res.data.Feature[0].Property.AddressElement[2].Kana))
      }).catch(err => {
        this.$message.error('検索に失敗しました。');
        console.log(err)
      })
    }

    sendFlgChange() {
      this.visitTelNumber = '';
      this.visitPreCode = '';
      this.visitAddress = '';
      this.visitOtherAddress = '';
      this.visitingPosition = '';
      this.visitingDepartment = '';
      this.visitingKanaName = '';
      this.visitingName = '';
      this.visitingPostCode = '';
    }

}
</script>

<style lang="scss">
  @media screen and (min-width: 768px) {
    .sub-label-birthday-new-card-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-address-new-card-loan02 {
      padding-top: 10px;
      padding-left: 30px;
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
    .top-button-to-left-right-line {
      border-right: 0.5px solid rgb(230, 230, 230);
      border-left: 0.5px solid rgb(230, 230, 230);
    }
    .right-button-line {
      border-right: 0.5px solid rgb(230, 230, 230);
    }
    .label-know-new-card-loan02 {
      margin-top: 15px;
      margin-left: 20px;
    }
    .label-know-input-new-card-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .label-name-new-card-loan02 {
      padding-top: 60px;
      padding-left: 20px;
    }
    .label-name-warning-new-card-loan02 {
      padding-top: 60px;
      padding-left: 20px;
    }
    .sub-label-name-input-new-card-loan02 {
      padding-top: 7px;
      padding-left: 30px;
    }
    .sub-label-name-input-width-new-card-loan02 {
      width: calc(100% - 66px);
      margin-left: 10px;
    }
    .label-postcode-new-card-loan02 {
      margin-top: 15px;
      margin-left: 20px;
    }
    .label-yearmoney-new-card-loan02 {
      margin-top: 45px;
      margin-left: 20px;
    }
    .label-postcode-warning-new-card-loan02 {
      margin-top: 25px;
      margin-left: 20px;
    }
    .sub-label-postcode-new-card-loan02 {
      padding-top: 5px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .addressBtn {
      width: 40%;
    }
    .label-address-new-card-loan02 {
      margin-top: 70px;
      margin-left: 20px;
    }
    .sub-label-name-new-card-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-name-input-new-card-loan02 {
      padding-top: 7px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .sub-label-name-input-first-new-card-loan02 {
      padding-top: 7px;
      padding-left: 30px;
      padding-right: 10px;
    }
    .sub-label-address-new-card-loan02 {
      padding-top: 10px;
      padding-left: 30px;
    }
    .label-tel-new-card-loan02 {
      margin-top: 60px;
      margin-left: 20px;
    }
    .label-tel-new-card-loan02-num {
      margin-top: 60px;
    }
    .label-job-content-new-card-loan02 {
      margin-top: 17px;
      margin-left: 20px;
    }
    .sub-label-job-content-input-new-card-loan02 {
      padding-left: 10px;
      padding-top: 5px;
      padding-right: 10px;
    }
    .sub-label-department--new-card-loan02 {
      padding-top: 30px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-wages-day-new-card-loan02 {
      padding-top: 30px;
      padding-left: 10px;
    }
    .sub-label-entry-new-card-loan02 {
      padding-top: 7px;
      padding-left: 10px;
    }
    .sub-label-joptype-new-card-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-money-new-card-loan02 {
      padding-top: 15px;
      padding-left: 30px;
    }
    .sub-label-money-input-new-card-loan02 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 15px;
    }
    .year-money-input-width {
      width: 50%;
    }
    .backBtn-new-card-loan02 {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }
    .nextBtn-new-card-loan02 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }
    .sub-label-birthday-input-new-card-loan02 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 15px;
    }
    .sub-label-birthday-input-detail-new-card-loan02 {
      padding-top: 5px;
      padding-right: 10px;
      padding-left: 15px;
    }
    .birthday-width {
      width: 80%;
    }
    .birthday-width-detail {
      width: 30%;
    }
    .month-width {
      width: 40%
    }
  }

  @media screen and (max-width: 767px) {
    .sub-label-birthday-input-new-card-loan02 {
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-birthday-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-address-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .last-input {
      margin-bottom: 20px;
    }
    .radio-font-size {
      font-size: 14px;
    }
    .title {
      padding: 10px 0 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      //font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }
    .right-button-line {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .right-button-line-num {
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .top-button-to-left-right-line {
      border-top: 0.5px solid rgb(230, 230, 230);
      border-bottom: 0.5px solid rgb(230, 230, 230);
    }
    .label-know-new-card-loan02 {
      margin-top: 15px;
      text-align: center;
    }
    .label-know-input-new-card-loan02 {
      padding-top: 20px;
      padding-left: 30px;
    }
    .label-name-new-card-loan02 {
      padding-top: 15px;
      text-align: center;
    }
    .label-name-warning-new-card-loan02 {
      padding-top: 15px;
      text-align: center;
    }
    .sub-label-name-input-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-name-input-width-new-card-loan02 {
      width: calc(100% - 56px);
      margin-left: 10px;
      /*margin-right: 10px;*/
    }
    .label-postcode-new-card-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .label-yearmoney-new-card-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .label-postcode-warning-new-card-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-postcode-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .addressBtn {
      width: 100%;
      margin-top: 15px;
    }
    .label-address-new-card-loan02 {
      margin-top: 15px;
      text-align: center;
    }
    .sub-label-name-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .sub-label-name-input-new-card-loan02 {
      padding-top: 8px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-name-input-first-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .sub-label-address-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
    }
    .label-tel-new-card-loan02 {
      margin-top: 15px;
      text-align: center;
    }
    .label-tel-new-card-loan02-num {
      margin-top: 15px;
      text-align: center;
    }
    .label-job-content-new-card-loan02 {
      margin-top: 17px;
      text-align: center;
    }
    .sub-label-job-content-input-new-card-loan02 {
      padding: 20px 10px 20px 10px;
    }
    .sub-label-department--new-card-loan02 {
      margin: 20px 10px 20px 10px;
    }
    .sub-label-wages-day-new-card-loan02 {
      margin: 20px 10px 20px 10px;
    }
    .sub-label-entry-new-card-loan02 {
      margin: 20px 10px 20px 10px;
    }
    .sub-label-joptype-new-card-loan02 {
      padding-top: 20px;
      padding-left: 30px;
      padding-bottom: 20px;
    }
    .sub-label-money-new-card-loan02 {
      padding-top: 20px;
      padding-left: 30px;
    }
    .sub-label-money-input-new-card-loan02 {
      padding-top: 5px;
      padding-left: 10px;
      padding-right: 10px;
      margin-bottom: 20px;
    }
    .year-money-input-width {
      width: calc(100% - 53px);
    }
    .backBtn-new-card-loan02 {
      width: 130px;
      background: #fc0019;
    }
    .nextBtn-new-card-loan02 {
      width: 130px;
      background: #fc0019;
      float: right;
    }
    .sub-label-birthday-input-detail-new-card-loan02 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }
    .birthday-width {
      width: 60%;
    }
    .birthday-width-detail {
      width: 40%;
    }
    .month-width {
      width: 60%
    }
  }
</style>
