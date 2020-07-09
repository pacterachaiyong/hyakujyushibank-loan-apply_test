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

        <div class="font-size-16-14px" style="margin-top: 20px; margin-bottom: 10px;border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-50px"
                    style="border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;"
                >
                    <div class="label-home-center-education-loan4 label-font-css ">お借入限度額</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-50px"
                    style="border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;"
                >
                    <div class="sub-label-home-center-education-loan4">
                        <span>{{ args.limitMoney }}</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-50px"
                    style="border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;"
                >
                    <div class="label-home-center-education-loan4 label-font-css">貸越利率</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-50px"
                    style="border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;"
                >
                    <div class="sub-label-home-center-education-loan4">
                        <span>年4～12％</span>
                    </div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-50px"
                    style="border-right:1px solid #e6e6e6;border-bottom:1px solid #e6e6e6;"
                >
                    <div class="label-home-center-education-loan4 label-font-css">期間</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-50px"
                    style="border-bottom:1px solid #e6e6e6;"
                >
                    <div class="sub-label-home-center-education-loan4-0">
                        <span>3年（自動更新）</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <div class="font-size-16-14px" style="margin-top: 10px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="4"
                    class="label-background-color label-50px"
                    style="border-right:1px solid #e6e6e6;"
                >
                    <div class="label-home-center-education-loan4 label-font-css">ダイレクトメール</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="20"
                    class="label-50px"
                >
                    <div class="sub-label-home-center-education-loan4">
                        <span>{{args.dairekutoMail}}</span>
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
                    class="nextBtn-new-card-loan04"
                    @click="changePage01Btn()"
                >修正する
                </el-button>
            </el-col>
        </el-row>

        <div style="margin-top: 8px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px right-button-line"
                >
                    <div class="label-name-double-row-education-loan04 label-font-css">お名前</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-education-loan04">
                        <span>[漢字]</span>
                        <span style="margin-left: 10px;">{{ args.lastName }}  {{ args.firstName }}</span>
                    </div>

                    <div class="sub-label-name-double-row-education-loan04">
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
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">生年月日</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>西暦</span>
                        <span style="margin-left: 10px;">{{ this.birthdayYear }} 年 {{ this.birthdayMonth }} 月 {{ this.birthdayDay }} 日 </span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">性別</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.sexKbn }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">国籍</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.country }} </span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">運転免許証番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>
                            {{ args.driverLicenseFlg }}
                        </span>
                        <span style="margin-left: 10px;"> {{ args.driverLicenseNo }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">郵便番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
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
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">ご自宅住所</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.prefecturesCode }}</span>
                            <span>{{ args.address }}</span>
                        </el-col>
                    </el-row>

                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                            class=""
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            class="mobile-sub-label-address-input-new-card-loan04 last-input"
                        >
                            <span>{{ args.otherAddress }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">お電話番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[ご自宅]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.teleNumber }}</span>
                        </el-col>
                    </el-row>

                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[携帯・PHS]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="last-input mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.phoneNumber }}</span>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">お住まい</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.enAddress }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">居住年数</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
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
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">家賃（住宅ローン）</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>毎月</span>
                        <span style="margin-left: 10px;">{{ args.rentLoan}}</span>
                        <span style="margin-left: 10px;">円</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-80-50px right-button-line"
                >
                    <div class="label-name-double-row-education-loan04 label-font-css">ご家族</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-double-row-education-loan04">
                        <span>[配偶者]</span>
                        <span style="margin-left: 10px;">{{ args.spouse }}</span>
                        <span style="margin-left: 10px;">{{ args.liveType }}</span>
                    </div>

                    <div class="sub-label-name-double-row-education-loan04">
                        <span>[扶養家族]</span>
                        <span style="margin-left: 10px;">{{ args.familyNumber }}</span>
                        <span style="margin-left: 10px;">人</span>
                    </div>
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
                    <div class="label-birthday-new-card-loan04 label-font-css">奥様（ご主人）はこのお申込みをご承知ですか</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="13"
                >
                    <div class="sub-label-masterKnowFlg-input-new-card-loan04">
                        <span>{{ args.masterKnowFlg }}</span>
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
                    class="nextBtn-new-card-loan04"
                    @click="changePage02Btn"
                >修正する
                </el-button>
            </el-col>
        </el-row>

        <div style="margin-top: 20px; border:1px solid #e6e6e6;">
            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-name-double-row-education-loan04 label-font-css">お勤め先名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                    class="label-100px"
                >
                    <div class="sub-label-name-double-row-education-loan04">
                        <span class="sub-label-font-css">[漢字]</span>
                        <span style="margin-left: 10px">{{ args.companyName }} </span>
                    </div>
                    <div class="sub-label-name-double-row-education-loan04 last-input">
                        <span class="sub-label-font-css">[カナ]</span>
                        <span style="margin-left: 10px">{{ args.companyKanaName }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">お勤め先郵便番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-single-row-education-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="24"
                        >
                            <span>〒</span>
                            <span style="margin-left: 10px">{{ args.workPostCode }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">お勤め先所在地</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.workPrefecturesCode }}</span>
                            <span>{{ args.workAddress }}</span>
                        </el-col>
                    </el-row>

                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                            class=""
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            class="mobile-sub-label-address-input-new-card-loan04 last-input"
                        >
                            <span>{{ args.workOtherAddress }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">お勤め先電話番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[代表電話]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.workTeleNumber }}</span>
                        </el-col>
                    </el-row>

                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[所属部直通]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="last-input mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.workPhoneNumber }}</span>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-job-content-new-card-loan04 label-font-css">事業内容</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.jobType }} </span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-job-content-new-card-loan04 label-font-css">役職</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span> {{ args.position }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">所属部課名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-department--new-card-loan04">
                        <span>{{ args.department }} </span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px top-button-to-left-right-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">入社年月</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                    class="label-100px"
                >
                    <div class="sub-label-entry-new-card-loan04">
                        <span class="sub-label-font-css">西暦</span>
                        <span style="margin-left: 5px;">{{ workYearMonthYear }}</span>
                        <span style="margin-left: 5px;" class="sub-label-font-css">年</span>
                    </div>
                    <div class="sub-label-entry-new-card-loan04">
                        <span style="margin-left: 5px;">{{ workYearMonthMonth }}</span>
                        <span style="margin-left: 5px;" class="sub-label-font-css">月入社</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">給料日</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                    class="label-100px"
                >
                    <div class="sub-label-wages-day-new-card-loan04">
                        <span class="sub-label-font-css">毎月</span>
                        <span style="margin-left: 5px;">{{ args.payment }}</span>
                        <span style="margin-left: 5px;" class="sub-label-font-css">日</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px top-button-to-left-right-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">最終学歴卒業年月</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                    class="label-100px"
                >
                    <div class="sub-label-entry-new-card-loan04">
                        <span class="sub-label-font-css">西暦</span>
                        <span style="margin-left: 5px;">{{ graduateYearMonthYear }}</span>
                        <span style="margin-left: 5px;" class="sub-label-font-css">年</span>
                    </div>
                    <div class="sub-label-entry-new-card-loan04">
                        <span style="margin-left: 5px;">{{ graduateYearMonthMonth }}</span>
                        <span style="margin-left: 5px;">月卒業</span>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="args.sendFlg==='1'" class="hr-style"/>
            <el-row v-show="args.sendFlg==='1'">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-name-double-row-education-loan04 label-font-css">出向先会社名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                    class="label-100px"
                >
                    <div class="sub-label-name-double-row-education-loan04">
                        <span class="sub-label-font-css">[漢字]</span>
                        <span style="margin-left: 10px">{{ args.visitingName }} </span>
                    </div>
                    <div class="sub-label-name-double-row-education-loan04 last-input">
                        <span class="sub-label-font-css">[カナ]</span>
                        <span style="margin-left: 10px">{{ args.visitingKanaName }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="args.sendFlg==='1'" class="hr-style"/>

            <el-row v-show="args.sendFlg==='1'">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-job-content-new-card-loan04 label-font-css">出向先所属部課名</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.visitingDepartment }} </span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-job-content-new-card-loan04 label-font-css">役職</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span> {{ args.visitingPosition }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr v-show="args.sendFlg==='1'" class="hr-style"/>

            <el-row v-show="args.sendFlg==='1'">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">出向先郵便番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-single-row-education-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="24"
                        >
                            <span>〒</span>
                            <span style="margin-left: 10px">{{ args.visitingPostCode }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>


            <hr v-show="args.sendFlg==='1'" class="hr-style"/>

            <el-row v-show="args.sendFlg==='1'">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-100-50px right-button-line"
                >
                    <div class="label-tel-new-card-loan04 label-font-css">出向先所在地</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                        >
                            <span class="sub-label-font-css">[都道府県]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="19"
                            class="mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.visitPreCode }}</span>
                            <span>{{ args.visitAddress }}</span>
                        </el-col>
                    </el-row>

                    <el-row
                        class="sub-label-name-new-card-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="5"
                            class=""
                        >
                            <span class="sub-label-font-css">[以降ご住所]</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="18"
                            class="mobile-sub-label-address-input-new-card-loan04 last-input"
                        >
                            <span>{{ args.visitOtherAddress }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>


            <hr v-show="args.sendFlg==='1'" class="hr-style"/>

            <el-row v-show="args.sendFlg==='1'">
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">出向先電話番号</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <el-row
                        class="sub-label-name-single-row-education-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="24"
                        >
                            <span style="margin-left: 10px">{{ args.visitTelNumber }}</span>
                        </el-col>
                    </el-row>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">年収</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                    class="label-normal-58"
                >
                    <el-row
                        class="sub-label-name-single-row-education-loan04"
                    >
                        <el-col
                            :xs="24"
                            :sm="8"
                        >
                            <span>{{ args.incomeFlg }}</span>
                        </el-col>
                        <el-col
                            :xs="24"
                            :sm="16"
                            class="last-input mobile-sub-label-address-input-new-card-loan04"
                        >
                            <span>{{ args.incomeYear }}</span>
                            <span style="margin-left: 5px;" class="sub-label-font-css">万円</span>
                        </el-col>
                    </el-row>

                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">お仕事の内容</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.workContent }}</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">社員数</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.workNumber }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">就業形態</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-joptype-new-card-loan04">
                        <span>{{ args.workType }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">お勤め先の種類</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                    class="label-normal-58"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.workTypeCode }}</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">資本金</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.money }}</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style"/>

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">本社所在地</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.comPreCode }}</span>
                    </div>
                </el-col>

                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px top-button-to-left-right-line"
                >
                    <div class="label-postcode-new-card-loan04 label-font-css">健康保険証の種類</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="5"
                >
                    <div class="sub-label-job-content-input-new-card-loan04">
                        <span>{{ args.healthType }}</span>
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
                <div style="color: #6e6e6e">■ご資金計画について</div>
            </el-col>
            <el-col
                :xs="8"
                :sm="4"
            >
                <el-button
                    type="danger"
                    class="nextBtn-new-card-loan04"
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
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">ご利用目的</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.purposeFlg }}</span>&nbsp;&nbsp;&nbsp;&nbsp;<span v-show="args.purposeFlg == 'その他'">{{ args.otherPurpose }}</span>
                    </div>
                </el-col>
            </el-row>
            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">無担保ローンのお借入</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.getFlg }}</span>
                        <span v-show="args.getFlg==='借入あり'">&nbsp;&nbsp;&nbsp;{{ args.getCount }} </span>
                        <span v-show="args.getFlg==='借入あり'">&nbsp;件</span>
                        <span v-show="args.getFlg==='借入あり'">&nbsp;{{ args.getMoney}}</span>
                        <span v-show="args.getFlg==='借入あり'">&nbsp;万円</span>
                    </div>
                </el-col>
            </el-row>

            <hr class="hr-style">

            <el-row>
                <el-col
                    :xs="24"
                    :sm="7"
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">お取引希望店</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.hopeStoreNmae }}</span>
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
                <div style="color: #6e6e6e">■現在のお取引状況について</div>
            </el-col>
            <el-col
                :xs="8"
                :sm="4"
            >
                <el-button
                    type="danger"
                    class="nextBtn-new-card-loan04"
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
                    class="label-background-color label-50px right-button-line"
                >
                    <div class="label-name-single-row-education-loan04 label-font-css">当行とのお取引</div>
                </el-col>
                <el-col
                    :xs="24"
                    :sm="17"
                >
                    <div class="sub-label-name-single-row-education-loan04">
                        <span>{{ args.bankAccount }}</span>
                    </div>
                </el-col>
            </el-row>
        </div>

        <!--      TODO 印刷button-->
        <div style="margin-top: 40px;margin-bottom: 80px;text-align: center">
            <el-row>
                <el-col :xs="24" :sm="24">
                    <el-button
                        style="float: unset"
                        type="danger"
                        class="nextBtn-new-card-loan04"
                        @click="nextBtn()"
                    >送信する
                    </el-button>
                </el-col>
            </el-row>
        </div>
    </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import {apply114Loan, apply114LoanGetDetail} from '@/api/loan114';
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

    workYearMonthYear: string = ''
    workYearMonthMonth: string = ''

    graduateYearMonthYear: string = ''
    graduateYearMonthMonth: string = ''

    dateYear: string = new Date().getFullYear().toString()
    dateMonth: string = (new Date().getMonth() + 1).toString()
    dateDay: string = new Date().getDate().toString()

    moneyOptions: any = constants.limitMoneyList

    homeOptions: any = constants.enAddressList_new

    familyOptions: any = constants.spouseList

    jobTypeOtions: any = constants.jobTypeList

    positionOtions: any = constants.positionList_new

    jobContentOptions: any = constants.workContentList

    peopleNumberOptions: any = constants.workNumberList

    companyTypeOptions: any = constants.workTypeCodeList

    companyRegisterMoneyOptions: any = constants.moneyList

    insuranceTypeOptions: any = constants.healthTypeList

    usePurposeOptions: any = constants.purposeFlgList

    options: any = constants.prefecturesCodeList

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
          this.argsForSend.trade = this.$store.state.loanStore.trade
          this.argsForSend.loanTypeName = 'ニューカードローン'
          const data = res.data.resultData
          for (let item of this.moneyOptions) {
            if (item.value == data.limitMoney) {
              this.args.limitMoney = item.label
            }
          }
          this.args.dairekutoMail = data.dairekutoMail=='0'?'金融商品等のダイレクトメール等は希望しません。':'金融商品等のダイレクトメール等は希望します。'
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
          } else if (data.country == '2') {
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

          for (let item of this.homeOptions) {
            if (item.value == data.enAddress) {
              this.args.enAddress = item.label
            }
          }

          this.args.liveYear = data.liveYear
          this.args.liveMonth = data.liveMonth
          this.args.rentLoan = utils.moneyFormat(data.rentLoan)
          for (let item of this.familyOptions) {
            if (item.value == data.spouse) {
              this.args.spouse = item.label
            }
          }
          if (data.liveType == '1') {
            this.args.liveType = '同居'
          } else if (data.liveType == '2') {
            this.args.liveType = '別居'
          }
          this.args.familyNumber = data.familyNumber

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
          this.args.workTeleNumber = utils.nullFormat(data.workTeleNumber)
          this.args.workPhoneNumber =  utils.nullFormat(data.workPhoneNumber)
          for (let item of this.jobTypeOtions) {
            if (item.value == data.jobType) {
              this.args.jobType = item.label
            }
          }
          for (let item of this.positionOtions) {
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
          this.args.visitingDepartment = utils.nullFormat(data.visitingDepartment)
          for (let item of this.positionOtions) {
            if (item.value == data.visitingPosition) {
              this.args.visitingPosition = item.label
            }
          }
          this.args.visitingPostCode = data.visitingPostCode
          for (let item of this.options) {
            for (let item2 of item.options) {
              if (item2.value == data.visitPreCode) {
                this.args.visitPreCode = item2.label
              }
            }
          }
          this.args.visitAddress = utils.nullFormat(data.visitAddress)
          this.args.visitOtherAddress = utils.nullFormat(data.visitOtherAddress)
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
          for (let item of this.companyTypeOptions) {
            if (item.value == data.workTypeCode) {
              this.args.workTypeCode = item.label
            }
          }
          for (let item of this.companyRegisterMoneyOptions) {
            if (item.value == data.money) {
              this.args.money = item.label
              break;
            }else{
              this.args.money = "-"
            }
          }
          for (let item of this.options) {
            for (let item2 of item.options) {
              if (item2.value == data.comPreCode) {
                this.args.comPreCode = item2.label
              }
            }
          }
          for (let item of this.insuranceTypeOptions) {
            if (item.value == data.healthType) {
              this.args.healthType = item.label
            }
          }
          for (let item of this.usePurposeOptions) {
            if (item.value == data.purposeFlg) {
              this.args.purposeFlg = item.label
            }
          }
          this.args.otherPurpose = data.otherPurpose
          if (data.getFlg == 'A') {
            this.args.getFlg = '借入なし'
          } else if (data.getFlg == 'B') {
            this.args.getFlg = '借入あり'
          }
          this.args.getCount = data.getCount
          this.args.getMoney = utils.moneyFormat(data.getMoney)
          this.args.hopeStoreNmae = data.hopeStoreNmae

          if (data.bankAccount == '0') {
            this.args.bankAccount = 'なし'
          } else if (data.bankAccount == '1') {
            this.args.bankAccount = 'あり'
          } else {
            this.args.bankAccount = '-'
          }

          this.args.sendFlg = data.sendFlg

          this.birthdayYear = data.birthday.slice(0, 4)
          this.birthdayMonth = data.birthday.slice(4, 6)
          this.birthdayDay = data.birthday.slice(6)
          this.workYearMonthYear = data.workYearMonth.slice(0, 4)
          this.workYearMonthMonth = data.workYearMonth.slice(4, 6)
          this.graduateYearMonthYear = data.graduateYearMonth.slice(0, 4)
          this.graduateYearMonthMonth = data.graduateYearMonth.slice(4, 6)
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.$router.push('/errorPage');
        })
      }
    }

    init() {

      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage')
      }
      const loanType = decodeURI(window.location.search.split('&')[0].split('=')[1])
      const trade = decodeURI(window.location.search.split('&')[1].split('=')[1])
      if (loanType != this.$store.state.loanStore.loanType || trade != this.$store.state.loanStore.trade) {
        this.$router.push('/errorPage')
      }
    }

    nextBtn() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.loading = true
        apply114Loan(this.argsForSend).then(res => {
          if (res.data.resultStatus == 'NG') {
            this.$router.push('/errorPage');
          } else {
            this.$store.commit('loanStore/resetData');
            this.$router.push('/newCardLoan05');
          }
          this.loading = false
        }).catch(err => {
          console.log(err)
          this.loading = false
          this.$router.push('/errorPage');
        })
      }
    }

    changePage01Btn() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/newCardLoan01');
      }
    }

    changePage02Btn() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/newCardLoan02');
      }
    }

    changePage03Btn() {
      if (this.$store.state.loanStore.loanType != 'ニューカードローン' || !this.$store.state.loanStore.agreeCheck
        || !this.$store.state.loanStore.flg01BeforePage || !this.$store.state.loanStore.flg01 || !this.$store.state.loanStore.flg02 || !this.$store.state.loanStore.flg03) {
        this.$router.push('/errorPage');
      } else {
        this.$router.push('/newCardLoan03');
      }
    }
}
</script>

<style scoped>
  .label-home-center-education-loan4 {
    margin-top: 15px;
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    .footer {
      margin-top: 15px;
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
      padding-top: 15px;
      padding-left: 50px;
    }

    .sub-label-home-center-education-loan4-0 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .label-80-50px {
      height: 102px;
    }

    .label-name-double-row-education-loan04 {
      margin-top: 43px;
      margin-left: 50px;
    }

    .label-name-single-row-education-loan04 {
      margin-top: 18px;
      margin-left: 50px;
    }

    .sub-label-name-double-row-education-loan04 {
      padding-top: 13px;
      height: 35px;
      padding-left: 50px;
    }

    .sub-label-name-single-row-education-loan04 {
      padding-top: 18px;
      padding-left: 50px;
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
      border-right: 1px solid rgb(230, 230, 230);
      border-left: 1px solid rgb(230, 230, 230);
    }

    .right-button-line {
      border-right: 1px solid rgb(230, 230, 230);
    }

    .label-name-new-card-loan04 {
      padding-top: 40px;
      padding-left: 50px;
    }

    .label-postcode-new-card-loan04 {
      margin-top: 17px;
      margin-left: 50px;
    }

    .sub-label-postcode-new-card-loan04 {
      padding-top: 15px;
      padding-left: 30px;
      padding-right: 10px;
    }

    .sub-label-name-new-card-loan04 {
      padding-top: 20px;
      padding-left: 50px;
    }

    .label-tel-new-card-loan04 {
      margin-top: 40px;
      margin-left: 50px;
    }

    .label-job-content-new-card-loan04 {
      margin-top: 17px;
      margin-left: 50px;
    }

    .sub-label-job-content-input-new-card-loan04 {
      padding-left: 50px;
      padding-top: 15px;
    }

    .sub-label-department--new-card-loan04 {
      padding-top: 40px;
      padding-left: 50px;
      padding-right: 10px;
    }

    .sub-label-wages-day-new-card-loan04 {
      padding-top: 40px;
      padding-left: 50px;
    }

    .sub-label-entry-new-card-loan04 {
      padding-top: 20px;
      padding-left: 50px;
    }

    .sub-label-joptype-new-card-loan04 {
      padding-top: 15px;
      padding-left: 50px;
    }

    .sub-label-money-new-card-loan04 {
      padding-top: 15px;
      padding-left: 30px;
    }

    .backBtn-new-card-loan04 {
      width: 200px;
      background: #fc0019;
      height: 50px;
    }

    .nextBtn-new-card-loan04 {
      width: 200px;
      background: #fc0019;
      height: 50px;
      float: right;
    }

    .label-birthday-new-card-loan04 {
      margin-top: 15px;
      margin-left: 50px;
    }

    .sub-label-masterKnowFlg-input-new-card-loan04 {
      padding: 15px 10px 0 30px;
    }
  }

  @media screen and (max-width: 767px) {
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

    .sub-label-home-center-education-loan4-0 {
      padding-top: 20px;
      padding-left: 20px;
    }

    .label-80-50px {
      height: 50px;
    }

    .label-name-double-row-education-loan04 {
      margin-top: 17px;
      text-align: center;
    }

    .label-name-single-row-education-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-name-double-row-education-loan04 {
      padding-top: 15px;
      padding-left: 20px;
      padding-bottom: 15px;
      height: 40px;
    }

    .sub-label-name-single-row-education-loan04 {
      padding-top: 20px;
      padding-left: 20px;
      padding-bottom: 20px;
    }

    .last-input {
      margin-bottom: 20px;
    }

    .title {
      padding: 10px 0 10px 10px;
      margin-top: 20px;
      font-size: 16px;
      font-weight: bold;
      color: #272727;
      background: #f7f7f7;
    }

    .right-button-line {
      border-bottom: 1px solid rgb(230, 230, 230);
    }

    .top-button-to-left-right-line {
      border-top: 1px solid rgb(230, 230, 230);
      border-bottom: 1px solid rgb(230, 230, 230);
    }

    .label-name-new-card-loan04 {
      padding-top: 15px;
      text-align: center;
    }

    .label-postcode-new-card-loan04 {
      margin-top: 17px;
      text-align: center;
    }

    .sub-label-postcode-new-card-loan04 {
      padding-top: 20px;
      padding-left: 10px;
      padding-right: 10px;
    }

    .sub-label-name-new-card-loan04 {
      padding-top: 20px;
      padding-left: 10px;
    }

    .label-tel-new-card-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .label-job-content-new-card-loan04 {
      margin-top: 17px;
      text-align: center;
    }

    .sub-label-job-content-input-new-card-loan04 {
      padding: 20px 10px 20px 10px;
    }

    .sub-label-department--new-card-loan04 {
      margin: 20px 10px 20px 10px;
    }

    .sub-label-wages-day-new-card-loan04 {
      margin: 20px 10px 20px 10px;
    }

    .sub-label-entry-new-card-loan04 {
      margin: 20px 10px 20px 10px;
    }

    .sub-label-joptype-new-card-loan04 {
      padding-top: 20px;
      padding-left: 10px;
      padding-bottom: 20px;
    }

    .sub-label-money-new-card-loan04 {
      padding-top: 20px;
      padding-left: 10px;
    }

    .backBtn-new-card-loan04 {
      width: 130px;
      background: #fc0019;
    }

    .nextBtn-new-card-loan04 {
      width: 130px;
      background: #fc0019;
      float: right;
    }

    .mobile-sub-label-address-input-new-card-loan04 {
      padding-top: 8px;
    }

    .label-birthday-new-card-loan04 {
      margin-top: 15px;
      text-align: center;
    }

    .sub-label-masterKnowFlg-input-new-card-loan04 {
      padding: 20px 10px 20px 30px;
    }
  }
</style>
